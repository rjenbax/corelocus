import { domainA_questions, domainB_questions } from './questions_part1';
import { domainC_questions, domainD_questions } from './questions_part2';
import { domainE_questions, domainF_questions } from './questions_part3';
import { domainG_questions, domainH_questions } from './questions_part4';
import { domainI_questions } from './questions_part5';
import type { Question } from './types';

export const allQuestions: Question[] = [
  ...domainA_questions,
  ...domainB_questions,
  ...domainC_questions,
  ...domainD_questions,
  ...domainE_questions,
  ...domainF_questions,
  ...domainG_questions,
  ...domainH_questions,
  ...domainI_questions,
];

export const domainInfo: Record<string, { name: string; totalQuestions: number; color: string }> = {
  A: { name: "Behaviorism & Philosophical Foundations", totalQuestions: 8, color: "#4A7C59" },
  B: { name: "Concepts and Principles", totalQuestions: 24, color: "#2E6B8A" },
  C: { name: "Measurement, Data Display & Interpretation", totalQuestions: 21, color: "#7A5C8A" },
  D: { name: "Experimental Design", totalQuestions: 13, color: "#8A6B2E" },
  E: { name: "Ethical and Professional Issues", totalQuestions: 22, color: "#8A2E2E" },
  F: { name: "Behavior Assessment", totalQuestions: 23, color: "#2E7A6B" },
  G: { name: "Behavior-Change Procedures", totalQuestions: 25, color: "#5C6B8A" },
  H: { name: "Selecting and Implementing Interventions", totalQuestions: 20, color: "#6B8A2E" },
  I: { name: "Personnel Supervision and Management", totalQuestions: 19, color: "#8A5C2E" },
};

export const phaseInfo: Record<string, { label: string; description: string; order: number }> = {
  intake: {
    label: "Phase 1: Intake & Referral",
    description: "Leo Rodriguez, a 5-year-old boy diagnosed with Autism Spectrum Disorder (Level 2), is referred to your ABA agency by his pediatrician. His parents report daily tantrums lasting 10–30 minutes, no functional communication, and significant difficulty transitioning between activities at school and home.",
    order: 1,
  },
  fba: {
    label: "Phase 2: Functional Behavior Assessment",
    description: "You conduct a comprehensive FBA including record review, parent and teacher interviews, structured ABC observations across settings, and a functional analysis. The data reveals that Leo's tantrums are primarily maintained by escape from demands, with a secondary attention-seeking function.",
    order: 2,
  },
  "treatment-planning": {
    label: "Phase 3: Treatment Planning",
    description: "Based on the FBA results, you design a comprehensive behavior intervention plan (BIP) centered on Functional Communication Training (FCT) using a 'break' card, a token economy, and a modified extinction procedure. You also design a skill acquisition program targeting manding and daily living skills.",
    order: 3,
  },
  intervention: {
    label: "Phase 4: Intervention Implementation",
    description: "The BIP is implemented across home and school settings by Marcus (RBT) under your supervision. You provide weekly supervision, review data, and make data-based modifications. The school team is trained on the FCT procedure and the token economy.",
    order: 4,
  },
  evaluation: {
    label: "Phase 5: Evaluation & Discharge",
    description: "After 6 months of intervention, Leo's tantrums have decreased from 10–15/day to less than 1/week. His functional communication has grown from 0 to 50+ words and phrases. He is successfully included in his kindergarten class. You are preparing for discharge and transition planning.",
    order: 5,
  },
};

export { domainA_questions, domainB_questions, domainC_questions, domainD_questions, domainE_questions, domainF_questions, domainG_questions, domainH_questions, domainI_questions };
