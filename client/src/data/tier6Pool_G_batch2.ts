import type { Question } from "./types";

export const tier6Pool_G_batch2: Question[] = [
  {
    id: "G-b2-01",
    domain: "G",
    scenario: `A BCBA is designing a behavior-change program for a 9-year-old with autism who engages in frequent off-task behavior during independent work. The BCBA decides to use a differential reinforcement of other behavior (DRO) procedure. During the initial DRO interval, the child is off-task for 40% of the session.`,
    question: `Which of the following best describes how the BCBA should set the initial DRO interval?`,
    choices: [
      { letter: "A", text: `Set the interval equal to the mean interresponse time (IRT) of the target behavior, so that the child has a reasonable probability of success at the start of the program.` },
      { letter: "B", text: `Set the interval at 30 minutes to encourage the child to maintain appropriate behavior for extended periods from the beginning of the program.` },
      { letter: "C", text: `Set the interval equal to the longest observed IRT so that the child should demonstrate maximum behavioral control before earning reinforcement.` },
      { letter: "D", text: `Set the interval at 1 minute regardless of baseline data, then increase it systematically once the child achieves 80% success.` },
    ],
    correctAnswer: "A",
    difficulty: "medium",
    taskItem: "G.4",
    rationale: `Choice A is correct. The standard recommendation for setting the initial DRO interval is to use the mean interresponse time (IRT) from baseline, which gives the learner approximately a 50% probability of success at the start. This ensures the procedure is neither too easy (which would fail to produce behavior change) nor too difficult (which would result in extinction-like conditions with few reinforcers). Choice B is incorrect — a 30-minute interval is far too long for a child who is off-task 40% of the time and would result in very few reinforcement opportunities. Choice C is incorrect — using the longest IRT would make the criterion too difficult initially. Choice D is incorrect — using a fixed 1-minute interval without reference to baseline data is not evidence-based.`
  },
  {
    id: "G-b2-02",
    domain: "G",
    scenario: `A BCBA is working with a 14-year-old who has a history of physical aggression maintained by escape from academic demands. The team has implemented a function-based intervention that includes extinction (blocking escape) and teaching a functionally equivalent replacement behavior (requesting a break). After 3 weeks, aggression has decreased by 60% but has not yet reached zero.`,
    question: `Which of the following is the most appropriate next step for the BCBA to consider?`,
    choices: [
      { letter: "A", text: `Discontinue extinction immediately because the 60% reduction indicates the function has changed and a new functional analysis is required before continuing.` },
      { letter: "B", text: `Add a punishment component (e.g., response cost) to accelerate the rate of reduction, since extinction alone is not producing a rapid enough decrease.` },
      { letter: "C", text: `Continue the current intervention while monitoring data closely, as a 60% reduction after 3 weeks represents meaningful progress and extinction typically produces gradual decreases.` },
      { letter: "D", text: `Immediately thin the reinforcement schedule for the replacement behavior to test whether the behavior change will maintain under leaner schedules.` },
    ],
    correctAnswer: "C",
    difficulty: "medium",
    taskItem: "G.11",
    rationale: `Choice C is correct. A 60% reduction in aggression after 3 weeks of a function-based intervention is clinically meaningful progress. Extinction procedures typically produce gradual decreases rather than immediate elimination, and the appropriate response is to continue the intervention while monitoring data carefully. Abrupt changes to a working intervention are not indicated. Choice A is incorrect — a 60% reduction is evidence that the intervention is working, not that the function has changed. Choice B is incorrect — adding punishment prematurely before allowing the current intervention to reach its full effect is not best practice and introduces unnecessary aversive procedures. Choice D is incorrect — thinning the reinforcement schedule for the replacement behavior before the target behavior has reached near-zero levels risks an extinction burst and is premature.`
  },
  {
    id: "G-b2-03",
    domain: "G",
    scenario: `A BCBA is training a new RBT on how to implement a discrete trial training (DTT) program for a 5-year-old learning to identify colors. The BCBA observes that the RBT is delivering the intertrial interval (ITI) inconsistently — sometimes 1 second, sometimes 10 seconds — and is not recording data on each trial.`,
    question: `Which of the following best explains why consistent ITI duration is important in DTT?`,
    choices: [
      { letter: "A", text: `A consistent ITI ensures that the child's response on each trial is independent of the previous trial, reducing the likelihood that the child is responding based on position or perseveration rather than the discriminative stimulus.` },
      { letter: "B", text: `A consistent ITI is recommended by the BACB Ethics Code to ensure that all DTT programs are implemented with procedural fidelity across all practitioners.` },
      { letter: "C", text: `A consistent ITI prevents the child from becoming bored with the task, which is the primary reason for off-task behavior during DTT sessions.` },
      { letter: "D", text: `A consistent ITI ensures that the total number of trials per session remains constant, which is the most important variable for measuring learning rate.` },
    ],
    correctAnswer: "A",
    difficulty: "easy",
    taskItem: "G.18",
    rationale: `Choice A is correct. The ITI in DTT serves to separate trials and reduce the likelihood that the child's response is controlled by the previous trial's stimuli or reinforcement rather than the current discriminative stimulus. An inconsistent ITI can result in perseverative responding, position biases, or responses controlled by the reinforcer delivery rather than the SD. Choice B is incorrect — the BACB Ethics Code does not specify ITI duration; this is a procedural consideration based on learning principles. Choice C is incorrect — while engagement is important, the primary function of the ITI is to ensure trial independence, not to prevent boredom. Choice D is incorrect — total trial count is one measure of learning rate, but it is not the primary reason for maintaining a consistent ITI.`
  },
  {
    id: "G-b2-04",
    domain: "G",
    scenario: `A BCBA is working with a 7-year-old who has limited vocal verbal behavior. The BCBA is using a naturalistic teaching approach (incidental teaching) to build requesting (mand) behavior. During a session, the child reaches toward a preferred toy that is out of reach. The BCBA holds the toy up and waits expectantly.`,
    question: `Which of the following best describes what the BCBA is doing and why it is effective?`,
    choices: [
      { letter: "A", text: `The BCBA is using a prompting hierarchy to ensure the child receives a physical prompt if they do not respond, which prevents the child from experiencing failure during the session.` },
      { letter: "B", text: `The BCBA is using extinction to eliminate reaching behavior, which is an inappropriate form of requesting that should be replaced with vocal behavior.` },
      { letter: "C", text: `The BCBA is using a token economy to delay reinforcement, which teaches the child that preferred items are not immediately available and builds frustration tolerance.` },
      { letter: "D", text: `The BCBA is using a time delay procedure to create a motivating operation for communication, which increases the likelihood that the child will emit a mand and allows the BCBA to reinforce it with the natural consequence (access to the toy).` },
    ],
    correctAnswer: "D",
    difficulty: "easy",
    taskItem: "G.17",
    rationale: `Choice D is correct. In incidental teaching, the practitioner arranges the environment to create a motivating operation (MO) for communication — in this case, by placing the preferred toy out of reach. Holding the toy up and waiting expectantly is a time delay procedure that creates an opportunity for the child to emit a mand (request). The natural reinforcer (access to the toy) is then delivered contingent on the communicative response, making the mand functionally effective. This approach capitalizes on the child's natural motivation and embeds teaching in meaningful contexts. Choice A is incorrect — the BCBA is not implementing a prompting hierarchy; they are using a time delay. Choice B is incorrect — the BCBA is not using extinction; they are creating an opportunity for communication. Choice C is incorrect — a token economy is not being used here; the BCBA is delivering the natural reinforcer directly.`
  },
  {
    id: "G-b2-05",
    domain: "G",
    scenario: `A BCBA is reviewing a behavior intervention plan for a 16-year-old with intellectual disability who engages in self-injurious behavior (SIB) maintained by automatic reinforcement. The current plan includes response interruption and redirection (RIRD), noncontingent reinforcement (NCR) with competing stimuli, and a competing stimulus assessment.`,
    question: `Which of the following best explains the rationale for including a competing stimulus assessment in the intervention plan for automatically reinforced SIB?`,
    choices: [
      { letter: "A", text: `A competing stimulus assessment is required before implementing any punishment procedure to ensure that the least restrictive alternative has been tried first, in accordance with BACB ethical guidelines.` },
      { letter: "B", text: `A competing stimulus assessment identifies stimuli that produce reinforcement that competes with the automatic reinforcement produced by the SIB, allowing the team to select the most effective items for the NCR component of the intervention.` },
      { letter: "C", text: `A competing stimulus assessment determines the function of the SIB by observing whether the behavior increases or decreases in the presence of various stimuli, replacing the need for a functional analysis.` },
      { letter: "D", text: `A competing stimulus assessment identifies the antecedent stimuli that trigger the SIB, allowing the team to modify the environment to prevent the behavior from occurring.` },
    ],
    correctAnswer: "B",
    difficulty: "hard",
    taskItem: "G.6",
    rationale: `Choice B is correct. For automatically reinforced behavior, the competing stimulus assessment (CSA) identifies stimuli that suppress the target behavior — presumably because they produce competing reinforcement that is incompatible with engaging in the SIB. The stimuli identified as most effective in the CSA are then used in the NCR component of the intervention, providing the client with access to highly preferred stimuli on a noncontingent schedule to reduce the motivating operation for the automatically reinforced SIB. Choice A is incorrect — a CSA is not required before punishment procedures; it is a tool for identifying effective competing stimuli for NCR. Choice C is incorrect — a CSA does not determine function; functional analysis or functional behavior assessment is used for that purpose. Choice D is incorrect — a CSA identifies competing stimuli (not antecedent triggers), and its purpose is to inform the NCR component, not to modify antecedents.`
  },
];
