/**
 * PricingPage — BehaviorPREP subscription plans
 * Design: Violet + Teal SaaS — accordion plan rows, compact layout
 * Free Sampler · $47/mo Monthly · $399/year · $699 Lifetime · $199/mo Supervision Cohort
 */
import { useLocation } from 'wouter';
import { ArrowLeft, Check, ChevronDown, Zap, Award, Layers, Shuffle, GitMerge, ClipboardList, Target, Flame, Users, Star, BookOpen, Infinity } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const ALL_FEATURES = [
  '175-question timed mock exam (unlimited retakes)',
  'Full domain score breakdown across all 9 domains',
  'Flashcards — 238 cards',
  'Rapid Recall — 213 terms',
  'Matching Scenarios — 542 items',
  'Scenario Justification™ — 1,515 items (Tier 5)',
  'Venn Diagram concept comparisons — 93 diagrams',
  'Case Simulation — full client lifecycle (Tier 7)',
  'Daily Practice™ — rotating cross-tier sessions',
  'New content as released',
];

const PLANS = [
  {
    id: 'monthly',
    name: 'Monthly',
    price: '$47',
    period: '/month',
    effective: null,
    badge: null,
    description: 'Full platform access, billed monthly. Cancel anytime.',
    cta: 'Start Monthly',
    highlight: false,
    icon: Zap,
    iconColor: 'text-teal-600',
    iconBg: 'bg-teal-100',
  },
  {
    id: 'annual',
    name: 'Annual',
    price: '$399',
    period: '/year',
    effective: '~$33/mo — save $165',
    badge: 'Best Value',
    description: 'The full year — commit to the process, save the most. Most popular for serious candidates.',
    cta: 'Start Annual',
    highlight: true,
    icon: Award,
    iconColor: 'text-amber-700',
    iconBg: 'bg-amber-100',
  },
  {
    id: 'lifetime',
    name: 'Lifetime',
    price: '$699',
    period: 'one-time',
    effective: 'Pay once, own it forever',
    badge: null,
    description: 'Permanent access to all current and future content. Ideal for supervisors and long-term clinical reference.',
    cta: 'Get Lifetime Access',
    highlight: false,
    icon: Infinity,
    iconColor: 'text-primary',
    iconBg: 'bg-primary/10',
  },
];

const TOOLS = [
  { icon: Zap, label: 'Rapid Recall', count: '213 terms', color: 'text-teal-600' },
  { icon: Layers, label: 'Flashcards', count: '238 cards', color: 'text-violet-600' },
  { icon: Shuffle, label: 'Matching Scenarios', count: '542 items', color: 'text-teal-700' },
  { icon: Award, label: 'Mock Exam', count: '175 questions', color: 'text-amber-700' },
  { icon: BookOpen, label: 'Scenario Justification™', count: '1,515 items', color: 'text-teal-800' },
  { icon: GitMerge, label: 'Venn Diagrams', count: '93 diagrams', color: 'text-violet-700' },
  { icon: ClipboardList, label: 'Case Simulation', count: 'Full lifecycle', color: 'text-primary' },
  { icon: Flame, label: 'Daily Practice™', count: 'Adaptive', color: 'text-rose-600' },
];

