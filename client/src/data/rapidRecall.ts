// Tier 2: Rapid Recall Data
// Each item: term, correct definition, 3 distractor definitions, misconceptions (weak boundaries)

export interface RapidRecallItem {
  id: string;
  term: string;
  correctDefinition: string;
  distractors: string[];
  misconceptions: string[]; // statements that are WRONG  -  tracked as "weak boundaries"
  domain: string;
  taskItem: string;
  category: string;
}

export const rapidRecallItems: RapidRecallItem[] = [
  // -- Core Operant Concepts --------------------------------------------------
  {
    id: 'rr-mo', term: 'Motivating Operation (MO)',
    correctDefinition: 'An environmental variable that alters the reinforcing/punishing effectiveness of a stimulus AND alters the current frequency of behavior reinforced by that stimulus.',
    distractors: [
      'A stimulus that signals when reinforcement is available for a particular behavior.',
      'An antecedent event that directly elicits a respondent behavior through prior conditioning.',
      'A rule or instruction that governs behavior by describing a contingency.',
    ],
    misconceptions: [
      '"Is the same as a discriminative stimulus."',
      '"Is always an environmental event that precedes behavior."',
      '"Requires a three-term contingency to function."',
      '"Only applies to food deprivation."',
    ],
    domain: 'B', category: 'Core Concepts',
    taskItem: 'B.16',
  },
  {
    id: 'rr-sd', term: 'SD (Discriminative Stimulus)',
    correctDefinition: 'A stimulus in the presence of which a behavior has been reinforced; it signals that reinforcement is currently available.',
    distractors: [
      'An environmental variable that increases the value of a reinforcer and evokes behavior.',
      'A stimulus that follows behavior and increases its future frequency.',
      'A stimulus that has acquired reinforcing properties through pairing.',
    ],
    misconceptions: [
      '"Has a value-altering effect on reinforcers."',
      '"Is the same as a motivating operation."',
      '"Elicits behavior rather than evoking it."',
    ],
    domain: 'B', category: 'Core Concepts',
    taskItem: 'B.12',
  },
  {
    id: 'rr-reinforcement', term: 'Reinforcement',
    correctDefinition: 'A process in which a consequence follows a behavior and results in an increase in the future frequency of that behavior.',
    distractors: [
      'Any pleasant stimulus delivered after a behavior.',
      'A process in which a consequence follows a behavior and results in a decrease in its future frequency.',
      'The delivery of a preferred item contingent on appropriate behavior.',
    ],
    misconceptions: [
      '"Is defined by whether the individual likes the stimulus."',
      '"Always involves adding something to the environment."',
      '"Is the same as reward."',
    ],
    domain: 'B', category: 'Core Concepts',
    taskItem: 'B.4',
  },
  {
    id: 'rr-extinction', term: 'Extinction',
    correctDefinition: 'The discontinuation of a reinforcement contingency that previously maintained a behavior, resulting in a decrease in the future frequency of that behavior.',
    distractors: [
      'Withholding all stimuli from the environment following a behavior.',
      'Delivering punishment contingent on problem behavior to reduce it.',
      'Removing a behavior from the individual\'s repertoire through repeated non-reinforcement.',
    ],
    misconceptions: [
      '"Is the same as ignoring a behavior."',
      '"Always involves removing attention."',
      '"Immediately decreases behavior when implemented."',
    ],
    domain: 'B', category: 'Core Concepts',
    taskItem: 'B.11',
  },
  {
    id: 'rr-pos-reinf', term: 'Positive Reinforcement',
    correctDefinition: 'A stimulus is added following a behavior, resulting in an increase in the future frequency of that behavior.',
    distractors: [
      'A stimulus is removed following a behavior, resulting in an increase in the future frequency of that behavior.',
      'A stimulus is added following a behavior, resulting in a decrease in the future frequency of that behavior.',
      'A pleasant stimulus is delivered after a behavior to reward the individual.',
    ],
    misconceptions: [
      '"Is defined by whether the stimulus is pleasant or preferred."',
      '"Is the same as reward."',
      '"Always involves tangible items."',
    ],
    domain: 'B', category: 'Core Concepts',
    taskItem: 'B.4',
  },
  {
    id: 'rr-neg-reinf', term: 'Negative Reinforcement',
    correctDefinition: 'A stimulus is removed following a behavior, resulting in an increase in the future frequency of that behavior.',
    distractors: [
      'A stimulus is added following a behavior, resulting in a decrease in the future frequency of that behavior.',
      'A stimulus is removed following a behavior, resulting in a decrease in the future frequency of that behavior.',
      'Punishment delivered to decrease an undesirable behavior.',
    ],
    misconceptions: [
      '"Is a form of punishment."',
      '"Is always bad or harmful."',
      '"Involves delivering something negative to the individual."',
    ],
    domain: 'B', category: 'Core Concepts',
    taskItem: 'B.4',
  },
  {
    id: 'rr-pos-pun', term: 'Positive Punishment',
    correctDefinition: 'A stimulus is added following a behavior, resulting in a decrease in the future frequency of that behavior.',
    distractors: [
      'A stimulus is removed following a behavior, resulting in a decrease in the future frequency of that behavior.',
      'A stimulus is added following a behavior, resulting in an increase in the future frequency of that behavior.',
      'Any aversive event delivered after a behavior.',
    ],
    misconceptions: [
      '"Is always ethical to use."',
      '"Is defined by whether the stimulus is aversive."',
      '"Is the same as negative reinforcement."',
    ],
    domain: 'B', category: 'Core Concepts',
    taskItem: 'B.5',
  },
  {
    id: 'rr-neg-pun', term: 'Negative Punishment',
    correctDefinition: 'A stimulus is removed following a behavior, resulting in a decrease in the future frequency of that behavior.',
    distractors: [
      'A stimulus is added following a behavior, resulting in a decrease in the future frequency of that behavior.',
      'A stimulus is removed following a behavior, resulting in an increase in the future frequency of that behavior.',
      'Withholding all stimuli following a behavior to reduce it.',
    ],
    misconceptions: [
      '"Is the same as extinction."',
      '"Always involves removing attention."',
      '"Is a form of positive reinforcement."',
    ],
    domain: 'B', category: 'Core Concepts',
    taskItem: 'B.5',
  },
  {
    id: 'rr-auto-reinf', term: 'Automatic Reinforcement',
    correctDefinition: 'Reinforcement that occurs independent of the social mediation of another person; the behavior produces its own reinforcing consequence directly (e.g., a child spinning objects because the visual stimulation is reinforcing regardless of adult attention).',
    distractors: [
      'Reinforcement delivered by another person contingent on a specific behavior.',
      'Reinforcement that occurs on a fixed-ratio schedule without programmer involvement.',
      'Reinforcement that is delivered automatically by a device or token system.',
    ],
    misconceptions: [
      '"Automatic reinforcement is always sensory stimulation."',
      '"Automatic reinforcement cannot be identified through functional analysis."',
      '"Automatic reinforcement is the same as intrinsic motivation."',
    ],
    domain: 'B', category: 'Core Concepts',
    taskItem: 'B.6',
  },

  // -- Differential Reinforcement ---------------------------------------------
  {
    id: 'rr-dra', term: 'DRA (Differential Reinforcement of Alternative Behavior)',
    correctDefinition: 'Reinforcement is delivered for a specific alternative behavior while withholding reinforcement for the problem behavior.',
    distractors: [
      'Reinforcement is delivered when the problem behavior has not occurred for a specified interval.',
      'Reinforcement is delivered for a behavior that is physically incompatible with the problem behavior.',
      'Reinforcement is delivered when the rate of behavior is at or below a specified criterion.',
    ],
    misconceptions: [
      '"The alternative behavior must be physically incompatible with the problem behavior."',
      '"Is the same as DRI."',
      '"Does not require extinction of the problem behavior."',
    ],
    domain: 'G', category: 'Differential Reinforcement',
    taskItem: 'G.2',
  },
  {
    id: 'rr-dri', term: 'DRI (Differential Reinforcement of Incompatible Behavior)',
    correctDefinition: 'Reinforcement is delivered for a behavior that is physically incompatible with the problem behavior  -  both cannot occur simultaneously.',
    distractors: [
      'Reinforcement is delivered for any alternative behavior that serves the same function as the problem behavior.',
      'Reinforcement is delivered when the problem behavior has not occurred for a specified interval.',
      'Reinforcement is delivered for behaviors that are functionally equivalent to the problem behavior.',
    ],
    misconceptions: [
      '"Is the same as DRA."',
      '"The incompatible behavior must serve the same function."',
      '"Does not require the behaviors to be mutually exclusive."',
    ],
    domain: 'G', category: 'Differential Reinforcement',
    taskItem: 'G.2',
  },
  {
    id: 'rr-dro', term: 'DRO (Differential Reinforcement of Other Behavior)',
    correctDefinition: 'Reinforcement is delivered when the problem behavior has not occurred for a specified interval of time.',
    distractors: [
      'Reinforcement is delivered for a specific alternative behavior that replaces the problem behavior.',
      'Reinforcement is delivered for a behavior that is physically incompatible with the problem behavior.',
      'Reinforcement is delivered contingent on the omission of all behavior for a specified interval.',
    ],
    misconceptions: [
      '"Reinforces a specific replacement behavior."',
      '"Is the same as DRA."',
      '"Requires identifying an incompatible behavior."',
    ],
    domain: 'G', category: 'Differential Reinforcement',
    taskItem: 'G.2',
  },
  {
    id: 'rr-drl', term: 'DRL (Differential Reinforcement of Low Rates)',
    correctDefinition: 'Reinforcement is delivered when the rate of a behavior is at or below a specified criterion; used to reduce but not eliminate a behavior.',
    distractors: [
      'Reinforcement is delivered when the rate of a behavior meets or exceeds a specified criterion.',
      'Reinforcement is delivered when the problem behavior has not occurred for a specified interval.',
      'Reinforcement is delivered for a behavior that occurs less frequently than the problem behavior.',
    ],
    misconceptions: [
      '"Is used to eliminate a behavior entirely."',
      '"Is the same as DRO."',
      '"Reinforces the absence of behavior."',
    ],
    domain: 'G', category: 'Differential Reinforcement',
    taskItem: 'G.2',
  },
  {
    id: 'rr-drh', term: 'DRH (Differential Reinforcement of High Rates)',
    correctDefinition: 'Reinforcement is delivered when the rate of a behavior meets or exceeds a specified criterion; used to increase a behavior.',
    distractors: [
      'Reinforcement is delivered when the rate of a behavior is at or below a specified criterion.',
      'Reinforcement is delivered for a behavior that occurs more frequently than baseline.',
      'Reinforcement is delivered on a high-density schedule to increase any behavior.',
    ],
    misconceptions: [
      '"Is the same as DRL."',
      '"Is used to reduce a behavior."',
      '"Delivers reinforcement on a fixed-ratio schedule."',
    ],
    domain: 'G', category: 'Differential Reinforcement',
    taskItem: 'G.2',
  },
  {
    id: 'rr-drd', term: 'DRD (Differential Reinforcement of Diminishing Rates)',
    correctDefinition: 'Reinforcement is delivered when the number of responses in a specified interval is less than or equal to a progressively decreasing criterion; used to gradually reduce behavior.',
    distractors: [
      'Reinforcement is delivered when the rate of behavior is at or below a fixed criterion.',
      'Reinforcement is delivered for each successive decrease in the rate of behavior.',
      'Reinforcement is withheld as behavior diminishes over time.',
    ],
    misconceptions: [
      '"Is the same as DRL."',
      '"Uses a fixed criterion that does not change."',
      '"Is designed to increase a behavior.',
    ],
    domain: 'G', category: 'Differential Reinforcement',
    taskItem: 'G.2',
  },

  // -- Verbal Behavior --------------------------------------------------------
  {
    id: 'rr-mand', term: 'Mand',
    correctDefinition: "A verbal operant evoked by a motivating operation; the speaker's response is reinforced by a characteristic consequence (getting what was asked for).",
    distractors: [
      'A verbal operant evoked by a nonverbal discriminative stimulus and reinforced by generalized conditioned reinforcement.',
      'A verbal operant in which the response is evoked by a verbal SD and has point-to-point correspondence.',
      'A verbal operant in which the response is evoked by a verbal SD but does not have point-to-point correspondence.',
    ],
    misconceptions: [
      '"Is controlled by an SD rather than an MO."',
      '"Is reinforced by generalized conditioned reinforcement."',
      '"Requires the speaker to have language skills."',
    ],
    domain: 'B', category: 'Verbal Behavior',
    taskItem: 'B.19',
  },
  {
    id: 'rr-tact', term: 'Tact',
    correctDefinition: 'A verbal operant evoked by a nonverbal discriminative stimulus (object, event, or property) and reinforced by generalized conditioned reinforcement.',
    distractors: [
      'A verbal operant evoked by a motivating operation and reinforced by a specific consequence.',
      'A verbal operant in which the response is evoked by a verbal SD and has point-to-point correspondence.',
      'A verbal operant in which the response is evoked by a verbal SD but does not have point-to-point correspondence.',
    ],
    misconceptions: [
      '"Is controlled by an MO rather than an SD."',
      '"Is reinforced by a specific, characteristic consequence."',
      '"Requires the listener to respond for reinforcement to occur."',
    ],
    domain: 'B', category: 'Verbal Behavior',
    taskItem: 'B.19',
  },
  {
    id: 'rr-intraverbal', term: 'Intraverbal',
    correctDefinition: 'A verbal operant evoked by a verbal SD; the response does not have point-to-point correspondence with the controlling stimulus.',
    distractors: [
      'A verbal operant in which the response is evoked by a verbal SD and has point-to-point correspondence and formal similarity.',
      'A verbal operant evoked by a nonverbal discriminative stimulus.',
      'A verbal operant evoked by a motivating operation.',
    ],
    misconceptions: [
      '"Has point-to-point correspondence with the verbal SD."',
      '"Is the same as echoic."',
      '"Is controlled by a nonverbal stimulus."',
    ],
    domain: 'B', category: 'Verbal Behavior',
    taskItem: 'B.19',
  },
  {
    id: 'rr-convergent', term: 'Convergent Control',
    correctDefinition: 'A condition in which a single verbal response is controlled by more than one variable simultaneously (multiple variables → one response).',
    distractors: [
      'A condition in which a single variable controls more than one verbal response.',
      'A condition in which verbal behavior is controlled by both an MO and an SD simultaneously.',
      'A condition in which two speakers produce the same verbal response independently.',
    ],
    misconceptions: [
      '"Is the same as divergent control."',
      '"Means one variable controls multiple responses."',
      '"Weakens the strength of the verbal response."',
    ],
    domain: 'B', category: 'Verbal Behavior',
    taskItem: 'B.20',
  },
  {
    id: 'rr-divergent', term: 'Divergent Control',
    correctDefinition: 'A condition in which a single variable affects more than one verbal response (one variable → multiple responses).',
    distractors: [
      'A condition in which multiple variables control a single verbal response.',
      'A condition in which the speaker\'s verbal behavior diverges from the listener\'s expectations.',
      'A condition in which an MO controls multiple operant classes simultaneously.',
    ],
    misconceptions: [
      '"Is the same as convergent control."',
      '"Means multiple variables control one response."',
      '"Always results in impure verbal operants."',
    ],
    domain: 'B', category: 'Verbal Behavior',
    taskItem: 'B.20',
  },

  // -- Stimulus Control & Measurement ----------------------------------------
  {
    id: 'rr-cond-reinf', term: 'Conditioned Reinforcement',
    correctDefinition: 'A stimulus that has acquired reinforcing function through a history of pairing with other reinforcers (secondary reinforcer).',
    distractors: [
      'A stimulus whose reinforcing value is biologically determined and does not require prior learning.',
      'A stimulus that functions as a reinforcer only under specific motivating operations.',
      'A stimulus that has been conditioned to elicit a respondent behavior.',
    ],
    misconceptions: [
      '"Does not require a learning history."',
      '"Is the same as unconditioned reinforcement."',
      '"Is always a tangible item."',
    ],
    domain: 'B', category: 'Stimulus Control',
    taskItem: 'B.7',
  },
  {
    id: 'rr-uncond-reinf', term: 'Unconditioned Reinforcement',
    correctDefinition: 'A stimulus whose reinforcing value is biologically determined and does not require prior learning (primary reinforcer; e.g., food, water, warmth).',
    distractors: [
      'A stimulus that has acquired reinforcing function through a history of pairing with other reinforcers.',
      'A stimulus that reinforces behavior unconditionally, regardless of the current MO.',
      'A stimulus that functions as a reinforcer under all motivating conditions.',
    ],
    misconceptions: [
      '"Requires a learning history to function as a reinforcer."',
      '"Is always more powerful than conditioned reinforcement."',
      '"Is the same as conditioned reinforcement."',
    ],
    domain: 'B', category: 'Stimulus Control',
    taskItem: 'B.7',
  },
  {
    id: 'rr-eo', term: 'Establishing Operation (EO)',
    correctDefinition: 'A motivating operation that increases the reinforcing effectiveness of a stimulus and increases the current frequency of behavior reinforced by that stimulus.',
    distractors: [
      'A motivating operation that decreases the reinforcing effectiveness of a stimulus.',
      'A stimulus that signals when reinforcement is available for a particular behavior.',
      'An antecedent intervention that establishes a new behavior in the repertoire.',
    ],
    misconceptions: [
      '"Is the same as a discriminative stimulus."',
      '"Decreases the value of a reinforcer."',
      '"Only applies to unconditioned reinforcers."',
    ],
    domain: 'B', category: 'Stimulus Control',
    taskItem: 'B.16',
  },
  {
    id: 'rr-ao', term: 'Abolishing Operation (AO)',
    correctDefinition: 'A motivating operation that decreases the reinforcing effectiveness of a stimulus and decreases the current frequency of behavior reinforced by that stimulus.',
    distractors: [
      'A motivating operation that increases the reinforcing effectiveness of a stimulus.',
      'A procedure that removes a behavior from the individual\'s repertoire.',
      'A stimulus that signals when reinforcement is not available.',
    ],
    misconceptions: [
      '"Is the same as extinction."',
      '"Increases the value of a reinforcer."',
      '"Is the same as an establishing operation."',
    ],
    domain: 'B', category: 'Stimulus Control',
    taskItem: 'B.16',
  },
  {
    id: 'rr-sdelta', term: 'S-Delta (SΔ)',
    correctDefinition: 'A stimulus in the presence of which a behavior has NOT been reinforced; it signals that reinforcement is not currently available.',
    distractors: [
      'A stimulus in the presence of which a behavior has been reinforced.',
      'A stimulus that signals the availability of punishment.',
      'A neutral stimulus that has not been paired with any reinforcer.',
    ],
    misconceptions: [
      '"Is the same as an SD."',
      '"Signals that punishment is available."',
      '"Is a stimulus that has never been present during training."',
    ],
    domain: 'B', category: 'Stimulus Control',
    taskItem: 'B.12',
  },
  {
    id: 'rr-stim-control', term: 'Stimulus Control',
    correctDefinition: 'A condition in which the frequency, latency, duration, or amplitude of a behavior is altered by the presence or absence of an antecedent stimulus.',
    distractors: [
      'The process of teaching a behavior to occur only in the presence of specific stimuli.',
      'The ability of a stimulus to elicit a respondent behavior through conditioning.',
      'The degree to which a behavior is controlled by its consequences.',
    ],
    misconceptions: [
      '"Only refers to the SD."',
      '"Means the stimulus causes the behavior."',
      '"Is the same as stimulus generalization."',
    ],
    domain: 'B', category: 'Stimulus Control',
    taskItem: 'B.12',
  },
  {
    id: 'rr-stim-gen', term: 'Stimulus Generalization',
    correctDefinition: 'The occurrence of a behavior in the presence of stimuli that are similar to but not identical to the training stimulus.',
    distractors: [
      'The occurrence of untrained responses that are functionally similar to the trained response.',
      'The transfer of a behavior from one setting to another through explicit training.',
      'The spread of behavior change across multiple behaviors within the same response class.',
    ],
    misconceptions: [
      '"Is the same as response generalization."',
      '"Only occurs when explicitly programmed."',
      '"Requires the new stimulus to be identical to the training stimulus."',
    ],
    domain: 'B', category: 'Stimulus Control',
    taskItem: 'B.14',
  },
  {
    id: 'rr-resp-gen', term: 'Response Generalization',
    correctDefinition: 'The occurrence of untrained responses that are functionally similar to the trained response when the trained stimulus is presented.',
    distractors: [
      'The occurrence of a trained behavior in the presence of stimuli similar to the training stimulus.',
      'The transfer of a behavior from one setting to another.',
      'The spread of behavior change across multiple settings.',
    ],
    misconceptions: [
      '"Is the same as stimulus generalization."',
      '"Requires explicit training of each response."',
      '"Only occurs across different settings."',
    ],
    domain: 'B', category: 'Stimulus Control',
    taskItem: 'B.14',
  },
  {
    id: 'rr-stim-disc', term: 'Stimulus Discrimination',
    correctDefinition: 'Differential responding to two or more stimuli; responding occurs in the presence of the SD but not in the presence of the SΔ.',
    distractors: [
      'The ability to distinguish between two stimuli based on their physical properties.',
      'A procedure in which different reinforcers are delivered in the presence of different stimuli.',
      'The process of teaching a behavior to occur only in one specific setting.',
    ],
    misconceptions: [
      '"Is the same as stimulus generalization."',
      '"Requires the stimuli to be physically different."',
      '"Is a cognitive process rather than a behavioral one."',
    ],
    domain: 'B', category: 'Stimulus Control',
    taskItem: 'B.13',
  },

  // -- Measurement ------------------------------------------------------------
  {
    id: 'rr-freq-rate', term: 'Frequency/Rate',
    correctDefinition: 'Frequency: number of responses per observation period. Rate: frequency ÷ observation duration; allows comparison across sessions of different lengths.',
    distractors: [
      'The total amount of time a behavior lasts from onset to offset.',
      'The elapsed time from the onset of a stimulus to the initiation of a response.',
      'The elapsed time between the offset of one response and the onset of the next.',
    ],
    misconceptions: [
      '"Rate and frequency are the same measure."',
      '"Rate does not account for observation duration."',
      '"Frequency is the preferred measure for all behaviors."',
    ],
    domain: 'C', category: 'Measurement',
    taskItem: 'C.3',
  },
  {
    id: 'rr-duration', term: 'Duration',
    correctDefinition: 'The total amount of time a behavior lasts from onset to offset.',
    distractors: [
      'The elapsed time from the onset of a stimulus to the initiation of a response.',
      'The elapsed time between the offset of one response and the onset of the next response.',
      'The number of times a behavior occurs during an observation period.',
    ],
    misconceptions: [
      '"Is the same as latency."',
      '"Is the same as interresponse time."',
      '"Is the best measure for all behaviors."',
    ],
    domain: 'C', category: 'Measurement',
    taskItem: 'C.4',
  },
  {
    id: 'rr-latency', term: 'Latency',
    correctDefinition: 'The elapsed time from the onset of a stimulus (SD or instruction) to the initiation of a response.',
    distractors: [
      'The total amount of time a behavior lasts from onset to offset.',
      'The elapsed time between the offset of one response and the onset of the next response.',
      'The time between the end of one trial and the beginning of the next.',
    ],
    misconceptions: [
      '"Is the same as duration."',
      '"Is the same as interresponse time."',
      '"Is measured from the end of the SD to the end of the response."',
    ],
    domain: 'C', category: 'Measurement',
    taskItem: 'C.4',
  },
  {
    id: 'rr-irt', term: 'Interresponse Time (IRT)',
    correctDefinition: 'The elapsed time between the offset of one response and the onset of the next response of the same type.',
    distractors: [
      'The elapsed time from the onset of a stimulus to the initiation of a response.',
      'The total amount of time a behavior lasts from onset to offset.',
      'The time between two consecutive trials in a discrete trial training session.',
    ],
    misconceptions: [
      '"Is the same as latency."',
      '"Is measured from the beginning of one response to the beginning of the next."',
      '"Is the same as duration."',
    ],
    domain: 'C', category: 'Measurement',
    taskItem: 'C.4',
  },
  {
    id: 'rr-partial-interval', term: 'Partial Interval Recording',
    correctDefinition: 'Records whether the behavior occurred at ANY point during the interval; tends to OVERESTIMATE behavior occurrence.',
    distractors: [
      'Records whether the behavior occurred throughout the ENTIRE interval; tends to underestimate behavior.',
      'Records whether the behavior is occurring at the MOMENT the interval ends.',
      'Records the exact number of times the behavior occurs within each interval.',
    ],
    misconceptions: [
      '"Tends to underestimate behavior."',
      '"Is the same as whole interval recording."',
      '"Is the most accurate form of interval recording."',
    ],
    domain: 'C', category: 'Measurement',
    taskItem: 'C.6',
  },
  {
    id: 'rr-whole-interval', term: 'Whole Interval Recording',
    correctDefinition: 'Records whether the behavior occurred throughout the ENTIRE interval; tends to UNDERESTIMATE behavior occurrence.',
    distractors: [
      'Records whether the behavior occurred at any point during the interval; tends to overestimate behavior.',
      'Records whether the behavior is occurring at the moment the interval ends.',
      'Records the total duration of behavior within each interval.',
    ],
    misconceptions: [
      '"Tends to overestimate behavior."',
      '"Is the same as partial interval recording."',
      '"Is best for behaviors with short durations."',
    ],
    domain: 'C', category: 'Measurement',
    taskItem: 'C.6',
  },
  {
    id: 'rr-mts', term: 'Momentary Time Sampling',
    correctDefinition: 'Records whether the behavior is occurring at the MOMENT the interval ends; can over- or underestimate depending on behavior characteristics.',
    distractors: [
      'Records whether the behavior occurred throughout the entire interval.',
      'Records whether the behavior occurred at any point during the interval.',
      'Records the frequency of behavior at randomly selected moments.',
    ],
    misconceptions: [
      '"Always overestimates behavior."',
      '"Is the most accurate form of interval recording."',
      '"Is the same as partial interval recording."',
    ],
    domain: 'C', category: 'Measurement',
    taskItem: 'C.6',
  },
  {
    id: 'rr-ioa', term: 'Interobserver Agreement (IOA)',
    correctDefinition: 'The degree to which two or more independent observers record the same values for the same behavior during the same observation period; an index of measurement reliability.',
    distractors: [
      'The degree to which an intervention is implemented as designed.',
      'The degree to which two observers agree on the function of a behavior.',
      'A measure of how consistently a behavior occurs across observation sessions.',
    ],
    misconceptions: [
      '"Is the same as treatment integrity."',
      '"Measures the validity of the measurement system."',
      '"Is only required for research studies."',
    ],
    domain: 'C', category: 'Measurement',
    taskItem: 'C.8',
  },

  // -- Research Designs -------------------------------------------------------
  {
    id: 'rr-reversal', term: 'Reversal Design (ABAB)',
    correctDefinition: 'A single-case design in which baseline and treatment conditions are alternated; experimental control is demonstrated when behavior changes with each condition change.',
    distractors: [
      'A design in which the intervention is introduced sequentially across behaviors, settings, or subjects.',
      'A design in which two or more conditions are rapidly alternated to compare their effects.',
      'A design in which the criterion for reinforcement is changed systematically.',
    ],
    misconceptions: [
      '"Does not require the behavior to be reversible."',
      '"Is the same as multiple baseline design."',
      '"Can only be used with two conditions."',
    ],
    domain: 'D', category: 'Research Designs',
    taskItem: 'D.7',
  },
  {
    id: 'rr-multiple-baseline', term: 'Multiple Baseline',
    correctDefinition: 'A single-case design in which the intervention is introduced sequentially across two or more behaviors, settings, or subjects; does not require reversal of behavior.',
    distractors: [
      'A design in which baseline and treatment conditions are alternated to demonstrate experimental control.',
      'A design in which two or more conditions are rapidly alternated to compare their effects.',
      'A design in which baseline data are collected intermittently rather than continuously.',
    ],
    misconceptions: [
      '"Requires the behavior to be reversible."',
      '"Is the same as reversal design."',
      '"Requires all tiers to change simultaneously."',
    ],
    domain: 'D', category: 'Research Designs',
    taskItem: 'D.7',
  },
  {
    id: 'rr-changing-criterion', term: 'Changing Criterion Design',
    correctDefinition: 'A single-case design in which the criterion for reinforcement is changed systematically; control is demonstrated when behavior matches each successive criterion.',
    distractors: [
      'A design in which baseline and treatment conditions are alternated.',
      'A design in which the intervention is introduced sequentially across behaviors or settings.',
      'A design in which two or more conditions are rapidly alternated.',
    ],
    misconceptions: [
      '"Requires a reversal phase to demonstrate control."',
      '"Is the same as multiple baseline design."',
      '"Is used to compare two different treatments."',
    ],
    domain: 'D', category: 'Research Designs',
    taskItem: 'D.7',
  },
  {
    id: 'rr-atd', term: 'Alternating Treatments Design',
    correctDefinition: 'A single-case design in which two or more conditions are rapidly alternated to compare their effects on behavior; also called multi-element design.',
    distractors: [
      'A design in which baseline and treatment conditions are alternated sequentially.',
      'A design in which the intervention is introduced sequentially across behaviors or settings.',
      'A design in which the criterion for reinforcement is changed systematically.',
    ],
    misconceptions: [
      '"Is the same as reversal design."',
      '"Requires a baseline phase before each condition."',
      '"Cannot be used to compare more than two conditions."',
    ],
    domain: 'D', category: 'Research Designs',
    taskItem: 'D.7',
  },
  {
    id: 'rr-prediction', term: 'Prediction (Baseline Logic)',
    correctDefinition: 'The first element of baseline logic: the stable baseline data allow prediction of the future course of behavior if the intervention were not introduced.',
    distractors: [
      'The element of baseline logic that rules out extraneous variables by showing behavior did not change without the intervention.',
      'The element of baseline logic that demonstrates the effect can be reproduced.',
      'The process of forecasting behavior change based on the intervention\'s theoretical mechanism.',
    ],
    misconceptions: [
      '"Is demonstrated by the treatment phase, not the baseline."',
      '"Is the same as verification."',
      '"Requires a stable trend in the treatment phase."',
    ],
    domain: 'D', category: 'Research Designs',
    taskItem: 'D.4',
  },
  {
    id: 'rr-verification', term: 'Verification (Baseline Logic)',
    correctDefinition: 'The second element of baseline logic: the return to baseline (or a concurrent baseline) shows that behavior would not have changed without the intervention, ruling out extraneous variables.',
    distractors: [
      'The element of baseline logic that allows prediction of the future course of behavior.',
      'The element of baseline logic that demonstrates the effect can be reproduced.',
      'The process of confirming that the intervention was implemented with fidelity.',
    ],
    misconceptions: [
      '"Is the same as replication."',
      '"Is demonstrated by the treatment phase."',
      '"Is the same as prediction."',
    ],
    domain: 'D', category: 'Research Designs',
    taskItem: 'D.4',
  },
  {
    id: 'rr-replication', term: 'Replication (Baseline Logic)',
    correctDefinition: 'The third element of baseline logic: the effect is reproduced by reintroducing the intervention, strengthening the demonstration of experimental control.',
    distractors: [
      'The element of baseline logic that allows prediction of the future course of behavior.',
      'The element of baseline logic that rules out extraneous variables.',
      'The process of repeating an experiment with different participants to establish generality.',
    ],
    misconceptions: [
      '"Is the same as verification."',
      '"Is demonstrated by the baseline phase."',
      '"Only refers to direct replication across studies."',
    ],
    domain: 'D', category: 'Research Designs',
    taskItem: 'D.4',
  },
  {
    id: 'rr-component', term: 'Component Analysis',
    correctDefinition: 'A research strategy that systematically removes or adds components of a treatment package to identify which components are necessary and sufficient for behavior change.',
    distractors: [
      'A research strategy that compares the effects of two or more complete treatment packages.',
      'A research strategy that varies the value of an independent variable across conditions.',
      'A research strategy that compares a treatment to a no-treatment control condition.',
    ],
    misconceptions: [
      '"Is the same as parametric analysis."',
      '"Compares two complete treatment packages."',
      '"Is used to identify the function of a behavior."',
    ],
    domain: 'D', category: 'Research Designs',
    taskItem: 'D.8',
  },
  {
    id: 'rr-parametric', term: 'Parametric Analysis',
    correctDefinition: 'A research strategy that varies the value (parameter) of an independent variable across conditions to identify the optimal level of the variable.',
    distractors: [
      'A research strategy that systematically removes or adds components of a treatment package.',
      'A research strategy that compares two or more complete treatment packages.',
      'A statistical analysis used to determine the significance of behavior change.',
    ],
    misconceptions: [
      '"Is the same as component analysis."',
      '"Compares two different treatments."',
      '"Uses statistical tests to analyze data."',
    ],
    domain: 'D', category: 'Research Designs',
    taskItem: 'D.8',
  },
  {
    id: 'rr-comparative', term: 'Comparative Analysis',
    correctDefinition: 'A research strategy that compares the effects of two or more complete treatment packages to determine which is more effective.',
    distractors: [
      'A research strategy that systematically removes or adds components of a treatment package.',
      'A research strategy that varies the value of an independent variable across conditions.',
      'A research strategy that compares a treatment to a no-treatment baseline.',
    ],
    misconceptions: [
      '"Is the same as component analysis."',
      '"Is the same as parametric analysis."',
      '"Identifies which components of a treatment are necessary."',
    ],
    domain: 'D', category: 'Research Designs',
    taskItem: 'D.8',
  },
  {
    id: 'rr-treatment-package', term: 'Treatment Package Analysis',
    correctDefinition: 'A research strategy that evaluates the combined effects of multiple treatment components implemented together, before analyzing individual components.',
    distractors: [
      'A research strategy that systematically removes components to identify necessary elements.',
      'A research strategy that compares two complete treatment packages.',
      'A procedure for packaging treatment materials for dissemination.',
    ],
    misconceptions: [
      '"Is the same as component analysis."',
      '"Identifies which components are necessary."',
      '"Is used to compare two different treatments."',
    ],
    domain: 'D', category: 'Research Designs',
    taskItem: 'D.8',
  },

  // -- Assessment -------------------------------------------------------------
  {
    id: 'rr-indirect', term: 'Indirect Assessment',
    correctDefinition: 'An FBA method that gathers information through interviews, rating scales, and questionnaires without direct observation of the behavior.',
    distractors: [
      'An FBA method that involves direct observation of behavior in the natural environment.',
      'An FBA method that involves systematic manipulation of antecedents and consequences.',
      'An assessment conducted by someone other than the BCBA.',
    ],
    misconceptions: [
      '"Is the most rigorous form of FBA."',
      '"Involves direct observation of the behavior."',
      '"Is sufficient as the sole basis for a function-based intervention."',
    ],
    domain: 'F', category: 'Assessment',
    taskItem: 'F.1',
  },
  {
    id: 'rr-descriptive', term: 'Descriptive Assessment',
    correctDefinition: 'An FBA method that involves direct observation of behavior in the natural environment, recording antecedents and consequences as they naturally occur.',
    distractors: [
      'An FBA method that gathers information through interviews and questionnaires.',
      'An FBA method that involves systematic manipulation of antecedents and consequences.',
      'An assessment that describes the topography of a behavior without identifying its function.',
    ],
    misconceptions: [
      '"Is the most rigorous form of FBA."',
      '"Involves manipulation of environmental variables."',
      '"Is sufficient to confirm a functional relationship."',
    ],
    domain: 'F', category: 'Assessment',
    taskItem: 'F.5',
  },
  {
    id: 'rr-fa', term: 'Functional Analysis',
    correctDefinition: 'An FBA method that involves systematic manipulation of antecedent and consequence variables to experimentally identify the function(s) of a behavior; the most rigorous method.',
    distractors: [
      'An FBA method that involves direct observation of behavior in the natural environment.',
      'An FBA method that gathers information through interviews and questionnaires.',
      'An analysis of the function of a behavior based on indirect information.',
    ],
    misconceptions: [
      '"Is the same as descriptive assessment."',
      '"Does not require manipulation of variables."',
      '"Is less rigorous than descriptive assessment."',
    ],
    domain: 'F', category: 'Assessment',
    taskItem: 'F.6',
  },
  {
    id: 'rr-preference', term: 'Preference Assessment',
    correctDefinition: 'A systematic procedure for identifying stimuli that may function as reinforcers for an individual, prior to implementing a reinforcement-based intervention.',
    distractors: [
      'A procedure for identifying the function of a problem behavior.',
      'An assessment of the individual\'s preferred learning style.',
      'A survey completed by caregivers to identify the individual\'s favorite activities.',
    ],
    misconceptions: [
      '"Confirms that a stimulus will function as a reinforcer."',
      '"Is the same as a reinforcer assessment."',
      '"Only uses caregiver report."',
    ],
    domain: 'F', category: 'Assessment',
    taskItem: 'F.4',
  },
  {
    id: 'rr-topo-def', term: 'Topography-Based Definition',
    correctDefinition: 'A behavior definition that describes what the behavior looks like (its physical form), without reference to its function or effect on the environment.',
    distractors: [
      'A behavior definition that describes the behavior in terms of its effect on the environment.',
      'A behavior definition that includes both the form and function of the behavior.',
      'A behavior definition based on the setting in which the behavior occurs.',
    ],
    misconceptions: [
      '"Is the same as a function-based definition."',
      '"Describes the purpose or function of the behavior."',
      '"Is always preferred over function-based definitions."',
    ],
    domain: 'F', category: 'Assessment',
    taskItem: 'C.1',
  },
  {
    id: 'rr-func-def', term: 'Function-Based Definition',
    correctDefinition: 'A behavior definition that describes the behavior in terms of its effect on the environment or its function, rather than its physical form.',
    distractors: [
      'A behavior definition that describes what the behavior looks like.',
      'A behavior definition based on the results of a functional analysis.',
      'A behavior definition that includes both the form and the function of the behavior.',
    ],
    misconceptions: [
      '"Is the same as a topography-based definition."',
      '"Describes the physical form of the behavior."',
      '"Can only be written after a functional analysis is complete."',
    ],
    domain: 'F', category: 'Assessment',
    taskItem: 'C.1',
  },
  {
    id: 'rr-abc-narrative', term: 'ABC Narrative Recording',
    correctDefinition: 'A descriptive assessment method in which an observer records antecedents, behaviors, and consequences as they occur in sequence, in narrative form.',
    distractors: [
      'A method in which the frequency of antecedents, behaviors, and consequences is tallied.',
      'A method in which behavior is recorded on a scatter plot organized by time of day.',
      'A method in which the observer records only the consequences following a behavior.',
    ],
    misconceptions: [
      '"Involves manipulation of antecedents and consequences."',
      '"Is the same as a functional analysis."',
      '"Only records the behavior, not antecedents and consequences."',
    ],
    domain: 'F', category: 'Assessment',
    taskItem: 'C.2',
  },
  {
    id: 'rr-abc-continuous', term: 'ABC Continuous Recording',
    correctDefinition: 'A descriptive assessment method in which every instance of the target behavior and its antecedents and consequences are recorded continuously throughout the observation period.',
    distractors: [
      'A method in which antecedents, behaviors, and consequences are recorded in narrative form.',
      'A method in which behavior is sampled at intervals rather than recorded continuously.',
      'A method in which only the most frequent antecedents and consequences are recorded.',
    ],
    misconceptions: [
      '"Is the same as ABC narrative recording."',
      '"Only records behavior, not antecedents and consequences."',
      '"Is a form of interval recording."',
    ],
    domain: 'F', category: 'Assessment',
    taskItem: 'C.2',
  },
  {
    id: 'rr-scatter', term: 'Scatter Plot Assessment',
    correctDefinition: 'A descriptive assessment tool that displays the time of day and day of week when a behavior occurs, helping identify temporal patterns and potential antecedent conditions.',
    distractors: [
      'A method in which antecedents, behaviors, and consequences are recorded in sequence.',
      'A graph that displays the relationship between two variables using individual data points.',
      'A method for recording the frequency of behavior across multiple settings simultaneously.',
    ],
    misconceptions: [
      '"Is a form of continuous measurement."',
      '"Identifies the function of a behavior."',
      '"Is the same as ABC recording."',
    ],
    domain: 'F', category: 'Assessment',
    taskItem: 'F.5',
  },
  {
    id: 'rr-habituation', term: 'Habituation',
    correctDefinition: 'A decrease in responding to a stimulus following repeated presentations of that stimulus; a form of respondent behavior change that does not involve conditioning.',
    distractors: [
      'A decrease in responding that occurs when a conditioned stimulus is presented without the unconditioned stimulus.',
      'A decrease in responding due to satiation of a reinforcer.',
      'A decrease in responding due to the implementation of extinction.',
    ],
    misconceptions: [
      '"Is the same as respondent extinction."',
      '"Is a form of operant extinction."',
      '"Requires prior conditioning to occur."',
    ],
    domain: 'F', category: 'Assessment',
    taskItem: 'B.3',
  },
  {
    id: 'rr-respondent-extinction', term: 'Respondent Extinction',
    correctDefinition: 'A procedure in which a conditioned stimulus (CS) is repeatedly presented without the unconditioned stimulus (US), resulting in a decrease in the conditioned response (CR).',
    distractors: [
      'A decrease in responding to a stimulus following repeated presentations without conditioning.',
      'The discontinuation of a reinforcement contingency that previously maintained an operant behavior.',
      'A procedure in which a CS is paired with a new US to change the conditioned response.',
    ],
    misconceptions: [
      '"Is the same as habituation."',
      '"Is a form of operant extinction."',
      '"Involves the discontinuation of reinforcement."',
    ],
    domain: 'F', category: 'Assessment',
    taskItem: 'B.11',
  },
  {
    id: 'rr-stim-class', term: 'Stimulus Class',
    correctDefinition: 'A group of stimuli that share common elements (formal, temporal, or functional) and evoke the same response or are treated similarly by an organism.',
    distractors: [
      'A group of responses that produce the same effect on the environment.',
      'A group of stimuli that are physically identical to each other.',
      'A category of stimuli used in a discrimination training procedure.',
    ],
    misconceptions: [
      '"Is the same as response class."',
      '"Only includes stimuli that are physically similar."',
      '"Is defined by the topography of the stimuli."',
    ],
    domain: 'F', category: 'Assessment',
    taskItem: 'B.2',
  },
  {
    id: 'rr-resp-class', term: 'Response Class',
    correctDefinition: 'A group of responses that, despite differing in topography, all produce the same effect on the environment and are maintained by the same reinforcer.',
    distractors: [
      'A group of stimuli that share common elements and evoke the same response.',
      'A group of responses that are physically similar in form.',
      'A category of responses that occur in the same setting.',
    ],
    misconceptions: [
      '"Is the same as stimulus class."',
      '"Requires all responses to have the same topography."',
      '"Is defined by the setting in which responses occur."',
    ],
    domain: 'F', category: 'Assessment',
    taskItem: 'B.1',
  },

  // -- Behavior-Change Procedures ---------------------------------------------
  {
    id: 'rr-shaping', term: 'Shaping',
    correctDefinition: 'The differential reinforcement of successive approximations to a target behavior; reinforcement is delivered for responses that progressively resemble the terminal behavior.',
    distractors: [
      'A procedure for teaching a sequence of behaviors in which each step serves as an SD for the next.',
      'A procedure in which prompts are gradually removed to transfer stimulus control.',
      'A procedure in which reinforcement is delivered for behaviors that are physically incompatible with the problem behavior.',
    ],
    misconceptions: [
      '"Is the same as chaining."',
      '"Involves teaching a sequence of behaviors."',
      '"Requires the terminal behavior to already be in the repertoire."',
    ],
    domain: 'G', category: 'Behavior-Change Procedures',
    taskItem: 'G.11',
  },
  {
    id: 'rr-chaining', term: 'Chaining (Forward/Backward)',
    correctDefinition: 'A procedure for teaching a behavior chain in which each step serves as an SD for the next step and as a conditioned reinforcer for the preceding step. Forward chaining teaches from the first step; backward chaining teaches from the last step.',
    distractors: [
      'A procedure in which successive approximations to a target behavior are reinforced.',
      'A procedure in which prompts are gradually removed to transfer stimulus control.',
      'A procedure in which a complex behavior is broken into components and each is taught separately.',
    ],
    misconceptions: [
      '"Is the same as shaping."',
      '"Involves reinforcing successive approximations."',
      '"Backward chaining is less effective than forward chaining."',
    ],
    domain: 'G', category: 'Behavior-Change Procedures',
    taskItem: 'G.12',
  },
  {
    id: 'rr-prompting', term: 'Prompting',
    correctDefinition: 'Supplementary antecedent stimuli that increase the probability that a correct response will occur; used to teach new behaviors.',
    distractors: [
      'The gradual removal of supplementary stimuli to transfer stimulus control to the natural SD.',
      'A consequence delivered after a correct response to increase its future frequency.',
      'An antecedent modification that reduces the likelihood of problem behavior.',
    ],
    misconceptions: [
      '"Is the same as fading."',
      '"Is a consequence-based procedure."',
      '"Should be maintained indefinitely to ensure correct responding."',
    ],
    domain: 'G', category: 'Behavior-Change Procedures',
    taskItem: 'G.7',
  },
  {
    id: 'rr-fading', term: 'Fading',
    correctDefinition: 'The gradual removal of prompts across trials so that the behavior comes under the control of the natural SD rather than the prompt.',
    distractors: [
      'The gradual introduction of prompts to increase the probability of correct responding.',
      'The gradual reduction of reinforcement density to promote maintenance.',
      'The gradual increase in task difficulty across sessions.',
    ],
    misconceptions: [
      '"Is the same as prompting."',
      '"Involves adding prompts over time."',
      '"Is used to reduce the frequency of a behavior."',
    ],
    domain: 'G', category: 'Behavior-Change Procedures',
    taskItem: 'G.8',
  },
  {
    id: 'rr-task-analysis', term: 'Task Analysis',
    correctDefinition: 'The process of breaking a complex behavior chain into its component steps; used to teach chained behaviors systematically.',
    distractors: [
      'An analysis of the antecedents and consequences maintaining a behavior.',
      'A procedure for identifying the function of a problem behavior.',
      'An assessment of the individual\'s current skill level across task domains.',
    ],
    misconceptions: [
      '"Is the same as functional behavior assessment."',
      '"Identifies the function of a behavior."',
      '"Is only used for academic tasks."',
    ],
    domain: 'G', category: 'Behavior-Change Procedures',
    taskItem: 'G.12',
  },

  // -- Dimensions of ABA ------------------------------------------------------
  {
    id: 'rr-applied', term: 'Applied (Dimension of ABA)',
    correctDefinition: 'The behavior, stimuli, and/or organism under study are chosen because of their importance to society; the focus is on socially significant behavior.',
    distractors: [
      'The behavior is described and measured in observable, quantifiable terms.',
      'The procedures are described with sufficient detail to allow replication.',
      'The behavior change is shown to be a function of the intervention.',
    ],
    misconceptions: [
      '"Refers to the use of applied statistical methods."',
      '"Means the procedures are practical and easy to implement."',
      '"Is the same as the \'effective\' dimension."',
    ],
    domain: 'A', category: 'Dimensions of ABA',
    taskItem: 'A.5',
  },
  {
    id: 'rr-behavioral', term: 'Behavioral (Dimension of ABA)',
    correctDefinition: 'The behavior under study is observable and measurable; the focus is on what the individual does, not inferred internal states.',
    distractors: [
      'The behavior change is important to society.',
      'The procedures are described with sufficient detail to allow replication.',
      'The behavior change is shown to be a function of the intervention.',
    ],
    misconceptions: [
      '"Means the study focuses on behavioral disorders."',
      '"Refers to the use of behavioral theory."',
      '"Is the same as the \'analytic\' dimension."',
    ],
    domain: 'A', category: 'Dimensions of ABA',
    taskItem: 'A.5',
  },
  {
    id: 'rr-analytic', term: 'Analytic (Dimension of ABA)',
    correctDefinition: 'The practitioner demonstrates a functional relationship between the intervention (IV) and the behavior change (DV) through experimental control.',
    distractors: [
      'The behavior under study is observable and measurable.',
      'The procedures are described with sufficient detail to allow replication.',
      'The behavior change is important to society.',
    ],
    misconceptions: [
      '"Refers to the use of statistical analysis."',
      '"Means the practitioner analyzes the behavior\'s function."',
      '"Is the same as the \'technological\' dimension."',
    ],
    domain: 'A', category: 'Dimensions of ABA',
    taskItem: 'A.5',
  },
  {
    id: 'rr-technological', term: 'Technological (Dimension of ABA)',
    correctDefinition: 'The procedures are described completely and clearly enough that a trained reader could replicate them without additional information.',
    distractors: [
      'The behavior change is shown to be a function of the intervention.',
      'The procedures use technology-based tools and devices.',
      'The behavior change is important to society.',
    ],
    misconceptions: [
      '"Requires the use of technology or devices."',
      '"Is the same as the \'analytic\' dimension."',
      '"Means the procedures are evidence-based."',
    ],
    domain: 'A', category: 'Dimensions of ABA',
    taskItem: 'A.5',
  },
  {
    id: 'rr-conceptually-systematic', term: 'Conceptually Systematic (Dimension of ABA)',
    correctDefinition: 'The procedures are described using the concepts and principles of behavior analysis, and are derived from established behavioral theory.',
    distractors: [
      'The procedures are described with sufficient detail to allow replication.',
      'The behavior change is shown to be a function of the intervention.',
      'The behavior change is important to society.',
    ],
    misconceptions: [
      '"Is the same as the \'technological\' dimension."',
      '"Means the procedures are systematic and organized."',
      '"Requires the use of a specific theoretical framework."',
    ],
    domain: 'A', category: 'Dimensions of ABA',
    taskItem: 'A.5',
  },
  {
    id: 'rr-effective', term: 'Effective (Dimension of ABA)',
    correctDefinition: 'The intervention produces a practical, meaningful change in the behavior  -  not merely a statistically significant one.',
    distractors: [
      'The behavior change is shown to be a function of the intervention.',
      'The behavior change is important to society.',
      'The procedures are described with sufficient detail to allow replication.',
    ],
    misconceptions: [
      '"Is the same as the \'analytic\' dimension."',
      '"Means the intervention produces a statistically significant change."',
      '"Requires a control group to demonstrate effectiveness."',
    ],
    domain: 'A', category: 'Dimensions of ABA',
    taskItem: 'A.5',
  },
  {
    id: 'rr-generality', term: 'Generality (Dimension of ABA)',
    correctDefinition: 'The behavior change persists over time, appears in environments other than the training environment, and/or spreads to other behaviors.',
    distractors: [
      'The procedures can be generalized to other populations.',
      'The behavior change is important to society.',
      'The procedures are described with sufficient detail to allow replication.',
    ],
    misconceptions: [
      '"Is the same as stimulus generalization."',
      '"Only refers to generalization across settings."',
      '"Is the same as the \'effective\' dimension."',
    ],
    domain: 'A', category: 'Dimensions of ABA',
    taskItem: 'A.5',
  },

  // -- Domain A: Behaviorism & Philosophical Foundations ---------------------
  {
    id: 'rr-selectionism', term: 'Selectionism',
    correctDefinition: 'The philosophical assumption that behavior is selected by its consequences over time, analogous to natural selection in biology; past consequences determine which behaviors are maintained.',
    distractors: [
      'The view that mental states and intentions are the primary causes of behavior.',
      'The assumption that all behavior is determined by genetic factors alone.',
      'The principle that behavior is best explained by identifying its topography.',
    ],
    misconceptions: [
      '"Selectionism means behavior is chosen consciously by the individual."',
      '"Selectionism only applies to species-level evolution, not individual behavior."',
      '"Selectionism is the same as determinism."',
    ],
    domain: 'A', category: 'Philosophical Foundations',
    taskItem: 'A.2',
  },
  {
    id: 'rr-determinism', term: 'Determinism',
    correctDefinition: 'The philosophical assumption that behavior is lawfully caused by prior environmental and biological events; behavior is not random or freely chosen.',
    distractors: [
      'The view that behavior is shaped by reinforcement history alone, without biological influence.',
      'The assumption that organisms freely choose their behavior based on internal states.',
      'The principle that behavior can only be predicted, not controlled.',
    ],
    misconceptions: [
      '"Determinism means the future is fixed and intervention is pointless."',
      '"Determinism denies the role of learning history."',
      '"Determinism is the same as fatalism."',
    ],
    domain: 'A', category: 'Philosophical Foundations',
    taskItem: 'A.2',
  },
  {
    id: 'rr-empiricism', term: 'Empiricism',
    correctDefinition: 'The philosophical assumption that knowledge is derived from direct observation and measurement of events in the natural world, not from intuition or authority.',
    distractors: [
      'The assumption that behavior is best understood through logical reasoning and theory alone.',
      'The view that internal mental states are the most valid source of behavioral data.',
      'The principle that expert consensus determines what counts as valid knowledge.',
    ],
    misconceptions: [
      '"Empiricism means only quantitative data is acceptable."',
      '"Empiricism rejects all theoretical frameworks."',
      '"Empiricism is the same as positivism."',
    ],
    domain: 'A', category: 'Philosophical Foundations',
    taskItem: 'A.2',
  },
  {
    id: 'rr-parsimony', term: 'Parsimony',
    correctDefinition: 'The philosophical assumption that the simplest, most straightforward explanation consistent with the data should be preferred before invoking more complex or hypothetical explanations.',
    distractors: [
      'The assumption that the most detailed explanation is always the most accurate.',
      'The principle that multiple explanations should always be considered simultaneously.',
      'The view that complex neurological explanations are preferred over behavioral ones.',
    ],
    misconceptions: [
      '"Parsimony means ignoring biological factors entirely."',
      '"Parsimony requires using the fewest words, not the fewest assumptions."',
      '"Parsimony is the same as reductionism."',
    ],
    domain: 'A', category: 'Philosophical Foundations',
    taskItem: 'A.2',
  },
  {
    id: 'rr-pragmatism', term: 'Pragmatism',
    correctDefinition: 'The philosophical assumption that the value of a concept or procedure is judged by its practical utility  -  whether it works to produce meaningful behavior change.',
    distractors: [
      'The view that theoretical elegance is the primary criterion for evaluating procedures.',
      'The assumption that procedures must be derived from basic research before being applied.',
      'The principle that social acceptability determines whether a procedure is valid.',
    ],
    misconceptions: [
      '"Pragmatism means anything goes as long as it works."',
      '"Pragmatism ignores ethical considerations."',
      '"Pragmatism is the same as eclecticism."',
    ],
    domain: 'A', category: 'Philosophical Foundations',
    taskItem: 'A.2',
  },
  {
    id: 'rr-radical-behaviorism', term: 'Radical Behaviorism',
    correctDefinition: 'Skinner\'s philosophy of behavioral science that includes private events (thoughts, feelings) as behavior subject to the same laws as overt behavior, without invoking mentalistic explanations.',
    distractors: [
      'A philosophy that denies the existence of private events and focuses only on observable behavior.',
      'A philosophy that explains behavior primarily through cognitive mediating processes.',
      'A philosophy that views behavior as determined entirely by genetic predispositions.',
    ],
    misconceptions: [
      '"Radical behaviorism ignores thoughts and feelings entirely."',
      '"Radical behaviorism is the same as methodological behaviorism."',
      '"Radical behaviorism denies that private events influence behavior."',
    ],
    domain: 'A', category: 'Philosophical Foundations',
    taskItem: 'A.3',
  },
  {
    id: 'rr-methodological-behaviorism', term: 'Methodological Behaviorism',
    correctDefinition: 'A philosophy of behavioral science that restricts scientific study to publicly observable events and excludes private events from analysis because they cannot be directly observed.',
    distractors: [
      'A philosophy that includes private events as legitimate subject matter of behavioral science.',
      'A philosophy that focuses on the neurological substrates of behavior.',
      'A philosophy that uses only experimental methods to study behavior.',
    ],
    misconceptions: [
      '"Methodological behaviorism is the same as radical behaviorism."',
      '"Methodological behaviorism accepts private events as data if self-reported."',
      '"Methodological behaviorism is the dominant philosophy in ABA."',
    ],
    domain: 'A', category: 'Philosophical Foundations',
    taskItem: 'A.3',
  },


  // -- Domain A: New Terms (a19-a38) -----------------------------------------
  {
    id: 'rr-experimentation', term: 'Experimentation',
    correctDefinition: 'A scientific method in which one or more independent variables are systematically manipulated while measuring the effect on a dependent variable under controlled conditions, to establish a cause-and-effect relationship.',
    distractors: [
      'The process of observing and recording behavior as it naturally occurs without manipulating any variables.',
      'A method of gathering information about behavior through interviews and questionnaires.',
      'The systematic comparison of two groups using statistical tests to identify differences.',
    ],
    misconceptions: [
      '"Experimentation is the same as observation."',
      '"Experimentation requires large groups of participants to be valid."',
      '"Any procedure that produces behavior change counts as an experiment."',
    ],
    domain: 'A', category: 'Scientific Methods',
    taskItem: 'A.1',
  },
  {
    id: 'rr-experimentation-purpose', term: 'Experimentation - Purpose in ABA',
    correctDefinition: 'In applied behavior analysis, experimentation is used to identify the specific environmental variables responsible for behavior change by demonstrating a functional relationship between the independent and dependent variable.',
    distractors: [
      'In ABA, experimentation is used primarily to compare the effectiveness of different treatment packages across large populations.',
      'In ABA, experimentation is used to confirm theoretical models of behavior derived from cognitive science.',
      'In ABA, experimentation is used to establish normative baselines for comparing individual client performance.',
    ],
    misconceptions: [
      '"Experimentation in ABA always requires a control group."',
      '"Experimentation in ABA is only conducted in laboratory settings."',
      '"Experimentation in ABA is optional if the intervention is evidence-based."',
    ],
    domain: 'A', category: 'Scientific Methods',
    taskItem: 'A.1',
  },
  {
    id: 'rr-replication', term: 'Replication',
    correctDefinition: 'The repetition of an experiment or its findings, either within the same study across participants or conditions (direct replication) or across different subjects, settings, or experimenters (systematic replication), to establish reliability and generality.',
    distractors: [
      'The process of applying a previously validated intervention to a new client without collecting new data.',
      'The statistical technique of running the same analysis on a dataset multiple times to confirm the result.',
      'The practice of using the same measurement instrument across multiple assessment sessions.',
    ],
    misconceptions: [
      '"Replication means repeating the exact same study with no changes."',
      '"Systematic replication weakens the original finding by introducing variability."',
      '"Replication is only necessary when the original study had methodological flaws."',
    ],
    domain: 'A', category: 'Scientific Methods',
    taskItem: 'A.1',
  },
  {
    id: 'rr-replication-types', term: 'Direct vs. Systematic Replication',
    correctDefinition: 'Direct replication repeats the original experiment as closely as possible to confirm reliability. Systematic replication introduces planned variations in participants, settings, or procedures to test the generality of the finding.',
    distractors: [
      'Direct replication introduces new variables to extend the finding; systematic replication reproduces the original study exactly.',
      'Direct replication uses a different dependent variable; systematic replication uses the same dependent variable across new settings.',
      'Direct and systematic replication are interchangeable terms referring to the same process.',
    ],
    misconceptions: [
      '"Systematic replication is more rigorous than direct replication."',
      '"Direct replication is only done in basic research, not in ABA."',
      '"Systematic replication invalidates the original finding if results differ."',
    ],
    domain: 'A', category: 'Scientific Methods',
    taskItem: 'A.1',
  },
  {
    id: 'rr-philosophical-doubt', term: 'Philosophical Doubt',
    correctDefinition: 'The scientific attitude of treating all currently accepted knowledge as tentative and subject to revision in light of new evidence; a commitment to questioning assumptions and remaining open to disconfirming data.',
    distractors: [
      "The ethical obligation to question a client's self-report before accepting it as accurate.",
      'The practice of withholding a clinical decision until a second opinion has been obtained.',
      'The requirement to conduct a literature review before implementing any new procedure.',
    ],
    misconceptions: [
      '"Philosophical doubt means a BCBA should never trust established research."',
      '"Philosophical doubt is the same as skepticism about the client\'s progress."',
      '"Philosophical doubt requires abandoning an intervention whenever data are variable."',
    ],
    domain: 'A', category: 'Philosophical Foundations',
    taskItem: 'A.2',
  },
  {
    id: 'rr-philosophical-doubt-applied', term: 'Philosophical Doubt - Clinical Application',
    correctDefinition: 'In practice, philosophical doubt means a BCBA continues to monitor data critically even when an intervention appears to be working, remains open to revising the behavior support plan if new evidence warrants it, and does not defend a procedure simply because it has been used before.',
    distractors: [
      'In practice, philosophical doubt means a BCBA must obtain peer review approval before implementing any procedure.',
      'In practice, philosophical doubt means a BCBA avoids using any procedure that has not been replicated in at least five published studies.',
      'In practice, philosophical doubt means a BCBA changes the intervention whenever data show any variability.',
    ],
    misconceptions: [
      '"Philosophical doubt requires changing interventions frequently to test alternatives."',
      '"Philosophical doubt is incompatible with using evidence-based practices."',
      '"Philosophical doubt only applies to new or experimental procedures."',
    ],
    domain: 'A', category: 'Philosophical Foundations',
    taskItem: 'A.2',
  },
  {
    id: 'rr-description-goal', term: 'Description (Goal of Science)',
    correctDefinition: 'The first goal of a natural science: the systematic and objective recording of the relationship between behavior and environmental events, producing an accurate account of what occurs and under what conditions, without inferring causation.',
    distractors: [
      'The ability to specify in advance the likelihood that a behavior will occur given particular environmental conditions.',
      'The ability to produce or prevent a behavior by manipulating the environmental variables that control it.',
      'The process of generating hypotheses about the function of behavior based on theoretical models.',
    ],
    misconceptions: [
      '"Description is the least important goal of science because it does not prove causation."',
      '"Description requires experimental manipulation to be scientifically valid."',
      '"Description is the same as diagnosis."',
    ],
    domain: 'A', category: 'Goals of Science',
    taskItem: 'A.1',
  },
  {
    id: 'rr-prediction-goal', term: 'Prediction (Goal of Science)',
    correctDefinition: 'The second goal of a natural science: the ability to specify, in advance, the likelihood that a behavior will occur given the presence of particular environmental conditions, based on an established descriptive or functional relationship.',
    distractors: [
      'The systematic recording of behavior and environmental events to produce an accurate account of what occurs.',
      'The ability to produce or prevent a behavior by systematically manipulating the environmental variables that control it.',
      'The process of identifying the reinforcing consequences that maintain a target behavior.',
    ],
    misconceptions: [
      '"Prediction requires experimental manipulation of the independent variable."',
      '"Prediction is the same as control because both involve knowing what will happen."',
      '"Prediction is only possible after a functional analysis has been completed."',
    ],
    domain: 'A', category: 'Goals of Science',
    taskItem: 'A.1',
  },
  {
    id: 'rr-control-goal', term: 'Control (Goal of Science)',
    correctDefinition: 'The third and highest goal of a natural science: the ability to produce or prevent a behavior by systematically manipulating the environmental variables identified through description and prediction, thereby demonstrating a functional (cause-and-effect) relationship.',
    distractors: [
      'The systematic recording of behavior and environmental events to produce an accurate account of what occurs.',
      'The ability to specify in advance the likelihood that a behavior will occur given particular environmental conditions.',
      "The ethical obligation to manage a client's environment to prevent harm.",
    ],
    misconceptions: [
      '"Control means physically restraining or managing a client\'s behavior."',
      '"Control is achieved whenever an intervention reduces problem behavior."',
      '"Control requires a between-groups experimental design."',
    ],
    domain: 'A', category: 'Goals of Science',
    taskItem: 'A.1',
  },
  {
    id: 'rr-goals-science-order', term: 'Order of the Three Goals of Science',
    correctDefinition: 'The three goals of a natural science progress from (1) Description to (2) Prediction to (3) Control, with each level building on the prior: description establishes what occurs, prediction identifies reliable antecedents, and control demonstrates cause-and-effect.',
    distractors: [
      'The three goals progress from Prediction to Description to Control.',
      'The three goals progress from Control to Prediction to Description.',
      'The three goals are independent and do not build on one another in a fixed sequence.',
    ],
    misconceptions: [
      '"Control can be demonstrated without first establishing description and prediction."',
      '"Prediction is the highest goal because it shows the most scientific rigor."',
      '"Description is not a true scientific goal because it does not involve manipulation."',
    ],
    domain: 'A', category: 'Goals of Science',
    taskItem: 'A.1',
  },
  {
    id: 'rr-private-event', term: 'Private Event',
    correctDefinition: 'Any stimulus or response that occurs within the skin of an organism and is not directly observable by others; in radical behaviorism, these are treated as real behaviors subject to the same lawful relationships as publicly observable responses, not as causes of overt behavior.',
    distractors: [
      'Any behavior that occurs in a private setting, such as a therapy room, rather than in a public environment.',
      'A hypothetical internal state that mediates between environmental stimuli and overt responses.',
      'A behavior that is excluded from scientific analysis because it cannot be directly measured.',
    ],
    misconceptions: [
      '"Private events cause overt behavior in radical behaviorism."',
      '"Private events are ignored by behavior analysts because they cannot be observed."',
      '"Private events are the same as mentalistic constructs."',
    ],
    domain: 'A', category: 'Philosophical Foundations',
    taskItem: 'A.3',
  },
  {
    id: 'rr-overt-behavior', term: 'Overt Behavior',
    correctDefinition: 'Any action of an organism that is publicly observable and directly measurable by an external observer without special instrumentation.',
    distractors: [
      'Any behavior that occurs in a public setting and is therefore subject to social reinforcement.',
      'Any behavior that is targeted for change in a behavior support plan.',
      'Any behavior that can be directly elicited by an antecedent stimulus.',
    ],
    misconceptions: [
      '"Overt behavior is more important than covert behavior in ABA."',
      '"Overt behavior is the only legitimate subject matter of radical behaviorism."',
      '"Overt behavior must be high-frequency to be measurable."',
    ],
    domain: 'A', category: 'Philosophical Foundations',
    taskItem: 'A.3',
  },
  {
    id: 'rr-covert-behavior', term: 'Covert Behavior',
    correctDefinition: "Any action of an organism that occurs at a level of intensity too small to be observed by others, or that takes place entirely within the organism's skin; treated in radical behaviorism as real behavior governed by the same principles as overt behavior.",
    distractors: [
      'Any behavior that a client deliberately conceals from the therapist during a session.',
      'A hypothetical internal state that mediates between antecedent stimuli and overt responses.',
      'Any behavior that occurs in the absence of an observer and is therefore not subject to social contingencies.',
    ],
    misconceptions: [
      '"Covert behavior is the same as a mentalistic construct."',
      '"Covert behavior is excluded from the subject matter of radical behaviorism."',
      '"Covert behavior causes overt behavior in the same way that thoughts cause actions."',
    ],
    domain: 'A', category: 'Philosophical Foundations',
    taskItem: 'A.3',
  },
  {
    id: 'rr-behaviorism-philosophy', term: 'Behaviorism (Philosophy)',
    correctDefinition: 'The philosophy of science that defines behavior as the proper subject matter of psychology and holds that a complete account of behavior can be achieved by identifying the environmental variables that control it, without invoking unobservable mental entities as explanatory causes.',
    distractors: [
      'A therapeutic approach that uses reinforcement and punishment to modify maladaptive behavior patterns.',
      'The branch of psychology that studies the neurological substrates of learning and behavior.',
      'A philosophy that holds that all behavior is genetically determined and cannot be modified by environmental events.',
    ],
    misconceptions: [
      '"Behaviorism denies that thoughts and feelings exist."',
      '"Behaviorism is the same as applied behavior analysis."',
      '"Behaviorism holds that behavior is random and unpredictable."',
    ],
    domain: 'A', category: 'Levels of Behavioral Science',
    taskItem: 'A.4',
  },
  {
    id: 'rr-eab', term: 'Experimental Analysis of Behavior (EAB)',
    correctDefinition: 'The basic science of behavior that uses controlled laboratory methods with individual organisms under precisely arranged contingencies to identify the fundamental principles governing relationships between behavior and environmental variables; the scientific foundation of applied behavior analysis.',
    distractors: [
      'The applied science that uses behavioral principles to produce socially significant improvements in human behavior.',
      'The service delivery context in which credentialed behavior analysts apply behavioral procedures to individual clients.',
      'The branch of psychology that uses group experimental designs to identify effective treatments for clinical populations.',
    ],
    misconceptions: [
      '"EAB is the same as ABA."',
      '"EAB findings from animal research do not apply to human behavior."',
      '"EAB is only relevant to basic researchers, not to practicing BCBAs."',
    ],
    domain: 'A', category: 'Levels of Behavioral Science',
    taskItem: 'A.4',
  },
  {
    id: 'rr-four-levels-hierarchy', term: 'Four Levels: Behaviorism, EAB, ABA, Professional Practice',
    correctDefinition: 'Behaviorism is the philosophy; EAB is the basic science that identifies principles; ABA is the applied science that uses those principles to produce socially significant change; professional practice is the service delivery context in which BCBAs apply ABA under ethical and regulatory constraints.',
    distractors: [
      'EAB is the philosophy; behaviorism is the basic science; ABA is the applied science; professional practice is the regulatory framework.',
      'ABA is the philosophy; EAB is the applied science; behaviorism is the basic science; professional practice is the ethical framework.',
      'Professional practice is the philosophy; ABA is the basic science; EAB is the applied science; behaviorism is the regulatory framework.',
    ],
    misconceptions: [
      '"Behaviorism and ABA are at the same level of the hierarchy."',
      '"EAB findings must be directly replicated in applied settings before they can be used in ABA."',
      '"Professional practice is more scientific than ABA because it involves real-world clients."',
    ],
    domain: 'A', category: 'Levels of Behavioral Science',
    taskItem: 'A.4',
  },
  {
    id: 'rr-behavioral-dim', term: 'Behavioral (Dimension of ABA)',
    correctDefinition: 'The dimension of ABA requiring that the subject matter be a directly measurable aspect of the behavior of interest - the behavior itself must be observed and quantified, not inferred from a test score, rating, or construct.',
    distractors: [
      'The dimension of ABA requiring that procedures be described with sufficient precision that any trained practitioner could implement them accurately.',
      'The dimension of ABA requiring that the behaviors targeted for change be of demonstrable importance to the individual or society.',
      'The dimension of ABA requiring that a functional relationship between the intervention and behavior change be demonstrated.',
    ],
    misconceptions: [
      '"Behavioral means the intervention uses behavioral procedures."',
      '"Behavioral means the target is a problem behavior rather than a skill."',
      '"Behavioral is satisfied by using a standardized rating scale completed by a teacher."',
    ],
    domain: 'A', category: 'Dimensions of ABA',
    taskItem: 'A.5',
  },
  {
    id: 'rr-applied-dim', term: 'Applied (Dimension of ABA)',
    correctDefinition: 'The dimension of ABA requiring that the behaviors and environmental variables selected for study be of demonstrable importance to the individual or to society - the social significance of the target must be justified.',
    distractors: [
      'The dimension of ABA requiring that the subject matter be a directly measurable aspect of the behavior of interest.',
      'The dimension of ABA requiring that procedures be described with sufficient precision that any trained practitioner could implement them accurately.',
      'The dimension of ABA requiring that behavior changes be durable over time and appear across a variety of settings.',
    ],
    misconceptions: [
      '"Applied means the intervention is delivered in a natural setting rather than a clinic."',
      '"Applied means the procedure has been published in a peer-reviewed journal."',
      '"Applied is satisfied whenever the client or family agrees the target is important."',
    ],
    domain: 'A', category: 'Dimensions of ABA',
    taskItem: 'A.5',
  },
  {
    id: 'rr-technological-dim', term: 'Technological (Dimension of ABA)',
    correctDefinition: 'The dimension of ABA requiring that procedures be described with sufficient precision and completeness that any trained practitioner could implement them accurately without additional information from the original researcher or clinician.',
    distractors: [
      'The dimension of ABA requiring that the behaviors targeted for change be of demonstrable importance to the individual or society.',
      'The dimension of ABA requiring that a functional relationship between the intervention and behavior change be demonstrated.',
      'The dimension of ABA requiring that procedures be linked to established behavioral principles.',
    ],
    misconceptions: [
      '"Technological means the intervention uses technology such as apps or devices."',
      '"Technological is satisfied by providing a brief summary of the procedure."',
      '"Technological only applies to published research, not to clinical practice."',
    ],
    domain: 'A', category: 'Dimensions of ABA',
    taskItem: 'A.5',
  },
  {
    id: 'rr-conceptually-systematic-dim', term: 'Conceptually Systematic (Dimension of ABA)',
    correctDefinition: 'The dimension of ABA requiring that procedures and interpretations be described in terms of the established principles of behavior from which they are derived, linking applied work back to the basic science and its theoretical framework.',
    distractors: [
      'The dimension of ABA requiring that procedures be described with sufficient precision that any trained practitioner could implement them accurately.',
      'The dimension of ABA requiring that a functional relationship between the intervention and behavior change be demonstrated.',
      'The dimension of ABA requiring that behavior changes be durable over time and appear across a variety of settings.',
    ],
    misconceptions: [
      '"Conceptually systematic means the intervention follows a structured, step-by-step protocol."',
      '"Conceptually systematic is satisfied by citing a published study that used the same procedure."',
      '"Conceptually systematic means the intervention is consistent with the client\'s treatment history."',
    ],
    domain: 'A', category: 'Dimensions of ABA',
    taskItem: 'A.5',
  },
  {
    id: 'rr-analytic-dim', term: 'Analytic (Dimension of ABA)',
    correctDefinition: 'The dimension of ABA requiring that the practitioner demonstrate a reliable, functional relationship between the intervention (independent variable) and the behavior change (dependent variable), typically through the use of a single-subject experimental design.',
    distractors: [
      'The dimension of ABA requiring that procedures be described with sufficient precision that any trained practitioner could implement them accurately.',
      'The dimension of ABA requiring that the behaviors targeted for change be of demonstrable importance to the individual or society.',
      'The dimension of ABA requiring that procedures be linked to established behavioral principles.',
    ],
    misconceptions: [
      '"Analytic is satisfied whenever a behavior improves during intervention."',
      '"Analytic requires a between-groups randomized controlled trial."',
      '"Analytic means the BCBA has analyzed the function of the behavior before intervening."',
    ],
    domain: 'A', category: 'Dimensions of ABA',
    taskItem: 'A.5',
  },
  {
    id: 'rr-generality-dim', term: 'Generality (Dimension of ABA)',
    correctDefinition: 'The dimension of ABA requiring that behavior changes prove durable over time, appear across a variety of settings and conditions, and spread to a range of related behaviors beyond those directly trained - the extent to which outcomes are broadly useful to the individual.',
    distractors: [
      'The dimension of ABA requiring that procedures be described with sufficient precision that any trained practitioner could implement them accurately.',
      'The dimension of ABA requiring that a functional relationship between the intervention and behavior change be demonstrated.',
      'The dimension of ABA requiring that interventions produce behavior changes of practical and social significance.',
    ],
    misconceptions: [
      '"Generality is satisfied when the behavior improves in the training setting."',
      '"Generality only refers to maintenance over time, not transfer across settings."',
      '"Generality is the same as social validity."',
    ],
    domain: 'A', category: 'Dimensions of ABA',
    taskItem: 'A.5',
  },
  {
    id: 'rr-effective-dim', term: 'Effective (Dimension of ABA)',
    correctDefinition: 'The dimension of ABA requiring that interventions produce behavior changes of practical and social significance - not merely statistically detectable differences - that make a real difference in the life of the individual and those around them.',
    distractors: [
      'The dimension of ABA requiring that behavior changes prove durable over time and appear across a variety of settings.',
      'The dimension of ABA requiring that a functional relationship between the intervention and behavior change be demonstrated.',
      'The dimension of ABA requiring that the behaviors targeted for change be of demonstrable importance to the individual or society.',
    ],
    misconceptions: [
      '"Effective is satisfied whenever data show a statistically significant improvement."',
      '"Effective means the intervention produced the fastest possible behavior change."',
      '"Effective is the same as the applied dimension because both concern social importance."',
    ],
    domain: 'A', category: 'Dimensions of ABA',
    taskItem: 'A.5',
  },

  // -- Domain B: Additional Concepts & Principles ----------------------------
  {
    id: 'rr-respondent-conditioning', term: 'Respondent Conditioning',
    correctDefinition: 'A process in which a neutral stimulus acquires the ability to elicit a response by being paired with an unconditioned stimulus that already elicits that response.',
    distractors: [
      'A process in which behavior is strengthened by its consequences.',
      'A process in which a stimulus signals the availability of reinforcement.',
      'A process in which behavior is weakened by removal of a reinforcer.',
    ],
    misconceptions: [
      '"Respondent conditioning requires voluntary behavior."',
      '"Respondent conditioning is the same as operant conditioning."',
      '"Respondent conditioning is controlled by consequences."',
    ],
    domain: 'B', category: 'Core Concepts',
    taskItem: 'B.3',
  },
  {
    id: 'rr-automatic-reinforcement', term: 'Automatic Reinforcement  -  Functional Analysis',
    correctDefinition: 'In a functional analysis, automatic reinforcement is indicated when behavior persists at elevated rates in the alone condition and/or the ignore condition, suggesting the reinforcer is intrinsic to the behavior rather than socially mediated.',
    distractors: [
      'Automatic reinforcement is indicated when behavior is highest in the attention condition of a functional analysis.',
      'Automatic reinforcement is indicated when behavior occurs only in the presence of demands.',
      'Automatic reinforcement is indicated when behavior is highest in the tangible condition.',
    ],
    misconceptions: [
      '"Automatic reinforcement cannot be identified through functional analysis."',
      '"Behavior maintained by automatic reinforcement always decreases during extinction."',
      '"Automatic reinforcement is confirmed only when the alone condition shows zero behavior."',
    ],
    domain: 'B', category: 'Core Concepts',
    taskItem: 'B.6',
  },
  {
    id: 'rr-fixed-ratio', term: 'Fixed Ratio (FR) Schedule',
    correctDefinition: 'A schedule of reinforcement in which a reinforcer is delivered after a fixed, predetermined number of responses.',
    distractors: [
      'A schedule in which reinforcement is delivered after a variable number of responses.',
      'A schedule in which reinforcement is delivered after a fixed amount of time has elapsed.',
      'A schedule in which reinforcement is delivered for the first response after a variable time interval.',
    ],
    misconceptions: [
      '"FR schedules produce the highest and most consistent response rates."',
      '"FR schedules do not produce post-reinforcement pauses."',
      '"FR-1 is the same as continuous reinforcement."',
    ],
    domain: 'B', category: 'Schedules of Reinforcement',
    taskItem: 'B.9',
  },
  {
    id: 'rr-variable-ratio', term: 'Variable Ratio (VR) Schedule',
    correctDefinition: 'A schedule of reinforcement in which a reinforcer is delivered after an average number of responses, with the exact number varying around that average.',
    distractors: [
      'A schedule in which reinforcement is delivered after a fixed number of responses.',
      'A schedule in which reinforcement is delivered after a variable amount of time.',
      'A schedule in which reinforcement is delivered for the first response after a fixed time interval.',
    ],
    misconceptions: [
      '"VR schedules produce post-reinforcement pauses like FR schedules."',
      '"VR schedules produce lower response rates than FR schedules."',
      '"VR schedules are the same as intermittent reinforcement."',
    ],
    domain: 'B', category: 'Schedules of Reinforcement',
    taskItem: 'B.9',
  },
  {
    id: 'rr-fixed-interval', term: 'Fixed Interval (FI) Schedule',
    correctDefinition: 'A schedule of reinforcement in which a reinforcer is delivered for the first response that occurs after a fixed amount of time has elapsed since the last reinforcement.',
    distractors: [
      'A schedule in which reinforcement is delivered after a fixed number of responses.',
      'A schedule in which reinforcement is delivered for the first response after a variable time interval.',
      'A schedule in which reinforcement is delivered after a variable number of responses.',
    ],
    misconceptions: [
      '"FI schedules produce steady, consistent response rates throughout the interval."',
      '"FI schedules do not produce scallop patterns."',
      '"FI schedules are the same as DRL schedules."',
    ],
    domain: 'B', category: 'Schedules of Reinforcement',
    taskItem: 'B.9',
  },
  {
    id: 'rr-variable-interval', term: 'Variable Interval (VI) Schedule',
    correctDefinition: 'A schedule of reinforcement in which a reinforcer is delivered for the first response after a variable amount of time has elapsed, with the average interval specified.',
    distractors: [
      'A schedule in which reinforcement is delivered after a variable number of responses.',
      'A schedule in which reinforcement is delivered after a fixed time interval.',
      'A schedule in which reinforcement is delivered after a fixed number of responses.',
    ],
    misconceptions: [
      '"VI schedules produce high response rates similar to VR schedules."',
      '"VI schedules produce post-reinforcement pauses."',
      '"VI schedules are the same as FI schedules."',
    ],
    domain: 'B', category: 'Schedules of Reinforcement',
    taskItem: 'B.9',
  },
  {
    id: 'rr-concurrent-schedules', term: 'Concurrent Schedules',
    correctDefinition: 'Two or more schedules of reinforcement operating simultaneously, each associated with a different response option; the organism can freely switch between alternatives.',
    distractors: [
      'A schedule in which multiple behaviors are reinforced in a predetermined sequence.',
      'A schedule in which reinforcement alternates between two stimuli on a fixed basis.',
      'A schedule in which two behaviors must both occur before reinforcement is delivered.',
    ],
    misconceptions: [
      '"Concurrent schedules are the same as multiple schedules."',
      '"Concurrent schedules always produce equal response allocation."',
      '"Concurrent schedules require a changeover delay to function."',
    ],
    domain: 'B', category: 'Schedules of Reinforcement',
    taskItem: 'B.10',
  },
  {
    id: 'rr-multiple-schedule', term: 'Multiple Schedule',
    correctDefinition: 'A schedule in which two or more component schedules alternate, each signaled by a different discriminative stimulus; only one component is in effect at a time.',
    distractors: [
      'A schedule in which two or more response options are available simultaneously.',
      'A schedule in which reinforcement is delivered for completing a chain of behaviors.',
      'A schedule in which the reinforcement criterion changes systematically over time.',
    ],
    misconceptions: [
      '"Multiple schedules are the same as concurrent schedules."',
      '"Multiple schedules do not involve discriminative stimuli."',
      '"Multiple schedules always produce behavioral contrast."',
    ],
    domain: 'B', category: 'Schedules of Reinforcement',
    taskItem: 'B.10',
  },
  {
    id: 'rr-mixed-schedule', term: 'Mixed Schedule',
    correctDefinition: 'A schedule in which two or more component schedules alternate without any discriminative stimulus signaling which component is in effect.',
    distractors: [
      'A schedule in which two or more response options are available simultaneously without signals.',
      'A schedule in which reinforcement components are signaled by different stimuli.',
      'A schedule in which reinforcement is delivered for a chain of different behaviors.',
    ],
    misconceptions: [
      '"Mixed schedules are the same as multiple schedules."',
      '"Mixed schedules always produce higher response rates than multiple schedules."',
      '"Mixed schedules require a changeover response."',
    ],
    domain: 'B', category: 'Schedules of Reinforcement',
    taskItem: 'B.10',
  },
  {
    id: 'rr-chained-schedule', term: 'Chained Schedule',
    correctDefinition: 'A schedule in which completing the requirement of one component produces a discriminative stimulus for the next component, and the final component produces the terminal reinforcer.',
    distractors: [
      'A schedule in which two or more schedules alternate without discriminative stimuli.',
      'A schedule in which reinforcement is delivered for completing a task analysis.',
      'A schedule in which multiple behaviors are reinforced simultaneously.',
    ],
    misconceptions: [
      '"Chained schedules are the same as mixed schedules."',
      '"Chained schedules deliver reinforcement after each component."',
      '"Chained schedules do not involve conditioned reinforcement."',
    ],
    domain: 'B', category: 'Schedules of Reinforcement',
    taskItem: 'B.10',
  },
  {
    id: 'rr-behavioral-contrast', term: 'Behavioral Contrast',
    correctDefinition: 'An increase in response rate in one component of a multiple schedule when reinforcement is reduced or eliminated in an alternating component.',
    distractors: [
      'A decrease in response rate in one component when reinforcement increases in another.',
      'An increase in response rate across all schedules when overall reinforcement is increased.',
      'A shift in behavior from one topography to another when reinforcement contingencies change.',
    ],
    misconceptions: [
      '"Behavioral contrast only occurs in extinction conditions."',
      '"Behavioral contrast is the same as resurgence."',
      '"Behavioral contrast requires concurrent schedules."',
    ],
    domain: 'B', category: 'Schedules of Reinforcement',
    taskItem: 'B.9',
  },
  {
    id: 'rr-matching-law', term: 'Matching Law',
    correctDefinition: 'The principle that the relative rate of responding on each alternative in a concurrent schedule matches the relative rate of reinforcement obtained from that alternative.',
    distractors: [
      'The principle that organisms always choose the alternative with the highest absolute reinforcement rate.',
      'The principle that response rate matches the schedule requirement rather than reinforcement rate.',
      'The principle that behavior is distributed equally across all available alternatives.',
    ],
    misconceptions: [
      '"The matching law only applies to ratio schedules."',
      '"The matching law predicts that organisms always maximize total reinforcement."',
      '"The matching law is the same as the law of effect."',
    ],
    domain: 'B', category: 'Schedules of Reinforcement',
    taskItem: 'B.23',
  },
  {
    id: 'rr-rule-governed', term: 'Rule-Governed Behavior',
    correctDefinition: 'Behavior that is controlled by a verbal description of a contingency (a rule) rather than by direct contact with the contingency itself.',
    distractors: [
      'Behavior that has been shaped through direct contact with reinforcement contingencies.',
      'Behavior that is controlled by discriminative stimuli in the immediate environment.',
      'Behavior that is maintained by automatic reinforcement rather than social consequences.',
    ],
    misconceptions: [
      '"Rule-governed behavior is always more effective than contingency-shaped behavior."',
      '"Rule-governed behavior does not involve reinforcement."',
      '"Rule-governed behavior is the same as instructional control."',
    ],
    domain: 'B', category: 'Verbal Behavior',
    taskItem: 'B.18',
  },
  {
    id: 'rr-contingency-shaped', term: 'Contingency-Shaped Behavior',
    correctDefinition: 'Behavior that has been directly shaped and maintained through contact with environmental contingencies, without the mediation of verbal rules.',
    distractors: [
      'Behavior that is controlled by instructions or verbal descriptions of contingencies.',
      'Behavior that is maintained by conditioned reinforcement in a token economy.',
      'Behavior that is acquired through observational learning from a model.',
    ],
    misconceptions: [
      '"Contingency-shaped behavior is always more flexible than rule-governed behavior."',
      '"Contingency-shaped behavior cannot be influenced by rules."',
      '"Contingency-shaped behavior is the same as automatic reinforcement."',
    ],
    domain: 'B', category: 'Verbal Behavior',
    taskItem: 'B.18',
  },
  {
    id: 'rr-echoic', term: 'Echoic',
    correctDefinition: 'A verbal operant in which the speaker repeats a verbal stimulus produced by another person; the response has formal similarity to the verbal model and is maintained by generalized conditioned reinforcement.',
    distractors: [
      'A verbal operant controlled by a nonverbal discriminative stimulus and maintained by specific reinforcement.',
      'A verbal operant controlled by a verbal stimulus that does not share formal similarity with the response.',
      'A verbal operant in which the speaker produces a written copy of a spoken word.',
    ],
    misconceptions: [
      '"Echoic behavior is the same as imitation."',
      '"Echoic behavior is maintained by the specific reinforcer named in the response."',
      '"Echoic behavior requires formal similarity between stimulus and response modality."',
    ],
    domain: 'B', category: 'Verbal Behavior',
    taskItem: 'B.19',
  },
  {
    id: 'rr-textual', term: 'Textual',
    correctDefinition: 'A verbal operant in which a written or printed verbal stimulus controls a vocal response; there is point-to-point correspondence but not formal similarity between stimulus and response.',
    distractors: [
      'A verbal operant in which a spoken verbal stimulus controls a vocal response with formal similarity.',
      'A verbal operant in which a written stimulus controls a written response.',
      'A verbal operant controlled by a nonverbal discriminative stimulus.',
    ],
    misconceptions: [
      '"Textual behavior is the same as reading comprehension."',
      '"Textual behavior requires formal similarity between stimulus and response."',
      '"Textual behavior is a type of echoic."',
    ],
    domain: 'B', category: 'Verbal Behavior',
    taskItem: 'B.19',
  },
  {
    id: 'rr-transcription', term: 'Transcription',
    correctDefinition: 'A verbal operant in which a spoken verbal stimulus controls a written or typed response; there is point-to-point correspondence but not formal similarity.',
    distractors: [
      'A verbal operant in which a written stimulus controls a vocal response.',
      'A verbal operant in which a spoken stimulus controls a spoken response with formal similarity.',
      'A verbal operant controlled by a nonverbal discriminative stimulus.',
    ],
    misconceptions: [
      '"Transcription is the same as textual behavior."',
      '"Transcription requires formal similarity between stimulus and response."',
      '"Transcription is a type of intraverbal."',
    ],
    domain: 'B', category: 'Verbal Behavior',
    taskItem: 'B.19',
  },
  {
    id: 'rr-autoclitic', term: 'Autoclitic',
    correctDefinition: 'A verbal operant that is dependent on and modifies the effects of other verbal behavior; it qualifies, quantifies, or otherwise alters the listener\'s response to the primary verbal operant.',
    distractors: [
      'A verbal operant controlled by a nonverbal discriminative stimulus and maintained by specific reinforcement.',
      'A verbal operant in which the speaker repeats the verbal behavior of another person.',
      'A verbal operant controlled by a verbal stimulus that does not share formal similarity.',
    ],
    misconceptions: [
      '"Autoclitic behavior is the same as intraverbal behavior."',
      '"Autoclitic behavior is always grammatical in nature."',
      '"Autoclitic behavior is independent of other verbal operants."',
    ],
    domain: 'B', category: 'Verbal Behavior',
    taskItem: 'B.19',
  },
  {
    id: 'rr-listener-responding', term: 'Listener Responding',
    correctDefinition: 'Nonverbal behavior under the control of verbal stimuli produced by another person; the listener\'s behavior is reinforced by the verbal community.',
    distractors: [
      'Verbal behavior that is controlled by the verbal behavior of another speaker.',
      'Behavior that is controlled by nonverbal discriminative stimuli in the environment.',
      'Behavior that is maintained by automatic reinforcement independent of social mediation.',
    ],
    misconceptions: [
      '"Listener responding is the same as intraverbal behavior."',
      '"Listener responding requires the listener to produce verbal behavior."',
      '"Listener responding is a type of tact."',
    ],
    domain: 'B', category: 'Verbal Behavior',
    taskItem: 'B.19',
  },
  {
    id: 'rr-behavioral-momentum', term: 'Behavioral Momentum  -  Principle',
    correctDefinition: 'The tendency for behavior to persist following a change in reinforcement conditions; higher rates of reinforcement in a stimulus context produce greater resistance to disruption (B.22). Analogous to physical momentum: a richer reinforcement history = greater resistance to change.',
    distractors: [
      'The increase in response rate that follows a period of extinction.',
      'The tendency for behavior to generalize across stimulus conditions.',
      'The increase in behavior rate produced by a motivating operation.',
    ],
    misconceptions: [
      '"Behavioral momentum is the same as behavioral contrast."',
      '"Behavioral momentum only applies to high-rate behaviors."',
      '"Behavioral momentum is increased by intermittent reinforcement schedules."',
    ],
    domain: 'B', category: 'Core Concepts',
    taskItem: 'B.22',
  },
  {
    id: 'rr-imitation', term: 'Imitation',
    correctDefinition: 'A behavior that is controlled by a model and has formal similarity to that model; the behavior is reinforced by the social community for matching the model.',
    distractors: [
      'A behavior that is controlled by a verbal description of the desired response.',
      'A behavior that is acquired through direct contact with reinforcement contingencies.',
      'A behavior that is maintained by automatic reinforcement without social mediation.',
    ],
    misconceptions: [
      '"Imitation is the same as echoic behavior."',
      '"Imitation requires the model to be present during the response."',
      '"Imitation is the same as observational learning."',
    ],
    domain: 'B', category: 'Core Concepts',
    taskItem: 'B.24',
  },
  {
    id: 'rr-observational-learning', term: 'Observational Learning',
    correctDefinition: 'A process in which an observer\'s behavior changes as a result of observing the behavior and consequences of a model, without direct reinforcement of the observer\'s behavior.',
    distractors: [
      'A process in which behavior is shaped through direct contact with reinforcement contingencies.',
      'A process in which behavior is controlled by a model and has formal similarity to it.',
      'A process in which behavior is acquired through verbal instruction alone.',
    ],
    misconceptions: [
      '"Observational learning is the same as imitation."',
      '"Observational learning requires the observer to be reinforced directly."',
      '"Observational learning cannot be explained by behavioral principles."',
    ],
    domain: 'B', category: 'Core Concepts',
    taskItem: 'B.24',
  },

  // -- Domain C: Additional Measurement Terms --------------------------------
  {
    id: 'rr-operational-definition', term: 'Operational Definition',
    correctDefinition: 'A definition of a behavior that describes it in observable and measurable terms, specifying the exact movements or actions that constitute an instance of the behavior.',
    distractors: [
      'A definition that explains the function or purpose of a behavior.',
      'A definition that identifies the internal states presumed to cause a behavior.',
      'A definition that categorizes a behavior by its topography and form.',
    ],
    misconceptions: [
      '"An operational definition must include the function of the behavior."',
      '"An operational definition is the same as a function-based definition."',
      '"An operational definition can include mentalistic language if the behavior is well-known."',
    ],
    domain: 'C', category: 'Measurement',
    taskItem: 'C.1',
  },
  {
    id: 'rr-direct-measure', term: 'Direct Measure',
    correctDefinition: 'A measurement procedure in which the behavior of interest is observed and recorded as it occurs, without relying on reports from others or permanent products.',
    distractors: [
      'A measurement procedure in which behavior is inferred from permanent products left by the behavior.',
      'A measurement procedure in which a caregiver or teacher reports the frequency of behavior.',
      'A measurement procedure in which behavior is recorded from video recordings after the session.',
    ],
    misconceptions: [
      '"Direct measures are always more accurate than indirect measures."',
      '"Direct measures include permanent product recording."',
      '"Direct measures require continuous observation."',
    ],
    domain: 'C', category: 'Measurement',
    taskItem: 'C.2',
  },
  {
    id: 'rr-indirect-measure', term: 'Indirect Measure',
    correctDefinition: 'A measurement procedure that relies on reports, ratings, or recollections of behavior rather than direct observation of the behavior as it occurs.',
    distractors: [
      'A measurement procedure in which the observer directly watches and records behavior as it occurs.',
      'A measurement procedure in which permanent products are counted after the behavior.',
      'A measurement procedure in which behavior is sampled at fixed time intervals.',
    ],
    misconceptions: [
      '"Indirect measures are always less valid than direct measures."',
      '"Indirect measures are the same as discontinuous measurement."',
      '"Indirect measures cannot be used in functional behavior assessments."',
    ],
    domain: 'C', category: 'Measurement',
    taskItem: 'C.2',
  },
  {
    id: 'rr-permanent-product', term: 'Permanent Product Recording',
    correctDefinition: 'A measurement procedure in which the tangible outcomes or byproducts of behavior are counted or measured after the behavior has occurred.',
    distractors: [
      'A measurement procedure in which behavior is observed and recorded as it occurs.',
      'A measurement procedure in which a caregiver reports the frequency of behavior.',
      'A measurement procedure in which behavior is sampled at the end of each interval.',
    ],
    misconceptions: [
      '"Permanent product recording is a direct measure of behavior."',
      '"Permanent product recording requires continuous observation."',
      '"Permanent product recording cannot be used for academic behaviors."',
    ],
    domain: 'C', category: 'Measurement',
    taskItem: 'C.2',
  },
  {
    id: 'rr-continuous-measurement', term: 'Continuous Measurement',
    correctDefinition: 'A measurement procedure in which every instance of the target behavior is detected and recorded during the observation period.',
    distractors: [
      'A measurement procedure in which behavior is sampled at fixed or variable intervals.',
      'A measurement procedure in which only a representative sample of behavior is recorded.',
      'A measurement procedure in which behavior is recorded only when it exceeds a threshold.',
    ],
    misconceptions: [
      '"Continuous measurement is always more accurate than discontinuous measurement."',
      '"Continuous measurement is the same as whole-interval recording."',
      '"Continuous measurement is only feasible for low-rate behaviors."',
    ],
    domain: 'C', category: 'Measurement',
    taskItem: 'C.5',
  },
  {
    id: 'rr-count', term: 'Count (Occurrence)',
    correctDefinition: 'The number of times a behavior occurs during an observation period; the most basic measure of behavior.',
    distractors: [
      'The number of behaviors per unit of time during an observation period.',
      'The proportion of intervals in which a behavior is observed to occur.',
      'The total time from the onset to the offset of a behavior episode.',
    ],
    misconceptions: [
      '"Count is the same as rate."',
      '"Count is useful only when observation time is held constant."',
      '"Count cannot be used for behaviors with variable duration."',
    ],
    domain: 'C', category: 'Measurement',
    taskItem: 'C.3',
  },
  {
    id: 'rr-ioa-types', term: 'IOA: Exact Count vs. Interval',
    correctDefinition: 'Exact count IOA divides the smaller count by the larger count; interval-by-interval IOA compares agreement on each interval; scored-interval IOA counts only intervals where at least one observer recorded the behavior.',
    distractors: [
      'Exact count IOA averages the two observers\' counts; interval IOA divides total agreements by total intervals.',
      'Exact count IOA is used for duration data; interval IOA is used for frequency data.',
      'Exact count IOA requires continuous recording; interval IOA requires discontinuous recording.',
    ],
    misconceptions: [
      '"Interval-by-interval IOA always overestimates agreement for low-rate behaviors."',
      '"Scored-interval IOA is the same as unscored-interval IOA."',
      '"Exact count IOA is the most conservative measure of agreement."',
    ],
    domain: 'C', category: 'Measurement',
    taskItem: 'C.8',
  },
  {
    id: 'rr-celeration', term: 'Celeration',
    correctDefinition: 'A measure of how behavior frequency changes over time, expressed as a multiplicative rate of change per unit of time on a Standard Celeration Chart (e.g., ×2 per week).',
    distractors: [
      'The absolute difference in response rate between two time points.',
      'The average response rate across an entire intervention phase.',
      'The slope of a trend line on an equal-interval graph.',
    ],
    misconceptions: [
      '"Celeration is the same as the slope on an equal-interval graph."',
      '"Celeration measures the absolute change in frequency, not the proportional change."',
      '"Celeration can only be calculated on Standard Celeration Charts."',
    ],
    domain: 'C', category: 'Measurement',
    taskItem: 'C.10',
  },

  // -- Domain D: Additional Research Design Terms ----------------------------
  {
    id: 'rr-dependent-variable', term: 'Dependent Variable',
    correctDefinition: 'The behavior or outcome that is measured in an experiment; it is expected to change as a function of the independent variable.',
    distractors: [
      'The intervention or procedure that is manipulated by the experimenter.',
      'The environmental context in which the experiment is conducted.',
      'The schedule of reinforcement used during the intervention phase.',
    ],
    misconceptions: [
      '"The dependent variable is always a rate measure."',
      '"The dependent variable is the same as the target behavior in all cases."',
      '"The dependent variable is what the experimenter controls."',
    ],
    domain: 'D', category: 'Research Designs',
    taskItem: 'D.1',
  },
  {
    id: 'rr-independent-variable', term: 'Independent Variable',
    correctDefinition: 'The intervention or environmental condition that is systematically manipulated by the experimenter to determine its effect on the dependent variable.',
    distractors: [
      'The behavior that is measured and expected to change during the experiment.',
      'The baseline condition in which no intervention is in effect.',
      'The participant characteristics that are held constant across conditions.',
    ],
    misconceptions: [
      '"The independent variable is always a reinforcement procedure."',
      '"The independent variable is what is measured in the experiment."',
      '"The independent variable is the same as the antecedent stimulus."',
    ],
    domain: 'D', category: 'Research Designs',
    taskItem: 'D.1',
  },
  {
    id: 'rr-internal-validity', term: 'Internal Validity',
    correctDefinition: 'The degree to which changes in the dependent variable can be attributed to manipulation of the independent variable, ruling out alternative explanations.',
    distractors: [
      'The degree to which findings from an experiment can be generalized to other populations and settings.',
      'The degree to which a measurement procedure accurately measures the intended behavior.',
      'The degree to which an intervention produces socially significant outcomes.',
    ],
    misconceptions: [
      '"Internal validity is the same as external validity."',
      '"Internal validity is established by using large sample sizes."',
      '"Internal validity is the same as treatment integrity."',
    ],
    domain: 'D', category: 'Research Designs',
    taskItem: 'D.2',
  },
  {
    id: 'rr-external-validity', term: 'External Validity',
    correctDefinition: 'The degree to which the findings of an experiment can be generalized to other participants, settings, behaviors, and time periods beyond those studied.',
    distractors: [
      'The degree to which changes in the dependent variable are caused by the independent variable.',
      'The degree to which a measurement procedure is consistent across observers.',
      'The degree to which an intervention is implemented as designed.',
    ],
    misconceptions: [
      '"External validity is the same as internal validity."',
      '"External validity is established through replication within a single study."',
      '"External validity is more important than internal validity in single-case research."',
    ],
    domain: 'D', category: 'Research Designs',
    taskItem: 'D.2',
  },
  {
    id: 'rr-history-threat', term: 'History (Threat to Internal Validity)',
    correctDefinition: 'An extraneous event that occurs concurrently with the independent variable and could account for changes in the dependent variable, threatening the conclusion that the IV caused the change.',
    distractors: [
      'The natural developmental changes in a participant that occur over the course of a study.',
      'The tendency for extreme scores to move toward the mean upon retesting.',
      'The changes in measurement accuracy that occur as observers become more experienced.',
    ],
    misconceptions: [
      '"History threats are the same as maturation threats."',
      '"History threats only occur in long-duration studies."',
      '"History threats are controlled by using multiple baselines."',
    ],
    domain: 'D', category: 'Research Designs',
    taskItem: 'D.3',
  },
  {
    id: 'rr-maturation-threat', term: 'Maturation (Threat to Internal Validity)',
    correctDefinition: 'Natural developmental or biological changes in a participant that occur over time and could account for changes in the dependent variable independent of the intervention.',
    distractors: [
      'Extraneous events occurring concurrently with the intervention that could cause behavior change.',
      'The tendency for participants who score at extremes to score closer to the mean on retesting.',
      'Changes in observer accuracy that occur as a study progresses.',
    ],
    misconceptions: [
      '"Maturation threats only apply to studies with child participants."',
      '"Maturation threats are the same as history threats."',
      '"Maturation threats are eliminated by using reversal designs."',
    ],
    domain: 'D', category: 'Research Designs',
    taskItem: 'D.3',
  },

  // -- Domain E: Ethics & Professional Issues --------------------------------
  {
    id: 'rr-beneficence', term: 'Beneficence (Ethics)',
    correctDefinition: 'The ethical obligation to act in the best interest of clients and others, actively promoting their welfare and well-being through competent and effective services.',
    distractors: [
      'The ethical obligation to avoid causing harm to clients and others.',
      'The ethical obligation to treat all clients equally regardless of their characteristics.',
      'The ethical obligation to obtain informed consent before beginning services.',
    ],
    misconceptions: [
      '"Beneficence is the same as nonmaleficence."',
      '"Beneficence only applies to the client, not to caregivers or society."',
      '"Beneficence means doing whatever the client requests."',
    ],
    domain: 'E', category: 'Ethics',
    taskItem: 'E.1',
  },
  {
    id: 'rr-nonmaleficence', term: 'Nonmaleficence (Ethics)',
    correctDefinition: 'The ethical obligation to avoid causing harm to clients, caregivers, and others; practitioners must weigh potential risks against benefits when selecting procedures.',
    distractors: [
      'The ethical obligation to actively promote client welfare and well-being.',
      'The ethical obligation to maintain confidentiality of client information.',
      'The ethical obligation to use only evidence-based procedures.',
    ],
    misconceptions: [
      '"Nonmaleficence means never using punishment procedures."',
      '"Nonmaleficence is the same as beneficence."',
      '"Nonmaleficence only applies to physical harm, not psychological harm."',
    ],
    domain: 'E', category: 'Ethics',
    taskItem: 'E.1',
  },
  {
    id: 'rr-informed-consent', term: 'Informed Consent',
    correctDefinition: 'A process in which a client or their legal guardian voluntarily agrees to services after receiving and understanding information about the nature, risks, benefits, and alternatives of the proposed intervention.',
    distractors: [
      'A legal document that protects the practitioner from liability for adverse outcomes.',
      'An agreement by the client to follow all recommendations made by the BCBA.',
      'A process in which the BCBA explains the intervention after it has been implemented.',
    ],
    misconceptions: [
      '"Informed consent is only required for punishment procedures."',
      '"Informed consent is a one-time event at the start of services."',
      '"Informed consent is the same as assent."',
    ],
    domain: 'E', category: 'Ethics',
    taskItem: 'E.4',
  },
  {
    id: 'rr-confidentiality', term: 'Confidentiality  -  Obligation',
    correctDefinition: 'The ethical and legal obligation to protect client information from unauthorized disclosure; information may only be shared with appropriate consent or as required by law (E.4). Applies to all formats: verbal, written, and electronic.',
    distractors: [
      'The obligation to share all client information with the treatment team to ensure coordinated care.',
      'The obligation to store client records in a locked location at all times.',
      'The obligation to obtain written consent before conducting any assessment.',
    ],
    misconceptions: [
      '"Confidentiality means never sharing information with other providers."',
      '"Confidentiality does not apply to de-identified data."',
      '"Confidentiality can always be waived if the client verbally agrees."',
    ],
    domain: 'E', category: 'Ethics',
    taskItem: 'E.4',
  },
  {
    id: 'rr-multiple-relationships', term: 'Multiple Relationships',
    correctDefinition: 'A situation in which a BCBA is in both a professional role and another role (e.g., personal, financial, or supervisory) with a client, supervisee, or research participant, creating potential conflicts of interest.',
    distractors: [
      'A situation in which a BCBA provides services to multiple clients simultaneously.',
      'A situation in which a BCBA collaborates with multiple professionals on the same case.',
      'A situation in which a BCBA supervises multiple RBTs at the same time.',
    ],
    misconceptions: [
      '"Multiple relationships are always prohibited under the Ethics Code."',
      '"Multiple relationships only occur when the BCBA has a romantic relationship with a client."',
      '"Multiple relationships are acceptable if both parties agree in writing."',
    ],
    domain: 'E', category: 'Ethics',
    taskItem: 'E.7',
  },
  {
    id: 'rr-cultural-humility', term: 'Cultural Humility',
    correctDefinition: 'An ongoing process of self-reflection and learning about one\'s own cultural biases and the cultural backgrounds of clients, with the goal of providing equitable and responsive services.',
    distractors: [
      'The ability to accurately identify and categorize clients\' cultural backgrounds.',
      'The practice of adapting interventions to match the cultural norms of the majority population.',
      'The process of obtaining cultural competency training before beginning services.',
    ],
    misconceptions: [
      '"Cultural humility is a fixed skill that is achieved through training."',
      '"Cultural humility is the same as cultural competence."',
      '"Cultural humility only applies to clients from non-Western backgrounds."',
    ],
    domain: 'E', category: 'Ethics',
    taskItem: 'E.9',
  },
  {
    id: 'rr-professional-competence', term: 'Professional Competence',
    correctDefinition: 'The obligation to practice only within the boundaries of one\'s training, education, and supervised experience; to seek consultation or refer when outside one\'s competence.',
    distractors: [
      'The obligation to obtain BCBA certification before providing any ABA services.',
      'The obligation to use only procedures that have been published in peer-reviewed journals.',
      'The obligation to complete continuing education requirements every two years.',
    ],
    misconceptions: [
      '"Professional competence means a BCBA can practice in any area once certified."',
      '"Professional competence is determined solely by years of experience."',
      '"Professional competence does not require ongoing professional development."',
    ],
    domain: 'E', category: 'Ethics',
    taskItem: 'E.3',
  },
  {
    id: 'rr-service-discontinuation', term: 'Service Discontinuation',
    correctDefinition: 'The process of ending services in a planned, ethical manner that minimizes harm to the client; includes transitioning the client to another provider when appropriate.',
    distractors: [
      'The process of reducing the frequency of sessions as the client meets treatment goals.',
      'The process of transferring a client to a more restrictive level of care.',
      'The process of obtaining authorization from the funding source to end services.',
    ],
    misconceptions: [
      '"Service discontinuation is only required when the client requests it."',
      '"Service discontinuation is the same as treatment fading."',
      '"Service discontinuation can occur immediately without a transition plan."',
    ],
    domain: 'E', category: 'Ethics',
    taskItem: 'E.6',
  },

  // -- Domain F: Additional Assessment Terms ---------------------------------
  {
    id: 'rr-skill-assessment', term: 'Skill Assessment (F.3)',
    correctDefinition: 'A systematic evaluation of a client\'s current skill repertoire across relevant domains (e.g., communication, social, adaptive) to identify strengths and areas of need for intervention.',
    distractors: [
      'An assessment that identifies the function of problem behavior through structured observations.',
      'An assessment that measures the client\'s preference for specific stimuli or activities.',
      'An assessment that evaluates the quality of the BCBA\'s intervention implementation.',
    ],
    misconceptions: [
      '"Skill assessments are only conducted at the beginning of services."',
      '"Skill assessments are the same as functional behavior assessments."',
      '"Skill assessments do not require direct observation of the client."',
    ],
    domain: 'F', category: 'Assessment',
    taskItem: 'F.3',
  },
  {
    id: 'rr-cultural-variables', term: 'Cultural Variables in Assessment',
    correctDefinition: 'Factors related to a client\'s cultural background, language, values, and community norms that must be identified and integrated into the assessment process to ensure culturally responsive services.',
    distractors: [
      'Variables related to the physical environment in which assessment is conducted.',
      'Variables related to the client\'s biological and genetic predispositions.',
      'Variables related to the funding source and insurance requirements for assessment.',
    ],
    misconceptions: [
      '"Cultural variables only affect the selection of reinforcers, not assessment procedures."',
      '"Cultural variables are only relevant for clients from non-English-speaking families."',
      '"Cultural variables are addressed by translating assessment tools into the client\'s language."',
    ],
    domain: 'F', category: 'Assessment',
    taskItem: 'F.2',
  },

  // -- Domain G: Additional Behavior-Change Procedure Terms ------------------
  {
    id: 'rr-token-economy', term: 'Token Economy',
    correctDefinition: 'A behavior-change system in which conditioned reinforcers (tokens) are earned for target behaviors and exchanged for backup reinforcers; used to establish and maintain conditioned reinforcement.',
    distractors: [
      'A system in which primary reinforcers are delivered immediately contingent on target behavior.',
      'A system in which points are deducted for problem behavior to reduce its frequency.',
      'A system in which group contingencies are used to reinforce an entire class simultaneously.',
    ],
    misconceptions: [
      '"Token economies are the same as response cost systems."',
      '"Token economies require tokens to be tangible objects."',
      '"Token economies are only effective for children with autism."',
    ],
    domain: 'G', category: 'Behavior-Change Procedures',
    taskItem: 'G.4',
  },
  {
    id: 'rr-errorless-learning', term: 'Errorless Learning',
    correctDefinition: 'A teaching procedure in which prompts are provided at a level that prevents or minimizes errors during acquisition, then systematically faded as the learner demonstrates mastery.',
    distractors: [
      'A teaching procedure in which errors are corrected immediately using a least-to-most prompt hierarchy.',
      'A teaching procedure in which reinforcement is withheld until the learner responds without prompts.',
      'A teaching procedure in which the task is broken into small steps to minimize difficulty.',
    ],
    misconceptions: [
      '"Errorless learning is the same as most-to-least prompting."',
      '"Errorless learning prevents all errors from occurring."',
      '"Errorless learning is less effective than trial-and-error learning for all learners."',
    ],
    domain: 'G', category: 'Behavior-Change Procedures',
    taskItem: 'G.7',
  },
  {
    id: 'rr-prompt-delay', term: 'Prompt Delay',
    correctDefinition: 'A fading procedure in which a time delay is inserted between the discriminative stimulus and the delivery of a prompt, allowing the learner to respond independently before the prompt is given.',
    distractors: [
      'A fading procedure in which the physical intensity of a prompt is gradually reduced.',
      'A fading procedure in which the number of prompts provided is systematically reduced.',
      'A fading procedure in which the prompt is changed from a more intrusive to a less intrusive type.',
    ],
    misconceptions: [
      '"Prompt delay is the same as stimulus fading."',
      '"Prompt delay always uses a fixed time interval."',
      '"Prompt delay is only used with verbal prompts."',
    ],
    domain: 'G', category: 'Behavior-Change Procedures',
    taskItem: 'G.8',
  },
  {
    id: 'rr-schedule-thinning', term: 'Schedule Thinning',
    correctDefinition: 'A procedure in which the schedule of reinforcement is gradually changed from a denser (more frequent) schedule to a leaner (less frequent) schedule to promote maintenance of behavior.',
    distractors: [
      'A procedure in which the magnitude of reinforcement is gradually reduced over time.',
      'A procedure in which the type of reinforcer is changed from primary to conditioned.',
      'A procedure in which the response requirement is gradually increased to promote generalization.',
    ],
    misconceptions: [
      '"Schedule thinning is the same as extinction."',
      '"Schedule thinning should always move from CRF to a fixed ratio schedule."',
      '"Schedule thinning is only used during the maintenance phase."',
    ],
    domain: 'G', category: 'Behavior-Change Procedures',
    taskItem: 'G.16',
  },
  {
    id: 'rr-group-contingency', term: 'Group Contingency',
    correctDefinition: 'A behavior-change arrangement in which reinforcement is delivered to a group based on the behavior of all members, a randomly selected member, or a specific member of the group.',
    distractors: [
      'A behavior-change arrangement in which each individual receives reinforcement based solely on their own behavior.',
      'A behavior-change arrangement in which reinforcement is delivered to the group leader for group performance.',
      'A behavior-change arrangement in which group members earn tokens for individual behaviors.',
    ],
    misconceptions: [
      '"Group contingencies are the same as token economies."',
      '"Group contingencies always involve interdependent arrangements."',
      '"Group contingencies are only appropriate for classroom settings."',
    ],
    domain: 'G', category: 'Behavior-Change Procedures',
    taskItem: 'G.14',
  },
  {
    id: 'rr-response-cost', term: 'Response Cost',
    correctDefinition: 'A punishment procedure in which a specified amount of a conditioned reinforcer is removed contingent on the occurrence of a target behavior, resulting in a decrease in that behavior.',
    distractors: [
      'A punishment procedure in which a positive stimulus is presented contingent on problem behavior.',
      'A punishment procedure in which access to preferred activities is removed for a fixed time period.',
      'A punishment procedure in which the individual is required to perform a corrective behavior.',
    ],
    misconceptions: [
      '"Response cost is the same as time-out."',
      '"Response cost is a form of positive punishment."',
      '"Response cost can only be used within a token economy."',
    ],
    domain: 'G', category: 'Behavior-Change Procedures',
    taskItem: 'G.17',
  },
  {
    id: 'rr-overcorrection', term: 'Overcorrection',
    correctDefinition: 'A punishment procedure requiring the individual to restore the environment to a better-than-original state (restitution) or to practice the correct behavior repeatedly (positive practice) contingent on problem behavior.',
    distractors: [
      'A punishment procedure in which a preferred stimulus is removed contingent on problem behavior.',
      'A punishment procedure in which the individual is removed from the reinforcing environment.',
      'A punishment procedure in which an aversive stimulus is presented contingent on problem behavior.',
    ],
    misconceptions: [
      '"Overcorrection is the same as response cost."',
      '"Overcorrection is a form of negative punishment."',
      '"Overcorrection is always unethical and should never be used."',
    ],
    domain: 'G', category: 'Behavior-Change Procedures',
    taskItem: 'G.17',
  },
  {
    id: 'rr-time-out', term: 'Time-Out from Positive Reinforcement',
    correctDefinition: 'A punishment procedure in which access to sources of positive reinforcement is removed for a specified period contingent on the occurrence of a target behavior.',
    distractors: [
      'A punishment procedure in which an aversive stimulus is presented contingent on problem behavior.',
      'A punishment procedure in which a conditioned reinforcer is removed contingent on problem behavior.',
      'A punishment procedure in which the individual is required to perform a corrective behavior.',
    ],
    misconceptions: [
      '"Time-out is always exclusionary (removing the person from the room)."',
      '"Time-out is a form of negative reinforcement."',
      '"Time-out is effective regardless of whether the environment contains reinforcement."',
    ],
    domain: 'G', category: 'Behavior-Change Procedures',
    taskItem: 'G.17',
  },

  // -- Domain H: Selecting & Implementing Interventions ---------------------
  {
    id: 'rr-observable-measurable-goal', term: 'Observable and Measurable Goal',
    correctDefinition: 'An intervention goal written in terms of specific, directly observable behaviors with defined criteria for mastery, enabling objective measurement of progress.',
    distractors: [
      'A goal that describes the underlying cognitive or emotional state the client should achieve.',
      'A goal that specifies the intervention procedure to be used rather than the behavior outcome.',
      'A goal that identifies the reinforcer to be used to motivate the client toward the outcome.',
    ],
    misconceptions: [
      '"Observable goals are the same as SMART goals."',
      '"Observable goals must include a specific time frame to be valid."',
      '"Observable goals do not need to specify the conditions under which behavior will occur."',
    ],
    domain: 'H', category: 'Intervention',
    taskItem: 'H.1',
  },
  {
    id: 'rr-socially-valid-goal', term: 'Socially Valid Goal',
    correctDefinition: 'An intervention goal that targets behaviors identified as meaningful and important by the client, caregivers, and the broader social community; goals should produce outcomes that matter in the client\'s natural environment.',
    distractors: [
      'A goal that is approved by the funding source and insurance provider.',
      'A goal that is derived directly from a standardized assessment tool.',
      'A goal that is selected by the BCBA based on clinical judgment alone.',
    ],
    misconceptions: [
      '"Social validity is only assessed after intervention is complete."',
      '"Socially valid goals are always the same as the goals identified in the IEP."',
      '"Social validity is the same as treatment acceptability."',
    ],
    domain: 'H', category: 'Intervention',
    taskItem: 'H.3',
  },
  {
    id: 'rr-treatment-integrity', term: 'Treatment Integrity  -  Definition',
    correctDefinition: 'The degree to which an intervention is implemented as designed and specified in the behavior intervention plan; also called procedural fidelity (H.6). Measured by comparing actual implementation steps to the written protocol step by step.',
    distractors: [
      'The degree to which an intervention produces socially significant behavior change.',
      'The degree to which the client\'s behavior change generalizes to natural settings.',
      'The degree to which the BCBA\'s assessment accurately identifies the function of behavior.',
    ],
    misconceptions: [
      '"Treatment integrity is the same as IOA."',
      '"Treatment integrity only needs to be monitored during the initial phase of intervention."',
      '"Treatment integrity is the same as social validity."',
    ],
    domain: 'H', category: 'Intervention',
    taskItem: 'H.6',
  },
  {
    id: 'rr-data-based-decision', term: 'Data-Based Decision Making',
    correctDefinition: 'The practice of using objective data collected on client behavior to guide decisions about continuing, modifying, or discontinuing an intervention.',
    distractors: [
      'The practice of using clinical intuition and experience to guide intervention decisions.',
      'The practice of following a predetermined intervention protocol regardless of client response.',
      'The practice of consulting with caregivers and teachers before making any intervention changes.',
    ],
    misconceptions: [
      '"Data-based decisions require a minimum of 10 data points before any change is made."',
      '"Data-based decision making replaces clinical judgment entirely."',
      '"Data-based decisions are only made at scheduled review meetings."',
    ],
    domain: 'H', category: 'Intervention',
    taskItem: 'H.7',
  },
  {
    id: 'rr-relapse-prevention', term: 'Relapse Prevention (H.5)',
    correctDefinition: 'Planning and implementing strategies to minimize the recurrence of a previously reduced target behavior, including monitoring for resurgence, spontaneous recovery, and contextual triggers.',
    distractors: [
      'Planning for the systematic fading of prompts following skill acquisition.',
      'Planning for the transfer of stimulus control from training to natural environments.',
      'Planning for the reduction of reinforcement density following initial skill mastery.',
    ],
    misconceptions: [
      '"Relapse prevention is only necessary for self-injurious behaviors."',
      '"Relapse prevention is the same as maintenance programming."',
      '"Relapse prevention is only addressed after the behavior has recurred."',
    ],
    domain: 'H', category: 'Intervention',
    taskItem: 'H.5',
  },
  {
    id: 'rr-unwanted-effects', term: 'Unwanted Effects of Behavior-Change Procedures',
    correctDefinition: 'Unintended negative outcomes that may result from reinforcement, extinction, or punishment procedures, such as extinction bursts, aggression, emotional responses, or behavioral contrast.',
    distractors: [
      'Intended side effects that are built into the behavior intervention plan.',
      'Negative outcomes that result from poor treatment integrity by implementers.',
      'Adverse events that occur only when punishment procedures are used.',
    ],
    misconceptions: [
      '"Unwanted effects only occur with punishment procedures."',
      '"Extinction never produces unwanted effects."',
      '"Unwanted effects are always temporary and self-correcting."',
    ],
    domain: 'H', category: 'Intervention',
    taskItem: 'H.4',
  },

  // -- Domain I: Personnel Supervision & Management --------------------------
  {
    id: 'rr-supervision-contract', term: 'Supervisory Contract  -  Components (I.2)',
    correctDefinition: 'A written agreement between a BCBA supervisor and supervisee that specifies the responsibilities, expectations, meeting schedule, and evaluation criteria for the supervisory relationship (I.2). Distinct from an employment contract.',
    distractors: [
      'A written agreement between a BCBA and a client\'s family specifying service delivery terms.',
      'A written agreement between a BCBA and a funding source specifying billing procedures.',
      'A written agreement between a BCBA and an employer specifying employment conditions.',
    ],
    misconceptions: [
      '"A supervisory contract is only required for RBT supervision."',
      '"A supervisory contract is the same as an informed consent document."',
      '"A supervisory contract does not need to specify evaluation criteria."',
    ],
    domain: 'I', category: 'Supervision',
    taskItem: 'I.2',
  },
  {
    id: 'rr-performance-management', term: 'Performance Management',
    correctDefinition: 'The application of behavioral principles (e.g., antecedent manipulations, feedback, reinforcement) to improve and maintain the work performance of supervisees and staff.',
    distractors: [
      'The process of evaluating supervisee performance using standardized competency checklists.',
      'The process of documenting supervisee errors and reporting them to licensing boards.',
      'The process of scheduling and conducting regular supervision meetings with supervisees.',
    ],
    misconceptions: [
      '"Performance management is the same as performance evaluation."',
      '"Performance management only involves delivering consequences for poor performance."',
      '"Performance management is only applicable in organizational settings."',
    ],
    domain: 'I', category: 'Supervision',
    taskItem: 'I.5',
  },
  {
    id: 'rr-behavioral-skills-training', term: 'Behavioral Skills Training (BST)',
    correctDefinition: 'A training package that includes instructions, modeling, rehearsal, and feedback to teach new skills to supervisees and caregivers; all four components must be present.',
    distractors: [
      'A training package that includes only verbal instructions and written materials.',
      'A training package that uses video modeling and self-assessment checklists.',
      'A training package that uses role-play and performance feedback without modeling.',
    ],
    misconceptions: [
      '"BST is effective with instructions alone if they are detailed enough."',
      '"BST requires all four components to be delivered in a single session."',
      '"BST is the same as competency-based training."',
    ],
    domain: 'I', category: 'Supervision',
    taskItem: 'I.5',
  },
  {
    id: 'rr-equity-supervision', term: 'Equity in Supervision',
    correctDefinition: 'The practice of identifying and addressing systemic barriers and biases in supervision to ensure fair, inclusive, and culturally responsive supervisory relationships for all supervisees.',
    distractors: [
      'The practice of providing equal amounts of supervision time to all supervisees.',
      'The practice of using the same supervision methods for all supervisees regardless of background.',
      'The practice of evaluating all supervisees using the same standardized competency checklist.',
    ],
    misconceptions: [
      '"Equity in supervision means treating all supervisees identically."',
      '"Equity in supervision is only relevant for supervisees from minority groups."',
      '"Equity in supervision is the same as equality in supervision."',
    ],
    domain: 'I', category: 'Supervision',
    taskItem: 'I.3',
  },
  {
    id: 'rr-supervision-goals', term: 'Supervision Goals',
    correctDefinition: 'Individualized objectives for a supervisee\'s professional development, selected based on an assessment of their current skills, cultural variables, and the demands of their work environment.',
    distractors: [
      'Objectives for the client\'s behavior change that the supervisee is responsible for implementing.',
      'Objectives for the BCBA\'s professional development as a supervisor.',
      'Objectives for the organization\'s service delivery quality and efficiency.',
    ],
    misconceptions: [
      '"Supervision goals are the same for all supervisees at the same certification level."',
      '"Supervision goals are set by the supervisee alone without input from the supervisor."',
      '"Supervision goals do not need to be reassessed once established."',
    ],
    domain: 'I', category: 'Supervision',
    taskItem: 'I.4',
  },
  {
    id: 'rr-function-based-supervision', term: 'Function-Based Approach to Supervision',
    correctDefinition: 'Using performance diagnostics to identify the antecedents and consequences maintaining a supervisee\'s performance deficits, then selecting interventions matched to the identified function.',
    distractors: [
      'Using functional analysis to identify the function of a supervisee\'s problem behavior.',
      'Using competency checklists to identify gaps in a supervisee\'s knowledge base.',
      'Using standardized tests to assess a supervisee\'s understanding of behavioral principles.',
    ],
    misconceptions: [
      '"A function-based approach to supervision is the same as conducting an FBA on the supervisee."',
      '"A function-based approach always identifies skill deficits as the cause of poor performance."',
      '"A function-based approach is only used when a supervisee is performing poorly."',
    ],
    domain: 'I', category: 'Supervision',
    taskItem: 'I.6',
  },


  // -- Measurement (Domain C)  -  16 new terms ---------------------------------
  {
    id: 'rr-trial-by-trial-recording', term: 'Trial-by-Trial Recording',
    correctDefinition: 'A measurement procedure in which the occurrence or non-occurrence of a target behavior is recorded for each discrete opportunity or trial presented.',
    distractors: [
      'A procedure in which the observer records whether behavior occurred at least once during a fixed time block.',
      'A procedure in which the total number of responses is divided by the total observation time.',
      'A procedure in which the observer samples behavior at the end of each interval.',
    ],
    misconceptions: [
      '"Is the same as whole-interval recording."',
      '"Can only be used with continuous behaviors."',
      '"Provides a rate measure rather than an accuracy measure."',
    ],
    domain: 'C', category: 'Measurement',
    taskItem: 'C.1',
  },
  {
    id: 'rr-event-recording', term: 'Event Recording',
    correctDefinition: 'A measurement procedure in which each instance of a discrete behavior is tallied as it occurs within an observation period.',
    distractors: [
      'A procedure in which the observer notes whether behavior is occurring at the end of each time interval.',
      'A procedure in which the observer records the total time a behavior is occurring.',
      'A procedure in which a product of behavior is examined after the observation session.',
    ],
    misconceptions: [
      '"Is appropriate for behaviors with no clear beginning or end."',
      '"Is the same as interval recording."',
      '"Yields a percentage-correct score."',
    ],
    domain: 'C', category: 'Measurement',
    taskItem: 'C.1',
  },
  {
    id: 'rr-ioa-total-count', term: 'Total Count IOA',
    correctDefinition: 'An interobserver agreement calculation in which the smaller count is divided by the larger count and multiplied by 100; used for event-recorded data.',
    distractors: [
      'An IOA calculation in which the number of intervals with agreement is divided by the total number of intervals and multiplied by 100.',
      'An IOA calculation in which the absolute difference between two observers\' counts is subtracted from 1.',
      'An IOA calculation in which only intervals where at least one observer recorded the behavior are counted.',
    ],
    misconceptions: [
      '"Is the most conservative IOA method."',
      '"Is appropriate for interval-recorded data."',
      '"Accounts for the distribution of responses across an observation period."',
    ],
    domain: 'C', category: 'Measurement',
    taskItem: 'C.8',
  },
  {
    id: 'rr-interval-by-interval-ioa', term: 'Interval-by-Interval IOA',
    correctDefinition: 'An IOA calculation in which each interval is scored as agreement or disagreement and the proportion of agreeing intervals is calculated; includes both occurrence and non-occurrence agreements.',
    distractors: [
      'An IOA calculation in which only the total number of responses recorded by each observer is compared.',
      'An IOA calculation in which only intervals where both observers recorded the behavior are counted as agreements.',
      'An IOA calculation in which the mean of each observer\'s interval scores is compared.',
    ],
    misconceptions: [
      '"Is the least conservative IOA method for low-rate behaviors."',
      '"Is only appropriate when behavior occurs in more than 50% of intervals."',
      '"Inflates agreement when behavior rates are very low."',
    ],
    domain: 'C', category: 'Measurement',
    taskItem: 'C.6',
  },
  {
    id: 'rr-ioa-occurrence', term: 'Occurrence IOA',
    correctDefinition: 'An IOA calculation in which agreement is scored only for intervals in which at least one observer recorded the behavior; more conservative for low-rate behaviors.',
    distractors: [
      'An IOA calculation in which all intervals, regardless of whether behavior was recorded, are included in the agreement calculation.',
      'An IOA calculation in which the smaller total count is divided by the larger total count.',
      'An IOA calculation in which agreement is scored only for intervals in which neither observer recorded the behavior.',
    ],
    misconceptions: [
      '"Is the same as interval-by-interval IOA."',
      '"Is less conservative than non-occurrence IOA for high-rate behaviors."',
      '"Should be used when behavior occurs in most intervals."',
    ],
    domain: 'C', category: 'Measurement',
    taskItem: 'C.6',
  },
  {
    id: 'rr-observer-drift', term: 'Observer Drift',
    correctDefinition: 'A systematic change in an observer\'s recording over time such that the operational definition is applied differently at the end of an observation period than at the beginning.',
    distractors: [
      'Random variation in an observer\'s data caused by fatigue or inattention.',
      'The tendency for two observers to influence each other\'s recording when they are aware of each other\'s data.',
      'A decrease in IOA that occurs when observers are not retrained periodically.',
    ],
    misconceptions: [
      '"Is the same as reactivity."',
      '"Only occurs when observers are untrained."',
      '"Is detected by calculating total count IOA."',
    ],
    domain: 'C', category: 'Measurement',
    taskItem: 'C.8',
  },
  {
    id: 'rr-reactivity', term: 'Reactivity',
    correctDefinition: 'A change in the target behavior that occurs because the individual is aware of being observed, which may cause the data to not accurately represent typical performance.',
    distractors: [
      'A change in observer recording behavior caused by knowledge of the study\'s hypothesis.',
      'The tendency for behavior to return to baseline levels after an intervention is removed.',
      'A measurement artifact caused by using an interval recording system for a continuous behavior.',
    ],
    misconceptions: [
      '"Is the same as observer drift."',
      '"Always results in an increase in the target behavior."',
      '"Is eliminated by using permanent product recording."',
    ],
    domain: 'C', category: 'Measurement',
    taskItem: 'C.6',
  },
  {
    id: 'rr-social-validity', term: 'Social Validity',
    correctDefinition: 'The degree to which the goals, procedures, and outcomes of an intervention are acceptable and meaningful to the client, caregivers, and the broader community.',
    distractors: [
      'A statistical measure of whether behavior change is large enough to be detected by observers.',
      'The extent to which an intervention produces behavior change that generalizes across settings.',
      'A measure of whether a behavior change procedure is implemented with fidelity.',
    ],
    misconceptions: [
      '"Is the same as clinical significance."',
      '"Is assessed only after an intervention is complete."',
      '"Requires a standardized questionnaire to measure."',
    ],
    domain: 'C', category: 'Measurement',
    taskItem: 'C.7',
  },
  {
    id: 'rr-visual-analysis', term: 'Visual Analysis',
    correctDefinition: 'The primary method for evaluating behavioral data in which graphs are examined for level, trend, variability, and overlap to determine whether a functional relationship exists.',
    distractors: [
      'A statistical procedure used to determine whether behavior change is statistically significant.',
      'A method for comparing the mean performance of participants across experimental conditions.',
      'A procedure for calculating the percentage of non-overlapping data points between phases.',
    ],
    misconceptions: [
      '"Requires statistical analysis to confirm conclusions."',
      '"Only examines the mean level of behavior across conditions."',
      '"Is less reliable than inferential statistics for single-case data."',
    ],
    domain: 'C', category: 'Measurement',
    taskItem: 'C.7',
  },
  {
    id: 'rr-level', term: 'Level (Data)',
    correctDefinition: 'The mean or median value of data points within a condition, used in visual analysis to describe the overall magnitude of behavior during that phase.',
    distractors: [
      'The direction and degree of change in data points across successive sessions within a condition.',
      'The degree to which data points are scattered around a central value within a condition.',
      'The proportion of data points in one phase that fall within the range of data points in an adjacent phase.',
    ],
    misconceptions: [
      '"Is the same as trend."',
      '"Is calculated by counting the number of data points above the median."',
      '"Refers to the highest data point recorded in a phase."',
    ],
    domain: 'C', category: 'Measurement',
    taskItem: 'C.7',
  },
  {
    id: 'rr-trend', term: 'Trend (Data)',
    correctDefinition: 'The direction and rate of change in data points over successive sessions within a condition, typically described as accelerating, decelerating, or zero-celerating.',
    distractors: [
      'The average value of data points within a condition.',
      'The degree to which data points in one phase overlap with data points in an adjacent phase.',
      'The consistency or scatter of data points around a central value within a condition.',
    ],
    misconceptions: [
      '"Is the same as level."',
      '"Can only be upward or downward."',
      '"Is determined by calculating the mean of the first and last data points."',
    ],
    domain: 'C', category: 'Measurement',
    taskItem: 'C.7',
  },
  {
    id: 'rr-variability', term: 'Variability (Data)',
    correctDefinition: 'The degree to which individual data points within a condition differ from one another, reflecting the consistency of behavior under a given set of conditions.',
    distractors: [
      'The direction of change in data points across successive sessions.',
      'The difference between the highest and lowest data points across an entire experiment.',
      'The proportion of data points that fall above the median within a phase.',
    ],
    misconceptions: [
      '"High variability always indicates a measurement problem."',
      '"Is the same as trend."',
      '"Is only relevant when comparing two conditions."',
    ],
    domain: 'C', category: 'Measurement',
    taskItem: 'C.7',
  },
  {
    id: 'rr-data-overlap', term: 'Data Overlap',
    correctDefinition: 'The proportion of data points in one phase that fall within the range of data points in an adjacent phase; high overlap weakens the evidence for a functional relationship.',
    distractors: [
      'The degree to which data points within a single phase are scattered around the mean.',
      'The number of data points that cross the median line within a condition.',
      'The similarity in trend direction between a baseline and an intervention phase.',
    ],
    misconceptions: [
      '"High overlap always means the intervention was ineffective."',
      '"Is the same as variability."',
      '"Is only calculated between baseline and the first intervention phase."',
    ],
    domain: 'C', category: 'Measurement',
    taskItem: 'C.7',
  },
  {
    id: 'rr-cumulative-record', term: 'Cumulative Record',
    correctDefinition: 'A graphical display in which each data point represents the total number of responses emitted from the beginning of the observation period, so the slope of the line reflects response rate.',
    distractors: [
      'A graph in which each data point represents the number of responses in a single session.',
      'A graph in which the y-axis shows the percentage of correct responses across sessions.',
      'A graph in which behavior is plotted on a logarithmic scale to show proportional change.',
    ],
    misconceptions: [
      '"Is the same as a standard equal-interval line graph."',
      '"Can show a decrease in total responses over time."',
      '"Is primarily used for interval-recorded data."',
    ],
    domain: 'C', category: 'Measurement',
    taskItem: 'C.7',
  },
  {
    id: 'rr-standard-celeration-chart', term: 'Standard Celeration Chart',
    correctDefinition: 'A semi-logarithmic chart used to display behavior frequency over time, where the slope of the data path (celeration) represents the rate of change in behavior frequency.',
    distractors: [
      'A chart that displays the cumulative number of responses emitted across sessions on a linear scale.',
      'A chart that plots the percentage of correct responses on a standard equal-interval grid.',
      'A chart used to display IOA data across multiple observation sessions.',
    ],
    misconceptions: [
      '"Is the same as a cumulative record."',
      '"Uses an arithmetic (linear) y-axis."',
      '"Is only used in Precision Teaching settings."',
    ],
    domain: 'C', category: 'Measurement',
    taskItem: 'C.7',
  },
  {
    id: 'rr-baseline-logic', term: 'Baseline Logic',
    correctDefinition: 'The rationale for using stable baseline data to predict future performance in the absence of intervention, allowing comparison with data collected during intervention to infer a functional relationship.',
    distractors: [
      'The requirement that a minimum of three data points be collected before introducing an intervention.',
      'The principle that behavior must return to baseline levels before a second intervention phase can begin.',
      'The use of a control group to establish what behavior would look like without treatment.',
    ],
    misconceptions: [
      '"Requires that baseline data be perfectly stable before intervention begins."',
      '"Is only applicable to reversal designs."',
      '"Is the same as experimental control."',
    ],
    domain: 'C', category: 'Measurement',
    taskItem: 'D.1',
  },

  // -- Ethics (Domain E)  -  18 new terms --------------------------------------
  {
    id: 'rr-assent', term: 'Assent',
    correctDefinition: 'An affirmative agreement by a client who lacks legal capacity to provide informed consent, indicating willingness to participate in assessment or intervention.',
    distractors: [
      'A legally binding agreement signed by a parent or guardian authorizing treatment on behalf of a minor.',
      'A verbal or written statement from a client confirming they understand the risks and benefits of a procedure.',
      'Permission granted by a regulatory body for a practitioner to implement a restrictive procedure.',
    ],
    misconceptions: [
      '"Is the same as informed consent."',
      '"Is only required for adult clients with intellectual disabilities."',
      '"Replaces the need for guardian consent."',
    ],
    domain: 'E', category: 'Ethics',
    taskItem: 'E.1',
  },
  {
    id: 'rr-scope-of-practice', term: 'Scope of Practice',
    correctDefinition: 'The boundaries of professional competence defined by one\'s training, education, supervised experience, and credentialing, within which a practitioner is ethically permitted to provide services.',
    distractors: [
      'The geographic region in which a practitioner is licensed to provide behavior-analytic services.',
      'The specific BACB task list items a practitioner has demonstrated competency in during supervision.',
      'The range of diagnoses a practitioner is permitted to assess and treat under their credential.',
    ],
    misconceptions: [
      '"Is determined solely by the BACB credential held."',
      '"Expands automatically with years of experience."',
      '"Is the same as licensure."',
    ],
    domain: 'E', category: 'Ethics',
    taskItem: 'E.1',
  },
  {
    id: 'rr-dual-relationship', term: 'Dual Relationship',
    correctDefinition: 'A situation in which a behavior analyst has both a professional role and another distinct role with a client, supervisee, or research participant, creating a risk of impaired objectivity or exploitation.',
    distractors: [
      'A situation in which a behavior analyst provides services to two clients who know each other.',
      'A situation in which a behavior analyst holds both a BCBA and a BCaBA credential simultaneously.',
      'A situation in which a behavior analyst serves as both the primary therapist and the supervisor for the same case.',
    ],
    misconceptions: [
      '"Is always prohibited under the Ethics Code."',
      '"Only applies to romantic relationships."',
      '"Is the same as a conflict of interest."',
    ],
    domain: 'E', category: 'Ethics',
    taskItem: 'E.6',
  },
  {
    id: 'rr-conflict-of-interest', term: 'Conflict of Interest',
    correctDefinition: 'A situation in which a behavior analyst\'s personal, financial, or professional interests could compromise their objectivity, competence, or effectiveness in fulfilling their professional responsibilities.',
    distractors: [
      'A disagreement between a behavior analyst and a client\'s family regarding the goals of intervention.',
      'A situation in which a behavior analyst provides services outside their area of competence.',
      'A situation in which a behavior analyst has a personal relationship with a supervisee.',
    ],
    misconceptions: [
      '"Is the same as a dual relationship."',
      '"Only arises from financial incentives."',
      '"Must always be disclosed to the BACB."',
    ],
    domain: 'E', category: 'Ethics',
    taskItem: 'E.6',
  },
  {
    id: 'rr-least-restrictive', term: 'Least Restrictive Alternative',
    correctDefinition: 'The principle that behavior-change procedures should be selected from the least intrusive, aversive, or restrictive options that are likely to be effective before more restrictive procedures are considered.',
    distractors: [
      'The requirement that all behavior reduction procedures be approved by a human rights committee.',
      'The principle that reinforcement-based procedures must always be tried before punishment procedures.',
      'A legal standard requiring that clients be served in the most integrated setting appropriate to their needs.',
    ],
    misconceptions: [
      '"Requires that only positive reinforcement be used."',
      '"Means punishment procedures can never be used."',
      '"Is the same as the principle of parsimony."',
    ],
    domain: 'E', category: 'Ethics',
    taskItem: 'E.2',
  },
  {
    id: 'rr-right-to-effective-treatment', term: 'Right to Effective Treatment',
    correctDefinition: 'The ethical position that individuals have a right to receive interventions that are supported by scientific evidence and are likely to produce meaningful behavior change.',
    distractors: [
      'The legal right of a client to refuse any treatment they find aversive.',
      'The principle that all clients must receive the same evidence-based intervention regardless of individual differences.',
      'The obligation of a behavior analyst to use the most recently published intervention procedures.',
    ],
    misconceptions: [
      '"Conflicts with the least restrictive alternative principle."',
      '"Only applies to clients with autism spectrum disorder."',
      '"Means the most effective procedure must always be used regardless of restrictiveness."',
    ],
    domain: 'E', category: 'Ethics',
    taskItem: 'E.2',
  },
  {
    id: 'rr-mandatory-reporting', term: 'Mandatory Reporting',
    correctDefinition: 'The legal obligation of certain professionals, including behavior analysts, to report suspected abuse, neglect, or exploitation of vulnerable individuals to the appropriate authorities.',
    distractors: [
      'The requirement to document all behavior-change procedures in a client\'s treatment plan.',
      'The obligation to report all adverse events during a functional analysis to the supervising BCBA.',
      'The requirement to notify the BACB when a supervisee fails to meet competency standards.',
    ],
    misconceptions: [
      '"Is optional when the behavior analyst is uncertain about the evidence of abuse."',
      '"Only applies to physical abuse, not neglect."',
      '"Can be waived if the client requests confidentiality."',
    ],
    domain: 'E', category: 'Ethics',
    taskItem: 'E.5',
  },
  {
    id: 'rr-privacy', term: 'Privacy',
    correctDefinition: 'The right of an individual to control access to personal information about themselves, including data collected during assessment and intervention.',
    distractors: [
      'The legal obligation of a behavior analyst to keep all client records for a minimum of seven years.',
      'The requirement that client data be stored in a HIPAA-compliant electronic health record system.',
      'The principle that client information may only be shared with direct service staff.',
    ],
    misconceptions: [
      '"Is the same as confidentiality."',
      '"Is waived when a client signs a release of information."',
      '"Only applies to written records, not verbal communications."',
    ],
    domain: 'E', category: 'Ethics',
    taskItem: 'E.5',
  },
  {
    id: 'rr-confidentiality-limits', term: 'Confidentiality  -  Limits and Exceptions',
    correctDefinition: 'Confidentiality is not absolute: it may be broken when required by law (e.g., mandated reporting of abuse), when there is imminent risk of harm to the client or others, or when the client provides written authorization to share information (E.5).',
    distractors: [
      'The right of a client to access their own treatment records at any time.',
      'The obligation to obtain written consent before discussing a client\'s case in a supervision meeting.',
      'The requirement to anonymize all client data before presenting it at a professional conference.',
    ],
    misconceptions: [
      '"Is the same as privacy."',
      '"Is absolute and cannot be broken under any circumstances."',
      '"Does not apply to data shared within the same agency."',
    ],
    domain: 'E', category: 'Ethics',
    taskItem: 'E.5',
  },
  {
    id: 'rr-professional-boundaries', term: 'Professional Boundaries',
    correctDefinition: 'The limits that define the appropriate scope of a professional relationship, protecting the client from exploitation and maintaining the objectivity and effectiveness of the practitioner.',
    distractors: [
      'The geographic limits within which a practitioner is licensed to provide services.',
      'The specific tasks a practitioner is permitted to perform under their level of credential.',
      'The time limits placed on supervision sessions to prevent supervisee burnout.',
    ],
    misconceptions: [
      '"Are only relevant in therapeutic relationships, not supervisory ones."',
      '"Prohibit any social contact between a behavior analyst and a client\'s family."',
      '"Are the same as scope of practice."',
    ],
    domain: 'E', category: 'Ethics',
    taskItem: 'E.6',
  },
  {
    id: 'rr-self-determination', term: 'Self-Determination',
    correctDefinition: 'The right of individuals to make choices about their own lives, including decisions about the goals and procedures of their behavioral intervention.',
    distractors: [
      'The ability of a client to implement their own behavior-change program without professional support.',
      'The legal right of an adult client to refuse all treatment without consequence.',
      'The principle that clients should be taught to self-monitor their own behavior.',
    ],
    misconceptions: [
      '"Only applies to adult clients."',
      '"Means the client\'s preferences always override clinical judgment."',
      '"Is the same as autonomy in bioethics."',
    ],
    domain: 'E', category: 'Ethics',
    taskItem: 'E.1',
  },
  {
    id: 'rr-justice-ethics', term: 'Justice (Ethics)',
    correctDefinition: 'The ethical principle requiring fair and equitable treatment of all individuals, including equal access to services and non-discriminatory application of behavior-analytic procedures.',
    distractors: [
      'The obligation to report unethical conduct by colleagues to the BACB.',
      'The principle that punishment procedures must be reviewed by an ethics committee before implementation.',
      'The requirement to provide services to all clients regardless of ability to pay.',
    ],
    misconceptions: [
      '"Is the same as beneficence."',
      '"Only applies to the distribution of resources, not procedural fairness."',
      '"Requires identical treatment for all clients."',
    ],
    domain: 'E', category: 'Ethics',
    taskItem: 'E.1',
  },
  {
    id: 'rr-fidelity-ethics', term: 'Fidelity (Ethics)',
    correctDefinition: 'The ethical principle of being truthful, keeping promises, and fulfilling professional commitments to clients, supervisees, and the field.',
    distractors: [
      'The degree to which a behavior-change procedure is implemented as designed.',
      'The obligation to use evidence-based practices in all clinical work.',
      'The requirement to accurately represent one\'s credentials and qualifications.',
    ],
    misconceptions: [
      '"Is the same as treatment integrity."',
      '"Only applies to written agreements."',
      '"Is the same as veracity."',
    ],
    domain: 'E', category: 'Ethics',
    taskItem: 'E.1',
  },
  {
    id: 'rr-veracity', term: 'Veracity',
    correctDefinition: 'The ethical obligation to be truthful and accurate in all professional communications, including reports, data, and representations of one\'s qualifications.',
    distractors: [
      'The obligation to keep client information confidential.',
      'The requirement to obtain informed consent before beginning an assessment.',
      'The principle of treating all clients fairly and without discrimination.',
    ],
    misconceptions: [
      '"Is the same as fidelity."',
      '"Only applies to written communications."',
      '"Permits withholding information if disclosure would harm the client."',
    ],
    domain: 'E', category: 'Ethics',
    taskItem: 'E.1',
  },
  {
    id: 'rr-cultural-responsiveness', term: 'Cultural Responsiveness',
    correctDefinition: 'The practice of adapting assessment and intervention procedures to be consistent with the cultural values, norms, and preferences of the client and their family.',
    distractors: [
      'The requirement to provide services in the client\'s primary language.',
      'The obligation to use culturally normed standardized assessments in all evaluations.',
      'The practice of selecting behavior targets that are valued across all cultural groups.',
    ],
    misconceptions: [
      '"Is the same as cultural humility."',
      '"Means the behavior analyst must share the client\'s cultural background."',
      '"Only applies when working with clients from non-Western cultures."',
    ],
    domain: 'E', category: 'Ethics',
    taskItem: 'E.1',
  },
  {
    id: 'rr-behavior-analyst-ethics-code', term: 'BACB Ethics Code',
    correctDefinition: 'The set of enforceable standards published by the Behavior Analyst Certification Board that govern the professional conduct of credentialed behavior analysts.',
    distractors: [
      'A set of guidelines published by the Association for Behavior Analysis International for research ethics.',
      'A state-level licensing law that defines the scope of practice for behavior analysts.',
      'A voluntary code of conduct adopted by individual ABA agencies to guide staff behavior.',
    ],
    misconceptions: [
      '"Is the same as state licensure requirements."',
      '"Only applies to BCBAs, not BCaBAs or RBTs."',
      '"Is updated annually by the BACB."',
    ],
    domain: 'E', category: 'Ethics',
    taskItem: 'E.1',
  },
  {
    id: 'rr-competing-contingencies-ethics', term: 'Competing Contingencies (Ethics)',
    correctDefinition: 'A situation in which the behavior analyst faces conflicting obligations  -  such as duties to the client, employer, funding source, or regulatory body  -  that cannot all be satisfied simultaneously.',
    distractors: [
      'A situation in which two reinforcement contingencies are simultaneously available for the same behavior.',
      'A situation in which a client\'s problem behavior is maintained by multiple functions.',
      'A situation in which a supervisee\'s performance goals conflict with the agency\'s productivity requirements.',
    ],
    misconceptions: [
      '"Is the same as a conflict of interest."',
      '"Is resolved by always prioritizing the client\'s welfare."',
      '"Only arises in school-based settings."',
    ],
    domain: 'E', category: 'Ethics',
    taskItem: 'E.6',
  },
  {
    id: 'rr-responsible-exit', term: 'Responsible Service Discontinuation',
    correctDefinition: 'The ethical obligation to end services in a manner that minimizes harm to the client, including providing adequate notice, transitioning to another provider, and documenting the rationale for discontinuation.',
    distractors: [
      'The requirement to obtain written consent from a guardian before terminating services with a minor.',
      'The obligation to continue providing services until a client meets all treatment goals.',
      'The requirement to notify the BACB when services are discontinued due to ethical violations.',
    ],
    misconceptions: [
      '"Permits immediate termination when a client is non-compliant."',
      '"Only applies when the behavior analyst is the one initiating termination."',
      '"Is the same as abandonment."',
    ],
    domain: 'E', category: 'Ethics',
    taskItem: 'E.7',
  },

  // -- Supervision (Domain I)  -  16 new terms ---------------------------------
  {
    id: 'rr-supervision-hours', term: 'Supervised Fieldwork Hours',
    correctDefinition: 'The documented hours of practical experience under the oversight of a qualified supervisor that are required by the BACB as a condition of eligibility for the BCBA examination.',
    distractors: [
      'The total number of hours a BCBA must spend supervising RBTs each month to maintain their credential.',
      'The hours of continuing education a BCBA must complete during each renewal cycle.',
      'The hours of direct client contact required before a BCBA can conduct a functional analysis.',
    ],
    misconceptions: [
      '"Can be completed entirely through telehealth supervision."',
      '"Are the same as CEU hours."',
      '"Do not require direct observation of the supervisee\'s work."',
    ],
    domain: 'I', category: 'Supervision',
    taskItem: 'I.1',
  },
  {
    id: 'rr-competency-based-supervision', term: 'Competency-Based Supervision',
    correctDefinition: 'A supervisory approach in which the supervisee must demonstrate mastery of specific skills to a defined criterion before progressing, rather than simply accumulating hours.',
    distractors: [
      'A supervisory approach in which the supervisor assigns readings and written assignments to build knowledge.',
      'A supervisory approach in which supervision hours are distributed evenly across all BACB task list areas.',
      'A supervisory approach in which the supervisee self-evaluates their performance against a rubric.',
    ],
    misconceptions: [
      '"Is the same as performance management."',
      '"Only applies to RBT supervision, not BCBA supervision."',
      '"Requires that all competencies be assessed through direct observation."',
    ],
    domain: 'I', category: 'Supervision',
    taskItem: 'I.1',
  },
  {
    id: 'rr-pyramidal-training', term: 'Pyramidal Training',
    correctDefinition: 'A training model in which a supervisor trains a small number of individuals who then train others, creating a hierarchical structure that extends the reach of the original trainer.',
    distractors: [
      'A training model in which all staff receive identical training from a single trainer.',
      'A training model in which supervisees are ranked by performance and receive differential amounts of supervision.',
      'A training model in which training is delivered through a series of increasingly complex tasks.',
    ],
    misconceptions: [
      '"Is the same as cascading training."',
      '"Guarantees consistent training quality across all levels."',
      '"Is only appropriate for large organizations."',
    ],
    domain: 'I', category: 'Supervision',
    taskItem: 'I.2',
  },
  {
    id: 'rr-feedback-supervision', term: 'Performance Feedback',
    correctDefinition: 'Information provided to a supervisee about the accuracy and quality of their work, delivered in a timely and specific manner to shape and maintain professional behavior.',
    distractors: [
      'A written evaluation of a supervisee\'s overall performance completed at the end of a supervision period.',
      'A verbal summary of a supervisee\'s strengths and weaknesses provided during an annual review.',
      'A rating scale completed by clients to assess the quality of services they received.',
    ],
    misconceptions: [
      '"Should always be delivered privately to avoid embarrassing the supervisee."',
      '"Is only effective when delivered immediately after the behavior."',
      '"Is the same as praise."',
    ],
    domain: 'I', category: 'Supervision',
    taskItem: 'I.3',
  },
  {
    id: 'rr-direct-observation-supervision', term: 'Direct Observation (Supervision)',
    correctDefinition: 'A supervision activity in which the supervisor observes the supervisee implementing behavior-analytic procedures in real time, either in person or via live video, to assess skill and provide feedback.',
    distractors: [
      'A supervision activity in which the supervisee submits video recordings of their sessions for the supervisor to review asynchronously.',
      'A supervision activity in which the supervisor reviews the supervisee\'s written data and session notes.',
      'A supervision activity in which the supervisee role-plays a clinical scenario with the supervisor.',
    ],
    misconceptions: [
      '"Can be replaced entirely by video review."',
      '"Is only required for RBT supervision."',
      '"Is the same as group supervision."',
    ],
    domain: 'I', category: 'Supervision',
    taskItem: 'I.3',
  },
  {
    id: 'rr-group-supervision', term: 'Group Supervision',
    correctDefinition: 'A supervision format in which a supervisor meets simultaneously with multiple supervisees to discuss cases, review skills, and provide instruction, counting toward a portion of required supervision hours.',
    distractors: [
      'A supervision format in which multiple supervisors collaborate to oversee a single supervisee.',
      'A peer consultation model in which BCBAs meet without a designated supervisor to discuss cases.',
      'A training format in which all staff in an organization receive the same instruction simultaneously.',
    ],
    misconceptions: [
      '"Can replace all individual supervision hours."',
      '"Is less effective than individual supervision for all skill areas."',
      '"Is only permitted for RBT supervision, not BCBA supervision."',
    ],
    domain: 'I', category: 'Supervision',
    taskItem: 'I.3',
  },
  {
    id: 'rr-supervisory-relationship', term: 'Supervisory Relationship',
    correctDefinition: 'The professional relationship between a supervisor and supervisee characterized by defined roles, mutual expectations, and ethical obligations, distinct from a therapeutic or personal relationship.',
    distractors: [
      'A mentoring relationship in which an experienced BCBA provides informal guidance to a newer clinician.',
      'The contractual agreement between a BCBA and an agency that defines supervision responsibilities.',
      'A collegial relationship between two BCBAs who consult with each other on difficult cases.',
    ],
    misconceptions: [
      '"Is the same as a therapeutic relationship."',
      '"Permits personal friendships between supervisors and supervisees."',
      '"Is defined solely by the supervision contract."',
    ],
    domain: 'I', category: 'Supervision',
    taskItem: 'I.4',
  },
  {
    id: 'rr-rbt-supervision', term: 'RBT Supervision',
    correctDefinition: 'The ongoing oversight of a Registered Behavior Technician by a BCBA or BCaBA, requiring a minimum percentage of direct service hours to be directly observed each month as specified by BACB standards.',
    distractors: [
      'The process by which a BCBA trains a new RBT using the RBT Task List.',
      'The annual competency assessment completed by a BCBA to verify an RBT\'s skills.',
      'The written documentation of all supervision activities completed with an RBT.',
    ],
    misconceptions: [
      '"Requires the supervisor to be present for all RBT sessions."',
      '"Can be completed entirely through written feedback."',
      '"Is the same as BCBA fieldwork supervision."',
    ],
    domain: 'I', category: 'Supervision',
    taskItem: 'I.5',
  },
  {
    id: 'rr-treatment-integrity-supervision', term: 'Treatment Integrity  -  Supervision Monitoring',
    correctDefinition: 'The supervisor\'s responsibility to systematically measure and monitor whether supervisees are implementing behavior-change procedures with fidelity, using direct observation, permanent product review, or IOA data (I.3). Low treatment integrity is a common reason interventions fail to produce expected outcomes.',
    distractors: [
      'The degree to which a behavior-change procedure produces socially significant outcomes.',
      'The degree to which two independent observers agree on the occurrence of a target behavior.',
      'The degree to which an intervention generalizes across settings and people.',
    ],
    misconceptions: [
      '"Is the same as social validity."',
      '"Is only relevant for punishment procedures."',
      '"Is guaranteed when staff receive initial training."',
    ],
    domain: 'I', category: 'Supervision',
    taskItem: 'I.3',
  },
  {
    id: 'rr-staff-training', term: 'Staff Training',
    correctDefinition: 'The systematic instruction of direct care staff in the knowledge and skills required to implement behavior-analytic procedures with fidelity, typically using behavioral skills training.',
    distractors: [
      'The process of orienting new employees to organizational policies and procedures.',
      'The annual performance review process used to evaluate staff competency.',
      'The provision of written manuals and instructional materials to staff before they begin working with clients.',
    ],
    misconceptions: [
      '"Is complete once initial training has been delivered."',
      '"Is the same as supervision."',
      '"Only needs to address the specific procedures used with current clients."',
    ],
    domain: 'I', category: 'Supervision',
    taskItem: 'I.2',
  },
  {
    id: 'rr-continuing-education', term: 'Continuing Education (BACB)',
    correctDefinition: 'The ongoing professional development activities required by the BACB during each certification renewal cycle to ensure credentialed practitioners maintain and expand their knowledge and skills.',
    distractors: [
      'The supervised fieldwork hours required before a candidate can sit for the BCBA examination.',
      'The annual training required by employers for all direct care staff.',
      'The self-study activities a BCBA completes to prepare for a new area of clinical practice.',
    ],
    misconceptions: [
      '"Can be completed entirely through self-study without documented verification."',
      '"Is the same as supervised fieldwork."',
      '"Has no requirements for ethics content."',
    ],
    domain: 'I', category: 'Supervision',
    taskItem: 'I.1',
  },
  {
    id: 'rr-supervision-contract-i4', term: 'Supervisory Contract  -  Ethical Obligations (I.4)',
    correctDefinition: 'Beyond logistics, the supervisory contract must explicitly address the ethical obligations of both parties, including confidentiality of supervisee disclosures, conflict of interest procedures, and the process for addressing ethical violations (I.4).',
    distractors: [
      'A legal document signed by a client authorizing a BCBA to supervise their direct care staff.',
      'An agency policy that defines the minimum hours of supervision required for each staff role.',
      'A BACB-issued document confirming that a supervisor meets the requirements to provide fieldwork supervision.',
    ],
    misconceptions: [
      '"Is required by the BACB for all supervision relationships."',
      '"Is the same as an employment contract."',
      '"Eliminates the need for ongoing communication about supervision expectations."',
    ],
    domain: 'I', category: 'Supervision',
    taskItem: 'I.4',
  },
  {
    id: 'rr-generalization-supervision', term: 'Generalization of Supervisee Skills',
    correctDefinition: 'The extension of a supervisee\'s trained skills to novel clients, settings, and situations beyond those in which training originally occurred.',
    distractors: [
      'The process by which a supervisee learns to apply the same procedure to different target behaviors.',
      'The ability of a supervisee to train other staff members in the skills they have learned.',
      'The maintenance of supervisee skills after the formal supervision relationship has ended.',
    ],
    misconceptions: [
      '"Occurs automatically once a supervisee demonstrates a skill in training."',
      '"Is the same as maintenance of supervisee skills."',
      '"Is not a responsibility of the supervisor."',
    ],
    domain: 'I', category: 'Supervision',
    taskItem: 'I.2',
  },
  {
    id: 'rr-self-monitoring-supervisee', term: 'Self-Monitoring (Supervisee)',
    correctDefinition: 'A supervisee behavior in which the individual tracks and evaluates their own professional performance against defined criteria, often used to promote independence and maintenance of skills.',
    distractors: [
      'A behavior-change procedure in which a client records their own target behavior.',
      'A supervision strategy in which the supervisor provides written checklists for the supervisee to complete.',
      'A process in which a supervisee reviews their own session videos without supervisor feedback.',
    ],
    misconceptions: [
      '"Replaces the need for external supervisor feedback."',
      '"Is only effective for supervisees with advanced clinical skills."',
      '"Is the same as self-management."',
    ],
    domain: 'I', category: 'Supervision',
    taskItem: 'I.3',
  },
  {
    id: 'rr-burnout-supervision', term: 'Supervisee Burnout',
    correctDefinition: 'A state of chronic occupational stress characterized by emotional exhaustion, depersonalization, and reduced sense of personal accomplishment, which a supervisor has an ethical obligation to monitor and address.',
    distractors: [
      'A temporary decrease in supervisee performance caused by a difficult client assignment.',
      'A formal diagnosis of an anxiety or mood disorder in a supervisee.',
      'A pattern of absenteeism in a supervisee that indicates dissatisfaction with their role.',
    ],
    misconceptions: [
      '"Is solely the supervisee\'s responsibility to manage."',
      '"Is not within the scope of a supervisor\'s ethical obligations."',
      '"Can be resolved by increasing supervision frequency alone."',
    ],
    domain: 'I', category: 'Supervision',
    taskItem: 'I.4',
  },
  {
    id: 'rr-maintenance-supervisee', term: 'Maintenance of Supervisee Skills',
    correctDefinition: 'The persistence of a supervisee\'s trained skills over time and after the formal supervision relationship or training program has ended.',
    distractors: [
      'The extension of a supervisee\'s skills to novel clients and settings.',
      'The process of retraining a supervisee who has demonstrated skill regression.',
      'The documentation of a supervisee\'s competency at the conclusion of a supervision period.',
    ],
    misconceptions: [
      '"Is guaranteed once a supervisee passes a competency assessment."',
      '"Is the same as generalization of supervisee skills."',
      '"Is not a concern once a supervisee has obtained their BCBA credential."',
    ],
    domain: 'I', category: 'Supervision',
    taskItem: 'I.2',
  },

  // -- Domain G: Final Four ---------------------------------------------------
  {
    id: 'rr-ncr', term: 'Non-Contingent Reinforcement (NCR)',
    correctDefinition: 'Delivery of a reinforcer on a fixed-time or variable-time schedule, independent of the occurrence of any specific behavior; used to reduce problem behavior maintained by that reinforcer.',
    distractors: [
      'Reinforcement delivered contingent on the absence of problem behavior for a specified interval.',
      'Reinforcement delivered for any behavior other than the target problem behavior.',
      'Reinforcement delivered on a dense schedule to compete with problem behavior reinforcement.',
    ],
    misconceptions: [
      '"Is the same as DRO because both reduce problem behavior."',
      '"Requires identifying an alternative behavior to reinforce."',
      '"Is contingent on the individual not engaging in problem behavior."',
    ],
    domain: 'G', category: 'Behavior-Change Procedures',
    taskItem: 'G.3',
  },
  {
    id: 'rr-response-cost-application', term: 'Response Cost  -  Application',
    correctDefinition: 'Response cost is most effectively implemented within a token economy, where earned tokens can be removed contingent on problem behavior. The number of tokens removed must be calibrated carefully  -  removing too many can cause the system to lose its reinforcing value.',
    distractors: [
      'Response cost is most effective when implemented as a stand-alone punishment procedure without a reinforcement component.',
      'Response cost requires the removal of access to a preferred activity rather than a conditioned reinforcer.',
      'Response cost is most effective when the number of tokens removed exceeds the number the individual can earn in a session.',
    ],
    misconceptions: [
      '"Response cost and time-out are interchangeable because both involve removing something."',
      '"Response cost is only appropriate for severe problem behavior."',
      '"Response cost is a form of positive punishment because it involves taking something away."',
    ],
    domain: 'G', category: 'Behavior-Change Procedures',
    taskItem: 'G.17',
  },
  {
    id: 'rr-overcorrection-subtypes', term: 'Overcorrection  -  Restitution vs. Positive Practice',
    correctDefinition: 'Overcorrection has two subtypes: (1) Restitution overcorrection  -  the individual restores the environment to a better-than-original state (e.g., cleaning up a mess they made plus additional areas); (2) Positive practice overcorrection  -  the individual repeatedly practices the correct form of behavior (e.g., practicing walking to the door correctly 10 times after running).',
    distractors: [
      'Restitution overcorrection involves repeatedly practicing the correct behavior; positive practice involves restoring the environment.',
      'Both subtypes of overcorrection involve removing a conditioned reinforcer contingent on problem behavior.',
      'Positive practice overcorrection is a form of negative punishment because it removes access to preferred activities.',
    ],
    misconceptions: [
      '"Overcorrection always involves both restitution and positive practice simultaneously."',
      '"Positive practice overcorrection is the same as behavioral rehearsal used in skill acquisition."',
      '"Restitution overcorrection can only be used for property destruction."',
    ],
    domain: 'G', category: 'Behavior-Change Procedures',
    taskItem: 'G.17',
  },
  {
    id: 'rr-behavioral-momentum-clinical', term: 'Behavioral Momentum  -  High-p Request Sequence',
    correctDefinition: 'The clinical application of behavioral momentum: a series of high-probability (high-p) requests are delivered and reinforced before a low-probability (low-p) request, increasing the likelihood of compliance with the low-p request (G.1). The principle (B.22) and the clinical procedure (G.1) are related but distinct concepts.',
    distractors: [
      'The matching law principle that describes how organisms allocate behavior across concurrent schedules of reinforcement.',
      'The tendency for behavior to increase in rate following a period of extinction.',
      'The persistence of behavior that is maintained by automatic reinforcement despite changes in social contingencies.',
    ],
    misconceptions: [
      '"Is the same as the matching law."',
      '"Refers to the speed at which a behavior is acquired."',
      '"Is only applicable to problem behavior, not skill acquisition."',
    ],
    domain: 'G', category: 'Behavior-Change Procedures',
    taskItem: 'G.1',
  },

  // -- Domain H & I additions -----------------------------------------------
  {
    id: 'h7',
    term: 'Least Restrictive Alternative',
    correctDefinition: 'The ethical principle requiring selection of the least intrusive, least restrictive intervention capable of producing the desired behavior change before considering more restrictive options.',
    distractors: [
      'The principle that the most effective intervention should always be selected regardless of intrusiveness, because client welfare depends on rapid behavior change.',
      'A legal standard requiring that clients be placed in the least restrictive residential setting available, independent of clinical considerations.',
      'The requirement that behavior analysts exhaust all pharmacological options before implementing behavioral interventions.'
    ],
    misconceptions: [
      'Candidates confuse this with effectiveness — least restrictive does not mean least effective. The principle requires starting with the least restrictive option that is likely to work, not the weakest option available.'
    ],
    domain: 'H',
    taskItem: 'H.1',
    category: 'Intervention'
  },
  {
    id: 'h8',
    term: 'Noncontingent Reinforcement (NCR)',
    correctDefinition: 'Delivery of a reinforcer on a time-based schedule independent of behavior; reduces problem behavior by abolishing the motivating operation that maintains it.',
    distractors: [
      'Delivery of reinforcement contingent on the absence of problem behavior for a specified interval; a form of differential reinforcement.',
      'A procedure in which reinforcement is withheld until the problem behavior has been replaced by a communicative alternative.',
      'Delivery of reinforcement at unpredictable intervals to maintain high response rates without producing ratio strain.'
    ],
    misconceptions: [
      'NCR is frequently confused with DRO. The critical distinction: NCR is time-based and independent of behavior; DRO is contingent on the absence of behavior during an interval.'
    ],
    domain: 'H',
    taskItem: 'H.2',
    category: 'Intervention'
  },
  {
    id: 'h9',
    term: 'Functional Communication Training (FCT)',
    correctDefinition: 'A differential reinforcement procedure that teaches a communicative response that is functionally equivalent to the problem behavior, producing the same reinforcer, to replace it.',
    distractors: [
      'A procedure in which all instances of problem behavior are placed on extinction while simultaneously teaching a topographically similar communicative response.',
      'A naturalistic teaching approach in which communication skills are taught during child-initiated interactions in the natural environment.',
      'A social skills training package that uses video modeling and role-play to teach conversational turn-taking and requesting.'
    ],
    misconceptions: [
      'The defining feature of FCT is functional equivalence — the replacement response must produce the same reinforcer as the problem behavior. Teaching any communication skill is not FCT unless it serves the same function.'
    ],
    domain: 'H',
    taskItem: 'H.2',
    category: 'Intervention'
  },
  {
    id: 'h10',
    term: 'Behavior Intervention Plan (BIP)',
    correctDefinition: 'A written document that describes the function of a problem behavior, the antecedent and consequence strategies to address it, and the skill-building procedures to replace it; developed from FBA results.',
    distractors: [
      'A written document that lists all target behaviors for a client along with the reinforcement schedules and prompt hierarchies to be used in each program.',
      'A legal document required by IDEA that specifies the educational placement and related services for students with disabilities who exhibit problem behavior.',
      'A behavior support plan that describes the physical environment modifications needed to prevent problem behavior from occurring.'
    ],
    misconceptions: [
      'A BIP is not simply a list of consequences for problem behavior. It must include the function of the behavior, antecedent strategies, consequence strategies, and a replacement behavior plan derived from the FBA.'
    ],
    domain: 'H',
    taskItem: 'H.3',
    category: 'Intervention'
  },
  {
    id: 'h11',
    term: 'High-Probability Request Sequence',
    correctDefinition: 'An antecedent intervention in which several requests with a high probability of compliance are presented immediately before a low-probability request to increase compliance through behavioral momentum.',
    distractors: [
      'A consequence-based procedure in which preferred items are delivered contingent on compliance with difficult requests to increase motivation.',
      'A prompt hierarchy in which the most intrusive prompt is presented first and faded to less intrusive prompts as compliance increases.',
      'A token economy procedure in which tokens are delivered for each high-probability behavior completed, then exchanged for access to low-probability activities.'
    ],
    misconceptions: [
      'The high-p sequence is an antecedent intervention, not a consequence procedure. The high-p requests must be presented immediately before the low-p request to generate behavioral momentum.'
    ],
    domain: 'H',
    taskItem: 'H.2',
    category: 'Intervention'
  },
  {
    id: 'h12',
    term: 'Competing Stimulus Assessment',
    correctDefinition: 'A systematic evaluation of stimuli that may compete with the reinforcer maintaining automatically-reinforced problem behavior; used to identify items for enriched environments or alternative reinforcers in intervention.',
    distractors: [
      `A preference assessment format in which pairs of stimuli are presented simultaneously and the client's approach behavior determines relative reinforcer value.`,
      `An assessment that measures the degree to which competing verbal stimuli interfere with the client's ability to follow instructions.`,
      'A functional analysis condition in which competing reinforcers are delivered contingently to determine their relative reinforcing value compared to the maintaining reinforcer.'
    ],
    misconceptions: [
      'A competing stimulus assessment is specifically designed for automatically-maintained behavior. It is not a preference assessment — it measures reduction in problem behavior, not approach to stimuli.'
    ],
    domain: 'H',
    taskItem: 'H.2',
    category: 'Assessment'
  },
  {
    id: 'h13',
    term: 'Social Validity',
    correctDefinition: 'The degree to which the goals, procedures, and outcomes of an intervention are acceptable and meaningful to the client, caregivers, and the broader community.',
    distractors: [
      `The statistical measure of how much an intervention's effect size exceeds the standard deviation of the baseline data, indicating a socially meaningful change.`,
      'The extent to which a behavior change generalizes to social settings and is maintained by natural social reinforcement from peers and community members.',
      'A measure of how frequently the target behavior occurs in social contexts compared to non-social contexts, used to determine intervention priority.'
    ],
    misconceptions: [
      'Social validity has three components: goals, procedures, and outcomes — all three must be assessed. Candidates often focus only on outcome acceptability and overlook whether the goals themselves and the treatment procedures are considered acceptable by consumers.'
    ],
    domain: 'H',
    taskItem: 'H.4',
    category: 'Evaluation'
  },
  {
    id: 'h14',
    term: 'Behavior Trap',
    correctDefinition: 'A naturally occurring contingency in the environment that, once entered, captures and maintains a behavior through natural reinforcement; used to promote generalization and maintenance without continued programmed reinforcement.',
    distractors: [
      'A contrived contingency in which a behavior analyst arranges the environment to ensure that problem behavior is consistently followed by an aversive consequence.',
      'A stimulus control procedure in which a discriminative stimulus is gradually introduced into natural settings to promote generalization of trained behavior.',
      'A schedule of reinforcement in which the ratio requirement is gradually increased to thin programmed reinforcement while maintaining behavior.'
    ],
    misconceptions: [
      'A behavior trap relies on natural contingencies, not programmed ones. The key feature is that once the behavior is established, the natural environment takes over reinforcement without continued therapist involvement.'
    ],
    domain: 'H',
    taskItem: 'H.5',
    category: 'Intervention'
  },
  {
    id: 'h15',
    term: 'Antecedent Intervention',
    correctDefinition: 'A procedure that modifies the environment or events that precede a behavior in order to prevent problem behavior or promote desired behavior, without relying solely on consequence-based strategies.',
    distractors: [
      'A procedure that modifies the consequences following a behavior to change the future probability of that behavior occurring in similar antecedent conditions.',
      'A procedure that identifies the antecedent stimuli that evoke problem behavior through systematic manipulation of environmental variables.',
      'A procedure that uses prompts delivered before a behavior to ensure the behavior occurs and can then be reinforced.'
    ],
    misconceptions: [
      'Antecedent interventions modify the environment before the behavior occurs. Prompting is an antecedent intervention, but not all antecedent interventions are prompts — NCR, high-p sequences, and environmental modifications are all antecedent interventions.'
    ],
    domain: 'H',
    taskItem: 'H.2',
    category: 'Intervention'
  },
  {
    id: 'i7',
    term: 'Behavioral Skills Training (BST)',
    correctDefinition: 'A staff training package consisting of four components: instructions, modeling, rehearsal, and feedback; all four components must be present for the procedure to qualify as BST.',
    distractors: [
      `A supervision model in which the supervisor observes the supervisee's performance and provides written feedback within 48 hours of the observation.`,
      'A training approach that uses video modeling and written competency exams to ensure staff can identify and describe correct implementation of procedures.',
      'A performance management system that uses goal-setting, self-monitoring, and public posting to improve staff implementation fidelity.'
    ],
    misconceptions: [
      'BST requires all four components. A common error is assuming that instructions plus feedback constitute BST. Without modeling and rehearsal, the procedure is not BST regardless of how detailed the instructions or feedback are.'
    ],
    domain: 'I',
    taskItem: 'I.1',
    category: 'Supervision'
  },
  {
    id: 'i8',
    term: 'Performance Feedback',
    correctDefinition: 'Information provided to a supervisee about the accuracy and quality of their work, delivered in close temporal proximity to the observed behavior to promote skill acquisition and maintenance.',
    distractors: [
      `A written evaluation of a supervisee's overall clinical competence completed at the end of a supervision period and used for credentialing purposes.`,
      'A verbal summary of session data trends provided to the supervisee at weekly team meetings to inform intervention decisions.',
      'A formal performance improvement plan developed when a supervisee fails to meet minimum competency standards after repeated coaching.'
    ],
    misconceptions: [
      'Performance feedback must be specific and timely — delivered soon after the observed behavior. General praise or monthly evaluations are not performance feedback in the behavioral sense.'
    ],
    domain: 'I',
    taskItem: 'I.2',
    category: 'Supervision'
  },
  {
    id: 'i9',
    term: 'Pyramidal Training',
    correctDefinition: 'A staff training model in which a behavior analyst trains a small group of lead staff who then train other staff, creating a hierarchical dissemination structure that extends training reach.',
    distractors: [
      'A training model in which all staff receive identical training from the behavior analyst simultaneously in a group workshop format.',
      'A supervision model in which the behavior analyst provides individual supervision to each staff member on a rotating schedule.',
      'A training approach in which staff are ranked by competency level and assigned to client cases of increasing complexity.'
    ],
    misconceptions: [
      'Pyramidal training is defined by the hierarchical dissemination structure, not by the number of staff trained. The BCBA trains trainers who train others — the BCBA does not directly train all staff.'
    ],
    domain: 'I',
    taskItem: 'I.3',
    category: 'Supervision'
  }
,


  // ── Verbal Behavior Expansion ──────────────────────────────────────────────
  {
    id: 'vb-point-to-point',
    term: 'Point-to-Point Correspondence',
    correctDefinition: 'A formal property of verbal behavior in which each unit of the verbal response corresponds to a specific unit of the controlling stimulus, such that the sequence and form of the response mirrors the sequence and form of the stimulus.',
    distractors: [
      'A property of verbal behavior in which the overall meaning of a response matches the overall meaning of the stimulus, even if individual units do not correspond sequentially.',
      'A reinforcement contingency in which each instance of a verbal response produces a specific consequence that matches the topography of the response.',
      'A training procedure in which the therapist points to each component of a stimulus array and the learner names each component in order.',
    ],
    misconceptions: [
      'Point-to-point correspondence is about the formal relationship between stimulus units and response units, not about meaning or reinforcement. Echoics and textual responses both have point-to-point correspondence; mands and tacts do not.'
    ],
    domain: 'B',
    taskItem: 'B.19',
    category: 'Verbal Behavior'
  },
  {
    id: 'vb-formal-similarity',
    term: 'Formal Similarity',
    correctDefinition: 'A formal property of verbal behavior in which the controlling stimulus and the verbal response share the same sense mode (e.g., both are auditory, or both are visual) and have physically similar forms.',
    distractors: [
      'A property of verbal behavior in which the verbal response is functionally equivalent to the controlling stimulus, producing the same reinforcing outcome regardless of topography.',
      'A property of verbal behavior in which the speaker and listener share a common history of reinforcement for the same verbal forms.',
      'A training criterion requiring that a learner produce verbal responses that are topographically identical to the model across at least three consecutive sessions.',
    ],
    misconceptions: [
      'Formal similarity requires both same sense mode AND physical similarity of form. Echoics have both point-to-point correspondence and formal similarity. Textual responses have point-to-point correspondence but not formal similarity (visual stimulus to auditory response).'
    ],
    domain: 'B',
    taskItem: 'B.19',
    category: 'Verbal Behavior'
  },
  {
    id: 'vb-extended-tact',
    term: 'Extended Tact',
    correctDefinition: 'A tact that occurs in the presence of a novel stimulus that shares some but not all properties with the original training stimulus, resulting in a response that was not directly trained under that specific stimulus condition.',
    distractors: [
      'A tact emitted in the absence of the relevant stimulus due to a strong motivating operation that has temporarily increased the value of the associated reinforcer.',
      'A tact trained to a high level of fluency so that it occurs rapidly and automatically across all members of the stimulus class.',
      'A tact reinforced with a generalized conditioned reinforcer rather than a specific item, allowing it to occur across a wide range of contexts.',
    ],
    misconceptions: [
      'An extended tact occurs because of stimulus generalization. It is not an error; it is a predictable product of the training history. The three subtypes (metaphorical, metonymical, solistic) differ in which property of the original stimulus controls the response.'
    ],
    domain: 'B',
    taskItem: 'B.20',
    category: 'Verbal Behavior'
  },
  {
    id: 'vb-metaphorical-tact',
    term: 'Metaphorical Tact Extension',
    correctDefinition: 'An extended tact in which a response is controlled by a novel stimulus that shares a property with the original training stimulus, even though the novel stimulus belongs to a different stimulus class.',
    distractors: [
      'An extended tact in which a response is controlled by a stimulus that was present at the same time as the original training stimulus, even though the two stimuli are not physically similar.',
      'An extended tact in which a response is controlled by a part of the original training stimulus rather than the whole stimulus.',
      'An extended tact in which a response occurs in the absence of any relevant stimulus due to a strong history of reinforcement for that verbal form.',
    ],
    misconceptions: [
      'Metaphorical tact extensions involve shared physical or functional properties between the novel and original stimulus. They differ from metonymical extensions (contiguity-based) and solistic extensions (part-whole based).'
    ],
    domain: 'B',
    taskItem: 'B.20',
    category: 'Verbal Behavior'
  },
  {
    id: 'vb-metonymical-tact',
    term: 'Metonymical Tact Extension',
    correctDefinition: 'An extended tact in which a response is controlled by a stimulus that was merely present at the same time as the original training stimulus, with no physical similarity between the two stimuli.',
    distractors: [
      'An extended tact in which a response is controlled by a novel stimulus that shares a physical property with the original training stimulus, such as shape, color, or texture.',
      'An extended tact in which a response is controlled by a part of the original training stimulus rather than the whole, such as saying the name of an animal upon seeing only its tail.',
      'An extended tact in which a response is emitted in the absence of any stimulus due to a covert motivating operation.',
    ],
    misconceptions: [
      'Metonymical extensions are controlled by contiguity: the novel stimulus was present alongside the original, not because it shares properties with it. This distinguishes it from metaphorical (property-based) and solistic (part-whole) extensions.'
    ],
    domain: 'B',
    taskItem: 'B.20',
    category: 'Verbal Behavior'
  },
  {
    id: 'vb-solistic-tact',
    term: 'Solistic Tact Extension',
    correctDefinition: 'An extended tact in which a response is controlled by only a part of the original training stimulus, such that the response occurs when only a portion of the original stimulus complex is present.',
    distractors: [
      'An extended tact in which a response is controlled by a novel stimulus that shares a functional property with the original training stimulus, even though the two stimuli belong to different classes.',
      'An extended tact in which a response is controlled by a stimulus that was present at the same time as the original training stimulus, with no physical similarity between them.',
      'An extended tact in which a response is emitted in the absence of the original stimulus due to a history of intermittent reinforcement.',
    ],
    misconceptions: [
      'Solistic extensions are part-whole: the part controls the same response as the whole. This is distinct from metaphorical (shared property) and metonymical (temporal contiguity) extensions.'
    ],
    domain: 'B',
    taskItem: 'B.20',
    category: 'Verbal Behavior'
  },
  {
    id: 'vb-generic-tact',
    term: 'Generic Tact Extension',
    correctDefinition: 'An extended tact in which a response is controlled by a novel stimulus that is a member of the same general stimulus class as the original training stimulus, occurring because the novel stimulus shares defining features of that class.',
    distractors: [
      'An extended tact in which a response is controlled by a stimulus that shares only a superficial physical property with the original training stimulus, such as color or size, rather than defining class features.',
      'An extended tact in which a response is controlled by a stimulus that was present at the same time as the original training stimulus across multiple training trials.',
      'An extended tact that is trained directly by presenting multiple exemplars of the stimulus class until the response generalizes to all members.',
    ],
    misconceptions: [
      'Generic tact extensions are the most common and educationally desirable form of tact extension. Unlike metaphorical or metonymical extensions, the novel stimulus is a true member of the original class.'
    ],
    domain: 'B',
    taskItem: 'B.20',
    category: 'Verbal Behavior'
  },
  {
    id: 'vb-extended-mand',
    term: 'Extended Mand',
    correctDefinition: 'A mand emitted under a novel motivating operation or in novel stimulus conditions that were not part of original mand training, resulting in a request that was not directly trained under those specific conditions.',
    distractors: [
      'A mand reinforced with a non-specific generalized conditioned reinforcer rather than the specific item or activity named in the response.',
      'A mand emitted at a high rate due to a strong establishing operation that has greatly increased the value of the relevant reinforcer.',
      'A mand trained using a transfer of stimulus control procedure in which an echoic prompt is systematically faded until the mand occurs independently.',
    ],
    misconceptions: [
      'An extended mand occurs because the motivating operation or antecedent conditions have generalized beyond the original training context. The form of the response may be the same as the trained mand, but it is now controlled by novel conditions.'
    ],
    domain: 'B',
    taskItem: 'B.19',
    category: 'Verbal Behavior'
  },
  {
    id: 'vb-superstitious-mand',
    term: 'Superstitious Mand',
    correctDefinition: 'A mand maintained by an accidental reinforcement history in which the verbal response was coincidentally followed by the relevant reinforcer, even though the response did not actually produce the reinforcer.',
    distractors: [
      'A mand emitted in the absence of a relevant motivating operation because the speaker has a long history of reinforcement for that verbal form across many different contexts.',
      'A mand emitted in the presence of a novel stimulus condition that shares properties with the original training context, resulting in generalized requesting behavior.',
      'A mand reinforced on a variable-ratio schedule, producing a high and steady rate of requesting behavior that is highly resistant to extinction.',
    ],
    misconceptions: [
      'Superstitious mands are maintained by accidental contingencies: the reinforcer was available by coincidence, not because the mand produced it. This is distinct from extended mands, which involve stimulus generalization.'
    ],
    domain: 'B',
    taskItem: 'B.19',
    category: 'Verbal Behavior'
  },
  {
    id: 'vb-magical-mand',
    term: 'Magical Mand',
    correctDefinition: 'A mand emitted under a strong motivating operation but in the absence of a listener who has the ability or willingness to provide the relevant reinforcer, such that the verbal response cannot actually produce the specified reinforcer.',
    distractors: [
      'A mand emitted in the presence of a listener who is known to never provide reinforcement, maintained solely by the history of occasional accidental reinforcement.',
      'A mand emitted at a very high rate during extinction because the motivating operation has greatly increased the value of the reinforcer that is no longer available.',
      'A mand emitted in the absence of any motivating operation because the speaker has been reinforced for requesting in that context regardless of deprivation state.',
    ],
    misconceptions: [
      'Magical mands occur under strong motivating operations but without a capable listener. Wishing, praying, and talking to oneself about a desired item are common examples.'
    ],
    domain: 'B',
    taskItem: 'B.19',
    category: 'Verbal Behavior'
  },
  {
    id: 'vb-codic',
    term: 'Codic',
    correctDefinition: 'A verbal operant in which a written or printed verbal stimulus controls a written or printed verbal response, with point-to-point correspondence and formal similarity between stimulus and response; the written equivalent of the echoic.',
    distractors: [
      'A verbal operant in which an auditory verbal stimulus controls a written verbal response, with point-to-point correspondence between the spoken stimulus and the written response.',
      'A verbal operant in which a written verbal stimulus controls an auditory verbal response, such as reading aloud from a written text.',
      'A verbal operant in which a non-verbal visual stimulus controls a written verbal response, such as writing the name of an object after seeing a picture of it.',
    ],
    misconceptions: [
      'The codic involves written stimulus to written response, with both point-to-point correspondence and formal similarity. Copying text is a codic; reading aloud is a textual response, not a codic.'
    ],
    domain: 'B',
    taskItem: 'B.19',
    category: 'Verbal Behavior'
  },
  {
    id: 'vb-duplic',
    term: 'Duplic',
    correctDefinition: 'A class of verbal operants in which the verbal response reproduces the formal properties of the controlling verbal stimulus with point-to-point correspondence; includes both echoics (auditory to auditory) and codics (written to written).',
    distractors: [
      'A class of verbal operants in which the verbal response is controlled by a non-verbal stimulus and produces a specific reinforcer, encompassing both mands and tacts across all sense modalities.',
      'A class of verbal operants in which the verbal response is controlled by the verbal behavior of another speaker and produces a generalized conditioned reinforcer rather than a specific item.',
      'A class of verbal operants in which the verbal response reproduces the meaning of the controlling stimulus without necessarily reproducing its formal properties, such as paraphrasing.',
    ],
    misconceptions: [
      'Duplics are defined by formal reproduction of the stimulus. Echoics and codics are both duplics. Textual responses and transcription are not duplics because they cross sense modalities.'
    ],
    domain: 'B',
    taskItem: 'B.19',
    category: 'Verbal Behavior'
  }
];