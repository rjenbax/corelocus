/**
 * PricingPage — BehaviorPREP subscription plans
 * Design: Violet + Teal SaaS — premium positioning, full pricing architecture
 * Free Sampler · $47/mo Monthly · $119/quarter · $399/year · $699 Lifetime · $199/mo Supervision Cohort
 */
import { useLocation } from 'wouter';
import { ArrowLeft, Check, Zap, Award, Layers, Shuffle, GitMerge, ClipboardList, Target, Flame, Users, Infinity, Star, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const ALL_FEATURES = [
  { label: '175-question timed mock exam (unlimited retakes)', included: true },
  { label: 'Full domain score breakdown across all 9 domains', included: true },
  { label: 'Flashcards — 238 cards', included: true },
  { label: 'Rapid Recall — 213 terms', included: true },
  { label: 'Matching Scenarios — 542 items', included: true },
  { label: 'Scenario Justification — 1,515 items (Tier 5)', included: true },
  { label: 'Venn Diagram concept comparisons — 93 diagrams', included: true },
  { label: 'Case Simulation — full client lifecycle (Tier 7)', included: true },
  { label: 'Daily Practice — rotating cross-tier sessions', included: true },
  { label: 'New content as released', included: true },
];

const SAMPLER_FEATURES = [
  { label: 'Full Tier 1 Rapid Recall (all 213 terms)', included: true },
  { label: '10 Tier 5 Scenario Justification samples', included: true },
  { label: '1 full case vignette preview', included: true },
  { label: 'No time limit — explore at your own pace', included: true },
  { label: 'Mock Exam & full platform access', included: false },
  { label: 'Scenario Justification full bank (1,515 items)', included: false },
  { label: 'Case Simulation (Tier 7)', included: false },
  { label: 'Domain analytics & progress tracking', included: false },
];

const TOOLS = [
  { icon: Zap, label: 'Rapid Recall', count: '213 terms', color: 'text-teal-600' },
  { icon: Layers, label: 'Flashcards', count: '238 cards', color: 'text-violet-600' },
  { icon: Shuffle, label: 'Matching Scenarios', count: '542 items', color: 'text-teal-700' },
  { icon: Award, label: 'Mock Exam', count: '175 questions', color: 'text-amber-700' },
  { icon: BookOpen, label: 'Scenario Justification', count: '1,515 items', color: 'text-teal-800' },
  { icon: GitMerge, label: 'Venn Diagrams', count: '93 diagrams', color: 'text-violet-700' },
  { icon: ClipboardList, label: 'Case Simulation', count: 'Full lifecycle', color: 'text-primary' },
  { icon: Flame, label: 'Daily Practice', count: 'Adaptive', color: 'text-rose-600' },
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
  },
  {
    id: 'quarterly',
    name: 'Quarterly',
    price: '$119',
    period: '/quarter',
    effective: '~$40/mo',
    badge: 'Save $22',
    description: 'Three months of full access — ideal for a focused study block.',
    cta: 'Start Quarterly',
    highlight: false,
  },
  {
    id: 'annual',
    name: 'Annual',
    price: '$399',
    period: '/year',
    effective: '~$33/mo',
    badge: 'Best Value',
    description: 'The full year — commit to the process, save the most.',
    cta: 'Start Annual',
    highlight: true,
  },
  {
    id: 'lifetime',
    name: 'Lifetime',
    price: '$699',
    period: 'one-time',
    effective: 'Pay once, own it',
    badge: null,
    description: 'Permanent access to all current and future content. Ideal for supervisors and long-term clinical reference.',
    cta: 'Get Lifetime Access',
    highlight: false,
  },
];

