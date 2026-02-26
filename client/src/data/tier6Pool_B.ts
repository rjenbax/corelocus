import { Question } from './types';

export const tier6Pool_B: Question[] = [
  {
    id: "t6-B-pool-1",
    domain: "B",
    taskItem: "B.1",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "medium",
    scenario: "A 7-year-old client with ASD in a clinic setting frequently engages in screaming behavior when presented with academic tasks. The BCBA observes that immediately after screaming, the client is often given a break from the task. This pattern has led to an increase in the frequency of screaming over time.",
    question: "Which of the following best explains the pattern observed in the client’s screaming behavior?",
    choices: [
    { letter: "A", text: "The screaming behavior is being maintained by positive reinforcement, as the client is receiving attention from the staff following the behavior." },
    { letter: "B", text: "The screaming behavior is a result of an unconditioned response to the aversive academic task, leading to an increase in emotional outbursts." },
    { letter: "C", text: "The screaming behavior is an extinction burst, indicating that a previously reinforced behavior is no longer receiving reinforcement." },
    { letter: "D", text: "The screaming behavior is being maintained by negative reinforcement, as the client is escaping the academic task following the behavior." }
    ],
    correctAnswer: "D",
    rationale: "The core principle here is negative reinforcement, which involves the removal of an aversive stimulus following a behavior, leading to an increase in the future probability of that behavior. In this scenario, the academic task is likely an aversive stimulus, and screaming leads to its removal (a break), thus increasing screaming. Choice A is plausible if attention was the consequence, but the scenario specifies a break from the task. Choice C is incorrect because the behavior is increasing, suggesting reinforcement, not an extinction burst which occurs when reinforcement is withheld. Choice D describes an unconditioned response, but the scenario describes an operant behavior that has increased due to its consequences, not a reflexive response."
  },
  {
    id: "t6-B-pool-2",
    domain: "B",
    taskItem: "B.1",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "easy",
    scenario: "A 5-year-old client with developmental delays in a home setting often throws toys when asked to clean up. When the client throws toys, the parent immediately picks up the toys for the client. The BCBA wants to increase the client’s compliance with cleaning up.",
    question: "Which intervention is most appropriate given the data to increase the client’s compliance with cleaning up?",
    choices: [
    { letter: "A", text: "Implement a time-out procedure immediately after the client throws toys, removing them from all access to preferred items for a brief period." },
    { letter: "B", text: "Provide verbal praise and a small edible reinforcer immediately after the client places a toy in the bin when asked to clean up." },
    { letter: "C", text: "Implement a response cost procedure where the client loses a token for each toy thrown during clean-up time." },
    { letter: "D", text: "Ignore the toy-throwing behavior and continue to prompt the client to clean up without providing any consequences for throwing." }
    ],
    correctAnswer: "B",
    rationale: "The most appropriate intervention to increase a desired behavior (compliance with cleaning up) is positive reinforcement. Providing verbal praise and an edible reinforcer immediately after the client places a toy in the bin will increase the likelihood of that behavior occurring in the future. Choice A (time-out) and C (response cost) are punishment procedures aimed at decreasing behavior, which is not the primary goal here. Choice D (ignoring) is an extinction procedure, which is used to decrease problem behavior, not to increase a desired behavior."
  },
  {
    id: "t6-B-pool-3",
    domain: "B",
    taskItem: "B.2",
    phase: "assessment",
    bloomsLevel: "analysis",
    difficulty: "hard",
    scenario: "A 12-year-old client with ADHD in a school setting frequently disrupts class by making loud noises. The teacher typically responds by sending the client to the principal’s office, which the client seems to enjoy as it provides a break from academic work. However, on some occasions, the teacher offers the client extra recess time for quiet work, and the client’s disruptive behavior temporarily decreases.",
    question: "Which of the following best distinguishes the two observed behavioral consequences?",
    choices: [
    { letter: "A", text: "Sending the client to the principal’s office functions as positive reinforcement, while offering extra recess time functions as negative reinforcement." },
    { letter: "B", text: "Sending the client to the principal’s office functions as negative reinforcement, while offering extra recess time functions as positive reinforcement." },
    { letter: "C", text: "Both sending the client to the principal’s office and offering extra recess time function as positive reinforcement, but for different behaviors." },
    { letter: "D", text: "Sending the client to the principal’s office functions as positive punishment, while offering extra recess time functions as negative punishment." }
    ],
    correctAnswer: "B",
    rationale: "This question requires distinguishing between positive and negative reinforcement. Sending the client to the principal’s office removes them from the academic task, which is likely an aversive stimulus, and thus increases the disruptive behavior through negative reinforcement (removal of something aversive). Offering extra recess time for quiet work involves adding a desirable item (extra recess) contingent on the desired behavior (quiet work), which is positive reinforcement. Choice A reverses the functions. Choice C is incorrect because one involves removal (negative reinforcement) and the other involves addition (positive reinforcement). Choice D is incorrect because neither consequence is described as decreasing the future probability of the behavior, which is the definition of punishment."
  },
  {
    id: "t6-B-pool-4",
    domain: "B",
    taskItem: "B.2",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "medium",
    scenario: "A 4-year-old client with a language delay in a clinic setting consistently cries when asked to complete a puzzle. Each time the client cries, the therapist immediately stops the puzzle activity. The BCBA wants to increase the client’s engagement with puzzle tasks.",
    question: "What is the most appropriate next step for the BCBA to address the client’s crying behavior and increase puzzle engagement?",
    choices: [
    { letter: "A", text: "Continue to stop the puzzle activity when the client cries, as this may eventually lead to the crying extinguishing over time." },
    { letter: "B", text: "Implement a differential reinforcement of alternative behavior (DRA) procedure, reinforcing puzzle engagement and withholding termination of the task for crying." },
    { letter: "C", text: "Introduce a token board system where the client earns tokens for crying less, which can then be exchanged for a preferred item." },
    { letter: "D", text: "Apply a mild verbal reprimand each time the client cries, stating that crying is not allowed during puzzle time." }
    ],
    correctAnswer: "B",
    rationale: "The scenario describes crying being maintained by negative reinforcement (escape from the puzzle). To address this, the BCBA should use a procedure that reinforces an alternative, desired behavior (puzzle engagement) while simultaneously putting the problem behavior (crying) on extinction by withholding its reinforcing consequence (termination of the task). This is the definition of Differential Reinforcement of Alternative Behavior (DRA). Choice A would maintain the problem behavior. Choice C (token board for crying less) is not as direct in reinforcing the desired alternative behavior and still gives attention to crying. Choice D (verbal reprimand) is a punishment procedure, which may suppress behavior but does not teach or reinforce an alternative, and could potentially serve as positive reinforcement if the client seeks attention."
  },
  {
    id: "t6-B-pool-5",
    domain: "B",
    taskItem: "B.3",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "medium",
    scenario: "A 10-year-old client with severe intellectual disabilities in a residential setting frequently engages in property destruction, such as tearing books and breaking toys. Current interventions have not been effective, and the behavior poses safety risks and significant financial costs. The BCBA is considering a positive punishment procedure.",
    question: "What ethical consideration must the BCBA prioritize when considering a positive punishment procedure for property destruction?",
    choices: [
    { letter: "A", text: "The BCBA must ensure that the punishment procedure is implemented consistently across all staff members to maximize its effectiveness." },
    { letter: "B", text: "The BCBA must first exhaust all less restrictive and intrusive interventions, such as differential reinforcement, before implementing punishment." },
    { letter: "C", text: "The BCBA must obtain informed consent from all staff involved in the implementation of the punishment procedure." },
    { letter: "D", text: "The BCBA must ensure that the punishment procedure is socially acceptable to the client’s family and the residential facility administration." }
    ],
    correctAnswer: "B",
    rationale: "A primary ethical consideration when using restrictive procedures like punishment is to always use the least restrictive effective intervention. This means that less restrictive procedures, such as differential reinforcement, should be attempted and found ineffective before considering punishment. Choice A describes a crucial implementation detail, but not the primary ethical consideration for *considering* the procedure itself. Choice C is important for implementation but not the initial ethical hurdle for considering punishment. Choice D is a practical and social consideration, but the ethical mandate of least restrictive alternative is paramount."
  },
  {
    id: "t6-B-pool-6",
    domain: "B",
    taskItem: "B.3",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "hard",
    scenario: "A 6-year-old client with ASD in a school setting frequently elopes from the classroom. After a functional behavior assessment, it was determined that elopement is maintained by escape from academic demands. The BCBA is considering adding a positive punishment component to a comprehensive intervention plan.",
    question: "Which of the following positive punishment interventions would be most appropriate to consider, while still adhering to ethical guidelines, to decrease the client’s elopement?",
    choices: [
    { letter: "A", text: "Implementing a brief, contingent physical restraint to prevent elopement, followed by immediate return to the academic task." },
    { letter: "B", text: "Applying a squirt of lemon juice to the client’s tongue immediately upon attempting to elope, paired with a verbal ’no’." },
    { letter: "C", text: "Requiring the client to immediately return to the classroom and complete 5 minutes of additional academic work for each elopement attempt." },
    { letter: "D", text: "Delivering a loud, startling noise through a speaker in the classroom each time the client attempts to open the door to elope." }
    ],
    correctAnswer: "C",
    rationale: "Ethical considerations strongly favor positive punishment procedures that are least intrusive and most aligned with the natural consequences of the behavior, while still being effective. Requiring additional academic work (overcorrection/contingent exercise) is a form of positive punishment that is directly related to the escaped demand and does not involve physical aversives or highly intrusive stimuli, making it a more ethically defensible choice than other options. Choice A (physical restraint) is highly restrictive and often used for safety, not as a primary punishment for elopement itself. Choice B (lemon juice) and D (loud noise) are typically considered highly intrusive and potentially harmful or aversive stimuli, often requiring extensive justification and ethical review, and are generally not preferred as initial positive punishment options for elopement."
  },
  {
    id: "t6-B-pool-7",
    domain: "B",
    taskItem: "B.4",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "medium",
    scenario: "A 9-year-old client with ASD in a clinic setting frequently takes toys from peers without asking. This behavior often leads to conflicts and distress among other clients. The BCBA wants to decrease this behavior.",
    question: "Which negative punishment intervention is most appropriate to implement to decrease the client’s toy-taking behavior?",
    choices: [
    { letter: "A", text: "Immediately remove the client from the play area and place them in a time-out room for 5 minutes each time they take a toy." },
    { letter: "B", text: "Require the client to give a preferred toy to the peer from whom they took a toy, in addition to apologizing." },
    { letter: "C", text: "Implement a response cost procedure where the client loses 5 minutes of preferred activity time for each instance of taking a toy." },
    { letter: "D", text: "Provide a stern verbal reprimand each time the client takes a toy, explaining why it is not appropriate." }
    ],
    correctAnswer: "C",
    rationale: "Negative punishment involves removing a desirable stimulus or activity contingent on a behavior, which decreases the future probability of that behavior. A response cost procedure, where the client loses preferred activity time, is a direct application of negative punishment for the toy-taking behavior. Choice A (time-out) is a form of negative punishment, but response cost is often less restrictive and more directly tied to the value of the removed item/activity. Choice B (giving a toy to a peer) is a form of overcorrection, which is positive punishment. Choice D (verbal reprimand) is typically a positive punishment procedure, as it adds an aversive stimulus (the reprimand), though its effect can vary."
  },
  {
    id: "t6-B-pool-8",
    domain: "B",
    taskItem: "B.4",
    phase: "evaluation",
    bloomsLevel: "analysis",
    difficulty: "hard",
    scenario: "A 6-year-old client in a school setting frequently yells out answers without raising their hand. The BCBA implemented a procedure where each time the client yells out, they lose 1 minute of free play time. Initially, the yelling decreased significantly, but after a few weeks, it started to increase again, though not to its original frequency. The teacher is concerned the intervention is failing.",
    question: "What does this pattern most likely indicate regarding the effectiveness of the negative punishment procedure?",
    choices: [
    { letter: "A", text: "The intervention is likely ineffective because the client’s behavior is increasing, suggesting that the free play time is not a strong enough reinforcer." },
    { letter: "B", text: "The intervention may be losing its effectiveness due to habituation to the punishment, requiring a more intense or different punisher." },
    { letter: "C", text: "The increase in yelling suggests that the behavior is experiencing spontaneous recovery, which is a temporary return after a period of decrease." },
    { letter: "D", text: "The increase in yelling indicates that the client is now receiving positive reinforcement for yelling out, possibly through peer attention." }
    ],
    correctAnswer: "C",
    rationale: "Spontaneous recovery is a temporary reappearance of an extinguished or suppressed behavior after a period of absence or decrease. While the intervention is a punishment procedure (negative punishment), behavior that has been suppressed by punishment can also show temporary increases, similar to spontaneous recovery following extinction. The key is the initial decrease followed by a subsequent, temporary increase, but not to original levels. Choice A is too dismissive of the initial decrease. Choice B (habituation) is a possibility, but spontaneous recovery is a more direct explanation for a temporary increase after a period of suppression. Choice D is a possibility to consider in a functional assessment, but the pattern of initial decrease and then partial return aligns more closely with spontaneous recovery as a natural behavioral phenomenon after suppression."
  },
  {
    id: "t6-B-pool-9",
    domain: "B",
    taskItem: "B.5",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "medium",
    scenario: "A 3-year-old client with a language delay in a home setting often screams when they want a preferred toy. Parents typically give the toy to stop the screaming. The BCBA implements an extinction procedure, instructing parents to no longer provide the toy when the client screams, but to reinforce appropriate requests.",
    question: "What should the BCBA anticipate occurring shortly after the implementation of this extinction procedure?",
    choices: [
    { letter: "A", text: "The screaming behavior will likely increase in frequency, intensity, or duration, along with the possible emergence of novel behaviors." },
    { letter: "B", text: "The screaming behavior will immediately cease, as the reinforcement is no longer available, and appropriate requests will quickly increase." },
    { letter: "C", text: "The client will likely become withdrawn and less communicative, as their primary method of obtaining toys is no longer effective." },
    { letter: "D", text: "The screaming behavior will gradually decrease over several weeks, with no noticeable changes in other behaviors during that time." }
    ],
    correctAnswer: "A",
    rationale: "A common and expected phenomenon during the initial stages of an extinction procedure is an extinction burst. This involves a temporary increase in the frequency, intensity, or duration of the previously reinforced behavior, and may also include the emergence of novel behaviors or increased emotional responding. Choice A is incorrect because immediate cessation is rare and an extinction burst is more likely. Choice C describes a possible side effect of punishment or a severe reaction, but not the typical initial response to extinction. Choice D describes the long-term goal of extinction, but not the immediate anticipated effect."
  },
  {
    id: "t6-B-pool-10",
    domain: "B",
    taskItem: "B.5",
    phase: "evaluation",
    bloomsLevel: "application",
    difficulty: "hard",
    scenario: "A 14-year-old client with intellectual disabilities in a residential setting used to engage in frequent self-injurious behavior (SIB) by head-banging to gain staff attention. An extinction procedure was implemented where staff no longer provided attention for SIB, and attention was redirected to appropriate behaviors. Data initially showed a significant decrease in SIB, but then there was a sudden, temporary spike in head-banging to levels higher than before the intervention.",
    question: "What is the most appropriate next step for the BCBA given the observed data pattern?",
    choices: [
    { letter: "A", text: "Terminate the extinction procedure immediately, as the increase in SIB indicates it is ineffective and potentially harmful." },
    { letter: "B", text: "Implement a positive punishment procedure, such as contingent restraint, to immediately suppress the increased SIB." },
    { letter: "C", text: "Reintroduce attention for SIB at a low rate to gradually thin the reinforcement schedule and prevent further bursts." },
    { letter: "D", text: "Continue to consistently implement the extinction procedure while ensuring safety, as this pattern is characteristic of an extinction burst." }
    ],
    correctAnswer: "D",
    rationale: "The scenario describes a classic extinction burst: an initial decrease in behavior followed by a temporary, sharp increase. When this occurs, it is crucial to continue consistently implementing the extinction procedure, while prioritizing safety, as this indicates the procedure is having an effect and breaking the reinforcement contingency. Terminating the procedure (Choice A) would inadvertently reinforce the increased behavior, making it more resistant to extinction in the future. Reintroducing attention (Choice C) would undermine the extinction process. Implementing punishment (Choice D) is a more restrictive intervention that should only be considered after less restrictive options have been thoroughly attempted and found ineffective, and it does not address the underlying extinction burst phenomenon."
  },
  {
    id: "t6-B-pool-11",
    domain: "B",
    taskItem: "B.6",
    phase: "evaluation",
    bloomsLevel: "analysis",
    difficulty: "medium",
    scenario: "A 5-year-old client with ASD in a home setting previously engaged in crying to obtain access to preferred snacks. An extinction procedure was successfully implemented, and crying for snacks decreased to near-zero levels for several weeks. However, after a particularly stressful day, the client cried briefly when denied a snack, despite the extinction procedure remaining in place.",
    question: "What does this temporary reappearance of crying most likely indicate?",
    choices: [
    { letter: "A", text: "The extinction procedure was not implemented consistently, leading to intermittent reinforcement of crying behavior." },
    { letter: "B", text: "The crying behavior has undergone spontaneous recovery, which is a temporary return after a period of extinction." },
    { letter: "C", text: "The client is experiencing a new function for crying behavior, possibly related to internal states or pain." },
    { letter: "D", text: "The extinction procedure has lost its effectiveness and needs to be replaced with a more intensive intervention." }
    ],
    correctAnswer: "B",
    rationale: "Spontaneous recovery refers to the temporary reappearance of an extinguished response after a period of time has passed and the behavior has been absent or at a very low rate. The scenario describes exactly this: crying had decreased to near-zero, and then temporarily reappeared. This is a common and expected phenomenon after extinction. Choice A is possible, but the scenario states the procedure ’remained in place,’ suggesting consistency. Choice C suggests a new functional assessment is needed, which might be true if the behavior persists, but spontaneous recovery is the most immediate explanation for a temporary return. Choice D is premature; spontaneous recovery does not necessarily mean the procedure has lost effectiveness, but rather is a characteristic of extinction."
  },
  {
    id: "t6-B-pool-12",
    domain: "B",
    taskItem: "B.6",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "hard",
    scenario: "A 10-year-old client with a history of self-injurious behavior (SIB) maintained by attention in a residential setting successfully had SIB reduced to near-zero levels through an extinction procedure combined with differential reinforcement of other behavior (DRO). Six months later, following a change in staffing and a period of high demand, the client’s SIB suddenly reemerged at a moderate frequency, alongside other previously observed problem behaviors like aggression and property destruction.",
    question: "What should the BCBA consider as the most likely explanation for this sudden reemergence of multiple problem behaviors?",
    choices: [
    { letter: "A", text: "The client is experiencing a severe extinction burst due to the change in staffing and increased demands, indicating the need for more consistent implementation." },
    { letter: "B", text: "The client is testing the new staff to determine if the previous reinforcement contingencies for SIB are still in place." },
    { letter: "C", text: "The previous extinction and DRO procedures were not effective in the long term and require a complete revision to include punishment components." },
    { letter: "D", text: "The reemergence of SIB and other behaviors is likely due to resurgence, where previously reinforced behaviors reappear when current reinforcement contingencies are disrupted." }
    ],
    correctAnswer: "D",
    rationale: "Resurgence occurs when a previously reinforced and then extinguished behavior reappears, often when a more recently reinforced behavior is put on extinction or when reinforcement for the current behavior is disrupted. In this scenario, the SIB was extinguished, and other appropriate behaviors were likely reinforced. The change in staffing and high demand could disrupt the current reinforcement contingencies, leading to the resurgence of the previously effective SIB, and potentially other behaviors that were also previously reinforced. Choice A is less likely given the 6-month period of absence and the reappearance of *multiple* behaviors, which points more to resurgence than a delayed extinction burst. Choice C is premature; resurgence is a known phenomenon that does not automatically mean the previous interventions were ineffective, but rather that current contingencies need to be re-evaluated. Choice D is an anthropomorphic interpretation and not a behavioral principle."
  },
  {
    id: "t6-B-pool-13",
    domain: "B",
    taskItem: "B.7",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "medium",
    scenario: "A 4-year-old client with ASD in a clinic setting is learning to identify colors. The BCBA uses flashcards with a blue square and reinforces the client for saying ’blue’. After several successful trials, the client can reliably say ’blue’ when shown the blue square flashcard.",
    question: "What is the most appropriate next step for the BCBA to promote stimulus generalization of the ’blue’ response?",
    choices: [
    { letter: "A", text: "Introduce flashcards with different shapes (e.g., blue circle, blue triangle) and different shades of blue, reinforcing the ’blue’ response." },
    { letter: "B", text: "Begin teaching the client to identify other colors, such as red and yellow, using flashcards with a single shape." },
    { letter: "C", text: "Continue to present only the blue square flashcard until the client can identify ’blue’ with 100% accuracy across multiple sessions." },
    { letter: "D", text: "Introduce the blue square flashcard in a different room of the clinic to ensure the client can identify the color in various environments." }
    ],
    correctAnswer: "A",
    rationale: "Stimulus generalization refers to the tendency for the conditioned stimulus to evoke similar responses after the response has been conditioned. To promote generalization of the ’blue’ response, the BCBA should vary non-critical features of the stimulus (shape, shade) while keeping the critical feature (color blue) consistent. This teaches the client that ’blue’ refers to the color itself, regardless of other features. Choice B focuses on discrimination (other colors) rather than generalization of the current skill. Choice C would limit generalization by over-training on a single stimulus. Choice D is an example of setting generalization, which is important, but varying stimulus features is a more direct way to promote stimulus generalization of the *concept* of ’blue’."
  },
  {
    id: "t6-B-pool-14",
    domain: "B",
    taskItem: "B.7",
    phase: "assessment",
    bloomsLevel: "analysis",
    difficulty: "hard",
    scenario: "A 7-year-old client with ASD in a school setting has been taught to respond to the instruction ’sit down’ when delivered by their primary teacher in the classroom. The client reliably sits when the primary teacher says ’sit down’. However, when a substitute teacher or a teaching assistant gives the same instruction, the client does not respond. Furthermore, the client also sits down when the primary teacher says ’stand up’.",
    question: "Which of the following best explains the patterns observed in the client’s responding?",
    choices: [
    { letter: "A", text: "The client is demonstrating poor stimulus generalization to different instructors, and poor stimulus discrimination between ’sit down’ and ’stand up’." },
    { letter: "B", text: "The client is demonstrating strong stimulus generalization to the instruction ’sit down’ across different instructors, but also stimulus overselectivity to the primary teacher." },
    { letter: "C", text: "The client is exhibiting stimulus overselectivity to the primary teacher and also a lack of response generalization for sitting and standing." },
    { letter: "D", text: "The client is demonstrating response generalization between ’sit down’ and ’stand up’, but also a lack of stimulus control by the primary teacher." }
    ],
    correctAnswer: "A",
    rationale: "The client’s failure to respond to the instruction ’sit down’ from other instructors indicates poor stimulus generalization (the instruction itself is a stimulus, and it is not generalizing across different people delivering it). The client sitting down when told ’stand up’ indicates poor stimulus discrimination, as they are not discriminating between the two different verbal instructions. Choice A is incorrect because the client is *not* demonstrating strong stimulus generalization to different instructors. Choice C confuses response generalization with stimulus discrimination and overselectivity. Choice D is incorrect because responding to ’stand up’ by sitting down is not response generalization, and the primary teacher *does* have stimulus control over the ’sit down’ response, just not discriminatory control over other instructions."
  },
  {
    id: "t6-B-pool-15",
    domain: "B",
    taskItem: "B.8",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "medium",
    scenario: "A 3-year-old client with a language delay in a clinic setting is learning to label pictures of animals. The BCBA presents a picture of a cat and prompts the client to say ’cat’, reinforcing correct responses. Initially, the prompt is full vocal, then faded to a partial vocal prompt, and now the client says ’cat’ independently when shown the picture.",
    question: "What is the most appropriate next step for the BCBA to establish stimulus control over the picture of the cat?",
    choices: [
    { letter: "A", text: "Introduce pictures of other animals and reinforce the client for labeling them correctly, while continuing to present only the cat picture." },
    { letter: "B", text: "Begin to present the written word ’cat’ and reinforce the client for saying ’cat’ when it is presented." },
    { letter: "C", text: "Vary the size and color of the cat picture to ensure the client can identify cats in different visual presentations." },
    { letter: "D", text: "Present the picture of the cat alongside pictures of other animals, reinforcing the client only when they correctly label the cat." }
    ],
    correctAnswer: "D",
    rationale: "Establishing stimulus control means that a specific stimulus reliably occasions a specific response. To ensure the picture of the cat, and not some other feature, is controlling the ’cat’ response, the picture of the cat (S-delta) must be presented in the presence of other, incorrect stimuli (S-delta), and only responses to the S-delta (the cat picture) are reinforced. This teaches discrimination. Choice A continues to teach new labels but does not test or strengthen stimulus control over the cat picture itself. Choice C addresses stimulus generalization, not the initial establishment of discrimination for stimulus control. Choice D is teaching a new skill (reading) and does not directly address establishing stimulus control for the picture label."
  },
  {
    id: "t6-B-pool-16",
    domain: "B",
    taskItem: "B.8",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "hard",
    scenario: "A 15-year-old client with intellectual disabilities in a vocational training setting has learned to assemble a specific product when a staff member provides a verbal instruction and a visual model. The BCBA wants the client to independently assemble the product when only the visual model is present, eventually fading the verbal instruction.",
    question: "Which of the following best describes the process the BCBA is attempting to implement?",
    choices: [
    { letter: "A", text: "The BCBA is attempting to establish stimulus generalization by having the client respond to the visual model in different contexts." },
    { letter: "B", text: "The BCBA is attempting to implement response generalization by having the client assemble variations of the product." },
    { letter: "C", text: "The BCBA is attempting to create a conditioned motivating operation for assembling the product." },
    { letter: "D", text: "The BCBA is attempting to transfer stimulus control from the verbal instruction to the visual model." }
    ],
    correctAnswer: "D",
    rationale: "Transfer of stimulus control involves shifting the control of a behavior from one stimulus to another. In this scenario, the verbal instruction currently has control over the assembly behavior, and the BCBA wants to transfer that control to the visual model, eventually fading out the verbal instruction. Choice A (stimulus generalization) would involve the client responding to the visual model in different *settings* or with different *types* of visual models, not simply shifting control from one stimulus to another. Choice C (motivating operation) relates to the value or likelihood of a reinforcer, not the control of a specific stimulus over a behavior. Choice D (response generalization) would involve the client performing variations of the assembly behavior, not changing the stimulus that occasions it."
  },
  {
    id: "t6-B-pool-17",
    domain: "B",
    taskItem: "B.9",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "medium",
    scenario: "A 4-year-old client with ASD in a clinic setting rarely engages in vocal mands for preferred items. The BCBA wants to increase the frequency of vocal mands for toys. The client has several highly preferred toys that they often try to access independently.",
    question: "Which of the following motivating operations should the BCBA utilize to increase the likelihood of vocal mands for toys?",
    choices: [
    { letter: "A", text: "Deprive the client of access to highly preferred toys for a period of time before mand training, making them more valuable." },
    { letter: "B", text: "Implement a satiation procedure where the client has unlimited access to toys before mand training begins, making them less valuable." },
    { letter: "C", text: "Provide free access to all toys throughout the session, allowing the client to choose what they want to play with." },
    { letter: "D", text: "Present toys in a demanding manner, requiring the client to engage in a difficult task before receiving them." }
    ],
    correctAnswer: "A",
    rationale: "To increase the likelihood of a mand (request), the value of the requested item must be high. Depriving the client of access to highly preferred toys (an establishing operation) will increase their effectiveness as reinforcers and increase the momentary probability of behaviors that have historically resulted in access to those toys, such as manding. Choice A (satiation) would be an abolishing operation, decreasing the value of the toys and thus the likelihood of manding. Choice C (free access) also acts as an abolishing operation. Choice D describes a potential aversive condition or a response cost, which is unrelated to establishing the value of the reinforcer for manding."
  },
  {
    id: "t6-B-pool-18",
    domain: "B",
    taskItem: "B.9",
    phase: "assessment",
    bloomsLevel: "analysis",
    difficulty: "hard",
    scenario: "A 16-year-old client with severe intellectual disabilities in a residential setting engages in high rates of hand-flapping, which has been identified as automatically reinforced. The BCBA observes that hand-flapping is less frequent immediately after the client has engaged in 30 minutes of sensory play involving various textures and vibrations. Conversely, hand-flapping is more frequent when the client has been restricted from sensory activities for several hours.",
    question: "Which of the following best describes the motivating operations influencing the client’s hand-flapping behavior?",
    choices: [
    { letter: "A", text: "Restriction from sensory activities functions as an abolishing operation for hand-flapping, while sensory play functions as an establishing operation." },
    { letter: "B", text: "The hand-flapping behavior is under stimulus control of the presence or absence of sensory play, not motivating operations." },
    { letter: "C", text: "Both restriction from sensory activities and sensory play function as conditioned motivating operations for hand-flapping." },
    { letter: "D", text: "Restriction from sensory activities functions as an establishing operation for hand-flapping, while sensory play functions as an abolishing operation." }
    ],
    correctAnswer: "D",
    rationale: "An establishing operation (EO) increases the current effectiveness of a reinforcer and increases the momentary probability of behavior that has been reinforced by that reinforcer. Depriving the client of sensory activities makes the sensory stimulation produced by hand-flapping more reinforcing, thus increasing the behavior. An abolishing operation (AO) decreases the current effectiveness of a reinforcer and decreases the momentary probability of behavior that has been reinforced by that reinforcer. Engaging in sensory play satiates the client on sensory stimulation, making the automatically produced stimulation from hand-flapping less reinforcing, thus decreasing the behavior. Choice A reverses the definitions. Choice C is incorrect because these are unconditioned motivating operations (related to sensory deprivation/satiation). Choice D is incorrect because the *value* of the sensory input from hand-flapping is changing, which is the definition of a motivating operation, not just stimulus control."
  },
  {
    id: "t6-B-pool-19",
    domain: "B",
    taskItem: "B.10",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "medium",
    scenario: "A 6-year-old client with ASD in a school setting is learning to complete independent work tasks. The BCBA implements a reinforcement schedule where the client receives a token after completing exactly 5 math problems. This token can be exchanged for 5 minutes of tablet time. The client consistently works at a high, steady rate with a brief pause after receiving the token.",
    question: "Which of the following best describes the reinforcement schedule being implemented and the observed behavioral pattern?",
    choices: [
    { letter: "A", text: "The schedule is a Variable Ratio (VR), producing a high and steady rate of responding without a post-reinforcement pause." },
    { letter: "B", text: "The schedule is a Fixed Interval (FI), producing a scallop-shaped pattern of responding with a slow rate at the beginning." },
    { letter: "C", text: "The schedule is a Fixed Ratio (FR), producing a high rate of responding with a post-reinforcement pause." },
    { letter: "D", text: "The schedule is a Variable Interval (VI), producing a moderate and steady rate of responding without a post-reinforcement pause." }
    ],
    correctAnswer: "C",
    rationale: "A Fixed Ratio (FR) schedule delivers reinforcement after a fixed number of responses. The scenario describes reinforcement after exactly 5 math problems (FR5). This schedule characteristically produces a high rate of responding, often with a post-reinforcement pause, which perfectly matches the client’s observed behavior. Choice A (VR) produces a high, steady rate *without* a pause. Choice C (FI) produces a scallop pattern. Choice D (VI) produces a moderate, steady rate. Therefore, FR is the correct schedule and its characteristic effect on behavior is observed."
  },
  {
    id: "t6-B-pool-20",
    domain: "B",
    taskItem: "B.10",
    phase: "evaluation",
    bloomsLevel: "hard",
    difficulty: "hard",
    scenario: "A 10-year-old client in a community setting is on a behavior plan to increase participation in household chores. Initially, the client received praise for every completed chore. Now, the BCBA has transitioned to a schedule where praise is delivered after an unpredictable number of chores are completed, averaging around 3 chores. Data shows the client consistently engages in chores at a steady, high rate with very little pausing.",
    question: "What does this pattern most likely indicate about the current reinforcement schedule and its effect on behavior?",
    choices: [
    { letter: "A", text: "The schedule is a Fixed Ratio (FR) and is producing a high rate with post-reinforcement pauses, which is typical for this schedule." },
    { letter: "B", text: "The schedule is a Variable Ratio (VR) and is effectively producing a high, steady rate of responding with little to no post-reinforcement pause." },
    { letter: "C", text: "The schedule is a Fixed Interval (FI) and is producing a scallop pattern, indicating that the client is anticipating the reinforcement." },
    { letter: "D", text: "The schedule is a Variable Interval (VI) and is producing a moderate, steady rate of responding, which is ideal for maintaining behavior." }
    ],
    correctAnswer: "B",
    rationale: "The scenario describes reinforcement delivered after an unpredictable number of responses, averaging around 3 chores, which is the definition of a Variable Ratio (VR) schedule. VR schedules are known for producing high, steady rates of responding with little to no post-reinforcement pauses, making them very effective for maintaining behavior. Choice A (FR) would typically produce pauses. Choice C (FI) would produce a scallop pattern based on time, not number of responses. Choice D (VI) would produce a moderate, steady rate based on time, not number of responses. The observed behavior perfectly matches the characteristics of a VR schedule."
  },
  {
    id: "t6-B-pool-21",
    domain: "B",
    taskItem: "B.11",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "medium",
    scenario: "A 7-year-old client with ASD in a clinic setting frequently refuses to comply with novel or difficult tasks, often engaging in tantrums. The BCBA wants to increase compliance with these low-probability requests.",
    question: "Which intervention strategy, based on behavioral momentum, is most appropriate to increase compliance with low-probability tasks?",
    choices: [
    { letter: "A", text: "Present a series of 3-5 high-probability requests immediately before presenting the low-probability task." },
    { letter: "B", text: "Present the low-probability task immediately after a highly preferred activity to increase the client’s motivation." },
    { letter: "C", text: "Provide a strong verbal warning to the client that non-compliance will result in the loss of preferred items." },
    { letter: "D", text: "Break down the low-probability task into smaller, more manageable steps and reinforce each step until the task is mastered." }
    ],
    correctAnswer: "A",
    rationale: "Behavioral momentum involves presenting a series of high-probability (high-P) requests immediately before a low-probability (low-P) request. The idea is that building momentum with compliance to easy tasks increases the likelihood of compliance with a more difficult task. Choice A is an environmental manipulation but not directly behavioral momentum. Choice C is a punishment procedure. Choice D describes task analysis and shaping, which are effective teaching strategies but do not directly apply the principle of behavioral momentum to increase compliance with an already defined low-P task."
  },
  {
    id: "t6-B-pool-22",
    domain: "B",
    taskItem: "B.11",
    phase: "evaluation",
    bloomsLevel: "analysis",
    difficulty: "hard",
    scenario: "A 12-year-old client with ADHD in a school setting has difficulty transitioning between activities. The BCBA implemented a behavioral momentum strategy, presenting 3 quick, easy instructions (’touch nose’, ’clap hands’, ’sit down’) before giving the instruction to transition. Data shows that compliance with transitions significantly increased when this strategy was used. However, staff sometimes forget to implement the high-P sequence, and on those days, transition compliance remains low.",
    question: "What does this pattern most likely indicate about the effectiveness and implementation of the behavioral momentum strategy?",
    choices: [
    { letter: "A", text: "The behavioral momentum strategy is ineffective because compliance only increases when the high-P sequence is delivered, indicating a lack of generalization." },
    { letter: "B", text: "The strategy is effective, as demonstrated by the increased compliance when implemented, but inconsistent implementation is hindering its full potential." },
    { letter: "C", text: "The client is becoming dependent on the high-P sequence, suggesting that the strategy should be faded out immediately." },
    { letter: "D", text: "The low-P request (transition) is not sufficiently reinforcing, requiring the BCBA to identify stronger reinforcers for compliance." }
    ],
    correctAnswer: "B",
    rationale: "The data clearly indicates that the behavioral momentum strategy *is* effective, as compliance increases when it is implemented. The issue is the inconsistency in its implementation by staff. This highlights the importance of fidelity of implementation for any intervention. Choice A is incorrect because the strategy *is* effective when used. Choice C is premature; the strategy is working, and fading would only be considered once consistent implementation has established a robust effect. Choice D is incorrect because the strategy is designed to increase compliance with low-P requests, and its effectiveness when implemented suggests that the issue is not primarily about the reinforcer for the transition itself, but rather the conditions under which the request is made."
  },
  {
    id: "t6-B-pool-23",
    domain: "B",
    taskItem: "B.12",
    phase: "evaluation",
    bloomsLevel: "analysis",
    difficulty: "medium",
    scenario: "A 5-year-old client with ASD in a clinic setting receives frequent attention for appropriate play with toys. When the client is at home, the parents rarely provide attention for appropriate play due to being busy. The BCBA observes that the client’s appropriate play is high at the clinic but very low at home, despite the toys being similar.",
    question: "Which of the following best explains the observed difference in the client’s appropriate play across settings?",
    choices: [
    { letter: "A", text: "The client is demonstrating stimulus generalization of appropriate play from the clinic to the home environment." },
    { letter: "B", text: "The client’s play behavior is under strong stimulus control of the clinic environment, and not generalizing to the home." },
    { letter: "C", text: "The client is experiencing an extinction burst at home due to the lack of reinforcement for appropriate play." },
    { letter: "D", text: "The client is exhibiting behavioral contrast, where a change in reinforcement in one setting affects behavior in another setting." }
    ],
    correctAnswer: "D",
    rationale: "Behavioral contrast occurs when a change in the schedule of reinforcement in one setting leads to an opposite change in the rate of behavior in another setting that has not been changed. In this scenario, the high rate of reinforcement for appropriate play in the clinic (a richer schedule) leads to a suppressed rate of appropriate play at home (a leaner schedule or extinction), even though the contingencies for appropriate play at home have not necessarily changed directly. Choice A is incorrect because the behavior is *not* generalizing to the home. Choice C is incorrect because an extinction burst would involve a temporary *increase* in the behavior, not a low rate. Choice D is plausible in that stimulus control is at play, but behavioral contrast specifically describes the inverse relationship in rates across settings due to changes in reinforcement schedules."
  },
  {
    id: "t6-B-pool-24",
    domain: "B",
    taskItem: "B.12",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "hard",
    scenario: "A 10-year-old client with ASD in a residential setting engages in mild self-stimulatory behavior (SIB) by hand-flapping, which is automatically reinforced. The BCBA successfully implemented a DRO procedure in the morning program, significantly reducing SIB during that time by providing reinforcement for the absence of hand-flapping. However, staff in the afternoon program report an increase in hand-flapping, even though no changes were made to their existing plan.",
    question: "What is the most appropriate next step for the BCBA to manage the observed increase in hand-flapping during the afternoon program?",
    choices: [
    { letter: "A", text: "Discontinue the morning DRO procedure, as it appears to be causing an undesirable side effect in the afternoon program." },
    { letter: "B", text: "Implement a mild positive punishment procedure in the afternoon program to suppress the increased hand-flapping behavior." },
    { letter: "C", text: "Conduct a new functional behavior assessment for the afternoon program, as the function of hand-flapping may have changed." },
    { letter: "D", text: "Implement the same DRO procedure for hand-flapping during the afternoon program to address the increase in that setting." }
    ],
    correctAnswer: "D",
    rationale: "The scenario describes behavioral contrast: the decrease in hand-flapping in the morning (due to DRO) is accompanied by an increase in hand-flapping in the afternoon (where no change was made). The most appropriate next step is to extend the effective intervention (DRO) to the setting where the behavior has increased. This directly addresses the contrast effect by applying the same, effective contingency across all relevant settings. Choice A would reverse the progress made in the morning. Choice C is not the immediate best step; while a new FBA might be warranted if B is ineffective, the observed pattern is a classic behavioral contrast effect, suggesting the existing function is likely unchanged. Choice D is a more restrictive intervention and should not be the first step when a less restrictive, effective intervention is already known."
  },
  {
    id: "t6-B-pool-25",
    domain: "B",
    taskItem: "B.1",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "medium",
    scenario: "A 7-year-old with selective mutism in a clinic setting consistently becomes visibly anxious, evidenced by fidgeting and shallow breathing, whenever a new therapist enters the room. This reaction occurs even before the therapist speaks or attempts to interact, suggesting a learned association with novel adults.",
    question: "Which of the following best describes the novel therapist in this scenario, considering the client’s observed anxiety?",
    choices: [
    { letter: "A", text: "The novel therapist functions as a conditioned stimulus (CS) because their presence has been paired with previous negative interactions, leading to a learned anxiety response." },
    { letter: "B", text: "The novel therapist serves as an unconditioned stimulus (US) because their presence naturally elicits an anxiety response without prior learning." },
    { letter: "C", text: "The novel therapist acts as an unconditioned response (UR) because the client’s anxiety is an automatic, involuntary reaction to their appearance." },
    { letter: "D", text: "The novel therapist is a conditioned response (CR) because the anxiety is a reflex that has been acquired through repeated exposure to new people." }
    ],
    correctAnswer: "A",
    rationale: "In respondent conditioning, a conditioned stimulus (CS) is a previously neutral stimulus that, after becoming associated with an unconditioned stimulus (US), eventually comes to trigger a conditioned response (CR). In this scenario, the novel therapist (CS) has likely been paired with prior negative or anxiety-inducing experiences (US), leading to the client’s learned anxiety response (CR). Option A is incorrect because an unconditioned stimulus naturally elicits a response without prior learning, which is not the case here; the anxiety is learned. Option C and D are incorrect because the therapist is a stimulus, not a response."
  },
  {
    id: "t6-B-pool-26",
    domain: "B",
    taskItem: "B.1",
    phase: "assessment",
    bloomsLevel: "application",
    difficulty: "medium",
    scenario: "A 5-year-old client with autism in a school setting exhibits a strong startle reflex, characterized by jumping and crying, whenever a loud fire alarm sounds. This reaction is observed consistently and immediately upon the alarm’s activation.",
    question: "What component of respondent conditioning does the client’s jumping and crying reaction represent in response to the fire alarm?",
    choices: [
    { letter: "A", text: "The jumping and crying is a conditioned stimulus (CS) because it is a learned reaction that occurs in anticipation of a loud noise." },
    { letter: "B", text: "The jumping and crying is an unconditioned response (UR) because it is a natural, unlearned reflex to an inherently startling stimulus." },
    { letter: "C", text: "The jumping and crying is an unconditioned stimulus (US) because it is the environmental event that directly causes the client’s distress." },
    { letter: "D", text: "The jumping and crying is a conditioned response (CR) because it has been previously paired with other aversive stimuli in the school environment." }
    ],
    correctAnswer: "B",
    rationale: "An unconditioned response (UR) is a natural, unlearned reaction to an unconditioned stimulus (US). In this scenario, the loud fire alarm is an unconditioned stimulus (US) that naturally elicits a startle reflex (jumping and crying), which is the unconditioned response (UR). This reaction does not require prior learning. Option A and D are incorrect because the reaction is not learned. Option C is incorrect because the jumping and crying is a response, not a stimulus."
  },
  {
    id: "t6-B-pool-27",
    domain: "B",
    taskItem: "B.2",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "hard",
    scenario: "A 10-year-old client with anxiety in a clinic setting initially developed a fear of needles after a painful injection (US -> UR). Later, the sight of a nurse in scrubs (CS1) began to elicit anxiety (CR1). Now, even the smell of antiseptic wipes in the clinic, which has never been directly paired with an injection but is always present when the nurse is, causes the client to become visibly anxious.",
    question: "Which phenomenon best explains the client’s anxiety response to the smell of antiseptic wipes?",
    choices: [
    { letter: "A", text: "Higher-order conditioning, where the antiseptic smell has become a conditioned stimulus through its association with the nurse in scrubs." },
    { letter: "B", text: "Stimulus generalization, where the client’s fear has spread to all stimuli that are similar to the needle itself." },
    { letter: "C", text: "Operant conditioning, where the client’s anxiety is maintained by avoiding the smell of antiseptic wipes." },
    { letter: "D", text: "Backward conditioning, where the unconditioned stimulus (injection) occurs after the neutral stimulus (antiseptic wipes)." }
    ],
    correctAnswer: "A",
    rationale: "Higher-order conditioning occurs when a previously established conditioned stimulus (CS1), in this case, the nurse in scrubs, is paired with a new neutral stimulus (NS), the smell of antiseptic wipes. The NS then becomes a second-order conditioned stimulus (CS2) that elicits the conditioned response (CR) without ever being directly paired with the original unconditioned stimulus (injection). Option A is incorrect because stimulus generalization would involve the client reacting to different types of needles or medical equipment, not an unrelated smell. Option C describes operant behavior, not respondent conditioning. Option D is incorrect because backward conditioning is when the US occurs before the NS, which is generally less effective in establishing conditioning."
  },
  {
    id: "t6-B-pool-28",
    domain: "B",
    taskItem: "B.2",
    phase: "assessment",
    bloomsLevel: "analysis",
    difficulty: "medium",
    scenario: "A 4-year-old child with a developmental delay in a home setting initially became fearful of barking dogs after being startled by a large, aggressive dog. Now, the child exhibits fear not only towards barking dogs but also towards the sound of a doorbell, which is always followed by a dog barking at a neighbor’s house, even though the doorbell itself has never been directly associated with the aggressive dog.",
    question: "What conditioning principle most accurately describes the child’s fear response to the doorbell sound?",
    choices: [
    { letter: "A", text: "Stimulus discrimination is occurring because the child has learned to respond differently to distinct stimuli in the environment." },
    { letter: "B", text: "Higher-order conditioning, where the doorbell has become a conditioned stimulus by being paired with the sound of a barking dog." },
    { letter: "C", text: "Extinction, because the child’s fear of the doorbell will eventually diminish without reinforcement." },
    { letter: "D", text: "Spontaneous recovery, as the fear response to the doorbell is temporarily reappearing after a period of absence." }
    ],
    correctAnswer: "B",
    rationale: "Higher-order conditioning explains how a neutral stimulus (the doorbell) can become a conditioned stimulus (CS2) by being paired with an already established conditioned stimulus (CS1 - the barking dog sound), which itself was previously paired with an unconditioned stimulus (the aggressive dog). The doorbell has never been directly paired with the aggressive dog, but only with the barking sound. Option A is incorrect because stimulus discrimination would imply the child distinguishes between the doorbell and the barking, not that the doorbell elicits fear. Option C and D describe processes related to the reduction or return of a conditioned response, not its initial acquisition via indirect pairing."
  },
  {
    id: "t6-B-pool-29",
    domain: "B",
    taskItem: "B.14",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "medium",
    scenario: "A 6-year-old client with autism in a clinic setting is learning to request desired items. The BCBA holds up a preferred toy car and the client says, ’Car, please!’ The BCBA immediately provides the toy car to the client.",
    question: "What type of verbal operant is the client demonstrating when they say ’Car, please!’ in this specific context?",
    choices: [
    { letter: "A", text: "A mand, because the client’s verbal behavior is under the control of a motivating operation and specifies its own reinforcer." },
    { letter: "B", text: "A tact, because the client is labeling the object in the environment that is present." },
    { letter: "C", text: "An echoic, because the client is repeating what the BCBA said in response to a verbal prompt." },
    { letter: "D", text: "An intraverbal, because the client is responding to a verbal stimulus without point-to-point correspondence." }
    ],
    correctAnswer: "A",
    rationale: "A mand is a verbal operant that is under the control of a motivating operation (MO) and is reinforced by the specific item or action requested. In this scenario, the client is motivated to obtain the toy car, says ’Car, please!’, and receives the car, making it a mand. Option A is incorrect because while the client labels the object, the controlling variable is the MO (desire for the car) and the reinforcement is the car itself, not generalized conditioned reinforcement for labeling. Option C is incorrect because there is no indication the BCBA prompted the client with ’Car, please!’. Option D is incorrect because intraverbals are responses to verbal stimuli where there is no point-to-point correspondence, which is not the primary controlling variable here."
  },
  {
    id: "t6-B-pool-30",
    domain: "B",
    taskItem: "B.14",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "easy",
    scenario: "A 3-year-old client with a communication delay in a home setting points to a cup of juice on the table and makes a ’mmmm’ sound. The parent immediately gives the client the cup of juice.",
    question: "Which of the following best describes the verbal operant demonstrated by the client’s ’mmmm’ sound in this situation?",
    choices: [
    { letter: "A", text: "An echoic, as the client is imitating a sound previously made by the parent." },
    { letter: "B", text: "An intraverbal, as the client is responding to a non-verbal cue from the parent." },
    { letter: "C", text: "A tact, as the client is labeling the presence of the juice with a sound." },
    { letter: "D", text: "A mand, as the client’s vocalization is controlled by a motivating operation for juice and is reinforced by receiving the juice." }
    ],
    correctAnswer: "D",
    rationale: "A mand is a verbal operant under the control of a motivating operation (MO) and is reinforced by the specific item or action requested. The client’s ’mmmm’ sound is a request for juice, driven by a desire for it, and the reinforcement is receiving the juice. Option A is incorrect as there is no indication of imitation. Option C is incorrect because while the juice is present, the primary controlling variable is the desire for the juice, not simply labeling it. Option D is incorrect because intraverbals are responses to verbal stimuli without point-to-point correspondence."
  },
  {
    id: "t6-B-pool-31",
    domain: "B",
    taskItem: "B.15",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "medium",
    scenario: "A BCBA is working with a 7-year-old client with ASD in a school setting. The BCBA holds up a picture of a cat and asks, ’What is this?’ The client immediately responds, ’Cat.’ The BCBA then says, ’Tell me something that has fur,’ and the client says, ’Cat.’",
    question: "What two verbal operants are demonstrated by the client’s responses ’Cat’ in these two different situations?",
    choices: [
    { letter: "A", text: "The first ’Cat’ is a tact, and the second ’Cat’ is an intraverbal." },
    { letter: "B", text: "The first ’Cat’ is an echoic, and the second ’Cat’ is a tact." },
    { letter: "C", text: "The first ’Cat’ is an intraverbal, and the second ’Cat’ is a mand." },
    { letter: "D", text: "Both instances of ’Cat’ are mands, as the client is requesting attention from the BCBA." }
    ],
    correctAnswer: "A",
    rationale: "A tact is a verbal operant under the control of a non-verbal stimulus and is reinforced by generalized conditioned reinforcement (e.g., praise). When the BCBA holds up a picture of a cat and asks ’What is this?’, the client’s response ’Cat’ is a tact because it is controlled by the visual stimulus of the cat picture. An intraverbal is a verbal operant under the control of a verbal stimulus and does not have point-to-point correspondence with the stimulus. When the BCBA says ’Tell me something that has fur,’ and the client responds ’Cat,’ this is an intraverbal because the response is controlled by the verbal stimulus and there is no direct correspondence between the words. Option A is incorrect because an echoic would involve repeating the exact word. Option C and D are incorrect because mands are requests for specific items or actions, and neither response fits that definition."
  },
  {
    id: "t6-B-pool-32",
    domain: "B",
    taskItem: "B.15",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "medium",
    scenario: "A 9-year-old client with developmental delays in a resource room setting is working on language skills. The teacher presents a flashcard with the word ’APPLE’ written on it and asks, ’What is this word?’ The client says, ’Apple.’ Later, the teacher asks, ’What fruit is red and crunchy?’ and the client responds, ’Apple.’",
    question: "Which two verbal operants are demonstrated by the client’s responses of ’Apple’ in these distinct situations?",
    choices: [
    { letter: "A", text: "The first ’Apple’ is an echoic, and the second ’Apple’ is a mand." },
    { letter: "B", text: "The first ’Apple’ is a tact, and the second ’Apple’ is a textual." },
    { letter: "C", text: "The first ’Apple’ is a textual, and the second ’Apple’ is an intraverbal." },
    { letter: "D", text: "Both instances of ’Apple’ are intraverbals, as they are both responses to verbal stimuli." }
    ],
    correctAnswer: "C",
    rationale: "A textual operant is a verbal response under the control of a non-auditory verbal stimulus (e.g., written text) where there is point-to-point correspondence but no formal similarity. When the client reads the word ’APPLE’ and says ’Apple,’ this is a textual. An intraverbal is a verbal response under the control of a verbal stimulus, without point-to-point correspondence. When the teacher asks ’What fruit is red and crunchy?’ and the client says ’Apple,’ this is an intraverbal as it is a response to a verbal question without direct repetition. Option A is incorrect because an echoic would involve vocal imitation of an auditory stimulus. Option B is incorrect because a tact is controlled by a non-verbal stimulus (e.g., seeing an actual apple). Option D is incorrect because the first response is reading, not an intraverbal."
  },
  {
    id: "t6-B-pool-33",
    domain: "B",
    taskItem: "B.16",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "medium",
    scenario: "A 4-year-old client with a language delay in a clinic setting is learning to say new words. The BCBA says ’ball,’ and the client immediately attempts to say ’b-a-ll.’ The BCBA provides praise and a small edible. Later, the BCBA holds up a book and says nothing, and the client says ’book’ after seeing it.",
    question: "What two distinct verbal operants are demonstrated by the client’s responses in this scenario?",
    choices: [
    { letter: "A", text: "The first response is a mand, and the second response is an echoic." },
    { letter: "B", text: "Both responses are intraverbals, as they are both controlled by verbal stimuli." },
    { letter: "C", text: "The first response is a tact, and the second response is a textual." },
    { letter: "D", text: "The first response is an echoic, and the second response is a tact." }
    ],
    correctAnswer: "D",
    rationale: "An echoic is a verbal operant under the control of a verbal stimulus that has point-to-point correspondence and formal similarity. When the BCBA says ’ball’ and the client attempts to say ’b-a-ll,’ this is an echoic. A tact is a verbal operant under the control of a non-verbal stimulus and is reinforced by generalized conditioned reinforcement. When the BCBA holds up a book and the client says ’book’ without a verbal prompt, this is a tact as it is controlled by the visual stimulus of the book. Option A is incorrect because a mand is a request, not an imitation or label. Option C is incorrect because a textual involves reading written text. Option D is incorrect because intraverbals do not have point-to-point correspondence with the verbal stimulus, and the second response is to a non-verbal stimulus."
  },
  {
    id: "t6-B-pool-34",
    domain: "B",
    taskItem: "B.16",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "hard",
    scenario: "A 12-year-old client with dyslexia in a school setting is working on reading comprehension. The BCBA presents a written sentence, ’The dog barks,’ and the client reads it aloud, ’The dog barks.’ Immediately after, the BCBA asks, ’What does the dog do?’ and the client responds, ’Barks.’",
    question: "What two verbal operants are sequentially demonstrated by the client’s responses in this scenario?",
    choices: [
    { letter: "A", text: "The first response is an echoic, and the second response is a tact." },
    { letter: "B", text: "The first response is a textual, and the second response is an intraverbal." },
    { letter: "C", text: "The first response is a tact, and the second response is a mand." },
    { letter: "D", text: "Both responses are mands, as the client is complying with the BCBA’s instructions." }
    ],
    correctAnswer: "B",
    rationale: "A textual operant is a verbal response under the control of a non-auditory verbal stimulus (written text) with point-to-point correspondence but no formal similarity. When the client reads the written sentence ’The dog barks’ aloud, this is a textual. An intraverbal is a verbal response under the control of a verbal stimulus without point-to-point correspondence. When the BCBA asks ’What does the dog do?’ and the client responds ’Barks,’ this is an intraverbal because the response is controlled by the verbal question and does not have point-to-point correspondence with the question itself. Option A is incorrect because an echoic involves vocal imitation of an auditory stimulus. Option C is incorrect because a tact is controlled by a non-verbal stimulus, and a mand is a request. Option D is incorrect because mands are requests, not responses to questions or reading."
  },
  {
    id: "t6-B-pool-35",
    domain: "B",
    taskItem: "B.17",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "medium",
    scenario: "A BCBA is teaching a 5-year-old child with a developmental delay in a clinic setting to independently wash their hands. The child currently requires full physical prompts to complete all steps. The BCBA begins to reinforce successive approximations by providing praise and a sticker when the child independently turns on the water, then when they independently get soap, then when they rub their hands together, and so on.",
    question: "What behavioral procedure is the BCBA primarily employing to teach handwashing in this scenario?",
    choices: [
    { letter: "A", text: "Shaping, because the BCBA is differentially reinforcing successive approximations of the desired handwashing behavior." },
    { letter: "B", text: "Forward chaining, because the BCBA is teaching the steps in their natural order from beginning to end." },
    { letter: "C", text: "Backward chaining, because the BCBA is teaching the last step of the handwashing sequence first." },
    { letter: "D", text: "Total task chaining, because the BCBA is prompting and reinforcing every step of the handwashing sequence." }
    ],
    correctAnswer: "A",
    rationale: "Shaping involves differentially reinforcing successive approximations to a target behavior. In this scenario, the BCBA is reinforcing closer and closer approximations of independent handwashing (turning on water, getting soap, rubbing hands), which aligns with the definition of shaping. Option A, C, and D describe chaining procedures, which involve teaching a sequence of behaviors, typically by breaking them down into discrete steps. While handwashing is a chain, the description focuses on reinforcing progressively more independent steps, which is shaping within the context of teaching a chain. The critical element here is the reinforcement of ’successive approximations’ of independence, not the linking of steps in a chain."
  },
  {
    id: "t6-B-pool-36",
    domain: "B",
    taskItem: "B.17",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "hard",
    scenario: "A 3-year-old client with limited vocalizations in a home setting is learning to say ’ball.’ Initially, the BCBA reinforces any vocalization the client makes while looking at a ball. Then, the BCBA only reinforces sounds like ’ba.’ Next, the BCBA reinforces ’bal,’ and finally, only ’ball.’",
    question: "What behavioral principle is the BCBA utilizing to increase the client’s vocalizations and shape the word ’ball’?",
    choices: [
    { letter: "A", text: "Stimulus fading, because the BCBA is gradually reducing the prominence of the ball as a prompt." },
    { letter: "B", text: "Generalization, because the client is learning to say ’ball’ in different contexts." },
    { letter: "C", text: "Prompt fading, as the BCBA is slowly removing verbal prompts for vocalizations." },
    { letter: "D", text: "Differential reinforcement of successive approximations, which is the core mechanism of shaping." }
    ],
    correctAnswer: "D",
    rationale: "The BCBA is employing differential reinforcement of successive approximations, which is the definition of shaping. They are reinforcing behaviors that are progressively closer to the target word ’ball’ while extinguishing previous, less accurate approximations. Option A is incorrect because stimulus fading involves gradually changing a stimulus dimension, not the response itself. Option C is incorrect because prompt fading involves reducing prompts that evoke the behavior, whereas here the focus is on reinforcing closer forms of the behavior. Option D is incorrect because generalization refers to the occurrence of the behavior in untrained settings or with untrained stimuli, which is not the primary process described here."
  },
  {
    id: "t6-B-pool-37",
    domain: "B",
    taskItem: "B.18",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "medium",
    scenario: "A BCBA is teaching an 8-year-old client with intellectual disabilities in a vocational training center to operate a coffee machine. The client has difficulty initiating tasks but performs well once started. The BCBA decides to teach the last step first, fully prompting all preceding steps, and then gradually fades prompts for the second-to-last step, and so on.",
    question: "Which chaining procedure is the BCBA implementing, and why is it most appropriate for this client’s profile?",
    choices: [
    { letter: "A", text: "Backward chaining, because it allows the client to experience the natural reinforcer immediately upon completing the final step, which is motivating." },
    { letter: "B", text: "Forward chaining, because it teaches the steps in their natural order, building momentum from the beginning." },
    { letter: "C", text: "Total task chaining, because it teaches all steps simultaneously, which is efficient for complex tasks." },
    { letter: "D", text: "Behavioral momentum is the most appropriate strategy because it builds a history of compliance before presenting the target request." }
    ],
    correctAnswer: "A",
    rationale: "Backward chaining involves teaching the last step of a behavioral chain first, while the therapist prompts all preceding steps. Once the client masters the last step, the therapist teaches the second-to-last step, and so on. This method is often beneficial for clients who are easily discouraged or who benefit from immediate access to the natural reinforcer at the end of the chain. Given the client’s difficulty initiating tasks but good performance once started, experiencing the successful completion and associated reinforcement immediately can be highly motivating. Option A is incorrect because forward chaining teaches from the first step. Option C is incorrect because total task chaining teaches all steps at once. Option D is a different behavioral intervention strategy."
  },
  {
    id: "t6-B-pool-38",
    domain: "B",
    taskItem: "B.18",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "hard",
    scenario: "A BCBA is teaching a 4-year-old client with developmental delays in a clinic setting to put on their shoes. The client struggles with fine motor skills required for tying laces but can perform the initial steps of sliding their foot in. The BCBA decides to teach the steps in their natural order, reinforcing the completion of each step as it is mastered, while prompting subsequent steps.",
    question: "Which chaining procedure is the BCBA most likely using, and what is a primary advantage in this context?",
    choices: [
    { letter: "A", text: "Backward chaining, because it ensures the client experiences the natural reinforcer of having shoes on immediately upon completing the final step." },
    { letter: "B", text: "Total task chaining, because it allows for rapid acquisition of all steps by providing prompts for every step simultaneously." },
    { letter: "C", text: "Forward chaining, because it maintains the chronological order of the task and allows the client to build momentum by mastering initial steps first." },
    { letter: "D", text: "Behavioral shaping is occurring because the BCBA is reinforcing successive approximations toward the terminal behavior." }
    ],
    correctAnswer: "C",
    rationale: "Forward chaining involves teaching the first step of a behavioral chain, then the second, and so on, in the natural order of the task. As each step is mastered, it becomes a discriminative stimulus for the next step, and reinforcement is provided upon completion of the mastered step. This approach allows the client to build momentum by successfully completing initial steps, which can be beneficial for clients who can initiate tasks or who need to learn the sequence from the beginning. Option A is incorrect because backward chaining teaches the last step first. Option B is incorrect because total task chaining involves prompting and reinforcing all steps simultaneously. Option D is incorrect because shaping focuses on gradually modifying a single behavior, not linking a sequence of behaviors."
  },
  {
    id: "t6-B-pool-39",
    domain: "B",
    taskItem: "B.18",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "medium",
    scenario: "A BCBA is teaching an 11-year-old client with Down Syndrome in a residential setting to make their bed. The client can perform most steps with minimal prompting but occasionally misses a step or performs it out of sequence. The BCBA decides to prompt the client through all steps of making the bed, providing reinforcement upon the completion of the entire task.",
    question: "Which chaining procedure is the BCBA employing in this situation, and why might it be suitable for this client?",
    choices: [
    { letter: "A", text: "Forward chaining, because it focuses on mastering each step sequentially from the beginning." },
    { letter: "B", text: "Backward chaining, because it ensures immediate access to the natural reinforcer at the end of the task." },
    { letter: "C", text: "Total task chaining, because the client can already perform many steps and benefits from practicing the entire sequence with support." },
    { letter: "D", text: "Shaping is the most appropriate procedure because the BCBA is reinforcing gradual improvements toward the target behavior." }
    ],
    correctAnswer: "C",
    rationale: "Total task chaining involves teaching all steps of a behavioral chain simultaneously, with prompts provided for any steps the learner cannot perform independently. Reinforcement is typically delivered after the completion of the entire chain. This method is often suitable for learners who can perform some or most of the steps in a chain, or for shorter chains, as it allows them to practice the entire sequence and experience the natural reinforcement of completing the task. Given the client can perform most steps but needs support with the sequence, total task chaining is appropriate. Option A and B describe different chaining methods. Option D is incorrect because shaping focuses on gradual changes to a single behavior, not a sequence of behaviors."
  },
  {
    id: "t6-B-pool-40",
    domain: "B",
    taskItem: "B.18",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "hard",
    scenario: "A 16-year-old client with moderate intellectual disability in a community vocational program is learning to use public transportation. The task involves multiple steps like checking the schedule, walking to the bus stop, identifying the correct bus, paying the fare, and exiting at the right stop. The client can perform several steps independently but needs help with others. The BCBA decides to prompt the client through every step, allowing them to practice the entire routine on each trial, with reinforcement provided at the final destination.",
    question: "What chaining procedure is the BCBA implementing, and what is its primary advantage for teaching this complex skill?",
    choices: [
    { letter: "A", text: "Forward chaining, as it allows the client to master the initial steps and build confidence before moving to more difficult ones." },
    { letter: "B", text: "Backward chaining, as it provides immediate reinforcement upon completing the final step, which is highly motivating." },
    { letter: "C", text: "Total task chaining, as it enables the client to practice the entire, interconnected sequence of skills and experience the natural consequence of completing the task." },
    { letter: "D", text: "Graduated guidance, because the BCBA is gradually reducing the level of physical support provided for each step." }
    ],
    correctAnswer: "C",
    rationale: "Total task chaining involves teaching all steps of a behavioral chain simultaneously, with prompts provided for any steps the learner cannot perform independently. Reinforcement is typically delivered after the completion of the entire chain. For complex, interdependent tasks like using public transportation where the client can perform some steps, this method allows for continuous practice of the whole sequence, maintaining the natural flow of the task, and experiencing the natural reinforcer of reaching the destination. Option A and B describe different chaining methods that might be less efficient if the client already has some skills across the chain. Option D is a prompt fading strategy, not a chaining procedure itself, although it might be used within a chaining procedure."
  },
  {
    id: "t6-B-pool-41",
    domain: "B",
    taskItem: "B.19",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "easy",
    scenario: "A BCBA is teaching a 4-year-old client with ASD in a clinic setting to point to a red ball when asked, ’Point to red.’ When the client hesitates, the BCBA points directly to the red ball, and the client then points to it.",
    question: "What type of prompt did the BCBA use to help the client identify the red ball?",
    choices: [
    { letter: "A", text: "A verbal prompt, because the BCBA used spoken language to guide the client’s response." },
    { letter: "B", text: "A gestural prompt, because the BCBA used a physical movement to indicate the correct response." },
    { letter: "C", text: "A model prompt, because the BCBA demonstrated the exact action the client was expected to perform." },
    { letter: "D", text: "A physical prompt, because the BCBA directly manipulated the client’s hand to point to the ball." }
    ],
    correctAnswer: "B",
    rationale: "A gestural prompt involves using a movement or gesture to indicate the correct response. In this case, the BCBA pointing to the red ball is a gestural prompt. Option A is incorrect because a verbal prompt involves spoken words. Option C is incorrect because a model prompt would involve the BCBA pointing to the ball themselves and expecting the client to imitate that action. Option D is incorrect because a physical prompt involves direct physical contact to guide the movement."
  },
  {
    id: "t6-B-pool-42",
    domain: "B",
    taskItem: "B.19",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "medium",
    scenario: "A 6-year-old client with a language delay in a home setting is learning to imitate actions. When the BCBA says, ’Do this!’ and claps their hands, the client looks blankly. The BCBA then takes the client’s hands and gently guides them to clap. The client then claps independently on the next trial.",
    question: "What type of prompt was initially used by the BCBA to elicit the clapping behavior?",
    choices: [
    { letter: "A", text: "A verbal prompt, as the BCBA used the phrase ’Do this!’ to initiate the action." },
    { letter: "B", text: "A model prompt, as the BCBA demonstrated the clapping motion for the client to imitate." },
    { letter: "C", text: "A physical prompt, as the BCBA used direct physical contact to guide the client’s hands to clap." },
    { letter: "D", text: "A gestural prompt, as the BCBA used a movement to indicate the desired response without direct contact." }
    ],
    correctAnswer: "C",
    rationale: "A physical prompt involves direct physical contact to guide the learner’s movement or response. When the BCBA takes the client’s hands and gently guides them to clap, this is a physical prompt. The ’Do this!’ and clapping by the BCBA are a verbal prompt and a model prompt respectively, but the question asks about the prompt that actually elicited the behavior after the client looked blankly, which was the physical prompt. Option A is incorrect because the verbal prompt alone was not sufficient. Option B is incorrect because the model prompt was also insufficient on its own. Option D is incorrect because a gestural prompt does not involve direct physical contact."
  },
  {
    id: "t6-B-pool-43",
    domain: "B",
    taskItem: "B.20",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "medium",
    scenario: "A 5-year-old client with ASD in a clinic setting is learning to identify pictures of animals. Initially, the BCBA points to the correct picture (gestural prompt) when asking, ’Point to the dog.’ Over several trials, the BCBA gradually reduces the intensity of the pointing prompt, moving from a full point to a subtle nod, until the client points independently.",
    question: "What specific technique is the BCBA using to reduce the client’s reliance on the prompt?",
    choices: [
    { letter: "A", text: "Stimulus fading is occurring because the prompt itself is being systematically reduced in intensity to transfer stimulus control." },
    { letter: "B", text: "Prompt fading, specifically within-stimulus prompt fading, to transfer stimulus control to the natural discriminative stimulus." },
    { letter: "C", text: "Prompt fading, specifically within-prompt fading, to transfer stimulus control to the natural discriminative stimulus." },
    { letter: "D", text: "Shaping is occurring because the BCBA is reinforcing successive approximations toward the final target behavior." }
    ],
    correctAnswer: "C",
    rationale: "Prompt fading involves gradually reducing the intensity or intrusiveness of a prompt to transfer stimulus control from the prompt to the natural discriminative stimulus. Within-prompt fading refers to gradually changing the form of the prompt itself, such as reducing the size or intensity of a gestural prompt. In this scenario, the BCBA is gradually reducing the intensity of the pointing gesture, which is a form of within-prompt fading. Option A is incorrect because stimulus fading involves gradually changing a feature of the discriminative stimulus itself, not the prompt. Option B is incorrect because within-stimulus prompt fading involves changing a dimension of the SD to make it more salient. Option D is incorrect because shaping involves reinforcing successive approximations of the target behavior, not systematically reducing prompts."
  },
  {
    id: "t6-B-pool-44",
    domain: "B",
    taskItem: "B.20",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "hard",
    scenario: "A 9-year-old client with a learning disability in a school setting is learning to answer math problems. The BCBA initially provides a full vocal response (e.g., ’The answer is 5’) when presenting the problem, ’2 + 3 = ?’ Over several sessions, the BCBA systematically reduces the vocal prompt by saying ’The answer is…’ then just ’5,’ then a soft ’5,’ until the client answers independently.",
    question: "What prompt fading strategy is the BCBA employing to ensure the client answers the math problem independently?",
    choices: [
    { letter: "A", text: "Graduated guidance, because the BCBA is reducing physical assistance to the client." },
    { letter: "B", text: "Least-to-most prompting, because the BCBA is starting with the least intrusive prompt." },
    { letter: "C", text: "Most-to-least prompting, as the BCBA is systematically decreasing the intrusiveness of the verbal prompt." },
    { letter: "D", text: "Stimulus fading, because the BCBA is altering a feature of the math problem itself." }
    ],
    correctAnswer: "C",
    rationale: "Most-to-least prompting (also known as decreasing assistance) is a prompt fading strategy where the most intrusive prompt is initially provided, and then its intensity or intrusiveness is systematically reduced across trials until the client responds independently. In this scenario, the BCBA starts with a full vocal prompt and gradually fades it to a partial prompt, then a whisper, demonstrating a most-to-least approach. Option A is incorrect because graduated guidance involves physical prompts. Option B is incorrect because least-to-most prompting starts with the least intrusive prompt and only increases if necessary. Option D is incorrect because stimulus fading involves altering the discriminative stimulus, not the prompt itself."
  },
  {
    id: "t6-B-pool-45",
    domain: "B",
    taskItem: "B.21",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "medium",
    scenario: "A 7-year-old client with ASD in a clinic setting is learning to discriminate between pictures of a ’car’ and a ’truck.’ Initially, the BCBA presents a picture of a car that is significantly larger and brighter than the picture of the truck. Over several trials, the size and brightness of the car picture are gradually reduced until it is identical to the truck picture, and the client can still accurately identify the car.",
    question: "What stimulus control procedure is the BCBA utilizing to teach the client to identify the ’car’ picture?",
    choices: [
    { letter: "A", text: "Prompt fading, because the BCBA is reducing the level of assistance provided." },
    { letter: "B", text: "Differential reinforcement, because the BCBA is reinforcing responses to the car and not the truck." },
    { letter: "C", text: "Shaping is the most appropriate procedure because the BCBA is reinforcing successive approximations toward the target behavior." },
    { letter: "D", text: "Stimulus fading, because the BCBA is gradually altering a physical dimension of the target stimulus." }
    ],
    correctAnswer: "D",
    rationale: "Stimulus fading involves gradually changing a physical dimension of the stimulus to transfer stimulus control from an intrusive prompt to the natural discriminative stimulus. In this case, the BCBA is gradually reducing the size and brightness of the car picture, which are physical dimensions of the stimulus, until the client responds to the natural form of the picture. Option A is incorrect because prompt fading involves reducing a prompt that is separate from the discriminative stimulus. Option C is incorrect because shaping involves reinforcing successive approximations of a response, not gradually changing a stimulus. Option D is a component of stimulus control but does not describe the specific procedure of gradually altering the stimulus itself."
  },
  {
    id: "t6-B-pool-46",
    domain: "B",
    taskItem: "B.21",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "hard",
    scenario: "A 10-year-old client with a cognitive impairment in a school setting is learning to identify the written word ’STOP’ from a field of similar-looking words like ’SPOT’ and ’TOPS.’ Initially, the word ’STOP’ is presented in bold, red, flashing letters, while the distractors are in plain black font. Over successive trials, the bold, red, and flashing features of ’STOP’ are slowly removed until it is presented in the same plain black font as the distractors, and the client consistently identifies it correctly.",
    question: "Which stimulus control procedure is the BCBA employing to establish discrimination of the word ’STOP’?",
    choices: [
    { letter: "A", text: "Response prompting, because the BCBA is providing cues to evoke the correct answer." },
    { letter: "B", text: "Stimulus fading, because the BCBA is gradually reducing the exaggerated features of the target stimulus to transfer control to its natural form." },
    { letter: "C", text: "Prompt dependency, because the client is becoming reliant on the exaggerated features." },
    { letter: "D", text: "Most-to-least prompting, as the BCBA is decreasing the level of assistance provided." }
    ],
    correctAnswer: "B",
    rationale: "Stimulus fading involves gradually changing a physical dimension of the stimulus to transfer stimulus control from an intrusive prompt (or an exaggerated feature of the stimulus) to the natural discriminative stimulus. In this scenario, the BCBA is gradually removing the bold, red, and flashing features of the word ’STOP,’ which are physical dimensions of the stimulus, until the client responds to the natural form of the word. Option A is incorrect because response prompting involves prompts that are separate from the stimulus itself. Option C is a potential negative outcome, not a procedure. Option D describes a prompt fading strategy, which is distinct from changing the stimulus itself."
  },
  {
    id: "t6-B-pool-47",
    domain: "B",
    taskItem: "B.22",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "hard",
    scenario: "A 15-year-old client with ASD in a vocational training setting is taught to select a picture of a ’fork’ when presented with the spoken word ’fork.’ They are also taught to select a picture of a ’fork’ when presented with the written word ’FORK.’ Without any direct teaching, the client is later able to say ’fork’ when shown the picture of a fork, and also says ’fork’ when shown the written word ’FORK.’",
    question: "What phenomenon of stimulus equivalence is demonstrated by the client’s untrained verbal responses?",
    choices: [
    { letter: "A", text: "Symmetry, because the client can now vocalize ’fork’ when presented with the picture or written word, reversing the learned stimulus-response relationship." },
    { letter: "B", text: "Transitivity, because the client has combined two previously learned conditional discriminations to form a new one." },
    { letter: "C", text: "Reflexivity, because the client is matching the spoken word ’fork’ to itself and the written word ’FORK’ to itself." },
    { letter: "D", text: "Generalization, because the client is applying the learned skill to new, but similar, stimuli." }
    ],
    correctAnswer: "A",
    rationale: "Symmetry is a property of stimulus equivalence where, if A is matched to B, then B will also be matched to A without direct training. In this scenario, the client was taught (spoken word ’fork’ -> select picture of fork) and (written word ’FORK’ -> select picture of fork). The untrained ability to say ’fork’ (vocal response) when shown the picture of a fork or the written word ’FORK’ demonstrates symmetry, as the learned conditional discriminations (e.g., spoken word to picture) are reversed (picture to spoken word). Option B, transitivity, involves forming a new relation (A=C) from two other relations (A=B and B=C). Option C, reflexivity, is matching a stimulus to itself (A=A). Option D, generalization, refers to responding to novel stimuli that share similar features, but here, specific untrained relations are forming within a stimulus class."
  },
  {
    id: "t6-B-pool-48",
    domain: "B",
    taskItem: "B.22",
    phase: "assessment",
    bloomsLevel: "analysis",
    difficulty: "hard",
    scenario: "A 6-year-old client with a language delay in a clinic setting is taught the following conditional discriminations: when presented with the spoken word ’car,’ they select a picture of a car (A=B). They are also taught that when shown the picture of a car, they select the written word ’CAR’ (B=C). Without any direct training, the client is later able to select the written word ’CAR’ when presented with the spoken word ’car.’",
    question: "Which property of stimulus equivalence is demonstrated by the client’s untrained ability to select the written word ’CAR’ when presented with the spoken word ’car’?",
    choices: [
    { letter: "A", text: "Reflexivity, as the client is matching identical stimuli to each other without prior instruction." },
    { letter: "B", text: "Symmetry is demonstrated because the client is reversing a previously trained conditional discrimination without direct training." },
    { letter: "C", text: "Transitivity, as the client has formed a new conditional discrimination (A=C) based on two other trained relations (A=B and B=C)." },
    { letter: "D", text: "Generalization, as the client is applying their knowledge to a new context or stimulus." }
    ],
    correctAnswer: "C",
    rationale: "Transitivity is a property of stimulus equivalence where, if A is matched to B, and B is matched to C, then A will also be matched to C without direct training. In this scenario, the client is taught A (spoken word ’car’) = B (picture of a car) and B (picture of a car) = C (written word ’CAR’). The untrained ability to match A (spoken word ’car’) = C (written word ’CAR’) demonstrates transitivity. Option A, reflexivity, is matching a stimulus to itself (A=A). Option B, symmetry, involves reversing a conditional discrimination (if A=B, then B=A). Option D, generalization, is a broader concept of responding to novel but similar stimuli, whereas transitivity describes a specific, emergent relation within an equivalence class."
  }
];
