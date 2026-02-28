// VennPage.tsx — Tier 4: Interactive Venn Diagram Sorting Exercise
// Design: Academic Warmth — forest green primary, warm cream bg, slate text
// Mechanic: Student sorts a shuffled pool of features into 4 zones:
//   [A Only] [Shared] [B Only] [Does Not Belong]
// Features include onlyA, onlyB, shared, and distractors — all shuffled together.

import { useState, useCallback, useMemo } from 'react';
import { useLocation } from 'wouter';
import { ArrowLeft, ChevronLeft, ChevronRight, CheckCircle2, XCircle, RotateCcw, Trophy, Filter, GitMerge, BookOpen, Swords } from 'lucide-react';
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

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string; pill: string }> = {
  'Tier 1 – High Confusion': { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200', pill: 'bg-red-100 text-red-700' },
  'Behavior Reduction': { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', pill: 'bg-orange-100 text-orange-700' },
  'Tier 2 – Moderate Confusion': { bg: 'bg-teal-50', text: 'text-teal-800', border: 'border-teal-200', pill: 'bg-teal-100 text-teal-800' },
  'Research & Design': { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', pill: 'bg-blue-100 text-blue-700' },
  'Verbal Behavior + Stimulus Control': { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', pill: 'bg-purple-100 text-purple-700' },
  'Tier 3 – Subtle Distinction': { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200', pill: 'bg-teal-100 text-teal-700' },
  'Measurement': { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-200', pill: 'bg-cyan-100 text-cyan-700' },
  'Skill Acquisition': { bg: 'bg-emerald-50', text: 'text-violet-800', border: 'border-emerald-200', pill: 'bg-emerald-100 text-violet-800' },
  'Ethics & Supervision': { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200', pill: 'bg-violet-100 text-violet-700' },
};
const DEFAULT_COLORS = { bg: 'bg-muted/30', text: 'text-foreground', border: 'border-border', pill: 'bg-muted text-foreground' };
function getCatColors(category: string) { return CATEGORY_COLORS[category] ?? DEFAULT_COLORS; }

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

export default function VennPage() {
  const [, navigate] = useLocation();
  const { recordVennCompletion, progress } = useProgress();
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards, setCards] = useState<FeatureCard[]>([]);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<{ correct: number; total: number } | null>(null);
  const [started, setStarted] = useState(false);
  const [showKeyDistinction, setShowKeyDistinction] = useState(false);
  const [view, setView] = useState<'grid' | 'exercise'>('grid');
  const [mode, setMode] = useState<'study' | 'sort'>('study');

  const categories = useMemo(() => Array.from(new Set(vennDiagrams.map(v => v.category))), []);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'ALL') return vennDiagrams;
    return vennDiagrams.filter(v => v.category === selectedCategory);
  }, [selectedCategory]);

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
      <div className="min-h-screen bg-[#F8FAFC]">
        <header className="border-b border-slate-200 bg-white sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
            <div className="flex items-center gap-3">
              <button onClick={() => navigate('/dashboard')} className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800">
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Dashboard</span>
              </button>
              <span className="text-slate-200">|</span>
              <div className="flex items-center gap-2">
                <GitMerge className="w-4 h-4 text-violet-700" />
                <span className="font-semibold text-sm text-slate-800">Venn Diagram</span>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">Tier 4</span>
              </div>
            </div>
            <div className="text-xs text-slate-500">
              {completedIds.size} / {vennDiagrams.length} completed
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 py-6">
          {/* Category filter */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Filter by category</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('ALL')}
                className={cn(
                  'flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all',
                  selectedCategory === 'ALL'
                    ? 'bg-violet-700 text-white border-violet-700 shadow-sm'
                    : 'bg-white text-slate-500 border-slate-200 hover:border-purple-300 hover:text-purple-700 hover:bg-purple-50'
                )}
              >
                All
                <span className={cn(
                  'text-[10px] font-bold px-1 py-0.5 rounded-full min-w-[18px] text-center',
                  selectedCategory === 'ALL' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                )}>{vennDiagrams.length}</span>
              </button>
              {categories.map(cat => {
                const count = vennDiagrams.filter(v => v.category === cat).length;
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      'flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all',
                      isActive
                        ? 'bg-violet-700 text-white border-violet-700 shadow-sm'
                        : 'bg-white text-slate-500 border-slate-200 hover:border-purple-300 hover:text-purple-700 hover:bg-purple-50'
                    )}
                  >
                    {cat}
                    <span className={cn(
                      'text-[10px] font-bold px-1 py-0.5 rounded-full min-w-[18px] text-center',
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    )}>{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pair grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {filteredItems.map(pair => {
              const cc = getCatColors(pair.category);
              const isCompleted = completedIds.has(pair.id);
              return (
                <button
                  key={pair.id}
                  onClick={() => openExercise(pair)}
                  className={cn(
                    'text-left p-4 rounded-xl border-2 transition-all hover:shadow-md hover:-translate-y-0.5',
                    cc.border, cc.bg,
                    isCompleted && 'ring-1 ring-emerald-400/60'
                  )}
                >
                  <div className={cn('text-xs mb-2', cc.text)}>{pair.category}</div>
                  <div className="font-bold text-slate-800 text-sm leading-tight mb-1">{pair.conceptA}</div>
                  <div className="text-xs text-slate-500">vs {pair.conceptB}</div>
                  {isCompleted && <div className="text-xs text-violet-700 mt-2 font-medium">✓ Completed</div>}
                </button>
              );
            })}
          </div>
        </div>
      </div>
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
