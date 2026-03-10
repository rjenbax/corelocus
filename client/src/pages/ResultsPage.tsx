/**
 * BCBA Case Study Exam — Results Page
 * Design: Academic Warmth — editorial results report with domain breakdown
 */
import { useLocation } from 'wouter';
import { useEffect, useRef } from 'react';
import { useExam } from '@/contexts/ExamContext';
import { useProgress } from '@/contexts/ProgressContext';
import { allQuestions, domainInfo, phaseInfo } from '@/data/allQuestions';
import { Brain, RotateCcw, Home, CheckCircle2, XCircle, BookOpen, TrendingUp, Award, Target } from 'lucide-react';

function RadialScore({ score, total }: { score: number; total: number }) {
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const strokeDash = (pct / 100) * circumference;

  const color = pct >= 70 ? '#4A7C59' : pct >= 50 ? '#8A6B2E' : '#8A2E2E';

  return (
    <div className="relative w-36 h-36 mx-auto">
      <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
        <circle cx="60" cy="60" r={radius} fill="none" stroke="oklch(0.955 0.015 80)" strokeWidth="10" />
        <circle
          cx="60" cy="60" r={radius} fill="none"
          stroke={color} strokeWidth="10"
          strokeDasharray={`${strokeDash} ${circumference}`}
          strokeLinecap="round"
          style={{ transition: 'stroke-dasharray 1s ease' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-foreground" style={{ color }}>{pct}%</span>
        <span className="text-xs text-muted-foreground">{score}/{total}</span>
      </div>
    </div>
  );
}

function DomainBar({ domain, name, correct, total, color }: {
  domain: string; name: string; correct: number; total: number; color: string;
}) {
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
  const answered = allQuestions.filter(q => q.domain === domain);

  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
            style={{ backgroundColor: color }}>
            {domain}
          </div>
          <span className="text-sm font-semibold text-foreground truncate max-w-[180px]">{name}</span>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-sm font-bold" style={{ color: pct >= 70 ? '#4A7C59' : pct >= 50 ? '#8A6B2E' : '#8A2E2E' }}>
            {pct}%
          </span>
          <span className="text-xs text-muted-foreground">{correct}/{total}</span>
        </div>
      </div>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
      {pct < 70 && (
        <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
          <TrendingUp className="w-3 h-3" />
          Priority study area — review Domain {domain} task list items
        </p>
      )}
    </div>
  );
}

export default function ResultsPage() {
  const [, navigate] = useLocation();
  const { state, restartExam, retakePhase, getDomainScores, getPhaseProgress } = useExam();

  const domainScores = getDomainScores();
  const phaseProgress = getPhaseProgress();
  const totalAnswered = Object.keys(state.answers).length;
  const totalQuestions = allQuestions.length;
  const overallPct = totalAnswered > 0 ? Math.round((state.score / totalAnswered) * 100) : 0;

  const { recordExamCompletion } = useProgress();
  // Record completion once on mount — ref guard prevents double-recording on re-render
  const recordedRef = useRef(false);
  useEffect(() => {
    if (!recordedRef.current && totalAnswered > 0) {
      recordedRef.current = true;
      recordExamCompletion(overallPct, totalQuestions);
    }
  }, [totalAnswered, overallPct, totalQuestions, recordExamCompletion]);

  const handleRestart = () => {
    restartExam();
    navigate('/exam-hub');
  };

  const handleReview = () => {
    restartExam();
    navigate('/exam');
  };

  const passingScore = overallPct >= 70;
  const strongDomains = domainScores.filter(d => d.percentage >= 70);
  const weakDomains = domainScores.filter(d => d.percentage < 70 && d.correct > 0);
  const unansweredDomains = domainScores.filter(d => d.correct === 0 && allQuestions.filter(q => q.domain === d.domain).some(q => q.id in state.answers));

  const phaseEntries = Object.entries(phaseProgress);

  // Identify the weakest answered phase for the targeted retake button
  const weakestPhase = phaseEntries
    .filter(([, data]) => data.answered > 0)
    .map(([phase, data]) => ({
      phase,
      pct: Math.round((data.correct / data.answered) * 100),
      label: phaseInfo[phase]?.label?.replace(/Phase \d+: /, '') || phase,
    }))
    .sort((a, b) => a.pct - b.pct)[0] || null;

  const handleRetakeWeakPhase = () => {
    if (!weakestPhase) return;
    retakePhase(weakestPhase.phase);
    navigate('/exam');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/90 backdrop-blur-sm sticky top-0 z-40 h-14">
        <div className="container flex items-center justify-between h-full">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" />
            <span className="font-semibold text-sm">BehaviorPrep</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleRestart}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg hover:bg-muted"
            >
              <Home className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Home</span>
            </button>
            <button
              onClick={handleRestart}
              className="flex items-center gap-1.5 text-sm bg-[#00c2d6] text-white px-3 py-1.5 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Retake
            </button>
          </div>
        </div>
      </header>

      <div className="container py-8 max-w-5xl">
        {/* Score hero */}
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-6">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold mb-4 ${
                passingScore
                  ? 'bg-[#e3e5fb] text-[#6066bb] border border-[#6066bb]/40'
                  : 'bg-teal-100 text-[#00c2d6] border border-[#00c2d6]/40'
              }`}>
                {passingScore ? <Award className="w-4 h-4" /> : <TrendingUp className="w-4 h-4" />}
                {passingScore ? 'Strong Performance' : 'Keep Studying'}
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Exam Complete
              </h1>
              <p className="case-text text-muted-foreground mb-4">
                You answered {totalAnswered} of {totalQuestions} questions in Leo's case study simulation.
                {totalAnswered < totalQuestions && ` ${totalQuestions - totalAnswered} questions were skipped.`}
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#6066bb]" />
                  <span className="font-semibold text-foreground">{state.score}</span>
                  <span className="text-muted-foreground">correct</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 text-[#d4a0d4]" />
                  <span className="font-semibold text-foreground">{totalAnswered - state.score}</span>
                  <span className="text-muted-foreground">incorrect</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-muted-foreground" />
                  <span className="font-semibold text-foreground">{totalQuestions - totalAnswered}</span>
                  <span className="text-muted-foreground">unanswered</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <RadialScore score={state.score} total={totalAnswered} />
            </div>
          </div>
        </div>

        {/* Phase performance */}
        <div className="bg-card border border-border rounded-xl p-5 mb-6">
          <h2 className="font-bold text-foreground mb-1 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            Performance by Clinical Phase
          </h2>
          <p className="text-xs text-muted-foreground mb-4 case-text">Leo's case study spans five clinical phases. Your score in each phase reveals where your clinical reasoning is strongest — and where to focus next.</p>
          <div className="space-y-3">
            {phaseEntries.map(([phase, data], idx) => {
              const info = phaseInfo[phase];
              const pct = data.answered > 0 ? Math.round((data.correct / data.answered) * 100) : 0;
              const phaseColor = pct >= 70 ? '#4A7C59' : pct >= 50 ? '#8A6B2E' : '#8A2E2E';
              const phaseBg = pct >= 70 ? 'bg-[#e3e5fb] border-[#6066bb]/40' : pct >= 50 ? 'bg-amber-50 border-amber-200' : 'bg-[#feeffd] border-[#d4a0d4]/40';
              const shortLabel = info?.label?.replace(/Phase \d+: /, '') || phase;
              return (
                <div key={phase} className={`border rounded-lg p-3.5 ${phaseBg}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
                        style={{ backgroundColor: phaseColor }}>
                        {idx + 1}
                      </span>
                      <span className="text-sm font-semibold text-foreground">{shortLabel}</span>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-xs text-muted-foreground">{data.correct}/{data.answered}</span>
                      <span className="text-sm font-bold" style={{ color: phaseColor }}>
                        {data.answered > 0 ? `${pct}%` : '—'}
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-white/70 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${pct}%`, backgroundColor: phaseColor }}
                    />
                  </div>
                  {data.answered > 0 && pct < 70 && (
                    <p className="text-xs mt-1.5" style={{ color: phaseColor }}>
                      Below 70% — review {info?.domains ? `Domains ${info.domains}` : 'task list items'} for this phase
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Domain breakdown */}
        <div className="mb-6">
          <h2 className="font-bold text-foreground mb-4">Domain-by-Domain Breakdown</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {domainScores.map(ds => (
              <DomainBar
                key={ds.domain}
                domain={ds.domain}
                name={ds.domainName}
                correct={ds.correct}
                total={ds.total}
                color={domainInfo[ds.domain]?.color || '#4A7C59'}
              />
            ))}
          </div>
        </div>

        {/* Study recommendations */}
        {weakDomains.length > 0 && (
          <div className="bg-[#e2fcff]/60 border border-[#00c2d6]/40 rounded-xl p-5 mb-6">
            <h2 className="font-bold text-foreground mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#00c2d6]" />
              Priority Study Areas
            </h2>
            <p className="text-sm text-muted-foreground case-text mb-3">
              The following domains scored below 70%. Focus your review on these task list items:
            </p>
            <div className="space-y-2">
              {weakDomains.map(d => (
                <div key={d.domain} className="flex items-center gap-3 text-sm">
                  <div
                    className="w-6 h-6 rounded flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ backgroundColor: domainInfo[d.domain]?.color }}
                  >
                    {d.domain}
                  </div>
                  <span className="text-foreground font-medium">{d.domainName}</span>
                  <span className="text-muted-foreground ml-auto">{d.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Strong domains */}
        {strongDomains.length > 0 && (
          <div className="bg-[#e3e5fb]/60 border border-[#6066bb]/40 rounded-xl p-5 mb-6">
            <h2 className="font-bold text-foreground mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#6066bb]" />
              Strengths
            </h2>
            <div className="flex flex-wrap gap-2">
              {strongDomains.map(d => (
                <div
                  key={d.domain}
                  className="flex items-center gap-1.5 bg-white border border-[#6066bb]/40 rounded-full px-3 py-1 text-xs font-medium text-[#6066bb]"
                >
                  <span className="font-bold">{d.domain}</span>
                  <span>{d.domainName.split(' ').slice(0, 2).join(' ')}</span>
                  <span className="text-[#6066bb]">· {d.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Targeted retake callout — shown when a weak phase exists */}
        {weakestPhase && weakestPhase.pct < 70 && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center flex-shrink-0">
                <Target className="w-4 h-4 text-amber-700" />
              </div>
              <div className="flex-1">
                <h2 className="font-bold text-amber-900 mb-1">Targeted Practice Available</h2>
                <p className="text-sm text-amber-800 case-text mb-3">
                  Your weakest phase is <span className="font-semibold">{weakestPhase.label}</span> ({weakestPhase.pct}%). Retaking just this phase lets you drill the specific clinical reasoning skills where you need the most work — without re-doing the full 189-question exam.
                </p>
                <button
                  onClick={handleRetakeWeakPhase}
                  className="inline-flex items-center gap-2 bg-amber-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-amber-800 transition-colors"
                >
                  <Target className="w-4 h-4" />
                  Retake {weakestPhase.label}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap gap-3 justify-center pt-2">
          <button
            onClick={handleRestart}
            className="flex items-center gap-2 bg-[#00c2d6] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <RotateCcw className="w-4 h-4" />
            Retake Full Exam
          </button>
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
