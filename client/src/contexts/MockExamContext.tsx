/**
 * MockExamContext — Tier 6 Full Mock Exam State Management
 * Separate from ExamContext (Tier 7) to avoid shared state
 * Features: timed exam, adaptive selection, domain tracking, pause/resume
 */
import React, { createContext, useContext, useReducer, useCallback, useEffect, useRef } from 'react';
import { allQuestions } from '@/data/allQuestions';
import { domainInfo } from '@/data/allQuestions';

export type ExamMode = 'standard' | 'timed' | 'adaptive';

export interface MockExamSettings {
  mode: ExamMode;
  questionCount: number;
  timeLimitMinutes: number; // 0 = untimed
  shuffleQuestions: boolean;
  focusDomains: string[]; // empty = all domains
}

export interface MockExamState {
  settings: MockExamSettings;
  questions: typeof allQuestions;
  currentIndex: number;
  answers: Record<number, string>;
  revealed: Record<number, boolean>;
  flagged: Record<number, boolean>;
  score: number;
  started: boolean;
  paused: boolean;
  complete: boolean;
  timeRemainingSeconds: number;
  startedAt: number | null;
  completedAt: number | null;
}

export interface DomainResult {
  domain: string;
  name: string;
  color: string;
  total: number;
  correct: number;
  pct: number;
}

export interface PhaseResult {
  phase: string;
  label: string;
  total: number;
  correct: number;
  pct: number;
}

interface MockExamContextType {
  state: MockExamState;
  currentQuestion: typeof allQuestions[0] | null;
  startExam: (settings: MockExamSettings) => void;
  submitAnswer: (questionId: number, answer: string) => void;
  revealAnswer: (questionId: number) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  goToQuestion: (index: number) => void;
  toggleFlag: (questionId: number) => void;
  pauseExam: () => void;
  resumeExam: () => void;
  finishExam: () => void;
  restartExam: () => void;
  getDomainResults: () => DomainResult[];
  getPhaseResults: () => PhaseResult[];
  getBloomsResults: () => { level: string; total: number; correct: number; pct: number }[];
  getMissedQuestions: () => typeof allQuestions;
  getFlaggedQuestions: () => typeof allQuestions;
}

type MockExamAction =
  | { type: 'START'; questions: typeof allQuestions; settings: MockExamSettings }
  | { type: 'SUBMIT_ANSWER'; questionId: number; answer: string }
  | { type: 'REVEAL'; questionId: number }
  | { type: 'NEXT' }
  | { type: 'PREV' }
  | { type: 'GO_TO'; index: number }
  | { type: 'TOGGLE_FLAG'; questionId: number }
  | { type: 'PAUSE' }
  | { type: 'RESUME' }
  | { type: 'FINISH' }
  | { type: 'RESTART' }
  | { type: 'TICK' };

const defaultSettings: MockExamSettings = {
  mode: 'timed',
  questionCount: 175,
  timeLimitMinutes: 240,
  shuffleQuestions: false,
  focusDomains: [],
};

const initialState: MockExamState = {
  settings: defaultSettings,
  questions: [],
  currentIndex: 0,
  answers: {},
  revealed: {},
  flagged: {},
  score: 0,
  started: false,
  paused: false,
  complete: false,
  timeRemainingSeconds: 240 * 60,
  startedAt: null,
  completedAt: null,
};

function selectQuestions(settings: MockExamSettings): typeof allQuestions {
  let pool = [...allQuestions];
  if (settings.focusDomains.length > 0) {
    pool = pool.filter(q => settings.focusDomains.includes(q.domain));
  }
  if (settings.shuffleQuestions) {
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
  }
  return pool.slice(0, settings.questionCount);
}

function mockExamReducer(state: MockExamState, action: MockExamAction): MockExamState {
  switch (action.type) {
    case 'START':
      return {
        ...initialState,
        settings: action.settings,
        questions: action.questions,
        started: true,
        startedAt: Date.now(),
        timeRemainingSeconds: action.settings.timeLimitMinutes > 0
          ? action.settings.timeLimitMinutes * 60
          : Infinity,
      };
    case 'SUBMIT_ANSWER': {
      const q = state.questions.find(q => q.id === action.questionId);
      if (!q) return state;
      const isCorrect = action.answer === q.correctAnswer;
      const wasCorrect = state.answers[action.questionId] === q.correctAnswer;
      const wasAnswered = action.questionId in state.answers;
      let delta = 0;
      if (!wasAnswered && isCorrect) delta = 1;
      else if (wasAnswered && wasCorrect && !isCorrect) delta = -1;
      else if (wasAnswered && !wasCorrect && isCorrect) delta = 1;
      return {
        ...state,
        answers: { ...state.answers, [action.questionId]: action.answer },
        score: state.score + delta,
      };
    }
    case 'REVEAL':
      return { ...state, revealed: { ...state.revealed, [action.questionId]: true } };
    case 'NEXT':
      return { ...state, currentIndex: Math.min(state.currentIndex + 1, state.questions.length - 1) };
    case 'PREV':
      return { ...state, currentIndex: Math.max(state.currentIndex - 1, 0) };
    case 'GO_TO':
      return { ...state, currentIndex: Math.max(0, Math.min(action.index, state.questions.length - 1)) };
    case 'TOGGLE_FLAG':
      return { ...state, flagged: { ...state.flagged, [action.questionId]: !state.flagged[action.questionId] } };
    case 'PAUSE':
      return { ...state, paused: true };
    case 'RESUME':
      return { ...state, paused: false };
    case 'FINISH':
      return { ...state, complete: true, completedAt: Date.now() };
    case 'RESTART':
      return { ...initialState };
    case 'TICK':
      if (state.paused || !state.started || state.complete) return state;
      if (state.settings.timeLimitMinutes === 0) return state;
      const newTime = state.timeRemainingSeconds - 1;
      if (newTime <= 0) return { ...state, timeRemainingSeconds: 0, complete: true, completedAt: Date.now() };
      return { ...state, timeRemainingSeconds: newTime };
    default:
      return state;
  }
}

