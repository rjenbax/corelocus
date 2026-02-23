import React, { createContext, useContext, useReducer, useCallback } from 'react';
import { allQuestions } from '@/data/allQuestions';
import type { ExamState, DomainScore } from '@/data/types';
import { domainInfo } from '@/data/allQuestions';

interface ExamContextType {
  state: ExamState;
  currentQuestion: typeof allQuestions[0] | null;
  totalQuestions: number;
  startExam: () => void;
  submitAnswer: (answer: string) => void;
  revealAnswer: () => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  goToQuestion: (index: number) => void;
  finishExam: () => void;
  restartExam: () => void;
  getDomainScores: () => DomainScore[];
  getPhaseProgress: () => Record<string, { total: number; answered: number; correct: number }>;
}

type ExamAction =
  | { type: 'START_EXAM' }
  | { type: 'SUBMIT_ANSWER'; questionId: number; answer: string }
  | { type: 'REVEAL_ANSWER'; questionId: number }
  | { type: 'NEXT_QUESTION' }
  | { type: 'PREV_QUESTION' }
  | { type: 'GO_TO_QUESTION'; index: number }
  | { type: 'FINISH_EXAM' }
  | { type: 'RESTART_EXAM' };

const initialState: ExamState = {
  currentQuestionIndex: 0,
  answers: {},
  revealed: {},
  score: 0,
  examStarted: false,
  examComplete: false,
  currentPhase: 'assessment',
};

function examReducer(state: ExamState, action: ExamAction): ExamState {
  switch (action.type) {
    case 'START_EXAM':
      return { ...state, examStarted: true };

    case 'SUBMIT_ANSWER': {
      const question = allQuestions.find(q => Number(q.id) === action.questionId);
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
      const nextIndex = Math.min(state.currentQuestionIndex + 1, allQuestions.length - 1);
      return {
        ...state,
        currentQuestionIndex: nextIndex,
        currentPhase: allQuestions[nextIndex]?.phase || state.currentPhase,
      };
    }

    case 'PREV_QUESTION': {
      const prevIndex = Math.max(state.currentQuestionIndex - 1, 0);
      return {
        ...state,
        currentQuestionIndex: prevIndex,
        currentPhase: allQuestions[prevIndex]?.phase || state.currentPhase,
      };
    }

    case 'GO_TO_QUESTION': {
      const idx = Math.max(0, Math.min(action.index, allQuestions.length - 1));
      return {
        ...state,
        currentQuestionIndex: idx,
        currentPhase: allQuestions[idx]?.phase || state.currentPhase,
      };
    }

    case 'FINISH_EXAM':
      return { ...state, examComplete: true };

    case 'RESTART_EXAM':
      return { ...initialState };

    default:
      return state;
  }
}

const ExamContext = createContext<ExamContextType | null>(null);

export function ExamProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(examReducer, initialState);

  const currentQuestion = allQuestions[state.currentQuestionIndex] || null;

  const startExam = useCallback(() => dispatch({ type: 'START_EXAM' }), []);

  const submitAnswer = useCallback((answer: string) => {
    if (currentQuestion) {
      dispatch({ type: 'SUBMIT_ANSWER', questionId: Number(currentQuestion.id), answer });
    }
  }, [currentQuestion]);

  const revealAnswer = useCallback(() => {
    if (currentQuestion) {
      dispatch({ type: 'REVEAL_ANSWER', questionId: Number(currentQuestion.id) });
    }
  }, [currentQuestion]);

  const nextQuestion = useCallback(() => dispatch({ type: 'NEXT_QUESTION' }), []);
  const prevQuestion = useCallback(() => dispatch({ type: 'PREV_QUESTION' }), []);
  const goToQuestion = useCallback((index: number) => dispatch({ type: 'GO_TO_QUESTION', index }), []);
  const finishExam = useCallback(() => dispatch({ type: 'FINISH_EXAM' }), []);
  const restartExam = useCallback(() => dispatch({ type: 'RESTART_EXAM' }), []);

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
      totalQuestions: allQuestions.length,
      startExam,
      submitAnswer,
      revealAnswer,
      nextQuestion,
      prevQuestion,
      goToQuestion,
      finishExam,
      restartExam,
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
