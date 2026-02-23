/**
 * MockExamHubContext — Tier 6 Hub State
 * Persists exam history, practice session history, and review queue to localStorage.
 * Provides analytics data: domain accuracy, concept accuracy, exam score trend, study streak.
 */
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { allQuestions, domainInfo } from '@/data/allQuestions';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ExamHistoryEntry {
  id: string;
  date: number; // timestamp
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
  selectedAnswer: string;
  correct: boolean;
  timestamp: number;
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
  lastStudyDate: string | null; // ISO date string YYYY-MM-DD
}

interface MockExamHubContextType {
  state: MockExamHubState;
  addExamResult: (entry: Omit<ExamHistoryEntry, 'id'>) => void;
  recordPracticeAnswer: (answer: Omit<PracticeAnswer, 'timestamp'>) => void;
  clearHistory: () => void;
  // Analytics helpers
  getDomainAccuracy: () => { domain: string; name: string; correct: number; total: number; pct: number; weight: number }[];
  getConceptAccuracy: () => { concept: string; correct: number; total: number; pct: number }[];
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

// ─── Concept extraction from question text ────────────────────────────────────
const CONCEPT_KEYWORDS = [
  'reinforcement', 'punishment', 'extinction', 'shaping', 'chaining', 'fading',
  'prompting', 'generalization', 'discrimination', 'stimulus control', 'schedules of reinforcement',
  'functional analysis', 'preference assessment', 'token economy', 'FCT', 'DRI', 'DRA', 'DRO',
  'BST', 'task analysis', 'multiple baseline', 'reversal design', 'IOA', 'interobserver agreement',
  'VB-MAPP', 'ABLLS', 'AFLS', 'social validity', 'treatment integrity', 'maintenance',
  'backward chaining', 'forward chaining', 'total task', 'attention', 'escape', 'automatic reinforcement',
  'conditioned reinforcement', 'unconditioned reinforcement', 'MO', 'motivating operation',
  'radical behaviorism', 'operant conditioning', 'respondent conditioning', 'stimulus generalization',
  'response generalization', 'differential reinforcement', 'continuous reinforcement', 'intermittent',
  'ratio schedule', 'interval schedule', 'variable ratio', 'fixed ratio', 'variable interval', 'fixed interval',
];

function extractConcepts(question: typeof allQuestions[0]): string[] {
  const text = (question.scenario + ' ' + question.question + ' ' + question.rationale).toLowerCase();
  return CONCEPT_KEYWORDS.filter(k => text.includes(k.toLowerCase()));
}

// ─── localStorage helpers ─────────────────────────────────────────────────────
const STORAGE_KEY = 'corelocus_hub_v1';

function loadState(): MockExamHubState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { examHistory: [], practiceAnswers: [], reviewEntries: [], studyStreak: 0, lastStudyDate: null };
}

