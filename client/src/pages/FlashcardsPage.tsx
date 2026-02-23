/**
 * Flashcards — Tier 1: Remember (L1)
 * Flip cards, domain filter, mastery tracking, shuffle mode, mark-as-weak
 */
import { useState, useMemo, useCallback } from 'react';
import { useLocation } from 'wouter';
import { flashcards, allDomains } from '@/data/flashcards';
import { useProgress } from '@/contexts/ProgressContext';
import { ArrowLeft, RotateCcw, CheckCircle2, ChevronLeft, ChevronRight, Filter, Layers, Shuffle, Flag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const ALL_DOMAINS = 'ALL';

export default function FlashcardsPage() {
  const [, navigate] = useLocation();
  const { progress, markFlashcardMastered, markFlashcardSeen } = useProgress();
  const [selectedDomain, setSelectedDomain] = useState<string>(ALL_DOMAINS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showMasteredOnly, setShowMasteredOnly] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [showWeakOnly, setShowWeakOnly] = useState(false);
  const [weakIds, setWeakIds] = useState<Set<string>>(new Set());
  const [shuffleSeed, setShuffleSeed] = useState(0);

  const domains = useMemo(() => {
    const unique = Array.from(new Set(flashcards.map(f => f.domain)));
    return unique.sort();
  }, []);

  const filtered = useMemo(() => {
    let cards = flashcards;
    if (selectedDomain !== ALL_DOMAINS) cards = cards.filter(f => f.domain === selectedDomain);
    if (showMasteredOnly) {
      const masteredIds = new Set(progress.flashcards.filter(f => f.mastered).map(f => f.cardId));
      cards = cards.filter(f => masteredIds.has(f.id));
    }
    if (showWeakOnly) {
      cards = cards.filter(f => weakIds.has(f.id));
    }
    if (isShuffled) {
      const arr = [...cards];
      let seed = shuffleSeed;
      for (let i = arr.length - 1; i > 0; i--) {
        seed = (seed * 1664525 + 1013904223) & 0xffffffff;
        const j = Math.abs(seed) % (i + 1);
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }
    return cards;
  }, [selectedDomain, showMasteredOnly, showWeakOnly, weakIds, isShuffled, shuffleSeed, progress.flashcards]);

  const currentCard = filtered[currentIndex] ?? null;
  const masteredIds = useMemo(() => new Set(progress.flashcards.filter(f => f.mastered).map(f => f.cardId)), [progress.flashcards]);
  const masteredCount = filtered.filter(f => masteredIds.has(f.id)).length;

  const handleFlip = useCallback(() => {
    if (!currentCard) return;
    markFlashcardSeen(currentCard.id);
    setIsFlipped(f => !f);
  }, [currentCard, markFlashcardSeen]);

  const handleMastered = useCallback(() => {
    if (!currentCard) return;
    markFlashcardMastered(currentCard.id);
    toast.success('Marked as mastered!', { duration: 1500 });
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex(i => Math.min(i + 1, filtered.length - 1));
    }, 200);
  }, [currentCard, markFlashcardMastered, filtered.length]);

  const handleNext = useCallback(() => {
    setIsFlipped(false);
    setTimeout(() => setCurrentIndex(i => (i + 1) % filtered.length), 150);
  }, [filtered.length]);

  const handlePrev = useCallback(() => {
    setIsFlipped(false);
    setTimeout(() => setCurrentIndex(i => (i - 1 + filtered.length) % filtered.length), 150);
  }, [filtered.length]);

  const handleDomainChange = (domain: string) => {
    setSelectedDomain(domain);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleShuffle = () => {
    const next = !isShuffled;
    setIsShuffled(next);
    if (next) setShuffleSeed(Math.floor(Math.random() * 1e9));
    setCurrentIndex(0);
    setIsFlipped(false);
    toast.info(next ? 'Deck shuffled' : 'Shuffle off — back to original order', { duration: 1500 });
  };

  const handleMarkWeak = useCallback(() => {
    if (!currentCard) return;
    setWeakIds(prev => {
      const next = new Set(prev);
      if (next.has(currentCard.id)) {
        next.delete(currentCard.id);
        toast.info('Removed from weak cards', { duration: 1500 });
      } else {
        next.add(currentCard.id);
        toast.warning('Flagged as weak — review again soon', { duration: 1800 });
      }
      return next;
    });
  }, [currentCard]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/dashboard')} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </button>
            <span className="text-border">|</span>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600" />
              <span className="font-semibold text-sm">Flashcards</span>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Tier 1</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {weakIds.size > 0 && (
              <span className="text-xs text-orange-600 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded-full">
                {weakIds.size} weak
              </span>
            )}
            <span className="text-xs text-muted-foreground">
              {masteredCount} / {filtered.length} mastered
            </span>
          </div>
        </div>
      </header>

      <div className="container py-6 max-w-3xl mx-auto">
        {/* Domain filter */}
        <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-2">
          <Filter className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
          <button
            onClick={() => handleDomainChange(ALL_DOMAINS)}
            className={cn(
              "text-xs px-3 py-1.5 rounded-full border whitespace-nowrap transition-colors",
              selectedDomain === ALL_DOMAINS
                ? "bg-blue-600 text-white border-blue-600"
                : "border-border text-muted-foreground hover:border-blue-300"
            )}
          >
            All ({flashcards.length})
          </button>
          {domains.map(d => {
            const count = flashcards.filter(f => f.domain === d).length;
            const domainInfo = allDomains.find((dc: { code: string; name: string }) => dc.code === d);
            return (
              <button
                key={d}
                onClick={() => handleDomainChange(d)}
                className={cn(
                  "text-xs px-3 py-1.5 rounded-full border whitespace-nowrap transition-colors",
                  selectedDomain === d
                    ? "bg-blue-600 text-white border-blue-600"
                    : "border-border text-muted-foreground hover:border-blue-300"
                )}
              >
                {d}: {domainInfo?.name.split(' ')[0] ?? d} ({count})
              </button>
            );
          })}
        </div>

        {/* Mode toggles row */}
        <div className="flex items-center gap-2 mb-5 flex-wrap">
          <button
            onClick={handleShuffle}
            className={cn(
              "flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-colors",
              isShuffled ? "bg-blue-100 text-blue-800 border-blue-300" : "border-border text-muted-foreground hover:border-blue-300"
            )}
          >
            <Shuffle className="w-3 h-3" />
            {isShuffled ? 'Shuffled' : 'Shuffle'}
          </button>
          <button
            onClick={() => { setShowMasteredOnly(s => !s); setCurrentIndex(0); setIsFlipped(false); }}
            className={cn(
              "flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-colors",
              showMasteredOnly ? "bg-violet-100 text-violet-800 border-violet-300" : "border-border text-muted-foreground hover:border-violet-300"
            )}
          >
            <CheckCircle2 className="w-3 h-3" />
            {showMasteredOnly ? 'Mastered only' : 'Show mastered'}
          </button>
          {weakIds.size > 0 && (
            <button
              onClick={() => { setShowWeakOnly(s => !s); setCurrentIndex(0); setIsFlipped(false); }}
              className={cn(
                "flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-colors",
                showWeakOnly ? "bg-orange-100 text-orange-800 border-orange-300" : "border-border text-muted-foreground hover:border-orange-300"
              )}
            >
              <Flag className="w-3 h-3" />
              {showWeakOnly ? `Weak only (${weakIds.size})` : `Weak cards (${weakIds.size})`}
            </button>
          )}
        </div>

        {/* Progress bar */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-500"
              style={{ width: filtered.length > 0 ? `${(masteredCount / filtered.length) * 100}%` : '0%' }}
            />
          </div>
          <span className="text-xs text-muted-foreground whitespace-nowrap">
            {filtered.length > 0 ? Math.round((masteredCount / filtered.length) * 100) : 0}% mastered
          </span>
        </div>

        {/* Card */}
        {currentCard ? (
          <>
            <div className="text-center mb-2 text-xs text-muted-foreground">
              {currentIndex + 1} of {filtered.length} · Click card to flip
              {isShuffled && <span className="ml-1 text-blue-500">· Shuffled</span>}
              {showWeakOnly && <span className="ml-1 text-orange-500">· Weak cards</span>}
            </div>

            {/* Flip card */}
            <div
              className="relative cursor-pointer mb-5"
              style={{ perspective: '1000px', height: '280px' }}
              onClick={handleFlip}
            >
              <div
                className="relative w-full h-full transition-transform duration-500"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white p-8 flex flex-col items-center justify-center"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  {weakIds.has(currentCard.id) && (
                    <div className="absolute top-4 right-4 text-orange-400">
                      <Flag className="w-4 h-4 fill-orange-300" />
                    </div>
                  )}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">{currentCard.domainFull}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground text-center leading-tight mb-3">
                    {currentCard.term}
                  </h2>
                  {masteredIds.has(currentCard.id) && (
                    <div className="flex items-center gap-1 text-violet-700 text-xs mt-2">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Mastered</span>
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 text-blue-300">
                    <RotateCcw className="w-4 h-4" />
                  </div>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 rounded-2xl border-2 border-blue-300 bg-gradient-to-br from-white to-blue-50 p-8 flex flex-col items-center justify-center"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">Definition</span>
                  </div>
                  <p className="text-base text-foreground text-center leading-relaxed mb-4">
                    {currentCard.definition}
                  </p>
                  {currentCard.example && (
                    <p className="text-sm text-muted-foreground text-center italic border-t border-blue-100 pt-3 mt-1">
                      <span className="font-medium not-italic text-blue-600">Example: </span>
                      {currentCard.example}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <button
                onClick={handlePrev}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-lg px-4 py-2 transition-colors hover:bg-muted/50"
              >
                <ChevronLeft className="w-4 h-4" />
                Prev
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleMarkWeak}
                  className={cn(
                    "flex items-center gap-1.5 text-sm font-medium rounded-lg px-4 py-2 transition-colors border",
                    weakIds.has(currentCard.id)
                      ? "bg-orange-100 text-orange-800 border-orange-300"
                      : "bg-card text-muted-foreground border-border hover:border-orange-300 hover:text-orange-700"
                  )}
                >
                  <Flag className="w-4 h-4" />
                  {weakIds.has(currentCard.id) ? 'Weak' : 'Flag Weak'}
                </button>

                <button
                  onClick={handleMastered}
                  disabled={masteredIds.has(currentCard.id)}
                  className={cn(
                    "flex items-center gap-1.5 text-sm font-medium rounded-lg px-4 py-2 transition-colors",
                    masteredIds.has(currentCard.id)
                      ? "bg-violet-100 text-violet-800 border border-violet-200 cursor-default"
                      : "bg-violet-700 text-white hover:bg-violet-800"
                  )}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  {masteredIds.has(currentCard.id) ? 'Mastered' : 'Mastered'}
                </button>
              </div>

              <button
                onClick={handleNext}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-lg px-4 py-2 transition-colors hover:bg-muted/50"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            <Layers className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p className="text-lg font-medium mb-2">No cards to show</p>
            <p className="text-sm">Try changing your filter settings.</p>
          </div>
        )}
      </div>
    </div>
  );
}
