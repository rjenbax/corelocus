/**
 * MockExamContext — Tier 6 Full Mock Exam State Management
 * Separate from ExamContext (Tier 7) to avoid shared state
 * Features: timed exam, adaptive selection, domain tracking, pause/resume
 * Persistence: in-progress exam state saved to localStorage on every answer/navigation
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
  hasInProgressExam: boolean;
  resumeInProgressExam: () => void;
  discardInProgressExam: () => void;
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
  | { type: 'TICK' }
  | { type: 'RESTORE'; state: MockExamState };

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

// localStorage key for in-progress exam state
const IN_PROGRESS_KEY = 'corelocus_exam_inprogress_v1';

// Official BCBA 6th Edition domain weights for a 175-question exam
const BCBA_DOMAIN_WEIGHTS: Record<string, number> = {
  A: 8, B: 24, C: 21, D: 13, E: 22, F: 23, G: 25, H: 20, I: 19,
};

function selectQuestions(settings: MockExamSettings, questionPool: typeof allQuestions): typeof allQuestions {
  // If focusing on specific domains (practice mode), just filter and shuffle
  if (settings.focusDomains.length > 0) {
    let pool = questionPool.filter(q => settings.focusDomains.includes(q.domain));
    if (settings.shuffleQuestions) {
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
    }
    return pool.slice(0, settings.questionCount);
  }

  // For full mock exams: select proportionally by BCBA domain weights
  const selected: typeof allQuestions = [];
  const domains = Object.keys(BCBA_DOMAIN_WEIGHTS);
  const totalWeight = Object.values(BCBA_DOMAIN_WEIGHTS).reduce((a, b) => a + b, 0);

  for (const domain of domains) {
    const domainPool = questionPool.filter(q => q.domain === domain);
    if (domainPool.length === 0) continue;

    // Calculate how many questions from this domain
    const weight = BCBA_DOMAIN_WEIGHTS[domain] || 0;
    const count = settings.questionCount === 175
      ? weight  // Use exact BCBA weights for full exam
      : Math.round((weight / totalWeight) * settings.questionCount);

    // Shuffle domain pool
    const shuffled = [...domainPool].sort(() => Math.random() - 0.5);
    selected.push(...shuffled.slice(0, count));
  }

  // Shuffle the final selection so domains are interleaved
  if (settings.shuffleQuestions) {
    for (let i = selected.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [selected[i], selected[j]] = [selected[j], selected[i]];
    }
  }

  return selected;
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
    case 'RESTORE':
      return action.state;
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

function loadInProgressState(): MockExamState | null {
  try {
    const raw = localStorage.getItem(IN_PROGRESS_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as MockExamState;
    // Only restore if it's an active, non-complete exam
    if (!parsed.started || parsed.complete || !parsed.questions?.length) return null;
    return parsed;
  } catch {
    return null;
  }
}

function saveInProgressState(state: MockExamState) {
  try {
    if (state.started && !state.complete && state.questions.length > 0) {
      localStorage.setItem(IN_PROGRESS_KEY, JSON.stringify(state));
    } else {
      localStorage.removeItem(IN_PROGRESS_KEY);
    }
  } catch {
    // localStorage quota exceeded or unavailable — silently ignore
  }
}

const MockExamContext = createContext<MockExamContextType | null>(null);

export function MockExamProvider({ children, questionPool }: { children: React.ReactNode; questionPool?: typeof allQuestions }) {
  const activePool = questionPool ?? allQuestions;
  const [state, dispatch] = useReducer(mockExamReducer, initialState);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Check if there's a saved in-progress exam on mount
  const [hasInProgressExam, setHasInProgressExam] = React.useState(() => {
    const saved = loadInProgressState();
    return saved !== null;
  });

  // Persist state to localStorage whenever it changes (but not on every tick to avoid performance issues)
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (!state.started) return;
    // Debounce saves to avoid writing on every timer tick (save at most every 5s)
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      saveInProgressState(state);
    }, 5000);
    return () => { if (saveTimerRef.current) clearTimeout(saveTimerRef.current); };
  }, [state.currentIndex, state.answers, state.flagged, state.complete, state.started]);

  // Save immediately on answer submission and completion (not just debounced)
  useEffect(() => {
    if (state.started) {
      saveInProgressState(state);
      if (state.complete) {
        setHasInProgressExam(false);
      }
    }
  }, [state.answers, state.complete]);

  // Timer tick
  useEffect(() => {
    if (state.started && !state.paused && !state.complete && state.settings.timeLimitMinutes > 0) {
      timerRef.current = setInterval(() => dispatch({ type: 'TICK' }), 1000);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [state.started, state.paused, state.complete, state.settings.timeLimitMinutes]);

  const startExam = useCallback((settings: MockExamSettings) => {
    const questions = selectQuestions(settings, activePool);
    dispatch({ type: 'START', questions, settings });
    setHasInProgressExam(false);
  }, [activePool]);

  const resumeInProgressExam = useCallback(() => {
    const saved = loadInProgressState();
    if (saved) {
      dispatch({ type: 'RESTORE', state: saved });
      setHasInProgressExam(false);
    }
  }, []);

  const discardInProgressExam = useCallback(() => {
    localStorage.removeItem(IN_PROGRESS_KEY);
    setHasInProgressExam(false);
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
  const restartExam = useCallback(() => {
    dispatch({ type: 'RESTART' });
    localStorage.removeItem(IN_PROGRESS_KEY);
    setHasInProgressExam(false);
  }, []);

  const currentQuestion = state.questions[state.currentIndex] ?? null;

  const getDomainResults = useCallback((): DomainResult[] => {
    const activeDomains = Array.from(new Set(activePool.map((q: any) => q.domain)));
    return Object.entries(domainInfo).filter(([d]) => activeDomains.includes(d)).map(([domain, info]) => {
      const qs = state.questions.filter(q => q.domain === domain);
      const correct = qs.filter(q => state.answers[q.id as number] === q.correctAnswer).length;
      return {
        domain,
        name: info.name,
        color: info.color,
        total: qs.length,
        correct,
        pct: qs.length > 0 ? Math.round((correct / qs.length) * 100) : 0,
      };
    }).filter(r => r.total > 0);
  }, [state.questions, state.answers, activePool]);

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
      const correct = qs.filter(q => state.answers[q.id as number] === q.correctAnswer).length;
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
      const correct = qs.filter(q => state.answers[q.id as number] === q.correctAnswer).length;
      return { level, total: qs.length, correct, pct: qs.length > 0 ? Math.round((correct / qs.length) * 100) : 0 };
    }).filter(r => r.total > 0);
  }, [state.questions, state.answers]);

  const getMissedQuestions = useCallback(() => {
    return state.questions.filter(q => state.answers[q.id as number] && state.answers[q.id as number] !== q.correctAnswer);
  }, [state.questions, state.answers]);

  const getFlaggedQuestions = useCallback(() => {
    return state.questions.filter(q => state.flagged[q.id as number]);
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
      hasInProgressExam,
      resumeInProgressExam,
      discardInProgressExam,
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
