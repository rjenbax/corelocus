// Tier 3: Definition → Scenario Matching Data
// Each item: a concept definition + 4 clinical scenarios (1 correct, 3 distractors)

export interface MatchingItem {
  id: string;
  domain: string;
  concept: string;
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
    definition: 'A procedure in which the removal, reduction, or postponement of a stimulus following a behavior results in an increase in the future frequency of that behavior.',
    scenarios: [
      {
        id: 'm-01-a',
        text: 'Leo screams during math tasks. His teacher ends the math activity every time he screams. Over the next two weeks, Leo\'s screaming during math increases significantly.',
        isCorrect: true,
        explanation: 'Screaming is followed by removal of the aversive math task (negative = removal), and screaming increases — this is the definition of negative reinforcement.',
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
        explanation: 'A stimulus (reprimand) is added and behavior decreases — this is positive punishment, not negative reinforcement.',
      },
      {
        id: 'm-01-d',
        text: 'Leo asks for a break using his AAC device. His teacher ignores the request. Leo\'s break-requesting decreases over two weeks.',
        isCorrect: false,
        explanation: 'The reinforcer (break) is withheld and behavior decreases — this is extinction, not negative reinforcement.',
      },
    ],
  },
  {
    id: 'm-02',
    domain: 'Behavior Principles',
    concept: 'Positive Punishment',
    definition: 'A procedure in which a stimulus is added following a behavior, resulting in a decrease in the future frequency of that behavior.',
    scenarios: [
      {
        id: 'm-02-a',
        text: 'Leo runs in the hallway. His BCBA immediately requires him to return to the start of the hallway and walk correctly three times. Leo\'s running in the hallway decreases over the following two weeks.',
        isCorrect: true,
        explanation: 'A response (positive practice overcorrection) is ADDED following running, and running decreases — this is positive punishment.',
      },
      {
        id: 'm-02-b',
        text: 'Leo earns tokens for completing tasks. When he engages in self-injury, two tokens are removed from his token board. His self-injury decreases over two weeks.',
        isCorrect: false,
        explanation: 'Tokens are REMOVED and behavior decreases — this is negative punishment (response cost), not positive punishment.',
      },
      {
        id: 'm-02-c',
        text: 'Leo\'s teacher stops presenting demands when Leo cries. Leo\'s crying during demand presentations increases over two weeks.',
        isCorrect: false,
        explanation: 'Demands are removed and behavior increases — this is negative reinforcement, not positive punishment.',
      },
      {
        id: 'm-02-d',
        text: 'Leo is given a preferred video after completing his morning routine. His morning routine completion increases over two weeks.',
        isCorrect: false,
        explanation: 'A preferred item is added and behavior increases — this is positive reinforcement, not positive punishment.',
      },
    ],
  },
  {
    id: 'm-03',
    domain: 'Behavior Principles',
    concept: 'Motivating Operation (Establishing Operation)',
    definition: 'An antecedent variable that (1) temporarily increases the reinforcing effectiveness of a stimulus and (2) increases the current frequency of all behavior that has been reinforced by that stimulus.',
    scenarios: [
      {
        id: 'm-03-a',
        text: 'Leo has not had access to his tablet for three hours. His BCBA observes that Leo is now requesting his tablet more frequently than usual and that tablet access is functioning as a stronger reinforcer than it was earlier in the day.',
        isCorrect: true,
        explanation: 'Deprivation from the tablet (an EO) has increased both the reinforcing value of the tablet AND the frequency of tablet-seeking behavior — both effects of an MO.',
      },
      {
        id: 'm-03-b',
        text: 'Leo\'s teacher holds up a picture of a ball and Leo says "ball." His teacher praises him and Leo continues to label objects correctly throughout the session.',
        isCorrect: false,
        explanation: 'The picture is an SD (discriminative stimulus) that signals reinforcement is available — it does not change the value of the reinforcer. This illustrates stimulus control, not an MO.',
      },
      {
        id: 'm-03-c',
        text: 'Leo receives a token each time he completes a math problem. After earning 10 tokens, he exchanges them for 5 minutes of free play. Leo\'s math completion rate increases.',
        isCorrect: false,
        explanation: 'This describes a token economy — a conditioned reinforcement system. The tokens are conditioned reinforcers, not an MO.',
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
    definition: 'A discontinuous measurement procedure in which the observation period is divided into equal intervals; the behavior is recorded if it occurs at any point during the interval, regardless of how long it lasts.',
    scenarios: [
      {
        id: 'm-04-a',
        text: 'Leo\'s BCBA divides a 10-minute observation into 30-second intervals. She marks a "+" for any interval in which Leo engages in stereotypy for even one second. At the end of the session, she calculates the percentage of intervals with a "+".',
        isCorrect: true,
        explanation: 'Recording occurs if the behavior happens at ANY POINT during the interval — this is partial interval recording. It tends to overestimate behavior occurrence.',
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
        explanation: 'Counting every instance is event recording (frequency), a continuous measurement procedure — not partial interval recording.',
      },
    ],
  },
  {
    id: 'm-05',
    domain: 'Behavior Reduction',
    concept: 'Extinction Burst',
    definition: 'A temporary increase in the frequency, duration, or intensity of a behavior (and sometimes novel behaviors) that occurs immediately after extinction is first implemented.',
    scenarios: [
      {
        id: 'm-05-a',
        text: 'Leo\'s BCBA begins withholding attention following his attention-maintained tantrums. On day 1 of extinction, Leo\'s tantrums increase from an average of 3 per day to 9 per day and are louder and longer than before. By day 5, tantrums have decreased to near zero.',
        isCorrect: true,
        explanation: 'An immediate increase in frequency, duration, and intensity at the START of extinction — this is the defining feature of an extinction burst.',
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
    definition: 'A procedure in which reinforcement is delivered for a specific alternative behavior while reinforcement is withheld for the problem behavior (extinction component).',
    scenarios: [
      {
        id: 'm-06-a',
        text: 'Leo hits peers to obtain their toys (tangible function). His BCBA teaches him to say "Can I have that?" and provides immediate access to the toy when he uses this phrase. Simultaneously, hitting no longer results in toy access. Over four weeks, hitting decreases and requesting increases.',
        isCorrect: true,
        explanation: 'A specific alternative behavior (requesting) is reinforced with the same reinforcer (toy access) that maintained the problem behavior, while the problem behavior is placed on extinction — this is DRA.',
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
    definition: 'A verbal operant controlled by a motivating operation (MO) and reinforced by a specific, characteristic consequence that matches the content of the verbal behavior.',
    scenarios: [
      {
        id: 'm-07-a',
        text: 'Leo has not had his preferred music for 45 minutes (EO). He approaches his BCBA and says "music." His BCBA immediately turns on his preferred music. Leo\'s music-requesting increases.',
        isCorrect: true,
        explanation: 'The verbal behavior ("music") is controlled by an MO (deprivation from music) and reinforced by the specific, characteristic consequence (music is turned on) — this is a mand.',
      },
      {
        id: 'm-07-b',
        text: 'Leo\'s BCBA holds up a picture of a dog and asks "What is this?" Leo says "dog" and receives praise.',
        isCorrect: false,
        explanation: 'The verbal behavior is controlled by a nonverbal SD (the picture) and reinforced by generalized reinforcement (praise) — this is a tact, not a mand.',
      },
      {
        id: 'm-07-c',
        text: 'Leo\'s BCBA asks "What do you do when you\'re thirsty?" and Leo says "drink water." His BCBA praises him.',
        isCorrect: false,
        explanation: 'The verbal behavior is controlled by a verbal SD (the question) and reinforced by generalized reinforcement — this is an intraverbal, not a mand.',
      },
      {
        id: 'm-07-d',
        text: 'Leo\'s BCBA says "ball" and Leo repeats "ball." His BCBA praises him for the correct echoic response.',
        isCorrect: false,
        explanation: 'The verbal behavior has point-to-point correspondence with a verbal SD (the BCBA\'s "ball") — this is an echoic, not a mand.',
      },
    ],
  },
  {
    id: 'm-08',
    domain: 'Research & Design',
    concept: 'Multiple Baseline Design',
    definition: 'A single-case experimental design in which the independent variable is introduced sequentially across two or more tiers (behaviors, settings, or subjects) after stable baselines are established, demonstrating experimental control without requiring a reversal.',
    scenarios: [
      {
        id: 'm-08-a',
        text: 'A BCBA implements a social skills intervention for Leo. She first establishes stable baselines for greeting, sharing, and turn-taking. She introduces the intervention for greeting first, then sharing, then turn-taking, each time waiting for stable data in the remaining baselines. All three behaviors improve only when the intervention is introduced.',
        isCorrect: true,
        explanation: 'The intervention is introduced sequentially across three behaviors (tiers) after stable baselines — this is a multiple baseline across behaviors design.',
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
    definition: 'A procedure in which a controlling prompt is gradually changed along a physical dimension (e.g., size, color, intensity) so that the target stimulus gradually gains control over the response, while the prompt is systematically reduced.',
    scenarios: [
      {
        id: 'm-10-a',
        text: 'Leo is learning to read the word "stop." Initially, the word is presented in large, bold red letters. Over successive trials, the letters are gradually made smaller and the color is faded to black until Leo reads "stop" in standard black text without error.',
        isCorrect: true,
        explanation: 'The prompt (size and color) is gradually changed along a physical dimension until the target stimulus controls the response — this is stimulus fading.',
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
    definition: 'A phenomenon in which a change in the rate of reinforcement in one component of a multiple schedule produces an opposite change in the rate of responding in another component, even though the schedule in that component has not changed.',
    scenarios: [
      {
        id: 'm-11-a',
        text: 'Leo\'s problem behavior is placed on extinction at school (reinforcement decreases). His parents report that his problem behavior at home has increased significantly, even though nothing has changed at home.',
        isCorrect: true,
        explanation: 'When reinforcement decreases in one context (school), responding increases in another context (home) where the schedule has not changed — this is behavioral contrast.',
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
        explanation: 'This describes the effect of increased reinforcement on behavior within the same setting — not behavioral contrast, which requires an OPPOSITE change in a DIFFERENT component.',
      },
    ],
  },
  {
    id: 'm-12',
    domain: 'Ethics & Professional Practice',
    concept: 'Treatment Integrity',
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
        explanation: 'This describes prompt fading for a verbal response — not chaining. Chaining applies to multi-step behavior chains, not to fading prompts for a single verbal operant.',
      },
    ],
  },
  {
    id: 'm-14',
    domain: 'Behavior Principles',
    concept: 'Stimulus Generalization',
    definition: 'The occurrence of a trained behavior in the presence of stimuli that are similar to but not identical to the training stimulus, without additional training.',
    scenarios: [
      {
        id: 'm-14-a',
        text: 'Leo is taught to greet his BCBA by saying "Hi!" He then begins greeting his classroom teacher, his aide, and his parents with "Hi!" without any additional training for these individuals.',
        isCorrect: true,
        explanation: 'The same greeting behavior occurs in the presence of new people (stimuli similar to the training SD) without additional training — this is stimulus generalization.',
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
    domain: 'Assessment',
    concept: 'Preference Assessment (MSWO)',
    definition: 'A structured assessment procedure in which multiple stimuli are presented simultaneously, the individual selects one, it is removed, and the remaining stimuli are re-presented; this continues until all stimuli have been selected or a set number of trials is complete, yielding a rank-ordered hierarchy of preferred stimuli.',
    scenarios: [
      {
        id: 'm-15-a',
        text: 'Leo\'s BCBA places six items on the table (tablet, ball, book, puzzle, music player, snack). Leo selects the tablet. The BCBA removes the tablet and re-presents the remaining five items. Leo selects the snack. This continues until all items have been selected, yielding a rank-ordered list of Leo\'s preferences.',
        isCorrect: true,
        explanation: 'Multiple stimuli presented simultaneously, selected item removed, remaining items re-presented — this is the Multiple Stimulus Without Replacement (MSWO) procedure.',
      },
      {
        id: 'm-15-b',
        text: 'Leo\'s BCBA presents two items at a time (tablet vs. ball, tablet vs. book, ball vs. book, etc.) and records which item Leo selects in each pair. She calculates the percentage of trials each item was selected.',
        isCorrect: false,
        explanation: 'Presenting two items at a time and recording selections is a paired stimulus (PS) preference assessment, not MSWO.',
      },
      {
        id: 'm-15-c',
        text: 'Leo\'s BCBA presents one item at a time and records whether Leo approaches or avoids each item. She calculates the percentage of trials each item was approached.',
        isCorrect: false,
        explanation: 'Presenting one item at a time and recording approach/avoidance is a single stimulus (SS) preference assessment, not MSWO.',
      },
      {
        id: 'm-15-d',
        text: 'Leo\'s BCBA asks his parents to complete a questionnaire listing his favorite activities, foods, and toys at home.',
        isCorrect: false,
        explanation: 'Gathering preference information through parent report is an indirect assessment, not a structured preference assessment procedure like MSWO.',
      },
    ],
  },
];
