/**
 * PricingPage — BehaviorPREP subscription plans
 * Design: Violet + Teal SaaS — two plan cards with clear feature differentiation
 * $25/month Mock Exam Only · $47/month Complete Access (recommended)
 */
import { useLocation } from 'wouter';
import { Brain, ArrowLeft, Check, X, Zap, Award, Layers, Shuffle, GitMerge, ClipboardList, Target, Flame } from 'lucide-react';
import { cn } from '@/lib/utils';

const MOCK_FEATURES = [
  { label: '175-question timed mock exam', included: true },
  { label: 'Adaptive question selection across 9 domains', included: true },
  { label: 'Full score breakdown by domain', included: true },
  { label: 'Detailed answer explanations', included: true },
  { label: 'Unlimited retakes', included: true },
  { label: 'Flashcards (217 cards)', included: false },
  { label: 'Rapid Recall (200 terms)', included: false },
  { label: 'Scenario Matching (75 concepts)', included: false },
  { label: 'Venn Diagram (92 pairs)', included: false },
  { label: 'Scenario Justification (104 questions)', included: false },
  { label: 'Case Study Exam (175 questions)', included: false },
  { label: 'Daily Practice (adaptive sessions)', included: false },
];

const COMPLETE_FEATURES = [
  { label: '175-question timed mock exam', included: true },
  { label: 'Adaptive question selection across 9 domains', included: true },
  { label: 'Full score breakdown by domain', included: true },
  { label: 'Detailed answer explanations', included: true },
  { label: 'Unlimited retakes', included: true },
  { label: 'Flashcards (217 cards)', included: true },
  { label: 'Rapid Recall (200 terms)', included: true },
  { label: 'Scenario Matching (75 concepts)', included: true },
  { label: 'Venn Diagram (92 pairs)', included: true },
  { label: 'Scenario Justification (104 questions)', included: true },
  { label: 'Case Study Exam (175 questions)', included: true },
  { label: 'Daily Practice (adaptive sessions)', included: true },
];

const TOOLS = [
  { icon: Layers, label: 'Flashcards', count: '217 cards', color: 'text-violet-600' },
  { icon: Zap, label: 'Rapid Recall', count: '200 terms', color: 'text-teal-600' },
  { icon: Shuffle, label: 'Scenario Matching', count: '75 concepts', color: 'text-teal-700' },
  { icon: GitMerge, label: 'Venn Diagram', count: '92 pairs', color: 'text-violet-700' },
  { icon: Brain, label: 'Scenario Justification', count: '104 questions', color: 'text-teal-800' },
  { icon: Award, label: 'Full Mock Exam', count: '175 questions', color: 'text-amber-700' },
  { icon: ClipboardList, label: 'Case Study Exam', count: '175 questions', color: 'text-primary' },
  { icon: Flame, label: 'Daily Practice', count: 'Adaptive', color: 'text-primary' },
];

export default function PricingPage() {
  const [, navigate] = useLocation();

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
              <span className="hidden sm:inline">Back to Dashboard</span>
            </button>
            <span className="text-border hidden sm:inline">|</span>
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                <Brain className="w-3 h-3 text-primary-foreground" />
              </div>
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
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1 mb-4">
            <Award className="w-3 h-3" />
            <span>BACB 6th Edition · All 9 Domains</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Choose your plan
          </h1>
          <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            Whether you need a quick exam simulation or the full preparation system, BehaviorPREP has you covered.
          </p>
        </div>

        {/* Plan cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {/* Mock Exam Only */}
          <div className="rounded-2xl border-2 border-border bg-card p-8 flex flex-col">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center">
                  <Award className="w-5 h-5 text-amber-700" />
                </div>
                <span className="font-semibold text-foreground">Mock Exam Only</span>
              </div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-black text-foreground">$25</span>
                <span className="text-muted-foreground text-sm">/month</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Access to the full 175-question timed mock exam with score analytics.
              </p>
            </div>

            <ul className="space-y-2.5 flex-1 mb-8">
              {MOCK_FEATURES.map((f, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm">
                  {f.included
                    ? <Check className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                    : <X className="w-4 h-4 text-muted-foreground/40 flex-shrink-0 mt-0.5" />}
                  <span className={cn(f.included ? 'text-foreground' : 'text-muted-foreground/50 line-through')}>
                    {f.label}
                  </span>
                </li>
              ))}
            </ul>

            <button
              className="w-full py-3 rounded-xl border-2 border-border text-foreground font-semibold text-sm hover:bg-muted/50 transition-colors"
              onClick={() => {/* Stripe integration placeholder */}}
            >
              Get Mock Exam
            </button>
          </div>

          {/* Complete Access — recommended */}
          <div className="rounded-2xl border-2 border-primary bg-gradient-to-b from-primary/5 to-background p-8 flex flex-col relative">
            {/* Recommended badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full shadow-sm">
                Most Popular
              </span>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <span className="font-semibold text-foreground">Complete Access</span>
              </div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-black text-foreground">$47</span>
                <span className="text-muted-foreground text-sm">/month</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Every tool in the platform — the full 7-tier learning system from flashcards to case study.
              </p>
            </div>

            <ul className="space-y-2.5 flex-1 mb-8">
              {COMPLETE_FEATURES.map((f, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm">
                  <Check className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{f.label}</span>
                </li>
              ))}
            </ul>

            <button
              className="w-full py-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm transition-colors shadow-sm"
              onClick={() => {/* Stripe integration placeholder */}}
            >
              Get Complete Access
            </button>
          </div>
        </div>

        {/* What's in Complete — tool grid */}
        <div className="mb-14">
          <h2 className="text-lg font-bold text-foreground mb-2 text-center">Everything in Complete Access</h2>
          <p className="text-sm text-muted-foreground text-center mb-6">
            8 tools, 860+ practice items, all mapped to the BACB 6th Edition Task Content Outline.
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

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-lg font-bold text-foreground mb-6 text-center">Common questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Which plan should I choose?',
                a: 'If you are early in your study process, Complete Access gives you the structured learning path that builds clinical reasoning from the ground up. If you have already studied and just need to simulate the exam, Mock Exam Only is sufficient.',
              },
              {
                q: 'Is the content aligned to the BACB 6th Edition?',
                a: 'Yes. Every flashcard, question, and scenario is mapped to a specific task code from the BACB 6th Edition Test Content Outline across all 9 domains.',
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Yes. There are no contracts or commitments. You can cancel your subscription at any time and retain access until the end of your billing period.',
              },
              {
                q: 'What makes the Case Study Exam different from the Mock Exam?',
                a: 'The Mock Exam simulates the actual BCBA exam — randomized questions, timed, scored. The Case Study Exam follows a single client (Leo Rodriguez) from referral to discharge, asking you to make the same decisions a BCBA makes in real clinical practice. It is designed for post-exam confidence, not just exam prep.',
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
        <div className="text-center mt-12">
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
