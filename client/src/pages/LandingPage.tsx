/**
 * LandingPage — BehaviorPREP marketing home page
 * Design: Violet + Teal SaaS — asymmetric layout, editorial typography
 * Sections: Hero, 7-tier breakdown, differentiators, pricing, FAQ, CTA footer
 */
import { useState } from 'react';
import { useLocation } from 'wouter';
import {
  Brain, Layers, GitMerge, Shuffle, BookOpen, ClipboardList,
  Zap, Award, Check, X, ChevronRight, ChevronDown, Star, Shield, Target,
  ArrowRight, Users, BarChart2
} from 'lucide-react';
import { cn } from '@/lib/utils';

const TIERS = [
  { num: 1, label: 'Flashcards', blurb: 'Learn what each term means.', detail: '217 cards across all 9 BACB domains', icon: Layers, color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-200' },
  { num: 2, label: 'Rapid Recall', blurb: 'Pick the right definition under time pressure.', detail: '200 terms with timed answer selection', icon: Zap, color: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-200' },
  { num: 3, label: 'Scenario Matching', blurb: 'Spot the concept playing out in a real case.', detail: '75 concepts mapped to clinical examples', icon: Shuffle, color: 'text-teal-700', bg: 'bg-teal-50', border: 'border-teal-200' },
  { num: 4, label: 'Venn Diagram', blurb: 'Tell apart concepts that look similar.', detail: '92 commonly confused ABA concept pairs', icon: GitMerge, color: 'text-violet-700', bg: 'bg-violet-50', border: 'border-violet-200' },
  { num: 5, label: 'Scenario Justification™', blurb: 'Choose the right answer and explain why.', detail: '104 questions across 55 clinical scenarios', icon: Brain, color: 'text-teal-800', bg: 'bg-teal-50', border: 'border-teal-200' },
  { num: 6, label: 'Full Mock Exam', blurb: 'Sit a timed 175-question exam and see your score breakdown.', detail: 'Adaptive selection, 9 domains, full analytics', icon: Award, color: 'text-amber-700', bg: 'bg-amber-50', border: 'border-amber-200' },
  { num: 7, label: 'Case Study Exam™', blurb: 'Apply your knowledge to a real client case — just like on the job.', detail: '175 questions following a full client lifecycle', icon: ClipboardList, color: 'text-violet-800', bg: 'bg-primary/5', border: 'border-primary/20' },
];

const LANDING_PLANS = [
  { id: 'monthly', name: 'Monthly', price: '$47', period: '/month', effective: null, badge: null, highlight: false },
  { id: 'quarterly', name: 'Quarterly', price: '$119', period: '/quarter', effective: '~$40/mo — save $22', badge: 'Save $22', highlight: false },
  { id: 'annual', name: 'Annual', price: '$399', period: '/year', effective: '~$33/mo — best value', badge: 'Best Value', highlight: true },
  { id: 'lifetime', name: 'Lifetime', price: '$699', period: 'one-time', effective: 'Pay once, own it forever', badge: null, highlight: false },
];
const PLAN_FEATURES = [
  '175-question timed mock exam (unlimited retakes)',
  'Flashcards, Rapid Recall, Matching Scenarios',
  'Scenario Justification™ — 1,515 items (Tier 5)',
  'Venn Diagrams, Case Simulation (Tier 7)',
  'Daily Practice — adaptive cross-tier sessions',
  'Full domain analytics across all 9 domains',
  'New content as released',
];

const DIFFERENTIATORS = [
  {
    icon: Target,
    title: 'Built for clinical reasoning, not just memorization',
    body: 'Most prep platforms stop at flashcards. CoreLocus™ takes you from knowing a definition to applying it in a real clinical scenario — the skill the BCBA exam actually tests.',
  },
  {
    icon: BarChart2,
    title: 'Tracks your weakest task items automatically',
    body: 'Daily Practice detects the 5 BACB task codes where you lose the most points and builds a targeted session mixing three different tool types to close those gaps.',
  },
  {
    icon: Shield,
    title: 'Aligned to the BACB 6th Edition TCO',
    body: 'Every question, flashcard, and scenario is mapped to a specific task code from the 6th Edition Test Content Outline across all 9 domains — nothing is off-syllabus.',
  },
  {
    icon: Users,
    title: 'The only platform with a Case Study capstone',
    body: 'After you pass the exam, Tier 7 puts you in the room with a real client. Follow Leo Rodriguez from referral to discharge and make the decisions a BCBA makes in practice.',
  },
];

const FAQS = [
  {
    q: 'Which plan should I choose?',
    a: 'If you are early in your study process, Complete Access gives you the structured 7-tier path that builds clinical reasoning from the ground up. If you have already studied and just need to simulate the exam, Mock Exam Only is sufficient.',
  },
  {
    q: 'Is the content aligned to the BACB 6th Edition?',
    a: 'Yes. Every flashcard, question, and scenario is mapped to a specific task code from the BACB 6th Edition Test Content Outline across all 9 domains.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. No contracts, no commitments. Cancel at any time and retain access until the end of your billing period.',
  },
  {
    q: 'What makes the Case Study Exam different from the Mock Exam?',
    a: 'The Mock Exam simulates the actual BCBA exam — randomized questions, timed, scored. The Case Study follows a single client from referral to discharge, asking you to make the same decisions a BCBA makes in real clinical practice. It is designed for post-exam confidence, not just exam prep.',
  },
];

export default function LandingPage() {
  const [, navigate] = useLocation();
  const [openPlan, setOpenPlan] = useState<string | null>('annual');

  return (
    <div className="min-h-screen bg-background">
      {/* ── Nav ──────────────────────────────────────────────────────────── */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663073430959/fVyZQGnkaLaquPGv.png" alt="BehaviorPREP" className="w-9 h-9 object-contain" />
            <span className="font-semibold text-sm text-foreground">CoreLocus™ <span className="font-normal text-muted-foreground text-xs">by BehaviorPREP</span></span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#pricing" className="hidden sm:block text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center gap-1.5 text-sm font-semibold text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg px-4 py-1.5 transition-colors"
            >
              Start Free Beta
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1 mb-6">
              <BookOpen className="w-3 h-3" />
              <span>BACB 6th Edition · All 9 Domains · 860+ Practice Items</span>
            </div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">by BehaviorPREP</p>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.0] mb-4 tracking-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="text-foreground">Core</span><span className="text-primary">Locus™</span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-foreground/80 mb-5 leading-snug max-w-xl">
              Stop memorizing.
              <br />
              <span className="text-primary">Start reasoning.</span>
            </p>
            <p className="text-base text-muted-foreground max-w-lg leading-relaxed mb-8">
              CoreLocus™ by BehaviorPREP builds the critical reasoning skills that carry you through the BCBA exam <em>and</em> your career — seven progressive tiers that take you from foundational concepts to full clinical case simulations.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate('/dashboard')}
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-3 rounded-xl transition-colors text-base shadow-sm"
            >
              Try it free — Beta access
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-muted-foreground mt-2">
              Use code <span className="font-mono font-semibold text-foreground">BPREP2026</span> to enter
            </p>
              <a
                href="#pricing"
                className="flex items-center gap-2 border-2 border-border text-foreground font-semibold px-6 py-3 rounded-xl hover:bg-muted/50 transition-colors text-base"
              >
                See pricing
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-4">No account required · Progress saved to your browser</p>
          </div>
        </div>
      </section>

      {/* ── 7-Tier Breakdown ─────────────────────────────────────────────── */}
      <section className="border-b border-border">
        <div className="container py-14 md:py-18">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Seven levels of practice
              </h2>
              <p className="text-muted-foreground text-base max-w-2xl">
                Each tier builds on the previous one — from recalling definitions to applying clinical reasoning in a real client case.
              </p>
            </div>

            <div className="space-y-3">
              {TIERS.map((tier, idx) => {
                const Icon = tier.icon;
                const isCapstone = tier.num === 7;
                return (
                  <div key={tier.num} className="relative">
                    {idx < TIERS.length - 1 && (
                      <div className="absolute left-7 top-full w-0.5 h-3 bg-border z-10" />
                    )}
                    <div className={cn(
                      "flex items-start gap-4 rounded-xl border-2 p-4",
                      tier.bg, tier.border,
                      isCapstone && "ring-2 ring-primary/20"
                    )}>
                      <div className={cn(
                        "flex-shrink-0 w-14 h-14 rounded-xl border-2 bg-white/70 flex flex-col items-center justify-center",
                        tier.border
                      )}>
                        <span className="text-[9px] font-bold text-muted-foreground">TIER</span>
                        <span className={cn("text-xl font-black leading-none", tier.color)}>{tier.num}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="flex items-center gap-2 mb-0.5">
                              <Icon className={cn("w-4 h-4", tier.color)} />
                              <span className="font-bold text-foreground text-sm">{tier.label}</span>
                              {isCapstone && (
                                <span className="text-[10px] font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full">Capstone</span>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{tier.blurb}</p>
                          </div>
                          <span className="hidden sm:block text-xs text-muted-foreground bg-white/60 border border-border/50 px-2 py-1 rounded-lg flex-shrink-0 whitespace-nowrap">
                            {tier.detail}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Differentiators ──────────────────────────────────────────────── */}
      <section className="border-b border-border bg-muted/30">
        <div className="container py-14 md:py-18">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Why CoreLocus™ is different
            </h2>
            <p className="text-muted-foreground text-base mb-10 max-w-2xl">
              Most prep platforms give you flashcards and a practice test. CoreLocus™ builds the reasoning that the BCBA exam — and the job — actually demands.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {DIFFERENTIATORS.map((d, i) => {
                const Icon = d.icon;
                return (
                  <div key={i} className="bg-card rounded-xl border border-border p-6">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground text-sm mb-2">{d.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{d.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────────────────── */}
      <section id="pricing" className="border-b border-border">
        <div className="container py-14 md:py-18">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Simple, transparent pricing
              </h2>
              <p className="text-muted-foreground text-base max-w-xl mx-auto">
                All plans include every feature. Cancel anytime.
              </p>
            </div>
            {/* Accordion plan rows */}
            <div className="rounded-2xl border border-border overflow-hidden divide-y divide-border mb-4">
              {LANDING_PLANS.map((plan) => {
                const isOpen = openPlan === plan.id;
                return (
                  <div key={plan.id} className={cn('bg-card transition-colors', plan.highlight && isOpen ? 'bg-primary/5' : '')}>
                    <button
                      className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-muted/30 transition-colors"
                      onClick={() => setOpenPlan(isOpen ? null : plan.id)}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-semibold text-sm text-foreground">{plan.name}</span>
                          {plan.badge && (
                            <span className={cn('text-xs font-bold px-2 py-0.5 rounded-full', plan.highlight ? 'bg-primary text-primary-foreground' : 'bg-teal-100 text-teal-700')}>
                              {plan.badge}
                            </span>
                          )}
                        </div>
                        {plan.effective && <p className="text-xs text-muted-foreground mt-0.5">{plan.effective}</p>}
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <div className="text-right">
                          <span className="text-xl font-black text-foreground">{plan.price}</span>
                          <span className="text-xs text-muted-foreground ml-1">{plan.period}</span>
                        </div>
                        <ChevronDown className={cn('w-4 h-4 text-muted-foreground transition-transform duration-200', isOpen ? 'rotate-180' : '')} />
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5">
                        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 mb-4">
                          {PLAN_FEATURES.map((f, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs">
                              <Check className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                              <span className="text-foreground/80">{f}</span>
                            </div>
                          ))}
                        </div>
                        <button
                          onClick={() => navigate('/pricing')}
                          className={cn('px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors', plan.highlight ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm' : 'border-2 border-border hover:bg-muted/50 text-foreground')}
                        >
                          Get started — {plan.price}{plan.period !== 'one-time' ? plan.period : ' one-time'}
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <p className="text-center text-xs text-muted-foreground">
              Free Sampler available — no credit card required.{' '}
              <button onClick={() => navigate('/pricing')} className="text-primary hover:underline font-medium">View full pricing details →</button>
            </p>
          </div>
        </div>
      </section>
            {/* ── Social proof strip ───────────────────────────────────────────── */}
      <section className="border-b border-border bg-muted/20">
        <div className="container py-8">
          <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
              </div>
              <span>Rated by BCBA candidates</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <span>860+ practice items</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-teal-600" />
              <span>BACB 6th Edition aligned</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-violet-600" />
              <span>3,500+ Instagram followers</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="border-b border-border">
        <div className="container py-14 md:py-18">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Common questions
            </h2>
            <div className="space-y-4">
              {FAQS.map((item, i) => (
                <div key={i} className="rounded-xl border border-border bg-card p-5">
                  <p className="font-semibold text-sm text-foreground mb-2">{item.q}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="bg-primary">
        <div className="container py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Ready to start?
          </h2>
          <p className="text-primary-foreground/80 text-base mb-8 max-w-md mx-auto">
            Beta access is free. No account required. Your progress is saved automatically.
          </p>
          <button
            onClick={() => navigate('/dashboard')}
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-3.5 rounded-xl hover:bg-white/90 transition-colors text-base shadow-sm"
          >
            Start Free Beta
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="border-t border-border bg-card">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663073430959/fVyZQGnkaLaquPGv.png" alt="BehaviorPREP" className="w-6 h-6 object-contain" />
            <span className="font-semibold text-foreground">CoreLocus™</span>
            <span className="text-muted-foreground">· by BehaviorPREP · © {new Date().getFullYear()} All rights reserved.</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-right">
            <span>CoreLocus™, BehaviorPREP™, Scenario Justification™, Daily Practice™, and Case Study Exam™ are trademarks of BehaviorPREP.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
