/**
 * PracticeHubPage — Tier 6 Practice Mode
 * Design: Clean light UI matching BehaviorPREP screenshots
 * Features: Domain selector grid (A-I), difficulty levels, session size, question flow with immediate feedback
 */
import { useState, useCallback } from 'react';
import { useLocation } from 'wouter';
import { allQuestions, domainInfo } from '@/data/allQuestions';
import { useMockExamHub } from '@/contexts/MockExamHubContext';
import { getTaskName, extractConceptFromText } from '@/data/taskListNames';
import { cn } from '@/lib/utils';
import {
  BookOpen, ChevronLeft, ChevronRight, CheckCircle2, XCircle, Eye,
} from 'lucide-react';

// ─── Domain weights ───────────────────────────────────────────────────────────
const DOMAIN_WEIGHTS: Record<string, number> = {
  A: 5, B: 14, C: 12, D: 7, E: 13, F: 13, G: 14, H: 11, I: 11,
};

const DIFFICULTY_LEVELS = [
  { id: 'easy', label: 'Easy', sub: 'Basic recall & application' },
  { id: 'moderate', label: 'Moderate', sub: 'Standard exam level' },
  { id: 'intermediate', label: 'Intermediate', sub: 'Multi-concept analysis' },
  { id: 'hard', label: 'Hard', sub: 'Complex integration' },
  { id: 'expert', label: 'Expert', sub: 'Advanced reasoning' },
];

const SESSION_SIZES = [10, 25, 50];

// Map bloomsLevel to difficulty
function bloomsToDifficulty(level: string): string {
  if (['knowledge', 'comprehension'].includes(level)) return 'easy';
  if (level === 'application') return 'moderate';
  if (level === 'analysis') return 'intermediate';
  if (level === 'synthesis') return 'hard';
  return 'expert';
}

// ─── Practice Setup ───────────────────────────────────────────────────────────
interface PracticeSetupProps {
  onStart: (questions: typeof allQuestions) => void;
}

