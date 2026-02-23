/**
 * MockExamHubPage — Tier 6 Mock Exam
 * Design: Clean light UI matching BehaviorPREP screenshots
 * Features: Resume in-progress card, Full Mock Exam setup, timed question view
 */
import { useState, useEffect, useCallback, useRef } from 'react';
import { useLocation } from 'wouter';
import { useMockExam } from '@/contexts/MockExamContext';
import { useMockExamHub } from '@/contexts/MockExamHubContext';
import { getTaskName, extractConceptFromText } from '@/data/taskListNames';
import { domainInfo } from '@/data/allQuestions';
import { tier6Questions } from '@/data/tier6Questions';
const allQuestions = tier6Questions as any[];
import { cn } from '@/lib/utils';
import {
  Play, Trash2, ClipboardList, Clock, CheckCircle2, XCircle,
  Flag, ChevronLeft, ChevronRight, Pause, Grid3x3, AlertTriangle,
  BarChart3, Eye, BookOpen, Timer,
} from 'lucide-react';

// ─── Timer helpers ────────────────────────────────────────────────────────────
function formatTime(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return h > 0 ? `${pad(h)}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
}

// ─── Mock Exam Setup / Home ───────────────────────────────────────────────────
function MockExamHome() {
  const { state, startExam, resumeExam, restartExam } = useMockExam();
  const [enableTimer, setEnableTimer] = useState(true);
  const [, navigate] = useLocation();

  const hasPausedExam = state.started && !state.complete;
  const answeredCount = Object.keys(state.answers).length;
  const totalQ = state.questions.length;
  const timeLeft = state.timeRemainingSeconds;
  const progressPct = totalQ > 0 ? Math.round((answeredCount / totalQ) * 100) : 0;

  const handleStart = () => {
    startExam({ mode: enableTimer ? 'timed' : 'standard', questionCount: 175, timeLimitMinutes: enableTimer ? 240 : 0, shuffleQuestions: false, focusDomains: [] });
    navigate('/exam/question');
  };

  const handleResume = () => {
    resumeExam();
    navigate('/exam/question');
  };

  const handleAbandon = () => {
    restartExam();
  };

  return (
    <div className="p-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-1">Mock Exam</h1>
      <p className="text-gray-500 mb-8">Simulate the real BCBA certification exam experience.</p>

      {/* Resume card */}
      {hasPausedExam && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
              <Play className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <div className="font-bold text-gray-900 text-lg">Exam In Progress</div>
              <div className="text-gray-500 text-sm">You have a paused exam waiting to be resumed.</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-5">
            {[
              { label: 'Answered', value: `${answeredCount}/${totalQ}` },
              { label: 'Time Left', value: formatTime(timeLeft) },
              { label: 'Progress', value: `${progressPct}%` },
            ].map(stat => (
              <div key={stat.label} className="bg-white rounded-xl p-4 text-center border border-amber-100">
                <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleResume}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors"
            >
              <Play className="w-4 h-4" />
              Resume Exam
            </button>
            <button
              onClick={handleAbandon}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 font-medium transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              Abandon
            </button>
          </div>
        </div>
      )}

      {/* Full Mock Exam setup card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center">
            <ClipboardList className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="font-bold text-gray-900 text-lg">Full Mock Exam</div>
            <div className="text-gray-500 text-sm">Mirrors the actual BCBA exam format</div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { label: 'Questions', value: '175' },
            { label: 'Hours', value: '4:00' },
            { label: 'Domains', value: '9' },
          ].map(stat => (
            <div key={stat.label} className="bg-gray-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Timer toggle */}
        <div className="flex items-center justify-between py-4 border-t border-b border-gray-100 mb-5">
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-gray-400" />
            <div>
              <div className="text-sm font-medium text-gray-800">Enable Timer</div>
              <div className="text-xs text-gray-400">4-hour countdown will run during the exam</div>
            </div>
          </div>
          <button
            onClick={() => setEnableTimer(v => !v)}
            className={cn(
              'relative w-11 h-6 rounded-full transition-colors',
              enableTimer ? 'bg-indigo-600' : 'bg-gray-200'
            )}
          >
            <span className={cn(
              'absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform',
              enableTimer ? 'translate-x-5' : 'translate-x-0.5'
            )} />
          </button>
        </div>

        {/* Exam simulation mode notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
          <div className="flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-sm font-semibold text-amber-800">Exam Simulation Mode</div>
              <div className="text-xs text-amber-700 mt-0.5 leading-relaxed">
                Once started, the timer runs continuously. You can pause and exit at any time — your progress is saved automatically. You can also flag questions for review and navigate freely.
              </div>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex items-center gap-3 mb-5 text-xs text-gray-500">
          <span className="flex items-center gap-1.5"><Timer className="w-3.5 h-3.5" /> Timed</span>
          <span className="flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5" /> All Domains</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5" /> Published Questions</span>
        </div>

        <button
          onClick={handleStart}
          className="w-full py-3.5 rounded-xl bg-indigo-400 hover:bg-indigo-500 text-white font-semibold transition-colors text-base"
        >
          Start New Mock Exam
        </button>
      </div>
    </div>
  );
}

// ─── Question View ────────────────────────────────────────────────────────────
function QuestionView() {
  const { state, currentQuestion, submitAnswer, revealAnswer, nextQuestion, prevQuestion, toggleFlag, pauseExam, finishExam } = useMockExam();
  const { addExamResult, recordPracticeAnswer } = useMockExamHub();
  const [, navigate] = useLocation();
  const [showNav, setShowNav] = useState(false);
  const [showFinish, setShowFinish] = useState(false);
  const prevCompleteRef = useRef(state.complete);

  // Save exam result when complete
  useEffect(() => {
    if (state.complete && !prevCompleteRef.current) {
      const domainScores: Record<string, { correct: number; total: number }> = {};
      Object.entries(domainInfo).forEach(([domain]) => {
        const qs = state.questions.filter(q => q.domain === domain);
        const correct = qs.filter(q => state.answers[Number(q.id)] === q.correctAnswer).length;
        domainScores[domain] = { correct, total: qs.length };
      });
      const totalQ = state.questions.length;
      const correct = state.questions.filter(q => state.answers[Number(q.id)] === q.correctAnswer).length;
      const score = totalQ > 0 ? Math.round((correct / totalQ) * 100) : 0;
      addExamResult({ date: Date.now(), score, totalQuestions: totalQ, correct, domainScores, passed: score >= 70 });
      // Record per-question answers for concept confusion analytics
      state.questions.forEach(q => {
        const letter = state.answers[Number(q.id)];
        if (!letter) return;
        const taskItem = q.taskItem ?? `${q.domain}.?`;
        const selectedChoiceText = q.choices.find((c: any) => c.letter === letter)?.text ?? '';
        recordPracticeAnswer({
          questionId: Number(q.id),
          domain: q.domain,
          taskItem,
          selectedAnswer: letter,
          correct: letter === q.correctAnswer,
          correctConcept: getTaskName(taskItem),
          selectedConcept: letter === q.correctAnswer ? null : extractConceptFromText(selectedChoiceText),
        });
      });
      navigate('~/mock-results');
    }
    prevCompleteRef.current = state.complete;
  }, [state.complete]);

  if (!currentQuestion) return null;

  const q = currentQuestion;
  const currentIndex = state.currentIndex;
  const totalQ = state.questions.length;
  const selectedAnswer = state.answers[Number(q.id)];
  const isAnswered = selectedAnswer !== undefined;
  const isRevealed = state.revealed[Number(q.id)];
  const isFlagged = state.flagged[Number(q.id)];
  const isCorrect = selectedAnswer === q.correctAnswer;
  const urgent = state.settings.timeLimitMinutes > 0 && state.timeRemainingSeconds < 600;

  const handlePauseExit = () => {
    pauseExam();
    navigate('/exam');
  };

  const handleFinish = () => {
    finishExam();
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="text-sm font-semibold text-gray-800">
          Question {currentIndex + 1} of {totalQ}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handlePauseExit}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <Pause className="w-3.5 h-3.5" />
            Pause &amp; Exit
          </button>
          <button
            onClick={() => setShowNav(v => !v)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <Grid3x3 className="w-3.5 h-3.5" />
            Review
          </button>
          {state.settings.timeLimitMinutes > 0 && (
            <div className={cn(
              'font-mono text-sm font-bold px-3 py-2 rounded-lg',
              urgent ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'
            )}>
              {formatTime(state.timeRemainingSeconds)}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 max-w-3xl mx-auto w-full px-6 py-8">
        {/* Scenario vignette */}
        {q.scenario && (
          <div className="bg-gray-50 rounded-xl p-5 mb-6 text-sm text-gray-700 leading-relaxed border border-gray-100">
            {q.scenario}
          </div>
        )}

        {/* Question stem */}
        <h2 className="text-xl font-bold text-gray-900 mb-6 leading-snug">
          {q.question.replace(/\*\*/g, '')}
        </h2>

        {/* Choices */}
        <div className="space-y-3 mb-6">
          {q.choices.map(choice => {
            const isSelected = selectedAnswer === choice.letter;
            const isCorrectChoice = choice.letter === q.correctAnswer;
            return (
              <button
                key={choice.letter}
                onClick={() => !isAnswered && submitAnswer(Number(q.id), choice.letter)}
                disabled={isAnswered}
                className={cn(
                  'w-full flex items-start gap-4 px-5 py-4 rounded-xl border-2 text-left transition-all',
                  !isAnswered && 'hover:border-indigo-300 hover:bg-indigo-50/30 cursor-pointer',
                  !isAnswered && 'border-gray-200 bg-white',
                  isAnswered && isSelected && !isRevealed && 'border-indigo-500 bg-indigo-50',
                  isAnswered && isRevealed && isCorrectChoice && 'border-green-400 bg-green-50',
                  isAnswered && isRevealed && isSelected && !isCorrectChoice && 'border-red-400 bg-red-50',
                  isAnswered && isRevealed && !isSelected && !isCorrectChoice && 'border-gray-100 bg-gray-50 opacity-60',
                  isAnswered && !isRevealed && !isSelected && 'border-gray-100 bg-white opacity-60',
                )}
              >
                <span className={cn(
                  'flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold mt-0.5',
                  !isAnswered && 'border-gray-300 text-gray-500',
                  isAnswered && isSelected && !isRevealed && 'border-indigo-600 bg-indigo-600 text-white',
                  isAnswered && isRevealed && isCorrectChoice && 'border-green-500 bg-green-500 text-white',
                  isAnswered && isRevealed && isSelected && !isCorrectChoice && 'border-red-500 bg-red-500 text-white',
                  isAnswered && isRevealed && !isSelected && !isCorrectChoice && 'border-gray-200 text-gray-400',
                  isAnswered && !isRevealed && !isSelected && 'border-gray-200 text-gray-400',
                )}>
                  {choice.letter.toUpperCase()}
                </span>
                <span className="text-sm leading-relaxed text-gray-800">{choice.text}</span>
                {isAnswered && isRevealed && isCorrectChoice && (
                  <CheckCircle2 className="w-5 h-5 text-green-500 ml-auto flex-shrink-0 mt-0.5" />
                )}
                {isAnswered && isRevealed && isSelected && !isCorrectChoice && (
                  <XCircle className="w-5 h-5 text-red-500 ml-auto flex-shrink-0 mt-0.5" />
                )}
              </button>
            );
          })}
        </div>

        {/* Reveal rationale */}
        {isAnswered && !isRevealed && (
          <button
            onClick={() => revealAnswer(Number(q.id))}
            className="w-full flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors mb-4"
          >
            <Eye className="w-4 h-4" />
            Reveal Rationale
          </button>
        )}

        {isRevealed && q.rationale && (
          <div className={cn(
            'rounded-xl p-4 mb-4 border',
            isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
          )}>
            <div className={cn(
              'flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-2',
              isCorrect ? 'text-green-700' : 'text-red-700'
            )}>
              {isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
              {isCorrect ? 'Correct' : 'Incorrect'} — Rationale
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{q.rationale}</p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={prevQuestion}
            disabled={currentIndex === 0}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => toggleFlag(Number(q.id))}
              className={cn(
                'flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-colors',
                isFlagged ? 'border-amber-300 bg-amber-50 text-amber-700' : 'border-gray-200 text-gray-500 hover:bg-gray-50'
              )}
            >
              <Flag className="w-3.5 h-3.5" />
              {isFlagged ? 'Flagged' : 'Flag'}
            </button>

            {currentIndex === totalQ - 1 ? (
              <button
                onClick={() => setShowFinish(true)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-colors"
              >
                <BarChart3 className="w-4 h-4" />
                Finish Exam
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-colors"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Finish confirm modal */}
      {showFinish && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full mx-4 shadow-xl border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <h3 className="font-bold text-gray-900">Finish Exam?</h3>
            </div>
            <p className="text-sm text-gray-600 mb-1">
              You have answered <strong>{Object.keys(state.answers).length}</strong> of <strong>{totalQ}</strong> questions.
            </p>
            {Object.keys(state.answers).length < totalQ && (
              <p className="text-xs text-amber-600 mb-4">
                {totalQ - Object.keys(state.answers).length} unanswered questions will be marked incorrect.
              </p>
            )}
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => setShowFinish(false)}
                className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Continue
              </button>
              <button
                onClick={handleFinish}
                className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Question navigator */}
      {showNav && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40" onClick={() => setShowNav(false)}>
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full mx-4 shadow-xl" onClick={e => e.stopPropagation()}>
            <h3 className="font-bold text-gray-900 mb-4">Question Navigator</h3>
            <div className="grid grid-cols-10 gap-1.5 max-h-64 overflow-y-auto">
              {state.questions.map((q, i) => {
                const ans = state.answers[Number(q.id)];
                const flagged = state.flagged[Number(q.id)];
                return (
                  <button
                    key={Number(q.id)}
                    onClick={() => { navigate('/exam/question'); setShowNav(false); }}
                    className={cn(
                      'w-8 h-8 rounded text-xs font-semibold transition-colors',
                      i === currentIndex && 'ring-2 ring-indigo-500',
                      flagged && 'bg-amber-100 text-amber-700',
                      ans && !flagged && 'bg-indigo-100 text-indigo-700',
                      !ans && !flagged && 'bg-gray-100 text-gray-500',
                    )}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
            <div className="flex items-center gap-4 mt-4 text-xs text-gray-500">
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-indigo-100 inline-block" /> Answered</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-amber-100 inline-block" /> Flagged</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-gray-100 inline-block" /> Unanswered</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Entry ────────────────────────────────────────────────────────────────────
export default function MockExamHubPage() {
  const [location] = useLocation();
  if (location === '/exam/question') return <QuestionView />;
  return <MockExamHome />;
}
