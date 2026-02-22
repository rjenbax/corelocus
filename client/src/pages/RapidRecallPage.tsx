/**
 * RapidRecall — Tier 2: Remember / Understand (L1–2)
 * Timed quick-fire Q&A with Weak Boundaries tracking, Domain Filter, and Missed Items tab
 *
 * Design: Academic Warmth — warm cream, amber accent, editorial layout
 *
 * Browse view tabs:
 *   - "All Terms"    — domain-filtered grid of all 146 terms with accuracy badges
 *   - "Missed Items" — every term with more incorrect than correct attempts,
 *                      showing full definition + misconceptions + "Practice this term" button
 */
import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { rapidRecallItems } from '@/data/rapidRecall';
import { useProgress } from '@/contexts/ProgressContext';
import {
  ArrowLeft, Zap, AlertTriangle, CheckCircle2, XCircle, RotateCcw,
  ChevronRight, Filter, ClipboardX, BookOpen, ChevronDown, ChevronUp
} from 'lucide-react';
import { cn } from '@/lib/utils';

type Mode = 'browse' | 'quiz' | 'results';
type BrowseTab = 'all' | 'missed';

const DOMAIN_LABELS: Record<string, string> = {
  All: 'All Domains',
  A: 'A · Behaviorism',
  B: 'B · Concepts',
  C: 'C · Measurement',
  D: 'D · Research',
  E: 'E · Ethics',
  F: 'F · Assessment',
  G: 'G · Behavior-Change',
  H: 'H · Intervention',
  I: 'I · Supervision',
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Missed Items Panel ───────────────────────────────────────────────────────

interface MissedTermEntry {
  id: string;
  term: string;
  correctDefinition: string;
  distractors: string[];
  misconceptions: string[];
  domain: string;
  taskItem: string;
  category: string;
  correct: number;
  incorrect: number;
  accuracy: number;
}

function MissedItemsPanel({
  missed,
  onPractice,
}: {
  missed: MissedTermEntry[];
  onPractice: (items: typeof rapidRecallItems) => void;
}) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [sortBy, setSortBy] = useState<'accuracy' | 'attempts'>('accuracy');

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const expandAll = () => setExpandedIds(new Set(missed.map(m => m.id)));
  const collapseAll = () => setExpandedIds(new Set());

  const sorted = useMemo(() => {
    return [...missed].sort((a, b) => {
      if (sortBy === 'accuracy') return a.accuracy - b.accuracy;
      return (b.correct + b.incorrect) - (a.correct + a.incorrect);
    });
  }, [missed, sortBy]);

  if (missed.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <CheckCircle2 className="w-12 h-12 text-violet-400 mb-4" />
        <h3 className="font-bold text-foreground text-lg mb-2">No missed items yet</h3>
        <p className="text-sm text-muted-foreground max-w-xs">
          Complete some quiz sessions and any terms you miss more than you get right will appear here for review.
        </p>
      </div>
    );
  }

  // Build the subset of rapidRecallItems for "Practice all missed"
  const missedRRItems = missed
    .map(m => rapidRecallItems.find(r => r.id === m.id))
    .filter(Boolean) as typeof rapidRecallItems;

  return (
    <div>
      {/* Summary row */}
      <div className="flex items-center gap-3 mb-5 flex-wrap">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-50 border border-red-200">
          <XCircle className="w-3.5 h-3.5 text-red-500" />
          <span className="text-xs font-medium text-red-700">
            {missed.length} term{missed.length !== 1 ? 's' : ''} need review
          </span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-teal-50 border border-teal-200">
          <AlertTriangle className="w-3.5 h-3.5 text-teal-600" />
          <span className="text-xs font-medium text-teal-800">
            avg {missed.length > 0 ? Math.round(missed.reduce((s, m) => s + m.accuracy, 0) / missed.length) : 0}% accuracy
          </span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <button onClick={expandAll} className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2">
            Expand all
          </button>
          <span className="text-muted-foreground">·</span>
          <button onClick={collapseAll} className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2">
            Collapse all
          </button>
        </div>
      </div>

      {/* Sort + Practice all */}
      <div className="flex items-center justify-between gap-3 mb-5 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground font-medium">Sort by:</span>
          {(['accuracy', 'attempts'] as const).map(s => (
            <button
              key={s}
              onClick={() => setSortBy(s)}
              className={cn(
                "text-xs font-medium px-3 py-1 rounded-full border transition-colors",
                sortBy === s
                  ? "bg-teal-600 text-white border-teal-600"
                  : "border-border bg-card text-muted-foreground hover:border-teal-300"
              )}
            >
              {s === 'accuracy' ? 'Lowest Accuracy' : 'Most Attempted'}
            </button>
          ))}
        </div>
        <button
          onClick={() => onPractice(missedRRItems)}
          className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition-colors"
        >
          <Zap className="w-3 h-3" />
          Practice All Missed ({missed.length})
        </button>
      </div>

      {/* Term cards */}
      <div className="space-y-3">
        {sorted.map((entry) => {
          const isExpanded = expandedIds.has(entry.id);
          return (
            <div
              key={entry.id}
              className="rounded-xl border-2 border-red-200 overflow-hidden"
            >
              {/* Header — always visible */}
              <button
                onClick={() => toggleExpand(entry.id)}
                className="w-full text-left px-4 py-3.5 flex items-start gap-3 bg-red-50 hover:bg-red-100/60 transition-colors"
              >
                {/* Accuracy badge */}
                <div className="flex-shrink-0 mt-0.5">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center text-xs font-black border-2",
                    entry.accuracy === 0
                      ? "border-red-400 bg-red-100 text-red-700"
                      : "border-orange-400 bg-orange-100 text-orange-700"
                  )}>
                    {entry.accuracy}%
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0 text-left">
                  <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                    <span className="text-xs font-bold text-teal-700 bg-teal-50 border border-teal-200 px-1.5 py-0.5 rounded">
                      {entry.taskItem}
                    </span>
                    <span className="text-xs text-muted-foreground">{entry.category} · Domain {entry.domain}</span>
                  </div>
                  <p className="text-sm font-bold text-foreground">{entry.term}</p>
                  <p className="text-xs text-red-600 mt-0.5">
                    {entry.correct} correct · {entry.incorrect} incorrect ({entry.correct + entry.incorrect} attempts)
                  </p>
                </div>

                {/* Expand + practice */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const rrItem = rapidRecallItems.find(r => r.id === entry.id);
                      if (rrItem) onPractice([rrItem]);
                    }}
                    className="text-xs font-medium px-2.5 py-1 rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition-colors"
                  >
                    Practice
                  </button>
                  {isExpanded
                    ? <ChevronUp className="w-4 h-4 text-muted-foreground" />
                    : <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  }
                </div>
              </button>

              {/* Expanded definition + misconceptions */}
              {isExpanded && (
                <div className="px-4 pb-5 pt-4 bg-card border-t border-border space-y-4">
                  {/* Correct definition */}
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      Correct Definition
                    </p>
                    <div className="bg-violet-50 border border-violet-200 rounded-lg p-3">
                      <p className="text-sm text-violet-800 leading-relaxed">{entry.correctDefinition}</p>
                    </div>
                  </div>

                  {/* Distractors — what NOT to confuse it with */}
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      Common Distractors (Wrong Definitions)
                    </p>
                    <div className="space-y-1.5">
                      {entry.distractors.slice(0, 3).map((d, i) => (
                        <div key={i} className="flex items-start gap-2 px-3 py-2 rounded-lg border border-red-100 bg-red-50/50">
                          <XCircle className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                          <p className="text-xs text-red-700/80 leading-relaxed">{d}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Misconceptions / weak boundaries */}
                  {entry.misconceptions.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        Watch Out For These Misconceptions
                      </p>
                      <div className="space-y-1.5">
                        {entry.misconceptions.map((m, i) => (
                          <div key={i} className="flex items-start gap-2 px-3 py-2 rounded-lg border border-teal-200 bg-teal-50">
                            <AlertTriangle className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                            <p className="text-xs text-teal-800 leading-relaxed">{m}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Practice button */}
                  <button
                    onClick={() => {
                      const rrItem = rapidRecallItems.find(r => r.id === entry.id);
                      if (rrItem) onPractice([rrItem]);
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 border-teal-200 bg-teal-50 text-teal-800 text-sm font-medium hover:bg-teal-100 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Practice this term
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function RapidRecallPage() {
  const [, navigate] = useLocation();
  const { progress, recordRapidRecallAnswer } = useProgress();
  const [mode, setMode] = useState<Mode>('browse');
  const [browseTab, setBrowseTab] = useState<BrowseTab>('all');
  const [selectedDomain, setSelectedDomain] = useState<string>('All');
  const [quizItems, setQuizItems] = useState(rapidRecallItems);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [sessionResults, setSessionResults] = useState<{ termId: string; correct: boolean }[]>([]);
  const [timeLeft, setTimeLeft] = useState(15);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentItem = quizItems[currentIdx];

  // Filtered items based on selected domain
  const filteredItems = useMemo(() => {
    if (selectedDomain === 'All') return rapidRecallItems;
    return rapidRecallItems.filter(item => item.domain === selectedDomain);
  }, [selectedDomain]);

  // Domain item counts
  const domainCounts = useMemo(() => {
    const counts: Record<string, number> = { All: rapidRecallItems.length };
    Object.keys(DOMAIN_LABELS).forEach(key => {
      if (key !== 'All') {
        counts[key] = rapidRecallItems.filter(i => i.domain === key).length;
      }
    });
    return counts;
  }, []);

  // Build shuffled choices for current item
  const choices = useMemo(() => {
    if (!currentItem) return [];
    return shuffle([currentItem.correctDefinition, ...currentItem.distractors.slice(0, 3)]);
  }, [currentItem]);

  // Missed items: terms with more incorrect than correct (or 0 correct and ≥1 incorrect)
  const missedItems = useMemo((): MissedTermEntry[] => {
    return progress.rapidRecall
      .filter(r => {
        // Filter by domain if not All
        const item = rapidRecallItems.find(i => i.id === r.termId);
        if (!item) return false;
        if (selectedDomain !== 'All' && item.domain !== selectedDomain) return false;
        // "Missed" = incorrect > correct OR accuracy < 50% with at least 1 attempt
        return r.incorrect > r.correct;
      })
      .map(r => {
        const item = rapidRecallItems.find(i => i.id === r.termId)!;
        const total = r.correct + r.incorrect;
        return {
          id: item.id,
          term: item.term,
          correctDefinition: item.correctDefinition,
          distractors: item.distractors,
          misconceptions: item.misconceptions,
          domain: item.domain,
          taskItem: item.taskItem,
          category: item.category,
          correct: r.correct,
          incorrect: r.incorrect,
          accuracy: total > 0 ? Math.round((r.correct / total) * 100) : 0,
        };
      });
  }, [progress.rapidRecall, selectedDomain]);

  const handleAnswer = useCallback((answer: string | null) => {
    if (!currentItem || showFeedback) return;
    clearInterval(timerRef.current!);
    const correct = answer === currentItem.correctDefinition;
    setSelectedAnswer(answer);
    setShowFeedback(true);
    setSessionResults(prev => [...prev, { termId: currentItem.id, correct }]);
    recordRapidRecallAnswer(currentItem.id, correct);
  }, [currentItem, showFeedback, recordRapidRecallAnswer]);

  // Timer — handleAnswer declared above so the effect captures the stable reference
  useEffect(() => {
    if (mode !== 'quiz' || showFeedback) return;
    setTimeLeft(15);
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          handleAnswer(null);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current!);
  }, [mode, currentIdx, showFeedback, handleAnswer]);

  const handleNext = useCallback(() => {
    setShowFeedback(false);
    setSelectedAnswer(null);
    if (currentIdx + 1 >= quizItems.length) {
      setMode('results');
    } else {
      setCurrentIdx(i => i + 1);
    }
  }, [currentIdx, quizItems.length]);

  const startQuiz = (items = filteredItems) => {
    setQuizItems(shuffle(items));
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setSessionResults([]);
    setMode('quiz');
  };

  // Weak boundaries: misconceptions chosen incorrectly most often
  const weakBoundaries = useMemo(() => {
    const all: { termId: string; term: string; misconception: string; count: number }[] = [];
    progress.rapidRecall.forEach(r => {
      const item = rapidRecallItems.find(i => i.id === r.termId);
      if (!item) return;
      if (selectedDomain !== 'All' && item.domain !== selectedDomain) return;
      r.weakBoundaries.forEach(wb => {
        const misconception = item.misconceptions.find(m => m === wb.misconceptionId) ?? wb.misconceptionId;
        all.push({ termId: r.termId, term: item.term, misconception, count: wb.count });
      });
    });
    return all.sort((a, b) => b.count - a.count).slice(0, 10);
  }, [progress.rapidRecall, selectedDomain]);

  const totalAttempted = progress.rapidRecall.length;
  const totalCorrect = progress.rapidRecall.reduce((s, r) => s + r.correct, 0);
  const totalIncorrect = progress.rapidRecall.reduce((s, r) => s + r.incorrect, 0);
  const accuracy = totalAttempted > 0 ? Math.round((totalCorrect / (totalCorrect + totalIncorrect)) * 100) : 0;

  // ── Quiz view ─────────────────────────────────────────────────────────────
  if (mode === 'quiz' && currentItem) {
    const pct = ((currentIdx) / quizItems.length) * 100;
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container flex items-center justify-between h-14">
            <button onClick={() => { clearInterval(timerRef.current!); setMode('browse'); }} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              Exit Quiz
            </button>
            <div className="flex items-center gap-3">
              {selectedDomain !== 'All' && (
                <span className="text-xs bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full font-medium">
                  Domain {selectedDomain}
                </span>
              )}
              <span className="text-xs text-muted-foreground">{currentIdx + 1} / {quizItems.length}</span>
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors",
                timeLeft <= 5 ? "border-red-400 text-red-600 bg-red-50" : "border-teal-300 text-teal-800 bg-teal-50"
              )}>
                {timeLeft}
              </div>
            </div>
          </div>
          <div className="h-1 bg-muted">
            <div className="h-full bg-teal-600 transition-all duration-300" style={{ width: `${pct}%` }} />
          </div>
        </header>

        <div className="container py-8 max-w-2xl mx-auto">
          <div className="mb-2 flex items-center gap-2">
            <span className="text-xs font-medium text-teal-700 uppercase tracking-wider">{currentItem.category} · Domain {currentItem.domain}</span>
            <span className="text-[11px] font-bold text-white bg-teal-600 px-2 py-0.5 rounded-full">{currentItem.taskItem}</span>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-8">
            What is the correct definition of <span className="text-teal-700">{currentItem.term}</span>?
          </h2>

          <div className="space-y-3 mb-6">
            {choices.map((choice, i) => {
              const isCorrect = choice === currentItem.correctDefinition;
              const isSelected = choice === selectedAnswer;
              return (
                <button
                  key={i}
                  onClick={() => !showFeedback && handleAnswer(choice)}
                  disabled={showFeedback}
                  className={cn(
                    "w-full text-left p-4 rounded-xl border-2 text-sm leading-relaxed transition-all",
                    !showFeedback && "hover:border-teal-300 hover:bg-teal-50/50 cursor-pointer",
                    showFeedback && isCorrect && "border-violet-400 bg-violet-50 text-violet-800",
                    showFeedback && isSelected && !isCorrect && "border-red-400 bg-red-50 text-red-800",
                    !showFeedback && "border-border bg-card",
                    showFeedback && !isSelected && !isCorrect && "border-border bg-card opacity-60",
                  )}
                >
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold mt-0.5"
                      style={{ borderColor: 'currentColor' }}>
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span>{choice}</span>
                    {showFeedback && isCorrect && <CheckCircle2 className="w-4 h-4 text-violet-700 flex-shrink-0 ml-auto mt-0.5" />}
                    {showFeedback && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 ml-auto mt-0.5" />}
                  </div>
                </button>
              );
            })}
          </div>

          {showFeedback && (
            <div className="space-y-3">
              {selectedAnswer !== currentItem.correctDefinition && currentItem.misconceptions.length > 0 && (
                <div className="p-3 bg-teal-50 border border-teal-200 rounded-lg">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-800 mb-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    Common misconceptions about {currentItem.term}:
                  </div>
                  <ul className="space-y-1">
                    {currentItem.misconceptions.slice(0, 2).map((m, i) => (
                      <li key={i} className="text-xs text-teal-800 flex items-start gap-1.5">
                        <span className="text-teal-500 mt-0.5">✗</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <button
                onClick={handleNext}
                className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 rounded-xl transition-colors"
              >
                {currentIdx + 1 >= quizItems.length ? 'See Results' : 'Next Question'}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── Results view ──────────────────────────────────────────────────────────
  if (mode === 'results') {
    const correct = sessionResults.filter(r => r.correct).length;
    const pct = Math.round((correct / sessionResults.length) * 100);
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container flex items-center h-14">
            <button onClick={() => setMode('browse')} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              Back to Rapid Recall
            </button>
          </div>
        </header>
        <div className="container py-10 max-w-lg mx-auto text-center">
          {selectedDomain !== 'All' && (
            <div className="text-xs font-medium text-teal-700 uppercase tracking-wider mb-2">
              Domain {selectedDomain} · {DOMAIN_LABELS[selectedDomain]}
            </div>
          )}
          <div className="text-6xl font-black text-teal-700 mb-2">{pct}%</div>
          <div className="text-lg font-semibold text-foreground mb-1">{correct} of {sessionResults.length} correct</div>
          <p className="text-sm text-muted-foreground mb-8">
            {pct >= 80 ? 'Great work! Move on to Scenario Matching.' : 'Keep practicing — review the terms you missed.'}
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button onClick={() => startQuiz(filteredItems)} className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium px-5 py-2.5 rounded-lg transition-colors">
              <RotateCcw className="w-4 h-4" />
              Try Again
            </button>
            <button
              onClick={() => { setMode('browse'); setBrowseTab('missed'); }}
              className="flex items-center gap-2 border border-red-200 text-red-700 bg-red-50 px-5 py-2.5 rounded-lg hover:bg-red-100 transition-colors"
            >
              <ClipboardX className="w-4 h-4" />
              Review Missed Items
            </button>
            <button onClick={() => setMode('browse')} className="flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-lg hover:bg-muted/50 transition-colors">
              Browse Terms
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Browse view ───────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/dashboard')} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </button>
            <span className="text-border">|</span>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-teal-700" />
              <span className="font-semibold text-sm">Rapid Recall</span>
              <span className="text-xs bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full">Tier 2</span>
            </div>
          </div>
          <div className="text-xs text-muted-foreground">
            {totalAttempted} terms attempted · {accuracy}% accuracy
          </div>
        </div>

        {/* Tab bar */}
        <div className="container border-t border-border">
          <div className="flex gap-0">
            <button
              onClick={() => setBrowseTab('all')}
              className={cn(
                "flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors",
                browseTab === 'all'
                  ? "border-teal-600 text-teal-700"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              <BookOpen className="w-3.5 h-3.5" />
              All Terms
            </button>
            <button
              onClick={() => setBrowseTab('missed')}
              className={cn(
                "flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors",
                browseTab === 'missed'
                  ? "border-teal-600 text-teal-700"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              <ClipboardX className="w-3.5 h-3.5" />
              Missed Items
              {missedItems.length > 0 && (
                <span className={cn(
                  "ml-1 text-xs font-bold px-1.5 py-0.5 rounded-full",
                  browseTab === 'missed' ? "bg-teal-100 text-teal-800" : "bg-red-100 text-red-600"
                )}>
                  {missedItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="container py-6 max-w-3xl mx-auto">
        {/* Domain Filter — shown in both tabs */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Filter by Domain</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {Object.entries(DOMAIN_LABELS).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedDomain(key)}
                className={cn(
                  'px-3 py-1.5 rounded-full text-xs font-medium border transition-all',
                  selectedDomain === key
                    ? 'bg-teal-600 text-white border-teal-600 shadow-sm'
                    : 'bg-card text-muted-foreground border-border hover:border-teal-300 hover:text-teal-800'
                )}
              >
                {label}
                <span className={cn('ml-1.5 text-[10px]', selectedDomain === key ? 'text-amber-100' : 'text-muted-foreground/60')}>
                  ({domainCounts[key] ?? 0})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── All Terms tab ── */}
        {browseTab === 'all' && (
          <>
            {/* Start quiz CTA */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-teal-200 rounded-2xl p-6 mb-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-1">
                    {selectedDomain === 'All' ? 'Quick-Fire Quiz' : `Domain ${selectedDomain} Quiz`}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    15 seconds per question. Select the correct definition from 4 options.
                    {selectedDomain !== 'All' && ` Drilling ${DOMAIN_LABELS[selectedDomain]}.`}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <button
                      onClick={() => startQuiz(filteredItems)}
                      className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium px-5 py-2.5 rounded-lg transition-colors text-sm"
                    >
                      <Zap className="w-4 h-4" />
                      {selectedDomain === 'All'
                        ? `Start Full Quiz (${filteredItems.length} terms)`
                        : `Start Domain ${selectedDomain} (${filteredItems.length} terms)`}
                    </button>
                    {filteredItems.length > 10 && (
                      <button
                        onClick={() => startQuiz(shuffle(filteredItems).slice(0, Math.min(20, filteredItems.length)))}
                        className="flex items-center gap-2 border border-teal-300 text-teal-800 bg-white px-4 py-2.5 rounded-lg hover:bg-teal-50 transition-colors text-sm"
                      >
                        Quick {Math.min(20, filteredItems.length)}
                      </button>
                    )}
                  </div>
                </div>
                {totalAttempted > 0 && (
                  <div className="text-right flex-shrink-0">
                    <div className="text-3xl font-black text-teal-700">{accuracy}%</div>
                    <div className="text-xs text-muted-foreground">overall accuracy</div>
                  </div>
                )}
              </div>
            </div>

            {/* Weak Boundaries */}
            {weakBoundaries.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                  <h3 className="font-semibold text-sm text-foreground">Weak Boundaries</h3>
                  <span className="text-xs text-muted-foreground">— misconceptions you keep choosing</span>
                </div>
                <div className="space-y-2">
                  {weakBoundaries.map((wb, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-red-50 border border-red-100 rounded-lg">
                      <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-full flex-shrink-0">
                        {wb.term}
                      </span>
                      <span className="text-xs text-red-700 flex-1">{wb.misconception}</span>
                      <span className="text-xs font-bold text-red-500 flex-shrink-0">{wb.count}×</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Term grid */}
            <h3 className="font-semibold text-sm text-foreground mb-3">
              {selectedDomain === 'All'
                ? `All Terms (${rapidRecallItems.length})`
                : `Domain ${selectedDomain} Terms (${filteredItems.length})`}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {filteredItems.map(item => {
                const rec = progress.rapidRecall.find(r => r.termId === item.id);
                const attempted = rec ? rec.correct + rec.incorrect : 0;
                const acc = attempted > 0 ? Math.round((rec!.correct / attempted) * 100) : null;
                return (
                  <div
                    key={item.id}
                    className="p-3 rounded-lg border border-border bg-card hover:border-teal-300 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-muted-foreground">{item.category}</span>
                      <span className="text-[10px] font-bold text-teal-700 bg-teal-50 border border-teal-200 px-1.5 py-0.5 rounded">{item.taskItem}</span>
                    </div>
                    <div className="text-sm font-semibold text-foreground leading-tight">{item.term}</div>
                    {acc !== null && (
                      <div className={cn("text-xs mt-1 font-medium", acc >= 70 ? "text-violet-700" : "text-red-500")}>
                        {acc}% accuracy
                      </div>
                    )}
                    {acc === null && (
                      <div className="text-xs mt-1 text-muted-foreground/60">Not started</div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* ── Missed Items tab ── */}
        {browseTab === 'missed' && (
          <MissedItemsPanel
            missed={missedItems}
            onPractice={(items) => startQuiz(items)}
          />
        )}
      </div>
    </div>
  );
}
