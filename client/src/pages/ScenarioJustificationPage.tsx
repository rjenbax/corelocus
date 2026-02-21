/**
 * ScenarioJustificationPage — Tier 5: Apply / Analyze (L3–4)
 * 30 scenarios × 4 questions: select correct answer + 3 of 9 justifications
 */
import { useState, useMemo, useCallback } from 'react';
import { useLocation } from 'wouter';
import { scenarioItems, type ScenarioItem, type ScenarioQuestion } from '@/data/scenarioJustification';
import { useProgress } from '@/contexts/ProgressContext';
import { ArrowLeft, Brain, CheckCircle2, XCircle, ChevronRight, ChevronLeft, RotateCcw, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type Phase = 'answer' | 'justify' | 'feedback';

export default function ScenarioJustificationPage() {
  const [, navigate] = useLocation();
  const { recordScenarioAnswer, progress } = useProgress();

  const [selectedScenarioIdx, setSelectedScenarioIdx] = useState<number | null>(null);
  const [currentQIdx, setCurrentQIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>('answer');
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [selectedJustifications, setSelectedJustifications] = useState<string[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [sessionScores, setSessionScores] = useState<{ qId: string; answerCorrect: boolean; justScore: number }[]>([]);

  const scenario = selectedScenarioIdx !== null ? scenarioItems[selectedScenarioIdx] : null;
  const question = scenario?.questions[currentQIdx] ?? null;

  const shuffledJustifications = useMemo(() => {
    if (!question) return [];
    return shuffle(question.justifications);
  }, [question]);

  const completedQIds = useMemo(() => {
    return new Set(progress.scenarioJustification.filter(s => s.completed).map(s => `${s.scenarioId}-${s.questionId}`));
  }, [progress.scenarioJustification]);

  const handleAnswerSelect = (choiceId: string) => {
    if (phase !== 'answer') return;
    setSelectedAnswer(choiceId);
  };

  const handleProceedToJustify = () => {
    if (!selectedAnswer) return;
    setPhase('justify');
  };

  const handleJustificationToggle = (justId: string) => {
    if (phase !== 'justify') return;
    setSelectedJustifications(prev => {
      if (prev.includes(justId)) return prev.filter(j => j !== justId);
      if (prev.length >= 3) return prev; // max 3
      return [...prev, justId];
    });
  };

  const handleSubmitJustifications = useCallback(() => {
    if (!question || !scenario || selectedJustifications.length !== 3) return;
    const answerCorrect = selectedAnswer === question.correctChoice;
    const correctJustIds = question.justifications.filter(j => j.isCorrect).map(j => j.id);
    const justScore = selectedJustifications.filter(j => correctJustIds.includes(j)).length;
    setSessionScores(prev => [...prev, { qId: question.id, answerCorrect, justScore }]);
    recordScenarioAnswer(scenario.id, question.id, answerCorrect, justScore);
    setPhase('feedback');
  }, [question, scenario, selectedAnswer, selectedJustifications, recordScenarioAnswer]);

  const handleNextQuestion = useCallback(() => {
    if (!scenario) return;
    if (currentQIdx + 1 >= scenario.questions.length) {
      // Done with this scenario — go back to list
      setSelectedScenarioIdx(null);
      setCurrentQIdx(0);
    } else {
      setCurrentQIdx(i => i + 1);
    }
    setPhase('answer');
    setSelectedAnswer(null);
    setSelectedJustifications([]);
    setShowFeedback(false);
  }, [scenario, currentQIdx]);

  const openScenario = (idx: number) => {
    setSelectedScenarioIdx(idx);
    setCurrentQIdx(0);
    setPhase('answer');
    setSelectedAnswer(null);
    setSelectedJustifications([]);
    setSessionScores([]);
  };

  // ── Scenario detail view ──────────────────────────────────────────────────
  if (scenario && question) {
    const correctJustIds = question.justifications.filter(j => j.isCorrect).map(j => j.id);
    const answerCorrect = selectedAnswer === question.correctChoice;
    const justScore = selectedJustifications.filter(j => correctJustIds.includes(j)).length;
    const totalQs = scenario.questions.length;
    const pct = (currentQIdx / totalQs) * 100;

    return (
      <div className="min-h-screen bg-background">
        <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container flex items-center justify-between h-14">
            <button onClick={() => setSelectedScenarioIdx(null)} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              All Scenarios
            </button>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-medium text-foreground">{scenario.title}</span>
              <span>· Q{currentQIdx + 1}/{totalQs}</span>
            </div>
          </div>
          <div className="h-1 bg-muted">
            <div className="h-full bg-rose-500 transition-all duration-300" style={{ width: `${pct}%` }} />
          </div>
        </header>

        <div className="container py-6 max-w-3xl mx-auto">
          {/* Scenario text */}
          <div className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-5 mb-6">
            <div className="text-xs font-semibold text-rose-600 uppercase tracking-wider mb-2">{scenario.domain}</div>
            <p className="text-sm text-foreground leading-relaxed">{scenario.scenario}</p>
          </div>

          {/* Question stem */}
          <div className="mb-5">
            <div className="text-xs text-muted-foreground mb-1">Question {currentQIdx + 1} of {totalQs}</div>
            <h3 className="text-base font-semibold text-foreground leading-snug">{question.stem}</h3>
          </div>

          {/* Phase: Answer selection */}
          {(phase === 'answer' || phase === 'justify' || phase === 'feedback') && (
            <div className="space-y-2 mb-5">
              <div className="text-xs font-medium text-muted-foreground mb-2">
                {phase === 'answer' ? 'Step 1: Select the correct answer' : 'Answer selected:'}
              </div>
              {question.choices.map(choice => {
                const isSelected = choice.id === selectedAnswer;
                const isCorrect = choice.id === question.correctChoice;
                return (
                  <button
                    key={choice.id}
                    onClick={() => handleAnswerSelect(choice.id)}
                    disabled={phase !== 'answer'}
                    className={cn(
                      "w-full text-left p-3.5 rounded-xl border-2 text-sm transition-all",
                      phase === 'answer' && "hover:border-rose-300 hover:bg-rose-50/50 cursor-pointer",
                      phase === 'answer' && isSelected && "border-rose-500 bg-rose-50",
                      phase === 'answer' && !isSelected && "border-border bg-card",
                      phase !== 'answer' && isCorrect && "border-green-400 bg-green-50",
                      phase !== 'answer' && isSelected && !isCorrect && "border-red-400 bg-red-50",
                      phase !== 'answer' && !isSelected && !isCorrect && "border-border bg-card opacity-50",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className={cn(
                        "flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold",
                        phase === 'answer' && isSelected ? "border-rose-500 text-rose-600" : "border-current text-muted-foreground",
                        phase !== 'answer' && isCorrect && "border-green-500 text-green-600 bg-green-100",
                        phase !== 'answer' && isSelected && !isCorrect && "border-red-500 text-red-600 bg-red-100",
                      )}>
                        {choice.id}
                      </span>
                      <span>{choice.text}</span>
                      {phase !== 'answer' && isCorrect && <CheckCircle2 className="w-4 h-4 text-green-600 ml-auto flex-shrink-0" />}
                      {phase !== 'answer' && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-red-600 ml-auto flex-shrink-0" />}
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {phase === 'answer' && (
            <button
              onClick={handleProceedToJustify}
              disabled={!selectedAnswer}
              className="w-full bg-rose-500 hover:bg-rose-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-medium py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              Confirm Answer → Select Justifications
              <ChevronRight className="w-4 h-4" />
            </button>
          )}

          {/* Phase: Justification selection */}
          {phase === 'justify' && (
            <>
              <div className="mb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs font-medium text-foreground">
                    Step 2: Select the 3 justifications that support your answer
                  </div>
                  <div className={cn(
                    "text-xs font-bold px-2 py-0.5 rounded-full",
                    selectedJustifications.length === 3 ? "bg-green-100 text-green-700" : "bg-muted text-muted-foreground"
                  )}>
                    {selectedJustifications.length}/3 selected
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  You selected <strong>{selectedAnswer}</strong>. Choose exactly 3 statements that justify why {selectedAnswer} is correct.
                </p>
              </div>
              <div className="space-y-2 mb-4">
                {shuffledJustifications.map((just) => {
                  const isSelected = selectedJustifications.includes(just.id);
                  return (
                    <button
                      key={just.id}
                      onClick={() => handleJustificationToggle(just.id)}
                      className={cn(
                        "w-full text-left p-3.5 rounded-xl border-2 text-sm transition-all",
                        isSelected ? "border-rose-400 bg-rose-50" : "border-border bg-card hover:border-rose-200",
                        !isSelected && selectedJustifications.length >= 3 && "opacity-50 cursor-not-allowed",
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <div className={cn(
                          "flex-shrink-0 w-5 h-5 rounded border-2 mt-0.5 transition-colors",
                          isSelected ? "border-rose-500 bg-rose-500" : "border-muted-foreground/40"
                        )}>
                          {isSelected && <CheckCircle2 className="w-full h-full text-white p-0.5" />}
                        </div>
                        <span>{just.text}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
              <button
                onClick={handleSubmitJustifications}
                disabled={selectedJustifications.length !== 3}
                className="w-full bg-rose-500 hover:bg-rose-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-medium py-3 rounded-xl transition-colors"
              >
                Submit ({selectedJustifications.length}/3 selected)
              </button>
            </>
          )}

          {/* Phase: Feedback */}
          {phase === 'feedback' && (
            <>
              <div className={cn(
                "p-4 rounded-xl border mb-4",
                answerCorrect ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
              )}>
                <div className={cn("font-semibold text-sm mb-1", answerCorrect ? "text-green-700" : "text-red-700")}>
                  Answer: {answerCorrect ? '✓ Correct' : '✗ Incorrect'} · Justifications: {justScore}/3 correct
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{question.explanation}</p>
              </div>

              {/* Show all justifications with correct/incorrect */}
              <div className="space-y-2 mb-4">
                <div className="text-xs font-medium text-foreground mb-1">Justification review:</div>
                {shuffledJustifications.map(just => {
                  const wasSelected = selectedJustifications.includes(just.id);
                  const isCorrectJust = just.isCorrect;
                  return (
                    <div
                      key={just.id}
                      className={cn(
                        "p-3 rounded-lg border text-xs flex items-start gap-2",
                        isCorrectJust ? "border-green-200 bg-green-50" : "border-red-100 bg-red-50/50",
                      )}
                    >
                      {isCorrectJust
                        ? <CheckCircle2 className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                        : <XCircle className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                      }
                      <span className={isCorrectJust ? "text-green-800" : "text-red-700/70"}>
                        {just.text}
                        {wasSelected && !isCorrectJust && <span className="ml-1 font-medium">(you selected this)</span>}
                        {just.justifiesChoice && !isCorrectJust && (
                          <span className="ml-1 text-muted-foreground">→ justifies {just.justifiesChoice}</span>
                        )}
                      </span>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={handleNextQuestion}
                className="w-full flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-medium py-3 rounded-xl transition-colors"
              >
                {currentQIdx + 1 >= scenario.questions.length ? 'Back to Scenarios' : 'Next Question'}
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  // ── Scenario list view ────────────────────────────────────────────────────
  const completedScenarioCount = scenarioItems.filter(s =>
    s.questions.every(q => completedQIds.has(`${s.id}-${q.id}`))
  ).length;

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
              <Brain className="w-4 h-4 text-rose-600" />
              <span className="font-semibold text-sm">Scenario Justification</span>
              <span className="text-xs bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full">Tier 5</span>
            </div>
          </div>
          <div className="text-xs text-muted-foreground">
            {completedScenarioCount} / {scenarioItems.length} completed
          </div>
        </div>
      </header>

      <div className="container py-6 max-w-3xl mx-auto">
        {/* Instructions */}
        <div className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-5 mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-foreground mb-1">How it works</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Each scenario has 4 questions. For each question: <strong>first select the correct answer</strong>, 
                then <strong>select exactly 3 justifications</strong> from a pool of 9 that support your answer. 
                The other 6 justifications support the incorrect answer choices.
              </p>
            </div>
          </div>
        </div>

        {/* Scenario grid */}
        <div className="space-y-3">
          {scenarioItems.map((item, idx) => {
            const completedQs = item.questions.filter(q => completedQIds.has(`${item.id}-${q.id}`)).length;
            const isFullyComplete = completedQs === item.questions.length;
            const isStarted = completedQs > 0;

            return (
              <button
                key={item.id}
                onClick={() => openScenario(idx)}
                className={cn(
                  "w-full text-left p-5 rounded-xl border-2 transition-all hover:shadow-md hover:-translate-y-0.5 group",
                  isFullyComplete ? "border-green-300 bg-green-50" : "border-border bg-card hover:border-rose-300"
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-rose-600 bg-rose-100 px-2 py-0.5 rounded-full">
                        {item.domain}
                      </span>
                      {isFullyComplete && <CheckCircle2 className="w-4 h-4 text-green-600" />}
                    </div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">{item.scenario.substring(0, 120)}...</p>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <div className="text-xs text-muted-foreground mb-1">{item.questions.length} questions</div>
                    {isStarted && (
                      <div className={cn("text-xs font-medium", isFullyComplete ? "text-green-600" : "text-rose-600")}>
                        {completedQs}/{item.questions.length} done
                      </div>
                    )}
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-rose-600 transition-colors mt-1 ml-auto" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