export default function PricingPage() {
  const [, navigate] = useLocation();
  const [openPlan, setOpenPlan] = useState<string | null>('annual');
  const [showCohort, setShowCohort] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back</span>
            </button>
            <span className="text-border hidden sm:inline">|</span>
            <div className="hidden sm:flex items-center gap-2">
              <img
                src="https://cdn.manus.im/uploads/43e8b8e3b5e44c4b9e1c2b3d4e5f6a7b.png"
                alt="BehaviorPREP"
                className="w-7 h-7 rounded-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <span className="font-semibold text-sm text-foreground">CoreLocus™ <span className="font-normal text-muted-foreground text-xs">by BehaviorPREP</span></span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Pricing</span>
          </div>
        </div>
      </header>

      <div className="container py-10 md:py-14 max-w-3xl mx-auto">

        {/* Page heading */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1 mb-4">
            <Award className="w-3 h-3" />
            <span>BACB 6th Edition · All 9 Domains · 7 Progressive Tiers</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Invest in clinical competence
          </h1>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed">
            The only platform that prepares you for both the exam and your career in the field. All plans include every feature — 3,000+ items across 8 study modalities.
          </p>
        </div>

        {/* Free Sampler callout */}
        <div className="mb-6 rounded-xl border border-dashed border-border bg-muted/30 p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <div className="w-9 h-9 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
            <Star className="w-4 h-4 text-teal-700" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-foreground text-sm">Free Sampler — no credit card required</p>
            <p className="text-xs text-muted-foreground mt-0.5">Full Tier 1 Rapid Recall, 10 Tier 5 Scenario Justification™ samples, and a case vignette preview.</p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="self-start sm:self-auto flex-shrink-0 px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold transition-colors"
          >
            Try Free
          </button>
        </div>

        {/* Accordion plan rows */}
        <div className="rounded-2xl border border-border overflow-hidden mb-6 divide-y divide-border">
          {PLANS.map((plan) => {
            const Icon = plan.icon;
            const isOpen = openPlan === plan.id;
            return (
              <div
                key={plan.id}
                className={cn(
                  'bg-card transition-colors',
                  plan.highlight && isOpen ? 'bg-primary/5' : '',
                )}
              >
                {/* Row header — always visible */}
                <button
                  className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-muted/30 transition-colors"
                  onClick={() => setOpenPlan(isOpen ? null : plan.id)}
                >
                  <div className={cn('w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0', plan.iconBg)}>
                    <Icon className={cn('w-4 h-4', plan.iconColor)} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-sm text-foreground">{plan.name}</span>
                      {plan.badge && (
                        <span className={cn(
                          'text-xs font-bold px-2 py-0.5 rounded-full',
                          plan.highlight ? 'bg-primary text-primary-foreground' : 'bg-teal-100 text-teal-700'
                        )}>
                          {plan.badge}
                        </span>
                      )}
                    </div>
                    {plan.effective && (
                      <p className="text-xs text-muted-foreground mt-0.5">{plan.effective}</p>
                    )}
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                    <div className="text-right">
                      <span className="text-lg sm:text-xl font-black text-foreground">{plan.price}</span>
                      <span className="text-xs text-muted-foreground ml-1">{plan.period}</span>
                    </div>
                    <ChevronDown className={cn(
                      'w-4 h-4 text-muted-foreground transition-transform duration-200',
                      isOpen ? 'rotate-180' : ''
                    )} />
                  </div>
                </button>

                {/* Expanded content */}
                {isOpen && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{plan.description}</p>

                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 mb-5">
                      {ALL_FEATURES.map((f, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs">
                          <Check className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{f}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      className={cn(
                        'w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors',
                        plan.highlight
                          ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm'
                          : 'border-2 border-border hover:bg-muted/50 text-foreground'
                      )}
                      onClick={() => {}}
                    >
                      {plan.cta}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-muted-foreground mb-10">
          All plans include every feature. The difference is billing frequency only. Cancel anytime.
        </p>

        {/* Supervision Cohort */}
        <div className="mb-10 rounded-2xl border-2 border-border bg-card overflow-hidden">
          <button
            className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-muted/30 transition-colors"
            onClick={() => setShowCohort(!showCohort)}
          >
            <div className="w-9 h-9 rounded-xl bg-violet-100 flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 text-violet-700" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-sm text-foreground">Supervision Cohort License</span>
                <span className="text-xs bg-violet-100 text-violet-700 font-semibold px-2 py-0.5 rounded-full">For Supervisors</span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">5 seats · $199/mo or $1,699/year</p>
            </div>
            <ChevronDown className={cn(
              'w-4 h-4 text-muted-foreground transition-transform duration-200 flex-shrink-0',
              showCohort ? 'rotate-180' : ''
            )} />
          </button>
          {showCohort && (
            <div className="border-t border-border px-5 py-5">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Preparing your supervisees for the exam and for the field? A cohort license gives up to 5 candidates full platform access under your supervision — ideal for ABA agencies, university programs, and independent supervisors running structured exam prep cohorts.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-4">
                {[
                  { title: '5 full-access seats', body: 'Each supervisee gets their own account with individual progress tracking and domain analytics.' },
                  { title: 'Supervisor dashboard', body: 'Monitor each supervisee\'s tier progress, domain scores, and daily practice streaks from a single view.' },
                  { title: 'Agency license available', body: 'Need 20+ seats? Contact us for agency pricing tailored to your organization\'s size and structure.' },
                ].map((item, i) => (
                  <div key={i}>
                    <p className="font-semibold text-foreground text-xs mb-1">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.body}</p>
                  </div>
                ))}
              </div>
              <button className="px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold transition-colors">
                Contact for Cohort Pricing
              </button>
            </div>
          )}
        </div>

        {/* What's included — tool grid */}
        <div className="mb-10">
          <h2 className="text-base font-bold text-foreground mb-1 text-center">Everything included in every plan</h2>
          <p className="text-xs text-muted-foreground text-center mb-5">
            The only platform with content at the Evaluate and Synthesize levels of Bloom's Taxonomy.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {TOOLS.map((tool, i) => {
              const Icon = tool.icon;
              return (
                <div key={i} className="rounded-xl border border-border bg-card p-3 text-center">
                  <Icon className={cn("w-5 h-5 mx-auto mb-1.5", tool.color)} />
                  <div className="text-xs font-semibold text-foreground leading-tight mb-0.5">{tool.label}</div>
                  <div className="text-xs text-muted-foreground">{tool.count}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Comparison callout */}
        <div className="mb-10 rounded-2xl bg-muted/40 border border-border p-5">
          <h3 className="font-bold text-foreground mb-3 text-xs uppercase tracking-wide text-center">How CoreLocus™ compares</h3>
          <div className="space-y-2.5 text-sm">
            {[
              { dot: 'bg-muted-foreground/40', label: 'Other apps at $19/month', body: 'Recall and community. Flashcards, mnemonics, group energy. Bloom\'s level: Remember.' },
              { dot: 'bg-muted-foreground/40', label: 'Video courses at $325–$475', body: 'Instructor-led content, mock exams. Bloom\'s level: Understand to Analyze.' },
              { dot: 'bg-primary', label: 'CoreLocus™ by BehaviorPREP — $47/month', body: 'The only platform that takes you from recall to clinical synthesis. Bloom\'s level: Remember through Synthesize. The exam becomes a byproduct of genuine competence.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className={cn('w-2 h-2 rounded-full mt-1.5 flex-shrink-0', item.dot)} />
                <p className="text-muted-foreground text-xs leading-relaxed"><span className="font-medium text-foreground">{item.label}</span> — {item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-10">
          <h2 className="text-base font-bold text-foreground mb-5 text-center">Common questions</h2>
          <div className="space-y-3">
            {[
              {
                q: 'Which plan should I choose?',
                a: 'If you are 3–6 months from your exam, the Annual plan at $399 is the best value. If you want to try before committing, start with the free Sampler — completing one Tier 5 Scenario Justification™ item will show you exactly why this platform is different.',
              },
              {
                q: 'Is the content aligned to the BACB 6th Edition?',
                a: 'Yes. Every flashcard, question, and scenario is mapped to a specific task code from the BACB 6th Edition Test Content Outline across all 9 domains (A through I).',
              },
              {
                q: 'What is Scenario Justification™ and why does it matter?',
                a: 'Scenario Justification™ (Tier 5) requires you to select the correct clinical answer AND articulate the reasoning behind it. No other platform offers this. It is the most direct preparation for clinical practice, where you must defend every decision to supervisors, caregivers, and funding bodies.',
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Yes. No contracts, no commitments. Cancel at any time and retain access until the end of your billing period.',
              },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-4">
                <p className="font-semibold text-sm text-foreground mb-1.5">{item.q}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Back CTA */}
        <div className="text-center">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to the learning platform
          </button>
        </div>
      </div>
    </div>
  );
}
