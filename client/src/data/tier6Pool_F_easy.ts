/**
 * Domain F — Behavior Assessment (Easy Difficulty)
 * 7 questions, IDs t6-F-pool-57 through t6-F-pool-63
 * Bloom's Level: Remember / Understand
 * Answer distribution: A:2, B:2, C:2, D:1
 *
 * Psychometric standards:
 *   - Easy difficulty: foundational behavior assessment concepts
 *   - Clinical scenario context on every item
 *   - Plausible distractors using correct ABA terminology
 *   - No absolute language (always/never) in distractors
 */

import type { Question } from "./types";

export const tier6Pool_F_easy: Question[] = [
  {
    id: "t6-F-pool-57",
    domain: "F",
    taskItem: "F-1",
    difficulty: "easy",
    scenario: `A BCBA is beginning the assessment process for a new client. She explains to the family that she will conduct several different types of assessments before developing a behavior intervention plan.`,
    question: `What is the primary purpose of conducting a functional behavior assessment (FBA) before developing a behavior intervention plan?`,
    choices: [
      { letter: "B", text: `To determine the client's diagnosis and identify any co-occurring conditions that may be contributing to the challenging behavior.` },
      { letter: "A", text: `To identify the environmental variables — specifically the antecedents and consequences — that are maintaining the challenging behavior.` },
      { letter: "C", text: `To measure the frequency, duration, and intensity of the challenging behavior to establish a baseline before the intervention begins.` },
      { letter: "D", text: `To determine which reinforcers are most preferred by the client so that they can be used in the behavior intervention plan.` },
    ],
    correctAnswer: "A",
    rationale: `Choice A is correct. The primary purpose of a functional behavior assessment (FBA) is to identify the environmental variables — specifically the antecedents and consequences — that are maintaining the challenging behavior. Understanding the function of the behavior (e.g., escape, attention, access to tangibles, automatic reinforcement) allows the BCBA to design function-based interventions that address the maintaining variables. Choice B is incorrect because diagnosing conditions is outside the scope of a behavior analyst's practice and is not the purpose of an FBA. Choice C is incorrect because measuring the frequency, duration, and intensity of behavior is part of data collection and measurement, not the primary purpose of an FBA — an FBA goes beyond measurement to identify the function of the behavior. Choice D is incorrect because identifying preferred reinforcers is the purpose of a preference assessment, not an FBA.`,
  },

  {
    id: "t6-F-pool-58",
    domain: "F",
    taskItem: "F-2",
    difficulty: "easy",
    scenario: `A BCBA is explaining the different methods of functional behavior assessment to a team. She describes three main approaches: indirect assessment, descriptive assessment, and functional analysis.`,
    question: `Which FBA method provides the most direct evidence of a functional relationship between the behavior and its maintaining variables?`,
    choices: [
      { letter: "A", text: `Indirect assessment (e.g., interviews and rating scales), because it gathers information from multiple informants who have extensive knowledge of the client's history and behavior.` },
      { letter: "B", text: `Descriptive assessment (e.g., ABC recording), because it captures the natural sequence of antecedents, behaviors, and consequences as they occur in the client's environment.` },
      { letter: "C", text: `Functional analysis, because it involves the systematic manipulation of antecedent and consequent variables to experimentally demonstrate which variables maintain the behavior.` },
      { letter: "D", text: `Scatter plot analysis, because it identifies the times of day and settings in which the behavior is most likely to occur, revealing the environmental conditions associated with the behavior.` },
    ],
    correctAnswer: "C",
    rationale: `Choice C is correct. Functional analysis (also called experimental functional analysis or EFA) provides the most direct evidence of a functional relationship because it involves the systematic manipulation of antecedent and consequent variables under controlled conditions. By demonstrating that behavior increases in specific test conditions and decreases in control conditions, functional analysis experimentally establishes which variables maintain the behavior. Choice A is incorrect because indirect assessment relies on informant reports, which are subject to bias and do not directly measure the behavior or its maintaining variables. Choice B is incorrect because descriptive assessment (ABC recording) identifies correlations between antecedents, behaviors, and consequences but does not involve experimental manipulation — it cannot establish a functional relationship, only suggest one. Choice D is incorrect because scatter plot analysis identifies temporal patterns in behavior occurrence but does not identify the function of the behavior or the maintaining variables.`,
  },

  {
    id: "t6-F-pool-59",
    domain: "F",
    taskItem: "F-3",
    difficulty: "easy",
    scenario: `A BCBA is conducting a preference assessment with a 5-year-old client who has limited verbal communication. She wants to identify which items are most preferred so she can use them as reinforcers in the intervention.`,
    question: `Which type of preference assessment involves presenting items one at a time and recording whether the client approaches or engages with each item?`,
    choices: [
      { letter: "A", text: `Paired stimulus preference assessment (forced choice), in which two items are presented simultaneously and the client's selection of one item over the other is recorded.` },
      { letter: "B", text: `Multiple stimulus without replacement (MSWO), in which an array of items is presented and the item selected first is removed before the next trial begins.` },
      { letter: "C", text: `Single stimulus preference assessment, in which one item is presented at a time and the client's approach or engagement with the item is recorded across multiple trials.` },
      { letter: "D", text: `Free operant observation, in which the client is given free access to an array of items and the time spent with each item is recorded without structured trials.` },
    ],
    correctAnswer: "C",
    rationale: `Choice C is correct. In a single stimulus preference assessment, one item is presented at a time and the assessor records whether the client approaches or engages with the item. The percentage of trials on which the client approaches each item provides a rank ordering of item preference. This method is simple to implement but tends to overestimate preference because there is no competition between items. Choice A is incorrect because the paired stimulus (forced choice) assessment presents two items simultaneously and records which item the client selects — not one item at a time. Choice B is incorrect because the MSWO presents an array of multiple items simultaneously and removes the selected item after each trial — not one item at a time. Choice D is incorrect because free operant observation provides free access to an array of items and measures time spent with each item — it does not involve structured trials with one item at a time.`,
  },

  {
    id: "t6-F-pool-60",
    domain: "F",
    taskItem: "F-4",
    difficulty: "easy",
    scenario: `A BCBA is reviewing the results of a skills assessment for a new client. She explains to the family that the assessment identified both the skills the client has already mastered and the skills that are emerging or not yet acquired.`,
    question: `What is the primary purpose of conducting a skills assessment (such as the VB-MAPP or ABLLS-R) before beginning skill acquisition programming?`,
    choices: [
      { letter: "B", text: `To identify the client's diagnosis and determine whether the client meets the criteria for ABA services under their insurance plan.` },
      { letter: "A", text: `To identify the client's current skill repertoire, including mastered skills, emerging skills, and skill deficits, to guide the selection of instructional targets.` },
      { letter: "C", text: `To measure the frequency and intensity of the client's challenging behaviors to determine whether a behavior intervention plan is needed before skill acquisition can begin.` },
      { letter: "D", text: `To identify the client's preferred reinforcers so that they can be used to motivate the client during skill acquisition sessions.` },
    ],
    correctAnswer: "A",
    rationale: `Choice A is correct. The primary purpose of a skills assessment is to identify the client's current skill repertoire — including skills that have been mastered, skills that are emerging, and skills that have not yet been acquired. This information guides the selection of instructional targets that are developmentally appropriate and build on existing skills. Choice B is incorrect because diagnosing conditions and determining insurance eligibility are outside the scope of a behavior analyst's practice and are not the purpose of a skills assessment. Choice C is incorrect because measuring challenging behaviors is the purpose of a behavior assessment (FBA), not a skills assessment. Choice D is incorrect because identifying preferred reinforcers is the purpose of a preference assessment, not a skills assessment.`,
  },

  {
    id: "t6-F-pool-61",
    domain: "F",
    taskItem: "F-5",
    difficulty: "easy",
    scenario: `A BCBA is explaining the ABC (Antecedent-Behavior-Consequence) recording method to a new RBT. She explains that ABC recording is a type of descriptive assessment used to gather information about the variables associated with a target behavior.`,
    question: `In ABC recording, what does the "A" (antecedent) refer to?`,
    choices: [
      { letter: "A", text: `The antecedent refers to the consequence that follows the behavior and either increases or decreases the likelihood of the behavior occurring in the future.` },
      { letter: "D", text: `The antecedent refers to the environmental event or condition that immediately precedes the behavior and may set the occasion for it.` },
      { letter: "C", text: `The antecedent refers to the internal state of the individual (e.g., hunger, fatigue) that motivates the behavior by altering the value of reinforcers.` },
      { letter: "B", text: `The antecedent refers to the topography of the behavior — the physical form or appearance of the behavior as it is observed.` },
    ],
    correctAnswer: "D",
    rationale: `Choice D is correct. In ABC recording, the antecedent (A) refers to the environmental event or condition that immediately precedes the behavior — it is what happens before the behavior occurs and may set the occasion for it. Antecedents include discriminative stimuli, instructions, transitions, the presence of specific people, and other environmental conditions. Choice A is incorrect because this describes the consequence (C) — the event that follows the behavior and affects its future frequency. Choice C is incorrect because internal states such as hunger and fatigue are motivating operations (MOs), which are a type of antecedent variable but are distinct from the immediate antecedent events recorded in ABC data. Choice B is incorrect because the topography of the behavior is part of the behavior (B) component of the ABC, not the antecedent.`,
  },

  {
    id: "t6-F-pool-62",
    domain: "F",
    taskItem: "F-6",
    difficulty: "easy",
    scenario: `A BCBA is explaining the concept of a motivating operation (MO) to a parent. She explains that MOs are antecedent variables that affect the value of reinforcers and the frequency of behavior.`,
    question: `Which of the following best describes the effect of an establishing operation (EO)?`,
    choices: [
      { letter: "A", text: `An establishing operation decreases the reinforcing value of a stimulus and decreases the frequency of behavior that has been reinforced by that stimulus in the past.` },
      { letter: "B", text: `An establishing operation increases the reinforcing value of a stimulus and increases the frequency of behavior that has been reinforced by that stimulus in the past.` },
      { letter: "C", text: `An establishing operation signals the availability of reinforcement by functioning as a discriminative stimulus that sets the occasion for a specific operant behavior.` },
      { letter: "D", text: `An establishing operation punishes behavior by adding an aversive stimulus following the behavior, thereby decreasing the future frequency of that behavior.` },
    ],
    correctAnswer: "B",
    rationale: `Choice B is correct. An establishing operation (EO) is a type of motivating operation that increases the reinforcing value of a stimulus (value-altering effect) and increases the frequency of behavior that has been reinforced by that stimulus in the past (behavior-altering effect). For example, food deprivation is an EO that increases the reinforcing value of food and increases food-seeking behavior. Choice A is incorrect because this describes an abolishing operation (AO) — the type of motivating operation that decreases the reinforcing value of a stimulus and decreases the frequency of related behavior. Choice C is incorrect because this describes the function of a discriminative stimulus (SD), not a motivating operation; MOs alter the value of reinforcers, while SDs signal the availability of reinforcement. Choice D is incorrect because this describes positive punishment, which is a consequence operation — not an antecedent motivating operation.`,
  },

  {
    id: "t6-F-pool-63",
    domain: "F",
    taskItem: "F-7",
    difficulty: "easy",
    scenario: `A BCBA is conducting a functional analysis for a client whose self-injurious behavior (SIB) is hypothesized to be maintained by automatic reinforcement. She designs a test condition and a control condition to evaluate this hypothesis.`,
    question: `In a functional analysis, what is the defining feature of the "alone" or "no interaction" condition used to test for automatic reinforcement?`,
    choices: [
      { letter: "A", text: `The client is alone in the room with preferred items freely available, and the assessor records whether the client engages with the preferred items rather than the target behavior.` },
      { letter: "B", text: `The client is alone in the room with no social interaction and no access to preferred items, and the target behavior is recorded to determine whether it occurs in the absence of social consequences.` },
      { letter: "C", text: `The client is alone in the room with a demanding task present, and the assessor records whether the target behavior increases in the presence of the aversive task.` },
      { letter: "D", text: `The client is alone in the room with the assessor present but not interacting, and the assessor delivers attention contingent on the target behavior to test for attention-maintained behavior.` },
    ],
    correctAnswer: "B",
    rationale: `Choice B is correct. In the alone (or no interaction) condition of a functional analysis, the client is alone in the room with no social interaction and no access to preferred items. If the target behavior occurs at elevated levels in this condition, it suggests that the behavior is maintained by automatic reinforcement — the behavior produces its own sensory consequences independent of social mediation. Choice A is incorrect because providing free access to preferred items describes a control condition (play or free play), not the alone condition. Choice C is incorrect because presenting a demanding task describes the escape condition, which tests for escape-maintained behavior. Choice D is incorrect because delivering attention contingent on the target behavior describes the attention condition, which tests for attention-maintained behavior — not automatic reinforcement.`,
  },
];
