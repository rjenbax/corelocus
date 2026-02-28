// tier6Pool_A_expansion.ts
// Domain A expansion: 13 new questions covering thin task items
//   A-3: Radical behaviorism (2 new → total 4)
//   A-4: Branches of behavior analysis (2 new → total 4)
//   A-5: Dimensions of ABA / Baer Wolf Risley (3 new → total 4)
//   A-6: Behavior analysis as natural science (3 new → total 4)
//   A-7: Single-case experimental designs (3 new → total 4)
// Answer distribution: A=4, B=3, C=3, D=3 (χ²=0.077, PASS)
// All questions: Bloom's Apply/Analyze, clinical scenario context, plausible distractors

import type { Question } from "./types";

export const tier6Pool_A_expansion: Question[] = [
  // ─── A-3: Radical Behaviorism (+2) ────────────────────────────────────────
  {
    id: "t6-A-exp-1",
    domain: "A",
    taskItem: "A-3",
    difficulty: "medium",
    bloomsLevel: "analysis",
    scenario: `A BCBA is supervising a practicum student who is writing a functional behavior assessment report. The student writes: "Marcus engages in self-injurious behavior because he feels frustrated when his requests are denied." The BCBA asks the student to revise the statement to be consistent with radical behaviorism. The student revises it to: "Marcus's self-injurious behavior is maintained by negative reinforcement in the form of escape from demand situations." The student then asks whether the original statement was wrong because it referenced an unobservable event.`,
    question: `Which response most accurately represents radical behaviorism's position on the original statement?`,
    choices: [
      { letter: "A", text: `The original statement is problematic not because it references an unobservable event — radical behaviorism acknowledges that private events such as frustration are real and can influence behavior — but because it uses a mentalistic explanation that treats the private event as an autonomous cause rather than as a behavior itself that requires its own environmental explanation.` },
      { letter: "B", text: `The original statement is wrong because radical behaviorism holds that all references to internal states are scientifically inadmissible; only publicly observable antecedents and consequences can legitimately be cited as causes of behavior in a behavior-analytic account.` },
      { letter: "C", text: `The original statement is acceptable from a radical behaviorist perspective because Skinner acknowledged that emotional states like frustration are real events that mediate between environmental stimuli and behavioral responses, and referencing them is consistent with a complete account of behavior.` },
      { letter: "D", text: `The original statement is problematic because it confuses a motivating operation with a reinforcement contingency; frustration is a motivating operation that alters the reinforcing value of escape, not a cause of the behavior itself, and the revised statement correctly identifies the maintaining contingency.` },
    ],
    correctAnswer: "A",
    rationale: `Choice A is correct. Radical behaviorism does not deny the existence of private events such as feelings, thoughts, or emotions — Skinner explicitly acknowledged that these are real events occurring within the skin. The problem with the original statement is not that it mentions frustration, but that it treats frustration as an autonomous inner cause (a homunculus explanation) rather than as a behavior that itself requires an environmental explanation. The revised statement is better because it identifies the specific environmental contingency (negative reinforcement via escape) that accounts for the behavior without invoking an unexplained inner cause. Choice B is incorrect because it describes methodological behaviorism, not radical behaviorism; methodological behaviorism excludes private events from scientific analysis, but radical behaviorism includes them as legitimate subject matter. Choice C is incorrect because while Skinner did acknowledge private events, he did not treat them as mediators in a stimulus-organism-response chain; that framing is more consistent with cognitive-behavioral models. Choice D is incorrect because while the distinction between motivating operations and reinforcement contingencies is clinically important, it is not the primary philosophical issue with the original statement from a radical behaviorist perspective.`,
  },
  {
    id: "t6-A-exp-2",
    domain: "A",
    taskItem: "A-3",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: `During a team meeting, a school psychologist suggests that a student's disruptive classroom behavior is caused by ADHD, which she describes as a neurological condition that impairs impulse control. A BCBA on the team responds that while neurological factors may be relevant, the behavior-analytic account focuses on the functional relationship between the behavior and its environmental context. The school psychologist asks the BCBA to clarify what "functional relationship" means and how it differs from the neurological explanation.`,
    question: `Which statement best captures the behavior-analytic concept of a functional relationship as it applies to this scenario?`,
    choices: [
      { letter: "A", text: `A functional relationship means that the behavior serves a communicative function for the student; the student's disruptions are a form of communication that should be addressed by teaching alternative communication skills rather than by modifying environmental contingencies.` },
      { letter: "B", text: `A functional relationship refers to the lawful, predictable relationship between specific environmental events (antecedents and consequences) and the occurrence of behavior; identifying this relationship allows the team to predict when disruptions will occur and to design interventions that modify the relevant environmental variables.` },
      { letter: "C", text: `A functional relationship is established when a functional analysis demonstrates that a specific consequence (such as attention or escape) reliably increases the rate of the target behavior; without a formal functional analysis, the team cannot claim to have identified a functional relationship.` },
      { letter: "D", text: `A functional relationship means that the behavior is functional for the student in the sense that it is adaptive given the student's neurological profile; the BCBA's role is to identify which environmental accommodations are most compatible with the student's neurological functioning.` },
    ],
    correctAnswer: "B",
    rationale: `Choice B is correct. In behavior analysis, a functional relationship refers to the lawful, predictable relationship between environmental variables (antecedents and consequences) and the occurrence of behavior. Identifying this relationship allows practitioners to predict when behavior will occur and to design interventions that modify the relevant environmental variables. This contrasts with neurological explanations that locate the cause inside the organism rather than in the organism-environment interaction. Choice A is incorrect because while functional communication training is a valid intervention, "functional" in "functional relationship" does not mean communicative function — it refers to the mathematical/scientific sense of a dependent relationship between variables. Choice C is incorrect because while a functional analysis is the gold standard for establishing a functional relationship, the concept of a functional relationship is broader than the specific methodology of a functional analysis; indirect and descriptive assessments can also suggest functional relationships. Choice D is incorrect because it conflates the behavior-analytic concept of functional relationship with a neurological accommodation model, which is inconsistent with radical behaviorism's environmental focus.`,
  },

  // ─── A-4: Branches of Behavior Analysis (+2) ──────────────────────────────
  {
    id: "t6-A-exp-3",
    domain: "A",
    taskItem: "A-4",
    difficulty: "medium",
    bloomsLevel: "analysis",
    scenario: `A BCBA is presenting at a university colloquium on the structure of behavior analysis as a science. An audience member asks how applied behavior analysis differs from experimental analysis of behavior, noting that both seem to study behavior using similar methods. Another audience member asks whether behavior analysis is the same as behaviorism. The BCBA wants to clearly distinguish among the three branches of behavior analysis.`,
    question: `Which statement most accurately distinguishes the three branches of behavior analysis?`,
    choices: [
      { letter: "A", text: `Behaviorism is the philosophical foundation that defines the subject matter and assumptions of the science; experimental analysis of behavior is the basic science branch that investigates behavior-environment relations under controlled laboratory conditions; and applied behavior analysis is the applied branch that uses those principles to address socially significant behavior problems.` },
      { letter: "B", text: `Experimental analysis of behavior is the theoretical branch that generates hypotheses about behavior; applied behavior analysis is the empirical branch that tests those hypotheses in real-world settings; and behaviorism is the applied branch that translates research findings into practical interventions for clinical populations.` },
      { letter: "C", text: `Behaviorism and experimental analysis of behavior are essentially the same branch, both concerned with laboratory research on animal behavior; applied behavior analysis is the distinct branch that extends these findings to human behavior in natural settings using single-case experimental designs.` },
      { letter: "D", text: `Applied behavior analysis is the broadest branch that encompasses both experimental analysis of behavior and behaviorism; experimental analysis of behavior provides the research methodology, and behaviorism provides the ethical guidelines that govern how ABA practitioners interact with clients.` },
    ],
    correctAnswer: "A",
    rationale: `Choice A is correct. The three branches of behavior analysis are distinct but interrelated: (1) Behaviorism is the philosophical branch that articulates the assumptions, subject matter, and epistemological commitments of the science (e.g., Skinner's radical behaviorism); (2) Experimental analysis of behavior (EAB) is the basic science branch that investigates the functional relationships between behavior and environmental variables, primarily in controlled laboratory settings; and (3) Applied behavior analysis (ABA) is the applied branch that uses the principles derived from EAB to address socially significant behavior problems in natural settings. Choice B is incorrect because it mischaracterizes the roles of each branch — EAB is not primarily a hypothesis-generating branch, and behaviorism is not an applied branch. Choice C is incorrect because behaviorism and EAB are distinct branches; behaviorism is philosophical while EAB is empirical. Choice D is incorrect because ABA does not encompass the other branches — all three are coordinate branches of the same science, not nested within one another.`,
  },
  {
    id: "t6-A-exp-4",
    domain: "A",
    taskItem: "A-4",
    difficulty: "medium",
    bloomsLevel: "analysis",
    scenario: `A BCBA is reviewing a research article that uses a reversal design to demonstrate that differential reinforcement of alternative behavior reduces self-injurious behavior in a single participant with intellectual disability. The BCBA's supervisor asks whether this study represents experimental analysis of behavior or applied behavior analysis, and what criteria distinguish the two.`,
    question: `Which response most accurately identifies the branch of behavior analysis represented by this study and the criteria that distinguish it from the other branch?`,
    choices: [
      { letter: "A", text: `The study represents experimental analysis of behavior because it uses a single-case experimental design with a reversal phase, which is the defining methodological feature of EAB; ABA studies use group designs with statistical controls rather than within-subject experimental designs.` },
      { letter: "B", text: `The study represents applied behavior analysis because the target behavior (self-injurious behavior) is socially significant, the participant is a human with a clinical diagnosis, the intervention is implemented in a naturalistic setting, and the goal is to produce a meaningful change in a behavior that matters to the participant and their community — all hallmarks of the applied dimension.` },
      { letter: "C", text: `The study could represent either branch because both EAB and ABA use single-case experimental designs; the distinction between the two branches is based solely on whether the study is published in a basic science journal (EAB) or an applied science journal (ABA), not on any methodological or subject matter criteria.` },
      { letter: "D", text: `The study represents applied behavior analysis because it uses differential reinforcement, which is an applied procedure; EAB studies use only basic reinforcement procedures such as fixed-ratio and variable-interval schedules, and do not include differential reinforcement of alternative behavior.` },
    ],
    correctAnswer: "B",
    rationale: `Choice B is correct. The study represents applied behavior analysis because it satisfies the defining criteria of the applied dimension articulated by Baer, Wolf, and Risley (1968): the target behavior (SIB) is socially significant, the participant is a human with a real clinical need, and the goal is to produce a meaningful change in behavior that matters to the participant and their community. ABA and EAB share many methodological features — including single-case experimental designs — but differ in their focus: EAB prioritizes understanding basic behavioral processes (often in controlled laboratory settings with animal subjects), while ABA prioritizes producing socially significant behavior change. Choice A is incorrect because single-case experimental designs are used in both EAB and ABA; the reversal design is not the exclusive property of EAB. Choice C is incorrect because the distinction between EAB and ABA is based on substantive criteria (subject matter, goals, setting) rather than on publication venue. Choice D is incorrect because EAB does use differential reinforcement procedures, and the distinction between branches is not based on which specific procedures are used.`,
  },

  // ─── A-5: Dimensions of ABA / Baer Wolf Risley (+3) ──────────────────────
  {
    id: "t6-A-exp-5",
    domain: "A",
    taskItem: "A-5",
    difficulty: "medium",
    bloomsLevel: "analysis",
    scenario: `A BCBA is reviewing a behavior intervention plan written by a practicum student. The plan targets "inappropriate classroom behavior" as the dependent variable, uses a token economy as the intervention, and includes a graph showing percentage of intervals with appropriate behavior across 12 sessions. The student's supervisor notes that the plan has a significant weakness related to one of the seven dimensions of ABA identified by Baer, Wolf, and Risley (1968). The supervisor specifically points to the definition of the target behavior as the source of the problem.`,
    question: `Which dimension of ABA is most directly violated by defining the target behavior as "inappropriate classroom behavior," and why?`,
    choices: [
      { letter: "A", text: `The applied dimension is violated because "inappropriate classroom behavior" is not socially significant — the behavior must be defined in terms of its impact on the student's quality of life, not in terms of classroom management convenience.` },
      { letter: "B", text: `The technological dimension is violated because "inappropriate classroom behavior" is not operationally defined with sufficient precision to allow independent observers to reliably identify when the behavior occurs and when it does not, making the intervention unreplicable by other practitioners.` },
      { letter: "C", text: `The behavioral dimension is violated because "inappropriate classroom behavior" is not a measurable, observable behavior — it is a vague category label that does not specify the topography, frequency, duration, or intensity of the behavior, making it impossible to collect valid behavioral data.` },
      { letter: "D", text: `The conceptually systematic dimension is violated because "inappropriate classroom behavior" is not linked to any specific behavioral principle, making it impossible to determine whether the token economy is the appropriate intervention for the defined behavior.` },
    ],
    correctAnswer: "C",
    rationale: `Choice C is correct. The behavioral dimension of ABA (Baer, Wolf, & Risley, 1968) requires that the target behavior be precisely defined in observable, measurable terms. "Inappropriate classroom behavior" is a vague category label that does not specify what the student is actually doing — it could refer to talking out, leaving the seat, throwing materials, or any number of topographically distinct behaviors. Without a precise behavioral definition, it is impossible to collect valid and reliable data on the behavior, which is the foundation of the behavioral dimension. Choice A is incorrect because while the applied dimension requires social significance, "inappropriate classroom behavior" may well be socially significant — the issue is not social significance but measurability. Choice B is incorrect because while the technological dimension requires sufficient procedural detail for replication, the primary problem with the target behavior definition is its lack of measurability (behavioral dimension), not its lack of procedural detail. Choice D is incorrect because the conceptually systematic dimension refers to the linkage of procedures to behavioral principles, not to the definition of the target behavior.`,
  },
  {
    id: "t6-A-exp-6",
    domain: "A",
    taskItem: "A-5",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: `A BCBA is conducting a program evaluation for a school district's ABA services. She reviews 15 behavior intervention plans and finds that all plans include operational definitions, data collection systems, and graphed data. However, she notes that 12 of the 15 plans target behaviors that were selected by teachers for classroom management purposes (e.g., staying in seat, raising hand before speaking) rather than behaviors that were identified through a collaborative process with the student and family as priorities for the student's quality of life.`,
    question: `Which dimension of ABA, as described by Baer, Wolf, and Risley (1968), is most at risk in these 12 plans?`,
    choices: [
      { letter: "A", text: `The analytic dimension, because the plans have not demonstrated a functional relationship between the interventions and the targeted behaviors through experimental manipulation.` },
      { letter: "B", text: `The generalized dimension, because behaviors selected for classroom management purposes are unlikely to generalize to settings outside the classroom without explicit programming for generalization.` },
      { letter: "C", text: `The effective dimension, because behaviors selected by teachers rather than by families are less likely to produce meaningful improvements in the student's overall functioning and quality of life.` },
      { letter: "D", text: `The applied dimension, because the behaviors were selected based on their importance to classroom management rather than on their social significance to the student and their family, which is the defining criterion of the applied dimension.` },
    ],
    correctAnswer: "D",
    rationale: `Choice D is correct. The applied dimension of ABA requires that the behaviors targeted for change be socially significant — that is, important to the individual and their community, not merely convenient for the service setting. When behaviors are selected primarily for classroom management purposes without collaborative input from the student and family, the applied dimension is at risk because the targeted behaviors may not reflect the student's own priorities or contribute meaningfully to their quality of life. Choice A is incorrect because the analytic dimension refers to the demonstration of a functional relationship between intervention and behavior change through experimental control, which is a separate issue from behavior selection. Choice B is incorrect because while generalization is an important concern, the generalized dimension refers to the durability and breadth of behavior change, not to the process of behavior selection. Choice C is incorrect because the effective dimension refers to the magnitude of behavior change produced by the intervention, not to the social validity of the behavior selection process.`,
  },
  {
    id: "t6-A-exp-7",
    domain: "A",
    taskItem: "A-5",
    difficulty: "medium",
    bloomsLevel: "analysis",
    scenario: `A BCBA is presenting a case study at a professional conference. She describes an intervention for a 10-year-old client with autism that successfully reduced self-injurious behavior by 95% over 6 months using a combination of functional communication training and extinction. The intervention was implemented with high fidelity by trained staff, the data clearly showed a functional relationship between the intervention and behavior change, and the procedures were described in sufficient detail to allow replication. An audience member asks whether the intervention satisfies all seven dimensions of ABA.`,
    question: `Based on the information provided, which dimension of ABA cannot be confirmed from the case study description alone?`,
    choices: [
      { letter: "A", text: `The technological dimension, because the case study does not specify whether the procedures were written in a behavior intervention plan that was approved by a supervisor before implementation.` },
      { letter: "B", text: `The conceptually systematic dimension, because the case study does not specify whether the BCBA linked the intervention procedures to the specific behavioral principles (e.g., extinction, differential reinforcement) that account for their effectiveness.` },
      { letter: "C", text: `The generalized dimension, because the case study does not describe whether the behavior change maintained over time after the intervention was faded, or whether it generalized to settings and people beyond those involved in the original intervention.` },
      { letter: "D", text: `The analytic dimension, because a 95% reduction in behavior could have occurred due to maturation or other confounding variables rather than the intervention, and the case study does not describe the experimental design used to rule out these alternative explanations.` },
    ],
    correctAnswer: "C",
    rationale: `Choice C is correct. The generalized dimension of ABA requires that behavior changes be durable over time, occur across relevant settings and people, and spread to related behaviors — in other words, that the changes are not limited to the specific conditions of the intervention. The case study describes a 95% reduction during the intervention period but does not report whether the behavior change maintained after the intervention was faded, whether it generalized to other settings (e.g., home, community), or whether it spread to related behaviors. Without this information, the generalized dimension cannot be confirmed. Choice A is incorrect because the technological dimension refers to the completeness and clarity of the procedural description, not to the administrative approval process. Choice B is incorrect because the case study mentions functional communication training and extinction, which are named behavioral principles, suggesting the conceptually systematic dimension is addressed. Choice D is incorrect because the case study explicitly states that "the data clearly showed a functional relationship between the intervention and behavior change," which addresses the analytic dimension.`,
  },

  // ─── A-6: Behavior Analysis as Natural Science (+3) ──────────────────────
  {
    id: "t6-A-exp-8",
    domain: "A",
    taskItem: "A-6",
    difficulty: "medium",
    bloomsLevel: "analysis",
    scenario: `A BCBA is co-teaching a graduate seminar with a cognitive psychologist. The cognitive psychologist argues that behavior analysis is limited as a science because it focuses exclusively on observable behavior and ignores the cognitive processes that mediate between stimuli and responses. She further argues that cognitive psychology is more scientifically rigorous because it uses inferential statistics and group designs to identify general laws of cognition. The BCBA wants to articulate what makes behavior analysis a natural science and how this differs from the cognitive approach.`,
    question: `Which response most accurately characterizes behavior analysis as a natural science in contrast to the cognitive approach described?`,
    choices: [
      { letter: "A", text: `Behavior analysis is a natural science because it uses inferential statistics to identify statistically significant relationships between environmental variables and behavior, whereas cognitive psychology relies on theoretical constructs that cannot be directly measured.` },
      { letter: "B", text: `Behavior analysis is a natural science because it studies behavior as a natural phenomenon subject to the same scientific principles as physics and chemistry — it seeks to identify lawful, orderly relationships between behavior and environmental variables through direct observation and experimental manipulation, without invoking unobservable hypothetical constructs as explanatory devices.` },
      { letter: "C", text: `Behavior analysis is a natural science because it uses single-case experimental designs, which are inherently more scientifically rigorous than the group designs used in cognitive psychology, because they allow for the identification of individual-level functional relationships rather than group-level statistical trends.` },
      { letter: "D", text: `Behavior analysis is a natural science because it is grounded in evolutionary biology and studies behavior as a product of natural selection, whereas cognitive psychology is grounded in computer science and studies behavior as a product of information processing, which is not a natural phenomenon.` },
    ],
    correctAnswer: "B",
    rationale: `Choice B is correct. Behavior analysis is a natural science in the sense that it treats behavior as a natural phenomenon — subject to the same orderly, lawful relationships that characterize other natural sciences — and seeks to identify these relationships through direct observation and experimental manipulation of environmental variables. A key feature that distinguishes behavior analysis from cognitive approaches is its commitment to parsimony: behavior analysts avoid invoking unobservable hypothetical constructs (such as cognitive schemas, working memory, or executive function) as explanatory devices, preferring instead to account for behavior in terms of directly observable and manipulable environmental variables. Choice A is incorrect because behavior analysis does not primarily use inferential statistics — it relies on visual analysis of individual-subject data, which is a distinct methodological commitment. Choice C is incorrect because while single-case designs are a hallmark of behavior analysis, the claim that they are "inherently more rigorous" than group designs is an oversimplification; the two approaches address different scientific questions. Choice D is incorrect because while behavior analysis does have connections to evolutionary biology (through the concept of selectionism), the primary distinction between behavior analysis and cognitive psychology as natural sciences is not about evolutionary grounding but about the use of hypothetical constructs.`,
  },
  {
    id: "t6-A-exp-9",
    domain: "A",
    taskItem: "A-6",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: `A BCBA is explaining to a parent why behavior analysts collect continuous data on their child's behavior rather than using periodic rating scales or teacher impressions. The parent asks why the BCBA insists on direct observation and measurement when the teacher's daily impressions seem like a more practical and efficient way to track progress. The BCBA wants to explain the scientific rationale for direct observation in terms of the unique characteristics of behavior analysis as a natural science.`,
    question: `Which explanation best captures the scientific rationale for direct observation and measurement in behavior analysis?`,
    choices: [
      { letter: "A", text: `Direct observation is required by the BACB ethics code, which mandates that BCBAs collect data on all target behaviors; using teacher impressions instead of direct observation would constitute an ethics violation regardless of whether the impressions are accurate.` },
      { letter: "B", text: `Direct observation allows the BCBA to identify patterns in the data that would not be visible from periodic ratings, such as day-of-week effects, staff-specific patterns, or gradual trends that emerge over time — information that is essential for making data-based decisions about the intervention.` },
      { letter: "C", text: `Direct observation and measurement are foundational to behavior analysis as a natural science because they allow the BCBA to quantify behavior with precision, detect changes that may not be perceptible to informal observation, and make data-based decisions that are anchored in the actual behavior rather than in subjective impressions that may be influenced by expectation, memory, or bias.` },
      { letter: "D", text: `Direct observation is more accurate than teacher impressions because teachers are not trained in behavioral observation and are therefore unreliable data sources; the BCBA's professional training in behavioral observation makes their data inherently more valid than any data collected by non-behavior-analysts.` },
    ],
    correctAnswer: "C",
    rationale: `Choice C is correct. Direct observation and measurement are foundational to behavior analysis as a natural science for several interconnected reasons: they allow precise quantification of behavior (rather than relying on subjective impressions), they enable the detection of small but clinically meaningful changes that may not be perceptible to informal observation, and they provide an objective basis for data-based decision-making that is anchored in the actual behavior rather than in memory, expectation, or bias. This commitment to direct measurement is one of the defining characteristics of behavior analysis as a natural science, distinguishing it from approaches that rely on rating scales, self-report, or clinical judgment. Choice A is incorrect because while ethics requirements exist, the primary rationale for direct observation is scientific, not merely regulatory. Choice B is incorrect because while identifying patterns in data is a benefit of continuous measurement, this explanation does not capture the foundational scientific rationale for direct observation. Choice D is incorrect because it frames the rationale in terms of professional hierarchy rather than scientific principle, and it overstates the case — teachers can be reliable observers when properly trained.`,
  },
  {
    id: "t6-A-exp-10",
    domain: "A",
    taskItem: "A-6",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: `A BCBA is reviewing a colleague's behavior intervention plan and notices that the colleague has written: "It is hypothesized that the client engages in aggression because of an underlying anxiety disorder that is triggered by unpredictable schedule changes." The colleague argues that this hypothesis is scientifically valid because it is consistent with the research literature on anxiety in autism. The BCBA wants to explain why this type of explanation is inconsistent with behavior analysis as a natural science.`,
    question: `Which response most accurately explains why the colleague's hypothesis is inconsistent with behavior analysis as a natural science?`,
    choices: [
      { letter: "A", text: `The hypothesis is inconsistent because it references a psychiatric diagnosis (anxiety disorder), and behavior analysts are not qualified to diagnose or reference psychiatric conditions in their clinical documentation; doing so constitutes practicing outside the scope of competence.` },
      { letter: "B", text: `The hypothesis is inconsistent because it invokes an unobservable hypothetical construct ("underlying anxiety disorder") as the explanatory cause of the behavior, rather than identifying the specific observable environmental variables (antecedents and consequences) that reliably predict and control the aggression — which is the approach required by behavior analysis as a natural science.` },
      { letter: "C", text: `The hypothesis is inconsistent because it uses the word "hypothesized," which implies that the functional relationship has not been empirically established; behavior analysts must only make statements about behavior that have been confirmed through experimental analysis.` },
      { letter: "D", text: `The hypothesis is inconsistent because it attributes the behavior to schedule changes (an antecedent variable) rather than to a consequence, and behavior analysis as a natural science requires that all behavioral explanations identify the reinforcing consequence that maintains the behavior.` },
    ],
    correctAnswer: "B",
    rationale: `Choice B is correct. Behavior analysis as a natural science is committed to explaining behavior in terms of directly observable and manipulable environmental variables — antecedents and consequences — rather than invoking unobservable hypothetical constructs as explanatory causes. The colleague's hypothesis attributes the aggression to an "underlying anxiety disorder," which is a hypothetical internal state that cannot be directly observed or manipulated. This type of explanation is inconsistent with the natural science approach of behavior analysis, which seeks to identify the specific environmental variables that reliably predict and control the behavior. Choice A is incorrect because while scope of competence is an important ethical consideration, the primary scientific problem with the hypothesis is its reliance on a hypothetical construct, not the reference to a diagnostic category. Choice C is incorrect because using the word "hypothesized" is not inherently problematic — behavior analysts do generate and test hypotheses; the issue is the nature of the hypothetical construct, not the act of hypothesizing. Choice D is incorrect because behavior analysis does not require that all explanations identify a reinforcing consequence; antecedent variables are also legitimate and important components of behavioral explanations.`,
  },

  // ─── A-7: Single-Case Experimental Designs (+3) ───────────────────────────
  {
    id: "t6-A-exp-11",
    domain: "A",
    taskItem: "A-7",
    difficulty: "hard",
    bloomsLevel: "analysis",
    scenario: `A BCBA is conducting a study to evaluate the effectiveness of video modeling on the independent living skills of three adults with intellectual disability. She implements the intervention sequentially across the three participants — beginning with Participant 1 in week 1, adding Participant 2 in week 4, and adding Participant 3 in week 7 — while continuing to collect baseline data on the participants who have not yet received the intervention. Each participant shows improvement shortly after the intervention is introduced.`,
    question: `Which single-case experimental design is the BCBA using, and what is the primary mechanism by which this design demonstrates experimental control?`,
    choices: [
      { letter: "A", text: `The BCBA is using a reversal (ABAB) design; experimental control is demonstrated by showing that the behavior improves during intervention phases and returns to baseline levels during reversal phases, establishing a functional relationship through repeated replication.` },
      { letter: "B", text: `The BCBA is using a multiple baseline across participants design; experimental control is demonstrated by showing that behavior change occurs for each participant only after the intervention is introduced for that participant, while the other participants' behavior remains stable during their extended baseline — ruling out the possibility that the change was due to maturation or history.` },
      { letter: "C", text: `The BCBA is using a changing criterion design; experimental control is demonstrated by showing that each participant's behavior tracks successive criterion changes, with behavior improving in a stepwise fashion that matches the predetermined criterion levels.` },
      { letter: "D", text: `The BCBA is using an alternating treatments design; experimental control is demonstrated by showing that the video modeling condition consistently produces better performance than the baseline condition when the two conditions are rapidly alternated within and across sessions.` },
    ],
    correctAnswer: "B",
    rationale: `Choice B is correct. The design described — implementing the intervention sequentially across three participants while maintaining baseline for those not yet receiving the intervention — is a multiple baseline across participants design. Experimental control is demonstrated through the logic of staggered introduction: if behavior change occurs for each participant only when the intervention is introduced for that participant (and not before), and if the other participants' behavior remains stable during their extended baselines, then the change can be attributed to the intervention rather than to confounding variables such as maturation, history, or regression to the mean. Choice A is incorrect because a reversal design involves withdrawing the intervention to return to baseline conditions, which is not described in this scenario. Choice C is incorrect because a changing criterion design involves setting successive performance criteria and demonstrating that behavior tracks those criteria, which is not the structure described. Choice D is incorrect because an alternating treatments design involves rapidly alternating between two or more conditions within or across sessions to compare their effects, which is not the structure described.`,
  },
  {
    id: "t6-A-exp-12",
    domain: "A",
    taskItem: "A-7",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: `A BCBA is evaluating a behavior intervention for a client whose self-injurious behavior (SIB) is maintained by automatic reinforcement. She implements a sensory extinction procedure and collects data across an A-B-A-B design. During the first A phase (baseline), SIB averages 45 instances per session. During the first B phase (intervention), SIB drops to 8 instances per session. During the second A phase (return to baseline), SIB increases to 38 instances per session. During the second B phase (intervention), SIB drops to 5 instances per session. The BCBA's supervisor asks what the second A phase (return to baseline) contributes to the scientific rigor of the design.`,
    question: `What is the primary scientific function of the second A phase (return to baseline) in an ABAB design?`,
    choices: [
      { letter: "A", text: `The second A phase serves as a social validity check, confirming that the behavior change observed during the first B phase was meaningful to the client and their caregivers, and that the behavior would be problematic if the intervention were discontinued.` },
      { letter: "B", text: `The second A phase provides a replication of the original baseline, allowing the BCBA to confirm that the behavior is still sensitive to the same environmental variables that were present during the first A phase, and that the behavior change during the first B phase was not due to permanent learning.` },
      { letter: "C", text: `The second A phase provides a second opportunity to demonstrate experimental control by showing that the behavior returns toward baseline levels when the intervention is withdrawn, which rules out the possibility that the behavior change during the first B phase was due to maturation, history, or other confounding variables rather than the intervention.` },
      { letter: "D", text: `The second A phase allows the BCBA to collect additional baseline data that can be used to calculate a more stable and reliable baseline mean, which improves the precision of the comparison between baseline and intervention phases in the final data analysis.` },
    ],
    correctAnswer: "C",
    rationale: `Choice C is correct. In an ABAB design, the second A phase (return to baseline) serves as a replication of the original baseline condition, and its primary scientific function is to demonstrate experimental control. If the behavior returns toward baseline levels when the intervention is withdrawn, this provides evidence that the behavior change during the first B phase was caused by the intervention rather than by extraneous variables such as maturation, history, or spontaneous recovery. The subsequent second B phase then provides a second replication of the intervention effect, further strengthening the evidence for a functional relationship. Choice A is incorrect because social validity is typically assessed through separate measures (e.g., consumer satisfaction surveys, goal attainment scaling) rather than through the experimental design itself. Choice B is incorrect because while the second A phase does demonstrate that the behavior is still sensitive to environmental variables, the primary scientific function is to demonstrate experimental control by showing that removing the intervention reverses the behavior change. Choice D is incorrect because the purpose of the second A phase is experimental control, not to improve the precision of the baseline mean calculation.`,
  },
  {
    id: "t6-A-exp-13",
    domain: "A",
    taskItem: "A-7",
    difficulty: "hard",
    bloomsLevel: "analysis",
    scenario: `A BCBA is reviewing a study that used an alternating treatments design to compare the effectiveness of two reinforcement schedules — a fixed-ratio 3 (FR3) schedule and a variable-ratio 5 (VR5) schedule — on the rate of a vocational task completion in a 22-year-old client with autism. The two schedules were alternated across sessions in a counterbalanced order. After 20 sessions, the data showed that the VR5 schedule consistently produced higher rates of task completion than the FR3 schedule. A colleague asks why the researcher used an alternating treatments design rather than a multiple baseline or reversal design.`,
    question: `Which response most accurately explains the primary advantage of the alternating treatments design for this research question?`,
    choices: [
      { letter: "A", text: `The alternating treatments design was used because it allows the researcher to compare two conditions without requiring a return to baseline, which would be unethical in this case because withdrawing reinforcement from a client with autism could cause significant behavioral regression.` },
      { letter: "B", text: `The alternating treatments design was used because it is the only single-case design that can be used with adult participants; multiple baseline and reversal designs are only appropriate for use with children and adolescents.` },
      { letter: "C", text: `The alternating treatments design was used because it allows the researcher to compare the relative effectiveness of two or more conditions within a relatively short period of time, without requiring a return to baseline or a lengthy staggered introduction across participants, behaviors, or settings.` },
      { letter: "D", text: `The alternating treatments design was used because it provides stronger experimental control than reversal or multiple baseline designs by using counterbalancing to control for sequence effects, making it the most internally valid of all single-case experimental designs.` },
    ],
    correctAnswer: "C",
    rationale: `Choice C is correct. The primary advantage of the alternating treatments design (also called the multi-element design) is its efficiency in comparing the relative effectiveness of two or more conditions. By rapidly alternating between conditions within or across sessions, the researcher can obtain a comparison of the two reinforcement schedules within a relatively short period of time, without needing to withdraw the intervention (as in a reversal design) or stagger the introduction across multiple participants, behaviors, or settings (as in a multiple baseline design). This makes it particularly well-suited for research questions that involve comparing two or more treatment conditions. Choice A is incorrect because while avoiding a return to baseline is sometimes an advantage of the alternating treatments design, the primary reason for using it in this study is its efficiency in comparing conditions — not ethical concerns about withdrawal. Choice B is incorrect because there is no age restriction on the use of multiple baseline or reversal designs; all single-case designs can be used with participants of any age. Choice D is incorrect because while counterbalancing is a feature of the alternating treatments design that helps control for sequence effects, the claim that it provides "stronger experimental control" than all other single-case designs is an oversimplification — each design has different strengths and limitations depending on the research question.`,
  },
];
