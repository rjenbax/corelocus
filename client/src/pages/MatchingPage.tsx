/**
 * MatchingPage — Tier 3: Understand (L2)
 * Given a concept definition, select the clinical scenario that illustrates it
 */
import { useState, useMemo, useCallback } from 'react';
import { useLocation } from 'wouter';
import { matchingItems } from '@/data/matchingScenarios';
import { useProgress } from '@/contexts/ProgressContext';
import { ArrowLeft, Shuffle, CheckCircle2, XCircle, ChevronRight, RotateCcw, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type Mode = 'intro' | 'quiz' | 'results';

export default function MatchingPage() {
  const [, navigate] = useLocation();
  const { recordMatchingSession } = useProgress();
  const [mode, setMode] = useState<Mode>('intro');
  const [quizItems, setQuizItems] = useState(matchingItems);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [results, setResults] = useState<{ itemId: string; correct: boolean }[]>([]);

  const currentItem = quizItems[currentIdx];
  const shuffledScenarios = useMemo(() => currentItem ? shuffle(currentItem.scenarios) : [], [currentItem]);

  const handleSelect = useCallback((scenarioId: string) => {
    if (showFeedback) return;
    setSelectedId(scenarioId);
    setShowFeedback(true);
    const scenario = currentItem.scenarios.find(s => s.id === scenarioId);
    const correct = scenario?.isCorrect ?? false;
    setResults(prev => [...prev, { itemId: currentItem.id, correct }]);
  }, [showFeedback, currentItem]);

  const handleNext = useCallback(() => {
    setShowFeedback(false);
    setSelectedId(null);
    if (currentIdx + 1 >= quizItems.length) {
      const correct = results.filter(r => r.correct).length + (results.length < quizItems.length ? 0 : 0);
      const finalCorrect = results.filter(r => r.correct).length;
      const score = Math.round((finalCorrect / quizItems.length) * 100);
      recordMatchingSession(score);
      setMode('results');
    } else {
      setCurrentIdx(i => i + 1);
    }
  }, [currentIdx, quizItems.length, results, recordMatchingSession]);

  const startQuiz = () => {
    setQuizItems(shuffle(matchingItems));
    setCurrentIdx(0);
    setSelectedId(null);
    setShowFeedback(false);
    setResults([]);
    setMode('quiz');
  };

  if (mode === 'quiz' && currentItem) {
    const correctScenario = currentItem.scenarios.find(s => s.isCorrect)!;
    const selectedScenario = currentItem.scenarios.find(s => s.id === selectedId);
    const isCorrect = selectedScenario?.isCorrect ?? false;
    const pct = (currentIdx / quizItems.length) * 100;

    return (
      <div className="min-h-screen bg-background">
        <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container flex items-center justify-between h-14">
            <button onClick={() => setMode('intro')} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              Exit
            </button>
            <span className="text-xs text-muted-foreground">{currentIdx + 1} / {quizItems.length}</span>
          </div>
          <div className="h-1 bg-muted">
            <div className="h-full bg-teal-500 transition-all duration-300" style={{ width: `${pct}%` }} />
          </div>
        </header>

        <div className="container py-8 max-w-2xl mx-auto">
          {/* Concept card */}
          <div className="bg-teal-50 border-2 border-teal-200 rounded-2xl p-5 mb-6">
            <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-2">
              {currentItem.domain} · Match this concept
            </div>
            <h2 className="text-xl font-bold text-foreground mb-2">{currentItem.concept}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed italic">
              "{currentItem.definition}"
            </p>
          </div>

          <p className="text-sm font-medium text-foreground mb-4">
            Which clinical scenario best illustrates this concept?
          </p>

          <div className="space-y-3 mb-6">
            {shuffledScenarios.map((scenario, i) => {
              const isSelected = scenario.id === selectedId;
              const isThisCorrect = scenario.isCorrect;
              return (
                <button
                  key={scenario.id}
                  onClick={() => handleSelect(scenario.id)}
                  disabled={showFeedback}
                  className={cn(
                    "w-full text-left p-4 rounded-xl border-2 text-sm leading-relaxed transition-all",
                    !showFeedback && "hover:border-teal-300 hover:bg-teal-50/50 cursor-pointer border-border bg-card",
                    showFeedback && isThisCorrect && "border-green-400 bg-green-50",
                    showFeedback && isSelected && !isThisCorrect && "border-red-400 bg-red-50",
                    showFeedback && !isSelected && !isThisCorrect && "border-border bg-card opacity-50",
                  )}
                >
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold mt-0.5 text-muted-foreground">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className={cn(
                      showFeedback && isThisCorrect && "text-green-800",
                      showFeedback && isSelected && !isThisCorrect && "text-red-800",
                    )}>{scenario.text}</span>
                    {showFeedback && isThisCorrect && <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 ml-auto mt-0.5" />}
                    {showFeedback && isSelected && !isThisCorrect && <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 ml-auto mt-0.5" />}
                  </div>
                </button>
              );
            })}
          </div>

          {showFeedback && (
            <div className="space-y-3">
              <div className={cn(
                "p-4 rounded-xl border",
                isCorrect ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
              )}>
                <div className={cn("font-semibold text-sm mb-1", isCorrect ? "text-green-700" : "text-red-700")}>
                  {isCorrect ? '✓ Correct!' : '✗ Not quite.'}
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {selectedScenario?.explanation ?? correctScenario.explanation}
                </p>
                {!isCorrect && (
                  <p className="text-xs text-green-700 mt-2 font-medium">
                    Correct: {correctScenario.text.substring(0, 80)}...
                  </p>
                )}
              </div>
              <button
                onClick={handleNext}
                className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 rounded-xl transition-colors"
              >
                {currentIdx + 1 >= quizItems.length ? 'See Results' : 'Next'}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (mode === 'results') {
    const correct = results.filter(r => r.correct).length;
    const pct = Math.round((correct / results.length) * 100);
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container flex items-center h-14">
            <button onClick={() => setMode('intro')} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          </div>
        </header>
        <div className="container py-10 max-w-lg mx-auto text-center">
          <div className="text-6xl font-black text-teal-600 mb-2">{pct}%</div>
          <div className="text-lg font-semibold text-foreground mb-1">{correct} of {results.length} correct</div>
          <p className="text-sm text-muted-foreground mb-8">
            {pct >= 80 ? 'Strong conceptual understanding! Try the Venn Diagram tool next.' : 'Review the concepts you missed and try again.'}
          </p>
          <div className="flex gap-3 justify-center">
            <button onClick={startQuiz} className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium px-5 py-2.5 rounded-lg transition-colors">
              <RotateCcw className="w-4 h-4" />
              Try Again
            </button>
            <button onClick={() => navigate('/venn')} className="flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-lg hover:bg-muted/50 transition-colors">
              Venn Diagram →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Intro mode
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/')} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </button>
            <span className="text-border">|</span>
            <div className="flex items-center gap-2">
              <Shuffle className="w-4 h-4 text-teal-600" />
              <span className="font-semibold text-sm">Scenario Matching</span>
              <span className="text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full">Tier 3</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container py-10 max-w-2xl mx-auto">
        <div className="bg-teal-50 border-2 border-teal-200 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <BookOpen className="w-8 h-8 text-teal-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">Definition → Clinical Scenario</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                You'll see a concept definition. Select the clinical scenario that best illustrates it from 4 options. 
                This bridges the gap between knowing a definition and recognizing it in practice.
              </p>
              <div className="flex items-center gap-3 text-xs text-teal-700">
                <span className="bg-teal-100 px-2 py-1 rounded">{matchingItems.length} concepts</span>
                <span className="bg-teal-100 px-2 py-1 rounded">4 scenarios each</span>
                <span className="bg-teal-100 px-2 py-1 rounded">Bloom's L2: Understand</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={startQuiz}
            className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors mx-auto"
          >
            <Shuffle className="w-5 h-5" />
            Start Matching ({matchingItems.length} items)
          </button>
        </div>

        {/* Preview of concepts */}
        <div className="mt-10">
          <h3 className="font-semibold text-sm text-foreground mb-3">Concepts covered</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {matchingItems.map(item => (
              <div key={item.id} className="p-2.5 rounded-lg border border-border bg-card text-xs">
                <div className="text-muted-foreground mb-0.5">{item.domain}</div>
                <div className="font-medium text-foreground">{item.concept}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
