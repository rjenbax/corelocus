/**
 * ScenarioJustificationPage — Tier 5: Apply / Analyze (L3–4)
 * 34 scenarios × 79 questions: select correct answer + 3 of 9 justifications
 *
 * Design: Academic Warmth — warm cream, rose accent, editorial layout
 *
 * Views:
 *   - "Scenarios" tab: grid of all 34 scenarios with progress
 *   - "Missed Items" tab: collapsible review of every incorrectly answered question
 *   - Scenario detail: question flow (answer → justify → feedback)
 */
import { useState, useMemo, useCallback } from 'react';
import { useLocation } from 'wouter';
import { scenarioItems, type ScenarioItem, type ScenarioQuestion } from '@/data/scenarioJustification';
import { useProgress } from '@/contexts/ProgressContext';
import {
  ArrowLeft, Brain, CheckCircle2, XCircle, ChevronRight, ChevronDown, ChevronUp,
  RotateCcw, AlertCircle, BookOpen, ClipboardX, Filter
} from 'lucide-react';
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
type ListTab = 'scenarios' | 'missed';

// ─── Missed Items Panel ───────────────────────────────────────────────────────

interface MissedEntry {
  scenario: ScenarioItem;
  question: ScenarioQuestion;
  answerCorrect: boolean;
  justificationScore: number; // 0–3
}

