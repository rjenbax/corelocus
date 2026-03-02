/**
 * TaskItemProgress — Dashboard section showing all BACB task items (A.1–I.7)
 * color-coded by aggregated performance across all 6 tiers.
 *
 * Design: Academic Warmth — compact grid, domain-grouped, color-coded status badges
 *
 * Status levels:
 *   not-started  → gray
 *   seen         → blue (flashcard seen OR rapid recall attempted, no correct answers yet)
 *   learning     → amber (some correct but accuracy < 70%)
 *   strong       → green (accuracy ≥ 70% across tools)
 */
import { useMemo, useState } from 'react';
import { useProgress } from '@/contexts/ProgressContext';
import { useExam } from '@/contexts/ExamContext';
import { ALL_TASK_ITEMS, DOMAIN_NAMES, DOMAIN_COLORS } from '@/data/taskList';
import { flashcards } from '@/data/flashcards';
import { rapidRecallItems } from '@/data/rapidRecall';
import { allQuestions } from '@/data/allQuestions';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';

type StatusLevel = 'not-started' | 'seen' | 'learning' | 'strong';

interface TaskItemStats {
  code: string;
  domain: string;
  label: string;
  status: StatusLevel;
  accuracy: number; // 0–100
  sources: string[]; // which tools contributed data
}

function useTaskItemStats(): TaskItemStats[] {
  const { progress } = useProgress();
  const { state: examState } = useExam();

  return useMemo(() => {
    // Build lookup maps
    // Flashcards: cardId → domain (flashcards no longer carry specific task codes)
    // Credit the first task item in the card's domain as a proxy
    const fcByTask: Record<string, { seen: number; mastered: number }> = {};
    flashcards.forEach(fc => {
      const domainItems = ALL_TASK_ITEMS.filter(t => t.domain === fc.domain);
      const key = domainItems.length > 0 ? domainItems[0].code : fc.domain;
      if (!fcByTask[key]) fcByTask[key] = { seen: 0, mastered: 0 };
      const p = progress.flashcards.find(f => f.cardId === fc.id);
      if (p) {
        fcByTask[key].seen += 1;
        if (p.mastered) fcByTask[key].mastered += 1;
      }
    });

    // Rapid Recall: termId → taskItem
    const rrByTask: Record<string, { correct: number; total: number }> = {};
    rapidRecallItems.forEach(item => {
      if (!item.taskItem) return;
      if (!rrByTask[item.taskItem]) rrByTask[item.taskItem] = { correct: 0, total: 0 };
      const p = progress.rapidRecall.find(r => r.termId === item.id);
      if (p) {
        if (item.taskItem) rrByTask[item.taskItem].correct += p.correct;
        if (item.taskItem) rrByTask[item.taskItem].total += p.correct + p.incorrect;
      }
    });

    // Exam: questionId → taskItem (from allQuestions)
    const examByTask: Record<string, { correct: number; total: number }> = {};
    allQuestions.forEach(q => {
      if (!examByTask[q.taskItem]) examByTask[q.taskItem] = { correct: 0, total: 0 };
      if (q.id in examState.answers) {
        examByTask[q.taskItem].total += 1;
        if (examState.answers[q.id as number] === q.correctAnswer) {
          examByTask[q.taskItem].correct += 1;
        }
      }
    });

    return ALL_TASK_ITEMS.map(item => {
      const fc = fcByTask[item.code];
      const rr = rrByTask[item.code];
      const ex = examByTask[item.code];

      const sources: string[] = [];
      let totalCorrect = 0;
      let totalAttempts = 0;
      let anySeen = false;

      // Flashcard contribution: mastered = correct, seen = attempted
      if (fc && fc.seen > 0) {
        anySeen = true;
        sources.push('Flashcards');
        totalCorrect += fc.mastered;
        totalAttempts += fc.seen;
      }

      // Rapid Recall contribution
      if (rr && rr.total > 0) {
        anySeen = true;
        sources.push('Rapid Recall');
        totalCorrect += rr.correct;
        totalAttempts += rr.total;
      }

      // Exam contribution
      if (ex && ex.total > 0) {
        anySeen = true;
        sources.push('Case Exam');
        totalCorrect += ex.correct;
        totalAttempts += ex.total;
      }

      const accuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

      let status: StatusLevel;
      if (!anySeen) {
        status = 'not-started';
      } else if (totalAttempts === 0) {
        status = 'seen';
      } else if (accuracy >= 70) {
        status = 'strong';
      } else if (accuracy > 0) {
        status = 'learning';
      } else {
        status = 'seen';
      }

      return {
        code: item.code,
        domain: item.domain,
        label: item.label,
        status,
        accuracy,
        sources,
      };
    });
  }, [progress, examState.answers]);
}

const STATUS_STYLES: Record<StatusLevel, { cell: string; dot: string; label: string }> = {
  'not-started': {
    cell: 'bg-muted/40 border-border text-muted-foreground hover:bg-muted/60',
    dot: 'bg-muted-foreground/40',
    label: 'Not Started',
  },
  seen: {
    cell: 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100',
    dot: 'bg-blue-400',
    label: 'Seen',
  },
  learning: {
    cell: 'bg-teal-50 border-teal-200 text-teal-800 hover:bg-teal-100',
    dot: 'bg-teal-500',
    label: 'Learning',
  },
  strong: {
    cell: 'bg-violet-50 border-violet-200 text-violet-800 hover:bg-violet-100',
    dot: 'bg-violet-600',
    label: 'Strong',
  },
};

