/**
 * VennPage — Tier 4: Understand / Analyze (L2–4)
 * Interactive concept comparison across 73 pairs
 */
import { useState, useMemo } from 'react';
import { useLocation } from 'wouter';
import { vennDiagrams, type VennItem } from '@/data/vennDiagrams';
import { useProgress } from '@/contexts/ProgressContext';
import { ArrowLeft, GitMerge, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string; pill: string }> = {
  'Tier 1 – High Confusion': { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200', pill: 'bg-red-100 text-red-700' },
  'Behavior Reduction': { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', pill: 'bg-orange-100 text-orange-700' },
  'Tier 2 – Moderate Confusion': { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', pill: 'bg-amber-100 text-amber-700' },
  'Research & Design': { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', pill: 'bg-blue-100 text-blue-700' },
  'Verbal Behavior + Stimulus Control': { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', pill: 'bg-purple-100 text-purple-700' },
  'Tier 3 – Subtle Distinction': { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200', pill: 'bg-teal-100 text-teal-700' },
};

const DEFAULT_COLORS = { bg: 'bg-muted/30', text: 'text-foreground', border: 'border-border', pill: 'bg-muted text-foreground' };

function getColors(category: string) {
  return CATEGORY_COLORS[category] ?? DEFAULT_COLORS;
}

export default function VennPage() {
  const [, navigate] = useLocation();
  const { recordVennCompletion, progress } = useProgress();
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedPair, setSelectedPair] = useState<VennItem | null>(null);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(vennDiagrams.map(v => v.category)));
    return cats;
  }, []);

  const filtered = useMemo(() => {
    if (selectedCategory === 'ALL') return vennDiagrams;
    return vennDiagrams.filter(v => v.category === selectedCategory);
  }, [selectedCategory]);

  const completedIds = useMemo(() => new Set(progress.venn.filter(v => v.completed).map(v => v.pairId)), [progress.venn]);

  const handleOpenPair = (pair: VennItem) => {
    setSelectedPair(pair);
    // Mark as completed when viewed
    if (!completedIds.has(pair.id)) {
      recordVennCompletion(pair.id, 100);
    }
  };

  if (selectedPair) {
    const colors = getColors(selectedPair.category);
    const currentIdx = vennDiagrams.findIndex(v => v.id === selectedPair.id);
    const prevPair = currentIdx > 0 ? vennDiagrams[currentIdx - 1] : null;
    const nextPair = currentIdx < vennDiagrams.length - 1 ? vennDiagrams[currentIdx + 1] : null;

    return (
      <div className="min-h-screen bg-background">
        <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container flex items-center justify-between h-14">
            <button onClick={() => setSelectedPair(null)} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              All Pairs
            </button>
            <span className={cn("text-xs font-medium px-2.5 py-1 rounded-full", colors.pill)}>
              {selectedPair.category}
            </span>
          </div>
        </header>

        <div className="container py-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground text-center mb-1">
            <span className="text-blue-600">{selectedPair.conceptA}</span>
            <span className="text-muted-foreground mx-3">vs</span>
            <span className="text-purple-600">{selectedPair.conceptB}</span>
          </h2>
          <p className="text-center text-sm text-muted-foreground mb-8 italic">{selectedPair.keyDistinction}</p>

          {/* Three-column Venn layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Left: Only A */}
            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-5">
              <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3 text-center">
                Only: {selectedPair.conceptA}
              </div>
              <ul className="space-y-2">
                {selectedPair.onlyA.map((item, i) => (
                  <li key={i} className="text-sm text-blue-800 flex items-start gap-2">
                    <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Center: Shared */}
            <div className="rounded-2xl border-2 border-green-200 bg-green-50 p-5">
              <div className="text-xs font-bold text-green-600 uppercase tracking-wider mb-3 text-center">
                Shared / Overlap
              </div>
              <ul className="space-y-2">
                {selectedPair.shared.map((item, i) => (
                  <li key={i} className="text-sm text-green-800 flex items-start gap-2">
                    <span className="text-green-500 mt-1 flex-shrink-0">◆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Only B */}
            <div className="rounded-2xl border-2 border-purple-200 bg-purple-50 p-5">
              <div className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-3 text-center">
                Only: {selectedPair.conceptB}
              </div>
              <ul className="space-y-2">
                {selectedPair.onlyB.map((item, i) => (
                  <li key={i} className="text-sm text-purple-800 flex items-start gap-2">
                    <span className="text-purple-400 mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={() => prevPair && handleOpenPair(prevPair)}
              disabled={!prevPair}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-lg px-4 py-2 transition-colors hover:bg-muted/50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            <span className="text-xs text-muted-foreground">
              {currentIdx + 1} of {vennDiagrams.length}
            </span>
            <button
              onClick={() => nextPair && handleOpenPair(nextPair)}
              disabled={!nextPair}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-lg px-4 py-2 transition-colors hover:bg-muted/50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Grid view
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
              <GitMerge className="w-4 h-4 text-purple-600" />
              <span className="font-semibold text-sm">Venn Diagram</span>
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">Tier 4</span>
            </div>
          </div>
          <div className="text-xs text-muted-foreground">
            {completedIds.size} / {vennDiagrams.length} reviewed
          </div>
        </div>
      </header>

      <div className="container py-6 max-w-5xl mx-auto">
        {/* Category filter */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
          <Filter className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
          <button
            onClick={() => setSelectedCategory('ALL')}
            className={cn(
              "text-xs px-3 py-1.5 rounded-full border whitespace-nowrap transition-colors",
              selectedCategory === 'ALL' ? "bg-purple-600 text-white border-purple-600" : "border-border text-muted-foreground hover:border-purple-300"
            )}
          >
            All ({vennDiagrams.length})
          </button>
          {categories.map(cat => {
            const colors = getColors(cat);
            const count = vennDiagrams.filter(v => v.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "text-xs px-3 py-1.5 rounded-full border whitespace-nowrap transition-colors",
                  selectedCategory === cat ? `${colors.bg} ${colors.text} ${colors.border}` : "border-border text-muted-foreground"
                )}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Pair grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map(pair => {
            const colors = getColors(pair.category);
            const isCompleted = completedIds.has(pair.id);
            return (
              <button
                key={pair.id}
                onClick={() => handleOpenPair(pair)}
                className={cn(
                  "text-left p-4 rounded-xl border-2 transition-all hover:shadow-md hover:-translate-y-0.5 group",
                  colors.border, colors.bg,
                  isCompleted && "ring-1 ring-green-400/50"
                )}
              >
                <div className={cn("text-xs mb-2", colors.text)}>{pair.category}</div>
                <div className="font-bold text-foreground text-sm leading-tight mb-1">{pair.conceptA}</div>
                <div className="text-xs text-muted-foreground">vs {pair.conceptB}</div>
                {isCompleted && (
                  <div className="text-xs text-green-600 mt-2 font-medium">✓ Reviewed</div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
