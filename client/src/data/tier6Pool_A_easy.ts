/**
 * Domain A — Behaviorism & Philosophical Foundations (Easy Difficulty)
 * 7 questions, IDs t6-A-pool-27 through t6-A-pool-33
 * Bloom's Level: Remember / Understand
 * Answer distribution: A:2, B:2, C:2, D:1
 *
 * Psychometric standards:
 *   - Easy difficulty: foundational concepts, single correct principle
 *   - Clinical scenario context on every item
 *   - Plausible distractors using correct ABA terminology
 *   - No absolute language (always/never) in distractors
 */

import type { Question } from "./types";

export const tier6Pool_A_easy: Question[] = [
  {
    id: "t6-A-pool-27",
    domain: "A",
    taskItem: "A-1",
    difficulty: "easy",
    scenario: `A new RBT is learning about the foundational philosophy of behavior analysis. Her supervisor explains that behavior analysis is grounded in a specific philosophical position about the nature of science and the study of behavior.`,
    question: `Which philosophical position serves as the foundation for applied behavior analysis?`,
    choices: [
      { letter: "B", text: `Mentalism, which holds that behavior is best explained by referring to internal mental states such as thoughts, feelings, and intentions that cause observable actions.` },
      { letter: "A", text: `Radical behaviorism, which holds that all behavior — including private events such as thinking and feeling — is subject to the same natural laws as publicly observable behavior.` },
      { letter: "C", text: `Methodological behaviorism, which holds that only publicly observable behavior can be studied scientifically and that private events must be excluded from behavioral analysis.` },
      { letter: "D", text: `Cognitive behaviorism, which holds that observable behavior and internal cognitive processes must both be studied to fully understand and predict human behavior.` },
    ],
    correctAnswer: "A",
    rationale: `Choice A is correct. Radical behaviorism, developed by B.F. Skinner, is the philosophical foundation of applied behavior analysis. It holds that all behavior — including private events such as thinking and feeling — is a natural phenomenon subject to the same environmental laws as publicly observable behavior. Choice B is incorrect because mentalism invokes unobservable internal causes to explain behavior, which is the approach that radical behaviorism explicitly rejects. Choice C is incorrect because methodological behaviorism excludes private events from analysis, which is a position that radical behaviorism does not share — Skinner explicitly included private events as legitimate subjects of study. Choice D is incorrect because cognitive behaviorism is a different framework that treats internal cognitive processes as causal agents, which is inconsistent with the behavior-analytic position.`,
  },

  {
    id: "t6-A-pool-28",
    domain: "A",
    taskItem: "A-2",
    difficulty: "easy",
    scenario: `During a team training, a BCBA is explaining the concept of determinism to a group of new staff members. One staff member asks why behavior analysts assume that behavior is determined by prior causes rather than by free will.`,
    question: `Which statement best describes the behavior-analytic position on determinism?`,
    choices: [
      { letter: "C", text: `Behavior is determined by biological factors such as genetics and neurological processes, and environmental variables play a secondary role in shaping behavior.` },
      { letter: "B", text: `Behavior is random and cannot be fully predicted, but patterns can be identified through careful observation and data collection over time.` },
      { letter: "A", text: `Behavior is determined by prior environmental events and learning history, and identifying these causes allows behavior analysts to predict and influence behavior.` },
      { letter: "D", text: `Behavior is determined by a combination of free will and environmental factors, and behavior analysts focus on the environmental factors that are most amenable to intervention.` },
    ],
    correctAnswer: "A",
    rationale: `Choice A is correct. The behavior-analytic position on determinism holds that behavior is lawfully determined by prior environmental events and the organism's learning history. This deterministic view is what makes prediction and control of behavior possible — if behavior were random or freely chosen, systematic intervention would not be feasible. Choice C is incorrect because while behavior analysts acknowledge biological factors, the primary focus is on environmental determinants, and biological factors are not the defining feature of the deterministic position in behavior analysis. Choice B is incorrect because behavior analysis assumes that behavior is lawful and predictable, not random. Choice D is incorrect because radical behaviorism does not incorporate free will as a causal factor; the behavior-analytic position is that what appears to be free will is itself determined by prior learning history and current environmental variables.`,
  },

  {
    id: "t6-A-pool-29",
    domain: "A",
    taskItem: "A-3",
    difficulty: "easy",
    scenario: `A BCBA is reviewing a case conceptualization written by a BCaBA. The BCaBA wrote that the client "engages in aggression because he has poor impulse control." The BCBA explains that this explanation is problematic from a behavior-analytic perspective.`,
    question: `What is the term for the type of explanation the BCaBA used, in which an internal trait is invoked to explain behavior?`,
    choices: [
      { letter: "A", text: `A functional explanation, because it identifies the function that the behavior serves for the individual in their environment.` },
      { letter: "B", text: `A topographical explanation, because it describes the physical form of the behavior without identifying its environmental causes.` },
      { letter: "D", text: `A circular explanation, because the internal trait is inferred from the behavior and then used to explain the same behavior, providing no new information.` },
      { letter: "C", text: `A hypothetical construct, because it refers to an unobservable variable that has been supported by empirical research in cognitive psychology.` },
    ],
    correctAnswer: "D",
    rationale: `Choice D is correct. The BCaBA's explanation is a circular explanation — "poor impulse control" is inferred from the aggression and then used to explain the aggression, which adds no new information and does not identify the environmental variables that could be modified to change the behavior. This type of explanation is also called a mentalistic explanation. Choice A is incorrect because a functional explanation would identify the environmental consequence (e.g., escape, attention) that maintains the behavior — not an internal trait. Choice B is incorrect because a topographical description describes the physical form of the behavior (e.g., "hits with open hand") without attributing it to any cause. Choice C is incorrect because a hypothetical construct in the cognitive psychology sense refers to an inferred variable that has predictive and explanatory power beyond the behavior it is inferred from — the BCaBA's explanation lacks this quality and is simply circular.`,
  },

  {
    id: "t6-A-pool-30",
    domain: "A",
    taskItem: "A-4",
    difficulty: "easy",
    scenario: `A BCBA is explaining the principle of parsimony to a student who is learning about behavior-analytic science. The student asks why behavior analysts prefer simpler explanations over more complex ones.`,
    question: `Which statement best describes the principle of parsimony as applied in behavior analysis?`,
    choices: [
      { letter: "A", text: `When multiple explanations are available for a behavior, the explanation that invokes the most variables is preferred because it is most likely to be comprehensive and accurate.` },
      { letter: "B", text: `When multiple explanations are available for a behavior, the simplest explanation that is consistent with the available data should be preferred over more complex alternatives.` },
      { letter: "C", text: `When multiple explanations are available for a behavior, the explanation that is most consistent with cognitive theory should be preferred because cognitive models have the strongest empirical support.` },
      { letter: "D", text: `When multiple explanations are available for a behavior, the explanation that was proposed first should be preferred because it has had the longest opportunity to be tested and refined.` },
    ],
    correctAnswer: "B",
    rationale: `Choice B is correct. Parsimony in science — including behavior analysis — holds that the simplest explanation consistent with the available data should be preferred over more complex alternatives. This principle guards against invoking unnecessary variables or constructs when simpler explanations are sufficient. Choice A is incorrect because parsimony favors simpler explanations, not more complex ones; invoking more variables than necessary violates parsimony. Choice C is incorrect because parsimony is a general scientific principle that applies regardless of theoretical framework; behavior analysis applies parsimony by preferring behavioral explanations over cognitive ones when both are consistent with the data. Choice D is incorrect because the order in which explanations were proposed is not relevant to parsimony; the criterion is simplicity relative to the data, not historical priority.`,
  },

  {
    id: "t6-A-pool-31",
    domain: "A",
    taskItem: "A-5",
    difficulty: "easy",
    scenario: `A BCBA is teaching a workshop on the dimensions of applied behavior analysis. She explains that ABA is defined by seven dimensions that distinguish it from other approaches to behavior change.`,
    question: `Which of the following is one of the seven dimensions of applied behavior analysis as described by Baer, Wolf, and Risley (1968)?`,
    choices: [
      { letter: "A", text: `Theoretical, meaning that ABA interventions must be grounded in a specific theoretical model of behavior before they can be implemented in applied settings.` },
      { letter: "B", text: `Generalized, meaning that behavior changes produced by ABA interventions must occur across all settings, people, and behaviors without exception.` },
      { letter: "C", text: `Technological, meaning that ABA procedures must be described with sufficient detail and clarity that a trained practitioner could replicate them accurately.` },
      { letter: "D", text: `Standardized, meaning that ABA procedures must follow established protocols that have been approved by a professional organization before they can be used with clients.` },
    ],
    correctAnswer: "C",
    rationale: `Choice C is correct. Technological is one of the seven dimensions of ABA identified by Baer, Wolf, and Risley (1968). It means that procedures must be described completely and clearly enough that any trained reader could replicate them — the procedures are not vague or dependent on the practitioner's personal interpretation. The seven dimensions are: applied, behavioral, analytic, technological, conceptually systematic, effective, and generality. Choice A is incorrect because "theoretical" is not one of the seven dimensions; in fact, ABA is characterized as conceptually systematic, meaning procedures are derived from and consistent with basic behavioral principles. Choice B is incorrect because "generalized" is not a dimension — the correct dimension is "generality," which refers to the extent to which behavior change generalizes across settings, people, and behaviors, not that it must occur in all contexts without exception. Choice D is incorrect because "standardized" is not one of the seven dimensions, and ABA does not require approval from a professional organization for specific procedures.`,
  },

  {
    id: "t6-A-pool-32",
    domain: "A",
    taskItem: "A-6",
    difficulty: "easy",
    scenario: `A BCBA is explaining the concept of private events to a new supervisee. The supervisee asks whether thoughts and feelings are considered relevant in behavior analysis, since they cannot be directly observed by others.`,
    question: `How does radical behaviorism treat private events such as thoughts and feelings?`,
    choices: [
      { letter: "A", text: `Private events are excluded from behavior-analytic analysis because they cannot be directly observed or measured, and behavior analysis is limited to publicly observable phenomena.` },
      { letter: "B", text: `Private events are treated as behavior that occurs within the skin and is subject to the same environmental laws as publicly observable behavior, even though they are accessible only to the individual experiencing them.` },
      { letter: "C", text: `Private events are treated as the primary causes of observable behavior, and behavior analysts must assess internal states before designing any behavior intervention plan.` },
      { letter: "D", text: `Private events are treated as epiphenomena — byproducts of neural activity that accompany behavior but do not influence it in any meaningful way.` },
    ],
    correctAnswer: "B",
    rationale: `Choice B is correct. Radical behaviorism, unlike methodological behaviorism, does not exclude private events from analysis. Skinner treated thoughts and feelings as behavior that occurs "within the skin" — they are real events that are subject to the same environmental laws as publicly observable behavior. The challenge is that they are accessible only to the individual experiencing them, which creates measurement difficulties but does not make them irrelevant. Choice A is incorrect because this describes methodological behaviorism, not radical behaviorism; radical behaviorism explicitly includes private events. Choice C is incorrect because radical behaviorism does not treat private events as the primary causes of observable behavior; rather, both private and public behavior are seen as products of the same environmental history. Choice D is incorrect because radical behaviorism does not treat private events as mere epiphenomena; they are considered real events that can function as discriminative stimuli or reinforcers for subsequent behavior.`,
  },

  {
    id: "t6-A-pool-33",
    domain: "A",
    taskItem: "A-7",
    difficulty: "easy",
    scenario: `A BCBA is reviewing a research article with her supervisee. The article describes a study in which a researcher systematically manipulated an independent variable and measured its effect on a dependent variable to determine whether a functional relationship existed.`,
    question: `What is the term for the type of relationship the researcher was attempting to establish between the independent and dependent variables?`,
    choices: [
      { letter: "A", text: `A correlational relationship, which demonstrates that two variables change together in a predictable pattern without establishing that one causes the other.` },
      { letter: "B", text: `A normative relationship, which demonstrates that the dependent variable falls within the expected range for individuals of the same age and diagnosis.` },
      { letter: "C", text: `A functional relationship, which demonstrates that manipulating the independent variable reliably produces a predictable change in the dependent variable.` },
      { letter: "D", text: `A theoretical relationship, which demonstrates that the observed pattern of behavior is consistent with predictions derived from a specific behavioral theory.` },
    ],
    correctAnswer: "C",
    rationale: `Choice C is correct. A functional relationship (also called a cause-and-effect relationship) is established when systematic manipulation of the independent variable produces a predictable, reliable change in the dependent variable. Demonstrating functional relationships is a core goal of behavior-analytic research and is what distinguishes experimental research from correlational research. Choice A is incorrect because a correlational relationship shows that two variables co-vary but does not establish that one causes the other — it does not involve systematic manipulation of an independent variable. Choice B is incorrect because a normative relationship compares an individual's performance to a reference group, which is not the type of relationship being established through experimental manipulation. Choice D is incorrect because a theoretical relationship is not a standard research term in behavior analysis; the goal of behavioral research is to establish functional relationships, not to confirm theoretical predictions.`,
  },
];
