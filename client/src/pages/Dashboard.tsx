/**
 * Dashboard — BehaviorPREP Learning Platform Home
 * Design: Violet + Teal SaaS — 7-tier visual learning path with progress tracking
 * Violet #6D28D9 primary, Teal #0F766E accent, Slate #334155 text, Off-White #F8FAFC surface
 */
import { useLocation } from 'wouter';
import { useProgress } from '@/contexts/ProgressContext';
import { Brain, Layers, GitMerge, Shuffle, BookOpen, ClipboardList, ChevronRight, CheckCircle2, Trophy, Zap, Target, Flame, ExternalLink, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
import TaskItemProgress from '@/components/TaskItemProgress';

interface TierConfig {
  tier: 1 | 2 | 3 | 4 | 5 | 6 | 7;
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
}

const TIERS: TierConfig[] = [
  {
    tier: 1,
    title: 'Flashcards',
    subtitle: 'Term & Definition',
    description: 'Master every term, definition, and concept across all 9 BACB domains. Flip cards to reveal definitions, mark mastered items, and filter by domain.',
    icon: Layers,
    route: '/flashcards',
    bloomsLevel: 'Recall terms',
    color: 'text-violet-700',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-200',
    pillColor: 'bg-violet-100 text-violet-700',
  },
  {
    tier: 2,
    title: 'Rapid Recall',
    subtitle: 'Quick-Fire Q&A',
    description: 'Timed quick-fire questions on definitions, functions, and key distinctions. Track your weak spots — the misconceptions you keep choosing.',
    icon: Zap,
    route: '/rapid-recall',
    bloomsLevel: 'Recall under pressure',
    color: 'text-teal-700',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    pillColor: 'bg-teal-100 text-teal-700',
  },
  {
    tier: 3,
    title: 'Scenario Matching',
    subtitle: 'Definition → Clinical Example',
    description: 'Given a concept, identify which clinical scenario best illustrates it. Bridge the gap between knowing a definition and recognizing it in practice.',
    icon: Shuffle,
    route: '/matching',
    bloomsLevel: 'Recognize in context',
    color: 'text-teal-700',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    pillColor: 'bg-teal-100 text-teal-700',
  },
  {
    tier: 4,
    title: 'Venn Diagram',
    subtitle: 'Concept Comparison',
    description: 'Distinguish commonly confused ABA concept pairs. Identify what is unique to each concept and what they share — across 92 carefully curated pairs.',
    icon: GitMerge,
    route: '/venn',
    bloomsLevel: 'Compare & contrast',
    color: 'text-violet-800',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-200',
    pillColor: 'bg-violet-100 text-violet-800',
  },
  {
    tier: 5,
    title: 'Scenario Justification',
    subtitle: 'Answer + Reasoning',
    description: '55 clinical scenarios, 104 questions. Select the correct answer AND choose the 3 justifications that support it from a pool of 9 — 6 of which justify the wrong answers.',
    icon: Brain,
    route: '/scenario-justification',
    bloomsLevel: 'Justify your answer',
    color: 'text-teal-800',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    pillColor: 'bg-teal-100 text-teal-800',
  },
  {
    tier: 6,
    title: 'Full Mock Exam',
    subtitle: 'Timed Exam Simulation',
    description: '175 questions across all 9 TCO domains with adaptive question selection, 5 CSA archetypes, full score breakdown, and detailed analytics.',
    icon: Award,
    route: '/mock-exam',
    bloomsLevel: 'Exam ready',
    color: 'text-amber-700',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    pillColor: 'bg-amber-100 text-amber-700',
  },
  {
    tier: 7,
    title: 'Case Study Exam',
    subtitle: 'Real-World Application',
    description: 'You passed — now apply it. Follow Leo Rodriguez from referral to discharge. 175 questions simulating a real client lifecycle, the way BCBAs actually work in the field.',
    icon: ClipboardList,
    route: '/exam-hub',
    bloomsLevel: 'Apply in the field',
    color: 'text-primary',
    bgColor: 'bg-primary/5',
    borderColor: 'border-primary/20',
    pillColor: 'bg-primary/10 text-primary',
  },
];

export default function Dashboard() {
  const [, navigate] = useLocation();
  const { getTierCompletion } = useProgress();

  const internalTiers = TIERS.filter(t => !t.isExternal);
  const totalCompletion = Math.round(
    internalTiers.reduce((sum, t) => sum + getTierCompletion(t.tier as 1|2|3|4|5|6), 0) / internalTiers.length
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between h-14">
          <div className="flex items-center gap-2.5">
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663073430959/fVyZQGnkaLaquPGv.png" alt="BehaviorPREP" className="w-9 h-9 object-contain" />
            <div>
              <span className="font-semibold text-sm text-foreground">BehaviorPREP</span>
              <span className="text-muted-foreground text-xs ml-1.5">Learning Platform</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* Pricing link */}
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
            {/* Daily Practice shortcut in header */}
            <button
              onClick={() => navigate('/daily-practice')}
              className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 hover:bg-primary/15 rounded-full px-3 py-1.5 transition-colors"
            >
              <Flame className="w-3 h-3" />
              Daily Practice
            </button>
            <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
              <span>Overall Progress</span>
              <div className="w-24 h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${totalCompletion}%` }}
                />
              </div>
              <span className="font-medium text-foreground">{totalCompletion}%</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-card to-background">
        <div className="container py-12 md:py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1 mb-5">
              <BookOpen className="w-3 h-3" />
              <span>BACB 6th Edition Task List</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Your BCBA Learning Path
            </h1>
            <p className="text-muted-foreground text-base max-w-2xl leading-relaxed mb-5">
              Passing the BCBA exam isn't just about memorizing terms — it's about being able to <strong className="text-foreground font-semibold">use</strong> them. This platform walks you through seven levels of practice, each one building on the last.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 max-w-2xl">
              {([
                { num: '1', label: 'Flashcards', blurb: 'Learn what each term means.' },
                { num: '2', label: 'Rapid Recall', blurb: 'Pick the right definition under time pressure.' },
                { num: '3', label: 'Scenario Matching', blurb: 'Spot the concept playing out in a real case.' },
                { num: '4', label: 'Venn Diagram', blurb: 'Tell apart concepts that look similar.' },
                { num: '5', label: 'Scenario Justification', blurb: 'Choose the right answer and explain why.' },
                { num: '6', label: 'Full Mock Exam', blurb: 'Sit a timed 175-question exam and see your score breakdown.' },
                { num: '7', label: 'Case Study Exam', blurb: 'Apply your knowledge to a real client case — just like on the job.' },
              ] as const).map(({ num, label, blurb }) => (
                <div key={num} className="flex items-start gap-2.5 text-sm">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary text-[11px] font-bold flex items-center justify-center mt-0.5">{num}</span>
                  <span className="text-muted-foreground"><span className="font-semibold text-foreground">{label}:</span> {blurb}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="container py-10 md:py-14">
        <div className="max-w-4xl mx-auto">
          {/* Progress overview */}
          <div className="grid grid-cols-4 md:grid-cols-7 gap-3 mb-10">
            {TIERS.map(tier => {
              const pct = tier.isExternal ? 0 : getTierCompletion(tier.tier as 1|2|3|4|5|6);
              return (
                <div key={tier.tier} className="text-center">
                  <div className="text-xs text-muted-foreground mb-1">Tier {tier.tier}</div>
                  <div className="relative w-10 h-10 mx-auto mb-1">
                    <svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="currentColor" strokeWidth="3" className="text-muted/40" />
                      <circle
                        cx="18" cy="18" r="15.9" fill="none" stroke="currentColor" strokeWidth="3"
                        strokeDasharray={`${pct} ${100 - pct}`}
                        strokeDashoffset="0"
                        strokeLinecap="round"
                        className={tier.color}
                        style={{ transition: 'stroke-dasharray 0.5s ease' }}
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-foreground">
                      {pct}%
                    </span>
                  </div>
                  <div className="text-[10px] text-muted-foreground leading-tight">{tier.title}</div>
                </div>
              );
            })}
          </div>

          {/* Tier cards */}
          <div className="space-y-4">
            {TIERS.map((tier, idx) => {
              const pct = tier.isExternal ? 0 : getTierCompletion(tier.tier as 1|2|3|4|5|6);
              const Icon = tier.icon;
              const isComplete = pct >= 80;

              return (
                <div key={tier.tier} className="relative">
                  {/* Connector line */}
                  {idx < TIERS.length - 1 && (
                    <div className="absolute left-8 top-full w-0.5 h-4 bg-border z-10" />
                  )}

                  <button
                    onClick={() => tier.isExternal ? window.open(tier.route, '_blank') : navigate(tier.route)}
                    className={cn(
                      "w-full text-left rounded-xl border-2 p-5 transition-all duration-200 group",
                      "hover:shadow-md hover:-translate-y-0.5",
                      tier.bgColor,
                      tier.borderColor,
                      isComplete && "ring-2 ring-offset-1 ring-violet-400/50"
                    )}
                  >
                    <div className="flex items-start gap-4">
                      {/* Tier number + icon */}
                      <div className="flex-shrink-0">
                        <div className={cn(
                          "w-14 h-14 rounded-xl flex flex-col items-center justify-center border-2",
                          tier.borderColor,
                          "bg-white/60"
                        )}>
                          <span className="text-[10px] font-bold text-muted-foreground">TIER</span>
                          <span className={cn("text-xl font-black leading-none", tier.color)}>{tier.tier}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3 mb-1">
                          <div>
                            <div className="flex items-center gap-2 mb-0.5">
                              <Icon className={cn("w-4 h-4", tier.color)} />
                              <h3 className="font-bold text-foreground text-base">{tier.title}</h3>
                              {isComplete && <CheckCircle2 className="w-4 h-4 text-violet-600" />}
                            </div>
                            <p className="text-xs text-muted-foreground">{tier.subtitle}</p>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <span className={cn("text-xs font-medium px-2 py-0.5 rounded-full", tier.pillColor)}>
                              {tier.bloomsLevel}
                            </span>
                              {tier.isExternal
                                ? <ExternalLink className={cn("w-4 h-4", tier.color)} />
                                : <ChevronRight className={cn("w-4 h-4 transition-transform group-hover:translate-x-0.5", tier.color)} />}
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed mb-3 hidden sm:block">
                          {tier.description}
                        </p>

                        {/* Progress bar */}
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1.5 bg-white/60 rounded-full overflow-hidden border border-white/80">
                            <div
                              className={cn("h-full rounded-full transition-all duration-500", {
                                'bg-violet-600': tier.tier === 1,
                                'bg-teal-600': tier.tier === 2,
                                'bg-teal-500': tier.tier === 3,
                                'bg-violet-700': tier.tier === 4,
                                'bg-teal-700': tier.tier === 5,
                                'bg-amber-600': tier.tier === 6,
                                'bg-primary': tier.tier === 7,
                              })}
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                          <span className={cn("text-xs font-semibold", tier.color)}>{pct}%</span>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* ── Daily Practice CTA ─────────────────────────────────────────── */}
          <div className="mt-10">
            <button
              onClick={() => navigate('/daily-practice')}
              className="w-full text-left rounded-2xl border-2 border-primary/30 bg-gradient-to-r from-primary/8 to-primary/4 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div className="flex items-center gap-4">
                {/* Icon block */}
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                  <Flame className="w-7 h-7 text-primary" />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <Target className="w-4 h-4 text-primary" />
                    <h3 className="font-bold text-foreground text-base">Daily Practice</h3>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">Adaptive</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">Targeted mixed-tool session</p>
                  <p className="text-sm text-muted-foreground leading-relaxed hidden sm:block">
                    Automatically detects your 5 weakest task items and chains a 10–12 question session mixing Flashcards, Rapid Recall, and Scenario Matching — all targeting your gaps.
                  </p>
                </div>

                <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 transition-transform group-hover:translate-x-0.5" />
              </div>
            </button>
          </div>

          {/* Task Item Progress Grid */}
          <TaskItemProgress />

          {/* Footer note */}
          <div className="mt-10 p-4 bg-muted/40 rounded-lg border border-border">
            <div className="flex items-start gap-2.5">
              <Trophy className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground mb-0.5">Complete all 7 tiers for full BCBA preparation</p>
                <p className="text-xs text-muted-foreground">
                  Each tier builds on the previous — from recalling definitions (Tier 1) to applying clinical reasoning in a real client case (Tier 7).
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