function PracticeSetup({ onStart }: PracticeSetupProps) {
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [sessionSize, setSessionSize] = useState(10);

  const toggleDomain = (d: string) => {
    setSelectedDomains(prev =>
      prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]
    );
  };

  const toggleDifficulty = (d: string) => {
    setSelectedDifficulties(prev =>
      prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]
    );
  };

  const handleStart = () => {
    let pool = [...allQuestions];
    if (selectedDomains.length > 0) {
      pool = pool.filter(q => selectedDomains.includes(q.domain));
    }
    if (selectedDifficulties.length > 0) {
      pool = pool.filter(q => selectedDifficulties.includes(bloomsToDifficulty(q.bloomsLevel ?? '')));
    }
    // Shuffle and take sessionSize
    const shuffled = pool.sort(() => Math.random() - 0.5).slice(0, sessionSize);
    onStart(shuffled);
  };

  const canStart = true; // always allow start (will use full pool if nothing selected)

  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-1">Practice Mode</h1>
      <p className="text-gray-500 mb-8">Focus on specific domains with immediate feedback and rationales.</p>

      {/* Domain selector */}
      <section className="mb-8">
        <h2 className="text-base font-semibold text-gray-800 mb-3">Select Domains</h2>
        <div className="grid grid-cols-3 gap-3">
          {Object.entries(domainInfo).map(([domain, info]) => {
            const isSelected = selectedDomains.includes(domain);
            return (
              <button
                key={domain}
                onClick={() => toggleDomain(domain)}
                className={cn(
                  'text-left px-4 py-3.5 rounded-xl border-2 transition-all',
                  isSelected
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                )}
              >
                <div className="flex items-baseline gap-2 mb-0.5">
                  <span className={cn('text-xs font-bold', isSelected ? 'text-indigo-600' : 'text-gray-400')}>
                    {domain}
                  </span>
                  <span className="text-xs text-gray-400">{DOMAIN_WEIGHTS[domain]}%</span>
                </div>
                <div className={cn('text-sm font-medium leading-snug', isSelected ? 'text-indigo-800' : 'text-gray-700')}>
                  {info.name}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Difficulty */}
      <section className="mb-8">
        <h2 className="text-base font-semibold text-gray-800 mb-1">Difficulty Level</h2>
        <p className="text-sm text-gray-400 mb-3">Leave empty for all levels, or select specific difficulties.</p>
        <div className="flex flex-wrap gap-2">
          {DIFFICULTY_LEVELS.map(d => {
            const isSelected = selectedDifficulties.includes(d.id);
            return (
              <button
                key={d.id}
                onClick={() => toggleDifficulty(d.id)}
                className={cn(
                  'px-4 py-2.5 rounded-xl border-2 text-left transition-all',
                  isSelected
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                )}
              >
                <div className={cn('text-sm font-semibold', isSelected ? 'text-indigo-700' : 'text-gray-700')}>
                  {d.label}
                </div>
                <div className="text-xs text-gray-400">{d.sub}</div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Session settings */}
      <section className="bg-white border border-gray-200 rounded-2xl p-5 mb-8">
        <h2 className="text-base font-semibold text-gray-800 mb-3">Session Settings</h2>
        <div className="flex gap-2">
          {SESSION_SIZES.map(size => (
            <button
              key={size}
              onClick={() => setSessionSize(size)}
              className={cn(
                'px-5 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all',
                sessionSize === size
                  ? 'bg-indigo-600 border-indigo-600 text-white'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
              )}
            >
              {size} questions
            </button>
          ))}
        </div>
      </section>

      <button
        onClick={handleStart}
        disabled={!canStart}
        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-indigo-400 hover:bg-indigo-500 text-white font-semibold text-base transition-colors disabled:opacity-50"
      >
        <BookOpen className="w-5 h-5" />
        Start Practice Session
      </button>
    </div>
  );
}

// ─── Practice Question View ───────────────────────────────────────────────────
interface PracticeQuestionProps {
  questions: typeof allQuestions;
  onFinish: () => void;
}

function PracticeQuestion({ questions, onFinish }: PracticeQuestionProps) {
  const { recordPracticeAnswer } = useMockExamHub();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  const q = questions[currentIndex];
  if (!q) return null;

  const selectedAnswer = answers[q.id];
  const isAnswered = selectedAnswer !== undefined;
  const isRevealed = revealed[q.id];
  const isCorrect = selectedAnswer === q.correctAnswer;

  const handleSelect = (letter: string) => {
    if (isAnswered) return;
    setAnswers(prev => ({ ...prev, [q.id]: letter }));
    const taskItem = q.taskItem ?? `${q.domain}.?`;
    const selectedChoiceText = q.choices.find((c: any) => c.letter === letter)?.text ?? '';
    recordPracticeAnswer({
      questionId: q.id,
      domain: q.domain,
      taskItem,
      selectedAnswer: letter,
      correct: letter === q.correctAnswer,
      correctConcept: getTaskName(taskItem),
      selectedConcept: letter === q.correctAnswer ? null : extractConceptFromText(selectedChoiceText),
    });
  };

  const handleReveal = () => setRevealed(prev => ({ ...prev, [q.id]: true }));

  const handleNext = () => {
    if (currentIndex < questions.length - 1) setCurrentIndex(i => i + 1);
    else onFinish();
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(i => i - 1);
  };

  return (
    <div className="p-8 max-w-3xl">
      {/* Progress bar */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-600">Question {currentIndex + 1} of {questions.length}</span>
        <span className="text-sm text-gray-400">{q.domain}: {domainInfo[q.domain]?.name}</span>
      </div>
      <div className="w-full h-1.5 bg-gray-200 rounded-full mb-6">
        <div
          className="h-1.5 bg-indigo-500 rounded-full transition-all"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Scenario */}
      {q.scenario && (
        <div className="bg-gray-50 rounded-xl p-5 mb-6 text-sm text-gray-700 leading-relaxed border border-gray-100">
          {q.scenario}
        </div>
      )}

      {/* Question */}
      <h2 className="text-xl font-bold text-gray-900 mb-6 leading-snug">
        {q.question.replace(/\*\*/g, '')}
      </h2>

      {/* Choices */}
      <div className="space-y-3 mb-6">
        {q.choices.map(choice => {
          const isSelected = selectedAnswer === choice.letter;
          const isCorrectChoice = choice.letter === q.correctAnswer;
          return (
            <button
              key={choice.letter}
              onClick={() => handleSelect(choice.letter)}
              disabled={isAnswered}
              className={cn(
                'w-full flex items-start gap-4 px-5 py-4 rounded-xl border-2 text-left transition-all',
                !isAnswered && 'hover:border-indigo-300 hover:bg-indigo-50/30 cursor-pointer border-gray-200 bg-white',
                isAnswered && isSelected && !isRevealed && 'border-indigo-500 bg-indigo-50',
                isAnswered && isRevealed && isCorrectChoice && 'border-green-400 bg-green-50',
                isAnswered && isRevealed && isSelected && !isCorrectChoice && 'border-red-400 bg-red-50',
                isAnswered && isRevealed && !isSelected && !isCorrectChoice && 'border-gray-100 bg-gray-50 opacity-60',
                isAnswered && !isRevealed && !isSelected && 'border-gray-100 bg-white opacity-60',
              )}
            >
              <span className={cn(
                'flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold mt-0.5',
                !isAnswered && 'border-gray-300 text-gray-500',
                isAnswered && isSelected && !isRevealed && 'border-indigo-600 bg-indigo-600 text-white',
                isAnswered && isRevealed && isCorrectChoice && 'border-green-500 bg-green-500 text-white',
                isAnswered && isRevealed && isSelected && !isCorrectChoice && 'border-red-500 bg-red-500 text-white',
                isAnswered && !isRevealed && !isSelected && 'border-gray-200 text-gray-400',
                isAnswered && isRevealed && !isSelected && !isCorrectChoice && 'border-gray-200 text-gray-400',
              )}>
                {choice.letter.toUpperCase()}
              </span>
              <span className="text-sm leading-relaxed text-gray-800">{choice.text}</span>
              {isAnswered && isRevealed && isCorrectChoice && (
                <CheckCircle2 className="w-5 h-5 text-green-500 ml-auto flex-shrink-0 mt-0.5" />
              )}
              {isAnswered && isRevealed && isSelected && !isCorrectChoice && (
                <XCircle className="w-5 h-5 text-red-500 ml-auto flex-shrink-0 mt-0.5" />
              )}
            </button>
          );
        })}
      </div>

      {/* Reveal */}
      {isAnswered && !isRevealed && (
        <button
          onClick={handleReveal}
          className="w-full flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors mb-4"
        >
          <Eye className="w-4 h-4" />
          Reveal Rationale
        </button>
      )}

      {isRevealed && q.rationale && (
        <div className={cn(
          'rounded-xl p-4 mb-4 border',
          isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
        )}>
          <div className={cn(
            'flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-2',
            isCorrect ? 'text-green-700' : 'text-red-700'
          )}>
            {isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
            {isCorrect ? 'Correct' : 'Incorrect'} — Rationale
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">{q.rationale}</p>
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </button>
        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-colors"
        >
          {currentIndex === questions.length - 1 ? 'Finish' : 'Next'}
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// ─── Session Complete ─────────────────────────────────────────────────────────
function SessionComplete({ questions, answers, onRestart }: { questions: typeof allQuestions; answers: Record<number, string>; onRestart: () => void }) {
  const correct = questions.filter(q => answers[q.id] === q.correctAnswer).length;
  const pct = Math.round((correct / questions.length) * 100);
  return (
    <div className="p-8 max-w-md">
      <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
        <div className={cn(
          'w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4',
          pct >= 70 ? 'bg-green-100' : 'bg-amber-100'
        )}>
          {pct >= 70
            ? <CheckCircle2 className="w-8 h-8 text-green-600" />
            : <XCircle className="w-8 h-8 text-amber-600" />
          }
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Session Complete!</h2>
        <p className="text-gray-500 mb-6">You scored {correct} out of {questions.length}</p>
        <div className="text-5xl font-bold mb-2" style={{ color: pct >= 70 ? '#16a34a' : '#d97706' }}>
          {pct}%
        </div>
        <p className="text-sm text-gray-400 mb-8">Passing threshold: 70%</p>
        <button
          onClick={onRestart}
          className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors"
        >
          New Practice Session
        </button>
      </div>
    </div>
  );
}

// ─── Entry ────────────────────────────────────────────────────────────────────
export default function PracticeHubPage() {
  const [phase, setPhase] = useState<'setup' | 'question' | 'complete'>('setup');
  const [questions, setQuestions] = useState<typeof allQuestions>([]);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleStart = useCallback((qs: typeof allQuestions) => {
    setQuestions(qs);
    setAnswers({});
    setPhase('question');
  }, []);

  const handleFinish = useCallback(() => setPhase('complete'), []);
  const handleRestart = useCallback(() => setPhase('setup'), []);

  if (phase === 'question') return <PracticeQuestion questions={questions} onFinish={handleFinish} />;
  if (phase === 'complete') return <SessionComplete questions={questions} answers={answers} onRestart={handleRestart} />;
  return <PracticeSetup onStart={handleStart} />;
}
