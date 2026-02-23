/**
 * ReviewHubPage — Tier 6 Review Mode
 * Design: Clean light UI matching BehaviorPREP screenshots
 * Features: 4 filter tabs (Incorrect/Due Review/Never Correct/All), expandable items with rationale
 */
import { useState, useMemo } from 'react';
import { useMockExamHub } from '@/contexts/MockExamHubContext';
import { domainInfo } from '@/data/allQuestions';
import { tier6Questions } from '@/data/tier6Questions';
const allQuestions = tier6Questions as any[];
import { cn } from '@/lib/utils';
import {
  XCircle, CheckCircle2, RotateCcw, BookOpen, ChevronDown, ChevronUp, Filter,
} from 'lucide-react';

type FilterType = 'incorrect' | 'due' | 'never' | 'all';

const FILTER_TABS: { id: FilterType; label: string; icon: React.ReactNode }[] = [
  { id: 'incorrect', label: 'Incorrect', icon: <XCircle className="w-3.5 h-3.5" /> },
  { id: 'due', label: 'Due Review', icon: <RotateCcw className="w-3.5 h-3.5" /> },
  { id: 'never', label: 'Never Correct', icon: <XCircle className="w-3.5 h-3.5" /> },
  { id: 'all', label: 'All', icon: <BookOpen className="w-3.5 h-3.5" /> },
];

function getDomainFilterOptions() {
  return [{ value: 'all', label: 'All Domains' }, ...Object.entries(domainInfo).map(([d, info]) => ({ value: d, label: `${d}: ${info.name}` }))];
}

