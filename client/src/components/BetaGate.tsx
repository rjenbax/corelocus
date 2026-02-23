/**
 * BetaGate — password-protects all learning platform routes
 * Stores auth state in localStorage under key 'bp_beta_auth'
 * Change BETA_CODE below to rotate the password after the beta period
 */
import { useState, useEffect } from 'react';
import { Brain, Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';
import FeedbackPopup from './FeedbackPopup';

const BETA_CODE = 'BPREP2026';
const STORAGE_KEY = 'bp_beta_auth';

interface BetaGateProps {
  children: React.ReactNode;
}

export default function BetaGate({ children }: BetaGateProps) {
  const [authenticated, setAuthenticated] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [showCode, setShowCode] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // Auto-authenticate if code is passed as URL query param (e.g. /dashboard?code=BPREP2026)
    const params = new URLSearchParams(window.location.search);
    const urlCode = params.get('code');
    if (urlCode && urlCode.toUpperCase() === BETA_CODE) {
      localStorage.setItem(STORAGE_KEY, BETA_CODE);
      setAuthenticated(true);
      setChecking(false);
      return;
    }
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === BETA_CODE) {
      setAuthenticated(true);
    }
    setChecking(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim().toUpperCase() === BETA_CODE) {
      localStorage.setItem(STORAGE_KEY, BETA_CODE);
      setAuthenticated(true);
      setError('');
    } else {
      setError('That code is not valid. Check your invitation and try again.');
      setInput('');
    }
  };

  if (checking) return null;
  if (authenticated) return (
    <>
      {children}
      <FeedbackPopup />
    </>
  );

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      {/* Card */}
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-3 shadow-sm">
            <Brain className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>BehaviorPREP</span>
          <span className="text-xs text-muted-foreground mt-0.5">Beta Access</span>
        </div>

        <div className="bg-card border-2 border-border rounded-2xl p-7 shadow-sm">
          <div className="flex items-center gap-2 mb-1">
            <Lock className="w-4 h-4 text-primary" />
            <h1 className="font-bold text-foreground text-base">Enter your beta code</h1>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            Enter your beta access code to continue. Use code{' '}
            <span className="font-mono font-semibold text-foreground">BPREP2026</span> for free beta access.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="relative">
              <input
                type={showCode ? 'text' : 'password'}
                value={input}
                onChange={e => { setInput(e.target.value); setError(''); }}
                placeholder="Beta code"
                autoFocus
                className="w-full border-2 border-border rounded-xl px-4 py-3 text-sm font-mono bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors pr-10"
              />
              <button
                type="button"
                onClick={() => setShowCode(v => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                tabIndex={-1}
              >
                {showCode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {error && (
              <p className="text-xs text-red-600 font-medium">{error}</p>
            )}

            <button
              type="submit"
              disabled={!input.trim()}
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed text-primary-foreground font-semibold py-3 rounded-xl transition-colors text-sm"
            >
              Enter Platform
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-5">
          Beta code: <span className="font-mono font-semibold text-foreground">BPREP2026</span>{' · '}
          <a href="/" className="text-primary hover:underline font-medium">Back to home</a>
        </p>
      </div>
    </div>
  );
}
