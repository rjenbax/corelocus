/**
 * Tier 6 Master Question Pool
 * Merges all domain-specific pools into a single export.
 *
 * BCBA 6th Edition Exam Distribution (175 scored questions):
 *   A: 8  (5%)   B: 24 (14%)  C: 21 (12%)  D: 13 (7%)
 *   E: 22 (13%)  F: 23 (13%)  G: 25 (14%)  H: 20 (11%)  I: 19 (11%)
 *
 * Pool size per domain (target 5× exam weight for minimal repeats):
 *   A: 27+  B: 84+  C: 89+  D: 52+  E: 85+  F: 91+  G: 98+  H: 78+  I: 88+
 *
 * Usage: selectTier6Exam() draws questions proportionally from this pool,
 * tracking which questions have been used to minimize repeats across exams.
 */

import { Question } from './types';
import { tier6Pool_A } from './tier6Pool_A';
import { tier6Pool_B } from './tier6Pool_B';
import { tier6Pool_C } from './tier6Pool_C';
import { tier6Pool_D } from './tier6Pool_D';
import { tier6Pool_E } from './tier6Pool_E';
import { tier6Pool_F } from './tier6Pool_F';
import { tier6Pool_G } from './tier6Pool_G';
import { tier6Pool_H } from './tier6Pool_H';
import { tier6Pool_I } from './tier6Pool_I';
import { tier6Pool_A_neg } from './tier6Pool_A_neg';
import { tier6Pool_B_neg } from './tier6Pool_B_neg';
import { tier6Pool_C_neg } from './tier6Pool_C_neg';
import { tier6Pool_D_neg } from './tier6Pool_D_neg';
import { tier6Pool_E_neg } from './tier6Pool_E_neg';
import { tier6Pool_E_expanded } from './tier6Pool_E_expanded';
import { tier6Pool_F_neg } from './tier6Pool_F_neg';
import { tier6Pool_G_neg } from './tier6Pool_G_neg';
import { tier6Pool_H_neg } from './tier6Pool_H_neg';
import { tier6Pool_I_neg } from './tier6Pool_I_neg';
import { tier6Questions } from './tier6Questions';

// Official BCBA 6th Edition domain weights (number of questions per exam)
export const BCBA_DOMAIN_WEIGHTS: Record<string, number> = {
  A: 8,
  B: 24,
  C: 21,
  D: 13,
  E: 22,
  F: 23,
  G: 25,
  H: 20,
  I: 19,
};

// Full question pool organized by domain
const poolByDomain: Record<string, Question[]> = {
  A: [...tier6Pool_A, ...tier6Pool_A_neg, ...tier6Questions.filter(q => q.domain === 'A')],
  B: [...tier6Pool_B, ...tier6Pool_B_neg, ...tier6Questions.filter(q => q.domain === 'B')],
  C: [...tier6Pool_C, ...tier6Pool_C_neg, ...tier6Questions.filter(q => q.domain === 'C')],
  D: [...tier6Pool_D, ...tier6Pool_D_neg, ...tier6Questions.filter(q => q.domain === 'D')],
  E: [...tier6Pool_E, ...tier6Pool_E_neg, ...tier6Pool_E_expanded, ...tier6Questions.filter(q => q.domain === 'E')],
  F: [...tier6Pool_F, ...tier6Pool_F_neg, ...tier6Questions.filter(q => q.domain === 'F')],
  G: [...tier6Pool_G, ...tier6Pool_G_neg, ...tier6Questions.filter(q => q.domain === 'G')],
  H: [...tier6Pool_H, ...tier6Pool_H_neg, ...tier6Questions.filter(q => q.domain === 'H')],
  I: [...tier6Pool_I, ...tier6Pool_I_neg, ...tier6Questions.filter(q => q.domain === 'I')],
};

// Flat array of all pool questions (for practice mode, review, question bank)
export const allTier6Questions: Question[] = Object.values(poolByDomain).flat();

/**
 * Select a 175-question exam from the pool, proportional to BCBA domain weights.
 * Prioritizes questions not in usedIds to minimize repeats.
 * Falls back to used questions if the pool is exhausted for a domain.
 */
export function selectTier6Exam(usedIds: Set<string | number> = new Set()): Question[] {
  const selected: Question[] = [];

  for (const [domain, count] of Object.entries(BCBA_DOMAIN_WEIGHTS)) {
    const pool = poolByDomain[domain] || [];
    if (pool.length === 0) continue;

    // Shuffle the pool
    const shuffled = [...pool].sort(() => Math.random() - 0.5);

    // Prefer unused questions
    const unused = shuffled.filter(q => !usedIds.has(q.id));
    const used = shuffled.filter(q => usedIds.has(q.id));

    // Take from unused first, then fall back to used
    const candidates = [...unused, ...used];
    selected.push(...candidates.slice(0, count));
  }

  // Shuffle the final selection so domains are interleaved
  return selected.sort(() => Math.random() - 0.5);
}

/**
 * Domain info for display in the UI
 */
export const tier6DomainPool: Record<string, { name: string; examCount: number; poolSize: number; color: string }> = {
  A: { name: 'Behaviorism & Philosophical Foundations', examCount: 8,  poolSize: poolByDomain.A.length, color: '#4A7C59' },
  B: { name: 'Concepts and Principles',                 examCount: 24, poolSize: poolByDomain.B.length, color: '#2E6B8A' },
  C: { name: 'Measurement, Data Display & Interpretation', examCount: 21, poolSize: poolByDomain.C.length, color: '#7A5C8A' },
  D: { name: 'Experimental Design',                     examCount: 13, poolSize: poolByDomain.D.length, color: '#8A6B2E' },
  E: { name: 'Ethical and Professional Issues',         examCount: 22, poolSize: poolByDomain.E.length, color: '#8A2E2E' },
  F: { name: 'Behavior Assessment',                     examCount: 23, poolSize: poolByDomain.F.length, color: '#2E7A6B' },
  G: { name: 'Behavior-Change Procedures',              examCount: 25, poolSize: poolByDomain.G.length, color: '#5C6B8A' },
  H: { name: 'Selecting and Implementing Interventions', examCount: 20, poolSize: poolByDomain.H.length, color: '#6B8A2E' },
  I: { name: 'Personnel Supervision and Management',    examCount: 19, poolSize: poolByDomain.I.length, color: '#8A5C2E' },
};
