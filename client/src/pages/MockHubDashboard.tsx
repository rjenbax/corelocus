/**
 * MockHubDashboard — Tier 6 Hub Dashboard
 * Quick stats + navigation shortcuts
 */
import { useLocation } from 'wouter';
import { useMockExamHub } from '@/contexts/MockExamHubContext';
import { cn } from '@/lib/utils';
import {
  ClipboardList, BookOpen, RotateCcw, BarChart3, Library, ArrowRight,
  Target, Trophy, Flame, BookOpenCheck,
} from 'lucide-react';

const LOGO_URL = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663073430959/fVyZQGnkaLaquPGv.png';

const QUICK_ACTIONS = [
  { label: 'Mock Exam', sub: 'Full 175-question exam', path: '/exam', icon: <ClipboardList className="w-5 h-5" />, color: 'bg-indigo-50 text-indigo-600' },
  { label: 'Practice', sub: 'Domain-focused practice', path: '/practice', icon: <BookOpen className="w-5 h-5" />, color: 'bg-green-50 text-green-600' },
  { label: 'Review', sub: 'Study your mistakes', path: '/review', icon: <RotateCcw className="w-5 h-5" />, color: 'bg-amber-50 text-amber-600' },
  { label: 'Analytics', sub: 'Track your progress', path: '/analytics', icon: <BarChart3 className="w-5 h-5" />, color: 'bg-purple-50 text-purple-600' },
  { label: 'Question Bank', sub: 'Browse all questions', path: '/question-bank', icon: <Library className="w-5 h-5" />, color: 'bg-blue-50 text-blue-600' },
];

export default function MockHubDashboard() {
  const [, navigate] = useLocation();
  const { getOverallStats } = useMockExamHub();
  const stats = getOverallStats();

  return (
    <div className="p-8 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Overall Accuracy', value: stats.totalAnswered > 0 ? `${stats.overallPct}%` : '—', icon: <Target className="w-4 h-4 text-amber-500" /> },
          { label: 'Exams Taken', value: String(stats.examsCount), icon: <Trophy className="w-4 h-4 text-green-500" /> },
          { label: 'Study Streak', value: `${stats.studyStreak} days`, icon: <Flame className="w-4 h-4 text-orange-500" /> },
          { label: 'Questions Done', value: String(stats.totalAnswered), icon: <BookOpenCheck className="w-4 h-4 text-indigo-500" /> },
        ].map(s => (
          <div key={s.label} className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">{s.icon}<span className="text-xs text-gray-500">{s.label}</span></div>
            <div className="text-2xl font-bold text-gray-900">{s.value}</div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <h2 className="text-base font-semibold text-gray-800 mb-3">Quick Actions</h2>
      <div className="grid grid-cols-1 gap-3">
        {QUICK_ACTIONS.map(action => (
          <button
            key={action.path}
            onClick={() => navigate(action.path)}
            className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl px-5 py-4 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all text-left group"
          >
            <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0', action.color)}>
              {action.icon}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-gray-800">{action.label}</div>
              <div className="text-xs text-gray-400">{action.sub}</div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-indigo-400 transition-colors" />
          </button>
        ))}
      </div>
    </div>
  );
}
