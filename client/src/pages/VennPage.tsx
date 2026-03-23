// Tier 4 — Venn Diagram Exercise
// Design: Academic Warmth — forest green primary, warm cream bg, slate text
// Sort mechanic: one feature card at a time in the center.
//   ← button  = assign to Term A (card flies left, appears in A pile)
//   → button  = assign to Term B (card flies right, appears in B pile)
//   ◆ button  = assign to BOTH (shared)
//   N/A       = strike out (distractor)
// Works on mobile and desktop — no horizontal scrolling.

import { useState, useCallback, useMemo } from 'react';
import { useLocation } from 'wouter';
import {
  ArrowLeft, ChevronLeft, ChevronRight, CheckCircle2, XCircle,
  RotateCcw, Trophy, Filter, GitMerge, BookOpen, Swords,
  ChevronDown, X,
} from 'lucide-react';
import { vennDiagrams, VennItem } from '@/data/vennDiagrams';
import { useProgress } from '@/contexts/ProgressContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// ── Types ──────────────────────────────────────────────────────────────────────
type CorrectZone = 'onlyA' | 'shared' | 'onlyB' | 'distractor';

interface FeatureCard {
  id: string;
  text: string;
  correctZone: CorrectZone;
  assignedA: boolean;
  assignedB: boolean;
  struckOut: boolean;
}

// ── Helpers ────────────────────────────────────────────────────────────────────
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildFeatureCards(item: VennItem): FeatureCard[] {
  // Take the first 2 from each category — these are the strongest/most defining features
  const top2 = <T,>(arr: T[]): T[] => arr.slice(0, 2);
  return shuffle([
    ...top2(item.onlyA).map((t, i) => ({ id: `a-${i}`, text: t, correctZone: 'onlyA' as CorrectZone, assignedA: false, assignedB: false, struckOut: false })),
    ...top2(item.shared).map((t, i) => ({ id: `s-${i}`, text: t, correctZone: 'shared' as CorrectZone, assignedA: false, assignedB: false, struckOut: false })),
    ...top2(item.onlyB).map((t, i) => ({ id: `b-${i}`, text: t, correctZone: 'onlyB' as CorrectZone, assignedA: false, assignedB: false, struckOut: false })),
    ...top2(item.distractors).map((t, i) => ({ id: `d-${i}`, text: t, correctZone: 'distractor' as CorrectZone, assignedA: false, assignedB: false, struckOut: false })),
  ]);
}

function isCorrect(card: FeatureCard): boolean {
  switch (card.correctZone) {
    case 'onlyA':      return card.assignedA && !card.assignedB && !card.struckOut;
    case 'onlyB':      return !card.assignedA && card.assignedB && !card.struckOut;
    case 'shared':     return card.assignedA && card.assignedB && !card.struckOut;
    case 'distractor': return card.struckOut && !card.assignedA && !card.assignedB;
  }
}

const PASS_THRESHOLD = 70;

// ── Domain metadata ────────────────────────────────────────────────────────────
const DOMAIN_ORDER = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

const DOMAIN_FULL: Record<string, string> = {
  A: 'Behaviorism & Philosophical Foundations',
  B: 'Concepts & Principles',
  C: 'Measurement & Data Collection',
  D: 'Experimental Design',
  E: 'Ethical & Professional Issues',
  F: 'Behavior Assessment',
  G: 'Behavior-Change Procedures',
  H: 'Selecting & Implementing Interventions',
  I: 'Personnel Supervision & Management',
};

const DOMAIN_PILL: Record<string, string> = {
  A: 'bg-slate-100 text-slate-700',
  B: 'bg-[#e2fcff] text-[#00c2d6]',
  C: 'bg-cyan-100 text-cyan-800',
  D: 'bg-blue-100 text-blue-800',
  E: 'bg-[#e3e5fb] text-[#6066bb]',
  F: 'bg-orange-100 text-orange-800',
  G: 'bg-emerald-100 text-emerald-800',
  H: 'bg-amber-100 text-amber-800',
  I: 'bg-rose-100 text-rose-800',
};

