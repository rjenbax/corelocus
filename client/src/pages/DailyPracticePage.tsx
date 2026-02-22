/**
 * DailyPracticePage — Mixed-tool focused session targeting weakest task items
 * Design: Academic Warmth — warm cream, forest green, editorial typography
 *
 * Session flow:
 *   1. Detect the 5 weakest task items from progress data
 *   2. Build a queue of ~10 mixed items (flashcard flip, rapid recall Q&A, scenario match)
 *      all targeting those weak task items
 *   3. Student works through the queue; each answer is recorded back to ProgressContext
 *   4. Summary screen shows score and links back to Dashboard
 */
import { useMemo, useState, useCallback } from 'react';
import { useLocation } from 'wouter';
import { useProgress } from '@/contexts/ProgressContext';
import { useExam } from '@/contexts/ExamContext';
import { ALL_TASK_ITEMS } from '@/data/taskList';
import { flashcards } from '@/data/flashcards';
import { rapidRecallItems } from '@/data/rapidRecall';
import { matchingItems } from '@/data/matchingScenarios';
import { allQuestions } from '@/data/allQuestions';
import { cn } from '@/lib/utils';
import { ArrowLeft, Zap, CheckCircle2, XCircle, ChevronRight, RotateCcw, Home, Target, Brain, Shuffle } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────
type ItemType = 'flashcard' | 'rapid-recall' | 'matching';

interface FlashcardItem {
  type: 'flashcard';
  taskCode: string;
  id: string;
  term: string;
  definition: string;
  example?: string;
  domain: string;
  domainFull: string;
}
interface RapidRecallItem {
  type: 'rapid-recall';
  taskCode: string;
  id: string;
  term: string;
  correctDefinition: string;
  distractors: string[];
  domain: string;
}
interface MatchingItem {
  type: 'matching';
  taskCode: string;
  id: string;
  concept: string;
  definition: string;
  domain: string;
  scenarios: { id: string; text: string; isCorrect: boolean; explanation: string }[];
}
type PracticeItem = FlashcardItem | RapidRecallItem | MatchingItem;

// ─── Weakness detection ───────────────────────────────────────────────────────
function useWeakTaskItems(count = 5): string[] {
  const { progress } = useProgress();
  const { state: examState } = useExam();

  return useMemo(() => {
    // Score each task item: lower score = weaker
    const scores: Record<string, { correct: number; total: number; seen: boolean }> = {};

    ALL_TASK_ITEMS.forEach(item => {
      scores[item.code] = { correct: 0, total: 0, seen: false };
    });

    // Flashcards
    flashcards.forEach(fc => {
      const p = progress.flashcards.find(f => f.cardId === fc.id);
      if (p) {
        scores[fc.taskCode].seen = true;
        scores[fc.taskCode].total += 1;
        if (p.mastered) scores[fc.taskCode].correct += 1;
      }
    });

    // Rapid Recall
    rapidRecallItems.forEach(item => {
      const p = progress.rapidRecall.find(r => r.termId === item.id);
      if (p && (p.correct + p.incorrect) > 0) {
        scores[item.taskItem].seen = true;
        scores[item.taskItem].total += p.correct + p.incorrect;
        scores[item.taskItem].correct += p.correct;
      }
    });

    // Exam
    allQuestions.forEach(q => {
      if (q.id in examState.answers) {
        scores[q.taskItem].seen = true;
        scores[q.taskItem].total += 1;
        if (examState.answers[q.id] === q.correctAnswer) {
          scores[q.taskItem].correct += 1;
        }
      }
    });

    // Sort: not-started first (prioritize unseen), then lowest accuracy
    const sorted = ALL_TASK_ITEMS.slice().sort((a, b) => {
      const sa = scores[a.code];
      const sb = scores[b.code];
      if (!sa.seen && !sb.seen) return 0;
      if (!sa.seen) return -1;
      if (!sb.seen) return 1;
      const accA = sa.total > 0 ? sa.correct / sa.total : 0;
      const accB = sb.total > 0 ? sb.correct / sb.total : 0;
      return accA - accB;
    });

    return sorted.slice(0, count).map(i => i.code);
  }, [progress, examState]);
}

