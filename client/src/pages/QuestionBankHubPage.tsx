/**
 * QuestionBankHubPage — Tier 6 Question Bank
 * Browse all questions by domain, search, filter by difficulty
 */
import { useState, useMemo } from 'react';
import { domainInfo } from '@/data/allQuestions';
import { tier6Questions } from '@/data/tier6Questions';
const allQuestions = tier6Questions as any[];
import { cn } from '@/lib/utils';
import { Search, ChevronDown, ChevronUp, Library } from 'lucide-react';

export default function QuestionBankHubPage() {
  const [search, setSearch] = useState('');
  const [domainFilter, setDomainFilter] = useState('all');
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const filtered = useMemo(() => {
    return allQuestions.filter(q => {
      const matchDomain = domainFilter === 'all' || q.domain === domainFilter;
      const matchSearch = !search || q.question.toLowerCase().includes(search.toLowerCase()) || (q.scenario ?? '').toLowerCase().includes(search.toLowerCase());
      return matchDomain && matchSearch;
    });
  }, [search, domainFilter]);

  const toggleExpand = (id: number) => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-1">Question Bank</h1>
      <p className="text-gray-500 mb-6">Browse all {allQuestions.length} questions by domain and difficulty.</p>

      {/* Filters */}
      <div className="flex gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>
        <select
          value={domainFilter}
          onChange={e => setDomainFilter(e.target.value)}
          className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        >
          <option value="all">All Domains ({allQuestions.length})</option>
          {Object.entries(domainInfo).map(([d, info]) => (
            <option key={d} value={d}>{d}: {info.name} ({allQuestions.filter(q => q.domain === d).length})</option>
          ))}
        </select>
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-500 mb-4">Showing {filtered.length} questions</p>

      {/* Question list */}
      {filtered.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center">
          <Library className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No questions match your filters.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map(q => {
            const isExpanded = expanded.has(q.id);
            return (
              <div key={q.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleExpand(q.id)}
                  className="w-full flex items-start gap-3 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 leading-snug line-clamp-2">
                      {q.question.replace(/\*\*/g, '')}
                    </p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-xs px-2 py-0.5 bg-indigo-50 text-indigo-600 font-medium rounded-full">
                        {q.domain}: {domainInfo[q.domain]?.name}
                      </span>
                      {q.taskItem && (
                        <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full">
                          {q.taskItem}
                        </span>
                      )}
                      {q.bloomsLevel && (
                        <span className="text-xs text-gray-400 capitalize">{q.bloomsLevel}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-2">
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 border-t border-gray-100">
                    {q.scenario && (
                      <div className="bg-gray-50 rounded-lg p-3 mt-3 mb-3 text-xs text-gray-600 leading-relaxed">
                        {q.scenario}
                      </div>
                    )}
                    <div className="space-y-2 mb-3">
                      {q.choices.map((choice: any) => (
                        <div
                          key={choice.letter}
                          className={cn(
                            'flex items-start gap-3 px-3 py-2.5 rounded-lg text-xs',
                            choice.letter === q.correctAnswer
                              ? 'bg-green-50 border border-green-200'
                              : 'bg-gray-50 border border-gray-100'
                          )}
                        >
                          <span className={cn(
                            'flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold',
                            choice.letter === q.correctAnswer ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'
                          )}>
                            {choice.letter.toUpperCase()}
                          </span>
                          <span className={cn(
                            'leading-relaxed',
                            choice.letter === q.correctAnswer ? 'text-green-800 font-medium' : 'text-gray-600'
                          )}>
                            {choice.text}
                          </span>
                        </div>
                      ))}
                    </div>
                    {q.rationale && (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs text-blue-800 leading-relaxed">
                        <span className="font-semibold uppercase tracking-wider text-[10px] block mb-1">Rationale</span>
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
