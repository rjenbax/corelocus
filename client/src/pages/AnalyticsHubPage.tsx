/**
 * AnalyticsHubPage — Tier 6 Analytics
 * Design: Clean light UI matching BehaviorPREP screenshots
 * Features: 5 tabs: Overview (stat cards + avg score), Domains (bar chart + progress bars),
 *           Progress (score trend + exam history), Tasks (weakest domains), Concepts (concept accuracy)
 */
import { useState, useMemo } from 'react';
import { useMockExamHub } from '@/contexts/MockExamHubContext';
import { domainInfo } from '@/data/allQuestions';
import { cn } from '@/lib/utils';
import {
  Target, Trophy, Flame, BookOpen, TrendingUp, BarChart2, ListFilter, Brain,
  ArrowUp, ArrowDown,
} from 'lucide-react';

type TabId = 'overview' | 'domains' | 'progress' | 'tasks' | 'concepts';

const TABS: { id: TabId; label: string; icon: React.ReactNode }[] = [
  { id: 'overview', label: 'Overview', icon: <Target className="w-3.5 h-3.5" /> },
  { id: 'domains', label: 'Domains', icon: <BarChart2 className="w-3.5 h-3.5" /> },
  { id: 'progress', label: 'Progress', icon: <TrendingUp className="w-3.5 h-3.5" /> },
  { id: 'tasks', label: 'Tasks', icon: <ListFilter className="w-3.5 h-3.5" /> },
  { id: 'concepts', label: 'Concepts', icon: <Brain className="w-3.5 h-3.5" /> },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function formatDate(ts: number): string {
  return new Date(ts).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' });
}

function pctColor(pct: number): string {
  if (pct >= 70) return 'text-green-600';
  if (pct >= 50) return 'text-amber-600';
  return 'text-red-500';
}

// ─── Overview Tab ─────────────────────────────────────────────────────────────
function OverviewTab() {
  const { getOverallStats, state } = useMockExamHub();
  const stats = getOverallStats();

  const statCards = [
    { label: 'Overall Accuracy', value: `${stats.overallPct}%`, sub: `${stats.totalCorrect}/${stats.totalAnswered} correct`, icon: <Target className="w-4 h-4" />, color: 'text-amber-500' },
    { label: 'Exams Taken', value: String(stats.examsCount), sub: `${stats.passRate}% pass rate`, icon: <Trophy className="w-4 h-4" />, color: 'text-green-600' },
    { label: 'Study Streak', value: String(stats.studyStreak), sub: 'consecutive days', icon: <Flame className="w-4 h-4" />, color: 'text-orange-500' },
    { label: 'Questions Answered', value: String(stats.totalAnswered), sub: 'across all sessions', icon: <BookOpen className="w-4 h-4" />, color: 'text-indigo-600' },
  ];

  return (
    <div>
      {/* Stat cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {statCards.map(card => (
          <div key={card.label} className="bg-white border border-gray-200 rounded-xl p-5">
            <div className={cn('flex items-center gap-2 text-sm font-medium text-gray-500 mb-2')}>
              <span className={card.color}>{card.icon}</span>
              {card.label}
            </div>
            <div className={cn('text-3xl font-bold text-gray-900 mb-0.5', card.color)}>{card.value}</div>
            <div className="text-xs text-gray-400">{card.sub}</div>
          </div>
        ))}
      </div>

      {/* Average exam score */}
      {stats.examsCount > 0 && (
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <div className="text-sm text-gray-500 mb-1">Average Exam Score</div>
          <div className={cn('text-4xl font-bold mb-1', pctColor(stats.avgExamScore))}>{stats.avgExamScore}%</div>
          <div className="text-xs text-gray-400 mb-3">Passing threshold: 70%</div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className={cn('h-2 rounded-full transition-all', stats.avgExamScore >= 70 ? 'bg-green-500' : 'bg-amber-500')}
              style={{ width: `${Math.min(stats.avgExamScore, 100)}%` }}
            />
          </div>
        </div>
      )}

      {stats.totalAnswered === 0 && (
        <div className="bg-white border border-gray-200 rounded-xl p-12 text-center">
          <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <h3 className="font-semibold text-gray-700 mb-1">No data yet</h3>
          <p className="text-sm text-gray-400">Complete practice sessions or mock exams to see your analytics.</p>
        </div>
      )}
    </div>
  );
}

// ─── Domains Tab ──────────────────────────────────────────────────────────────
function DomainsTab() {
  const { getDomainAccuracy } = useMockExamHub();
  const domains = getDomainAccuracy();

  const maxPct = Math.max(...domains.map(d => d.pct), 100);

  return (
    <div>
      {/* Bar chart */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-4">
        <h3 className="font-bold text-gray-900 mb-4">Domain Accuracy</h3>
        <div className="flex items-end gap-2 h-36">
          {domains.map(d => (
            <div key={d.domain} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full flex items-end justify-center" style={{ height: '120px' }}>
                <div
                  className="w-full rounded-t-sm bg-indigo-500 transition-all"
                  style={{ height: `${Math.max((d.pct / maxPct) * 100, 4)}%` }}
                />
              </div>
              <span className="text-xs text-gray-500 font-medium">{d.domain}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>0</span>
          <span>25</span>
          <span>50</span>
          <span>75</span>
          <span>100</span>
        </div>
      </div>

      {/* Domain progress bars */}
      <div className="bg-white border border-gray-200 rounded-xl divide-y divide-gray-100">
        {domains.map(d => (
          <div key={d.domain} className="px-5 py-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-gray-500 w-4">{d.domain}</span>
                <span className="text-sm font-medium text-gray-800">{d.name}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <span>{d.correct}/{d.total}</span>
                <span className={cn('font-bold', pctColor(d.pct))}>{d.pct}%</span>
                <span className="text-gray-300">{d.weight}% weight</span>
              </div>
            </div>
            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-1.5 bg-indigo-500 rounded-full transition-all"
                style={{ width: `${d.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Progress Tab ─────────────────────────────────────────────────────────────
function ProgressTab() {
  const { state } = useMockExamHub();
  const history = state.examHistory;

  if (history.length === 0) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-12 text-center">
        <TrendingUp className="w-12 h-12 text-gray-300 mx-auto mb-3" />
        <h3 className="font-semibold text-gray-700 mb-1">No exam history yet</h3>
        <p className="text-sm text-gray-400">Complete a mock exam to see your score trend.</p>
      </div>
    );
  }

  const maxScore = 100;
  const minScore = 0;
  const chartW = 600;
  const chartH = 160;
  const padL = 40;
  const padR = 20;
  const padT = 10;
  const padB = 30;
  const innerW = chartW - padL - padR;
  const innerH = chartH - padT - padB;

  const points = history.map((e, i) => {
    const x = padL + (history.length === 1 ? innerW / 2 : (i / (history.length - 1)) * innerW);
    const y = padT + innerH - ((e.score - minScore) / (maxScore - minScore)) * innerH;
    return { x, y, score: e.score, date: e.date, passed: e.passed };
  });

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

  return (
    <div>
      {/* Score trend chart */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-4">
        <h3 className="font-bold text-gray-900 mb-4">Exam Score Trend</h3>
        <div className="overflow-x-auto">
          <svg viewBox={`0 0 ${chartW} ${chartH}`} className="w-full" style={{ minWidth: '300px', height: '160px' }}>
            {/* Y grid lines */}
            {[0, 25, 50, 75, 100].map(v => {
              const y = padT + innerH - ((v - minScore) / (maxScore - minScore)) * innerH;
              return (
                <g key={v}>
                  <line x1={padL} y1={y} x2={chartW - padR} y2={y} stroke="#f0f0f0" strokeWidth="1" />
                  <text x={padL - 6} y={y + 4} textAnchor="end" fontSize="10" fill="#9ca3af">{v}</text>
                </g>
              );
            })}
            {/* 70% passing line */}
            {(() => {
              const y = padT + innerH - (70 / 100) * innerH;
              return <line x1={padL} y1={y} x2={chartW - padR} y2={y} stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4,4" />;
            })()}
            {/* Line */}
            <path d={pathD} fill="none" stroke="#4f46e5" strokeWidth="2" />
            {/* Points */}
            {points.map((p, i) => (
              <g key={i}>
                <circle cx={p.x} cy={p.y} r="4" fill={p.passed ? '#4f46e5' : '#ef4444'} />
              </g>
            ))}
            {/* X labels */}
            {points.map((p, i) => (
              <text key={i} x={p.x} y={chartH - 4} textAnchor="middle" fontSize="10" fill="#9ca3af">
                Exam {i + 1}
              </text>
            ))}
          </svg>
        </div>
      </div>

      {/* Exam history list */}
      <div className="bg-white border border-gray-200 rounded-xl divide-y divide-gray-100">
        {history.map((e, i) => (
          <div key={e.id} className="flex items-center px-5 py-3.5">
            <span className="text-sm font-medium text-gray-700 w-20">Exam {i + 1}</span>
            <span className="text-sm text-gray-400 flex-1">{formatDate(e.date)}</span>
            <span className={cn('text-sm font-bold mr-3', pctColor(e.score))}>{e.score}%</span>
            <span className={cn(
              'text-xs font-bold px-2.5 py-1 rounded-full',
              e.passed ? 'bg-blue-600 text-white' : 'bg-red-500 text-white'
            )}>
              {e.passed ? 'PASS' : 'FAIL'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Tasks Tab ────────────────────────────────────────────────────────────────
function TasksTab() {
  const { getWeakestDomains, getDomainAccuracy } = useMockExamHub();
  const weakest = getWeakestDomains();
  const all = getDomainAccuracy().filter(d => d.total > 0);

  return (
    <div>
      <div className="bg-white border border-gray-200 rounded-xl p-5">
        <h3 className="font-bold text-gray-900 mb-1">Task-Level Breakdown</h3>
        <p className="text-sm text-gray-400 mb-5">Weakest domains to focus on:</p>

        {weakest.length === 0 ? (
          <div className="text-center py-8">
            <ListFilter className="w-10 h-10 text-gray-300 mx-auto mb-2" />
            <p className="text-sm text-gray-400">Complete practice sessions to see your weakest areas.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {weakest.map((d, i) => (
              <div key={d.domain} className="border border-red-100 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className={cn(
                    'w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold',
                    i === 0 ? 'bg-red-100 text-red-600' : i === 1 ? 'bg-amber-100 text-amber-600' : 'bg-yellow-100 text-yellow-600'
                  )}>
                    #{i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-gray-800">{d.domain}: {domainInfo[d.domain]?.name}</div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span>{d.correct}/{d.total}</span>
                    <span className="text-red-500 font-bold">{d.pct}%</span>
                  </div>
                </div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-1.5 bg-indigo-500 rounded-full"
                    style={{ width: `${d.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* All domains summary */}
        {all.length > 0 && (
          <div className="mt-6 pt-5 border-t border-gray-100">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">All Domains</h4>
            <div className="space-y-2">
              {all.map(d => (
                <div key={d.domain} className="flex items-center gap-3">
                  <span className="text-xs font-bold text-gray-400 w-4">{d.domain}</span>
                  <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-1.5 bg-indigo-400 rounded-full" style={{ width: `${d.pct}%` }} />
                  </div>
                  <span className={cn('text-xs font-bold w-10 text-right', pctColor(d.pct))}>{d.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Concepts Tab ─────────────────────────────────────────────────────────────
function ConceptsTab() {
  const { getConceptAccuracy } = useMockExamHub();
  const [sortOrder, setSortOrder] = useState<'highest' | 'lowest'>('highest');
  const concepts = getConceptAccuracy();

  const sorted = useMemo(() => {
    return [...concepts].sort((a, b) => sortOrder === 'highest' ? b.pct - a.pct : a.pct - b.pct);
  }, [concepts, sortOrder]);

  return (
    <div>
      <div className="bg-white border border-gray-200 rounded-xl p-5">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-bold text-gray-900 flex items-center gap-2">
            <Brain className="w-4 h-4 text-indigo-500" />
            Key Concept Performance
          </h3>
          <button
            onClick={() => setSortOrder(s => s === 'highest' ? 'lowest' : 'highest')}
            className="flex items-center gap-1.5 text-xs text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
          >
            {sortOrder === 'highest' ? <ArrowDown className="w-3.5 h-3.5" /> : <ArrowUp className="w-3.5 h-3.5" />}
            {sortOrder === 'highest' ? 'Highest first' : 'Lowest first'}
          </button>
        </div>
        <p className="text-xs text-gray-400 mb-5">Your accuracy on specific ABA concepts. Min 2 attempts shown.</p>

        {sorted.length === 0 ? (
          <div className="text-center py-8">
            <Brain className="w-10 h-10 text-gray-300 mx-auto mb-2" />
            <p className="text-sm text-gray-400">Complete more practice sessions to see concept-level data.</p>
          </div>
        ) : (
          <div className="space-y-2">
            {sorted.map(c => (
              <div key={c.concept} className="flex items-center gap-3">
                <span className="text-xs text-gray-600 w-48 truncate flex-shrink-0">{c.concept}</span>
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-2 bg-indigo-500 rounded-full transition-all"
                    style={{ width: `${c.pct}%` }}
                  />
                </div>
                <span className={cn('text-xs font-bold w-10 text-right', pctColor(c.pct))}>{c.pct}%</span>
                <span className="text-xs text-gray-400 w-8 text-right">{c.correct}/{c.total}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Entry ────────────────────────────────────────────────────────────────────
export default function AnalyticsHubPage() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-1">Analytics</h1>
      <p className="text-gray-500 mb-6">Track your performance and identify areas for improvement.</p>

      {/* Tabs */}
      <div className="flex bg-gray-100 rounded-xl p-1 mb-6 gap-1">
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-sm font-medium transition-all',
              activeTab === tab.id
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            )}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTab === 'overview' && <OverviewTab />}
      {activeTab === 'domains' && <DomainsTab />}
      {activeTab === 'progress' && <ProgressTab />}
      {activeTab === 'tasks' && <TasksTab />}
      {activeTab === 'concepts' && <ConceptsTab />}
    </div>
  );
}