// ─── Session builder ──────────────────────────────────────────────────────────
function buildSession(weakCodes: string[]): PracticeItem[] {
  const items: PracticeItem[] = [];

  // For each weak task code, try to find one flashcard, one rapid recall, one matching
  weakCodes.forEach(code => {
    // Flashcard
    const fc = flashcards.filter(f => f.taskCode === code);
    if (fc.length > 0) {
      const pick = fc[Math.floor(Math.random() * fc.length)];
      const { taskCode: _fc, ...fcRest } = pick as any;
      items.push({ type: 'flashcard', taskCode: code, ...fcRest });
    }

    // Rapid Recall
    const rr = rapidRecallItems.filter(r => r.taskItem === code);
    if (rr.length > 0) {
      const pick = rr[Math.floor(Math.random() * rr.length)];
      items.push({
        type: 'rapid-recall',
        taskCode: code,
        id: pick.id,
        term: pick.term,
        correctDefinition: pick.correctDefinition,
        distractors: pick.distractors,
        domain: pick.domain,
      });
    }

    // Matching — look for items whose concept maps to this domain
    const domain = code.charAt(0);
    const matchPool = matchingItems.filter(m => {
      // Try to match by domain letter
      return m.domain.startsWith(domain) || m.domain.includes(domain);
    });
    if (matchPool.length > 0) {
      const pick = matchPool[Math.floor(Math.random() * matchPool.length)];
      items.push({
        type: 'matching',
        taskCode: code,
        id: pick.id,
        concept: pick.concept,
        definition: pick.definition,
        domain: pick.domain,
        scenarios: pick.scenarios,
      });
    }
  });

  // Shuffle and cap at 12 items
  return items.sort(() => Math.random() - 0.5).slice(0, 12);
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function FlashcardQuestion({ item, onNext }: { item: FlashcardItem; onNext: (knew: boolean) => void }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Flashcard · {item.taskCode}</div>
      {/* Card */}
      <div
        className="w-full max-w-lg cursor-pointer"
        onClick={() => setFlipped(f => !f)}
      >
        <div className={cn(
          "rounded-2xl border-2 border-primary/20 bg-card p-8 min-h-[200px] flex flex-col justify-center items-center text-center transition-all duration-300 shadow-sm hover:shadow-md",
          flipped && "bg-primary/5 border-primary/40"
        )}>
          {!flipped ? (
            <>
              <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wide">{item.domainFull}</p>
              <h2 className="text-2xl font-bold text-foreground mb-2">{item.term}</h2>
              <p className="text-sm text-muted-foreground mt-3">Tap to reveal definition</p>
            </>
          ) : (
            <>
              <p className="text-xs text-primary font-medium mb-3 uppercase tracking-wide">Definition</p>
              <p className="text-base text-foreground leading-relaxed">{item.definition}</p>
              {item.example && (
                <p className="text-sm text-muted-foreground italic mt-4 border-t border-border pt-3">
                  <span className="font-medium not-italic">Example:</span> {item.example}
                </p>
              )}
            </>
          )}
        </div>
      </div>
      {flipped && (
        <div className="flex gap-3 w-full max-w-lg">
          <button
            onClick={() => onNext(false)}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-red-200 bg-red-50 text-red-700 font-medium text-sm hover:bg-red-100 transition-colors"
          >
            <XCircle className="w-4 h-4" /> Still Learning
          </button>
          <button
            onClick={() => onNext(true)}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-violet-200 bg-violet-50 text-violet-800 font-medium text-sm hover:bg-violet-100 transition-colors"
          >
            <CheckCircle2 className="w-4 h-4" /> Got It
          </button>
        </div>
      )}
    </div>
  );
}