const MockExamContext = createContext<MockExamContextType | null>(null);

export function MockExamProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(mockExamReducer, initialState);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Timer tick
  useEffect(() => {
    if (state.started && !state.paused && !state.complete && state.settings.timeLimitMinutes > 0) {
      timerRef.current = setInterval(() => dispatch({ type: 'TICK' }), 1000);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [state.started, state.paused, state.complete, state.settings.timeLimitMinutes]);

  const startExam = useCallback((settings: MockExamSettings) => {
    const questions = selectQuestions(settings);
    dispatch({ type: 'START', questions, settings });
  }, []);

  const submitAnswer = useCallback((questionId: number, answer: string) => {
    dispatch({ type: 'SUBMIT_ANSWER', questionId, answer });
  }, []);

  const revealAnswer = useCallback((questionId: number) => {
    dispatch({ type: 'REVEAL', questionId });
  }, []);

  const nextQuestion = useCallback(() => dispatch({ type: 'NEXT' }), []);
  const prevQuestion = useCallback(() => dispatch({ type: 'PREV' }), []);
  const goToQuestion = useCallback((index: number) => dispatch({ type: 'GO_TO', index }), []);
  const toggleFlag = useCallback((questionId: number) => dispatch({ type: 'TOGGLE_FLAG', questionId }), []);
  const pauseExam = useCallback(() => dispatch({ type: 'PAUSE' }), []);
  const resumeExam = useCallback(() => dispatch({ type: 'RESUME' }), []);
  const finishExam = useCallback(() => dispatch({ type: 'FINISH' }), []);
  const restartExam = useCallback(() => dispatch({ type: 'RESTART' }), []);

  const currentQuestion = state.questions[state.currentIndex] ?? null;

  const getDomainResults = useCallback((): DomainResult[] => {
    return Object.entries(domainInfo).map(([domain, info]) => {
      const qs = state.questions.filter(q => q.domain === domain);
      const correct = qs.filter(q => state.answers[q.id] === q.correctAnswer).length;
      return {
        domain,
        name: info.name,
        color: info.color,
        total: qs.length,
        correct,
        pct: qs.length > 0 ? Math.round((correct / qs.length) * 100) : 0,
      };
    }).filter(r => r.total > 0);
  }, [state.questions, state.answers]);

  const getPhaseResults = useCallback((): PhaseResult[] => {
    const phaseLabels: Record<string, string> = {
      assessment: 'Phase 1: Referral & Assessment',
      fba: 'Phase 2: Functional Behavior Assessment',
      'treatment-planning': 'Phase 3: Treatment Planning',
      implementation: 'Phase 4: Implementation & Supervision',
      evaluation: 'Phase 5: Evaluation & Discharge',
    };
    const phases = ['assessment', 'fba', 'treatment-planning', 'implementation', 'evaluation'];
    return phases.map(phase => {
      const qs = state.questions.filter(q => q.phase === phase);
      const correct = qs.filter(q => state.answers[q.id] === q.correctAnswer).length;
      return {
        phase,
        label: phaseLabels[phase] || phase,
        total: qs.length,
        correct,
        pct: qs.length > 0 ? Math.round((correct / qs.length) * 100) : 0,
      };
    }).filter(r => r.total > 0);
  }, [state.questions, state.answers]);

  const getBloomsResults = useCallback(() => {
    const levels = ['knowledge', 'comprehension', 'application', 'analysis', 'synthesis', 'evaluation'];
    return levels.map(level => {
      const qs = state.questions.filter(q => q.bloomsLevel === level);
      const correct = qs.filter(q => state.answers[q.id] === q.correctAnswer).length;
      return { level, total: qs.length, correct, pct: qs.length > 0 ? Math.round((correct / qs.length) * 100) : 0 };
    }).filter(r => r.total > 0);
  }, [state.questions, state.answers]);

  const getMissedQuestions = useCallback(() => {
    return state.questions.filter(q => state.answers[q.id] && state.answers[q.id] !== q.correctAnswer);
  }, [state.questions, state.answers]);

  const getFlaggedQuestions = useCallback(() => {
    return state.questions.filter(q => state.flagged[q.id]);
  }, [state.questions, state.flagged]);

  return (
    <MockExamContext.Provider value={{
      state, currentQuestion,
      startExam, submitAnswer, revealAnswer,
      nextQuestion, prevQuestion, goToQuestion,
      toggleFlag, pauseExam, resumeExam,
      finishExam, restartExam,
      getDomainResults, getPhaseResults, getBloomsResults,
      getMissedQuestions, getFlaggedQuestions,
    }}>
      {children}
    </MockExamContext.Provider>
  );
}

export function useMockExam() {
  const ctx = useContext(MockExamContext);
  if (!ctx) throw new Error('useMockExam must be used within MockExamProvider');
  return ctx;
}
