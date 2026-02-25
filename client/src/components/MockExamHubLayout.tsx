/**
 * MockExamHubLayout — Tier 6 persistent sidebar layout
 * Design: Clean light gray background, white sidebar, indigo/blue accent
 * Matches BehaviorPREP screenshots: left sidebar nav + main content area
 * Mobile: hamburger toggle + slide-over sidebar with backdrop overlay
 */
import { useState } from 'react';
import { useLocation } from 'wouter';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard, ClipboardList, BookOpen, RotateCcw, BarChart3, Library, LogOut, Menu, X,
} from 'lucide-react';

const LOGO_URL = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663073430959/fVyZQGnkaLaquPGv.png';

interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', path: '/', icon: <LayoutDashboard className="w-4.5 h-4.5" /> },
  { label: 'Mock Exam', path: '/exam', icon: <ClipboardList className="w-4.5 h-4.5" /> },
  { label: 'Practice', path: '/practice', icon: <BookOpen className="w-4.5 h-4.5" /> },
  { label: 'Review', path: '/review', icon: <RotateCcw className="w-4.5 h-4.5" /> },
  { label: 'Analytics', path: '/analytics', icon: <BarChart3 className="w-4.5 h-4.5" /> },
  { label: 'Question Bank', path: '/question-bank', icon: <Library className="w-4.5 h-4.5" /> },
];

interface Props {
  children: React.ReactNode;
  userName?: string;
  userEmail?: string;
}

function SidebarContent({
  location,
  navigate,
  userName,
  userEmail,
  onNavClick,
}: {
  location: string;
  navigate: (path: string) => void;
  userName: string;
  userEmail: string;
  onNavClick?: () => void;
}) {
  return (
    <>
      {/* Logo */}
      <div className="px-5 py-5 border-b border-gray-100">
        <div className="flex items-center gap-2.5">
          <img src={LOGO_URL} alt="BehaviorPREP" className="w-8 h-8 object-contain rounded-full" />
          <div>
            <div className="font-bold text-sm text-gray-900 leading-tight">BehaviorPREP</div>
            <div className="text-[10px] text-gray-500 leading-tight">Complete BCBA Exam Prep</div>
          </div>
        </div>
      </div>

      {/* Nav items */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {NAV_ITEMS.map(item => {
          const isActive = location === item.path || (item.path !== '/' && location.startsWith(item.path));
          return (
            <button
              key={item.path}
              onClick={() => {
                navigate(item.path);
                onNavClick?.();
              }}
              className={cn(
                'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-left',
                isActive
                  ? 'bg-indigo-50 text-indigo-700 font-semibold'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              )}
            >
              <span className={cn('flex-shrink-0', isActive ? 'text-indigo-600' : 'text-gray-400')}>
                {item.icon}
              </span>
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Bottom: user + settings */}
      <div className="px-3 py-3 border-t border-gray-100 space-y-0.5">
        <button
          onClick={() => {
            navigate('/dashboard');
            onNavClick?.();
          }}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-all text-left"
        >
          <LogOut className="w-4 h-4 text-gray-400" />
          Back to Dashboard
        </button>
        {userName && (
          <div className="flex items-center gap-2.5 px-3 py-2.5 mt-1">
            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              {userName.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0">
              <div className="text-xs font-semibold text-gray-800 truncate">{userName}</div>
              {userEmail && <div className="text-[10px] text-gray-400 truncate">{userEmail}</div>}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default function MockExamHubLayout({ children, userName = 'Student', userEmail = '' }: Props) {
  const [location, navigate] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#f4f5f7] overflow-hidden">
      {/* ── Desktop sidebar (always visible ≥ md) ── */}
      <aside className="hidden md:flex w-[220px] flex-shrink-0 bg-white border-r border-gray-200 flex-col h-full">
        <SidebarContent
          location={location}
          navigate={navigate}
          userName={userName}
          userEmail={userEmail}
        />
      </aside>

      {/* ── Mobile backdrop overlay ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Mobile slide-over sidebar ── */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-[220px] bg-white border-r border-gray-200 flex flex-col h-full transition-transform duration-200 ease-in-out md:hidden',
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Close button inside mobile sidebar */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-3 right-3 p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
          aria-label="Close navigation"
        >
          <X className="w-4 h-4" />
        </button>
        <SidebarContent
          location={location}
          navigate={navigate}
          userName={userName}
          userEmail={userEmail}
          onNavClick={() => setMobileOpen(false)}
        />
      </aside>

      {/* ── Main content ── */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile top bar with hamburger */}
        <div className="md:hidden flex items-center gap-3 px-4 py-3 bg-white border-b border-gray-200 flex-shrink-0">
          <button
            onClick={() => setMobileOpen(true)}
            className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors"
            aria-label="Open navigation"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <img src={LOGO_URL} alt="BehaviorPREP" className="w-6 h-6 object-contain rounded-full" />
            <span className="font-bold text-sm text-gray-900">BehaviorPREP</span>
          </div>
        </div>

        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
