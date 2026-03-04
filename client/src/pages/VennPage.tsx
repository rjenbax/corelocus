// Tier 4 — Venn Diagram Exercise
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

// ── GRID VIEW ─────────────────────────────────────────────────────────────────
function VennGridView({
  filteredItems, selectedDomain, setSelectedDomain, completedIds, openExercise, navigate, vennDiagrams,
}: {
  filteredItems: VennItem[];
  selectedDomain: string;
  setSelectedDomain: (d: string) => void;
  completedIds: Set<string>;
  openExercise: (item: VennItem, mode?: 'study' | 'sort') => void;
  navigate: (to: string) => void;
  vennDiagrams: VennItem[];
}) {
  const [openDomains, setOpenDomains] = useState<Set<string>>(new Set(['B']));

  const toggleDomain = (domain: string) => {
    setOpenDomains(prev => {
      const next = new Set(prev);
      if (next.has(domain)) next.delete(domain);
      else next.add(domain);
      return next;
    });
  };

  const grouped = useMemo(() => {
    const map: Record<string, VennItem[]> = {};
    for (const item of vennDiagrams) {
      const d = (item as any).domain ?? 'B';
      if (!map[d]) map[d] = [];
      map[d].push(item);
    }
    return map;
  }, [vennDiagrams]);

  const domainCounts = useMemo(() => {
    const counts: Record<string, { total: number; completed: number }> = {};
    for (const [d, items] of Object.entries(grouped)) {
      counts[d] = {
        total: items.length,
        completed: items.filter(i => completedIds.has(i.id)).length,
      };
    }
    return counts;
  }, [grouped, completedIds]);

  const visibleDomains = DOMAIN_ORDER.filter(d => grouped[d]?.length > 0);

  // Filter pills
  const allCount = vennDiagrams.length;
  const allCompleted = vennDiagrams.filter(i => completedIds.has(i.id)).length;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />
            Home
          </button>
          <div className="flex items-center gap-2">
            <GitMerge className="w-5 h-5 text-violet-700" />
            <h1 className="font-bold text-slate-800 text-base">Tier 4 — Venn Diagram</h1>
          </div>
          <div className="text-xs text-slate-500">
            <span className="font-semibold text-violet-700">{allCompleted}</span>/{allCount} completed
          </div>
        </div>
      </header>

      {/* Domain filter pills */}
      <div className="bg-white border-b border-slate-100 sticky top-[53px] z-10">
        <div className="max-w-5xl mx-auto px-4 py-2 flex items-center gap-2 overflow-x-auto">
          <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <button
            onClick={() => setSelectedDomain('ALL')}
            className={cn(
              'px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all border',
              selectedDomain === 'ALL'
                ? 'bg-violet-700 text-white border-violet-700'
                : 'bg-white text-slate-600 border-slate-200 hover:border-violet-300'
            )}
          >
            All ({allCount})
          </button>
          {visibleDomains.map(d => {
            const c = domainCounts[d];
            return (
              <button
                key={d}
                onClick={() => setSelectedDomain(d)}
                className={cn(
                  'px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all border',
                  selectedDomain === d
                    ? 'bg-violet-700 text-white border-violet-700'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-violet-300'
                )}
              >
                Domain {d} ({c?.total ?? 0})
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-4 space-y-2">
        {visibleDomains
          .filter(d => selectedDomain === 'ALL' || selectedDomain === d)
          .map(domain => {
            const items = grouped[domain] ?? [];
            const counts = domainCounts[domain] ?? { total: 0, completed: 0 };
            const isOpen = openDomains.has(domain);
            const pct = counts.total > 0 ? Math.round((counts.completed / counts.total) * 100) : 0;
            const colors = DOMAIN_COLORS[domain] ?? DOMAIN_COLORS['B'];

            return (
              <div key={domain} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                {/* Domain accordion header */}
                <button
                  onClick={() => toggleDomain(domain)}
                  className="w-full px-4 py-3 flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className={cn('w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0', colors.pill)}>
                      {domain}
                    </span>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-slate-800">{DOMAIN_FULL[domain] ?? `Domain ${domain}`}</p>
                      <p className="text-xs text-slate-500">{counts.total} pairs · {counts.completed} completed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-violet-600 rounded-full transition-all" style={{ width: `${pct}%` }} />
                      </div>
                      <span className="text-xs text-slate-500 w-8 text-right">{pct}%</span>
                    </div>
                    <Button
                      size="sm"
                      onClick={e => { e.stopPropagation(); const first = items[0]; if (first) openExercise(first, 'sort'); }}
                      className="bg-violet-700 hover:bg-violet-800 text-white h-7 text-xs px-3"
                    >
                      Practice
                    </Button>
                    <ChevronDown className={cn('w-4 h-4 text-slate-400 transition-transform', isOpen && 'rotate-180')} />
                  </div>
                </button>

                {/* Pair list */}
                {isOpen && (
                  <div className="border-t border-slate-100 divide-y divide-slate-50">
                    {items.map(item => {
                      const done = completedIds.has(item.id);
                      return (
                        <div key={item.id} className="px-4 py-2.5 flex items-center justify-between hover:bg-slate-50/60 transition-colors">
                          <div className="flex items-center gap-3 min-w-0">
                            {done
                              ? <CheckCircle2 className="w-4 h-4 text-violet-600 shrink-0" />
                              : <div className="w-4 h-4 rounded-full border-2 border-slate-200 shrink-0" />
                            }
                            <div className="min-w-0">
                              <p className="text-sm text-slate-700 truncate">
                                <span className="font-medium text-blue-700">{item.conceptA}</span>
                                <span className="text-slate-400 mx-1.5">vs</span>
                                <span className="font-medium text-violet-700">{item.conceptB}</span>
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0 ml-3">
                            <button
                              onClick={() => openExercise(item, 'study')}
                              className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors border border-blue-100"
                            >
                              <BookOpen className="w-3 h-3" /> Study
                            </button>
                            <button
                              onClick={() => openExercise(item, 'sort')}
                              className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium text-violet-700 bg-violet-50 hover:bg-violet-100 transition-colors border border-violet-100"
                            >
                              <Swords className="w-3 h-3" /> Sort
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}

// ── MAIN PAGE ──────────────────────────────────────────────────────────────────
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
    <div className="h-screen flex flex-col bg-[#F8FAFC] overflow-hidden">

      {/* ── Compact Header ── */}
      <header className="bg-white border-b border-slate-200 shrink-0 z-20">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-3">
          {/* Back */}
          <button onClick={() => setView('grid')} className="flex items-center gap-1.5 text-slate-500 hover:text-slate-800 transition-colors text-sm shrink-0">
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">All Pairs</span>
          </button>

          {/* Concept pills + nav */}
          <div className="flex items-center gap-2 flex-1 justify-center min-w-0">
            <button onClick={handlePrev} className="p-1 rounded hover:bg-slate-100 transition-colors shrink-0">
              <ChevronLeft className="w-4 h-4 text-slate-400" />
            </button>
            <div className="flex items-center gap-2 min-w-0 overflow-hidden">
              <span className="px-2.5 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-bold text-blue-800 truncate max-w-[180px]">{currentItem.conceptA}</span>
              <span className="text-slate-300 text-xs shrink-0">vs</span>
              <span className="px-2.5 py-1 bg-violet-50 border border-violet-200 rounded-full text-xs font-bold text-violet-800 truncate max-w-[180px]">{currentItem.conceptB}</span>
            </div>
            <button onClick={handleNext} className="p-1 rounded hover:bg-slate-100 transition-colors shrink-0">
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <span className="text-xs text-slate-400 shrink-0">{currentIndex + 1}/{filteredItems.length}</span>
          </div>

          {/* Mode toggle */}
          <div className="flex items-center gap-0.5 bg-slate-100 rounded-lg p-0.5 shrink-0">
            <button
              onClick={() => { setMode('study'); setStarted(false); setSubmitted(false); setScore(null); setCards([]); }}
              className={cn(
                'flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium transition-all',
                mode === 'study' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'
              )}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Study
            </button>
            <button
              onClick={() => { setMode('sort'); setStarted(false); setSubmitted(false); setScore(null); setCards([]); }}
              className={cn(
                'flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium transition-all',
                mode === 'sort' ? 'bg-violet-700 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'
              )}
            >
              <Swords className="w-3.5 h-3.5" />
              Sort
            </button>
          </div>
        </div>
      </header>

      {/* ── Key Distinction bar ── */}
      {(mode === 'study' || showKeyDistinction) && (
        <div className="bg-teal-50 border-b border-teal-200 px-4 py-1.5 shrink-0">
          <p className="text-xs text-teal-800 max-w-7xl mx-auto">
            <span className="font-semibold">Key Distinction: </span>{currentItem.keyDistinction}
          </p>
        </div>
      )}

      {/* ── Main content area ── */}
      <div className="flex-1 overflow-hidden max-w-7xl mx-auto w-full px-4 py-3 flex flex-col gap-2">

        {/* ── STUDY MODE ── */}
        {mode === 'study' && (
          <div className="grid grid-cols-4 gap-3 flex-1 overflow-hidden">
            {/* Only A */}
            <div className="rounded-xl border-2 border-blue-200 bg-blue-50 flex flex-col overflow-hidden">
              <div className="px-3 py-2 bg-blue-100 border-b border-blue-200 shrink-0">
                <p className="text-xs font-bold text-blue-700 uppercase tracking-wide truncate">Only: {currentItem.conceptA}</p>
              </div>
              <div className="p-2.5 space-y-1.5 overflow-y-auto flex-1">
                {currentItem.onlyA.map((f, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-xs text-blue-800">
                    <span className="text-blue-400 mt-0.5 shrink-0">•</span>
                    <span className="leading-snug">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Shared */}
            <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 flex flex-col overflow-hidden">
              <div className="px-3 py-2 bg-emerald-100 border-b border-emerald-200 shrink-0">
                <p className="text-xs font-bold text-emerald-800 uppercase tracking-wide">Shared / Both</p>
              </div>
              <div className="p-2.5 space-y-1.5 overflow-y-auto flex-1">
                {currentItem.shared.map((f, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-xs text-emerald-800">
                    <span className="text-emerald-500 mt-0.5 shrink-0">◆</span>
                    <span className="leading-snug">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Only B */}
            <div className="rounded-xl border-2 border-violet-200 bg-violet-50 flex flex-col overflow-hidden">
              <div className="px-3 py-2 bg-violet-100 border-b border-violet-200 shrink-0">
                <p className="text-xs font-bold text-violet-700 uppercase tracking-wide truncate">Only: {currentItem.conceptB}</p>
              </div>
              <div className="p-2.5 space-y-1.5 overflow-y-auto flex-1">
                {currentItem.onlyB.map((f, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-xs text-violet-800">
                    <span className="text-violet-400 mt-0.5 shrink-0">•</span>
                    <span className="leading-snug">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Does Not Belong */}
            <div className="rounded-xl border-2 border-rose-200 bg-rose-50 flex flex-col overflow-hidden">
              <div className="px-3 py-2 bg-rose-100 border-b border-rose-200 shrink-0">
                <p className="text-xs font-bold text-rose-700 uppercase tracking-wide">Does Not Belong</p>
              </div>
              <div className="p-2.5 flex flex-wrap gap-1.5 content-start overflow-y-auto flex-1">
                {currentItem.distractors.map((d, i) => (
                  <span key={i} className="px-2 py-1 bg-rose-100 border border-rose-200 rounded text-xs text-rose-700 line-through leading-snug">{d}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── SORT MODE: start screen ── */}
        {mode === 'sort' && !started && (
          <div className="bg-white rounded-xl border border-slate-200 p-6 text-center shadow-sm max-w-lg mx-auto mt-4">
            <div className="w-12 h-12 bg-violet-700/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Swords className="w-5 h-5 text-violet-700" />
            </div>
            <h2 className="text-base font-bold text-slate-800 mb-1">Ready to Sort?</h2>
            <p className="text-slate-500 text-xs mb-3 max-w-sm mx-auto">
              Click a feature to select it, then click a zone to place it. Features belong to Term A only, Term B only, both, or neither.
            </p>
            <div className="grid grid-cols-4 gap-1.5 max-w-sm mx-auto mb-4">
              {(Object.keys(ZONE_CONFIG) as Exclude<Zone, 'unplaced'>[]).map(z => (
                <div key={z} className={cn('p-1.5 rounded-lg border text-center', ZONE_CONFIG[z].bg, ZONE_CONFIG[z].border)}>
                  <p className={cn('font-semibold text-xs', ZONE_CONFIG[z].color)}>
                    {z === 'onlyA'
                      ? currentItem.conceptA.split(' ').slice(0, 2).join(' ') + ' Only'
                      : z === 'onlyB'
                      ? currentItem.conceptB.split(' ').slice(0, 2).join(' ') + ' Only'
                      : ZONE_CONFIG[z].label}
                  </p>
                </div>
              ))}
            </div>
            <Button onClick={startItem} className="bg-violet-700 hover:bg-violet-800 text-white px-6 h-8 text-sm">
              Start Sorting
            </Button>
          </div>
        )}

        {/* ── SORT MODE: active ── */}
        {mode === 'sort' && started && (
          <div className="flex flex-col flex-1 overflow-hidden gap-2">

            {/* Score banner */}
            {submitted && score && (() => {
              const pct = Math.round((score.correct / score.total) * 100);
              const isPerfect = score.correct === score.total;
              const isPassing = pct >= PASS_THRESHOLD;
              return (
                <div className={cn(
                  'rounded-lg border px-4 py-2 flex items-center justify-between shrink-0',
                  isPerfect ? 'bg-emerald-50 border-emerald-200' : isPassing ? 'bg-teal-50 border-teal-200' : 'bg-rose-50 border-rose-200'
                )}>
                  <div className="flex items-center gap-2">
                    {isPerfect ? <Trophy className="w-4 h-4 text-violet-700" /> : isPassing ? <CheckCircle2 className="w-4 h-4 text-teal-700" /> : <XCircle className="w-4 h-4 text-rose-600" />}
                    <p className={cn('font-bold text-sm', isPerfect ? 'text-emerald-800' : isPassing ? 'text-teal-800' : 'text-rose-700')}>
                      {isPerfect ? 'Perfect Sort!' : `${score.correct}/${score.total} correct (${pct}%)`}
                    </p>
                    <p className="text-xs text-slate-500 hidden sm:block">
                      {isPerfect ? 'All features correctly classified.' : isPassing ? 'Passed ✓ — review highlighted items.' : 'Below 70% — not yet marked complete.'}
                    </p>
                  </div>
                  <div className="flex gap-1.5">
                    <Button variant="outline" size="sm" onClick={startItem} className="gap-1 h-7 text-xs">
                      <RotateCcw className="w-3 h-3" /> Retry
                    </Button>
                    <Button size="sm" onClick={handleNext} className="bg-violet-700 hover:bg-violet-800 text-white h-7 text-xs">
                      Next →
                    </Button>
                  </div>
                </div>
              );
            })()}

            {/* Feature pool */}
            {!submitted && unplacedCards.length > 0 && (
              <div className="bg-white rounded-lg border border-slate-200 p-2.5 shrink-0">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Feature Pool — select a feature, then click a zone below</p>
                <div className="flex flex-wrap gap-1.5">
                  {unplacedCards.map(card => (
                    <button
                      key={card.id}
                      onClick={() => handleSelectCard(card.id)}
                      className={cn(
                        'px-2.5 py-1.5 rounded-lg border text-xs text-left transition-all leading-snug',
                        selectedCard === card.id
                          ? 'bg-violet-700 text-white border-violet-700 shadow-sm'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-violet-400 hover:bg-violet-50'
                      )}
                    >
                      {card.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Four drop zones — always 4 columns, fill remaining height */}
            <div className="grid grid-cols-4 gap-2 flex-1 overflow-hidden">
              {(Object.keys(ZONE_CONFIG) as Exclude<Zone, 'unplaced'>[]).map(zone => {
                const cfg = ZONE_CONFIG[zone];
                const zoneCards = cards.filter(c => c.placedZone === zone);
                const isActive = selectedCard !== null && !submitted;
                return (
                  <div
                    key={zone}
                    onClick={() => isActive && handlePlaceInZone(zone)}
                    className={cn(
                      'rounded-xl border-2 flex flex-col overflow-hidden transition-all',
                      cfg.bg, cfg.border,
                      isActive && 'cursor-pointer hover:shadow-md border-dashed',
                      !isActive && 'cursor-default'
                    )}
                  >
                    <div className={cn('px-3 py-2 border-b shrink-0', cfg.headerBg, cfg.border)}>
                      <p className={cn('text-xs font-bold uppercase tracking-wide', cfg.color)}>
                        {zone === 'onlyA'
                          ? `${currentItem.conceptA.split('(')[0].trim()} Only`
                          : zone === 'onlyB'
                          ? `${currentItem.conceptB.split('(')[0].trim()} Only`
                          : cfg.label}
                      </p>
                    </div>
                    <div className="p-2 space-y-1 overflow-y-auto flex-1">
                      {zoneCards.length === 0 && (
                        <p className={cn('text-xs text-center py-4 opacity-40', cfg.color)}>
                          {isActive ? '↑ Click to place' : 'Empty'}
                        </p>
                      )}
                      {zoneCards.map(card => {
                        const isCorrect = card.correctZone === zone;
                        return (
                          <div
                            key={card.id}
                            className={cn(
                              'px-2 py-1.5 rounded-lg border text-xs leading-snug flex items-start gap-1 transition-all',
                              submitted
                                ? isCorrect ? 'bg-emerald-100 border-emerald-300 text-emerald-800' : 'bg-rose-100 border-rose-300 text-rose-800'
                                : 'bg-white border-slate-200 text-slate-700 cursor-pointer hover:border-rose-300',
                            )}
                            onClick={e => { e.stopPropagation(); if (!submitted) handleReturnToPool(card.id); }}
                          >
                            {submitted && (isCorrect
                              ? <CheckCircle2 className="w-3 h-3 text-violet-700 shrink-0 mt-0.5" />
                              : <XCircle className="w-3 h-3 text-rose-500 shrink-0 mt-0.5" />
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

            {/* Submit / reset bar */}
            {!submitted && (
              <div className="flex items-center justify-between bg-white rounded-lg border border-slate-200 px-3 py-2 shrink-0">
                <p className="text-xs text-slate-500">
                  {unplacedCards.length > 0 ? `${unplacedCards.length} remaining` : 'All placed — ready to check!'}
                </p>
                <div className="flex gap-1.5">
                  <Button variant="outline" size="sm" onClick={startItem} className="gap-1 h-7 text-xs">
                    <RotateCcw className="w-3 h-3" /> Reset
                  </Button>
                  <Button size="sm" onClick={handleSubmit} disabled={!allPlaced} className="bg-violet-700 hover:bg-violet-800 text-white disabled:opacity-40 h-7 text-xs">
                    Check Answers
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