// ── Grid View ──────────────────────────────────────────────────────────────────
function VennGridView({
  selectedDomain, setSelectedDomain, completedIds, openExercise, navigate,
}: {
  selectedDomain: string;
  setSelectedDomain: (d: string) => void;
  completedIds: Set<string>;
  openExercise: (item: VennItem, mode: 'study' | 'sort') => void;
  navigate: (to: string) => void;
}) {
  const [openDomains, setOpenDomains] = useState<Set<string>>(new Set(['B']));

  const toggleDomain = (d: string) =>
    setOpenDomains(prev => { const n = new Set(prev); n.has(d) ? n.delete(d) : n.add(d); return n; });

  const grouped = useMemo(() => {
    const map: Record<string, VennItem[]> = {};
    for (const item of vennDiagrams) {
      const d = (item as any).domain ?? 'B';
      if (!map[d]) map[d] = [];
      map[d].push(item);
    }
    return map;
  }, []);

  const visibleDomains = DOMAIN_ORDER.filter(d => grouped[d]?.length > 0);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />Home
          </button>
          <div className="flex items-center gap-2">
            <GitMerge className="w-5 h-5 text-[#6066bb]" />
            <h1 className="font-bold text-slate-800 text-base">Tier 4 — Venn Diagram</h1>
          </div>
          <div className="text-xs text-slate-500">
            <span className="font-semibold text-[#6066bb]">{vennDiagrams.filter(i => completedIds.has(i.id)).length}</span>/{vennDiagrams.length} completed
          </div>
        </div>
      </header>

      <div className="bg-white border-b border-slate-100 sticky top-[53px] z-10">
        <div className="max-w-5xl mx-auto px-4 py-2 flex items-center gap-2 overflow-x-auto">
          <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <button onClick={() => setSelectedDomain('ALL')} className={cn('px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all border', selectedDomain === 'ALL' ? 'text-white border-transparent' : 'bg-white text-slate-600 border-slate-200 hover:border-[#6066bb]/60')} style={selectedDomain === 'ALL' ? { background: '#00c2d6' } : {}}>
            All ({vennDiagrams.length})
          </button>
          {visibleDomains.map(d => (
            <button key={d} onClick={() => setSelectedDomain(d)} className={cn('px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all border', selectedDomain === d ? 'text-white border-transparent' : 'bg-white text-slate-600 border-slate-200 hover:border-[#6066bb]/60')} style={selectedDomain === d ? { background: '#00c2d6' } : {}}>
              Domain {d} ({grouped[d]?.length ?? 0})
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-4 space-y-2">
        {visibleDomains
          .filter(d => selectedDomain === 'ALL' || selectedDomain === d)
          .map(domain => {
            const items = grouped[domain] ?? [];
            const completed = items.filter(i => completedIds.has(i.id)).length;
            const pct = items.length > 0 ? Math.round((completed / items.length) * 100) : 0;
            const isOpen = openDomains.has(domain);
            const pillCls = DOMAIN_PILL[domain] ?? DOMAIN_PILL['B'];

            return (
              <div key={domain} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <button onClick={() => toggleDomain(domain)} className="w-full px-4 py-3 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className={cn('w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0', pillCls)}>{domain}</span>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-slate-800">{DOMAIN_FULL[domain] ?? `Domain ${domain}`}</p>
                      <p className="text-xs text-slate-500">{items.length} pairs · {completed} completed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#6066bb] rounded-full" style={{ width: `${pct}%` }} />
                      </div>
                      <span className="text-xs text-slate-500 w-8 text-right">{pct}%</span>
                    </div>
                    <Button size="sm" onClick={e => { e.stopPropagation(); const first = items[0]; if (first) openExercise(first, 'sort'); }} className="text-white h-7 text-xs px-3">
                      Practice
                    </Button>
                    <ChevronDown className={cn('w-4 h-4 text-slate-400 transition-transform', isOpen && 'rotate-180')} />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 divide-y divide-slate-50">
                    {items.map(item => {
                      const done = completedIds.has(item.id);
                      return (
                        <div key={item.id} className="px-4 py-2.5 flex items-center justify-between hover:bg-slate-50/60 transition-colors">
                          <div className="flex items-center gap-3 min-w-0">
                            {done
                              ? <CheckCircle2 className="w-4 h-4 text-[#6066bb] shrink-0" />
                              : <div className="w-4 h-4 rounded-full border-2 border-slate-200 shrink-0" />
                            }
                            <p className="text-sm text-slate-700 truncate">
                              <span className="font-medium text-blue-700">{item.conceptA}</span>
                              <span className="text-slate-400 mx-1.5">vs</span>
                              <span className="font-medium text-[#6066bb]">{item.conceptB}</span>
                            </p>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0 ml-3">
                            <button onClick={() => openExercise(item, 'study')} className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors border border-blue-100">
                              <BookOpen className="w-3 h-3" /> Study
                            </button>
                            <button onClick={() => openExercise(item, 'sort')} className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium text-[#6066bb] bg-[#e3e5fb] hover:bg-[#e3e5fb] transition-colors border border-[#6066bb]/20">
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

// ── Assigned pile chip ─────────────────────────────────────────────────────────
function PileChip({ card, submitted }: { card: FeatureCard; submitted: boolean }) {
  const correct = submitted ? isCorrect(card) : null;
  const isShared = card.assignedA && card.assignedB;
  return (
    <div className={cn(
      'px-2 py-1 rounded-md text-xs leading-snug border',
      isShared && 'border-emerald-300 bg-emerald-50 text-emerald-800',
      !isShared && card.assignedA && !submitted && 'border-blue-200 bg-blue-50 text-blue-800',
      !isShared && card.assignedB && !submitted && 'border-[#6066bb]/40 bg-[#e3e5fb] text-[#6066bb]',
      card.struckOut && !submitted && 'border-slate-200 bg-slate-50 text-slate-400 line-through',
      submitted && correct === true && 'border-emerald-300 bg-emerald-50 text-emerald-800',
      submitted && correct === false && 'border-rose-300 bg-rose-50 text-rose-700',
    )}>
      {card.text}
      {isShared && <span className="ml-1 text-[9px] font-bold text-emerald-600">BOTH</span>}
      {submitted && correct !== null && (correct ? ' ✓' : ' ✗')}
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────
export default function VennPage() {
  const [, navigate] = useLocation();
  const { recordVennCompletion, progress } = useProgress();
  const [selectedDomain, setSelectedDomain] = useState<string>('ALL');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards, setCards] = useState<FeatureCard[]>([]);
  const [queueIndex, setQueueIndex] = useState(0); // index into cards[] for current card in queue
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<{ correct: number; total: number } | null>(null);
  const [started, setStarted] = useState(false);
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
    setQueueIndex(0);
    setSubmitted(false);
    setScore(null);
    setStarted(false);
    setMode(startMode);
    setView('exercise');
  }, [filteredItems]);

  const startItem = useCallback(() => {
    if (!currentItem) return;
    const newCards = buildFeatureCards(currentItem);
    setCards(newCards);
    setQueueIndex(0);
    setSubmitted(false);
    setScore(null);
    setStarted(true);
  }, [currentItem]);

  const updateCard = (id: string, patch: Partial<FeatureCard>) =>
    setCards(prev => prev.map(c => c.id === id ? { ...c, ...patch } : c));

  // Advance queue to next unanswered card
  const advanceQueue = (updatedCards: FeatureCard[], fromIndex: number) => {
    // Find next unanswered card after fromIndex
    for (let i = fromIndex + 1; i < updatedCards.length; i++) {
      if (!updatedCards[i].assignedA && !updatedCards[i].assignedB && !updatedCards[i].struckOut) {
        setQueueIndex(i);
        return;
      }
    }
    // Wrap around from beginning
    for (let i = 0; i < fromIndex; i++) {
      if (!updatedCards[i].assignedA && !updatedCards[i].assignedB && !updatedCards[i].struckOut) {
        setQueueIndex(i);
        return;
      }
    }
    // All answered — stay at current
    setQueueIndex(fromIndex);
  };

  const handleAssignA = () => {
    if (!cards[queueIndex]) return;
    const card = cards[queueIndex];
    const updated = cards.map(c => c.id === card.id ? { ...c, assignedA: true, struckOut: false } : c);
    setCards(updated);
    advanceQueue(updated, queueIndex);
  };

  const handleAssignB = () => {
    if (!cards[queueIndex]) return;
    const card = cards[queueIndex];
    const updated = cards.map(c => c.id === card.id ? { ...c, assignedB: true, struckOut: false } : c);
    setCards(updated);
    advanceQueue(updated, queueIndex);
  };

  const handleAssignBoth = () => {
    if (!cards[queueIndex]) return;
    const card = cards[queueIndex];
    const updated = cards.map(c => c.id === card.id ? { ...c, assignedA: true, assignedB: true, struckOut: false } : c);
    setCards(updated);
    advanceQueue(updated, queueIndex);
  };

  const handleStrikeOut = () => {
    if (!cards[queueIndex]) return;
    const card = cards[queueIndex];
    const updated = cards.map(c => c.id === card.id ? { ...c, struckOut: true, assignedA: false, assignedB: false } : c);
    setCards(updated);
    advanceQueue(updated, queueIndex);
  };

  const handleUndo = (id: string) => {
    updateCard(id, { assignedA: false, assignedB: false, struckOut: false });
    const idx = cards.findIndex(c => c.id === id);
    if (idx >= 0) setQueueIndex(idx);
  };

  const handleSubmit = () => {
    const correct = cards.filter(isCorrect).length;
    const total = cards.length;
    setScore({ correct, total });
    setSubmitted(true);
    const pct = Math.round((correct / total) * 100);
    if (pct >= PASS_THRESHOLD) recordVennCompletion(currentItem?.id ?? '', pct);
  };

  const handleNext = () => {
    setCurrentIndex(i => (i + 1) % filteredItems.length);
    setCards([]); setQueueIndex(0); setStarted(false); setSubmitted(false); setScore(null); setMode('study');
  };

  const handlePrev = () => {
    setCurrentIndex(i => (i - 1 + filteredItems.length) % filteredItems.length);
    setCards([]); setQueueIndex(0); setStarted(false); setSubmitted(false); setScore(null); setMode('study');
  };

  const answeredCards = cards.filter(c => c.assignedA || c.assignedB || c.struckOut);
  const allAnswered = cards.length > 0 && answeredCards.length === cards.length;
  const currentCard = cards[queueIndex] ?? null;

  // ── Grid view ──────────────────────────────────────────────────────────────
  if (view === 'grid') {
    return (
      <VennGridView
        selectedDomain={selectedDomain}
        setSelectedDomain={setSelectedDomain}
        completedIds={completedIds}
        openExercise={openExercise}
        navigate={navigate}
      />
    );
  }

  if (!currentItem) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
        <p className="text-slate-500">No item found.</p>
      </div>
    );
  }

  // ── Exercise view ──────────────────────────────────────────────────────────
  return (
    <div className="h-screen flex flex-col bg-[#F8FAFC] overflow-hidden">

      {/* Compact header */}
      <header className="bg-white border-b border-slate-200 shrink-0">
        <div className="max-w-5xl mx-auto px-4 py-2 flex items-center gap-3">
          <button onClick={() => setView('grid')} className="flex items-center gap-1.5 text-slate-500 hover:text-slate-800 text-sm shrink-0">
            <ArrowLeft className="w-4 h-4" /><span className="hidden sm:inline">All Pairs</span>
          </button>
          <div className="flex items-center gap-2 flex-1 justify-center min-w-0">
            <button onClick={handlePrev} className="p-1 rounded hover:bg-slate-100 shrink-0"><ChevronLeft className="w-4 h-4 text-slate-400" /></button>
            <div className="flex items-center gap-2 min-w-0 overflow-hidden">
              <span className="px-2.5 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-bold text-blue-800 truncate max-w-[140px]">{currentItem.conceptA}</span>
              <span className="text-slate-300 text-xs shrink-0">vs</span>
              <span className="px-2.5 py-1 bg-[#e3e5fb] border border-[#6066bb]/40 rounded-full text-xs font-bold text-[#6066bb] truncate max-w-[140px]">{currentItem.conceptB}</span>
            </div>
            <button onClick={handleNext} className="p-1 rounded hover:bg-slate-100 shrink-0"><ChevronRight className="w-4 h-4 text-slate-400" /></button>
            <span className="text-xs text-slate-400 shrink-0">{currentIndex + 1}/{filteredItems.length}</span>
          </div>
          {/* Mode toggle */}
          <div className="flex items-center gap-0.5 bg-slate-100 rounded-lg p-0.5 shrink-0">
            <button onClick={() => { setMode('study'); setStarted(false); setSubmitted(false); setScore(null); setCards([]); setQueueIndex(0); }}
              className={cn('flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium transition-all', mode === 'study' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700')}>
              <BookOpen className="w-3.5 h-3.5" />Study
            </button>
            <button onClick={() => { setMode('sort'); setStarted(false); setSubmitted(false); setScore(null); setCards([]); setQueueIndex(0); }}
              className={cn('flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium transition-all', mode === 'sort' ? 'text-white shadow-sm' : 'text-slate-500 hover:text-slate-700')}
              style={mode === 'sort' ? { background: '#00c2d6' } : {}}>
              <Swords className="w-3.5 h-3.5" />Sort
            </button>
          </div>
        </div>
      </header>

      {/* Key Distinction bar */}
      <div className="bg-[#e2fcff] border-b border-[#00c2d6]/40 px-4 py-1.5 shrink-0">
        <p className="text-xs text-[#00c2d6] max-w-5xl mx-auto">
          <span className="font-semibold">Key Distinction: </span>{currentItem.keyDistinction}
        </p>
      </div>

      {/* ── STUDY MODE ── */}
      {mode === 'study' && (
        <div className="flex-1 overflow-hidden max-w-5xl mx-auto w-full px-4 py-3">
          <div className="grid grid-cols-3 gap-3 h-full">
            {/* Term A */}
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
                {currentItem.shared.length > 0 && (
                  <>
                    <div className="border-t border-blue-200 my-2" />
                    <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide">Shared</p>
                    {currentItem.shared.map((f, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-emerald-700">
                        <span className="text-emerald-500 mt-0.5 shrink-0">◆</span>
                        <span className="leading-snug">{f}</span>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>

            {/* Center — labeled feature list */}
            <div className="rounded-xl border-2 border-slate-200 bg-white flex flex-col overflow-hidden">
              <div className="px-3 py-2 bg-slate-100 border-b border-slate-200 shrink-0">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wide text-center">All Features</p>
              </div>
              <div className="p-2.5 space-y-1.5 overflow-y-auto flex-1">
                {shuffle([
                  ...currentItem.onlyA.map(f => ({ f, zone: 'A only', cls: 'text-blue-700 bg-blue-50 border-blue-200' })),
                  ...currentItem.shared.map(f => ({ f, zone: 'Both', cls: 'text-emerald-700 bg-emerald-50 border-emerald-200' })),
                  ...currentItem.onlyB.map(f => ({ f, zone: 'B only', cls: 'text-[#6066bb] bg-[#e3e5fb] border-[#6066bb]/40' })),
                  ...currentItem.distractors.map(f => ({ f, zone: 'Neither', cls: 'text-rose-600 bg-rose-50 border-rose-200 line-through' })),
                ]).map(({ f, zone, cls }, i) => (
                  <div key={i} className={cn('flex items-center justify-between gap-2 px-2 py-1.5 rounded-lg border text-xs', cls)}>
                    <span className="leading-snug flex-1">{f}</span>
                    <span className="text-[10px] font-bold opacity-60 shrink-0">{zone}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Term B */}
            <div className="rounded-xl border-2 border-[#6066bb]/40 bg-[#e3e5fb] flex flex-col overflow-hidden">
              <div className="px-3 py-2 bg-[#e3e5fb] border-b border-[#6066bb]/40 shrink-0">
                <p className="text-xs font-bold text-[#6066bb] uppercase tracking-wide truncate">Only: {currentItem.conceptB}</p>
              </div>
              <div className="p-2.5 space-y-1.5 overflow-y-auto flex-1">
                {currentItem.onlyB.map((f, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-xs text-[#6066bb]">
                    <span className="text-[#6066bb] mt-0.5 shrink-0">•</span>
                    <span className="leading-snug">{f}</span>
                  </div>
                ))}
                {currentItem.shared.length > 0 && (
                  <>
                    <div className="border-t border-[#6066bb]/40 my-2" />
                    <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide">Shared</p>
                    {currentItem.shared.map((f, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-emerald-700">
                        <span className="text-emerald-500 mt-0.5 shrink-0">◆</span>
                        <span className="leading-snug">{f}</span>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── SORT MODE: start screen ── */}
      {mode === 'sort' && !started && (
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl border border-slate-200 p-6 text-center shadow-sm max-w-sm w-full">
            <div className="w-12 h-12 bg-[#e3e5fb] rounded-full flex items-center justify-center mx-auto mb-3">
              <Swords className="w-5 h-5 text-[#6066bb]" />
            </div>
            <h2 className="text-base font-bold text-slate-800 mb-1">Ready to Sort?</h2>
            <p className="text-slate-500 text-xs mb-4 leading-relaxed">
              One feature at a time will appear. Tap <span className="font-bold text-blue-600">← A</span> or <span className="font-bold text-[#6066bb]">B →</span> to assign it, <span className="font-bold text-emerald-600">◆ Both</span> if it applies to both, or <span className="font-bold text-rose-500">N/A</span> if it belongs to neither.
            </p>
            <Button onClick={startItem} className="text-white px-6 h-9 text-sm w-full">
              Start Sorting
            </Button>
          </div>
        </div>
      )}

      {/* ── SORT MODE: active ── */}
      {mode === 'sort' && started && (
        <div className="flex-1 overflow-hidden flex flex-col max-w-5xl mx-auto w-full px-3 py-3 gap-2">

          {/* Score banner */}
          {submitted && score && (() => {
            const pct = Math.round((score.correct / score.total) * 100);
            const isPerfect = score.correct === score.total;
            const isPassing = pct >= PASS_THRESHOLD;
            return (
              <div className={cn('rounded-lg border px-4 py-2 flex items-center justify-between shrink-0',
                isPerfect ? 'bg-emerald-50 border-emerald-200' : isPassing ? 'bg-[#e2fcff] border-[#00c2d6]/40' : 'bg-rose-50 border-rose-200')}>
                <div className="flex items-center gap-2">
                  {isPerfect ? <Trophy className="w-4 h-4 text-[#6066bb]" /> : isPassing ? <CheckCircle2 className="w-4 h-4 text-[#00c2d6]" /> : <XCircle className="w-4 h-4 text-rose-600" />}
                  <p className={cn('font-bold text-sm', isPerfect ? 'text-emerald-800' : isPassing ? 'text-[#00c2d6]' : 'text-rose-700')}>
                    {isPerfect ? 'Perfect!' : `${score.correct}/${score.total} (${pct}%)`}
                  </p>
                  <p className="text-xs text-slate-500 hidden sm:block">
                    {isPassing ? 'Passed ✓' : 'Below 70% — not yet marked complete.'}
                  </p>
                </div>
                <div className="flex gap-1.5">
                  <Button variant="outline" size="sm" onClick={startItem} className="gap-1 h-7 text-xs"><RotateCcw className="w-3 h-3" /> Retry</Button>
                  <Button size="sm" onClick={handleNext} className="text-white h-7 text-xs">Next →</Button>
                </div>
              </div>
            );
          })()}

          {/* Progress bar */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#6066bb] rounded-full transition-all" style={{ width: `${cards.length > 0 ? (answeredCards.length / cards.length) * 100 : 0}%` }} />
            </div>
            <span className="text-xs text-slate-400 shrink-0">{answeredCards.length}/{cards.length}</span>
          </div>

          {/* Main 3-column layout */}
          <div className="grid grid-cols-3 gap-2 flex-1 overflow-hidden min-h-0">

            {/* LEFT — Term A pile */}
            <div className="rounded-xl border-2 border-blue-200 bg-blue-50 flex flex-col overflow-hidden">
              <div className="px-2 py-2 bg-blue-100 border-b border-blue-200 shrink-0">
                <p className="text-xs font-bold text-blue-700 truncate">{currentItem.conceptA}</p>
                <p className="text-[10px] text-blue-400">{cards.filter(c => c.assignedA).length} assigned</p>
              </div>
              <div className="p-1.5 space-y-1 overflow-y-auto flex-1">
                {cards.filter(c => c.assignedA).map(card => (
                  <div key={card.id} className="group relative">
                    <PileChip card={card} submitted={submitted} />
                    {!submitted && (
                      <button onClick={() => handleUndo(card.id)} className="absolute -top-1 -right-1 w-4 h-4 bg-slate-400 hover:bg-rose-500 text-white rounded-full items-center justify-center hidden group-hover:flex transition-colors" title="Undo">
                        <X className="w-2.5 h-2.5" />
                      </button>
                    )}
                  </div>
                ))}
                {cards.filter(c => c.assignedA).length === 0 && (
                  <p className="text-[10px] text-blue-300 text-center py-3">← assign here</p>
                )}
              </div>
            </div>

            {/* CENTER — current feature card + action buttons */}
            <div className="flex flex-col gap-2 overflow-hidden">
              {!submitted && currentCard && !allAnswered ? (
                <>
                  {/* Feature card */}
                  <div className="flex-1 flex items-center justify-center">
                    <div className="bg-white border-2 border-slate-300 rounded-xl shadow-md p-4 w-full text-center">
                      <p className="text-sm font-medium text-slate-800 leading-snug">{currentCard.text}</p>
                      <p className="text-[10px] text-slate-400 mt-2">{answeredCards.length + 1} of {cards.length}</p>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="grid grid-cols-2 gap-1.5 shrink-0">
                    <button onClick={handleAssignA} className="flex items-center justify-center gap-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all active:scale-95 shadow-sm">
                      ← {currentItem.conceptA.split(' ')[0]}
                    </button>
                    <button onClick={handleAssignB} className="flex items-center justify-center gap-1 py-2.5 rounded-xl text-white text-xs font-bold transition-all active:scale-95 shadow-sm" style={{ background: '#6066bb' }}>
                      {currentItem.conceptB.split(' ')[0]} →
                    </button>
                    <button onClick={handleAssignBoth} className="flex items-center justify-center gap-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all active:scale-95 shadow-sm">
                      ◆ Both
                    </button>
                    <button onClick={handleStrikeOut} className="flex items-center justify-center gap-1 py-2 rounded-xl bg-slate-200 hover:bg-rose-100 text-slate-600 hover:text-rose-700 text-xs font-bold transition-all active:scale-95">
                      N/A
                    </button>
                  </div>
                </>
              ) : (
                /* All answered — show submit / results */
                <div className="flex-1 flex flex-col items-center justify-center gap-3">
                  {!submitted ? (
                    <>
                      <div className="w-10 h-10 bg-[#e3e5fb] rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-[#6066bb]" />
                      </div>
                      <p className="text-xs text-slate-600 text-center font-medium">All {cards.length} features sorted!</p>
                      <Button onClick={handleSubmit} className="text-white h-9 text-sm px-5">
                        Check Answers
                      </Button>
                      <button onClick={startItem} className="text-xs text-slate-400 hover:text-slate-600 flex items-center gap-1">
                        <RotateCcw className="w-3 h-3" /> Reset
                      </button>
                    </>
                  ) : (
                    <>
                      <p className="text-xs text-slate-500 text-center">Review results in the columns</p>
                      <Button variant="outline" size="sm" onClick={startItem} className="gap-1 text-xs h-8"><RotateCcw className="w-3 h-3" /> Try Again</Button>
                    </>
                  )}
                </div>
              )}

              {/* N/A pile (struck out) */}
              {cards.filter(c => c.struckOut).length > 0 && (
                <div className="shrink-0 border border-slate-200 rounded-lg bg-slate-50 p-1.5">
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">N/A — Neither</p>
                  <div className="flex flex-wrap gap-1">
                    {cards.filter(c => c.struckOut).map(card => (
                      <div key={card.id} className="group relative">
                        <span className={cn(
                          'inline-block px-1.5 py-0.5 rounded text-[10px] line-through',
                          submitted && isCorrect(card) ? 'bg-emerald-100 text-emerald-700' : submitted ? 'bg-rose-100 text-rose-600' : 'bg-slate-100 text-slate-400'
                        )}>
                          {card.text}{submitted && (isCorrect(card) ? ' ✓' : ' ✗')}
                        </span>
                        {!submitted && (
                          <button onClick={() => handleUndo(card.id)} className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-slate-400 hover:bg-rose-500 text-white rounded-full items-center justify-center hidden group-hover:flex" title="Undo">
                            <X className="w-2 h-2" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT — Term B pile */}
            <div className="rounded-xl border-2 border-[#6066bb]/40 bg-[#e3e5fb] flex flex-col overflow-hidden">
              <div className="px-2 py-2 bg-[#e3e5fb] border-b border-[#6066bb]/40 shrink-0">
                <p className="text-xs font-bold text-[#6066bb] truncate">{currentItem.conceptB}</p>
                <p className="text-[10px] text-[#6066bb]">{cards.filter(c => c.assignedB).length} assigned</p>
              </div>
              <div className="p-1.5 space-y-1 overflow-y-auto flex-1">
                {cards.filter(c => c.assignedB).map(card => (
                  <div key={card.id} className="group relative">
                    <PileChip card={card} submitted={submitted} />
                    {!submitted && (
                      <button onClick={() => handleUndo(card.id)} className="absolute -top-1 -right-1 w-4 h-4 bg-slate-400 hover:bg-rose-500 text-white rounded-full items-center justify-center hidden group-hover:flex transition-colors" title="Undo">
                        <X className="w-2.5 h-2.5" />
                      </button>
                    )}
                  </div>
                ))}
                {cards.filter(c => c.assignedB).length === 0 && (
                  <p className="text-[10px] text-[#6066bb]/50 text-center py-3">assign here →</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
