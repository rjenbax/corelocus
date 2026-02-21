/**
 * ProgressContext — tracks learner progress across all 6 tiers
 * Persisted to localStorage so progress survives page refreshes
 */
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { flashcards } from '@/data/flashcards';
import { rapidRecallItems } from '@/data/rapidRecall';
import { vennDiagrams } from '@/data/vennDiagrams';
import { scenarioItems as scenarioJustificationItems } from '@/data/scenarioJustification';

export interface FlashcardProgress {
  cardId: string;
  mastered: boolean;
  seenCount: number;
}

export interface RapidRecallProgress {
  termId: string;
  correct: number;
  incorrect: number;
  weakBoundaries: { misconceptionId: string; count: number }[];
}

export interface MatchingProgress {
  sessionCompleted: boolean;
  score: number; // 0-100
  totalAttempts: number;
}

export interface VennProgress {
  pairId: string;
  completed: boolean;
  score: number; // 0-100
}

export interface ScenarioJustificationProgress {
  scenarioId: string;
  questionId: string;
  completed: boolean;
  correct: boolean;
  justificationScore: number; // 0-3 (how many justifications correct)
}

export interface ExamProgress {
  completed: boolean;
  score: number; // 0-100
  totalQuestions: number;
}

export interface PlatformProgress {
  flashcards: FlashcardProgress[];
  rapidRecall: RapidRecallProgress[];
  matching: MatchingProgress[];
  venn: VennProgress[];
  scenarioJustification: ScenarioJustificationProgress[];
  exam: ExamProgress;
}

interface ProgressContextValue {
  progress: PlatformProgress;
  // Flashcards
  markFlashcardMastered: (cardId: string) => void;
  markFlashcardSeen: (cardId: string) => void;
  // Rapid Recall
  recordRapidRecallAnswer: (termId: string, correct: boolean, misconceptionId?: string) => void;
  // Matching
  recordMatchingSession: (score: number) => void;
  // Venn
  recordVennCompletion: (pairId: string, score: number) => void;
  // Scenario Justification
  recordScenarioAnswer: (scenarioId: string, questionId: string, correct: boolean, justificationScore: number) => void;
  // Exam
  recordExamCompletion: (score: number, totalQuestions: number) => void;
  // Tier completion %
  getTierCompletion: (tier: 1 | 2 | 3 | 4 | 5 | 6) => number;
  resetProgress: () => void;
}

const defaultProgress: PlatformProgress = {
  flashcards: [],
  rapidRecall: [],
  matching: [],
  venn: [],
  scenarioJustification: [],
  exam: { completed: false, score: 0, totalQuestions: 0 },
};

const ProgressContext = createContext<ProgressContextValue | null>(null);

