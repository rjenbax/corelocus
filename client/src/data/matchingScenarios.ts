// Tier 3: Definition -> Scenario Matching Data
// Each item: a concept definition + 4 clinical scenarios (1 correct, 3 distractors)
// tcoDomain: Primary TCO Domain label (e.g. "B  -  Concepts and Principles")

export interface MatchingItem {
  id: string;
  domain: string;
  concept: string;
  tcoDomain?: string;
  definition: string;
  scenarios: {
    id: string;
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
}

export const matchingItems: MatchingItem[] = [
  {
    id: 'm-01',
    domain: 'Behavior Principles',
    concept: 'Negative Reinforcement',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'A procedure in which the removal, reduction, or postponement of a stimulus following a behavior results in an increase in the future frequency of that behavior.',
    scenarios: [
      {
        id: 'm-01-a',
        text: 'Leo screams during math tasks. His teacher ends the math activity every time he screams. Over the next two weeks, Leo\'s screaming during math increases significantly.',
        isCorrect: true,
        explanation: 'Screaming is followed by removal of the aversive math task (negative = removal), and screaming increases  --  this is the definition of negative reinforcement.',
      },
      {
        id: 'm-01-b',
        text: 'Leo completes his work independently and his teacher gives him a sticker. Leo\'s independent work completion increases over the following week.',
        isCorrect: false,
        explanation: 'A sticker is ADDED after the behavior (positive reinforcement), not removed. This is positive reinforcement.',
      },
      {
        id: 'm-01-c',
        text: 'Leo hits a peer. The teacher says "No hitting!" and Leo\'s hitting decreases over the next month.',
        isCorrect: false,
        explanation: 'A stimulus (reprimand) is added and behavior decreases  --  this is positive punishment, not negative reinforcement.',
      },
      {
        id: 'm-01-d',
        text: 'Leo asks for a break using his AAC device. His teacher ignores the request. Leo\'s break-requesting decreases over two weeks.',
        isCorrect: false,
        explanation: 'The reinforcer (break) is withheld and behavior decreases  --  this is extinction, not negative reinforcement.',
      },
    ],
  },
  {
    id: 'm-02',
    domain: 'Behavior Principles',
    concept: 'Positive Punishment',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'A procedure in which a stimulus is added following a behavior, resulting in a decrease in the future frequency of that behavior.',
    scenarios: [
      {
        id: 'm-02-a',
        text: 'Leo runs in the hallway. His BCBA immediately requires him to return to the start of the hallway and walk correctly three times. Leo\'s running in the hallway decreases over the following two weeks.',
        isCorrect: true,
        explanation: 'A response (positive practice overcorrection) is ADDED following running, and running decreases  --  this is positive punishment.',
      },
      {
        id: 'm-02-b',
        text: 'Leo earns tokens for completing tasks. When he engages in self-injury, two tokens are removed from his token board. His self-injury decreases over two weeks.',
        isCorrect: false,
        explanation: 'Tokens are REMOVED and behavior decreases  --  this is negative punishment (response cost), not positive punishment.',
      },
      {
        id: 'm-02-c',
        text: 'Leo\'s teacher stops presenting demands when Leo cries. Leo\'s crying during demand presentations increases over two weeks.',
        isCorrect: false,
        explanation: 'Demands are removed and behavior increases  --  this is negative reinforcement, not positive punishment.',
      },
      {
        id: 'm-02-d',
        text: 'Leo is given a preferred video after completing his morning routine. His morning routine completion increases over two weeks.',
        isCorrect: false,
        explanation: 'A preferred item is added and behavior increases  --  this is positive reinforcement, not positive punishment.',
      },
    ],
  },
  {
    id: 'm-03',
    domain: 'Behavior Principles',
    concept: 'Motivating Operation (Establishing Operation)',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'An antecedent variable that (1) temporarily increases the reinforcing effectiveness of a stimulus and (2) increases the current frequency of all behavior that has been reinforced by that stimulus.',
    scenarios: [
      {
        id: 'm-03-a',
        text: 'Leo has not had access to his tablet for three hours. His BCBA observes that Leo is now requesting his tablet more frequently than usual and that tablet access is functioning as a stronger reinforcer than it was earlier in the day.',
        isCorrect: true,
        explanation: 'Deprivation from the tablet (an EO) has increased both the reinforcing value of the tablet AND the frequency of tablet-seeking behavior  --  both effects of an MO.',
      },
      {
        id: 'm-03-b',
        text: 'Leo\'s teacher holds up a picture of a ball and Leo says "ball." His teacher praises him and Leo continues to label objects correctly throughout the session.',
        isCorrect: false,
        explanation: 'The picture is an SD (discriminative stimulus) that signals reinforcement is available  --  it does not change the value of the reinforcer. This illustrates stimulus control, not an MO.',
      },
      {
        id: 'm-03-c',
        text: 'Leo receives a token each time he completes a math problem. After earning 10 tokens, he exchanges them for 5 minutes of free play. Leo\'s math completion rate increases.',
        isCorrect: false,
        explanation: 'This describes a token economy  --  a conditioned reinforcement system. The tokens are conditioned reinforcers, not an MO.',
      },
      {
        id: 'm-03-d',
        text: 'Leo\'s BCBA notices that he engages in more problem behavior on days when his routine is disrupted. She hypothesizes that routine disruption is the antecedent for problem behavior.',
        isCorrect: false,
        explanation: 'While routine disruption may function as an MO, this scenario describes a correlation, not the defining features of an MO (value-altering and behavior-altering effects). The scenario does not confirm either effect.',
      },
    ],
  },
  {
    id: 'm-04',
    domain: 'Measurement',
    concept: 'Partial Interval Recording',
    tcoDomain: 'C  -  Measurement',
    definition: 'A discontinuous measurement procedure in which the observation period is divided into equal intervals; the behavior is recorded if it occurs at any point during the interval, regardless of how long it lasts.',
    scenarios: [
      {
        id: 'm-04-a',
        text: 'Leo\'s BCBA divides a 10-minute observation into 30-second intervals. She marks a "+" for any interval in which Leo engages in stereotypy for even one second. At the end of the session, she calculates the percentage of intervals with a "+".',
        isCorrect: true,
        explanation: 'Recording occurs if the behavior happens at ANY POINT during the interval  --  this is partial interval recording. It tends to overestimate behavior occurrence.',
      },
      {
        id: 'm-04-b',
        text: 'Leo\'s BCBA observes him for 10 minutes and marks a "+" only for intervals in which Leo is on-task for the ENTIRE interval. She calculates the percentage of intervals with a "+".',
        isCorrect: false,
        explanation: 'Recording only when behavior occurs for the ENTIRE interval is whole interval recording, not partial interval recording.',
      },
      {
        id: 'm-04-c',
        text: 'Leo\'s BCBA sets a timer for 30-second intervals. At the moment the timer sounds, she looks up and records whether Leo is on-task at that exact moment.',
        isCorrect: false,
        explanation: 'Recording at the MOMENT the timer sounds is momentary time sampling, not partial interval recording.',
      },
      {
        id: 'm-04-d',
        text: 'Leo\'s BCBA counts every instance of hand-flapping during a 10-minute session and records the total number of occurrences.',
        isCorrect: false,
        explanation: 'Counting every instance is event recording (frequency), a continuous measurement procedure  --  not partial interval recording.',
      },
    ],
  },
  {
    id: 'm-05',
    domain: 'Behavior Reduction',
    concept: 'Extinction Burst',
    tcoDomain: 'G  -  Behavior-Change Procedures',
    definition: 'A temporary increase in the frequency, duration, or intensity of a behavior (and sometimes novel behaviors) that occurs immediately after extinction is first implemented.',
    scenarios: [
      {
        id: 'm-05-a',
        text: 'Leo\'s BCBA begins withholding attention following his attention-maintained tantrums. On day 1 of extinction, Leo\'s tantrums increase from an average of 3 per day to 9 per day and are louder and longer than before. By day 5, tantrums have decreased to near zero.',
        isCorrect: true,
        explanation: 'An immediate increase in frequency, duration, and intensity at the START of extinction  --  this is the defining feature of an extinction burst.',
      },
      {
        id: 'm-05-b',
        text: 'Leo\'s tantrums had decreased to near zero after three weeks of extinction. After a weekend break, his tantrums return at a lower rate than baseline.',
        isCorrect: false,
        explanation: 'Reappearance after a period of time (not at the start of extinction) is spontaneous recovery, not an extinction burst.',
      },
      {
        id: 'm-05-c',
        text: 'Leo\'s tantrums at school have been extinguished. His parents report that his tantrums at home have increased since the school extinction program began.',
        isCorrect: false,
        explanation: 'An increase in behavior in a DIFFERENT CONTEXT when reinforcement decreases in the original context is behavioral contrast, not an extinction burst.',
      },
      {
        id: 'm-05-d',
        text: 'Leo\'s FCT program is placed on extinction. His previously extinguished hitting returns at a low rate.',
        isCorrect: false,
        explanation: 'Reappearance of a previously extinguished behavior when the current behavior is placed on extinction is resurgence, not an extinction burst.',
      },
    ],
  },
  {
    id: 'm-06',
    domain: 'Behavior Reduction',
    concept: 'Differential Reinforcement of Alternative Behavior (DRA)',
    tcoDomain: 'G  -  Behavior-Change Procedures',
    definition: 'A procedure in which reinforcement is delivered for a specific alternative behavior while reinforcement is withheld for the problem behavior (extinction component).',
    scenarios: [
      {
        id: 'm-06-a',
        text: 'Leo hits peers to obtain their toys (tangible function). His BCBA teaches him to say "Can I have that?" and provides immediate access to the toy when he uses this phrase. Simultaneously, hitting no longer results in toy access. Over four weeks, hitting decreases and requesting increases.',
        isCorrect: true,
        explanation: 'A specific alternative behavior (requesting) is reinforced with the same reinforcer (toy access) that maintained the problem behavior, while the problem behavior is placed on extinction  --  this is DRA.',
      },
      {
        id: 'm-06-b',
        text: 'Leo\'s BCBA delivers a preferred item to Leo every 5 minutes regardless of his behavior. Problem behavior decreases over two weeks.',
        isCorrect: false,
        explanation: 'Delivering reinforcement on a time-based schedule regardless of behavior is noncontingent reinforcement (NCR), not DRA.',
      },
      {
        id: 'm-06-c',
        text: 'Leo\'s BCBA reinforces him for any behavior OTHER than hitting during 30-second intervals. Hitting decreases over two weeks.',
        isCorrect: false,
        explanation: 'Reinforcing the ABSENCE of the problem behavior during intervals is DRO, not DRA. DRA requires a specific alternative behavior.',
      },
      {
        id: 'm-06-d',
        text: 'Leo\'s BCBA reinforces him for sitting in his chair (which is physically incompatible with running in the hallway). Running in the hallway decreases.',
        isCorrect: false,
        explanation: 'Reinforcing a behavior that is PHYSICALLY INCOMPATIBLE with the problem behavior is DRI, not DRA. DRA does not require physical incompatibility.',
      },
    ],
  },
  {
    id: 'm-07',
    domain: 'Verbal Behavior',
    concept: 'Mand',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'A verbal operant controlled by a motivating operation (MO) and reinforced by a specific, characteristic consequence that matches the content of the verbal behavior.',
    scenarios: [
      {
        id: 'm-07-a',
        text: 'Leo has not had his preferred music for 45 minutes (EO). He approaches his BCBA and says "music." His BCBA immediately turns on his preferred music. Leo\'s music-requesting increases.',
        isCorrect: true,
        explanation: 'The verbal behavior ("music") is controlled by an MO (deprivation from music) and reinforced by the specific, characteristic consequence (music is turned on)  --  this is a mand.',
      },
      {
        id: 'm-07-b',
        text: 'Leo\'s BCBA holds up a picture of a dog and asks "What is this?" Leo says "dog" and receives praise.',
        isCorrect: false,
        explanation: 'The verbal behavior is controlled by a nonverbal SD (the picture) and reinforced by generalized reinforcement (praise)  --  this is a tact, not a mand.',
      },
      {
        id: 'm-07-c',
        text: 'Leo\'s BCBA asks "What do you do when you\'re thirsty?" and Leo says "drink water." His BCBA praises him.',
        isCorrect: false,
        explanation: 'The verbal behavior is controlled by a verbal SD (the question) and reinforced by generalized reinforcement  --  this is an intraverbal, not a mand.',
      },
      {
        id: 'm-07-d',
        text: 'Leo\'s BCBA says "ball" and Leo repeats "ball." His BCBA praises him for the correct echoic response.',
        isCorrect: false,
        explanation: 'The verbal behavior has point-to-point correspondence with a verbal SD (the BCBA\'s "ball")  --  this is an echoic, not a mand.',
      },
    ],
  },
  {
    id: 'm-08',
    domain: 'Research & Design',
    concept: 'Multiple Baseline Design',
    tcoDomain: 'D  -  Experimental Design',
    definition: 'A single-case experimental design in which the independent variable is introduced sequentially across two or more tiers (behaviors, settings, or subjects) after stable baselines are established, demonstrating experimental control without requiring a reversal.',
    scenarios: [
      {
        id: 'm-08-a',
        text: 'A BCBA implements a social skills intervention for Leo. She first establishes stable baselines for greeting, sharing, and turn-taking. She introduces the intervention for greeting first, then sharing, then turn-taking, each time waiting for stable data in the remaining baselines. All three behaviors improve only when the intervention is introduced.',
        isCorrect: true,
        explanation: 'The intervention is introduced sequentially across three behaviors (tiers) after stable baselines  --  this is a multiple baseline across behaviors design.',
      },
      {
        id: 'm-08-b',
        text: 'A BCBA implements a token economy for Leo, then withdraws it to return to baseline, then reintroduces it. On-task behavior increases during intervention and decreases during baseline, demonstrating experimental control.',
        isCorrect: false,
        explanation: 'Withdrawing and reintroducing the intervention to demonstrate control is a reversal (ABAB) design, not a multiple baseline design.',
      },
      {
        id: 'm-08-c',
        text: 'A BCBA rapidly alternates between two teaching conditions (PECS and SGD) within each session to compare their effects on Leo\'s communication rate.',
        isCorrect: false,
        explanation: 'Rapidly alternating conditions within sessions is an alternating treatments design, not a multiple baseline design.',
      },
      {
        id: 'm-08-d',
        text: 'A BCBA collects baseline data on Leo\'s problem behavior, introduces an intervention, and then systematically increases the criterion for reinforcement to assess the effect of different criteria.',
        isCorrect: false,
        explanation: 'Systematically changing the criterion for reinforcement is a changing criterion design, not a multiple baseline design.',
      },
    ],
  },
  {
    id: 'm-09',
    domain: 'Assessment',
    concept: 'Functional Analysis (FA)',
    tcoDomain: 'F  -  Behavior Assessment',
    definition: 'An experimental assessment procedure in which antecedent and consequence conditions are systematically manipulated to identify the function(s) of problem behavior by demonstrating a functional relationship between environmental variables and the behavior.',
    scenarios: [
      {
        id: 'm-09-a',
        text: 'Leo\'s BCBA conducts a structured assessment with four conditions: attention (brief attention after problem behavior), demand (escape from task after problem behavior), alone (no social interaction), and control (free play with preferred items). She compares problem behavior rates across conditions and finds it is highest in the demand condition.',
        isCorrect: true,
        explanation: 'Systematically manipulating antecedents and consequences across conditions to identify the function of problem behavior is a functional analysis.',
      },
      {
        id: 'm-09-b',
        text: 'Leo\'s BCBA interviews his parents and teachers about when problem behavior is most and least likely to occur, what typically precedes it, and what usually follows it.',
        isCorrect: false,
        explanation: 'Gathering information through interviews without direct observation or experimental manipulation is an indirect assessment, not a functional analysis.',
      },
      {
        id: 'm-09-c',
        text: 'Leo\'s BCBA observes him in his natural classroom environment and records antecedents, behaviors, and consequences in real time using an ABC narrative recording form.',
        isCorrect: false,
        explanation: 'Observing and recording ABC sequences in the natural environment without experimental manipulation is a descriptive assessment (ABC recording), not a functional analysis.',
      },
      {
        id: 'm-09-d',
        text: 'Leo\'s BCBA presents a series of preferred and non-preferred items to Leo and records his approach and avoidance responses to identify his reinforcer preferences.',
        isCorrect: false,
        explanation: 'Systematically presenting stimuli to identify preferences is a preference assessment (e.g., MSWO), not a functional analysis.',
      },
    ],
  },
  {
    id: 'm-10',
    domain: 'Skill Acquisition',
    concept: 'Stimulus Fading',
    tcoDomain: 'F  -  Behavior Assessment',
    definition: 'A procedure in which a controlling prompt is gradually changed along a physical dimension (e.g., size, color, intensity) so that the target stimulus gradually gains control over the response, while the prompt is systematically reduced.',
    scenarios: [
      {
        id: 'm-10-a',
        text: 'Leo is learning to read the word "stop." Initially, the word is presented in large, bold red letters. Over successive trials, the letters are gradually made smaller and the color is faded to black until Leo reads "stop" in standard black text without error.',
        isCorrect: true,
        explanation: 'The prompt (size and color) is gradually changed along a physical dimension until the target stimulus controls the response  --  this is stimulus fading.',
      },
      {
        id: 'm-10-b',
        text: 'Leo is learning to tie his shoes. His BCBA initially provides full physical guidance through all steps. Over successive sessions, she reduces her physical assistance from full guidance to partial guidance to a light touch to no assistance.',
        isCorrect: false,
        explanation: 'Reducing the level of physical assistance over time is prompt fading (specifically, most-to-least prompting), not stimulus fading. Stimulus fading changes the target stimulus, not the prompt.',
      },
      {
        id: 'm-10-c',
        text: 'Leo is learning to match colors. His BCBA initially presents only two choices (red and blue). Over sessions, she gradually increases the number of choices to six.',
        isCorrect: false,
        explanation: 'Gradually increasing the number of distractors is a form of errorless learning / stimulus shaping, but specifically describes changing the array size, not fading a physical dimension of the target stimulus.',
      },
      {
        id: 'm-10-d',
        text: 'Leo is learning to request items. His BCBA initially provides a full verbal model ("I want cookie"). Over sessions, she fades to a partial model ("I want..."), then a first-sound cue ("I..."), then no model.',
        isCorrect: false,
        explanation: 'Reducing the level of verbal prompting is prompt fading, not stimulus fading. Stimulus fading changes the target stimulus itself, not the prompt.',
      },
    ],
  },
  {
    id: 'm-11',
    domain: 'Behavior Principles',
    concept: 'Behavioral Contrast',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'A phenomenon in which a change in the rate of reinforcement in one component of a multiple schedule produces an opposite change in the rate of responding in another component, even though the schedule in that component has not changed.',
    scenarios: [
      {
        id: 'm-11-a',
        text: 'Leo\'s problem behavior is placed on extinction at school (reinforcement decreases). His parents report that his problem behavior at home has increased significantly, even though nothing has changed at home.',
        isCorrect: true,
        explanation: 'When reinforcement decreases in one context (school), responding increases in another context (home) where the schedule has not changed  --  this is behavioral contrast.',
      },
      {
        id: 'm-11-b',
        text: 'Leo\'s problem behavior decreases at school after extinction is implemented. After a weekend, his problem behavior briefly returns at a lower rate than baseline.',
        isCorrect: false,
        explanation: 'Reappearance of extinguished behavior after a period of time is spontaneous recovery, not behavioral contrast.',
      },
      {
        id: 'm-11-c',
        text: 'Leo\'s hitting had been extinguished. When his FCT program is placed on extinction, hitting returns at a moderate rate.',
        isCorrect: false,
        explanation: 'Reappearance of a previously extinguished behavior when the current behavior is placed on extinction is resurgence, not behavioral contrast.',
      },
      {
        id: 'm-11-d',
        text: 'Leo\'s on-task behavior increases when his teacher provides more frequent praise. His off-task behavior decreases in the same setting.',
        isCorrect: false,
        explanation: 'This describes the effect of increased reinforcement on behavior within the same setting  --  not behavioral contrast, which requires an OPPOSITE change in a DIFFERENT component.',
      },
    ],
  },
  {
    id: 'm-12',
    domain: 'Ethics & Professional Practice',
    concept: 'Treatment Integrity',
    tcoDomain: 'H  -  Selecting and Implementing Interventions',
    definition: 'The degree to which the independent variable (intervention) is implemented as designed and described in the behavior intervention plan.',
    scenarios: [
      {
        id: 'm-12-a',
        text: 'Leo\'s BCBA uses a checklist to verify that his classroom aide is implementing each step of the FCT protocol correctly. She finds that the aide is providing the reinforcer after a 10-second delay instead of immediately. She provides corrective feedback and retraining.',
        isCorrect: true,
        explanation: 'Checking whether the intervention is being implemented as designed and correcting deviations is treatment integrity monitoring.',
      },
      {
        id: 'm-12-b',
        text: 'Leo\'s BCBA has two observers independently record the frequency of his self-injurious behavior during the same session. She calculates the percentage of agreement between their records.',
        isCorrect: false,
        explanation: 'Having two observers record the same behavior to check agreement is interobserver agreement (IOA), not treatment integrity. IOA checks measurement reliability; treatment integrity checks implementation fidelity.',
      },
      {
        id: 'm-12-c',
        text: 'Leo\'s BCBA reviews his data and notes that his problem behavior has not decreased despite three weeks of intervention. She considers whether the intervention is appropriate for his function.',
        isCorrect: false,
        explanation: 'Reviewing data to evaluate intervention effectiveness is data-based decision making, not treatment integrity. Treatment integrity specifically checks whether the intervention was implemented correctly.',
      },
      {
        id: 'm-12-d',
        text: 'Leo\'s BCBA asks his parents to complete a rating scale about his adaptive behavior skills at home.',
        isCorrect: false,
        explanation: 'Collecting information about adaptive behavior through a rating scale is an indirect assessment, not treatment integrity monitoring.',
      },
    ],
  },
  {
    id: 'm-13',
    domain: 'Skill Acquisition',
    concept: 'Chaining (Backward Chaining)',
    tcoDomain: 'F  -  Behavior Assessment',
    definition: 'A procedure for teaching a behavior chain in which the last step in the chain is taught first, and the learner is prompted through all preceding steps until the last step is mastered; steps are then added in reverse order.',
    scenarios: [
      {
        id: 'm-13-a',
        text: 'Leo is learning to wash his hands. His BCBA prompts him through all steps (turn on water, wet hands, apply soap, scrub, rinse) and then requires Leo to independently perform only the last step (dry hands with towel). Once Leo masters drying, she requires him to independently perform rinsing AND drying, and so on.',
        isCorrect: true,
        explanation: 'Teaching the LAST step first and adding steps in reverse order is backward chaining.',
      },
      {
        id: 'm-13-b',
        text: 'Leo is learning to set the table. His BCBA teaches him to independently place the plate first, then the fork, then the knife, then the spoon, adding each step in order.',
        isCorrect: false,
        explanation: 'Teaching steps in forward order (first step first) is forward chaining, not backward chaining.',
      },
      {
        id: 'm-13-c',
        text: 'Leo is learning to button his shirt. His BCBA teaches him all steps simultaneously, providing prompts as needed and reinforcing completion of the entire chain.',
        isCorrect: false,
        explanation: 'Teaching all steps simultaneously with prompts as needed is total task chaining, not backward chaining.',
      },
      {
        id: 'm-13-d',
        text: 'Leo is learning to say "I want cookie." His BCBA initially models the full phrase, then fades to "I want...", then "I...", until Leo produces the full phrase independently.',
        isCorrect: false,
        explanation: 'This describes prompt fading for a verbal response  --  not chaining. Chaining applies to multi-step behavior chains, not to fading prompts for a single verbal operant.',
      },
    ],
  },
  {
    id: 'm-14',
    domain: 'Behavior Principles',
    concept: 'Stimulus Generalization',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'The occurrence of a trained behavior in the presence of stimuli that are similar to but not identical to the training stimulus, without additional training.',
    scenarios: [
      {
        id: 'm-14-a',
        text: 'Leo is taught to greet his BCBA by saying "Hi!" He then begins greeting his classroom teacher, his aide, and his parents with "Hi!" without any additional training for these individuals.',
        isCorrect: true,
        explanation: 'The same greeting behavior occurs in the presence of new people (stimuli similar to the training SD) without additional training  --  this is stimulus generalization.',
      },
      {
        id: 'm-14-b',
        text: 'Leo is taught to say "Hi!" to greet people. He also begins waving, nodding, and smiling when he sees familiar people, even though only verbal greeting was trained.',
        isCorrect: false,
        explanation: 'New but functionally similar responses (waving, nodding) occurring in the presence of the trained stimulus is response generalization, not stimulus generalization.',
      },
      {
        id: 'm-14-c',
        text: 'Leo greets his BCBA only when she is wearing her white lab coat. He does not greet her when she wears street clothes.',
        isCorrect: false,
        explanation: 'Responding only to a specific stimulus and not to similar stimuli is stimulus discrimination, the opposite of stimulus generalization.',
      },
      {
        id: 'm-14-d',
        text: 'Leo\'s greeting behavior, which had been extinguished, returns at a lower rate after a two-week school break.',
        isCorrect: false,
        explanation: 'Reappearance of extinguished behavior after a period of time is spontaneous recovery, not stimulus generalization.',
      },
    ],
  },
  {
    id: 'm-15',
    concept: 'Conditioned Reinforcer',
    domain: 'Behavior Principles',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'A stimulus that has acquired reinforcing properties through pairing with other reinforcers.',
    scenarios: [
      {
        id: 'm-15-a',
        text: 'A child initially shows no preference for tokens. After tokens are repeatedly exchanged for preferred items (snacks, screen time), the child begins working harder to earn tokens even before exchanging them.',
        isCorrect: true,
        explanation: 'The tokens acquired reinforcing value through pairing with already-effective reinforcers (snacks, screen time), making them conditioned reinforcers.',
      },
      {
        id: 'm-15-b',
        text: 'A child works hard to earn extra recess time because running and playing are inherently enjoyable.',
        isCorrect: false,
        explanation: 'Recess is an unconditioned reinforcer  --  its value does not depend on prior learning or pairing with other stimuli.',
      },
      {
        id: 'm-15-c',
        text: 'A child stops engaging in problem behavior after the BCBA removes all preferred items from the environment.',
        isCorrect: false,
        explanation: 'Removing preferred items describes an abolishing operation, not the acquisition of conditioned reinforcement.',
      },
      {
        id: 'm-15-d',
        text: 'A child receives praise after every correct response. Over time, the frequency of correct responses increases.',
        isCorrect: false,
        explanation: 'While praise can be a conditioned reinforcer, this scenario describes positive reinforcement generally. The key feature of a conditioned reinforcer is its history of pairing  --  this scenario does not describe that pairing process.',
      },
    ],
  },
// NEW ITEMS  --  Domains A-I  --  to be appended to matchingItems array
// IDs continue from m-16 through m-50

  // -- BEHAVIOR PRINCIPLES -------------------------------------------------------
  {
    id: 'm-16',
    domain: 'Behavior Principles',
    concept: 'Negative Punishment',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'A procedure in which a stimulus is removed following a behavior, resulting in a decrease in the future frequency of that behavior.',
    scenarios: [
      {
        id: 'm-16-a',
        text: 'Leo earns tokens throughout the day for following instructions. Each time he engages in verbal aggression, two tokens are removed from his token board. Over three weeks, verbal aggression decreases significantly.',
        isCorrect: true,
        explanation: 'Tokens (a positive stimulus) are REMOVED following verbal aggression, and the behavior decreases  --  this is negative punishment (specifically, response cost).',
      },
      {
        id: 'm-16-b',
        text: 'Leo\'s BCBA requires him to practice walking calmly in the hallway five times every time he runs. Running in the hallway decreases over two weeks.',
        isCorrect: false,
        explanation: 'A response (practice walking) is ADDED following running, and behavior decreases  --  this is positive punishment (positive practice overcorrection), not negative punishment.',
      },
      {
        id: 'm-16-c',
        text: 'Leo\'s BCBA stops providing attention following his attention-maintained tantrums. Tantrums decrease over four weeks.',
        isCorrect: false,
        explanation: 'Withholding the reinforcer (attention) that previously maintained the behavior is extinction, not negative punishment.',
      },
      {
        id: 'm-16-d',
        text: 'Leo loses access to his preferred tablet for the remainder of the school day after hitting a peer. His hitting decreases over two weeks.',
        isCorrect: false,
        explanation: 'While this involves removal of a preferred item, the removal is for an extended period (time-out from reinforcement), which is a form of negative punishment but specifically time-out, not response cost. Response cost involves removing a specific, quantifiable amount of a conditioned reinforcer.',
      },
    ],
  },
  {
    id: 'm-17',
    domain: 'Behavior Principles',
    concept: 'Generalized Conditioned Reinforcer',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'A conditioned reinforcer that has been paired with many different reinforcers and therefore maintains its effectiveness across a wide range of motivating operations; examples include money, tokens, praise, and attention.',
    scenarios: [
      {
        id: 'm-17-a',
        text: 'Leo initially showed no interest in stickers. His BCBA consistently paired stickers with access to his preferred tablet (a strong reinforcer). After several weeks, Leo began working hard to earn stickers even when tablet access was not immediately available.',
        isCorrect: true,
        explanation: 'Stickers acquired reinforcing value through repeated pairing with an established reinforcer (tablet access)  --  this is the process of establishing a conditioned reinforcer.',
      },
      {
        id: 'm-17-b',
        text: 'Leo works hard to earn breaks from demanding tasks. His BCBA observes that break access reliably increases his work completion.',
        isCorrect: false,
        explanation: 'Break access functions as a reinforcer because it removes an aversive stimulus (demands)  --  this is negative reinforcement, not a conditioned reinforcer. The break itself may be an unconditioned reinforcer (rest) rather than a conditioned one.',
      },
      {
        id: 'm-17-c',
        text: 'Leo consistently selects food items over toys in preference assessments. Food reliably increases his responding when used as a consequence.',
        isCorrect: false,
        explanation: 'Food is an unconditioned (primary) reinforcer  --  its reinforcing value does not depend on prior learning. A conditioned reinforcer acquires its value through pairing.',
      },
      {
        id: 'm-17-d',
        text: 'Leo\'s BCBA delivers praise immediately after each correct response. Leo\'s correct responding increases over the following week.',
        isCorrect: false,
        explanation: 'While praise can function as a conditioned reinforcer, this scenario only demonstrates that praise is functioning as a reinforcer  --  it does not describe the pairing process that establishes conditioned reinforcers.',
      },
    ],
  },
  {
    id: 'm-18',
    domain: 'Behavior Principles',
    concept: 'Discriminative Stimulus (SD)',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'A stimulus in the presence of which a specific behavior has been reinforced; the SD signals that reinforcement is available for a particular response.',
    scenarios: [
      {
        id: 'm-18-a',
        text: 'Leo\'s BCBA holds up a picture of a cookie and asks "What do you want?" Leo says "cookie" and receives a cookie. Over time, Leo reliably requests cookies when the picture is presented but not when it is absent.',
        isCorrect: true,
        explanation: 'The picture has become a discriminative stimulus (SD)  --  its presence signals that the verbal response "cookie" will be reinforced with cookie access.',
      },
      {
        id: 'm-18-b',
        text: 'Leo has not had access to his preferred music for two hours. His BCBA observes that he is now requesting music more frequently and that music is functioning as a stronger reinforcer than earlier in the day.',
        isCorrect: false,
        explanation: 'Deprivation that increases both the value of a reinforcer and the frequency of behavior that has produced it is a motivating operation (establishing operation), not an SD.',
      },
      {
        id: 'm-18-c',
        text: 'Leo\'s problem behavior is highest in the demand condition of a functional analysis, where demands are presented and escape is provided contingent on problem behavior.',
        isCorrect: false,
        explanation: 'The demand condition identifies the function of problem behavior  --  this is a functional analysis result, not an example of an SD controlling appropriate behavior.',
      },
      {
        id: 'm-18-d',
        text: 'Leo\'s BCBA delivers a token every 5 minutes regardless of his behavior. Problem behavior decreases because the token schedule abolishes the value of escape.',
        isCorrect: false,
        explanation: 'Delivering reinforcement on a time-based schedule to reduce problem behavior is noncontingent reinforcement (NCR), which functions as an abolishing operation  --  not an SD.',
      },
    ],
  },
  {
    id: 'm-19',
    domain: 'Behavior Principles',
    concept: 'Resurgence',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'The reappearance of a previously extinguished behavior when a more recently reinforced behavior is placed on extinction.',
    scenarios: [
      {
        id: 'm-19-a',
        text: 'Leo previously hit peers to obtain toys (hitting was extinguished 6 months ago). His BCBA taught him to use an AAC device to request toys (FCT). When the FCT program is placed on extinction, Leo\'s hitting returns at a moderate rate.',
        isCorrect: true,
        explanation: 'A previously extinguished behavior (hitting) resurfaces when the more recently reinforced behavior (AAC requesting) is placed on extinction  --  this is resurgence.',
      },
      {
        id: 'm-19-b',
        text: 'Leo\'s tantrums had been extinguished at school. After a two-week school break, his tantrums return briefly at a lower rate than baseline before extinguishing again.',
        isCorrect: false,
        explanation: 'Reappearance of extinguished behavior after a period of time without extinction in place is spontaneous recovery, not resurgence.',
      },
      {
        id: 'm-19-c',
        text: 'Leo\'s problem behavior is placed on extinction at school. His parents report that his problem behavior at home has increased, even though nothing has changed at home.',
        isCorrect: false,
        explanation: 'An increase in behavior in a different context when reinforcement decreases in the original context is behavioral contrast, not resurgence.',
      },
      {
        id: 'm-19-d',
        text: 'Leo\'s tantrums increase dramatically on day 1 of extinction before gradually decreasing to near zero over two weeks.',
        isCorrect: false,
        explanation: 'A temporary increase in frequency, duration, or intensity at the START of extinction is an extinction burst, not resurgence.',
      },
    ],
  },

  // -- MEASUREMENT ---------------------------------------------------------------
  {
    id: 'm-20',
    domain: 'Measurement',
    concept: 'Whole Interval Recording',
    tcoDomain: 'C  -  Measurement',
    definition: 'A discontinuous measurement procedure in which the behavior is recorded only if it occurs throughout the ENTIRE interval; tends to underestimate the occurrence of behavior.',
    scenarios: [
      {
        id: 'm-20-a',
        text: 'Leo\'s BCBA divides a 10-minute observation into 30-second intervals. She marks a "+" only for intervals in which Leo is on-task for every second of the interval. If he looks away even briefly, the interval is marked "-". She calculates the percentage of "+" intervals.',
        isCorrect: true,
        explanation: 'Recording only when behavior occurs for the ENTIRE interval is whole interval recording. It tends to underestimate behavior because any brief interruption results in a "-".',
      },
      {
        id: 'm-20-b',
        text: 'Leo\'s BCBA marks a "+" for any interval in which Leo engages in stereotypy for even one second. She calculates the percentage of "+" intervals.',
        isCorrect: false,
        explanation: 'Recording if the behavior occurs at ANY POINT during the interval is partial interval recording, not whole interval recording.',
      },
      {
        id: 'm-20-c',
        text: 'Leo\'s BCBA sets a timer for 30-second intervals. At the moment the timer sounds, she looks up and records whether Leo is on-task at that exact moment.',
        isCorrect: false,
        explanation: 'Recording at the MOMENT the timer sounds is momentary time sampling, not whole interval recording.',
      },
      {
        id: 'm-20-d',
        text: 'Leo\'s BCBA counts every instance of hand-flapping during a 10-minute session and records the total number.',
        isCorrect: false,
        explanation: 'Counting every instance of a behavior is event recording (frequency), a continuous measurement procedure  --  not whole interval recording.',
      },
    ],
  },
  {
    id: 'm-21',
    domain: 'Measurement',
    concept: 'Interobserver Agreement (IOA)',
    tcoDomain: 'C  -  Measurement',
    definition: 'The degree to which two independent observers simultaneously record the same behavior using the same measurement system; used to evaluate the reliability of behavioral measurement.',
    scenarios: [
      {
        id: 'm-21-a',
        text: 'Two observers independently and simultaneously record the frequency of Leo\'s self-injurious behavior during the same 10-minute session. At the end, they compare their totals and calculate a ratio to determine how closely their counts agree.',
        isCorrect: true,
        explanation: 'Two independent observers recording the same behavior simultaneously and comparing their records is the definition of interobserver agreement (IOA) measurement.',
      },
      {
        id: 'm-21-b',
        text: 'Leo\'s BCBA uses a checklist to verify that his classroom aide is implementing each step of the FCT protocol correctly during a session.',
        isCorrect: false,
        explanation: 'Checking whether an intervention is implemented as designed is treatment integrity monitoring, not IOA. IOA measures agreement between observers about the occurrence of behavior.',
      },
      {
        id: 'm-21-c',
        text: 'Leo\'s BCBA reviews his data from the past two weeks and compares his performance across different settings to assess generalization.',
        isCorrect: false,
        explanation: 'Comparing data across settings to assess generalization is a data analysis procedure, not IOA. IOA requires two observers recording simultaneously.',
      },
      {
        id: 'm-21-d',
        text: 'Leo\'s BCBA administers the same preference assessment on two consecutive days and compares the rank order of preferred items across sessions.',
        isCorrect: false,
        explanation: 'Comparing results across sessions to assess consistency is a form of reliability check for assessment tools, not IOA. IOA specifically involves two observers recording simultaneously.',
      },
    ],
  },
  {
    id: 'm-22',
    domain: 'Measurement',
    concept: 'Latency',
    tcoDomain: 'C  -  Measurement',
    definition: 'The elapsed time from the onset of a stimulus or event (e.g., an instruction) to the initiation of a response.',
    scenarios: [
      {
        id: 'm-22-a',
        text: 'Leo\'s BCBA gives the instruction "sit down" and starts a stopwatch. She stops the stopwatch the moment Leo begins to lower himself into the chair. She records this time as the measure of his compliance.',
        isCorrect: true,
        explanation: 'Measuring the time from the onset of the instruction to the initiation of the response is latency recording.',
      },
      {
        id: 'm-22-b',
        text: 'Leo\'s BCBA starts a stopwatch when Leo begins a tantrum and stops it when the tantrum ends. She records the total time of each tantrum.',
        isCorrect: false,
        explanation: 'Measuring the time from the start to the end of a behavior is duration recording, not latency.',
      },
      {
        id: 'm-22-c',
        text: 'Leo\'s BCBA counts the number of times Leo requests a break during a 30-minute work session.',
        isCorrect: false,
        explanation: 'Counting the number of occurrences of a behavior is frequency (event) recording, not latency.',
      },
      {
        id: 'm-22-d',
        text: 'Leo\'s BCBA records the time between the end of one tantrum and the beginning of the next tantrum.',
        isCorrect: false,
        explanation: 'Measuring the time between the end of one response and the beginning of the next is inter-response time (IRT), not latency.',
      },
    ],
  },
  {
    id: 'm-23',
    domain: 'Measurement',
    concept: 'Rate (Frequency per Unit Time)',
    tcoDomain: 'C  -  Measurement',
    definition: 'A measure of behavior that expresses the number of responses that occur per unit of time; allows comparison across sessions of different lengths.',
    scenarios: [
      {
        id: 'm-23-a',
        text: 'Leo\'s BCBA records that he made 24 correct responses during a 30-minute session on Monday and 18 correct responses during a 20-minute session on Tuesday. To compare his performance across sessions, she divides the number of responses by the session length in minutes.',
        isCorrect: true,
        explanation: 'Dividing the number of responses by session length to allow comparison across sessions of different lengths is rate (responses per minute)  --  the appropriate measure when session lengths vary.',
      },
      {
        id: 'm-23-b',
        text: 'Leo\'s BCBA records the total number of times he engages in self-injury during each 60-minute session. All sessions are the same length.',
        isCorrect: false,
        explanation: 'Recording the total count of a behavior is frequency recording. When session lengths are constant, frequency and rate are equivalent, but the measure described is frequency (count), not rate (count per unit time).',
      },
      {
        id: 'm-23-c',
        text: 'Leo\'s BCBA records the percentage of 10-second intervals in which stereotypy occurs during each session.',
        isCorrect: false,
        explanation: 'Recording the percentage of intervals in which a behavior occurs is time sampling (partial or whole interval recording), not rate.',
      },
      {
        id: 'm-23-d',
        text: 'Leo\'s BCBA records the total duration of his on-task behavior during each session and divides by session length to get a percentage of time on-task.',
        isCorrect: false,
        explanation: 'Expressing behavior as a proportion of total session time is a duration-based measure (percentage of time), not rate. Rate counts discrete responses per unit time.',
      },
    ],
  },

  // -- RESEARCH & EXPERIMENTAL DESIGN -------------------------------------------
  {
    id: 'm-24',
    domain: 'Research & Design',
    concept: 'Reversal (ABAB) Design',
    tcoDomain: 'D  -  Experimental Design',
    definition: 'A single-case experimental design in which the independent variable is introduced (B phase), withdrawn to return to baseline (A phase), and then reintroduced (B phase) to demonstrate experimental control through replication.',
    scenarios: [
      {
        id: 'm-24-a',
        text: 'A BCBA implements a token economy for Leo\'s on-task behavior (B phase). On-task behavior increases. She then withdraws the token economy and returns to baseline conditions (A phase)  --  on-task behavior decreases. She reintroduces the token economy (B phase) and on-task behavior increases again.',
        isCorrect: true,
        explanation: 'Introducing, withdrawing, and reintroducing the intervention to demonstrate that behavior changes with the independent variable is a reversal (ABAB) design.',
      },
      {
        id: 'm-24-b',
        text: 'A BCBA establishes stable baselines for Leo\'s greeting, sharing, and turn-taking, then introduces a social skills intervention sequentially across each behavior.',
        isCorrect: false,
        explanation: 'Introducing the intervention sequentially across multiple tiers after stable baselines is a multiple baseline design, not a reversal design.',
      },
      {
        id: 'm-24-c',
        text: 'A BCBA rapidly alternates between two teaching methods within each session to compare their effects on Leo\'s skill acquisition rate.',
        isCorrect: false,
        explanation: 'Rapidly alternating between conditions within sessions is an alternating treatments design, not a reversal design.',
      },
      {
        id: 'm-24-d',
        text: 'A BCBA systematically increases the performance criterion for Leo\'s task completion from 60% to 70% to 80% to 90%, introducing each new criterion only after the previous one is met.',
        isCorrect: false,
        explanation: 'Systematically changing the criterion for reinforcement is a changing criterion design, not a reversal design.',
      },
    ],
  },
  {
    id: 'm-25',
    domain: 'Research & Design',
    concept: 'Alternating Treatments Design (ATD)',
    tcoDomain: 'D  -  Experimental Design',
    definition: 'A single-case experimental design in which two or more conditions are rapidly alternated within or across sessions to compare their effects on the same behavior; allows comparison of multiple independent variables without a withdrawal phase.',
    scenarios: [
      {
        id: 'm-25-a',
        text: 'A BCBA wants to compare the effects of errorless learning versus trial-and-error learning on Leo\'s receptive identification accuracy. She alternates between the two conditions within each session (counterbalanced across trials) and compares the learning curves.',
        isCorrect: true,
        explanation: 'Rapidly alternating between two conditions within sessions to compare their effects is an alternating treatments design (ATD).',
      },
      {
        id: 'm-25-b',
        text: 'A BCBA implements a social skills intervention for Leo, then withdraws it to return to baseline, then reintroduces it, demonstrating that behavior changes with the intervention.',
        isCorrect: false,
        explanation: 'Introducing, withdrawing, and reintroducing the intervention is a reversal (ABAB) design, not an ATD.',
      },
      {
        id: 'm-25-c',
        text: 'A BCBA introduces an intervention for Leo\'s problem behavior in the classroom first, then in the hallway, then at home, each time waiting for stable data in the remaining settings.',
        isCorrect: false,
        explanation: 'Introducing the intervention sequentially across settings after stable baselines is a multiple baseline across settings design, not an ATD.',
      },
      {
        id: 'm-25-d',
        text: 'A BCBA systematically increases the criterion for Leo\'s independent work completion from 5 minutes to 10 minutes to 15 minutes, introducing each new criterion only after the previous one is met.',
        isCorrect: false,
        explanation: 'Systematically changing the criterion for reinforcement is a changing criterion design, not an ATD.',
      },
    ],
  },
  {
    id: 'm-26',
    domain: 'Research & Design',
    concept: 'Visual Analysis',
    tcoDomain: 'D  -  Experimental Design',
    definition: 'The primary method of data analysis in applied behavior analysis, in which graphed data are examined for level, trend, and variability within and across phases to determine whether a functional relationship exists between the independent and dependent variables.',
    scenarios: [
      {
        id: 'm-26-a',
        text: 'A BCBA examines Leo\'s graphed data and notes that his problem behavior was stable at a high level during baseline, showed an immediate decrease at the start of intervention, continued to decrease with low variability, and maintained at near-zero levels for three weeks. She concludes the intervention was effective.',
        isCorrect: true,
        explanation: 'Examining graphed data for level, trend, and variability within and across phases to draw conclusions about intervention effectiveness is visual analysis.',
      },
      {
        id: 'm-26-b',
        text: 'A BCBA calculates the mean and standard deviation of Leo\'s problem behavior during baseline and intervention phases and uses a t-test to determine whether the difference is statistically significant.',
        isCorrect: false,
        explanation: 'Using statistical tests (t-test) to determine significance is inferential statistical analysis, not visual analysis. ABA primarily relies on visual analysis of graphed data.',
      },
      {
        id: 'm-26-c',
        text: 'A BCBA has two independent observers record the frequency of Leo\'s problem behavior during the same session and calculates the percentage of agreement between their records.',
        isCorrect: false,
        explanation: 'Calculating agreement between two observers is interobserver agreement (IOA), not visual analysis.',
      },
      {
        id: 'm-26-d',
        text: 'A BCBA reviews Leo\'s data and decides to change the intervention because problem behavior has not decreased after three weeks.',
        isCorrect: false,
        explanation: 'Making a clinical decision based on data is data-based decision making. While visual analysis informs this decision, the scenario describes the decision itself, not the analysis method.',
      },
    ],
  },

  // -- ASSESSMENT ----------------------------------------------------------------
  {
    id: 'm-27',
    domain: 'Assessment',
    concept: 'ABC (Descriptive) Assessment',
    tcoDomain: 'F  -  Behavior Assessment',
    definition: 'A direct observational assessment procedure in which the observer records antecedents, behaviors, and consequences as they occur naturally in the environment, without experimental manipulation; used to generate hypotheses about the function of behavior.',
    scenarios: [
      {
        id: 'm-27-a',
        text: 'Leo\'s BCBA observes him in his classroom for 30 minutes and records, in real time, what happens immediately before each instance of problem behavior (antecedent), the behavior itself, and what happens immediately after (consequence). She uses this data to generate a hypothesis about the function of his problem behavior.',
        isCorrect: true,
        explanation: 'Observing and recording antecedents, behaviors, and consequences in the natural environment without manipulation is an ABC (descriptive) assessment.',
      },
      {
        id: 'm-27-b',
        text: 'Leo\'s BCBA systematically manipulates antecedent and consequence conditions across four structured conditions to identify the function of his problem behavior.',
        isCorrect: false,
        explanation: 'Systematically manipulating conditions to identify behavioral function is a functional analysis (experimental assessment), not an ABC descriptive assessment.',
      },
      {
        id: 'm-27-c',
        text: 'Leo\'s BCBA interviews his parents and teachers about when problem behavior is most and least likely to occur and what typically precedes and follows it.',
        isCorrect: false,
        explanation: 'Gathering information through interviews without direct observation is an indirect assessment, not an ABC descriptive assessment.',
      },
      {
        id: 'm-27-d',
        text: 'Leo\'s BCBA presents six preferred items simultaneously and records which items Leo selects to generate a rank-ordered preference hierarchy.',
        isCorrect: false,
        explanation: 'Systematically presenting stimuli to identify preferences is a preference assessment (MSWO), not an ABC descriptive assessment.',
      },
    ],
  },
  {
    id: 'm-28',
    domain: 'Assessment',
    concept: 'Skill-Based Assessment (VB-MAPP / ABLLS-R)',
    tcoDomain: 'F  -  Behavior Assessment',
    definition: 'A criterion-referenced assessment tool used to evaluate a learner\'s current verbal behavior repertoire and other skill areas across developmental milestones, used to guide programming decisions.',
    scenarios: [
      {
        id: 'm-28-a',
        text: 'Leo\'s BCBA administers a structured assessment that evaluates his manding, tacting, intraverbal, listener responding, and play skills across developmental milestones. She uses the results to identify skill gaps and prioritize goals for his behavior intervention plan.',
        isCorrect: true,
        explanation: 'Evaluating a learner\'s verbal behavior repertoire across developmental milestones using a criterion-referenced tool to guide programming is a skill-based assessment (e.g., VB-MAPP or ABLLS-R).',
      },
      {
        id: 'm-28-b',
        text: 'Leo\'s BCBA conducts a structured assessment with attention, demand, alone, and control conditions to identify the function of his problem behavior.',
        isCorrect: false,
        explanation: 'Systematically manipulating conditions to identify behavioral function is a functional analysis, not a skill-based assessment.',
      },
      {
        id: 'm-28-c',
        text: 'Leo\'s BCBA observes him in the classroom and records antecedents, behaviors, and consequences in real time to generate a hypothesis about his problem behavior.',
        isCorrect: false,
        explanation: 'Recording ABC sequences in the natural environment is a descriptive (ABC) assessment, not a skill-based assessment.',
      },
      {
        id: 'm-28-d',
        text: 'Leo\'s BCBA asks his parents to rate his adaptive behavior skills (communication, daily living, socialization) using a standardized rating scale.',
        isCorrect: false,
        explanation: 'Collecting information about adaptive behavior through a standardized parent-report rating scale is an indirect assessment tool (e.g., Vineland), not a direct skill-based assessment like VB-MAPP.',
      },
    ],
  },

  // -- SKILL ACQUISITION ---------------------------------------------------------
  {
    id: 'm-29',
    domain: 'Skill Acquisition',
    concept: 'Discrete Trial Training (DTT)',
    tcoDomain: 'F  -  Behavior Assessment',
    definition: 'A structured teaching method in which each trial consists of a discriminative stimulus (SD), a response opportunity, a consequence, and an inter-trial interval; used to teach skills in a controlled, massed-trial format.',
    scenarios: [
      {
        id: 'm-29-a',
        text: 'Leo\'s BCBA sits across from him at a table. She presents a picture of a dog and says "What is this?" (SD). Leo says "dog" (response). She immediately delivers praise and a token (consequence). She pauses for 3 seconds (ITI) before presenting the next trial.',
        isCorrect: true,
        explanation: 'A structured teaching trial with a clear SD, response opportunity, consequence, and inter-trial interval is discrete trial training (DTT).',
      },
      {
        id: 'm-29-b',
        text: 'Leo\'s BCBA teaches him to request preferred items by waiting for him to show interest in an item (MO present) and then prompting a mand, reinforcing it with the item, and embedding trials throughout the natural environment.',
        isCorrect: false,
        explanation: 'Teaching skills by capitalizing on naturally occurring motivating operations in the natural environment is Natural Environment Teaching (NET), not DTT.',
      },
      {
        id: 'm-29-c',
        text: 'Leo\'s BCBA teaches him to wash his hands by prompting him through each step of the chain and reinforcing completion of the entire sequence.',
        isCorrect: false,
        explanation: 'Teaching a multi-step behavior chain as a complete sequence is chaining (total task or forward/backward), not DTT.',
      },
      {
        id: 'm-29-d',
        text: 'Leo\'s BCBA presents a new skill alongside two mastered skills in each session, rotating which skill is presented first to promote maintenance and generalization.',
        isCorrect: false,
        explanation: 'Mixing new and mastered targets across trials to promote maintenance and generalization is a distributed practice or interspersal procedure, which can occur within DTT but is not itself the defining feature of DTT.',
      },
    ],
  },
  {
    id: 'm-30',
    domain: 'Skill Acquisition',
    concept: 'Natural Environment Teaching (NET)',
    tcoDomain: 'F  -  Behavior Assessment',
    definition: 'A teaching approach in which instruction is embedded in naturally occurring activities and routines, capitalizing on the learner\'s motivating operations to teach functional skills in the context where they will be used.',
    scenarios: [
      {
        id: 'm-30-a',
        text: 'Leo reaches toward a container of bubbles on a shelf (MO present). His BCBA intercepts, holds the bubbles up, and waits. Leo says "bubbles." She immediately opens the bubbles and blows them (natural reinforcer). The teaching trial occurred in the natural context, motivated by Leo\'s interest.',
        isCorrect: true,
        explanation: 'Capitalizing on a naturally occurring MO to teach a mand in the natural environment with a natural reinforcer is Natural Environment Teaching (NET).',
      },
      {
        id: 'm-30-b',
        text: 'Leo\'s BCBA sits across from him at a table and presents a picture card, asks "What is this?", waits for his response, and delivers praise and a token regardless of whether he was interested in the item.',
        isCorrect: false,
        explanation: 'Structured, massed-trial teaching at a table with contrived SDs and consequences is Discrete Trial Training (DTT), not NET.',
      },
      {
        id: 'm-30-c',
        text: 'Leo is learning to tie his shoes. His BCBA teaches him to independently perform only the last step (pulling the loops tight) first, then adds the preceding step once mastered.',
        isCorrect: false,
        explanation: 'Teaching the last step of a chain first and adding steps in reverse order is backward chaining, not NET.',
      },
      {
        id: 'm-30-d',
        text: 'Leo is learning to identify colors. His BCBA initially presents only red and blue, then gradually adds more colors as he masters each pair.',
        isCorrect: false,
        explanation: 'Gradually increasing the number of stimuli is a stimulus shaping or errorless learning procedure, not NET.',
      },
    ],
  },
  {
    id: 'm-31',
    domain: 'Skill Acquisition',
    concept: 'Prompt Hierarchy -- Levels of Intrusiveness',
    tcoDomain: 'F  -  Behavior Assessment',
    definition: 'The conceptual framework that ranks prompts from most to least intrusive (e.g., full physical > partial physical > modeling > gestural > verbal > independent), used to guide prompt selection and fading decisions across all prompting systems.',
    scenarios: [
      {
        id: 'm-31-a',
        text: 'Leo is learning to point to pictures. His BCBA initially provides full physical guidance (hand-over-hand) to ensure correct responding. As Leo becomes more accurate, she fades to partial physical guidance, then a light touch, then a gestural prompt, then no prompt.',
        isCorrect: true,
        explanation: 'Starting with the most intrusive prompt (full physical) and systematically fading to less intrusive prompts is a most-to-least (MTL) prompt hierarchy.',
      },
      {
        id: 'm-31-b',
        text: 'Leo is learning to label pictures. His BCBA first provides no prompt. If Leo does not respond within 3 seconds, she provides a gestural prompt. If he still does not respond, she provides a partial verbal model. If needed, she provides a full verbal model.',
        isCorrect: false,
        explanation: 'Starting with no prompt and adding increasingly intrusive prompts only when needed is a least-to-most (LTM) prompt hierarchy, not most-to-least.',
      },
      {
        id: 'm-31-c',
        text: 'Leo is learning to read the word "stop." His BCBA initially presents it in large red letters and gradually fades the size and color until he reads it in standard black text.',
        isCorrect: false,
        explanation: 'Gradually changing the physical dimensions of the target stimulus is stimulus fading, not a prompt hierarchy.',
      },
      {
        id: 'm-31-d',
        text: 'Leo is learning to request items. His BCBA provides a full verbal model ("I want cookie") immediately after presenting the item, without waiting for Leo to attempt a response.',
        isCorrect: false,
        explanation: 'Providing a prompt immediately after the SD without waiting for a response is a simultaneous prompting procedure, not a most-to-least hierarchy.',
      },
    ],
  },

  // -- BEHAVIOR REDUCTION --------------------------------------------------------
  {
    id: 'm-32',
    domain: 'Behavior Reduction',
    concept: 'Noncontingent Reinforcement (NCR)',
    tcoDomain: 'G  -  Behavior-Change Procedures',
    definition: 'A procedure in which a reinforcer is delivered on a fixed- or variable-time schedule, independent of the occurrence of any specific behavior; functions as an abolishing operation to reduce problem behavior.',
    scenarios: [
      {
        id: 'm-32-a',
        text: 'Leo\'s problem behavior is maintained by attention. His BCBA begins providing brief attention to Leo every 3 minutes, regardless of his behavior. Over two weeks, his attention-maintained problem behavior decreases significantly.',
        isCorrect: true,
        explanation: 'Delivering the maintaining reinforcer (attention) on a time-based schedule regardless of behavior is noncontingent reinforcement (NCR). It functions as an abolishing operation, reducing the value of the reinforcer and thus the motivation to engage in problem behavior.',
      },
      {
        id: 'm-32-b',
        text: 'Leo\'s BCBA reinforces him for any behavior other than hitting during 30-second intervals. Hitting decreases over two weeks.',
        isCorrect: false,
        explanation: 'Reinforcing the absence of a specific behavior during intervals is differential reinforcement of other behavior (DRO), not NCR. NCR is delivered regardless of behavior.',
      },
      {
        id: 'm-32-c',
        text: 'Leo\'s BCBA teaches him to request attention using his AAC device and provides attention when he uses the device. Simultaneously, attention is withheld following problem behavior.',
        isCorrect: false,
        explanation: 'Reinforcing a specific alternative behavior while placing problem behavior on extinction is DRA (specifically FCT), not NCR.',
      },
      {
        id: 'm-32-d',
        text: 'Leo\'s BCBA reinforces him for sitting in his chair, which is physically incompatible with running in the hallway.',
        isCorrect: false,
        explanation: 'Reinforcing a behavior that is physically incompatible with the problem behavior is DRI, not NCR.',
      },
    ],
  },
  {
    id: 'm-33',
    domain: 'Behavior Reduction',
    concept: 'Differential Reinforcement of Other Behavior (DRO)',
    tcoDomain: 'G  -  Behavior-Change Procedures',
    definition: 'A procedure in which reinforcement is delivered at the end of an interval if the target problem behavior did NOT occur during that interval; reinforces the absence of the problem behavior.',
    scenarios: [
      {
        id: 'm-33-a',
        text: 'Leo\'s BCBA sets a timer for 5-minute intervals. If Leo does not engage in self-injury during the entire 5-minute interval, he earns a token at the end of the interval. If self-injury occurs, the timer is reset. Over four weeks, self-injury decreases.',
        isCorrect: true,
        explanation: 'Delivering reinforcement at the end of an interval contingent on the ABSENCE of the problem behavior during that interval is DRO.',
      },
      {
        id: 'm-33-b',
        text: 'Leo\'s BCBA reinforces him for requesting items using his AAC device (an alternative to hitting) while withholding the reinforcer following hitting.',
        isCorrect: false,
        explanation: 'Reinforcing a specific alternative behavior while placing problem behavior on extinction is DRA, not DRO. DRO reinforces the absence of behavior, not a specific alternative.',
      },
      {
        id: 'm-33-c',
        text: 'Leo\'s BCBA delivers attention to Leo every 3 minutes regardless of his behavior. His attention-maintained problem behavior decreases.',
        isCorrect: false,
        explanation: 'Delivering reinforcement on a time-based schedule regardless of behavior is NCR, not DRO. DRO requires the absence of the problem behavior during the interval.',
      },
      {
        id: 'm-33-d',
        text: 'Leo\'s BCBA reinforces him for sitting in his chair (incompatible with running). Running decreases.',
        isCorrect: false,
        explanation: 'Reinforcing a behavior that is physically incompatible with the problem behavior is DRI, not DRO.',
      },
    ],
  },

  // -- VERBAL BEHAVIOR -----------------------------------------------------------
  {
    id: 'm-34',
    domain: 'Verbal Behavior',
    concept: 'Tact',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'A verbal operant controlled by a nonverbal discriminative stimulus (an object, event, or property of the environment) and reinforced by generalized conditioned reinforcement.',
    scenarios: [
      {
        id: 'm-34-a',
        text: 'Leo\'s BCBA holds up a real apple and asks "What is this?" Leo says "apple" and receives praise. Over time, Leo labels apples, oranges, and bananas correctly whenever they are presented, regardless of whether he is hungry.',
        isCorrect: true,
        explanation: 'The verbal behavior ("apple") is controlled by a nonverbal SD (the apple) and reinforced by generalized reinforcement (praise)  --  this is a tact.',
      },
      {
        id: 'm-34-b',
        text: 'Leo has not had his preferred snack for 45 minutes. He approaches his BCBA and says "cookie." She gives him a cookie. His cookie-requesting increases.',
        isCorrect: false,
        explanation: 'The verbal behavior is controlled by an MO (deprivation) and reinforced by the specific, characteristic consequence (cookie)  --  this is a mand, not a tact.',
      },
      {
        id: 'm-34-c',
        text: 'Leo\'s BCBA asks "What do you do when you\'re hungry?" and Leo says "eat food." She praises him.',
        isCorrect: false,
        explanation: 'The verbal behavior is controlled by a verbal SD (the question) and reinforced by generalized reinforcement  --  this is an intraverbal, not a tact.',
      },
      {
        id: 'm-34-d',
        text: 'Leo\'s BCBA says "red" and Leo immediately repeats "red." She praises him for the correct response.',
        isCorrect: false,
        explanation: 'The verbal behavior has point-to-point correspondence with a verbal SD (the BCBA\'s "red")  --  this is an echoic, not a tact.',
      },
    ],
  },
  {
    id: 'm-35',
    domain: 'Verbal Behavior',
    concept: 'Intraverbal',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'A verbal operant in which the response is controlled by a verbal discriminative stimulus and there is no point-to-point correspondence between the SD and the response; reinforced by generalized conditioned reinforcement.',
    scenarios: [
      {
        id: 'm-35-a',
        text: 'Leo\'s BCBA asks "What do you do when you\'re cold?" and Leo says "put on a jacket." She praises him. The question and answer do not share any words or sounds.',
        isCorrect: true,
        explanation: 'The verbal behavior is controlled by a verbal SD (the question) with no point-to-point correspondence between the question and the answer, reinforced by generalized reinforcement  --  this is an intraverbal.',
      },
      {
        id: 'm-35-b',
        text: 'Leo\'s BCBA holds up a picture of a dog and asks "What is this?" Leo says "dog" and receives praise.',
        isCorrect: false,
        explanation: 'The verbal behavior is controlled by a nonverbal SD (the picture)  --  this is a tact, not an intraverbal.',
      },
      {
        id: 'm-35-c',
        text: 'Leo is hungry and says "cookie" to his BCBA. She gives him a cookie. His cookie-requesting increases.',
        isCorrect: false,
        explanation: 'The verbal behavior is controlled by an MO and reinforced by the specific, characteristic consequence  --  this is a mand, not an intraverbal.',
      },
      {
        id: 'm-35-d',
        text: 'Leo\'s BCBA says "dog" and Leo immediately says "dog." She praises him.',
        isCorrect: false,
        explanation: 'The verbal behavior has point-to-point correspondence with the verbal SD  --  this is an echoic, not an intraverbal.',
      },
    ],
  },
  {
    id: 'm-36',
    domain: 'Verbal Behavior',
    concept: 'Functional Communication Training (FCT)',
    tcoDomain: 'G  -  Behavior-Change Procedures',
    definition: 'A DRA procedure in which a functionally equivalent communicative response is taught as an alternative to problem behavior; the communicative response produces the same reinforcer that previously maintained the problem behavior.',
    scenarios: [
      {
        id: 'm-36-a',
        text: 'Leo\'s problem behavior is maintained by escape from demands. His BCBA teaches him to hand a "break" card to request a break from tasks. When he uses the card, he receives a brief break. Simultaneously, problem behavior no longer results in escape. Over four weeks, problem behavior decreases and break-card use increases.',
        isCorrect: true,
        explanation: 'Teaching a communicative response (break card) that produces the same reinforcer (escape) that maintained problem behavior, while placing problem behavior on extinction, is Functional Communication Training (FCT).',
      },
      {
        id: 'm-36-b',
        text: 'Leo\'s BCBA reinforces him for any behavior other than hitting during 5-minute intervals. Hitting decreases over three weeks.',
        isCorrect: false,
        explanation: 'Reinforcing the absence of problem behavior during intervals is DRO, not FCT. FCT requires teaching a specific communicative alternative.',
      },
      {
        id: 'm-36-c',
        text: 'Leo\'s BCBA delivers attention to him every 3 minutes regardless of his behavior. His attention-maintained problem behavior decreases.',
        isCorrect: false,
        explanation: 'Delivering the maintaining reinforcer on a time-based schedule regardless of behavior is NCR, not FCT.',
      },
      {
        id: 'm-36-d',
        text: 'Leo\'s BCBA reinforces him for sitting in his chair, which is physically incompatible with running in the hallway. Running decreases.',
        isCorrect: false,
        explanation: 'Reinforcing a behavior that is physically incompatible with the problem behavior is DRI, not FCT. FCT specifically involves teaching a communicative response.',
      },
    ],
  },

  // -- PERSONNEL SUPERVISION -----------------------------------------------------
  {
    id: 'm-37',
    domain: 'Personnel Supervision',
    concept: 'Performance Monitoring',
    tcoDomain: 'I  -  Personnel Supervision and Management',
    definition: 'The ongoing process of directly observing and measuring a supervisee\'s implementation of behavior analytic procedures to evaluate accuracy and identify areas for improvement.',
    scenarios: [
      {
        id: 'm-37-a',
        text: 'A BCBA uses a task analysis checklist to directly observe her RBT implementing a DTT program with Leo. She records whether each step of the protocol (SD delivery, prompt level, consequence delivery, ITI) is implemented correctly and provides immediate feedback after the session.',
        isCorrect: true,
        explanation: 'Directly observing and measuring a supervisee\'s implementation accuracy using a structured checklist is performance monitoring.',
      },
      {
        id: 'm-37-b',
        text: 'A BCBA meets with her RBT weekly to discuss Leo\'s progress, review data, and set goals for the upcoming week.',
        isCorrect: false,
        explanation: 'Meeting to discuss progress and set goals is a supervisory meeting, not performance monitoring. Performance monitoring requires direct observation of the supervisee\'s implementation.',
      },
      {
        id: 'm-37-c',
        text: 'A BCBA reviews Leo\'s session data graphs and notes that his problem behavior has not decreased despite three weeks of intervention.',
        isCorrect: false,
        explanation: 'Reviewing client outcome data is data-based decision making, not performance monitoring. Performance monitoring focuses on the supervisee\'s behavior, not the client\'s.',
      },
      {
        id: 'm-37-d',
        text: 'A BCBA provides her RBT with a written description of the new FCT protocol and reviews it with her before the session.',
        isCorrect: false,
        explanation: 'Providing written instructions and reviewing them is training/instruction, not performance monitoring. Performance monitoring occurs during or after implementation.',
      },
    ],
  },
  {
    id: 'm-38',
    domain: 'Personnel Supervision',
    concept: 'Behavioral Skills Training (BST)',
    tcoDomain: 'I  -  Personnel Supervision and Management',
    definition: 'A training package consisting of four components  --  instruction, modeling, rehearsal, and feedback  --  used to teach new skills to supervisees and caregivers.',
    scenarios: [
      {
        id: 'm-38-a',
        text: 'A BCBA trains her RBT to implement a new prompting procedure by: (1) explaining the steps verbally and providing a written protocol, (2) demonstrating the procedure with Leo, (3) having the RBT practice the procedure with Leo while the BCBA observes, and (4) providing specific praise for correct steps and corrective feedback for errors.',
        isCorrect: true,
        explanation: 'A training package that includes instruction, modeling, rehearsal (role-play/practice), and feedback is Behavioral Skills Training (BST).',
      },
      {
        id: 'm-38-b',
        text: 'A BCBA uses a task analysis checklist to observe her RBT implementing a DTT program and records the percentage of steps implemented correctly.',
        isCorrect: false,
        explanation: 'Observing and measuring implementation accuracy is performance monitoring, not BST. BST is a training package, not an ongoing monitoring procedure.',
      },
      {
        id: 'm-38-c',
        text: 'A BCBA meets with her RBT weekly to review Leo\'s data, discuss clinical decisions, and provide guidance on programming.',
        isCorrect: false,
        explanation: 'Weekly meetings to review data and discuss clinical decisions are supervisory meetings, not BST. BST specifically involves instruction, modeling, rehearsal, and feedback.',
      },
      {
        id: 'm-38-d',
        text: 'A BCBA emails her RBT a written description of a new behavior intervention plan and asks her to review it before the next session.',
        isCorrect: false,
        explanation: 'Providing written instructions only is the "instruction" component of BST, not the full BST package. BST requires all four components: instruction, modeling, rehearsal, and feedback.',
      },
    ],
  },

  // -- ETHICS & PROFESSIONAL PRACTICE -------------------------------------------
  {
    id: 'm-39',
    domain: 'Ethics & Professional Practice',
    concept: 'Scope of Competence',
    tcoDomain: 'E  -  Ethical and Professional Issues',
    definition: 'The principle that behavior analysts only practice within the boundaries of their competence, based on their education, training, supervised experience, and professional credentials.',
    scenarios: [
      {
        id: 'm-39-a',
        text: 'A BCBA is asked by a family to provide feeding therapy for their child with ABA techniques. The BCBA has no training or supervised experience in feeding disorders. She declines and provides a referral to a feeding specialist, explaining that this is outside her area of competence.',
        isCorrect: true,
        explanation: 'Declining to provide services outside one\'s training and supervised experience and providing an appropriate referral is practicing within scope of competence.',
      },
      {
        id: 'm-39-b',
        text: 'A BCBA provides services to a client whose family speaks only Spanish. The BCBA does not speak Spanish and does not arrange for an interpreter. She proceeds with services using gestures and simplified English.',
        isCorrect: false,
        explanation: 'Proceeding without ensuring effective communication with the client\'s family is an ethics violation related to cultural responsiveness and client welfare, not specifically scope of competence.',
      },
      {
        id: 'm-39-c',
        text: 'A BCBA uses a punishment procedure without first attempting less restrictive alternatives and without obtaining informed consent from the family.',
        isCorrect: false,
        explanation: 'Using punishment without attempting less restrictive alternatives and without informed consent is a violation of the least restrictive alternative principle and informed consent requirements, not specifically scope of competence.',
      },
      {
        id: 'm-39-d',
        text: 'A BCBA accepts a gift from a client\'s family worth $75 at the end of the school year.',
        isCorrect: false,
        explanation: 'Accepting gifts from clients raises concerns about multiple relationships and professional boundaries, not scope of competence.',
      },
    ],
  },
  {
    id: 'm-40',
    domain: 'Ethics & Professional Practice',
    concept: 'Informed Consent',
    tcoDomain: 'E  -  Ethical and Professional Issues',
    definition: 'The process of providing clients and/or their legal guardians with sufficient information about proposed services (including risks, benefits, and alternatives) in a manner they can understand, and obtaining their voluntary agreement before services begin.',
    scenarios: [
      {
        id: 'm-40-a',
        text: 'Before implementing a new behavior intervention plan that includes a response cost component, a BCBA explains the procedure to Leo\'s parents in plain language, describes the potential risks and benefits, presents alternative approaches, answers their questions, and obtains their written signature on a consent form.',
        isCorrect: true,
        explanation: 'Providing sufficient information about the intervention (risks, benefits, alternatives) in understandable language and obtaining voluntary agreement before implementation is informed consent.',
      },
      {
        id: 'm-40-b',
        text: 'A BCBA checks whether her RBT is implementing each step of the FCT protocol correctly using a task analysis checklist.',
        isCorrect: false,
        explanation: 'Checking implementation accuracy is treatment integrity monitoring, not informed consent.',
      },
      {
        id: 'm-40-c',
        text: 'A BCBA declines to provide feeding therapy because she has no training in that area and refers the family to a feeding specialist.',
        isCorrect: false,
        explanation: 'Declining services outside one\'s training is practicing within scope of competence, not informed consent.',
      },
      {
        id: 'm-40-d',
        text: 'A BCBA reviews Leo\'s data and decides to modify his behavior intervention plan because problem behavior has not decreased after three weeks.',
        isCorrect: false,
        explanation: 'Making data-based clinical decisions is data-based decision making, not informed consent. Informed consent is obtained before services begin and when significant changes are made.',
      },
    ],
  },
  {
    id: 'm-41',
    domain: 'Ethics & Professional Practice',
    concept: 'Least Restrictive Alternative',
    tcoDomain: 'H  -  Selecting and Implementing Interventions',
    definition: 'The ethical principle that behavior analysts select interventions that are the least intrusive and most positive possible while still being effective; more restrictive procedures are used only when less restrictive alternatives have been tried or are clearly insufficient.',
    scenarios: [
      {
        id: 'm-41-a',
        text: 'Leo engages in severe self-injury. His BCBA first implements an antecedent-based intervention and FCT. After four weeks of data collection showing no meaningful reduction, she consults with the treatment team and considers adding a response interruption procedure, documenting her rationale.',
        isCorrect: true,
        explanation: 'Attempting less restrictive interventions first and moving to more restrictive procedures only when less restrictive alternatives are insufficient is the least restrictive alternative principle.',
      },
      {
        id: 'm-41-b',
        text: 'A BCBA explains a new punishment procedure to Leo\'s parents in plain language, describes risks and benefits, and obtains their written consent before implementing it.',
        isCorrect: false,
        explanation: 'Obtaining agreement before implementing a procedure is informed consent, not the least restrictive alternative principle.',
      },
      {
        id: 'm-41-c',
        text: 'A BCBA declines to provide services in an area where she has no training and refers the family to an appropriate specialist.',
        isCorrect: false,
        explanation: 'Declining services outside one\'s training is practicing within scope of competence, not the least restrictive alternative principle.',
      },
      {
        id: 'm-41-d',
        text: 'A BCBA uses a task analysis checklist to verify that her RBT is implementing the FCT protocol correctly.',
        isCorrect: false,
        explanation: 'Checking implementation accuracy is treatment integrity monitoring, not the least restrictive alternative principle.',
      },
    ],
  },

  // -- BEHAVIOR PRINCIPLES (additional) -----------------------------------------
  {
    id: 'm-42',
    domain: 'Behavior Principles',
    concept: 'Spontaneous Recovery',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'The reappearance of an extinguished behavior after a period of time has passed since extinction was in effect, without any additional reinforcement.',
    scenarios: [
      {
        id: 'm-42-a',
        text: 'Leo\'s tantrums were extinguished at school over four weeks. During a two-week school break, no extinction procedures were in place. On the first day back, Leo\'s tantrums briefly return at a lower rate than baseline before quickly extinguishing again.',
        isCorrect: true,
        explanation: 'Reappearance of extinguished behavior after a period of time without extinction in place is spontaneous recovery.',
      },
      {
        id: 'm-42-b',
        text: 'Leo\'s tantrums increase dramatically on day 1 of extinction, reaching twice the baseline rate, before gradually decreasing over two weeks.',
        isCorrect: false,
        explanation: 'A temporary increase in frequency, duration, or intensity at the START of extinction is an extinction burst, not spontaneous recovery.',
      },
      {
        id: 'm-42-c',
        text: 'Leo\'s hitting was extinguished. When his FCT program is placed on extinction, hitting returns at a moderate rate.',
        isCorrect: false,
        explanation: 'Reappearance of a previously extinguished behavior when a more recently reinforced behavior is placed on extinction is resurgence, not spontaneous recovery.',
      },
      {
        id: 'm-42-d',
        text: 'Leo\'s problem behavior is extinguished at school. His parents report that his problem behavior at home has increased, even though nothing has changed at home.',
        isCorrect: false,
        explanation: 'An increase in behavior in a different context when reinforcement decreases in the original context is behavioral contrast, not spontaneous recovery.',
      },
    ],
  },
  {
    id: 'm-43',
    domain: 'Behavior Principles',
    concept: 'Abolishing Operation (AO)',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'A motivating operation that decreases the reinforcing effectiveness of a stimulus and decreases the current frequency of behavior that has been reinforced by that stimulus.',
    scenarios: [
      {
        id: 'm-43-a',
        text: 'Leo has just finished a large snack. His BCBA observes that he is now requesting food much less frequently than before the snack, and that food is functioning as a weaker reinforcer during the current session.',
        isCorrect: true,
        explanation: 'Satiation (having just consumed food) has decreased both the reinforcing value of food AND the frequency of food-seeking behavior  --  both effects of an abolishing operation (AO).',
      },
      {
        id: 'm-43-b',
        text: 'Leo has not had access to his preferred tablet for three hours. His BCBA observes that he is now requesting the tablet more frequently and that tablet access is functioning as a stronger reinforcer.',
        isCorrect: false,
        explanation: 'Deprivation that increases the value of a reinforcer and the frequency of behavior is an establishing operation (EO), the opposite of an abolishing operation.',
      },
      {
        id: 'm-43-c',
        text: 'Leo\'s BCBA delivers attention to him every 3 minutes regardless of his behavior. His attention-maintained problem behavior decreases.',
        isCorrect: false,
        explanation: 'Delivering the maintaining reinforcer on a time-based schedule is NCR, which functions as an AO, but the scenario describes the NCR procedure itself, not the AO concept directly.',
      },
      {
        id: 'm-43-d',
        text: 'Leo\'s BCBA holds up a picture of a cookie and asks "What do you want?" Leo says "cookie" and receives a cookie. He reliably requests cookies when the picture is present.',
        isCorrect: false,
        explanation: 'A stimulus that signals reinforcement is available is a discriminative stimulus (SD), not an abolishing operation.',
      },
    ],
  },
  {
    id: 'm-44',
    domain: 'Measurement',
    concept: 'Momentary Time Sampling (MTS)',
    tcoDomain: 'C  -  Measurement',
    definition: 'A discontinuous measurement procedure in which the observer records whether the behavior is occurring at the exact moment a time interval ends; tends to provide an estimate of the proportion of time a behavior occurs.',
    scenarios: [
      {
        id: 'm-44-a',
        text: 'Leo\'s BCBA sets a timer for 30-second intervals. At the exact moment the timer sounds, she looks up and records whether Leo is on-task at that precise moment. She calculates the percentage of intervals in which he was on-task at the observation moment.',
        isCorrect: true,
        explanation: 'Recording whether the behavior is occurring at the EXACT MOMENT the interval ends is momentary time sampling (MTS).',
      },
      {
        id: 'm-44-b',
        text: 'Leo\'s BCBA marks a "+" for any interval in which Leo engages in stereotypy for even one second.',
        isCorrect: false,
        explanation: 'Recording if the behavior occurs at ANY POINT during the interval is partial interval recording, not MTS.',
      },
      {
        id: 'm-44-c',
        text: 'Leo\'s BCBA marks a "+" only for intervals in which Leo is on-task for the ENTIRE interval.',
        isCorrect: false,
        explanation: 'Recording only when behavior occurs for the ENTIRE interval is whole interval recording, not MTS.',
      },
      {
        id: 'm-44-d',
        text: 'Leo\'s BCBA counts every instance of hand-flapping during a 10-minute session.',
        isCorrect: false,
        explanation: 'Counting every instance of a behavior is frequency (event) recording, not MTS.',
      },
    ],
  },
  {
    id: 'm-45',
    domain: 'Skill Acquisition',
    concept: 'Shaping',
    tcoDomain: 'F  -  Behavior Assessment',
    definition: 'A procedure for establishing a new behavior by differentially reinforcing successive approximations to the target behavior while placing previous approximations on extinction.',
    scenarios: [
      {
        id: 'm-45-a',
        text: 'Leo does not yet say words. His BCBA first reinforces any vocalization, then only vocalizations that sound like "b," then only "ba," then only "ball." At each step, the previous approximation is no longer reinforced. Over several weeks, Leo says "ball" clearly.',
        isCorrect: true,
        explanation: 'Reinforcing successive approximations to the target response while placing previous approximations on extinction is shaping.',
      },
      {
        id: 'm-45-b',
        text: 'Leo is learning to wash his hands. His BCBA prompts him through all steps and then requires him to independently perform only the last step (drying) first, adding steps in reverse order.',
        isCorrect: false,
        explanation: 'Teaching the last step of a chain first and adding steps in reverse order is backward chaining, not shaping.',
      },
      {
        id: 'm-45-c',
        text: 'Leo is learning to read "stop." His BCBA initially presents it in large red letters and gradually fades the size and color until he reads it in standard black text.',
        isCorrect: false,
        explanation: 'Gradually changing the physical dimensions of the target stimulus is stimulus fading, not shaping.',
      },
      {
        id: 'm-45-d',
        text: 'Leo is learning to point to pictures. His BCBA initially provides full physical guidance and systematically fades to less intrusive prompts.',
        isCorrect: false,
        explanation: 'Systematically reducing the level of prompting is prompt fading (most-to-least prompting), not shaping.',
      },
    ],
  },
  {
    id: 'm-46',
    domain: 'Research & Design',
    concept: 'Changing Criterion Design',
    tcoDomain: 'D  -  Experimental Design',
    definition: 'A single-case experimental design in which the criterion for reinforcement is systematically changed in a stepwise fashion; experimental control is demonstrated when behavior changes to match each new criterion.',
    scenarios: [
      {
        id: 'm-46-a',
        text: 'A BCBA wants to increase Leo\'s independent work duration. She first reinforces him for working independently for 5 minutes. Once he consistently meets this criterion, she raises it to 10 minutes, then 15 minutes, then 20 minutes. Leo\'s work duration increases to match each new criterion.',
        isCorrect: true,
        explanation: 'Systematically raising the criterion for reinforcement in a stepwise fashion, with behavior changing to match each new criterion, is a changing criterion design.',
      },
      {
        id: 'm-46-b',
        text: 'A BCBA introduces a token economy, then withdraws it, then reintroduces it, demonstrating that on-task behavior changes with the intervention.',
        isCorrect: false,
        explanation: 'Introducing, withdrawing, and reintroducing the intervention is a reversal (ABAB) design, not a changing criterion design.',
      },
      {
        id: 'm-46-c',
        text: 'A BCBA introduces a social skills intervention for Leo\'s greeting, sharing, and turn-taking sequentially, after establishing stable baselines for each.',
        isCorrect: false,
        explanation: 'Introducing the intervention sequentially across multiple tiers is a multiple baseline design, not a changing criterion design.',
      },
      {
        id: 'm-46-d',
        text: 'A BCBA rapidly alternates between errorless learning and trial-and-error conditions within sessions to compare their effects on Leo\'s accuracy.',
        isCorrect: false,
        explanation: 'Rapidly alternating between conditions within sessions is an alternating treatments design, not a changing criterion design.',
      },
    ],
  },
  {
    id: 'm-47',
    domain: 'Assessment',
    concept: 'Indirect Assessment',
    tcoDomain: 'F  -  Behavior Assessment',
    definition: 'An assessment method that gathers information about behavior through interviews, rating scales, or questionnaires rather than through direct observation; used to generate hypotheses about the function of behavior.',
    scenarios: [
      {
        id: 'm-47-a',
        text: 'Leo\'s BCBA interviews his parents and teachers using a structured interview form (e.g., FAI) to gather information about when problem behavior is most and least likely to occur, what typically precedes it, and what usually follows it. She uses this information to generate a hypothesis about the function of his behavior.',
        isCorrect: true,
        explanation: 'Gathering information about behavior through structured interviews without direct observation or experimental manipulation is an indirect assessment.',
      },
      {
        id: 'm-47-b',
        text: 'Leo\'s BCBA observes him in the classroom and records antecedents, behaviors, and consequences in real time.',
        isCorrect: false,
        explanation: 'Recording ABC sequences through direct observation in the natural environment is a descriptive (ABC) assessment, not an indirect assessment.',
      },
      {
        id: 'm-47-c',
        text: 'Leo\'s BCBA systematically manipulates antecedent and consequence conditions across four structured conditions to identify the function of his problem behavior.',
        isCorrect: false,
        explanation: 'Systematically manipulating conditions to identify behavioral function is a functional analysis (experimental assessment), not an indirect assessment.',
      },
      {
        id: 'm-47-d',
        text: 'Leo\'s BCBA places six preferred items on the table and records which items Leo selects to generate a rank-ordered preference hierarchy.',
        isCorrect: false,
        explanation: 'Systematically presenting stimuli to identify preferences is a preference assessment (MSWO), not an indirect assessment.',
      },
    ],
  },
  {
    id: 'm-48',
    domain: 'Personnel Supervision',
    concept: 'Competency-Based Training',
    tcoDomain: 'I  -  Personnel Supervision and Management',
    definition: 'A training approach in which supervisees must demonstrate a specified level of performance (not just knowledge) before being considered trained; mastery criteria are set and verified through direct observation.',
    scenarios: [
      {
        id: 'm-48-a',
        text: 'A BCBA trains her RBT to implement a new prompting procedure using BST. She then observes the RBT implement the procedure with Leo and requires her to demonstrate 90% accuracy across three consecutive sessions before considering her trained.',
        isCorrect: true,
        explanation: 'Requiring the supervisee to demonstrate a specified level of performance (90% accuracy across 3 sessions) before being considered trained is competency-based training.',
      },
      {
        id: 'm-48-b',
        text: 'A BCBA trains her RBT by explaining the procedure, demonstrating it, having the RBT practice, and providing feedback  --  but does not set a performance criterion.',
        isCorrect: false,
        explanation: 'A training package with instruction, modeling, rehearsal, and feedback is BST. Without a mastery criterion, it is not competency-based training.',
      },
      {
        id: 'm-48-c',
        text: 'A BCBA observes her RBT implementing a DTT program and records the percentage of steps implemented correctly using a checklist.',
        isCorrect: false,
        explanation: 'Observing and measuring implementation accuracy is performance monitoring, not competency-based training.',
      },
      {
        id: 'm-48-d',
        text: 'A BCBA meets with her RBT weekly to review Leo\'s data and discuss clinical decisions.',
        isCorrect: false,
        explanation: 'Weekly meetings to review data and discuss clinical decisions are supervisory meetings, not competency-based training.',
      },
    ],
  },
  {
    id: 'm-49',
    domain: 'Ethics & Professional Practice',
    concept: 'Multiple Relationships',
    tcoDomain: 'E  -  Ethical and Professional Issues',
    definition: 'A situation in which a behavior analyst is in both a professional role and another role with a client, supervisee, or research participant; behavior analysts must avoid multiple relationships that could impair objectivity or harm the client.',
    scenarios: [
      {
        id: 'm-49-a',
        text: 'A BCBA is asked to provide ABA services to her neighbor\'s child. She recognizes that the existing social relationship could impair her professional objectivity and create conflicts of interest. She declines and provides a referral to another qualified BCBA.',
        isCorrect: true,
        explanation: 'Recognizing that a pre-existing personal relationship could impair professional objectivity and declining to provide services is appropriate management of multiple relationships.',
      },
      {
        id: 'm-49-b',
        text: 'A BCBA declines to provide feeding therapy because she has no training in that area.',
        isCorrect: false,
        explanation: 'Declining services outside one\'s training is practicing within scope of competence, not management of multiple relationships.',
      },
      {
        id: 'm-49-c',
        text: 'A BCBA explains a new punishment procedure to Leo\'s parents and obtains their written consent before implementing it.',
        isCorrect: false,
        explanation: 'Obtaining agreement before implementing a procedure is informed consent, not management of multiple relationships.',
      },
      {
        id: 'm-49-d',
        text: 'A BCBA attempts less restrictive interventions before considering a more restrictive procedure for Leo\'s self-injury.',
        isCorrect: false,
        explanation: 'Attempting less restrictive alternatives first is the least restrictive alternative principle, not management of multiple relationships.',
      },
    ],
  },
  {
    id: 'm-50',
    domain: 'Behavior Principles',
    concept: 'Response Generalization',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'The occurrence of untrained but functionally similar responses in the presence of the training stimulus, without additional training.',
    scenarios: [
      {
        id: 'm-50-a',
        text: 'Leo is taught to greet people by saying "Hi!" After training, he also begins waving, nodding, and smiling when he sees familiar people  --  none of these responses were directly trained.',
        isCorrect: true,
        explanation: 'New but functionally similar responses (waving, nodding, smiling) occurring in the presence of the trained stimulus (familiar people) without additional training is response generalization.',
      },
      {
        id: 'm-50-b',
        text: 'Leo is taught to greet his BCBA. He then begins greeting his classroom teacher, aide, and parents without additional training.',
        isCorrect: false,
        explanation: 'The same response (greeting) occurring in the presence of new but similar stimuli (different people) is stimulus generalization, not response generalization.',
      },
      {
        id: 'm-50-c',
        text: 'Leo greets his BCBA only when she is wearing her white lab coat and does not greet her in street clothes.',
        isCorrect: false,
        explanation: 'Responding only to a specific stimulus and not to similar stimuli is stimulus discrimination, not response generalization.',
      },
      {
        id: 'm-50-d',
        text: 'Leo\'s greeting behavior, which had been extinguished, returns briefly after a two-week school break.',
        isCorrect: false,
        explanation: 'Reappearance of extinguished behavior after a period of time is spontaneous recovery, not response generalization.',
      },
    ],
  },
  // -- NEW ITEMS: Behavior Principles (B) ------------------------------------
  {
    id: 'm-51',
    domain: 'Behavior Principles',
    concept: 'Extinction Burst',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'A temporary increase in the frequency, duration, or intensity of a behavior immediately following the discontinuation of reinforcement.',
    scenarios: [
      {
        id: 'm-51-a',
        text: 'A child who previously received attention for tantruming is now ignored when he tantrums. During the first week, his tantrums become louder and more frequent before gradually decreasing.',
        isCorrect: true,
        explanation: 'The initial increase in tantrum intensity and frequency following the removal of the attention contingency is a textbook extinction burst  --  a temporary escalation before the behavior decreases.',
      },
      {
        id: 'm-51-b',
        text: 'A child\'s tantruming decreases immediately after the BCBA begins ignoring it.',
        isCorrect: false,
        explanation: 'Immediate decrease following extinction is not an extinction burst. An extinction burst is defined by a temporary increase, not a decrease.',
      },
      {
        id: 'm-51-c',
        text: 'A child who was previously on a CRF schedule begins tantrumming less frequently after the schedule is thinned to VR-5.',
        isCorrect: false,
        explanation: 'Schedule thinning may produce frustration but not an extinction burst. An extinction burst occurs when reinforcement is completely discontinued, not thinned.',
      },
      {
        id: 'm-51-d',
        text: 'A child\'s tantruming returns to baseline levels after a school break, despite having been extinguished before the break.',
        isCorrect: false,
        explanation: 'Reappearance of extinguished behavior after a time gap is spontaneous recovery, not an extinction burst.',
      },
    ],
  },
  {
    id: 'm-52',
    concept: 'Spontaneous Recovery  --  Clinical Implication',
    domain: 'Behavior Principles',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'The reappearance of an extinguished behavior after a period of time, even without additional reinforcement  --  a predictable side effect of extinction that clinicians must plan for.',
    scenarios: [
      {
        id: 'm-52-a',
        text: 'A child\'s tantruming had been successfully reduced to near-zero levels through extinction over 10 weeks. The BCBA warns the family that tantrums may briefly return after a school break, even without any reinforcement having occurred. She instructs them to maintain extinction procedures if this happens.',
        isCorrect: true,
        explanation: 'Anticipating and planning for the temporary return of extinguished behavior after a break is the clinical application of spontaneous recovery  --  a predictable side effect of extinction.',
      },
      {
        id: 'm-52-b',
        text: 'A child\'s aggression increases sharply during the first week of extinction before declining.',
        isCorrect: false,
        explanation: 'A temporary increase in behavior at the start of extinction is an extinction burst, not spontaneous recovery. Spontaneous recovery occurs after a period of time has passed following successful extinction.',
      },
      {
        id: 'm-52-c',
        text: 'A child\'s previously extinguished behavior returns when a new, less preferred reinforcer is introduced as a replacement.',
        isCorrect: false,
        explanation: 'The return of problem behavior when a replacement reinforcer loses effectiveness is resurgence, not spontaneous recovery. Spontaneous recovery occurs after a time gap, not due to reinforcement changes.',
      },
      {
        id: 'm-52-d',
        text: 'A child\'s behavior increases in a new setting where extinction has not been implemented.',
        isCorrect: false,
        explanation: 'Behavior occurring in a new context where extinction has not been applied reflects a failure of generalization, not spontaneous recovery.',
      },
    ],
  },
  {
    id: 'm-53',
    domain: 'Behavior Principles',
    concept: 'Behavioral Contrast',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'A change in the rate of behavior in one component of a multiple schedule when the reinforcement contingency is altered in the other component.',
    scenarios: [
      {
        id: 'm-53-a',
        text: 'A student\'s on-task behavior is reinforced frequently in morning sessions. When the afternoon teacher stops reinforcing on-task behavior, the student\'s on-task rate in the morning sessions increases above its previous baseline.',
        isCorrect: true,
        explanation: 'The increase in on-task behavior in the morning component following a decrease in reinforcement in the afternoon component is behavioral contrast  --  a change in one component producing an opposite change in the other.',
      },
      {
        id: 'm-53-b',
        text: 'A student\'s on-task behavior increases in both morning and afternoon sessions after the morning teacher increases her reinforcement rate.',
        isCorrect: false,
        explanation: 'Behavior increasing in both components is not behavioral contrast. Contrast requires an opposite change in the unaltered component.',
      },
      {
        id: 'm-53-c',
        text: 'A student\'s problem behavior increases immediately when the teacher begins ignoring it after a period of consistent attention.',
        isCorrect: false,
        explanation: 'An immediate increase in behavior following the onset of extinction is an extinction burst, not behavioral contrast.',
      },
      {
        id: 'm-53-d',
        text: 'A student allocates more responses to a concurrent schedule that provides higher-quality reinforcement.',
        isCorrect: false,
        explanation: 'Allocating responses proportionally to reinforcement quality across concurrent schedules is described by the matching law, not behavioral contrast.',
      },
    ],
  },
  {
    id: 'm-54',
    concept: 'Resurgence  --  Distinguishing from Spontaneous Recovery',
    domain: 'Behavior Principles',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'Resurgence is the return of a previously extinguished behavior when the current reinforcement contingency is disrupted  --  distinguishable from spontaneous recovery by its trigger (reinforcement disruption, not time).',
    scenarios: [
      {
        id: 'm-54-a',
        text: 'A child\'s aggression was extinguished and replaced with a card exchange (FCT). After six months, the card exchange is placed on extinction due to a staffing change. Within two sessions, the child\'s aggression returns at high rates  --  even though aggression had not been reinforced in months.',
        isCorrect: true,
        explanation: 'The return of the previously extinguished behavior (aggression) when the alternative response (FCT) is placed on extinction is resurgence  --  triggered by disruption of the current reinforcement contingency.',
      },
      {
        id: 'm-54-b',
        text: 'A child\'s tantrums return briefly after a two-week holiday, even though no reinforcement occurred during the break.',
        isCorrect: false,
        explanation: 'The return of behavior after a time gap without reinforcement is spontaneous recovery, not resurgence. Resurgence requires disruption of a current reinforcement contingency.',
      },
      {
        id: 'm-54-c',
        text: 'A child\'s problem behavior increases during the first week of extinction before decreasing.',
        isCorrect: false,
        explanation: 'A temporary increase at the start of extinction is an extinction burst, not resurgence.',
      },
      {
        id: 'm-54-d',
        text: 'A child\'s on-task behavior decreases in the afternoon session when the afternoon teacher provides less reinforcement than the morning teacher.',
        isCorrect: false,
        explanation: 'A change in behavior across settings due to different reinforcement schedules is behavioral contrast, not resurgence.',
      },
    ],
  },
  {
    id: 'm-55',
    domain: 'Behavior Principles',
    concept: 'Conditioned Punisher',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'A previously neutral stimulus that acquires punishing properties through repeated pairing with an unconditioned or established conditioned punisher.',
    scenarios: [
      {
        id: 'm-55-a',
        text: 'A therapist repeatedly says "No" immediately before delivering a brief physical prompt correction. Over time, "No" alone decreases the child\'s behavior even when the prompt is not delivered.',
        isCorrect: true,
        explanation: '"No" acquired its punishing properties through repeated pairing with the physical prompt (an established aversive). This is a conditioned punisher  --  a neutral stimulus that becomes punishing through conditioning.',
      },
      {
        id: 'm-55-b',
        text: 'A loud noise decreases a child\'s behavior without any prior learning history.',
        isCorrect: false,
        explanation: 'A stimulus that decreases behavior without prior conditioning is an unconditioned punisher, not a conditioned punisher.',
      },
      {
        id: 'm-55-c',
        text: 'A token is delivered following a correct response and later exchanged for preferred items, increasing the child\'s correct responding.',
        isCorrect: false,
        explanation: 'A token that acquires reinforcing properties through pairing with backup reinforcers is a conditioned reinforcer, not a conditioned punisher.',
      },
      {
        id: 'm-55-d',
        text: 'A child\'s problem behavior decreases because the BCBA removes a preferred item contingent on the behavior.',
        isCorrect: false,
        explanation: 'Removing a preferred stimulus contingent on behavior to decrease it is negative punishment (response cost), not a conditioned punisher.',
      },
    ],
  },
  {
    id: 'm-56',
    concept: 'Abolishing Operation (AO)  --  Clinical Application',
    domain: 'Behavior Principles',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'An AO is used clinically to reduce the reinforcing value of a stimulus before a session, thereby decreasing the motivation for problem behavior maintained by that stimulus.',
    scenarios: [
      {
        id: 'm-56-a',
        text: 'A BCBA knows that a child\'s aggression is attention-maintained. Before each session, she instructs staff to provide 10 minutes of high-quality, non-contingent attention. During sessions, the child\'s aggression decreases significantly compared to days when pre-session attention is not provided.',
        isCorrect: true,
        explanation: 'Providing attention before the session reduces its reinforcing value (abolishes it as a reinforcer), decreasing the motivation for attention-maintained aggression. This is a clinical application of an abolishing operation.',
      },
      {
        id: 'm-56-b',
        text: 'A child who has not eaten for several hours is highly motivated to work for food reinforcers during a DTT session.',
        isCorrect: false,
        explanation: 'Food deprivation increases the reinforcing value of food, making it an establishing operation (EO), not an abolishing operation.',
      },
      {
        id: 'm-56-c',
        text: 'A BCBA removes all preferred items from the room before a session to increase the child\'s motivation to work.',
        isCorrect: false,
        explanation: 'Removing preferred items before a session increases their reinforcing value  --  this is an establishing operation, not an abolishing operation.',
      },
      {
        id: 'm-56-d',
        text: 'A BCBA provides escape from demands contingent on problem behavior, which increases the rate of problem behavior over time.',
        isCorrect: false,
        explanation: 'Providing escape contingent on problem behavior is negative reinforcement, not an abolishing operation.',
      },
    ],
  },
  {
    id: 'm-57',
    domain: 'Behavior Principles',
    concept: 'Three-Term Contingency',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'The basic unit of operant analysis: an antecedent stimulus, a behavior, and a consequence  --  the relationship among which determines whether the behavior will recur in similar antecedent conditions.',
    scenarios: [
      {
        id: 'm-57-a',
        text: 'When the teacher holds up a red card (SD), the student says "red" (behavior), and the teacher delivers praise (consequence). Over time, the student reliably names the color when the card is presented.',
        isCorrect: true,
        explanation: 'The red card (SD) -> naming "red" (behavior) -> praise (consequence) is a complete three-term contingency. The behavior comes under stimulus control of the SD because it has been reinforced in its presence.',
      },
      {
        id: 'm-57-b',
        text: 'A dog salivates when it hears a bell that has been repeatedly paired with food.',
        isCorrect: false,
        explanation: 'Salivation to a conditioned stimulus (bell) is a two-term respondent contingency (CS -> CR), not a three-term operant contingency.',
      },
      {
        id: 'm-57-c',
        text: 'A child\'s hitting increases because it produces attention from caregivers.',
        isCorrect: false,
        explanation: 'While this involves a behavior-consequence relationship, it describes a two-term contingency (behavior -> reinforcer) without specifying the antecedent stimulus that sets the occasion for the behavior.',
      },
      {
        id: 'm-57-d',
        text: 'A BCBA delivers a token after every correct response during a discrete trial session.',
        isCorrect: false,
        explanation: 'Describing only the consequence delivery (token after correct response) captures the behavior-consequence relationship but does not describe the full three-term contingency, which requires the antecedent.',
      },
    ],
  },
  // -- NEW ITEMS: Skill Acquisition (H) --------------------------------------
  {
    id: 'm-58',
    domain: 'Skill Acquisition',
    concept: 'Most-to-Least Prompting -- Error Prevention Strategy',
    tcoDomain: 'F  -  Behavior Assessment',
    definition: 'A prompting procedure that begins with the most intrusive prompt to prevent errors from the outset; particularly indicated for learners with a history of practicing errors or when errorless learning is the instructional goal.',
    scenarios: [
      {
        id: 'm-58-a',
        text: 'When teaching hand-washing, the therapist initially provides full physical guidance through all steps. As the child demonstrates each step independently, the therapist fades to partial physical, then gestural, then no prompt.',
        isCorrect: true,
        explanation: 'Starting with the most intrusive prompt (full physical guidance) and systematically reducing prompt intensity as the child demonstrates competence is most-to-least prompting.',
      },
      {
        id: 'm-58-b',
        text: 'The therapist begins by providing only a gestural prompt for hand-washing. If the child does not respond, she increases to a partial physical prompt, and then to full physical guidance.',
        isCorrect: false,
        explanation: 'Starting with the least intrusive prompt and increasing if the child does not respond is least-to-most prompting, not most-to-least.',
      },
      {
        id: 'm-58-c',
        text: 'The therapist waits 3 seconds after presenting the task demand before providing any prompt, allowing the child to attempt the response independently.',
        isCorrect: false,
        explanation: 'Waiting a specified interval before prompting is a time delay procedure, not most-to-least prompting.',
      },
      {
        id: 'm-58-d',
        text: 'The therapist teaches each step of hand-washing in reverse order, reinforcing the last step first.',
        isCorrect: false,
        explanation: 'Teaching the last step of a chain first and working backward is backward chaining, not most-to-least prompting.',
      },
    ],
  },
  {
    id: 'm-59',
    domain: 'Skill Acquisition',
    concept: 'Least-to-Most Prompting',
    tcoDomain: 'F  -  Behavior Assessment',
    definition: 'A prompting strategy in which the least intrusive prompt is provided first; if the learner does not respond correctly, progressively more intrusive prompts are provided until a correct response occurs.',
    scenarios: [
      {
        id: 'm-59-a',
        text: 'The therapist presents a picture card and waits 3 seconds. If the child does not label the picture, she provides a partial verbal model ("b-"). If still no response, she provides a full verbal model ("ball").',
        isCorrect: true,
        explanation: 'Starting with the least intrusive prompt (waiting) and escalating through partial then full verbal models is least-to-most prompting  --  designed to give the learner maximum opportunity to respond independently.',
      },
      {
        id: 'm-59-b',
        text: 'The therapist immediately provides full physical guidance when the child does not respond within 1 second, then fades to partial physical, then gestural over subsequent trials.',
        isCorrect: false,
        explanation: 'Beginning with the most intrusive prompt and fading is most-to-least prompting, not least-to-most.',
      },
      {
        id: 'm-59-c',
        text: 'The therapist provides a verbal model simultaneously with the task demand on every trial, regardless of the child\'s response.',
        isCorrect: false,
        explanation: 'Providing a prompt simultaneously with the task demand on every trial is a simultaneous prompting procedure, not least-to-most prompting.',
      },
      {
        id: 'm-59-d',
        text: 'The therapist waits a fixed interval after the task demand before providing a full verbal model, and gradually increases the interval across sessions.',
        isCorrect: false,
        explanation: 'Systematically increasing the delay between the task demand and the prompt is a progressive time delay procedure, not least-to-most prompting.',
      },
    ],
  },
  {
    id: 'm-60',
    domain: 'Skill Acquisition',
    concept: 'Constant Time Delay',
    tcoDomain: 'F  -  Behavior Assessment',
    definition: 'A prompting procedure in which a fixed interval is inserted between the task demand and the prompt on every trial after an initial period of zero-second delay trials.',
    scenarios: [
      {
        id: 'm-60-a',
        text: 'For the first two sessions, the therapist presents the task demand and immediately provides the prompt (0-second delay). Starting in session three, she waits exactly 4 seconds after every task demand before prompting, maintaining this 4-second delay for all remaining sessions.',
        isCorrect: true,
        explanation: 'Beginning with 0-second delay trials and then switching to a fixed delay interval (4 seconds) maintained across all subsequent trials is constant time delay.',
      },
      {
        id: 'm-60-b',
        text: 'The therapist begins with a 1-second delay and increases it by 1 second every two sessions until reaching a 5-second delay.',
        isCorrect: false,
        explanation: 'Systematically increasing the delay interval across sessions is progressive time delay, not constant time delay.',
      },
      {
        id: 'm-60-c',
        text: 'The therapist provides the least intrusive prompt first and escalates to more intrusive prompts only if the child does not respond.',
        isCorrect: false,
        explanation: 'Escalating through a hierarchy of prompts based on the child\'s response is least-to-most prompting, not time delay.',
      },
      {
        id: 'm-60-d',
        text: 'The therapist provides full physical guidance on every trial and fades the prompt by reducing the amount of physical contact over time.',
        isCorrect: false,
        explanation: 'Reducing the physical intensity of a prompt over time is stimulus fading within a most-to-least framework, not time delay.',
      },
    ],
  },
  {
    id: 'm-61',
    domain: 'Skill Acquisition',
    concept: 'Forward Chaining',
    tcoDomain: 'F  -  Behavior Assessment',
    definition: 'A chaining procedure in which the first behavior in the chain is taught first; subsequent behaviors are added sequentially until the entire chain is performed independently.',
    scenarios: [
      {
        id: 'm-61-a',
        text: 'When teaching tooth-brushing, the therapist first teaches the child to pick up the toothbrush independently. Once mastered, she adds unscrewing the toothpaste cap, then applying toothpaste, continuing until all steps are chained.',
        isCorrect: true,
        explanation: 'Teaching the first step of the chain first and sequentially adding subsequent steps is forward chaining.',
      },
      {
        id: 'm-61-b',
        text: 'The therapist prompts all steps of tooth-brushing except the last step (rinsing), which the child performs independently. Once rinsing is mastered, the therapist removes prompts from the second-to-last step.',
        isCorrect: false,
        explanation: 'Teaching the last step first and working backward through the chain is backward chaining, not forward chaining.',
      },
      {
        id: 'm-61-c',
        text: 'The therapist teaches all steps of tooth-brushing simultaneously, providing prompts for each step and fading them concurrently across sessions.',
        isCorrect: false,
        explanation: 'Teaching all steps simultaneously with concurrent prompt fading is a total task presentation approach, not forward chaining.',
      },
      {
        id: 'm-61-d',
        text: 'The therapist breaks tooth-brushing into individual steps and teaches each step as a separate discrete trial before combining them.',
        isCorrect: false,
        explanation: 'Teaching individual steps as separate discrete trials before combining them is a task analysis approach used in total task presentation, not specifically forward chaining.',
      },
    ],
  },
  {
    id: 'm-62',
    domain: 'Skill Acquisition',
    concept: 'Generalization Programming',
    tcoDomain: 'G  -  Behavior-Change Procedures',
    definition: 'The systematic arrangement of antecedent and consequence variables during training to promote the occurrence of trained behaviors in untrained settings, with untrained people, or under untrained conditions.',
    scenarios: [
      {
        id: 'm-62-a',
        text: 'A BCBA teaches requesting across multiple therapists, in multiple rooms, using multiple exemplars of the target item, and with varying motivating operations to ensure the skill transfers to the natural environment.',
        isCorrect: true,
        explanation: 'Deliberately varying trainers, settings, stimuli, and MOs during training to promote transfer to untrained conditions is generalization programming  --  specifically, training sufficient exemplars and using loose training.',
      },
      {
        id: 'm-62-b',
        text: 'A BCBA teaches requesting only with one therapist in one room until the skill is fluent, then tests whether it generalizes.',
        isCorrect: false,
        explanation: 'Training in a single context and then testing for generalization is not generalization programming  --  it is training without programming for generalization, which often results in limited transfer.',
      },
      {
        id: 'm-62-c',
        text: 'A BCBA uses a multiple baseline design to demonstrate that a skill taught in one setting does not transfer to untrained settings until intervention is introduced there.',
        isCorrect: false,
        explanation: 'A multiple baseline design is a research methodology for demonstrating experimental control, not a generalization programming strategy.',
      },
      {
        id: 'm-62-d',
        text: 'A BCBA reinforces the child for performing the skill in the natural environment after it has been trained in the clinic.',
        isCorrect: false,
        explanation: 'Reinforcing the skill in the natural environment after training is a maintenance strategy, not generalization programming. Generalization programming occurs during training, not after.',
      },
    ],
  },
  // -- NEW ITEMS: Behavior Reduction (G) -------------------------------------
  {
    id: 'm-63',
    concept: 'Response Blocking',
    domain: 'Behavior Reduction',
    tcoDomain: 'G  -  Behavior-Change Procedures',
    definition: 'A procedure in which the therapist physically prevents the completion of a problem behavior, thereby preventing access to the reinforcer maintaining it.',
    scenarios: [
      {
        id: 'm-63-a',
        text: 'Each time a child reaches toward his mouth to engage in hand mouthing, the therapist gently redirects his arm downward before contact is made, preventing the behavior from completing.',
        isCorrect: true,
        explanation: 'The therapist physically interrupts the response before it completes, preventing the sensory consequence that maintains the behavior  --  this is response blocking.',
      },
      {
        id: 'm-63-b',
        text: 'A child engages in hand mouthing. The therapist says "hands down" and the child complies.',
        isCorrect: false,
        explanation: 'This describes verbal redirection and compliance, not physical response blocking. The behavior is not physically interrupted.',
      },
      {
        id: 'm-63-c',
        text: 'A child engages in aggression. The BCBA removes the child from the room for 2 minutes.',
        isCorrect: false,
        explanation: 'Removing the child from the environment describes time-out from positive reinforcement, not response blocking.',
      },
      {
        id: 'm-63-d',
        text: 'A BCBA reduces the reinforcement schedule from FR1 to FR5 to decrease dependence on continuous reinforcement.',
        isCorrect: false,
        explanation: 'Thinning a reinforcement schedule is a schedule-based intervention, not a response blocking procedure.',
      },
    ],
  },
  {
    id: 'm-64',
    concept: 'Extinction  --  Attention-Maintained Behavior',
    domain: 'Behavior Reduction',
    tcoDomain: 'G  -  Behavior-Change Procedures',
    definition: 'The withholding of social attention following attention-maintained problem behavior, resulting in a decrease in that behavior over time.',
    scenarios: [
      {
        id: 'm-64-a',
        text: 'A functional analysis reveals that a child\'s tantrums are maintained by adult attention. The BCBA instructs all staff to turn away, avoid eye contact, and withhold all verbal responses when tantrums occur. Over four weeks, tantrum frequency decreases by 85%.',
        isCorrect: true,
        explanation: 'Withholding the maintaining reinforcer (attention) contingent on the target behavior is extinction for attention-maintained behavior.',
      },
      {
        id: 'm-64-b',
        text: 'A BCBA delivers brief attention every 3 minutes regardless of whether the child is engaging in problem behavior.',
        isCorrect: false,
        explanation: 'Delivering attention on a fixed-time schedule regardless of behavior is noncontingent reinforcement (NCR), not extinction.',
      },
      {
        id: 'm-64-c',
        text: 'A child\'s self-injury is escape-maintained. Staff are instructed to continue presenting demands even when self-injury occurs.',
        isCorrect: false,
        explanation: 'Continuing demands contingent on escape-maintained behavior is extinction for escape-maintained behavior, not attention-maintained behavior.',
      },
      {
        id: 'm-64-d',
        text: 'A BCBA teaches a child to tap a card to request attention instead of tantruming.',
        isCorrect: false,
        explanation: 'Teaching an alternative communication response is Functional Communication Training (FCT), not extinction.',
      },
    ],
  },
  {
    id: 'm-65',
    domain: 'Behavior Reduction',
    concept: 'Time-Out from Positive Reinforcement',
    tcoDomain: 'G  -  Behavior-Change Procedures',
    definition: 'A negative punishment procedure in which access to positive reinforcement is contingently removed for a specified period following a target behavior.',
    scenarios: [
      {
        id: 'm-65-a',
        text: 'When a child hits a peer, the therapist immediately moves him to a chair in the corner of the room for 2 minutes, away from all ongoing activities and social interaction. Hitting decreases over the following weeks.',
        isCorrect: true,
        explanation: 'Removing access to reinforcement (activities and social interaction) contingent on hitting for a specified period is time-out from positive reinforcement  --  a negative punishment procedure.',
      },
      {
        id: 'm-65-b',
        text: 'When a child hits a peer, the therapist removes the child\'s token board for the remainder of the session. Hitting decreases.',
        isCorrect: false,
        explanation: 'Removing a specific reinforcer (tokens) contingent on behavior is response cost  --  a negative punishment procedure  --  but not time-out. Time-out involves removal from a reinforcing environment, not removal of a specific item.',
      },
      {
        id: 'm-65-c',
        text: 'When a child hits a peer, the therapist delivers a firm verbal reprimand. Hitting decreases.',
        isCorrect: false,
        explanation: 'Adding an aversive stimulus (reprimand) contingent on behavior to decrease it is positive punishment, not time-out.',
      },
      {
        id: 'm-65-d',
        text: 'The therapist stops providing attention when the child hits. Hitting decreases over time.',
        isCorrect: false,
        explanation: 'Discontinuing the reinforcement contingency for hitting is extinction, not time-out. Extinction removes the specific reinforcing consequence; time-out removes access to all reinforcement in the environment.',
      },
    ],
  },
  {
    id: 'm-66',
    domain: 'Behavior Reduction',
    concept: 'Functional Communication Training (FCT)',
    tcoDomain: 'G  -  Behavior-Change Procedures',
    definition: 'A differential reinforcement procedure in which a communicative response that serves the same function as the problem behavior is reinforced, while the problem behavior is placed on extinction.',
    scenarios: [
      {
        id: 'm-66-a',
        text: 'A functional analysis reveals that a child\'s aggression is maintained by escape from tasks. The BCBA teaches the child to hand a "break" card to request a break. Aggression is placed on extinction while break requests are reinforced with a brief break. Aggression decreases and break requests increase.',
        isCorrect: true,
        explanation: 'Teaching a communicative response (break card) that serves the same function (escape) as the problem behavior (aggression), while placing aggression on extinction, is FCT.',
      },
      {
        id: 'm-66-b',
        text: 'The BCBA teaches the child to sit quietly during tasks, which is physically incompatible with aggression. Sitting quietly is reinforced and aggression decreases.',
        isCorrect: false,
        explanation: 'Reinforcing a behavior that is physically incompatible with the problem behavior is DRI, not FCT. FCT specifically teaches a communicative response that serves the same function.',
      },
      {
        id: 'm-66-c',
        text: 'The BCBA delivers brief breaks every 5 minutes regardless of the child\'s behavior. Aggression decreases because the child no longer needs to escape.',
        isCorrect: false,
        explanation: 'Delivering the reinforcer (breaks) on a fixed-time schedule independent of behavior is NCR, not FCT.',
      },
      {
        id: 'm-66-d',
        text: 'The BCBA reduces task difficulty so that the child no longer needs to escape. Aggression decreases.',
        isCorrect: false,
        explanation: 'Modifying the antecedent (task difficulty) to reduce the motivation for escape-maintained behavior is an antecedent intervention, not FCT.',
      },
    ],
  },
  {
    id: 'm-67',
    concept: 'Safety Plan / Crisis Protocol',
    domain: 'Behavior Reduction',
    tcoDomain: 'H  -  Selecting and Implementing Interventions',
    definition: 'A written plan that specifies procedures for managing dangerous behavior, including escalation indicators, staff roles, and de-escalation strategies.',
    scenarios: [
      {
        id: 'm-67-a',
        text: 'A client has a history of severe aggression. The BCBA develops a written document outlining early warning signs (pacing, vocal escalation), staff positioning, de-escalation scripts, and when to call emergency services. All team members are trained on the protocol before services begin.',
        isCorrect: true,
        explanation: 'A written plan specifying warning signs, staff roles, de-escalation procedures, and emergency criteria is a safety plan / crisis protocol.',
      },
      {
        id: 'm-67-b',
        text: 'A BCBA selects DRA as the primary intervention because it is less restrictive than response cost.',
        isCorrect: false,
        explanation: 'Selecting a less restrictive procedure reflects the least restrictive alternative principle, not a crisis protocol.',
      },
      {
        id: 'm-67-c',
        text: 'A BCBA conducts a functional analysis to identify the reinforcer maintaining aggression before selecting an intervention.',
        isCorrect: false,
        explanation: 'Conducting a functional analysis is an assessment procedure, not a crisis management plan.',
      },
      {
        id: 'm-67-d',
        text: 'A BCBA implements a DRO schedule to reduce the frequency of aggressive behavior.',
        isCorrect: false,
        explanation: 'DRO is a differential reinforcement procedure, not a crisis safety plan.',
      },
    ],
  },
  // -- NEW ITEMS: Supervision (I) ---------------------------------------------
  {
    id: 'm-68',
    concept: 'Behavioral Skills Training (BST)  --  Supervision Application',
    domain: 'Supervision',
    tcoDomain: 'I  -  Personnel Supervision and Management',
    definition: 'BST is the evidence-based method for training supervisees on new clinical skills, consisting of instructions, modeling, rehearsal, and feedback delivered in sequence.',
    scenarios: [
      {
        id: 'm-68-a',
        text: 'A BCBA is training an RBT to implement a new preference assessment. She first explains the steps verbally (instructions), then demonstrates the assessment with a client (modeling), then has the RBT practice with her playing the role of the client (rehearsal), then provides specific corrective feedback. She repeats the cycle until the RBT reaches 90% fidelity.',
        isCorrect: true,
        explanation: 'Using instructions, modeling, rehearsal, and feedback in sequence to train a supervisee on a clinical skill is BST applied in a supervision context.',
      },
      {
        id: 'm-68-b',
        text: 'A BCBA observes an RBT twice monthly and scores implementation fidelity using a structured checklist.',
        isCorrect: false,
        explanation: 'Systematic observation and fidelity scoring is performance monitoring, not BST. BST involves active training components (modeling, rehearsal), not observation alone.',
      },
      {
        id: 'm-68-c',
        text: 'A BCBA requires an RBT to demonstrate competency on a skill before working independently with clients.',
        isCorrect: false,
        explanation: 'Requiring demonstrated competency before independent practice is competency-based training, which may use BST as its training method but is a broader standard, not BST itself.',
      },
      {
        id: 'm-68-d',
        text: 'A BCBA provides written feedback on an RBT\'s session notes after reviewing them remotely.',
        isCorrect: false,
        explanation: 'Written feedback on documentation is indirect supervision. BST requires in-person (or synchronous) modeling and rehearsal components.',
      },
    ],
  },
  {
    id: 'm-69',
    concept: 'Performance Monitoring  --  Ongoing Supervision',
    domain: 'Supervision',
    tcoDomain: 'I  -  Personnel Supervision and Management',
    definition: 'The BCBA\'s ongoing responsibility to systematically observe, measure, and provide feedback on supervisee performance across the full supervision period  --  not only during initial training.',
    scenarios: [
      {
        id: 'm-69-a',
        text: 'After completing initial BST with a new RBT, a BCBA continues to observe the RBT\'s session implementation twice monthly using a structured fidelity checklist. She provides written and verbal feedback after each observation and adjusts the frequency of observation based on the RBT\'s performance trend.',
        isCorrect: true,
        explanation: 'Systematically observing and providing feedback on supervisee performance throughout the supervision period  --  not just during initial training  --  is ongoing performance monitoring.',
      },
      {
        id: 'm-69-b',
        text: 'A BCBA trains a new RBT using instructions, modeling, rehearsal, and feedback before the RBT begins working independently.',
        isCorrect: false,
        explanation: 'Training using instructions, modeling, rehearsal, and feedback is Behavioral Skills Training (BST)  --  the initial training phase, not ongoing performance monitoring.',
      },
      {
        id: 'm-69-c',
        text: 'A BCBA requires an RBT to pass a written knowledge test before beginning supervised fieldwork.',
        isCorrect: false,
        explanation: 'A written knowledge test is a competency check, not ongoing performance monitoring of direct service implementation.',
      },
      {
        id: 'm-69-d',
        text: 'A BCBA reviews the RBT\'s session notes and data sheets at the end of each week.',
        isCorrect: false,
        explanation: 'Reviewing data and notes is indirect supervision. Ongoing performance monitoring requires direct observation of the supervisee\'s behavior in the work setting.',
      },
    ],
  },
  {
    id: 'm-70',
    concept: 'Competency-Based Training  --  Implementation Standards',
    domain: 'Supervision',
    tcoDomain: 'I  -  Personnel Supervision and Management',
    definition: 'Competency-based training requires supervisees to demonstrate a specified performance criterion (e.g., 90% fidelity across three consecutive observations) before working independently  --  not just completing training hours.',
    scenarios: [
      {
        id: 'm-70-a',
        text: 'A BCBA trains an RBT on a new discrete trial procedure using BST. She does not allow the RBT to implement the procedure independently until the RBT achieves 90% procedural fidelity on the implementation checklist across three consecutive observations with different clients.',
        isCorrect: true,
        explanation: 'Requiring demonstrated performance at a specified criterion level before independent practice is competency-based training  --  the standard is mastery, not hours or attendance.',
      },
      {
        id: 'm-70-b',
        text: 'A BCBA requires an RBT to complete 40 hours of supervised fieldwork before working independently.',
        isCorrect: false,
        explanation: 'Requiring a specific number of hours is a time-based standard, not a competency-based standard. Competency-based training requires demonstrated skill, not just hours.',
      },
      {
        id: 'm-70-c',
        text: 'A BCBA trains an RBT using instructions, modeling, rehearsal, and feedback.',
        isCorrect: false,
        explanation: 'Using instructions, modeling, rehearsal, and feedback is BST  --  the training method. Competency-based training is the standard (mastery criterion) applied to determine when independent practice is permitted.',
      },
      {
        id: 'm-70-d',
        text: 'A BCBA observes an RBT twice monthly and provides feedback on session fidelity.',
        isCorrect: false,
        explanation: 'Ongoing observation and feedback is performance monitoring, not competency-based training.',
      },
    ],
  },
  {
    id: 'm-71',
    concept: 'Scope of Competence  --  Supervision Responsibility',
    domain: 'Supervision',
    tcoDomain: 'E  -  Ethical and Professional Issues',
    definition: 'BCBAs must only supervise activities within their own scope of competence and must ensure that supervisees are only assigned tasks within the BCBA\'s area of expertise.',
    scenarios: [
      {
        id: 'm-71-a',
        text: 'A BCBA with expertise in pediatric ABA is asked to supervise an RBT working with an adult client with a traumatic brain injury. The BCBA declines and refers the case to a colleague with expertise in adult rehabilitation, explaining that supervising outside her area of competence would not serve the client\'s best interests.',
        isCorrect: true,
        explanation: 'Declining to supervise a case outside one\'s area of expertise and referring to a qualified colleague is the correct application of scope of competence in a supervision context.',
      },
      {
        id: 'm-71-b',
        text: 'A BCBA is asked to provide direct ABA services to a client with a medical condition she has not worked with before. She declines and refers to a specialist.',
        isCorrect: false,
        explanation: 'This describes scope of competence in direct service provision, not in a supervision context specifically.',
      },
      {
        id: 'm-71-c',
        text: 'A BCBA requires her RBT to complete 40 hours of supervised fieldwork before working independently.',
        isCorrect: false,
        explanation: 'Requiring supervised fieldwork hours is a supervision structure requirement, not a scope of competence decision.',
      },
      {
        id: 'm-71-d',
        text: 'A BCBA consults with a colleague before implementing a new intervention she has not used before.',
        isCorrect: false,
        explanation: 'Seeking consultation before implementing an unfamiliar procedure is good practice but describes professional development, not scope of competence in supervision.',
      },
    ],
  },
  // -- NEW ITEMS: Ethics & Professional Practice (E) -------------------------
  {
    id: 'm-72',
    concept: 'Multiple Relationships  --  Navigating Boundary Conflicts',
    domain: 'Ethics & Professional Practice',
    tcoDomain: 'E  -  Ethical and Professional Issues',
    definition: 'When a BCBA has an existing personal, financial, or professional relationship with a client or supervisee, they must evaluate whether the relationship could impair objectivity or harm the client, and take steps to manage or avoid the conflict.',
    scenarios: [
      {
        id: 'm-72-a',
        text: 'A BCBA is approached by a former client\'s family to provide ABA services to a second child. She realizes that her close personal friendship with the family, developed during the first child\'s services, may compromise her clinical objectivity. She consults with a supervisor, documents her reasoning, and refers the case to a colleague.',
        isCorrect: true,
        explanation: 'Recognizing that an existing personal relationship may impair objectivity, consulting, documenting, and referring the case is the correct way to navigate a multiple relationship conflict.',
      },
      {
        id: 'm-72-b',
        text: 'A BCBA is asked to provide ABA services to her neighbor\'s child. She recognizes the social relationship and declines without consulting or documenting.',
        isCorrect: false,
        explanation: 'While declining may be appropriate, the BCBA should consult and document her reasoning. Simply declining without process does not fully address the ethical obligation.',
      },
      {
        id: 'm-72-c',
        text: 'A BCBA provides services to a client and later becomes friends with the family.',
        isCorrect: false,
        explanation: 'This describes the development of a multiple relationship, not the process of navigating or managing it.',
      },
      {
        id: 'm-72-d',
        text: 'A BCBA supervises an RBT who is also enrolled in her university course.',
        isCorrect: false,
        explanation: 'This is an example of a multiple relationship in a supervision context, but the scenario does not describe how the BCBA navigates or manages the conflict.',
      },
    ],
  },
  {
    id: 'm-73',
    concept: 'Informed Consent vs. Assent',
    domain: 'Ethics & Professional Practice',
    tcoDomain: 'E  -  Ethical and Professional Issues',
    definition: 'Informed consent is obtained from the legal guardian; assent is the client\'s own agreement to participate, which must be sought even when the client cannot legally consent.',
    scenarios: [
      {
        id: 'm-73-a',
        text: 'A BCBA is beginning services with a 10-year-old client. She obtains signed consent from the child\'s parents after explaining the assessment and treatment plan. She also explains the procedures to the child in age-appropriate language and asks if the child is willing to participate. The child nods and says "okay."',
        isCorrect: true,
        explanation: 'Obtaining legal consent from the guardian AND seeking the client\'s own agreement (assent) demonstrates the distinction between informed consent and assent  --  both are required.',
      },
      {
        id: 'm-73-b',
        text: 'A BCBA obtains signed consent from a client\'s parents before beginning services and does not discuss the procedures with the client directly.',
        isCorrect: false,
        explanation: 'Obtaining only parental consent without seeking the client\'s assent is insufficient. The BACB Ethics Code requires BCBAs to seek assent from clients who cannot legally consent.',
      },
      {
        id: 'm-73-c',
        text: 'A BCBA explains the purpose, procedures, risks, and benefits of a new intervention to a client\'s guardian and obtains a signed consent form.',
        isCorrect: false,
        explanation: 'This describes informed consent only. The scenario does not address assent from the client, which is a separate and required step.',
      },
      {
        id: 'm-73-d',
        text: 'A BCBA asks a client to sign a consent form before beginning services.',
        isCorrect: false,
        explanation: 'If the client is a minor or lacks legal capacity, they cannot provide legal consent  --  only assent. The legal guardian must provide informed consent.',
      },
    ],
  },
  {
    id: 'm-74',
    domain: 'Ethics & Professional Practice',
    concept: 'Assent',
    tcoDomain: 'E  -  Ethical and Professional Issues',
    definition: 'The affirmative agreement of a person who lacks legal capacity to provide informed consent (e.g., a minor or individual with significant cognitive limitations) to participate in services or research.',
    scenarios: [
      {
        id: 'm-74-a',
        text: 'Before beginning a new intervention with a 12-year-old client, the BCBA explains the procedure in age-appropriate language, answers the client\'s questions, and asks if he is willing to try it. The client nods and says "okay."',
        isCorrect: true,
        explanation: 'Explaining the procedure in accessible language and seeking the client\'s agreement  --  even though he cannot legally provide informed consent  --  is obtaining assent.',
      },
      {
        id: 'm-74-b',
        text: 'The BCBA obtains a signed consent form from the 12-year-old client\'s parent before beginning the intervention.',
        isCorrect: false,
        explanation: 'Obtaining a signature from the legal guardian is informed consent, not assent. Assent is obtained from the individual who lacks legal capacity, not from the guardian.',
      },
      {
        id: 'm-74-c',
        text: 'The BCBA proceeds with the intervention because the parent has already signed the consent form, even though the client has stated he does not want to participate.',
        isCorrect: false,
        explanation: 'Proceeding despite the client\'s stated refusal violates the ethical obligation to seek and respect assent. Assent should be sought and, when withheld, should be carefully considered.',
      },
      {
        id: 'm-74-d',
        text: 'The BCBA explains the intervention to the client\'s teacher and obtains the teacher\'s agreement to implement it in the classroom.',
        isCorrect: false,
        explanation: 'Obtaining agreement from the teacher is professional collaboration, not assent. Assent is sought from the client themselves.',
      },
    ],
  },
  // -- NEW ITEMS: Measurement (C) ---------------------------------------------
  {
    id: 'm-75',
    concept: 'Event Recording (Frequency)',
    domain: 'Measurement',
    tcoDomain: 'C  -  Measurement',
    definition: 'A measurement procedure in which each discrete occurrence of a target behavior is counted; produces a frequency or rate measure and is most appropriate for behaviors with a clear beginning and end.',
    scenarios: [
      {
        id: 'm-75-a',
        text: 'A therapist uses a tally counter to record each time a child emits a vocal stereotypy during a 10-minute session. At the end she reports that the behavior occurred 47 times, giving a rate of 4.7 responses per minute.',
        isCorrect: true,
        explanation: 'Counting each discrete occurrence of a behavior and converting to a rate (responses per unit time) is event recording -- appropriate for behaviors with a clear beginning and end.',
      },
      {
                id: 'm-75-b',
        text: 'A therapist divides a 30-minute session into 10-second intervals and marks each interval in which the child is on-task at the moment the interval ends.',
        isCorrect: false,
        explanation: 'Scoring behavior only at the moment the interval ends is momentary time sampling, not event recording.',
      },
      {
        id: 'm-75-c',
        text: 'A therapist records the total amount of time a child spends engaged in self-injurious behavior during a session.',
        isCorrect: false,
        explanation: 'Recording total time engaged in a behavior is duration recording, not event recording.',
      },
      {
        id: 'm-75-d',
        text: 'A therapist scores each 10-second interval as positive only if the target behavior was occurring throughout the entire interval.',
        isCorrect: false,
        explanation: 'Requiring the behavior to occur for the entire interval is whole interval recording, not event recording.',
      },
    ],
  },
  {
    id: 'm-76',
    concept: 'Duration Recording',
    domain: 'Measurement',
    tcoDomain: 'C  -  Measurement',
    definition: 'A measurement method that captures the total amount of time a behavior occurs within an observation period.',
    scenarios: [
      {
        id: 'm-76-a',
        text: 'A BCBA wants to measure how long a child engages in on-task behavior during a 30-minute work session. She uses a stopwatch to record the start and end time of each on-task episode and sums the total time at the end of the session.',
        isCorrect: true,
        explanation: 'Measuring the total time a behavior occurs is duration recording  --  appropriate when the temporal extent of the behavior is clinically relevant.',
      },
      {
        id: 'm-76-b',
        text: 'A BCBA counts the number of times a child leaves her seat during a 30-minute session.',
        isCorrect: false,
        explanation: 'Counting occurrences is frequency recording. Duration recording measures how long behavior lasts, not how many times it occurs.',
      },
      {
        id: 'm-76-c',
        text: 'A BCBA records the time between a verbal instruction and the child\'s first response.',
        isCorrect: false,
        explanation: 'Measuring the time between a stimulus and the onset of a response is latency recording, not duration recording.',
      },
      {
        id: 'm-76-d',
        text: 'A BCBA divides a 10-minute session into 30-second intervals and marks whether the behavior occurred during each interval.',
        isCorrect: false,
        explanation: 'Dividing an observation into intervals and scoring each is interval recording (partial or whole), not duration recording.',
      },
    ],
  },
  {
    id: 'm-77',
    concept: 'IOA  --  Interval-by-Interval Agreement',
    domain: 'Measurement',
    tcoDomain: 'C  -  Measurement',
    definition: 'A method of calculating IOA for interval data by comparing two observers\' recordings interval by interval and dividing the number of agreements by the total number of intervals.',
    scenarios: [
      {
        id: 'm-77-a',
        text: 'Two observers independently record whether a child is on-task during each of 20 consecutive 10-second intervals. Observer A records "yes" for 14 intervals and "no" for 6. Observer B records "yes" for 13 intervals and "no" for 7. They compare their records interval by interval and find they agreed on 17 of 20 intervals. IOA = 17/20 = 85%.',
        isCorrect: true,
        explanation: 'Comparing two observers\' interval-by-interval recordings and dividing agreements by total intervals is interval-by-interval IOA  --  the standard method for time-sampling data.',
      },
      {
        id: 'm-77-b',
        text: 'Two observers count the total number of times a behavior occurs during a session. Observer A counts 12, Observer B counts 14. IOA = 12/14 = 86%.',
        isCorrect: false,
        explanation: 'Dividing the smaller count by the larger count is frequency IOA (or count-per-interval IOA), not interval-by-interval IOA.',
      },
      {
        id: 'm-77-c',
        text: 'Two observers record the exact time each behavior starts and stops. They compare the duration of each episode.',
        isCorrect: false,
        explanation: 'Comparing the duration of individual behavioral episodes is duration IOA, not interval-by-interval IOA.',
      },
      {
        id: 'm-77-d',
        text: 'Two observers record the time between the end of one response and the beginning of the next.',
        isCorrect: false,
        explanation: 'Recording the time between responses is inter-response time (IRT) recording, not IOA calculation.',
      },
    ],
  },
  // -- NEW ITEMS: Research Design (D) -----------------------------------------
  {
    id: 'm-78',
    concept: 'Alternating Treatments Design (ATD)  --  Interpreting Results',
    domain: 'Research & Design',
    tcoDomain: 'D  -  Experimental Design',
    definition: 'In an ATD, a functional relationship is demonstrated when data paths for different conditions are clearly separated (non-overlapping), indicating that one condition produces reliably different behavior than the other.',
    scenarios: [
      {
        id: 'm-78-a',
        text: 'A researcher compares two reading interventions using an ATD. After 10 sessions, the data paths for Intervention A (averaging 85% accuracy) and Intervention B (averaging 60% accuracy) show minimal overlap across all sessions. The researcher concludes that Intervention A is more effective.',
        isCorrect: true,
        explanation: 'Clear separation (non-overlapping data paths) between conditions in an ATD indicates a functional relationship  --  one condition reliably produces better outcomes than the other.',
      },
      {
        id: 'm-78-b',
        text: 'A researcher alternates between two conditions across sessions in a counterbalanced order to control for sequence effects.',
        isCorrect: false,
        explanation: 'Counterbalancing conditions describes the design structure of an ATD, not the interpretation of its results.',
      },
      {
        id: 'm-78-c',
        text: 'A researcher returns to baseline after an intervention phase to demonstrate experimental control.',
        isCorrect: false,
        explanation: 'Returning to baseline to demonstrate control is the logic of a reversal (ABAB) design, not an ATD.',
      },
      {
        id: 'm-78-d',
        text: 'A researcher introduces a new intervention phase only after the previous phase shows a stable trend.',
        isCorrect: false,
        explanation: 'Waiting for stability before changing phases is the logic of a multiple baseline design, not an ATD.',
      },
    ],
  },
  {
    id: 'm-79',
    concept: 'Visual Analysis  --  Stability Criterion',
    domain: 'Research & Design',
    tcoDomain: 'D  -  Experimental Design',
    definition: 'Before changing phases in single-case research, data must show a stable trend (low variability, consistent level and direction) to allow meaningful comparison across conditions.',
    scenarios: [
      {
        id: 'm-79-a',
        text: 'A BCBA is conducting a multiple baseline design. Before introducing the intervention to the second participant, she waits until the first participant\'s baseline data shows five consecutive data points within a 10% range of the mean, with no clear upward or downward trend.',
        isCorrect: true,
        explanation: 'Waiting for low variability and no trend before changing phases is the application of a stability criterion in visual analysis  --  required to make meaningful phase comparisons.',
      },
      {
        id: 'm-79-b',
        text: 'A BCBA examines a graph and notes that the mean level of behavior is higher in baseline than in intervention.',
        isCorrect: false,
        explanation: 'Comparing mean levels across phases is part of visual analysis, but it describes level analysis, not the stability criterion specifically.',
      },
      {
        id: 'm-79-c',
        text: 'A BCBA notes that data in the intervention phase shows an upward trend, consistent with the therapeutic goal.',
        isCorrect: false,
        explanation: 'Identifying a trend direction is trend analysis within visual analysis, not the stability criterion.',
      },
      {
        id: 'm-79-d',
        text: 'A BCBA calculates the percentage of non-overlapping data points (PND) between baseline and intervention phases.',
        isCorrect: false,
        explanation: 'PND is a quantitative effect size measure, not a visual analysis stability criterion.',
      },
    ],
  },
  {
    id: 'm-80',
    domain: 'Research & Design',
    concept: 'Social Validity',
    tcoDomain: 'H  -  Selecting and Implementing Interventions',
    definition: 'The extent to which the goals, procedures, and outcomes of an intervention are acceptable and meaningful to the client, caregivers, and the broader community.',
    scenarios: [
      {
        id: 'm-80-a',
        text: 'After completing a behavior reduction program, the BCBA surveys the client\'s parents and teachers to assess whether they found the intervention goals meaningful, the procedures acceptable, and the behavior changes socially significant.',
        isCorrect: true,
        explanation: 'Systematically assessing stakeholder perceptions of goal importance, procedural acceptability, and outcome significance is social validity assessment  --  a critical component of applied behavior analysis.',
      },
      {
        id: 'm-80-b',
        text: 'The BCBA measures whether the client\'s behavior change maintained at 3-month and 6-month follow-up assessments.',
        isCorrect: false,
        explanation: 'Measuring behavior change over time after intervention is a maintenance assessment, not social validity. Social validity assesses the meaningfulness and acceptability of the goals, procedures, and outcomes.',
      },
      {
        id: 'm-80-c',
        text: 'The BCBA calculates the percentage reduction in problem behavior from baseline to intervention.',
        isCorrect: false,
        explanation: 'Calculating percentage reduction is a quantitative measure of behavior change, not social validity. Social validity requires subjective assessment from stakeholders about the meaningfulness of that change.',
      },
      {
        id: 'm-80-d',
        text: 'The BCBA compares the client\'s behavior data to normative data from typically developing peers.',
        isCorrect: false,
        explanation: 'Comparing to normative data is a norm-referenced approach that can inform social validity but is not itself a social validity assessment. Social validity requires direct input from stakeholders.',
      },
    ],
  },
  // -- NEW ITEMS: Assessment (F) ----------------------------------------------
  {
    id: 'm-81',
    concept: 'Structural Analysis',
    domain: 'Assessment',
    tcoDomain: 'F  -  Behavior Assessment',
    definition: 'An assessment procedure in which antecedent variables (e.g., task difficulty, activity type, instructional format) are manipulated to identify the conditions under which problem behavior is most and least likely to occur, without manipulating consequences.',
    scenarios: [
      {
        id: 'm-81-a',
        text: 'A BCBA conducts a structured assessment with four conditions: attention (brief attention delivered contingent on problem behavior), escape (demands removed contingent on problem behavior), alone (no social interaction or demands), and play (continuous access to preferred items, no demands). Problem behavior is highest in the escape condition, suggesting escape as the maintaining function.',
        isCorrect: true,
        explanation: 'Manipulating antecedent and consequence variables across controlled conditions to identify function is an experimental functional analysis (FA).',
      },
      {
        id: 'm-81-b',
        text: 'A BCBA interviews the child\'s parents and teachers using a structured questionnaire to identify possible antecedents and consequences for problem behavior.',
        isCorrect: false,
        explanation: 'Using interviews and questionnaires is indirect assessment. An FA requires direct manipulation of environmental variables.',
      },
      {
        id: 'm-81-c',
        text: 'A BCBA observes the child in the natural environment and records antecedents, behaviors, and consequences as they naturally occur.',
        isCorrect: false,
        explanation: 'Observing and recording naturally occurring ABCs is a descriptive (ABC) assessment, not an experimental FA.',
      },
      {
        id: 'm-81-d',
        text: 'A BCBA reviews school records, previous therapy notes, and medical history to form a hypothesis about the function of problem behavior.',
        isCorrect: false,
        explanation: 'Reviewing existing records is an indirect assessment method. An FA requires experimental manipulation of variables.',
      },
    ],
  },
  {
    id: 'm-82',
    domain: 'Assessment',
    concept: 'Scatterplot Assessment',
    tcoDomain: 'F  -  Behavior Assessment',
    definition: 'A direct observational tool that maps the temporal distribution of problem behavior across time periods and days, used to identify patterns in when behavior is most and least likely to occur and to generate hypotheses about setting events or time-based antecedents.',
    scenarios: [
      {
        id: 'm-82-a',
        text: 'A BCBA observes a student in the classroom for five sessions and records, for each instance of aggression, what happened immediately before (antecedent), the behavior itself, and what happened immediately after (consequence), without altering any classroom conditions.',
        isCorrect: true,
        explanation: 'Recording antecedents, behaviors, and consequences in the natural environment without manipulation is a descriptive assessment (ABC recording)  --  it identifies patterns but cannot establish functional relationships.',
      },
      {
        id: 'm-82-b',
        text: 'A BCBA interviews the student\'s teacher about what typically triggers the student\'s aggression and what usually happens afterward.',
        isCorrect: false,
        explanation: 'Gathering information through interviews is indirect assessment, not descriptive assessment. Descriptive assessment requires direct observation.',
      },
      {
        id: 'm-82-c',
        text: 'A BCBA introduces an attention condition, a demand condition, an alone condition, and a control condition to identify which condition produces the highest rate of aggression.',
        isCorrect: false,
        explanation: 'Introducing and manipulating conditions to identify behavioral function is a functional analysis, not a descriptive assessment.',
      },
      {
        id: 'm-82-d',
        text: 'A BCBA uses a scatter plot to identify the times of day when aggression is most likely to occur.',
        isCorrect: false,
        explanation: 'A scatter plot identifies temporal patterns in behavior but does not record antecedents and consequences  --  it is a specific observational tool, not a full ABC descriptive assessment.',
      },
    ],
  },
  {
    id: 'm-83',
    domain: 'Assessment',
    concept: 'Preference Assessment',
    tcoDomain: 'F  -  Behavior Assessment',
    definition: 'A systematic procedure used to identify stimuli that may function as reinforcers for an individual by presenting items and observing approach behavior, selection, or engagement.',
    scenarios: [
      {
        id: 'm-83-a',
        text: 'Before a therapy session, the BCBA presents six items to the client one at a time and records which items the client approaches and engages with for the longest duration, then uses the top three items as potential reinforcers during the session.',
        isCorrect: true,
        explanation: 'Systematically presenting items and measuring approach and engagement to identify potential reinforcers is a preference assessment  --  specifically a single stimulus (successive) preference assessment.',
      },
      {
        id: 'm-83-b',
        text: 'The BCBA asks the client\'s parent which items the client likes most and uses those items as reinforcers.',
        isCorrect: false,
        explanation: 'Asking caregivers about preferred items is an indirect method of identifying preferences, not a systematic preference assessment. Preference assessments require direct observation of the client\'s approach behavior.',
      },
      {
        id: 'm-83-c',
        text: 'The BCBA delivers a token after each correct response and allows the client to exchange tokens for a choice of backup reinforcers at the end of the session.',
        isCorrect: false,
        explanation: 'A token economy with backup reinforcers is a reinforcement delivery system, not a preference assessment.',
      },
      {
        id: 'm-83-d',
        text: 'The BCBA measures the client\'s rate of correct responding under different reinforcer conditions to determine which reinforcer produces the highest response rate.',
        isCorrect: false,
        explanation: 'Measuring response rates under different reinforcer conditions is a reinforcer assessment (concurrent operants or progressive ratio), not a preference assessment. Preference assessments measure approach behavior, not response rates.',
      },
    ],
  },
  {
    id: 'm-84',
    domain: 'Skill Acquisition',
    concept: 'Stimulus Control Transfer',
    tcoDomain: 'F  -  Behavior Assessment',
    definition: 'A procedure in which control over a behavior is shifted from one stimulus (e.g., a prompt) to another stimulus (e.g., the natural SD) through systematic prompt fading.',
    scenarios: [
      {
        id: 'm-84-a',
        text: 'A child initially labels pictures only when the therapist provides a full verbal model. Over successive sessions, the therapist fades the model to a partial model, then a whispered model, then no model, until the child labels pictures in response to the picture alone.',
        isCorrect: true,
        explanation: 'Systematically fading the prompt (verbal model) so that the natural SD (the picture) gains control over the behavior is stimulus control transfer.',
      },
      {
        id: 'm-84-b',
        text: 'A child labels a picture of a dog as "dog" and then correctly labels a picture of a wolf as "dog" because of the physical similarity.',
        isCorrect: false,
        explanation: 'Responding to a new stimulus based on physical similarity to the trained stimulus is stimulus generalization, not stimulus control transfer.',
      },
      {
        id: 'm-84-c',
        text: 'A child learns to respond to a red circle as the SD for pressing a button, and the therapist gradually changes the shape from a circle to a square across trials.',
        isCorrect: false,
        explanation: 'Gradually changing the physical properties of a stimulus while maintaining the stimulus control relationship is stimulus shaping (stimulus fading), not stimulus control transfer in the prompting sense.',
      },
      {
        id: 'm-84-d',
        text: 'A child responds correctly only when the therapist is present and does not respond when a different therapist presents the same task.',
        isCorrect: false,
        explanation: 'Responding only in the presence of a specific person is a stimulus discrimination  --  the behavior is under the control of the therapist as an SD, which is the problem that stimulus control transfer aims to solve.',
      },
    ],
  },
  {
    id: 'm-85',
    domain: 'Assessment',
    concept: 'Curriculum-Based Assessment',
    tcoDomain: 'F  -  Behavior Assessment',
    definition: 'A direct assessment approach in which a learner\'s skills are measured against the objectives of the instructional curriculum to identify current skill levels and guide programming decisions.',
    scenarios: [
      {
        id: 'm-85-a',
        text: 'Before developing a skill acquisition program, a BCBA probes each objective in the client\'s VB-MAPP or ABLLS-R to determine which skills are mastered, emerging, or absent, then uses this information to prioritize instructional targets.',
        isCorrect: true,
        explanation: 'Directly testing a client against the objectives of a structured curriculum (VB-MAPP, ABLLS-R) to identify current skill levels and guide programming is curriculum-based assessment.',
      },
      {
        id: 'm-85-b',
        text: 'A BCBA administers a standardized IQ test to establish the client\'s cognitive baseline before beginning ABA services.',
        isCorrect: false,
        explanation: 'Administering a standardized norm-referenced test is not curriculum-based assessment. Curriculum-based assessment measures skills against instructional objectives, not normative comparisons.',
      },
      {
        id: 'm-85-c',
        text: 'A BCBA observes the client in the natural environment and records which daily living skills the client performs independently versus with assistance.',
        isCorrect: false,
        explanation: 'Observing skills in the natural environment is ecological assessment or direct observation, not curriculum-based assessment. Curriculum-based assessment is conducted against specific curriculum objectives.',
      },
      {
        id: 'm-85-d',
        text: 'A BCBA interviews the client\'s parents to identify which skills the client can perform at home.',
        isCorrect: false,
        explanation: 'Gathering information through parent interviews is indirect assessment, not curriculum-based assessment.',
      },
    ],
  },
  // -- NEW ITEMS: Verbal Behavior (VB) ----------------------------------------
  {
    id: 'm-86',
    concept: 'Verbal Operant -- Mand vs. Tact Distinction',
    domain: 'Verbal Behavior',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'Mands are controlled by motivating operations and reinforced by the specific item or action requested; tacts are controlled by a nonverbal discriminative stimulus (the item itself) and reinforced by generalized conditioned reinforcement. The same topography (e.g., "cookie") can function as either depending on the controlling variable.',
    scenarios: [
      {
        id: 'm-86-a',
        text: 'A child who has not eaten for several hours sees a cookie on the table. He reaches toward it and says "cookie." His mother gives him the cookie. His requesting behavior increases in similar situations.',
        isCorrect: true,
        explanation: 'The child\'s verbal behavior is controlled by a motivating operation (deprivation) and is reinforced by obtaining the specific item requested  --  this is a mand.',
      },
      {
        id: 'm-86-b',
        text: 'A therapist holds up a cookie and asks "What is this?" The child says "cookie." The therapist says "That\'s right!" and gives the child the cookie.',
        isCorrect: false,
        explanation: 'The child\'s response is controlled by the visual stimulus (the cookie), not by deprivation. This is a tact, not a mand.',
      },
      {
        id: 'm-86-c',
        text: 'A therapist asks "What do you want to eat?" and the child says "cookie." The therapist praises the response but does not provide a cookie.',
        isCorrect: false,
        explanation: 'If the response is not reinforced by obtaining the specific item, it may function as an intraverbal rather than a mand. A mand is defined by its specific reinforcer.',
      },
      {
        id: 'm-86-d',
        text: 'A child hears the word "cookie" and repeats "cookie." The therapist praises the repetition.',
        isCorrect: false,
        explanation: 'Repeating a heard word is an echoic, not a mand. The echoic is controlled by the auditory verbal stimulus, not by deprivation.',
      },
    ],
  },
  {
    id: 'm-87',
    concept: 'Autoclitic',
    domain: 'Verbal Behavior',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'A secondary verbal operant that modifies or qualifies other verbal behavior, providing information about the speaker\'s relation to their own primary verbal behavior (e.g., "I think," "I\'m not sure," "Please").',
    scenarios: [
      {
        id: 'm-87-a',
        text: 'A child is asked where his backpack is. He responds "I think it\'s in my room." The phrase "I think" signals to the listener that the child is uncertain about the accuracy of his response.',
        isCorrect: true,
        explanation: '"I think" is an autoclitic  --  it modifies the primary verbal response ("it\'s in my room") by indicating the speaker\'s level of certainty, providing the listener with additional information about how to interpret the response.',
      },
      {
        id: 'm-87-b',
        text: 'A child is asked "What do you do when you\'re tired?" and responds "I sleep." There is no sleep stimulus present.',
        isCorrect: false,
        explanation: 'A response to a verbal stimulus without a corresponding nonverbal stimulus is an intraverbal, not an autoclitic.',
      },
      {
        id: 'm-87-c',
        text: 'A child sees a red ball and says "red ball." The therapist praises the response.',
        isCorrect: false,
        explanation: 'Labeling a visible stimulus is a tact. Autoclitics modify other verbal behavior rather than labeling nonverbal stimuli.',
      },
      {
        id: 'm-87-d',
        text: 'A child hears "Say ball" and repeats "ball." The therapist praises the response.',
        isCorrect: false,
        explanation: 'Repeating a heard word is an echoic. Autoclitics are secondary verbal operants that modify primary verbal responses.',
      },
    ],
  },
  {
    id: 'm-88',
    domain: 'Verbal Behavior',
    concept: 'Echoic',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'A verbal operant in which the response is controlled by a verbal discriminative stimulus and has point-to-point correspondence and formal similarity with that stimulus.',
    scenarios: [
      {
        id: 'm-88-a',
        text: 'A therapist says "ball" and the child immediately says "ball." The therapist praises the child. There is no ball present.',
        isCorrect: true,
        explanation: 'The child\'s verbal response ("ball") has point-to-point correspondence and formal similarity with the verbal SD ("ball")  --  this is an echoic. The absence of a nonverbal stimulus and MO rules out tact and mand.',
      },
      {
        id: 'm-88-b',
        text: 'A child sees a ball and says "ball" without any verbal prompt from the therapist.',
        isCorrect: false,
        explanation: 'Verbal behavior controlled by a nonverbal SD (the ball) is a tact, not an echoic. An echoic requires a verbal SD with point-to-point correspondence.',
      },
      {
        id: 'm-88-c',
        text: 'A therapist asks "What bounces?" and the child says "ball." The therapist praises the child.',
        isCorrect: false,
        explanation: 'The response ("ball") does not have point-to-point correspondence with the verbal SD ("What bounces?")  --  this is an intraverbal, not an echoic.',
      },
      {
        id: 'm-88-d',
        text: 'A child reads the word "ball" printed on a flashcard and says "ball."',
        isCorrect: false,
        explanation: 'Reading a written word aloud is a textual response, not an echoic. Echoics are controlled by auditory verbal stimuli, not written stimuli.',
      },
    ],
  },
  {
    id: 'm-89',
    domain: 'Verbal Behavior',
    concept: 'Listener Behavior (Receptive Language)',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'Behavior under the control of verbal stimuli in which the listener responds nonverbally to the verbal behavior of a speaker, such as following instructions or selecting items when named.',
    scenarios: [
      {
        id: 'm-89-a',
        text: 'A therapist says "Touch the ball" and the child reaches out and touches the ball among an array of objects. The therapist praises the child.',
        isCorrect: true,
        explanation: 'The child\'s nonverbal response (touching the ball) is controlled by the verbal stimulus ("Touch the ball")  --  this is listener behavior (receptive language). The child responds to verbal behavior without producing verbal behavior.',
      },
      {
        id: 'm-89-b',
        text: 'A therapist holds up a ball and asks "What is this?" and the child says "ball."',
        isCorrect: false,
        explanation: 'The child produces verbal behavior ("ball") in response to a nonverbal SD (the ball)  --  this is a tact, not listener behavior.',
      },
      {
        id: 'm-89-c',
        text: 'A therapist says "ball" and the child says "ball."',
        isCorrect: false,
        explanation: 'The child produces verbal behavior with point-to-point correspondence to the verbal SD  --  this is an echoic, not listener behavior.',
      },
      {
        id: 'm-89-d',
        text: 'A child says "I want the ball" when she sees the ball and wants to play with it.',
        isCorrect: false,
        explanation: 'The child produces verbal behavior controlled by an MO and nonverbal SD  --  this is a mand (or tact-mand combination), not listener behavior.',
      },
    ],
  },
  {
    id: 'm-90',
    domain: 'Verbal Behavior',
    concept: 'Verbal Operant  --  Textual',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'A verbal operant in which the response is controlled by a written or printed verbal stimulus and has point-to-point correspondence with that stimulus, but not formal similarity (the stimulus is visual; the response is vocal).',
    scenarios: [
      {
        id: 'm-90-a',
        text: 'A child reads the word "cat" printed on a flashcard and says "cat" aloud. The therapist praises the child. There is no cat present.',
        isCorrect: true,
        explanation: 'The vocal response ("cat") has point-to-point correspondence with the written stimulus ("cat") but not formal similarity (one is visual, one is vocal)  --  this is a textual response (reading aloud).',
      },
      {
        id: 'm-90-b',
        text: 'A therapist says "cat" and the child says "cat."',
        isCorrect: false,
        explanation: 'The response has point-to-point correspondence AND formal similarity with the verbal SD  --  this is an echoic, not a textual.',
      },
      {
        id: 'm-90-c',
        text: 'A child sees a cat and says "cat."',
        isCorrect: false,
        explanation: 'Verbal behavior controlled by a nonverbal SD (the actual cat) is a tact, not a textual.',
      },
      {
        id: 'm-90-d',
        text: 'A child hears the therapist say "cat" and writes the word "cat" on paper.',
        isCorrect: false,
        explanation: 'Writing a word in response to a spoken word is transcription (a form of copying under auditory control), not a textual response. Textual responses are vocal responses to written stimuli.',
      },
    ],
  },
  // -- NEW ITEMS: Skill Acquisition (H) --------------------------------------
  {
    id: 'm-91',
    domain: 'Skill Acquisition',
    concept: 'Errorless Learning',
    tcoDomain: 'F  -  Behavior Assessment',
    definition: 'A teaching strategy in which prompts are provided at a level that prevents or minimizes incorrect responses, ensuring the learner contacts reinforcement for correct responding from the beginning of instruction.',
    scenarios: [
      {
        id: 'm-91-a',
        text: 'When teaching a new discrimination, the therapist immediately provides a full physical prompt after presenting the SD so the child always responds correctly and contacts reinforcement. Prompts are faded only after the child demonstrates consistent correct responding.',
        isCorrect: true,
        explanation: 'Providing immediate, intrusive prompts to prevent errors and ensure the learner contacts reinforcement for correct responding is errorless learning  --  designed to minimize error responses that could be reinforced or interfere with acquisition.',
      },
      {
        id: 'm-91-b',
        text: 'The therapist presents the SD and waits 5 seconds before providing any prompt, allowing the child to attempt the response independently.',
        isCorrect: false,
        explanation: 'Waiting before prompting allows for error responses  --  this is a time delay procedure, not errorless learning.',
      },
      {
        id: 'm-91-c',
        text: 'The therapist provides the least intrusive prompt first and escalates only if the child makes an error.',
        isCorrect: false,
        explanation: 'Allowing errors to occur before escalating prompts is least-to-most prompting, not errorless learning.',
      },
      {
        id: 'm-91-d',
        text: 'The therapist provides corrective feedback after each error and repeats the trial.',
        isCorrect: false,
        explanation: 'Providing corrective feedback after errors is error correction, not errorless learning. Errorless learning prevents errors from occurring in the first place.',
      },
    ],
  },
  {
    id: 'm-92',
    domain: 'Skill Acquisition',
    concept: 'Total Task Presentation',
    tcoDomain: 'F  -  Behavior Assessment',
    definition: 'A chaining procedure in which the learner is prompted through every step of the chain on every trial, with prompts faded across steps as competence is demonstrated.',
    scenarios: [
      {
        id: 'm-92-a',
        text: 'When teaching hand-washing, the therapist guides the child through all seven steps on every trial, providing physical prompts for steps the child cannot yet do independently and allowing independent responding for mastered steps. Prompts are faded step by step as the child demonstrates competence.',
        isCorrect: true,
        explanation: 'Prompting through all steps of the chain on every trial while fading prompts for mastered steps is total task presentation  --  the child practices the entire chain from the beginning of training.',
      },
      {
        id: 'm-92-b',
        text: 'The therapist teaches only the first step of hand-washing until it is mastered, then adds the second step, continuing until all steps are chained.',
        isCorrect: false,
        explanation: 'Teaching the first step first and adding subsequent steps sequentially is forward chaining, not total task presentation.',
      },
      {
        id: 'm-92-c',
        text: 'The therapist prompts all steps except the last step (rinsing), which the child performs independently. Once rinsing is mastered, the therapist removes prompts from the second-to-last step.',
        isCorrect: false,
        explanation: 'Teaching the last step first and working backward is backward chaining, not total task presentation.',
      },
      {
        id: 'm-92-d',
        text: 'The therapist teaches each step of hand-washing as a separate discrete trial before combining them into a chain.',
        isCorrect: false,
        explanation: 'Teaching steps as separate discrete trials before chaining is a component skills approach, not total task presentation.',
      },
    ],
  },
  {
    id: 'm-93',
    domain: 'Skill Acquisition',
    concept: 'Fluency Training',
    tcoDomain: 'H  -  Selecting and Implementing Interventions',
    definition: 'Instruction designed to develop both accuracy and speed of responding to a level that supports maintenance, generalization, and application of the skill in natural contexts.',
    scenarios: [
      {
        id: 'm-93-a',
        text: 'After a student achieves 100% accuracy on math facts, the BCBA implements 1-minute timed practice sessions with a performance aim of 80 correct responses per minute. The student practices daily until she reaches the aim, after which the skill maintains without further practice.',
        isCorrect: true,
        explanation: 'Targeting both accuracy and speed (rate) to a specified performance aim to support maintenance and generalization is fluency training  --  the aim is not just correctness but automaticity.',
      },
      {
        id: 'm-93-b',
        text: 'The BCBA teaches the student to answer math facts correctly using a least-to-most prompting hierarchy.',
        isCorrect: false,
        explanation: 'Teaching accuracy using a prompting hierarchy is skill acquisition, not fluency training. Fluency training begins after accuracy is established.',
      },
      {
        id: 'm-93-c',
        text: 'The BCBA measures the student\'s math fact accuracy across three consecutive sessions to determine mastery.',
        isCorrect: false,
        explanation: 'Measuring accuracy across sessions to determine mastery is a mastery criterion, not fluency training. Fluency training targets rate of responding, not just accuracy.',
      },
      {
        id: 'm-93-d',
        text: 'The BCBA provides extra practice opportunities for math facts the student answers incorrectly.',
        isCorrect: false,
        explanation: 'Providing additional practice on error items is error correction and remediation, not fluency training.',
      },
    ],
  },
  // -- NEW ITEMS: Behavior Reduction (G) -------------------------------------
  {
    id: 'm-94',
    concept: 'Momentary DRO (mDRO)',
    domain: 'Behavior Reduction',
    tcoDomain: 'G  -  Behavior-Change Procedures',
    definition: 'A DRO variant in which reinforcement is delivered if the target behavior is absent at the specific moment the interval ends, regardless of whether it occurred earlier in the interval.',
    scenarios: [
      {
        id: 'm-94-a',
        text: 'A BCBA sets a timer for 5-minute intervals. When the timer sounds, she looks up and checks whether the client is engaging in self-stimulatory behavior at that exact moment. If not, she delivers a preferred item  --  even if the behavior occurred earlier in the interval.',
        isCorrect: true,
        explanation: 'Checking for behavior only at the moment the interval ends and reinforcing its absence at that moment is momentary DRO (mDRO)  --  less restrictive than whole-interval DRO but also less precise.',
      },
      {
        id: 'm-94-b',
        text: 'A BCBA sets a timer for 5-minute intervals. Reinforcement is delivered only if the client did not engage in the target behavior at any point during the entire interval.',
        isCorrect: false,
        explanation: 'Requiring the behavior to be absent throughout the entire interval is whole-interval DRO, not momentary DRO.',
      },
      {
        id: 'm-94-c',
        text: 'A BCBA delivers reinforcement every 3 minutes regardless of whether the target behavior occurs.',
        isCorrect: false,
        explanation: 'Delivering reinforcement on a fixed-time schedule regardless of behavior is noncontingent reinforcement (NCR), not DRO.',
      },
      {
        id: 'm-94-d',
        text: 'A BCBA reinforces a behavior that is physically incompatible with the target behavior.',
        isCorrect: false,
        explanation: 'Reinforcing an incompatible behavior is DRI (Differential Reinforcement of Incompatible Behavior), not DRO.',
      },
    ],
  },
  {
    id: 'm-95',
    domain: 'Behavior Reduction',
    concept: 'Differential Reinforcement of Incompatible Behavior (DRI)',
    tcoDomain: 'G  -  Behavior-Change Procedures',
    definition: 'A procedure in which reinforcement is delivered for a behavior that is physically incompatible with the problem behavior, making it impossible for both behaviors to occur simultaneously.',
    scenarios: [
      {
        id: 'm-95-a',
        text: 'A child frequently runs in the hallway. The BCBA reinforces the child for walking with hands clasped behind his back  --  a behavior that is physically incompatible with running. Running decreases as walking with clasped hands increases.',
        isCorrect: true,
        explanation: 'Reinforcing walking with clasped hands (physically incompatible with running) is DRI  --  the two behaviors cannot occur simultaneously, so increasing the incompatible behavior directly reduces the problem behavior.',
      },
      {
        id: 'm-95-b',
        text: 'The BCBA reinforces the child for asking permission to run in the gym instead of running in the hallway.',
        isCorrect: false,
        explanation: 'Reinforcing an alternative communicative behavior is DRA, not DRI. The alternative behavior (asking permission) is not physically incompatible with running.',
      },
      {
        id: 'm-95-c',
        text: 'The BCBA reinforces the child for any behavior other than running during 2-minute intervals.',
        isCorrect: false,
        explanation: 'Reinforcing the absence of the problem behavior during intervals is DRO, not DRI. DRI requires a specific physically incompatible behavior.',
      },
      {
        id: 'm-95-d',
        text: 'The BCBA stops providing attention when the child runs, and running decreases over time.',
        isCorrect: false,
        explanation: 'Discontinuing the reinforcement contingency for running is extinction, not DRI.',
      },
    ],
  },
  // -- NEW ITEMS: Measurement (C) ---------------------------------------------
  {
    id: 'm-96',
    domain: 'Measurement',
    concept: 'Latency Recording -- Clinical Application',
    tcoDomain: 'C  -  Measurement',
    definition: 'A measurement procedure used when the speed of response initiation is the therapeutic target (e.g., reducing the time a student takes to begin a task after an instruction); distinct from duration recording, which measures how long a behavior lasts once initiated.',
    scenarios: [
      {
        id: 'm-96-a',
        text: 'A BCBA is concerned that a student takes too long to begin tasks after instructions are given. She uses a stopwatch to measure the time between when she says "Start your work" and when the student picks up his pencil and begins writing.',
        isCorrect: true,
        explanation: 'Measuring the time between the onset of the instruction (SD) and the initiation of the behavior (picking up the pencil) is latency recording  --  appropriate for measuring response initiation delays.',
      },
      {
        id: 'm-96-b',
        text: 'The BCBA measures the total amount of time the student spends on-task during a 30-minute work period.',
        isCorrect: false,
        explanation: 'Measuring the total time a behavior occurs is duration recording, not latency recording.',
      },
      {
        id: 'm-96-c',
        text: 'The BCBA counts the number of times the student looks up from his work during a 30-minute session.',
        isCorrect: false,
        explanation: 'Counting the number of occurrences of a behavior is frequency (event) recording, not latency recording.',
      },
      {
        id: 'm-96-d',
        text: 'The BCBA measures the time between when the student begins a task and when he completes it.',
        isCorrect: false,
        explanation: 'Measuring the time from the start of a behavior to its completion is inter-response time or task completion time, not latency. Latency measures time from the SD to the initiation of the behavior.',
      },
    ],
  },
  {
    id: 'm-97',
    domain: 'Measurement',
    concept: 'Inter-Response Time (IRT)',
    tcoDomain: 'C  -  Measurement',
    definition: 'The elapsed time between the end of one response and the beginning of the next response of the same type.',
    scenarios: [
      {
        id: 'm-97-a',
        text: 'A BCBA measures the time between the end of one instance of hand-flapping and the beginning of the next instance of hand-flapping to understand the temporal distribution of the behavior throughout the day.',
        isCorrect: true,
        explanation: 'Measuring the time between the end of one response and the beginning of the next response of the same type is inter-response time (IRT)  --  useful for understanding response patterning and designing DRO interval lengths.',
      },
      {
        id: 'm-97-b',
        text: 'The BCBA measures the time between the therapist\'s instruction and the client\'s first response.',
        isCorrect: false,
        explanation: 'Measuring time from the SD to the initiation of the behavior is latency recording, not IRT.',
      },
      {
        id: 'm-97-c',
        text: 'The BCBA measures the total duration of each hand-flapping episode.',
        isCorrect: false,
        explanation: 'Measuring the duration of each individual response is duration recording, not IRT.',
      },
      {
        id: 'm-97-d',
        text: 'The BCBA counts the total number of hand-flapping episodes during a 30-minute session.',
        isCorrect: false,
        explanation: 'Counting the number of occurrences is frequency recording, not IRT.',
      },
    ],
  },
  // -- NEW ITEMS: Ethics & Professional Practice (E) -------------------------
  {
    id: 'm-98',
    domain: 'Ethics & Professional Practice',
    concept: 'Conflict of Interest',
    tcoDomain: 'E  -  Ethical and Professional Issues',
    definition: 'A situation in which a behavior analyst\'s personal, financial, or professional interests could impair their objectivity, competence, or effectiveness in fulfilling their professional obligations.',
    scenarios: [
      {
        id: 'm-98-a',
        text: 'A BCBA owns stock in a company that manufactures a specific AAC device. When recommending AAC devices for clients, she discloses this financial interest to clients and supervisors and takes steps to ensure her recommendations are based solely on client need.',
        isCorrect: true,
        explanation: 'A financial interest in a product that could influence professional recommendations is a conflict of interest. Disclosing it and taking steps to ensure objectivity is the appropriate ethical response.',
      },
      {
        id: 'm-98-b',
        text: 'A BCBA provides services to two clients who attend the same school and occasionally share the same classroom.',
        isCorrect: false,
        explanation: 'Providing services to multiple clients in the same setting is not inherently a conflict of interest  --  it is a common practice that requires careful coordination.',
      },
      {
        id: 'm-98-c',
        text: 'A BCBA declines to provide services to a client because she lacks the necessary competence in that area.',
        isCorrect: false,
        explanation: 'Declining services due to lack of competence is a scope of competence decision, not a conflict of interest.',
      },
      {
        id: 'm-98-d',
        text: 'A BCBA is simultaneously the treating clinician and the primary researcher in a study involving her client.',
        isCorrect: false,
        explanation: 'Serving as both clinician and researcher for the same client is a dual role that may create a conflict of interest, but the scenario describes a dual role, not a financial conflict of interest specifically.',
      },
    ],
  },
  {
    id: 'm-99',
    domain: 'Ethics & Professional Practice',
    concept: 'Ongoing Data Collection and Treatment Evaluation',
    tcoDomain: 'H  -  Selecting and Implementing Interventions',
    definition: 'The ethical obligation of a behavior analyst to continuously collect data on client outcomes and use those data to evaluate the effectiveness of the intervention and make data-driven modifications.',
    scenarios: [
      {
        id: 'm-99-a',
        text: 'A BCBA reviews her client\'s behavior data every two weeks. When data show that problem behavior has not decreased after four weeks of intervention, she modifies the treatment plan rather than continuing the same approach.',
        isCorrect: true,
        explanation: 'Continuously collecting data, reviewing it at regular intervals, and modifying the intervention when data indicate it is not effective is the ethical practice of ongoing data collection and treatment evaluation.',
      },
      {
        id: 'm-99-b',
        text: 'A BCBA implements an intervention that has strong research support and continues it for six months without reviewing data, assuming it will work.',
        isCorrect: false,
        explanation: 'Failing to review data and modify treatment based on client outcomes violates the ethical obligation for ongoing treatment evaluation, even if the intervention has research support.',
      },
      {
        id: 'm-99-c',
        text: 'A BCBA conducts a comprehensive assessment before developing the initial treatment plan.',
        isCorrect: false,
        explanation: 'Conducting an assessment before treatment is an assessment practice, not ongoing treatment evaluation. Ongoing evaluation occurs during and after treatment implementation.',
      },
      {
        id: 'm-99-d',
        text: 'A BCBA obtains informed consent from the client\'s guardian before implementing a new intervention.',
        isCorrect: false,
        explanation: 'Obtaining informed consent is an ethical obligation related to client rights, not ongoing data collection and treatment evaluation.',
      },
    ],
  },
  {
    id: 'm-100',
    domain: 'Assessment',
    concept: 'Functional Behavior Assessment (FBA)',
    tcoDomain: 'F  -  Behavior Assessment',
    definition: 'A comprehensive assessment process that uses multiple methods (indirect, descriptive, and experimental) to identify the variables that predict and maintain problem behavior, resulting in a hypothesis about its function.',
    scenarios: [
      {
        id: 'm-100-a',
        text: 'A BCBA conducts parent and teacher interviews, observes the student in the classroom recording ABCs, and reviews existing records to develop a hypothesis that the student\'s aggression is maintained by escape from academic tasks. She uses this hypothesis to develop a function-based intervention.',
        isCorrect: true,
        explanation: 'Using multiple methods (indirect interviews, descriptive ABC observation, record review) to identify the function of problem behavior and develop a hypothesis is a functional behavior assessment (FBA).',
      },
      {
        id: 'm-100-b',
        text: 'A BCBA introduces attention, demand, alone, and control conditions in a structured analog setting to identify which condition produces the highest rate of aggression.',
        isCorrect: false,
        explanation: 'Systematically manipulating conditions to identify behavioral function is a functional analysis (experimental assessment)  --  the most rigorous component of an FBA, but not the FBA itself.',
      },
      {
        id: 'm-100-c',
        text: 'A BCBA administers the Motivation Assessment Scale (MAS) to identify the most likely function of the student\'s aggression.',
        isCorrect: false,
        explanation: 'Administering a rating scale is an indirect assessment method  --  one component of an FBA, but not a complete FBA on its own.',
      },
      {
        id: 'm-100-d',
        text: 'A BCBA implements a DRA intervention based on a hypothesis that aggression is escape-maintained, without first conducting any formal assessment.',
        isCorrect: false,
        explanation: 'Implementing an intervention without conducting an assessment is not an FBA. An FBA must precede function-based intervention development.',
      },
    ],
  },

  // -- Domain H & I additions -----------------------------------------------
  {
    id: 'sm-h1',
    domain: 'Selecting & Implementing Interventions',
    concept: 'Functional Communication Training (FCT)',
    definition: 'A differential reinforcement procedure that teaches a communicative response functionally equivalent to the problem behavior, producing the same reinforcer, to replace it.',
    scenarios: [
      {
        id: 'sm-h1-a',
        text: 'Marcus bites his hand when demands are placed. His BCBA teaches him to hand a break card to request a break, which produces the same escape from demands that biting previously produced. Biting decreases as the card exchange is reinforced.',
        isCorrect: true,
        explanation: 'FCT requires functional equivalence. The replacement response must produce the same reinforcer as the problem behavior. This scenario shows escape-maintained biting replaced by an escape-producing communicative response.'
      },
      {
        id: 'sm-h1-b',
        text: 'A therapist teaches a child to say "help" during academic tasks by prompting the word and delivering praise. Problem behavior is not addressed in the program.',
        isCorrect: false,
        explanation: 'Teaching communication without addressing the function of a problem behavior is not FCT. FCT requires identifying the function first and teaching a replacement that produces the same reinforcer.'
      },
      {
        id: 'sm-h1-c',
        text: 'A BCBA implements extinction for biting and simultaneously runs a DTT program to teach the child to label pictures of emotions.',
        isCorrect: false,
        explanation: 'Extinction plus a skill program is not FCT. FCT specifically requires the replacement response to be functionally equivalent, producing the same reinforcer as the problem behavior.'
      },
      {
        id: 'sm-h1-d',
        text: 'A child is taught to raise her hand during group instruction to gain teacher attention. The hand-raising is reinforced with attention on a fixed-ratio 1 schedule.',
        isCorrect: false,
        explanation: 'This describes teaching a communication skill, but without a problem behavior with an identified function to replace. FCT is a behavior reduction procedure, not a general communication training procedure.'
      }
    ]
  },
  {
    id: 'sm-h2',
    domain: 'Selecting & Implementing Interventions',
    concept: 'Noncontingent Reinforcement (NCR)',
    definition: 'Delivery of a reinforcer on a time-based schedule independent of behavior; reduces problem behavior by abolishing the motivating operation that maintains it.',
    scenarios: [
      {
        id: 'sm-h2-a',
        text: 'A child engages in attention-maintained stereotypy. Her BCBA delivers 30 seconds of attention every 3 minutes regardless of what she is doing. Stereotypy decreases across sessions as the MO for attention is continuously abolished.',
        isCorrect: true,
        explanation: 'NCR delivers the maintaining reinforcer on a time-based schedule independent of behavior, abolishing the MO. The fixed-time attention delivery here directly targets the attention function.'
      },
      {
        id: 'sm-h2-b',
        text: 'A BCBA provides preferred items only when the client is engaging in appropriate behavior, using a differential reinforcement of other behavior (DRO) schedule.',
        isCorrect: false,
        explanation: 'DRO is contingency-based. NCR is non-contingent: reinforcement is delivered regardless of behavior on a time-based schedule.'
      },
      {
        id: 'sm-h2-c',
        text: 'A therapist removes all preferred items from the environment before sessions to reduce the establishing operation for problem behavior.',
        isCorrect: false,
        explanation: 'Removing establishing operations is an antecedent intervention but not NCR. NCR specifically delivers the maintaining reinforcer on a time-based schedule rather than removing access to it.'
      },
      {
        id: 'sm-h2-d',
        text: 'A BCBA uses extinction by withholding attention following each instance of stereotypy, while simultaneously teaching a functionally equivalent communicative response.',
        isCorrect: false,
        explanation: 'This describes extinction plus FCT, not NCR. NCR does not withhold the reinforcer, it delivers it freely on a schedule to abolish the MO.'
      }
    ]
  },
  {
    id: 'sm-h3',
    domain: 'Selecting & Implementing Interventions',
    concept: 'High-Probability Request Sequence',
    definition: 'An antecedent intervention presenting several high-p requests immediately before a low-p request to increase compliance through behavioral momentum.',
    scenarios: [
      {
        id: 'sm-h3-a',
        text: 'Before asking Jalen to complete a non-preferred writing task, his teacher presents three easy requests he reliably completes. Compliance with the writing task increases following the high-p sequence.',
        isCorrect: true,
        explanation: 'The high-p sequence requires presenting multiple requests with a high probability of compliance immediately before the low-p request. The behavioral momentum generated increases compliance with the low-p request.'
      },
      {
        id: 'sm-h3-b',
        text: 'A BCBA modifies the difficulty of academic tasks so that all tasks are at the child\'s independent mastery level, eliminating non-preferred demands from the session.',
        isCorrect: false,
        explanation: 'Removing low-p demands is demand fading, not the high-p sequence. The high-p sequence retains the low-p request and uses behavioral momentum to increase compliance with it.'
      },
      {
        id: 'sm-h3-c',
        text: 'A therapist provides a preferred item contingent on compliance with difficult requests and removes it contingent on non-compliance.',
        isCorrect: false,
        explanation: 'This describes differential reinforcement plus response cost, not the high-p sequence. The high-p sequence is an antecedent intervention that precedes the low-p request.'
      },
      {
        id: 'sm-h3-d',
        text: 'A teacher presents preferred activities before non-preferred activities in the daily schedule to increase engagement with the non-preferred activities.',
        isCorrect: false,
        explanation: 'Scheduling preferred activities before non-preferred ones is a general antecedent strategy but not the high-p sequence. The high-p sequence requires presenting multiple requests with high compliance probability immediately before the low-p request.'
      }
    ]
  },
  {
    id: 'sm-h4',
    domain: 'Selecting & Implementing Interventions',
    concept: 'Behavior Trap',
    definition: 'A naturally occurring contingency that, once entered, captures and maintains behavior through natural reinforcement without continued programmed reinforcement.',
    scenarios: [
      {
        id: 'sm-h4-a',
        text: 'A child is taught to initiate greetings with peers. Once she begins initiating, peer laughter, conversation, and play naturally reinforce further initiations. The therapist fades involvement as the social environment maintains the behavior.',
        isCorrect: true,
        explanation: 'A behavior trap is defined by natural contingencies taking over reinforcement once the behavior is established. The peer social environment captures and maintains initiations without continued therapist involvement.'
      },
      {
        id: 'sm-h4-b',
        text: 'A BCBA uses a multiple baseline design to demonstrate that social initiations increase only when the intervention is introduced across three settings.',
        isCorrect: false,
        explanation: 'A multiple baseline design is a research design, not a behavior trap. A behavior trap is a maintenance strategy relying on natural contingencies, not a research methodology.'
      },
      {
        id: 'sm-h4-c',
        text: 'A therapist uses a token economy to reinforce social initiations across three settings, then gradually thins the reinforcement schedule over 12 weeks.',
        isCorrect: false,
        explanation: 'A token economy is a programmed reinforcement system, not a behavior trap. A behavior trap relies on natural reinforcers in the environment, not a contrived token system.'
      },
      {
        id: 'sm-h4-d',
        text: 'A child\'s social initiations are reinforced on a variable-ratio schedule to promote resistance to extinction during the maintenance phase.',
        isCorrect: false,
        explanation: 'Variable-ratio schedules are programmed contingencies, not behavior traps. A behavior trap requires natural environmental contingencies to capture and maintain the behavior.'
      }
    ]
  },
  {
    id: 'sm-h5',
    domain: 'Selecting & Implementing Interventions',
    concept: 'Competing Stimulus Assessment',
    definition: 'A systematic evaluation identifying stimuli that compete with the reinforcer maintaining automatically-reinforced problem behavior; used to select items for enriched environments.',
    scenarios: [
      {
        id: 'sm-h5-a',
        text: 'A child engages in hand-mouthing maintained by automatic reinforcement. Her BCBA systematically presents various toys and activities and measures which items produce the greatest reduction in hand-mouthing. Those items are incorporated into the treatment package.',
        isCorrect: true,
        explanation: 'A competing stimulus assessment is specifically designed for automatically-maintained behavior. The BCBA systematically identifies which stimuli compete most effectively with the automatic reinforcer maintaining the problem behavior.'
      },
      {
        id: 'sm-h5-b',
        text: 'A BCBA conducts a paired-stimulus preference assessment to identify high-preference items before beginning a skill acquisition program.',
        isCorrect: false,
        explanation: 'A preference assessment identifies preferred stimuli for use as reinforcers. A competing stimulus assessment specifically identifies stimuli that compete with the automatic reinforcer maintaining problem behavior.'
      },
      {
        id: 'sm-h5-c',
        text: 'A therapist presents two potential reinforcers simultaneously and records which item the child approaches first to determine relative reinforcer value.',
        isCorrect: false,
        explanation: 'This describes a paired-stimulus preference assessment. The competing stimulus assessment measures reduction in problem behavior, not approach behavior toward stimuli.'
      },
      {
        id: 'sm-h5-d',
        text: 'A BCBA assesses which antecedent stimuli reliably evoke problem behavior across multiple settings to identify discriminative stimuli for the behavior.',
        isCorrect: false,
        explanation: 'Identifying discriminative stimuli is part of a functional assessment, not a competing stimulus assessment. The competing stimulus assessment measures which stimuli reduce automatically-maintained problem behavior.'
      }
    ]
  },
  {
    id: 'sm-i1',
    domain: 'Personnel Supervision & Management',
    concept: 'Behavioral Skills Training (BST)',
    definition: 'A staff training package consisting of four components: instructions, modeling, rehearsal, and feedback; all four components must be present.',
    scenarios: [
      {
        id: 'sm-i1-a',
        text: 'A BCBA trains a new RBT to implement DTT. She explains the procedure verbally, demonstrates it with a confederate, has the RBT practice while she observes, then provides specific corrective and positive feedback on the RBT\'s performance.',
        isCorrect: true,
        explanation: 'BST requires all four components: instructions, modeling, rehearsal, and feedback. All four are present in this scenario.'
      },
      {
        id: 'sm-i1-b',
        text: 'A supervisor assigns a new RBT a written manual describing all intervention procedures and schedules a written competency exam for the following week.',
        isCorrect: false,
        explanation: 'Written instructions and a knowledge exam address only the instruction component of BST. BST requires modeling, rehearsal, and feedback in addition to instructions.'
      },
      {
        id: 'sm-i1-c',
        text: 'A BCBA observes an RBT\'s session and writes a detailed performance review that is shared at the monthly team meeting.',
        isCorrect: false,
        explanation: 'Observation plus delayed written feedback is not BST. BST requires all four components including modeling and rehearsal, and feedback should be delivered in close temporal proximity to the observed behavior.'
      },
      {
        id: 'sm-i1-d',
        text: 'A supervisor uses a video library of correctly implemented procedures and requires RBTs to watch relevant videos before their first client session.',
        isCorrect: false,
        explanation: 'Video modeling addresses only the modeling component of BST. Without instructions, rehearsal, and feedback, this does not qualify as BST.'
      }
    ]
  },
  {
    id: 'sm-i2',
    domain: 'Personnel Supervision & Management',
    concept: 'Performance Feedback',
    definition: 'Information provided to a supervisee about the accuracy and quality of their work, delivered in close temporal proximity to the observed behavior to promote skill acquisition and maintenance.',
    scenarios: [
      {
        id: 'sm-i2-a',
        text: 'After observing an RBT\'s session, a BCBA meets with the RBT within 24 hours and provides specific praise for correct prompt fading and corrective feedback on trial pacing, including a brief re-demonstration of the correct pacing.',
        isCorrect: true,
        explanation: 'Effective performance feedback is timely, specific, includes both positive and corrective components, and may include re-modeling. All elements are present here.'
      },
      {
        id: 'sm-i2-b',
        text: 'A supervisor sends a monthly email summarizing the RBT\'s overall performance rating and noting areas for general improvement.',
        isCorrect: false,
        explanation: 'Monthly, non-specific feedback delivered via email is not effective performance feedback. Feedback must be timely and specific to the observed behaviors.'
      },
      {
        id: 'sm-i2-c',
        text: 'A BCBA reviews session data graphs weekly and adjusts the intervention protocol based on the data trends without discussing the changes with the RBT.',
        isCorrect: false,
        explanation: 'Data-based protocol adjustments are a supervisory responsibility but are not performance feedback. Performance feedback must be directed at the supervisee\'s behavior, not just the client\'s data.'
      },
      {
        id: 'sm-i2-d',
        text: 'A supervisor provides written praise in the RBT\'s personnel file after the client meets a mastery criterion, attributing the success to the RBT\'s effort.',
        isCorrect: false,
        explanation: 'Documenting praise in a personnel file is not performance feedback in the behavioral sense. Effective performance feedback must be delivered in close temporal proximity to the observed behavior.'
      }
    ]
  },
  {
    id: 'sm-i3',
    domain: 'Personnel Supervision & Management',
    concept: 'Pyramidal Training',
    definition: 'A staff training model in which a behavior analyst trains a small group of lead staff who then train other staff, creating a hierarchical dissemination structure.',
    scenarios: [
      {
        id: 'sm-i3-a',
        text: 'A BCBA at a large residential facility trains three senior RBTs on a new crisis prevention protocol using BST. Each senior RBT then trains four frontline RBTs using the same BST procedures, with the BCBA providing oversight and fidelity checks.',
        isCorrect: true,
        explanation: 'Pyramidal training is defined by the hierarchical dissemination structure: the BCBA trains trainers who train others. The BCBA\'s oversight and fidelity checks maintain quality across the hierarchy.'
      },
      {
        id: 'sm-i3-b',
        text: 'A BCBA provides individual supervision to each of the 12 RBTs on her caseload, meeting with each one for one hour per week to review session data and provide performance feedback.',
        isCorrect: false,
        explanation: 'Individual supervision by the BCBA is direct supervision, not pyramidal training. Pyramidal training requires the BCBA to train intermediate trainers who then train other staff.'
      },
      {
        id: 'sm-i3-c',
        text: 'A training coordinator develops an online module that all new RBTs must complete before their first client contact, followed by a written competency exam.',
        isCorrect: false,
        explanation: 'Online training modules are a technology-based training approach, not pyramidal training. Pyramidal training requires human trainers at each level of the hierarchy.'
      },
      {
        id: 'sm-i3-d',
        text: 'A BCBA trains all staff simultaneously in a group workshop format, then assigns competency checks to be completed by each staff member\'s direct supervisor.',
        isCorrect: false,
        explanation: 'Group workshop training by a single trainer is not pyramidal training. Pyramidal training requires a hierarchical structure where trained trainers deliver the training to the next level.'
      }
    ]
  }
,
{
    id: 'm-101',
    domain: 'Verbal Behavior',
    concept: 'Point-to-Point Correspondence',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'A defining feature of certain verbal operants in which each unit of the verbal stimulus controls a corresponding unit of the verbal response, such that the stimulus and response share the same sequential structure.',
    scenarios: [
      {
        id: 'm-101-a',
        text: 'A BCBA is categorizing verbal operants. She notes that in echoics and codics, each sound or letter in the stimulus controls the matching sound or letter in the response  --  the sequence of the stimulus is preserved unit-by-unit in the response.',
        isCorrect: true,
        explanation: 'Point-to-point correspondence means each unit of the verbal stimulus controls the corresponding unit of the response. Echoics and codics both have this property  --  the stimulus sequence maps directly onto the response sequence.',
      },
      {
        id: 'm-101-b',
        text: 'A child sees a dog and says "dog." The nonverbal stimulus (dog) controls the verbal response ("dog") through a history of reinforcement for naming objects in the environment.',
        isCorrect: false,
        explanation: 'This is a tact. A nonverbal stimulus controls the verbal response. There is no verbal stimulus whose units correspond to units of the response  --  point-to-point correspondence requires a verbal controlling stimulus.',
      },
      {
        id: 'm-101-c',
        text: 'A child is asked "What do you do when you are hungry?" and responds "I eat food." The verbal stimulus (question) and verbal response (answer) are both verbal, but the content of the response differs from the content of the question.',
        isCorrect: false,
        explanation: 'This is an intraverbal. Although both stimulus and response are verbal, the response does not reproduce the units of the stimulus in sequence  --  the question and answer have different content. Point-to-point correspondence is absent.',
      },
      {
        id: 'm-101-d',
        text: 'A child hears "What animal says moo?" and responds "cow." The verbal response is controlled by the verbal stimulus, and the child has been reinforced for this response in the past.',
        isCorrect: false,
        explanation: 'This is an intraverbal. The response ("cow") does not reproduce any unit of the stimulus ("What animal says moo?") in sequence. Point-to-point correspondence requires the response to mirror the stimulus unit-by-unit.',
      },
    ],
  },
  {
    id: 'm-102',
    domain: 'Verbal Behavior',
    concept: 'Formal Similarity',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'A property of a verbal operant in which the controlling stimulus and the verbal response share the same sense modality and physical form, such that the response resembles or reproduces the stimulus.',
    scenarios: [
      {
        id: 'm-102-a',
        text: 'A BCBA explains to a trainee that echoics and codics both have formal similarity because the stimulus and response are in the same sense modality (auditory-auditory or visual-written) and the response physically resembles the stimulus.',
        isCorrect: true,
        explanation: 'Formal similarity requires the same sense modality and physical resemblance between stimulus and response. Echoics (auditory stimulus -> auditory response) and codics (written stimulus -> written response) both meet this criterion.',
      },
      {
        id: 'm-102-b',
        text: 'A child hears the word "cat" and writes the letters C-A-T. The auditory stimulus controls a written response that spells out the word.',
        isCorrect: false,
        explanation: 'This is a transcription response. The stimulus is auditory and the response is written  --  they are in different sense modalities. Formal similarity requires the same sense modality, so this operant lacks formal similarity.',
      },
      {
        id: 'm-102-c',
        text: 'A child sees a written word and reads it aloud. The visual stimulus controls an auditory response that corresponds to the printed word.',
        isCorrect: false,
        explanation: 'This is a textual response. The stimulus is visual-written and the response is auditory  --  different sense modalities. Formal similarity is absent because the stimulus and response are in different modalities.',
      },
      {
        id: 'm-102-d',
        text: 'A child sees a picture of a ball and says "ball." The nonverbal visual stimulus controls the verbal response through a tacting history.',
        isCorrect: false,
        explanation: 'This is a tact. The controlling stimulus is a nonverbal object, not a verbal stimulus. Formal similarity is a property of verbal operants with verbal controlling stimuli  --  it does not apply to tacts.',
      },
    ],
  },
  {
    id: 'm-103',
    domain: 'Verbal Behavior',
    concept: 'Extended Tact',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'A tact emitted in the presence of a novel stimulus that was not part of original tact training, occurring because the novel stimulus shares some property with the original training stimulus.',
    scenarios: [
      {
        id: 'm-103-a',
        text: 'Leo was trained to tact a standard red stop sign as "stop sign." When traveling in another country, he encounters a triangular yellow stop sign he has never seen before and says "stop sign." His response is reinforced.',
        isCorrect: true,
        explanation: 'Leo emits the trained tact response in the presence of a novel stimulus (the unfamiliar sign) that shares properties with the original training stimulus. This is an extended tact  --  the response generalizes beyond the trained exemplar.',
      },
      {
        id: 'm-103-b',
        text: 'Leo is trained to tact "apple" with a red apple. He is then shown a red apple from a different store and correctly says "apple." His BCBA records this as a correct tact trial.',
        isCorrect: false,
        explanation: 'This is a trained tact, not an extended tact. The novel apple is a member of the same stimulus class (red apple) that was trained. An extended tact involves a stimulus that was not part of training and shares only some properties with the training stimulus.',
      },
      {
        id: 'm-103-c',
        text: 'Leo hears his BCBA say "ball" and immediately repeats "ball." His BCBA praises him for the correct echoic response.',
        isCorrect: false,
        explanation: 'This is an echoic, not an extended tact. The controlling stimulus is a verbal auditory stimulus, and the response reproduces it with point-to-point correspondence and formal similarity. No nonverbal novel stimulus is involved.',
      },
      {
        id: 'm-103-d',
        text: 'Leo is asked "What do you use to eat soup?" and responds "spoon." He has been reinforced for this response in the past during language lessons.',
        isCorrect: false,
        explanation: 'This is an intraverbal. A verbal stimulus (the question) controls a verbal response (the answer) without point-to-point correspondence. No novel nonverbal stimulus is present, so this cannot be an extended tact.',
      },
    ],
  },
  {
    id: 'm-104',
    domain: 'Verbal Behavior',
    concept: 'Generic Tact Extension',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'A form of tact extension in which a response is controlled by a novel stimulus that is a true member of the same general stimulus class as the original training stimulus, because the novel stimulus shares the defining features of that class.',
    scenarios: [
      {
        id: 'm-104-a',
        text: 'Leo was trained to tact "dog" using a Labrador Retriever. When he encounters a Basenji (a breed he has never seen) at the park, he spontaneously says "dog." His BCBA notes that the Basenji shares all the defining features of the dog class.',
        isCorrect: true,
        explanation: 'The Basenji is a true member of the dog class and shares its defining features. Leo\'s tact response generalizes to this novel exemplar because it meets the class definition. This is a generic tact extension  --  the most educationally desirable form.',
      },
      {
        id: 'm-104-b',
        text: 'Leo sees a round, smooth bald head and says "billiard ball." He was trained to tact billiard balls, and the bald head shares the property of being round and smooth, but is not actually a billiard ball.',
        isCorrect: false,
        explanation: 'This is a metaphorical tact extension. The novel stimulus shares a property with the training stimulus but belongs to a different stimulus class. A generic tact extension requires the novel stimulus to be a true member of the same class.',
      },
      {
        id: 'm-104-c',
        text: 'Leo sees only a dog\'s tail protruding from behind a couch and says "dog." He was trained with whole dogs, and the tail is only a part of the original training stimulus.',
        isCorrect: false,
        explanation: 'This is a solistic tact extension. Only a part of the original training stimulus controls the full tact response. A generic tact extension requires the novel stimulus to be a complete member of the class, not just a part of a training exemplar.',
      },
      {
        id: 'm-104-d',
        text: 'Leo sees a king and says "crown" because kings and crowns have always appeared together in his training materials, even though the king does not physically resemble a crown.',
        isCorrect: false,
        explanation: 'This is a metonymical tact extension. The response is controlled by a stimulus that co-occurred with the original training stimulus, not by a stimulus that shares defining features of the class. Generic tact extension requires shared class-defining features.',
      },
    ],
  },
  {
    id: 'm-105',
    domain: 'Verbal Behavior',
    concept: 'Metaphorical Tact Extension',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'A form of tact extension in which a response is controlled by a novel stimulus that shares a property with the original training stimulus, even though the novel stimulus belongs to a different stimulus class.',
    scenarios: [
      {
        id: 'm-105-a',
        text: 'Leo was trained to tact "billiard ball" with actual billiard balls. When he sees a bald head for the first time, he says "billiard ball." The bald head is round and smooth, like a billiard ball, but is not a billiard ball.',
        isCorrect: true,
        explanation: 'The bald head shares a property (round and smooth) with the training stimulus (billiard ball) but belongs to a different stimulus class (human anatomy vs. sports equipment). The tact response is controlled by the shared property  --  this is a metaphorical tact extension.',
      },
      {
        id: 'm-105-b',
        text: 'Leo was trained to tact "Labrador" with a specific Labrador. He sees a different Labrador he has never met and says "Labrador." The new dog is a true member of the Labrador class.',
        isCorrect: false,
        explanation: 'This is a generic tact extension. The novel stimulus is a true member of the same class as the training stimulus. Metaphorical tact extension requires the novel stimulus to belong to a different stimulus class.',
      },
      {
        id: 'm-105-c',
        text: 'Leo sees a king and says "crown" because crowns and kings always appeared together in his picture books, even though the king does not look like a crown.',
        isCorrect: false,
        explanation: 'This is a metonymical tact extension. The response is controlled by temporal contiguity (co-occurrence) rather than shared physical properties. Metaphorical tact extension requires a shared property between the novel and training stimuli.',
      },
      {
        id: 'm-105-d',
        text: 'Leo sees only a dog\'s tail behind a couch and says "dog." He was trained with whole dogs; the tail is only part of the original training stimulus.',
        isCorrect: false,
        explanation: 'This is a solistic tact extension. Only a part of the training stimulus controls the response. Metaphorical tact extension requires the novel stimulus to share a property with the whole training stimulus, not to be a part of it.',
      },
    ],
  },
  {
    id: 'm-106',
    domain: 'Verbal Behavior',
    concept: 'Metonymical Tact Extension',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'A form of tact extension in which a response is controlled by a stimulus that was merely present at the same time as the original training stimulus, with no physical similarity between the two stimuli.',
    scenarios: [
      {
        id: 'm-106-a',
        text: 'Leo was trained to tact "crown" with pictures of crowns. In all his training materials, kings always wore crowns. When he sees a king without a crown, he says "crown." The king does not physically resemble a crown.',
        isCorrect: true,
        explanation: 'The king controlled the tact response "crown" because kings and crowns co-occurred during training  --  not because the king shares any physical property with a crown. This temporal contiguity without physical similarity is the defining feature of metonymical tact extension.',
      },
      {
        id: 'm-106-b',
        text: 'Leo sees a round, smooth bald head and says "billiard ball." The bald head shares the property of being round and smooth with a billiard ball, but is not a billiard ball.',
        isCorrect: false,
        explanation: 'This is a metaphorical tact extension. The novel stimulus shares a physical property (round and smooth) with the training stimulus. Metonymical tact extension requires no physical similarity  --  only temporal co-occurrence during training.',
      },
      {
        id: 'm-106-c',
        text: 'Leo sees only a dog\'s tail protruding from behind a couch and says "dog." He was trained with whole dogs; the tail is a part of the training stimulus.',
        isCorrect: false,
        explanation: 'This is a solistic tact extension. A part of the original training stimulus controls the full response. Metonymical tact extension requires the controlling stimulus to have co-occurred with the training stimulus, not to be a part of it.',
      },
      {
        id: 'm-106-d',
        text: 'Leo sees an unfamiliar breed of dog and says "dog." The new dog is a true member of the dog class and shares all defining features of dogs.',
        isCorrect: false,
        explanation: 'This is a generic tact extension. The novel stimulus is a true member of the same class. Metonymical tact extension requires the controlling stimulus to have only co-occurred with the training stimulus, with no class membership or physical similarity.',
      },
    ],
  },
  {
    id: 'm-107',
    domain: 'Verbal Behavior',
    concept: 'Solistic Tact Extension',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'A form of tact extension in which a response is controlled by only a part of the original training stimulus, such that the response occurs when only a portion of the original stimulus complex is present.',
    scenarios: [
      {
        id: 'm-107-a',
        text: 'Leo was trained to tact "dog" with whole dogs. He walks into a room and sees only a dog\'s tail protruding from behind the couch. He says "dog." The tail alone controls the same response as the whole dog.',
        isCorrect: true,
        explanation: 'Only a part of the original training stimulus (the tail) is present, yet it controls the full tact response ("dog"). This is a solistic tact extension  --  the part stands in for the whole.',
      },
      {
        id: 'm-107-b',
        text: 'Leo sees an unfamiliar Basenji and says "dog." The Basenji shares all the defining features of the dog class but is a breed Leo has never seen.',
        isCorrect: false,
        explanation: 'This is a generic tact extension. The novel stimulus is a complete member of the dog class. Solistic tact extension requires that only a part of the training stimulus be present  --  not a complete novel exemplar.',
      },
      {
        id: 'm-107-c',
        text: 'Leo sees a round bald head and says "billiard ball." The bald head shares the property of being round and smooth with a billiard ball.',
        isCorrect: false,
        explanation: 'This is a metaphorical tact extension. The novel stimulus shares a property with the training stimulus but belongs to a different class. Solistic tact extension requires the controlling stimulus to be a part of the original training stimulus, not a different object that shares a property.',
      },
      {
        id: 'm-107-d',
        text: 'Leo sees a king and says "crown" because crowns and kings always appeared together in his training materials.',
        isCorrect: false,
        explanation: 'This is a metonymical tact extension. The king co-occurred with crowns during training but is not a part of a crown. Solistic tact extension requires the controlling stimulus to be a physical part of the original training stimulus.',
      },
    ],
  },
  {
    id: 'm-108',
    domain: 'Verbal Behavior',
    concept: 'Extended Mand',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'A mand emitted under a novel motivating operation or in novel stimulus conditions that were not part of original mand training, resulting in a request that was not directly trained under those specific conditions.',
    scenarios: [
      {
        id: 'm-108-a',
        text: 'Leo was trained to mand "water" only at home during therapy sessions. On a family trip to a restaurant, he spontaneously says "water" to the server when he is thirsty. This is the first time he has manded in a restaurant setting.',
        isCorrect: true,
        explanation: 'Leo emits the trained mand form ("water") in a novel setting (restaurant) under a novel motivating operation (thirst in a new context) that was not part of original training. This generalization of the mand to untrained conditions is an extended mand.',
      },
      {
        id: 'm-108-b',
        text: 'Leo says "cookie" and a caregiver happens to offer a cookie moments later by coincidence. Over time, Leo continues to say "cookie" in similar situations, maintained by the accidental reinforcement history.',
        isCorrect: false,
        explanation: 'This is a superstitious mand. The mand is maintained by accidental reinforcement  --  the response did not actually produce the reinforcer. An extended mand involves generalization to novel conditions, not accidental contingencies.',
      },
      {
        id: 'm-108-c',
        text: 'Leo says "I want ice cream" while alone in his room with no one present to provide it. He has a strong motivating operation for ice cream but no capable listener is available.',
        isCorrect: false,
        explanation: 'This is a magical mand. The mand is emitted in the absence of a capable listener who can provide the reinforcer. An extended mand requires a capable listener to be present  --  the mand must be able to produce the reinforcer in the novel context.',
      },
      {
        id: 'm-108-d',
        text: 'Leo is shown a picture of a ball and says "ball." His BCBA has reinforced this response consistently during tacting trials across multiple settings.',
        isCorrect: false,
        explanation: 'This is a tact. A nonverbal stimulus (the picture) controls the verbal response, and the reinforcer is generalized (praise), not the specific object named. An extended mand requires a motivating operation as the controlling variable and a specific reinforcer.',
      },
    ],
  },
  {
    id: 'm-109',
    domain: 'Verbal Behavior',
    concept: 'Superstitious Mand',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'A mand maintained by an accidental reinforcement history in which the verbal response was coincidentally followed by the relevant reinforcer, even though the response did not actually produce the reinforcer.',
    scenarios: [
      {
        id: 'm-109-a',
        text: 'Leo says "cookie" at random times. On three occasions, a caregiver happened to be offering a cookie snack at the same moment by coincidence. Leo\'s cookie-requesting increases, maintained by these accidental pairings rather than by the response actually producing cookies.',
        isCorrect: true,
        explanation: 'The mand ("cookie") was coincidentally followed by the reinforcer (cookie) on multiple occasions, but the response did not actually produce the reinforcer  --  the caregiver was acting independently. This accidental reinforcement history maintains the mand as a superstitious mand.',
      },
      {
        id: 'm-109-b',
        text: 'Leo says "water" to the server at a restaurant for the first time. He was only trained to mand at home, but the motivating operation (thirst) and the mand form generalize to the novel setting.',
        isCorrect: false,
        explanation: 'This is an extended mand. The mand generalizes to a novel setting under a novel motivating operation. A superstitious mand requires accidental reinforcement  --  the response coincidentally followed by the reinforcer without the response actually producing it.',
      },
      {
        id: 'm-109-c',
        text: 'Leo says "I want candy" while alone in his room. He has a strong motivating operation for candy but there is no one present who can provide it.',
        isCorrect: false,
        explanation: 'This is a magical mand. The mand is emitted in the absence of a capable listener. A superstitious mand requires a history of accidental reinforcement  --  the reinforcer must have been delivered (coincidentally) following the response in the past.',
      },
      {
        id: 'm-109-d',
        text: 'Leo says "break" during a difficult task. His BCBA has programmed a break as a reinforcer for appropriate break-requesting, and Leo receives a break every time he uses the correct mand form.',
        isCorrect: false,
        explanation: 'This is a trained mand maintained by programmed reinforcement. The response actually produces the reinforcer through a deliberate contingency. A superstitious mand is maintained by accidental reinforcement, not by a programmed contingency.',
      },
    ],
  },
  {
    id: 'm-110',
    domain: 'Verbal Behavior',
    concept: 'Magical Mand',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'A mand emitted under a strong motivating operation but in the absence of a listener who has the ability or willingness to provide the relevant reinforcer, such that the verbal response cannot actually produce the specified reinforcer.',
    scenarios: [
      {
        id: 'm-110-a',
        text: 'Leo is alone in his room and says "I want ice cream" out loud. He has a very strong motivating operation for ice cream, but there is no one present who can provide it. The mand cannot produce the reinforcer.',
        isCorrect: true,
        explanation: 'Leo emits the mand under a strong MO but in the absence of a capable listener. The verbal response cannot produce the reinforcer because no one is present to deliver it. This is a magical mand  --  the response is emitted "as if" it could produce the reinforcer.',
      },
      {
        id: 'm-110-b',
        text: 'Leo says "cookie" at random times, and on several occasions a caregiver happened to offer a cookie by coincidence. The mand is maintained by these accidental pairings.',
        isCorrect: false,
        explanation: 'This is a superstitious mand. The response was coincidentally followed by the reinforcer, maintaining it through accidental reinforcement. A magical mand requires no capable listener to be present  --  the reinforcer cannot be delivered at all.',
      },
      {
        id: 'm-110-c',
        text: 'Leo mands "water" at a restaurant for the first time. He was trained to mand only at home, but the mand generalizes to this novel setting where a server can provide water.',
        isCorrect: false,
        explanation: 'This is an extended mand. A capable listener (the server) is present and can provide the reinforcer. A magical mand requires the absence of a capable listener  --  the reinforcer must be unobtainable in the current context.',
      },
      {
        id: 'm-110-d',
        text: 'Leo says "break" during a task and his BCBA delivers a break immediately. The BCBA has programmed breaks as reinforcers for appropriate manding.',
        isCorrect: false,
        explanation: 'This is a trained mand with a programmed contingency. A capable listener (the BCBA) is present and delivers the reinforcer. A magical mand requires the absence of a capable listener or the unavailability of the reinforcer.',
      },
    ],
  },
  {
    id: 'm-111',
    domain: 'Verbal Behavior',
    concept: 'Codic',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'A verbal operant in which a written or printed verbal stimulus controls a written or printed verbal response, with point-to-point correspondence and formal similarity between stimulus and response; the written equivalent of the echoic.',
    scenarios: [
      {
        id: 'm-111-a',
        text: 'A student is given a handwriting worksheet. She sees the printed word "cat" and copies it in writing as "cat." Both the stimulus and the response are written, and each letter in the stimulus controls the corresponding letter in the response.',
        isCorrect: true,
        explanation: 'The written stimulus ("cat") controls a written response ("cat") with point-to-point correspondence (each letter maps to the corresponding letter) and formal similarity (both are written). This is a codic  --  the written equivalent of the echoic.',
      },
      {
        id: 'm-111-b',
        text: 'A student sees the written word "cat" and reads it aloud as "cat." The visual written stimulus controls an auditory verbal response.',
        isCorrect: false,
        explanation: 'This is a textual response. The stimulus is written and the response is auditory  --  they are in different sense modalities. A codic requires both stimulus and response to be written, maintaining formal similarity within the same modality.',
      },
      {
        id: 'm-111-c',
        text: 'A student hears the word "cat" spoken aloud and writes "cat" on paper. The auditory stimulus controls a written response.',
        isCorrect: false,
        explanation: 'This is a transcription response. The stimulus is auditory and the response is written  --  different modalities. A codic requires a written stimulus controlling a written response. Transcription crosses modalities and lacks formal similarity.',
      },
      {
        id: 'm-111-d',
        text: 'A student hears the word "cat" and immediately says "cat." The auditory verbal stimulus controls an auditory verbal response with point-to-point correspondence.',
        isCorrect: false,
        explanation: 'This is an echoic. Both stimulus and response are auditory, with point-to-point correspondence and formal similarity. A codic is the written equivalent of the echoic  --  both stimulus and response must be written, not auditory.',
      },
    ],
  },
  {
    id: 'm-112',
    domain: 'Verbal Behavior',
    concept: 'Duplic',
    tcoDomain: 'B  -  Concepts and Principles',
    definition: 'A class of verbal operants in which the verbal response reproduces the formal properties of the controlling verbal stimulus with point-to-point correspondence; includes both echoics (auditory to auditory) and codics (written to written).',
    scenarios: [
      {
        id: 'm-112-a',
        text: 'A BCBA is classifying verbal operants for a training presentation. She groups echoics and codics together under a single superordinate category because both involve a verbal response that reproduces the form of the verbal stimulus with point-to-point correspondence, within the same sense modality.',
        isCorrect: true,
        explanation: 'Echoics (auditory -> auditory) and codics (written -> written) both reproduce the formal properties of the controlling stimulus with point-to-point correspondence. The superordinate category that includes both is the duplic  --  verbal operants with formal similarity and point-to-point correspondence.',
      },
      {
        id: 'm-112-b',
        text: 'A student sees the written word "dog" and reads it aloud as "dog." The visual stimulus controls an auditory response that corresponds to the printed word.',
        isCorrect: false,
        explanation: 'This is a textual response. Although there is point-to-point correspondence, the stimulus and response are in different modalities (visual-written and auditory). Duplics require formal similarity  --  same modality. Textual responses cross modalities and are not duplics.',
      },
      {
        id: 'm-112-c',
        text: 'A student hears "What sound does a cow make?" and responds "moo." The verbal stimulus controls a verbal response, but the response does not reproduce the stimulus.',
        isCorrect: false,
        explanation: 'This is an intraverbal. The response does not reproduce the form of the stimulus  --  there is no point-to-point correspondence. Duplics require the response to reproduce the stimulus unit-by-unit within the same sense modality.',
      },
      {
        id: 'm-112-d',
        text: 'A child hears the word "ball" spoken aloud and writes "ball" on paper. The auditory stimulus controls a written response.',
        isCorrect: false,
        explanation: 'This is a transcription response. The stimulus is auditory and the response is written  --  different modalities. Duplics require formal similarity (same modality). Transcription crosses modalities and is therefore not a duplic.',
      },
    ],
  },

  // ── Domain A: Philosophical Underpinnings ──────────────────────────────────
  {
    id: 'm-113',
    domain: 'A',
    concept: 'Overt Behavior',
    tcoDomain: 'A  -  Philosophical Underpinnings',
    definition: "Any action of an organism that is publicly observable and directly measurable by an external observer without special instrumentation.",
    scenarios: [
      {
        id: 'm-113-a',
        text: "During a discrete trial session, a BCBA records the number of times Mia touches the correct picture card when presented with a vocal SD. The BCBA can see and count each touch directly.",
        isCorrect: true,
        explanation: "Touching a picture card is publicly observable and directly measurable by the observer without any special equipment — this is overt behavior.",
      },
      {
        id: 'm-113-b',
        text: "A BCBA notes that Mia appears anxious before transitions. The BCBA infers this from Mia's facial expression and posture, but does not directly observe an internal state.",
        isCorrect: false,
        explanation: "Anxiety as inferred from appearance is a private event or mentalistic construct, not overt behavior. Overt behavior requires direct observability of the action itself, not an inference about an internal state.",
      },
      {
        id: 'm-113-c',
        text: "Mia silently rehearses the steps of her morning routine while riding the bus. Her lips do not move and no observer can detect the rehearsal.",
        isCorrect: false,
        explanation: "Silent rehearsal is covert behavior — it occurs within the organism's skin at a level too small to be detected by others. It is real behavior in radical behaviorism, but it is not overt.",
      },
      {
        id: 'm-113-d',
        text: "A researcher uses electromyography (EMG) to detect sub-vocal muscle movements in Mia's throat while she thinks through a problem.",
        isCorrect: false,
        explanation: "Although EMG makes a covert response measurable, the behavior itself (sub-vocal muscle movement) is not publicly observable without special instrumentation. This is covert behavior made measurable, not overt behavior.",
      },
    ],
  },
  {
    id: 'm-114',
    domain: 'A',
    concept: 'Covert Behavior',
    tcoDomain: 'A  -  Philosophical Underpinnings',
    definition: "Any action of an organism that occurs at a level of intensity too small to be observed by others, or that takes place entirely within the organism's skin; treated in radical behaviorism as real behavior governed by the same principles as overt behavior.",
    scenarios: [
      {
        id: 'm-114-a',
        text: "While waiting for his turn during a group activity, Ethan silently counts to ten to manage his frustration. No observer can see or hear this counting.",
        isCorrect: true,
        explanation: "Silent counting occurs within the skin and is undetectable by others — this is covert behavior. Radical behaviorism treats it as real behavior subject to the same principles as overt behavior, not as a cause of overt behavior.",
      },
      {
        id: 'm-114-b',
        text: "Ethan raises his hand to request a turn. His teacher can see the raised hand and records it as a response.",
        isCorrect: false,
        explanation: "Raising a hand is publicly observable and directly measurable — this is overt behavior, not covert behavior.",
      },
      {
        id: 'm-114-c',
        text: "Ethan's teacher hypothesizes that he has low frustration tolerance, which she believes causes his outbursts.",
        isCorrect: false,
        explanation: "'Low frustration tolerance' is a mentalistic construct used as an explanatory fiction. It is not a behavior at all — covert or overt. Radical behaviorism rejects such circular explanations.",
      },
      {
        id: 'm-114-d',
        text: "Ethan screams and pushes materials off the table when a preferred activity ends. The BCBA records frequency and duration of each episode.",
        isCorrect: false,
        explanation: "Screaming and pushing materials are publicly observable and directly measurable — this is overt behavior, not covert behavior.",
      },
    ],
  },
  {
    id: 'm-115',
    domain: 'A',
    concept: 'Private Event',
    tcoDomain: 'A  -  Philosophical Underpinnings',
    definition: "Any stimulus or response that occurs within the skin of an organism and is not directly observable by others; in radical behaviorism, private events are treated as real behavioral events subject to the same lawful relationships as publicly observable responses, not as causes of overt behavior.",
    scenarios: [
      {
        id: 'm-115-a',
        text: "After a difficult therapy session, Sofia reports feeling a tight sensation in her chest and a racing heart. These internal stimuli are real events that influence her subsequent behavior, but no observer can directly detect them.",
        isCorrect: true,
        explanation: "The tight chest and racing heart are stimuli occurring within the skin — private events. Radical behaviorism acknowledges them as real events that can function as discriminative stimuli or conditioned stimuli, not as causes that explain behavior from outside the behavioral framework.",
      },
      {
        id: 'm-115-b',
        text: "A BCBA hypothesizes that Sofia has an 'anxiety disorder' that causes her avoidance behavior, and uses this diagnosis to explain why she refuses to enter the therapy room.",
        isCorrect: false,
        explanation: "Using 'anxiety disorder' as a causal explanation is an explanatory fiction — a mentalistic construct. This is not the same as acknowledging a private event. Private events are specific, observable-in-principle stimuli or responses, not diagnostic labels used as causes.",
      },
      {
        id: 'm-115-c',
        text: "Sofia refuses to enter the therapy room and runs to the exit. The BCBA records the frequency of exit-seeking behavior.",
        isCorrect: false,
        explanation: "Running to the exit is publicly observable overt behavior. It is not a private event.",
      },
      {
        id: 'm-115-d',
        text: "A researcher uses fMRI to measure neural activation in Sofia's amygdala during exposure to a feared stimulus.",
        isCorrect: false,
        explanation: "Neural activation measured by fMRI is a physiological event, not a private event in the behavioral sense. Private events in radical behaviorism refer to stimuli and responses within the skin that are not accessible to others — the emphasis is on the observability limitation, not on the neurological substrate.",
      },
    ],
  },
  {
    id: 'm-116',
    domain: 'A',
    concept: 'Radical Behaviorism',
    tcoDomain: 'A  -  Philosophical Underpinnings',
    definition: "Skinner's philosophy of behavioral science that treats all behavior — including private events such as thinking and feeling — as subject matter for a natural science, while rejecting mentalistic constructs (e.g., mind, will, cognition) as explanatory causes of behavior.",
    scenarios: [
      {
        id: 'm-116-a',
        text: "A BCBA explains that a client's self-talk before a task is a real verbal behavior that can be shaped by its consequences, just like any overt verbal response, and does not invoke 'motivation' or 'willpower' to explain the client's task completion.",
        isCorrect: true,
        explanation: "Treating self-talk as real behavior subject to behavioral principles, while rejecting mentalistic constructs as explanations, is the hallmark of radical behaviorism.",
      },
      {
        id: 'm-116-b',
        text: "A psychologist argues that behavior is the only legitimate subject matter of psychology and that internal mental states should be excluded from scientific analysis entirely.",
        isCorrect: false,
        explanation: "This describes methodological behaviorism, not radical behaviorism. Methodological behaviorism excludes private events from science; radical behaviorism includes them as real behavioral events.",
      },
      {
        id: 'm-116-c',
        text: "A clinician explains a client's aggression by stating that the client has poor impulse control, which is a cognitive deficit that prevents him from inhibiting his responses.",
        isCorrect: false,
        explanation: "'Poor impulse control' is a mentalistic construct used as an explanatory fiction. This is the kind of explanation radical behaviorism explicitly rejects.",
      },
      {
        id: 'm-116-d',
        text: "A researcher studies the neural correlates of reinforcement learning to understand how dopamine release predicts future behavior.",
        isCorrect: false,
        explanation: "This is a neuroscientific approach, not radical behaviorism. Radical behaviorism focuses on behavior-environment relationships, not on physiological mechanisms as explanatory variables.",
      },
    ],
  },
  {
    id: 'm-117',
    domain: 'A',
    concept: 'Methodological Behaviorism',
    tcoDomain: 'A  -  Philosophical Underpinnings',
    definition: "A philosophy of behavioral science that restricts the subject matter of psychology to publicly observable behavior and excludes private events (thoughts, feelings) from scientific analysis on the grounds that they are not directly observable.",
    scenarios: [
      {
        id: 'm-117-a',
        text: "A researcher states that because thoughts and feelings cannot be directly observed by an independent observer, they should not be included in a scientific account of behavior and should be studied only through their overt behavioral products.",
        isCorrect: true,
        explanation: "Excluding private events from scientific analysis because they are not publicly observable is the defining position of methodological behaviorism.",
      },
      {
        id: 'm-117-b',
        text: "A BCBA acknowledges that a client's self-talk is a real verbal behavior that can be shaped by its consequences, and uses this to inform the intervention plan.",
        isCorrect: false,
        explanation: "Acknowledging private events as real behavioral events is radical behaviorism, not methodological behaviorism. Methodological behaviorism would exclude self-talk from analysis.",
      },
      {
        id: 'm-117-c',
        text: "A clinician explains a client's avoidance by invoking an unobservable cognitive schema that mediates between the stimulus and the response.",
        isCorrect: false,
        explanation: "Invoking cognitive schemas as mediating variables is a cognitive-behavioral approach, not methodological behaviorism. Methodological behaviorism excludes unobservable events but does not replace them with cognitive constructs.",
      },
      {
        id: 'm-117-d',
        text: "A researcher uses fMRI to identify the neural basis of reinforcement and uses these findings to explain why certain stimuli function as reinforcers.",
        isCorrect: false,
        explanation: "This is a neuroscientific approach. Methodological behaviorism restricts analysis to observable behavior, not to physiological mechanisms.",
      },
    ],
  },
  {
    id: 'm-118',
    domain: 'A',
    concept: 'Experimental Analysis of Behavior (EAB)',
    tcoDomain: 'A  -  Philosophical Underpinnings',
    definition: "The basic science of behavior that uses controlled laboratory methods with individual organisms under precisely arranged contingencies to identify the fundamental principles governing relationships between behavior and environmental variables; the scientific foundation of applied behavior analysis.",
    scenarios: [
      {
        id: 'm-118-a',
        text: "A researcher places a rat in an operant chamber and systematically varies the schedule of reinforcement while measuring the rate of lever pressing under each schedule, with no applied or therapeutic goal.",
        isCorrect: true,
        explanation: "Controlled laboratory research with individual organisms to identify behavioral principles — with no applied goal — is the defining characteristic of EAB.",
      },
      {
        id: 'm-118-b',
        text: "A BCBA implements a token economy in a classroom and uses a reversal design to demonstrate that the token economy is responsible for the increase in on-task behavior.",
        isCorrect: false,
        explanation: "This is applied behavior analysis — the target behavior is socially significant and the goal is to produce practical behavior change. EAB is basic research without an applied goal.",
      },
      {
        id: 'm-118-c',
        text: "A behavior analyst conducts a functional analysis in a clinic to identify the reinforcing consequences maintaining a client's self-injurious behavior.",
        isCorrect: false,
        explanation: "A functional analysis conducted to guide treatment is an applied procedure (ABA), not EAB. EAB is basic laboratory research aimed at identifying principles, not at solving a specific clinical problem.",
      },
      {
        id: 'm-118-d',
        text: "A BCBA reviews published research on the matching law and uses those findings to design a concurrent schedule intervention for a client who engages in problem behavior maintained by attention.",
        isCorrect: false,
        explanation: "Applying EAB principles to a clinical problem is ABA (applied behavior analysis), not EAB itself. EAB generates the principles; ABA applies them.",
      },
    ],
  },
  {
    id: 'm-119',
    domain: 'A',
    concept: 'Applied Behavior Analysis (ABA) — Science Definition',
    tcoDomain: 'A  -  Philosophical Underpinnings',
    definition: "The applied science that uses the principles of behavior identified by the experimental analysis of behavior to produce socially significant improvements in behavior, evaluated through the seven dimensions: applied, behavioral, analytic, technological, conceptually systematic, effective, and generality.",
    scenarios: [
      {
        id: 'm-119-a',
        text: "A BCBA uses differential reinforcement of alternative behavior to reduce a child's self-injurious behavior. She collects data, uses a multiple baseline design to demonstrate the intervention's effect, and writes a procedure description detailed enough for any trained staff member to replicate.",
        isCorrect: true,
        explanation: "This example is applied (socially significant target), behavioral (directly measured), analytic (experimental design), technological (replicable procedure), and uses principles from EAB — meeting the definition of ABA as a science.",
      },
      {
        id: 'm-119-b',
        text: "A researcher studies the effect of variable ratio schedules on lever pressing in pigeons in a controlled operant chamber, with no therapeutic goal.",
        isCorrect: false,
        explanation: "This is EAB — basic laboratory research with no applied goal. ABA requires that the target behavior be socially significant.",
      },
      {
        id: 'm-119-c',
        text: "A therapist uses cognitive restructuring to help a client identify and challenge irrational beliefs that contribute to anxiety.",
        isCorrect: false,
        explanation: "Cognitive restructuring is a cognitive-behavioral technique, not ABA. ABA does not invoke cognitive constructs as explanatory variables and focuses on directly observable behavior-environment relationships.",
      },
      {
        id: 'm-119-d',
        text: "A BCBA provides supervision and performance feedback to a behavior technician, following the BACB Ethics Code and supervision requirements.",
        isCorrect: false,
        explanation: "This describes professional practice — the service delivery context governed by ethics codes and credentialing requirements. Professional practice is distinct from ABA as a science, though it is informed by it.",
      },
    ],
  },
  {
    id: 'm-120',
    domain: 'A',
    concept: 'Analytic (Dimension of ABA)',
    tcoDomain: 'A  -  Philosophical Underpinnings',
    definition: "The dimension of ABA requiring that the practitioner demonstrate a reliable, functional relationship between the intervention (independent variable) and the behavior change (dependent variable), typically through the use of a single-subject experimental design.",
    scenarios: [
      {
        id: 'm-120-a',
        text: "A BCBA implements a reversal (ABAB) design to evaluate a new communication intervention. Data show that problem behavior decreases only when the intervention is in place and returns to baseline levels when it is withdrawn, confirming the functional relationship.",
        isCorrect: true,
        explanation: "Demonstrating a functional relationship through experimental manipulation (reversal design) is the defining feature of the analytic dimension.",
      },
      {
        id: 'm-120-b',
        text: "A BCBA writes a detailed procedure manual for implementing a new token economy, including step-by-step instructions that any trained staff member could follow without additional guidance.",
        isCorrect: false,
        explanation: "Writing a replicable procedure description satisfies the technological dimension, not the analytic dimension. Analytic requires demonstrating a functional relationship, not just describing the procedure.",
      },
      {
        id: 'm-120-c',
        text: "A BCBA targets reduction of elopement because it poses a safety risk and is of clear importance to the client's family and school team.",
        isCorrect: false,
        explanation: "Selecting a socially significant target satisfies the applied dimension. The analytic dimension requires demonstrating that the intervention caused the behavior change.",
      },
      {
        id: 'm-120-d',
        text: "A BCBA explains that the intervention uses differential reinforcement, which is derived from the principle of operant conditioning, and cites the relevant behavioral literature.",
        isCorrect: false,
        explanation: "Linking the procedure to established behavioral principles satisfies the conceptually systematic dimension, not the analytic dimension.",
      },
    ],
  },
  {
    id: 'm-121',
    domain: 'A',
    concept: 'Technological (Dimension of ABA)',
    tcoDomain: 'A  -  Philosophical Underpinnings',
    definition: "The dimension of ABA requiring that procedures be described with sufficient precision and completeness that any trained practitioner could implement them accurately without additional information from the original researcher or clinician.",
    scenarios: [
      {
        id: 'm-121-a',
        text: "A BCBA writes a behavior intervention plan that specifies the exact SD wording, the response definition, the reinforcer, the schedule of reinforcement, the error correction procedure, and the criteria for moving to the next step — leaving no ambiguity for the implementing technician.",
        isCorrect: true,
        explanation: "A procedure description precise enough for any trained person to replicate without additional guidance satisfies the technological dimension.",
      },
      {
        id: 'm-121-b',
        text: "A BCBA uses a multiple baseline design across three settings to show that the intervention, not extraneous variables, is responsible for the behavior change.",
        isCorrect: false,
        explanation: "Demonstrating a functional relationship through experimental design satisfies the analytic dimension, not the technological dimension.",
      },
      {
        id: 'm-121-c',
        text: "A BCBA targets mand training because requesting preferred items is a foundational communication skill that will improve the client's quality of life.",
        isCorrect: false,
        explanation: "Selecting a socially significant target satisfies the applied dimension. The technological dimension is about the precision of the procedure description, not the importance of the target.",
      },
      {
        id: 'm-121-d',
        text: "A BCBA explains that the intervention uses extinction because the function of the behavior is attention-maintained, linking the procedure to the principle of operant extinction.",
        isCorrect: false,
        explanation: "Linking the procedure to a behavioral principle satisfies the conceptually systematic dimension, not the technological dimension.",
      },
    ],
  },
  {
    id: 'm-122',
    domain: 'A',
    concept: 'Generality (Dimension of ABA)',
    tcoDomain: 'A  -  Philosophical Underpinnings',
    definition: "The dimension of ABA requiring that behavior changes prove durable over time, appear across a variety of settings and conditions, and spread to a range of related behaviors beyond those directly trained.",
    scenarios: [
      {
        id: 'm-122-a',
        text: "A BCBA teaches a client to request a break using an AAC device in the therapy room. She then probes the same skill in the classroom, at home, and six months later in a community setting — confirming the skill is maintained and has transferred across environments.",
        isCorrect: true,
        explanation: "Behavior change that is durable over time and transfers across settings and conditions satisfies the generality dimension.",
      },
      {
        id: 'm-122-b',
        text: "A BCBA demonstrates through a reversal design that the AAC intervention, not teacher attention, is responsible for the increase in break-requesting.",
        isCorrect: false,
        explanation: "Demonstrating a functional relationship satisfies the analytic dimension. Generality is about durability and transfer, not about ruling out confounds.",
      },
      {
        id: 'm-122-c',
        text: "A BCBA reports that the client's break-requesting increased from 0 to 15 requests per day, eliminating all elopement incidents — a change the family and school team consider meaningful.",
        isCorrect: false,
        explanation: "Producing behavior change of practical and social significance satisfies the effective dimension. Generality requires evidence of transfer across time, settings, or behaviors.",
      },
      {
        id: 'm-122-d',
        text: "A BCBA writes a procedure description for the AAC intervention that is precise enough for any trained technician to implement without additional guidance.",
        isCorrect: false,
        explanation: "A replicable procedure description satisfies the technological dimension, not the generality dimension.",
      },
    ],
  },

];