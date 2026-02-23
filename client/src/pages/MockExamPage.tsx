/**
 * MockExamPage — Tier 6 Full Mock Exam
 * Design: Academic Warmth — deep navy/slate with amber accents
 * Features: setup screen, timed exam, question navigator, flag, pause/resume, reveal rationale
 */
import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'wouter';
import { useMockExam } from '@/contexts/MockExamContext';
import { domainInfo } from '@/data/allQuestions';
import {
  Clock, ChevronLeft, ChevronRight, Flag, Pause, Play,
  CheckCircle2, XCircle, BookOpen, BarChart3, Menu, X,
  AlertTriangle, Timer, Shuffle, Target, Brain, Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import type { MockExamSettings, ExamMode } from '@/contexts/MockExamContext';

// ─── Timer Display ───────────────────────────────────────────────────────────
function TimerDisplay({ seconds, urgent }: { seconds: number; urgent: boolean }) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  const fmt = (n: number) => String(n).padStart(2, '0');
  return (
    <div className={`flex items-center gap-1.5 font-mono text-sm font-semibold tabular-nums px-3 py-1.5 rounded-lg transition-colors ${urgent ? 'bg-red-100 text-red-700 animate-pulse' : 'bg-slate-100 text-slate-700'}`}>
      <Clock className="w-3.5 h-3.5" />
      {h > 0 ? `${fmt(h)}:${fmt(m)}:${fmt(s)}` : `${fmt(m)}:${fmt(s)}`}
    </div>
  );
}

