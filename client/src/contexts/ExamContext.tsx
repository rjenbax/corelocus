import React, { createContext, useContext, useReducer, useCallback, useMemo } from 'react';
import { allQuestions } from '@/data/allQuestions';
import type { ExamState, DomainScore } from '@/data/types';
import { domainInfo } from '@/data/allQuestions';

interface ExamContextType {
  state: ExamState;
  currentQuestion: typeof allQuestions[0] | null;
  totalQuestions: number;
  activeQuestions: typeof allQuestions;
  startExam: () => void;
  submitAnswer: (answer: string) => void;
  revealAnswer: () => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  goToQuestion: (index: number) => void;
  finishExam: () => void;
  restartExam: () => void;
  retakePhase: (phase: string) => void;
  getDomainScores: () => DomainScore[];
  getPhaseProgress: () => Record<string, { total: number; answered: number; correct: number }>;
}

type ExamAction =
  | { type: 'START_EXAM' }
  | { type: 'SUBMIT_ANSWER'; questionId: number; answer: string; activeQuestions: typeof allQuestions }
  | { type: 'REVEAL_ANSWER'; questionId: number }
  | { type: 'NEXT_QUESTION'; activeLength: number; activeQuestions: typeof allQuestions }
  | { type: 'PREV_QUESTION'; activeQuestions: typeof allQuestions }
  | { type: 'GO_TO_QUESTION'; index: number; activeQuestions: typeof allQuestions }
  | { type: 'FINISH_EXAM' }
  | { type: 'RESTART_EXAM' }
  | { type: 'RETAKE_PHASE'; phase: string };

const initialState: ExamState = {
  currentQuestionIndex: 0,
  answers: {},
  revealed: {},
  score: 0,
  examStarted: false,
  examComplete: false,
  currentPhase: 'assessment',
  phaseFilter: null,
};

function examReducer(state: ExamState, action: ExamAction): ExamState {
  switch (action.type) {
    case 'START_EXAM':
      return { ...state, examStarted: true };

    case 'SUBMIT_ANSWER': {
      const question = action.activeQuestions.find(q => Number(q.id) === action.questionId);
      if (!question) return state;
      const isCorrect = action.answer === question.correctAnswer;
      const wasAlreadyCorrect = state.answers[action.questionId] === question.correctAnswer;
      const wasAnswered = action.questionId in state.answers;
      let scoreDelta = 0;
      if (!wasAnswered && isCorrect) scoreDelta = 1;
      else if (wasAnswered && wasAlreadyCorrect && !isCorrect) scoreDelta = -1;
      else if (wasAnswered && !wasAlreadyCorrect && isCorrect) scoreDelta = 1;
      return {
        ...state,
        answers: { ...state.answers, [action.questionId]: action.answer },
        score: state.score + scoreDelta,
      };
    }

    case 'REVEAL_ANSWER':
      return {
        ...state,
        revealed: { ...state.revealed, [action.questionId]: true },
      };

    case 'NEXT_QUESTION': {
      const nextIndex = Math.min(state.currentQuestionIndex + 1, action.activeLength - 1);
      return {
        ...state,
        currentQuestionIndex: nextIndex,
        currentPhase: action.activeQuestions[nextIndex]?.phase || state.currentPhase,
      };
    }

    case 'PREV_QUESTION': {
      const prevIndex = Math.max(state.currentQuestionIndex - 1, 0);
      return {
        ...state,
        currentQuestionIndex: prevIndex,
        currentPhase: action.activeQuestions[prevIndex]?.phase || state.currentPhase,
      };
    }

    case 'GO_TO_QUESTION': {
      const idx = Math.max(0, Math.min(action.index, action.activeQuestions.length - 1));
      return {
        ...state,
        currentQuestionIndex: idx,
        currentPhase: action.activeQuestions[idx]?.phase || state.currentPhase,
      };
    }

    case 'FINISH_EXAM':
      return { ...state, examComplete: true };

    case 'RESTART_EXAM':
      return { ...initialState };

    case 'RETAKE_PHASE':
      return {
        ...initialState,
        phaseFilter: action.phase,
        currentPhase: action.phase,
        examStarted: true,
      };

    default:
      return state;
  }
}

