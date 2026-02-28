/**
 * MatchingPage — Tier 3: Recognize in context
 * Given a concept definition, select the clinical scenario that illustrates it.
 *
 * Design: Academic Warmth — teal palette, domain-grouped accordion browse view
 * matching Tier 2 (RapidRecall) layout pattern.
 *
 * Browse view:
 *   - Domain filter pill bar
 *   - Start quiz CTA card
 *   - Domain-grouped accordion (expand to see concepts, practice per domain)
 */
import { useState, useMemo, useCallback } from 'react';
import { useLocation } from 'wouter';
import { matchingItems } from '@/data/matchingScenarios';
import { useProgress } from '@/contexts/ProgressContext';
import {
  ArrowLeft, Shuffle, CheckCircle2, XCircle, ChevronRight, RotateCcw,
  BookOpen, Filter, ChevronDown, Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Canonical domain order — mirrors BCBA exam weighting
const DOMAIN_ORDER = [
  'Behavior Principles',
  'Verbal Behavior',
  'Measurement',
  'Research & Design',
  'Assessment',
  'Skill Acquisition',
  'Behavior Reduction',
  'Selecting & Implementing Interventions',
  'Ethics & Professional Practice',
  'Supervision',
  'Personnel Supervision',
  'Personnel Supervision & Management',
];

const DOMAIN_LABELS: Record<string, string> = {
  All: 'All Domains',
  'Behavior Principles': 'Behavior Principles',
  'Verbal Behavior': 'Verbal Behavior',
  'Measurement': 'Measurement',
  'Research & Design': 'Research & Design',
  'Assessment': 'Assessment',
  'Skill Acquisition': 'Skill Acquisition',
  'Behavior Reduction': 'Behavior Reduction',
  'Selecting & Implementing Interventions': 'Selecting & Implementing Interventions',
  'Ethics & Professional Practice': 'Ethics & Professional Practice',
  'Supervision': 'Supervision',
  'Personnel Supervision': 'Personnel Supervision',
  'Personnel Supervision & Management': 'Personnel Supervision & Management',
};

type Mode = 'browse' | 'quiz' | 'results';

// ─── Domain Accordion ────────────────────────────────────────────────────────

function DomainAccordion({
  items,
  progress: prog,
  onPracticeDomain,
}: {
  items: typeof matchingItems;
  progress: ReturnType<typeof useProgress>['progress'];
  onPracticeDomain: (domainItems: typeof matchingItems) => void;
}) {
  const [openDomains, setOpenDomains] = useState<Set<string>>(new Set());

  const toggleDomain = (domain: string) => {
    setOpenDomains(prev => {
      const next = new Set(prev);
      if (next.has(domain)) next.delete(domain); else next.add(domain);
      return next;
    });
  };

  // Group items by domain, preserving canonical order
  const grouped = useMemo(() => {
    const map = new Map<string, typeof matchingItems>();
    DOMAIN_ORDER.forEach(d => map.set(d, []));
    items.forEach(item => {
      if (!map.has(item.domain)) map.set(item.domain, []);
      map.get(item.domain)!.push(item);
    });
    // Remove empty domains
    map.forEach((v, k) => { if (v.length === 0) map.delete(k); });
    return map;
  }, [items]);

  // Best score for matching (single global score, not per-concept)
  const bestScore = prog.matching[0]?.score ?? null;

  return (
    <div className="space-y-2">
      {Array.from(grouped.entries()).map(([domain, domainItems]) => {
        const isOpen = openDomains.has(domain);

        return (
          <div key={domain} className="border border-border rounded-xl overflow-hidden bg-card">
            {/* Section header */}
            <div className="flex items-center gap-3 px-4 py-3">
              <button
                onClick={() => toggleDomain(domain)}
                className="flex items-center gap-3 flex-1 min-w-0 text-left"
              >
                {isOpen
                  ? <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  : <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />}
                <span className="font-semibold text-sm text-foreground truncate">{domain}</span>
                <span className="text-xs text-muted-foreground flex-shrink-0">{domainItems.length} concepts</span>
                {bestScore !== null && (
                  <span className={cn(
                    'text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0',
                    bestScore >= 80 ? 'bg-teal-100 text-teal-800' :
                    bestScore >= 70 ? 'bg-amber-100 text-amber-800' :
                    'bg-red-100 text-red-700'
                  )}>
                    Best: {bestScore}%
                  </span>
                )}
              </button>
              {/* Practice this domain button */}
              <button
                onClick={() => onPracticeDomain(domainItems)}
                className="flex items-center gap-1.5 text-xs font-medium text-teal-700 border border-teal-200 bg-teal-50 hover:bg-teal-100 px-3 py-1.5 rounded-lg transition-colors flex-shrink-0"
              >
                <Zap className="w-3 h-3" />
                Practice
              </button>
            </div>

            {/* Expanded concept list */}
            {isOpen && (
              <div className="border-t border-border">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-border">
                  {domainItems.map(item => (
                    <div key={item.id} className="p-3 bg-card hover:bg-muted/40 transition-colors">
                      <div className="text-sm font-medium text-foreground leading-tight">{item.concept}</div>
                      <div className="text-[10px] mt-0.5 text-muted-foreground/70 italic leading-snug line-clamp-2">
                        {item.definition.substring(0, 80)}...
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function MatchingPage() {
  const [, navigate] = useLocation();
  const { progress, recordMatchingSession } = useProgress();
  const [mode, setMode] = useState<Mode>('browse');
  const [selectedDomain, setSelectedDomain] = useState<string>('All');
  const [quizItems, setQuizItems] = useState(matchingItems);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [results, setResults] = useState<{ itemId: string; correct: boolean }[]>([]);

  // Items filtered by selected domain
  const filteredItems = useMemo(
    () => selectedDomain === 'All' ? matchingItems : matchingItems.filter(m => m.domain === selectedDomain),
    [selectedDomain]
  );

  // Domain item counts
  const domainCounts = useMemo(() => {
    const counts: Record<string, number> = { All: matchingItems.length };
    DOMAIN_ORDER.forEach(key => {
      counts[key] = matchingItems.filter(i => i.domain === key).length;
    });
    return counts;
  }, []);

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

  const startQuiz = (items = filteredItems) => {
    setQuizItems(shuffle(items));
    setCurrentIdx(0);
    setSelectedId(null);
    setShowFeedback(false);
    setResults([]);
    setMode('quiz');
  };

  const totalAttempts = progress.matching[0]?.totalAttempts ?? 0;
  const bestScore = progress.matching[0]?.score ?? null;

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
            <button onClick={() => setMode('browse')} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              Exit Quiz
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
                    showFeedback && isThisCorrect && "border-violet-400 bg-violet-50",
                    showFeedback && isSelected && !isThisCorrect && "border-red-400 bg-red-50",
                    showFeedback && !isSelected && !isThisCorrect && "border-border bg-card opacity-50",
                  )}
                >
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold mt-0.5 text-muted-foreground">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className={cn(
                      showFeedback && isThisCorrect && "text-violet-800",
                      showFeedback && isSelected && !isThisCorrect && "text-red-800",
                    )}>{scenario.text}</span>
                    {showFeedback && isThisCorrect && <CheckCircle2 className="w-4 h-4 text-violet-700 flex-shrink-0 ml-auto mt-0.5" />}
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
                isCorrect ? "bg-violet-50 border-violet-200" : "bg-red-50 border-red-200"
              )}>
                <div className={cn("font-semibold text-sm mb-1", isCorrect ? "text-violet-800" : "text-red-700")}>
                  {isCorrect ? '✓ Correct!' : '✗ Not quite.'}
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {selectedScenario?.explanation ?? correctScenario.explanation}
                </p>
                {!isCorrect && (
                  <p className="text-xs text-violet-800 mt-2 font-medium">
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
            <button onClick={() => setMode('browse')} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              Back to Scenario Matching
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
            {pct >= 70
              ? 'Strong conceptual understanding! Try the Venn Diagram tool next.'
              : 'Score 70% or higher to mark this session complete. Review the concepts you missed and try again.'}
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button onClick={() => startQuiz()} className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium px-5 py-2.5 rounded-lg transition-colors">
              <RotateCcw className="w-4 h-4" />
              Try Again
            </button>
            {selectedDomain !== 'All' && (
              <button
                onClick={() => { setSelectedDomain('All'); setMode('browse'); }}
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
              <Shuffle className="w-4 h-4 text-teal-600" />
              <span className="font-semibold text-sm">Scenario Matching</span>
              <span className="text-xs bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full">Tier 3</span>
            </div>
          </div>
          <div className="text-xs text-muted-foreground">
            {totalAttempts} session{totalAttempts !== 1 ? 's' : ''} completed
            {bestScore !== null && <span className="ml-1">· best {bestScore}%</span>}
          </div>
        </div>
      </header>

      <div className="container py-6 max-w-3xl mx-auto">
        {/* Domain Filter */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Filter by Domain</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {['All', ...DOMAIN_ORDER.filter(d => domainCounts[d] > 0)].map(key => (
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
                {key === 'All' ? 'All Domains' : key}
                <span className={cn('ml-1.5 text-[10px]', selectedDomain === key ? 'text-teal-100' : 'text-muted-foreground/60')}>
                  ({domainCounts[key] ?? 0})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Start quiz CTA */}
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-2 border-teal-200 rounded-2xl p-6 mb-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-1">
                {selectedDomain === 'All' ? 'Scenario Matching Quiz' : `${selectedDomain} Quiz`}
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                See a concept definition. Pick the clinical scenario that best illustrates it.
                {selectedDomain !== 'All' && ` Drilling ${selectedDomain}.`}
              </p>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => startQuiz(filteredItems)}
                  disabled={filteredItems.length === 0}
                  className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white font-medium px-5 py-2.5 rounded-lg transition-colors text-sm"
                >
                  <Shuffle className="w-4 h-4" />
                  {selectedDomain === 'All'
                    ? `Start Full Quiz (${filteredItems.length} concepts)`
                    : `Start ${selectedDomain} (${filteredItems.length} concepts)`}
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
            {bestScore !== null && (
              <div className="text-right flex-shrink-0">
                <div className="text-3xl font-black text-teal-700">{bestScore}%</div>
                <div className="text-xs text-muted-foreground">best score</div>
              </div>
            )}
          </div>
        </div>

        {/* Domain-grouped accordion */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-sm text-foreground">
            {selectedDomain === 'All'
              ? `All Concepts (${matchingItems.length})`
              : `${selectedDomain} (${filteredItems.length})`}
          </h3>
          <span className="text-xs text-muted-foreground">Click a domain to expand · Practice to drill</span>
        </div>
        <DomainAccordion
          items={filteredItems}
          progress={progress}
          onPracticeDomain={(domainItems) => startQuiz(domainItems)}
        />
      </div>
    </div>
  );
}
