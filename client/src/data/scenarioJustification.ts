// Tier 5: Scenario Justification Data
// 30 scenarios × 4 questions each
// Each question: select the correct answer + 3 of 9 justifications
// The 9 justifications = 3 correct (justify the right answer) + 6 distractors (justify the wrong answers)

export interface Justification {
  id: string;
  text: string;
  isCorrect: boolean; // true = justifies the correct answer
  justifiesChoice?: 'A' | 'B' | 'C' | 'D'; // which answer choice this justification supports
}

export interface ScenarioQuestion {
  id: string;
  stem: string;
  choices: { id: 'A' | 'B' | 'C' | 'D'; text: string }[];
  correctChoice: 'A' | 'B' | 'C' | 'D';
  justifications: Justification[]; // exactly 9: 3 correct + 6 distractors
  explanation: string;
}

export interface ScenarioItem {
  id: string;
  domain: string;
  title: string;
  scenario: string;
  questions: ScenarioQuestion[];
}

export const scenarioItems: ScenarioItem[] = [
  // ── Scenario 1: Functional Assessment ─────────────────────────────────────
  {
    id: 'sj-01',
    domain: 'Assessment',
    title: 'Functional Assessment for Escape-Maintained Aggression',
    scenario: `Marcus is a 9-year-old with autism spectrum disorder who attends a self-contained classroom. His teacher reports that he frequently hits peers and staff. Review of incident reports reveals that hitting occurs most often during math instruction and transitions. When Marcus hits, staff typically remove him from the activity and allow him to sit in the hallway. His parents report no hitting at home during leisure activities.`,
    questions: [
      {
        id: 'sj-01-q1',
        stem: 'Based on the information provided, what is the MOST LIKELY function of Marcus\'s hitting behavior?',
        choices: [
          { id: 'A', text: 'Access to tangibles' },
          { id: 'B', text: 'Escape from demands' },
          { id: 'C', text: 'Attention from adults' },
          { id: 'D', text: 'Automatic reinforcement' },
        ],
        correctChoice: 'B',
        justifications: [
          { id: 'j1', text: 'Hitting occurs most often during math instruction and transitions — both demand contexts.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j2', text: 'When Marcus hits, he is removed from the activity — the consequence is escape from the demand.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j3', text: 'Marcus does not hit at home during leisure activities, suggesting the behavior is context-specific to demand situations.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j4', text: 'Hitting occurs when preferred items are unavailable, suggesting a tangible function.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j5', text: 'Staff provide attention (removing him to the hallway) which could reinforce the behavior through social contact.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j6', text: 'The behavior occurs across all settings including home, suggesting it is maintained by automatic reinforcement.', isCorrect: false, justifiesChoice: 'D' },
          { id: 'j7', text: 'The incident reports do not specify whether tangibles were present, so a tangible function cannot be ruled out.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j8', text: 'Hitting peers specifically suggests attention-seeking behavior directed at peers.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j9', text: 'The sensory properties of hitting may be inherently reinforcing regardless of consequences.', isCorrect: false, justifiesChoice: 'D' },
        ],
        explanation: 'The pattern of behavior (occurs during demands, consequence is escape) strongly indicates an escape function. The absence of hitting at home during leisure further supports this — there are no demands to escape from.',
      },
      {
        id: 'sj-01-q2',
        stem: 'What type of assessment would provide the MOST CONCLUSIVE evidence about the function of Marcus\'s hitting?',
        choices: [
          { id: 'A', text: 'Indirect assessment (parent/teacher interview)' },
          { id: 'B', text: 'ABC narrative recording' },
          { id: 'C', text: 'Functional analysis (experimental)' },
          { id: 'D', text: 'Scatter plot assessment' },
        ],
        correctChoice: 'C',
        justifications: [
          { id: 'j1', text: 'A functional analysis experimentally manipulates antecedents and consequences to demonstrate a functional relationship between environmental variables and the behavior.', isCorrect: true, justifiesChoice: 'C' },
          { id: 'j2', text: 'Only a functional analysis can establish a CAUSAL relationship between the function and the behavior — not just a correlation.', isCorrect: true, justifiesChoice: 'C' },
          { id: 'j3', text: 'Functional analysis provides the highest level of evidence for function identification and is the gold standard in the FBA literature.', isCorrect: true, justifiesChoice: 'C' },
          { id: 'j4', text: 'Parent and teacher interviews provide direct observation data that is more reliable than experimental conditions.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j5', text: 'ABC recording captures the natural contingencies maintaining the behavior without the artificiality of experimental conditions.', isCorrect: false, justifiesChoice: 'B' },
          { id: 'j6', text: 'Scatter plots identify temporal patterns that are sufficient to determine function without experimental manipulation.', isCorrect: false, justifiesChoice: 'D' },
          { id: 'j7', text: 'Interviews are the most comprehensive assessment because they gather information from multiple informants.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j8', text: 'ABC recording is more ecologically valid because it occurs in the natural environment.', isCorrect: false, justifiesChoice: 'B' },
          { id: 'j9', text: 'Scatter plots are the most efficient assessment because they require minimal time and resources.', isCorrect: false, justifiesChoice: 'D' },
        ],
        explanation: 'Functional analysis is the only assessment method that experimentally demonstrates a functional relationship. Indirect and descriptive assessments identify correlations but cannot establish causation.',
      },
    ],
  },

  // ── Scenario 2: Reinforcement Schedules ────────────────────────────────────
  {
    id: 'sj-02',
    domain: 'Behavior Principles',
    title: 'Schedule Thinning After Skill Acquisition',
    scenario: `Priya is a 7-year-old who has recently mastered requesting preferred items using a picture exchange system. During acquisition, her BCBA reinforced every correct request (CRF). Now that Priya reliably uses PECS, her BCBA wants to thin the reinforcement schedule to promote maintenance and prepare Priya for naturalistic environments where reinforcement will not be available for every request.`,
    questions: [
      {
        id: 'sj-02-q1',
        stem: 'Which reinforcement schedule should the BCBA transition to FIRST when beginning to thin from CRF?',
        choices: [
          { id: 'A', text: 'Variable ratio 20 (VR20)' },
          { id: 'B', text: 'Fixed ratio 2 (FR2)' },
          { id: 'C', text: 'Variable interval 5-minute (VI5)' },
          { id: 'D', text: 'Fixed interval 10-minute (FI10)' },
        ],
        correctChoice: 'B',
        justifications: [
          { id: 'j1', text: 'Thinning should proceed gradually — FR2 is the smallest step from CRF (FR1) and minimizes the risk of ratio strain.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j2', text: 'Abrupt transitions to thin schedules (like VR20) can produce ratio strain and response cessation in newly acquired skills.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j3', text: 'FR2 maintains the ratio schedule format consistent with CRF, making the transition less disruptive to the response pattern.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j4', text: 'VR20 produces the most resistant-to-extinction behavior and should be used immediately after CRF to maximize maintenance.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j5', text: 'VI5 is preferable because interval schedules produce more stable responding than ratio schedules.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j6', text: 'FI10 is appropriate because it prepares Priya for naturalistic environments where reinforcement is time-based.', isCorrect: false, justifiesChoice: 'D' },
          { id: 'j7', text: 'VR20 is the best first step because variable schedules are more naturalistic than fixed schedules.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j8', text: 'VI schedules produce the most consistent responding and should be used immediately after CRF.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j9', text: 'FI schedules produce the scallop pattern which is the most natural response pattern for communication.', isCorrect: false, justifiesChoice: 'D' },
        ],
        explanation: 'Schedule thinning should proceed gradually to avoid ratio strain. FR2 is the smallest step from CRF (FR1) and allows the behavior to remain strong while beginning the thinning process.',
      },
      {
        id: 'sj-02-q2',
        stem: 'After successfully thinning to FR5, the BCBA notices that Priya pauses briefly after each reinforcer before resuming requests. This pattern is BEST described as:',
        choices: [
          { id: 'A', text: 'Ratio strain' },
          { id: 'B', text: 'Post-reinforcement pause' },
          { id: 'C', text: 'Behavioral contrast' },
          { id: 'D', text: 'Extinction burst' },
        ],
        correctChoice: 'B',
        justifications: [
          { id: 'j1', text: 'Post-reinforcement pauses are a characteristic feature of fixed ratio schedules — a brief pause occurs after each reinforcer delivery.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j2', text: 'The pause occurs after reinforcement, not before — this is the defining temporal pattern of the post-reinforcement pause on FR schedules.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j3', text: 'This is a normal and expected pattern on FR schedules and does not indicate a problem with the schedule or the behavior.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j4', text: 'Ratio strain is indicated by pauses that lengthen progressively and eventually lead to response cessation, not brief predictable pauses.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j5', text: 'Behavioral contrast refers to changes in responding in one context when the schedule changes in another context.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j6', text: 'An extinction burst is a temporary increase in behavior when extinction is first implemented, not a pause after reinforcement.', isCorrect: false, justifiesChoice: 'D' },
          { id: 'j7', text: 'Ratio strain occurs when the ratio requirement is too high, causing the behavior to break down entirely.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j8', text: 'Behavioral contrast is a side effect of multiple schedules, not a feature of a single FR schedule.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j9', text: 'Extinction bursts occur at the beginning of extinction, not during active reinforcement on an FR schedule.', isCorrect: false, justifiesChoice: 'D' },
        ],
        explanation: 'Post-reinforcement pauses are a characteristic and expected feature of fixed ratio schedules. They occur after each reinforcer delivery and are not a sign of a problem.',
      },
    ],
  },

  // ── Scenario 3: Verbal Behavior ────────────────────────────────────────────
  {
    id: 'sj-03',
    domain: 'Verbal Behavior',
    title: 'Identifying Verbal Operants in a Teaching Session',
    scenario: `During a discrete trial training session, a BCBA is working with Darius, a 5-year-old with limited vocal language. The BCBA presents a picture of a dog and asks "What is this?" Darius says "dog" and receives praise. Later, the BCBA asks "What sound does a dog make?" and Darius says "woof." Finally, Darius has not had his preferred toy car for 20 minutes. He approaches the BCBA and says "car." The BCBA gives him the car.`,
    questions: [
      {
        id: 'sj-03-q1',
        stem: 'When Darius says "dog" after being shown a picture of a dog and asked "What is this?", which verbal operant is MOST accurately demonstrated?',
        choices: [
          { id: 'A', text: 'Mand' },
          { id: 'B', text: 'Tact' },
          { id: 'C', text: 'Intraverbal' },
          { id: 'D', text: 'Echoic' },
        ],
        correctChoice: 'B',
        justifications: [
          { id: 'j1', text: 'The controlling antecedent is a nonverbal discriminative stimulus (the picture of the dog), which is the defining feature of a tact.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j2', text: 'The response is reinforced by generalized conditioned reinforcement (praise), not by a specific characteristic consequence — consistent with a tact.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j3', text: 'The verbal response ("dog") labels a nonverbal stimulus in the environment — the core function of a tact.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j4', text: 'The question "What is this?" is a verbal SD, making this an intraverbal controlled by verbal antecedents.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j5', text: 'Darius is requesting the dog picture, making this a mand controlled by the MO of wanting to see the picture.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j6', text: 'The BCBA\'s question contains the word "this," which Darius echoes as "dog" — making this an echoic.', isCorrect: false, justifiesChoice: 'D' },
          { id: 'j7', text: 'The MO for dogs (wanting to interact with dogs) controls the response, making this a mand.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j8', text: 'The question "What is this?" is a verbal stimulus that controls the response, making this an intraverbal.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j9', text: 'Darius is copying the BCBA\'s verbal behavior, making this an echoic response.', isCorrect: false, justifiesChoice: 'D' },
        ],
        explanation: 'A tact is controlled by a nonverbal SD (the picture) and reinforced by generalized reinforcement (praise). While the question "What is this?" is verbal, the primary controlling variable is the picture — making this a tact (though in practice, multiple variables may be present).',
      },
      {
        id: 'sj-03-q2',
        stem: 'When Darius says "car" after 20 minutes without his toy car and receives the car, which verbal operant is demonstrated?',
        choices: [
          { id: 'A', text: 'Tact' },
          { id: 'B', text: 'Intraverbal' },
          { id: 'C', text: 'Mand' },
          { id: 'D', text: 'Textual' },
        ],
        correctChoice: 'C',
        justifications: [
          { id: 'j1', text: 'The behavior is controlled by a motivating operation (20 minutes of deprivation from the car), which is the defining antecedent for a mand.', isCorrect: true, justifiesChoice: 'C' },
          { id: 'j2', text: 'The reinforcer is the specific, characteristic consequence (receiving the car) that matches the content of the verbal behavior — a defining feature of a mand.', isCorrect: true, justifiesChoice: 'C' },
          { id: 'j3', text: 'The behavior benefits the speaker (Darius gets what he wants), which is the functional outcome of a mand.', isCorrect: true, justifiesChoice: 'C' },
          { id: 'j4', text: 'Darius is labeling the car he sees, making this a tact controlled by the nonverbal stimulus.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j5', text: 'The BCBA\'s verbal behavior controls Darius\'s response, making this an intraverbal.', isCorrect: false, justifiesChoice: 'B' },
          { id: 'j6', text: 'Darius is reading the word "car" from a label, making this a textual response.', isCorrect: false, justifiesChoice: 'D' },
          { id: 'j7', text: 'The car is a nonverbal SD that controls the response "car," making this a tact.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j8', text: 'The BCBA must have asked a question that evoked the response, making this an intraverbal.', isCorrect: false, justifiesChoice: 'B' },
          { id: 'j9', text: 'Darius is reading a written label, making this a textual response.', isCorrect: false, justifiesChoice: 'D' },
        ],
        explanation: 'A mand is controlled by an MO (deprivation from the car) and reinforced by the specific consequence that matches the verbal behavior (getting the car). This benefits the speaker.',
      },
    ],
  },

  // ── Scenario 4: Behavior Reduction ────────────────────────────────────────
  {
    id: 'sj-04',
    domain: 'Behavior Reduction',
    title: 'Selecting a Function-Based Intervention for SIB',
    scenario: `Amara is a 12-year-old with intellectual disability who engages in head-hitting. A functional analysis reveals that head-hitting is maintained by automatic reinforcement (the behavior produces sensory stimulation). Head-hitting occurs at high rates throughout the day regardless of social consequences. Amara's team is developing a behavior intervention plan.`,
    questions: [
      {
        id: 'sj-04-q1',
        stem: 'Given the automatic function of Amara\'s head-hitting, which intervention is MOST appropriate as the primary behavior reduction strategy?',
        choices: [
          { id: 'A', text: 'Extinction (withholding social attention following head-hitting)' },
          { id: 'B', text: 'Noncontingent reinforcement with matched stimulation' },
          { id: 'C', text: 'Time-out from positive reinforcement' },
          { id: 'D', text: 'Response cost (removing tokens following head-hitting)' },
        ],
        correctChoice: 'B',
        justifications: [
          { id: 'j1', text: 'Noncontingent reinforcement with matched stimulation provides free access to sensory input that matches the sensory reinforcer maintaining the behavior, thereby abolishing the MO.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j2', text: 'For automatically reinforced behavior, the reinforcer is inherent to the behavior itself — NCR with matched stimulation addresses the sensory function directly.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j3', text: 'Withholding social consequences (extinction) would not be effective because the behavior is not maintained by social reinforcement.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j4', text: 'Extinction (withholding attention) is the most effective intervention because it eliminates the reinforcer maintaining the behavior.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j5', text: 'Time-out removes social reinforcement, which directly addresses the automatic function of the behavior.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j6', text: 'Response cost is effective for automatically reinforced behavior because it creates a punishing consequence.', isCorrect: false, justifiesChoice: 'D' },
          { id: 'j7', text: 'Withholding attention is the first-line intervention for any form of self-injurious behavior.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j8', text: 'Time-out is appropriate because it removes Amara from the environment where the behavior occurs.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j9', text: 'Response cost is the most ethical intervention because it does not involve physical intervention.', isCorrect: false, justifiesChoice: 'D' },
        ],
        explanation: 'For automatically reinforced behavior, social consequence-based interventions (extinction, time-out, response cost) are ineffective because the reinforcer is inherent to the behavior. NCR with matched stimulation addresses the sensory function by providing free access to similar sensory input.',
      },
    ],
  },

  // ── Scenario 5: Ethics ─────────────────────────────────────────────────────
  {
    id: 'sj-05',
    domain: 'Ethics & Professional Practice',
    title: 'Least Restrictive Treatment and Informed Consent',
    scenario: `A BCBA is developing a behavior intervention plan for Jaylen, a 10-year-old with autism who engages in severe self-injurious behavior (SIB) that has resulted in tissue damage. Previous interventions including DRA, NCR, and extinction have been implemented with high treatment integrity for 12 weeks but have not produced clinically significant reductions in SIB. The BCBA is considering recommending a more restrictive procedure.`,
    questions: [
      {
        id: 'sj-05-q1',
        stem: 'Before recommending a more restrictive procedure, what is the MOST important step the BCBA must take?',
        choices: [
          { id: 'A', text: 'Obtain written informed consent from Jaylen\'s parents for the new procedure' },
          { id: 'B', text: 'Document that less restrictive alternatives have been attempted and failed' },
          { id: 'C', text: 'Consult with a physician about the medical risks of the SIB' },
          { id: 'D', text: 'Conduct a new functional analysis to re-identify the function of the SIB' },
        ],
        correctChoice: 'B',
        justifications: [
          { id: 'j1', text: 'The least restrictive treatment principle requires documentation that less restrictive alternatives have been tried and failed before implementing more restrictive procedures.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j2', text: 'BACB ethical guidelines require BCBAs to recommend the most effective treatment that is also the least restrictive, and to document the rationale for moving to more restrictive procedures.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j3', text: 'Documenting failed less restrictive interventions provides the ethical and clinical justification for escalating to a more restrictive procedure.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j4', text: 'Informed consent is the most important step because parents must agree to any intervention before it is implemented.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j5', text: 'A physician consultation is required before any behavior intervention plan can be implemented for SIB.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j6', text: 'A new functional analysis is required before changing any intervention, regardless of the reason for the change.', isCorrect: false, justifiesChoice: 'D' },
          { id: 'j7', text: 'Informed consent must be obtained first because without it, no intervention can be legally implemented.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j8', text: 'Medical consultation is the most important step because SIB can cause serious physical harm.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j9', text: 'A new functional analysis is the most important step because the function may have changed.', isCorrect: false, justifiesChoice: 'D' },
        ],
        explanation: 'The least restrictive treatment principle requires documentation that less restrictive alternatives have been tried and failed. This is the ethical foundation for moving to more restrictive procedures. While informed consent and medical consultation are also important, they come after establishing the clinical justification.',
      },
    ],
  },

  // ── Scenario 6: Data-Based Decision Making ─────────────────────────────────
  {
    id: 'sj-06',
    domain: 'Measurement & Data Analysis',
    title: 'Interpreting Graphed Data and Making Treatment Decisions',
    scenario: `A BCBA is reviewing a graph of Keisha's problem behavior during a DRA intervention. Baseline data (5 sessions) show a stable, elevated rate of approximately 15 behaviors per session. After 10 sessions of DRA, the data show a gradual decreasing trend, with the most recent 3 sessions averaging 8 behaviors per session. However, the data are variable (ranging from 5 to 12 in the last 5 sessions).`,
    questions: [
      {
        id: 'sj-06-q1',
        stem: 'Based on the data described, what is the MOST appropriate clinical decision?',
        choices: [
          { id: 'A', text: 'Discontinue DRA and try a different intervention because the behavior has not reached zero' },
          { id: 'B', text: 'Continue DRA and collect more data before making a decision' },
          { id: 'C', text: 'Add a punishment component immediately because the behavior is still occurring' },
          { id: 'D', text: 'Conclude that DRA is ineffective because the data are variable' },
        ],
        correctChoice: 'B',
        justifications: [
          { id: 'j1', text: 'The data show a decreasing trend from 15 to an average of 8 — this is a clinically meaningful change that suggests DRA is working.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j2', text: 'Variability in data is common during behavior change and does not indicate treatment failure — more data are needed to determine if the trend is stable.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j3', text: 'Changing or adding interventions prematurely (before the current intervention has had adequate time) can confound the data and make it impossible to determine what is working.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j4', text: 'The behavior has not reached zero, which is the criterion for a successful intervention, so a new intervention is needed.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j5', text: 'Adding punishment is ethically required when behavior continues to occur despite reinforcement-based interventions.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j6', text: 'Variable data indicate that the intervention is not producing consistent effects and should be abandoned.', isCorrect: false, justifiesChoice: 'D' },
          { id: 'j7', text: 'DRA is ineffective if behavior has not reached zero within 10 sessions.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j8', text: 'Punishment should be added whenever behavior continues to occur after 10 sessions of reinforcement-based intervention.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j9', text: 'Variability always indicates that the intervention is not working and a new approach is needed.', isCorrect: false, justifiesChoice: 'D' },
        ],
        explanation: 'A decreasing trend from 15 to 8 per session represents a clinically meaningful change. Variability is common during behavior change. The appropriate decision is to continue collecting data to determine if the trend is stable before making any changes.',
      },
    ],
  },

  // ── Scenario 7: Generalization Programming ─────────────────────────────────
  {
    id: 'sj-07',
    domain: 'Skill Acquisition',
    title: 'Programming for Generalization',
    scenario: `Tomás is a 6-year-old who has mastered requesting preferred items using PECS with his BCBA in the therapy room. However, his parents report that he does not use PECS at home, and his classroom teacher reports that he does not use PECS in the classroom. His BCBA is planning to address generalization.`,
    questions: [
      {
        id: 'sj-07-q1',
        stem: 'Which generalization programming strategy would be MOST effective for Tomás?',
        choices: [
          { id: 'A', text: 'Continue training in the therapy room until performance is at 100% for 3 consecutive sessions' },
          { id: 'B', text: 'Train in multiple settings (home, classroom, therapy room) with multiple trainers' },
          { id: 'C', text: 'Provide Tomás\'s parents with a written description of the PECS protocol' },
          { id: 'D', text: 'Increase the density of reinforcement in the therapy room to strengthen the behavior' },
        ],
        correctChoice: 'B',
        justifications: [
          { id: 'j1', text: 'Training in multiple settings with multiple trainers is the most evidence-based strategy for promoting stimulus generalization across environments and people.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j2', text: 'Generalization must be programmed — "train and hope" (training only in one setting and hoping it generalizes) is insufficient and is not an acceptable clinical approach.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j3', text: 'Multiple exemplar training (training across multiple settings, people, and materials) is the most effective strategy for producing generalization.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j4', text: 'Mastery in the therapy room is sufficient for generalization to occur naturally once the behavior is strong enough.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j5', text: 'Written instructions are sufficient to train parents to implement PECS correctly.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j6', text: 'Increasing reinforcement density in the therapy room will strengthen the behavior enough that it will generalize automatically.', isCorrect: false, justifiesChoice: 'D' },
          { id: 'j7', text: 'Continued training in the therapy room until 100% mastery will ensure generalization to all settings.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j8', text: 'Written protocols are the most efficient way to train parents and teachers to implement PECS.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j9', text: 'Stronger behavior in the therapy room will automatically transfer to other settings.', isCorrect: false, justifiesChoice: 'D' },
        ],
        explanation: 'Generalization must be explicitly programmed. Multiple exemplar training — training across multiple settings, people, and materials — is the most effective strategy for promoting stimulus generalization.',
      },
    ],
  },

  // ── Scenario 8: Measurement ────────────────────────────────────────────────
  {
    id: 'sj-08',
    domain: 'Measurement',
    title: 'Selecting the Appropriate Measurement Procedure',
    scenario: `A BCBA is designing a data collection system for three different behaviors: (1) Ellie's hand-flapping, which occurs at very high rates (50–100 times per minute) and is difficult to count individually; (2) Ellie's tantrums, which are low-frequency but long-duration events; and (3) Ellie's on-task behavior during academic tasks, which the BCBA wants to sample efficiently without recording every instance.`,
    questions: [
      {
        id: 'sj-08-q1',
        stem: 'For Ellie\'s high-rate hand-flapping, which measurement procedure is MOST appropriate?',
        choices: [
          { id: 'A', text: 'Event recording (frequency count)' },
          { id: 'B', text: 'Partial interval recording' },
          { id: 'C', text: 'Duration recording' },
          { id: 'D', text: 'Latency recording' },
        ],
        correctChoice: 'B',
        justifications: [
          { id: 'j1', text: 'Partial interval recording is appropriate for high-rate behaviors that are difficult to count individually because it samples whether the behavior occurred at any point during each interval.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j2', text: 'Event recording is impractical for behaviors occurring at 50–100 times per minute because the observer cannot count each instance accurately.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j3', text: 'Discontinuous measurement (interval recording) is more feasible than continuous measurement for very high-rate behaviors in applied settings.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j4', text: 'Event recording is the most accurate measurement procedure and should always be used regardless of response rate.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j5', text: 'Duration recording is most appropriate for high-rate behaviors because it captures how long the behavior lasts.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j6', text: 'Latency recording is appropriate for high-rate behaviors because it measures how quickly the behavior starts.', isCorrect: false, justifiesChoice: 'D' },
          { id: 'j7', text: 'Frequency count is always preferable because it provides the most precise data.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j8', text: 'Duration recording captures the most important dimension of hand-flapping.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j9', text: 'Latency recording is the most practical for high-rate behaviors.', isCorrect: false, justifiesChoice: 'D' },
        ],
        explanation: 'For very high-rate behaviors that are difficult to count individually, partial interval recording is more practical and feasible than event recording. It provides a reasonable estimate of behavior occurrence without requiring the observer to count each instance.',
      },
    ],
  },

  // ── Scenario 9: Prompting ──────────────────────────────────────────────────
  {
    id: 'sj-09',
    domain: 'Skill Acquisition',
    title: 'Prompt Fading and Errorless Learning',
    scenario: `A BCBA is teaching Nadia, a 4-year-old, to identify colors. She uses a most-to-least (MTL) prompting strategy, beginning with a full physical prompt (hand-over-hand pointing) and gradually reducing to a partial physical prompt, then a gestural prompt, then an independent response. After 20 sessions, Nadia consistently responds correctly with the gestural prompt but makes errors when the gestural prompt is removed.`,
    questions: [
      {
        id: 'sj-09-q1',
        stem: 'What is the MOST appropriate adjustment to the teaching procedure?',
        choices: [
          { id: 'A', text: 'Return to the full physical prompt and begin fading again more slowly' },
          { id: 'B', text: 'Continue removing the gestural prompt and use error correction when errors occur' },
          { id: 'C', text: 'Switch to a least-to-most (LTM) prompting strategy' },
          { id: 'D', text: 'Increase the reinforcement magnitude for correct independent responses' },
        ],
        correctChoice: 'A',
        justifications: [
          { id: 'j1', text: 'When errors occur during prompt fading, the appropriate response is to return to the last errorless prompt level and fade more gradually to prevent error patterns from developing.', isCorrect: true, justifiesChoice: 'A' },
          { id: 'j2', text: 'Errors during fading indicate that the fading steps were too large — returning to a higher prompt level and fading more slowly addresses this.', isCorrect: true, justifiesChoice: 'A' },
          { id: 'j3', text: 'Errorless learning principles require minimizing errors during acquisition; returning to the last errorless level and fading more gradually is consistent with this approach.', isCorrect: true, justifiesChoice: 'A' },
          { id: 'j4', text: 'Continuing to remove the prompt and using error correction is the most efficient approach because errors provide learning opportunities.', isCorrect: false, justifiesChoice: 'B' },
          { id: 'j5', text: 'Switching to LTM is the best response because it allows Nadia to attempt the response independently first.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j6', text: 'Increasing reinforcement magnitude will motivate Nadia to respond correctly without the prompt.', isCorrect: false, justifiesChoice: 'D' },
          { id: 'j7', text: 'Error correction is the standard response to errors and is more efficient than returning to a higher prompt level.', isCorrect: false, justifiesChoice: 'B' },
          { id: 'j8', text: 'LTM prompting is always preferable to MTL because it promotes independence from the start.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j9', text: 'Stronger reinforcement will bridge the gap between prompted and unprompted performance.', isCorrect: false, justifiesChoice: 'D' },
        ],
        explanation: 'When errors occur during prompt fading, the procedure should return to the last errorless prompt level and fade more gradually. This is consistent with errorless learning principles and prevents the establishment of error patterns.',
      },
    ],
  },

  // ── Scenario 10: Supervision ───────────────────────────────────────────────
  {
    id: 'sj-10',
    domain: 'Ethics & Professional Practice',
    title: 'BCBA Supervision Responsibilities',
    scenario: `A BCBA supervises three RBTs who implement ABA programs for clients on her caseload. One RBT, Devon, has been implementing a DRA program for a client with escape-maintained aggression. During a supervision observation, the BCBA notices that Devon is providing the reinforcer (break from demands) after aggression rather than after the alternative behavior (requesting a break using AAC). Devon has been implementing the program incorrectly for two weeks.`,
    questions: [
      {
        id: 'sj-10-q1',
        stem: 'What is the BCBA\'s MOST appropriate immediate response?',
        choices: [
          { id: 'A', text: 'Document the error in Devon\'s supervision notes and address it at the next scheduled supervision meeting' },
          { id: 'B', text: 'Immediately provide corrective feedback and retraining to Devon during the observation' },
          { id: 'C', text: 'Reassign the client to a different RBT who can implement the program correctly' },
          { id: 'D', text: 'Notify the client\'s parents that the program has been implemented incorrectly for two weeks' },
        ],
        correctChoice: 'B',
        justifications: [
          { id: 'j1', text: 'The BCBA has a direct supervisory responsibility to correct implementation errors immediately when observed, not to delay until the next scheduled meeting.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j2', text: 'Devon is inadvertently reinforcing aggression (the problem behavior) — this is a clinical emergency that requires immediate correction to prevent harm to the client.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j3', text: 'Providing immediate corrective feedback and retraining is the most effective way to address the implementation error and prevent further harm.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j4', text: 'Documenting the error and addressing it at the next meeting is sufficient because the error is not causing immediate physical harm.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j5', text: 'Reassigning the client is the most appropriate response because Devon has demonstrated that he cannot implement the program correctly.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j6', text: 'Notifying the parents is the most important step because they have a right to know about implementation errors.', isCorrect: false, justifiesChoice: 'D' },
          { id: 'j7', text: 'Delaying feedback until the next supervision meeting is appropriate because it allows Devon time to self-correct.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j8', text: 'Reassignment is the most ethical response because the client\'s welfare must come first.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j9', text: 'Parent notification is required by the BACB ethics code whenever an implementation error is discovered.', isCorrect: false, justifiesChoice: 'D' },
        ],
        explanation: 'When a BCBA observes an implementation error during supervision, immediate corrective feedback and retraining is required. The error (reinforcing aggression) is actively harming the client and cannot wait until the next scheduled meeting.',
      },
    ],
  },

  // ── Scenarios 11–30: Additional scenarios ─────────────────────────────────
  {
    id: 'sj-11',
    domain: 'Behavior Principles',
    title: 'Identifying Reinforcement vs. Punishment',
    scenario: `A classroom teacher is trying to manage three students' behaviors. For Student A: she provides verbal praise after the student raises their hand, and hand-raising increases. For Student B: she removes recess time when the student talks out of turn, and talking out decreases. For Student C: she sends the student to the principal's office when they are disruptive, but disruptions continue to increase over the following weeks.`,
    questions: [
      {
        id: 'sj-11-q1',
        stem: 'The procedure used with Student C (sending to the principal\'s office) is BEST classified as:',
        choices: [
          { id: 'A', text: 'Positive punishment, because an aversive stimulus was added' },
          { id: 'B', text: 'Negative reinforcement, because the student escapes the classroom' },
          { id: 'C', text: 'Positive reinforcement, because the behavior increased' },
          { id: 'D', text: 'Negative punishment, because the student loses classroom privileges' },
        ],
        correctChoice: 'C',
        justifications: [
          { id: 'j1', text: 'The defining feature of reinforcement is that behavior INCREASES — disruptions increased following the office referral, regardless of the teacher\'s intent.', isCorrect: true, justifiesChoice: 'C' },
          { id: 'j2', text: 'A stimulus (office referral/principal attention) was ADDED following the behavior and behavior increased — this meets the definition of positive reinforcement.', isCorrect: true, justifiesChoice: 'C' },
          { id: 'j3', text: 'Behavioral procedures are defined by their EFFECTS on behavior, not by the teacher\'s intent — the teacher intended punishment but produced reinforcement.', isCorrect: true, justifiesChoice: 'C' },
          { id: 'j4', text: 'The office referral is an aversive stimulus, so adding it constitutes positive punishment by definition.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j5', text: 'The student escapes the classroom, which is negative reinforcement because an aversive stimulus (the classroom) is removed.', isCorrect: false, justifiesChoice: 'B' },
          { id: 'j6', text: 'The student loses classroom time, which constitutes negative punishment.', isCorrect: false, justifiesChoice: 'D' },
          { id: 'j7', text: 'The teacher intended to punish the behavior, so it is positive punishment regardless of the outcome.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j8', text: 'Escape from the classroom is the reinforcer, making this negative reinforcement.', isCorrect: false, justifiesChoice: 'B' },
          { id: 'j9', text: 'Losing classroom time is a form of negative punishment.', isCorrect: false, justifiesChoice: 'D' },
        ],
        explanation: 'Reinforcement and punishment are defined by their EFFECTS on behavior, not by intent. Because disruptions INCREASED following the office referral, the procedure functioned as positive reinforcement (a stimulus was added and behavior increased).',
      },
    ],
  },

  {
    id: 'sj-12',
    domain: 'Assessment',
    title: 'Interpreting Functional Analysis Results',
    scenario: `A BCBA conducts a functional analysis for Brianna's self-injurious behavior (SIB). The results show elevated SIB in the attention condition (average 12 per session), moderate SIB in the demand condition (average 6 per session), and low SIB in the alone and control conditions (average 1–2 per session). The BCBA concludes that Brianna's SIB is primarily attention-maintained.`,
    questions: [
      {
        id: 'sj-12-q1',
        stem: 'Based on the functional analysis results, which intervention component is MOST critical for Brianna\'s BIP?',
        choices: [
          { id: 'A', text: 'Escape extinction (continuing demands despite SIB)' },
          { id: 'B', text: 'Noncontingent reinforcement with matched sensory stimulation' },
          { id: 'C', text: 'Extinction of attention following SIB, combined with DRA for appropriate attention-seeking' },
          { id: 'D', text: 'Demand fading to reduce the aversiveness of tasks' },
        ],
        correctChoice: 'C',
        justifications: [
          { id: 'j1', text: 'The FA demonstrates that SIB is primarily attention-maintained — the intervention must target the attention function by withholding attention following SIB (extinction) and reinforcing appropriate attention-seeking (DRA).', isCorrect: true, justifiesChoice: 'C' },
          { id: 'j2', text: 'Function-based interventions are more effective than non-function-based interventions — the intervention must match the identified function (attention).', isCorrect: true, justifiesChoice: 'C' },
          { id: 'j3', text: 'DRA for appropriate attention-seeking (e.g., tapping the teacher\'s arm) provides Brianna with a functional alternative that produces the same reinforcer (attention) without SIB.', isCorrect: true, justifiesChoice: 'C' },
          { id: 'j4', text: 'Escape extinction is the most important component because the demand condition also showed elevated SIB.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j5', text: 'NCR with matched stimulation is the most effective intervention for all forms of SIB.', isCorrect: false, justifiesChoice: 'B' },
          { id: 'j6', text: 'Demand fading addresses the escape function, which is the primary function based on the FA results.', isCorrect: false, justifiesChoice: 'D' },
          { id: 'j7', text: 'Escape extinction must be the primary component because SIB occurred in the demand condition.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j8', text: 'NCR is the first-line intervention for any SIB regardless of function.', isCorrect: false, justifiesChoice: 'B' },
          { id: 'j9', text: 'Demand fading is appropriate because the demand condition showed moderate SIB.', isCorrect: false, justifiesChoice: 'D' },
        ],
        explanation: 'The FA shows that SIB is primarily attention-maintained (highest in the attention condition). The intervention must target this function: extinction of attention following SIB and DRA for appropriate attention-seeking.',
      },
    ],
  },

  {
    id: 'sj-13',
    domain: 'Behavior Principles',
    title: 'Motivating Operations in Clinical Practice',
    scenario: `A BCBA notices that Leo's requesting behavior is much higher in the morning before snack than after snack. She also notices that Leo engages in more problem behavior during math tasks when the tasks are long and difficult compared to when they are short and easy. She hypothesizes that two different MOs are influencing Leo's behavior.`,
    questions: [
      {
        id: 'sj-13-q1',
        stem: 'The increase in Leo\'s requesting behavior before snack compared to after snack is BEST explained by which MO concept?',
        choices: [
          { id: 'A', text: 'Abolishing operation — snack access has abolished the reinforcing value of food' },
          { id: 'B', text: 'Establishing operation — food deprivation has established the reinforcing value of food' },
          { id: 'C', text: 'Discriminative stimulus — the pre-snack context signals that food is available' },
          { id: 'D', text: 'Conditioned MO — the pre-snack routine has been paired with food delivery' },
        ],
        correctChoice: 'B',
        justifications: [
          { id: 'j1', text: 'Food deprivation (not having eaten recently) is an establishing operation that increases the reinforcing value of food and increases all food-seeking behavior.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j2', text: 'The EO (deprivation) has both a value-altering effect (food is more reinforcing) and a behavior-altering effect (requesting increases) — both are evident in this scenario.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j3', text: 'The comparison (before vs. after snack) directly demonstrates the value-altering effect of the EO — food is more reinforcing when Leo has been deprived of it.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j4', text: 'After snack, Leo has been satiated, so an abolishing operation is operating — not an establishing operation.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j5', text: 'The pre-snack context is an SD that signals food availability, not an MO that changes food\'s value.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j6', text: 'The pre-snack routine is a conditioned MO that has been paired with food delivery through a learning history.', isCorrect: false, justifiesChoice: 'D' },
          { id: 'j7', text: 'The abolishing operation is operating before snack because Leo anticipates satiation.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j8', text: 'The pre-snack context is an SD because it signals that food will be available soon.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j9', text: 'The pre-snack routine is a CMO-T because it establishes the snack as a conditioned reinforcer.', isCorrect: false, justifiesChoice: 'D' },
        ],
        explanation: 'Food deprivation (before snack) is an establishing operation that increases the reinforcing value of food and increases all food-seeking behavior. After snack (satiation), an abolishing operation is in effect.',
      },
    ],
  },

  {
    id: 'sj-14',
    domain: 'Research & Design',
    title: 'Single-Case Research Design Selection',
    scenario: `A BCBA wants to evaluate the effectiveness of a social skills intervention for a student with autism. The target behaviors are greeting peers, sharing materials, and initiating play. The BCBA is concerned that if the intervention is effective, the behaviors should not be reversed (it would be unethical to take away social skills that have been learned). She wants to demonstrate experimental control.`,
    questions: [
      {
        id: 'sj-14-q1',
        stem: 'Which research design is MOST appropriate for this situation?',
        choices: [
          { id: 'A', text: 'Reversal (ABAB) design' },
          { id: 'B', text: 'Multiple baseline across behaviors design' },
          { id: 'C', text: 'Alternating treatments design' },
          { id: 'D', text: 'Changing criterion design' },
        ],
        correctChoice: 'B',
        justifications: [
          { id: 'j1', text: 'Multiple baseline design demonstrates experimental control by introducing the intervention sequentially across behaviors WITHOUT requiring reversal.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j2', text: 'The three target behaviors (greeting, sharing, initiating play) provide the three tiers needed for a multiple baseline across behaviors design.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j3', text: 'When behaviors should not be reversed (e.g., social skills), multiple baseline is the preferred design because it does not require withdrawing the intervention.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j4', text: 'A reversal design is the strongest design for demonstrating experimental control and should be used whenever possible.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j5', text: 'An alternating treatments design is best because it can compare multiple interventions simultaneously.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j6', text: 'A changing criterion design is best because it allows the criterion to be gradually increased as the student improves.', isCorrect: false, justifiesChoice: 'D' },
          { id: 'j7', text: 'ABAB design is appropriate because it provides the strongest evidence of experimental control.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j8', text: 'ATD is the most efficient design for evaluating social skills interventions.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j9', text: 'Changing criterion design is appropriate when the target behaviors need to be shaped gradually.', isCorrect: false, justifiesChoice: 'D' },
        ],
        explanation: 'When behaviors should not be reversed (social skills should not be "taken away"), multiple baseline design is the appropriate choice. It demonstrates experimental control by introducing the intervention sequentially across tiers without requiring reversal.',
      },
    ],
  },

  {
    id: 'sj-15',
    domain: 'Skill Acquisition',
    title: 'Discrete Trial Training vs. Natural Environment Teaching',
    scenario: `A BCBA is planning instruction for two skills for a 5-year-old client: (1) identifying colors (a discrete skill with a clear correct answer), and (2) initiating play with peers (a complex social skill that requires flexibility and responsiveness to natural cues). She is deciding between discrete trial training (DTT) and natural environment teaching (NET) for each skill.`,
    questions: [
      {
        id: 'sj-15-q1',
        stem: 'Which teaching approach is MOST appropriate for teaching peer play initiation?',
        choices: [
          { id: 'A', text: 'Discrete trial training in a structured one-on-one setting' },
          { id: 'B', text: 'Natural environment teaching embedded in play contexts with peers' },
          { id: 'C', text: 'Video modeling in a therapy room followed by practice with the BCBA' },
          { id: 'D', text: 'Social stories read daily before school' },
        ],
        correctChoice: 'B',
        justifications: [
          { id: 'j1', text: 'Natural environment teaching embeds instruction in the natural context where the skill will be used, promoting generalization from the start.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j2', text: 'Peer play initiation requires responding to natural, variable social cues — NET provides exposure to the natural variability of social interactions that DTT cannot replicate.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j3', text: 'Teaching in the natural context (with real peers) ensures that the skill is reinforced by natural consequences (peer engagement), which promotes maintenance and generalization.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j4', text: 'DTT is the most effective teaching method for all skills because it provides massed practice and clear antecedent-response-consequence sequences.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j5', text: 'Video modeling is the most evidence-based practice for social skills and should be used before any other approach.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j6', text: 'Social stories are the most appropriate intervention for peer interaction skills because they teach social rules explicitly.', isCorrect: false, justifiesChoice: 'D' },
          { id: 'j7', text: 'DTT provides the most controlled learning environment and should be used for all new skill acquisition.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j8', text: 'Video modeling is more effective than NET for social skills because it provides a clear model of the target behavior.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j9', text: 'Social stories are sufficient for teaching peer interaction skills without additional behavioral intervention.', isCorrect: false, justifiesChoice: 'D' },
        ],
        explanation: 'Natural environment teaching is most appropriate for complex social skills like peer play initiation because it embeds instruction in the natural context, exposes the learner to natural variability, and promotes generalization from the start.',
      },
    ],
  },

  {
    id: 'sj-16',
    domain: 'Behavior Principles',
    title: 'Three-Term Contingency Analysis',
    scenario: `During a classroom observation, a BCBA records the following sequence: The teacher presents a math worksheet (Antecedent). The student pushes the worksheet off the desk (Behavior). The teacher picks up the worksheet and says "Let's take a short break" (Consequence). This sequence repeats three times during the observation, and the student's worksheet-pushing increases over the following week.`,
    questions: [
      {
        id: 'sj-16-q1',
        stem: 'Based on this three-term contingency, which behavioral principle BEST explains the increase in worksheet-pushing?',
        choices: [
          { id: 'A', text: 'Positive reinforcement — the teacher\'s attention reinforces the behavior' },
          { id: 'B', text: 'Negative reinforcement — escape from the worksheet reinforces the behavior' },
          { id: 'C', text: 'Positive punishment — the break adds an aversive consequence' },
          { id: 'D', text: 'Extinction — the worksheet is removed, extinguishing the behavior' },
        ],
        correctChoice: 'B',
        justifications: [
          { id: 'j1', text: 'The worksheet (aversive stimulus) is REMOVED following worksheet-pushing, and worksheet-pushing INCREASES — this is the definition of negative reinforcement.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j2', text: 'The consequence (break from the worksheet) involves the removal of an aversive stimulus (the math task), which is the defining feature of negative reinforcement.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j3', text: 'The behavior increases over the following week, confirming that the consequence is functioning as a reinforcer (not a punisher).', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j4', text: 'The teacher provides attention ("Let\'s take a short break"), which is a social reinforcer that increases the behavior through positive reinforcement.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j5', text: 'The break is an aversive consequence that punishes the worksheet-pushing behavior.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j6', text: 'Removing the worksheet extinguishes the behavior by removing the discriminative stimulus.', isCorrect: false, justifiesChoice: 'D' },
          { id: 'j7', text: 'The teacher\'s attention is the primary reinforcer maintaining the behavior.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j8', text: 'A break is typically aversive for students, so this is positive punishment.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j9', text: 'Removing the worksheet is extinction because it removes the antecedent for the behavior.', isCorrect: false, justifiesChoice: 'D' },
        ],
        explanation: 'The worksheet (aversive) is removed following pushing, and pushing increases — this is negative reinforcement. The teacher\'s intent (giving a break) is irrelevant; what matters is the effect on future behavior.',
      },
    ],
  },

  {
    id: 'sj-17',
    domain: 'Behavior Reduction',
    title: 'Noncontingent Reinforcement as an Antecedent Intervention',
    scenario: `Zara engages in attention-maintained problem behavior at an average rate of 20 per session during baseline. Her BCBA implements a noncontingent reinforcement (NCR) schedule, providing Zara with attention every 2 minutes regardless of her behavior. After 2 weeks, problem behavior decreases to an average of 4 per session.`,
    questions: [
      {
        id: 'sj-17-q1',
        stem: 'The primary mechanism by which NCR reduces Zara\'s problem behavior is:',
        choices: [
          { id: 'A', text: 'Extinction — problem behavior is no longer reinforced by attention' },
          { id: 'B', text: 'Abolishing operation — free access to attention reduces its value as a reinforcer' },
          { id: 'C', text: 'Differential reinforcement — appropriate behavior is reinforced while problem behavior is not' },
          { id: 'D', text: 'Punishment — the fixed-time schedule punishes problem behavior' },
        ],
        correctChoice: 'B',
        justifications: [
          { id: 'j1', text: 'NCR functions as an abolishing operation by providing free access to the reinforcer (attention), which reduces its current value and thereby reduces the motivation to engage in problem behavior to obtain it.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j2', text: 'When attention is freely available on a time-based schedule, the MO for attention-maintained behavior is abolished — there is less motivation to work for attention through problem behavior.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j3', text: 'NCR is an antecedent intervention that targets the MO, not a consequence-based intervention — it reduces behavior before it occurs by removing the motivation.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j4', text: 'NCR includes an extinction component because attention is no longer contingent on problem behavior.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j5', text: 'NCR reinforces appropriate behavior by providing attention on a schedule, making it a differential reinforcement procedure.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j6', text: 'The fixed-time schedule creates a punishing contingency for problem behavior.', isCorrect: false, justifiesChoice: 'D' },
          { id: 'j7', text: 'The primary mechanism is extinction because attention is no longer contingent on problem behavior.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j8', text: 'NCR reinforces appropriate behavior, making it a form of differential reinforcement.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j9', text: 'The schedule punishes problem behavior by providing attention at fixed times rather than when problem behavior occurs.', isCorrect: false, justifiesChoice: 'D' },
        ],
        explanation: 'The primary mechanism of NCR is the abolishing operation effect — free access to the reinforcer reduces its value and thereby reduces the motivation to engage in problem behavior. While NCR may also have an extinction component, the MO effect is the primary mechanism.',
      },
    ],
  },

  {
    id: 'sj-18',
    domain: 'Ethics & Professional Practice',
    title: 'Scope of Competence',
    scenario: `A BCBA who specializes in early intensive behavioral intervention for young children with autism is asked by a school district to provide consultation for a 16-year-old student with intellectual disability who has severe self-injurious behavior. The BCBA has never worked with adolescents or with severe SIB. The district is in a rural area with limited access to other behavior analysts.`,
    questions: [
      {
        id: 'sj-18-q1',
        stem: 'According to the BACB Ethics Code, what is the MOST appropriate response for the BCBA?',
        choices: [
          { id: 'A', text: 'Decline the case entirely because it is outside her scope of competence' },
          { id: 'B', text: 'Accept the case and seek supervision or consultation from a BCBA with relevant expertise' },
          { id: 'C', text: 'Accept the case because her general ABA training is sufficient for any population' },
          { id: 'D', text: 'Accept the case but only provide indirect consultation to avoid direct responsibility' },
        ],
        correctChoice: 'B',
        justifications: [
          { id: 'j1', text: 'The BACB Ethics Code allows BCBAs to expand their scope of competence by seeking supervision or consultation from someone with relevant expertise.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j2', text: 'Given the limited access to services in a rural area, accepting the case with appropriate supervision is more ethical than leaving the student without services.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j3', text: 'Seeking consultation from a BCBA with expertise in adolescents and severe SIB allows the BCBA to provide services while ensuring the client receives competent care.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j4', text: 'Declining the case is always the most ethical response when a case is outside the BCBA\'s scope of competence.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j5', text: 'General ABA training is sufficient for any population because the principles of behavior are universal.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j6', text: 'Indirect consultation reduces the BCBA\'s liability while still providing some support to the student.', isCorrect: false, justifiesChoice: 'D' },
          { id: 'j7', text: 'Declining is always required when the case is outside the BCBA\'s area of expertise.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j8', text: 'ABA principles apply universally, so population-specific training is not required.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j9', text: 'Indirect consultation is the most ethical approach because it minimizes the BCBA\'s direct involvement.', isCorrect: false, justifiesChoice: 'D' },
        ],
        explanation: 'The BACB Ethics Code allows BCBAs to expand their scope of competence through supervision and consultation. Given the limited access to services, accepting the case with appropriate consultation is more ethical than declining and leaving the student without services.',
      },
    ],
  },

  {
    id: 'sj-19',
    domain: 'Behavior Principles',
    title: 'Stimulus Control and Discrimination Training',
    scenario: `A BCBA is teaching a child to respond differently to two stimuli: a green card (SD) and a red card (SΔ). She reinforces the child for touching the green card and does not reinforce touching the red card. After 20 sessions, the child consistently touches the green card and rarely touches the red card. The BCBA then introduces a yellow card and observes that the child touches it at an intermediate rate.`,
    questions: [
      {
        id: 'sj-19-q1',
        stem: 'The child\'s touching of the yellow card at an intermediate rate is BEST explained by:',
        choices: [
          { id: 'A', text: 'Stimulus discrimination — the child has learned to discriminate the yellow card from the green card' },
          { id: 'B', text: 'Stimulus generalization — the yellow card shares properties with the green card (SD)' },
          { id: 'C', text: 'Response generalization — the child is generating a new response to the yellow card' },
          { id: 'D', text: 'Behavioral contrast — reinforcement for green card responding has increased yellow card responding' },
        ],
        correctChoice: 'B',
        justifications: [
          { id: 'j1', text: 'The yellow card was never trained but evokes responding — this is stimulus generalization (responding spreads to stimuli similar to the SD).', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j2', text: 'The intermediate rate (less than green, more than red) reflects the gradient of generalization — responding is proportional to similarity to the SD.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j3', text: 'Stimulus generalization explains why untrained stimuli evoke responding based on their similarity to the training SD.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j4', text: 'The child has learned to discriminate the yellow card from the green card, which is why responding is lower for yellow than for green.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j5', text: 'The child is generating a new response (touching) to the yellow card that was not directly trained.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j6', text: 'Behavioral contrast explains the increase in responding to yellow when green card responding is reinforced.', isCorrect: false, justifiesChoice: 'D' },
          { id: 'j7', text: 'Discrimination training has taught the child to discriminate between all colored cards.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j8', text: 'The child is generating a new response to the yellow card through response generalization.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j9', text: 'Behavioral contrast is operating because reinforcement for green card responding has increased responding to other stimuli.', isCorrect: false, justifiesChoice: 'D' },
        ],
        explanation: 'Responding to an untrained stimulus (yellow card) based on its similarity to the training SD (green card) is stimulus generalization. The intermediate rate reflects the generalization gradient — responding is proportional to similarity.',
      },
    ],
  },

  {
    id: 'sj-20',
    domain: 'Skill Acquisition',
    title: 'Shaping a New Behavior',
    scenario: `A BCBA is teaching a nonverbal child to produce the word "more." The child currently produces no vocalizations. The BCBA decides to use shaping, beginning with any vocalization, then reinforcing vocalizations that sound like "m," then "mo," then "mor," then "more."`,
    questions: [
      {
        id: 'sj-20-q1',
        stem: 'Which principle is MOST critical to the success of this shaping procedure?',
        choices: [
          { id: 'A', text: 'Each successive approximation must be reinforced on a continuous reinforcement schedule' },
          { id: 'B', text: 'The criterion for reinforcement must be advanced only when the current approximation is stable' },
          { id: 'C', text: 'All previous approximations must be extinguished before advancing to the next step' },
          { id: 'D', text: 'The terminal behavior must be demonstrated by the child before shaping begins' },
        ],
        correctChoice: 'B',
        justifications: [
          { id: 'j1', text: 'Advancing the criterion before the current approximation is stable risks losing the behavior entirely — stability at each step ensures the behavior is strong before the criterion is raised.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j2', text: 'Shaping requires careful judgment about when to advance — moving too quickly produces ratio strain and response cessation; moving too slowly slows progress.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j3', text: 'The rate of advancement should be based on the learner\'s performance data — advancing only when the current approximation is stable is the key decision rule in shaping.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j4', text: 'CRF must be used for every approximation to maximize the strength of each successive step.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j5', text: 'Previous approximations must be extinguished before the next step is reinforced to prevent the child from reverting to earlier forms.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j6', text: 'The terminal behavior must be demonstrated before shaping begins to ensure the child is capable of producing it.', isCorrect: false, justifiesChoice: 'D' },
          { id: 'j7', text: 'CRF is required for all shaping steps to prevent ratio strain.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j8', text: 'Extinguishing previous approximations is necessary to ensure clean stimulus control.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j9', text: 'The terminal behavior must exist in the repertoire before shaping can begin.', isCorrect: false, justifiesChoice: 'D' },
        ],
        explanation: 'The most critical principle in shaping is advancing the criterion only when the current approximation is stable. Moving too quickly risks losing the behavior; the stability criterion ensures each step is strong before the bar is raised.',
      },
    ],
  },

  {
    id: 'sj-21',
    domain: 'Measurement',
    title: 'Interobserver Agreement Calculation',
    scenario: `Two observers independently record Leo's on-task behavior using event recording during a 10-minute session. Observer 1 records 20 instances; Observer 2 records 25 instances. The BCBA calculates IOA using the smaller/larger method.`,
    questions: [
      {
        id: 'sj-21-q1',
        stem: 'What is the IOA percentage, and is it acceptable for research purposes?',
        choices: [
          { id: 'A', text: '80% — acceptable (meets the 80% criterion for research)' },
          { id: 'B', text: '80% — not acceptable (below the 90% criterion for research)' },
          { id: 'C', text: '90% — acceptable (meets the 90% criterion for research)' },
          { id: 'D', text: '75% — not acceptable (below the 80% criterion for research)' },
        ],
        correctChoice: 'A',
        justifications: [
          { id: 'j1', text: 'Smaller/larger IOA = 20/25 = 0.80 = 80% — the calculation is correct.', isCorrect: true, justifiesChoice: 'A' },
          { id: 'j2', text: 'The commonly accepted criterion for IOA in ABA research is 80% or above — 80% meets this criterion.', isCorrect: true, justifiesChoice: 'A' },
          { id: 'j3', text: 'While higher IOA (90%+) is preferred, 80% is the minimum acceptable threshold in most ABA research contexts.', isCorrect: true, justifiesChoice: 'A' },
          { id: 'j4', text: 'The IOA is 80% but the criterion for research is 90%, so it is not acceptable.', isCorrect: false, justifiesChoice: 'B' },
          { id: 'j5', text: 'The IOA is 90% because (20+25)/2 = 22.5 and 20/22.5 = 89%, which rounds to 90%.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j6', text: 'The IOA is 75% because (25-20)/20 = 25% disagreement, so 75% agreement.', isCorrect: false, justifiesChoice: 'D' },
          { id: 'j7', text: '80% is below the 90% criterion required for published research.', isCorrect: false, justifiesChoice: 'B' },
          { id: 'j8', text: 'The mean count method gives 90% IOA.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j9', text: 'The difference method gives 75% IOA.', isCorrect: false, justifiesChoice: 'D' },
        ],
        explanation: 'Smaller/larger IOA = 20/25 = 80%. The standard criterion for acceptable IOA in ABA research is 80% or above. Therefore, 80% meets the criterion.',
      },
    ],
  },

  {
    id: 'sj-22',
    domain: 'Behavior Principles',
    title: 'Conditioned vs. Unconditioned Reinforcers',
    scenario: `A BCBA is designing a token economy for a classroom. She uses plastic chips as tokens, which students can exchange for preferred activities (free time, computer time, choice of activity). A new student, Kai, does not respond to the tokens initially — he shows no increase in behavior when tokens are delivered.`,
    questions: [
      {
        id: 'sj-22-q1',
        stem: 'Why are the tokens not functioning as reinforcers for Kai initially, and what should the BCBA do?',
        choices: [
          { id: 'A', text: 'Tokens are unconditioned reinforcers and should work for all students without conditioning' },
          { id: 'B', text: 'Tokens are conditioned reinforcers that must be paired with backup reinforcers to acquire reinforcing value' },
          { id: 'C', text: 'Kai is satiated on tokens because he has too many — the BCBA should reduce the number of tokens available' },
          { id: 'D', text: 'Tokens are not effective for students with autism and should be replaced with primary reinforcers' },
        ],
        correctChoice: 'B',
        justifications: [
          { id: 'j1', text: 'Tokens are conditioned reinforcers — their reinforcing value is acquired through pairing with backup reinforcers, not through biological necessity.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j2', text: 'For Kai, the tokens have not yet been paired with backup reinforcers he values — the BCBA must establish the token-backup reinforcer pairing before tokens will function as reinforcers.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j3', text: 'The BCBA should pair token delivery with immediate access to backup reinforcers to establish the conditioned reinforcing value of the tokens.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j4', text: 'Tokens are unconditioned reinforcers because they are universally valued across all cultures and individuals.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j5', text: 'Kai has been satiated on tokens, which is why they are not functioning as reinforcers.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j6', text: 'Token economies are not effective for students with autism and should not be used.', isCorrect: false, justifiesChoice: 'D' },
          { id: 'j7', text: 'Tokens have inherent value as symbols of achievement and should work for all students.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j8', text: 'Satiation is the most likely explanation for why tokens are not working for Kai.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j9', text: 'Token economies are contraindicated for students with autism because they cannot understand symbolic reinforcement.', isCorrect: false, justifiesChoice: 'D' },
        ],
        explanation: 'Tokens are conditioned reinforcers — their value is acquired through pairing with backup reinforcers. For Kai, this pairing has not yet occurred. The BCBA must establish the token-backup reinforcer pairing before tokens will function as reinforcers.',
      },
    ],
  },

  {
    id: 'sj-23',
    domain: 'Assessment',
    title: 'Preference Assessment Selection',
    scenario: `A BCBA needs to identify reinforcers for a 3-year-old child who has limited language and does not reliably respond to verbal instructions. The child has a history of quickly losing interest in items. The BCBA wants to identify a rank-ordered hierarchy of preferred stimuli to use in intervention.`,
    questions: [
      {
        id: 'sj-23-q1',
        stem: 'Which preference assessment procedure is MOST appropriate for this child?',
        choices: [
          { id: 'A', text: 'Caregiver interview (indirect assessment)' },
          { id: 'B', text: 'Multiple Stimulus Without Replacement (MSWO)' },
          { id: 'C', text: 'Single stimulus (SS) assessment' },
          { id: 'D', text: 'Free operant observation' },
        ],
        correctChoice: 'B',
        justifications: [
          { id: 'j1', text: 'MSWO produces a rank-ordered hierarchy of preferred stimuli, which is what the BCBA needs for intervention planning.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j2', text: 'MSWO is efficient and appropriate for young children with limited language because it requires only approach/selection responses, not verbal responses.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j3', text: 'MSWO accounts for satiation by removing selected items, which is important for a child who quickly loses interest in items.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j4', text: 'Caregiver interviews provide the most accurate information about a child\'s preferences because caregivers know the child best.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j5', text: 'Single stimulus assessment is most appropriate for young children because it presents one item at a time and is less confusing.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j6', text: 'Free operant observation is the most naturalistic and therefore most valid assessment procedure.', isCorrect: false, justifiesChoice: 'D' },
          { id: 'j7', text: 'Caregiver interviews are the gold standard for preference assessment in young children.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j8', text: 'Single stimulus assessment is more appropriate than MSWO for young children with limited attention.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j9', text: 'Free operant observation is always preferable because it captures preferences in the natural environment.', isCorrect: false, justifiesChoice: 'D' },
        ],
        explanation: 'MSWO is appropriate because it produces a rank-ordered hierarchy, requires only approach/selection responses (no verbal language needed), and accounts for satiation by removing selected items — important for a child who quickly loses interest.',
      },
    ],
  },

  {
    id: 'sj-24',
    domain: 'Ethics & Professional Practice',
    title: 'Confidentiality and Reporting Obligations',
    scenario: `During a home visit, a BCBA notices bruising on a child client's arms that is inconsistent with the parent's explanation. The BCBA suspects possible physical abuse. The BCBA is concerned about maintaining a positive working relationship with the family and is uncertain about her reporting obligations.`,
    questions: [
      {
        id: 'sj-24-q1',
        stem: 'What is the BCBA\'s MOST appropriate course of action?',
        choices: [
          { id: 'A', text: 'Discuss the concern with the parents directly before taking any other action' },
          { id: 'B', text: 'Document the observation and report the suspected abuse to the appropriate authorities' },
          { id: 'C', text: 'Consult with her supervisor before deciding whether to report' },
          { id: 'D', text: 'Continue monitoring the situation and report only if she observes additional evidence' },
        ],
        correctChoice: 'B',
        justifications: [
          { id: 'j1', text: 'BCBAs are mandated reporters — they are legally and ethically required to report suspected child abuse to the appropriate authorities.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j2', text: 'The BACB Ethics Code requires BCBAs to comply with all applicable laws, including mandatory reporting laws for suspected child abuse.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j3', text: 'The client\'s safety takes precedence over the therapeutic relationship — the BCBA must report regardless of the potential impact on the family relationship.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j4', text: 'Discussing the concern with parents first is the most respectful approach and may resolve the concern without involving authorities.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j5', text: 'Consulting with a supervisor is required before making any mandatory report.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j6', text: 'Continuing to monitor is appropriate because one observation is not sufficient evidence to make a report.', isCorrect: false, justifiesChoice: 'D' },
          { id: 'j7', text: 'Discussing with parents first allows the BCBA to gather more information before making a report.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j8', text: 'Supervisor approval is required before a BCBA can make a mandatory report.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j9', text: 'One observation is insufficient to trigger a mandatory report — more evidence is needed.', isCorrect: false, justifiesChoice: 'D' },
        ],
        explanation: 'BCBAs are mandated reporters. When they have reasonable suspicion of child abuse, they are legally and ethically required to report to the appropriate authorities immediately. The client\'s safety takes precedence over all other considerations.',
      },
    ],
  },

  {
    id: 'sj-25',
    domain: 'Behavior Principles',
    title: 'Differential Reinforcement Procedures',
    scenario: `A BCBA is selecting a differential reinforcement procedure for three different clients: Client 1 engages in head-banging maintained by automatic reinforcement; Client 2 engages in talking out maintained by attention, and the team wants to reduce but not eliminate talking out; Client 3 engages in hitting maintained by escape, and the team wants to teach a specific replacement behavior (requesting a break).`,
    questions: [
      {
        id: 'sj-25-q1',
        stem: 'For Client 2 (talking out, attention-maintained, reduce but not eliminate), which DR procedure is MOST appropriate?',
        choices: [
          { id: 'A', text: 'DRA — reinforce an alternative behavior (raising hand) while extinguishing talking out' },
          { id: 'B', text: 'DRL — reinforce talking out only when it occurs at or below a criterion rate' },
          { id: 'C', text: 'DRO — reinforce the absence of talking out during intervals' },
          { id: 'D', text: 'DRI — reinforce a behavior physically incompatible with talking out' },
        ],
        correctChoice: 'B',
        justifications: [
          { id: 'j1', text: 'DRL is specifically designed to REDUCE but not eliminate a behavior — it reinforces the behavior when it occurs at or below a criterion rate.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j2', text: 'The goal is to reduce talking out, not eliminate it — DRL is the only DR procedure that maintains the behavior at a reduced rate.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j3', text: 'DRL is appropriate when the behavior is socially acceptable at low rates (some talking out is normal) but problematic at high rates.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j4', text: 'DRA is the best choice because it teaches a replacement behavior (raising hand) that serves the same function.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j5', text: 'DRO is the most appropriate because it reinforces the absence of the problem behavior.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j6', text: 'DRI is appropriate because sitting quietly is physically incompatible with talking out.', isCorrect: false, justifiesChoice: 'D' },
          { id: 'j7', text: 'DRA is always the first-choice DR procedure for attention-maintained behavior.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j8', text: 'DRO is the most effective DR procedure for reducing problem behavior.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j9', text: 'DRI eliminates the behavior entirely, which is the goal for talking out.', isCorrect: false, justifiesChoice: 'D' },
        ],
        explanation: 'DRL is specifically designed to reduce but not eliminate a behavior by reinforcing it only when it occurs at or below a criterion rate. This is appropriate when the behavior is acceptable at low rates but problematic at high rates.',
      },
    ],
  },

  {
    id: 'sj-26',
    domain: 'Measurement',
    title: 'Graphing and Visual Analysis',
    scenario: `A BCBA is conducting a visual analysis of a graph showing a student's problem behavior across baseline and intervention phases. Baseline shows 5 data points with a mean of 15 and a slightly increasing trend. The intervention phase shows 8 data points with a mean of 6 and a clearly decreasing trend. The last 3 data points in the intervention phase are 4, 3, and 3.`,
    questions: [
      {
        id: 'sj-26-q1',
        stem: 'Based on visual analysis, what conclusion is MOST supported by the data?',
        choices: [
          { id: 'A', text: 'The intervention is ineffective because problem behavior has not reached zero' },
          { id: 'B', text: 'The intervention appears effective — there is a meaningful change in level, trend, and variability' },
          { id: 'C', text: 'The data are inconclusive because only 8 intervention data points have been collected' },
          { id: 'D', text: 'The baseline trend is increasing, so the intervention effect may be overestimated' },
        ],
        correctChoice: 'B',
        justifications: [
          { id: 'j1', text: 'The data show a meaningful change in LEVEL (mean from 15 to 6), TREND (increasing in baseline, decreasing in intervention), and VARIABILITY (stable low data at the end of intervention).', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j2', text: 'Visual analysis in ABA examines level, trend, and variability — all three dimensions show a positive change in this data set.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j3', text: 'The last 3 data points (4, 3, 3) show stability at a low level, suggesting the intervention effect is durable.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j4', text: 'The intervention is ineffective because problem behavior must reach zero to be considered successful.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j5', text: 'Eight data points are insufficient for visual analysis — at least 20 are needed.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j6', text: 'The increasing baseline trend means the intervention effect is confounded and cannot be interpreted.', isCorrect: false, justifiesChoice: 'D' },
          { id: 'j7', text: 'Zero is the only acceptable criterion for a successful behavior reduction intervention.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j8', text: 'Visual analysis requires a minimum of 20 data points per phase.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j9', text: 'An increasing baseline trend always invalidates the interpretation of intervention effects.', isCorrect: false, justifiesChoice: 'D' },
        ],
        explanation: 'Visual analysis examines level, trend, and variability. All three dimensions show a positive change: level decreased from 15 to 6, trend changed from increasing to decreasing, and the last 3 points show stability. This supports the conclusion that the intervention is effective.',
      },
    ],
  },

  {
    id: 'sj-27',
    domain: 'Skill Acquisition',
    title: 'Task Analysis and Chaining',
    scenario: `A BCBA is teaching a 10-year-old student to independently prepare a simple snack (making a peanut butter sandwich). She conducts a task analysis and identifies 12 steps. During baseline, the student independently completes steps 1, 2, and 3 but requires prompting for steps 4–12. The BCBA decides to use forward chaining.`,
    questions: [
      {
        id: 'sj-27-q1',
        stem: 'Using forward chaining, where should the BCBA begin instruction?',
        choices: [
          { id: 'A', text: 'Step 1 — the first step in the chain' },
          { id: 'B', text: 'Step 4 — the first step the student cannot perform independently' },
          { id: 'C', text: 'Step 12 — the last step in the chain' },
          { id: 'D', text: 'All steps simultaneously, prompting as needed throughout the chain' },
        ],
        correctChoice: 'B',
        justifications: [
          { id: 'j1', text: 'In forward chaining, instruction begins at the first step the learner cannot perform independently — steps already mastered are performed independently without instruction.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j2', text: 'The student already performs steps 1–3 independently — beginning instruction at step 1 wastes time on already-mastered steps.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j3', text: 'Efficient forward chaining begins at the first non-mastered step (step 4) and teaches steps in order from that point forward.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j4', text: 'Forward chaining always begins at step 1 regardless of the student\'s current performance.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j5', text: 'Backward chaining begins at the last step — the BCBA should use backward chaining and start at step 12.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j6', text: 'Total task chaining teaches all steps simultaneously and is the most efficient approach.', isCorrect: false, justifiesChoice: 'D' },
          { id: 'j7', text: 'Forward chaining always starts at step 1 to ensure the chain is learned in order.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j8', text: 'Starting at the last step (backward chaining) is more effective than forward chaining for multi-step tasks.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j9', text: 'Total task chaining is always preferable to forward or backward chaining.', isCorrect: false, justifiesChoice: 'D' },
        ],
        explanation: 'In forward chaining, instruction begins at the first step the learner cannot perform independently. Since the student already performs steps 1–3 independently, instruction should begin at step 4 — the first non-mastered step.',
      },
    ],
  },

  {
    id: 'sj-28',
    domain: 'Behavior Principles',
    title: 'Extinction and Its Side Effects',
    scenario: `A BCBA implements extinction for a child's attention-maintained tantrums. On day 1, the child's tantrums increase dramatically in frequency and intensity. On day 3, tantrums decrease to near zero. On day 7 (after a weekend), tantrums return briefly at a low rate but decrease again within the session. The BCBA is concerned about these patterns.`,
    questions: [
      {
        id: 'sj-28-q1',
        stem: 'The return of tantrums on day 7 after the weekend is BEST described as:',
        choices: [
          { id: 'A', text: 'Extinction burst — the behavior is increasing because extinction is not working' },
          { id: 'B', text: 'Spontaneous recovery — the extinguished behavior temporarily returns after a period of time' },
          { id: 'C', text: 'Resurgence — a previously extinguished behavior returns when the current behavior is placed on extinction' },
          { id: 'D', text: 'Renewal — the behavior returns because the context changed (home to school)' },
        ],
        correctChoice: 'B',
        justifications: [
          { id: 'j1', text: 'Spontaneous recovery is the reappearance of an extinguished behavior after a period of time has elapsed — the weekend break is the period of time.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j2', text: 'The behavior had already decreased to near zero (day 3) before the weekend — the return on day 7 is not an extinction burst (which occurs at the START of extinction).', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j3', text: 'Spontaneous recovery is expected during extinction and does not indicate treatment failure — the behavior decreases again within the session, which is the typical pattern.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j4', text: 'An extinction burst occurs immediately when extinction begins, not after the behavior has already decreased.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j5', text: 'Resurgence occurs when a MORE RECENTLY REINFORCED behavior is placed on extinction — there is no indication that a different behavior was placed on extinction.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j6', text: 'Renewal occurs when the CONTEXT CHANGES — the scenario does not describe a context change, only a time gap.', isCorrect: false, justifiesChoice: 'D' },
          { id: 'j7', text: 'The return of tantrums means extinction is not working and a new intervention is needed.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j8', text: 'Resurgence is the most likely explanation because the behavior returned after a break.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j9', text: 'Renewal explains the return because the child was in a different environment (home) over the weekend.', isCorrect: false, justifiesChoice: 'D' },
        ],
        explanation: 'Spontaneous recovery is the reappearance of an extinguished behavior after a period of time. The weekend break is the time gap. This is expected during extinction and does not indicate treatment failure — the behavior decreases again within the session.',
      },
    ],
  },

  {
    id: 'sj-29',
    domain: 'Assessment',
    title: 'Operational Definitions',
    scenario: `A BCBA is writing an operational definition for "aggression" for a new client. She considers several options: (1) "Hitting, kicking, or biting that makes contact with another person's body"; (2) "Any behavior that is aggressive"; (3) "Hitting with an open or closed hand, kicking with a foot or leg, or biting with teeth, that makes physical contact with another person's skin or clothing"; (4) "Behavior that hurts others."`,
    questions: [
      {
        id: 'sj-29-q1',
        stem: 'Which operational definition is MOST appropriate for use in an ABA program?',
        choices: [
          { id: 'A', text: 'Option 2: "Any behavior that is aggressive"' },
          { id: 'B', text: 'Option 4: "Behavior that hurts others"' },
          { id: 'C', text: 'Option 1: "Hitting, kicking, or biting that makes contact with another person\'s body"' },
          { id: 'D', text: 'Option 3: "Hitting with an open or closed hand, kicking with a foot or leg, or biting with teeth, that makes physical contact with another person\'s skin or clothing"' },
        ],
        correctChoice: 'D',
        justifications: [
          { id: 'j1', text: 'Option 3 is the most complete and objective definition — it specifies the exact topographies (open/closed hand, foot/leg, teeth) and the criterion for occurrence (physical contact with skin or clothing).', isCorrect: true, justifiesChoice: 'D' },
          { id: 'j2', text: 'A good operational definition must be observable, measurable, and complete — Option 3 meets all three criteria, allowing different observers to reliably agree on whether the behavior occurred.', isCorrect: true, justifiesChoice: 'D' },
          { id: 'j3', text: 'Option 3 eliminates ambiguity by specifying the exact body parts involved and the contact criterion, which maximizes IOA.', isCorrect: true, justifiesChoice: 'D' },
          { id: 'j4', text: 'Option 2 is the most concise and practical definition for use in a busy classroom setting.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j5', text: 'Option 4 is the most important because it focuses on the impact of the behavior (harm to others).', isCorrect: false, justifiesChoice: 'B' },
          { id: 'j6', text: 'Option 1 is sufficient because it identifies the three main topographies of aggression.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j7', text: 'Option 2 is best because it covers all possible forms of aggression without being overly restrictive.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j8', text: 'Option 4 is best because it focuses on the function of the behavior (hurting others).', isCorrect: false, justifiesChoice: 'B' },
          { id: 'j9', text: 'Option 1 is sufficient for most clinical purposes and is easier to remember.', isCorrect: false, justifiesChoice: 'C' },
        ],
        explanation: 'A good operational definition must be observable, measurable, and complete. Option 3 specifies exact topographies and a clear criterion for occurrence, maximizing objectivity and IOA. Options 2 and 4 are subjective; Option 1 is less complete than Option 3.',
      },
    ],
  },

  {
    id: 'sj-30',
    domain: 'Behavior Principles',
    title: 'Maintenance and Generalization Programming',
    scenario: `A BCBA has successfully taught a child to use a 3-step hand-washing routine in the therapy room. The child performs the routine at 100% accuracy for 5 consecutive sessions. However, the child's parents report that he does not wash his hands at home, and his teacher reports that he does not wash his hands at school.`,
    questions: [
      {
        id: 'sj-30-q1',
        stem: 'The child\'s failure to wash hands at home and school is BEST described as a failure of:',
        choices: [
          { id: 'A', text: 'Maintenance — the behavior has not persisted over time' },
          { id: 'B', text: 'Stimulus generalization — the behavior has not spread to new settings' },
          { id: 'C', text: 'Response generalization — the child is not generating new hand-washing behaviors' },
          { id: 'D', text: 'Chaining — the behavior chain has not been fully established' },
        ],
        correctChoice: 'B',
        justifications: [
          { id: 'j1', text: 'The behavior occurs in the therapy room but not in home or school settings — this is a failure of stimulus generalization (the behavior has not spread to new settings).', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j2', text: 'Stimulus generalization requires the behavior to occur in the presence of stimuli similar to the training SD (therapy room) — the home and school bathrooms are similar but untrained settings.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j3', text: 'This is a classic example of why generalization must be explicitly programmed — training in one setting does not guarantee generalization to other settings.', isCorrect: true, justifiesChoice: 'B' },
          { id: 'j4', text: 'Maintenance refers to behavior persisting OVER TIME — the behavior is still occurring in the therapy room, so this is not a maintenance failure.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j5', text: 'Response generalization refers to new RESPONSES occurring — the child is not generating new hand-washing behaviors, so this is not response generalization.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j6', text: 'Chaining refers to the sequence of steps — the child performs all steps correctly in the therapy room, so the chain is established.', isCorrect: false, justifiesChoice: 'D' },
          { id: 'j7', text: 'The behavior has not persisted over time, which is a maintenance failure.', isCorrect: false, justifiesChoice: 'A' },
          { id: 'j8', text: 'The child is not generating new hand-washing behaviors, which is a response generalization failure.', isCorrect: false, justifiesChoice: 'C' },
          { id: 'j9', text: 'The behavior chain has not been fully established because it only occurs in one setting.', isCorrect: false, justifiesChoice: 'D' },
        ],
        explanation: 'The behavior occurs in the therapy room but not in home or school settings — this is a failure of stimulus generalization. The behavior has not spread to new settings. This is why generalization must be explicitly programmed through multiple exemplar training.',
      },
    ],
  },
];
