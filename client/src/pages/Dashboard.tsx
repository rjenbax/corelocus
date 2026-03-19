/**
 * Dashboard — BehaviorPREP Learning Platform Home
 * Design: Violet + Teal SaaS — 5-tier compact list with inline progress
 * Violet #6D28D9 primary, Teal #0F766E accent, Slate #334155 text, Off-White #F8FAFC surface
 */
import { useLocation } from 'wouter';
import { useProgress } from '@/contexts/ProgressContext';
import { Brain, Layers, GitMerge, Shuffle, BookOpen, ClipboardList, ChevronRight, CheckCircle2, Trophy, Zap, Target, Flame, Award, Menu, X, Home, DollarSign, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import TaskItemProgress from '@/components/TaskItemProgress';

interface TierConfig {
  tier: 1 | 2 | 3 | 4 | 5;
  isExternal?: boolean;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  route: string;
  bloomsLevel: string;
  color: string;
  bgColor: string;
  borderColor: string;
  pillColor: string;
  barColor: string;
}

const TIERS: TierConfig[] = [
  {
    tier: 1,
    title: 'Flashcards',
    subtitle: 'Learn what each term means',
    description: 'Master every term, definition, and concept across all 9 BACB domains. Flip cards to reveal definitions, mark mastered items, and filter by domain.',
    icon: Layers,
    route: '/flashcards',
    bloomsLevel: 'Recall terms',
    color: 'text-[#6066bb]',
    bgColor: 'bg-[#e3e5fb]',
    borderColor: 'border-violet-200',
    pillColor: 'bg-[#e3e5fb] text-[#6066bb]',
    barColor: 'bg-[#6066bb]',
  },
  {
    tier: 2,
    title: 'Rapid Recall',
    subtitle: 'Pick the right definition under pressure',
    description: 'Timed quick-fire questions on definitions, functions, and key distinctions. Track your weak spots — the misconceptions you keep choosing.',
    icon: Zap,
    route: '/rapid-recall',
    bloomsLevel: 'Recall under pressure',
    color: 'text-[#00c2d6]',
    bgColor: 'bg-[#e2fcff]',
    borderColor: 'border-[#00c2d6]/40',
    pillColor: 'bg-teal-100 text-[#00c2d6]',
    barColor: '',
  },
  {
    tier: 3,
    title: 'Scenario Matching',
    subtitle: 'Spot the concept in a real case',
    description: 'Given a concept, identify which clinical scenario best illustrates it. Bridge the gap between knowing a definition and recognizing it in practice.',
    icon: Shuffle,
    route: '/matching',
    bloomsLevel: 'Recognize in context',
    color: 'text-[#00c2d6]',
    bgColor: 'bg-[#e2fcff]',
    borderColor: 'border-[#00c2d6]/40',
    pillColor: 'bg-teal-100 text-[#00c2d6]',
    barColor: 'bg-[#e2fcff]0',
  },
  {
    tier: 4,
    title: 'Venn Diagram',
    subtitle: 'Tell apart concepts that look similar',
    description: 'Distinguish commonly confused ABA concept pairs. Identify what is unique to each concept and what they share — across 92 carefully curated pairs.',
    icon: GitMerge,
    route: '/venn',
    bloomsLevel: 'Compare & contrast',
    color: 'text-[#6066bb]',
    bgColor: 'bg-[#e3e5fb]',
    borderColor: 'border-violet-200',
    pillColor: 'bg-[#e3e5fb] text-[#6066bb]',
    barColor: 'bg-violet-700',
  },
  {
    tier: 5,
    title: 'Scenario Justification™',
    subtitle: 'Choose the right answer and explain why',
    description: '59 clinical scenarios. Select the correct answer AND choose the 3 justifications that support it from a pool of 9 — 6 of which justify the wrong answers.',
    icon: Brain,
    route: '/scenario-justification',
    bloomsLevel: 'Justify your answer',
    color: 'text-[#00c2d6]',
    bgColor: 'bg-[#e2fcff]',
    borderColor: 'border-[#00c2d6]/40',
    pillColor: 'bg-teal-100 text-[#00c2d6]',
    barColor: 'bg-teal-700',
  },
];

export default function Dashboard() {
  const [, navigate] = useLocation();
  const { getTierCompletion } = useProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const internalTiers = TIERS.filter(t => !t.isExternal && t.tier <= 5);
  const totalCompletion = Math.round(
    internalTiers.reduce((sum, t) => sum + getTierCompletion(t.tier as 1|2|3|4|5), 0) / internalTiers.length
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between h-14">
          <div className="flex items-center gap-2.5">
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663073430959/fVyZQGnkaLaquPGv.png" alt="BehaviorPREP" className="w-9 h-9 object-contain" />
            <div>
              <span className="font-semibold text-sm text-foreground">CoreLocus™ <span className="font-normal text-muted-foreground text-xs">by BehaviorPREP</span></span>
              <span className="text-muted-foreground text-xs ml-1.5">Learning Platform</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/pricing')}
              className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => navigate('/')}
              className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Home
            </button>
            <button
              onClick={() => navigate('/daily-practice')}
              className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 hover:bg-primary/15 rounded-full px-3 py-1.5 transition-colors"
            >
              <Flame className="w-3 h-3" />
              Daily Practice
            </button>
            <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
              <span>Overall</span>
              <div className="w-20 h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${totalCompletion}%` }}
                />
              </div>
              <span className="font-medium text-foreground">{totalCompletion}%</span>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(v => !v)}
              className="sm:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile slide-down menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-border bg-card/95 backdrop-blur-sm z-40">
          <nav className="container py-3 flex flex-col gap-1">
            <button
              onClick={() => { navigate('/daily-practice'); setMobileMenuOpen(false); }}
              className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-muted transition-colors text-left"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Flame className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Daily Practice</p>
                <p className="text-xs text-muted-foreground">Rotating cross-tier session</p>
              </div>
            </button>
            <button
              onClick={() => { navigate('/pricing'); setMobileMenuOpen(false); }}
              className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-muted transition-colors text-left"
            >
              <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-4 h-4 text-[#00c2d6]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Pricing</p>
                <p className="text-xs text-muted-foreground">Plans from $47/month</p>
              </div>
            </button>
            <button
              onClick={() => { navigate('/'); setMobileMenuOpen(false); }}
              className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-muted transition-colors text-left"
            >
              <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                <Home className="w-4 h-4 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Home</p>
                <p className="text-xs text-muted-foreground">Back to landing page</p>
              </div>
            </button>
            <div className="flex items-center gap-3 px-3 py-3">
              <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                <Trophy className="w-4 h-4 text-amber-700" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground">Overall Progress</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${totalCompletion}%` }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-foreground">{totalCompletion}%</span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}

      {/* Hero — compact */}
      <section className="border-b border-border bg-gradient-to-b from-card to-background">
        <div className="container py-8 md:py-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1 mb-4">
              <BookOpen className="w-3 h-3" />
              <span>BACB 6th Edition Task List</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Your BCBA Learning Path
            </h1>
            <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed">
              Five progressive levels — from recalling definitions to applying clinical reasoning in a real client case. Each level builds on the last.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="container py-8 md:py-12">
        <div className="max-w-2xl mx-auto">

          {/* ── Compact Tier List ─────────────────────────────────────────── */}
          <div className="rounded-xl border border-border bg-card overflow-hidden divide-y divide-border mb-6">
            {TIERS.filter(t => t.tier <= 5).map((tier) => {
              const pct = tier.isExternal ? 0 : getTierCompletion(tier.tier as 1|2|3|4|5);
              const Icon = tier.icon;
              const isComplete = pct >= 80;

              return (
                <button
                  key={tier.tier}
                  onClick={() => tier.isExternal ? window.open(tier.route, '_blank') : navigate(tier.route)}
                  className="w-full text-left px-4 py-3.5 flex items-center gap-3.5 hover:bg-muted/40 active:bg-muted/60 transition-colors group"
                >
                  {/* Tier badge */}
                  <div className={cn(
                    "flex-shrink-0 w-9 h-9 rounded-lg flex flex-col items-center justify-center border",
                    tier.bgColor,
                    tier.borderColor
                  )}>
                    <span className={cn("text-[9px] font-bold leading-none", tier.color)}>T{tier.tier}</span>
                    <Icon className={cn("w-3.5 h-3.5 mt-0.5", tier.color)} />
                  </div>

                  {/* Title + subtitle + progress */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-sm font-semibold text-foreground truncate">{tier.title}</span>
                      {isComplete && <CheckCircle2 className="w-3.5 h-3.5 text-[#6066bb] flex-shrink-0" />}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                        <div
                          className={cn("h-full rounded-full transition-all duration-500", tier.barColor)}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      {/* State label */}
                      {isComplete ? (
                        <span className="text-[11px] font-semibold text-[#6066bb] flex-shrink-0">Done</span>
                      ) : pct > 0 ? (
                        <span className="flex items-center gap-1 flex-shrink-0">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", tier.barColor)} />
                            <span className={cn("relative inline-flex rounded-full h-1.5 w-1.5", tier.barColor)} />
                          </span>
                          <span className={cn("text-[11px] font-semibold tabular-nums", tier.color)}>{pct}%</span>
                        </span>
                      ) : (
                        <span className={cn("text-[11px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0", tier.pillColor)}>Start</span>
                      )}
                    </div>
                  </div>

                  {/* Resume / Blooms pill — hidden on small screens */}
                  {pct > 0 && !isComplete ? (
                    <span className={cn("hidden md:inline-flex text-[11px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0", tier.pillColor)}>
                      Resume →
                    </span>
                  ) : (
                    <span className={cn("hidden md:inline-flex text-[11px] font-medium px-2 py-0.5 rounded-full flex-shrink-0", tier.pillColor)}>
                      {tier.bloomsLevel}
                    </span>
                  )}

                  {/* Chevron */}
                  <ChevronRight className={cn("w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-0.5", tier.color)} />
                </button>
              );
            })}
          </div>

          {/* ── Mock Exam CTA — appears after Level 5 is ≥ 80% complete ── */}
          {getTierCompletion(5) >= 80 && (
            <div className="mb-6">
              <div className="rounded-xl border-2 border-[#00c2d6] px-5 py-4" style={{ background: 'linear-gradient(135deg, #e2fcff 0%, #f0feff 100%)' }}>
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-[#00c2d6] flex-shrink-0" />
                      <span className="text-xs font-bold text-[#00c2d6] uppercase tracking-wide">Level 5 Complete</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-800 mb-1">You're ready for the Mock Exam</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      You've built clinical reasoning skills across all 5 levels. The next step is to test yourself under real exam conditions.
                    </p>
                  </div>
                  <button
                    onClick={() => navigate('/mock-hub')}
                    className="flex-shrink-0 flex items-center gap-2 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
                    style={{ background: '#00c2d6' }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Take Mock Exam
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ── Daily Practice CTA ─────────────────────────────────────────── */}
          <div className="mb-8">
            <button
              onClick={() => navigate('/daily-practice')}
              className="w-full text-left rounded-xl border-2 border-primary/30 bg-gradient-to-r from-primary/8 to-primary/4 px-4 py-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Flame className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <Target className="w-3.5 h-3.5 text-primary" />
                    <span className="text-sm font-bold text-foreground">Daily Practice</span>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">Adaptive</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-snug">
                    Targets your 5 weakest task items — mixed Flashcards, Rapid Recall, and Scenario Matching in one session.
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 transition-transform group-hover:translate-x-0.5" />
              </div>
            </button>
          </div>

          {/* Task Item Progress Grid */}
          <TaskItemProgress />

          {/* Footer note */}
          <div className="mt-8 p-4 bg-muted/40 rounded-lg border border-border">
            <div className="flex items-start gap-2.5">
              <Trophy className="w-4 h-4 text-[#00c2d6] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground mb-0.5">Complete all 5 levels for full BCBA preparation</p>
                <p className="text-xs text-muted-foreground">
                  Each level builds on the previous — from recalling definitions (Level 1) to applying clinical reasoning in a real case (Level 5).
                  Progress is saved automatically to your browser.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
