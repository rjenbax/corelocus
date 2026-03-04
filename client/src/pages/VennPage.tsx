// VennPage.tsx — Tier 4: Interactive Venn Diagram Sorting Exercise
// Design: Academic Warmth — forest green primary, warm cream bg, slate text
// Mechanic: Student sorts a shuffled pool of features into 4 zones:
//   [A Only] [Shared] [B Only] [Does Not Belong]
// Features include onlyA, onlyB, shared, and distractors — all shuffled together.

import { useState, useCallback, useMemo } from 'react';
import { useLocation } from 'wouter';
import { ArrowLeft, ChevronLeft, ChevronRight, CheckCircle2, XCircle, RotateCcw, Trophy, Filter, GitMerge, BookOpen, Swords, ChevronDown, Zap } from 'lucide-react';
import { vennDiagrams, VennItem } from '@/data/vennDiagrams';
import { useProgress } from '@/contexts/ProgressContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type Zone = 'onlyA' | 'shared' | 'onlyB' | 'distractor' | 'unplaced';

interface FeatureCard {
  id: string;
  text: string;
  correctZone: Zone;
  placedZone: Zone;
}

const ZONE_CONFIG: Record<Exclude<Zone, 'unplaced'>, { label: string; color: string; bg: string; border: string; headerBg: string }> = {
  onlyA: {
    label: 'Term A Only',
    color: 'text-blue-700',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    headerBg: 'bg-blue-100',
  },
  shared: {
    label: 'Both / Shared',
    color: 'text-violet-800',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    headerBg: 'bg-emerald-100',
  },
  onlyB: {
    label: 'Term B Only',
    color: 'text-violet-700',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    headerBg: 'bg-violet-100',
  },
  distractor: {
    label: 'Does Not Belong',
    color: 'text-rose-700',
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    headerBg: 'bg-rose-100',
  },
};

// Canonical BCBA domain order (A–I)
const DOMAIN_ORDER = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
];

const DOMAIN_FULL: Record<string, string> = {
  A: 'Behaviorism & Philosophical Foundations',
  B: 'Concepts & Principles',
  C: 'Measurement & Data Collection',
  D: 'Experimental Design',
  E: 'Ethical & Professional Issues',
  F: 'Behavior-Change Procedures',
  G: 'Behavior-Change Procedures (Skill Acquisition)',
  H: 'Selecting & Implementing Interventions',
  I: 'Personnel Supervision & Management',
};

