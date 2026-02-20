export interface Choice {
  letter: string;
  text: string;
}

export interface Question {
  id: number;
  domain: string;
  taskItem: string;
  phase: string;
  bloomsLevel: string;
  scenario: string;
  question: string;
  choices: Choice[];
  correctAnswer: string;
  rationale: string;
}

export interface ExamState {
  currentQuestionIndex: number;
  answers: Record<number, string>;
  revealed: Record<number, boolean>;
  score: number;
  examStarted: boolean;
  examComplete: boolean;
  currentPhase: string;
}

export interface DomainScore {
  domain: string;
  domainName: string;
  total: number;
  correct: number;
  percentage: number;
}
