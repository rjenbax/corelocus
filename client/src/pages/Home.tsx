/**
 * BCBA Case Study Exam — Home / Landing Page
 * Design: Academic Warmth — editorial, case-file aesthetic
 * Warm cream tones, forest green accents, Lora serif for case text
 */
import { useLocation } from 'wouter';
import { useExam } from '@/contexts/ExamContext';
import { clientProfile, lifecyclePhases } from '@/data/caseNarrative';
import { domainInfo } from '@/data/allQuestions';
import { BookOpen, ClipboardList, Award, Users, ChevronRight, Brain, Target, BarChart3 } from 'lucide-react';

export default function Home() {
  const [, navigate] = useLocation();
  const { startExam } = useExam();

  const handleStart = () => {
    startExam();
    navigate('/exam');
  };

  const domainEntries = Object.entries(domainInfo);
  const totalQuestions = domainEntries.reduce((sum, [, v]) => sum + v.totalQuestions, 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between h-14">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
              <Brain className="w-4.5 h-4.5 text-primary-foreground" />
            </div>
            <div>
              <span className="font-semibold text-sm text-foreground">BehaviorPrep</span>
              <span className="text-muted-foreground text-xs ml-1.5">BCBA Case Exam</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="hidden sm:inline">BACB 6th Edition TCO</span>
            <span className="hidden sm:inline">·</span>
            <span>{totalQuestions} Questions</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-card to-background">
        <div className="container py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="phase-pill mb-5 w-fit">
              <BookOpen className="w-3 h-3" />
              <span>Client Lifecycle Simulation</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              BCBA Case Study
              <br />
              <span className="text-primary">Simulation Exam</span>
            </h1>
            <p className="case-text text-muted-foreground mb-8 max-w-2xl">
              Follow Leo Rodriguez — a 5-year-old with Autism Spectrum Disorder — from initial referral through discharge. 
              Every question is embedded in his clinical story, requiring you to <em>apply and analyze</em> the BACB Task Content Outline 
              at Bloom's Taxonomy Levels 3 and 4.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2.5 text-sm">
                <ClipboardList className="w-4 h-4 text-primary" />
                <span className="font-medium">{totalQuestions} Questions</span>
              </div>
              <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2.5 text-sm">
                <Target className="w-4 h-4 text-primary" />
                <span className="font-medium">9 Domains</span>
              </div>
              <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2.5 text-sm">
                <BarChart3 className="w-4 h-4 text-primary" />
                <span className="font-medium">5 Clinical Phases</span>
              </div>
              <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2.5 text-sm">
                <Brain className="w-4 h-4 text-primary" />
                <span className="font-medium">Application + Analysis Level</span>
              </div>
            </div>
            <button
              onClick={handleStart}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity shadow-sm"
            >
              Begin Exam
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Client Profile */}
      <section className="border-b border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-1">Meet Your Client</h2>
              <p className="text-sm text-muted-foreground mb-5">All 175 questions are grounded in this case.</p>
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">{clientProfile.name}</h3>
                    <p className="text-sm text-muted-foreground">{clientProfile.age} · {clientProfile.diagnosis}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Referral Reason", value: clientProfile.referralReason },
                    { label: "Setting", value: clientProfile.setting },
                    { label: "Family", value: clientProfile.family },
                    { label: "Funding", value: clientProfile.insurance },
                    { label: "Your Team", value: `${clientProfile.bcaba} (BCaBA), ${clientProfile.rbt} (RBT)` },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex gap-3 text-sm">
                      <span className="font-semibold text-foreground min-w-[120px] flex-shrink-0">{label}</span>
                      <span className="text-muted-foreground case-text text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Lifecycle phases */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-1">Clinical Journey</h2>
              <p className="text-sm text-muted-foreground mb-5">Questions follow Leo's lifecycle from referral to discharge.</p>
              <div className="space-y-2">
                {lifecyclePhases.map((phase, i) => (
                  <div key={phase.id} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">{i + 1}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">{phase.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{phase.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domain breakdown */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-xl font-bold text-foreground mb-1">Domain Coverage</h2>
          <p className="text-sm text-muted-foreground mb-6">Proportioned to match the actual BCBA exam weighting.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {domainEntries.map(([domain, info]) => (
              <div key={domain} className="bg-card border border-border rounded-lg p-4 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold text-sm"
                  style={{ backgroundColor: info.color }}
                >
                  {domain}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">{info.name}</p>
                  <p className="text-xs text-muted-foreground">{info.totalQuestions} questions</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-border bg-card py-12">
        <div className="container">
          <h2 className="text-xl font-bold text-foreground mb-6 text-center">How It Works</h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: BookOpen, title: "Read the Case", desc: "Each question opens with a clinical scenario from Leo's case. Read it carefully — the answer requires applying the case context." },
              { icon: Target, title: "Apply & Analyze", desc: "All questions are at Bloom's Levels 3–4. You must apply concepts to the case or analyze clinical data to choose the correct answer." },
              { icon: Award, title: "Review & Learn", desc: "After answering, reveal the rationale. Track your performance by domain and lifecycle phase to identify study priorities." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground case-text">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="border-t border-border py-8">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Based on the BACB BCBA Test Content Outline, 6th Edition (2025)
          </p>
          <button
            onClick={handleStart}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Start Exam
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </div>
  );
}
