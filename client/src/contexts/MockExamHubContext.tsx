/**
 * MockExamHubContext — Tier 6 Hub State
 * Persists exam history, practice session history, and review queue to localStorage.
 *
 * CONCEPT CONFUSION MODEL:
 * Every practice answer records:
 *   - correctConcept: the BACB task list item name (what the question tests)
 *   - selectedConcept: the concept extracted from the chosen answer's text
 * This enables: "When you see a Reinforcement question, you pick Punishment 3 times."
 */
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { domainInfo } from '@/data/allQuestions';
import { getTaskName, extractConceptFromText } from '@/data/taskListNames';

// ─── Types ────────────────────────────────────────────────────────────────────
export interface ExamHistoryEntry {
  id: string;
  date: number;
  score: number; // 0-100
  totalQuestions: number;
  correct: number;
  domainScores: Record<string, { correct: number; total: number }>;
  passed: boolean; // >= 70%
}

export interface PracticeAnswer {
  questionId: number;
  domain: string;
  taskItem: string;
  selectedAnswer: string;   // letter: 'a' | 'b' | 'c' | 'd'
  correct: boolean;
  timestamp: number;
  correctConcept: string;        // BACB task list item name (what the question tests)
  selectedConcept: string | null; // concept extracted from the chosen answer text
}

export interface ReviewEntry {
  questionId: number;
  domain: string;
  taskItem: string;
  selectedAnswer: string;
  correct: boolean;
  lastAttempt: number;
  attempts: number;
  dueForReview: boolean;
}

interface MockExamHubState {
  examHistory: ExamHistoryEntry[];
  practiceAnswers: PracticeAnswer[];
  reviewEntries: ReviewEntry[];
  studyStreak: number;
  lastStudyDate: string | null;
}

export interface ConceptConfusionPair {
  correctConcept: string;
  selectedConcept: string;
  count: number;
  taskItems: string[];
}

export interface ConceptAccuracyEntry {
  concept: string;
  taskItem: string;
  domain: string;
  correct: number;
  total: number;
  pct: number;
  confusions: ConceptConfusionPair[];
}

interface MockExamHubContextType {
  state: MockExamHubState;
  addExamResult: (entry: Omit<ExamHistoryEntry, 'id'>) => void;
  recordPracticeAnswer: (answer: Omit<PracticeAnswer, 'timestamp'>) => void;
  clearHistory: () => void;
  getDomainAccuracy: () => { domain: string; name: string; correct: number; total: number; pct: number; weight: number }[];
  getConceptAccuracy: () => ConceptAccuracyEntry[];
  getConceptConfusions: () => ConceptConfusionPair[];
  getOverallStats: () => { totalCorrect: number; totalAnswered: number; overallPct: number; examsCount: number; passRate: number; studyStreak: number; avgExamScore: number };
  getWeakestDomains: () => { domain: string; name: string; pct: number; correct: number; total: number }[];
  getTaskBreakdown: () => { taskItem: string; domain: string; correct: number; total: number; pct: number }[];
  getReviewEntries: (filter: 'incorrect' | 'due' | 'never' | 'all') => ReviewEntry[];
  markReviewDone: (questionId: number, correct: boolean) => void;
}

// ─── Domain weights (BACB 6th edition) ────────────────────────────────────────
const DOMAIN_WEIGHTS: Record<string, number> = {
  A: 5, B: 14, C: 12, D: 7, E: 13, F: 13, G: 14, H: 11, I: 11,
};

// ─── localStorage ─────────────────────────────────────────────────────────────
const STORAGE_KEY = 'corelocus_hub_v2';

function loadState(): MockExamHubState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
    // Migrate from v1
    const v1 = localStorage.getItem('corelocus_hub_v1');
    if (v1) {
      const old = JSON.parse(v1) as MockExamHubState;
      return {
        ...old,
        practiceAnswers: old.practiceAnswers.map(pa => ({
          ...pa,
          correctConcept: (pa as any).correctConcept ?? getTaskName(pa.taskItem),
          selectedConcept: (pa as any).selectedConcept ?? null,
        })),
      };
    }
  } catch {}
  return { examHistory: [], practiceAnswers: [], reviewEntries: [], studyStreak: 0, lastStudyDate: null };
}

function saveState(s: MockExamHubState) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch {}
}

function todayISO() { return new Date().toISOString().slice(0, 10); }

