/**
 * BCBA Case Study Exam — Results Page
 * Design: Academic Warmth — editorial results report with domain breakdown
 */
import { useLocation } from 'wouter';
import { useExam } from '@/contexts/ExamContext';
import { allQuestions, domainInfo, phaseInfo } from '@/data/allQuestions';
import { Brain, RotateCcw, Home, CheckCircle2, XCircle, BookOpen, TrendingUp, Award } from 'lucide-react';

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
  const { state, restartExam, getDomainScores, getPhaseProgress } = useExam();

  const domainScores = getDomainScores();
  const phaseProgress = getPhaseProgress();
  const totalAnswered = Object.keys(state.answers).length;
  const totalQuestions = allQuestions.length;
  const overallPct = totalAnswered > 0 ? Math.round((state.score / totalAnswered) * 100) : 0;

  const handleRestart = () => {
    restartExam();
    navigate('/');
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
              className="flex items-center gap-1.5 text-sm bg-primary text-primary-foreground px-3 py-1.5 rounded-lg font-medium hover:opacity-90 transition-opacity"
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
                  ? 'bg-green-100 text-green-700 border border-green-200'
                  : 'bg-amber-100 text-amber-700 border border-amber-200'
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
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="font-semibold text-foreground">{state.score}</span>
                  <span className="text-muted-foreground">correct</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 text-red-500" />
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
          <h2 className="font-bold text-foreground mb-4">Performance by Clinical Phase</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {phaseEntries.map(([phase, data]) => {
              const info = phaseInfo[phase];
              const pct = data.answered > 0 ? Math.round((data.correct / data.answered) * 100) : 0;
              return (
                <div key={phase} className="bg-muted/50 rounded-lg p-3">
                  <p className="text-xs font-semibold text-foreground mb-1 truncate">
                    {info?.label?.replace(/Phase \d+: /, '') || phase}
                  </p>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs text-muted-foreground">{data.correct}/{data.answered} answered</span>
                    <span className="text-xs font-bold" style={{ color: pct >= 70 ? '#4A7C59' : pct >= 50 ? '#8A6B2E' : '#8A2E2E' }}>
                      {data.answered > 0 ? `${pct}%` : '—'}
                    </span>
                  </div>
                  <div className="w-full bg-border rounded-full h-1.5 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${pct}%`,
                        backgroundColor: pct >= 70 ? '#4A7C59' : pct >= 50 ? '#8A6B2E' : '#8A2E2E'
                      }}
                    />
                  </div>
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
          <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-5 mb-6">
            <h2 className="font-bold text-foreground mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-amber-600" />
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
          <div className="bg-green-50/60 border border-green-200 rounded-xl p-5 mb-6">
            <h2 className="font-bold text-foreground mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              Strengths
            </h2>
            <div className="flex flex-wrap gap-2">
              {strongDomains.map(d => (
                <div
                  key={d.domain}
                  className="flex items-center gap-1.5 bg-white border border-green-200 rounded-full px-3 py-1 text-xs font-medium text-green-800"
                >
                  <span className="font-bold">{d.domain}</span>
                  <span>{d.domainName.split(' ').slice(0, 2).join(' ')}</span>
                  <span className="text-green-600">· {d.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap gap-3 justify-center pt-2">
          <button
            onClick={handleRestart}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <RotateCcw className="w-4 h-4" />
            Retake Exam
          </button>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 bg-card border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
