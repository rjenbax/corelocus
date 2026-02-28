/**
 * Domain D — Experimental Design (Easy Difficulty)
 * 7 questions, IDs t6-D-pool-37 through t6-D-pool-43
 * Bloom's Level: Remember / Understand
 * Answer distribution: A:2, B:2, C:2, D:1
 *
 * Psychometric standards:
 *   - Easy difficulty: foundational experimental design concepts
 *   - Clinical scenario context on every item
 *   - Plausible distractors using correct ABA terminology
 *   - No absolute language (always/never) in distractors
 */

import type { Question } from "./types";

export const tier6Pool_D_easy: Question[] = [
  {
    id: "t6-D-pool-37",
    domain: "D",
    taskItem: "D-1",
    difficulty: "easy",
    bloomsLevel: "knowledge",
    scenario: `A BCBA is explaining the purpose of experimental design to a supervisee. She explains that behavior analysts use single-subject experimental designs rather than group designs because they are interested in the behavior of individual clients.`,
    question: `What is the primary purpose of using a single-subject experimental design in applied behavior analysis?`,
    choices: [
      { letter: "B", text: `To demonstrate that an intervention is effective for a large group of participants by averaging data across individuals and comparing group means.` },
      { letter: "A", text: `To establish a functional relationship between an independent variable (intervention) and a dependent variable (behavior) for an individual subject.` },
      { letter: "C", text: `To compare the effectiveness of two or more interventions by randomly assigning participants to different treatment conditions.` },
      { letter: "D", text: `To describe the natural history of a behavior over time without introducing any experimental manipulation or intervention.` },
    ],
    correctAnswer: "A",
    rationale: `Choice A is correct. The primary purpose of single-subject experimental design in ABA is to establish a functional relationship between the independent variable (the intervention or experimental manipulation) and the dependent variable (the target behavior) for an individual subject. Single-subject designs allow the researcher to demonstrate that changes in the dependent variable were caused by the independent variable, not by extraneous factors. Choice B is incorrect because averaging data across individuals and comparing group means describes group experimental designs, not single-subject designs. Choice C is incorrect because random assignment to treatment conditions is a feature of group designs, not single-subject designs. Choice D is incorrect because describing the natural history of a behavior without experimental manipulation describes observational or descriptive research, not experimental design.`,
  },

  {
    id: "t6-D-pool-38",
    domain: "D",
    taskItem: "D-2",
    difficulty: "easy",
    bloomsLevel: "knowledge",
    scenario: `A BCBA is reviewing a research study that used a reversal design (ABAB). She explains to her supervisee that the reversal design is one of the most common single-subject designs used in behavior analysis.`,
    question: `What is the defining feature of a reversal (ABAB) design?`,
    choices: [
      { letter: "A", text: `The design introduces the intervention to multiple behaviors sequentially, demonstrating that each behavior changes only when the intervention is applied to it.` },
      { letter: "B", text: `The design alternates rapidly between two or more conditions within a single session to compare their effects on behavior.` },
      { letter: "C", text: `The design introduces and then withdraws the intervention at least once, demonstrating that behavior changes when the intervention is introduced and reverses when it is withdrawn.` },
      { letter: "D", text: `The design introduces the intervention at different points in time for different participants, demonstrating that behavior changes only after the intervention is introduced for each participant.` },
    ],
    correctAnswer: "C",
    rationale: `Choice C is correct. The reversal (ABAB) design introduces the intervention (B phase), then withdraws it to return to baseline conditions (second A phase), and then reintroduces the intervention (second B phase). The demonstration that behavior changes when the intervention is introduced and reverses (returns toward baseline) when it is withdrawn provides strong evidence for a functional relationship. Choice A is incorrect because introducing the intervention to multiple behaviors sequentially describes a multiple baseline design, not a reversal design. Choice B is incorrect because alternating rapidly between conditions within a session describes an alternating treatments design (ATD), not a reversal design. Choice D is incorrect because introducing the intervention at different points in time for different participants describes a multiple baseline across participants design, not a reversal design.`,
  },

  {
    id: "t6-D-pool-39",
    domain: "D",
    taskItem: "D-3",
    difficulty: "easy",
    bloomsLevel: "knowledge",
    scenario: `A BCBA is explaining the concept of internal validity to a graduate student. She explains that internal validity is a key criterion for evaluating the quality of an experiment.`,
    question: `What does internal validity refer to in the context of single-subject experimental design?`,
    choices: [
      { letter: "D", text: `The degree to which the findings of a study can be generalized to other individuals, settings, and behaviors beyond those included in the study.` },
      { letter: "B", text: `The degree to which the experimental procedures are described with sufficient detail that another researcher could replicate the study.` },
      { letter: "C", text: `The degree to which the dependent variable measure accurately captures the true value of the behavior being measured.` },
      { letter: "A", text: `The degree to which the observed changes in the dependent variable can be attributed to the independent variable rather than to extraneous variables.` },
    ],
    correctAnswer: "A",
    rationale: `Choice A is correct. Internal validity refers to the degree to which the observed changes in the dependent variable can be confidently attributed to the independent variable (the intervention) rather than to extraneous or confounding variables. A study with high internal validity allows the researcher to conclude that the intervention caused the behavior change. Choice D is incorrect because this describes external validity (generalizability) — the degree to which findings can be extended beyond the original study. Choice B is incorrect because this describes replicability or technological adequacy — the degree to which procedures are described clearly enough for replication. Choice C is incorrect because this describes measurement validity — the accuracy of the measurement procedure — which is a different concept from experimental internal validity.`,
  },

  {
    id: "t6-D-pool-40",
    domain: "D",
    taskItem: "D-4",
    difficulty: "easy",
    bloomsLevel: "knowledge",
    scenario: `A BCBA is reviewing a study that used a multiple baseline design across three participants. The intervention was introduced to each participant at a different point in time, and behavior changed for each participant only after the intervention was introduced.`,
    question: `What is the primary advantage of a multiple baseline design over a reversal (ABAB) design?`,
    choices: [
      { letter: "A", text: `The multiple baseline design requires fewer data points to establish a functional relationship, making it more efficient than the reversal design.` },
      { letter: "B", text: `The multiple baseline design does not require the withdrawal of the intervention to demonstrate a functional relationship, making it suitable when reversal is impractical or unethical.` },
      { letter: "C", text: `The multiple baseline design provides a stronger demonstration of functional relationships because it includes more experimental conditions than the reversal design.` },
      { letter: "D", text: `The multiple baseline design eliminates the need for a baseline phase, allowing the intervention to be introduced immediately without waiting for stable data.` },
    ],
    correctAnswer: "B",
    rationale: `Choice B is correct. The primary advantage of a multiple baseline design is that it does not require the withdrawal of the intervention to demonstrate a functional relationship. In a reversal design, the intervention must be withdrawn (returned to baseline) to show that behavior reverses — which may be impractical (e.g., the behavior cannot be reversed once learned) or unethical (e.g., the target behavior is dangerous). The multiple baseline design demonstrates a functional relationship by showing that behavior changes for each tier only when the intervention is introduced to that tier. Choice A is incorrect because multiple baseline designs typically require more data points than reversal designs, not fewer. Choice C is incorrect because the strength of a functional relationship demonstration depends on the number of replications and the clarity of the data, not simply on the number of conditions. Choice D is incorrect because multiple baseline designs do require a baseline phase for each tier — the intervention is introduced at staggered time points, but baseline data must be collected for each tier before the intervention is introduced.`,
  },

  {
    id: "t6-D-pool-41",
    domain: "D",
    taskItem: "D-5",
    difficulty: "easy",
    bloomsLevel: "knowledge",
    scenario: `A BCBA is explaining the concept of a dependent variable to a new supervisee. She explains that the dependent variable is what is measured in an experiment.`,
    question: `In a behavior-analytic experiment, what is the dependent variable?`,
    choices: [
      { letter: "A", text: `The intervention or treatment that the researcher introduces to produce a change in behavior, such as a reinforcement procedure or a prompting strategy.` },
      { letter: "B", text: `The environmental conditions present during the baseline phase, before any intervention has been introduced.` },
      { letter: "C", text: `The behavior or behavioral dimension that is measured to determine whether the intervention produced a change.` },
      { letter: "D", text: `The setting or context in which the experiment is conducted, such as a clinic, school, or home environment.` },
    ],
    correctAnswer: "C",
    rationale: `Choice C is correct. The dependent variable in a behavior-analytic experiment is the behavior or behavioral dimension that is measured to determine whether the independent variable (the intervention) produced a change. For example, if a researcher is studying the effect of a token economy on on-task behavior, on-task behavior is the dependent variable. Choice A is incorrect because the intervention or treatment is the independent variable — the variable that is manipulated by the researcher. Choice B is incorrect because the baseline conditions are the environmental conditions present before the intervention — they are not the dependent variable, though the dependent variable is measured during baseline. Choice D is incorrect because the setting is an environmental variable that may affect the dependent variable, but it is not the dependent variable itself.`,
  },

  {
    id: "t6-D-pool-42",
    domain: "D",
    taskItem: "D-6",
    difficulty: "easy",
    bloomsLevel: "analysis",
    scenario: `A BCBA is reviewing a graph and explaining the concept of visual analysis to a supervisee. She explains that behavior analysts use visual analysis rather than statistical analysis to evaluate the effects of interventions.`,
    question: `Which of the following is a key feature that behavior analysts examine when visually analyzing data within a phase?`,
    choices: [
      { letter: "A", text: `The p-value of the data, which indicates whether the observed change in behavior is statistically significant at a predetermined alpha level.` },
      { letter: "B", text: `The level, trend, and variability of the data within the phase, which together describe the pattern of behavior during that condition.` },
      { letter: "C", text: `The correlation coefficient between the independent and dependent variables, which indicates the strength of the relationship between them.` },
      { letter: "D", text: `The effect size of the intervention, which indicates the magnitude of the behavior change relative to the baseline standard deviation.` },
    ],
    correctAnswer: "B",
    rationale: `Choice B is correct. When visually analyzing data within a phase, behavior analysts examine three key features: level (the overall magnitude of the data), trend (the direction and rate of change over time), and variability (the degree to which data points deviate from the central tendency). These three features, along with the same features examined across phases, form the basis of visual analysis in single-subject research. Choice A is incorrect because p-values are a feature of statistical analysis, not visual analysis — behavior analysts rely on visual analysis rather than inferential statistics to evaluate intervention effects. Choice C is incorrect because correlation coefficients are a statistical measure of association, not a feature of visual analysis. Choice D is incorrect because effect size is a statistical concept used in group research, not a standard feature of visual analysis in single-subject designs.`,
  },

  {
    id: "t6-D-pool-43",
    domain: "D",
    taskItem: "D-7",
    difficulty: "easy",
    bloomsLevel: "knowledge",
    scenario: `A BCBA is explaining the concept of replication to a supervisee. She explains that replication is essential for establishing confidence in the findings of a study and for building the science of behavior analysis.`,
    question: `What is the purpose of replication in single-subject research?`,
    choices: [
      { letter: "A", text: `Replication increases the sample size of a study by adding more participants, which improves the statistical power of the analysis.` },
      { letter: "B", text: `Replication demonstrates that the findings of a study are consistent across different conditions within the same experiment, strengthening the evidence for a functional relationship.` },
      { letter: "C", text: `Replication confirms that the dependent variable measure is reliable by showing that two independent observers produce the same data.` },
      { letter: "D", text: `Replication demonstrates that the findings of a study can be reproduced across different subjects, settings, or researchers, increasing confidence in the generality and validity of the results.` },
    ],
    correctAnswer: "D",
    rationale: `Choice D is correct. Replication in single-subject research serves to demonstrate that findings can be reproduced across different subjects, settings, or researchers — this increases confidence in the generality and validity of the results. Direct replication (repeating the study under the same conditions) and systematic replication (repeating the study with variations) both contribute to the scientific knowledge base. Choice A is incorrect because increasing sample size to improve statistical power is a feature of group research, not single-subject research. Choice B is incorrect because demonstrating consistency across conditions within the same experiment describes within-experiment replication (e.g., the second B phase in an ABAB design), which is one type of replication but not the full purpose of replication. Choice C is incorrect because demonstrating that two observers produce the same data describes interobserver agreement (IOA), which is a measure of measurement reliability — not experimental replication.`,
  },
];
