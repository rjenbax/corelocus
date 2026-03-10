/**
 * Flashcards — Tier 1: Remember (L1)
 * Flip cards, domain filter, mastery tracking, shuffle mode
 * Buttons: "Flag Unsure" / "Check Mastered" (outline) → "Unsure" / "Mastered" (filled)
 * Card shows status flags when set. Top bar shows Show Mastered / Show Unsure / Show Unrated counts.
 */
import { useState, useMemo, useCallback } from 'react';
import { useLocation } from 'wouter';
import { flashcards, allDomains } from '@/data/flashcards';
import { useProgress } from '@/contexts/ProgressContext';
import { ArrowLeft, RotateCcw, CheckCircle2, ChevronLeft, ChevronRight, Filter, Layers, Shuffle, Flag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const ALL_DOMAINS = 'ALL';
type StatusFilter = 'all' | 'mastered' | 'unsure' | 'unrated';

export default function FlashcardsPage() {
  const [, navigate] = useLocation();
  const { progress, markFlashcardMastered, unmarkFlashcardMastered, markFlashcardSeen } = useProgress();
  const [selectedDomain, setSelectedDomain] = useState<string>(ALL_DOMAINS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [shuffleSeed, setShuffleSeed] = useState(0);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');

  // "Unsure" is local state (not persisted to ProgressContext — can be extended later)
  const [unsureIds, setUnsureIds] = useState<Set<string>>(new Set());

  // Mastered IDs from progress context
  const masteredIds = useMemo(
    () => new Set(progress.flashcards.filter(f => f.mastered).map(f => f.cardId)),
    [progress.flashcards]
  );

  // Counts across ALL cards in the current domain (before status filter)
  const domainCards = useMemo(() => {
    if (selectedDomain === ALL_DOMAINS) return flashcards;
    return flashcards.filter(f => f.domain === selectedDomain);
  }, [selectedDomain]);

  const masteredCount  = useMemo(() => domainCards.filter(f => masteredIds.has(f.id)).length, [domainCards, masteredIds]);
  const unsureCount    = useMemo(() => domainCards.filter(f => unsureIds.has(f.id)).length,   [domainCards, unsureIds]);
  const unratedCount   = useMemo(
    () => domainCards.filter(f => !masteredIds.has(f.id) && !unsureIds.has(f.id)).length,
    [domainCards, masteredIds, unsureIds]
  );

  const domains = useMemo(() => Array.from(new Set(flashcards.map(f => f.domain))).sort(), []);

  const filtered = useMemo(() => {
    let cards = domainCards;
    if (statusFilter === 'mastered') cards = cards.filter(f => masteredIds.has(f.id));
    else if (statusFilter === 'unsure') cards = cards.filter(f => unsureIds.has(f.id));
    else if (statusFilter === 'unrated') cards = cards.filter(f => !masteredIds.has(f.id) && !unsureIds.has(f.id));
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
  }, [domainCards, statusFilter, masteredIds, unsureIds, isShuffled, shuffleSeed]);

  const currentCard = filtered[currentIndex] ?? null;

  const handleFlip = useCallback(() => {
    if (!currentCard) return;
    markFlashcardSeen(currentCard.id);
    setIsFlipped(f => !f);
  }, [currentCard, markFlashcardSeen]);

  const handleToggleMastered = useCallback(() => {
    if (!currentCard) return;
    if (masteredIds.has(currentCard.id)) {
      // Toggle OFF mastered
      unmarkFlashcardMastered(currentCard.id);
      toast.info('Mastered removed', { duration: 1500 });
    } else {
      // Cannot select Mastered if Unsure is active
      if (unsureIds.has(currentCard.id)) return;
      markFlashcardMastered(currentCard.id);
      toast.success('Marked as mastered!', { duration: 1500 });
    }
  }, [currentCard, masteredIds, unsureIds, markFlashcardMastered, unmarkFlashcardMastered]);

  const handleToggleUnsure = useCallback(() => {
    if (!currentCard) return;
    // Cannot select Unsure if Mastered is active
    if (masteredIds.has(currentCard.id)) return;
    setUnsureIds(prev => {
      const next = new Set(prev);
      if (next.has(currentCard.id)) {
        next.delete(currentCard.id);
        toast.info('Unsure flag removed', { duration: 1500 });
      } else {
        next.add(currentCard.id);
        toast.warning('Flagged as unsure', { duration: 1500 });
      }
      return next;
    });
  }, [currentCard, masteredIds]);

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
    toast.info(next ? 'Deck shuffled' : 'Shuffle off', { duration: 1500 });
  };

  const handleStatusFilter = (f: StatusFilter) => {
    setStatusFilter(prev => prev === f ? 'all' : f);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const isMastered = currentCard ? masteredIds.has(currentCard.id) : false;
  const isUnsure   = currentCard ? unsureIds.has(currentCard.id)   : false;

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
            <span className="text-xs text-muted-foreground">
              {masteredCount} / {domainCards.length} mastered
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
        <div className="flex items-center gap-2 mb-3 flex-wrap">
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
        </div>

        {/* Status filter counts row — matches reference image */}
        <div className="flex items-center gap-4 mb-4 text-sm font-medium">
          <button
            onClick={() => handleStatusFilter('mastered')}
            className={cn(
              "transition-colors",
              statusFilter === 'mastered'
                ? "text-violet-700 underline underline-offset-2"
                : "text-foreground hover:text-violet-700"
            )}
          >
            Show Mastered ({masteredCount})
          </button>
          <button
            onClick={() => handleStatusFilter('unsure')}
            className={cn(
              "transition-colors",
              statusFilter === 'unsure'
                ? "text-pink-600 underline underline-offset-2"
                : "text-foreground hover:text-pink-600"
            )}
          >
            Show Unsure ({unsureCount})
          </button>
          <button
            onClick={() => handleStatusFilter('unrated')}
            className={cn(
              "transition-colors",
              statusFilter === 'unrated'
                ? "text-blue-600 underline underline-offset-2"
                : "text-foreground hover:text-blue-600"
            )}
          >
            Show Unrated ({unratedCount})
          </button>
        </div>

        {/* Progress bar */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-500"
              style={{ width: domainCards.length > 0 ? `${(masteredCount / domainCards.length) * 100}%` : '0%' }}
            />
          </div>
          <span className="text-xs text-muted-foreground whitespace-nowrap">
            {domainCards.length > 0 ? Math.round((masteredCount / domainCards.length) * 100) : 0}% mastered
          </span>
        </div>

        {/* Card */}
        {currentCard ? (
          <>
            <div className="text-center mb-2 text-xs text-muted-foreground">
              {currentIndex + 1} of {filtered.length} · Click card to flip
              {isShuffled && <span className="ml-1 text-blue-500">· Shuffled</span>}
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
                  {/* Status flags on card — only shown when a status is set */}
                  {(isMastered || isUnsure) && (
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
                      {isUnsure && (
                        <div className="flex items-center gap-1 text-pink-600 text-xs font-medium">
                          <Flag className="w-3.5 h-3.5 fill-pink-500" />
                          <span>Unsure</span>
                        </div>
                      )}
                      {isMastered && (
                        <div className="flex items-center gap-1 text-violet-700 text-xs font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Mastered</span>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">{currentCard.domainFull}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground text-center leading-tight">
                    {currentCard.term}
                  </h2>

                  <div className="absolute bottom-4 right-4 text-blue-300">
                    <RotateCcw className="w-4 h-4" />
                  </div>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 rounded-2xl border-2 border-blue-300 bg-gradient-to-br from-white to-blue-50 p-8 flex flex-col items-center justify-center"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  {/* Status flags on back too */}
                  {(isMastered || isUnsure) && (
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
                      {isUnsure && (
                        <div className="flex items-center gap-1 text-pink-600 text-xs font-medium">
                          <Flag className="w-3.5 h-3.5 fill-pink-500" />
                          <span>Unsure</span>
                        </div>
                      )}
                      {isMastered && (
                        <div className="flex items-center gap-1 text-violet-700 text-xs font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Mastered</span>
                        </div>
                      )}
                    </div>
                  )}
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
            <div className="flex items-center justify-between gap-2">
              <button
                onClick={handlePrev}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-lg px-4 py-2 transition-colors hover:bg-muted/50"
              >
                <ChevronLeft className="w-4 h-4" />
                Prev
              </button>

              <div className="flex items-center gap-2">
                {/* Flag Unsure button — outline → filled pink when active; disabled when Mastered is set */}
                <button
                  onClick={(e) => { e.stopPropagation(); handleToggleUnsure(); }}
                  disabled={isMastered}
                  className={cn(
                    "flex items-center gap-1.5 text-sm font-medium rounded-lg px-4 py-2 transition-all border",
                    isUnsure
                      ? "bg-pink-500 text-white border-pink-500 shadow-sm"
                      : isMastered
                        ? "bg-transparent text-muted-foreground/30 border-border/30 cursor-not-allowed"
                        : "bg-transparent text-muted-foreground border-border hover:border-pink-400 hover:text-pink-600"
                  )}
                >
                  <Flag className={cn("w-4 h-4", isUnsure && "fill-white")} />
                  {isUnsure ? 'Unsure' : 'Flag Unsure'}
                </button>

                {/* Check Mastered button — outline → filled violet when active; disabled when Unsure is set */}
                <button
                  onClick={(e) => { e.stopPropagation(); handleToggleMastered(); }}
                  disabled={isUnsure}
                  className={cn(
                    "flex items-center gap-1.5 text-sm font-medium rounded-lg px-4 py-2 transition-all border",
                    isMastered
                      ? "bg-violet-600 text-white border-violet-600 shadow-sm"
                      : isUnsure
                        ? "bg-transparent text-muted-foreground/30 border-border/30 cursor-not-allowed"
                        : "bg-transparent text-muted-foreground border-border hover:border-violet-400 hover:text-violet-600"
                  )}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  {isMastered ? 'Mastered' : 'Check Mastered'}
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
