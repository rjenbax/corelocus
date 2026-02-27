/**
 * Domain B — Concepts and Principles (Easy Difficulty)
 * 7 questions, IDs t6-B-pool-59 through t6-B-pool-65
 * Bloom's Level: Remember / Understand
 * Answer distribution: A:2, B:1, C:2, D:2
 *
 * Psychometric standards:
 *   - Easy difficulty: foundational concepts, single correct principle
 *   - Clinical scenario context on every item
 *   - Plausible distractors using correct ABA terminology
 *   - No absolute language (always/never) in distractors
 */

import type { Question } from "./types";

export const tier6Pool_B_easy: Question[] = [
  {
    id: "t6-B-pool-59",
    domain: "B",
    taskItem: "B-1",
    difficulty: "easy",
    scenario: `An RBT is working with a 6-year-old child who is learning to request preferred items. Each time the child says "cookie," the RBT immediately provides a cookie. The child's rate of requesting cookies increases over the following week.`,
    question: `Which operant conditioning principle best explains the increase in the child's requesting behavior?`,
    choices: [
      { letter: "A", text: `Positive punishment, because the RBT added a stimulus (the cookie) following the behavior, which increased the future frequency of the behavior.` },
      { letter: "B", text: `Negative reinforcement, because the RBT removed an aversive stimulus following the behavior, which increased the future frequency of the behavior.` },
      { letter: "C", text: `Positive reinforcement, because the RBT added a stimulus (the cookie) following the behavior, which increased the future frequency of the behavior.` },
      { letter: "D", text: `Stimulus generalization, because the child learned to request cookies in one context and the requesting behavior spread to other preferred items over time.` },
    ],
    correctAnswer: "C",
    rationale: `Choice C is correct. Positive reinforcement occurs when a stimulus is added following a behavior and the future frequency of that behavior increases. The RBT added a cookie (a preferred stimulus) following the child's request, and requesting increased — this is the definition of positive reinforcement. Choice A is incorrect because positive punishment also involves adding a stimulus, but it results in a decrease in future behavior frequency, not an increase. Choice B is incorrect because negative reinforcement involves the removal or reduction of an aversive stimulus following a behavior, which increases future behavior — the cookie was added, not removed. Choice D is incorrect because stimulus generalization refers to a behavior occurring in the presence of stimuli that were not present during training, which is not what is described here.`,
  },

  {
    id: "t6-B-pool-60",
    domain: "B",
    taskItem: "B-2",
    difficulty: "easy",
    scenario: `A BCBA is reviewing data for a client whose self-injurious behavior (SIB) has been maintained by escape from non-preferred tasks. The team has been implementing extinction by requiring the client to complete tasks despite SIB. The BCBA notices that SIB initially increased after extinction was implemented before it began to decrease.`,
    question: `What is the term for the initial increase in behavior that often occurs when extinction is first implemented?`,
    choices: [
      { letter: "A", text: `Behavioral contrast, which refers to an increase in behavior in one setting when reinforcement is reduced or eliminated in a different setting.` },
      { letter: "B", text: `Spontaneous recovery, which refers to the reappearance of a previously extinguished behavior after a period of time has passed without reinforcement.` },
      { letter: "C", text: `Resurgence, which refers to the reappearance of a previously reinforced behavior when a more recently reinforced behavior is placed on extinction.` },
      { letter: "D", text: `Extinction burst, which refers to a temporary increase in the rate, duration, or intensity of a behavior when the reinforcer that previously maintained it is withheld.` },
    ],
    correctAnswer: "D",
    rationale: `Choice D is correct. An extinction burst is the temporary increase in the rate, duration, or intensity of a behavior that often occurs when extinction is first implemented — the behavior escalates before it decreases. This is a well-documented and expected phenomenon that teams should be prepared for when implementing extinction procedures. Choice A is incorrect because behavioral contrast refers to an increase in behavior in one setting when reinforcement is reduced in a different setting — not the initial increase that occurs when extinction is first applied to the target behavior. Choice B is incorrect because spontaneous recovery refers to the reappearance of an extinguished behavior after a rest period, not the initial increase at the start of extinction. Choice C is incorrect because resurgence refers to the return of a previously reinforced behavior when a more recently reinforced behavior is placed on extinction — a different phenomenon from an extinction burst.`,
  },

  {
    id: "t6-B-pool-61",
    domain: "B",
    taskItem: "B-3",
    difficulty: "easy",
    scenario: `A BCBA is teaching a parent about the concept of stimulus control. She explains that her child's tantrum behavior occurs almost exclusively when the father is present but rarely when the mother is present. The father has a history of providing attention and preferred items following tantrums, while the mother does not.`,
    question: `Which concept best explains why the child's tantrums occur more frequently in the father's presence than in the mother's presence?`,
    choices: [
      { letter: "A", text: `Stimulus generalization, because the child has learned to engage in tantrums across multiple people in the environment, with the father being the most common person present.` },
      { letter: "B", text: `Stimulus discrimination, because the child has learned that tantrums are reinforced in the presence of the father (SD) but not in the presence of the mother (S-delta).` },
      { letter: "C", text: `Response generalization, because the child has learned to produce multiple topographies of tantrum behavior that all serve the same function of obtaining attention from the father.` },
      { letter: "D", text: `Conditioned reinforcement, because the father has become a conditioned reinforcer through his repeated pairing with the delivery of preferred items and attention.` },
    ],
    correctAnswer: "B",
    rationale: `Choice B is correct. Stimulus discrimination occurs when a behavior is reinforced in the presence of one stimulus (the discriminative stimulus, or SD) but not in the presence of another stimulus (the S-delta). The father has become an SD for tantrums because tantrums have been reinforced in his presence, while the mother has become an S-delta because tantrums have not been reinforced in her presence. This differential history of reinforcement produces stimulus control — the child's tantrums are under the discriminative control of the father's presence. Choice A is incorrect because stimulus generalization refers to a behavior occurring in the presence of stimuli that were not present during training — the opposite of what is described. Choice C is incorrect because response generalization refers to the spread of behavior change to untrained response topographies, not to the differential occurrence of behavior across people. Choice D is incorrect because conditioned reinforcement refers to a stimulus that has acquired reinforcing properties through pairing with other reinforcers — the father functioning as an SD is a different concept.`,
  },

  {
    id: "t6-B-pool-62",
    domain: "B",
    taskItem: "B-4",
    difficulty: "easy",
    scenario: `A BCBA is explaining schedules of reinforcement to a parent. She describes how a vending machine delivers a snack every time money is inserted and the correct button is pressed, and contrasts this with a slot machine that delivers a payout after an unpredictable number of plays.`,
    question: `Which schedules of reinforcement do the vending machine and the slot machine respectively represent?`,
    choices: [
      { letter: "A", text: `The vending machine represents a fixed ratio (FR) schedule, and the slot machine represents a variable ratio (VR) schedule.` },
      { letter: "B", text: `The vending machine represents a fixed interval (FI) schedule, and the slot machine represents a variable interval (VI) schedule.` },
      { letter: "C", text: `The vending machine represents a continuous reinforcement (CRF) schedule, and the slot machine represents a fixed ratio (FR) schedule.` },
      { letter: "D", text: `The vending machine represents a variable ratio (VR) schedule, and the slot machine represents a fixed ratio (FR) schedule.` },
    ],
    correctAnswer: "A",
    rationale: `Choice A is correct. A fixed ratio (FR) schedule delivers reinforcement after a fixed number of responses — the vending machine delivers a snack after exactly one correct response (inserting money and pressing a button), which is an FR-1 schedule (also called continuous reinforcement). A variable ratio (VR) schedule delivers reinforcement after an unpredictable number of responses that varies around an average — the slot machine pays out after an unpredictable number of plays, which is the defining feature of a VR schedule. Choice B is incorrect because interval schedules are based on time elapsed since the last reinforcer, not on the number of responses — neither the vending machine nor the slot machine operates on an interval schedule. Choice C is incorrect because while the vending machine does operate on a CRF schedule, the slot machine operates on a VR schedule, not an FR schedule. Choice D is incorrect because the vending machine delivers reinforcement after every correct response (CRF/FR-1), not after a variable number of responses.`,
  },

  {
    id: "t6-B-pool-63",
    domain: "B",
    taskItem: "B-5",
    difficulty: "easy",
    scenario: `A BCBA is conducting a functional behavior assessment for a student who engages in frequent off-task behavior during math class. Observations reveal that the student's off-task behavior consistently results in the teacher redirecting the student, which temporarily stops the math assignment.`,
    question: `Based on this information, which function of behavior is most likely maintaining the student's off-task behavior?`,
    choices: [
      { letter: "A", text: `Automatic reinforcement, because the off-task behavior produces sensory stimulation that is inherently reinforcing regardless of the social environment.` },
      { letter: "B", text: `Access to tangibles, because the student's off-task behavior results in access to preferred objects or activities that are not available during math class.` },
      { letter: "C", text: `Attention, because the teacher's redirection provides social contact that functions as a positive reinforcer for the off-task behavior.` },
      { letter: "D", text: `Escape, because the teacher's redirection temporarily removes the student from the math assignment, which functions as negative reinforcement.` },
    ],
    correctAnswer: "D",
    rationale: `Choice D is correct. The student's off-task behavior consistently results in the teacher redirecting the student, which temporarily stops the math assignment. The removal of the math assignment (an aversive stimulus) following the off-task behavior is negative reinforcement — specifically, escape-maintained behavior. The math assignment is the aversive stimulus being escaped, and the redirection provides the escape. Choice A is incorrect because automatic reinforcement refers to behavior maintained by sensory consequences that are independent of the social environment — the consequence here (redirection) is socially mediated. Choice B is incorrect because access to tangibles refers to behavior maintained by gaining access to preferred objects or activities — the consequence here is the removal of an aversive task, not access to a preferred item. Choice C is incorrect because while the teacher's redirection does involve social contact, the key consequence that maintains the behavior is the temporary cessation of the math assignment (escape), not the attention itself.`,
  },

  {
    id: "t6-B-pool-64",
    domain: "B",
    taskItem: "B-6",
    difficulty: "easy",
    scenario: `A BCBA is explaining the concept of a three-term contingency to a new staff member. She draws a diagram showing an antecedent, a behavior, and a consequence, and explains how these three elements work together to explain operant behavior.`,
    question: `In the three-term contingency (A-B-C), what is the role of the antecedent stimulus?`,
    choices: [
      { letter: "A", text: `The antecedent stimulus directly causes the behavior to occur by eliciting it as an unconditioned or conditioned reflex response.` },
      { letter: "B", text: `The antecedent stimulus signals that a particular response will be followed by a particular consequence, thereby setting the occasion for the behavior.` },
      { letter: "C", text: `The antecedent stimulus strengthens the behavior by providing reinforcement immediately following the occurrence of the target response.` },
      { letter: "D", text: `The antecedent stimulus weakens the behavior by signaling that reinforcement is not available, thereby suppressing the occurrence of the target response.` },
    ],
    correctAnswer: "B",
    rationale: `Choice B is correct. In the three-term contingency, the antecedent stimulus (specifically, the discriminative stimulus or SD) sets the occasion for a behavior by signaling that a particular response will be followed by a particular consequence. The antecedent does not cause the behavior in a reflexive sense — it signals the availability of reinforcement, which increases the probability that the behavior will occur. Choice A is incorrect because eliciting stimuli are part of respondent (classical) conditioning, not operant conditioning; in operant conditioning, antecedents set the occasion for behavior rather than eliciting it. Choice C is incorrect because the consequence — not the antecedent — is what strengthens or weakens behavior through reinforcement or punishment. Choice D is incorrect because while an S-delta (a stimulus signaling non-reinforcement) can suppress behavior, this is not the general role of antecedent stimuli in the three-term contingency; the antecedent's primary role is to set the occasion for behavior.`,
  },

  {
    id: "t6-B-pool-65",
    domain: "B",
    taskItem: "B-7",
    difficulty: "easy",
    scenario: `A BCBA is reviewing a behavior intervention plan that includes a differential reinforcement of other behavior (DRO) procedure. The plan specifies that the client will receive reinforcement at the end of each 5-minute interval during which the target behavior did not occur.`,
    question: `What is the defining feature of a differential reinforcement of other behavior (DRO) procedure?`,
    choices: [
      { letter: "A", text: `Reinforcement is delivered contingent on the occurrence of a specific alternative behavior that is topographically incompatible with the target behavior.` },
      { letter: "B", text: `Reinforcement is delivered contingent on the occurrence of a specific alternative behavior that serves the same function as the target behavior.` },
      { letter: "C", text: `Reinforcement is delivered contingent on the absence of the target behavior during a specified time interval, regardless of what other behavior occurs during that interval.` },
      { letter: "D", text: `Reinforcement is delivered contingent on the occurrence of any behavior that is lower in rate than the target behavior, regardless of its topography or function.` },
    ],
    correctAnswer: "C",
    rationale: `Choice C is correct. DRO delivers reinforcement contingent on the absence of the target behavior during a specified interval — reinforcement is not tied to any specific alternative behavior, only to the non-occurrence of the target behavior. This is what distinguishes DRO from other differential reinforcement procedures. Choice A is incorrect because this describes differential reinforcement of incompatible behavior (DRI), in which reinforcement is contingent on a specific behavior that cannot occur at the same time as the target behavior. Choice B is incorrect because this describes differential reinforcement of alternative behavior (DRA), in which reinforcement is contingent on a specific alternative behavior, though it need not be topographically incompatible. Choice D is incorrect because this describes differential reinforcement of low rates of behavior (DRL), in which reinforcement is contingent on the behavior occurring at or below a specified rate — not on the complete absence of the behavior during an interval.`,
  },
];
