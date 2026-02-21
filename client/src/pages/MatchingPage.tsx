/**
 * MatchingPage — Tier 3: Recognize in context
 * Given a concept definition, select the clinical scenario that illustrates it.
 * Design: Academic Warmth — teal palette, domain filter pill bar, concept grid preview
 */
import { useState, useMemo, useCallback } from 'react';
import { useLocation } from 'wouter';
import { matchingItems } from '@/data/matchingScenarios';
import { useProgress } from '@/contexts/ProgressContext';
import { ArrowLeft, Shuffle, CheckCircle2, XCircle, ChevronRight, RotateCcw, BookOpen, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Derive sorted unique domains from data
const ALL_DOMAINS = ['All', ...Array.from(new Set(matchingItems.map(m => m.domain))).sort()];

type Mode = 'intro' | 'quiz' | 'results';

export default function MatchingPage() {
  const [, navigate] = useLocation();
  const { recordMatchingSession } = useProgress();
  const [mode, setMode] = useState<Mode>('intro');
  const [selectedDomain, setSelectedDomain] = useState<string>('All');
  const [quizItems, setQuizItems] = useState(matchingItems);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [results, setResults] = useState<{ itemId: string; correct: boolean }[]>([]);

  // Items filtered by selected domain (for preview grid + quiz pool)
  const filteredItems = useMemo(
    () => selectedDomain === 'All' ? matchingItems : matchingItems.filter(m => m.domain === selectedDomain),
    [selectedDomain]
  );

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
      const finalCorrect = results.filter(r => r.correct).length;
      const score = Math.round((finalCorrect / quizItems.length) * 100);
      recordMatchingSession(score);
      setMode('results');
    } else {
      setCurrentIdx(i => i + 1);
    }
  }, [currentIdx, quizItems.length, results, recordMatchingSession]);

  const startQuiz = () => {
    setQuizItems(shuffle(filteredItems));
    setCurrentIdx(0);
    setSelectedId(null);
    setShowFeedback(false);
    setResults([]);
    setMode('quiz');
  };

  // ── Quiz screen ──────────────────────────────────────────────────────────
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
            <div className="flex items-center gap-2">
              {selectedDomain !== 'All' && (
                <span className="text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full hidden sm:inline">
                  {selectedDomain}
                </span>
              )}
              <span className="text-xs text-muted-foreground">{currentIdx + 1} / {quizItems.length}</span>
            </div>
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

  // ── Results screen ───────────────────────────────────────────────────────
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
          {selectedDomain !== 'All' && (
            <div className="inline-flex items-center gap-1.5 text-xs font-medium text-teal-700 bg-teal-100 rounded-full px-3 py-1 mb-4">
              <Filter className="w-3 h-3" />
              {selectedDomain}
            </div>
          )}
          <div className="text-6xl font-black text-teal-600 mb-2">{pct}%</div>
          <div className="text-lg font-semibold text-foreground mb-1">{correct} of {results.length} correct</div>
          <p className="text-sm text-muted-foreground mb-8">
            {pct >= 80
              ? 'Strong conceptual understanding! Try the Venn Diagram tool next.'
              : 'Review the concepts you missed and try again.'}
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button onClick={startQuiz} className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium px-5 py-2.5 rounded-lg transition-colors">
              <RotateCcw className="w-4 h-4" />
              Try Again
            </button>
            {selectedDomain !== 'All' && (
              <button
                onClick={() => { setSelectedDomain('All'); setMode('intro'); }}
                className="flex items-center gap-2 border border-teal-300 text-teal-700 bg-teal-50 px-5 py-2.5 rounded-lg hover:bg-teal-100 transition-colors"
              >
                Practice All Domains
              </button>
            )}
            <button onClick={() => navigate('/venn')} className="flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-lg hover:bg-muted/50 transition-colors">
              Venn Diagram →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Intro screen ─────────────────────────────────────────────────────────
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
        {/* Info card */}
        <div className="bg-teal-50 border-2 border-teal-200 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <BookOpen className="w-8 h-8 text-teal-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">Definition → Clinical Scenario</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                You'll see a concept definition. Select the clinical scenario that best illustrates it from 4 options.
                This bridges the gap between knowing a definition and recognizing it in practice.
              </p>
              <div className="flex items-center gap-3 text-xs text-teal-700 flex-wrap">
                <span className="bg-teal-100 px-2 py-1 rounded">{matchingItems.length} concepts total</span>
                <span className="bg-teal-100 px-2 py-1 rounded">4 scenarios each</span>
                <span className="bg-teal-100 px-2 py-1 rounded">8 domains</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Domain filter pill bar ── */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Filter by domain</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {ALL_DOMAINS.map(domain => {
              const count = domain === 'All'
                ? matchingItems.length
                : matchingItems.filter(m => m.domain === domain).length;
              const isActive = selectedDomain === domain;
              return (
                <button
                  key={domain}
                  onClick={() => setSelectedDomain(domain)}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all",
                    isActive
                      ? "bg-teal-600 text-white border-teal-600 shadow-sm"
                      : "bg-card text-muted-foreground border-border hover:border-teal-300 hover:text-teal-700 hover:bg-teal-50"
                  )}
                >
                  {domain}
                  <span className={cn(
                    "text-[10px] font-bold px-1 py-0.5 rounded-full min-w-[18px] text-center",
                    isActive ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                  )}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Start button — updates with filtered count */}
        <div className="mb-10">
          <button
            onClick={startQuiz}
            disabled={filteredItems.length === 0}
            className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
          >
            <Shuffle className="w-5 h-5" />
            {selectedDomain === 'All'
              ? `Start Matching (${filteredItems.length} items)`
              : `Start — ${selectedDomain} (${filteredItems.length} items)`}
          </button>
        </div>

        {/* Concept preview grid — filtered */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-sm text-foreground">
              {selectedDomain === 'All' ? 'All concepts' : `${selectedDomain} concepts`}
              <span className="ml-2 text-xs text-muted-foreground font-normal">({filteredItems.length})</span>
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {filteredItems.map(item => (
              <div key={item.id} className="p-2.5 rounded-lg border border-border bg-card text-xs hover:border-teal-200 hover:bg-teal-50/30 transition-colors">
                <div className="text-muted-foreground mb-0.5 truncate">{item.domain}</div>
                <div className="font-medium text-foreground">{item.concept}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
