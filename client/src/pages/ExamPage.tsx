/**
 * BCBA Case Study Exam — Main Exam Page
 * Design: Academic Warmth — split layout: sidebar (case context) + main (question)
 * Forest green accents, Lora serif for case narrative, DM Sans for UI
 */
import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { useExam } from '@/contexts/ExamContext';
import { allQuestions } from '@/data/allQuestions';
import { phaseInfo, domainInfo } from '@/data/allQuestions';
import { lifecyclePhases } from '@/data/caseNarrative';
import {
  ChevronLeft, ChevronRight, Brain, CheckCircle2, XCircle,
  BookOpen, BarChart3, Menu, X, Eye, Flag
} from 'lucide-react';

const phaseOrder = ['assessment', 'fba', 'treatment-planning', 'implementation', 'evaluation'];

function getPhaseForIndex(index: number): string {
  return allQuestions[index]?.phase || 'assessment';
}

function ProgressBar({ value, max, color = '#4A7C59' }: { value: number; max: number; color?: string }) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;
  return (
    <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-500"
        style={{ width: `${pct}%`, backgroundColor: color }}
      />
    </div>
  );
}

export default function ExamPage() {
  const [, navigate] = useLocation();
  const {
    state,
    currentQuestion,
    totalQuestions,
    submitAnswer,
    revealAnswer,
    nextQuestion,
    prevQuestion,
    goToQuestion,
    finishExam,
    getDomainScores,
  } = useExam();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (!state.examStarted) navigate('/dashboard');
    if (state.examComplete) navigate('/results');
  }, [state.examStarted, state.examComplete, navigate]);

  if (!currentQuestion) return null;

  const currentPhase = getPhaseForIndex(state.currentQuestionIndex);
  const phaseData = phaseInfo[currentPhase];
  const lifecyclePhase = lifecyclePhases.find(p => p.id === currentPhase || p.id === currentPhase.replace('-discharge', ''));
  const domainData = domainInfo[currentQuestion.domain];

  const selectedAnswer = state.answers[currentQuestion.id as number];
  const isRevealed = state.revealed[currentQuestion.id as number];
  const isAnswered = selectedAnswer !== undefined;
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  const answeredCount = Object.keys(state.answers).length;
  const domainScores = getDomainScores();

  // Group questions by phase for the navigator
  const questionsByPhase = phaseOrder.map(phase => ({
    phase,
    label: phaseInfo[phase]?.label || phase,
    questions: allQuestions.map((q, i) => ({ q, i })).filter(({ q }) => q.phase === phase),
  }));

  const handleFinish = () => {
    finishExam();
    navigate('/results');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top bar */}
      <header className="border-b border-border bg-card/90 backdrop-blur-sm sticky top-0 z-40 h-14">
        <div className="flex items-center h-full px-4 gap-3">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            <Brain className="w-4 h-4" />
            <span className="hidden sm:inline font-medium">BehaviorPrep</span>
          </button>
          <span className="text-border">|</span>

          {/* Phase breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground overflow-hidden">
            <span className="hidden md:inline truncate">{phaseData?.label}</span>
          </div>

          <div className="ml-auto flex items-center gap-2">
            {/* Score */}
            <div className="hidden sm:flex items-center gap-1.5 text-sm">
              <span className="font-semibold text-foreground">{state.score}</span>
              <span className="text-muted-foreground">/ {answeredCount}</span>
              {answeredCount > 0 && (
                <span className="text-xs text-muted-foreground">
                  ({Math.round((state.score / answeredCount) * 100)}%)
                </span>
              )}
            </div>

            {/* Progress */}
            <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
              <span>{state.currentQuestionIndex + 1} / {totalQuestions}</span>
            </div>

            {/* Nav toggle */}
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="p-2 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              title="Question Navigator"
            >
              <BarChart3 className="w-4 h-4" />
            </button>

            {/* Case sidebar toggle */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              title="Case Narrative"
            >
              <BookOpen className="w-4 h-4" />
            </button>

            {/* Finish button */}
            <button
              onClick={handleFinish}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs bg-primary text-primary-foreground px-3 py-1.5 rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              <Flag className="w-3 h-3" />
              Finish
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Question Navigator Panel */}
        {navOpen && (
          <div className="absolute inset-0 z-30 flex">
            <div className="w-full max-w-sm bg-card border-r border-border overflow-y-auto shadow-xl">
              <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between">
                <h2 className="font-semibold text-sm">Question Navigator</h2>
                <button onClick={() => setNavOpen(false)} className="p-1 rounded hover:bg-muted">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-4 space-y-5">
                {questionsByPhase.map(({ phase, label, questions }) => (
                  <div key={phase}>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">{label.replace(/Phase \d+: /, '')}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {questions.map(({ q, i }) => {
                        const answered = q.id in state.answers;
                        const correct = state.answers[q.id as number] === q.correctAnswer;
                        const isCurrent = i === state.currentQuestionIndex;
                        return (
                          <button
                            key={q.id}
                            onClick={() => { goToQuestion(i); setNavOpen(false); }}
                            className={`w-8 h-8 rounded text-xs font-semibold transition-all ${
                              isCurrent
                                ? 'ring-2 ring-primary bg-primary text-primary-foreground'
                                : answered
                                ? correct
                                  ? 'bg-violet-100 text-violet-800 border border-violet-300'
                                  : 'bg-red-100 text-red-800 border border-red-300'
                                : 'bg-muted text-muted-foreground hover:bg-accent'
                            }`}
                          >
                            {i + 1}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
              {/* Domain scores summary */}
              <div className="p-4 border-t border-border">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Domain Progress</p>
                <div className="space-y-2">
                  {domainScores.map(ds => (
                    <div key={ds.domain}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-foreground font-medium">{ds.domain}. {ds.domainName.split(' ').slice(0, 3).join(' ')}</span>
                        <span className="text-muted-foreground">{ds.correct}/{ds.total}</span>
                      </div>
                      <ProgressBar value={ds.correct} max={ds.total} color={domainInfo[ds.domain]?.color} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-1 bg-black/30" onClick={() => setNavOpen(false)} />
          </div>
        )}

        {/* Case Narrative Sidebar */}
        {sidebarOpen && (
          <div className="absolute inset-0 z-30 flex justify-end">
            <div className="flex-1 bg-black/30" onClick={() => setSidebarOpen(false)} />
            <div className="w-full max-w-md bg-card border-l border-border overflow-y-auto shadow-xl">
              <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between">
                <h2 className="font-semibold text-sm">Case Narrative</h2>
                <button onClick={() => setSidebarOpen(false)} className="p-1 rounded hover:bg-muted">
                  <X className="w-4 h-4" />
                </button>
              </div>
              {lifecyclePhase && (
                <div className="p-5">
                  <div className="phase-pill mb-4 w-fit">
                    <span>{lifecyclePhase.title}</span>
                  </div>
                  <p className="case-text text-sm whitespace-pre-line leading-relaxed">
                    {lifecyclePhase.narrative}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Main Question Area */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-4 py-6 md:py-8">

            {/* Phase + Domain badges */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <div className="phase-pill">
                <span>{phaseData?.label?.replace(/Phase \d+: /, '') || currentPhase}</span>
              </div>
              <div
                className="domain-badge text-white"
                style={{ backgroundColor: domainData?.color || '#4A7C59' }}
              >
                Domain {currentQuestion.domain} · {currentQuestion.taskItem}
              </div>
              <div className="domain-badge bg-muted text-muted-foreground border border-border">
                {currentQuestion.bloomsLevel === 'application' ? 'Bloom\'s L3: Apply' : 'Bloom\'s L4: Analyze'}
              </div>
            </div>

            {/* Question number */}
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs text-muted-foreground font-medium">
                Question {state.currentQuestionIndex + 1} of {totalQuestions}
              </p>
              <div className="w-32">
                <ProgressBar
                  value={state.currentQuestionIndex + 1}
                  max={totalQuestions}
                  color={domainData?.color}
                />
              </div>
            </div>

            {/* Scenario box */}
            <div className="bg-teal-50/60 border border-teal-200/70 rounded-xl p-5 mb-5">
              <p className="text-xs font-semibold text-teal-800 uppercase tracking-wide mb-2">Clinical Scenario</p>
              <p className="case-text text-sm">{currentQuestion.scenario}</p>
            </div>

            {/* Question */}
            <div className="mb-5">
              <p
                className="question-text text-foreground"
                dangerouslySetInnerHTML={{ __html: currentQuestion.question.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
              />
            </div>

            {/* Answer choices */}
            <div className="space-y-2.5 mb-6">
              {currentQuestion.choices.map((choice) => {
                let btnClass = 'choice-btn';
                if (isRevealed) {
                  if (choice.letter === currentQuestion.correctAnswer) btnClass += ' correct';
                  else if (choice.letter === selectedAnswer && choice.letter !== currentQuestion.correctAnswer) btnClass += ' incorrect';
                } else if (choice.letter === selectedAnswer) {
                  btnClass += ' selected';
                }

                return (
                  <button
                    key={choice.letter}
                    className={btnClass}
                    onClick={() => !isRevealed && submitAnswer(choice.letter)}
                    disabled={isRevealed}
                  >
                    <span className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5 ${
                      isRevealed && choice.letter === currentQuestion.correctAnswer
                        ? 'bg-violet-700 text-white'
                        : isRevealed && choice.letter === selectedAnswer && choice.letter !== currentQuestion.correctAnswer
                        ? 'bg-red-500 text-white'
                        : choice.letter === selectedAnswer
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {choice.letter.toUpperCase()}
                    </span>
                    <span className="text-sm leading-relaxed text-foreground">{choice.text}</span>
                    {isRevealed && choice.letter === currentQuestion.correctAnswer && (
                      <CheckCircle2 className="w-4 h-4 text-violet-700 flex-shrink-0 ml-auto mt-0.5" />
                    )}
                    {isRevealed && choice.letter === selectedAnswer && choice.letter !== currentQuestion.correctAnswer && (
                      <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 ml-auto mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Reveal / Rationale */}
            {isAnswered && !isRevealed && (
              <button
                onClick={revealAnswer}
                className="flex items-center gap-2 text-sm text-primary font-medium hover:underline mb-4"
              >
                <Eye className="w-4 h-4" />
                Reveal Answer & Rationale
              </button>
            )}

            {isRevealed && (
              <div className={`rounded-xl p-5 mb-5 border ${isCorrect ? 'bg-violet-50/70 border-violet-200' : 'bg-red-50/60 border-red-200'}`}>
                <div className="flex items-center gap-2 mb-2">
                  {isCorrect
                    ? <CheckCircle2 className="w-4 h-4 text-violet-700" />
                    : <XCircle className="w-4 h-4 text-red-500" />
                  }
                  <span className={`text-sm font-semibold ${isCorrect ? 'text-violet-800' : 'text-red-600'}`}>
                    {isCorrect ? 'Correct!' : `Incorrect — Correct answer: ${currentQuestion.correctAnswer.toUpperCase()}`}
                  </span>
                </div>
                <p className="case-text text-sm text-foreground/80">{currentQuestion.rationale}</p>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between pt-2 border-t border-border">
              <button
                onClick={prevQuestion}
                disabled={state.currentQuestionIndex === 0}
                className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors px-3 py-2 rounded-lg hover:bg-muted"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>

              <div className="flex items-center gap-2">
                {isAnswered && (
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    isCorrect ? 'bg-violet-100 text-violet-800' : 'bg-red-100 text-red-600'
                  }`}>
                    {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                  </span>
                )}
              </div>

              {state.currentQuestionIndex < totalQuestions - 1 ? (
                <button
                  onClick={nextQuestion}
                  className="flex items-center gap-1.5 text-sm font-medium text-primary hover:opacity-80 transition-opacity px-3 py-2 rounded-lg hover:bg-primary/10"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleFinish}
                  className="flex items-center gap-1.5 text-sm font-semibold bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Flag className="w-3.5 h-3.5" />
                  Finish Exam
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
