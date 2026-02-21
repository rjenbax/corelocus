// Tier 2: Rapid Recall Data
// Each item: term, correct definition, 3 distractor definitions, misconceptions (weak boundaries)

export interface RapidRecallItem {
  id: string;
  term: string;
  correctDefinition: string;
  distractors: string[];
  misconceptions: string[]; // statements that are WRONG — tracked as "weak boundaries"
  domain: string;
  category: string;
}

export const rapidRecallItems: RapidRecallItem[] = [
  // ── Core Operant Concepts ──────────────────────────────────────────────────
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
  },
  {
    id: 'rr-auto-reinf', term: 'Automatic Reinforcement',
    correctDefinition: 'Reinforcement that is produced directly by the behavior itself, independent of the social mediation of another person.',
    distractors: [
      'Reinforcement delivered automatically by a device or computer program.',
      'Reinforcement that occurs on a fixed-time schedule regardless of behavior.',
      'Reinforcement provided by others without their awareness.',
    ],
    misconceptions: [
      '"Requires another person to deliver the reinforcer."',
      '"Is always sensory stimulation."',
      '"Cannot be identified through functional analysis."',
    ],
    domain: 'B', category: 'Core Concepts',
  },

  // ── Differential Reinforcement ─────────────────────────────────────────────
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
  },
  {
    id: 'rr-dri', term: 'DRI (Differential Reinforcement of Incompatible Behavior)',
    correctDefinition: 'Reinforcement is delivered for a behavior that is physically incompatible with the problem behavior — both cannot occur simultaneously.',
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
  },

  // ── Verbal Behavior ────────────────────────────────────────────────────────
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
  },

  // ── Stimulus Control & Measurement ────────────────────────────────────────
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
  },

  // ── Measurement ────────────────────────────────────────────────────────────
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
  },

  // ── Research Designs ───────────────────────────────────────────────────────
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
  },

  // ── Assessment ─────────────────────────────────────────────────────────────
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
  },

  // ── Behavior-Change Procedures ─────────────────────────────────────────────
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
  },

  // ── Dimensions of ABA ──────────────────────────────────────────────────────
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
  },
  {
    id: 'rr-effective', term: 'Effective (Dimension of ABA)',
    correctDefinition: 'The intervention produces a practical, meaningful change in the behavior — not merely a statistically significant one.',
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
  },
];

export const rapidRecallCategories = [
  'Core Concepts',
  'Differential Reinforcement',
  'Verbal Behavior',
  'Stimulus Control',
  'Measurement',
  'Research Designs',
  'Assessment',
  'Behavior-Change Procedures',
  'Dimensions of ABA',
];
