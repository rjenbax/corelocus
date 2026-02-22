/**
 * FeedbackPopup — beta tester feedback modal
 * Triggered by a floating button on all learning platform pages
 * Sends feedback via mailto: pre-filled with rating, comment, and current page
 * No backend required — opens user's default email client
 */
import { useState } from 'react';
import { Star, X, Send, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const FEEDBACK_EMAIL = 'info@behaviorprep.com';

interface FeedbackPopupProps {
  currentTool?: string; // e.g. "Flashcards", "Rapid Recall"
}

export default function FeedbackPopup({ currentTool }: FeedbackPopupProps) {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [comment, setComment] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);
    const tool = currentTool || window.location.pathname.replace('/', '') || 'platform';
    const subject = encodeURIComponent(`BehaviorPREP Beta Feedback — ${tool}`);
    const body = encodeURIComponent(
      `Rating: ${stars} (${rating}/5)\n\nTool: ${tool}\n\nFeedback:\n${comment || '(no comment)'}\n\n---\nSent from BehaviorPREP beta`
    );
    window.location.href = `mailto:${FEEDBACK_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => {
      setOpen(false);
      setSent(false);
      setRating(0);
      setComment('');
    }, 2000);
  };

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 bg-primary text-primary-foreground text-xs font-semibold px-3.5 py-2.5 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
        aria-label="Leave feedback"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        Feedback
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-end sm:items-center justify-center p-4"
          onClick={e => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          {/* Modal */}
          <div className="w-full max-w-sm bg-card border-2 border-border rounded-2xl shadow-xl p-6 relative">
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {sent ? (
              <div className="text-center py-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-3">
                  <Send className="w-5 h-5 text-teal-600" />
                </div>
                <p className="font-semibold text-foreground text-sm">Opening your email app…</p>
                <p className="text-xs text-muted-foreground mt-1">Thanks for helping us improve BehaviorPREP!</p>
              </div>
            ) : (
              <>
                <h2 className="font-bold text-foreground text-base mb-1">How is it going?</h2>
                <p className="text-xs text-muted-foreground mb-5">
                  Your feedback helps us improve the platform before launch.
                  {currentTool && <span className="font-medium text-foreground"> You are using: {currentTool}</span>}
                </p>

                {/* Star rating */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-foreground mb-2">Overall rating</p>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(s => (
                      <button
                        key={s}
                        onClick={() => setRating(s)}
                        onMouseEnter={() => setHovered(s)}
                        onMouseLeave={() => setHovered(0)}
                        className="transition-transform hover:scale-110"
                        aria-label={`${s} star${s > 1 ? 's' : ''}`}
                      >
                        <Star
                          className={cn(
                            "w-7 h-7 transition-colors",
                            s <= (hovered || rating)
                              ? "text-amber-400 fill-amber-400"
                              : "text-muted-foreground/30"
                          )}
                        />
                      </button>
                    ))}
                  </div>
                  {rating > 0 && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {['', 'Not useful', 'Needs work', 'Pretty good', 'Really helpful', 'Excellent!'][rating]}
                    </p>
                  )}
                </div>

                {/* Comment */}
                <div className="mb-5">
                  <p className="text-xs font-semibold text-foreground mb-2">What did you find most useful? What was confusing? <span className="font-normal text-muted-foreground">(optional)</span></p>
                  <textarea
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    rows={3}
                    placeholder="Type your thoughts here…"
                    className="w-full border-2 border-border rounded-xl px-3 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <button
                  onClick={handleSend}
                  disabled={rating === 0}
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed text-primary-foreground font-semibold py-3 rounded-xl transition-colors text-sm"
                >
                  <Send className="w-4 h-4" />
                  Send Feedback
                </button>
                <p className="text-center text-[11px] text-muted-foreground mt-2">
                  Opens your email app — just hit send.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