function MissedItemsPanel({
  missed,
  onRetry,
}: {
  missed: MissedEntry[];
  onRetry: (scenarioIdx: number) => void;
}) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [filterMode, setFilterMode] = useState<'all' | 'wrong-answer' | 'wrong-just'>('all');

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const expandAll = () => setExpandedIds(new Set(missed.map(m => m.question.id)));
  const collapseAll = () => setExpandedIds(new Set());

  const filtered = useMemo(() => {
    if (filterMode === 'wrong-answer') return missed.filter(m => !m.answerCorrect);
    if (filterMode === 'wrong-just') return missed.filter(m => m.answerCorrect && m.justificationScore < 3);
    return missed;
  }, [missed, filterMode]);

  if (missed.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <CheckCircle2 className="w-12 h-12 text-violet-400 mb-4" />
        <h3 className="font-bold text-foreground text-lg mb-2">No missed items yet</h3>
        <p className="text-sm text-muted-foreground max-w-xs">
          Complete some scenarios and any questions you miss will appear here for review.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Stats row */}
      <div className="flex items-center gap-3 mb-5 flex-wrap">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-50 border border-red-200">
          <XCircle className="w-3.5 h-3.5 text-red-500" />
          <span className="text-xs font-medium text-red-700">
            {missed.filter(m => !m.answerCorrect).length} wrong answers
          </span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-teal-50 border border-teal-200">
          <AlertCircle className="w-3.5 h-3.5 text-teal-600" />
          <span className="text-xs font-medium text-teal-800">
            {missed.filter(m => m.answerCorrect && m.justificationScore < 3).length} partial justifications
          </span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <button onClick={expandAll} className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2">
            Expand all
          </button>
          <span className="text-muted-foreground">·</span>
          <button onClick={collapseAll} className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2">
            Collapse all
          </button>
        </div>
      </div>

      {/* Filter pills */}
      <div className="flex items-center gap-2 mb-5 flex-wrap">
        <Filter className="w-3.5 h-3.5 text-muted-foreground" />
        {(['all', 'wrong-answer', 'wrong-just'] as const).map(mode => (
          <button
            key={mode}
            onClick={() => setFilterMode(mode)}
            className={cn(
              "text-xs font-medium px-3 py-1 rounded-full border transition-colors",
              filterMode === mode
                ? "bg-rose-500 text-white border-rose-500"
                : "border-border bg-card text-muted-foreground hover:border-rose-300"
            )}
          >
            {mode === 'all' ? `All (${missed.length})` : mode === 'wrong-answer' ? 'Wrong Answer' : 'Partial Justifications'}
          </button>
        ))}
      </div>

      {/* Missed items list */}
      <div className="space-y-3">
        {filtered.map((entry) => {
          const { scenario, question } = entry;
          const isExpanded = expandedIds.has(question.id);
          const correctJustifications = question.justifications.filter(j => j.isCorrect);
          const correctChoice = question.choices.find(c => c.id === question.correctChoice);
          const scenarioIdx = scenarioItems.findIndex(s => s.id === scenario.id);

          return (
            <div
              key={question.id}
              className={cn(
                "rounded-xl border-2 overflow-hidden transition-all duration-200",
                !entry.answerCorrect ? "border-red-200" : "border-teal-200"
              )}
            >
              {/* Header row — always visible */}
              <button
                onClick={() => toggleExpand(question.id)}
                className={cn(
                  "w-full text-left px-4 py-3.5 flex items-start gap-3 transition-colors",
                  !entry.answerCorrect ? "bg-red-50 hover:bg-red-100/60" : "bg-teal-50 hover:bg-teal-100/60"
                )}
              >
                {/* Status icon */}
                <div className="flex-shrink-0 mt-0.5">
                  {!entry.answerCorrect
                    ? <XCircle className="w-4 h-4 text-red-500" />
                    : <AlertCircle className="w-4 h-4 text-teal-600" />
                  }
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0 text-left">
                  <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                    <span className="text-xs font-medium text-rose-600 bg-rose-100 px-2 py-0.5 rounded-full">
                      {scenario.domain}
                    </span>
                    <span className="text-xs text-muted-foreground font-medium">{scenario.title}</span>
                  </div>
                  <p className="text-sm font-medium text-foreground leading-snug line-clamp-2">{question.stem}</p>
                  <div className="flex items-center gap-3 mt-1.5">
                    {!entry.answerCorrect && (
                      <span className="text-xs text-red-600 font-medium">Wrong answer selected</span>
                    )}
                    {entry.answerCorrect && entry.justificationScore < 3 && (
                      <span className="text-xs text-teal-700 font-medium">
                        {entry.justificationScore}/3 justifications correct
                      </span>
                    )}
                  </div>
                </div>

                {/* Expand chevron */}
                <div className="flex-shrink-0 mt-0.5">
                  {isExpanded
                    ? <ChevronUp className="w-4 h-4 text-muted-foreground" />
                    : <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  }
                </div>
              </button>

              {/* Expanded review content */}
              {isExpanded && (
                <div className="px-4 pb-5 pt-4 bg-card border-t border-border space-y-4">
                  {/* Scenario context */}
                  <div className="bg-rose-50 border border-rose-200 rounded-lg p-3">
                    <p className="text-xs font-semibold text-rose-600 uppercase tracking-wide mb-1">Scenario Context</p>
                    <p className="text-xs text-foreground leading-relaxed">{scenario.scenario}</p>
                  </div>

                  {/* Question stem */}
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Question</p>
                    <p className="text-sm font-medium text-foreground leading-snug">{question.stem}</p>
                  </div>

                  {/* Answer choices — highlight correct */}
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Answer Choices</p>
                    <div className="space-y-1.5">
                      {question.choices.map(choice => {
                        const isCorrect = choice.id === question.correctChoice;
                        return (
                          <div
                            key={choice.id}
                            className={cn(
                              "flex items-start gap-2.5 px-3 py-2.5 rounded-lg border text-sm",
                              isCorrect
                                ? "border-violet-300 bg-violet-50"
                                : "border-border bg-muted/30 opacity-60"
                            )}
                          >
                            <span className={cn(
                              "flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold",
                              isCorrect ? "border-violet-600 text-violet-700 bg-violet-100" : "border-muted-foreground/40 text-muted-foreground"
                            )}>
                              {choice.id}
                            </span>
                            <span className={isCorrect ? "text-violet-800 font-medium" : "text-muted-foreground"}>
                              {choice.text}
                            </span>
                            {isCorrect && <CheckCircle2 className="w-4 h-4 text-violet-600 flex-shrink-0 ml-auto mt-0.5" />}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Explanation */}
                  <div className="bg-violet-50 border border-violet-200 rounded-lg p-3">
                    <p className="text-xs font-semibold text-violet-800 uppercase tracking-wide mb-1">
                      Why {question.correctChoice} is correct
                    </p>
                    <p className="text-xs text-violet-800 leading-relaxed">{question.explanation}</p>
                  </div>

                  {/* The 3 correct justifications */}
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      The 3 Correct Justifications
                    </p>
                    <div className="space-y-2">
                      {correctJustifications.map((just, i) => (
                        <div
                          key={just.id}
                          className="flex items-start gap-2.5 px-3 py-2.5 rounded-lg border border-violet-200 bg-violet-50"
                        >
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-violet-600 text-white flex items-center justify-center text-[10px] font-bold mt-0.5">
                            {i + 1}
                          </span>
                          <p className="text-xs text-violet-800 leading-relaxed">{just.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Retry button */}
                  <button
                    onClick={() => onRetry(scenarioIdx)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 border-rose-200 bg-rose-50 text-rose-700 text-sm font-medium hover:bg-rose-100 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Retry this scenario
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function ScenarioJustificationPage() {
  const [, navigate] = useLocation();
  const { recordScenarioAnswer, progress } = useProgress();

  const [activeTab, setActiveTab] = useState<ListTab>('scenarios');
  const [selectedScenarioIdx, setSelectedScenarioIdx] = useState<number | null>(null);
  const [currentQIdx, setCurrentQIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>('answer');
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [selectedJustifications, setSelectedJustifications] = useState<string[]>([]);
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

  // Build missed items list from progress
  const missedItems = useMemo((): MissedEntry[] => {
    const entries: MissedEntry[] = [];
    progress.scenarioJustification.forEach(p => {
      if (!p.completed) return;
      const isMissed = !p.correct || p.justificationScore < 3;
      if (!isMissed) return;
      const sc = scenarioItems.find(s => s.id === p.scenarioId);
      if (!sc) return;
      const q = sc.questions.find(q => q.id === p.questionId);
      if (!q) return;
      entries.push({
        scenario: sc,
        question: q,
        answerCorrect: p.correct,
        justificationScore: p.justificationScore,
      });
    });
    return entries;
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
      if (prev.length >= 3) return prev;
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
      setSelectedScenarioIdx(null);
      setCurrentQIdx(0);
    } else {
      setCurrentQIdx(i => i + 1);
    }
    setPhase('answer');
    setSelectedAnswer(null);
    setSelectedJustifications([]);
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
            <button
              onClick={() => setSelectedScenarioIdx(null)}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
            >
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
                      phase !== 'answer' && isCorrect && "border-violet-400 bg-violet-50",
                      phase !== 'answer' && isSelected && !isCorrect && "border-red-400 bg-red-50",
                      phase !== 'answer' && !isSelected && !isCorrect && "border-border bg-card opacity-50",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className={cn(
                        "flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold",
                        phase === 'answer' && isSelected ? "border-rose-500 text-rose-600" : "border-current text-muted-foreground",
                        phase !== 'answer' && isCorrect && "border-violet-600 text-violet-700 bg-violet-100",
                        phase !== 'answer' && isSelected && !isCorrect && "border-red-500 text-red-600 bg-red-100",
                      )}>
                        {choice.id}
                      </span>
                      <span>{choice.text}</span>
                      {phase !== 'answer' && isCorrect && <CheckCircle2 className="w-4 h-4 text-violet-700 ml-auto flex-shrink-0" />}
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
                    selectedJustifications.length === 3 ? "bg-violet-100 text-violet-800" : "bg-muted text-muted-foreground"
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
                answerCorrect ? "bg-violet-50 border-violet-200" : "bg-red-50 border-red-200"
              )}>
                <div className={cn("font-semibold text-sm mb-1", answerCorrect ? "text-violet-800" : "text-red-700")}>
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
                        isCorrectJust ? "border-violet-200 bg-violet-50" : "border-red-100 bg-red-50/50",
                      )}
                    >
                      {isCorrectJust
                        ? <CheckCircle2 className="w-3.5 h-3.5 text-violet-700 flex-shrink-0 mt-0.5" />
                        : <XCircle className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                      }
                      <span className={isCorrectJust ? "text-violet-800" : "text-red-700/70"}>
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

  // ── Scenario list / Missed Items view ─────────────────────────────────────
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

        {/* Tab bar */}
        <div className="container border-t border-border">
          <div className="flex gap-0">
            <button
              onClick={() => setActiveTab('scenarios')}
              className={cn(
                "flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors",
                activeTab === 'scenarios'
                  ? "border-rose-500 text-rose-600"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Scenarios
            </button>
            <button
              onClick={() => setActiveTab('missed')}
              className={cn(
                "flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors",
                activeTab === 'missed'
                  ? "border-rose-500 text-rose-600"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              <ClipboardX className="w-3.5 h-3.5" />
              Missed Items
              {missedItems.length > 0 && (
                <span className={cn(
                  "ml-1 text-xs font-bold px-1.5 py-0.5 rounded-full",
                  activeTab === 'missed' ? "bg-rose-100 text-rose-700" : "bg-red-100 text-red-600"
                )}>
                  {missedItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="container py-6 max-w-3xl mx-auto">
        {/* ── Scenarios tab ── */}
        {activeTab === 'scenarios' && (
          <>
            {/* Instructions */}
            <div className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-5 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">How it works</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Each scenario has multiple questions. For each question: <strong>first select the correct answer</strong>,
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
                      isFullyComplete ? "border-violet-300 bg-violet-50" : "border-border bg-card hover:border-rose-300"
                    )}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-medium text-rose-600 bg-rose-100 px-2 py-0.5 rounded-full">
                            {item.domain}
                          </span>
                          {isFullyComplete && <CheckCircle2 className="w-4 h-4 text-violet-700" />}
                        </div>
                        <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                        <p className="text-xs text-muted-foreground line-clamp-2">{item.scenario.substring(0, 120)}...</p>
                      </div>
                      <div className="flex-shrink-0 text-right">
                        <div className="text-xs text-muted-foreground mb-1">{item.questions.length} questions</div>
                        {isStarted && (
                          <div className={cn("text-xs font-medium", isFullyComplete ? "text-violet-700" : "text-rose-600")}>
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
          </>
        )}

        {/* ── Missed Items tab ── */}
        {activeTab === 'missed' && (
          <MissedItemsPanel
            missed={missedItems}
            onRetry={(idx) => {
              openScenario(idx);
            }}
          />
        )}
      </div>
    </div>
  );
}