export default function ReviewHubPage() {
  const { state, getReviewEntries } = useMockExamHub();
  const [activeFilter, setActiveFilter] = useState<FilterType>('incorrect');
  const [domainFilter, setDomainFilter] = useState('all');
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const entries = useMemo(() => getReviewEntries(activeFilter), [activeFilter, state.reviewEntries, state.practiceAnswers]);

  const filteredEntries = useMemo(() => {
    if (domainFilter === 'all') return entries;
    return entries.filter(e => e.domain === domainFilter);
  }, [entries, domainFilter]);

  const toggleExpand = (id: number) => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Stats
  const incorrect = getReviewEntries('incorrect').length;
  const correct = state.reviewEntries.filter(r => r.correct).length;
  const due = getReviewEntries('due').length;
  const total = state.reviewEntries.length;

  const getCounts = (filter: FilterType) => {
    return getReviewEntries(filter).length;
  };

  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-1">Review Mode</h1>
      <p className="text-gray-500 mb-6">Learn from your mistakes with detailed rationales and spaced repetition.</p>

      {/* Stats row */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        {[
          { label: 'Incorrect', value: incorrect, icon: <XCircle className="w-5 h-5 text-red-400" />, color: 'text-red-500' },
          { label: 'Correct', value: correct, icon: <CheckCircle2 className="w-5 h-5 text-green-400" />, color: 'text-green-600' },
          { label: 'Due for Review', value: due, icon: <RotateCcw className="w-5 h-5 text-amber-400" />, color: 'text-amber-600' },
          { label: 'Total Attempted', value: total, icon: <BookOpen className="w-5 h-5 text-indigo-400" />, color: 'text-indigo-600' },
        ].map(stat => (
          <div key={stat.label} className="bg-white border border-gray-200 rounded-xl p-4 text-center">
            <div className="flex justify-center mb-1">{stat.icon}</div>
            <div className={cn('text-2xl font-bold', stat.color)}>{stat.value}</div>
            <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Filter tabs */}
      <div className="flex items-center gap-2 mb-4">
        {FILTER_TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={cn(
              'flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all',
              activeFilter === tab.id
                ? 'bg-indigo-600 text-white'
                : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
            )}
          >
            {tab.icon}
            {tab.label} ({getCounts(tab.id)})
          </button>
        ))}

        {/* Domain filter */}
        <div className="ml-auto flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-400" />
          <select
            value={domainFilter}
            onChange={e => setDomainFilter(e.target.value)}
            className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            {getDomainFilterOptions().map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Question list */}
      {filteredEntries.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center">
          <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-3" />
          <h3 className="font-semibold text-gray-800 mb-1">Nothing to review here</h3>
          <p className="text-sm text-gray-500">
            {activeFilter === 'incorrect' ? 'No incorrect answers yet. Keep practicing!' :
             activeFilter === 'due' ? 'No questions due for review.' :
             activeFilter === 'never' ? 'All attempted questions have been answered correctly at least once.' :
             'No questions attempted yet. Start a practice session!'}
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {filteredEntries.map(entry => {
            const q = allQuestions.find(q => q.id === entry.questionId);
            if (!q) return null;
            const isExpanded = expanded.has(entry.questionId);
            const domainName = domainInfo[entry.domain]?.name ?? entry.domain;

            return (
              <div key={entry.questionId} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleExpand(entry.questionId)}
                  className="w-full flex items-start gap-3 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    {entry.correct
                      ? <CheckCircle2 className="w-5 h-5 text-green-500" />
                      : <XCircle className="w-5 h-5 text-red-400" />
                    }
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 leading-snug line-clamp-2">
                      {q.question.replace(/\*\*/g, '')}
                    </p>
                    <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                      <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full">
                        {q.phase ?? 'applied scenario'}
                      </span>
                      <span className="text-xs px-2 py-0.5 bg-indigo-50 text-indigo-600 font-medium rounded-full">
                        {domainName}
                      </span>
                      {entry.selectedAnswer && (
                        <span className="text-xs text-gray-400">
                          Your: {entry.selectedAnswer.toUpperCase()} · Correct: {q.correctAnswer.toUpperCase()}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-2">
                    {isExpanded
                      ? <ChevronUp className="w-4 h-4 text-gray-400" />
                      : <ChevronDown className="w-4 h-4 text-gray-400" />
                    }
                  </div>
                </button>

                {/* Expanded content */}
                {isExpanded && (
                  <div className="px-5 pb-5 border-t border-gray-100">
                    {/* Scenario */}
                    {q.scenario && (
                      <div className="bg-gray-50 rounded-lg p-3 mt-3 mb-3 text-xs text-gray-600 leading-relaxed">
                        {q.scenario}
                      </div>
                    )}

                    {/* Choices */}
                    <div className="space-y-2 mb-3">
                      {q.choices.map((choice: any) => {
                        const isSelected = entry.selectedAnswer === choice.letter;
                        const isCorrectChoice = choice.letter === q.correctAnswer;
                        return (
                          <div
                            key={choice.letter}
                            className={cn(
                              'flex items-start gap-3 px-3 py-2.5 rounded-lg text-xs',
                              isCorrectChoice && 'bg-green-50 border border-green-200',
                              isSelected && !isCorrectChoice && 'bg-red-50 border border-red-200',
                              !isSelected && !isCorrectChoice && 'bg-gray-50 border border-gray-100',
                            )}
                          >
                            <span className={cn(
                              'flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold',
                              isCorrectChoice && 'bg-green-500 text-white',
                              isSelected && !isCorrectChoice && 'bg-red-500 text-white',
                              !isSelected && !isCorrectChoice && 'bg-gray-200 text-gray-500',
                            )}>
                              {choice.letter.toUpperCase()}
                            </span>
                            <span className={cn(
                              'leading-relaxed',
                              isCorrectChoice && 'text-green-800',
                              isSelected && !isCorrectChoice && 'text-red-800',
                              !isSelected && !isCorrectChoice && 'text-gray-500',
                            )}>
                              {choice.text}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Rationale */}
                    {q.rationale && (
                      <div className={cn(
                        'rounded-lg p-3 border text-xs leading-relaxed',
                        entry.correct ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'
                      )}>
                        <span className="font-semibold uppercase tracking-wider text-[10px] block mb-1">
                          {entry.correct ? '✓ Rationale' : '✗ Rationale'}
                        </span>
                        {q.rationale}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