// ─── Setup Screen ────────────────────────────────────────────────────────────
function SetupScreen() {
  const { startExam } = useMockExam();
  const [mode, setMode] = useState<ExamMode>('timed');
  const [questionCount, setQuestionCount] = useState(175);
  const [timeLimitMinutes, setTimeLimitMinutes] = useState(240);
  const [shuffleQuestions, setShuffleQuestions] = useState(false);
  const [focusDomains, setFocusDomains] = useState<string[]>([]);

  const toggleDomain = (d: string) => {
    setFocusDomains(prev => prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]);
  };

  const handleStart = () => {
    startExam({
      mode,
      questionCount,
      timeLimitMinutes: mode === 'timed' ? timeLimitMinutes : 0,
      shuffleQuestions,
      focusDomains,
    });
  };

  const modes: { id: ExamMode; label: string; desc: string; icon: React.ReactNode }[] = [
    { id: 'timed', label: 'Timed Exam', desc: '4-hour countdown — mirrors real exam conditions', icon: <Timer className="w-5 h-5" /> },
    { id: 'standard', label: 'Standard', desc: 'No time pressure — focus on accuracy and rationale', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'adaptive', label: 'Adaptive', desc: 'Weighted toward your weak domains', icon: <Target className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 border border-amber-500/30">
            <Brain className="w-3.5 h-3.5" />
            TIER 6 — FULL MOCK EXAM
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">BCBA Mock Examination</h1>
          <p className="text-slate-400 text-sm">175 questions across all 9 BACB domains · Leo Rodriguez case study</p>
        </div>

        {/* Mode selection */}
        <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 mb-4">
          <h2 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Exam Mode</h2>
          <div className="grid grid-cols-3 gap-3">
            {modes.map(m => (
              <button
                key={m.id}
                onClick={() => setMode(m.id)}
                className={`p-3 rounded-xl border text-left transition-all ${mode === m.id ? 'border-amber-500 bg-amber-500/10 text-white' : 'border-slate-600 text-slate-400 hover:border-slate-500 hover:text-slate-300'}`}
              >
                <div className={`mb-1.5 ${mode === m.id ? 'text-amber-400' : ''}`}>{m.icon}</div>
                <div className="font-semibold text-xs mb-0.5">{m.label}</div>
                <div className="text-xs opacity-70 leading-tight">{m.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Options */}
        <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 mb-4">
          <h2 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Options</h2>
          <div className="space-y-4">
            {/* Question count */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white text-sm font-medium">Questions</div>
                <div className="text-slate-400 text-xs">Full exam is 175 questions</div>
              </div>
              <div className="flex gap-2">
                {[50, 100, 175].map(n => (
                  <button
                    key={n}
                    onClick={() => setQuestionCount(n)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${questionCount === n ? 'bg-amber-500 text-slate-900' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            {/* Time limit (timed mode only) */}
            {mode === 'timed' && (
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white text-sm font-medium">Time Limit</div>
                  <div className="text-slate-400 text-xs">BACB standard is 4 hours</div>
                </div>
                <div className="flex gap-2">
                  {[120, 180, 240].map(t => (
                    <button
                      key={t}
                      onClick={() => setTimeLimitMinutes(t)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${timeLimitMinutes === t ? 'bg-amber-500 text-slate-900' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}
                    >
                      {t / 60}h
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Shuffle */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white text-sm font-medium flex items-center gap-1.5">
                  <Shuffle className="w-3.5 h-3.5 text-slate-400" />
                  Shuffle Questions
                </div>
                <div className="text-slate-400 text-xs">Randomize question order</div>
              </div>
              <button
                onClick={() => setShuffleQuestions(v => !v)}
                className={`w-11 h-6 rounded-full transition-all relative ${shuffleQuestions ? 'bg-amber-500' : 'bg-slate-600'}`}
              >
                <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${shuffleQuestions ? 'left-5' : 'left-0.5'}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Domain focus */}
        <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-white font-semibold text-sm uppercase tracking-wider">Domain Focus</h2>
            <span className="text-slate-400 text-xs">{focusDomains.length === 0 ? 'All domains' : `${focusDomains.length} selected`}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {Object.entries(domainInfo).map(([d, info]) => (
              <button
                key={d}
                onClick={() => toggleDomain(d)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all border ${focusDomains.includes(d) ? 'text-white border-transparent' : 'border-slate-600 text-slate-400 hover:border-slate-500'}`}
                style={focusDomains.includes(d) ? { backgroundColor: info.color, borderColor: info.color } : {}}
              >
                {d}: {info.name.split(' ')[0]}
              </button>
            ))}
          </div>
          {focusDomains.length > 0 && (
            <button onClick={() => setFocusDomains([])} className="mt-2 text-xs text-slate-400 hover:text-slate-300 underline">
              Clear selection
            </button>
          )}
        </div>

        {/* Start button */}
        <button
          onClick={handleStart}
          className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-base rounded-xl transition-all active:scale-95 shadow-lg shadow-amber-500/20"
        >
          Begin Exam
        </button>
      </div>
    </div>
  );
}

// ─── Question Navigator ───────────────────────────────────────────────────────
function QuestionNavigator({ onClose }: { onClose: () => void }) {
  const { state, goToQuestion } = useMockExam();
  const { questions, answers, flagged, currentIndex, revealed } = state;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative ml-auto w-80 bg-slate-900 border-l border-slate-700 h-full overflow-y-auto p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold">Question Navigator</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white"><X className="w-5 h-5" /></button>
        </div>
        {/* Legend */}
        <div className="flex flex-wrap gap-2 mb-4 text-xs text-slate-400">
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-emerald-500 inline-block" /> Correct</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-red-500 inline-block" /> Wrong</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-slate-600 inline-block" /> Unanswered</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-amber-500 inline-block" /> Flagged</span>
        </div>
        <div className="grid grid-cols-8 gap-1">
          {questions.map((q, i) => {
            const answered = Number(q.id) in answers;
            const correct = answers[Number(q.id)] === q.correctAnswer;
            const isFlagged = flagged[Number(q.id)];
            const isCurrent = i === currentIndex;
            let bg = 'bg-slate-700 text-slate-300';
            if (isFlagged) bg = 'bg-amber-500 text-slate-900';
            else if (answered && correct) bg = 'bg-emerald-600 text-white';
            else if (answered && !correct) bg = 'bg-red-600 text-white';
            if (isCurrent) bg += ' ring-2 ring-white ring-offset-1 ring-offset-slate-900';
            return (
              <button
                key={Number(q.id)}
                onClick={() => { goToQuestion(i); onClose(); }}
                className={`w-8 h-8 rounded text-xs font-semibold transition-all ${bg}`}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Pause Screen ─────────────────────────────────────────────────────────────
function PauseScreen({ onResume }: { onResume: () => void }) {
  return (
    <div className="fixed inset-0 z-40 bg-slate-900/95 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Pause className="w-8 h-8 text-amber-400" />
        </div>
        <h2 className="text-white text-2xl font-bold mb-2">Exam Paused</h2>
        <p className="text-slate-400 text-sm mb-6">Timer is stopped. Your progress is saved.</p>
        <button
          onClick={onResume}
          className="px-8 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-xl transition-all"
        >
          Resume Exam
        </button>
      </div>
    </div>
  );
}

// ─── Main Exam View ───────────────────────────────────────────────────────────
function ExamView() {
  const { state, currentQuestion, submitAnswer, revealAnswer, nextQuestion, prevQuestion, toggleFlag, pauseExam, resumeExam, finishExam } = useMockExam();
  const [navOpen, setNavOpen] = useState(false);
  const [showFinishConfirm, setShowFinishConfirm] = useState(false);
  const [, navigate] = useLocation();

  useEffect(() => {
    if (state.complete) navigate('/mock-results');
  }, [state.complete, navigate]);

  if (!currentQuestion) return null;

  const { currentIndex, questions, answers, flagged, revealed, settings } = state;
  const totalQ = questions.length;
  const answeredCount = Object.keys(answers).length;
  const selectedAnswer = answers[Number(currentQuestion.id)];
  const isRevealed = revealed[Number(currentQuestion.id)];
  const isAnswered = selectedAnswer !== undefined;
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
  const isFlagged = flagged[Number(currentQuestion.id)];
  const isUrgent = settings.timeLimitMinutes > 0 && state.timeRemainingSeconds < 600;
  const progressPct = Math.round((answeredCount / totalQ) * 100);
  const domainData = domainInfo[currentQuestion.domain];

  const choiceLabels = ['a', 'b', 'c', 'd'];

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      {/* Top bar */}
      <header className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center gap-3">
        <div className="flex items-center gap-2 flex-1">
          <span className="text-slate-400 text-xs font-medium">Q {currentIndex + 1} / {totalQ}</span>
          <div className="flex-1 max-w-xs">
            <Progress value={progressPct} className="h-1.5 bg-slate-700" />
          </div>
          <span className="text-slate-400 text-xs">{answeredCount} answered</span>
        </div>
        <div className="flex items-center gap-2">
          {settings.timeLimitMinutes > 0 && (
            <TimerDisplay seconds={state.timeRemainingSeconds} urgent={isUrgent} />
          )}
          <button
            onClick={() => state.paused ? resumeExam() : pauseExam()}
            className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
            title={state.paused ? 'Resume' : 'Pause'}
          >
            {state.paused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setNavOpen(true)}
            className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Pause overlay */}
      {state.paused && <PauseScreen onResume={resumeExam} />}

      {/* Main content */}
      <div className="flex-1 flex flex-col max-w-3xl mx-auto w-full px-4 py-6">
        {/* Domain badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span
              className="px-2.5 py-1 rounded-full text-xs font-bold text-white"
              style={{ backgroundColor: domainData?.color || '#64748b' }}
            >
              Domain {currentQuestion.domain}
            </span>
            <span className="text-slate-400 text-xs">{currentQuestion.taskItem}</span>
            <span className="text-slate-500 text-xs capitalize">{currentQuestion.bloomsLevel}</span>
          </div>
          <button
            onClick={() => toggleFlag(Number(currentQuestion.id))}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${isFlagged ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40' : 'bg-slate-800 text-slate-400 hover:text-amber-400 border border-slate-700'}`}
          >
            <Flag className="w-3.5 h-3.5" />
            {isFlagged ? 'Flagged' : 'Flag'}
          </button>
        </div>

        {/* Scenario */}
        {currentQuestion.scenario && (
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 mb-4 text-slate-300 text-sm leading-relaxed">
            <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium mb-2 uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              Clinical Scenario
            </div>
            {currentQuestion.scenario}
          </div>
        )}

        {/* Question */}
        <div className="text-white text-base font-medium leading-relaxed mb-5"
          dangerouslySetInnerHTML={{ __html: currentQuestion.question.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }}
        />

        {/* Choices */}
        <div className="space-y-2.5 mb-6">
          {currentQuestion.choices.map((choice) => {
            const isSelected = selectedAnswer === choice.letter;
            const isCorrectChoice = choice.letter === currentQuestion.correctAnswer;
            let style = 'border-slate-700 bg-slate-800/50 text-slate-300 hover:border-slate-500 hover:bg-slate-800';
            if (isRevealed) {
              if (isCorrectChoice) style = 'border-emerald-500 bg-emerald-500/10 text-emerald-300';
              else if (isSelected && !isCorrectChoice) style = 'border-red-500 bg-red-500/10 text-red-300';
              else style = 'border-slate-700 bg-slate-800/30 text-slate-500';
            } else if (isSelected) {
              style = 'border-amber-500 bg-amber-500/10 text-white';
            }

            return (
              <button
                key={choice.letter}
                onClick={() => !isRevealed && submitAnswer(Number(currentQuestion.id), choice.letter)}
                disabled={isRevealed}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3 ${style} ${isRevealed ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <span className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold mt-0.5 ${isSelected && !isRevealed ? 'border-amber-500 bg-amber-500 text-slate-900' : isRevealed && isCorrectChoice ? 'border-emerald-500 bg-emerald-500 text-white' : isRevealed && isSelected ? 'border-red-500 bg-red-500 text-white' : 'border-current'}`}>
                  {choice.letter.toUpperCase()}
                </span>
                <span className="text-sm leading-relaxed">{choice.text}</span>
                {isRevealed && isCorrectChoice && <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 ml-auto mt-0.5" />}
                {isRevealed && isSelected && !isCorrectChoice && <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 ml-auto mt-0.5" />}
              </button>
            );
          })}
        </div>

        {/* Reveal / Rationale */}
        {isAnswered && !isRevealed && (
          <button
            onClick={() => revealAnswer(Number(currentQuestion.id))}
            className="w-full py-3 border border-slate-600 text-slate-300 rounded-xl text-sm font-medium hover:border-slate-400 hover:text-white transition-all flex items-center justify-center gap-2 mb-4"
          >
            <Eye className="w-4 h-4" />
            Reveal Rationale
          </button>
        )}

        {isRevealed && currentQuestion.rationale && (
          <div className={`rounded-xl p-4 mb-4 border ${isCorrect ? 'bg-emerald-900/20 border-emerald-700/40' : 'bg-red-900/20 border-red-700/40'}`}>
            <div className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-2 ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
              {isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
              {isCorrect ? 'Correct' : 'Incorrect'} — Rationale
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">{currentQuestion.rationale}</p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-auto pt-4">
          <button
            onClick={prevQuestion}
            disabled={currentIndex === 0}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm font-medium"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          {currentIndex === totalQ - 1 ? (
            <button
              onClick={() => setShowFinishConfirm(true)}
              className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-sm transition-all"
            >
              <BarChart3 className="w-4 h-4" />
              Finish Exam
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-all text-sm font-medium"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Finish confirm modal */}
      {showFinishConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-sm w-full mx-4">
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              <h3 className="text-white font-semibold">Finish Exam?</h3>
            </div>
            <p className="text-slate-400 text-sm mb-1">
              You have answered <strong className="text-white">{answeredCount}</strong> of <strong className="text-white">{totalQ}</strong> questions.
            </p>
            {answeredCount < totalQ && (
              <p className="text-amber-400 text-xs mb-4">
                {totalQ - answeredCount} questions are unanswered and will be marked incorrect.
              </p>
            )}
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => setShowFinishConfirm(false)}
                className="flex-1 py-2.5 rounded-xl border border-slate-600 text-slate-300 hover:text-white text-sm font-medium transition-all"
              >
                Continue
              </button>
              <button
                onClick={() => { finishExam(); navigate('/mock-results'); }}
                className="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-sm transition-all"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigator panel */}
      {navOpen && <QuestionNavigator onClose={() => setNavOpen(false)} />}
    </div>
  );
}

// ─── Page Entry ───────────────────────────────────────────────────────────────
export default function MockExamPage() {
  const { state } = useMockExam();
  if (!state.started) return <SetupScreen />;
  return <ExamView />;
}
