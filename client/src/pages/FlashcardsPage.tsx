/**
 * Flashcards — Tier 1: Remember (L1)
 * Color template: buttons #00c2d6, correct/mastered #e3e5fb, unsure #feeffd,
 * breadcrumb #e2fcff, bold text #6066bb, body text #000000
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
  const [unsureIds, setUnsureIds] = useState<Set<string>>(new Set());

  const masteredIds = useMemo(
    () => new Set(progress.flashcards.filter(f => f.mastered).map(f => f.cardId)),
    [progress.flashcards]
  );

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
      unmarkFlashcardMastered(currentCard.id);
      toast.info('Mastered removed', { duration: 1500 });
    } else {
      if (unsureIds.has(currentCard.id)) return;
      markFlashcardMastered(currentCard.id);
      toast.success('Marked as mastered!', { duration: 1500 });
    }
  }, [currentCard, masteredIds, unsureIds, markFlashcardMastered, unmarkFlashcardMastered]);

  const handleToggleUnsure = useCallback(() => {
    if (!currentCard) return;
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
    setStatusFilter('all');
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
    <div className="min-h-screen bg-white">
      {/* Header / breadcrumb */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </button>
            <span className="text-gray-300">|</span>
            {/* Breadcrumb */}
            <div className="breadcrumb-trail flex items-center gap-2">
              <Layers className="w-4 h-4" style={{ color: '#00c2d6' }} />
              <span className="font-semibold text-sm text-black">Flashcards</span>
              <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: '#e3e5fb', color: '#6066bb' }}>Tier 1</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">
              {masteredCount} / {domainCards.length} mastered
            </span>
          </div>
        </div>
      </header>

      <div className="container py-6 max-w-3xl mx-auto">
        {/* Domain filter pills */}
        <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-2">
          <Filter className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
          <button
            onClick={() => handleDomainChange(ALL_DOMAINS)}
            className={cn(
              "text-xs px-3 py-1.5 rounded-full border whitespace-nowrap transition-colors font-medium",
              selectedDomain === ALL_DOMAINS
                ? "text-white border-transparent"
                : "bg-white text-black border-gray-200 hover:border-[#6066bb] hover:text-[#6066bb]"
            )}
            style={selectedDomain === ALL_DOMAINS ? { background: '#00c2d6', borderColor: '#00c2d6' } : {}}
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
                  "text-xs px-3 py-1.5 rounded-full border whitespace-nowrap transition-colors font-medium",
                  selectedDomain === d
                    ? "text-white border-transparent"
                    : "bg-white text-black border-gray-200 hover:border-[#6066bb] hover:text-[#6066bb]"
                )}
                style={selectedDomain === d ? { background: '#00c2d6', borderColor: '#00c2d6' } : {}}
              >
                {d}: {domainInfo?.name.split(' ')[0] ?? d} ({count})
              </button>
            );
          })}
        </div>

        {/* Mode toggles */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <button
            onClick={handleShuffle}
            className={cn(
              "flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-colors font-medium",
              isShuffled
                ? "text-white border-transparent"
                : "bg-white text-black border-gray-200 hover:border-[#00c2d6] hover:text-[#00c2d6]"
            )}
            style={isShuffled ? { background: '#00c2d6', borderColor: '#00c2d6' } : {}}
          >
            <Shuffle className="w-3 h-3" />
            {isShuffled ? 'Shuffled' : 'Shuffle'}
          </button>
        </div>

        {/* Status filter row */}
        <div className="flex items-center gap-4 mb-4 text-sm font-medium">
          <button
            onClick={() => { setStatusFilter('all'); setCurrentIndex(0); setIsFlipped(false); }}
            className={cn(
              "transition-colors",
              statusFilter === 'all'
                ? "font-semibold underline underline-offset-2 text-black"
                : "text-gray-500 hover:text-black"
            )}
          >
            Show All ({domainCards.length})
          </button>
          <button
            onClick={() => handleStatusFilter('mastered')}
            className={cn(
              "transition-colors",
              statusFilter === 'mastered'
                ? "underline underline-offset-2"
                : "text-gray-500"
            )}
            style={{ color: statusFilter === 'mastered' ? '#6066bb' : undefined }}
            onMouseEnter={e => { if (statusFilter !== 'mastered') (e.target as HTMLElement).style.color = '#6066bb'; }}
            onMouseLeave={e => { if (statusFilter !== 'mastered') (e.target as HTMLElement).style.color = ''; }}
          >
            Show Mastered ({masteredCount})
          </button>
          <button
            onClick={() => handleStatusFilter('unsure')}
            className={cn(
              "transition-colors",
              statusFilter === 'unsure'
                ? "underline underline-offset-2"
                : "text-gray-500"
            )}
            style={{ color: statusFilter === 'unsure' ? '#d4a0d4' : undefined }}
            onMouseEnter={e => { if (statusFilter !== 'unsure') (e.target as HTMLElement).style.color = '#d4a0d4'; }}
            onMouseLeave={e => { if (statusFilter !== 'unsure') (e.target as HTMLElement).style.color = ''; }}
          >
            Show Unsure ({unsureCount})
          </button>
          <button
            onClick={() => handleStatusFilter('unrated')}
            className={cn(
              "transition-colors",
              statusFilter === 'unrated'
                ? "underline underline-offset-2"
                : "text-gray-500"
            )}
            style={{ color: statusFilter === 'unrated' ? '#00c2d6' : undefined }}
            onMouseEnter={e => { if (statusFilter !== 'unrated') (e.target as HTMLElement).style.color = '#00c2d6'; }}
            onMouseLeave={e => { if (statusFilter !== 'unrated') (e.target as HTMLElement).style.color = ''; }}
          >
            Show Unrated ({unratedCount})
          </button>
        </div>

        {/* Progress bar */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: domainCards.length > 0 ? `${(masteredCount / domainCards.length) * 100}%` : '0%',
                background: '#00c2d6',
              }}
            />
          </div>
          <span className="text-xs text-gray-500 whitespace-nowrap">
            {domainCards.length > 0 ? Math.round((masteredCount / domainCards.length) * 100) : 0}% mastered
          </span>
        </div>

        {/* Card */}
        {currentCard ? (
          <>
            <div className="text-center mb-2 text-xs text-gray-400">
              {currentIndex + 1} of {filtered.length} · Click card to flip
              {isShuffled && <span className="ml-1" style={{ color: '#00c2d6' }}>· Shuffled</span>}
            </div>

            {/* Flip card */}
            <div
              className="relative cursor-pointer mb-5"
              style={{ perspective: '1000px', height: '280px' }}
              onClick={handleFlip}
            >
              <div
                className="relative w-full h-full transition-transform duration-500"
                style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 rounded-2xl p-8 flex flex-col items-center justify-center"
                  style={{ backfaceVisibility: 'hidden', background: '#e2fcff', border: '2px solid #00c2d6' }}
                >
                  {(isMastered || isUnsure) && (
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
                      {isUnsure && (
                        <div className="flex items-center gap-1 text-xs font-medium" style={{ color: '#d4a0d4' }}>
                          <Flag className="w-3.5 h-3.5" style={{ fill: '#d4a0d4' }} />
                          <span>Unsure</span>
                        </div>
                      )}
                      {isMastered && (
                        <div className="flex items-center gap-1 text-xs font-medium" style={{ color: '#6066bb' }}>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Mastered</span>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#00c2d6' }}>
                      {currentCard.domainFull}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-black text-center leading-tight">
                    {currentCard.term}
                  </h2>
                  <div className="absolute bottom-4 right-4" style={{ color: '#00c2d6', opacity: 0.5 }}>
                    <RotateCcw className="w-4 h-4" />
                  </div>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 rounded-2xl p-8 flex flex-col items-center justify-center"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', background: '#e3e5fb', border: '2px solid #6066bb' }}
                >
                  {(isMastered || isUnsure) && (
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
                      {isUnsure && (
                        <div className="flex items-center gap-1 text-xs font-medium" style={{ color: '#d4a0d4' }}>
                          <Flag className="w-3.5 h-3.5" style={{ fill: '#d4a0d4' }} />
                          <span>Unsure</span>
                        </div>
                      )}
                      {isMastered && (
                        <div className="flex items-center gap-1 text-xs font-medium" style={{ color: '#6066bb' }}>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Mastered</span>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#6066bb' }}>Definition</span>
                  </div>
                  <p className="text-base text-black text-center leading-relaxed mb-4">
                    {currentCard.definition}
                  </p>
                  {currentCard.example && (
                    <p className="text-sm text-gray-600 text-center italic pt-3 mt-1" style={{ borderTop: '1px solid #6066bb40' }}>
                      <span className="font-semibold not-italic" style={{ color: '#6066bb' }}>Example: </span>
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
                className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-black border border-gray-200 rounded-lg px-4 py-2 transition-colors hover:bg-gray-50"
              >
                <ChevronLeft className="w-4 h-4" />
                Prev
              </button>

              <div className="flex items-center gap-2">
                {/* Flag Unsure — filled #feeffd when active */}
                <button
                  onClick={(e) => { e.stopPropagation(); handleToggleUnsure(); }}
                  disabled={isMastered}
                  className={cn(
                    "flex items-center gap-1.5 text-sm font-medium rounded-lg px-4 py-2 transition-all border",
                    isMastered ? "opacity-30 cursor-not-allowed bg-transparent border-gray-200 text-gray-400" : ""
                  )}
                  style={
                    isUnsure
                      ? { background: '#feeffd', borderColor: '#d4a0d4', color: '#d4a0d4' }
                      : isMastered
                        ? {}
                        : { background: 'transparent', borderColor: '#e5e7eb', color: '#6b7280' }
                  }
                >
                  <Flag className={cn("w-4 h-4", isUnsure && "fill-current")} />
                  {isUnsure ? 'Unsure' : 'Flag Unsure'}
                </button>

                {/* Check Mastered — filled #e3e5fb / #6066bb when active */}
                <button
                  onClick={(e) => { e.stopPropagation(); handleToggleMastered(); }}
                  disabled={isUnsure}
                  className={cn(
                    "flex items-center gap-1.5 text-sm font-medium rounded-lg px-4 py-2 transition-all border",
                    isUnsure ? "opacity-30 cursor-not-allowed bg-transparent border-gray-200 text-gray-400" : ""
                  )}
                  style={
                    isMastered
                      ? { background: '#e3e5fb', borderColor: '#6066bb', color: '#6066bb' }
                      : isUnsure
                        ? {}
                        : { background: 'transparent', borderColor: '#e5e7eb', color: '#6b7280' }
                  }
                >
                  <CheckCircle2 className="w-4 h-4" />
                  {isMastered ? 'Mastered' : 'Check Mastered'}
                </button>
              </div>

              <button
                onClick={handleNext}
                className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-black border border-gray-200 rounded-lg px-4 py-2 transition-colors hover:bg-gray-50"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-16 text-gray-400">
            <Layers className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p className="text-lg font-medium mb-2 text-black">No cards to show</p>
            <p className="text-sm">Try changing your filter settings.</p>
          </div>
        )}
      </div>
    </div>
  );
}