export default function TaskItemProgress() {
  const stats = useTaskItemStats();
  const [expandedDomain, setExpandedDomain] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<string | null>(null);

  const domains = Object.keys(DOMAIN_NAMES);

  // Summary counts
  const counts = useMemo(() => {
    const c = { 'not-started': 0, seen: 0, learning: 0, strong: 0 };
    stats.forEach(s => c[s.status]++);
    return c;
  }, [stats]);

  const totalItems = stats.length;
  const masteredPct = Math.round(((counts.strong) / totalItems) * 100);

  return (
    <div className="mt-10 border border-border rounded-xl overflow-hidden">
      {/* Header */}
      <div className="bg-card px-5 py-4 border-b border-border flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-foreground">Task Item Progress</h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            All {totalItems} BACB 6th Edition task items — aggregated across Flashcards, Rapid Recall, and Case Exam
          </p>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-muted-foreground/40 inline-block" />
            <span className="text-muted-foreground">Not started ({counts['not-started']})</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
            <span className="text-muted-foreground">Seen ({counts.seen})</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-teal-500 inline-block" />
            <span className="text-muted-foreground">Learning ({counts.learning})</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-violet-600 inline-block" />
            <span className="text-muted-foreground">Strong ({counts.strong})</span>
          </span>
        </div>
      </div>

      {/* Overall progress bar */}
      <div className="px-5 py-3 bg-muted/20 border-b border-border flex items-center gap-3">
        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-violet-600 rounded-full transition-all duration-500"
            style={{ width: `${masteredPct}%` }}
          />
        </div>
        <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
          {counts.strong} of {totalItems} strong ({masteredPct}%)
        </span>
      </div>

      {/* Domain sections */}
      <div className="divide-y divide-border">
        {domains.map(domain => {
          const domainStats = stats.filter(s => s.domain === domain);
          const colors = DOMAIN_COLORS[domain];
          const isExpanded = expandedDomain === domain;
          const domainStrong = domainStats.filter(s => s.status === 'strong').length;
          const domainTotal = domainStats.length;
          const domainPct = Math.round((domainStrong / domainTotal) * 100);

          return (
            <div key={domain}>
              {/* Domain header — always visible, click to expand */}
              <button
                className="w-full px-5 py-3 flex items-center gap-3 hover:bg-muted/30 transition-colors text-left"
                onClick={() => setExpandedDomain(isExpanded ? null : domain)}
              >
                <span className={cn('text-xs font-bold px-2 py-0.5 rounded', colors.pill)}>
                  {domain}
                </span>
                <span className="text-xs font-medium text-foreground flex-1 truncate">
                  {DOMAIN_NAMES[domain]}
                </span>
                {/* Mini progress bar */}
                <div className="hidden sm:flex items-center gap-2">
                  <div className="w-20 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-violet-600 rounded-full transition-all duration-500"
                      style={{ width: `${domainPct}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground w-12 text-right">
                    {domainStrong}/{domainTotal}
                  </span>
                </div>
                {isExpanded
                  ? <ChevronUp className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                  : <ChevronDown className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                }
              </button>

              {/* Task item grid — visible when expanded */}
              {isExpanded && (
                <div className="px-5 pb-4 pt-1">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                    {domainStats.map(item => {
                      const style = STATUS_STYLES[item.status];
                      const isHovered = tooltip === item.code;
                      return (
                        <div key={item.code} className="relative">
                          <button
                            className={cn(
                              'w-full text-left px-3 py-2.5 rounded-lg border text-xs transition-all duration-150',
                              style.cell
                            )}
                            onMouseEnter={() => setTooltip(item.code)}
                            onMouseLeave={() => setTooltip(null)}
                          >
                            <div className="flex items-center gap-1.5 mb-1">
                              <span className={cn('w-1.5 h-1.5 rounded-full flex-shrink-0', style.dot)} />
                              <span className="font-bold">{item.code}</span>
                              {item.accuracy > 0 && (
                                <span className="ml-auto font-medium opacity-80">{item.accuracy}%</span>
                              )}
                            </div>
                            <p className="leading-tight opacity-80 line-clamp-2">{item.label}</p>
                          </button>

                          {/* Tooltip */}
                          {isHovered && (
                            <div className="absolute z-20 bottom-full left-0 mb-1.5 w-56 bg-popover border border-border rounded-lg shadow-lg p-3 text-xs pointer-events-none">
                              <p className="font-semibold text-foreground mb-1">{item.code}: {item.label}</p>
                              <p className="text-muted-foreground mb-1.5">
                                Status: <span className="font-medium text-foreground">{style.label}</span>
                                {item.accuracy > 0 && ` · ${item.accuracy}% accuracy`}
                              </p>
                              {item.sources.length > 0 ? (
                                <p className="text-muted-foreground">
                                  Data from: {item.sources.join(', ')}
                                </p>
                              ) : (
                                <p className="text-muted-foreground italic">No activity yet — start with Flashcards or Rapid Recall</p>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
