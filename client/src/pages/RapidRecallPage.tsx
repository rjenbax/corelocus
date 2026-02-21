/**
 * RapidRecall — Tier 2: Remember / Understand (L1–2)
 * Timed quick-fire Q&A with Weak Boundaries tracking
 */
import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { rapidRecallItems } from '@/data/rapidRecall';
import { useProgress } from '@/contexts/ProgressContext';
import { ArrowLeft, Zap, AlertTriangle, CheckCircle2, XCircle, RotateCcw, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

type Mode = 'browse' | 'quiz' | 'results';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function RapidRecallPage() {
  const [, navigate] = useLocation();
  const { progress, recordRapidRecallAnswer } = useProgress();
  const [mode, setMode] = useState<Mode>('browse');
  const [quizItems, setQuizItems] = useState(rapidRecallItems);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [sessionResults, setSessionResults] = useState<{ termId: string; correct: boolean }[]>([]);
  const [timeLeft, setTimeLeft] = useState(15);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentItem = quizItems[currentIdx];

  // Build shuffled choices for current item
  const choices = useMemo(() => {
    if (!currentItem) return [];
    return shuffle([currentItem.correctDefinition, ...currentItem.distractors.slice(0, 3)]);
  }, [currentItem]);

  // Timer
  useEffect(() => {
    if (mode !== 'quiz' || showFeedback) return;
    setTimeLeft(15);
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          handleAnswer(null); // time out = wrong
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current!);
  }, [mode, currentIdx, showFeedback]);

  const handleAnswer = useCallback((answer: string | null) => {
    if (!currentItem || showFeedback) return;
    clearInterval(timerRef.current!);
    const correct = answer === currentItem.correctDefinition;
    setSelectedAnswer(answer);
    setShowFeedback(true);
    setSessionResults(prev => [...prev, { termId: currentItem.id, correct }]);
    recordRapidRecallAnswer(currentItem.id, correct);
  }, [currentItem, showFeedback, recordRapidRecallAnswer]);

  const handleNext = useCallback(() => {
    setShowFeedback(false);
    setSelectedAnswer(null);
    if (currentIdx + 1 >= quizItems.length) {
      setMode('results');
    } else {
      setCurrentIdx(i => i + 1);
    }
  }, [currentIdx, quizItems.length]);

  const startQuiz = (items = rapidRecallItems) => {
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
      r.weakBoundaries.forEach(wb => {
        const misconception = item.misconceptions.find(m => m === wb.misconceptionId) ?? wb.misconceptionId;
        all.push({ termId: r.termId, term: item.term, misconception, count: wb.count });
      });
    });
    return all.sort((a, b) => b.count - a.count).slice(0, 10);
  }, [progress.rapidRecall]);

  const totalAttempted = progress.rapidRecall.length;
  const totalCorrect = progress.rapidRecall.reduce((s, r) => s + r.correct, 0);
  const totalIncorrect = progress.rapidRecall.reduce((s, r) => s + r.incorrect, 0);
  const accuracy = totalAttempted > 0 ? Math.round((totalCorrect / (totalCorrect + totalIncorrect)) * 100) : 0;

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
              <span className="text-xs text-muted-foreground">{currentIdx + 1} / {quizItems.length}</span>
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors",
                timeLeft <= 5 ? "border-red-400 text-red-600 bg-red-50" : "border-amber-300 text-amber-700 bg-amber-50"
              )}>
                {timeLeft}
              </div>
            </div>
          </div>
          <div className="h-1 bg-muted">
            <div className="h-full bg-amber-500 transition-all duration-300" style={{ width: `${pct}%` }} />
          </div>
        </header>

        <div className="container py-8 max-w-2xl mx-auto">
          <div className="mb-2 text-xs font-medium text-amber-600 uppercase tracking-wider">
            {currentItem.category} · Domain {currentItem.domain}
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-8">
            What is the correct definition of <span className="text-amber-600">{currentItem.term}</span>?
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
                    !showFeedback && "hover:border-amber-300 hover:bg-amber-50/50 cursor-pointer",
                    showFeedback && isCorrect && "border-green-400 bg-green-50 text-green-800",
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
                    {showFeedback && isCorrect && <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 ml-auto mt-0.5" />}
                    {showFeedback && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 ml-auto mt-0.5" />}
                  </div>
                </button>
              );
            })}
          </div>

          {showFeedback && (
            <div className="space-y-3">
              {selectedAnswer !== currentItem.correctDefinition && currentItem.misconceptions.length > 0 && (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-700 mb-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    Common misconceptions about {currentItem.term}:
                  </div>
                  <ul className="space-y-1">
                    {currentItem.misconceptions.slice(0, 2).map((m, i) => (
                      <li key={i} className="text-xs text-amber-700 flex items-start gap-1.5">
                        <span className="text-amber-400 mt-0.5">✗</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <button
                onClick={handleNext}
                className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 rounded-xl transition-colors"
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
          <div className="text-6xl font-black text-amber-600 mb-2">{pct}%</div>
          <div className="text-lg font-semibold text-foreground mb-1">{correct} of {sessionResults.length} correct</div>
          <p className="text-sm text-muted-foreground mb-8">
            {pct >= 80 ? 'Great work! Move on to Scenario Matching.' : 'Keep practicing — review the terms you missed.'}
          </p>
          <div className="flex gap-3 justify-center">
            <button onClick={() => startQuiz()} className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-medium px-5 py-2.5 rounded-lg transition-colors">
              <RotateCcw className="w-4 h-4" />
              Try Again
            </button>
            <button onClick={() => setMode('browse')} className="flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-lg hover:bg-muted/50 transition-colors">
              Browse Terms
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Browse mode
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/')} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </button>
            <span className="text-border">|</span>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-600" />
              <span className="font-semibold text-sm">Rapid Recall</span>
              <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">Tier 2</span>
            </div>
          </div>
          <div className="text-xs text-muted-foreground">
            {totalAttempted} terms attempted · {accuracy}% accuracy
          </div>
        </div>
      </header>

      <div className="container py-6 max-w-3xl mx-auto">
        {/* Start quiz CTA */}
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-2xl p-6 mb-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-1">Quick-Fire Quiz</h2>
              <p className="text-sm text-muted-foreground mb-4">
                15 seconds per question. Select the correct definition from 4 options. 
                Track your weak boundaries over time.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => startQuiz()}
                  className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-medium px-5 py-2.5 rounded-lg transition-colors text-sm"
                >
                  <Zap className="w-4 h-4" />
                  Start Full Quiz ({rapidRecallItems.length} terms)
                </button>
                <button
                  onClick={() => startQuiz(shuffle(rapidRecallItems).slice(0, 20))}
                  className="flex items-center gap-2 border border-amber-300 text-amber-700 bg-white px-4 py-2.5 rounded-lg hover:bg-amber-50 transition-colors text-sm"
                >
                  Quick 20
                </button>
              </div>
            </div>
            {totalAttempted > 0 && (
              <div className="text-right flex-shrink-0">
                <div className="text-3xl font-black text-amber-600">{accuracy}%</div>
                <div className="text-xs text-muted-foreground">accuracy</div>
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
        <h3 className="font-semibold text-sm text-foreground mb-3">All Terms ({rapidRecallItems.length})</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {rapidRecallItems.map(item => {
            const rec = progress.rapidRecall.find(r => r.termId === item.id);
            const attempted = rec ? rec.correct + rec.incorrect : 0;
            const acc = attempted > 0 ? Math.round((rec!.correct / attempted) * 100) : null;
            return (
              <div
                key={item.id}
                className="p-3 rounded-lg border border-border bg-card hover:border-amber-300 transition-colors"
              >
                <div className="text-xs text-muted-foreground mb-1">{item.category}</div>
                <div className="text-sm font-semibold text-foreground leading-tight">{item.term}</div>
                {acc !== null && (
                  <div className={cn("text-xs mt-1 font-medium", acc >= 70 ? "text-green-600" : "text-red-500")}>
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
      </div>
    </div>
  );
}
