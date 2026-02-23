import { domainA_questions, domainB_questions } from './questions_part1';
import { domainC_questions, domainD_questions } from './questions_part2';
import { domainE_questions, domainF_questions } from './questions_part3';
import { domainG_questions, domainH_questions } from './questions_part4';
import { domainI_questions } from './questions_part5';
import type { Question } from './types';

// Combine all questions and sort by lifecycleOrder for true client lifecycle presentation
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
].sort((a, b) => (a.lifecycleOrder ?? 0) - (b.lifecycleOrder ?? 0));

export const domainInfo: Record<string, { name: string; totalQuestions: number; color: string }> = {
  A: { name: "Behaviorism & Philosophical Foundations", totalQuestions: 8, color: "#4A7C59" },
  B: { name: "Concepts and Principles", totalQuestions: 26, color: "#2E6B8A" },
  C: { name: "Measurement, Data Display & Interpretation", totalQuestions: 21, color: "#7A5C8A" },
  D: { name: "Experimental Design", totalQuestions: 13, color: "#8A6B2E" },
  E: { name: "Ethical and Professional Issues", totalQuestions: 22, color: "#8A2E2E" },
  F: { name: "Behavior Assessment", totalQuestions: 23, color: "#2E7A6B" },
  G: { name: "Behavior-Change Procedures", totalQuestions: 25, color: "#5C6B8A" },
  H: { name: "Selecting and Implementing Interventions", totalQuestions: 20, color: "#6B8A2E" },
  I: { name: "Personnel Supervision and Management", totalQuestions: 19, color: "#8A5C2E" },
};

export const phaseInfo: Record<string, { label: string; description: string; order: number; questionRange: string; domains: string }> = {
  assessment: {
    label: "Phase 1: Referral & Initial Assessment",
    description: "Leo Rodriguez, a 5-year-old boy diagnosed with Autism Spectrum Disorder (Level 2), is referred to your ABA agency by his pediatrician. His parents report daily tantrums (10–15/day), no functional communication, and significant difficulty with transitions. You review his records, meet the family, establish the philosophical and scientific foundation for your work, and begin your initial skill and preference assessments.",
    order: 1,
    questionRange: "Questions 1–39",
    domains: "Domains A, F, B, E, C",
  },
  fba: {
    label: "Phase 2: Functional Behavior Assessment",
    description: "You conduct a comprehensive FBA: descriptive assessments (ABC observations, scatter plots), a functional analysis, and systematic data collection across home and school settings. You analyze the experimental design of your FA, evaluate internal validity, and interpret the results. The data reveals Leo's tantrums are primarily maintained by escape from demands, with a secondary attention-seeking function.",
    order: 2,
    questionRange: "Questions 40–86",
    domains: "Domains F, C, D, B, E",
  },
  "treatment-planning": {
    label: "Phase 3: Treatment Planning & Goal Development",
    description: "Based on the FBA results, you write measurable goals, select evidence-based procedures, and design the BIP. The plan centers on Functional Communication Training (FCT) using a 'break' card, a token economy, and a modified extinction procedure. You train Marcus (RBT) and the school team, establish supervisory expectations, and address ethical considerations around the plan.",
    order: 3,
    questionRange: "Questions 87–121",
    domains: "Domains H, G, B, E, I",
  },
  implementation: {
    label: "Phase 4: Intervention Implementation & Supervision",
    description: "The BIP is implemented across home and school. You supervise Marcus weekly, review graphed data, make data-based modifications, and address procedural integrity issues. You apply prompting hierarchies, shaping, chaining, and generalization procedures. You navigate supervision challenges, staff performance issues, and ethical questions that arise during active treatment.",
    order: 4,
    questionRange: "Questions 122–167",
    domains: "Domains G, H, C, I, E, B",
  },
  evaluation: {
    label: "Phase 5: Evaluation, Generalization & Discharge",
    description: "After 6 months, Leo's tantrums have decreased from 10–15/day to less than 1/week. His functional communication has grown from 0 to 50+ mands and tacts. You evaluate the experimental design, interpret outcome data, plan for generalization and maintenance, prepare the discharge summary, and navigate the ethical and regulatory requirements of transitioning Leo to a new provider.",
    order: 5,
    questionRange: "Questions 166–175",
    domains: "Domains D, H",
  },
};

export { domainA_questions, domainB_questions, domainC_questions, domainD_questions, domainE_questions, domainF_questions, domainG_questions, domainH_questions, domainI_questions };
