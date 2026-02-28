/**
 * Domain H — Selecting and Implementing Interventions (Easy Difficulty)
 * 7 questions, IDs t6-H-pool-51 through t6-H-pool-57
 * Bloom's Level: Remember / Understand
 * Answer distribution: A:1, B:2, C:2, D:2
 *
 * Psychometric standards:
 *   - Easy difficulty: foundational intervention selection concepts
 *   - Clinical scenario context on every item
 *   - Plausible distractors using correct ABA terminology
 *   - No absolute language (always/never) in distractors
 */

import type { Question } from "./types";

export const tier6Pool_H_easy: Question[] = [
  {
    id: "t6-H-pool-51",
    domain: "H",
    taskItem: "H-1",
    difficulty: "easy",
    bloomsLevel: "knowledge",
    scenario: `A BCBA is explaining the concept of least restrictive intervention to a parent. She explains that the BACB Ethics Code requires behavior analysts to consider the least restrictive effective intervention when selecting procedures.`,
    question: `What does the principle of least restrictive intervention require when selecting behavior-change procedures?`,
    choices: [
      { letter: "A", text: `The principle requires that behavior analysts select the intervention that produces the fastest reduction in challenging behavior, regardless of its restrictiveness, because minimizing the duration of the challenging behavior is the highest ethical priority.` },
      { letter: "B", text: `The principle requires that behavior analysts select the most effective intervention available, and then consider restrictiveness only if multiple equally effective options exist, because effectiveness must always take precedence over concerns about intrusiveness.` },
      { letter: "C", text: `The principle requires that behavior analysts select the least restrictive procedure that is likely to be effective, prioritizing positive and reinforcement-based approaches before considering more restrictive procedures.` },
      { letter: "D", text: `The principle requires that behavior analysts select the intervention that has the most empirical support in the published literature, regardless of its restrictiveness or the client's individual needs.` },
    ],
    correctAnswer: "C",
    rationale: `Choice C is correct. The principle of least restrictive intervention requires that behavior analysts select the least restrictive procedure that is likely to be effective for the individual client. This means prioritizing positive and reinforcement-based approaches before considering more restrictive procedures (such as punishment-based procedures), and selecting the least intrusive option among those that are likely to produce meaningful behavior change. Choice A is incorrect because speed of behavior reduction is not the primary criterion — the principle requires consideration of restrictiveness alongside effectiveness. Choice B is incorrect because restrictiveness is not considered only as a tiebreaker between equally effective options — it is a primary consideration in the selection process. Choice D is incorrect because empirical support is an important criterion, but it must be balanced with the principle of least restrictiveness and the individual client's needs and circumstances.`,
  },

  {
    id: "t6-H-pool-52",
    domain: "H",
    taskItem: "H-2",
    difficulty: "easy",
    bloomsLevel: "knowledge",
    scenario: `A BCBA is reviewing the components of a behavior intervention plan with a new staff member. She explains that an effective BIP includes both procedures for reducing challenging behavior and procedures for teaching replacement behaviors.`,
    question: `What is a functionally equivalent replacement behavior (FERB)?`,
    choices: [
      { letter: "B", text: `A FERB is any appropriate behavior that the client can perform instead of the challenging behavior, regardless of whether it serves the same function.` },
      { letter: "A", text: `A FERB is an appropriate behavior that serves the same function as the challenging behavior, providing the client with an acceptable way to access the same reinforcer.` },
      { letter: "C", text: `A FERB is a behavior that is topographically similar to the challenging behavior but is considered socially acceptable in the client's environment.` },
      { letter: "D", text: `A FERB is a behavior that is incompatible with the challenging behavior, making it physically impossible for the client to engage in both behaviors simultaneously.` },
    ],
    correctAnswer: "A",
    rationale: `Choice A is correct. A functionally equivalent replacement behavior (FERB) is an appropriate behavior that serves the same function as the challenging behavior — it provides the client with an acceptable way to access the same reinforcer (e.g., attention, escape, tangibles, sensory stimulation) that was previously obtained through the challenging behavior. FERBs are a cornerstone of function-based intervention because they address the client's communicative or behavioral need while reducing the challenging behavior. Choice B is incorrect because a FERB must serve the same function as the challenging behavior — not just any appropriate behavior. Choice C is incorrect because topographical similarity to the challenging behavior is not the defining feature of a FERB — functional equivalence (serving the same function) is the key criterion. Choice D is incorrect because this describes a behavior that is topographically incompatible with the challenging behavior, which is the basis for DRI (differential reinforcement of incompatible behavior) — not the definition of a FERB.`,
  },

  {
    id: "t6-H-pool-53",
    domain: "H",
    taskItem: "H-3",
    difficulty: "easy",
    bloomsLevel: "knowledge",
    scenario: `A BCBA is explaining antecedent-based interventions to a parent. She explains that antecedent interventions modify the environment before the challenging behavior occurs, rather than relying solely on consequence-based procedures.`,
    question: `Which of the following is an example of an antecedent-based intervention?`,
    choices: [
      { letter: "A", text: `Delivering a preferred item contingent on the occurrence of the target replacement behavior to increase the frequency of the replacement behavior and decrease the frequency of the challenging behavior.` },
      { letter: "B", text: `Withholding the reinforcer that has been maintaining the challenging behavior to place the behavior on extinction and reduce its future frequency.` },
      { letter: "C", text: `Modifying the physical environment to reduce the likelihood that the challenging behavior will occur, such as removing access to items that trigger the behavior.` },
      { letter: "D", text: `Delivering a brief aversive stimulus contingent on the challenging behavior to decrease its future frequency.` },
    ],
    correctAnswer: "C",
    rationale: `Choice C is correct. Antecedent-based interventions modify the environment before the behavior occurs to reduce the likelihood of the challenging behavior or increase the likelihood of appropriate behavior. Removing access to items that trigger the behavior is an antecedent modification — it changes the environmental conditions that set the occasion for the behavior. Choice A is incorrect because delivering a preferred item contingent on the replacement behavior is a consequence-based procedure (positive reinforcement), not an antecedent intervention. Choice B is incorrect because withholding the reinforcer that maintains the challenging behavior is an extinction procedure — a consequence-based intervention, not an antecedent intervention. Choice D is incorrect because delivering an aversive stimulus contingent on the challenging behavior is positive punishment — a consequence-based procedure, not an antecedent intervention.`,
  },

  {
    id: "t6-H-pool-54",
    domain: "H",
    taskItem: "H-4",
    difficulty: "easy",
    bloomsLevel: "knowledge",
    scenario: `A BCBA is explaining the concept of treatment integrity to a supervisee. She explains that treatment integrity is an important component of effective intervention implementation.`,
    question: `What does treatment integrity (also called procedural fidelity) refer to?`,
    choices: [
      { letter: "B", text: `Treatment integrity refers to the degree to which the client's behavior change is maintained after the intervention has been faded or withdrawn.` },
      { letter: "A", text: `Treatment integrity refers to the degree to which the intervention procedures are implemented as designed and specified in the behavior intervention plan.` },
      { letter: "C", text: `Treatment integrity refers to the degree to which the behavior intervention plan is based on the results of a functional behavior assessment.` },
      { letter: "D", text: `Treatment integrity refers to the degree to which the client's behavior generalizes to settings and people not included in the original intervention.` },
    ],
    correctAnswer: "A",
    rationale: `Choice A is correct. Treatment integrity (also called procedural fidelity or implementation fidelity) refers to the degree to which the intervention procedures are implemented as designed and specified in the behavior intervention plan. High treatment integrity means that the procedures are being followed correctly and consistently; low treatment integrity means that the procedures are being implemented incorrectly or inconsistently, which can compromise the effectiveness of the intervention. Choice B is incorrect because the degree to which behavior change is maintained after the intervention is faded describes maintenance — a dimension of generalization, not treatment integrity. Choice C is incorrect because basing the BIP on FBA results describes function-based intervention design — not treatment integrity. Choice D is incorrect because the degree to which behavior generalizes to new settings and people describes stimulus generalization — not treatment integrity.`,
  },

  {
    id: "t6-H-pool-55",
    domain: "H",
    taskItem: "H-5",
    difficulty: "easy",
    bloomsLevel: "application",
    scenario: `A BCBA is explaining the concept of behavior momentum to a parent. She explains that behavior momentum is a strategy that can be used to increase compliance with difficult requests.`,
    question: `What is the primary mechanism of the high-probability (high-p) instructional sequence (behavioral momentum)?`,
    choices: [
      { letter: "A", text: `The high-p sequence works by reinforcing the absence of challenging behavior during a series of easy tasks, building a history of reinforcement before presenting the difficult task.` },
      { letter: "D", text: `The high-p sequence works by presenting a series of easy, high-probability requests before a low-probability request, using the momentum of compliance to increase the likelihood of compliance with the difficult request.` },
      { letter: "C", text: `The high-p sequence works by gradually increasing the difficulty of tasks over time, allowing the client to build skills and confidence before being presented with the most challenging tasks.` },
      { letter: "B", text: `The high-p sequence works by providing a preferred activity before a non-preferred activity, using the Premack principle to increase the likelihood of engaging in the non-preferred activity.` },
    ],
    correctAnswer: "D",
    rationale: `Choice D is correct. The high-probability (high-p) instructional sequence works by presenting a series of easy, high-probability requests (requests the client reliably complies with) immediately before a low-probability request (a request the client often refuses or avoids). The history of reinforcement for complying with the high-p requests builds behavioral momentum — a tendency to continue responding — that increases the likelihood of compliance with the subsequent low-probability request. Choice A is incorrect because reinforcing the absence of challenging behavior during easy tasks describes a DRO procedure, not the high-p sequence. Choice C is incorrect because gradually increasing task difficulty describes shaping or errorless learning, not the high-p sequence. Choice B is incorrect because providing a preferred activity before a non-preferred activity describes the Premack principle (using a high-probability behavior as a reinforcer for a low-probability behavior) — a related but distinct concept from the high-p instructional sequence.`,
  },

  {
    id: "t6-H-pool-56",
    domain: "H",
    taskItem: "H-6",
    difficulty: "easy",
    bloomsLevel: "knowledge",
    scenario: `A BCBA is reviewing a social skills training program for a client with autism spectrum disorder. She explains to the team that social skills training typically involves teaching specific social behaviors using a structured instructional approach.`,
    question: `Which instructional approach is most commonly used in structured social skills training programs for individuals with ASD?`,
    choices: [
      { letter: "A", text: `Incidental teaching, in which the instructor follows the client's lead and uses naturally occurring opportunities to teach social skills in the context of the client's preferred activities.` },
      { letter: "B", text: `Discrete trial training (DTT), which involves breaking social skills into small components, providing massed practice trials with clear antecedents, prompts, and consequences.` },
      { letter: "C", text: `Pivotal response training (PRT), which targets pivotal areas such as motivation and self-management to produce broad improvements in social and communicative behavior.` },
      { letter: "D", text: `Video modeling, in which the client watches a video of a model performing the target social skill and then practices the skill in a structured setting.` },
    ],
    correctAnswer: "B",
    rationale: `Choice B is correct. Discrete trial training (DTT) is the most commonly used structured approach in social skills training programs — it involves breaking social skills into small, teachable components and providing massed practice trials with clear antecedents (instructions or cues), prompts, and consequences (reinforcement for correct responses). DTT allows for systematic instruction and data collection on each component of the social skill. Choice A is incorrect because incidental teaching is a naturalistic teaching approach that follows the client's lead — it is less structured than the approach described in the question. Choice C is incorrect because PRT targets pivotal areas to produce broad improvements — it is a naturalistic approach, not a structured instructional approach. Choice D is incorrect because video modeling is a specific antecedent-based strategy that can be used within social skills training, but it is not the primary instructional approach — it is a component that may be combined with other procedures.`,
  },

  {
    id: "t6-H-pool-57",
    domain: "H",
    taskItem: "H-7",
    difficulty: "easy",
    bloomsLevel: "knowledge",
    scenario: `A BCBA is explaining the concept of crisis management to a new staff member. She explains that behavior analysts must be prepared to respond safely and effectively when a client's behavior poses an immediate risk of harm.`,
    question: `What is the primary goal of crisis management procedures in ABA?`,
    choices: [
      { letter: "A", text: `The primary goal is to eliminate the challenging behavior as quickly as possible by applying the most effective punishment procedure available.` },
      { letter: "B", text: `The primary goal is to ensure the safety of the client and others while using the least restrictive procedures necessary to manage the immediate crisis.` },
      { letter: "C", text: `The primary goal is to identify the function of the challenging behavior during the crisis so that a function-based intervention can be developed immediately.` },
      { letter: "D", text: `The primary goal is to remove the client from the environment as quickly as possible to prevent the behavior from being reinforced by the social attention of others.` },
    ],
    correctAnswer: "B",
    rationale: `Choice B is correct. The primary goal of crisis management procedures is to ensure the safety of the client and others while using the least restrictive procedures necessary to manage the immediate crisis. Crisis management is not intended to be a primary behavior-change strategy — it is a safety response to an acute situation. The least restrictive principle applies even in crisis situations. Choice A is incorrect because applying the most effective punishment procedure is not the primary goal — safety and least restrictiveness are the guiding principles, not speed of behavior elimination. Choice C is incorrect because conducting a functional assessment during an active crisis is not feasible or appropriate — the immediate priority is safety, not assessment. Choice D is incorrect because removing the client from the environment may be appropriate in some cases, but it is not the primary goal — and removing the client to prevent social reinforcement is a specific strategy, not the overarching goal of crisis management.`,
  },
];