function updateStreak(state: MockExamHubState): MockExamHubState {
  const today = todayISO();
  if (state.lastStudyDate === today) return state;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yISO = yesterday.toISOString().slice(0, 10);
  const newStreak = state.lastStudyDate === yISO ? state.studyStreak + 1 : 1;
  return { ...state, studyStreak: newStreak, lastStudyDate: today };
}

// ─── Context ──────────────────────────────────────────────────────────────────
const MockExamHubContext = createContext<MockExamHubContextType | null>(null);

export function MockExamHubProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<MockExamHubState>(loadState);

  useEffect(() => { saveState(state); }, [state]);

  const addExamResult = useCallback((entry: Omit<ExamHistoryEntry, 'id'>) => {
    setState(prev => {
      const updated = updateStreak(prev);
      return { ...updated, examHistory: [...updated.examHistory, { ...entry, id: `exam_${Date.now()}` }] };
    });
  }, []);

  const recordPracticeAnswer = useCallback((answer: Omit<PracticeAnswer, 'timestamp'>) => {
    const pa: PracticeAnswer = { ...answer, timestamp: Date.now() };
    setState(prev => {
      const updated = updateStreak(prev);
      const existingIdx = updated.reviewEntries.findIndex(r => r.questionId === answer.questionId);
      let reviewEntries: ReviewEntry[];
      if (existingIdx >= 0) {
        reviewEntries = updated.reviewEntries.map((r, i) =>
          i === existingIdx
            ? { ...r, selectedAnswer: answer.selectedAnswer, correct: answer.correct, lastAttempt: Date.now(), attempts: r.attempts + 1, dueForReview: !answer.correct }
            : r
        );
      } else {
        reviewEntries = [...updated.reviewEntries, {
          questionId: answer.questionId, domain: answer.domain, taskItem: answer.taskItem,
          selectedAnswer: answer.selectedAnswer, correct: answer.correct,
          lastAttempt: Date.now(), attempts: 1, dueForReview: !answer.correct,
        }];
      }
      return { ...updated, practiceAnswers: [...updated.practiceAnswers, pa], reviewEntries };
    });
  }, []);

  const clearHistory = useCallback(() => {
    setState({ examHistory: [], practiceAnswers: [], reviewEntries: [], studyStreak: 0, lastStudyDate: null });
  }, []);

  const getDomainAccuracy = useCallback(() => {
    return Object.entries(domainInfo).map(([domain, info]) => {
      const answers = state.practiceAnswers.filter(a => a.domain === domain);
      const correct = answers.filter(a => a.correct).length;
      return {
        domain, name: info.name, correct, total: answers.length,
        pct: answers.length > 0 ? Math.round((correct / answers.length) * 100) : 0,
        weight: DOMAIN_WEIGHTS[domain] ?? 0,
      };
    });
  }, [state.practiceAnswers]);

  const getConceptAccuracy = useCallback((): ConceptAccuracyEntry[] => {
    const taskMap = new Map<string, { domain: string; correct: number; total: number; wrongAnswers: PracticeAnswer[] }>();
    state.practiceAnswers.forEach(pa => {
      const existing = taskMap.get(pa.taskItem) ?? { domain: pa.domain, correct: 0, total: 0, wrongAnswers: [] };
      taskMap.set(pa.taskItem, {
        domain: pa.domain,
        correct: existing.correct + (pa.correct ? 1 : 0),
        total: existing.total + 1,
        wrongAnswers: pa.correct ? existing.wrongAnswers : [...existing.wrongAnswers, pa],
      });
    });

    return Array.from(taskMap.entries()).map(([taskItem, v]) => {
      const confusionMap = new Map<string, { count: number; taskItems: string[] }>();
      v.wrongAnswers.forEach(pa => {
        if (pa.selectedConcept) {
          const ex = confusionMap.get(pa.selectedConcept) ?? { count: 0, taskItems: [] };
          confusionMap.set(pa.selectedConcept, {
            count: ex.count + 1,
            taskItems: ex.taskItems.includes(pa.taskItem) ? ex.taskItems : [...ex.taskItems, pa.taskItem],
          });
        }
      });
      const confusions: ConceptConfusionPair[] = Array.from(confusionMap.entries())
        .map(([selectedConcept, d]) => ({ correctConcept: getTaskName(taskItem), selectedConcept, count: d.count, taskItems: d.taskItems }))
        .sort((a, b) => b.count - a.count);
      return {
        concept: getTaskName(taskItem), taskItem, domain: v.domain,
        correct: v.correct, total: v.total,
        pct: Math.round((v.correct / v.total) * 100),
        confusions,
      };
    }).sort((a, b) => a.pct - b.pct);
  }, [state.practiceAnswers]);

  const getConceptConfusions = useCallback((): ConceptConfusionPair[] => {
    const confusionMap = new Map<string, { count: number; taskItems: string[] }>();
    state.practiceAnswers.filter(pa => !pa.correct && pa.selectedConcept).forEach(pa => {
      const key = `${pa.correctConcept}|||${pa.selectedConcept}`;
      const ex = confusionMap.get(key) ?? { count: 0, taskItems: [] };
      confusionMap.set(key, {
        count: ex.count + 1,
        taskItems: ex.taskItems.includes(pa.taskItem) ? ex.taskItems : [...ex.taskItems, pa.taskItem],
      });
    });
    return Array.from(confusionMap.entries())
      .map(([key, d]) => {
        const [correctConcept, selectedConcept] = key.split('|||');
        return { correctConcept, selectedConcept, count: d.count, taskItems: d.taskItems };
      })
      .sort((a, b) => b.count - a.count);
  }, [state.practiceAnswers]);

  const getOverallStats = useCallback(() => {
    const totalAnswered = state.practiceAnswers.length;
    const totalCorrect = state.practiceAnswers.filter(a => a.correct).length;
    const examsCount = state.examHistory.length;
    const passedExams = state.examHistory.filter(e => e.passed).length;
    const avgExamScore = examsCount > 0 ? Math.round(state.examHistory.reduce((s, e) => s + e.score, 0) / examsCount) : 0;
    return {
      totalCorrect, totalAnswered,
      overallPct: totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0,
      examsCount, passRate: examsCount > 0 ? Math.round((passedExams / examsCount) * 100) : 0,
      studyStreak: state.studyStreak, avgExamScore,
    };
  }, [state.practiceAnswers, state.examHistory, state.studyStreak]);

  const getWeakestDomains = useCallback(() => {
    return getDomainAccuracy().filter(d => d.total > 0).sort((a, b) => a.pct - b.pct).slice(0, 3);
  }, [getDomainAccuracy]);

  const getTaskBreakdown = useCallback(() => {
    const taskMap = new Map<string, { domain: string; correct: number; total: number }>();
    state.practiceAnswers.forEach(pa => {
      const ex = taskMap.get(pa.taskItem) ?? { domain: pa.domain, correct: 0, total: 0 };
      taskMap.set(pa.taskItem, { domain: pa.domain, correct: ex.correct + (pa.correct ? 1 : 0), total: ex.total + 1 });
    });
    return Array.from(taskMap.entries())
      .map(([taskItem, v]) => ({ taskItem, ...v, pct: Math.round((v.correct / v.total) * 100) }))
      .sort((a, b) => a.pct - b.pct);
  }, [state.practiceAnswers]);

  const getReviewEntries = useCallback((filter: 'incorrect' | 'due' | 'never' | 'all') => {
    switch (filter) {
      case 'incorrect': return state.reviewEntries.filter(r => !r.correct);
      case 'due': return state.reviewEntries.filter(r => r.dueForReview);
      case 'never': return state.reviewEntries.filter(r =>
        r.attempts > 0 && !r.correct &&
        state.practiceAnswers.filter(p => p.questionId === r.questionId && p.correct).length === 0
      );
      case 'all': return state.reviewEntries;
    }
  }, [state.reviewEntries, state.practiceAnswers]);

  const markReviewDone = useCallback((questionId: number, correct: boolean) => {
    setState(prev => ({
      ...prev,
      reviewEntries: prev.reviewEntries.map(r =>
        r.questionId === questionId
          ? { ...r, correct, dueForReview: !correct, lastAttempt: Date.now(), attempts: r.attempts + 1 }
          : r
      ),
    }));
  }, []);

  return (
    <MockExamHubContext.Provider value={{
      state, addExamResult, recordPracticeAnswer, clearHistory,
      getDomainAccuracy, getConceptAccuracy, getConceptConfusions,
      getOverallStats, getWeakestDomains, getTaskBreakdown,
      getReviewEntries, markReviewDone,
    }}>
      {children}
    </MockExamHubContext.Provider>
  );
}

export function useMockExamHub() {
  const ctx = useContext(MockExamHubContext);
  if (!ctx) throw new Error('useMockExamHub must be used within MockExamHubProvider');
  return ctx;
}
