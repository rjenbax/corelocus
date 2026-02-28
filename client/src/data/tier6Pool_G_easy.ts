/**
 * Domain G — Behavior-Change Procedures (Easy Difficulty)
 * 7 questions, IDs t6-G-pool-61 through t6-G-pool-67
 * Bloom's Level: Remember / Understand
 * Answer distribution: A:2, B:2, C:2, D:1
 *
 * Psychometric standards:
 *   - Easy difficulty: foundational behavior-change procedure concepts
 *   - Clinical scenario context on every item
 *   - Plausible distractors using correct ABA terminology
 *   - No absolute language (always/never) in distractors
 */

import type { Question } from "./types";

export const tier6Pool_G_easy: Question[] = [
  {
    id: "t6-G-pool-61",
    domain: "G",
    taskItem: "G-1",
    difficulty: "easy",
    bloomsLevel: "knowledge",
    scenario: `A BCBA is training a new RBT on prompting procedures. She explains that prompts are supplementary antecedent stimuli used to increase the likelihood that the learner will emit the correct response.`,
    question: `What is the primary goal of prompting in skill acquisition programs?`,
    choices: [
      { letter: "B", text: `To increase the frequency of correct responses by providing additional consequences (reinforcement) following the correct response.` },
      { letter: "A", text: `To prevent errors by providing supplementary antecedent stimuli that help the learner emit the correct response, with the ultimate goal of fading the prompt.` },
      { letter: "C", text: `To increase the learner's motivation to respond by pairing the instructional context with preferred stimuli that function as conditioned reinforcers.` },
      { letter: "D", text: `To establish stimulus control by ensuring that the learner responds correctly in the presence of the natural discriminative stimulus without any additional support.` },
    ],
    correctAnswer: "A",
    rationale: `Choice A is correct. The primary goal of prompting is to prevent errors by providing supplementary antecedent stimuli that help the learner emit the correct response. Prompts are temporary supports — the ultimate goal is to fade the prompt so that the learner responds correctly in the presence of the natural discriminative stimulus alone (prompt independence). Choice B is incorrect because prompting is an antecedent strategy, not a consequence strategy; reinforcement is delivered after the response, not as part of the prompt. Choice C is incorrect because pairing the instructional context with preferred stimuli describes a procedure for establishing conditioned reinforcers, not the primary goal of prompting. Choice D is incorrect because establishing stimulus control is the long-term goal that is achieved after prompts have been successfully faded — it is the outcome of effective prompting and fading, not the goal of prompting itself.`,
  },

  {
    id: "t6-G-pool-62",
    domain: "G",
    taskItem: "G-2",
    difficulty: "easy",
    bloomsLevel: "application",
    scenario: `A BCBA is explaining the difference between shaping and chaining to a supervisee. She explains that both procedures are used to teach new behaviors but use different mechanisms.`,
    question: `What is the defining feature of shaping as a behavior-change procedure?`,
    choices: [
      { letter: "B", text: `Shaping involves breaking a complex behavior into a sequence of smaller steps and teaching each step in order until the entire chain is performed.` },
      { letter: "A", text: `Shaping involves the differential reinforcement of successive approximations toward a terminal behavior that the learner cannot yet perform.` },
      { letter: "C", text: `Shaping involves presenting a model of the target behavior and reinforcing the learner for imitating the model accurately.` },
      { letter: "D", text: `Shaping involves providing a physical prompt to guide the learner through the target behavior and then gradually fading the prompt over successive trials.` },
    ],
    correctAnswer: "A",
    rationale: `Choice A is correct. Shaping involves the differential reinforcement of successive approximations — behaviors that progressively resemble the terminal behavior — until the learner is able to perform the terminal behavior. Reinforcement is provided for responses that are closer to the target than previous responses, and responses that no longer meet the current criterion are placed on extinction. Choice B is incorrect because breaking a complex behavior into a sequence of smaller steps and teaching each step describes task analysis and chaining, not shaping. Choice C is incorrect because presenting a model and reinforcing imitation describes modeling and imitation training, not shaping. Choice D is incorrect because providing a physical prompt and fading it describes a prompting and fading procedure, not shaping.`,
  },

  {
    id: "t6-G-pool-63",
    domain: "G",
    taskItem: "G-3",
    difficulty: "easy",
    bloomsLevel: "knowledge",
    scenario: `A BCBA is reviewing a behavior intervention plan that includes a token economy. She explains to the team that token economies are a common and effective behavior-change procedure.`,
    question: `What is the defining feature of a token economy?`,
    choices: [
      { letter: "A", text: `A token economy is a procedure in which the learner earns access to preferred activities contingent on the absence of challenging behavior during a specified time interval.` },
      { letter: "D", text: `A token economy is a procedure in which the learner earns conditioned reinforcers (tokens) contingent on target behaviors, which are later exchanged for backup reinforcers.` },
      { letter: "C", text: `A token economy is a procedure in which the learner receives primary reinforcers (e.g., food, preferred items) immediately following each instance of the target behavior.` },
      { letter: "B", text: `A token economy is a procedure in which the learner earns points contingent on the absence of challenging behavior, and points are exchanged for reduced demands or breaks.` },
    ],
    correctAnswer: "D",
    rationale: `Choice D is correct. A token economy is a procedure in which the learner earns conditioned reinforcers (tokens — such as stickers, points, or chips) contingent on the occurrence of target behaviors. The tokens are later exchanged for backup reinforcers (primary or other preferred reinforcers). The defining feature is the use of conditioned reinforcers (tokens) that bridge the gap between the behavior and the backup reinforcer. Choice A is incorrect because earning access to preferred activities contingent on the absence of challenging behavior describes a DRO (differential reinforcement of other behavior) procedure, not a token economy. Choice C is incorrect because delivering primary reinforcers immediately following each behavior describes a continuous reinforcement (CRF) schedule with primary reinforcers — not a token economy. Choice B is incorrect because earning points contingent on the absence of challenging behavior and exchanging them for reduced demands describes a combination of DRO and response cost elements, not the defining feature of a token economy.`,
  },

  {
    id: "t6-G-pool-64",
    domain: "G",
    taskItem: "G-4",
    difficulty: "easy",
    bloomsLevel: "application",
    scenario: `A BCBA is explaining the concept of extinction to a parent. She explains that extinction is a procedure used to decrease the frequency of a behavior by withholding the reinforcer that has been maintaining it.`,
    question: `What is the defining feature of an extinction procedure in behavior analysis?`,
    choices: [
      { letter: "A", text: `Extinction involves presenting an aversive stimulus following the target behavior to decrease its future frequency.` },
      { letter: "B", text: `Extinction involves removing a preferred stimulus following the target behavior to decrease its future frequency.` },
      { letter: "C", text: `Extinction involves withholding the reinforcer that has previously maintained the target behavior, resulting in a decrease in the future frequency of that behavior.` },
      { letter: "D", text: `Extinction involves reinforcing a behavior that is incompatible with the target behavior, which indirectly reduces the frequency of the target behavior.` },
    ],
    correctAnswer: "C",
    rationale: `Choice C is correct. Extinction involves withholding the reinforcer that has previously maintained the target behavior. When the behavior no longer produces the reinforcer, the behavior decreases over time. The key feature is that the specific reinforcer maintaining the behavior is withheld — not that any aversive consequence is added. Choice A is incorrect because presenting an aversive stimulus following behavior describes positive punishment, not extinction. Choice B is incorrect because removing a preferred stimulus following behavior describes negative punishment (response cost), not extinction. Choice D is incorrect because reinforcing a behavior incompatible with the target behavior describes differential reinforcement of incompatible behavior (DRI) — a procedure that can reduce a target behavior but does so through reinforcement of an alternative, not through extinction of the target behavior.`,
  },

  {
    id: "t6-G-pool-65",
    domain: "G",
    taskItem: "G-5",
    difficulty: "easy",
    bloomsLevel: "application",
    scenario: `A BCBA is explaining the concept of generalization to a parent. She explains that generalization is an important goal of behavior intervention because it ensures that behavior changes extend beyond the training context.`,
    question: `Which type of generalization refers to the occurrence of a trained behavior in the presence of stimuli that were not present during training?`,
    choices: [
      { letter: "A", text: `Response generalization, which refers to the occurrence of untrained response topographies that serve the same function as the trained response.` },
      { letter: "B", text: `Maintenance, which refers to the continuation of a behavior change after the intervention has been withdrawn or reduced.` },
      { letter: "C", text: `Stimulus generalization, which refers to the occurrence of a trained behavior in the presence of stimuli that were not present during training.` },
      { letter: "D", text: `Behavioral contrast, which refers to an increase in behavior in one setting when reinforcement is reduced or eliminated in a different setting.` },
    ],
    correctAnswer: "C",
    rationale: `Choice C is correct. Stimulus generalization refers to the occurrence of a trained behavior in the presence of stimuli that were not present during training — the behavior spreads to new stimuli that share physical or functional properties with the training stimuli. For example, a child who learns to say "dog" in the presence of a golden retriever and then says "dog" in the presence of a poodle (a novel stimulus) is demonstrating stimulus generalization. Choice A is incorrect because response generalization refers to the occurrence of untrained response topographies — the behavior changes form, not the stimulus context. Choice B is incorrect because maintenance refers to the continuation of behavior change over time after the intervention is reduced — a temporal dimension of generalization, not a stimulus dimension. Choice D is incorrect because behavioral contrast refers to an increase in behavior in one setting when reinforcement is reduced in another setting — a different phenomenon from stimulus generalization.`,
  },

  {
    id: "t6-G-pool-66",
    domain: "G",
    taskItem: "G-6",
    difficulty: "easy",
    bloomsLevel: "knowledge",
    scenario: `A BCBA is reviewing a behavior intervention plan that includes a response interruption and redirection (RIRD) procedure for a client who engages in vocal stereotypy. She explains the procedure to the team.`,
    question: `What is the primary mechanism of response interruption and redirection (RIRD)?`,
    choices: [
      { letter: "A", text: `RIRD works by reinforcing the absence of the target behavior during specified intervals, thereby increasing the proportion of time the client engages in appropriate behavior.` },
      { letter: "B", text: `RIRD works by interrupting the target behavior when it occurs and redirecting the client to engage in a competing response, thereby reducing the automatic reinforcement produced by the target behavior.` },
      { letter: "C", text: `RIRD works by delivering a brief aversive stimulus contingent on the target behavior, which functions as positive punishment to decrease the future frequency of the behavior.` },
      { letter: "D", text: `RIRD works by withholding the social reinforcer that maintains the target behavior, thereby placing the behavior on extinction while simultaneously reinforcing an alternative behavior.` },
    ],
    correctAnswer: "B",
    rationale: `Choice B is correct. RIRD works by interrupting the target behavior when it occurs and redirecting the client to engage in a competing response (typically a vocal or motor response that is incompatible with the target behavior). This reduces the automatic reinforcement produced by the target behavior by preventing its completion and introducing a competing response. Choice A is incorrect because reinforcing the absence of behavior during intervals describes DRO (differential reinforcement of other behavior), not RIRD. Choice C is incorrect because RIRD does not involve delivering an aversive stimulus — it involves interruption and redirection, which are antecedent and response-based strategies, not punishment. Choice D is incorrect because RIRD is typically used for automatically reinforced behaviors (not socially reinforced behaviors), and it works through interruption and redirection rather than extinction of social reinforcement.`,
  },

  {
    id: "t6-G-pool-67",
    domain: "G",
    taskItem: "G-7",
    difficulty: "easy",
    bloomsLevel: "knowledge",
    scenario: `A BCBA is explaining the concept of a behavior intervention plan (BIP) to a new team member. She explains that a BIP is a written document that outlines the procedures for addressing a client's challenging behavior.`,
    question: `What is the primary reason that behavior intervention plans should be function-based?`,
    choices: [
      { letter: "A", text: `Function-based interventions are required by law under IDEA and other federal regulations, making them a legal mandate for all clients receiving ABA services in school settings.` },
      { letter: "B", text: `Function-based interventions are more likely to be effective because they address the environmental variables that are maintaining the behavior, rather than only suppressing the behavior's topography.` },
      { letter: "C", text: `Function-based interventions are preferred because they are less restrictive than non-function-based interventions, making them more consistent with the ethical principle of using the least restrictive procedures.` },
      { letter: "D", text: `Function-based interventions are required by the BACB Ethics Code for all clients, regardless of the severity of the challenging behavior or the setting in which services are provided.` },
    ],
    correctAnswer: "B",
    rationale: `Choice B is correct. The primary reason that behavior intervention plans should be function-based is that function-based interventions address the environmental variables (antecedents and consequences) that are maintaining the behavior. By targeting the function of the behavior — rather than only its topography — function-based interventions are more likely to produce meaningful and durable reductions in challenging behavior and to support the development of functionally equivalent replacement behaviors. Choice A is incorrect because while IDEA does require functional behavior assessments and BIPs in certain circumstances, the primary reason for function-based interventions is their effectiveness, not legal compliance. Choice C is incorrect because function-based interventions are not necessarily less restrictive than non-function-based interventions — the restrictiveness of a procedure depends on its specific components, not whether it is function-based. Choice D is incorrect because the BACB Ethics Code does not require function-based interventions for all clients regardless of circumstances — it requires that behavior analysts use evidence-based practices and the least restrictive effective procedures.`,
  },
];
