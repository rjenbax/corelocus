/**
 * ExamHubPage — Tier 6: Apply / Analyze (L3–4)
 * Gateway to the existing 175-question Case Study Simulation Exam
 */
import { useLocation } from 'wouter';
import { useExam } from '@/contexts/ExamContext';
import { useProgress } from '@/contexts/ProgressContext';
import { ArrowLeft, ClipboardList, BookOpen, Trophy, ChevronRight, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const LIFECYCLE_PHASES = [
  { name: 'Assessment', questions: '1–40', color: 'bg-blue-100 text-blue-700 border-blue-200' },
  { name: 'Functional Behavior Assessment', questions: '41–80', color: 'bg-teal-100 text-teal-800 border-teal-200' },
  { name: 'Treatment Planning', questions: '81–110', color: 'bg-violet-100 text-violet-800 border-violet-200' },
  { name: 'Implementation', questions: '111–150', color: 'bg-red-100 text-red-700 border-red-200' },
  { name: 'Evaluation & Supervision', questions: '151–175', color: 'bg-purple-100 text-purple-700 border-purple-200' },
];

export default function ExamHubPage() {
  const [, navigate] = useLocation();
  const { startExam } = useExam();
  const { progress } = useProgress();

  const examCompleted = progress.exam.completed;
  const examScore = progress.exam.score;

  const handleStart = () => {
    startExam();
    navigate('/exam');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/')} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </button>
            <span className="text-border">|</span>
            <div className="flex items-center gap-2">
              <ClipboardList className="w-4 h-4 text-primary" />
              <span className="font-semibold text-sm">Case Study Exam</span>
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Tier 6</span>
            </div>
          </div>
          {examCompleted && (
            <div className="flex items-center gap-1.5 text-xs text-violet-700">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Completed · {Math.round(examScore)}%</span>
            </div>
          )}
        </div>
      </header>

      <div className="container py-10 max-w-3xl mx-auto">
        {/* Hero */}
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 rounded-2xl p-8 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
              <ClipboardList className="w-7 h-7 text-primary" />
            </div>
            <div>
              <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                Capstone · Bloom's L3–4
              </div>
              <h1 className="text-2xl font-bold text-foreground mb-2">
                BCBA Case Study Simulation Exam
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Follow <strong>Leo Rodriguez</strong> — a 5-year-old with Autism Spectrum Disorder — from initial referral through discharge. 
                175 questions spanning the full client lifecycle, testing your ability to apply BCBA knowledge in realistic clinical scenarios.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-white border border-border px-2.5 py-1 rounded-full">175 questions</span>
                <span className="bg-white border border-border px-2.5 py-1 rounded-full">9 domains</span>
                <span className="bg-white border border-border px-2.5 py-1 rounded-full">BACB 6th Edition TCO</span>
                <span className="bg-white border border-border px-2.5 py-1 rounded-full">Full lifecycle</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lifecycle phases */}
        <h2 className="font-semibold text-sm text-foreground mb-3">Exam Structure — Leo's Lifecycle</h2>
        <div className="space-y-2 mb-8">
          {LIFECYCLE_PHASES.map((phase, i) => (
            <div key={i} className={cn("flex items-center justify-between p-3.5 rounded-xl border", phase.color)}>
              <div className="flex items-center gap-3">
                <span className="font-bold text-sm">{i + 1}.</span>
                <span className="font-medium text-sm">{phase.name}</span>
              </div>
              <span className="text-xs font-medium">Q{phase.questions}</span>
            </div>
          ))}
        </div>

        {/* Previous score */}
        {examCompleted && (
          <div className="bg-violet-50 border border-violet-200 rounded-xl p-4 mb-6 flex items-center gap-3">
            <Trophy className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <div>
              <div className="text-sm font-semibold text-foreground">Previous score: {Math.round(examScore)}%</div>
              <div className="text-xs text-muted-foreground">
                {examScore >= 80 ? 'Excellent! You are well prepared.' : 'Keep practicing — aim for 80%+ before your exam.'}
              </div>
            </div>
          </div>
        )}

        {/* Start button */}
        <button
          onClick={handleStart}
          className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 rounded-xl transition-colors text-base"
        >
          <BookOpen className="w-5 h-5" />
          {examCompleted ? 'Retake Exam' : 'Begin Exam'}
          <ChevronRight className="w-5 h-5" />
        </button>
        <p className="text-center text-xs text-muted-foreground mt-3">
          Your progress is saved automatically. You can pause and resume at any time.
        </p>
      </div>
    </div>
  );
}
