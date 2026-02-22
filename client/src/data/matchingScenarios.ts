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
// NEW ITEMS — Domains A–I — to be appended to matchingItems array
// IDs continue from m-16 through m-50

  // ── BEHAVIOR PRINCIPLES ───────────────────────────────────────────────────────
  {
    id: 'm-16',
    domain: 'Behavior Principles',
    concept: 'Negative Punishment (Response Cost)',
    definition: 'A procedure in which a stimulus is removed following a behavior, resulting in a decrease in the future frequency of that behavior.',
    scenarios: [
      {
        id: 'm-16-a',
        text: 'Leo earns tokens throughout the day for following instructions. Each time he engages in verbal aggression, two tokens are removed from his token board. Over three weeks, verbal aggression decreases significantly.',
        isCorrect: true,
        explanation: 'Tokens (a positive stimulus) are REMOVED following verbal aggression, and the behavior decreases — this is negative punishment (specifically, response cost).',
      },
      {
        id: 'm-16-b',
        text: 'Leo\'s BCBA requires him to practice walking calmly in the hallway five times every time he runs. Running in the hallway decreases over two weeks.',
        isCorrect: false,
        explanation: 'A response (practice walking) is ADDED following running, and behavior decreases — this is positive punishment (positive practice overcorrection), not negative punishment.',
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
    concept: 'Conditioned Reinforcer',
    definition: 'A stimulus that has acquired reinforcing properties through repeated pairing with other reinforcers (unconditioned or conditioned); also called a secondary reinforcer.',
    scenarios: [
      {
        id: 'm-17-a',
        text: 'Leo initially showed no interest in stickers. His BCBA consistently paired stickers with access to his preferred tablet (a strong reinforcer). After several weeks, Leo began working hard to earn stickers even when tablet access was not immediately available.',
        isCorrect: true,
        explanation: 'Stickers acquired reinforcing value through repeated pairing with an established reinforcer (tablet access) — this is the process of establishing a conditioned reinforcer.',
      },
      {
        id: 'm-17-b',
        text: 'Leo works hard to earn breaks from demanding tasks. His BCBA observes that break access reliably increases his work completion.',
        isCorrect: false,
        explanation: 'Break access functions as a reinforcer because it removes an aversive stimulus (demands) — this is negative reinforcement, not a conditioned reinforcer. The break itself may be an unconditioned reinforcer (rest) rather than a conditioned one.',
      },
      {
        id: 'm-17-c',
        text: 'Leo consistently selects food items over toys in preference assessments. Food reliably increases his responding when used as a consequence.',
        isCorrect: false,
        explanation: 'Food is an unconditioned (primary) reinforcer — its reinforcing value does not depend on prior learning. A conditioned reinforcer acquires its value through pairing.',
      },
      {
        id: 'm-17-d',
        text: 'Leo\'s BCBA delivers praise immediately after each correct response. Leo\'s correct responding increases over the following week.',
        isCorrect: false,
        explanation: 'While praise can function as a conditioned reinforcer, this scenario only demonstrates that praise is functioning as a reinforcer — it does not describe the pairing process that establishes conditioned reinforcers.',
      },
    ],
  },
  {
    id: 'm-18',
    domain: 'Behavior Principles',
    concept: 'Discriminative Stimulus (SD)',
    definition: 'A stimulus in the presence of which a specific behavior has been reinforced; the SD signals that reinforcement is available for a particular response.',
    scenarios: [
      {
        id: 'm-18-a',
        text: 'Leo\'s BCBA holds up a picture of a cookie and asks "What do you want?" Leo says "cookie" and receives a cookie. Over time, Leo reliably requests cookies when the picture is presented but not when it is absent.',
        isCorrect: true,
        explanation: 'The picture has become a discriminative stimulus (SD) — its presence signals that the verbal response "cookie" will be reinforced with cookie access.',
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
        explanation: 'The demand condition identifies the function of problem behavior — this is a functional analysis result, not an example of an SD controlling appropriate behavior.',
      },
      {
        id: 'm-18-d',
        text: 'Leo\'s BCBA delivers a token every 5 minutes regardless of his behavior. Problem behavior decreases because the token schedule abolishes the value of escape.',
        isCorrect: false,
        explanation: 'Delivering reinforcement on a time-based schedule to reduce problem behavior is noncontingent reinforcement (NCR), which functions as an abolishing operation — not an SD.',
      },
    ],
  },
  {
    id: 'm-19',
    domain: 'Behavior Principles',
    concept: 'Resurgence',
    definition: 'The reappearance of a previously extinguished behavior when a more recently reinforced behavior is placed on extinction.',
    scenarios: [
      {
        id: 'm-19-a',
        text: 'Leo previously hit peers to obtain toys (hitting was extinguished 6 months ago). His BCBA taught him to use an AAC device to request toys (FCT). When the FCT program is placed on extinction, Leo\'s hitting returns at a moderate rate.',
        isCorrect: true,
        explanation: 'A previously extinguished behavior (hitting) resurfaces when the more recently reinforced behavior (AAC requesting) is placed on extinction — this is resurgence.',
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

  // ── MEASUREMENT ───────────────────────────────────────────────────────────────
  {
    id: 'm-20',
    domain: 'Measurement',
    concept: 'Whole Interval Recording',
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
        explanation: 'Counting every instance of a behavior is event recording (frequency), a continuous measurement procedure — not whole interval recording.',
      },
    ],
  },
  {
    id: 'm-21',
    domain: 'Measurement',
    concept: 'Interobserver Agreement (IOA)',
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
    definition: 'A measure of behavior that expresses the number of responses that occur per unit of time; allows comparison across sessions of different lengths.',
    scenarios: [
      {
        id: 'm-23-a',
        text: 'Leo\'s BCBA records that he made 24 correct responses during a 30-minute session on Monday and 18 correct responses during a 20-minute session on Tuesday. To compare his performance across sessions, she divides the number of responses by the session length in minutes.',
        isCorrect: true,
        explanation: 'Dividing the number of responses by session length to allow comparison across sessions of different lengths is rate (responses per minute) — the appropriate measure when session lengths vary.',
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

  // ── RESEARCH & EXPERIMENTAL DESIGN ───────────────────────────────────────────
  {
    id: 'm-24',
    domain: 'Research & Design',
    concept: 'Reversal (ABAB) Design',
    definition: 'A single-case experimental design in which the independent variable is introduced (B phase), withdrawn to return to baseline (A phase), and then reintroduced (B phase) to demonstrate experimental control through replication.',
    scenarios: [
      {
        id: 'm-24-a',
        text: 'A BCBA implements a token economy for Leo\'s on-task behavior (B phase). On-task behavior increases. She then withdraws the token economy and returns to baseline conditions (A phase) — on-task behavior decreases. She reintroduces the token economy (B phase) and on-task behavior increases again.',
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

  // ── ASSESSMENT ────────────────────────────────────────────────────────────────
  {
    id: 'm-27',
    domain: 'Assessment',
    concept: 'ABC (Descriptive) Assessment',
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

  // ── SKILL ACQUISITION ─────────────────────────────────────────────────────────
  {
    id: 'm-29',
    domain: 'Skill Acquisition',
    concept: 'Discrete Trial Training (DTT)',
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
    concept: 'Prompt Hierarchy (Most-to-Least)',
    definition: 'A prompting procedure in which the most intrusive prompt is provided first to ensure correct responding, and prompts are systematically faded to less intrusive levels as the learner demonstrates accuracy.',
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

  // ── BEHAVIOR REDUCTION ────────────────────────────────────────────────────────
  {
    id: 'm-32',
    domain: 'Behavior Reduction',
    concept: 'Noncontingent Reinforcement (NCR)',
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

  // ── VERBAL BEHAVIOR ───────────────────────────────────────────────────────────
  {
    id: 'm-34',
    domain: 'Verbal Behavior',
    concept: 'Tact',
    definition: 'A verbal operant controlled by a nonverbal discriminative stimulus (an object, event, or property of the environment) and reinforced by generalized conditioned reinforcement.',
    scenarios: [
      {
        id: 'm-34-a',
        text: 'Leo\'s BCBA holds up a real apple and asks "What is this?" Leo says "apple" and receives praise. Over time, Leo labels apples, oranges, and bananas correctly whenever they are presented, regardless of whether he is hungry.',
        isCorrect: true,
        explanation: 'The verbal behavior ("apple") is controlled by a nonverbal SD (the apple) and reinforced by generalized reinforcement (praise) — this is a tact.',
      },
      {
        id: 'm-34-b',
        text: 'Leo has not had his preferred snack for 45 minutes. He approaches his BCBA and says "cookie." She gives him a cookie. His cookie-requesting increases.',
        isCorrect: false,
        explanation: 'The verbal behavior is controlled by an MO (deprivation) and reinforced by the specific, characteristic consequence (cookie) — this is a mand, not a tact.',
      },
      {
        id: 'm-34-c',
        text: 'Leo\'s BCBA asks "What do you do when you\'re hungry?" and Leo says "eat food." She praises him.',
        isCorrect: false,
        explanation: 'The verbal behavior is controlled by a verbal SD (the question) and reinforced by generalized reinforcement — this is an intraverbal, not a tact.',
      },
      {
        id: 'm-34-d',
        text: 'Leo\'s BCBA says "red" and Leo immediately repeats "red." She praises him for the correct response.',
        isCorrect: false,
        explanation: 'The verbal behavior has point-to-point correspondence with a verbal SD (the BCBA\'s "red") — this is an echoic, not a tact.',
      },
    ],
  },
  {
    id: 'm-35',
    domain: 'Verbal Behavior',
    concept: 'Intraverbal',
    definition: 'A verbal operant in which the response is controlled by a verbal discriminative stimulus and there is no point-to-point correspondence between the SD and the response; reinforced by generalized conditioned reinforcement.',
    scenarios: [
      {
        id: 'm-35-a',
        text: 'Leo\'s BCBA asks "What do you do when you\'re cold?" and Leo says "put on a jacket." She praises him. The question and answer do not share any words or sounds.',
        isCorrect: true,
        explanation: 'The verbal behavior is controlled by a verbal SD (the question) with no point-to-point correspondence between the question and the answer, reinforced by generalized reinforcement — this is an intraverbal.',
      },
      {
        id: 'm-35-b',
        text: 'Leo\'s BCBA holds up a picture of a dog and asks "What is this?" Leo says "dog" and receives praise.',
        isCorrect: false,
        explanation: 'The verbal behavior is controlled by a nonverbal SD (the picture) — this is a tact, not an intraverbal.',
      },
      {
        id: 'm-35-c',
        text: 'Leo is hungry and says "cookie" to his BCBA. She gives him a cookie. His cookie-requesting increases.',
        isCorrect: false,
        explanation: 'The verbal behavior is controlled by an MO and reinforced by the specific, characteristic consequence — this is a mand, not an intraverbal.',
      },
      {
        id: 'm-35-d',
        text: 'Leo\'s BCBA says "dog" and Leo immediately says "dog." She praises him.',
        isCorrect: false,
        explanation: 'The verbal behavior has point-to-point correspondence with the verbal SD — this is an echoic, not an intraverbal.',
      },
    ],
  },
  {
    id: 'm-36',
    domain: 'Verbal Behavior',
    concept: 'Functional Communication Training (FCT)',
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

  // ── PERSONNEL SUPERVISION ─────────────────────────────────────────────────────
  {
    id: 'm-37',
    domain: 'Personnel Supervision',
    concept: 'Performance Monitoring',
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
    definition: 'A training package consisting of four components — instruction, modeling, rehearsal, and feedback — used to teach new skills to supervisees and caregivers.',
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

  // ── ETHICS & PROFESSIONAL PRACTICE ───────────────────────────────────────────
  {
    id: 'm-39',
    domain: 'Ethics & Professional Practice',
    concept: 'Scope of Competence',
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

  // ── BEHAVIOR PRINCIPLES (additional) ─────────────────────────────────────────
  {
    id: 'm-42',
    domain: 'Behavior Principles',
    concept: 'Spontaneous Recovery',
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
    definition: 'A motivating operation that decreases the reinforcing effectiveness of a stimulus and decreases the current frequency of behavior that has been reinforced by that stimulus.',
    scenarios: [
      {
        id: 'm-43-a',
        text: 'Leo has just finished a large snack. His BCBA observes that he is now requesting food much less frequently than before the snack, and that food is functioning as a weaker reinforcer during the current session.',
        isCorrect: true,
        explanation: 'Satiation (having just consumed food) has decreased both the reinforcing value of food AND the frequency of food-seeking behavior — both effects of an abolishing operation (AO).',
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
        text: 'A BCBA trains her RBT by explaining the procedure, demonstrating it, having the RBT practice, and providing feedback — but does not set a performance criterion.',
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
    definition: 'The occurrence of untrained but functionally similar responses in the presence of the training stimulus, without additional training.',
    scenarios: [
      {
        id: 'm-50-a',
        text: 'Leo is taught to greet people by saying "Hi!" After training, he also begins waving, nodding, and smiling when he sees familiar people — none of these responses were directly trained.',
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
  // ── NEW ITEMS: Behavior Principles (B) ────────────────────────────────────
  {
    id: 'm-51',
    domain: 'Behavior Principles',
    concept: 'Extinction Burst',
    definition: 'A temporary increase in the frequency, duration, or intensity of a behavior immediately following the discontinuation of reinforcement.',
    scenarios: [
      {
        id: 'm-51-a',
        text: 'A child who previously received attention for tantruming is now ignored when he tantrums. During the first week, his tantrums become louder and more frequent before gradually decreasing.',
        isCorrect: true,
        explanation: 'The initial increase in tantrum intensity and frequency following the removal of the attention contingency is a textbook extinction burst — a temporary escalation before the behavior decreases.',
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
    domain: 'Behavior Principles',
    concept: 'Spontaneous Recovery',
    definition: 'The reappearance of an extinguished behavior after a period of time has elapsed without exposure to the extinction contingency.',
    scenarios: [
      {
        id: 'm-52-a',
        text: 'Marcus\'s self-injurious behavior had been successfully extinguished over eight weeks. After a two-week holiday break with no intervention, the behavior reappears at low rates when he returns to the clinic.',
        isCorrect: true,
        explanation: 'The reappearance of previously extinguished SIB after a period of no contact with the extinction contingency is spontaneous recovery — a predictable phenomenon that practitioners must anticipate and plan for.',
      },
      {
        id: 'm-52-b',
        text: 'Marcus\'s SIB increases sharply when his BCBA first begins ignoring it after a period of consistent attention delivery.',
        isCorrect: false,
        explanation: 'A sharp increase immediately following the onset of extinction is an extinction burst, not spontaneous recovery.',
      },
      {
        id: 'm-52-c',
        text: 'Marcus\'s SIB increases when he is moved to a new classroom that resembles the setting where the behavior was originally reinforced.',
        isCorrect: false,
        explanation: 'Behavior increasing in a new context that shares stimulus properties with the original training context is stimulus generalization, not spontaneous recovery.',
      },
      {
        id: 'm-52-d',
        text: 'Marcus\'s SIB returns after his parents accidentally reinforce it once during the holiday break.',
        isCorrect: false,
        explanation: 'Behavior returning because of accidental reinforcement during the break is resurgence or re-acquisition, not spontaneous recovery. Spontaneous recovery occurs without any reinforcement contact.',
      },
    ],
  },
  {
    id: 'm-53',
    domain: 'Behavior Principles',
    concept: 'Behavioral Contrast',
    definition: 'A change in the rate of behavior in one component of a multiple schedule when the reinforcement contingency is altered in the other component.',
    scenarios: [
      {
        id: 'm-53-a',
        text: 'A student\'s on-task behavior is reinforced frequently in morning sessions. When the afternoon teacher stops reinforcing on-task behavior, the student\'s on-task rate in the morning sessions increases above its previous baseline.',
        isCorrect: true,
        explanation: 'The increase in on-task behavior in the morning component following a decrease in reinforcement in the afternoon component is behavioral contrast — a change in one component producing an opposite change in the other.',
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
    domain: 'Behavior Principles',
    concept: 'Resurgence',
    definition: 'The reappearance of a previously extinguished behavior when a more recently reinforced behavior is placed on extinction.',
    scenarios: [
      {
        id: 'm-54-a',
        text: 'Keisha\'s aggression was extinguished and replaced with a functional communication response (FCT). When the FCT response is placed on extinction during a treatment integrity failure, her aggression reappears.',
        isCorrect: true,
        explanation: 'The reappearance of the previously extinguished problem behavior (aggression) when the replacement behavior (FCT) is placed on extinction is resurgence — a critical clinical concern when FCT is used as a behavior reduction strategy.',
      },
      {
        id: 'm-54-b',
        text: 'Keisha\'s aggression reappears after a two-week hospitalization during which no intervention was in place.',
        isCorrect: false,
        explanation: 'Reappearance of extinguished behavior after a time gap without any extinction of a replacement behavior is spontaneous recovery, not resurgence.',
      },
      {
        id: 'm-54-c',
        text: 'Keisha\'s aggression temporarily increases when her BCBA first begins ignoring it.',
        isCorrect: false,
        explanation: 'A temporary increase immediately following the onset of extinction is an extinction burst, not resurgence.',
      },
      {
        id: 'm-54-d',
        text: 'Keisha\'s aggression occurs in a new school setting even though it had been extinguished in the clinic.',
        isCorrect: false,
        explanation: 'Behavior occurring in a new setting that shares stimulus properties with the original training context is stimulus generalization, not resurgence.',
      },
    ],
  },
  {
    id: 'm-55',
    domain: 'Behavior Principles',
    concept: 'Conditioned Punisher',
    definition: 'A previously neutral stimulus that acquires punishing properties through repeated pairing with an unconditioned or established conditioned punisher.',
    scenarios: [
      {
        id: 'm-55-a',
        text: 'A therapist repeatedly says "No" immediately before delivering a brief physical prompt correction. Over time, "No" alone decreases the child\'s behavior even when the prompt is not delivered.',
        isCorrect: true,
        explanation: '"No" acquired its punishing properties through repeated pairing with the physical prompt (an established aversive). This is a conditioned punisher — a neutral stimulus that becomes punishing through conditioning.',
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
    domain: 'Behavior Principles',
    concept: 'Abolishing Operation (AO)',
    definition: 'A motivating operation that decreases the reinforcing effectiveness of a stimulus and decreases the current frequency of behavior reinforced by that stimulus.',
    scenarios: [
      {
        id: 'm-56-a',
        text: 'A child who just finished a large meal is offered a cookie as a reinforcer during a DTT session. His rate of correct responding drops significantly compared to sessions conducted before meals.',
        isCorrect: true,
        explanation: 'Satiation from the recent meal functions as an abolishing operation — it decreases the reinforcing value of food and reduces the behavior (correct responding) that food previously maintained.',
      },
      {
        id: 'm-56-b',
        text: 'A child who has not eaten for four hours responds at a higher rate during a food-reinforced DTT session than he does after eating.',
        isCorrect: false,
        explanation: 'Food deprivation increases the reinforcing value of food and evokes food-maintained behavior — this is an establishing operation (EO), not an abolishing operation.',
      },
      {
        id: 'm-56-c',
        text: 'A child\'s escape-maintained behavior decreases when the task demands are reduced.',
        isCorrect: false,
        explanation: 'Reducing task demands removes the aversive condition that was maintaining escape behavior. This is an antecedent intervention, not an abolishing operation in the technical sense.',
      },
      {
        id: 'm-56-d',
        text: 'A child\'s attention-seeking behavior decreases after the BCBA stops providing attention contingent on the behavior.',
        isCorrect: false,
        explanation: 'Removing the reinforcement contingency (attention) is extinction, not an abolishing operation. An AO changes the value of the reinforcer, not the contingency.',
      },
    ],
  },
  {
    id: 'm-57',
    domain: 'Behavior Principles',
    concept: 'Three-Term Contingency',
    definition: 'The basic unit of operant analysis: an antecedent stimulus, a behavior, and a consequence — the relationship among which determines whether the behavior will recur in similar antecedent conditions.',
    scenarios: [
      {
        id: 'm-57-a',
        text: 'When the teacher holds up a red card (SD), the student says "red" (behavior), and the teacher delivers praise (consequence). Over time, the student reliably names the color when the card is presented.',
        isCorrect: true,
        explanation: 'The red card (SD) → naming "red" (behavior) → praise (consequence) is a complete three-term contingency. The behavior comes under stimulus control of the SD because it has been reinforced in its presence.',
      },
      {
        id: 'm-57-b',
        text: 'A dog salivates when it hears a bell that has been repeatedly paired with food.',
        isCorrect: false,
        explanation: 'Salivation to a conditioned stimulus (bell) is a two-term respondent contingency (CS → CR), not a three-term operant contingency.',
      },
      {
        id: 'm-57-c',
        text: 'A child\'s hitting increases because it produces attention from caregivers.',
        isCorrect: false,
        explanation: 'While this involves a behavior-consequence relationship, it describes a two-term contingency (behavior → reinforcer) without specifying the antecedent stimulus that sets the occasion for the behavior.',
      },
      {
        id: 'm-57-d',
        text: 'A BCBA delivers a token after every correct response during a discrete trial session.',
        isCorrect: false,
        explanation: 'Describing only the consequence delivery (token after correct response) captures the behavior-consequence relationship but does not describe the full three-term contingency, which requires the antecedent.',
      },
    ],
  },
  // ── NEW ITEMS: Skill Acquisition (H) ──────────────────────────────────────
  {
    id: 'm-58',
    domain: 'Skill Acquisition',
    concept: 'Most-to-Least Prompting',
    definition: 'A prompting strategy in which the most intrusive prompt necessary to produce the correct response is provided initially, and prompt intensity is systematically faded as the learner demonstrates competence.',
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
    definition: 'A prompting strategy in which the least intrusive prompt is provided first; if the learner does not respond correctly, progressively more intrusive prompts are provided until a correct response occurs.',
    scenarios: [
      {
        id: 'm-59-a',
        text: 'The therapist presents a picture card and waits 3 seconds. If the child does not label the picture, she provides a partial verbal model ("b-"). If still no response, she provides a full verbal model ("ball").',
        isCorrect: true,
        explanation: 'Starting with the least intrusive prompt (waiting) and escalating through partial then full verbal models is least-to-most prompting — designed to give the learner maximum opportunity to respond independently.',
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
    definition: 'The systematic arrangement of antecedent and consequence variables during training to promote the occurrence of trained behaviors in untrained settings, with untrained people, or under untrained conditions.',
    scenarios: [
      {
        id: 'm-62-a',
        text: 'A BCBA teaches requesting across multiple therapists, in multiple rooms, using multiple exemplars of the target item, and with varying motivating operations to ensure the skill transfers to the natural environment.',
        isCorrect: true,
        explanation: 'Deliberately varying trainers, settings, stimuli, and MOs during training to promote transfer to untrained conditions is generalization programming — specifically, training sufficient exemplars and using loose training.',
      },
      {
        id: 'm-62-b',
        text: 'A BCBA teaches requesting only with one therapist in one room until the skill is fluent, then tests whether it generalizes.',
        isCorrect: false,
        explanation: 'Training in a single context and then testing for generalization is not generalization programming — it is training without programming for generalization, which often results in limited transfer.',
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
  // ── NEW ITEMS: Behavior Reduction (G) ─────────────────────────────────────
  {
    id: 'm-63',
    domain: 'Behavior Reduction',
    concept: 'Positive Punishment',
    definition: 'A stimulus is added following a behavior, resulting in a decrease in the future frequency of that behavior.',
    scenarios: [
      {
        id: 'm-63-a',
        text: 'Each time a student calls out in class, the teacher assigns an additional homework problem. Over the next two weeks, the student\'s call-outs decrease significantly.',
        isCorrect: true,
        explanation: 'Adding an aversive stimulus (extra homework) contingent on the behavior (calling out) that results in a decrease in that behavior is positive punishment.',
      },
      {
        id: 'm-63-b',
        text: 'Each time a student calls out, the teacher removes five minutes of recess time. The call-outs decrease over the following week.',
        isCorrect: false,
        explanation: 'Removing a preferred stimulus (recess time) contingent on behavior to decrease it is negative punishment (response cost), not positive punishment.',
      },
      {
        id: 'm-63-c',
        text: 'The teacher stops providing attention when the student calls out. The behavior decreases over several weeks.',
        isCorrect: false,
        explanation: 'Discontinuing reinforcement (attention) to decrease behavior is extinction, not positive punishment.',
      },
      {
        id: 'm-63-d',
        text: 'The teacher delivers praise contingent on the student raising her hand, which increases hand-raising and reduces call-outs.',
        isCorrect: false,
        explanation: 'Reinforcing an alternative behavior (hand-raising) that competes with call-outs is DRA, not positive punishment.',
      },
    ],
  },
  {
    id: 'm-64',
    domain: 'Behavior Reduction',
    concept: 'Non-Contingent Reinforcement (NCR)',
    definition: 'The delivery of reinforcers on a fixed-time or variable-time schedule independent of the occurrence of any behavior, used to reduce problem behavior by abolishing the motivating operation for that behavior.',
    scenarios: [
      {
        id: 'm-64-a',
        text: 'A child engages in attention-maintained problem behavior. The BCBA delivers brief attention every 2 minutes regardless of what the child is doing. Problem behavior decreases because the child no longer needs to engage in it to access attention.',
        isCorrect: true,
        explanation: 'Delivering attention on a fixed-time schedule independent of behavior is NCR. It reduces the motivating operation for attention-maintained problem behavior by providing free access to the reinforcer.',
      },
      {
        id: 'm-64-b',
        text: 'The BCBA delivers attention only when the child is engaging in appropriate behavior, which increases appropriate behavior and reduces problem behavior.',
        isCorrect: false,
        explanation: 'Delivering reinforcement contingent on appropriate behavior is DRA, not NCR. NCR is explicitly non-contingent — delivered regardless of behavior.',
      },
      {
        id: 'm-64-c',
        text: 'The BCBA stops providing attention when the child engages in problem behavior. Problem behavior decreases over several weeks.',
        isCorrect: false,
        explanation: 'Discontinuing the reinforcement contingency for problem behavior is extinction, not NCR.',
      },
      {
        id: 'm-64-d',
        text: 'The BCBA provides the child with a preferred item before a demanding task to reduce escape-maintained problem behavior.',
        isCorrect: false,
        explanation: 'Providing a preferred item before a task to reduce problem behavior is an antecedent intervention (establishing operation manipulation), not NCR.',
      },
    ],
  },
  {
    id: 'm-65',
    domain: 'Behavior Reduction',
    concept: 'Time-Out from Positive Reinforcement',
    definition: 'A negative punishment procedure in which access to positive reinforcement is contingently removed for a specified period following a target behavior.',
    scenarios: [
      {
        id: 'm-65-a',
        text: 'When a child hits a peer, the therapist immediately moves him to a chair in the corner of the room for 2 minutes, away from all ongoing activities and social interaction. Hitting decreases over the following weeks.',
        isCorrect: true,
        explanation: 'Removing access to reinforcement (activities and social interaction) contingent on hitting for a specified period is time-out from positive reinforcement — a negative punishment procedure.',
      },
      {
        id: 'm-65-b',
        text: 'When a child hits a peer, the therapist removes the child\'s token board for the remainder of the session. Hitting decreases.',
        isCorrect: false,
        explanation: 'Removing a specific reinforcer (tokens) contingent on behavior is response cost — a negative punishment procedure — but not time-out. Time-out involves removal from a reinforcing environment, not removal of a specific item.',
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
    domain: 'Behavior Reduction',
    concept: 'Least Restrictive Alternative',
    definition: 'The ethical principle that the behavior analyst should select the least restrictive, least aversive intervention that is likely to be effective, prioritizing positive approaches before resorting to restrictive or aversive procedures.',
    scenarios: [
      {
        id: 'm-67-a',
        text: 'Before recommending a contingent electric stimulation device for a client\'s SIB, the BCBA documents that multiple function-based interventions (FCT, NCR, DRA, environmental modifications) were implemented with fidelity and failed to produce clinically significant reductions.',
        isCorrect: true,
        explanation: 'Exhausting less restrictive, function-based alternatives before recommending an aversive procedure demonstrates adherence to the least restrictive alternative principle.',
      },
      {
        id: 'm-67-b',
        text: 'The BCBA selects the intervention that produces the fastest behavior reduction, regardless of its restrictiveness.',
        isCorrect: false,
        explanation: 'Selecting an intervention based solely on speed of behavior reduction without considering restrictiveness violates the least restrictive alternative principle.',
      },
      {
        id: 'm-67-c',
        text: 'The BCBA selects the intervention preferred by the caregiver, even if a less restrictive option is available.',
        isCorrect: false,
        explanation: 'While caregiver preference is important, it does not override the ethical obligation to use the least restrictive effective intervention.',
      },
      {
        id: 'm-67-d',
        text: 'The BCBA uses punishment procedures from the beginning of treatment to quickly suppress dangerous behavior.',
        isCorrect: false,
        explanation: 'Using punishment procedures at the outset without first attempting less restrictive alternatives violates the least restrictive alternative principle, even when behavior is dangerous.',
      },
    ],
  },
  // ── NEW ITEMS: Supervision (I) ─────────────────────────────────────────────
  {
    id: 'm-68',
    domain: 'Supervision',
    concept: 'Behavioral Skills Training (BST)',
    definition: 'A training package consisting of four components — instructions, modeling, rehearsal, and feedback — used to teach new skills to supervisees and staff.',
    scenarios: [
      {
        id: 'm-68-a',
        text: 'A BCBA trains a new RBT by first explaining the discrete trial procedure (instructions), then demonstrating it with a client (modeling), then having the RBT practice it with the client (rehearsal), and finally providing specific corrective and positive feedback on the RBT\'s performance.',
        isCorrect: true,
        explanation: 'The sequence of instructions → modeling → rehearsal → feedback is BST — the evidence-based training package for teaching behavioral procedures to staff.',
      },
      {
        id: 'm-68-b',
        text: 'A BCBA provides the RBT with a written manual describing the discrete trial procedure and asks her to review it before the next session.',
        isCorrect: false,
        explanation: 'Providing written instructions alone is not BST. BST requires all four components: instructions, modeling, rehearsal, and feedback.',
      },
      {
        id: 'm-68-c',
        text: 'A BCBA observes the RBT conducting a session and provides written feedback afterward.',
        isCorrect: false,
        explanation: 'Observation followed by written feedback is performance monitoring, not BST. BST requires active rehearsal and immediate feedback, not just observation and delayed written feedback.',
      },
      {
        id: 'm-68-d',
        text: 'A BCBA asks the RBT to watch a training video on discrete trial teaching and pass a written quiz.',
        isCorrect: false,
        explanation: 'Video instruction and written testing assess knowledge but do not constitute BST, which requires live modeling, rehearsal, and performance-based feedback.',
      },
    ],
  },
  {
    id: 'm-69',
    domain: 'Supervision',
    concept: 'Performance Monitoring',
    definition: 'The systematic, ongoing observation and measurement of a supervisee\'s implementation of behavior-analytic procedures to evaluate fidelity and identify areas for improvement.',
    scenarios: [
      {
        id: 'm-69-a',
        text: 'A BCBA uses a structured fidelity checklist to observe an RBT conducting a DTT session twice per month, scores each component, and reviews the data with the RBT in the following supervision meeting.',
        isCorrect: true,
        explanation: 'Systematically observing the RBT\'s performance using a structured checklist, scoring it, and reviewing the data is performance monitoring — the ongoing process of evaluating supervisee fidelity.',
      },
      {
        id: 'm-69-b',
        text: 'A BCBA teaches an RBT the DTT procedure using instructions, modeling, rehearsal, and feedback before the RBT begins working with clients.',
        isCorrect: false,
        explanation: 'Teaching a new skill using the four-component package is BST, not performance monitoring. Performance monitoring occurs after initial training to evaluate ongoing fidelity.',
      },
      {
        id: 'm-69-c',
        text: 'A BCBA and RBT sign a written agreement specifying the responsibilities, schedule, and evaluation criteria for their supervisory relationship.',
        isCorrect: false,
        explanation: 'Establishing a written agreement is the supervisory contract, not performance monitoring.',
      },
      {
        id: 'm-69-d',
        text: 'A BCBA reviews the RBT\'s data sheets at the end of each week to check for data collection errors.',
        isCorrect: false,
        explanation: 'Reviewing permanent products (data sheets) is one method of performance monitoring, but the scenario describes only data review, not the broader systematic observation process that defines performance monitoring.',
      },
    ],
  },
  {
    id: 'm-70',
    domain: 'Supervision',
    concept: 'Competency-Based Training',
    definition: 'A training approach in which a supervisee must demonstrate a specified level of performance on a skill before advancing, rather than completing a fixed number of training hours or sessions.',
    scenarios: [
      {
        id: 'm-70-a',
        text: 'A BCBA requires an RBT to demonstrate 90% accuracy on a DTT fidelity checklist across three consecutive observations before allowing her to implement the procedure independently with clients.',
        isCorrect: true,
        explanation: 'Requiring a specific performance criterion (90% accuracy across three observations) before advancing is competency-based training — advancement is tied to demonstrated skill, not time.',
      },
      {
        id: 'm-70-b',
        text: 'A BCBA requires an RBT to complete 40 hours of supervised fieldwork before implementing procedures independently.',
        isCorrect: false,
        explanation: 'Requiring a fixed number of hours before advancement is time-based training, not competency-based training. Competency-based training requires demonstrated performance, not just hours.',
      },
      {
        id: 'm-70-c',
        text: 'A BCBA teaches an RBT the DTT procedure using instructions, modeling, rehearsal, and feedback.',
        isCorrect: false,
        explanation: 'The four-component training package is BST. Competency-based training refers to the criterion for advancement, not the method of instruction.',
      },
      {
        id: 'm-70-d',
        text: 'A BCBA provides weekly supervision meetings where the RBT discusses cases and asks questions.',
        isCorrect: false,
        explanation: 'Weekly case discussion meetings are a component of supervision, not competency-based training. Competency-based training requires objective performance measurement against a specified criterion.',
      },
    ],
  },
  {
    id: 'm-71',
    domain: 'Supervision',
    concept: 'Scope of Competence',
    definition: 'The range of professional activities a behavior analyst is qualified to perform based on education, training, supervised experience, and demonstrated competence.',
    scenarios: [
      {
        id: 'm-71-a',
        text: 'A BCBA with expertise in pediatric ABA is asked to develop a vocational training program for adults with traumatic brain injury. She declines and refers the client to a BCBA with relevant experience and training in that population.',
        isCorrect: true,
        explanation: 'Declining to provide services outside one\'s area of training and referring to a more qualified practitioner is acting within scope of competence — a core ethical obligation under the BACB Ethics Code.',
      },
      {
        id: 'm-71-b',
        text: 'A BCBA declines to provide services to a client because the family\'s insurance does not cover ABA.',
        isCorrect: false,
        explanation: 'Declining services due to insurance coverage is a business decision, not a scope of competence issue.',
      },
      {
        id: 'm-71-c',
        text: 'A BCBA refers a client to a speech-language pathologist for augmentative communication assessment.',
        isCorrect: false,
        explanation: 'Referring a client to another discipline for a service outside the BCBA\'s scope of practice is appropriate professional collaboration, but it is not specifically a scope of competence decision — it is a recognition of disciplinary boundaries.',
      },
      {
        id: 'm-71-d',
        text: 'A BCBA consults with a colleague before implementing a procedure she has not used before.',
        isCorrect: false,
        explanation: 'Consulting with a colleague before using an unfamiliar procedure is good professional practice, but it is not the same as declining services outside one\'s scope of competence.',
      },
    ],
  },
  // ── NEW ITEMS: Ethics & Professional Practice (E) ─────────────────────────
  {
    id: 'm-72',
    domain: 'Ethics & Professional Practice',
    concept: 'Multiple Relationships',
    definition: 'A situation in which a behavior analyst is in both a professional role and another role simultaneously with a client, supervisee, or research participant, creating a risk of impaired objectivity or exploitation.',
    scenarios: [
      {
        id: 'm-72-a',
        text: 'A BCBA is providing ABA services to the child of her close personal friend. She recognizes that the friendship may compromise her clinical objectivity and discusses the situation with her supervisor.',
        isCorrect: true,
        explanation: 'Simultaneously holding a professional role (BCBA) and a personal role (close friend) with a client\'s family is a multiple relationship. Recognizing and addressing it is the appropriate ethical response.',
      },
      {
        id: 'm-72-b',
        text: 'A BCBA provides services to two siblings in the same family at the same time.',
        isCorrect: false,
        explanation: 'Providing services to multiple members of the same family is not inherently a multiple relationship — it is a common practice that requires careful coordination, not an ethical conflict.',
      },
      {
        id: 'm-72-c',
        text: 'A BCBA works for two different agencies that both serve the same client.',
        isCorrect: false,
        explanation: 'Working for two agencies serving the same client may create a conflict of interest, but it is not a multiple relationship in the technical sense. A multiple relationship involves holding two different roles with the same person.',
      },
      {
        id: 'm-72-d',
        text: 'A BCBA provides both assessment and treatment services to the same client.',
        isCorrect: false,
        explanation: 'Providing both assessment and treatment is standard BCBA practice, not a multiple relationship.',
      },
    ],
  },
  {
    id: 'm-73',
    domain: 'Ethics & Professional Practice',
    concept: 'Informed Consent',
    definition: 'The process of providing a client or their legal guardian with sufficient information about proposed services — including risks, benefits, and alternatives — to make a voluntary, competent decision about participation.',
    scenarios: [
      {
        id: 'm-73-a',
        text: 'Before beginning an assessment, the BCBA explains the purpose of the assessment, the procedures that will be used, potential risks and benefits, the right to withdraw at any time, and alternative options. The parent asks questions and signs the consent form.',
        isCorrect: true,
        explanation: 'Providing complete information about the assessment, ensuring understanding, and obtaining voluntary agreement is informed consent — not merely obtaining a signature.',
      },
      {
        id: 'm-73-b',
        text: 'The BCBA obtains a signed consent form from the parent before beginning services.',
        isCorrect: false,
        explanation: 'Obtaining a signature alone is not informed consent. Informed consent requires that the person understands the information and voluntarily agrees — a signature without comprehension is not sufficient.',
      },
      {
        id: 'm-73-c',
        text: 'The BCBA obtains assent from a 10-year-old client before beginning a new intervention.',
        isCorrect: false,
        explanation: 'Obtaining assent from a minor is an important ethical practice, but assent is not the same as informed consent. Informed consent requires a legally competent adult (typically the parent or guardian for minors).',
      },
      {
        id: 'm-73-d',
        text: 'The BCBA informs the parent of the intervention plan after it has been implemented for two weeks.',
        isCorrect: false,
        explanation: 'Informing a parent after implementation has already begun is not informed consent — consent must be obtained before services begin, not after.',
      },
    ],
  },
  {
    id: 'm-74',
    domain: 'Ethics & Professional Practice',
    concept: 'Assent',
    definition: 'The affirmative agreement of a person who lacks legal capacity to provide informed consent (e.g., a minor or individual with significant cognitive limitations) to participate in services or research.',
    scenarios: [
      {
        id: 'm-74-a',
        text: 'Before beginning a new intervention with a 12-year-old client, the BCBA explains the procedure in age-appropriate language, answers the client\'s questions, and asks if he is willing to try it. The client nods and says "okay."',
        isCorrect: true,
        explanation: 'Explaining the procedure in accessible language and seeking the client\'s agreement — even though he cannot legally provide informed consent — is obtaining assent.',
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
  // ── NEW ITEMS: Measurement (C) ─────────────────────────────────────────────
  {
    id: 'm-75',
    domain: 'Measurement',
    concept: 'Whole Interval Recording',
    definition: 'A time-sampling method in which the behavior is recorded as having occurred only if it is present throughout the entire observation interval.',
    scenarios: [
      {
        id: 'm-75-a',
        text: 'A therapist divides a 10-minute observation into 10-second intervals. She marks "yes" for an interval only if the child was on-task for the entire 10 seconds. If the child was off-task for even 1 second, she marks "no."',
        isCorrect: true,
        explanation: 'Recording behavior as occurring only when it is present for the entire interval is whole interval recording — it tends to underestimate the true duration of behavior.',
      },
      {
        id: 'm-75-b',
        text: 'The therapist marks "yes" for an interval if the child was on-task for any portion of the 10-second interval.',
        isCorrect: false,
        explanation: 'Recording behavior if it occurs at any point during the interval is partial interval recording, not whole interval recording.',
      },
      {
        id: 'm-75-c',
        text: 'The therapist observes the child at the end of each 10-second interval and marks whether the child is on-task at that exact moment.',
        isCorrect: false,
        explanation: 'Recording whether behavior is occurring at a specific moment at the end of each interval is momentary time sampling, not whole interval recording.',
      },
      {
        id: 'm-75-d',
        text: 'The therapist records the total number of seconds the child is on-task during the 10-minute observation.',
        isCorrect: false,
        explanation: 'Recording the total duration of behavior is duration recording, not whole interval recording.',
      },
    ],
  },
  {
    id: 'm-76',
    domain: 'Measurement',
    concept: 'Momentary Time Sampling',
    definition: 'A time-sampling method in which the observer records whether the behavior is occurring at the precise moment the interval ends, regardless of what occurred during the rest of the interval.',
    scenarios: [
      {
        id: 'm-76-a',
        text: 'Every 30 seconds, a teacher glances at a student and marks whether the student is engaged in self-stimulatory behavior at that exact moment. She does not observe the student between these check points.',
        isCorrect: true,
        explanation: 'Observing and recording behavior only at the precise end of each interval is momentary time sampling — it provides an estimate of prevalence and is less reactive than continuous observation.',
      },
      {
        id: 'm-76-b',
        text: 'The teacher marks "yes" if the student engages in self-stimulatory behavior at any point during each 30-second interval.',
        isCorrect: false,
        explanation: 'Recording behavior if it occurs at any point during the interval is partial interval recording, not momentary time sampling.',
      },
      {
        id: 'm-76-c',
        text: 'The teacher marks "yes" only if the student engages in self-stimulatory behavior for the entire 30-second interval.',
        isCorrect: false,
        explanation: 'Recording behavior only when it persists throughout the entire interval is whole interval recording, not momentary time sampling.',
      },
      {
        id: 'm-76-d',
        text: 'The teacher records the exact time each instance of self-stimulatory behavior begins and ends.',
        isCorrect: false,
        explanation: 'Recording start and stop times for each instance is duration recording, not momentary time sampling.',
      },
    ],
  },
  {
    id: 'm-77',
    domain: 'Measurement',
    concept: 'Interobserver Agreement (IOA)',
    definition: 'A measure of the consistency between two independent observers recording the same behavior at the same time, used to evaluate the reliability and accuracy of behavioral measurement.',
    scenarios: [
      {
        id: 'm-77-a',
        text: 'Two therapists independently observe and record the frequency of a child\'s vocalizations during the same 10-minute session. Their counts are compared to calculate the percentage of agreement.',
        isCorrect: true,
        explanation: 'Two independent observers recording the same behavior simultaneously and comparing their records is IOA — a standard method for evaluating measurement reliability.',
      },
      {
        id: 'm-77-b',
        text: 'A BCBA reviews a therapist\'s data sheets at the end of the week to check for recording errors.',
        isCorrect: false,
        explanation: 'Reviewing data sheets after the fact is a quality control check, not IOA. IOA requires two observers recording simultaneously and independently.',
      },
      {
        id: 'm-77-c',
        text: 'A BCBA compares a client\'s behavior data from this week to data from the same week last year.',
        isCorrect: false,
        explanation: 'Comparing data across time periods is trend analysis, not IOA. IOA requires simultaneous independent observation of the same behavior.',
      },
      {
        id: 'm-77-d',
        text: 'A BCBA uses a video recording of a session to re-score the data and compare it to the original data sheet.',
        isCorrect: false,
        explanation: 'Rescoring a video recording is a form of reliability check but is not IOA in the traditional sense. IOA requires two independent observers recording simultaneously in real time.',
      },
    ],
  },
  // ── NEW ITEMS: Research Design (D) ─────────────────────────────────────────
  {
    id: 'm-78',
    domain: 'Research & Design',
    concept: 'Alternating Treatments Design (ATD)',
    definition: 'A single-subject research design in which two or more conditions are rapidly alternated across sessions to compare their effects on a target behavior.',
    scenarios: [
      {
        id: 'm-78-a',
        text: 'A researcher alternates between two reading curricula (Curriculum A and Curriculum B) across sessions in a counterbalanced order, measuring reading fluency under each condition. After 20 sessions, Curriculum A consistently produces higher fluency scores.',
        isCorrect: true,
        explanation: 'Rapidly alternating between two conditions across sessions to compare their effects is an alternating treatments design. The counterbalancing controls for sequence effects.',
      },
      {
        id: 'm-78-b',
        text: 'A researcher implements Curriculum A for 10 sessions, then switches to Curriculum B for 10 sessions, then returns to Curriculum A.',
        isCorrect: false,
        explanation: 'Implementing conditions in sequential phases with a return to baseline is a reversal (ABA) design, not an ATD.',
      },
      {
        id: 'm-78-c',
        text: 'A researcher introduces Curriculum A in one classroom and Curriculum B in a second classroom simultaneously, measuring fluency in both.',
        isCorrect: false,
        explanation: 'Implementing conditions simultaneously in different settings is a between-subjects comparison, not an ATD. ATD requires the same participant to experience both conditions.',
      },
      {
        id: 'm-78-d',
        text: 'A researcher introduces Curriculum A across three classrooms in a staggered fashion, adding each classroom after the previous one shows improvement.',
        isCorrect: false,
        explanation: 'Staggering the introduction of a single condition across multiple settings is a multiple baseline design, not an ATD.',
      },
    ],
  },
  {
    id: 'm-79',
    domain: 'Research & Design',
    concept: 'Visual Analysis',
    definition: 'The primary method of data analysis in single-subject research, involving systematic examination of graphed data for level, trend, variability, immediacy of effect, overlap, and consistency across similar phases.',
    scenarios: [
      {
        id: 'm-79-a',
        text: 'A BCBA examines a graph of a client\'s problem behavior across baseline and intervention phases. She notes the mean level in each phase, the direction of trend, the degree of data variability, and the proportion of overlapping data points between phases before concluding that the intervention produced a clinically significant change.',
        isCorrect: true,
        explanation: 'Systematically examining level, trend, variability, and overlap in graphed data is visual analysis — the standard method for evaluating data in single-subject research.',
      },
      {
        id: 'm-79-b',
        text: 'A BCBA calculates the mean and standard deviation of the client\'s problem behavior in each phase and uses a t-test to determine whether the difference is statistically significant.',
        isCorrect: false,
        explanation: 'Using inferential statistics (t-test) is a group statistical analysis approach, not visual analysis. Single-subject research relies on visual analysis, not statistical significance testing.',
      },
      {
        id: 'm-79-c',
        text: 'A BCBA calculates the percentage of non-overlapping data (PND) between baseline and intervention phases.',
        isCorrect: false,
        explanation: 'PND is a quantitative effect size metric derived from visual analysis, but calculating PND alone is not the same as conducting a full visual analysis of level, trend, variability, and overlap.',
      },
      {
        id: 'm-79-d',
        text: 'A BCBA compares the client\'s behavior data to normative data from a standardized assessment.',
        isCorrect: false,
        explanation: 'Comparing to normative data is a norm-referenced approach used in standardized testing, not visual analysis of single-subject data.',
      },
    ],
  },
  {
    id: 'm-80',
    domain: 'Research & Design',
    concept: 'Social Validity',
    definition: 'The extent to which the goals, procedures, and outcomes of an intervention are acceptable and meaningful to the client, caregivers, and the broader community.',
    scenarios: [
      {
        id: 'm-80-a',
        text: 'After completing a behavior reduction program, the BCBA surveys the client\'s parents and teachers to assess whether they found the intervention goals meaningful, the procedures acceptable, and the behavior changes socially significant.',
        isCorrect: true,
        explanation: 'Systematically assessing stakeholder perceptions of goal importance, procedural acceptability, and outcome significance is social validity assessment — a critical component of applied behavior analysis.',
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
];
