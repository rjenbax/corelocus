import { Question } from './types';

export const tier6Pool_G: Question[] = [
  {
    id: "t6-G-pool-1",
    domain: "G",
    taskItem: "G.1",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "medium",
    scenario: "A behavior analyst implemented an antecedent intervention by providing a noncontingent access to preferred items on a fixed-time schedule to reduce the frequency of a client's disruptive behavior during instruction sessions. Data were collected across multiple sessions before and after the intervention was introduced.",
    question: "Based on this intervention, what is the most likely mechanism by which the antecedent intervention reduced the disruptive behavior?",
    choices: [
      {
        letter: "A",
        text: "The noncontingent delivery of preferred items functioned as an abolishing operation, decreasing the motivation for disruptive behavior."
      },
      {
        letter: "B",
        text: "The noncontingent reinforcement established an establishing operation that increased the value of the disruptive behavior's reinforcer."
      },
      {
        letter: "C",
        text: "The intervention functioned as an extinction procedure by withholding reinforcement for disruptive behavior."
      },
      {
        letter: "D",
        text: "The antecedent intervention acted as a discriminative stimulus signaling that disruptive behavior would be reinforced."
      }
    ],
    correctAnswer: "A",
    rationale: "Answer A is correct because providing noncontingent access to preferred items reduces the motivation to engage in disruptive behavior by satiating the reinforcer, thereby functioning as an abolishing operation. Answer B is incorrect because noncontingent reinforcement decreases, not increases, the value of the reinforcer for disruptive behavior. Answer C is incorrect as extinction involves withholding reinforcement contingent on behavior, but this intervention provides reinforcement noncontingently, not contingent on the target behavior. Answer D is incorrect because the antecedent intervention does not serve as a discriminative stimulus for reinforcement of disruptive behavior; rather, it reduces the motivation for the behavior."
  },
  {
    id: "t6-G-pool-2",
    domain: "G",
    taskItem: "G.21",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "medium",
    scenario: "A BCBA is implementing a response prompting procedure to teach a client to mand for preferred items. Initially, the BCBA provides a full physical prompt to guide the client's hand to request the item. Over successive trials, the BCBA systematically reduces the intensity of the prompt until the client independently emits the mand.",
    question: "Which of the following best describes the procedure used to ensure the client independently emits the mand?",
    choices: [
      {
        letter: "B",
        text: "Least-to-most prompting with prompt fading"
      },
      {
        letter: "C",
        text: "Time-delay prompting without prompt fading"
      },
      {
        letter: "D",
        text: "Stimulus fading without response prompting"
      },
      {
        letter: "A",
        text: "Most-to-least prompting with prompt fading"
      }
    ],
    correctAnswer: 'B',
    rationale: "The scenario describes beginning with a full physical prompt (a more intrusive prompt) and then systematically reducing the prompt intensity until the client responds independently, which is characteristic of most-to-least prompting combined with prompt fading. Option B is incorrect because least-to-most prompting starts with minimal prompts and increases prompt intensity only if the client fails to respond, which is not the case here. Option C is incorrect because time-delay involves inserting a delay before providing the prompt rather than starting with a full prompt and fading it systematically. Option D is incorrect because stimulus fading involves gradual changes to the antecedent stimuli, not varying prompt intensity aimed at the response."
  },
  {
    id: "t6-G-pool-3",
    domain: "G",
    taskItem: "G.9",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "hard",
    scenario: "A BCBA is supervising a technician implementing discrete trial training (DTT) with a child diagnosed with autism. The technician frequently prompts the child with full physical prompts and delivers reinforcement immediately, but the child shows limited acquisition of targeted skills. The BCBA is concerned about the technician's use of prompts and reinforcement strategies.",
    question: "Which ethical consideration should the BCBA prioritize when addressing the technician's implementation of DTT in this scenario?",
    choices: [
      {
        letter: "C",
        text: "Allowing the technician to continue using full physical prompts since it guarantees correct responding and faster skill acquisition."
      },
      {
        letter: "D",
        text: "Reducing the number of DTT trials to prevent potential learner frustration and escape-maintained problem behavior."
      },
      {
        letter: "A",
        text: "Ensuring the technician uses the least restrictive prompting procedures to promote learner independence, in accordance with ethical standards."
      },
      {
        letter: "B",
        text: "Increasing the frequency of reinforcement to maximize the child\u2019s motivation during DTT sessions."
      }
    ],
    correctAnswer: 'C',
    rationale: "The correct answer is A because ethical guidelines require behavior analysts to implement procedures that promote learner independence and use the least restrictive prompts necessary. Over-reliance on full physical prompts may impede skill acquisition and learner autonomy. Choice B is incorrect because increasing reinforcement frequency without addressing prompting strategies does not ensure ethical or effective teaching. Choice C is incorrect because relying exclusively on full physical prompts violates ethical standards that emphasize fading prompts to promote independence. Choice D is incorrect because reducing the number of trials without analyzing the function of behavior or modifying teaching strategies may compromise the intervention's effectiveness and is not directly related to ethical considerations about prompting and reinforcement."
  },
  {
    id: "t6-G-pool-4",
    domain: "G",
    taskItem: "G.12",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "hard",
    scenario: "A BCBA implemented a group contingency intervention in a classroom of 10 students to increase on-task behavior during independent work. The intervention used an independent group contingency where each student could earn points individually that contributed to a group reward if the class average met the criterion. After 4 weeks, data showed that on-task behavior increased overall, but a few students with consistently low performance received no direct reinforcement.",
    question: "Which of the following interpretations best explains the outcome of this group contingency intervention?",
    choices: [
      {
        letter: "D",
        text: "The group contingency failed because group rewards do not function as reinforcers in classroom settings, indicating a need to use only individual contingencies."
      },
      {
        letter: "A",
        text: "The independent group contingency effectively increased overall on-task behavior but may have limited reinforcement for low-performing students, suggesting a need for additional individual supports."
      },
      {
        letter: "B",
        text: "The dependent group contingency would have been more effective because reinforcement depends on selected individuals\u2019 behavior impacting the entire group."
      },
      {
        letter: "C",
        text: "The interdependent group contingency likely caused peer pressure that decreased motivation for some students, leading to inconsistent performance."
      }
    ],
    correctAnswer: 'D',
    rationale: "Answer A is correct because independent group contingencies allow each student to earn reinforcement based on their own behavior, which can increase overall performance; however, students who perform poorly may not contact reinforcement, indicating a need for supplemental individualized interventions. Answer B is incorrect because a dependent group contingency relies on one or few individuals to earn reinforcement for the whole group, which can create peer pressure and may not increase overall behavior as effectively in this scenario. Answer C is incorrect as it describes a likely effect of interdependent contingencies, not independent ones; the scenario described an independent group contingency. Answer D is incorrect because group contingencies can be effective reinforcers in classroom settings when properly implemented, and dismissing group contingencies entirely is inaccurate."
  },
  {
    id: "t6-G-pool-5",
    domain: "G",
    taskItem: "G.5",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "hard",
    scenario: "A BCBA is working with a child who frequently engages in hand flapping that is reinforced by adult attention. The BCBA implements an intervention where the adult attention is withheld contingent on hand flapping, but continues to provide attention for appropriate alternative behaviors.",
    question: "Which of the following best describes the primary behavioral principle being applied in this intervention?",
    choices: [
      {
        letter: "A",
        text: "Extinction of the hand flapping behavior by withholding the maintaining reinforcer."
      },
      {
        letter: "B",
        text: "Differential reinforcement of incompatible behavior to replace hand flapping."
      },
      {
        letter: "C",
        text: "Response blocking to physically prevent hand flapping from occurring."
      },
      {
        letter: "D",
        text: "Punishment by removing adult attention following hand flapping."
      }
    ],
    correctAnswer: "A",
    rationale: "The intervention involves withholding adult attention, which is the maintaining reinforcer for hand flapping, contingent on the occurrence of the behavior. This corresponds to extinction, which is the discontinuation of reinforcement for a previously reinforced behavior, resulting in a decrease in that behavior. \n\nChoice B is incorrect because although reinforcement is delivered for alternative behaviors, the primary procedure described is extinction, not differential reinforcement of incompatible behavior (DRI) specifically. \n\nChoice C is incorrect because response blocking involves physically preventing the behavior, which is not described in the scenario. \n\nChoice D is incorrect because punishment involves presenting or removing a stimulus to decrease behavior, but in this case, adult attention is withheld (removal of reinforcement), which is extinction, not punishment."
  },
  {
    id: "t6-G-pool-6",
    domain: "G",
    taskItem: "G.13",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "medium",
    scenario: "A BCBA is working with a client who struggles with completing homework assignments independently. The BCBA is designing an intervention to increase the client's use of self-management strategies to improve homework completion.",
    question: "Which of the following strategies best exemplifies an effective self-management intervention for this client?",
    choices: [
      {
        letter: "B",
        text: "Providing the client with frequent prompts and verbal instructions throughout the homework session."
      },
      {
        letter: "C",
        text: "Using response cost by removing tokens each time the client fails to complete a homework task."
      },
      {
        letter: "D",
        text: "Implementing a time-out procedure contingent on failure to complete homework assignments."
      },
      {
        letter: "A",
        text: "Teaching the client to use a checklist to monitor and record each homework task completed, with periodic review and reinforcement."
      }
    ],
    correctAnswer: 'B',
    rationale: "Choice A is correct because teaching the client to use a checklist to self-monitor and record completed tasks is a classic self-management strategy that increases independent responding. The periodic review and reinforcement supports maintenance and motivation. Choice B, providing frequent prompts and verbal instructions, relies on external control rather than promoting self-management skills. Choice C, using response cost, is an aversive punishment procedure and does not teach self-management; it focuses on decreasing behavior through punishment rather than increasing self-monitoring. Choice D, implementing a time-out, is also a punishment procedure that does not teach the client to manage their own behavior independently. Therefore, only choice A reflects an effective self-management intervention."
  },
  {
    id: "t6-G-pool-7",
    domain: "G",
    taskItem: "G.17",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "medium",
    scenario: "A BCBA is working with a client who has recently mastered a behavior under a dense reinforcement schedule. The BCBA plans to thin the reinforcement schedule gradually to promote maintenance and generalization. The client\u2019s caregiver expresses concern that thinning too quickly might lead to an increase in problem behavior.",
    question: "Which of the following actions best aligns with ethical practice when thinning reinforcement schedules in this scenario?",
    choices: [
      {
        letter: "C",
        text: "Maintain the dense reinforcement schedule indefinitely to avoid any risk of problem behavior, despite limited progress toward generalization."
      },
      {
        letter: "D",
        text: "Ignore the caregiver\u2019s concerns and proceed with thinning solely based on the BCBA\u2019s clinical judgment."
      },
      {
        letter: "A",
        text: "Implement a gradual thinning plan while monitoring the client\u2019s behavior closely and collaborating with the caregiver to adjust as needed."
      },
      {
        letter: "B",
        text: "Immediately switch to a lean reinforcement schedule to promote rapid independence, regardless of potential behavior fluctuations."
      }
    ],
    correctAnswer: 'C',
    rationale: "Answer A is correct because ethical practice requires implementing reinforcement schedule thinning gradually while monitoring the client\u2019s response and involving caregivers to ensure safety and effectiveness. This approach balances behavior analytic principles with client-centered care. Answer B is incorrect because abruptly thinning reinforcement can increase problem behavior and is not consistent with ethical risk management. Answer C is incorrect because maintaining a dense schedule indefinitely may impede generalization and maintenance, which is not aligned with best practice. Answer D is incorrect because disregarding caregiver input violates ethical guidelines regarding collaboration and respect for stakeholders."
  },
  {
    id: "t6-G-pool-8",
    domain: "G",
    taskItem: "G.20",
    phase: "intervention",
    bloomsLevel: "comprehension",
    difficulty: "easy",
    scenario: "A BCBA is teaching a child to use a picture card to request a snack. Initially, the therapist holds the picture card very close to the child's face to prompt the response, then gradually moves it farther away over successive trials.",
    question: "Which of the following best describes the procedure the BCBA is using?",
    choices: [
      {
        letter: "D",
        text: "Response generalization"
      },
      {
        letter: "A",
        text: "Stimulus fading"
      },
      {
        letter: "B",
        text: "Prompt delay"
      },
      {
        letter: "C",
        text: "Shaping"
      }
    ],
    correctAnswer: 'D',
    rationale: "The correct answer is A: Stimulus fading. Stimulus fading involves the gradual removal or modification of a stimulus prompt to transfer stimulus control to the natural stimulus. In this scenario, the therapist is gradually increasing the distance of the picture card, fading the prompt so the child eventually responds to the natural stimulus alone. Answer B (Prompt delay) involves inserting a delay before providing a prompt, rather than gradually changing the prompt itself. Answer C (Shaping) involves reinforcing successive approximations of a behavior, not modifying the stimulus. Answer D (Response generalization) refers to the occurrence of a learned behavior in different contexts or stimuli, not the method of prompt removal. Therefore, stimulus fading best describes the procedure used."
  },
  {
    id: "t6-G-pool-9",
    domain: "G",
    taskItem: "G.4",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "easy",
    scenario: "A behavior analyst is working with a client who frequently yells during sessions. The analyst decides to implement a procedure where reinforcement is delivered only if the client does not yell for a specific interval of time. The interval is reset if yelling occurs.",
    question: "Which differential reinforcement procedure is the analyst most likely using in this scenario?",
    choices: [
      {
        letter: "A",
        text: "Differential Reinforcement of Other behavior (DRO)"
      },
      {
        letter: "B",
        text: "Differential Reinforcement of Alternative behavior (DRA)"
      },
      {
        letter: "C",
        text: "Differential Reinforcement of Incompatible behavior (DRI)"
      },
      {
        letter: "D",
        text: "Differential Reinforcement of Low rates of behavior (DRL)"
      }
    ],
    correctAnswer: "A",
    rationale: "The correct answer is A, Differential Reinforcement of Other behavior (DRO), which involves delivering reinforcement if the target behavior (yelling) does not occur during or at specific intervals of time. This matches the description where reinforcement is given only if the client refrains from yelling. Choice B, DRA, involves reinforcing an alternative behavior, which is not described here. Choice C, DRI, reinforces a behavior incompatible with the target behavior, but no specific incompatible behavior is mentioned. Choice D, DRL, involves reinforcing lower rates of behavior rather than withholding reinforcement entirely during intervals without the behavior, so it does not fit the scenario."
  },
  {
    id: "t6-G-pool-10",
    domain: "G",
    taskItem: "G.18",
    phase: "intervention",
    bloomsLevel: "comprehension",
    difficulty: "medium",
    scenario: "A BCBA is working with a child who has learned to request preferred items using picture cards in the therapy room. However, the child does not use these requests when visiting a relative's house or at school. The BCBA wants to promote the use of requesting across different settings and with different people.",
    question: "Which of the following strategies best promotes generalization of requesting behavior across settings and persons?",
    choices: [
      {
        letter: "B",
        text: "Using the same prompt hierarchy strictly in the therapy room until mastery is achieved."
      },
      {
        letter: "C",
        text: "Providing continuous reinforcement only during sessions in the therapy room."
      },
      {
        letter: "D",
        text: "Teaching the child to request only with one preferred item to maintain stimulus control."
      },
      {
        letter: "A",
        text: "Conducting training sessions in multiple settings with various communication partners."
      }
    ],
    correctAnswer: 'B',
    rationale: "Choice A is correct because training in multiple settings with different people increases the likelihood that the requesting behavior will generalize across environments and communication partners. This approach uses programming common stimuli and multiple exemplars, which are key strategies for promoting generalization. Choice B is incorrect because restricting training to one setting limits generalization and may result in context-bound behavior. Choice C is incorrect because providing reinforcement only in one setting does not promote maintenance or generalization across other environments. Choice D is incorrect because limiting requests to one item restricts variability and may hinder generalization to other items or contexts."
  },
  {
    id: "t6-G-pool-11",
    domain: "G",
    taskItem: "G.2",
    phase: "intervention",
    bloomsLevel: "comprehension",
    difficulty: "hard",
    scenario: "A BCBA is working with a child who exhibits escape-maintained problem behavior during task demands. The BCBA decides to implement a high-probability request sequence prior to presenting a low-probability task to increase compliance and reduce problem behavior.",
    question: "Which of the following best explains the primary behavioral mechanism by which a high-probability request sequence increases compliance with a subsequent low-probability request?",
    choices: [
      {
        letter: "C",
        text: "The sequence produces habituation to task demands, which decreases the aversiveness of the low-probability task."
      },
      {
        letter: "D",
        text: "The sequence creates stimulus control by pairing specific antecedent stimuli with reinforcement, resulting in compliance with the low-probability request."
      },
      {
        letter: "A",
        text: "The sequence establishes a history of reinforcement through multiple compliance responses, which increases the likelihood of compliance with the low-probability request via behavioral momentum."
      },
      {
        letter: "B",
        text: "The sequence functions as an abolishing operation that decreases the value of escape as a reinforcer, thereby reducing problem behavior."
      }
    ],
    correctAnswer: 'C',
    rationale: "Answer A is correct because the high-probability request sequence capitalizes on behavioral momentum, a phenomenon where compliance with multiple easy (high-probability) requests builds a pattern of reinforced behavior that increases the likelihood of compliance with a subsequent harder (low-probability) request. This is due to the recent history of reinforcement increasing response persistence. Answer B is incorrect because the sequence does not function primarily as an abolishing operation; it does not reduce the value of escape but rather increases compliance by momentum. Answer C is incorrect because habituation involves decreased responsiveness due to repeated exposure, which is not the primary mechanism in high-probability request sequences. Answer D is incorrect because while stimulus control is important in behavior, the high-probability request sequence's effect is not primarily due to establishing new stimulus control but due to behavioral momentum from reinforcement history."
  },
  {
    id: "t6-G-pool-12",
    domain: "G",
    taskItem: "G.16",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "medium",
    scenario: "A BCBA is working with a group of children diagnosed with autism spectrum disorder who have difficulty learning social skills. The BCBA designs a video modeling intervention where children watch a video of peers demonstrating appropriate social interactions before practicing the skills themselves.",
    question: "Which of the following best describes an important consideration for maximizing the effectiveness of the video modeling intervention in this scenario?",
    choices: [
      {
        letter: "D",
        text: "Avoid providing any prompts or feedback after viewing the video to allow natural learning to occur."
      },
      {
        letter: "A",
        text: "Ensure the video model closely resembles the learner in age and appearance to increase the likelihood of observational learning."
      },
      {
        letter: "B",
        text: "Use a video model that performs the targeted skill in a highly complex and generalized context to promote broad generalization."
      },
      {
        letter: "C",
        text: "Include multiple video models performing different skills to provide a varied learning experience."
      }
    ],
    correctAnswer: 'D',
    rationale: "Choice A is correct because research on video modeling suggests that learners are more likely to attend to and imitate models who resemble them in age and appearance, which increases the effectiveness of observational learning. Choice B is incorrect because using a highly complex context may overwhelm the learner and reduce acquisition; starting with simpler, clearly defined examples is more effective. Choice C is incorrect because including multiple video models performing different skills simultaneously can cause confusion; focusing on one skill at a time promotes clearer learning. Choice D is incorrect because providing prompting and feedback after video modeling helps reinforce correct responding and promotes skill acquisition."
  },
  {
    id: "t6-G-pool-13",
    domain: "G",
    taskItem: "G.7",
    phase: "intervention",
    bloomsLevel: "comprehension",
    difficulty: "hard",
    scenario: "A BCBA is designing an intervention to teach a client to independently tie their shoelaces. The client currently only attempts to cross the laces over each other but cannot complete the entire tying sequence. The BCBA plans to reinforce successive approximations toward the final skill.",
    question: "Which of the following best describes an effective shaping procedure in this scenario?",
    choices: [
      {
        letter: "D",
        text: "Providing reinforcement on a fixed ratio schedule for every attempt, regardless of accuracy, to increase motivation."
      },
      {
        letter: "A",
        text: "Reinforcing the client only when they complete the entire shoe-tying sequence correctly, while providing physical guidance during incorrect attempts."
      },
      {
        letter: "B",
        text: "Reinforcing the client for crossing the laces, then gradually reinforcing closer approximations such as making a loop, and finally the entire tie."
      },
      {
        letter: "C",
        text: "Using a prompt hierarchy starting with full physical prompts and fading to partial prompts as the client progresses."
      }
    ],
    correctAnswer: 'A',
    rationale: "Answer B correctly describes shaping, which involves differentially reinforcing successive approximations toward the target behavior\u2014in this case, starting with crossing the laces, then making a loop, and eventually completing the entire tie. Answer A is incorrect because reinforcing only the final correct behavior without reinforcing intermediate approximations does not utilize shaping; it may lead to extinction of attempts. Answer C describes prompting and prompt fading, which is a different teaching strategy than shaping. Answer D describes reinforcement on a fixed ratio schedule regardless of accuracy, which does not implement shaping since it does not differentially reinforce closer approximations. Therefore, B is the best description of an effective shaping procedure in this scenario."
  },
  {
    id: "t6-G-pool-14",
    domain: "G",
    taskItem: "G.6",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "medium",
    scenario: "During therapy sessions, a child frequently engages in hand-biting, which results in injury. To reduce this behavior, the therapist applies a brief, mild aversive spray of water to the child's hand immediately after the hand-biting occurs.",
    question: "Which of the following best describes the procedure used by the therapist in this scenario?",
    choices: [
      {
        letter: "B",
        text: "Negative punishment by removing a preferred stimulus contingent on the behavior."
      },
      {
        letter: "C",
        text: "Positive reinforcement by adding a preferred stimulus contingent on the behavior."
      },
      {
        letter: "D",
        text: "Negative reinforcement by removing an aversive stimulus contingent on the behavior."
      },
      {
        letter: "A",
        text: "Positive punishment by adding an aversive stimulus contingent on the behavior."
      }
    ],
    correctAnswer: 'B',
    rationale: "The therapist applies an aversive stimulus (a mild water spray) immediately following the target behavior (hand-biting), which is intended to decrease the behavior. This procedure is positive punishment because it involves adding (positive) a stimulus that decreases the behavior. Choice B is incorrect because negative punishment involves removing a stimulus to decrease behavior, which is not the case here. Choice C is incorrect because positive reinforcement involves adding a stimulus to increase behavior, but here the goal is to decrease hand-biting. Choice D is incorrect because negative reinforcement involves removing an aversive stimulus to increase behavior, which does not match the scenario."
  },
  {
    id: "t6-G-pool-15",
    domain: "G",
    taskItem: "G.22",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "easy",
    scenario: "A BCBA is implementing the Picture Exchange Communication System (PECS) with a child who has limited verbal communication skills. After several sessions, the child begins to spontaneously exchange picture cards to request preferred items without prompt.",
    question: "Which of the following best explains the significance of the child initiating picture exchanges independently in PECS intervention?",
    choices: [
      {
        letter: "C",
        text: "It reflects the child\u2019s ability to discriminate between different picture stimuli during matching-to-sample tasks."
      },
      {
        letter: "D",
        text: "It shows the child is exhibiting echoic behavior by repeating verbal models provided by the therapist."
      },
      {
        letter: "A",
        text: "It indicates the child has developed functional communication and is using an appropriate mand."
      },
      {
        letter: "B",
        text: "It demonstrates that the child is engaging in tacting to label items in the environment."
      }
    ],
    correctAnswer: 'C',
    rationale: "The correct answer is A because spontaneous picture exchanges in PECS represent functional communication where the child uses a mand (request) to obtain desired items, which is the primary goal of PECS. Choice B is incorrect because tacting involves labeling or commenting on the environment, not requesting. Choice C is incorrect because discrimination of picture stimuli during matching-to-sample tasks does not necessarily involve communication or manding behavior. Choice D is incorrect because echoic behavior refers to vocal imitation, whereas PECS uses non-vocal picture exchanges to communicate."
  },
  {
    id: "t6-G-pool-16",
    domain: "G",
    taskItem: "G.15",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "medium",
    scenario: "A BCBA implemented a group social skills training program using behavioral skills training (BST) to teach initiating conversations to a group of children with autism. Data were collected on the frequency of spontaneous initiations during group play sessions across baseline and intervention phases.",
    question: "Based on the data showing an increase in spontaneous initiations only during group play sessions after BST implementation, which conclusion is most supported?",
    choices: [
      {
        letter: "D",
        text: "The observed increase is likely a result of respondent conditioning rather than operant learning."
      },
      {
        letter: "A",
        text: "The BST intervention was effective in increasing social initiations specifically within the group play context."
      },
      {
        letter: "B",
        text: "The increase in initiations is due to a generalization effect across all settings."
      },
      {
        letter: "C",
        text: "The intervention failed to produce any meaningful change since initiations did not increase outside group play."
      }
    ],
    correctAnswer: 'D',
    rationale: "Answer A is correct because the data specifically show increased initiations in the context where BST was implemented, indicating the intervention effectively taught the targeted social skill within that setting. Answer B is incorrect because generalization across all settings was not observed; the behavior change was context-specific. Answer C is incorrect because the increase during group play represents a meaningful behavior change, even if it did not generalize. Answer D is incorrect since respondent conditioning involves involuntary responses, whereas the increase in initiations reflects operant behavior shaped by reinforcement through BST."
  },
  {
    id: "t6-G-pool-17",
    domain: "G",
    taskItem: "G.14",
    phase: "intervention",
    bloomsLevel: "comprehension",
    difficulty: "medium",
    scenario: "A BCBA is designing a functional communication training (FCT) intervention for a child whose challenging behavior is maintained by escape from demands. The BCBA wants to teach the child an appropriate communicative response to request a break and reduce problem behavior.",
    question: "Which of the following strategies best aligns with the principles of functional communication training in this scenario?",
    choices: [
      {
        letter: "A",
        text: "Teaching the child to use a simple verbal request like \"break\" immediately before task demands are presented."
      },
      {
        letter: "B",
        text: "Providing the child with a token each time they complete a demand without engaging in challenging behavior."
      },
      {
        letter: "C",
        text: "Ignoring the child's challenging behavior while reinforcing compliance with task demands."
      },
      {
        letter: "D",
        text: "Implementing a time-out procedure contingent on challenging behavior to decrease its occurrence."
      }
    ],
    correctAnswer: "A",
    rationale: "Option A is correct because functional communication training involves teaching an appropriate communicative alternative that serves the same function as the challenging behavior. Teaching the child to request a break addresses the function of escape from demands and provides a socially acceptable way to communicate this need. Option B, providing tokens for compliance, is a reinforcement strategy but does not teach an alternative communication response and does not directly address the function of the behavior. Option C, ignoring challenging behavior and reinforcing compliance, may not effectively teach an alternative communication response and risks extinction bursts or increased problem behavior. Option D, using time-out, is a punishment-based procedure that does not teach an alternative communicative response and may not be as effective or appropriate as FCT for this function. Therefore, only option A aligns fully with FCT principles."
  },
  {
    id: "t6-G-pool-18",
    domain: "G",
    taskItem: "G.3",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "medium",
    scenario: "A BCBA is working with a child who frequently engages in SIB (self-injurious behavior) to gain adult attention. Functional analysis results indicate that attention is the maintaining reinforcer. The BCBA implements a treatment in which the child receives attention on a fixed-time schedule independent of behavior.",
    question: "Which of the following best describes the intervention implemented by the BCBA?",
    choices: [
      {
        letter: "B",
        text: "Differential reinforcement of alternative behavior (DRA) with attention delivered contingent on appropriate behavior"
      },
      {
        letter: "C",
        text: "Extinction by withholding attention following self-injurious behavior"
      },
      {
        letter: "D",
        text: "Response cost by removing attention following self-injurious behavior"
      },
      {
        letter: "A",
        text: "Noncontingent reinforcement (NCR) with attention as the reinforcer"
      }
    ],
    correctAnswer: 'B',
    rationale: "The BCBA is delivering attention on a fixed-time schedule independent of the child's behavior, which is a hallmark of noncontingent reinforcement (NCR). NCR involves providing the maintaining reinforcer freely according to a time-based schedule to reduce problem behavior. Option B (DRA) involves delivering reinforcement contingent on an alternative appropriate behavior, which is not described here. Option C describes extinction by withholding the reinforcer following problem behavior, but the scenario indicates attention is provided independent of behavior, not withheld. Option D describes response cost, which involves removal of reinforcement contingent on problem behavior, not noncontingent delivery. Therefore, A is correct and the others are plausible but not matching the intervention described."
  },
  {
    id: "t6-G-pool-19",
    domain: "G",
    taskItem: "G.10",
    phase: "intervention",
    bloomsLevel: "comprehension",
    difficulty: "medium",
    scenario: "A BCBA is working with a young child who has limited spontaneous communication in natural settings such as during play and snack time. The BCBA wants to increase the child's use of verbal requests in these everyday environments by embedding teaching opportunities within naturally occurring routines.",
    question: "Which of the following strategies best exemplifies naturalistic teaching in this scenario?",
    choices: [
      {
        letter: "C",
        text: "Prompting the child to request a toy immediately before giving it, without waiting for any initiation."
      },
      {
        letter: "D",
        text: "Delivering verbal instructions and providing reinforcement only after the child completes a set number of trials."
      },
      {
        letter: "A",
        text: "Arranging the environment so preferred items are visible but out of reach to evoke spontaneous requests during play."
      },
      {
        letter: "B",
        text: "Using discrete trial training at a table with massed trials to teach requesting."
      }
    ],
    correctAnswer: 'C',
    rationale: "Answer A is correct because arranging the environment to create natural opportunities for communication and waiting for spontaneous initiations aligns with naturalistic teaching principles, which emphasize embedding learning in naturally occurring routines and reinforcing learner-initiated communication. Answer B describes discrete trial training, which is highly structured and contrived, not naturalistic. Answer C involves prompting before any initiation, which does not encourage spontaneous communication and is less naturalistic. Answer D focuses on massed trials and reinforcement contingent on completing multiple trials, which is more characteristic of contrived teaching rather than naturalistic teaching."
  },
  {
    id: "t6-G-pool-20",
    domain: "G",
    taskItem: "G.19",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "easy",
    scenario: "A behavior analyst has successfully taught a client to independently complete a multi-step cooking task. The client now performs the task accurately in the clinic setting.",
    question: "Which strategy best promotes maintenance of the cooking skill over time?",
    choices: [
      {
        letter: "D",
        text: "Discontinuing all practice sessions now that the client has mastered the task in the clinic."
      },
      {
        letter: "A",
        text: "Systematically scheduling periodic sessions to practice the cooking task in natural environments with varying levels of support."
      },
      {
        letter: "B",
        text: "Increasing the rate of instruction sessions in the clinic to ensure the client becomes fluent with the task."
      },
      {
        letter: "C",
        text: "Reducing reinforcement frequency during sessions to promote independent responding."
      }
    ],
    correctAnswer: 'D',
    rationale: "Option A is correct because maintenance programming involves scheduling intermittent practice opportunities, especially in naturalistic settings, to ensure the learned behavior persists over time and across contexts. Option B focuses on increasing instruction frequency in the clinic, which may improve acquisition or fluency but does not specifically promote maintenance in natural environments. Option C suggests reducing reinforcement frequency, which could lead to extinction or decreased responding rather than maintenance. Option D involves discontinuing practice entirely, which risks skill degradation and does not support maintenance."
  },
  {
    id: "t6-G-pool-21",
    domain: "G",
    taskItem: "G.14",
    phase: "intervention",
    bloomsLevel: "comprehension",
    difficulty: "medium",
    scenario: "A BCBA is working with a child who engages in challenging behavior to escape difficult academic tasks. The BCBA decides to implement functional communication training (FCT) to teach the child an appropriate way to request a break. After teaching the communication response, the BCBA notices the challenging behavior decreases but sometimes the child still engages in problem behavior when the communication response is not immediately honored.",
    question: "Which of the following strategies best supports the effectiveness of the functional communication training in this scenario?",
    choices: [
      {
        letter: "A",
        text: "Providing reinforcement for the communication response immediately and consistently while placing challenging behavior on extinction."
      },
      {
        letter: "B",
        text: "Teaching multiple communication responses and intermittently reinforcing the communication response to maintain it."
      },
      {
        letter: "C",
        text: "Using punishment procedures to reduce challenging behavior while reinforcing communication responses occasionally."
      },
      {
        letter: "D",
        text: "Reinforcing challenging behavior occasionally to avoid extinction-induced bursts and reinforcing communication responses consistently."
      }
    ],
    correctAnswer: "A",
    rationale: "The correct answer is A because effective FCT requires that the functional communication response be reinforced immediately and consistently to replace the challenging behavior, which should be placed on extinction to reduce it. This consistency teaches the learner that communication effectively produces the desired outcome. Option B is incorrect because intermittently reinforcing communication responses may weaken the new skill and delay extinction of challenging behavior. Option C is incorrect because punishment is not a primary component of FCT and inconsistent reinforcement of communication responses reduces its effectiveness. Option D is incorrect because reinforcing challenging behavior, even occasionally, undermines the purpose of FCT and can maintain or increase problem behavior."
  },
  {
    id: "t6-G-pool-22",
    domain: "G",
    taskItem: "G.21",
    phase: "intervention",
    bloomsLevel: "comprehension",
    difficulty: "easy",
    scenario: "A therapist is teaching a child to identify colors. Initially, the therapist provides a full physical prompt by guiding the child's hand to select the correct color card. Over time, the therapist reduces the prompt intensity by moving from physical to gestural prompts.",
    question: "Which of the following best describes the therapist's approach in this scenario?",
    choices: [
      {
        letter: "B",
        text: "Employing shaping by reinforcing successive approximations toward the target response."
      },
      {
        letter: "C",
        text: "Implementing chaining by teaching each step of the behavior sequence independently."
      },
      {
        letter: "D",
        text: "Using extinction to reduce prompt dependence by withholding reinforcement following prompted responses."
      },
      {
        letter: "A",
        text: "Using response prompting with systematic fading to transfer stimulus control to the natural SD."
      }
    ],
    correctAnswer: 'B',
    rationale: "The therapist is using response prompting by providing physical prompts initially and then systematically fading these prompts to less intrusive forms (gestural prompts). This method transfers stimulus control from the prompt to the natural discriminative stimulus (SD), which is the correct description of response prompting with fading.\n\nOption B is incorrect because shaping involves reinforcing successive approximations of a behavior, not systematically reducing prompts.\n\nOption C is incorrect because chaining involves teaching a sequence of behaviors, whereas the scenario focuses on prompting a single response (color identification).\n\nOption D is incorrect because extinction involves withholding reinforcement to reduce behavior, not fading prompts to transfer stimulus control."
  },
  {
    id: "t6-G-pool-23",
    domain: "G",
    taskItem: "G.11",
    phase: "intervention",
    bloomsLevel: "comprehension",
    difficulty: "easy",
    scenario: "A behavior analyst is designing a token economy system for a classroom to increase students' on-task behavior. Tokens are delivered immediately following on-task behavior and can later be exchanged for preferred items or activities.",
    question: "Which of the following best describes a critical component of an effective token economy?",
    choices: [
      {
        letter: "C",
        text: "Tokens function as primary reinforcers that directly satisfy biological needs."
      },
      {
        letter: "D",
        text: "Tokens should only be delivered after the entire behavior session is complete."
      },
      {
        letter: "A",
        text: "Tokens should be paired with backup reinforcers that are meaningful to the individual."
      },
      {
        letter: "B",
        text: "Tokens should be delivered on a fixed interval schedule regardless of behavior."
      }
    ],
    correctAnswer: 'C',
    rationale: "Choice A is correct because tokens themselves are conditioned reinforcers that acquire reinforcing value through association with backup reinforcers, which must be meaningful and motivating to the individual. Choice B is incorrect because tokens should be delivered contingent on the target behavior rather than on a fixed interval schedule, ensuring reinforcement is directly linked to behavior. Choice C is incorrect because tokens are conditioned (secondary) reinforcers, not primary reinforcers that satisfy biological needs directly. Choice D is incorrect because delivering tokens only after the entire session reduces the immediacy of reinforcement, which can decrease effectiveness; immediate or frequent token delivery is essential to strengthen the target behavior."
  },
  {
    id: "t6-G-pool-24",
    domain: "G",
    taskItem: "G.19",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "medium",
    scenario: "A BCBA implemented a maintenance program for a client who mastered requesting items using picture cards. After initial mastery, the BCBA arranged periodic probe sessions without providing reinforcement to assess maintenance of the skill over time.",
    question: "Which of the following best describes the purpose of the maintenance probes in this scenario?",
    choices: [
      {
        letter: "D",
        text: "To evaluate the effectiveness of prompting strategies during skill acquisition."
      },
      {
        letter: "A",
        text: "To assess whether the client's requesting behavior persists over time without ongoing reinforcement."
      },
      {
        letter: "B",
        text: "To determine if generalization of the requesting behavior occurs across different settings."
      },
      {
        letter: "C",
        text: "To measure the client\u2019s acquisition rate of new communication skills."
      }
    ],
    correctAnswer: 'D',
    rationale: "The correct answer is A because maintenance programming involves assessing whether a learned behavior continues over time, typically by conducting maintenance probes without reinforcement to see if the skill persists. Answer B describes generalization, which refers to the spread of behavior across settings or stimuli, not maintenance. Answer C is incorrect because acquisition rate pertains to how quickly a new skill is learned, not maintenance of an already mastered skill. Answer D relates to acquisition and prompting effectiveness, not to maintenance of behavior after mastery."
  },
  {
    id: "t6-G-pool-25",
    domain: "G",
    taskItem: "G.12",
    phase: "intervention",
    bloomsLevel: "comprehension",
    difficulty: "hard",
    scenario: "A BCBA is designing a group contingency intervention for a classroom of 10 students to increase on-task behavior. The BCBA plans to implement an independent group contingency where each student must meet a criterion individually to earn a reward for the entire group.",
    question: "Which of the following best describes a potential limitation of implementing an independent group contingency in this scenario?",
    choices: [
      {
        letter: "A",
        text: "Some students may not be motivated by the group reward if they perceive others are not meeting the criterion."
      },
      {
        letter: "B",
        text: "The contingency might lead to direct peer monitoring and pressure since all members share the same consequence."
      },
      {
        letter: "C",
        text: "The entire group\u2019s access to reinforcement is dependent on the behavior of every group member, which may cause conflict."
      },
      {
        letter: "D",
        text: "Group members are rewarded only if the group as a whole meets the criterion, which may reduce individual accountability."
      }
    ],
    correctAnswer: "A",
    rationale: "Answer A correctly identifies a limitation of an independent group contingency: although the reward is for the group, each student\u2019s own performance determines reinforcement, so some students might not be motivated by a group reward if they think others are not meeting the criterion. This can reduce effectiveness. Answer B describes characteristics of an interdependent group contingency, where peers share the same consequence and may monitor each other, which is not the case here. Answer C reflects a dependent group contingency where the entire group\u2019s reinforcement depends on one or a few individuals\u2019 behavior, which is also not the case in an independent contingency. Answer D describes the interdependent group contingency, where the group is rewarded only if the whole group meets the criterion, reducing individual accountability, which differs from the independent contingency described. Thus, A is the best choice."
  },
  {
    id: "t6-G-pool-26",
    domain: "G",
    taskItem: "G.23",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "hard",
    scenario: "A BCBA is working with a nonverbal child who uses a picture exchange communication system (PECS) as an AAC modality. The child demonstrates frustration when the communication board is not immediately accessible, leading to problem behaviors. The BCBA aims to increase the child\u2019s independent initiation of requests across multiple settings.",
    question: "Which of the following strategies is the most effective for promoting generalization and maintenance of AAC use in this scenario?",
    choices: [
      {
        letter: "B",
        text: "Increasing the child\u2019s vocal verbal behavior through direct vocal imitation training before continuing AAC interventions."
      },
      {
        letter: "C",
        text: "Restricting access to the PECS communication board to therapist-led sessions to ensure mastery before generalizing."
      },
      {
        letter: "D",
        text: "Using a fixed schedule of reinforcement for each AAC request to promote consistent responding."
      },
      {
        letter: "A",
        text: "Teaching the child to request using the PECS system across different environments and with various communication partners, while systematically fading prompts."
      }
    ],
    correctAnswer: 'B',
    rationale: "Choice A is correct because teaching the child to use the AAC system across environments and communication partners while fading prompts promotes generalization and maintenance, which are critical for effective AAC intervention. Choice B, although vocal verbal behavior may be a goal, delaying AAC use in favor of vocal imitation training is not advisable when AAC supports communication immediately. Choice C limits opportunities for generalization and may lead to context-bound responding, which does not support functional communication across settings. Choice D\u2019s use of a fixed schedule of reinforcement may not promote maintenance or generalization as effectively as naturalistic reinforcement contingent on communication; variable or natural reinforcement schedules are typically more effective."
  },
  {
    id: "t6-G-pool-27",
    domain: "G",
    taskItem: "G.20",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "easy",
    scenario: "A BCBA is implementing a stimulus fading procedure to help a client tolerate wearing a medical bracelet. Initially, the BCBA uses a large, colorful bracelet and gradually changes it to the client's preferred smaller and less conspicuous medical bracelet. The BCBA notices the client shows some discomfort during the transition.",
    question: "Which ethical consideration should guide the BCBA's use of stimulus fading in this scenario?",
    choices: [
      {
        letter: "C",
        text: "Use extinction procedures alongside fading to reduce any problem behaviors associated with wearing the bracelet."
      },
      {
        letter: "D",
        text: "Apply the fading procedure without client or caregiver input to maintain procedural integrity."
      },
      {
        letter: "A",
        text: "Ensure that the fading steps are gradual enough to minimize client discomfort and respect the client\u2019s dignity."
      },
      {
        letter: "B",
        text: "Prioritize rapid fading to eliminate the initial stimulus as quickly as possible to increase treatment efficiency."
      }
    ],
    correctAnswer: 'C',
    rationale: "Answer A is correct because ethical practice requires that the BCBA minimize client discomfort and respect client dignity, especially when using stimulus fading. Gradual fading ensures the client can tolerate changes without undue distress. Answer B is incorrect because prioritizing rapid fading over client comfort may cause harm and violate ethical standards. Answer C is incorrect because combining extinction is not necessarily appropriate or ethical without clear indication and may increase discomfort or problem behavior. Answer D is incorrect because ethical practice involves collaboration with the client and caregivers to ensure consent and acceptability of procedures."
  },
  {
    id: "t6-G-pool-28",
    domain: "G",
    taskItem: "G.3",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "hard",
    scenario: "A BCBA is implementing a noncontingent reinforcement (NCR) intervention to reduce a client's aggressive behavior maintained by social attention. The client has a history of severe aggression, and the BCBA must ensure the intervention is both effective and ethically appropriate.",
    question: "Which of the following ethical considerations should the BCBA prioritize when designing and implementing the NCR intervention in this scenario?",
    choices: [
      {
        letter: "D",
        text: "Implementing NCR without collecting baseline data, to prevent prolonging exposure to aggressive behavior."
      },
      {
        letter: "A",
        text: "Ensuring the NCR schedule is dense enough to compete with the client's motivation for aggression while monitoring for potential extinction bursts."
      },
      {
        letter: "B",
        text: "Avoiding NCR altogether because providing attention noncontingently may inadvertently reinforce aggression."
      },
      {
        letter: "C",
        text: "Using NCR only after extinction has been implemented to prevent reinforcing any problem behavior."
      }
    ],
    correctAnswer: 'D',
    rationale: "Answer A is correct because ensuring a sufficiently dense NCR schedule is critical to effectively compete with the client's motivation for aggression, thereby ethically minimizing harm and promoting behavior reduction. Monitoring for extinction bursts is also important to safeguard the client's well-being. Answer B is incorrect because avoiding NCR entirely disregards its evidence-based utility when implemented correctly; NCR can be ethical and effective when properly designed. Answer C is incorrect because waiting to implement NCR only after extinction neglects the ethical importance of minimizing problem behavior as early as possible; NCR can be used proactively. Answer D is incorrect because implementing interventions without baseline data violates ethical standards requiring data-based decision making to ensure treatment effectiveness and safety."
  },
  {
    id: "t6-G-pool-29",
    domain: "G",
    taskItem: "G.18",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "hard",
    scenario: "A BCBA is working with a client to increase spontaneous greetings in the community. The intervention has successfully taught the client to say 'hello' to the therapist in the clinic setting. However, the client does not greet unfamiliar people or greet in different locations outside the clinic.",
    question: "Which strategy best promotes generalization of the greeting behavior across people and settings?",
    choices: [
      {
        letter: "A",
        text: "Introduce multiple exemplars by teaching the greeting with various people and in multiple community settings."
      },
      {
        letter: "B",
        text: "Use stimulus fading by gradually changing the clinic environment to resemble community settings."
      },
      {
        letter: "C",
        text: "Apply response maintenance procedures by reinforcing the greeting only during clinic sessions."
      },
      {
        letter: "D",
        text: "Implement extinction by withholding reinforcement when the client does not greet unfamiliar people."
      }
    ],
    correctAnswer: "A",
    rationale: "Option A is correct because teaching with multiple exemplars (varied people and settings) is a well-established strategy to promote generalization across stimuli and environments, increasing the likelihood that the client will greet different people in various settings. Option B, stimulus fading, involves gradual changes to the antecedent stimulus but does not effectively address generalization across different people and widely different settings. Option C, response maintenance by reinforcing only in the clinic, does not promote generalization; it may actually restrict the behavior to the trained setting. Option D, extinction for not greeting unfamiliar people, is inappropriate because it does not teach or promote the desired behavior across contexts and may suppress overall greeting behavior. Therefore, only Option A directly targets programming for generalization."
  },
  {
    id: "t6-G-pool-30",
    domain: "G",
    taskItem: "G.5",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "easy",
    scenario: "A BCBA is implementing an extinction procedure to decrease a client's disruptive behavior maintained by attention. The BCBA notices an extinction burst initially and considers how to proceed ethically while ensuring treatment integrity.",
    question: "Which of the following is the most ethical course of action for the BCBA when implementing extinction in this scenario?",
    choices: [
      {
        letter: "B",
        text: "Discontinue extinction immediately to avoid any temporary increase in disruptive behavior."
      },
      {
        letter: "C",
        text: "Provide reinforcement for the disruptive behavior to reduce the extinction burst effects."
      },
      {
        letter: "D",
        text: "Implement punishment alongside extinction to suppress the disruptive behavior quickly."
      },
      {
        letter: "A",
        text: "Continue the extinction procedure consistently while providing reinforcement for alternative appropriate behaviors."
      }
    ],
    correctAnswer: 'B',
    rationale: "Answer A is correct because continuing extinction consistently is essential for it to be effective, and reinforcing alternative appropriate behaviors promotes ethical treatment by teaching functional communication or other replacement skills. Answer B is incorrect because discontinuing extinction due to an extinction burst undermines treatment integrity and may prolong problematic behavior. Answer C is incorrect because reinforcing the disruptive behavior contradicts the goal of extinction and reinforces maladaptive behavior. Answer D is incorrect because adding punishment without ethical justification and proper procedures may violate ethical standards and is not necessary when extinction and reinforcement of alternative behaviors are properly implemented."
  },
  {
    id: "t6-G-pool-31",
    domain: "G",
    taskItem: "G.1",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "medium",
    scenario: "A BCBA is designing an intervention for a client who engages in problem behavior when transitioning between activities. The BCBA considers implementing an antecedent intervention to reduce the likelihood of problem behavior during transitions. However, the client's caregiver expresses concern about restricting the client's choices during transitions.",
    question: "Which of the following antecedent interventions best balances ethical considerations with effective behavior reduction in this scenario?",
    choices: [
      {
        letter: "C",
        text: "Restricting access to all preferred activities until the client complies with the transition demand."
      },
      {
        letter: "D",
        text: "Delivering a fixed prompt to initiate the transition without providing any opportunities for the client to indicate readiness or preference."
      },
      {
        letter: "A",
        text: "Using a visual schedule to signal upcoming transitions, allowing the client to anticipate changes while maintaining some choice and control."
      },
      {
        letter: "B",
        text: "Implementing a response cost procedure by removing preferred items immediately upon signs of resistance during transitions."
      }
    ],
    correctAnswer: 'C',
    rationale: "Option A is correct because using a visual schedule is an antecedent intervention that helps the client anticipate transitions, reducing problem behavior while respecting the client's autonomy and choice, aligning with ethical standards. Option B involves response cost, a consequence-based strategy rather than an antecedent intervention, and poses ethical concerns about punishment without antecedent modifications. Option C restricts all preferred activities, which may be overly restrictive and ethically problematic as it removes choice and may evoke escape-maintained problem behavior. Option D involves fixed prompting without considering the client's readiness or preference, which can reduce client dignity and may not effectively reduce problem behavior. Thus, option A best balances effective antecedent intervention with ethical practice."
  },
  {
    id: "t6-G-pool-32",
    domain: "G",
    taskItem: "G.10",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "hard",
    scenario: "A BCBA is working with a 5-year-old child with autism who has a limited verbal repertoire. The BCBA decides to implement naturalistic teaching procedures during the child's free play time to increase spontaneous communication. During a play session, the child reaches for a toy truck but does not vocalize or make a request.",
    question: "Which of the following strategies best exemplifies naturalistic teaching in this scenario?",
    choices: [
      {
        letter: "B",
        text: "The BCBA physically guides the child's hand to the toy truck while simultaneously saying the word 'truck' and provides the toy as a reinforcer."
      },
      {
        letter: "C",
        text: "The BCBA sets up the environment so the toy truck is visible but out of reach, waits for the child to gesture or vocalize, then labels the item and gives the toy contingent on the child's attempt."
      },
      {
        letter: "D",
        text: "The BCBA conducts a discrete trial by presenting a picture of a truck and asking, 'What is this?' then providing reinforcement for a correct vocal response."
      },
      {
        letter: "A",
        text: "The BCBA waits for the child to make any communicative attempt, then immediately models the word 'truck' and prompts the child to imitate before giving access to the toy."
      }
    ],
    correctAnswer: 'D',
    rationale: "Answer C best exemplifies naturalistic teaching because it incorporates environmental arrangement to create motivation, waits for a communicative attempt, and provides reinforcement contingent on that attempt in a natural context. This aligns with key features of naturalistic teaching, such as using naturally occurring motivation and embedding learning opportunities within play. Answer A involves immediate modeling and prompting which may reduce the child's motivation to initiate communication spontaneously and is less naturalistic. Answer B uses physical guidance which is more intrusive and less consistent with naturalistic teaching principles emphasizing natural communication. Answer D describes a discrete trial teaching method, which is more structured and contrived and does not represent naturalistic teaching. Therefore, C is the most appropriate strategy for naturalistic teaching in this scenario."
  },
  {
    id: "t6-G-pool-33",
    domain: "G",
    taskItem: "G.7",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "easy",
    scenario: "A BCBA is working with a child who currently says a single word to request a toy. The BCBA decides to reinforce successive approximations toward the child saying a two-word phrase. Initially, the BCBA reinforces any attempt at vocalization, then only sounds resembling the target phrase, and finally the full two-word phrase.",
    question: "Which process is the BCBA using to increase the child's communication from a single word to a two-word phrase?",
    choices: [
      {
        letter: "A",
        text: "Shaping"
      },
      {
        letter: "B",
        text: "Chaining"
      },
      {
        letter: "C",
        text: "Fading"
      },
      {
        letter: "D",
        text: "Prompting"
      }
    ],
    correctAnswer: "A",
    rationale: "The correct answer is A, Shaping, which involves reinforcing successive approximations toward a target behavior\u2014in this case, the child\u2019s progression from single words to a two-word phrase. Chaining (B) involves teaching a sequence of behaviors in a specific order, which does not apply here since the focus is on modifying a single behavior gradually. Fading (C) refers to the gradual removal of prompts or assistance, not the gradual change in the form of the behavior itself. Prompting (D) involves providing additional stimuli to encourage the correct response but does not inherently involve reinforcing successive approximations toward a new behavior form. Therefore, shaping best describes the process used."
  },
  {
    id: "t6-G-pool-34",
    domain: "G",
    taskItem: "G.13",
    phase: "intervention",
    bloomsLevel: "comprehension",
    difficulty: "medium",
    scenario: "A client is learning to manage their own anxiety by using a written checklist of coping strategies when feeling overwhelmed. The behavior analyst teaches the client to monitor their anxiety levels and use the checklist independently before anxiety escalates.",
    question: "Which of the following best describes the primary function of the written checklist in this self-management intervention?",
    choices: [
      {
        letter: "B",
        text: "A form of response cost that decreases anxiety by removing aversive stimuli."
      },
      {
        letter: "C",
        text: "An establishing operation that increases the effectiveness of coping behaviors."
      },
      {
        letter: "D",
        text: "A token economy system that reinforces the client's use of coping strategies."
      },
      {
        letter: "A",
        text: "A self-monitoring tool that prompts the client to engage in alternative, adaptive behaviors."
      }
    ],
    correctAnswer: 'B',
    rationale: "The written checklist primarily serves as a self-monitoring prompt that helps the client recognize when to implement adaptive coping strategies, which is a key component of self-management. Choice A correctly identifies this function. Choice B is incorrect because response cost involves removal of a reinforcer contingent on behavior, which is not the function of the checklist. Choice C is incorrect because an establishing operation alters the value of a reinforcer or punisher but the checklist itself is a prompt, not an EO. Choice D is incorrect because a token economy is a reinforcement system involving tokens as conditioned reinforcers, which is not described in the scenario."
  },
  {
    id: "t6-G-pool-35",
    domain: "G",
    taskItem: "G.2",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "easy",
    scenario: "A BCBA is working with a child who frequently refuses to comply with low-probability requests such as completing homework. The BCBA implements a high-probability request sequence by first asking the child to complete easy tasks that the child regularly complies with, followed immediately by the homework task.",
    question: "Based on research regarding high-probability request sequences, what is the most likely effect of this intervention on the child's compliance with the homework task?",
    choices: [
      {
        letter: "C",
        text: "No change in compliance since high-probability requests only affect reinforcement schedules."
      },
      {
        letter: "D",
        text: "Immediate extinction of problem behavior resulting from the homework request."
      },
      {
        letter: "A",
        text: "An increase in compliance with the homework task due to momentum generated by prior easy requests."
      },
      {
        letter: "B",
        text: "A decrease in compliance because the child becomes fatigued from multiple requests."
      }
    ],
    correctAnswer: 'C',
    rationale: "The high-probability request sequence (also known as behavioral momentum) involves presenting several easy, high-probability requests that the learner is likely to comply with before presenting a low-probability request. Research shows this sequence increases compliance with the low-probability requests by creating behavioral momentum. Choice A correctly describes this effect. Choice B is incorrect because fatigue is not typically a factor in short sequences of high-probability requests, and the intervention is designed to increase compliance rather than decrease it. Choice C is incorrect as high-probability request sequences directly affect compliance behavior rather than reinforcement schedules alone. Choice D is incorrect because extinction is a separate procedure and is not an immediate consequence of implementing high-probability request sequences."
  },
  {
    id: "t6-G-pool-36",
    domain: "G",
    taskItem: "G.8",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "hard",
    scenario: "A BCBA is teaching a learner to brush their teeth, which involves multiple discrete steps. The BCBA compares three chaining procedures: forward chaining, backward chaining, and total-task chaining. During intervention, the learner shows difficulty mastering the intermediate steps when forward chaining is used, but progresses more rapidly when backward chaining is implemented.",
    question: "Based on the clinical scenario, which explanation best accounts for the learner's faster acquisition of tooth brushing using backward chaining compared to forward chaining?",
    choices: [
      {
        letter: "D",
        text: "Backward chaining minimizes prompt dependency by providing full prompts on all steps except the last one, which encourages independent responding earlier."
      },
      {
        letter: "A",
        text: "Backward chaining allows the learner to contact the terminal reinforcer immediately after completing the last step, increasing motivation and reinforcement effectiveness."
      },
      {
        letter: "B",
        text: "Forward chaining requires the learner to independently perform the first step before receiving reinforcement, which may delay reinforcement delivery and reduce motivation."
      },
      {
        letter: "C",
        text: "Total-task chaining is less effective because it does not provide reinforcement after each individual step, leading to slower acquisition."
      }
    ],
    correctAnswer: 'D',
    rationale: "Answer A is correct because backward chaining ensures the learner completes the terminal step independently and immediately contacts the natural reinforcer (e.g., clean teeth or praise) at the end of the chain, which can increase motivation and facilitate faster acquisition. Answer B is partially correct but is more of a reason why forward chaining might be slower rather than why backward chaining is more effective; it does not fully explain the advantage of backward chaining. Answer C incorrectly describes total-task chaining as less effective due to reinforcement delivery; total-task chaining often includes reinforcement after the entire chain, which can be effective depending on learner characteristics. Answer D is incorrect because backward chaining typically involves prompting all steps except the last one, but the rationale that this minimizes prompt dependency earlier is not necessarily accurate; prompt dependency can still occur and is not the primary reason for faster acquisition in backward chaining."
  },
  {
    id: "t6-G-pool-37",
    domain: "G",
    taskItem: "G.16",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "medium",
    scenario: "A BCBA is implementing a video modeling intervention to teach social skills to a client. The videos include footage of individuals who are not the client or the client's caregivers. The BCBA plans to share the videos with the client\u2019s school team and family members.",
    question: "Which of the following actions best aligns with ethical guidelines regarding the use of video modeling in this scenario?",
    choices: [
      {
        letter: "A",
        text: "Obtain informed consent from all individuals featured in the videos before sharing them with others."
      },
      {
        letter: "B",
        text: "Share the videos freely with the client\u2019s team since the videos are solely for educational purposes."
      },
      {
        letter: "C",
        text: "Remove any identifying information from the videos but no need to obtain consent since they are used for intervention."
      },
      {
        letter: "D",
        text: "Use the videos as is because video modeling is considered a low-risk intervention and consent is implied."
      }
    ],
    correctAnswer: "A",
    rationale: "The correct answer is A because the BACB Code of Ethics requires obtaining informed consent from all individuals whose images or likenesses will be used in interventions or shared with others. This protects the privacy and rights of those individuals. Option B is incorrect because educational purpose alone does not waive the requirement for consent. Option C is incorrect because removing identifying information may not be sufficient; consent is still necessary. Option D is incorrect as ethical guidelines do not consider video modeling low-risk to the extent that consent can be implied; explicit consent is required."
  },
  {
    id: "t6-G-pool-38",
    domain: "G",
    taskItem: "G.4",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "easy",
    scenario: "A BCBA is designing an intervention for a client who frequently engages in disruptive vocalizations. The BCBA considers using differential reinforcement procedures and wants to ensure the chosen method aligns with ethical standards and promotes the client's dignity.",
    question: "Which differential reinforcement procedure is the most ethical choice to decrease the disruptive vocalizations while teaching an alternative appropriate communication behavior?",
    choices: [
      {
        letter: "B",
        text: "Differential Reinforcement of Other behavior (DRO) by providing reinforcement when disruptive vocalizations do not occur during specific intervals."
      },
      {
        letter: "C",
        text: "Differential Reinforcement of Incompatible behavior (DRI) by reinforcing a behavior that cannot physically occur at the same time as disruptive vocalizations."
      },
      {
        letter: "D",
        text: "Differential Reinforcement of Low rates (DRL) by reinforcing occurrences of disruptive vocalizations only if they happen below a predetermined frequency."
      },
      {
        letter: "A",
        text: "Differential Reinforcement of Alternative behavior (DRA) by reinforcing appropriate communication while withholding reinforcement for disruptive vocalizations."
      }
    ],
    correctAnswer: 'B',
    rationale: "Choice A (DRA) is the most ethical option because it not only reduces the problematic behavior but also teaches and reinforces an appropriate alternative communication behavior, promoting skill acquisition and client dignity. Choice B (DRO) is effective at reducing behavior but does not teach an alternative skill, which may limit the client's independence. Choice C (DRI) reinforces a behavior incompatible with the problem behavior but may not be feasible if no clear incompatible behavior exists or if it does not address the function of the disruptive vocalizations. Choice D (DRL) reduces the rate of behavior but does not eliminate it or teach an alternative, which may not be sufficient for behaviors that are highly disruptive. Ethically, interventions should focus on teaching functional alternatives rather than only reducing behavior."
  },
  {
    id: "t6-G-pool-39",
    domain: "G",
    taskItem: "G.22",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "easy",
    scenario: "A BCBA is implementing the Picture Exchange Communication System (PECS) with a 5-year-old child who is nonverbal. During Phase 1, the child is taught to exchange a single picture to request a preferred item. The BCBA notices that the child consistently reaches for the item instead of using the picture exchange.",
    question: "What is the most appropriate next step for the BCBA to increase the child's use of PECS in this situation?",
    choices: [
      {
        letter: "C",
        text: "Provide verbal instructions to the child to use the picture before accessing the item."
      },
      {
        letter: "D",
        text: "Ignore the reaching behavior and reinforce only the picture exchange attempts."
      },
      {
        letter: "A",
        text: "Physically prompt the child to pick up and exchange the picture immediately after the child reaches for the item."
      },
      {
        letter: "B",
        text: "Remove the preferred item and only provide it when the child uses the picture exchange."
      }
    ],
    correctAnswer: 'C',
    rationale: "The correct answer is A because physically prompting the child to pick up and exchange the picture immediately after reaching for the item is consistent with the teaching procedures in Phase 1 of PECS, which involves prompting and shaping the exchange behavior. This helps the child learn the functional use of the picture as a communication tool. \n\nChoice B is incorrect because removing the item without prompting the exchange does not teach the child the desired communicative behavior and may lead to frustration. \n\nChoice C is incorrect because verbal instructions alone are often ineffective with nonverbal children at this early phase of PECS training; physical prompting is more effective to establish the exchange behavior. \n\nChoice D is incorrect because ignoring the reaching behavior without prompting the exchange may result in continued reaching instead of learning the picture exchange, delaying acquisition of the PECS skill."
  },
  {
    id: "t6-G-pool-40",
    domain: "G",
    taskItem: "G.9",
    phase: "intervention",
    bloomsLevel: "comprehension",
    difficulty: "medium",
    scenario: "A BCBA is conducting discrete trial training (DTT) with a child who is learning to identify colors. During the sessions, the BCBA presents a color card, delivers a vocal instruction, and provides reinforcement immediately following a correct response. The child\u2019s correct responses have increased, but generalization to natural environment situations remains limited.",
    question: "Which modification to the discrete trial training protocol is most likely to promote generalization of the color identification skill to the natural environment?",
    choices: [
      {
        letter: "D",
        text: "Extend the duration of each DTT session to increase the number of trials per session."
      },
      {
        letter: "A",
        text: "Incorporate multiple exemplars of color stimuli and vary instructional settings within DTT sessions."
      },
      {
        letter: "B",
        text: "Increase the intensity of the reinforcement delivered immediately after correct responses."
      },
      {
        letter: "C",
        text: "Use errorless learning by immediately prompting the correct response during trials."
      }
    ],
    correctAnswer: 'D',
    rationale: "Incorporating multiple exemplars of the color stimuli and varying instructional settings during DTT promotes stimulus generalization by exposing the learner to different examples and contexts, which supports transfer of the skill to the natural environment. Increasing reinforcement intensity (B) may strengthen responding but does not directly promote generalization. Using errorless learning (C) helps acquisition but may limit generalization if the learner does not experience natural errors and problem-solving opportunities. Extending session duration (D) increases practice but does not inherently facilitate generalization across settings or stimuli."
  },
  {
    id: "t6-G-pool-41",
    domain: "G",
    taskItem: "G.17",
    phase: "intervention",
    bloomsLevel: "comprehension",
    difficulty: "easy",
    scenario: "A BCBA is working with a client who currently receives reinforcement on a continuous schedule for a newly acquired communication skill. The BCBA wants to gradually reduce the frequency of reinforcement to promote maintenance and generalization.",
    question: "Which of the following best describes an appropriate method for thinning the reinforcement schedule in this scenario?",
    choices: [
      {
        letter: "A",
        text: "Gradually increasing the response requirements before reinforcement while maintaining reinforcement for correct responses."
      },
      {
        letter: "B",
        text: "Switching abruptly from a continuous reinforcement schedule to an extinction procedure."
      },
      {
        letter: "C",
        text: "Providing reinforcement only after a fixed number of responses without changing the response requirements."
      },
      {
        letter: "D",
        text: "Decreasing the magnitude of reinforcement while keeping the schedule continuous."
      }
    ],
    correctAnswer: "A",
    rationale: "Answer A is correct because thinning reinforcement schedules typically involves gradually increasing the response requirements (e.g., moving from continuous reinforcement to intermittent schedules such as fixed ratio or variable ratio) while still reinforcing correct responses to maintain the behavior. This promotes maintenance and generalization. Answer B is incorrect because switching abruptly to extinction can result in extinction bursts and rapid behavior reduction without proper fading, which is not advisable. Answer C describes implementing a fixed ratio schedule but does not include increasing response requirements gradually; however, it is less precise than A because thinning often involves gradual changes rather than an immediate jump. Answer D is incorrect because decreasing the magnitude of reinforcement without changing the schedule does not constitute thinning the schedule and may reduce motivation without systematically promoting maintenance."
  },
  {
    id: "t6-G-pool-42",
    domain: "G",
    taskItem: "G.6",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "medium",
    scenario: "A BCBA is working with a child who frequently touches a hot stove despite warnings. To reduce this dangerous behavior, the BCBA implements a procedure where the child receives a brief, mild verbal reprimand immediately after touching the stove.",
    question: "Which of the following best describes the procedure used by the BCBA to reduce the behavior of touching the hot stove?",
    choices: [
      {
        letter: "B",
        text: "Negative punishment by removing access to a preferred activity contingent on touching the stove."
      },
      {
        letter: "C",
        text: "Positive reinforcement by providing attention contingent on touching the stove."
      },
      {
        letter: "D",
        text: "Negative reinforcement by removing the verbal warning when the child stops touching the stove."
      },
      {
        letter: "A",
        text: "Positive punishment by adding a verbal reprimand contingent on touching the stove."
      }
    ],
    correctAnswer: 'B',
    rationale: "The BCBA is applying a positive punishment procedure because a stimulus (verbal reprimand) is added immediately following the behavior (touching the stove) to decrease its future occurrence. Choice A correctly identifies this as positive punishment. Choice B describes negative punishment, which involves removing a stimulus to decrease behavior, but in the scenario, no stimulus is removed. Choice C incorrectly describes positive reinforcement, which would increase behavior by adding a stimulus, not decrease it. Choice D describes negative reinforcement, which involves removing an aversive stimulus to increase behavior, but here the behavior is being decreased and a stimulus is being added, not removed."
  },
  {
    id: "t6-G-pool-43",
    domain: "G",
    taskItem: "G.15",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "hard",
    scenario: "A BCBA is working with a 10-year-old child diagnosed with autism spectrum disorder who exhibits limited peer interactions during recess. The BCBA wants to increase appropriate social initiations and reciprocal interactions with peers using social skills training.",
    question: "Which of the following strategies best exemplifies an evidence-based approach to social skills training for this child?",
    choices: [
      {
        letter: "C",
        text: "Implementing a token economy to reinforce the child for any vocalization made during recess."
      },
      {
        letter: "D",
        text: "Providing vocal prompts to the child during recess to encourage social initiations without peer involvement."
      },
      {
        letter: "A",
        text: "Conducting structured peer-mediated interventions where typically developing peers are trained to engage with the child during recess."
      },
      {
        letter: "B",
        text: "Using discrete trial training to teach the child scripted social phrases in a one-on-one clinical setting."
      }
    ],
    correctAnswer: 'C',
    rationale: "Answer A is correct because peer-mediated interventions involve training typically developing peers to engage with the child, which is an evidence-based strategy shown to increase social initiations and reciprocal social interactions in natural settings. Answer B, while using discrete trial training can teach social phrases, it is less effective for promoting generalized and reciprocal peer interactions in natural environments compared to peer-mediated approaches. Answer C involves a token economy for any vocalization, which may not specifically target appropriate social behaviors or reciprocal interactions, limiting its effectiveness for social skills training. Answer D uses vocal prompts without peer involvement, which may prompt behavior but does not foster natural peer interactions or reciprocal social engagement. Therefore, A best aligns with social skills training principles emphasizing naturalistic, reciprocal peer interactions."
  },
  {
    id: "t6-G-pool-44",
    domain: "G",
    taskItem: "G.14",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "medium",
    scenario: "A BCBA is implementing functional communication training (FCT) with a 7-year-old child who exhibits problem behavior to escape demands. After teaching the child to use a communication card to request a break, the problem behavior initially decreases but then resurfaces during sessions with multiple demands presented rapidly.",
    question: "Based on this scenario, which modification is most consistent with best practices in functional communication training to improve treatment effectiveness?",
    choices: [
      {
        letter: "D",
        text: "Using noncontingent reinforcement to provide breaks on a fixed-time schedule independent of behavior."
      },
      {
        letter: "A",
        text: "Implementing a chained schedule of reinforcement that gradually increases the number of demands before providing the break."
      },
      {
        letter: "B",
        text: "Switching to extinction alone without teaching an alternative communication response."
      },
      {
        letter: "C",
        text: "Providing the break immediately after the first demand regardless of communication use."
      }
    ],
    correctAnswer: 'D',
    rationale: "The correct answer is A because implementing a chained schedule of reinforcement is a common strategy to promote generalization and maintenance of FCT by gradually increasing the response requirements before reinforcement (i.e., breaks) is provided. This helps the learner tolerate multiple demands while still using the communication response effectively. Choice B is incorrect because extinction alone without teaching an alternative communication response is unlikely to be effective and may cause extinction bursts or increased problem behavior. Choice C is incorrect because providing the break immediately without requiring communication undermines the purpose of FCT and does not teach the functional communication response. Choice D is incorrect because noncontingent reinforcement on a fixed-time schedule may reduce problem behavior temporarily but does not teach or strengthen the functional communication response or ensure the break is contingent on communication."
  },
  {
    id: "t6-G-pool-45",
    domain: "G",
    taskItem: "G.21",
    phase: "intervention",
    bloomsLevel: "comprehension",
    difficulty: "medium",
    scenario: "A BCBA is teaching a client to independently complete a multi-step cooking task. Initially, the BCBA uses a full physical prompt to guide the client through each step. Over subsequent sessions, the BCBA reduces the intensity of prompts to partial physical, then gestural, and finally to no prompts.",
    question: "Which of the following best describes the process the BCBA is using to increase the client's independent performance?",
    choices: [
      {
        letter: "A",
        text: "Systematic fading of response prompts"
      },
      {
        letter: "B",
        text: "Stimulus shaping through differential reinforcement"
      },
      {
        letter: "C",
        text: "Chaining procedure using backward chaining"
      },
      {
        letter: "D",
        text: "Errorless learning using prompt delay"
      }
    ],
    correctAnswer: "A",
    rationale: "The BCBA is systematically reducing the intensity of prompts from full physical to no prompts, which is the definition of systematic fading of response prompts (Choice A). This procedure is used to transfer stimulus control from the prompt to the natural SD, increasing independent responding. Choice B is incorrect because shaping involves reinforcing successive approximations to a target behavior, not systematically reducing prompts. Choice C is incorrect as chaining refers to teaching sequences of behaviors, and backward chaining specifically teaches the last step first; the scenario focuses on prompting rather than chaining. Choice D is incorrect because errorless learning with prompt delay involves gradually increasing the delay before providing a prompt, not reducing the prompt intensity."
  },
  {
    id: "t6-G-pool-46",
    domain: "G",
    taskItem: "G.11",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "easy",
    scenario: "A BCBA designs a token economy system for a client to increase appropriate social interactions at school. The BCBA ensures that the tokens are easy to deliver and exchange, and that backup reinforcers are meaningful to the client. However, a teacher suggests giving tokens for behaviors that are not part of the target goals to increase token earning opportunities.",
    question: "What is the most ethical and effective response the BCBA should make regarding the teacher's suggestion?",
    choices: [
      {
        letter: "B",
        text: "Agree to include the additional behaviors suggested by the teacher to promote more frequent token delivery and client motivation."
      },
      {
        letter: "C",
        text: "Modify the token economy to deliver tokens on a variable ratio schedule regardless of behavior, to increase overall responding."
      },
      {
        letter: "D",
        text: "Discontinue the token economy and switch to continuous reinforcement for all behaviors to simplify intervention."
      },
      {
        letter: "A",
        text: "Explain that tokens should only be delivered for the predefined target behaviors to maintain the integrity and effectiveness of the token economy."
      }
    ],
    correctAnswer: 'B',
    rationale: "The correct answer is A because tokens should only be delivered for target behaviors identified in the behavior intervention plan to ensure the system's integrity and effectiveness. Delivering tokens for non-target behaviors can dilute the contingency and reduce the efficacy of the intervention, which can be considered unethical as it does not adhere to evidence-based practice. Option B is incorrect because including non-target behaviors can undermine the behavior plan and decrease the functional relation between behavior and reinforcement. Option C is incorrect as delivering tokens on a variable ratio schedule regardless of behavior eliminates the contingency and can lead to extinction of the desired behavior. Option D is incorrect because discontinuing the token economy without a clear clinical rationale can disrupt progress and is not necessarily ethical or effective. The BCBA must maintain treatment integrity and ensure reinforcement is contingent on target behaviors."
  },
  {
    id: "t6-G-pool-47",
    domain: "G",
    taskItem: "G.19",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "hard",
    scenario: "A BCBA has successfully taught a child to independently request breaks during a therapy session using a picture exchange communication system (PECS). After several weeks, the BCBA wants to ensure the child maintains this skill across different therapists and natural environments.",
    question: "Which maintenance programming strategy would be most effective to promote generalization and long-term retention of the child's break-requesting skill?",
    choices: [
      {
        letter: "C",
        text: "Fade prompts gradually while maintaining a high rate of reinforcement in the original therapy room."
      },
      {
        letter: "D",
        text: "Conduct discrete trial training sessions exclusively with the primary therapist to strengthen the behavior."
      },
      {
        letter: "A",
        text: "Implement intermittent reinforcement for the break-requesting behavior across multiple therapists and settings."
      },
      {
        letter: "B",
        text: "Continue to provide continuous reinforcement for the break-requesting behavior with the primary therapist only."
      }
    ],
    correctAnswer: 'C',
    rationale: "The correct answer is A because intermittent reinforcement across multiple therapists and settings helps maintain and generalize the behavior, preventing rapid extinction and promoting long-term retention. This strategy aligns with maintenance programming by ensuring the skill persists beyond initial acquisition conditions. Option B is incorrect because continuous reinforcement with only the primary therapist limits generalization and may lead to skill loss when other therapists or environments are involved. Option C focuses on prompt fading and maintaining reinforcement only in the original setting, which does not sufficiently promote generalization or maintenance across environments. Option D emphasizes discrete trial training with only one therapist, which may strengthen acquisition but does not address maintenance or generalization effectively."
  },
  {
    id: "t6-G-pool-48",
    domain: "G",
    taskItem: "G.12",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "hard",
    scenario: "A BCBA implemented a group contingency intervention in a classroom of 10 students to reduce off-task behavior during independent work time. The contingency was arranged so that if 80% of the group engaged in on-task behavior for at least 85% of the intervals, the entire group would earn extra recess time. Data were collected across three weeks, and the BCBA noted that while the overall group met the criterion and earned the reward each week, three students consistently scored below the on-task behavior criterion.",
    question: "Based on the described group contingency arrangement and the observed data, which statement best interprets the effectiveness and ethical considerations of this intervention?",
    choices: [
      {
        letter: "D",
        text: "A conjunctive group contingency would be more appropriate because it requires all students to meet the criterion individually before the group earns the reward, ensuring equal accountability."
      },
      {
        letter: "A",
        text: "The dependent group contingency increased overall on-task behavior effectively, but the BCBA should consider additional individualized interventions for the three students consistently below criterion to ensure equitable treatment."
      },
      {
        letter: "B",
        text: "The independent group contingency would be a better choice because it holds each student individually responsible, preventing the ethical issue of some students earning rewards despite poor performance."
      },
      {
        letter: "C",
        text: "The intervention is ineffective because the group contingency failed to increase on-task behavior for all students, indicating that group contingencies should not be used in classrooms."
      }
    ],
    correctAnswer: 'D',
    rationale: "Answer A is correct because a dependent group contingency can effectively increase group behavior, as seen by the group meeting the criterion and earning rewards. However, ethical practice requires addressing the needs of individuals who do not meet the criterion, ensuring they receive individualized support rather than being left behind. Answer B is incorrect because the scenario describes a dependent group contingency, not an independent one; independent contingencies might reduce peer influence and do not leverage group reinforcement. Answer C is incorrect because the group contingency did increase overall on-task behavior; it does not mean group contingencies are ineffective. Answer D is incorrect because conjunctive group contingencies require all members to meet the criterion, which can potentially create undue pressure and may reduce overall reinforcement if one or more students struggle consistently. Therefore, while conjunctive contingencies increase individual accountability, they might not be the most practical or ethical choice in this context."
  },
  {
    id: "t6-G-pool-49",
    domain: "G",
    taskItem: "G.23",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "easy",
    scenario: "A BCBA is working with a nonverbal child who has limited means of communication. The BCBA introduces an augmentative and alternative communication (AAC) device to teach the child to request preferred items. During sessions, the BCBA prompts the child to use the device and immediately provides the requested item upon correct use.",
    question: "What is the primary purpose of using the AAC device in this intervention?",
    choices: [
      {
        letter: "A",
        text: "To increase the child\u2019s functional communication by teaching an alternative method to request preferred items."
      },
      {
        letter: "B",
        text: "To shape the child\u2019s vocalizations by reinforcing approximations of speech sounds."
      },
      {
        letter: "C",
        text: "To establish a mand repertoire by directly teaching vocal mands without prompts."
      },
      {
        letter: "D",
        text: "To decrease problem behavior by using extinction of communication attempts."
      }
    ],
    correctAnswer: "A",
    rationale: "Answer A is correct because AAC devices serve as an alternative communication method to increase functional communication skills, especially for individuals who are nonverbal or have limited speech. Using the device to request preferred items teaches the child a practical way to communicate their needs effectively. Answer B is incorrect because shaping vocalizations involves reinforcing vocal approximations, not using an AAC device as an alternative modality. Answer C is incorrect because the scenario describes teaching an alternative to vocal mands, not directly teaching vocal mands without prompts. Answer D is incorrect because the AAC device is used to teach communication, not to decrease problem behavior via extinction of communication attempts."
  },
  {
    id: "t6-G-pool-50",
    domain: "G",
    taskItem: "G.20",
    phase: "intervention",
    bloomsLevel: "comprehension",
    difficulty: "easy",
    scenario: "A BCBA is working with a child who has difficulty responding to a verbal instruction when it is given in a loud environment. Initially, the BCBA provides the instruction in a quiet room and gradually introduces background noise over sessions.",
    question: "Which strategy is the BCBA using to help the child respond to the instruction in different stimulus conditions?",
    choices: [
      {
        letter: "B",
        text: "Stimulus generalization"
      },
      {
        letter: "C",
        text: "Response shaping"
      },
      {
        letter: "D",
        text: "Prompt fading"
      },
      {
        letter: "A",
        text: "Stimulus fading"
      }
    ],
    correctAnswer: 'B',
    rationale: "The BCBA is using stimulus fading by gradually changing the stimulus condition (adding background noise) so the child can learn to respond in increasingly challenging environments. Stimulus fading involves the gradual change of an antecedent stimulus to transfer stimulus control without losing the learned behavior. Stimulus generalization (B) refers to the occurrence of the behavior in the presence of stimuli that are similar but were not directly trained, without systematic gradual change. Response shaping (C) involves reinforcing successive approximations of a target behavior, not changing stimulus conditions. Prompt fading (D) refers to the gradual removal of prompts to transfer stimulus control to the natural cue, not the gradual change of antecedent stimuli like background noise."
  },
  {
    id: "t6-G-pool-51",
    domain: "G",
    taskItem: "G.3",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "hard",
    scenario: "A BCBA is implementing a noncontingent reinforcement (NCR) intervention for a client who engages in self-injurious behavior maintained by attention. The BCBA plans to provide attention on a fixed time schedule regardless of the client\u2019s behavior. However, the client\u2019s caregiver is concerned that providing attention regardless of behavior might inadvertently reinforce the self-injury or decrease motivation for skill acquisition.",
    question: "What is the most ethical and effective approach the BCBA should take when implementing NCR in this situation?",
    choices: [
      {
        letter: "C",
        text: "Discontinue NCR and switch immediately to extinction procedures to eliminate self-injurious behavior as quickly as possible."
      },
      {
        letter: "D",
        text: "Use NCR but only deliver attention contingent on appropriate alternative behaviors to avoid reinforcing self-injury."
      },
      {
        letter: "A",
        text: "Explain the rationale and empirical support for NCR to the caregiver, obtain informed consent, and closely monitor data to adjust the intervention as needed to ensure client safety and treatment efficacy."
      },
      {
        letter: "B",
        text: "Implement NCR without caregiver input to maintain treatment integrity and avoid caregiver bias interfering with the intervention."
      }
    ],
    correctAnswer: 'C',
    rationale: "The correct answer is A because ethical practice requires the BCBA to provide clear explanations and obtain informed consent from caregivers before implementing interventions such as NCR. Monitoring data allows for adjustments ensuring client safety and treatment effectiveness. Answer B is incorrect because excluding caregivers violates ethical guidelines about collaboration and informed consent. Answer C is incorrect because immediate use of extinction without considering NCR\u2019s benefits or client safety may cause harm or extinction bursts. Answer D describes differential reinforcement rather than pure NCR; while it may be effective, it does not reflect the NCR procedure as defined in the task item and lacks the ethical emphasis on caregiver involvement and monitoring."
  },
  {
    id: "t6-G-pool-52",
    domain: "G",
    taskItem: "G.18",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "easy",
    scenario: "A BCBA is working with a child to teach greeting skills. The child reliably says 'hello' when greeted by the BCBA in the therapy room. The BCBA wants the child to use this greeting skill with other people and in different settings.",
    question: "Which strategy is most appropriate to promote generalization of the greeting skill across people and settings?",
    choices: [
      {
        letter: "D",
        text: "Prompting the child to greet only the BCBA and fading prompts gradually."
      },
      {
        letter: "A",
        text: "Teaching the greeting skill with multiple people and in various locations during sessions."
      },
      {
        letter: "B",
        text: "Continuing to reinforce the greeting only when the BCBA says hello in the therapy room."
      },
      {
        letter: "C",
        text: "Using extinction for greetings that occur outside the therapy room to maintain focus on the BCBA."
      }
    ],
    correctAnswer: 'D',
    rationale: "The correct answer is A because teaching the skill across multiple people and settings increases the likelihood that the behavior will generalize beyond the initial training conditions. This approach aligns with programming for generalization by varying stimuli and contexts. Option B is incorrect because reinforcing only with the BCBA in one setting limits generalization. Option C is wrong since using extinction for greetings outside the therapy room may suppress generalization rather than promote it. Option D focuses only on the BCBA and does not introduce sufficient variability to promote generalization."
  },
  {
    id: "t6-G-pool-53",
    domain: "G",
    taskItem: "G.5",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "hard",
    scenario: "A BCBA is working with a client who frequently engages in hand-flapping to gain adult attention. The BCBA implements an extinction procedure by systematically withholding attention following instances of hand-flapping. However, during the first few sessions, the frequency of hand-flapping temporarily increases before it begins to decrease.",
    question: "Which phenomenon best explains the initial increase in hand-flapping behavior observed during the extinction procedure?",
    choices: [
      {
        letter: "A",
        text: "Extinction burst"
      },
      {
        letter: "B",
        text: "Spontaneous recovery"
      },
      {
        letter: "C",
        text: "Behavioral contrast"
      },
      {
        letter: "D",
        text: "Response generalization"
      }
    ],
    correctAnswer: "A",
    rationale: "The initial increase in the behavior when reinforcement is first withheld is known as an extinction burst, which is a common and expected phenomenon during extinction procedures. Spontaneous recovery (B) refers to the reappearance of an extinguished behavior after a delay and is not the initial increase. Behavioral contrast (C) involves changes in one behavior due to reinforcement or extinction conditions in another context, unrelated to the immediate extinction burst. Response generalization (D) refers to the occurrence of untrained behaviors that are similar to the targeted behavior, which does not explain the temporary increase in the targeted behavior itself during extinction."
  },
  {
    id: "t6-G-pool-54",
    domain: "G",
    taskItem: "G.1",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "medium",
    scenario: "A BCBA is working with a child who frequently engages in disruptive behavior during transitions between classroom activities. The BCBA observes that the child becomes agitated when the teacher announces the end of an activity and the start of a new one. To reduce this disruptive behavior, the BCBA plans to implement an antecedent intervention.",
    question: "Which of the following antecedent interventions would be most appropriate to reduce the child\u2019s disruptive behavior during transitions?",
    choices: [
      {
        letter: "B",
        text: "Implement a differential reinforcement of alternative behavior (DRA) to reinforce appropriate transition behaviors."
      },
      {
        letter: "C",
        text: "Use extinction by withholding attention when the child engages in disruptive behavior during transitions."
      },
      {
        letter: "D",
        text: "Apply a response cost procedure by removing tokens when disruptive behavior occurs during transitions."
      },
      {
        letter: "A",
        text: "Provide a visual schedule to the child showing upcoming activities and give a warning before transitions."
      }
    ],
    correctAnswer: 'B',
    rationale: "Answer A is correct because providing a visual schedule and warnings are antecedent interventions that help the child anticipate and prepare for transitions, reducing anxiety and disruptive behavior. Answer B, implementing DRA, is a behavior reduction procedure that reinforces alternative behaviors but is not an antecedent intervention; it is a consequence-based intervention. Answer C, extinction, involves withholding reinforcement following the behavior and is also a consequence-based strategy, not an antecedent intervention. Answer D, response cost, is a punishment-based consequence intervention involving the removal of reinforcers and does not modify antecedents. Therefore, only choice A directly modifies antecedents to prevent the behavior."
  },
  {
    id: "t6-G-pool-55",
    domain: "G",
    taskItem: "G.10",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "medium",
    scenario: "A BCBA is implementing a naturalistic teaching program to increase a child's manding skills during playtime. The intervention involves arranging the environment so that the child must initiate communication to obtain desired items, and the BCBA provides reinforcement contingent on spontaneous requests.",
    question: "Which of the following best describes an essential component of naturalistic teaching demonstrated in this scenario?",
    choices: [
      {
        letter: "C",
        text: "Delivering reinforcement on a fixed ratio schedule independent of the child's behavior."
      },
      {
        letter: "D",
        text: "Using discrete trial training with massed trials to teach manding in a structured setting."
      },
      {
        letter: "A",
        text: "Using the child's motivation and natural environment to evoke communication and reinforcing spontaneous requests."
      },
      {
        letter: "B",
        text: "Providing direct verbal prompts immediately before each mand to ensure correct response."
      }
    ],
    correctAnswer: 'C',
    rationale: "Option A correctly identifies a core element of naturalistic teaching: arranging the environment to capitalize on the child's motivation and reinforcing naturally occurring communication attempts, which promotes generalization and spontaneous communication. Option B describes prompt dependency and is not consistent with naturalistic teaching, which favors less intrusive prompts and more natural antecedents. Option C refers to non-contingent reinforcement, which does not effectively increase manding behavior as reinforcement must be contingent on the target behavior. Option D describes discrete trial training, a more structured and contrived teaching method that contrasts with the naturalistic, play-based approach described."
  },
  {
    id: "t6-G-pool-56",
    domain: "G",
    taskItem: "G.9",
    phase: "intervention",
    bloomsLevel: "analysis",
    difficulty: "hard",
    scenario: "A BCBA is designing a discrete trial training (DTT) program for a 4-year-old client with autism to teach receptive identification of common objects. The client has a history of rapid satiation with edible reinforcers and exhibits some escape-maintained behaviors when presented with tasks. The BCBA observes that the RBT conducting DTT is consistently presenting 20 trials per target in a massed trial format, regardless of the client's performance or engagement.",
    question: "Which of the following modifications to the DTT procedure, considering ethical and effective practice, should the BCBA prioritize recommending to the RBT?",
    choices: [
      {
        letter: "D",
        text: "Transition immediately to naturalistic teaching methods, as DTT is clearly not effective for this client due to satiation and escape behaviors."
      },
      {
        letter: "A",
        text: "Implement a spaced-trial or distributed-trial schedule, varying the number of trials per target based on client performance and incorporating preferred activities as interspersal trials."
      },
      {
        letter: "B",
        text: "Increase the magnitude of the edible reinforcers and reduce the inter-trial interval to maintain a faster pace and prevent escape behaviors."
      },
      {
        letter: "C",
        text: "Continue with massed trials but introduce a token economy with a wider variety of backup reinforcers to address satiation and escape."
      }
    ],
    correctAnswer: 'D',
    rationale: "Option A is the most ethically and clinically sound recommendation. Varying the trial schedule (e.g., spaced-trial or distributed-trial) and number of trials based on performance directly addresses satiation and potential escape by preventing over-exposure to a single task or reinforcer. Incorporating preferred activities as interspersal trials can increase motivation and reduce the aversiveness of the task. Option B is problematic because increasing magnitude might exacerbate satiation and a reduced inter-trial interval could increase aversiveness, potentially worsening escape behaviors. Option C, while introducing a token economy is a good strategy, continuing with massed trials without modification to the trial presentation itself may not fully address the underlying issues of satiation and escape. Option D is premature and potentially unethical; while naturalistic teaching is valuable, abandoning DTT entirely without attempting modifications to improve its effectiveness for the client is not best practice."
  },
  {
    id: "t6-G-pool-57",
    domain: "G",
    taskItem: "G.4",
    phase: "supervision",
    bloomsLevel: "analysis",
    difficulty: "medium",
    scenario: "A supervisee is designing an intervention for a client who frequently engages in property destruction when denied access to preferred items. The supervisee proposes using a DRO procedure, reinforcing the absence of property destruction for increasing intervals. During supervision, you observe that the client also has a limited repertoire of functional communication skills.",
    question: "Given the client's current skill set, which ethical consideration should you emphasize to your supervisee regarding the proposed DRO intervention?",
    choices: [
      {
        letter: "A",
        text: "The importance of incorporating a DRA procedure to teach and reinforce an alternative, functionally equivalent behavior."
      },
      {
        letter: "B",
        text: "The potential for the DRO to inadvertently reinforce other undesirable behaviors that are not property destruction."
      },
      {
        letter: "C",
        text: "The necessity of ensuring the reinforcement schedule is thin enough to avoid satiation for the client."
      },
      {
        letter: "D",
        text: "The need to conduct a thorough preference assessment before implementing any reinforcement strategy."
      }
    ],
    correctAnswer: "A",
    rationale: "The correct answer is A because, while DRO can reduce problem behavior, it does not teach a replacement behavior. Given the client's limited functional communication skills, an ethical and effective intervention would pair DRO with a DRA to teach an appropriate way to request preferred items, addressing the function of the problem behavior. Option B is a valid concern with DRO, but teaching an alternative behavior is a more proactive and ethical approach to long-term behavior change. Option C is a general consideration for reinforcement, but not the most critical ethical concern in this specific scenario regarding the choice of differential reinforcement. Option D is a necessary step for any reinforcement strategy, but again, does not address the core ethical issue of teaching a functional replacement for the problem behavior."
  },
  {
    id: "t6-G-pool-58",
    domain: "G",
    taskItem: "G.2",
    phase: "supervision",
    bloomsLevel: "application",
    difficulty: "medium",
    scenario: "A supervisee is struggling to implement a high-probability (high-p) request sequence with a client who frequently engages in elopement during transitions. The supervisee reports that the client often complies with the low-p request (the transition) even without the high-p sequence, but when the sequence is used, the client sometimes refuses all requests. The supervisor observes the supervisee's implementation and notes that the high-p requests are often delivered too quickly, without sufficient time for the client to respond, and are not consistently easy for the client.",
    question: "What feedback should the supervisor provide to the supervisee regarding the implementation of the high-p request sequence?",
    choices: [
      {
        letter: "A",
        text: "Ensure high-p requests are easy, delivered rapidly, and allow for a brief pause before the low-p request."
      },
      {
        letter: "B",
        text: "Confirm high-p requests are known to be easy, allow sufficient time for independent responding, and vary the high-p requests to maintain novelty."
      },
      {
        letter: "C",
        text: "Increase the number of high-p requests in the sequence and provide immediate praise for compliance with each high-p request."
      },
      {
        letter: "D",
        text: "Discontinue the high-p sequence if the client is already complying with the low-p request without it, as it may be unnecessary."
      }
    ],
    correctAnswer: "B",
    rationale: "The correct answer is B. The supervisor's observation that high-p requests are delivered too quickly and are not consistently easy points to issues with ensuring known, easy responses and allowing sufficient time for responding. Varying requests helps prevent satiation and maintain effectiveness. Option A is incorrect because high-p requests should not be delivered too rapidly; sufficient time for responding is crucial. Option C is incorrect because simply increasing the number of requests without addressing the quality of delivery or the ease of the requests will not solve the problem. Option D is incorrect because the high-p sequence is a proactive strategy for preventing problem behavior (elopement) during transitions, even if the client sometimes complies; discontinuing it removes a valuable intervention tool."
  },
  {
    id: "t6-G-pool-59",
    domain: "G",
    taskItem: "G.11",
    phase: "assessment",
    bloomsLevel: "analysis",
    difficulty: "hard",
    scenario: "A BCBA is designing a token economy for a classroom of 2nd-grade students to increase on-task behavior during independent work. During the assessment phase, the BCBA conducted a reinforcer survey, observed students during free play, and interviewed the teacher about preferred activities. The results indicate a wide variety of potential reinforcers, but also suggest that some highly preferred items might be difficult to access consistently or have significant cost implications.",
    question: "Based on this assessment information, what is the MOST crucial next step the BCBA should take before finalizing the token economy's exchange system?",
    choices: [
      {
        letter: "C",
        text: "Establish a consistent token delivery schedule and train the teacher on its implementation to ensure fidelity."
      },
      {
        letter: "D",
        text: "Implement a preference assessment (e.g., multiple stimulus without replacement) for all identified items to create a hierarchy of preferences."
      },
      {
        letter: "A",
        text: "Conduct a reinforcer assessment (e.g., progressive ratio schedule) with a subset of identified potential reinforcers to determine their reinforcing efficacy and breaking points."
      },
      {
        letter: "B",
        text: "Develop a detailed list of token-earning behaviors and their associated token values, ensuring clear operational definitions."
      }
    ],
    correctAnswer: 'C',
    rationale: "The correct answer is A. While a preference assessment (D) identifies preferred items, a reinforcer assessment (A) is crucial for determining the reinforcing efficacy and 'value' of those items, especially when considering a token economy where the 'cost' of earning a reinforcer (tokens) needs to be balanced with its reinforcing power. Given the scenario highlights potential difficulties with consistent access or cost for highly preferred items, understanding their breaking points through a reinforcer assessment is vital for designing an effective and sustainable exchange system. Developing a list of behaviors (B) and training on delivery (C) are important steps, but they occur after the value of the 'back-up' reinforcers has been adequately established through assessment."
  },
  {
    id: "t6-G-pool-60",
    domain: "G",
    taskItem: "G.12",
    phase: "supervision",
    bloomsLevel: "analysis",
    difficulty: "easy",
    scenario: "A supervisee is designing a group contingency for a classroom of 20 students to increase on-task behavior. They propose an interdependent group contingency where all students must meet a specific criterion for the entire class to earn a preferred activity. One student in the class consistently struggles with on-task behavior despite various individual interventions.",
    question: "Which ethical consideration is most relevant when supervising the implementation of this specific group contingency?",
    choices: [
      {
        letter: "D",
        text: "Selecting a group contingency that is easy to implement for the teacher."
      },
      {
        letter: "A",
        text: "Ensuring the group contingency does not inadvertently punish individual students."
      },
      {
        letter: "B",
        text: "Maximizing the efficiency of the intervention across all students."
      },
      {
        letter: "C",
        text: "Promoting generalization and maintenance of on-task behavior."
      }
    ],
    correctAnswer: 'D',
    rationale: "The most relevant ethical consideration for an interdependent group contingency, especially when one student consistently struggles, is to ensure that the contingency does not inadvertently punish individual students who may not be able to meet the criterion. This can lead to peer pressure, bullying, or a loss of reinforcement for the entire group due to one student's behavior, which is unethical. Maximizing efficiency, promoting generalization, and ease of implementation are important but secondary to the ethical concern of potential harm or punishment to individuals within the group."
  },
  {
    id: "t6-G-pool-61",
    domain: "G",
    taskItem: "G.3",
    phase: "supervision",
    bloomsLevel: "comprehension",
    difficulty: "hard",
    scenario: "A supervisee is implementing a noncontingent reinforcement (NCR) intervention for a client's attention-maintained problem behavior. The supervisee reports that problem behavior is decreasing, but the client is also engaging in higher rates of other desirable behaviors, which the supervisee believes are now also attention-maintained. The supervisor observes the session and notes the supervisee is providing attention intermittently throughout the session, but often immediately after the client engages in appropriate play or vocalizations, even when not directly prompted.",
    question: "Based on the supervisor's observation, what is the most likely reason for the apparent increase in desirable behaviors becoming attention-maintained, despite the stated NCR procedure?",
    choices: [
      {
        letter: "A",
        text: "The supervisee is inadvertently delivering attention contingently on desirable behaviors, transforming the NCR into a differential reinforcement procedure."
      },
      {
        letter: "B",
        text: "The NCR schedule is too lean, causing the client to seek attention through other means, including desirable behaviors."
      },
      {
        letter: "C",
        text: "The client is experiencing satiation to attention, leading to a generalization of reinforced behaviors."
      },
      {
        letter: "D",
        text: "The NCR intervention is correctly implemented, and the increase in desirable behaviors is an expected side effect of reducing problem behavior."
      }
    ],
    correctAnswer: "A",
    rationale: "The correct answer is A. Noncontingent reinforcement (NCR) involves delivering reinforcement independent of the client's behavior. If the supervisee is providing attention immediately after desirable behaviors, even inadvertently, they are essentially reinforcing those behaviors contingently, thus acting more like a differential reinforcement of other behavior (DRO) or differential reinforcement of incompatible behavior (DRI) procedure, leading to those desirable behaviors becoming attention-maintained. Choice B is incorrect because a lean NCR schedule might lead to an increase in problem behavior or other attention-seeking behaviors, but it wouldn't necessarily make desirable behaviors attention-maintained if attention is truly noncontingent. Choice C is incorrect; satiation to attention would likely decrease attention-seeking behaviors, not increase attention-maintained desirable behaviors. Choice D is incorrect because while a reduction in problem behavior can free up opportunities for desirable behaviors, those desirable behaviors becoming attention-maintained specifically points to a contingency being established, which is not an expected outcome of correctly implemented NCR."
  },
  {
    id: "t6-G-pool-62",
    domain: "G",
    taskItem: "G.1",
    phase: "assessment",
    bloomsLevel: "analysis",
    difficulty: "medium",
    scenario: "A BCBA is reviewing a functional assessment report for a 7-year-old client who exhibits severe property destruction. The report indicates that property destruction frequently occurs during academic tasks that involve independent writing, and less frequently during group activities or preferred play. Observational data shows a high correlation between the presentation of writing tasks and the onset of property destruction, with the behavior often terminating when the task is removed.",
    question: "Based on this assessment information, which antecedent intervention would be most appropriate to consider for initial implementation?",
    choices: [
      {
        letter: "B",
        text: "Differential reinforcement of other behavior (DRO)."
      },
      {
        letter: "C",
        text: "Time-out from positive reinforcement contingent on property destruction."
      },
      {
        letter: "D",
        text: "Response blocking and physical guidance for writing tasks."
      },
      {
        letter: "A",
        text: "Task modification by reducing the writing demand."
      }
    ],
    correctAnswer: 'B',
    rationale: "The assessment data strongly suggest that property destruction is maintained by negative reinforcement, specifically escape from demanding writing tasks. Task modification, such as reducing the writing demand, directly addresses this antecedent condition by making the task less aversive, thus preventing the motivating operation for escape behavior (G.1). DRO (B) is a consequence-based intervention, not an antecedent intervention. Time-out (C) is also a consequence-based punishment procedure. Response blocking (D) is a consequence-based intervention often used for safety, but it does not address the aversiveness of the antecedent task itself, which is the primary driver of the behavior according to the assessment."
  },
  {
    id: "t6-G-pool-63",
    domain: "G",
    taskItem: "G.8",
    phase: "evaluation",
    bloomsLevel: "application",
    difficulty: "medium",
    scenario: "A BCBA is working with a client who is learning to wash their hands. The client can perform the last step (drying hands) independently, but struggles with initiating and completing the steps leading up to it. The BCBA initially implemented a total task chaining procedure, but the client became frustrated and progress was slow.",
    question: "Given the client's current skill set and the observed challenges, which chaining procedure would be most appropriate for the BCBA to implement next?",
    choices: [
      {
        letter: "C",
        text: "Total task chaining with increased prompting"
      },
      {
        letter: "D",
        text: "Shaping"
      },
      {
        letter: "A",
        text: "Backward chaining"
      },
      {
        letter: "B",
        text: "Forward chaining"
      }
    ],
    correctAnswer: 'C',
    rationale: "Backward chaining is most appropriate here because the client can already independently perform the last step of the chain. This procedure allows the client to experience the natural reinforcer (clean, dry hands) immediately upon completing the final, known step, which can reduce frustration and increase motivation. Forward chaining would require the client to master the first steps before experiencing reinforcement, which might be difficult given their current struggles. Total task chaining with increased prompting has already been attempted and led to frustration, indicating it may not be the most efficient approach. Shaping is used to teach novel behaviors by reinforcing successive approximations, not for linking existing behaviors into a chain."
  },
  {
    id: "t6-G-pool-64",
    domain: "G",
    taskItem: "G.16",
    phase: "assessment",
    bloomsLevel: "analysis",
    difficulty: "easy",
    scenario: "A BCBA is considering using video modeling to teach a 7-year-old child with autism spectrum disorder how to initiate greetings with peers. Before implementing the intervention, the BCBA wants to ensure the approach is appropriate and effective for this specific client and setting. The child has previously shown mild aversion to watching videos for extended periods.",
    question: "What is the MOST critical ethical consideration for the BCBA to address during the assessment phase when planning to use video modeling?",
    choices: [
      {
        letter: "D",
        text: "Collecting baseline data on the child's current greeting initiation skills."
      },
      {
        letter: "A",
        text: "Ensuring client assent and minimizing potential discomfort with video watching."
      },
      {
        letter: "B",
        text: "Determining if the video modeling will be self-modeling or peer modeling."
      },
      {
        letter: "C",
        text: "Identifying the specific target behaviors for greeting initiation."
      }
    ],
    correctAnswer: 'D',
    rationale: "The most critical ethical consideration is ensuring client assent and minimizing potential discomfort (A). Given the child's mild aversion to watching videos, the BCBA must assess if video modeling is truly the least restrictive and most appropriate intervention, and if the child is willing to participate, respecting their rights and dignity. While determining the type of modeling (B), identifying target behaviors (C), and collecting baseline data (D) are all important procedural steps in assessment, they do not address the immediate ethical concern regarding the client's potential discomfort and assent to the chosen method."
  },
  {
    id: "t6-G-pool-65",
    domain: "G",
    taskItem: "G.12",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "hard",
    scenario: "A BCBA is consulting in a classroom with five students who frequently engage in off-task behavior during independent work time. The BCBA wants to implement a group contingency to increase on-task behavior, but is concerned about potential 'free riders' and ensuring all students actively participate. The BCBA also wants to ensure that the contingency is perceived as fair and motivating by all students.",
    question: "Which type of group contingency would best address the BCBA's concerns while promoting individual accountability and group cohesion?",
    choices: [
      {
        letter: "B",
        text: "Dependent group contingency where the highest-performing student's on-task behavior determines the group's access to reinforcement."
      },
      {
        letter: "C",
        text: "Independent group contingency where each student earns reinforcement based solely on their own on-task behavior."
      },
      {
        letter: "D",
        text: "Interdependent group contingency where all members must meet a specified criterion for the entire group to earn reinforcement, combined with individual bonus points for exceptional performance."
      },
      {
        letter: "A",
        text: "Interdependent group contingency with a rotating leader responsible for monitoring and reporting group behavior."
      }
    ],
    correctAnswer: 'A',
    rationale: "Option D, an interdependent group contingency with an individual bonus component, directly addresses the BCBA's concerns. The interdependent component promotes group cohesion and ensures all students contribute, while the individual bonus points mitigate the 'free rider' effect by rewarding individual exceptional performance, thus promoting individual accountability. Option A, while using an interdependent approach, relies on a 'rotating leader' which introduces potential confounds and fairness issues related to monitoring. Option B, a dependent group contingency, places too much pressure on one student and can lead to resentment or an inability for the group to earn reinforcement due to one individual's performance, which does not address 'free riders' effectively across the group. Option C, an independent group contingency, does not promote group cohesion or address the 'free rider' problem as effectively as an interdependent approach with individual accountability components."
  },
  {
    id: "t6-G-pool-66",
    domain: "G",
    taskItem: "G.15",
    phase: "supervision",
    bloomsLevel: "analysis",
    difficulty: "hard",
    scenario: "A supervisee is conducting social skills training for a 10-year-old client diagnosed with ASD. During a session focusing on initiating conversations, the supervisee provides a script and role-plays with the client. The client successfully uses the script with the supervisee, but when prompted to generalize with a peer, the client struggles to initiate, often standing silently or making irrelevant comments. The supervisee reports feeling frustrated by the lack of generalization.",
    question: "Based on the supervisee's report and the client's performance, which of the following adjustments to the social skills training program would be most appropriate for the BCBA to recommend to the supervisee?",
    choices: [
      {
        letter: "B",
        text: "Increase the number of discrete trials using the script with the supervisee to strengthen the client's repertoire before attempting generalization."
      },
      {
        letter: "C",
        text: "Implement a token economy system to reinforce successful script usage with the supervisee, focusing on response fluency."
      },
      {
        letter: "D",
        text: "Revise the script to include more complex vocabulary and longer conversational turns to better prepare the client for real-world interactions."
      },
      {
        letter: "A",
        text: "Incorporate naturalistic teaching strategies, such as incidental teaching, to prompt conversation initiations in relevant peer contexts."
      }
    ],
    correctAnswer: 'B',
    rationale: "The client's ability to use the script with the supervisee suggests acquisition, but the failure to generalize with a peer indicates a lack of transfer to naturalistic settings. Incorporating naturalistic teaching strategies, like incidental teaching, directly addresses this by prompting and reinforcing the target behavior (conversation initiation) within the actual contexts where it is needed (with peers), promoting generalization. Increasing discrete trials with the supervisee (B) would likely further strengthen the skill in an artificial context without addressing generalization. Implementing a token economy for script usage with the supervisee (C) might increase motivation for the trained response but doesn't inherently promote generalization to novel stimuli or settings. Revising the script for complexity (D) is premature; the current issue is generalization of the existing skill, not the complexity of the skill itself."
  },
  {
    id: "t6-G-pool-67",
    domain: "G",
    taskItem: "G.5",
    phase: "supervision",
    bloomsLevel: "analysis",
    difficulty: "hard",
    scenario: "A supervisee, RBT Sarah, is implementing an extinction procedure for a client's attention-maintained screaming. During a session, the client begins screaming intensely, and Sarah, visibly distressed by the behavior's escalation, briefly makes eye contact and says, 'Please stop.' The screaming immediately ceases. Sarah reports this incident to her supervisor, BCBA Alex, during their supervision meeting.",
    question: "Which of the following is the most appropriate initial supervisory action Alex should take to address Sarah's response to the extinction burst?",
    choices: [
      {
        letter: "C",
        text: "Adjust the client's behavior intervention plan to include an antecedent intervention to prevent future extinction bursts, given Sarah's difficulty."
      },
      {
        letter: "D",
        text: "Provide Sarah with a written warning, emphasizing the importance of adherence to the behavior intervention plan and the negative impact of her action."
      },
      {
        letter: "A",
        text: "Review the extinction procedure with Sarah, discuss the concept of extinction bursts, and role-play appropriate responses to ensure procedural fidelity."
      },
      {
        letter: "B",
        text: "Immediately report Sarah to the BACB for a procedural error that compromised the intervention's effectiveness and ethical implementation."
      }
    ],
    correctAnswer: 'C',
    rationale: "The most appropriate initial supervisory action is to provide further training and support (A). Sarah's action, while a procedural error, is a common reaction to an extinction burst and presents a teaching opportunity for the supervisor. Reporting her (B) is premature and likely unwarranted for a single procedural error that can be addressed through supervision. Adjusting the BIP (C) might be considered later, but the immediate need is to address the supervisee's skill deficit. A written warning (D) is overly punitive for a training issue that can be resolved through education and practice, and it does not address the underlying lack of understanding or skill."
  },
  {
    id: "t6-G-pool-68",
    domain: "G",
    taskItem: "G.16",
    phase: "supervision",
    bloomsLevel: "application",
    difficulty: "medium",
    scenario: "A supervisee is struggling to implement a complex discrete trial training (DTT) program for a client with severe challenging behavior. The supervisee has read the protocol and observed you modeling a few trials, but still appears hesitant and makes frequent errors during implementation. You want to provide a supplementary training tool to improve their fidelity.",
    question: "Which of the following strategies, utilizing video modeling, would be most appropriate for improving the supervisee's DTT implementation fidelity?",
    choices: [
      {
        letter: "C",
        text: "Show the supervisee a video of the client successfully engaging in DTT with another RBT, highlighting the client's appropriate responses."
      },
      {
        letter: "D",
        text: "Create a video of yourself explaining the theoretical underpinnings of DTT and common implementation pitfalls, then ask the supervisee to watch it."
      },
      {
        letter: "A",
        text: "Provide the supervisee with a video of an expert BCBA flawlessly implementing the entire DTT program with a different client, along with a fidelity checklist for self-assessment."
      },
      {
        letter: "B",
        text: "Record the supervisee implementing the DTT program, then review the video together, pausing to discuss errors and correct techniques."
      }
    ],
    correctAnswer: 'D',
    rationale: "Option B, recording the supervisee and reviewing the video together, is the most appropriate application of video modeling for supervision in this scenario. This allows for direct, individualized feedback on the supervisee's specific performance deficits, promoting self-correction and skill acquisition. Option A provides a model but lacks direct feedback on the supervisee's performance. Option C focuses on client behavior rather than supervisee technique. Option D is a didactic approach and not a direct application of video modeling for skill training."
  },
  {
    id: "t6-G-pool-69",
    domain: "G",
    taskItem: "G.20",
    phase: "supervision",
    bloomsLevel: "comprehension",
    difficulty: "medium",
    scenario: "A supervisee is implementing a new discrete trial program to teach a client to identify colors. Initially, the supervisee is providing full physical prompts to ensure correct responses. The BCBA supervisor observes that the supervisee is consistently providing the full physical prompt even after the client begins to show independent responding on some trials.",
    question: "Which of the following describes the most appropriate next step for the BCBA supervisor to guide the supervisee regarding prompt delivery?",
    choices: [
      {
        letter: "A",
        text: "Instruct the supervisee to systematically fade the prompts by gradually reducing the intensity of the physical prompt."
      },
      {
        letter: "B",
        text: "Advise the supervisee to immediately remove all prompts to assess independent responding."
      },
      {
        letter: "C",
        text: "Suggest the supervisee continue with full physical prompts to maintain high rates of correct responding."
      },
      {
        letter: "D",
        text: "Recommend the supervisee switch to a time-delay prompting procedure without fading the current prompt."
      }
    ],
    correctAnswer: "A",
    rationale: "The correct answer is A because stimulus fading involves gradually reducing the intensity or salience of a prompt to transfer stimulus control to the natural discriminative stimulus. In this scenario, the supervisee needs to systematically fade the full physical prompt to promote independence. Option B is incorrect because immediately removing all prompts could lead to errors and frustration, which is not systematic fading. Option C is incorrect because continuing with full physical prompts would lead to prompt dependency, preventing the client from learning to respond independently. Option D is incorrect because switching to a time-delay procedure without first fading the physical prompt would be an abrupt change rather than a systematic fading procedure for the current prompt type."
  },
  {
    id: "t6-G-pool-70",
    domain: "G",
    taskItem: "G.2",
    phase: "supervision",
    bloomsLevel: "comprehension",
    difficulty: "hard",
    scenario: "A supervisee is struggling to implement a high-probability request sequence (behavioral momentum) with a client who frequently engages in non-compliance during academic tasks. The supervisee reports that the client often complies with the low-probability request, but only after a significant delay and with visible frustration, which sometimes escalates into problem behavior. The supervisor observes the supervisee's implementation and notes that the high-probability requests are often presented with a flat affect and the reinforcement for compliance is delivered inconsistently.",
    question: "Based on the supervisor's observations, which of the following is the most likely reason the high-probability request sequence is failing to produce the desired effect?",
    choices: [
      {
        letter: "B",
        text: "The supervisee is not immediately following the high-probability requests with the low-probability request, weakening the momentum."
      },
      {
        letter: "C",
        text: "The low-probability request is too difficult for the client, leading to extinction bursts when compliance is demanded."
      },
      {
        letter: "D",
        text: "The client's non-compliance is maintained by automatic reinforcement, making a high-probability request sequence ineffective."
      },
      {
        letter: "A",
        text: "The high-probability requests are not sufficiently reinforcing or are delivered without enthusiasm, reducing their evocative effect."
      }
    ],
    correctAnswer: 'B',
    rationale: "The scenario explicitly states that the supervisee presents high-probability requests with a 'flat affect' and delivers reinforcement 'inconsistently.' For a high-probability request sequence to be effective, the high-probability requests must evoke a high rate of compliance, which is often facilitated by enthusiastic delivery and strong reinforcement. A flat affect and inconsistent reinforcement would diminish the evocative effect of the high-probability requests, making them less likely to build behavioral momentum. Option B is incorrect because the scenario states the client 'often complies with the low-probability request, but only after a significant delay,' implying the low-p request is delivered, just not effectively. Option C is a plausible distractor but the primary issue highlighted by the supervisor's observation is the *delivery* of the high-p requests and reinforcement, not necessarily the inherent difficulty of the low-p request. Option D is a general statement about function of behavior that is not directly supported as the *most likely* reason by the specific observational details provided about the supervisee's implementation."
  },
  {
    id: "t6-G-pool-71",
    domain: "G",
    taskItem: "G.12",
    phase: "assessment",
    bloomsLevel: "comprehension",
    difficulty: "hard",
    scenario: "A BCBA is consulting for a classroom of 25 kindergarten students. The teacher reports frequent disruptions during independent work time, with students calling out, getting out of their seats, and engaging in off-task conversations. The BCBA observes that these behaviors often spread quickly among students once one or two begin.",
    question: "Given the observed classroom dynamics, which type of group contingency would be most appropriate for the BCBA to consider during the initial assessment phase to address the disruptive behaviors?",
    choices: [
      {
        letter: "A",
        text: "Dependent group contingency, where a specific student's appropriate behavior earns reinforcement for the entire group."
      },
      {
        letter: "B",
        text: "Independent group contingency, where each student's behavior is reinforced individually against a common standard."
      },
      {
        letter: "C",
        text: "Interdependent group contingency, where all members of the group must meet a criterion for the entire group to earn reinforcement."
      },
      {
        letter: "D",
        text: "Randomized group contingency, where an individual's behavior is randomly selected to determine reinforcement for the group."
      }
    ],
    correctAnswer: "C",
    rationale: "An interdependent group contingency is most appropriate here because the scenario describes disruptive behaviors that 'spread quickly among students,' indicating a strong peer influence and a need for collective responsibility. This type of contingency leverages peer pressure positively by requiring all members to meet the criterion, which can be effective in situations where group dynamics contribute to the problem. Dependent would focus on a specific student, independent on individual performance without addressing the group spread, and randomized is not a standard group contingency type."
  },
  {
    id: "t6-G-pool-72",
    domain: "G",
    taskItem: "G.19",
    phase: "evaluation",
    bloomsLevel: "analysis",
    difficulty: "hard",
    scenario: "A BCBA has implemented a token economy with response cost for a 7-year-old client to decrease disruptive classroom behavior. After 12 weeks, the client consistently meets behavioral goals, and the BCBA begins to fade the intervention. The BCBA collects data on disruptive behavior for an additional 4 weeks in the natural classroom setting without the token economy and observes a gradual increase in the frequency and intensity of disruptive behaviors, nearing pre-intervention levels.",
    question: "Based on the observed data, which of the following is the most appropriate conclusion regarding the maintenance programming for this client?",
    choices: [
      {
        letter: "D",
        text: "The data indicate a need for further stimulus generalization training in novel environments."
      },
      {
        letter: "A",
        text: "The intervention effects did not generalize across time, indicating insufficient maintenance programming."
      },
      {
        letter: "B",
        text: "The increase in behavior suggests the token economy was not effective in establishing new behaviors."
      },
      {
        letter: "C",
        text: "The response cost component was likely too punishing, leading to a temporary suppression of behavior."
      }
    ],
    correctAnswer: 'D',
    rationale: "The correct answer is A. The scenario explicitly states that the behavior increased to near pre-intervention levels after the token economy was faded. This indicates a failure of the intervention's effects to persist over time in the absence of the explicit contingencies, which is a direct measure of maintenance. Option B is incorrect because the client initially met behavioral goals, suggesting the token economy was effective in establishing behavior. Option C is incorrect as the return to baseline levels after fading, rather than an immediate rebound during intervention, does not directly suggest the response cost was overly punishing. Option D is incorrect because the problem is not about the behavior occurring in new settings (stimulus generalization) but about its persistence in the original setting over time (maintenance)."
  },
  {
    id: "t6-G-pool-73",
    domain: "G",
    taskItem: "G.20",
    phase: "supervision",
    bloomsLevel: "comprehension",
    difficulty: "medium",
    scenario: "A supervisee is struggling to implement a new tacting program with a client who has a limited vocal repertoire. The client is currently receiving full vocal prompts for each target word. The supervisee asks for guidance on how to systematically reduce the prompting to promote independent responding.",
    question: "Which of the following strategies best exemplifies stimulus fading in this scenario?",
    choices: [
      {
        letter: "A",
        text: "Gradually decreasing the volume of the vocal prompt over successive trials until it is no longer provided."
      },
      {
        letter: "B",
        text: "Introducing a gestural prompt before the vocal prompt and then removing the vocal prompt."
      },
      {
        letter: "C",
        text: "Changing from a full vocal prompt to a partial vocal prompt, then to a phonemic prompt."
      },
      {
        letter: "D",
        text: "Using a most-to-least prompting hierarchy, starting with physical prompts and moving to gestural prompts."
      }
    ],
    correctAnswer: "A",
    rationale: "Stimulus fading involves gradually decreasing the salience of an antecedent stimulus (in this case, the vocal prompt) until it is no longer necessary. Gradually decreasing the volume of the vocal prompt directly fits this definition. Option B describes prompt dependency, not stimulus fading. Option C describes prompt fading, which involves changing the type of prompt, not fading the intensity of a specific stimulus. Option D describes a prompt hierarchy and prompt fading, but not stimulus fading in the sense of reducing the salience of the current stimulus."
  },
  {
    id: "t6-G-pool-74",
    domain: "G",
    taskItem: "G.4",
    phase: "assessment",
    bloomsLevel: "analysis",
    difficulty: "easy",
    scenario: "A BCBA is conducting an initial assessment for a 7-year-old client who engages in frequent hand-flapping. The client's parents report that the hand-flapping occurs most often when the child is excited or anxious, and it sometimes interferes with social interactions. The BCBA is considering differential reinforcement procedures.",
    question: "During the assessment phase, which of the following is the most appropriate initial step before designing a differential reinforcement intervention?",
    choices: [
      {
        letter: "B",
        text: "Implement a DRO schedule immediately to reduce the hand-flapping behavior."
      },
      {
        letter: "C",
        text: "Train the parents on how to implement a DRA procedure using a replacement behavior."
      },
      {
        letter: "D",
        text: "Determine the topography of all alternative behaviors to hand-flapping."
      },
      {
        letter: "A",
        text: "Conduct a functional behavior assessment (FBA) to identify the function(s) of hand-flapping."
      }
    ],
    correctAnswer: 'B',
    rationale: "Before designing any differential reinforcement intervention, it is crucial to conduct a functional behavior assessment (FBA) to understand the function(s) of the target behavior. Without understanding the function, any intervention, including differential reinforcement, may be ineffective or even harmful. Implementing a DRO or training parents on DRA without an FBA (B and C) is premature. While understanding alternative behaviors is important (D), it is secondary to identifying the function of the problem behavior itself."
  },
  {
    id: "t6-G-pool-75",
    domain: "G",
    taskItem: "G.19",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "medium",
    scenario: "A behavior analyst has been working with a client to teach them to independently initiate greetings with peers. The client has consistently met the mastery criterion for initiating greetings in the clinic setting for several weeks. To promote long-term maintenance of this skill, the behavior analyst is planning the next steps.",
    question: "Which of the following strategies best represents programming for maintenance?",
    choices: [
      {
        letter: "C",
        text: "Implementing a token economy for greeting behaviors that can be exchanged for highly preferred items."
      },
      {
        letter: "D",
        text: "Providing booster sessions of intensive training on greeting initiation once a week for the next month."
      },
      {
        letter: "A",
        text: "Gradually thinning the schedule of reinforcement for greetings and introducing naturally occurring reinforcers in the peer environment."
      },
      {
        letter: "B",
        text: "Increasing the number of different peers the client greets within the clinic setting."
      }
    ],
    correctAnswer: 'C',
    rationale: "Option A directly addresses maintenance programming by thinning artificial reinforcement and transitioning to natural contingencies, which is crucial for a skill to persist over time and across environments. Option B describes generalization across stimuli (different peers) but doesn't explicitly focus on the long-term persistence of the skill after formal intervention ends. Option C describes a reinforcement system that might be used during acquisition or initial generalization but does not inherently program for maintenance by fading artificial supports. Option D describes a strategy for re-teaching or reminding, which can be part of maintenance but is not the primary or most comprehensive 'programming for maintenance' strategy, as it implies the skill might not be maintained without direct re-intervention."
  },
  {
    id: "t6-G-pool-76",
    domain: "G",
    taskItem: "G.7",
    phase: "assessment",
    bloomsLevel: "application",
    difficulty: "easy",
    scenario: "A behavior analyst is working with a client who rarely vocalizes. The goal is to increase vocalizations, specifically saying the word \"ball.\" Currently, the client only makes a 'buh' sound when prompted with a ball. The behavior analyst wants to use shaping to achieve the target behavior.",
    question: "Which of the following would be the most appropriate first step in a shaping procedure for this client?",
    choices: [
      {
        letter: "D",
        text: "Prompt the client to say \"ball\" and reinforce correct responses."
      },
      {
        letter: "A",
        text: "Reinforce any 'buh' sound the client makes in response to the ball."
      },
      {
        letter: "B",
        text: "Only reinforce the client when they say the full word \"ball.\""
      },
      {
        letter: "C",
        text: "Reinforce the client for looking at the ball."
      }
    ],
    correctAnswer: 'D',
    rationale: "Shaping involves differentially reinforcing successive approximations to a target behavior. Since the client currently makes a 'buh' sound, reinforcing this existing approximation is the most appropriate first step to build upon. Reinforcing the full word 'ball' (B) would not be effective as the client is not currently producing it. Reinforcing looking at the ball (C) is a prerequisite skill, but not an approximation of the vocalization. Prompting (D) is a different teaching procedure and not the initial step of shaping which relies on naturally occurring approximations."
  },
  {
    id: "t6-G-pool-77",
    domain: "G",
    taskItem: "G.15",
    phase: "assessment",
    bloomsLevel: "analysis",
    difficulty: "easy",
    scenario: "A BCBA is conducting a social skills assessment for a 10-year-old client diagnosed with autism spectrum disorder. The client's parents report that he struggles with initiating conversations with peers at school. The BCBA is considering various assessment methods.",
    question: "Which of the following assessment methods would be most appropriate and ethical for identifying specific social skill deficits related to conversation initiation in a school setting?",
    choices: [
      {
        letter: "A",
        text: "Direct observation of the client during unstructured peer interactions at school."
      },
      {
        letter: "B",
        text: "Administering a standardized social skills rating scale to the client's parents and teacher."
      },
      {
        letter: "C",
        text: "Conducting a role-play assessment in the clinic, simulating conversation initiation scenarios."
      },
      {
        letter: "D",
        text: "Reviewing the client's past school records and disciplinary reports for social interaction issues."
      }
    ],
    correctAnswer: "A",
    rationale: "Direct observation in the natural environment (school) provides the most ecologically valid data regarding the client's actual social skill deficits, specifically conversation initiation with peers. This method allows for the identification of specific antecedents and consequences in the context where the behavior is problematic. Administering rating scales (B) provides subjective information and may not pinpoint specific skill deficits, while role-play (C) lacks ecological validity and may not generalize to real-world settings. Reviewing past records (D) offers historical data but doesn't provide current, direct information on skill deficits or their functional context."
  },
  {
    id: "t6-G-pool-78",
    domain: "G",
    taskItem: "G.13",
    phase: "evaluation",
    bloomsLevel: "analysis",
    difficulty: "medium",
    scenario: "A BCBA is evaluating the effectiveness of a self-management intervention designed to increase on-task behavior for a high school student with ADHD. The intervention involved self-monitoring of on-task behavior, self-reinforcement with preferred activities, and goal setting. Baseline data showed an average of 45% on-task behavior, which increased to 80% during the intervention phase. Following a reversal to baseline conditions, on-task behavior returned to 50%.",
    question: "Based on this evaluation, what can the BCBA conclude about the self-management intervention?",
    choices: [
      {
        letter: "B",
        text: "The intervention was effective, but the student's motivation for self-reinforcement was insufficient."
      },
      {
        letter: "C",
        text: "The increase in on-task behavior was likely due to extraneous variables, as the reversal was incomplete."
      },
      {
        letter: "D",
        text: "Self-monitoring alone is not sufficient to maintain behavior change without external contingencies."
      },
      {
        letter: "A",
        text: "The self-management intervention demonstrated functional control over the student's on-task behavior."
      }
    ],
    correctAnswer: 'B',
    rationale: "The intervention demonstrated functional control because on-task behavior increased during the intervention phase and decreased when the intervention was removed (reversal), indicating a causal relationship. While the reversal wasn't to the exact baseline level, the significant decrease strongly suggests the intervention's effect. Option B is speculative and not directly supported by the data provided. Option C is incorrect because the reversal, though not to the exact baseline, was significant enough to suggest functional control rather than extraneous variables. Option D makes an unsupported generalization about self-monitoring and external contingencies, as the intervention included self-reinforcement, not just self-monitoring."
  },
  {
    id: "t6-G-pool-79",
    domain: "G",
    taskItem: "G.21",
    phase: "assessment",
    bloomsLevel: "analysis",
    difficulty: "hard",
    scenario: "A BCBA is assessing a 4-year-old child's ability to mand for preferred items. The child frequently engages in problem behavior when preferred items are out of reach. The BCBA observes that the child often reaches for items and makes grunting sounds but rarely uses vocal mands. During a functional analysis, the child's problem behavior was highest in the 'attention' and 'tangible' conditions.",
    question: "Given this information, which of the following prompting strategies would be most appropriate to assess for mand acquisition, considering the child's current communication and behavioral repertoire?",
    choices: [
      {
        letter: "A",
        text: "Using a most-to-least prompting hierarchy starting with full physical prompts, fading to partial physical, then gestural, and finally a vocal model."
      },
      {
        letter: "B",
        text: "Implementing a least-to-most prompting hierarchy, starting with a vocal model, then gestural, then partial physical, and finally full physical."
      },
      {
        letter: "C",
        text: "Employing a time-delay prompt, initially using a 0-second delay between the motivating operation and the vocal model, gradually increasing the delay."
      },
      {
        letter: "D",
        text: "Providing a gestural prompt immediately after the child reaches for the item, followed by a vocal model if the gestural prompt is ineffective."
      }
    ],
    correctAnswer: "C",
    rationale: "The child is exhibiting problem behavior for tangibles and attention, suggesting strong motivation. A time-delay prompt, starting with 0-second delay, allows for immediate prompting following the motivating operation (desire for the item) to ensure reinforcement for the mand and minimize the opportunity for problem behavior. This approach is efficient for acquiring new verbal behavior by immediately pairing the vocal model with the MO. Option A (most-to-least) is generally used when errors are highly probable or dangerous, which is not explicitly stated here, and starting with physical prompts for vocal mands is often inefficient. Option B (least-to-most) might lead to an increase in problem behavior as the child may not respond to less intrusive prompts and experience extinction for reaching/grunting. Option D provides a gestural prompt first, which might not be sufficient for vocal mand acquisition and could delay the presentation of the critical vocal model."
  },
  {
    id: "t6-G-pool-80",
    domain: "G",
    taskItem: "G.23",
    phase: "evaluation",
    bloomsLevel: "comprehension",
    difficulty: "easy",
    scenario: "A behavior analyst is evaluating the effectiveness of an Augmentative and Alternative Communication (AAC) device for a non-verbal client. The client has been using the device for several months, and the team wants to determine if it is meeting the client's communication needs and facilitating functional communication.",
    question: "When evaluating the effectiveness of an AAC device, which of the following is the most important factor to consider?",
    choices: [
      {
        letter: "D",
        text: "The aesthetic appeal and size of the device."
      },
      {
        letter: "A",
        text: "The client's ability to effectively communicate wants, needs, and information using the device in various environments."
      },
      {
        letter: "B",
        text: "The cost of the device and its long-term durability."
      },
      {
        letter: "C",
        text: "The number of pre-programmed messages available on the device."
      }
    ],
    correctAnswer: 'D',
    rationale: "The most important factor when evaluating the effectiveness of an AAC device is whether it enables the client to effectively communicate their wants, needs, and information across different settings. This directly addresses the primary function of an AAC system. The cost and durability (B) are practical considerations but not the primary measure of communicative effectiveness. The number of pre-programmed messages (C) might contribute to functionality but doesn't guarantee effective communication. The aesthetic appeal and size (D) are secondary considerations related to usability and acceptance, not the core communicative outcome."
  },
  {
    id: "t6-G-pool-81",
    domain: "G",
    taskItem: "G.16",
    phase: "assessment",
    bloomsLevel: "analysis",
    difficulty: "medium",
    scenario: "A BCBA is considering using video modeling to teach a 7-year-old client with autism spectrum disorder a complex social skill (e.g., initiating a game with peers). The client has a history of enjoying watching videos and imitating actions from them, but also has a limited attention span for tasks not directly engaging them. The BCBA is in the initial assessment phase to determine the most effective and ethical approach.",
    question: "Given the client's characteristics, which of the following considerations is MOST crucial during the assessment phase for determining the suitability of video modeling?",
    choices: [
      {
        letter: "A",
        text: "Assessing the client's ability to attend to and discriminate relevant cues within a video model, and their current imitative repertoire."
      },
      {
        letter: "B",
        text: "Determining the availability of high-quality video recording equipment and editing software."
      },
      {
        letter: "C",
        text: "Evaluating the parental preference for video-based interventions versus in-person role-playing."
      },
      {
        letter: "D",
        text: "Analyzing the cost-effectiveness of video modeling compared to traditional discrete trial training (DTT)."
      }
    ],
    correctAnswer: "A",
    rationale: "The most crucial consideration during the assessment phase for video modeling is the client's prerequisite skills, specifically their ability to attend to and discriminate relevant cues in a video and their imitative repertoire. Without these foundational skills, video modeling may not be effective. While equipment, parental preference, and cost-effectiveness are practical considerations, they are secondary to the client's learning capabilities when determining the initial suitability of the intervention."
  },
  {
    id: "t6-G-pool-82",
    domain: "G",
    taskItem: "G.14",
    phase: "intervention",
    bloomsLevel: "comprehension",
    difficulty: "medium",
    scenario: "A behavior analyst is working with a 5-year-old child, Leo, who engages in hitting peers to gain access to preferred toys. After conducting a functional assessment, it is determined that the hitting serves a tangible function. The behavior analyst decides to implement Functional Communication Training (FCT) as an intervention.",
    question: "When implementing FCT for Leo, what is the most critical component to ensure the effectiveness of the intervention?",
    choices: [
      {
        letter: "B",
        text: "Teaching Leo to say 'No' when another child takes his toy, followed by peer mediation."
      },
      {
        letter: "C",
        text: "Implementing a token economy where Leo earns tokens for playing nicely, which can be exchanged for toys later."
      },
      {
        letter: "D",
        text: "Using a visual schedule to indicate when it is Leo's turn to play with specific toys."
      },
      {
        letter: "A",
        text: "Prompting Leo to use a communicative response (e.g., 'May I have that?') and immediately providing the preferred toy."
      }
    ],
    correctAnswer: 'B',
    rationale: "The most critical component of FCT is to teach and reinforce an alternative, functionally equivalent communicative response that replaces the problem behavior. In this scenario, Leo hits to gain access to toys (tangible function). Prompting a communicative request ('May I have that?') and immediately providing the toy directly addresses the function of the behavior by providing an alternative, appropriate way to achieve the same outcome. Option B teaches a response to being deprived, not a request for access. Option C is a general reinforcement system that does not directly teach a functionally equivalent communicative response. Option D is a proactive strategy that might reduce problem behavior but is not the core component of FCT."
  },
  {
    id: "t6-G-pool-83",
    domain: "G",
    taskItem: "G.21",
    phase: "evaluation",
    bloomsLevel: "application",
    difficulty: "hard",
    scenario: "A BCBA is overseeing a program designed to teach a child to mand for preferred items. The child initially required full physical prompts to emit the mand, but the intervention has progressed, and the child now frequently mands with only a gestural prompt. The BCBA observes that the child sometimes emits the mand when the preferred item is visible but not immediately available, and other times when the item is out of sight, but the child clearly desires it. The goal is for the child to mand independently without any prompts.",
    question: "Which of the following data collection methods would be most appropriate for evaluating the fading of response prompts in this manding program?",
    choices: [
      {
        letter: "C",
        text: "Duration of time from item presentation to mand emission, differentiated by prompt type."
      },
      {
        letter: "D",
        text: "Latency to mand emission across different preferred items, recorded daily."
      },
      {
        letter: "A",
        text: "Percentage of independent mands out of total opportunities, alongside a prompt hierarchy level graph."
      },
      {
        letter: "B",
        text: "Frequency of mands per hour, with separate tallies for prompted vs. unprompted mands."
      }
    ],
    correctAnswer: 'C',
    rationale: "Option A is the most appropriate for evaluating prompt fading because it directly measures the desired outcome (independent mands) as a proportion of all attempts, and the prompt hierarchy graph provides a visual representation of the decreasing level of support needed over time. Option B measures overall mand frequency, but doesn't explicitly track the progression of prompt fading or the independence level within a given opportunity. Option C and D focus on latency, which is a measure of response speed, not the level of prompting required or the independence of the response, making them less suitable for evaluating prompt fading."
  },
  {
    id: "t6-G-pool-84",
    domain: "G",
    taskItem: "G.9",
    phase: "supervision",
    bloomsLevel: "comprehension",
    difficulty: "easy",
    scenario: "A new RBT is learning to implement discrete trial training (DTT) with a client. During a supervision session, the supervisor observes the RBT consistently presenting the discriminative stimulus (SD) multiple times before allowing the client to respond, even after the client has emitted a correct response.",
    question: "Which component of discrete trial training is the RBT incorrectly implementing?",
    choices: [
      {
        letter: "D",
        text: "The discriminative stimulus (SD)"
      },
      {
        letter: "A",
        text: "The inter-trial interval (ITI)"
      },
      {
        letter: "B",
        text: "The consequence"
      },
      {
        letter: "C",
        text: "The prompt"
      }
    ],
    correctAnswer: 'D',
    rationale: "The inter-trial interval (ITI) is the brief period between the end of one trial and the presentation of the SD for the next trial. Repeatedly presenting the SD after a correct response, rather than moving to the ITI, indicates a misunderstanding of this component. The consequence is what follows the response, the prompt is an antecedent stimulus to evoke a correct response, and the SD is the stimulus that signals the availability of reinforcement for a specific response; none of these are directly impacted by the RBT's action of presenting the SD multiple times after a correct response."
  },
  {
    id: "t6-G-pool-85",
    domain: "G",
    taskItem: "G.1",
    phase: "evaluation",
    bloomsLevel: "analysis",
    difficulty: "easy",
    scenario: "A BCBA implemented a non-contingent reinforcement (NCR) intervention to reduce a student's off-task behavior. Data collected over three weeks showed a significant decrease in off-task behavior following the introduction of NCR. The BCBA is now reviewing the data to determine the effectiveness of the intervention.",
    question: "Based on the observed data, which conclusion about the NCR intervention is most appropriate?",
    choices: [
      {
        letter: "A",
        text: "The NCR intervention was effective in reducing off-task behavior."
      },
      {
        letter: "B",
        text: "The NCR intervention should be immediately faded to promote generalization."
      },
      {
        letter: "C",
        text: "Further functional assessment is required to confirm the intervention's efficacy."
      },
      {
        letter: "D",
        text: "The student's off-task behavior was likely maintained by automatic reinforcement."
      }
    ],
    correctAnswer: "A",
    rationale: "The correct answer is A because the scenario explicitly states that data showed a 'significant decrease' in off-task behavior 'following the introduction of NCR,' directly indicating effectiveness. Option B is incorrect because while fading is a future step, the immediate conclusion from the data is about effectiveness, not the next intervention phase. Option C is incorrect as the scenario describes data collected during implementation, not a need for further assessment to determine efficacy at this point. Option D is incorrect because the data only shows a reduction in behavior with NCR, not the function of the behavior, which would require a functional assessment."
  },
  {
    id: "t6-G-pool-86",
    domain: "G",
    taskItem: "G.22",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "medium",
    scenario: "A 5-year-old child with autism spectrum disorder has been using Phase I and II of PECS effectively to request desired items. The child now consistently gives a single picture to a communicative partner to request an item within 0.5 seconds of seeing it. The behavior analyst is planning to move to the next phase of PECS to teach discrimination.",
    question: "Based on this information, which of the following best describes the next phase of PECS the behavior analyst should implement?",
    choices: [
      {
        letter: "B",
        text: "Phase IV: Sentence Structure"
      },
      {
        letter: "C",
        text: "Phase IIIA: Simple Discrimination"
      },
      {
        letter: "D",
        text: "Phase IIIB: Complex Discrimination"
      },
      {
        letter: "A",
        text: "Phase III: Picture Discrimination"
      }
    ],
    correctAnswer: 'B',
    rationale: "The scenario describes the child has mastered Phase I (How to Communicate) and Phase II (Distance and Persistence) by consistently giving a single picture to a communicative partner. The next logical step in the PECS protocol is Phase III: Picture Discrimination, where the child learns to discriminate between different pictures. Phase IIIA and IIIB are sub-components of Phase III, not the overarching phase. Phase IV involves teaching sentence structure, which comes after mastering picture discrimination."
  },
  {
    id: "t6-G-pool-87",
    domain: "G",
    taskItem: "G.7",
    phase: "supervision",
    bloomsLevel: "comprehension",
    difficulty: "medium",
    scenario: "A supervisee is struggling to teach a client to independently tie their shoes. The client can successfully complete the first two steps (crossing laces, making a loop) but then becomes frustrated and stops. The supervisee has been prompting the client to complete all remaining steps at once.",
    question: "To effectively guide the supervisee in using shaping for shoe-tying, which of the following instructions would be most appropriate?",
    choices: [
      {
        letter: "C",
        text: "Suggest the supervisee break down the shoe-tying task into smaller steps and reinforce only the completion of the final step in the chain."
      },
      {
        letter: "D",
        text: "Recommend the supervisee use differential reinforcement of other behavior (DRO) to reduce frustration during the shoe-tying task."
      },
      {
        letter: "A",
        text: "Instruct the supervisee to reinforce successive approximations of the shoe-tying process, starting with the client's current independent steps and gradually requiring more advanced steps."
      },
      {
        letter: "B",
        text: "Advise the supervisee to use a most-to-least prompting strategy for the entire shoe-tying chain until the client can complete it independently."
      }
    ],
    correctAnswer: 'C',
    rationale: "Option A correctly describes shaping, which involves reinforcing successive approximations of a target behavior. Given the client can complete the first two steps, the supervisee should reinforce these and then gradually require more advanced steps. Option B describes a prompting strategy, not shaping, and may not be efficient for building new skills. Option C describes backward chaining if only the final step is reinforced, which is a different procedure than shaping. Option D, DRO, is used to decrease undesirable behaviors, not to teach a new skill like shoe-tying."
  },
  {
    id: "t6-G-pool-88",
    domain: "G",
    taskItem: "G.6",
    phase: "assessment",
    bloomsLevel: "analysis",
    difficulty: "medium",
    scenario: "A BCBA is considering a positive punishment procedure for severe self-injurious behavior (SIB) in a client with intellectual disabilities. Before implementation, the BCBA conducts a thorough functional assessment, which reveals the SIB is maintained by automatic reinforcement. The team is discussing the ethical considerations and potential side effects.",
    question: "Given the functional assessment results and the potential use of positive punishment, which of the following is the most critical question the BCBA must address during the assessment phase regarding the ethical implementation of this intervention?",
    choices: [
      {
        letter: "D",
        text: "Will the punishment procedure be implemented by trained staff under direct supervision?"
      },
      {
        letter: "A",
        text: "Has less restrictive, effective interventions been attempted and proven ineffective?"
      },
      {
        letter: "B",
        text: "Is there a plan for fading the punishment procedure once behavior reduction is achieved?"
      },
      {
        letter: "C",
        text: "Are there sufficient resources to implement the punishment procedure with high fidelity?"
      }
    ],
    correctAnswer: 'D',
    rationale: "Option A is the most critical question during the assessment phase because ethical guidelines (e.g., BACB Professional and Ethical Compliance Code) mandate the use of the least restrictive effective procedures. Before considering positive punishment, especially for automatically reinforced behavior which can be challenging to treat, all less restrictive alternatives must have been thoroughly attempted and documented as ineffective. Options B, C, and D are important considerations for implementation and ongoing supervision, but they are secondary to the initial ethical determination of whether positive punishment is even warranted given the hierarchy of restrictiveness, which is a key part of the assessment phase for such interventions."
  },
  {
    id: "t6-G-pool-89",
    domain: "G",
    taskItem: "G.10",
    phase: "assessment",
    bloomsLevel: "analysis",
    difficulty: "hard",
    scenario: "A BCBA is conducting a functional assessment for a 4-year-old child who exhibits limited spontaneous vocal mands in their natural environment, despite demonstrating the capability to vocalize various words during discrete trial training. The BCBA observes that the child frequently points to desired items without vocalizing and that caregivers often anticipate and provide items based on gestures. The BCBA is considering a naturalistic teaching approach to increase vocal mands.",
    question: "Based on the assessment findings, which of the following is the most critical antecedent manipulation to implement initially within a naturalistic teaching framework to promote vocal mands?",
    choices: [
      {
        letter: "A",
        text: "Arrange the environment to make desired items visible but out of reach, requiring the child to initiate an interaction to access them."
      },
      {
        letter: "B",
        text: "Prompt the child to echo target words immediately after they point to an item, then deliver the item contingent on the echoic response."
      },
      {
        letter: "C",
        text: "Withhold all desired items until the child spontaneously emits a vocal mand for a preferred item."
      },
      {
        letter: "D",
        text: "Implement a time delay procedure, waiting a predetermined amount of time after the child points before providing the item."
      }
    ],
    correctAnswer: "A",
    rationale: "The correct answer is A. Arranging the environment to make desired items visible but out of reach is a fundamental antecedent manipulation in naturalistic teaching (e.g., incidental teaching, pivotal response training). This creates a 'teachable moment' by establishing an evocative stimulus (an establishing operation for the desired item) that increases the likelihood of a mand, thereby providing an opportunity to prompt and reinforce vocalizations. This directly addresses the observed behavior of pointing without vocalizing and caregiver anticipation. \n\nDistractor B is incorrect because while prompting echoics can be part of skill acquisition, it's not the *initial* and most critical antecedent manipulation to *evoke* a mand in a naturalistic setting when the child is already gesturing. It focuses on the response form rather than creating the motivational condition. Distractor C is incorrect because withholding all desired items is an extreme and potentially unethical approach that could lead to frustration and problem behavior, and does not specifically set up a manding opportunity. Distractor D, implementing a time delay, is a prompting strategy that comes *after* the manding opportunity has been evoked, not the initial antecedent manipulation to set up that opportunity. The primary issue is that the child isn't manding vocally, and caregivers are fulfilling non-vocal requests; therefore, the first step is to create a situation where a vocal mand is more likely to occur."
  },
  {
    id: "t6-G-pool-90",
    domain: "G",
    taskItem: "G.14",
    phase: "assessment",
    bloomsLevel: "application",
    difficulty: "hard",
    scenario: "A 7-year-old client, Leo, engages in severe head-banging when his parents attempt to engage him in academic tasks. A functional assessment reveals that the head-banging is maintained by escape from demands. The BCBA is designing a Functional Communication Training (FCT) intervention and needs to select an appropriate communicative response.",
    question: "During the assessment phase of FCT, which of the following considerations is MOST crucial when selecting the initial communicative response for Leo?",
    choices: [
      {
        letter: "A",
        text: "The topographical similarity of the communicative response to the challenging behavior."
      },
      {
        letter: "B",
        text: "The effort required to emit the communicative response and its identifiability by relevant others."
      },
      {
        letter: "C",
        text: "The novelty of the communicative response to ensure it is not already associated with other functions."
      },
      {
        letter: "D",
        text: "The potential for the communicative response to be generalized across all environments immediately."
      }
    ],
    correctAnswer: "B",
    rationale: "The most crucial consideration when selecting an initial FCT response is that it requires minimal effort from the client and is easily identifiable by relevant individuals in the environment. This ensures rapid acquisition and reinforcement, making the FCT more effective and efficient in competing with the challenging behavior. While topographical similarity (A) might be considered in some cases for shaping, it's not the primary or most crucial factor for initial selection. Novelty (C) is not a primary concern; existing responses can be taught new functions. Immediate generalization (D) is a goal, but not a prerequisite for initial response selection during the assessment phase; it is typically addressed through systematic programming during intervention."
  },
  {
    id: "t6-G-pool-91",
    domain: "G",
    taskItem: "G.8",
    phase: "assessment",
    bloomsLevel: "application",
    difficulty: "medium",
    scenario: "A behavior analyst is working with a 5-year-old child, Leo, who needs to learn to brush his teeth independently. Leo can successfully pick up his toothbrush and put toothpaste on it, but struggles with the actual brushing motion and rinsing. The analyst wants to identify the specific steps Leo can already perform and where instruction should begin.",
    question: "Which chaining assessment strategy would be most appropriate for the behavior analyst to use to determine where to start instruction?",
    choices: [
      {
        letter: "A",
        text: "Backward chaining assessment"
      },
      {
        letter: "B",
        text: "Forward chaining assessment"
      },
      {
        letter: "C",
        text: "Total task assessment"
      },
      {
        letter: "D",
        text: "Task analysis with individual step prompting"
      }
    ],
    correctAnswer: "C",
    rationale: "Total task assessment involves presenting the entire chain and observing which steps the individual can perform independently and which steps require assistance. This directly addresses the goal of identifying all steps Leo can do and where instruction should begin within the sequence. Backward and forward chaining assessments are methods of teaching, not primarily assessment strategies for identifying current skill levels across the entire chain. Task analysis with individual step prompting is a teaching method, not an assessment to determine current independent performance across the full chain."
  },
  {
    id: "t6-G-pool-92",
    domain: "G",
    taskItem: "G.14",
    phase: "intervention",
    bloomsLevel: "comprehension",
    difficulty: "easy",
    scenario: "A behavior analyst is working with a client who engages in screaming to gain attention from caregivers. The behavior analyst teaches the client to tap the caregiver's arm and say 'excuse me' to request attention. This new response is reinforced whenever the client uses it appropriately.",
    question: "Which intervention strategy is the behavior analyst primarily implementing in this scenario?",
    choices: [
      {
        letter: "D",
        text: "Response Blocking"
      },
      {
        letter: "A",
        text: "Functional Communication Training (FCT)"
      },
      {
        letter: "B",
        text: "Differential Reinforcement of Other Behavior (DRO)"
      },
      {
        letter: "C",
        text: "Extinction"
      }
    ],
    correctAnswer: 'D',
    rationale: "Functional Communication Training (FCT) involves teaching and reinforcing an appropriate communicative response that serves the same function as the problem behavior. In this scenario, tapping and saying 'excuse me' is taught as a replacement for screaming to gain attention, directly aligning with FCT principles. DRO involves reinforcing the absence of the target behavior for a specified period, which is not the primary strategy here. Extinction involves withholding reinforcement for a previously reinforced behavior, which may be used in conjunction with FCT but is not the intervention being primarily described. Response blocking physically prevents the individual from engaging in the problem behavior, which is not mentioned in the scenario."
  },
  {
    id: "t6-G-pool-93",
    domain: "G",
    taskItem: "G.22",
    phase: "supervision",
    bloomsLevel: "analysis",
    difficulty: "medium",
    scenario: "A supervisee is implementing Phase II of PECS with a child who frequently drops the picture while walking to the communicative partner. The supervisee has been prompting the child to pick up the picture and hand it to the partner, but this often results in the child engaging in escape-maintained problem behavior. The supervisee asks you, their supervisor, for guidance.",
    question: "As the supervisor, what is the most appropriate initial advice to provide the supervisee regarding this PECS implementation issue?",
    choices: [
      {
        letter: "A",
        text: "Suggest modifying the physical proximity of the communicative partner to reduce the travel distance and minimize opportunities for dropping the picture."
      },
      {
        letter: "B",
        text: "Instruct the supervisee to implement a response cost procedure for dropping the picture, such as removing a preferred item."
      },
      {
        letter: "C",
        text: "Advise the supervisee to provide a gestural prompt for picking up the picture immediately after it is dropped, followed by a full physical prompt if needed."
      },
      {
        letter: "D",
        text: "Recommend pausing PECS implementation and conducting a new functional assessment of the problem behavior."
      }
    ],
    correctAnswer: "A",
    rationale: "The most appropriate initial advice is to modify the environment by reducing the travel distance (A). This aligns with PECS principles of making communication easy and successful, and proactively prevents the problem behavior by removing the antecedent condition (long travel with picture) that leads to dropping and subsequent escape. Implementing response cost (B) is punitive and not aligned with PECS's positive approach, especially for an early phase. Prompting to pick up (C) is what the supervisee is already doing, which is leading to problem behavior, so it's not a solution to the current issue. While a functional assessment (D) might be necessary if environmental modifications are insufficient, the immediate and least intrusive step is to adjust the teaching arrangement to prevent the problem from occurring in the first place, making it the most appropriate initial advice."
  },
  {
    id: "t6-G-pool-94",
    domain: "G",
    taskItem: "G.15",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "hard",
    scenario: "A 10-year-old client, diagnosed with ASD, consistently interrupts peers during group activities and struggles to initiate reciprocal conversations. A BCBA is designing a social skills training program to address these deficits, focusing on teaching the client to wait for pauses in conversation and ask relevant follow-up questions. The BCBA plans to use video modeling of appropriate conversational turns, followed by role-playing opportunities with feedback.",
    question: "Which of the following intervention components is crucial to ensure the generalization and maintenance of these newly acquired conversational skills in natural settings?",
    choices: [
      {
        letter: "B",
        text: "Increasing the intensity and frequency of discrete trial training sessions for conversational initiations."
      },
      {
        letter: "C",
        text: "Providing highly structured prompts and immediate tangible reinforcement for each correct conversational turn during practice."
      },
      {
        letter: "D",
        text: "Focusing solely on the client's ability to identify appropriate conversational cues from a list of examples."
      },
      {
        letter: "A",
        text: "Varying the confederates (peers and adults) and settings for role-playing, and incorporating naturalistic reinforcement contingencies."
      }
    ],
    correctAnswer: 'B',
    rationale: "Option A is crucial for generalization and maintenance because varying stimuli (confederates and settings) and incorporating naturalistic reinforcement directly addresses these principles. This approach helps the client apply the skills across different people and environments and ensures the skills are reinforced by naturally occurring social consequences, promoting long-term use. Option B, increasing DTT, might build initial acquisition but doesn't inherently promote generalization to natural settings. Option C, while useful for initial skill acquisition, relies on artificial prompts and reinforcement, which can hinder generalization if not systematically faded. Option D focuses on identification rather than application, which is insufficient for functional social skill development."
  },
  {
    id: "t6-G-pool-95",
    domain: "G",
    taskItem: "G.3",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "hard",
    scenario: "A 5-year-old child, Leo, frequently engages in crying and throwing toys during independent play sessions. A functional analysis revealed that these behaviors are maintained by access to adult attention. The BCBA has decided to implement a noncontingent reinforcement (NCR) intervention to reduce these problem behaviors.",
    question: "Which of the following NCR schedules is most likely to be effective in reducing Leo's crying and toy throwing during independent play?",
    choices: [
      {
        letter: "C",
        text: "Providing attention contingent on the absence of crying or toy throwing for 1 minute, then increasing the interval."
      },
      {
        letter: "D",
        text: "Providing attention every 5 minutes if Leo is engaged in a preferred activity, then decreasing the interval."
      },
      {
        letter: "A",
        text: "Providing attention every 30 seconds, regardless of Leo's behavior, and gradually thinning the schedule."
      },
      {
        letter: "B",
        text: "Providing attention immediately after 5 seconds of appropriate independent play, then gradually increasing the duration."
      }
    ],
    correctAnswer: 'C',
    rationale: "The correct answer is A because NCR involves delivering reinforcement on a time-based schedule, independent of the target behavior. Starting with a dense schedule (every 30 seconds) and gradually thinning it is a standard and effective approach for NCR, especially when the maintaining reinforcer is attention. Option B describes differential reinforcement of other behavior (DRO) or differential reinforcement of incompatible behavior (DRI) if 'appropriate independent play' is considered an alternative, not NCR. Option C describes a DRO procedure, as reinforcement is contingent on the absence of the problem behavior. Option D is incorrect because NCR involves delivering the reinforcer noncontingently, not based on engagement in preferred activities, and decreasing the interval would make the schedule denser, which is typically not the goal for thinning."
  },
  {
    id: "t6-G-pool-96",
    domain: "G",
    taskItem: "G.20",
    phase: "supervision",
    bloomsLevel: "comprehension",
    difficulty: "medium",
    scenario: "A new RBT is struggling to teach a client to independently wash their hands. The RBT is currently using a full physical prompt for each step of the handwashing sequence. The supervisor observes that the RBT is consistently providing the same level of prompt, even when the client shows signs of initiation or partial completion of a step.",
    question: "Which of the following describes the most appropriate next step the supervisor should recommend to the RBT regarding the prompting strategy?",
    choices: [
      {
        letter: "D",
        text: "Continue with full physical prompts until the client can complete the entire task independently without any assistance."
      },
      {
        letter: "A",
        text: "Implement stimulus fading by gradually reducing the intensity of the physical prompt as the client demonstrates mastery."
      },
      {
        letter: "B",
        text: "Shift to a most-to-least prompting hierarchy, starting with a full verbal prompt and moving to less intrusive prompts."
      },
      {
        letter: "C",
        text: "Introduce response prompts such as gestural or modeling prompts to supplement the physical prompt."
      }
    ],
    correctAnswer: 'D',
    rationale: "Stimulus fading involves gradually decreasing the salience of a prompt, such as reducing the intensity of a physical prompt, as the learner acquires the skill. This is the most appropriate strategy when a client is already receiving a full physical prompt and showing some independent responding, as it aims to transfer stimulus control from the prompt to the natural discriminative stimulus. Option B describes a most-to-least prompting hierarchy, which is typically used when teaching a new skill and gradually reducing the *type* of prompt, not necessarily the intensity of an existing prompt. Option C suggests adding more prompts, which would not facilitate independence. Option D would lead to prompt dependency and is counterproductive to promoting independent skill acquisition."
  },
  {
    id: "t6-G-pool-97",
    domain: "G",
    taskItem: "G.22",
    phase: "intervention",
    bloomsLevel: "comprehension",
    difficulty: "medium",
    scenario: "A behavior analyst is implementing the Picture Exchange Communication System (PECS) with a non-vocal child to teach manding. The child has successfully mastered Phase I (How to Communicate) and Phase II (Distance and Persistence). The next step involves teaching the child to discriminate between two or more pictures.",
    question: "Which phase of PECS is the behavior analyst preparing to implement?",
    choices: [
      {
        letter: "A",
        text: "Phase III: Picture Discrimination"
      },
      {
        letter: "B",
        text: "Phase IV: Sentence Structure"
      },
      {
        letter: "C",
        text: "Phase V: Responding to 'What do you want?'"
      },
      {
        letter: "D",
        text: "Phase VI: Commenting"
      }
    ],
    correctAnswer: "A",
    rationale: "The scenario describes that the child has mastered Phase I and Phase II, and the next step is teaching the child to discriminate between two or more pictures. This directly corresponds to Phase III of PECS, which focuses on Picture Discrimination. Phase IV introduces sentence structure, Phase V focuses on responding to 'What do you want?', and Phase VI involves commenting, none of which align with the immediate next step described."
  },
  {
    id: "t6-G-pool-98",
    domain: "G",
    taskItem: "G.5",
    phase: "evaluation",
    bloomsLevel: "comprehension",
    difficulty: "hard",
    scenario: "A behavior analyst is reviewing the effectiveness of an extinction procedure implemented to decrease a child's attention-maintained screaming behavior. Initially, the screaming decreased significantly, but after a few weeks, the behavior began to occur intermittently at a low rate, despite consistent implementation of the extinction procedure. The behavior analyst is trying to understand this phenomenon within the framework of extinction.",
    question: "Which of the following best describes the most likely reason for the intermittent re-emergence of the screaming behavior?",
    choices: [
      {
        letter: "B",
        text: "The extinction procedure is being implemented inconsistently, leading to intermittent reinforcement."
      },
      {
        letter: "C",
        text: "The child is experiencing an extinction burst, indicating the procedure is finally beginning to be effective."
      },
      {
        letter: "D",
        text: "The function of the behavior has shifted, and the current extinction procedure is no longer appropriate."
      },
      {
        letter: "A",
        text: "The behavior is undergoing spontaneous recovery due to the passage of time since the initial extinction burst."
      }
    ],
    correctAnswer: 'B',
    rationale: "Spontaneous recovery refers to the re-emergence of a previously extinguished behavior after a period of time has passed without the behavior occurring. This is a common phenomenon in extinction and does not necessarily indicate a failure of the procedure or a change in function, especially when the behavior occurs intermittently at a low rate after an initial decrease. Option B is incorrect because the scenario states the procedure is implemented 'consistently.' Option C is incorrect as an extinction burst typically occurs early in the extinction process and involves an increase in the frequency, duration, or intensity of the behavior, not an intermittent re-emergence after a period of decrease. Option D is plausible but less likely to be the 'most likely' reason given the intermittent nature and the description, as spontaneous recovery is a known characteristic of extinction."
  }
];
