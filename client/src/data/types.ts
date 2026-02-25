export interface Choice {
  id?: number | string; // optional — present in some Tier 7 question data files
  letter: string;
  text: string;
}

export interface Question {
  id: number | string; // string IDs allowed for tier6 questions
  domain: string;
  taskItem: string;
  phase?: string;
  lifecycleOrder?: number;
  bloomsLevel?: string;
  questionType?: string;
  dokLevel?: number;
  difficulty?: number | string;
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