const STORAGE_KEY = 'bcba-platform-progress';

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<PlatformProgress>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? { ...defaultProgress, ...JSON.parse(stored) } : defaultProgress;
    } catch {
      return defaultProgress;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const markFlashcardMastered = useCallback((cardId: string) => {
    setProgress(prev => {
      const existing = prev.flashcards.find(f => f.cardId === cardId);
      if (existing) {
        return { ...prev, flashcards: prev.flashcards.map(f => f.cardId === cardId ? { ...f, mastered: true } : f) };
      }
      return { ...prev, flashcards: [...prev.flashcards, { cardId, mastered: true, seenCount: 1 }] };
    });
  }, []);

  const markFlashcardSeen = useCallback((cardId: string) => {
    setProgress(prev => {
      const existing = prev.flashcards.find(f => f.cardId === cardId);
      if (existing) {
        return { ...prev, flashcards: prev.flashcards.map(f => f.cardId === cardId ? { ...f, seenCount: f.seenCount + 1 } : f) };
      }
      return { ...prev, flashcards: [...prev.flashcards, { cardId, mastered: false, seenCount: 1 }] };
    });
  }, []);

  const recordRapidRecallAnswer = useCallback((termId: string, correct: boolean, misconceptionId?: string) => {
    setProgress(prev => {
      const existing = prev.rapidRecall.find(r => r.termId === termId);
      if (existing) {
        const updated = {
          ...existing,
          correct: existing.correct + (correct ? 1 : 0),
          incorrect: existing.incorrect + (correct ? 0 : 1),
          weakBoundaries: misconceptionId && !correct
            ? (() => {
                const wb = existing.weakBoundaries.find(w => w.misconceptionId === misconceptionId);
                if (wb) return existing.weakBoundaries.map(w => w.misconceptionId === misconceptionId ? { ...w, count: w.count + 1 } : w);
                return [...existing.weakBoundaries, { misconceptionId, count: 1 }];
              })()
            : existing.weakBoundaries,
        };
        return { ...prev, rapidRecall: prev.rapidRecall.map(r => r.termId === termId ? updated : r) };
      }
      return {
        ...prev,
        rapidRecall: [...prev.rapidRecall, {
          termId,
          correct: correct ? 1 : 0,
          incorrect: correct ? 0 : 1,
          weakBoundaries: misconceptionId && !correct ? [{ misconceptionId, count: 1 }] : [],
        }],
      };
    });
  }, []);

  const recordMatchingSession = useCallback((score: number) => {
    setProgress(prev => ({
      ...prev,
      matching: [{ sessionCompleted: true, score, totalAttempts: (prev.matching[0]?.totalAttempts ?? 0) + 1 }],
    }));
  }, []);

  const recordVennCompletion = useCallback((pairId: string, score: number) => {
    setProgress(prev => {
      const existing = prev.venn.find(v => v.pairId === pairId);
      if (existing) {
        return { ...prev, venn: prev.venn.map(v => v.pairId === pairId ? { ...v, completed: true, score: Math.max(v.score, score) } : v) };
      }
      return { ...prev, venn: [...prev.venn, { pairId, completed: true, score }] };
    });
  }, []);

  const recordScenarioAnswer = useCallback((scenarioId: string, questionId: string, correct: boolean, justificationScore: number) => {
    setProgress(prev => {
      const key = `${scenarioId}-${questionId}`;
      const existing = prev.scenarioJustification.find(s => `${s.scenarioId}-${s.questionId}` === key);
      if (existing) {
        return {
          ...prev,
          scenarioJustification: prev.scenarioJustification.map(s =>
            `${s.scenarioId}-${s.questionId}` === key
              ? { ...s, completed: true, correct, justificationScore }
              : s
          ),
        };
      }
      return {
        ...prev,
        scenarioJustification: [...prev.scenarioJustification, { scenarioId, questionId, completed: true, correct, justificationScore }],
      };
    });
  }, []);

  const recordExamCompletion = useCallback((score: number, totalQuestions: number) => {
    setProgress(prev => ({ ...prev, exam: { completed: true, score, totalQuestions } }));
  }, []);

  const getTierCompletion = useCallback((tier: 1 | 2 | 3 | 4 | 5 | 6): number => {
    switch (tier) {
      case 1: {
        const mastered = progress.flashcards.filter(f => f.mastered).length;
        const total = flashcards.length;
        return mastered === 0 ? 0 : Math.min(100, Math.round((mastered / total) * 100));
      }
      case 2: {
        const attempted = progress.rapidRecall.length;
        const total = rapidRecallItems.length;
        return attempted === 0 ? 0 : Math.min(100, Math.round((attempted / total) * 100));
      }
      case 3: {
        const sessions = progress.matching.filter(m => m.sessionCompleted).length;
        return sessions > 0 ? Math.min(100, progress.matching[0]?.score ?? 0) : 0;
      }
      case 4: {
        const completed = progress.venn.filter(v => v.completed).length;
        const total = vennDiagrams.length;
        return completed === 0 ? 0 : Math.min(100, Math.round((completed / total) * 100));
      }
      case 5: {
        const completed = progress.scenarioJustification.filter(s => s.completed).length;
        // scenarioJustificationItems is the flat list of ScenarioItem objects;
        // each item has multiple questions, so count total questions across all items
        const total = scenarioJustificationItems.reduce((sum, item) => sum + item.questions.length, 0);
        return completed === 0 ? 0 : Math.min(100, Math.round((completed / total) * 100));
      }
      case 6: {
        return progress.exam.completed ? Math.round(progress.exam.score) : 0;
      }
      default: return 0;
    }
  }, [progress]);

  const resetProgress = useCallback(() => {
    setProgress(defaultProgress);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return (
    <ProgressContext.Provider value={{
      progress,
      markFlashcardMastered,
      markFlashcardSeen,
      recordRapidRecallAnswer,
      recordMatchingSession,
      recordVennCompletion,
      recordScenarioAnswer,
      recordExamCompletion,
      getTierCompletion,
      resetProgress,
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
}