function saveState(state: MockExamHubState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

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
      return {
        ...updated,
        examHistory: [...updated.examHistory, { ...entry, id: `exam_${Date.now()}` }],
      };
    });
  }, []);

  const recordPracticeAnswer = useCallback((answer: Omit<PracticeAnswer, 'timestamp'>) => {
    const pa: PracticeAnswer = { ...answer, timestamp: Date.now() };
    setState(prev => {
      const updated = updateStreak(prev);
      // Update review entries
      const existing = updated.reviewEntries.find(r => r.questionId === answer.questionId);
      let reviewEntries: ReviewEntry[];
      if (existing) {
        reviewEntries = updated.reviewEntries.map(r =>
          r.questionId === answer.questionId
            ? {
                ...r,
                selectedAnswer: answer.selectedAnswer,
                correct: answer.correct,
                lastAttempt: Date.now(),
                attempts: r.attempts + 1,
                dueForReview: !answer.correct,
              }
            : r
        );
      } else {
        reviewEntries = [
          ...updated.reviewEntries,
          {
            questionId: answer.questionId,
            domain: answer.domain,
            taskItem: answer.taskItem,
            selectedAnswer: answer.selectedAnswer,
            correct: answer.correct,
            lastAttempt: Date.now(),
            attempts: 1,
            dueForReview: !answer.correct,
          },
        ];
      }
      return {
        ...updated,
        practiceAnswers: [...updated.practiceAnswers, pa],
        reviewEntries,
      };
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
        domain,
        name: info.name,
        correct,
        total: answers.length,
        pct: answers.length > 0 ? Math.round((correct / answers.length) * 100) : 0,
        weight: DOMAIN_WEIGHTS[domain] ?? 0,
      };
    });
  }, [state.practiceAnswers]);

  const getConceptAccuracy = useCallback(() => {
    const conceptMap = new Map<string, { correct: number; total: number }>();
    state.practiceAnswers.forEach(pa => {
      const q = allQuestions.find(q => q.id === pa.questionId);
      if (!q) return;
      const concepts = extractConcepts(q);
      concepts.forEach(c => {
        const existing = conceptMap.get(c) ?? { correct: 0, total: 0 };
        conceptMap.set(c, {
          correct: existing.correct + (pa.correct ? 1 : 0),
          total: existing.total + 1,
        });
      });
    });
    return Array.from(conceptMap.entries())
      .filter(([, v]) => v.total >= 2)
      .map(([concept, v]) => ({
        concept,
        correct: v.correct,
        total: v.total,
        pct: Math.round((v.correct / v.total) * 100),
      }))
      .sort((a, b) => b.pct - a.pct);
  }, [state.practiceAnswers]);

  const getOverallStats = useCallback(() => {
    const totalAnswered = state.practiceAnswers.length;
    const totalCorrect = state.practiceAnswers.filter(a => a.correct).length;
    const examsCount = state.examHistory.length;
    const passedExams = state.examHistory.filter(e => e.passed).length;
    const avgExamScore = examsCount > 0
      ? Math.round(state.examHistory.reduce((sum, e) => sum + e.score, 0) / examsCount)
      : 0;
    return {
      totalCorrect,
      totalAnswered,
      overallPct: totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0,
      examsCount,
      passRate: examsCount > 0 ? Math.round((passedExams / examsCount) * 100) : 0,
      studyStreak: state.studyStreak,
      avgExamScore,
    };
  }, [state.practiceAnswers, state.examHistory, state.studyStreak]);

  const getWeakestDomains = useCallback(() => {
    return getDomainAccuracy()
      .filter(d => d.total > 0)
      .sort((a, b) => a.pct - b.pct)
      .slice(0, 3);
  }, [getDomainAccuracy]);

  const getTaskBreakdown = useCallback(() => {
    const taskMap = new Map<string, { domain: string; correct: number; total: number }>();
    state.practiceAnswers.forEach(pa => {
      const existing = taskMap.get(pa.taskItem) ?? { domain: pa.domain, correct: 0, total: 0 };
      taskMap.set(pa.taskItem, {
        domain: pa.domain,
        correct: existing.correct + (pa.correct ? 1 : 0),
        total: existing.total + 1,
      });
    });
    return Array.from(taskMap.entries())
      .map(([taskItem, v]) => ({ taskItem, ...v, pct: Math.round((v.correct / v.total) * 100) }))
      .sort((a, b) => a.pct - b.pct);
  }, [state.practiceAnswers]);

  const getReviewEntries = useCallback((filter: 'incorrect' | 'due' | 'never' | 'all') => {
    switch (filter) {
      case 'incorrect': return state.reviewEntries.filter(r => !r.correct);
      case 'due': return state.reviewEntries.filter(r => r.dueForReview);
      case 'never': return state.reviewEntries.filter(r => r.attempts > 0 && !r.correct && state.practiceAnswers.filter(p => p.questionId === r.questionId && p.correct).length === 0);
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
      state,
      addExamResult, recordPracticeAnswer, clearHistory,
      getDomainAccuracy, getConceptAccuracy, getOverallStats,
      getWeakestDomains, getTaskBreakdown, getReviewEntries, markReviewDone,
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