const ExamContext = createContext<ExamContextType | null>(null);

export function ExamProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(examReducer, initialState);

  // Derive the active question list based on phaseFilter
  const activeQuestions = useMemo(() => {
    if (state.phaseFilter) {
      return allQuestions.filter(q => q.phase === state.phaseFilter);
    }
    return allQuestions;
  }, [state.phaseFilter]);

  const currentQuestion = activeQuestions[state.currentQuestionIndex] || null;

  const startExam = useCallback(() => dispatch({ type: 'START_EXAM' }), []);

  const submitAnswer = useCallback((answer: string) => {
    if (currentQuestion) {
      dispatch({ type: 'SUBMIT_ANSWER', questionId: Number(currentQuestion.id), answer, activeQuestions });
    }
  }, [currentQuestion, activeQuestions]);

  const revealAnswer = useCallback(() => {
    if (currentQuestion) {
      dispatch({ type: 'REVEAL_ANSWER', questionId: Number(currentQuestion.id) });
    }
  }, [currentQuestion]);

  const nextQuestion = useCallback(() =>
    dispatch({ type: 'NEXT_QUESTION', activeLength: activeQuestions.length, activeQuestions }),
    [activeQuestions]
  );
  const prevQuestion = useCallback(() =>
    dispatch({ type: 'PREV_QUESTION', activeQuestions }),
    [activeQuestions]
  );
  const goToQuestion = useCallback((index: number) =>
    dispatch({ type: 'GO_TO_QUESTION', index, activeQuestions }),
    [activeQuestions]
  );
  const finishExam = useCallback(() => dispatch({ type: 'FINISH_EXAM' }), []);
  const restartExam = useCallback(() => dispatch({ type: 'RESTART_EXAM' }), []);
  const retakePhase = useCallback((phase: string) => dispatch({ type: 'RETAKE_PHASE', phase }), []);

  const getDomainScores = useCallback((): DomainScore[] => {
    return Object.entries(domainInfo).map(([domain, info]) => {
      const domainQuestions = allQuestions.filter(q => q.domain === domain);
      const correct = domainQuestions.filter(q => state.answers[q.id as number] === q.correctAnswer).length;
      return {
        domain,
        domainName: info.name,
        total: domainQuestions.length,
        correct,
        percentage: domainQuestions.length > 0 ? Math.round((correct / domainQuestions.length) * 100) : 0,
      };
    });
  }, [state.answers]);

  const getPhaseProgress = useCallback(() => {
    const phases = ['assessment', 'fba', 'treatment-planning', 'implementation', 'evaluation'];
    const result: Record<string, { total: number; answered: number; correct: number }> = {};
    phases.forEach(phase => {
      const phaseQs = allQuestions.filter(q => q.phase === phase);
      result[phase] = {
        total: phaseQs.length,
        answered: phaseQs.filter(q => Number(q.id) in state.answers).length,
        correct: phaseQs.filter(q => state.answers[q.id as number] === q.correctAnswer).length,
      };
    });
    return result;
  }, [state.answers]);

  return (
    <ExamContext.Provider value={{
      state,
      currentQuestion,
      totalQuestions: activeQuestions.length,
      activeQuestions,
      startExam,
      submitAnswer,
      revealAnswer,
      nextQuestion,
      prevQuestion,
      goToQuestion,
      finishExam,
      restartExam,
      retakePhase,
      getDomainScores,
      getPhaseProgress,
    }}>
      {children}
    </ExamContext.Provider>
  );
}

export function useExam() {
  const ctx = useContext(ExamContext);
  if (!ctx) throw new Error('useExam must be used within ExamProvider');
  return ctx;
}
