/**
 * MockExamResultsPage — Tier 6 Full Mock Exam Results
 * Features: overall score, pass/fail, domain breakdown, phase results,
 *           Bloom's analysis, missed questions review, retake option
 */
import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { useMockExam } from '@/contexts/MockExamContext';
import { domainInfo } from '@/data/allQuestions';
import {
  CheckCircle2, XCircle, BarChart3, BookOpen, ChevronDown,
  ChevronUp, RotateCcw, Home, Flag, Brain, Trophy, AlertTriangle
} from 'lucide-react';

// ─── Score Ring ───────────────────────────────────────────────────────────────
function ScoreRing({ pct, size = 120 }: { pct: number; size?: number }) {
  const r = (size / 2) - 10;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  const isPassing = pct >= 70;
  const color = pct >= 80 ? '#10b981' : pct >= 70 ? '#f59e0b' : '#ef4444';
  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#1e293b" strokeWidth="10" />
      <circle
        cx={size/2} cy={size/2} r={r} fill="none"
        stroke={color} strokeWidth="10"
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="round"
        style={{ transition: 'stroke-dasharray 1s ease' }}
      />
    </svg>
  );
}

// ─── Domain Score Card ───────────────────────────────────────────────────────
function DomainScoreCard({ domain, name, color, correct, total, pct }: {
  domain: string; name: string; color: string; correct: number; total: number; pct: number;
}) {
  const size = 72;
  const r = (size / 2) - 6;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  const ringColor = pct >= 80 ? '#10b981' : pct >= 70 ? '#f59e0b' : '#ef4444';
  const statusLabel = pct >= 80 ? 'Strong' : pct >= 70 ? 'Passing' : 'Needs Work';
  const statusColor = pct >= 80 ? 'text-emerald-400' : pct >= 70 ? 'text-amber-400' : 'text-red-400';
  const statusBg = pct >= 80 ? 'bg-emerald-500/10 border-emerald-500/20' : pct >= 70 ? 'bg-amber-500/10 border-amber-500/20' : 'bg-red-500/10 border-red-500/20';

  return (
    <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4 flex flex-col items-center gap-2 hover:border-slate-500 transition-all">
      {/* Circular progress ring */}
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#1e293b" strokeWidth="6" />
          <circle
            cx={size/2} cy={size/2} r={r} fill="none"
            stroke={ringColor} strokeWidth="6"
            strokeDasharray={`${dash} ${circ}`}
            strokeLinecap="round"
            style={{ transition: 'stroke-dasharray 1s ease' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-lg font-bold leading-none ${statusColor}`}>{pct}%</span>
          <span className="text-slate-500 text-[10px] mt-0.5 font-bold">{domain}</span>
        </div>
      </div>

      {/* Domain name */}
      <div className="text-center">
        <div className="text-xs font-semibold text-white leading-tight line-clamp-2 text-center" style={{ minHeight: '2.5rem' }}>{name}</div>
        <div className="text-[10px] text-slate-500 mt-1">{correct}/{total} correct</div>
      </div>

      {/* Status badge */}
      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${statusBg} ${statusColor}`}>{statusLabel}</span>
    </div>
  );
}

// ─── Missed Question Card ─────────────────────────────────────────────────────
function MissedQuestionCard({ question, selectedAnswer }: {
  question: ReturnType<ReturnType<typeof useMockExam>['getMissedQuestions']>[0];
  selectedAnswer: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const domainData = domainInfo[question.domain];

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
      <button
        onClick={() => setExpanded(v => !v)}
        className="w-full p-4 text-left flex items-start gap-3"
      >
        <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold text-white px-1.5 py-0.5 rounded" style={{ backgroundColor: domainData?.color }}>
              {question.domain}
            </span>
            <span className="text-xs text-slate-400">{question.taskItem}</span>
          </div>
          <p className="text-slate-300 text-sm leading-snug line-clamp-2"
            dangerouslySetInnerHTML={{ __html: question.question.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }}
          />
        </div>
        {expanded ? <ChevronUp className="w-4 h-4 text-slate-400 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />}
      </button>

      {expanded && (
        <div className="px-4 pb-4 border-t border-slate-700/50 pt-3">
          {question.scenario && (
            <div className="bg-slate-900/50 rounded-lg p-3 mb-3 text-slate-400 text-xs leading-relaxed">
              {question.scenario}
            </div>
          )}
          <div className="space-y-2 mb-3">
            {question.choices.map(choice => {
              const isCorrect = choice.letter === question.correctAnswer;
              const isSelected = choice.letter === selectedAnswer;
              return (
                <div
                  key={choice.letter}
                  className={`flex items-start gap-2 p-2.5 rounded-lg text-xs ${isCorrect ? 'bg-emerald-900/30 border border-emerald-700/40 text-emerald-300' : isSelected ? 'bg-red-900/30 border border-red-700/40 text-red-300' : 'text-slate-500'}`}
                >
                  <span className="font-bold flex-shrink-0">{choice.letter.toUpperCase()}.</span>
                  <span>{choice.text}</span>
                  {isCorrect && <CheckCircle2 className="w-3.5 h-3.5 ml-auto flex-shrink-0 text-emerald-400" />}
                  {isSelected && !isCorrect && <XCircle className="w-3.5 h-3.5 ml-auto flex-shrink-0 text-red-400" />}
                </div>
              );
            })}
          </div>
          {question.rationale && (
            <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-3">
              <div className="text-xs font-semibold text-blue-400 mb-1">Rationale</div>
              <p className="text-slate-300 text-xs leading-relaxed">{question.rationale}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Main Results Page ────────────────────────────────────────────────────────
export default function MockExamResultsPage() {
  const { state, getDomainResults, getPhaseResults, getBloomsResults, getMissedQuestions, getFlaggedQuestions, restartExam } = useMockExam();
  const [, navigate] = useLocation();
  const [activeTab, setActiveTab] = useState<'overview' | 'domains' | 'phases' | 'missed' | 'flagged'>('overview');

  useEffect(() => {
    if (!state.complete) navigate('/mock-exam');
  }, [state.complete, navigate]);

  if (!state.complete) return null;

  const { questions, answers, score } = state;
  const total = questions.length;
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;
  const isPassing = pct >= 70;
  const domainResults = getDomainResults();
  const phaseResults = getPhaseResults();
  const bloomsResults = getBloomsResults();
  const missedQuestions = getMissedQuestions();
  const flaggedQuestions = getFlaggedQuestions();
  const unanswered = total - Object.keys(answers).length;

  // Time taken
  const timeTaken = state.completedAt && state.startedAt ? state.completedAt - state.startedAt : null;
  const formatTime = (ms: number) => {
    const s = Math.floor(ms / 1000);
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    return h > 0 ? `${h}h ${m}m` : `${m}m`;
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <BarChart3 className="w-3.5 h-3.5" /> },
    { id: 'domains', label: 'Domains', icon: <Brain className="w-3.5 h-3.5" /> },
    { id: 'phases', label: 'Phases', icon: <BookOpen className="w-3.5 h-3.5" /> },
    { id: 'missed', label: `Missed (${missedQuestions.length})`, icon: <XCircle className="w-3.5 h-3.5" /> },
    { id: 'flagged', label: `Flagged (${flaggedQuestions.length})`, icon: <Flag className="w-3.5 h-3.5" /> },
  ] as const;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <div className={`py-10 px-4 text-center border-b border-slate-800 ${isPassing ? 'bg-gradient-to-b from-emerald-950/40 to-slate-950' : 'bg-gradient-to-b from-red-950/30 to-slate-950'}`}>
        <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 border border-slate-700 text-slate-400">
          TIER 6 — FULL MOCK EXAM RESULTS
        </div>

        <div className="relative inline-block mb-4">
          <ScoreRing pct={pct} size={140} />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-3xl font-bold ${pct >= 80 ? 'text-emerald-400' : pct >= 70 ? 'text-amber-400' : 'text-red-400'}`}>{pct}%</span>
            <span className="text-slate-400 text-xs">{score}/{total}</span>
          </div>
        </div>

        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-2 ${isPassing ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
          {isPassing ? <Trophy className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
          {isPassing ? 'Passing Score' : 'Below Passing Threshold'}
        </div>

        <p className="text-slate-400 text-sm mt-1">
          {isPassing
            ? `Strong performance — ${score} correct out of ${total} questions`
            : `${70 - pct} percentage points below the 70% passing threshold`}
        </p>

        {timeTaken && (
          <p className="text-slate-500 text-xs mt-1">Completed in {formatTime(timeTaken)}</p>
        )}

        {unanswered > 0 && (
          <p className="text-amber-400 text-xs mt-1">{unanswered} questions left unanswered</p>
        )}
      </div>

      {/* Tabs */}
      <div className="border-b border-slate-800 px-4">
        <div className="flex gap-1 max-w-3xl mx-auto overflow-x-auto pb-0.5 scrollbar-none">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-3 text-xs font-medium whitespace-nowrap border-b-2 transition-all ${activeTab === tab.id ? 'border-amber-500 text-amber-400' : 'border-transparent text-slate-400 hover:text-slate-300'}`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div className="max-w-3xl mx-auto px-4 py-6">

        {/* Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-4">
            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-emerald-400">{score}</div>
                <div className="text-xs text-slate-400 mt-0.5">Correct</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-red-400">{missedQuestions.length}</div>
                <div className="text-xs text-slate-400 mt-0.5">Incorrect</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-slate-400">{unanswered}</div>
                <div className="text-xs text-slate-400 mt-0.5">Unanswered</div>
              </div>
            </div>

            {/* Bloom's breakdown */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-white mb-3">Bloom's Taxonomy Breakdown</h3>
              <div className="space-y-2.5">
                {bloomsResults.map(b => (
                  <div key={b.level} className="flex items-center gap-3">
                    <span className="w-24 text-xs text-slate-400 capitalize">{b.level}</span>
                    <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${b.pct}%`, backgroundColor: b.pct >= 70 ? '#10b981' : '#ef4444' }}
                      />
                    </div>
                    <span className={`w-10 text-right text-xs font-semibold ${b.pct >= 70 ? 'text-emerald-400' : 'text-red-400'}`}>{b.pct}%</span>
                    <span className="text-xs text-slate-500 w-12 text-right">{b.correct}/{b.total}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Weakest domains callout */}
            {domainResults.filter(d => d.pct < 70).length > 0 && (
              <div className="bg-amber-900/20 border border-amber-700/30 rounded-xl p-4">
                <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold mb-2">
                  <AlertTriangle className="w-4 h-4" />
                  Domains Needing Attention
                </div>
                <div className="space-y-1">
                  {domainResults.filter(d => d.pct < 70).sort((a, b) => a.pct - b.pct).map(d => (
                    <div key={d.domain} className="flex items-center justify-between text-xs">
                      <span className="text-slate-300">Domain {d.domain}: {d.name}</span>
                      <span className="text-red-400 font-semibold">{d.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Domains */}
        {activeTab === 'domains' && (
          <div>
            <p className="text-slate-400 text-xs mb-4">70% is the passing threshold per domain. Cards below 70% are your priority study areas.</p>
                   <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {domainResults.sort((a, b) => a.domain.localeCompare(b.domain)).map(d => (
                <DomainScoreCard key={d.domain} {...d} />
              ))}
            </div>
          </div>
        )}

        {/* Phases */}
        {activeTab === 'phases' && (
          <div className="space-y-3">
            {phaseResults.map(p => (
              <div key={p.phase} className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-white">{p.label}</span>
                  <span className={`text-sm font-bold ${p.pct >= 70 ? 'text-emerald-400' : 'text-red-400'}`}>{p.pct}%</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden mb-1">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${p.pct}%`, backgroundColor: p.pct >= 70 ? '#10b981' : '#ef4444' }}
                  />
                </div>
                <div className="text-xs text-slate-500">{p.correct} of {p.total} correct</div>
              </div>
            ))}
          </div>
        )}

        {/* Missed */}
        {activeTab === 'missed' && (
          <div className="space-y-3">
            {missedQuestions.length === 0 ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <p className="text-white font-semibold">No missed questions!</p>
                <p className="text-slate-400 text-sm mt-1">You answered every question correctly.</p>
              </div>
            ) : (
              missedQuestions.map(q => (
                <MissedQuestionCard key={Number(q.id)} question={q} selectedAnswer={state.answers[Number(q.id)]} />
              ))
            )}
          </div>
        )}

        {/* Flagged */}
        {activeTab === 'flagged' && (
          <div className="space-y-3">
            {flaggedQuestions.length === 0 ? (
              <div className="text-center py-12">
                <Flag className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                <p className="text-white font-semibold">No flagged questions</p>
                <p className="text-slate-400 text-sm mt-1">Use the flag button during the exam to mark questions for review.</p>
              </div>
            ) : (
              flaggedQuestions.map(q => (
                <MissedQuestionCard key={Number(q.id)} question={q} selectedAnswer={state.answers[Number(q.id)]} />
              ))
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-3 mt-8">
          <button
            onClick={() => { restartExam(); navigate('/mock-exam'); }}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-sm transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            Retake Exam
          </button>
          <button
            onClick={() => navigate('/dashboard')}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-600 text-slate-300 hover:text-white hover:border-slate-400 text-sm font-medium transition-all"
          >
            <Home className="w-4 h-4" />
            Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