const DOMAIN_COLORS: Record<string, { pill: string; badge: string }> = {
  A: { pill: 'bg-slate-100 text-slate-700', badge: 'A' },
  B: { pill: 'bg-teal-100 text-teal-800', badge: 'B' },
  C: { pill: 'bg-cyan-100 text-cyan-800', badge: 'C' },
  D: { pill: 'bg-blue-100 text-blue-800', badge: 'D' },
  E: { pill: 'bg-violet-100 text-violet-800', badge: 'E' },
  F: { pill: 'bg-orange-100 text-orange-800', badge: 'F' },
  G: { pill: 'bg-emerald-100 text-emerald-800', badge: 'G' },
  H: { pill: 'bg-amber-100 text-amber-800', badge: 'H' },
  I: { pill: 'bg-rose-100 text-rose-800', badge: 'I' },
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildFeatureCards(item: VennItem): FeatureCard[] {
  const cards: FeatureCard[] = [
    ...item.onlyA.map((t, i) => ({ id: `a-${i}`, text: t, correctZone: 'onlyA' as Zone, placedZone: 'unplaced' as Zone })),
    ...item.shared.map((t, i) => ({ id: `s-${i}`, text: t, correctZone: 'shared' as Zone, placedZone: 'unplaced' as Zone })),
    ...item.onlyB.map((t, i) => ({ id: `b-${i}`, text: t, correctZone: 'onlyB' as Zone, placedZone: 'unplaced' as Zone })),
    ...item.distractors.map((t, i) => ({ id: `d-${i}`, text: t, correctZone: 'distractor' as Zone, placedZone: 'unplaced' as Zone })),
  ];
  return shuffle(cards);
}

// ─── Venn Grid View (Domain Accordion) ──────────────────────────────────────

function VennGridView({
  filteredItems,
  selectedDomain,
  setSelectedDomain,
  completedIds,
  openExercise,
  navigate,
  vennDiagrams: allDiagrams,
}: {
  filteredItems: VennItem[];
  selectedDomain: string;
  setSelectedDomain: (d: string) => void;
  completedIds: Set<string>;
  openExercise: (item: VennItem, mode?: 'study' | 'sort') => void;
  navigate: (path: string) => void;
  vennDiagrams: VennItem[];
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
    const map = new Map<string, VennItem[]>();
    DOMAIN_ORDER.forEach(d => map.set(d, []));
    filteredItems.forEach(item => {
      const d = (item as any).domain as string;
      if (!map.has(d)) map.set(d, []);
      map.get(d)!.push(item);
    });
    map.forEach((v, k) => { if (v.length === 0) map.delete(k); });
    return map;
  }, [filteredItems]);

  const totalCompleted = completedIds.size;
  const totalDiagrams = allDiagrams.length;

  // Domain counts for filter pills
  const domainCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    DOMAIN_ORDER.forEach(d => {
      counts[d] = allDiagrams.filter(v => (v as any).domain === d).length;
    });
    return counts;
  }, [allDiagrams]);

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
              <GitMerge className="w-4 h-4 text-violet-700" />
              <span className="font-semibold text-sm">Venn Diagram</span>
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">Tier 4</span>
            </div>
          </div>
          <div className="text-xs text-muted-foreground">
            {totalCompleted} / {totalDiagrams} completed
          </div>
        </div>
      </header>

      <div className="container py-6 max-w-3xl mx-auto">
        {/* Domain filter pills */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Filter by Domain</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedDomain('ALL')}
              className={cn(
                'px-3 py-1.5 rounded-full text-xs font-medium border transition-all',
                selectedDomain === 'ALL'
                  ? 'bg-violet-700 text-white border-violet-700 shadow-sm'
                  : 'bg-card text-muted-foreground border-border hover:border-violet-300 hover:text-violet-800'
              )}
            >
              All
              <span className={cn('ml-1.5 text-[10px]', selectedDomain === 'ALL' ? 'text-violet-200' : 'text-muted-foreground/60')}>
                ({allDiagrams.length})
              </span>
            </button>
            {DOMAIN_ORDER.filter(d => domainCounts[d] > 0).map(d => {
              const isActive = selectedDomain === d;
              const dc = DOMAIN_COLORS[d];
              return (
                <button
                  key={d}
                  onClick={() => setSelectedDomain(d)}
                  className={cn(
                    'px-3 py-1.5 rounded-full text-xs font-medium border transition-all',
                    isActive
                      ? 'bg-violet-700 text-white border-violet-700 shadow-sm'
                      : cn('bg-card border-border hover:border-violet-300', dc.pill)
                  )}
                >
                  Domain {d}
                  <span className={cn('ml-1.5 text-[10px]', isActive ? 'text-violet-200' : 'text-muted-foreground/60')}>
                    ({domainCounts[d]})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Start CTA */}
        <div className="bg-gradient-to-r from-violet-50 to-purple-50 border-2 border-violet-200 rounded-2xl p-6 mb-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-1">
                {selectedDomain === 'ALL' ? 'Venn Diagram Sort' : `Domain ${selectedDomain} — ${DOMAIN_FULL[selectedDomain]}`}
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Sort features into the correct zones: Term A Only, Shared, Term B Only, or Does Not Belong.
                {selectedDomain !== 'ALL' && ` Drilling Domain ${selectedDomain}.`}
              </p>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => openExercise(filteredItems[0], 'study')}
                  disabled={filteredItems.length === 0}
                  className="flex items-center gap-2 bg-violet-700 hover:bg-violet-800 disabled:opacity-50 text-white font-medium px-5 py-2.5 rounded-lg transition-colors text-sm"
                >
                  <BookOpen className="w-4 h-4" />
                  {selectedDomain === 'ALL'
                    ? `Browse All (${filteredItems.length} pairs)`
                    : `Browse Domain ${selectedDomain} (${filteredItems.length})`}
                </button>
                <button
                  onClick={() => openExercise(filteredItems[0], 'sort')}
                  disabled={filteredItems.length === 0}
                  className="flex items-center gap-2 border border-violet-300 text-violet-800 bg-white px-4 py-2.5 rounded-lg hover:bg-violet-50 transition-colors text-sm"
                >
                  <Swords className="w-4 h-4" />
                  Jump to Sort Mode
                </button>
              </div>
            </div>
            {totalCompleted > 0 && (
              <div className="text-right flex-shrink-0">
                <div className="text-3xl font-black text-violet-700">{totalCompleted}</div>
                <div className="text-xs text-muted-foreground">completed</div>
              </div>
            )}
          </div>
        </div>

        {/* Domain accordion */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-sm text-foreground">
            {selectedDomain === 'ALL'
              ? `All Pairs (${allDiagrams.length})`
              : `Domain ${selectedDomain} — ${DOMAIN_FULL[selectedDomain]} (${filteredItems.length})`}
          </h3>
          <span className="text-xs text-muted-foreground">Click a domain to expand · Practice to drill</span>
        </div>

        <div className="space-y-2">
          {Array.from(grouped.entries()).map(([domain, domainItems]) => {
            const isOpen = openDomains.has(domain);
            const dc = DOMAIN_COLORS[domain] ?? { pill: 'bg-muted text-foreground', badge: domain };
            const completedInDomain = domainItems.filter(item => completedIds.has(item.id)).length;

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
                    <span className={cn('text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0', dc.pill)}>Domain {domain}</span>
                    <span className="font-semibold text-sm text-foreground truncate">{DOMAIN_FULL[domain]}</span>
                    <span className="text-xs text-muted-foreground flex-shrink-0">{domainItems.length} pairs</span>
                    {completedInDomain > 0 && (
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 flex-shrink-0">
                        {completedInDomain}/{domainItems.length} done
                      </span>
                    )}
                    {completedInDomain === 0 && (
                      <span className="text-[10px] text-muted-foreground/50 flex-shrink-0">Not started</span>
                    )}
                  </button>
                  {/* Practice this domain button */}
                  <button
                    onClick={() => openExercise(domainItems[0], 'sort')}
                    className="flex items-center gap-1.5 text-xs font-medium text-violet-700 border border-violet-200 bg-violet-50 hover:bg-violet-100 px-3 py-1.5 rounded-lg transition-colors flex-shrink-0"
                  >
                    <Zap className="w-3 h-3" />
                    Practice
                  </button>
                </div>

                {/* Expanded pair list */}
                {isOpen && (
                  <div className="border-t border-border">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
                      {domainItems.map(pair => {
                        const isCompleted = completedIds.has(pair.id);
                        return (
                          <button
                            key={pair.id}
                            onClick={() => openExercise(pair)}
                            className="p-3 bg-card hover:bg-muted/40 transition-colors text-left"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium text-foreground leading-tight">{pair.conceptA}</span>
                              {isCompleted && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 ml-2" />}
                            </div>
                            <div className="text-xs text-muted-foreground">vs {pair.conceptB}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function VennPage() {
  const [, navigate] = useLocation();
  const { recordVennCompletion, progress } = useProgress();
  const [selectedDomain, setSelectedDomain] = useState<string>('ALL');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards, setCards] = useState<FeatureCard[]>([]);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<{ correct: number; total: number } | null>(null);
  const [started, setStarted] = useState(false);
  const [showKeyDistinction, setShowKeyDistinction] = useState(false);
  const [view, setView] = useState<'grid' | 'exercise'>('grid');
  const [mode, setMode] = useState<'study' | 'sort'>('study');

  const filteredItems = useMemo(() => {
    if (selectedDomain === 'ALL') return vennDiagrams;
    return vennDiagrams.filter(v => (v as any).domain === selectedDomain);
  }, [selectedDomain]);

  const completedIds = useMemo(
    () => new Set(progress.venn.filter(v => v.completed).map(v => v.pairId)),
    [progress.venn]
  );

  const currentItem = filteredItems[currentIndex] ?? null;

  const openExercise = useCallback((item: VennItem, startMode: 'study' | 'sort' = 'study') => {
    const idx = filteredItems.findIndex(v => v.id === item.id);
    setCurrentIndex(idx >= 0 ? idx : 0);
    setCards([]);
    setSelectedCard(null);
    setSubmitted(false);
    setScore(null);
    setShowKeyDistinction(false);
    setStarted(false);
    setMode(startMode);
    setView('exercise');
  }, [filteredItems]);

  const startItem = useCallback(() => {
    if (!currentItem) return;
    setCards(buildFeatureCards(currentItem));
    setSelectedCard(null);
    setSubmitted(false);
    setScore(null);
    setShowKeyDistinction(false);
    setStarted(true);
  }, [currentItem]);

  const handleSelectCard = (id: string) => {
    if (submitted) return;
    setSelectedCard(prev => prev === id ? null : id);
  };

  const handlePlaceInZone = (zone: Exclude<Zone, 'unplaced'>) => {
    if (!selectedCard || submitted) return;
    setCards(prev => prev.map(c => c.id === selectedCard ? { ...c, placedZone: zone } : c));
    setSelectedCard(null);
  };

  const handleReturnToPool = (id: string) => {
    if (submitted) return;
    setCards(prev => prev.map(c => c.id === id ? { ...c, placedZone: 'unplaced' } : c));
  };

  const PASS_THRESHOLD = 70;

  const handleSubmit = () => {
    const correct = cards.filter(c => c.placedZone === c.correctZone).length;
    const total = cards.length;
    setScore({ correct, total });
    setSubmitted(true);
    setShowKeyDistinction(true);
    const pct = Math.round((correct / total) * 100);
    // Only mark as completed when the student meets the ≥ 70% threshold
    if (pct >= PASS_THRESHOLD) {
      recordVennCompletion(currentItem?.id ?? '', pct);
    }
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setCurrentIndex(nextIndex);
    setStarted(false);
    setSubmitted(false);
    setScore(null);
    setShowKeyDistinction(false);
    setCards([]);
    setMode('study');
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setCurrentIndex(prevIndex);
    setStarted(false);
    setSubmitted(false);
    setScore(null);
    setShowKeyDistinction(false);
    setCards([]);
    setMode('study');
  };

  const unplacedCards = cards.filter(c => c.placedZone === 'unplaced');
  const allPlaced = cards.length > 0 && unplacedCards.length === 0;

  // ── GRID VIEW ──────────────────────────────────────────────────────────────
  if (view === 'grid') {
    return (
      <VennGridView
        filteredItems={filteredItems}
        selectedDomain={selectedDomain}
        setSelectedDomain={setSelectedDomain}
        completedIds={completedIds}
        openExercise={openExercise}
        navigate={navigate}
        vennDiagrams={vennDiagrams}
      />
    );
  }

  // ── EXERCISE VIEW ──────────────────────────────────────────────────────────
  if (!currentItem) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
        <p className="text-slate-500">No item found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <button onClick={() => setView('grid')} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />
            All Pairs
          </button>
          <div className="text-center">
            <h1 className="font-bold text-slate-800 text-base">Venn Diagram</h1>
            <p className="text-xs text-slate-500">Tier 4 · {mode === 'study' ? 'Study the layout, then switch to Sort Mode' : 'Sort each feature into the correct zone'}</p>
          </div>
          <div className="text-sm text-slate-500 font-medium">
            {currentIndex + 1} / {filteredItems.length}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-5">
        {/* Concept Header */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <Badge variant="outline" className="text-xs text-slate-500">{currentItem.category}</Badge>
            <div className="flex items-center gap-2">
              <button onClick={handlePrev} className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors">
                <ChevronLeft className="w-4 h-4 text-slate-500" />
              </button>
              <button onClick={handleNext} className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors">
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 items-center">
            <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-xs text-blue-500 font-medium mb-1">Term A</p>
              <p className="font-bold text-blue-800 text-sm leading-tight">{currentItem.conceptA}</p>
            </div>
            <div className="text-center">
              <div className="text-2xl text-slate-300 font-light">⟷</div>
              <p className="text-xs text-slate-400 mt-1">vs</p>
            </div>
            <div className="text-center p-3 bg-violet-50 rounded-lg border border-violet-100">
              <p className="text-xs text-violet-500 font-medium mb-1">Term B</p>
              <p className="font-bold text-violet-800 text-sm leading-tight">{currentItem.conceptB}</p>
            </div>
          </div>

          {/* Key Distinction — always visible in study mode, revealed after submit in sort mode */}
          {(mode === 'study' || showKeyDistinction) && (
            <div className="mt-4 p-3 bg-teal-50 border border-teal-200 rounded-lg">
              <p className="text-xs font-semibold text-teal-800 mb-1">Key Distinction</p>
              <p className="text-sm text-teal-800">{currentItem.keyDistinction}</p>
            </div>
          )}
        </div>

        {/* Mode Toggle */}
        <div className="flex items-center gap-1 bg-white rounded-xl border border-slate-200 p-1 shadow-sm w-fit">
          <button
            onClick={() => { setMode('study'); setStarted(false); setSubmitted(false); setScore(null); setCards([]); }}
            className={cn(
              'flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all',
              mode === 'study'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-500 hover:text-slate-800'
            )}
          >
            <BookOpen className="w-4 h-4" />
            Study Mode
          </button>
          <button
            onClick={() => { setMode('sort'); setStarted(false); setSubmitted(false); setScore(null); setCards([]); }}
            className={cn(
              'flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all',
              mode === 'sort'
                ? 'bg-violet-700 text-white shadow-sm'
                : 'text-slate-500 hover:text-slate-800'
            )}
          >
            <Swords className="w-4 h-4" />
            Sort Mode
          </button>
        </div>

        {/* ── STUDY MODE: completed layout ── */}
        {mode === 'study' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Only A */}
            <div className="rounded-xl border-2 border-blue-200 bg-blue-50">
              <div className="px-4 py-2.5 bg-blue-100 rounded-t-xl border-b border-blue-200">
                <p className="text-xs font-bold text-blue-700 uppercase tracking-wide">Only: {currentItem.conceptA}</p>
              </div>
              <div className="p-3 space-y-2">
                {currentItem.onlyA.map((f, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-blue-800">
                    <span className="text-blue-400 mt-0.5 shrink-0">•</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Shared */}
            <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50">
              <div className="px-4 py-2.5 bg-emerald-100 rounded-t-xl border-b border-emerald-200">
                <p className="text-xs font-bold text-violet-800 uppercase tracking-wide">Shared / Both</p>
              </div>
              <div className="p-3 space-y-2">
                {currentItem.shared.map((f, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-emerald-800">
                    <span className="text-emerald-500 mt-0.5 shrink-0">◆</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Only B */}
            <div className="rounded-xl border-2 border-violet-200 bg-violet-50">
              <div className="px-4 py-2.5 bg-violet-100 rounded-t-xl border-b border-violet-200">
                <p className="text-xs font-bold text-violet-700 uppercase tracking-wide">Only: {currentItem.conceptB}</p>
              </div>
              <div className="p-3 space-y-2">
                {currentItem.onlyB.map((f, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-violet-800">
                    <span className="text-violet-400 mt-0.5 shrink-0">•</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Does Not Belong note */}
            <div className="md:col-span-3 rounded-xl border border-rose-200 bg-rose-50 p-3">
              <p className="text-xs font-bold text-rose-600 uppercase tracking-wide mb-2">Does Not Belong to Either</p>
              <div className="flex flex-wrap gap-2">
                {currentItem.distractors.map((d, i) => (
                  <span key={i} className="px-2.5 py-1 bg-rose-100 border border-rose-200 rounded-lg text-xs text-rose-700 line-through">{d}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── SORT MODE ── */}
        {mode === 'sort' && !started ? (
          /* Sort Start Screen */
          <div className="bg-white rounded-xl border border-slate-200 p-8 text-center shadow-sm">
            <div className="w-16 h-16 bg-violet-700/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Swords className="w-7 h-7 text-violet-700" />
            </div>
            <h2 className="text-lg font-bold text-slate-800 mb-2">Ready to Sort?</h2>
            <p className="text-slate-500 text-sm mb-4 max-w-md mx-auto">
              You'll receive a shuffled pool of features. <strong>Click a feature to select it</strong>, then <strong>click a zone to place it</strong>. Features may belong to Term A, Term B, both, or neither.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-lg mx-auto mb-6 text-xs">
              {(Object.keys(ZONE_CONFIG) as Exclude<Zone, 'unplaced'>[]).map(z => (
                <div key={z} className={cn('p-2 rounded-lg border', ZONE_CONFIG[z].bg, ZONE_CONFIG[z].border)}>
                  <p className={cn('font-semibold', ZONE_CONFIG[z].color)}>
                    {z === 'onlyA' ? 'Term A Only' : z === 'onlyB' ? 'Term B Only' : ZONE_CONFIG[z].label}
                  </p>
                </div>
              ))}
            </div>
            <Button onClick={startItem} className="bg-violet-700 hover:bg-violet-800 text-white px-8">
              Start Sorting
            </Button>
          </div>
        ) : mode === 'sort' ? (
          <>
            {/* Score Banner */}
            {submitted && score && (() => {
              const pct = Math.round((score.correct / score.total) * 100);
              const isPerfect = score.correct === score.total;
              const isPassing = pct >= PASS_THRESHOLD;
              return (
              <div className={cn(
                'rounded-xl border p-4 flex items-center justify-between',
                isPerfect ? 'bg-emerald-50 border-emerald-200'
                  : isPassing ? 'bg-teal-50 border-teal-200'
                  : 'bg-rose-50 border-rose-200'
              )}>
                <div className="flex items-center gap-3">
                  {isPerfect
                    ? <Trophy className="w-6 h-6 text-violet-700" />
                    : isPassing
                      ? <CheckCircle2 className="w-6 h-6 text-teal-700" />
                      : <XCircle className="w-6 h-6 text-rose-600" />
                  }
                  <div>
                    <p className={cn('font-bold text-base',
                      isPerfect ? 'text-emerald-800'
                        : isPassing ? 'text-teal-800'
                        : 'text-rose-700'
                    )}>
                      {isPerfect ? 'Perfect Sort!' : `${score.correct} / ${score.total} correct (${pct}%)`}
                    </p>
                    <p className="text-xs text-slate-500">
                      {isPerfect
                        ? 'You correctly classified all features.'
                        : isPassing
                          ? 'Passed ✓ — review the highlighted items to reinforce your understanding.'
                          : `Score below 70% — this diagram is not yet marked complete. Review and retry.`}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={startItem} className="gap-1.5">
                    <RotateCcw className="w-3.5 h-3.5" /> Retry
                  </Button>
                  <Button size="sm" onClick={handleNext} className="bg-violet-700 hover:bg-violet-800 text-white">
                    Next →
                  </Button>
                </div>
              </div>
              );
            })()}

            {/* Feature Pool */}
            {!submitted && unplacedCards.length > 0 && (
              <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
                  Feature Pool — click to select, then click a zone below to place
                </p>
                <div className="flex flex-wrap gap-2">
                  {unplacedCards.map(card => (
                    <button
                      key={card.id}
                      onClick={() => handleSelectCard(card.id)}
                      className={cn(
                        'px-3 py-2 rounded-lg border text-sm text-left transition-all',
                        selectedCard === card.id
                          ? 'bg-violet-700 text-white border-violet-700 shadow-md scale-[1.02]'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-violet-700 hover:bg-violet-700/5'
                      )}
                    >
                      {card.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Four Drop Zones */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {(Object.keys(ZONE_CONFIG) as Exclude<Zone, 'unplaced'>[]).map(zone => {
                const cfg = ZONE_CONFIG[zone];
                const zoneCards = cards.filter(c => c.placedZone === zone);
                const isActive = selectedCard !== null && !submitted;

                return (
                  <div
                    key={zone}
                    onClick={() => isActive && handlePlaceInZone(zone)}
                    className={cn(
                      'rounded-xl border-2 min-h-[200px] transition-all',
                      cfg.bg, cfg.border,
                      isActive && 'cursor-pointer hover:shadow-md hover:scale-[1.01] border-dashed',
                      !isActive && 'cursor-default'
                    )}
                  >
                    {/* Zone Header */}
                    <div className={cn('px-3 py-2 rounded-t-xl border-b', cfg.headerBg, cfg.border)}>
                      <p className={cn('text-xs font-bold uppercase tracking-wide', cfg.color)}>
                        {zone === 'onlyA'
                          ? `${currentItem.conceptA.split('(')[0].trim()} Only`
                          : zone === 'onlyB'
                          ? `${currentItem.conceptB.split('(')[0].trim()} Only`
                          : cfg.label}
                      </p>
                    </div>

                    {/* Placed Cards */}
                    <div className="p-2 space-y-1.5">
                      {zoneCards.length === 0 && (
                        <p className={cn('text-xs text-center py-6 opacity-40', cfg.color)}>
                          {isActive ? '↑ Click to place here' : 'Empty'}
                        </p>
                      )}
                      {zoneCards.map(card => {
                        const isCorrect = card.correctZone === zone;
                        return (
                          <div
                            key={card.id}
                            className={cn(
                              'px-2.5 py-2 rounded-lg border text-xs leading-snug flex items-start gap-1.5 transition-all',
                              submitted
                                ? isCorrect
                                  ? 'bg-emerald-100 border-emerald-300 text-emerald-800'
                                  : 'bg-rose-100 border-rose-300 text-rose-800'
                                : 'bg-white border-slate-200 text-slate-700 cursor-pointer hover:border-rose-300',
                            )}
                            onClick={e => { e.stopPropagation(); if (!submitted) handleReturnToPool(card.id); }}
                          >
                            {submitted && (
                              isCorrect
                                ? <CheckCircle2 className="w-3.5 h-3.5 text-violet-700 shrink-0 mt-0.5" />
                                : <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                            )}
                            <span className="flex-1">{card.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Submit / Reset bar */}
            {!submitted && (
              <div className="flex items-center justify-between bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
                <p className="text-sm text-slate-500">
                  {unplacedCards.length > 0
                    ? `${unplacedCards.length} feature${unplacedCards.length !== 1 ? 's' : ''} remaining`
                    : 'All features placed — ready to check!'}
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={startItem} className="gap-1.5">
                    <RotateCcw className="w-3.5 h-3.5" /> Reset
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleSubmit}
                    disabled={!allPlaced}
                    className="bg-violet-700 hover:bg-violet-800 text-white disabled:opacity-40"
                  >
                    Check Answers
                  </Button>
                </div>
              </div>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
}