export default function PricingPage() {
  const [, navigate] = useLocation();
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
              <span className="font-semibold text-sm text-foreground">BehaviorPREP</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Pricing</span>
          </div>
        </div>
      </header>

      <div className="container py-12 md:py-16 max-w-5xl mx-auto">

        {/* Page heading */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1 mb-4">
            <Award className="w-3 h-3" />
            <span>BACB 6th Edition · All 9 Domains · 7 Progressive Tiers</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Invest in clinical competence
          </h1>
          <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            BehaviorPREP is not the cheapest option in the market. It is the only option that prepares you for both the exam and your career in the field.
          </p>
        </div>

        {/* Free Sampler callout */}
        <div className="max-w-2xl mx-auto mb-12 mt-8 rounded-2xl border border-dashed border-border bg-muted/30 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center flex-shrink-0">
            <Star className="w-5 h-5 text-teal-700" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-foreground text-sm mb-1">Start free — no credit card required</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              The Sampler gives you full Tier 1 Rapid Recall (213 terms), 10 Tier 5 Scenario Justification items, and a case vignette preview — enough to understand exactly why BehaviorPREP operates at a different cognitive level than any other prep tool.
            </p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="flex-shrink-0 px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold transition-colors"
          >
            Try Free
          </button>
        </div>

        {/* Subscription plan cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                'rounded-2xl border-2 bg-card p-6 flex flex-col relative',
                plan.highlight
                  ? 'border-primary bg-gradient-to-b from-primary/5 to-background shadow-lg shadow-primary/10'
                  : 'border-border'
              )}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className={cn(
                    'text-xs font-bold px-3 py-1 rounded-full shadow-sm',
                    plan.highlight
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-teal-600 text-white'
                  )}>
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-4 mt-1">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">{plan.name}</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-black text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-xs">{plan.period}</span>
                </div>
                {plan.effective && (
                  <p className="text-xs text-teal-600 font-medium">{plan.effective}</p>
                )}
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed mb-5 flex-1">{plan.description}</p>

              <div className="space-y-1.5 mb-5">
                {ALL_FEATURES.slice(0, 5).map((f, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs">
                    <Check className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{f.label}</span>
                  </div>
                ))}
                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                  <Check className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>+ all 7 tiers & 3,000+ items</span>
                </div>
              </div>

              <button
                className={cn(
                  'w-full py-2.5 rounded-xl text-sm font-semibold transition-colors',
                  plan.highlight
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm'
                    : 'border-2 border-border hover:bg-muted/50 text-foreground'
                )}
                onClick={() => {}}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Lifetime features note */}
        <p className="text-center text-xs text-muted-foreground mb-14">
          All plans include every feature — no tiers locked behind higher plans. The difference is billing frequency only.
        </p>

        {/* Supervision Cohort */}
        <div className="mb-14 rounded-2xl border-2 border-border bg-card overflow-hidden">
          <div className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6 text-violet-700" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-foreground">Supervision Cohort License</h3>
                <span className="text-xs bg-violet-100 text-violet-700 font-semibold px-2 py-0.5 rounded-full">For Supervisors</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                Preparing your supervisees for the exam and for the field? A cohort license gives up to 5 candidates full platform access under your supervision — ideal for ABA agencies, university programs, and independent supervisors running structured exam prep cohorts.
              </p>
            </div>
            <div className="flex-shrink-0 text-right">
              <div className="text-2xl font-black text-foreground">$199<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
              <div className="text-xs text-teal-600 font-medium mb-3">or $1,699/year — save $689</div>
              <button
                className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold transition-colors"
                onClick={() => setShowCohort(!showCohort)}
              >
                Learn More
              </button>
            </div>
          </div>
          {showCohort && (
            <div className="border-t border-border bg-muted/30 px-6 sm:px-8 py-5 grid sm:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-semibold text-foreground mb-1">5 full-access seats</p>
                <p className="text-xs text-muted-foreground">Each supervisee gets their own account with individual progress tracking and domain analytics.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Supervisor dashboard</p>
                <p className="text-xs text-muted-foreground">Monitor each supervisee's tier progress, domain scores, and daily practice streaks from a single view.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Agency license available</p>
                <p className="text-xs text-muted-foreground">Need 20+ seats? Contact us for agency pricing tailored to your organization's size and structure.</p>
              </div>
            </div>
          )}
        </div>

        {/* What's included — tool grid */}
        <div className="mb-14">
          <h2 className="text-lg font-bold text-foreground mb-2 text-center">Everything included in every plan</h2>
          <p className="text-sm text-muted-foreground text-center mb-6">
            3,000+ practice items across 8 study modalities — the only platform with content at the Evaluate and Synthesize levels of Bloom's Taxonomy.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {TOOLS.map((tool, i) => {
              const Icon = tool.icon;
              return (
                <div key={i} className="rounded-xl border border-border bg-card p-4 text-center">
                  <Icon className={cn("w-6 h-6 mx-auto mb-2", tool.color)} />
                  <div className="text-sm font-semibold text-foreground leading-tight mb-0.5">{tool.label}</div>
                  <div className="text-xs text-muted-foreground">{tool.count}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Comparison callout */}
        <div className="mb-14 rounded-2xl bg-muted/40 border border-border p-6 sm:p-8 max-w-2xl mx-auto">
          <h3 className="font-bold text-foreground mb-4 text-center text-sm uppercase tracking-wide">How BehaviorPREP compares</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-muted-foreground/40 mt-1.5 flex-shrink-0" />
              <p className="text-muted-foreground"><span className="font-medium text-foreground">Other apps at $19/month</span> — recall and community. Flashcards, mnemonics, and group energy. Bloom's level: Remember.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-muted-foreground/40 mt-1.5 flex-shrink-0" />
              <p className="text-muted-foreground"><span className="font-medium text-foreground">Video courses at $325–$475</span> — instructor-led content, mock exams. Bloom's level: Understand to Analyze.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <p className="text-muted-foreground"><span className="font-medium text-foreground">BehaviorPREP at $47/month</span> — the only platform that takes you from recall to clinical synthesis. Bloom's level: Remember through Synthesize. The exam becomes a byproduct of genuine competence.</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto mb-12">
          <h2 className="text-lg font-bold text-foreground mb-6 text-center">Common questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Which plan should I choose?',
                a: 'If you are 3–6 months from your exam, the Annual plan at $399 is the best value and gives you the full study timeline. If you want to try before committing, start with the free Sampler — completing one Tier 5 Scenario Justification item will tell you everything you need to know about why this platform is different.',
              },
              {
                q: 'Is the content aligned to the BACB 6th Edition?',
                a: 'Yes. Every flashcard, question, and scenario is mapped to a specific task code from the BACB 6th Edition Test Content Outline across all 9 domains (A through I).',
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Yes. No contracts, no commitments. Cancel at any time and retain access until the end of your billing period.',
              },
              {
                q: 'What is Scenario Justification and why does it matter?',
                a: 'Scenario Justification (Tier 5) requires you to select the correct clinical answer AND articulate the reasoning behind it. No other platform in the market offers this. It is the most direct preparation for clinical practice, where you must be able to defend every decision to supervisors, caregivers, and funding bodies — not just select the right answer on a test.',
              },
              {
                q: 'What is the difference between the monthly plan and the annual plan?',
                a: 'The content is identical — every plan includes full access to all 7 tiers and all 3,000+ items. The only difference is billing frequency. The annual plan saves you approximately $165 compared to paying monthly for 12 months.',
              },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5">
                <p className="font-semibold text-sm text-foreground mb-2">{item.q}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
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