function RapidRecallQuestion({ item, onNext }: { item: RapidRecallItem; onNext: (correct: boolean) => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const options = useMemo(() => {
    return [item.correctDefinition, ...item.distractors.slice(0, 3)].sort(() => Math.random() - 0.5);
  }, [item]);

  const submitted = selected !== null;

  return (
    <div className="flex flex-col gap-5 w-full max-w-lg">
      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide text-center">Rapid Recall · {item.taskCode}</div>
      <div className="rounded-2xl border-2 border-teal-200 bg-teal-50 p-6 text-center">
        <p className="text-xs text-teal-700 font-medium mb-2 uppercase tracking-wide">What is the definition of…</p>
        <h2 className="text-xl font-bold text-foreground">{item.term}</h2>
      </div>
      <div className="space-y-2.5">
        {options.map((opt, i) => {
          const isCorrect = opt === item.correctDefinition;
          const isSelected = selected === opt;
          return (
            <button
              key={i}
              disabled={submitted}
              onClick={() => {
                setSelected(opt);
                setTimeout(() => onNext(isCorrect), 1200);
              }}
              className={cn(
                "w-full text-left px-4 py-3.5 rounded-xl border-2 text-sm leading-relaxed transition-all duration-200",
                !submitted && "border-border bg-card hover:border-primary/40 hover:bg-primary/5",
                submitted && isCorrect && "border-violet-400 bg-violet-50 text-violet-800",
                submitted && isSelected && !isCorrect && "border-red-400 bg-red-50 text-red-800",
                submitted && !isSelected && !isCorrect && "border-border bg-card opacity-50",
              )}
            >
              <div className="flex items-start gap-2.5">
                <span className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold mt-0.5">
                  {String.fromCharCode(65 + i)}
                </span>
                <span>{opt}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function MatchingQuestion({ item, onNext }: { item: MatchingItem; onNext: (correct: boolean) => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const submitted = selected !== null;
  const correctId = item.scenarios.find(s => s.isCorrect)?.id ?? '';

  return (
    <div className="flex flex-col gap-5 w-full max-w-lg">
      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide text-center">Scenario Matching · {item.taskCode}</div>
      <div className="rounded-2xl border-2 border-teal-200 bg-teal-50 p-6">
        <p className="text-xs text-teal-600 font-medium mb-1 uppercase tracking-wide">Which scenario best illustrates…</p>
        <h2 className="text-lg font-bold text-foreground">{item.concept}</h2>
        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.definition}</p>
      </div>
      <div className="space-y-2.5">
        {item.scenarios.map((s, i) => {
          const isCorrect = s.id === correctId;
          const isSelected = selected === s.id;
          return (
            <button
              key={s.id}
              disabled={submitted}
              onClick={() => {
                setSelected(s.id);
                setTimeout(() => onNext(isCorrect), 1400);
              }}
              className={cn(
                "w-full text-left px-4 py-3.5 rounded-xl border-2 text-sm leading-relaxed transition-all duration-200",
                !submitted && "border-border bg-card hover:border-teal-400/60 hover:bg-teal-50/60",
                submitted && isCorrect && "border-violet-400 bg-violet-50 text-violet-800",
                submitted && isSelected && !isCorrect && "border-red-400 bg-red-50 text-red-800",
                submitted && !isSelected && !isCorrect && "border-border bg-card opacity-50",
              )}
            >
              <div className="flex items-start gap-2.5">
                <span className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold mt-0.5">
                  {String.fromCharCode(65 + i)}
                </span>
                <span>{s.text}</span>
              </div>
              {submitted && isSelected && !isCorrect && (
                <p className="mt-2 text-xs text-red-600 italic pl-7">{s.explanation}</p>
              )}
              {submitted && isCorrect && (isSelected || true) && isSelected && (
                <p className="mt-2 text-xs text-violet-700 italic pl-7">{s.explanation}</p>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function DailyPracticePage() {
  const [, navigate] = useLocation();
  const { markFlashcardSeen, markFlashcardMastered, recordRapidRecallAnswer } = useProgress();

  const weakCodes = useWeakTaskItems(5);
  const [session] = useState<PracticeItem[]>(() => buildSession(weakCodes));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<{ correct: boolean; type: ItemType }[]>([]);
  const [done, setDone] = useState(false);

  const current = session[currentIndex];

  const handleAnswer = useCallback((correct: boolean) => {
    const item = session[currentIndex];

    // Record to ProgressContext
    if (item.type === 'flashcard') {
      if (correct) markFlashcardMastered(item.id);
      else markFlashcardSeen(item.id);
    } else if (item.type === 'rapid-recall') {
      recordRapidRecallAnswer(item.id, correct);
    }
    // Matching doesn't have a dedicated record function yet — skip

    setResults(prev => [...prev, { correct, type: item.type }]);

    if (currentIndex + 1 >= session.length) {
      setDone(true);
    } else {
      setCurrentIndex(i => i + 1);
    }
  }, [currentIndex, session, markFlashcardMastered, markFlashcardSeen, recordRapidRecallAnswer]);

  const correctCount = results.filter(r => r.correct).length;
  const pct = results.length > 0 ? Math.round((correctCount / results.length) * 100) : 0;

  const TOOL_ICONS: Record<ItemType, React.ElementType> = {
    'flashcard': Shuffle,
    'rapid-recall': Zap,
    'matching': Brain,
  };
  const TOOL_LABELS: Record<ItemType, string> = {
    'flashcard': 'Flashcard',
    'rapid-recall': 'Rapid Recall',
    'matching': 'Scenario Match',
  };

    // ── Empty state for brand-new users with zero progress ──────────────────────
  if (session.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container flex items-center h-14 gap-3">
            <button onClick={() => navigate('/')} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" /> Dashboard
            </button>
            <span className="text-muted-foreground">/</span>
            <span className="text-sm font-medium text-foreground">Daily Practice</span>
          </div>
        </header>
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="max-w-sm text-center">
            <div className="w-16 h-16 rounded-2xl bg-violet-100 flex items-center justify-center mx-auto mb-5">
              <Target className="w-8 h-8 text-violet-600" />
            </div>
            <h2 className="text-xl font-bold text-foreground mb-3">No practice items yet</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Daily Practice targets your weakest task items. Complete some Flashcard or Rapid Recall sessions first so the platform knows where to focus your practice.
            </p>
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              <Home className="w-4 h-4" /> Start with Tier 1 Flashcards
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Summary screen ──────────────────────────────────────────────────────
  if (done) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container flex items-center h-14 gap-3">
            <button onClick={() => navigate('/')} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" /> Dashboard
            </button>
            <span className="text-muted-foreground">/</span>
            <span className="text-sm font-medium text-foreground">Daily Practice</span>
          </div>
        </header>
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="max-w-md w-full text-center">
            <div className={cn(
              "w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-black",
              pct >= 80 ? "bg-violet-100 text-violet-800" : pct >= 50 ? "bg-teal-100 text-teal-800" : "bg-red-100 text-red-700"
            )}>
              {pct}%
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Session Complete</h1>
            <p className="text-muted-foreground mb-2">
              {correctCount} of {results.length} correct across {session.length} mixed items
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Targeting task items: <span className="font-medium text-foreground">{weakCodes.join(', ')}</span>
            </p>

            {/* Per-item results */}
            <div className="space-y-2 mb-8 text-left">
              {results.map((r, i) => {
                const item = session[i];
                const Icon = TOOL_ICONS[r.type];
                return (
                  <div key={i} className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl border-2 text-sm",
                    r.correct ? "border-violet-200 bg-violet-50" : "border-red-200 bg-red-50"
                  )}>
                    <Icon className={cn("w-4 h-4 flex-shrink-0", r.correct ? "text-violet-700" : "text-red-500")} />
                    <span className="flex-1 font-medium text-foreground">
                      {item.type === 'flashcard' ? (item as FlashcardItem).term
                        : item.type === 'rapid-recall' ? (item as RapidRecallItem).term
                        : (item as MatchingItem).concept}
                    </span>
                    <span className="text-xs text-muted-foreground">{TOOL_LABELS[r.type]}</span>
                    {r.correct
                      ? <CheckCircle2 className="w-4 h-4 text-violet-600 flex-shrink-0" />
                      : <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    }
                  </div>
                );
              })}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => { window.location.reload(); }}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-border bg-card text-foreground font-medium text-sm hover:bg-muted/40 transition-colors"
              >
                <RotateCcw className="w-4 h-4" /> New Session
              </button>
              <button
                onClick={() => navigate('/')}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
              >
                <Home className="w-4 h-4" /> Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Practice screen ─────────────────────────────────────────────────────────
  const Icon = current ? TOOL_ICONS[current.type] : Brain;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex items-center h-14 gap-3">
          <button onClick={() => navigate('/')} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" /> Dashboard
          </button>
          <span className="text-muted-foreground">/</span>
          <span className="text-sm font-medium text-foreground">Daily Practice</span>
          <div className="ml-auto flex items-center gap-3">
            <span className="text-xs text-muted-foreground">{currentIndex + 1} / {session.length}</span>
            <div className="w-24 h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex) / session.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Weak task items banner */}
      <div className="border-b border-border bg-teal-50/60">
        <div className="container py-2.5 flex items-center gap-2 flex-wrap">
          <Target className="w-3.5 h-3.5 text-teal-700 flex-shrink-0" />
          <span className="text-xs text-teal-800 font-medium">Targeting your weakest task items:</span>
          {weakCodes.map(code => (
            <span key={code} className="text-xs font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-800 border border-teal-200">
              {code}
            </span>
          ))}
        </div>
      </div>

      {/* Question area */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-lg">
          {/* Tool type badge */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Icon className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              {current ? TOOL_LABELS[current.type] : ''}
            </span>
          </div>

          {current?.type === 'flashcard' && (
            <FlashcardQuestion
              item={current as FlashcardItem}
              onNext={handleAnswer}
            />
          )}
          {current?.type === 'rapid-recall' && (
            <RapidRecallQuestion
              item={current as RapidRecallItem}
              onNext={handleAnswer}
            />
          )}
          {current?.type === 'matching' && (
            <MatchingQuestion
              item={current as MatchingItem}
              onNext={handleAnswer}
            />
          )}
        </div>
      </div>

      {/* Bottom progress dots */}
      <div className="border-t border-border bg-card/60 py-3">
        <div className="container flex items-center justify-center gap-1.5">
          {session.map((item, i) => {
            const result = results[i];
            return (
              <div
                key={i}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  i === currentIndex && "w-4 bg-primary",
                  i < currentIndex && result?.correct && "bg-green-400",
                  i < currentIndex && !result?.correct && "bg-red-400",
                  i > currentIndex && "bg-muted",
                )}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
