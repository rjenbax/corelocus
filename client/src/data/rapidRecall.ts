// Tier 2: Rapid Recall Data
// Each item: term, correct definition, 3 distractor definitions, misconceptions (weak boundaries)

export interface RapidRecallItem {
  id: string;
  term: string;
  correctDefinition?: string;
  distractors?: string[];
  misconceptions?: string[]; // statements that are WRONG  -  tracked as "weak boundaries"
  domain?: string;
  taskItem?: string;
  category?: string;
  question?: string; // legacy field
  domainFull?: string; // legacy field
  correctAnswer?: string; // legacy field
  incorrectAnswers?: string[]; // legacy field
  difficulty?: string; // legacy field
  bloomsLevel?: string; // legacy field
  [key: string]: unknown; // allow any other legacy fields
}

export const rapidRecallItems: RapidRecallItem[] = [
  {
    id: 'rr-mo', term: 'Motivating Operation (MO)',
    correctDefinition: 'An environmental variable that alters the reinforcing/punishing effectiveness of a stimulus AND alters the current frequency of behavior reinforced by that stimulus.',
    distractors: ['An environmental variable that signals the availability of reinforcement for a specific operant, thereby increasing the likelihood of that response in its presence.', 'An environmental variable that directly elicits a respondent behavior through a process of contiguity, without requiring any prior learning history.', 'An environmental variable that describes a rule-governed contingency and alters the probability of behavior based on its stated consequences.'],
    misconceptions: [
      '"Is the same as a discriminative stimulus."',
      '"Is always an environmental event that precedes behavior."',
      '"Requires a three-term contingency to function."',
      '"Only applies to food deprivation."',
    ],
    taskItem: 'B.16',
  },
  {
    id: 'rr-sd', term: 'Discriminative Stimulus (SD)',
    correctDefinition: 'A stimulus in the presence of which a behavior has been reinforced; it signals that reinforcement is currently available.',
    distractors: ['A stimulus in the presence of which an environmental variable increases the value of a reinforcer and evokes behavior.', 'A stimulus in the presence of which a stimulus follows behavior and increases its future frequency of occurrence.', 'A stimulus in the presence of which a stimulus has acquired reinforcing properties through a history of pairing.'],
    misconceptions: [
      '"Has a value-altering effect on reinforcers."',
      '"Is the same as a motivating operation."',
      '"Elicits behavior rather than evoking it."',
    ],
    taskItem: 'B.12',
  },
  {
    id: 'rr-reinforcement', term: 'Reinforcement',
    correctDefinition: 'A process in which a consequence follows a behavior and results in an increase in the future frequency of that behavior.',
    distractors: ['Any pleasant event that follows a behavior, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'A process that decreases the future frequency of a behavior, which is produced by implementing evidence-based behavior reduction procedures with treatment integrity', 'Providing praise or rewards to motivate someone, which alters both the reinforcing effectiveness of a stimulus and the current frequency of behavior that has produced it'],
    misconceptions: [
      '"Is defined by whether the individual likes the stimulus."',
      '"Always involves adding something to the environment."',
      '"Is the same as reward."',
    ],
    taskItem: 'B.4',
  },
  {
    id: 'rr-extinction', term: 'Extinction',
    correctDefinition: 'The discontinuation of a reinforcement contingency that previously maintained a behavior, resulting in a decrease in the future frequency of that behavior.',
    distractors: ['A procedure in which a behavior is punished to reduce its future frequency, expressed as the count of responses occurring within a defined and consistent observation period in the environment, which decreases the future probability of the behavior by altering the consequence that follows each occurrence', 'A procedure in which a competing behavior is reinforced to replace a problem behavior, which increases the future probability of the behavior occurring under similar antecedent conditions in the environment, which is produced by arranging reinforcement contingencies that follow the target behavior with consistency', 'A procedure in which a behavior is reinforced on an intermittent schedule to maintain it, which increases the future probability of the behavior occurring under similar antecedent conditions in the environment, which is produced by arranging reinforcement contingencies that follow the target behavior with consistency'],
    misconceptions: [
      '"Is the same as ignoring a behavior."',
      '"Always involves removing attention."',
      '"Immediately decreases behavior when implemented."',
    ],
    taskItem: 'B.11',
  },
  {
    id: 'rr-pos-reinf', term: 'Positive Reinforcement',
    correctDefinition: 'A stimulus is added following a behavior, resulting in an increase in the future frequency of that behavior.',
    distractors: ['A stimulus is removed following a behavior, resulting in an increase in the future frequency of that behavior.', 'A stimulus is added following a behavior, resulting in a decrease in the future frequency of that behavior.', 'A stimulus is added following a behavior, resulting in a pleasant stimulus delivered to reward the individual.'],
    misconceptions: [
      '"Is defined by whether the stimulus is pleasant or preferred."',
      '"Is the same as reward."',
      '"Always involves tangible items."',
    ],
    taskItem: 'B.4',
  },
  {
    id: 'rr-neg-reinf', term: 'Negative Reinforcement',
    correctDefinition: 'A stimulus is removed following a behavior, resulting in an increase in the future frequency of that behavior.',
    distractors: ['A stimulus is added following a behavior, resulting in a decrease in the future frequency of that behavior.', 'A stimulus is removed following a behavior, resulting in a decrease in the future frequency of that behavior.', 'A stimulus is removed following a behavior, resulting in punishment delivered to decrease undesirable behavior.'],
    misconceptions: [
      '"Is a form of punishment."',
      '"Is always bad or harmful."',
      '"Involves delivering something negative to the individual."',
    ],
    taskItem: 'B.4',
  },
  {
    id: 'rr-pos-pun', term: 'Positive Punishment',
    correctDefinition: 'A stimulus is added following a behavior, resulting in a decrease in the future frequency of that behavior.',
    distractors: ['A stimulus is removed following a behavior, resulting in a decrease in the future frequency of that behavior.', 'A stimulus is added following a behavior, resulting in an increase in the future frequency of that behavior.', 'A stimulus is added following a behavior, resulting in any aversive event delivered after a behavior.'],
    misconceptions: [
      '"Is always ethical to use."',
      '"Is defined by whether the stimulus is aversive."',
      '"Is the same as negative reinforcement."',
    ],
    taskItem: 'B.5',
  },
  {
    id: 'rr-neg-pun', term: 'Negative Punishment',
    correctDefinition: 'A stimulus is removed following a behavior, resulting in a decrease in the future frequency of that behavior.',
    distractors: ['A stimulus is added following a behavior, resulting in a decrease in the future frequency of that behavior.', 'A stimulus is removed following a behavior, resulting in an increase in the future frequency of that behavior.', 'A stimulus is removed following a behavior, resulting in withholding all stimuli to reduce it.'],
    misconceptions: [
      '"Is the same as extinction."',
      '"Always involves removing attention."',
      '"Is a form of positive reinforcement."',
    ],
    taskItem: 'B.5',
  },
  {
    id: 'rr-auto-reinf', term: 'Automatic Reinforcement',
    correctDefinition: 'Reinforcement that occurs independent of the social mediation of another person; the behavior produces its own reinforcing consequence directly (e.g., a child spinning objects because the visual stimulation is reinforcing regardless of adult attention).',
    distractors: ['Reinforcement that occurs when the consequence of a behavior is delivered by another person, making the reinforcement contingent on social interaction (e.g., a child receiving a desired toy only after asking an adult for it, thus mediated by the actions of another individual in the environment).', 'Reinforcement that is delivered after a predetermined, consistent number of responses have been emitted, requiring a specific and unchanging count of behaviors to occur before the reinforcing consequence is provided to the individual (e.g., a pigeon pecking a key exactly 10 times to receive food, adhering to a fixed-ratio schedule).', 'Reinforcement that is provided by a mechanical or electronic system, rather than direct human interaction, to strengthen a particular behavior, ensuring consistent and immediate delivery of the consequence (e.g., a vending machine dispensing a drink after money is inserted, operating independently of direct human intervention).'],
    misconceptions: [
      '"Automatic reinforcement is always sensory stimulation."',
      '"Automatic reinforcement cannot be identified through functional analysis."',
      '"Automatic reinforcement is the same as intrinsic motivation."',
    ],
    taskItem: 'B.6',
  },
  {
    id: 'rr-mand', term: 'Mand',
    correctDefinition: "A verbal operant evoked by a motivating operation; the speaker's response is reinforced by a characteristic consequence (getting what was asked for).",
    distractors: ['A verbal operant in which the speaker names or describes a stimulus in the environment, which exerts control over behavior through its temporal and contingent relationship with the organism\'s reinforcement history', 'A verbal operant in which the speaker responds to the verbal behavior of another person, which is reinforced through the mediated action of another person trained in the same verbal community as the speaker', 'A verbal operant in which the speaker repeats what another person has said, which is reinforced through the mediated action of another person trained in the same verbal community as the speaker'],
    misconceptions: [
      '"Is controlled by an SD rather than an MO."',
      '"Is reinforced by generalized conditioned reinforcement."',
      '"Requires the speaker to have language skills."',
    ],
    taskItem: 'B.19',
  },
  {
    id: 'rr-tact', term: 'Tact',
    correctDefinition: 'A verbal operant evoked by a nonverbal discriminative stimulus (object, event, or property) and reinforced by generalized conditioned reinforcement.',
    distractors: ['A verbal operant in which the speaker responds to the verbal behavior of another person, which is reinforced through the mediated action of another person trained in the same verbal community as the speaker', 'A verbal operant in which the speaker repeats what another person has said, which is reinforced through the mediated action of another person trained in the same verbal community as the speaker', 'A verbal operant in which the speaker requests a specific item or action, which is reinforced through the mediated action of another person trained in the same verbal community as the speaker'],
    misconceptions: [
      '"Is controlled by an MO rather than an SD."',
      '"Is reinforced by a specific, characteristic consequence."',
      '"Requires the listener to respond for reinforcement to occur."',
    ],
    taskItem: 'B.19',
  },
  {
    id: 'rr-intraverbal', term: 'Intraverbal',
    correctDefinition: 'A verbal operant evoked by a verbal SD; the response does not have point-to-point correspondence with the controlling stimulus.',
    distractors: ['A verbal operant in which the speaker reads written text aloud, which is reinforced through the mediated action of another person trained in the same verbal community as the speaker, which is reinforced through the mediated action of another person trained in the same verbal community as the speaker', 'A verbal operant in which the speaker requests a specific item or action, which is reinforced through the mediated action of another person trained in the same verbal community as the speaker, which is reinforced through the mediated action of another person trained in the same verbal community as the speaker', 'A verbal operant in which the speaker names a stimulus in the environment, which exerts control over behavior through its temporal and contingent relationship with the organism\'s reinforcement history, which is established through systematic observation and confirmed through experimental analysis when feasible'],
    misconceptions: [
      '"Has point-to-point correspondence with the verbal SD."',
      '"Is the same as echoic."',
      '"Is controlled by a nonverbal stimulus."',
    ],
    taskItem: 'B.19',
  },
  {
    id: 'rr-convergent', term: 'Convergent Multiple Control',
    correctDefinition: 'A condition in which a single verbal response is controlled by more than one variable simultaneously (multiple variables → one response).',
    distractors: ['A condition in which a single environmental variable controls multiple, distinct verbal responses within an individual\'s behavioral repertoire.', 'A condition in which verbal behavior is controlled by both an establishing operation and a discriminative stimulus simultaneously, affecting its rate.', 'A condition in which two or more speakers independently emit the exact same verbal response, without one influencing the other\'s behavior.'],
    misconceptions: [
      '"Is the same as divergent control."',
      '"Means one variable controls multiple responses."',
      '"Weakens the strength of the verbal response."',
    ],
    taskItem: 'B.20',
  },
  {
    id: 'rr-divergent', term: 'Divergent Multiple Control',
    correctDefinition: 'A condition in which a single variable affects more than one verbal response (one variable → multiple responses).',
    distractors: ['A condition in which multiple, distinct environmental variables control a single, specific verbal response emitted by a speaker.', 'A condition in which the speaker\'s verbal behavior deviates significantly from the expected or conventional forms, causing communication breakdown.', 'A condition in which a single motivating operation controls multiple different classes of operant behaviors simultaneously.'],
    misconceptions: [
      '"Is the same as convergent control."',
      '"Means multiple variables control one response."',
      '"Always results in impure verbal operants."',
    ],
    taskItem: 'B.20',
  },
  {
    id: 'rr-cond-reinf', term: 'Conditioned Reinforcer',
    correctDefinition: 'A stimulus that has acquired reinforcing function through a history of pairing with other reinforcers (secondary reinforcer).',
    distractors: ['A stimulus whose reinforcing value is inherently biological and does not necessitate any prior learning experiences for its effectiveness.', 'A stimulus that functions as a reinforcer only when the individual is in a specific state of deprivation or satiation, altering its potency.', 'A stimulus that has been paired with an unconditioned stimulus to elicit a reflex, thus becoming a conditioned stimulus for that response.'],
    misconceptions: [
      '"Does not require a learning history."',
      '"Is the same as unconditioned reinforcement."',
      '"Is always a tangible item."',
    ],
    taskItem: 'B.7',
  },
  {
    id: 'rr-uncond-reinf', term: 'Unconditioned Reinforcer',
    correctDefinition: 'A stimulus whose reinforcing value is biologically determined and does not require prior learning (primary reinforcer; e.g., food, water, warmth).',
    distractors: ['A stimulus that acquires its reinforcing function through a history of consistent pairing with other established or primary reinforcers.', 'A stimulus that provides reinforcement for behavior without any conditions, regardless of the current motivational state of the individual.', 'A stimulus that functions as a reinforcer only under specific conditions of deprivation, without any prior learning history.'],
    misconceptions: [
      '"Requires a learning history to function as a reinforcer."',
      '"Is always more powerful than conditioned reinforcement."',
      '"Is the same as conditioned reinforcement."',
    ],
    taskItem: 'B.7',
  },
  {
    id: 'rr-eo', term: 'Establishing Operation (EO)',
    correctDefinition: 'A motivating operation that increases the reinforcing effectiveness of a stimulus and increases the current frequency of behavior reinforced by that stimulus.',
    distractors: ['A motivating operation that decreases the reinforcing effectiveness of a specific stimulus and consequently reduces the frequency of related behavior.', 'A discriminative stimulus that consistently signals the availability of reinforcement for a particular behavior, increasing its probability.', 'An antecedent intervention designed to establish a novel behavior within an individual\'s behavioral repertoire through prompting and reinforcement.'],
    misconceptions: [
      '"Is the same as a discriminative stimulus."',
      '"Decreases the value of a reinforcer."',
      '"Only applies to unconditioned reinforcers."',
    ],
    taskItem: 'B.16',
  },
  {
    id: 'rr-ao', term: 'Abolishing Operation (AO)',
    correctDefinition: 'A motivating operation that decreases the reinforcing effectiveness of a stimulus and decreases the current frequency of behavior reinforced by that stimulus.',
    distractors: ['A motivating operation that increases the reinforcing effectiveness of a specific stimulus and thereby increases the frequency of related behavior.', 'A systematic procedure designed to remove a target behavior from an individual\'s behavioral repertoire through the use of punishment or extinction.', 'A discriminative stimulus that consistently signals when reinforcement is not currently available for a specific operant response.'],
    misconceptions: [
      '"Is the same as extinction."',
      '"Increases the value of a reinforcer."',
      '"Is the same as an establishing operation."',
    ],
    taskItem: 'B.16',
  },
  {
    id: 'rr-sdelta', term: 'S-Delta (SΔ)',
    correctDefinition: 'A stimulus in the presence of which a behavior has NOT been reinforced; it signals that reinforcement is not currently available.',
    distractors: ['A stimulus in the presence of which a behavior has consistently been reinforced; it signals that reinforcement is readily available.', 'A stimulus that reliably predicts the immediate availability of a highly aversive or punishing consequence.', 'A neutral stimulus that has been repeatedly paired with a conditioned stimulus to evoke a respondent behavior.'],
    misconceptions: [
      '"Is the same as an SD."',
      '"Signals that punishment is available."',
      '"Is a stimulus that has never been present during training."',
    ],
    taskItem: 'B.12',
  },
  {
    id: 'rr-stim-control', term: 'Stimulus Control',
    correctDefinition: 'A condition in which the frequency, latency, duration, or amplitude of a behavior is altered by the presence or absence of an antecedent stimulus.',
    distractors: ['The process of teaching a behavior to occur only in the presence of highly specific antecedent stimuli, but not others.', 'The ability of a specific stimulus to reliably elicit a respondent behavior through repeated pairings with an unconditioned stimulus.', 'The degree to which a particular behavior is primarily controlled by its immediate reinforcing or punishing consequences.'],
    misconceptions: [
      '"Only refers to the SD."',
      '"Means the stimulus causes the behavior."',
      '"Is the same as stimulus generalization."',
    ],
    taskItem: 'B.12',
  },
  {
    id: 'rr-stim-gen', term: 'Stimulus Generalization Programming',
    correctDefinition: 'The occurrence of a behavior in the presence of stimuli that are similar to but not identical to the training stimulus.',
    distractors: ['The occurrence of untrained responses that are functionally similar to the originally trained response.', 'The transfer of a learned behavior from one specific setting to another through explicit training.', 'The spread of behavior change across multiple different behaviors within the same response class.'],
    misconceptions: [
      '"Is the same as response generalization."',
      '"Only occurs when explicitly programmed."',
      '"Requires the new stimulus to be identical to the training stimulus."',
    ],
    taskItem: 'B.14',
  },
  {
    id: 'rr-resp-gen', term: 'Response Generalization',
    correctDefinition: 'The occurrence of untrained responses that are functionally similar to the trained response when the trained stimulus is presented.',
    distractors: ['The occurrence of a trained behavior in the presence of novel stimuli that are physically similar to the training stimulus.', 'The transfer of a learned behavior from one specific environmental setting to another, without explicit retraining efforts.', 'The spread of behavior change across multiple different response topographies within the same stimulus conditions.'],
    misconceptions: [
      '"Is the same as stimulus generalization."',
      '"Requires explicit training of each response."',
      '"Only occurs across different settings."',
    ],
    taskItem: 'B.14',
  },
  {
    id: 'rr-stim-disc', term: 'Stimulus Discrimination',
    correctDefinition: 'Differential responding to two or more stimuli; responding occurs in the presence of the SD but not in the presence of the SΔ.',
    distractors: ['The ability to distinguish between two or more different stimuli based on their unique physical or sensory properties.', 'A procedure in which different types of reinforcing consequences are delivered in the presence of distinct antecedent stimuli.', 'The process of teaching a behavior to occur only in one very specific environmental setting, not others.'],
    misconceptions: [
      '"Is the same as stimulus generalization."',
      '"Requires the stimuli to be physically different."',
      '"Is a cognitive process rather than a behavioral one."',
    ],
    taskItem: 'B.13',
  },
  {
    id: 'rr-duration', term: 'Duration',
    correctDefinition: 'The total amount of time a behavior lasts from onset to offset.',
    distractors: ['The elapsed time from the onset of a stimulus to the initiation of a response, which exerts control over behavior through its temporal and contingent relationship with the organism\'s reinforcement history', 'The total number of times a behavior occurs during an observation period, as measured by direct observation using operationally defined response definitions across consistent observation periods', 'The proportion of time during which a behavior is occurring, as measured by direct observation using operationally defined response definitions across consistent observation periods'],
    misconceptions: [
      '"Is the same as latency."',
      '"Is the same as interresponse time."',
      '"Is the best measure for all behaviors."',
    ],
    taskItem: 'C.4',
  },
  {
    id: 'rr-latency', term: 'Latency',
    correctDefinition: 'The elapsed time from the onset of a stimulus (SD or instruction) to the initiation of a response.',
    distractors: ['The total number of times a behavior occurs during an observation period, as measured by direct observation using operationally defined response definitions across consistent observation periods', 'The average time between successive responses, which is shaped and maintained by the contingent delivery of reinforcing or punishing consequences in the environment, which decreases the future probability of the behavior by altering the consequence that follows each occurrence', 'The elapsed time from the onset of a response to its offset, which is shaped and maintained by the contingent delivery of reinforcing or punishing consequences in the environment, which decreases the future probability of the behavior by altering the consequence that follows each occurrence'],
    misconceptions: [
      '"Is the same as duration."',
      '"Is the same as interresponse time."',
      '"Is measured from the end of the SD to the end of the response."',
    ],
    taskItem: 'C.4',
  },
  {
    id: 'rr-irt', term: 'Interresponse Time (IRT)',
    correctDefinition: 'The elapsed time between the offset of one response and the onset of the next response of the same type.',
    distractors: ['The elapsed time from the onset of a stimulus to the initiation of the very first response.', 'The total amount of time a specific behavior lasts from its initial onset to its final offset.', 'The time interval between two consecutive trials in a structured discrete trial training session.'],
    misconceptions: [
      '"Is the same as latency."',
      '"Is measured from the beginning of one response to the beginning of the next."',
      '"Is the same as duration."',
    ],
    taskItem: 'C.4',
  },
  {
    id: 'rr-partial-interval', term: 'Partial Interval Recording',
    correctDefinition: 'Records whether the behavior occurred at ANY point during the interval; tends to OVERESTIMATE behavior occurrence.',
    distractors: ['Records whether the behavior occurred throughout the ENTIRE interval; tends to UNDERESTIMATE behavior occurrence.', 'Records whether the behavior is occurring at the precise MOMENT the observation interval concludes.', 'Records the exact number of times the target behavior occurs within each specified observation interval.'],
    misconceptions: [
      '"Tends to underestimate behavior."',
      '"Is the same as whole interval recording."',
      '"Is the most accurate form of interval recording."',
    ],
    taskItem: 'C.6',
  },
  {
    id: 'rr-whole-interval', term: 'Whole Interval Recording',
    correctDefinition: 'Records whether the behavior occurred throughout the ENTIRE interval; tends to UNDERESTIMATE behavior occurrence.',
    distractors: ['Records whether the behavior occurred at ANY point during the interval; tends to OVERESTIMATE behavior occurrence.', 'Records whether the behavior is occurring at the precise MOMENT the observation interval concludes.', 'Records the total duration of a behavior within each specified observation interval, from start to finish.'],
    misconceptions: [
      '"Tends to overestimate behavior."',
      '"Is the same as partial interval recording."',
      '"Is best for behaviors with short durations."',
    ],
    taskItem: 'C.6',
  },
  {
    id: 'rr-mts', term: 'Momentary Time Sampling (MTS)',
    correctDefinition: 'Records whether the behavior is occurring at the MOMENT the interval ends; can over- or underestimate depending on behavior characteristics.',
    distractors: ['Records whether the behavior occurred throughout the entire observation interval, from beginning to end, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'Records whether the behavior occurred at any point during the observation interval, even briefly, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'Records the frequency of behavior at randomly selected moments in time, rather than fixed intervals, expressed as the number of times a response occurs within a defined observation period.'],
    misconceptions: [
      '"Always overestimates behavior."',
      '"Is the most accurate form of interval recording."',
      '"Is the same as partial interval recording."',
    ],
    taskItem: 'C.6',
  },
  {
    id: 'rr-ioa', term: 'Interobserver Agreement (IOA)',
    correctDefinition: 'The degree to which two or more independent observers record the same values for the same behavior during the same observation period; an index of measurement reliability.',
    distractors: ['The degree to which an intervention is implemented consistently across conditions by all practitioners, indicating procedural fidelity in a research study.', 'The degree to which the observed behavior maintains stability across repeated observations within a single condition, reflecting measurement consistency.', 'The degree to which a measurement procedure yields the same values when repeated under the same conditions, indicating the tool\'s reliability.'],
    misconceptions: [
      '"Is the same as treatment integrity."',
      '"Measures the validity of the measurement system."',
      '"Is only required for research studies."',
    ],
    taskItem: 'C.8',
  },
  {
    id: 'rr-reversal', term: 'Reversal Design (ABAB)',
    correctDefinition: 'A single-case design in which baseline and treatment conditions are alternated; experimental control is demonstrated when behavior changes with each condition change.',
    distractors: ['A single-case design where the intervention is introduced across subjects, settings, or behaviors, requiring no return to baseline to demonstrate control.', 'A single-case design in which two or more distinct conditions are rapidly alternated within a session to compare their relative effects on the target behavior.', 'A single-case design where the criterion for reinforcement is systematically changed in a step-wise fashion to shape the target behavior incrementally.'],
    misconceptions: [
      '"Does not require the behavior to be reversible."',
      '"Is the same as multiple baseline design."',
      '"Can only be used with two conditions."',
    ],
    taskItem: 'D.7',
  },
  {
    id: 'rr-changing-criterion', term: 'Changing Criterion Design',
    correctDefinition: 'A single-case design in which the criterion for reinforcement is changed systematically; control is demonstrated when behavior matches each successive criterion.',
    distractors: ['A single-case design in which baseline and treatment conditions are systematically alternated to demonstrate experimental control over a target behavior.', 'A single-case design where the intervention is introduced sequentially across behaviors, settings, or subjects without requiring a return to baseline.', 'A single-case design in which two or more distinct conditions are rapidly alternated within sessions to compare their relative effects on behavior.'],
    misconceptions: [
      '"Requires a reversal phase to demonstrate control."',
      '"Is the same as multiple baseline design."',
      '"Is used to compare two different treatments."',
    ],
    taskItem: 'D.7',
  },
  {
    id: 'rr-prediction', term: 'Prediction (Baseline Logic)',
    correctDefinition: 'The first element of baseline logic: the stable baseline data allow prediction of the future course of behavior if the intervention were not introduced.',
    distractors: ['The element of baseline logic that verifies the intervention\'s effect by demonstrating behavior returns to baseline when the treatment is withdrawn.', 'The element of baseline logic that shows the intervention\'s effect can be reproduced across different conditions or participants, confirming its impact.', 'The process of establishing a functional relation by demonstrating that a behavior changes only when the independent variable is present.'],
    misconceptions: [
      '"Is demonstrated by the treatment phase, not the baseline."',
      '"Is the same as verification."',
      '"Requires a stable trend in the treatment phase."',
    ],
    taskItem: 'D.4',
  },
  {
    id: 'rr-verification', term: 'Verification (Baseline Logic)',
    correctDefinition: 'The second element of baseline logic: the return to baseline (or a concurrent baseline) shows that behavior would not have changed without the intervention, ruling out extraneous variables.',
    distractors: ['The initial element of baseline logic: the stable baseline data allow prediction of the future course of behavior if the intervention were not introduced.', 'The element of baseline logic that demonstrates the intervention\'s effect can be reproduced across different conditions or participants, confirming its impact.', 'The process of establishing a functional relation by demonstrating that a behavior changes only when the independent variable is present and withdrawn.'],
    misconceptions: [
      '"Is the same as replication."',
      '"Is demonstrated by the treatment phase."',
      '"Is the same as prediction."',
    ],
    taskItem: 'D.4',
  },
  {
    id: 'rr-replication', term: 'Replication',
    correctDefinition: 'The third element of baseline logic: the effect is reproduced by reintroducing the intervention, strengthening the demonstration of experimental control.',
    distractors: ['The process of extending a study to include additional dependent variables, which is identified through assessment and manipulated or controlled to produce the desired behavior change, which is identified through assessment and manipulated or controlled to produce the desired behavior change', 'The process of verifying that an intervention is being implemented correctly, which is designed based on assessment data and implemented with fidelity to produce the desired behavior change, which is designed based on assessment data and implemented with fidelity to produce the desired behavior change', 'The process of repeating a measurement procedure to check its reliability, using operationally defined response definitions to ensure consistent and reliable data collection across all observers, which is analyzed to evaluate the effectiveness of the intervention and guide clinical decision-making processes'],
    misconceptions: [
      '"Is the same as verification."',
      '"Is demonstrated by the baseline phase."',
      '"Only refers to direct replication across studies."',
    ],
    taskItem: 'D.4',
  },
  {
    id: 'rr-component', term: 'Component Analysis',
    correctDefinition: 'A research strategy that systematically removes or adds components of a treatment package to identify which components are necessary and sufficient for behavior change.',
    distractors: ['A research strategy that compares the overall effectiveness of two or more complete treatment packages against each other or a control condition.', 'A research strategy that systematically varies the value or intensity of a single independent variable across conditions to identify optimal levels.', 'A research strategy that evaluates the effectiveness of an intervention by comparing it to a no-treatment control condition or a placebo condition.'],
    misconceptions: [
      '"Is the same as parametric analysis."',
      '"Compares two complete treatment packages."',
      '"Is used to identify the function of a behavior."',
    ],
    taskItem: 'D.8',
  },
  {
    id: 'rr-parametric', term: 'Parametric Analysis',
    correctDefinition: 'A research strategy that varies the value (parameter) of an independent variable across conditions to identify the optimal level of the variable.',
    distractors: ['A research strategy that systematically removes or adds components to a treatment package to evaluate their individual contributions.', 'A research strategy that compares two or more distinct and complete treatment packages to determine which is more effective.', 'A statistical analysis used to determine if observed behavior changes are statistically significant and not due to chance.'],
    misconceptions: [
      '"Is the same as component analysis."',
      '"Compares two different treatments."',
      '"Uses statistical tests to analyze data."',
    ],
    taskItem: 'D.8',
  },
  {
    id: 'rr-comparative', term: 'Comparative Analysis',
    correctDefinition: 'A research strategy that compares the effects of two or more complete treatment packages to determine which is more effective.',
    distractors: ['A research strategy that systematically removes or adds components of a treatment package to evaluate their individual contributions.', 'A research strategy that varies the value of an independent variable across conditions to identify its optimal level of impact.', 'A research strategy that compares a treatment condition to a baseline condition where no intervention is present.'],
    misconceptions: [
      '"Is the same as component analysis."',
      '"Is the same as parametric analysis."',
      '"Identifies which components of a treatment are necessary."',
    ],
    taskItem: 'D.8',
  },
  {
    id: 'rr-treatment-package', term: 'Treatment Package Analysis',
    correctDefinition: 'A research strategy that evaluates the combined effects of multiple treatment components implemented together, before analyzing individual components.',
    distractors: ['An intervention that is compared to a control condition in an alternating treatments design, which demonstrates experimental control by systematically manipulating the independent variable across conditions or tiers', 'An intervention that is withdrawn and reintroduced to demonstrate experimental control, which is designed based on assessment data and implemented with fidelity to produce the desired behavior change', 'An intervention that is applied sequentially across multiple baselines, which is designed based on assessment data and implemented with fidelity to produce the desired behavior change'],
    misconceptions: [
      '"Is the same as component analysis."',
      '"Identifies which components are necessary."',
      '"Is used to compare two different treatments."',
    ],
    taskItem: 'D.8',
  },
  {
    id: 'rr-indirect', term: 'Indirect Assessment',
    correctDefinition: 'An FBA method that gathers information through interviews, rating scales, and questionnaires without direct observation of the behavior.',
    distractors: ['An FBA method that involves direct observation of the behavior in the natural environment, documenting antecedents and consequences as they occur.', 'An FBA method that systematically manipulates environmental variables in a controlled setting to experimentally identify the function of the target behavior.', 'An assessment method that directly measures the behavior of interest using event recording or duration recording in the natural environment.'],
    misconceptions: [
      '"Is the most rigorous form of FBA."',
      '"Involves direct observation of the behavior."',
      '"Is sufficient as the sole basis for a function-based intervention."',
    ],
    taskItem: 'F.1',
  },
  {
    id: 'rr-descriptive', term: 'Descriptive Assessment',
    correctDefinition: 'An FBA method that involves direct observation of behavior in the natural environment, recording antecedents and consequences as they naturally occur.',
    distractors: ['An FBA method that gathers information through interviews, rating scales, and questionnaires without direct observation of the behavior of concern.', 'An FBA method that involves systematic manipulation of antecedents and consequences to experimentally identify the function of the target behavior.', 'An assessment that focuses solely on the topography of a behavior without considering its environmental context or the maintaining contingencies.'],
    misconceptions: [
      '"Is the most rigorous form of FBA."',
      '"Involves manipulation of environmental variables."',
      '"Is sufficient to confirm a functional relationship."',
    ],
    taskItem: 'F.5',
  },
  {
    id: 'rr-fa', term: 'Functional Analysis (FA)',
    correctDefinition: 'An FBA method that involves systematic manipulation of antecedent and consequence variables to experimentally identify the function(s) of a behavior; the most rigorous method.',
    distractors: ['An FBA method that involves direct observation of behavior in the natural environment, recording antecedents and consequences as they naturally occur.', 'An FBA method that gathers information through interviews, rating scales, and questionnaires without direct observation of the behavior of concern.', 'An analysis of the function of a behavior based on hypothetical scenarios and informant reports, rather than direct manipulation of variables.'],
    misconceptions: [
      '"Is the same as descriptive assessment."',
      '"Does not require manipulation of variables."',
      '"Is less rigorous than descriptive assessment."',
    ],
    taskItem: 'F.6',
  },
  {
    id: 'rr-preference', term: 'Preference Assessment',
    correctDefinition: 'A systematic procedure for identifying stimuli that may function as reinforcers for an individual, prior to implementing a reinforcement-based intervention.',
    distractors: ['A systematic procedure for identifying the maintaining variables of a problem behavior through direct observation and environmental manipulation.', 'A systematic procedure for evaluating an individual\'s current skill repertoire across various domains to inform educational programming decisions.', 'A systematic procedure for identifying the environmental conditions under which a target behavior is most likely to occur or not occur.'],
    misconceptions: [
      '"Confirms that a stimulus will function as a reinforcer."',
      '"Is the same as a reinforcer assessment."',
      '"Only uses caregiver report."',
    ],
    taskItem: 'F.4',
  },
  {
    id: 'rr-topo-def', term: 'Topography-Based Definition',
    correctDefinition: 'A behavior definition that describes what the behavior looks like (its physical form), without reference to its function or effect on the environment.',
    distractors: ['A behavior definition that describes the environmental conditions under which the behavior is most likely to occur, including antecedent and consequent events.', 'A behavior definition that describes the effect of the behavior on the environment, focusing on its outcome rather than its physical appearance.', 'A behavior definition that includes both the physical form of the behavior and the specific environmental context in which it typically occurs.'],
    misconceptions: [
      '"Is the same as a function-based definition."',
      '"Describes the purpose or function of the behavior."',
      '"Is always preferred over function-based definitions."',
    ],
    taskItem: 'C.1',
  },
  {
    id: 'rr-func-def', term: 'Function-Based Definition',
    correctDefinition: 'A behavior definition that describes the behavior in terms of its effect on the environment or its function, rather than its physical form.',
    distractors: ['A behavior definition that describes what the behavior physically looks like, without considering its impact on the surrounding environment.', 'A behavior definition that is based on the observable physical characteristics of the response, independent of its environmental effects.', 'A behavior definition that includes both the physical form of the behavior and its observable appearance to an outside observer.'],
    misconceptions: [
      '"Is the same as a topography-based definition."',
      '"Describes the physical form of the behavior."',
      '"Can only be written after a functional analysis is complete."',
    ],
    taskItem: 'C.1',
  },
  {
    id: 'rr-abc-narrative', term: 'ABC Narrative Recording',
    correctDefinition: 'A descriptive assessment method in which an observer records antecedents, behaviors, and consequences as they occur in sequence, in narrative form.',
    distractors: ['A descriptive assessment method in which the observer quantifies the frequency of specified antecedent, behavior, and consequence categories.', 'A descriptive assessment method in which specific behaviors are tallied during predetermined intervals to calculate their rate of occurrence.', 'A descriptive assessment method in which the observer systematically manipulates environmental variables to test hypotheses about behavior function.'],
    misconceptions: [
      '"Involves manipulation of antecedents and consequences."',
      '"Is the same as a functional analysis."',
      '"Only records the behavior, not antecedents and consequences."',
    ],
    taskItem: 'C.2',
  },
  {
    id: 'rr-scatter', term: 'Scatter Plot Assessment',
    correctDefinition: 'A descriptive assessment tool that displays the time of day and day of week when a behavior occurs, helping identify temporal patterns and potential antecedent conditions.',
    distractors: ['A descriptive assessment tool that provides a narrative account of antecedents, behaviors, and consequences as they occur in chronological order.', 'A descriptive assessment tool that quantifies the frequency of specific antecedents and consequences associated with a target behavior.', 'A descriptive assessment tool that graphically displays the relationship between two different variables, not just time and day, which provides objective information about the current level and trend of the target behavior.'],
    misconceptions: [
      '"Is a form of continuous measurement."',
      '"Identifies the function of a behavior."',
      '"Is the same as ABC recording."',
    ],
    taskItem: 'F.5',
  },
  {
    id: 'rr-habituation', term: 'Habituation',
    correctDefinition: 'A decrease in responding to a stimulus following repeated presentations of that stimulus; a form of respondent behavior change that does not involve conditioning.',
    distractors: ['A decrease in the reinforcing value of a stimulus following repeated exposure, which exerts control over behavior through its temporal and contingent relationship with the organism\'s reinforcement history', 'A decrease in behavior following the removal of a motivating operation, which alters both the reinforcing effectiveness of a stimulus and the current frequency of behavior that has produced it', 'A decrease in operant behavior following repeated non-reinforcement, which increases the future probability of the behavior occurring under similar antecedent conditions in the environment'],
    misconceptions: [
      '"Is the same as respondent extinction."',
      '"Is a form of operant extinction."',
      '"Requires prior conditioning to occur."',
    ],
    taskItem: 'B.3',
  },
  {
    id: 'rr-respondent-extinction', term: 'Respondent Extinction',
    correctDefinition: 'A procedure in which a conditioned stimulus (CS) is repeatedly presented without the unconditioned stimulus (US), resulting in a decrease in the conditioned response (CR).',
    distractors: ['A procedure in which a conditioned reinforcer is repeatedly presented without pairing, which is implemented systematically and evaluated through ongoing data collection to determine its effectiveness', 'A procedure in which a conditioned punisher is repeatedly presented without pairing, which is implemented systematically and evaluated through ongoing data collection to determine its effectiveness', 'A procedure in which reinforcement for an operant behavior is discontinued, which increases the future probability of the behavior occurring under similar antecedent conditions in the environment'],
    misconceptions: [
      '"Is the same as habituation."',
      '"Is a form of operant extinction."',
      '"Involves the discontinuation of reinforcement."',
    ],
    taskItem: 'B.11',
  },
  {
    id: 'rr-stim-class', term: 'Stimulus Class',
    correctDefinition: 'A group of stimuli that share common elements (formal, temporal, or functional) and evoke the same response or are treated similarly by an organism.',
    distractors: ['A group of responses that share a common function or effect on the environment, despite variations in their physical appearance or form.', 'A group of stimuli that are physically identical and produce the same sensory input, regardless of their behavioral impact or function.', 'A group of stimuli that are functionally equivalent, meaning they all evoke the same response, but may differ in their physical properties.'],
    misconceptions: [
      '"Is the same as response class."',
      '"Only includes stimuli that are physically similar."',
      '"Is defined by the topography of the stimuli."',
    ],
    taskItem: 'B.2',
  },
  {
    id: 'rr-resp-class', term: 'Response Class',
    correctDefinition: 'A group of responses that, despite differing in topography, all produce the same effect on the environment and are maintained by the same reinforcer.',
    distractors: ['A group of stimuli that are all members of the same category, based on their physical characteristics or their effect on behavior.', 'A group of responses that are all physically identical in their form, regardless of the different environmental effects they might produce.', 'A group of responses that are maintained by different reinforcers but occur under similar environmental conditions or settings.'],
    misconceptions: [
      '"Is the same as stimulus class."',
      '"Requires all responses to have the same topography."',
      '"Is defined by the setting in which responses occur."',
    ],
    taskItem: 'B.1',
  },
  {
    id: 'rr-shaping', term: 'Shaping',
    correctDefinition: 'The differential reinforcement of successive approximations to a target behavior; reinforcement is delivered for responses that progressively resemble the terminal behavior.',
    distractors: ['A procedure for teaching a behavior by providing physical guidance through the correct response, which is implemented systematically and evaluated through ongoing data collection to determine its effectiveness', 'A procedure for teaching a behavior by breaking it into steps and teaching each step in sequence, which is implemented systematically and evaluated through ongoing data collection to determine its effectiveness', 'A procedure for teaching a behavior by reinforcing it on an intermittent schedule, which specifies the relationship between responses and the delivery of reinforcing or punishing consequences over time'],
    misconceptions: [
      '"Is the same as chaining."',
      '"Involves teaching a sequence of behaviors."',
      '"Requires the terminal behavior to already be in the repertoire."',
    ],
    taskItem: 'G.11',
  },
  {
    id: 'rr-prompting', term: 'Prompting',
    correctDefinition: 'Supplementary antecedent stimuli that increase the probability that a correct response will occur; used to teach new behaviors.',
    distractors: ['Procedures used to reduce the frequency of problem behavior, which is implemented systematically and evaluated through ongoing data collection to determine its effectiveness', 'Antecedent stimuli that signal the availability of punishment, which decreases the future probability of the behavior by altering the consequence that follows each occurrence', 'Consequences delivered after a correct response to increase its future frequency, which is produced by arranging reinforcement contingencies that follow the target behavior with consistency'],
    misconceptions: [
      '"Is the same as fading."',
      '"Is a consequence-based procedure."',
      '"Should be maintained indefinitely to ensure correct responding."',
    ],
    taskItem: 'G.7',
  },
  {
    id: 'rr-fading', term: 'Fading',
    correctDefinition: 'The gradual removal of prompts across trials so that the behavior comes under the control of the natural SD rather than the prompt.',
    distractors: ['The gradual introduction of prompts to increase the probability of correct responding in the initial stages of learning.', 'The gradual reduction of reinforcement density to promote maintenance and generalization of the learned behavior.', 'The gradual increase in task difficulty across sessions to challenge the learner and expand their repertoire.'],
    misconceptions: [
      '"Is the same as prompting."',
      '"Involves adding prompts over time."',
      '"Is used to reduce the frequency of a behavior."',
    ],
    taskItem: 'G.8',
  },
  {
    id: 'rr-task-analysis', term: 'Task Analysis',
    correctDefinition: 'The process of breaking a complex behavior chain into its component steps; used to teach chained behaviors systematically.',
    distractors: ['The process of identifying the antecedents and consequences of a target behavior, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'The process of identifying the prerequisite skills for a target behavior, which is taught using evidence-based instructional procedures and evaluated through direct performance measurement', 'The process of breaking a session into discrete trials, as defined within the science of behavior analysis and applied to improve socially significant behaviors in natural environments'],
    misconceptions: [
      '"Is the same as functional behavior assessment."',
      '"Identifies the function of a behavior."',
      '"Is only used for academic tasks."',
    ],
    taskItem: 'G.12',
  },
  {
    id: 'rr-applied', term: 'Applied (Dimension of ABA)',
    correctDefinition: 'The behavior, stimuli, and/or organism under study are chosen because of their importance to society; the focus is on socially significant behavior.',
    distractors: ['The behavior is described and measured in observable, quantifiable terms, focusing on what is done rather than internal states or hypothetical constructs.', 'The procedures are described with sufficient detail to allow replication by other trained practitioners, ensuring consistency across implementers and settings.', 'The behavior change is shown to be a function of the intervention, demonstrating experimental control through systematic manipulation of independent variables.'],
    misconceptions: [
      '"Refers to the use of applied statistical methods."',
      '"Means the procedures are practical and easy to implement."',
      '"Is the same as the \'effective\' dimension."',
    ],
    taskItem: 'A.5',
  },
  {
    id: 'rr-behavioral', term: 'Behavioral (Dimension of ABA)',
    correctDefinition: 'The behavior under study is observable and measurable; the focus is on what the individual does, not inferred internal states.',
    distractors: ['The behavior change is important to society and has immediate practical significance for the individual.', 'The procedures are described with sufficient detail to allow replication by other trained practitioners.', 'The behavior change is shown to be a function of the intervention, demonstrating experimental control.'],
    misconceptions: [
      '"Means the study focuses on behavioral disorders."',
      '"Refers to the use of behavioral theory."',
      '"Is the same as the \'analytic\' dimension."',
    ],
    taskItem: 'A.5',
  },
  {
    id: 'rr-analytic', term: 'Analytic (Dimension of ABA)',
    correctDefinition: 'The practitioner demonstrates a functional relationship between the intervention (IV) and the behavior change (DV) through experimental control.',
    distractors: ['The behavior under study is observable and measurable, focusing on overt actions rather than internal states or hypothetical underlying processes.', 'The procedures are described with sufficient detail to allow replication by other trained practitioners, ensuring that interventions can be consistently implemented.', 'The behavior change is important to society and has immediate practical significance for the individual, addressing socially relevant issues.'],
    misconceptions: [
      '"Refers to the use of statistical analysis."',
      '"Means the practitioner analyzes the behavior\'s function."',
      '"Is the same as the \'technological\' dimension."',
    ],
    taskItem: 'A.5',
  },
  {
    id: 'rr-technological', term: 'Technological (Dimension of ABA)',
    correctDefinition: 'The procedures are described completely and clearly enough that a trained reader could replicate them without additional information.',
    distractors: ['The behavior change is shown to be a function of the intervention, demonstrating experimental control through systematic manipulation of variables.', 'The implementation of procedures utilizes advanced technological tools and devices to accurately implement and measure behavior change processes.', 'The behavior change is important to society and has immediate practical significance for the individual, addressing socially relevant issues.'],
    misconceptions: [
      '"Requires the use of technology or devices."',
      '"Is the same as the \'analytic\' dimension."',
      '"Means the procedures are evidence-based."',
    ],
    taskItem: 'A.5',
  },
  {
    id: 'rr-conceptually-systematic', term: 'Conceptually Systematic (Dimension of ABA)',
    correctDefinition: 'The procedures are described using the concepts and principles of behavior analysis, and are derived from established behavioral theory.',
    distractors: ['The procedures are described with sufficient detail to allow replication by other trained practitioners, ensuring consistent implementation of interventions.', 'The behavior change is shown to be a function of the intervention, demonstrating experimental control through systematic manipulation of variables.', 'The behavior change is important to society and has immediate practical significance for the individual, addressing socially relevant issues.'],
    misconceptions: [
      '"Is the same as the \'technological\' dimension."',
      '"Means the procedures are systematic and organized."',
      '"Requires the use of a specific theoretical framework."',
    ],
    taskItem: 'A.5',
  },
  {
    id: 'rr-effective', term: 'Effective (Dimension of ABA)',
    correctDefinition: 'The intervention produces a practical, meaningful change in the behavior  -  not merely a statistically significant one.',
    distractors: ['The behavior change is shown to be a function of the intervention, demonstrating experimental control.', 'The behavior change is important to society and has immediate practical significance for the individual.', 'The procedures are described with sufficient detail to allow replication by other trained practitioners.'],
    misconceptions: [
      '"Is the same as the \'analytic\' dimension."',
      '"Means the intervention produces a statistically significant change."',
      '"Requires a control group to demonstrate effectiveness."',
    ],
    taskItem: 'A.5',
  },
  {
    id: 'rr-generality', term: 'Generality (Dimension of ABA)',
    correctDefinition: 'The behavior change persists over time, appears in environments other than the training environment, and/or spreads to other behaviors.',
    distractors: ['The principles and procedures of behavior analysis can be applied effectively across various populations or settings with similar characteristics.', 'The behavior change is important to society and has immediate practical significance for the individual, addressing socially relevant issues.', 'The procedures are described with sufficient detail to allow replication by other trained practitioners, ensuring consistent implementation of interventions.'],
    misconceptions: [
      '"Is the same as stimulus generalization."',
      '"Only refers to generalization across settings."',
      '"Is the same as the \'effective\' dimension."',
    ],
    taskItem: 'A.5',
  },
  {
    id: 'rr-selectionism', term: 'Selectionism',
    correctDefinition: 'The philosophical assumption that behavior is selected by its consequences over time, analogous to natural selection in biology; past consequences determine which behaviors are maintained.',
    distractors: ['The philosophical position that behavior is determined by internal mental states and cognitive processes, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'The philosophical position that behavior is shaped by unconscious drives and early childhood experiences, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'The philosophical position that behavior is random and unpredictable, as defined by its observable and measurable physical dimensions within the natural environment of the individual, as defined by its observable and measurable physical dimensions within the natural environment of the individual'],
    misconceptions: [
      '"Selectionism means behavior is chosen consciously by the individual."',
      '"Selectionism only applies to species-level evolution, not individual behavior."',
      '"Selectionism is the same as determinism."',
    ],
    taskItem: 'A.2',
  },
  {
    id: 'rr-determinism', term: 'Determinism',
    correctDefinition: 'The philosophical assumption that behavior is lawfully caused by prior environmental and biological events; behavior is not random or freely chosen.',
    distractors: ['The assumption that behavior is freely chosen by the individual and not subject to external control, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'The assumption that behavior is determined by genetic factors alone, as defined by its observable and measurable physical dimensions within the natural environment of the individual, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'The assumption that behavior is unpredictable and cannot be controlled, as defined by its observable and measurable physical dimensions within the natural environment of the individual, as defined by its observable and measurable physical dimensions within the natural environment of the individual'],
    misconceptions: [
      '"Determinism means the future is fixed and intervention is pointless."',
      '"Determinism denies the role of learning history."',
      '"Determinism is the same as fatalism."',
    ],
    taskItem: 'A.2',
  },
  {
    id: 'rr-empiricism', term: 'Empiricism',
    correctDefinition: 'The philosophical assumption that knowledge is derived from direct observation and measurement of events in the natural world, not from intuition or authority.',
    distractors: ['The assumption that knowledge is derived from theoretical models and hypothetical constructs, as defined within the science of behavior analysis and applied to improve socially significant behaviors in natural environments', 'The assumption that knowledge is derived from expert consensus and professional authority, as defined within the science of behavior analysis and applied to improve socially significant behaviors in natural environments', 'The assumption that knowledge is derived from introspection and self-report, as defined within the science of behavior analysis and applied to improve socially significant behaviors in natural environments, as defined by its observable and measurable physical dimensions within the natural environment of the individual'],
    misconceptions: [
      '"Empiricism means only quantitative data is acceptable."',
      '"Empiricism rejects all theoretical frameworks."',
      '"Empiricism is the same as positivism."',
    ],
    taskItem: 'A.2',
  },
  {
    id: 'rr-parsimony', term: 'Parsimony',
    correctDefinition: 'The philosophical assumption that the simplest, most straightforward explanation consistent with the data should be preferred before invoking more complex or hypothetical explanations.',
    distractors: ['The principle that explanations must be based on neurological mechanisms, which is derived from the experimental analysis of behavior and applied to produce socially significant outcomes, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'The principle that theoretical explanations are preferable to empirical ones, which is derived from the experimental analysis of behavior and applied to produce socially significant outcomes, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'The principle that the most comprehensive explanation should always be preferred, which is derived from the experimental analysis of behavior and applied to produce socially significant outcomes, as defined by its observable and measurable physical dimensions within the natural environment of the individual'],
    misconceptions: [
      '"Parsimony means ignoring biological factors entirely."',
      '"Parsimony requires using the fewest words, not the fewest assumptions."',
      '"Parsimony is the same as reductionism."',
    ],
    taskItem: 'A.2',
  },
  {
    id: 'rr-pragmatism', term: 'Pragmatism',
    correctDefinition: 'The philosophical assumption that the value of a concept or procedure is judged by its practical utility  -  whether it works to produce meaningful behavior change.',
    distractors: ['The philosophical position that the most parsimonious explanation is always correct, as defined within the science of behavior analysis and applied to improve socially significant behaviors in natural environments', 'The philosophical position that scientific knowledge is objective and value-free, as defined within the science of behavior analysis and applied to improve socially significant behaviors in natural environments', 'The philosophical position that truth is determined by logical consistency, as defined within the science of behavior analysis and applied to improve socially significant behaviors in natural environments'],
    misconceptions: [
      '"Pragmatism means anything goes as long as it works."',
      '"Pragmatism ignores ethical considerations."',
      '"Pragmatism is the same as eclecticism."',
    ],
    taskItem: 'A.2',
  },
  {
    id: 'rr-radical-behaviorism', term: 'Radical Behaviorism',
    correctDefinition: 'Skinner\'s philosophy of behavioral science that includes private events (thoughts, feelings) as behavior subject to the same laws as overt behavior, without invoking mentalistic explanations.',
    distractors: ['The philosophical position that only publicly observable behavior can be studied scientifically, conducted across multiple sessions to establish a stable and representative pattern of the target behavior over time', 'The philosophical position that cognitive processes are the primary determinants of behavior, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'The philosophical position that behavior cannot be predicted or controlled, as defined by its observable and measurable physical dimensions within the natural environment of the individual, as defined by its observable and measurable physical dimensions within the natural environment of the individual'],
    misconceptions: [
      '"Radical behaviorism ignores thoughts and feelings entirely."',
      '"Radical behaviorism is the same as methodological behaviorism."',
      '"Radical behaviorism denies that private events influence behavior."',
    ],
    taskItem: 'A.3',
  },
  {
    id: 'rr-methodological-behaviorism', term: 'Methodological Behaviorism',
    correctDefinition: 'A philosophy of behavioral science that restricts scientific study to publicly observable events and excludes private events from analysis because they cannot be directly observed.',
    distractors: ['The philosophy that behavior analysis should use only experimental methods, which is selected based on the individual\'s learning history, current skill level, and the goals of the intervention, which is designed based on assessment data and implemented with fidelity to produce the desired behavior change', 'The philosophy that behavior can only be understood through neurological analysis, which is conducted to identify the environmental variables that control the behavior and inform intervention design, which is identified through assessment and manipulated or controlled to produce the desired behavior change', 'The philosophy that behavior is determined by both environmental and genetic factors, as defined by its observable and measurable physical dimensions within the natural environment of the individual, as defined by its observable and measurable physical dimensions within the natural environment of the individual'],
    misconceptions: [
      '"Methodological behaviorism is the same as radical behaviorism."',
      '"Methodological behaviorism accepts private events as data if self-reported."',
      '"Methodological behaviorism is the dominant philosophy in ABA."',
    ],
    taskItem: 'A.3',
  },
  {
    id: 'rr-experimentation', term: 'Experimentation',
    correctDefinition: 'A scientific method in which one or more independent variables are systematically manipulated while measuring the effect on a dependent variable under controlled conditions, to establish a cause-and-effect relationship.',
    distractors: ['The process of observing and recording behavior as it naturally occurs without manipulating any variables, as defined by its observable and measurable physical dimensions within the natural environment of the individual.', 'The systematic comparison of two groups using statistical tests to identify differences, as defined within the science of behavior analysis and applied to improve socially significant behaviors in natural environments.', 'A method of gathering information about behavior through interviews and questionnaires, which is selected based on the individual\'s learning history, current skill level, and the goals of the intervention.'],
    misconceptions: [
      '"Experimentation is the same as observation."',
      '"Experimentation requires large groups of participants to be valid."',
      '"Any procedure that produces behavior change counts as an experiment."',
    ],
    taskItem: 'A.1',
  },
  {
    id: 'rr-philosophical-doubt', term: 'Philosophical Doubt',
    correctDefinition: 'The scientific attitude of treating all currently accepted knowledge as tentative and subject to revision in light of new evidence; a commitment to questioning assumptions and remaining open to disconfirming data.',
    distractors: ['The personal application of behavior change tactics that involves relying on external monitoring and reinforcement from a caregiver or therapist rather than developing independent self-management skills over time.', 'A dimensional quantity of behavior referring to the average time between the offset of one response and the onset of the next response in a series, providing a measure of the temporal spacing between responses.', 'The ability to describe the occurrence of a behavior in terms of its physical dimensions and the environmental conditions under which it occurs, representing the first and most basic goal of a natural science.'],
    misconceptions: [
      '"Philosophical doubt means a BCBA should never trust established research."',
      '"Philosophical doubt is the same as skepticism about the client\'s progress."',
      '"Philosophical doubt requires abandoning an intervention whenever data are variable."',
    ],
    taskItem: 'A.2',
  },
  {
    id: 'rr-overt-behavior', term: 'Overt Behavior',
    correctDefinition: 'Any action of an organism that is publicly observable and directly measurable by an external observer without special instrumentation.',
    distractors: ['Any behavior that is targeted for change in a behavior support plan, as defined by its observable and measurable physical dimensions within the natural environment of the individual.', 'Any behavior that can be directly elicited by an antecedent stimulus, which precedes the behavior and sets the occasion for responding based on the organism\'s prior learning history.', 'Any behavior that occurs in a public setting and is therefore subject to social reinforcement, as defined by its observable and measurable physical dimensions within the natural environment of the individual.'],
    misconceptions: [
      '"Overt behavior is more important than covert behavior in ABA."',
      '"Overt behavior is the only legitimate subject matter of radical behaviorism."',
      '"Overt behavior must be high-frequency to be measurable."',
    ],
    taskItem: 'A.3',
  },
  {
    id: 'rr-covert-behavior', term: 'Covert Behavior',
    correctDefinition: "Any action of an organism that occurs at a level of intensity too small to be observed by others, or that takes place entirely within the organism's skin; treated in radical behaviorism as real behavior governed by the same principles as overt behavior.",
    distractors: ['Any behavior that a client deliberately conceals from the therapist during a session, as defined by its observable and measurable physical dimensions within the natural environment of the individual.', 'A hypothetical internal state that mediates between antecedent stimuli and overt responses, which precedes the behavior and sets the occasion for responding based on the organism\'s prior learning history.', 'Any behavior that occurs in the absence of an observer and is therefore not subject to social contingencies, as defined by its observable and measurable physical dimensions within the natural environment of the individual.'],
    misconceptions: [
      '"Covert behavior is the same as a mentalistic construct."',
      '"Covert behavior is excluded from the subject matter of radical behaviorism."',
      '"Covert behavior causes overt behavior in the same way that thoughts cause actions."',
    ],
    taskItem: 'A.3',
  },
  {
    id: 'rr-behaviorism-philosophy', term: 'Behaviorism',
    correctDefinition: 'The philosophy of science that defines behavior as the proper subject matter of psychology and holds that a complete account of behavior can be achieved by identifying the environmental variables that control it, without invoking unobservable mental entities as explanatory causes.',
    distractors: ['The branch of psychology that studies the neurological substrates of learning and behavior, as defined by its observable and measurable physical dimensions within the natural environment of the individual, as defined by its observable and measurable physical dimensions within the natural environment of the individual.', 'A therapeutic approach that uses reinforcement and punishment to modify maladaptive behavior patterns, which increases the future probability of the behavior occurring under similar antecedent conditions in the environment, which is produced by arranging reinforcement contingencies that follow the target behavior with consistency.', 'A philosophy that holds that all behavior is genetically determined and cannot be modified by environmental events, as defined by its observable and measurable physical dimensions within the natural environment of the individual, as defined by its observable and measurable physical dimensions within the natural environment of the individual.'],
    misconceptions: [
      '"Behaviorism denies that thoughts and feelings exist."',
      '"Behaviorism is the same as applied behavior analysis."',
      '"Behaviorism holds that behavior is random and unpredictable."',
    ],
    taskItem: 'A.4',
  },
  {
    id: 'rr-science-aba',
    term: 'Science',
    question: 'Which of the following best describes science as a systematic approach to understanding natural phenomena?',
    correctAnswer: 'An empirical, objective approach characterized by description, prediction, and control of subject matter through observation and experimentation',
    incorrectAnswers: [
      'A collection of established facts and theories accepted by consensus among experts in a field',
      'A method of generating hypotheses about unobservable internal processes that drive behavior',
      'A philosophical framework for interpreting behavior in terms of cognitive and emotional states',
    ],
    misconceptions: [
      'Science is not simply a body of accepted facts — it is a process of empirical inquiry',
      'Science in behavior analysis focuses on observable, measurable events, not unobservable internal processes',
      'The three goals of science (description, prediction, control) are the defining features, not consensus or theory',
    ],
    domain: 'A',
    category: 'Philosophical Foundations',
    difficulty: 'medium',
    bloomsLevel: 'understand'
  },
  {
    id: 'rr-experiment-aba',
    term: 'Experiment',
    question: 'A behavior analyst manipulates an independent variable under controlled conditions to measure its effect on a dependent variable. This procedure is best described as:',
    correctAnswer: 'An experiment designed to establish a functional relation between the independent and dependent variables',
    incorrectAnswers: [
      'A descriptive assessment designed to identify correlations between environmental events and behavior',
      'A preference assessment designed to identify effective reinforcers for a specific client',
      'A normative comparison designed to evaluate a client\'s behavior relative to same-age peers',
    ],
    misconceptions: [
      'Correlation studies and descriptive assessments do not involve manipulation of variables — they observe naturally occurring events',
      'An experiment requires active manipulation of the independent variable, not just observation',
      'Preference assessments identify reinforcers but do not establish functional relations',
    ],
    domain: 'A',
    category: 'Philosophical Foundations',
    difficulty: 'medium',
    bloomsLevel: 'understand'
  },
  {
    id: 'rr-functional-relation',
    term: 'Functional Relation',
    question: 'A BCBA demonstrates that a client\'s on-task behavior increases when a token economy is in place and returns to baseline when it is removed, across three replications. This finding establishes:',
    correctAnswer: 'A functional relation between the token economy (independent variable) and on-task behavior (dependent variable)',
    incorrectAnswers: [
      'A correlational relationship between the token economy and on-task behavior',
      'A hypothetical construct explaining why the client responds to token reinforcement',
      'A normative standard for on-task behavior in similar clients',
    ],
    misconceptions: [
      'Correlation does not require manipulation or replication — a functional relation requires both',
      'A functional relation is not a hypothetical construct; it is a demonstrated, empirical relationship',
      'Normative standards describe typical performance, not cause-and-effect relationships',
    ],
    domain: 'A',
    category: 'Philosophical Foundations',
    difficulty: 'medium',
    bloomsLevel: 'apply'
  },
  {
    id: 'rr-hypothetical-construct',
    term: 'Hypothetical Construct',
    question: 'A clinician explains a child\'s aggression by stating the child has "poor impulse control." From a behavior analytic perspective, this explanation is problematic because:',
    correctAnswer: 'It invokes a hypothetical construct — an unobservable, unmeasurable internal entity — rather than identifying the environmental variables controlling the behavior',
    incorrectAnswers: [
      'It uses mentalistic language that is incompatible with the technological dimension of ABA',
      'It fails to specify the reinforcement schedule maintaining the aggressive behavior',
      'It violates the principle of parsimony by offering an overly complex explanation',
    ],
    misconceptions: [
      'While mentalism is related, the specific problem here is the use of a hypothetical construct as a causal explanation',
      'The technological dimension concerns procedural description, not causal explanation',
      'Parsimony concerns choosing the simplest explanation, but the primary issue is that the construct cannot be directly measured or manipulated',
    ],
    domain: 'A',
    category: 'Philosophical Foundations',
    difficulty: 'hard',
    bloomsLevel: 'analyze'
  },
  {
    id: 'rr-explanatory-fiction',
    term: 'Explanatory Fiction',
    question: 'A teacher says "Jada is disruptive because she has ADHD." A behavior analyst identifies this as an explanatory fiction because:',
    correctAnswer: 'The label "ADHD" is derived from the disruptive behavior itself and is then used as its cause, creating a circular explanation that identifies no actual environmental variable',
    incorrectAnswers: [
      'Medical diagnoses are not valid explanations for behavior in any context',
      'The explanation violates the conceptually systematic dimension by not referencing reinforcement principles',
      'The explanation is too simple and violates the principle of parsimony',
    ],
    misconceptions: [
      'Medical diagnoses can be valid descriptors but become explanatory fictions when used as circular causal explanations',
      'Conceptually systematic concerns linking procedures to principles, not the validity of causal explanations',
      'Parsimony favors simpler explanations — an explanatory fiction is problematic because it is circular, not because it is simple',
    ],
    domain: 'A',
    category: 'Philosophical Foundations',
    difficulty: 'hard',
    bloomsLevel: 'analyze'
  },
  {
    id: 'rr-eab', term: 'Experimental Analysis of Behavior (EAB)',
    correctDefinition: 'The basic science of behavior that uses controlled laboratory methods with individual organisms under precisely arranged contingencies to identify the fundamental principles governing relationships between behavior and environmental variables; the scientific foundation of applied behavior analysis.',
    distractors: ['The basic science of behavior that uses applied field methods with human participants in natural settings to identify the environmental variables that control socially significant behaviors and develop effective interventions based on those findings.', 'The applied science of behavior that uses controlled laboratory methods with nonhuman animals to identify the environmental variables that control behavior and develop principles that can be applied to improve human behavior in natural settings.', 'A set of emergent, untrained stimulus relations that arise when an organism is trained on conditional discriminations, including reflexivity, symmetry, and transitivity, and that demonstrate the formation of equivalence classes among stimuli.'],
    misconceptions: [
      '"EAB is the same as ABA."',
      '"EAB findings from animal research do not apply to human behavior."',
      '"EAB is only relevant to basic researchers, not to practicing BCBAs."',
    ],
    domain: 'A', category: 'Levels of Behavioral Science',
    taskItem: 'A.4',
  },
  {
    id: 'rr-respondent-conditioning', term: 'Respondent Conditioning (Classical Conditioning)',
    correctDefinition: 'A process in which a neutral stimulus acquires the ability to elicit a response by being paired with an unconditioned stimulus that already elicits that response.',
    distractors: ['A process in which a neutral stimulus acquires discriminative properties through differential reinforcement, which exerts control over behavior through its temporal and contingent relationship with the organism\'s reinforcement history', 'A process in which a behavior is strengthened by its consequences, as defined by its observable and measurable physical dimensions within the natural environment of the individual, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'A process in which a behavior is shaped through successive approximations, as defined by its observable and measurable physical dimensions within the natural environment of the individual, as defined by its observable and measurable physical dimensions within the natural environment of the individual'],
    misconceptions: [
      '"Respondent conditioning requires voluntary behavior."',
      '"Respondent conditioning is the same as operant conditioning."',
      '"Respondent conditioning is controlled by consequences."',
    ],
    taskItem: 'B.3',
  },
  {
    id: 'rr-automatic-reinforcement', term: 'Automatic Reinforcement  -  Functional Analysis',
    correctDefinition: 'In a functional analysis, automatic reinforcement is indicated when behavior persists at elevated rates in the alone condition and/or the ignore condition, suggesting the reinforcer is intrinsic to the behavior rather than socially mediated.',
    distractors: ['Reinforcement that occurs naturally in the environment without programmed contingencies, as measured by direct observation using operationally defined response definitions across consistent observation periods', 'Reinforcement that is delivered by another person without any intentional planning, which increases the future probability of the behavior occurring under similar antecedent conditions in the environment', 'Reinforcement that is delivered on a fixed-ratio schedule without any delay, which increases the future probability of the behavior occurring under similar antecedent conditions in the environment'],
    misconceptions: [
      '"Automatic reinforcement cannot be identified through functional analysis."',
      '"Behavior maintained by automatic reinforcement always decreases during extinction."',
      '"Automatic reinforcement is confirmed only when the alone condition shows zero behavior."',
    ],
    taskItem: 'B.6',
  },
  {
    id: 'rr-fixed-ratio', term: 'Fixed Ratio (FR) Schedule',
    correctDefinition: 'A schedule of reinforcement in which a reinforcer is delivered after a fixed, predetermined number of responses.',
    distractors: ['A procedure in which the individual is taught to engage in an alternative behavior that produces the same reinforcer as the problem behavior.', 'A procedure in which the schedule of reinforcement is gradually thinned after the behavior has been established to promote long-term maintenance.', 'A procedure in which the delivery of consequences is arranged to produce a change in the frequency, duration, or intensity of the target behavior.'],
    misconceptions: [
      '"FR schedules produce the highest and most consistent response rates."',
      '"FR schedules do not produce post-reinforcement pauses."',
      '"FR-1 is the same as continuous reinforcement."',
    ],
    taskItem: 'B.9',
  },
  {
    id: 'rr-variable-ratio', term: 'Variable Ratio (VR) Schedule',
    correctDefinition: 'A schedule of reinforcement in which a reinforcer is delivered after an average number of responses, with the exact number varying around that average.',
    distractors: ['A schedule in which reinforcement is delivered after a variable time interval, which is identified through assessment and manipulated or controlled to produce the desired behavior change', 'A schedule in which reinforcement is delivered after a fixed number of responses, which is shaped and maintained by the contingent delivery of reinforcing or punishing consequences in the environment', 'A schedule in which reinforcement is delivered at unpredictable times regardless of behavior, as defined by its observable and measurable physical dimensions within the natural environment of the individual'],
    misconceptions: [
      '"VR schedules produce post-reinforcement pauses like FR schedules."',
      '"VR schedules produce lower response rates than FR schedules."',
      '"VR schedules are the same as intermittent reinforcement."',
    ],
    taskItem: 'B.9',
  },
  {
    id: 'rr-fixed-interval', term: 'Fixed Interval (FI) Schedule',
    correctDefinition: 'A schedule of reinforcement in which a reinforcer is delivered for the first response that occurs after a fixed amount of time has elapsed since the last reinforcement.',
    distractors: ['A schedule in which reinforcement is delivered after a variable time interval, which is identified through assessment and manipulated or controlled to produce the desired behavior change', 'A schedule in which reinforcement is delivered after a fixed number of responses, which is shaped and maintained by the contingent delivery of reinforcing or punishing consequences in the environment', 'A schedule in which every response occurring during a time interval is reinforced, which is shaped and maintained by the contingent delivery of reinforcing or punishing consequences in the environment'],
    misconceptions: [
      '"FI schedules produce steady, consistent response rates throughout the interval."',
      '"FI schedules do not produce scallop patterns."',
      '"FI schedules are the same as DRL schedules."',
    ],
    taskItem: 'B.9',
  },
  {
    id: 'rr-variable-interval', term: 'Variable Interval (VI) Schedule',
    correctDefinition: 'A schedule of reinforcement in which a reinforcer is delivered for the first response after a variable amount of time has elapsed, with the average interval specified.',
    distractors: ['A schedule in which reinforcement is delivered at fixed time intervals, which specifies the relationship between responses and the delivery of reinforcing or punishing consequences over time', 'A schedule in which all responses during a time interval are reinforced, which is shaped and maintained by the contingent delivery of reinforcing or punishing consequences in the environment', 'A schedule in which reinforcement is delivered after a variable number of responses, which is identified through assessment and manipulated or controlled to produce the desired behavior change'],
    misconceptions: [
      '"VI schedules produce high response rates similar to VR schedules."',
      '"VI schedules produce post-reinforcement pauses."',
      '"VI schedules are the same as FI schedules."',
    ],
    taskItem: 'B.9',
  },
  {
    id: 'rr-concurrent-schedules', term: 'Concurrent Schedules',
    correctDefinition: 'Two or more schedules of reinforcement operating simultaneously, each associated with a different response option; the organism can freely switch between alternatives.',
    distractors: ['Two or more schedules that are presented to different individuals simultaneously, which specifies the relationship between responses and the delivery of reinforcing or punishing consequences over time', 'Two or more schedules that are presented in sequence rather than simultaneously, which specifies the relationship between responses and the delivery of reinforcing or punishing consequences over time', 'Two or more schedules that are linked together in a chain, in which each component step serves as both a conditioned reinforcer for the preceding step and a discriminative stimulus for the next'],
    misconceptions: [
      '"Concurrent schedules are the same as multiple schedules."',
      '"Concurrent schedules always produce equal response allocation."',
      '"Concurrent schedules require a changeover delay to function."',
    ],
    taskItem: 'B.10',
  },
  {
    id: 'rr-multiple-schedule', term: 'Multiple Schedule',
    correctDefinition: 'A schedule in which two or more component schedules alternate, each signaled by a different discriminative stimulus; only one component is in effect at a time.',
    distractors: ['A schedule in which two or more schedules are presented in alternation without discriminative stimuli, which specifies the relationship between responses and the delivery of reinforcing or punishing consequences over time', 'A schedule in which two or more schedules are simultaneously available for different behaviors, which specifies the relationship between responses and the delivery of reinforcing or punishing consequences over time', 'A schedule in which two or more schedules are linked together in a chain, in which each component step serves as both a conditioned reinforcer for the preceding step and a discriminative stimulus for the next'],
    misconceptions: [
      '"Multiple schedules are the same as concurrent schedules."',
      '"Multiple schedules do not involve discriminative stimuli."',
      '"Multiple schedules always produce behavioral contrast."',
    ],
    taskItem: 'B.10',
  },
  {
    id: 'rr-mixed-schedule', term: 'Mixed Schedule',
    correctDefinition: 'A schedule in which two or more component schedules alternate without any discriminative stimulus signaling which component is in effect.',
    distractors: ['A schedule in which two or more component schedules are presented with different discriminative stimuli, such that the behavior occurs reliably in the presence of the stimulus and not in its absence in the environment', 'A schedule in which two or more schedules are linked together in a chain, in which each component step serves as both a conditioned reinforcer for the preceding step and a discriminative stimulus for the next', 'A schedule in which two or more schedules are simultaneously available, which specifies the relationship between responses and the delivery of reinforcing or punishing consequences over time'],
    misconceptions: [
      '"Mixed schedules are the same as multiple schedules."',
      '"Mixed schedules always produce higher response rates than multiple schedules."',
      '"Mixed schedules require a changeover response."',
    ],
    taskItem: 'B.10',
  },
  {
    id: 'rr-chained-schedule', term: 'Chained Schedule',
    correctDefinition: 'A schedule in which completing the requirement of one component produces a discriminative stimulus for the next component, and the final component produces the terminal reinforcer.',
    distractors: ['A schedule in which two or more schedules are simultaneously available, which specifies the relationship between responses and the delivery of reinforcing or punishing consequences over time, which is established through systematic observation and confirmed through experimental analysis when feasible', 'A schedule in which two or more component schedules are presented in alternation with discriminative stimuli, which specifies the relationship between responses and the delivery of reinforcing or punishing consequences over time', 'A schedule in which the ratio or interval requirement changes across sessions, which specifies the relationship between responses and the delivery of reinforcing or punishing consequences over time, which is established through systematic observation and confirmed through experimental analysis when feasible'],
    misconceptions: [
      '"Chained schedules are the same as mixed schedules."',
      '"Chained schedules deliver reinforcement after each component."',
      '"Chained schedules do not involve conditioned reinforcement."',
    ],
    taskItem: 'B.10',
  },
  {
    id: 'rr-behavioral-contrast', term: 'Behavioral Contrast',
    correctDefinition: 'An increase in response rate in one component of a multiple schedule when reinforcement is reduced or eliminated in an alternating component.',
    distractors: ['The spread of behavior change from one setting to another, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'A decrease in behavior in one setting when behavior is reinforced in another setting, which is produced by implementing evidence-based behavior reduction procedures with treatment integrity', 'An increase in behavior that occurs when reinforcement is withheld in all settings, which is produced by arranging reinforcement contingencies that follow the target behavior with consistency'],
    misconceptions: [
      '"Behavioral contrast only occurs in extinction conditions."',
      '"Behavioral contrast is the same as resurgence."',
      '"Behavioral contrast requires concurrent schedules."',
    ],
    taskItem: 'B.9',
  },
  {
    id: 'rr-matching-law', term: 'Matching Law',
    correctDefinition: 'The principle that the relative rate of responding on each alternative in a concurrent schedule matches the relative rate of reinforcement obtained from that alternative.',
    distractors: ['The principle that behavior is reinforced on the schedule that provides the highest rate of reinforcement, which increases the future probability of the behavior occurring under similar antecedent conditions in the environment', 'The principle that organisms always choose the alternative with the largest magnitude of reinforcement, which increases the future probability of the behavior occurring under similar antecedent conditions in the environment', 'The principle that organisms always choose the alternative with the shortest delay to reinforcement, which increases the future probability of the behavior occurring under similar antecedent conditions in the environment'],
    misconceptions: [
      '"The matching law only applies to ratio schedules."',
      '"The matching law predicts that organisms always maximize total reinforcement."',
      '"The matching law is the same as the law of effect."',
    ],
    taskItem: 'B.23',
  },
  {
    id: 'rr-rule-governed', term: 'Rule-Governed Behavior',
    correctDefinition: 'Behavior that is controlled by a verbal description of a contingency (a rule) rather than by direct contact with the contingency itself.',
    distractors: ['Behavior that has been shaped through direct contact with reinforcement contingencies, rather than through verbal instruction.', 'Behavior that is controlled by discriminative stimuli in the immediate environment, without the presence of verbal mediators.', 'Behavior that is maintained by automatic reinforcement rather than social consequences, occurring independent of others.'],
    misconceptions: [
      '"Rule-governed behavior is always more effective than contingency-shaped behavior."',
      '"Rule-governed behavior does not involve reinforcement."',
      '"Rule-governed behavior is the same as instructional control."',
    ],
    taskItem: 'B.18',
  },
  {
    id: 'rr-contingency-shaped', term: 'Contingency-Shaped Behavior',
    correctDefinition: 'Behavior that has been directly shaped and maintained through contact with environmental contingencies, without the mediation of verbal rules.',
    distractors: ['Behavior that is controlled by instructions or verbal descriptions of contingencies, rather than direct experience.', 'Behavior that is maintained by conditioned reinforcement in a token economy, where tokens are exchanged for backup reinforcers.', 'Behavior that is acquired through observational learning from a model, without direct shaping by the environment.'],
    misconceptions: [
      '"Contingency-shaped behavior is always more flexible than rule-governed behavior."',
      '"Contingency-shaped behavior cannot be influenced by rules."',
      '"Contingency-shaped behavior is the same as automatic reinforcement."',
    ],
    taskItem: 'B.18',
  },
  {
    id: 'rr-echoic', term: 'Echoic',
    correctDefinition: 'A verbal operant in which the speaker repeats a verbal stimulus produced by another person; the response has formal similarity to the verbal model and is maintained by generalized conditioned reinforcement.',
    distractors: ['A verbal operant in which the speaker responds to the verbal behavior of another without correspondence, which is reinforced through the mediated action of another person trained in the same verbal community as the speaker', 'A verbal operant in which the speaker reads written text aloud, which is reinforced through the mediated action of another person trained in the same verbal community as the speaker, which is reinforced through the mediated action of another person trained in the same verbal community as the speaker', 'A verbal operant in which the speaker requests a specific item or action, which is reinforced through the mediated action of another person trained in the same verbal community as the speaker, which is reinforced through the mediated action of another person trained in the same verbal community as the speaker'],
    misconceptions: [
      '"Echoic behavior is the same as imitation."',
      '"Echoic behavior is maintained by the specific reinforcer named in the response."',
      '"Echoic behavior requires formal similarity between stimulus and response modality."',
    ],
    taskItem: 'B.19',
  },
  {
    id: 'rr-textual', term: 'Textual',
    correctDefinition: 'A verbal operant in which a written or printed verbal stimulus controls a vocal response; there is point-to-point correspondence but not formal similarity between stimulus and response.',
    distractors: ['A verbal operant in which the speaker names a written word as a visual stimulus, which exerts control over behavior through its temporal and contingent relationship with the organism\'s reinforcement history', 'A verbal operant in which the speaker reads text and then responds to its content, which is reinforced through the mediated action of another person trained in the same verbal community as the speaker', 'A verbal operant in which the speaker writes what another person has said, which is reinforced through the mediated action of another person trained in the same verbal community as the speaker'],
    misconceptions: [
      '"Textual behavior is the same as reading comprehension."',
      '"Textual behavior requires formal similarity between stimulus and response."',
      '"Textual behavior is a type of echoic."',
    ],
    taskItem: 'B.19',
  },
  {
    id: 'rr-transcription', term: 'Transcription',
    correctDefinition: 'A verbal operant in which a spoken verbal stimulus controls a written or typed response; there is point-to-point correspondence but not formal similarity.',
    distractors: ['A verbal operant in which the speaker translates spoken language into a different form, which is reinforced through the mediated action of another person trained in the same verbal community as the speaker', 'A verbal operant in which the speaker reads written text aloud, which is reinforced through the mediated action of another person trained in the same verbal community as the speaker', 'A verbal operant in which the speaker copies written text, which is reinforced through the mediated action of another person trained in the same verbal community as the speaker'],
    misconceptions: [
      '"Transcription is the same as textual behavior."',
      '"Transcription requires formal similarity between stimulus and response."',
      '"Transcription is a type of intraverbal."',
    ],
    taskItem: 'B.19',
  },
  {
    id: 'rr-autoclitic', term: 'Autoclitic',
    correctDefinition: 'A verbal operant that is dependent on and modifies the effects of other verbal behavior; it qualifies, quantifies, or otherwise alters the listener\'s response to the primary verbal operant.',
    distractors: ['A verbal operant in which the speaker requests a specific item or action, which is reinforced through the mediated action of another person trained in the same verbal community as the speaker', 'A verbal operant in which the speaker names a stimulus in the environment, which is reinforced through the mediated action of another person trained in the same verbal community as the speaker', 'A verbal operant in which the speaker repeats what another person has said, which is reinforced through the mediated action of another person trained in the same verbal community as the speaker'],
    misconceptions: [
      '"Autoclitic behavior is the same as intraverbal behavior."',
      '"Autoclitic behavior is always grammatical in nature."',
      '"Autoclitic behavior is independent of other verbal operants."',
    ],
    taskItem: 'B.19',
  },
  {
    id: 'rr-listener-responding', term: 'Listener Responding',
    correctDefinition: 'Nonverbal behavior under the control of verbal stimuli produced by another person; the listener\'s behavior is reinforced by the verbal community.',
    distractors: ['Verbal behavior that is controlled by the verbal behavior of another speaker, such as an intraverbal or an echoic response.', 'Behavior that is controlled by nonverbal discriminative stimuli in the environment, leading to a specific motor response in the absence of verbal cues.', 'Behavior that is maintained by automatic reinforcement independent of social mediation, without any external consequences from the verbal community.'],
    misconceptions: [
      '"Listener responding is the same as intraverbal behavior."',
      '"Listener responding requires the listener to produce verbal behavior."',
      '"Listener responding is a type of tact."',
    ],
    taskItem: 'B.19',
  },
  {
    id: 'rr-behavioral-momentum', term: 'Behavioral Momentum',
    correctDefinition: 'The tendency for behavior to persist following a change in reinforcement conditions; higher rates of reinforcement in a stimulus context produce greater resistance to disruption (B.22). Analogous to physical momentum: a richer reinforcement history = greater resistance to change.',
    distractors: ['The basic science of behavior that uses applied field methods with human participants in natural settings to identify the environmental variables that control socially significant behaviors and develop effective interventions based on those findings.', 'The applied science of behavior that uses controlled laboratory methods with nonhuman animals to identify the environmental variables that control behavior and develop principles that can be applied to improve human behavior in natural settings.', 'A set of emergent, untrained stimulus relations that arise when an organism is trained on conditional discriminations, including reflexivity, symmetry, and transitivity, and that demonstrate the formation of equivalence classes among stimuli.'],
    misconceptions: [
      '"Behavioral momentum is the same as behavioral contrast."',
      '"Behavioral momentum only applies to high-rate behaviors."',
      '"Behavioral momentum is increased by intermittent reinforcement schedules."',
    ],
    taskItem: 'B.22',
  },
  {
    id: 'rr-imitation', term: 'Imitation vs. Observational Learning',
    correctDefinition: 'A behavior that is controlled by a model and has formal similarity to that model; the behavior is reinforced by the social community for matching the model.',
    distractors: ['A behavior that is controlled by a physical prompt, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'A behavior that is controlled by a verbal instruction, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'A behavior that is controlled by a visual cue in the environment, as defined by its observable and measurable physical dimensions within the natural environment of the individual'],
    misconceptions: [
      '"Imitation is the same as echoic behavior."',
      '"Imitation requires the model to be present during the response."',
      '"Imitation is the same as observational learning."',
    ],
    taskItem: 'B.24',
  },
  {
    id: 'rr-observational-learning', term: 'Observational Learning',
    correctDefinition: 'A process in which an observer\'s behavior changes as a result of observing the behavior and consequences of a model, without direct reinforcement of the observer\'s behavior.',
    distractors: ['A form of learning in which behavior is shaped by its own consequences, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'A form of learning that requires direct reinforcement of the observer\'s behavior, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'A form of learning in which a neutral stimulus acquires eliciting function through pairing, which exerts control over behavior through its temporal and contingent relationship with the organism\'s reinforcement history'],
    misconceptions: [
      '"Observational learning is the same as imitation."',
      '"Observational learning requires the observer to be reinforced directly."',
      '"Observational learning cannot be explained by behavioral principles."',
    ],
    taskItem: 'B.24',
  },
  {
    id: 'rr-operational-definition', term: 'Operational Definition',
    correctDefinition: 'A definition of a behavior that describes it in observable and measurable terms, specifying the exact movements or actions that constitute an instance of the behavior.',
    distractors: ['A description of the function of a behavior identified through functional assessment, which identifies the variables that influence the behavior and informs the development of an effective intervention', 'A description of the antecedents and consequences that surround a behavior, as defined by its observable and measurable physical dimensions within the natural environment of the individual, which precedes the behavior and sets the occasion for responding based on the organism\'s prior learning history', 'A theoretical definition of a behavior that specifies its underlying causes, as defined by its observable and measurable physical dimensions within the natural environment of the individual, as defined by its observable and measurable physical dimensions within the natural environment of the individual'],
    misconceptions: [
      '"An operational definition must include the function of the behavior."',
      '"An operational definition is the same as a function-based definition."',
      '"An operational definition can include mentalistic language if the behavior is well-known."',
    ],
    taskItem: 'C.1',
  },
  {
    id: 'rr-direct-measure', term: 'Direct Measure',
    correctDefinition: 'A measurement procedure in which the behavior of interest is observed and recorded as it occurs, without relying on reports from others or permanent products.',
    distractors: ['A measurement procedure in which behavior is inferred from permanent products left by the behavior, rather than direct viewing of its occurrence in real-time.', 'A measurement procedure in which a caregiver or teacher reports the frequency of behavior based on their memory or notes, not live observation of the event.', 'A measurement procedure in which behavior is recorded from video recordings after the session has concluded, not as it happens in the natural environment.'],
    misconceptions: [
      '"Direct measures are always more accurate than indirect measures."',
      '"Direct measures include permanent product recording."',
      '"Direct measures require continuous observation."',
    ],
    taskItem: 'C.2',
  },
  {
    id: 'rr-indirect-measure', term: 'Indirect Measure',
    correctDefinition: 'A measurement procedure that relies on reports, ratings, or recollections of behavior rather than direct observation of the behavior as it occurs.',
    distractors: ['A measurement procedure in which the observer directly watches and records behavior as it occurs in real time, capturing immediate instances.', 'A measurement procedure in which permanent products are counted after the behavior has occurred, without human recall or subjective interpretation.', 'A measurement procedure in which behavior is sampled at fixed time intervals through direct observation methods, providing a structured view.'],
    misconceptions: [
      '"Indirect measures are always less valid than direct measures."',
      '"Indirect measures are the same as discontinuous measurement."',
      '"Indirect measures cannot be used in functional behavior assessments."',
    ],
    taskItem: 'C.2',
  },
  {
    id: 'rr-permanent-product', term: 'Permanent Product Recording',
    correctDefinition: 'A measurement procedure in which the tangible outcomes or byproducts of behavior are counted or measured after the behavior has occurred.',
    distractors: ['A measurement procedure in which behavior is observed and recorded as it occurs, in real-time, by an observer.', 'A measurement procedure in which a caregiver reports the frequency of behavior from memory or anecdotal notes.', 'A measurement procedure in which behavior is sampled at the end of each interval through direct observation.'],
    misconceptions: [
      '"Permanent product recording is a direct measure of behavior."',
      '"Permanent product recording requires continuous observation."',
      '"Permanent product recording cannot be used for academic behaviors."',
    ],
    taskItem: 'C.2',
  },
  {
    id: 'rr-continuous-measurement', term: 'Continuous Measurement',
    correctDefinition: 'A measurement procedure in which every instance of the target behavior is detected and recorded during the observation period.',
    distractors: ['A measurement approach in which only a sample of behavior is recorded, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'A measurement approach in which behavior is recorded using permanent products, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'A measurement approach in which behavior is recorded at the end of each interval, as defined by its observable and measurable physical dimensions within the natural environment of the individual'],
    misconceptions: [
      '"Continuous measurement is always more accurate than discontinuous measurement."',
      '"Continuous measurement is the same as whole-interval recording."',
      '"Continuous measurement is only feasible for low-rate behaviors."',
    ],
    taskItem: 'C.5',
  },
  {
    id: 'rr-count', term: 'Frequency / Count',
    correctDefinition: 'The number of times a behavior occurs during an observation period; the most basic measure of behavior.',
    distractors: ['The number of responses per unit of time, which is shaped and maintained by the contingent delivery of reinforcing or punishing consequences in the environment', 'The elapsed time between consecutive responses, which is shaped and maintained by the contingent delivery of reinforcing or punishing consequences in the environment', 'The proportion of intervals in which a behavior occurred, as defined by its observable and measurable physical dimensions within the natural environment of the individual'],
    misconceptions: [
      '"Count is the same as rate."',
      '"Count is useful only when observation time is held constant."',
      '"Count cannot be used for behaviors with variable duration."',
    ],
    taskItem: 'C.3',
  },
  {
    id: 'rr-celeration', term: 'Celeration',
    correctDefinition: 'A measure of how behavior frequency changes over time, expressed as a multiplicative rate of change per unit of time on a Standard Celeration Chart (e.g., ×2 per week).',
    distractors: ['The absolute difference in response rate between two time points, without considering the ratio or proportional change over time on a standard chart.', 'The average response rate across an entire intervention phase, representing a static measure rather than a dynamic change in frequency over time.', 'The slope of a trend line on an equal-interval graph, depicting linear change, not multiplicative change in behavior frequency across sessions.'],
    misconceptions: [
      '"Celeration is the same as the slope on an equal-interval graph."',
      '"Celeration measures the absolute change in frequency, not the proportional change."',
      '"Celeration can only be calculated on Standard Celeration Charts."',
    ],
    taskItem: 'C.10',
  },
  {
    id: 'rr-internal-validity', term: 'Internal Validity',
    correctDefinition: 'The degree to which changes in the dependent variable can be attributed to manipulation of the independent variable, ruling out alternative explanations.',
    distractors: ['The degree to which the findings of a study can be generalized to other populations and settings, in which the trained behavior transfers to untrained stimuli, settings, responses, or persons in the natural environment', 'The degree to which the results of a study are consistent with other studies, as defined within the science of behavior analysis and applied to improve socially significant behaviors in natural environments', 'The degree to which a measurement procedure measures what it is intended to measure, using operationally defined response definitions to ensure consistent and reliable data collection across all observers'],
    misconceptions: [
      '"Internal validity is the same as external validity."',
      '"Internal validity is established by using large sample sizes."',
      '"Internal validity is the same as treatment integrity."',
    ],
    taskItem: 'D.2',
  },
  {
    id: 'rr-external-validity', term: 'External Validity',
    correctDefinition: 'The degree to which the findings of an experiment can be generalized to other participants, settings, behaviors, and time periods beyond those studied.',
    distractors: ['The degree to which the results of a study are statistically significant, which is implemented systematically and evaluated through ongoing data collection to determine its effectiveness over time', 'The degree to which a measurement procedure measures what it is intended to measure, which is implemented systematically and evaluated through ongoing data collection to determine its effectiveness', 'The degree to which changes in the dependent variable were caused by the independent variable, which is identified through assessment and manipulated or controlled to produce the desired behavior change'],
    misconceptions: [
      '"External validity is the same as internal validity."',
      '"External validity is established through replication within a single study."',
      '"External validity is more important than internal validity in single-case research."',
    ],
    taskItem: 'D.2',
  },
  {
    id: 'rr-history-threat', term: 'History (Threat to Internal Validity)',
    correctDefinition: 'An extraneous event that occurs concurrently with the independent variable and could account for changes in the dependent variable, threatening the conclusion that the IV caused the change.',
    distractors: ['A threat in which changes are attributable to repeated measurement of the same behavior, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'A threat in which changes are attributable to natural developmental processes, which is documented through ongoing measurement and evaluated against the goals established in the behavior plan', 'A threat in which changes are attributable to the participant, which is documented through ongoing measurement and evaluated against the goals established in the behavior plan'],
    misconceptions: [
      '"History threats are the same as maturation threats."',
      '"History threats only occur in long-duration studies."',
      '"History threats are controlled by using multiple baselines."',
    ],
    taskItem: 'D.3',
  },
  {
    id: 'rr-maturation-threat', term: 'Maturation (Threat to Internal Validity)',
    correctDefinition: 'Natural developmental or biological changes in a participant that occur over time and could account for changes in the dependent variable independent of the intervention.',
    distractors: ['A threat in which changes in the dependent variable are attributable to regression to the mean, which is documented through ongoing measurement and evaluated against the goals established in the behavior plan', 'A threat in which changes in the dependent variable are attributable to observer drift, conducted across multiple sessions to establish a stable and representative pattern of the target behavior over time', 'A threat in which changes in the dependent variable are attributable to historical events, which is documented through ongoing measurement and evaluated against the goals established in the behavior plan'],
    misconceptions: [
      '"Maturation threats only apply to studies with child participants."',
      '"Maturation threats are the same as history threats."',
      '"Maturation threats are eliminated by using reversal designs."',
    ],
    taskItem: 'D.3',
  },
  {
    id: 'rr-steady-state-responding',
    term: 'Steady State Responding',
    question: 'Before introducing an intervention, a BCBA waits until the client\'s baseline data shows minimal variability and no systematic trend. This criterion is called:',
    correctAnswer: 'Steady state responding — a stable, low-variability pattern of behavior that provides a valid basis for comparison with treatment data',
    incorrectAnswers: [
      'Experimental control — the demonstration that changes in behavior are caused by the independent variable',
      'Procedural fidelity — the degree to which the intervention is implemented as planned',
      'Social validity — the degree to which the goals and outcomes of an intervention are acceptable to stakeholders',
    ],
    misconceptions: [
      'Experimental control is the outcome of a well-designed study, not a criterion for beginning treatment',
      'Procedural fidelity refers to treatment implementation accuracy, not baseline stability',
      'Social validity refers to stakeholder acceptability, not data stability',
    ],
    domain: 'D',
    category: 'Baseline Logic',
    difficulty: 'medium',
    bloomsLevel: 'understand'
  },
  {
    id: 'rr-withdrawal-design',
    term: 'A-B-A-B Design',
    question: 'Which experimental design demonstrates experimental control through two replications of the treatment effect AND ends in the treatment condition?',
    correctAnswer: 'A-B-A-B design — two baseline (A) phases alternate with two treatment (B) phases, providing two replications of the effect and ending with treatment in place',
    incorrectAnswers: [
      'A-B-A design — two baseline phases and one treatment phase; demonstrates control but ends in a no-treatment condition',
      'Multiple baseline design — applies the independent variable sequentially across behaviors, settings, or participants without withdrawing treatment',
      'B-A-B design — begins with treatment, withdraws it, then reinstates it; used when baseline cannot be collected first',
    ],
    misconceptions: [
      'The A-B-A design ends in a baseline (no-treatment) condition, which is ethically problematic if the treatment is effective',
      'The multiple baseline design does not involve withdrawing and reinstating treatment — it is used when reversal is not possible',
      'The B-A-B design begins with treatment rather than baseline and provides weaker experimental control than A-B-A-B',
    ],
    domain: 'D',
    category: 'Reversal Designs',
    difficulty: 'medium',
    bloomsLevel: 'understand'
  },
  {
    id: 'rr-irreversibility',
    term: 'Irreversibility',
    question: 'A BCBA teaches a client to read 30 sight words and then withdraws the teaching procedure. The client continues to read the words correctly. This is an example of:',
    correctAnswer: 'Irreversibility — the learned skill does not return to baseline levels when the intervention is withdrawn, making reversal designs inappropriate for this behavior',
    incorrectAnswers: [
      'Generalization — the skill transfers to new stimuli or settings beyond those used in training',
      'Maintenance — the skill continues to be performed over time after the intervention is withdrawn',
      'Treatment drift — the intervention gradually changes from the original protocol over time',
    ],
    misconceptions: [
      'Generalization refers to transfer to new stimuli or settings, not to persistence after withdrawal of the teaching procedure',
      'Maintenance is a desirable outcome, not a design limitation — irreversibility specifically refers to the inability to demonstrate experimental control through reversal',
      'Treatment drift refers to unplanned changes in how the intervention is implemented, not to the persistence of learned behavior',
    ],
    domain: 'D',
    category: 'Reversal Designs',
    difficulty: 'hard',
    bloomsLevel: 'analyze'
  },
  {
    id: 'rr-treatment-integrity',
    term: 'Treatment Integrity',
    question: 'A therapist gradually begins skipping steps of a prompting hierarchy after several weeks of implementation. This unplanned change is called:',
    correctAnswer: 'Treatment drift — a gradual, unplanned deviation from the original intervention protocol that threatens internal validity and replication',
    incorrectAnswers: [
      'Treatment integrity — the degree to which the intervention is implemented as planned (the opposite of the problem described)',
      'Procedural fidelity — the accurate implementation of each step of the intervention protocol (the opposite of the problem described)',
      'Sequence effects — changes in behavior due to the order in which conditions are presented',
    ],
    misconceptions: [
      'Treatment integrity and procedural fidelity describe accurate implementation — the question describes a failure of implementation accuracy (treatment drift)',
      'Sequence effects refer to order effects in alternating treatments designs, not to gradual implementation changes over time',
    ],
    domain: 'D',
    category: 'Applied Research Issues',
    difficulty: 'medium',
    bloomsLevel: 'apply'
  },
  {
    id: 'rr-type-errors',
    term: 'Type I Error',
    question: 'A researcher concludes that a new teaching procedure improved performance when the improvement was actually due to natural maturation. This is an example of:',
    correctAnswer: 'Type I error — a false positive conclusion that the independent variable had an effect when it actually did not',
    incorrectAnswers: [
      'Type II error — a false negative conclusion that the independent variable had no effect when it actually did',
      'Measurement bias — a systematic error in data collection that causes observed values to differ from true values',
      'Affirmation of the consequent — concluding a specific cause produced an effect without ruling out other possible causes',
    ],
    misconceptions: [
      'Type II error is the opposite — concluding no effect when there was one (false negative)',
      'Measurement bias refers to systematic observer error, not to incorrect conclusions about causation',
      'Affirmation of the consequent is the logical fallacy underlying Type I errors, but the specific term for the incorrect conclusion is Type I error',
    ],
    domain: 'D',
    category: 'Applied Research Issues',
    difficulty: 'hard',
    bloomsLevel: 'analyze'
  },
  {
    id: 'rr-social-validity',
    term: 'Social Validity',
    question: 'After a successful intervention, a BCBA surveys parents and teachers about whether the goals were important, the procedures were acceptable, and the outcomes were meaningful. This assessment is called:',
    correctAnswer: 'Social validity — the degree to which the goals, procedures, and outcomes of an intervention are acceptable and meaningful to the client, family, and other stakeholders',
    incorrectAnswers: [
      'Treatment integrity — the degree to which the intervention was implemented as planned',
      'Generality — the degree to which behavior change extends to untrained settings, stimuli, or behaviors',
      'Consumer satisfaction — a component of social validity but not the full construct, which also includes goal and procedure acceptability',
    ],
    misconceptions: [
      'Treatment integrity refers to implementation accuracy, not stakeholder acceptability',
      'Generality refers to the spread of behavior change, not to stakeholder judgments about the intervention',
      'Consumer satisfaction is one dimension of social validity (outcome acceptability), but social validity also includes goal importance and procedure acceptability',
    ],
    domain: 'D',
    category: 'Applied Research Issues',
    difficulty: 'medium',
    bloomsLevel: 'understand'
  },
  {
    id: 'rr-informed-consent', term: 'Informed Consent',
    correctDefinition: 'A process in which a client or their legal guardian voluntarily agrees to services after receiving and understanding information about the nature, risks, benefits, and alternatives of the proposed intervention.',
    distractors: ['The process of obtaining agreement from a client to follow the rules of a program, as defined within the science of behavior analysis and applied to improve socially significant behaviors in natural environments', 'The process of obtaining agreement from a client to share their data with other professionals, which is analyzed to evaluate the effectiveness of the intervention and guide clinical decision-making processes', 'The process of obtaining agreement from a funding agency to provide services, as defined within the science of behavior analysis and applied to improve socially significant behaviors in natural environments'],
    misconceptions: [
      '"Informed consent is only required for punishment procedures."',
      '"Informed consent is a one-time event at the start of services."',
      '"Informed consent is the same as assent."',
    ],
    taskItem: 'E.4',
  },
  {
    id: 'rr-multiple-relationships', term: 'Multiple Relationships',
    correctDefinition: 'A situation in which a BCBA is in both a professional role and another role (e.g., personal, financial, or supervisory) with a client, supervisee, or research participant, creating potential conflicts of interest.',
    distractors: ['A situation in which a behavior analyst works with a client across multiple settings, as defined by its observable and measurable physical dimensions within the natural environment of the individual, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'A situation in which a behavior analyst supervises multiple supervisees at the same time, as defined by its observable and measurable physical dimensions within the natural environment of the individual, which involves the ongoing oversight of supervisee performance to ensure competent and ethical service delivery', 'A situation in which a behavior analyst has both clinical and research responsibilities, as defined by its observable and measurable physical dimensions within the natural environment of the individual, as defined by its observable and measurable physical dimensions within the natural environment of the individual'],
    misconceptions: [
      '"Multiple relationships are always prohibited under the Ethics Code."',
      '"Multiple relationships only occur when the BCBA has a romantic relationship with a client."',
      '"Multiple relationships are acceptable if both parties agree in writing."',
    ],
    taskItem: 'E.7',
  },
  {
    id: 'rr-cultural-humility', term: 'Cultural Humility',
    correctDefinition: 'An ongoing process of self-reflection and learning about one\'s own cultural biases and the cultural backgrounds of clients, with the goal of providing equitable and responsive services.',
    distractors: ['The process of acquiring specific knowledge about various cultural practices to better understand client behaviors and preferences in different contexts.', 'The ability to effectively adapt intervention strategies to align with the dominant cultural norms and values prevalent in a particular community setting.', 'A set of skills and knowledge that enables a practitioner to work effectively in cross-cultural situations, reducing cultural misunderstandings.'],
    misconceptions: [
      '"Cultural humility is a fixed skill that is achieved through training."',
      '"Cultural humility is the same as cultural competence."',
      '"Cultural humility only applies to clients from non-Western backgrounds."',
    ],
    taskItem: 'E.9',
  },
  {
    id: 'rr-cultural-variables', term: 'Cultural Variables in Assessment',
    correctDefinition: 'Factors related to a client\'s cultural background, language, values, and community norms that must be identified and integrated into the assessment process to ensure culturally responsive services.',
    distractors: ['Factors related to the physical context in which assessment activities are conducted, such as environmental distractions or the accessibility of materials.', 'Variables pertaining to an individual\'s biological predispositions and genetic makeup that might influence their learning capacity and developmental trajectory.', 'Variables related to the administrative requirements for assessment, including specific documentation and reporting protocols mandated by funding agencies.'],
    misconceptions: [
      '"Cultural variables only affect the selection of reinforcers, not assessment procedures."',
      '"Cultural variables are only relevant for clients from non-English-speaking families."',
      '"Cultural variables are addressed by translating assessment tools into the client\'s language."',
    ],
    taskItem: 'F.2',
  },
  {
    id: 'rr-generalized-imitation',
    term: 'Generalized Imitation',
    question: 'After being reinforced for imitating many different actions, a child imitates a novel action the first time it is modeled, without having been directly reinforced for that specific imitation. This is an example of:',
    correctAnswer: 'Generalized imitation — a behavioral repertoire in which the organism imitates novel behaviors as a result of a history of reinforcement for imitating a variety of modeled behaviors',
    incorrectAnswers: [
      'Observational learning — behavior change that occurs as a result of observing a model\'s behavior and its consequences',
      'Stimulus generalization — responding to a new stimulus that was not present during training because it shares properties with the training stimulus',
      'Imitation training — a systematic procedure for teaching a learner to imitate modeled behaviors through reinforcement',
    ],
    misconceptions: [
      'Observational learning involves learning from the consequences observed for a model — generalized imitation involves imitating novel behaviors without direct reinforcement for that specific imitation',
      'Stimulus generalization involves responding to new stimuli based on their similarity to training stimuli — generalized imitation involves producing new responses that match novel models',
      'Imitation training is the teaching procedure — generalized imitation is the outcome (the ability to imitate novel behaviors without direct training)',
    ],
    domain: 'F',
    category: 'Imitation',
    difficulty: 'hard',
    bloomsLevel: 'analyze'
  },
  {
    id: 'rr-behavior-chain-types',
    term: 'Total-Task Chaining',
    question: 'A BCBA teaches a student to make a sandwich by prompting through all 12 steps in every session from the very first session. This chaining procedure is called:',
    correctAnswer: 'Total-task chaining — the learner is prompted through all steps of the chain in every training trial from the first session, practicing the entire chain on every trial',
    incorrectAnswers: [
      'Forward chaining — training begins with the first step of the chain; subsequent steps are added as each step is mastered',
      'Backward chaining — training begins with the last step of the chain; preceding steps are added as each step is mastered',
      'Backward chaining with leap aheads — a variation of backward chaining in which some middle steps are skipped to accelerate acquisition',
    ],
    misconceptions: [
      'Forward chaining starts with step 1 and adds steps sequentially — total-task chaining practices all steps from the beginning',
      'Backward chaining starts with the last step and works backward — total-task chaining does not start at the end',
      'Backward chaining with leap aheads skips middle steps — total-task chaining includes all steps from the first session',
    ],
    domain: 'F',
    category: 'Chaining',
    difficulty: 'medium',
    bloomsLevel: 'understand'
  },
  {
    id: 'rr-fct',
    term: 'Functional Communication Training (FCT)',
    question: 'A BCBA places a student\'s aggression (maintained by escape) on extinction and teaches the student to hand a "break" card to request escape from demands. This procedure is called:',
    correctAnswer: 'Functional Communication Training (FCT) — the problem behavior is placed on extinction and a functionally equivalent communicative response is taught that accesses the same reinforcer',
    incorrectAnswers: [
      'Differential Reinforcement of Alternative Behavior (DRA) — reinforcing an alternative behavior while withholding reinforcement for the problem behavior, without requiring functional equivalence',
      'Behavior Chain Interruption Strategy — interrupting an established behavior chain to create an opportunity for the learner to request assistance or a missing item',
      'Noncontingent Reinforcement (NCR) — delivering the maintaining reinforcer on a fixed- or variable-time schedule independent of behavior',
    ],
    misconceptions: [
      'DRA reinforces any alternative behavior — FCT specifically requires the replacement behavior to be a communicative response that accesses the same reinforcer as the problem behavior',
      'Behavior chain interruption strategy is used to teach manding within existing chains — FCT is a comprehensive intervention that includes extinction of the problem behavior and systematic teaching of a communicative replacement',
      'NCR delivers the reinforcer noncontingently to abolish the motivating operation — FCT teaches a new communicative behavior that earns the reinforcer contingently',
    ],
    domain: 'F',
    category: 'Antecedent Interventions',
    difficulty: 'medium',
    bloomsLevel: 'apply'
  },
  {
    id: 'rr-high-p-sequence',
    term: 'High-Probability Request Sequence',
    question: 'Before asking a student to complete a math worksheet, a BCBA presents three easy requests the student reliably complies with. This antecedent intervention is called:',
    correctAnswer: 'High-probability request sequence — a series of high-p requests are presented before a low-p request to generate behavioral momentum that increases compliance with the low-p request',
    incorrectAnswers: [
      'Antecedent exercise — vigorous physical exercise provided before a session to reduce subsequent problem behavior',
      'Noncontingent reinforcement — delivering a reinforcer on a time-based schedule independent of behavior to abolish the motivating operation',
      'Errorless learning — a teaching procedure that prevents errors by providing prompts before the learner can make an incorrect response',
    ],
    misconceptions: [
      'Antecedent exercise uses physical activity to reduce problem behavior — the high-p sequence uses easy compliance requests to build behavioral momentum',
      'Noncontingent reinforcement delivers the maintaining reinforcer freely — the high-p sequence uses easy task requests to build momentum for a difficult task',
      'Errorless learning prevents errors during skill acquisition — the high-p sequence increases compliance with a specific request through behavioral momentum',
    ],
    domain: 'F',
    category: 'Antecedent Interventions',
    difficulty: 'medium',
    bloomsLevel: 'apply'
  },
  {
    id: 'rr-token-economy', term: 'Token Economy',
    correctDefinition: 'A behavior-change system in which conditioned reinforcers (tokens) are earned for target behaviors and exchanged for backup reinforcers; used to establish and maintain conditioned reinforcement.',
    distractors: ['A system in which preferred activities are used as reinforcers for completing non-preferred tasks, which increases the future probability of the behavior occurring under similar antecedent conditions in the environment', 'A system in which behavior is reinforced on a fixed-ratio schedule, which increases the future probability of the behavior occurring under similar antecedent conditions in the environment, which is produced by arranging reinforcement contingencies that follow the target behavior with consistency', 'A system in which reinforcement is delivered at the end of each session, which increases the future probability of the behavior occurring under similar antecedent conditions in the environment, which is produced by arranging reinforcement contingencies that follow the target behavior with consistency'],
    misconceptions: [
      '"Token economies are the same as response cost systems."',
      '"Token economies require tokens to be tangible objects."',
      '"Token economies are only effective for children with autism."',
    ],
    taskItem: 'G.4',
  },
  {
    id: 'rr-errorless-learning', term: 'Errorless Learning',
    correctDefinition: 'A teaching procedure in which prompts are provided at a level that prevents or minimizes errors during acquisition, then systematically faded as the learner demonstrates mastery.',
    distractors: ['An instructional approach in which the learner is given unlimited attempts to respond correctly, which is grounded in the principles of applied behavior analysis and evaluated through empirical measurement methods', 'An instructional approach in which only correct responses are reinforced, which increases the future probability of the behavior occurring under similar antecedent conditions in the environment, which is produced by arranging reinforcement contingencies that follow the target behavior with consistency', 'An instructional approach in which the difficulty of tasks is gradually increased, which is grounded in the principles of applied behavior analysis and evaluated through empirical measurement methods, which is produced by arranging reinforcement contingencies that follow the target behavior with consistency'],
    misconceptions: [
      '"Errorless learning is the same as most-to-least prompting."',
      '"Errorless learning prevents all errors from occurring."',
      '"Errorless learning is less effective than trial-and-error learning for all learners."',
    ],
    taskItem: 'G.7',
  },
  {
    id: 'rr-prompt-delay', term: 'Prompt Delay',
    correctDefinition: 'A fading procedure in which a time delay is inserted between the discriminative stimulus and the delivery of a prompt, allowing the learner to respond independently before the prompt is given.',
    distractors: ['A fading procedure in which the physical intensity of a prompt is systematically reduced across trials, such as decreasing the loudness of a vocal cue or the pressure of a physical guide.', 'A fading procedure in which the number of prompts provided for a specific skill is gradually reduced as the learner demonstrates increasing independence in responding.', 'A fading procedure in which the type of prompt is changed from a more intrusive form to a less intrusive form, moving from physical guidance to a gestural cue for independence.'],
    misconceptions: [
      '"Prompt delay is the same as stimulus fading."',
      '"Prompt delay always uses a fixed time interval."',
      '"Prompt delay is only used with verbal prompts."',
    ],
    taskItem: 'G.8',
  },
  {
    id: 'rr-schedule-thinning', term: 'Schedule Thinning',
    correctDefinition: 'A procedure in which the schedule of reinforcement is gradually changed from a denser (more frequent) schedule to a leaner (less frequent) schedule to promote maintenance of behavior.',
    distractors: ['Extinction: complete removal of reinforcement for a behavior, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'Ratio strain: disrupted responding from too-rapid ratio increases, which is produced by arranging reinforcement contingencies that follow the target behavior with consistency', 'Fading: gradual removal of prompts to promote independent responding, which is a supplemental antecedent stimulus used to occasion correct responding during skill acquisition procedures'],
    misconceptions: [
      '"Schedule thinning is the same as extinction."',
      '"Schedule thinning should always move from CRF to a fixed ratio schedule."',
      '"Schedule thinning is only used during the maintenance phase."',
    ],
    taskItem: 'G.16',
  },
  {
    id: 'rr-group-contingency', term: 'Group Contingency',
    correctDefinition: 'A behavior-change arrangement in which reinforcement is delivered to a group based on the behavior of all members, a randomly selected member, or a specific member of the group.',
    distractors: ['A contingency in which the group earns reinforcement based on the average performance of all members, which increases the future probability of the behavior occurring under similar antecedent conditions in the environment', 'A contingency in which the group earns reinforcement based on the behavior of the best performer, which increases the future probability of the behavior occurring under similar antecedent conditions in the environment', 'A contingency in which each member of the group earns reinforcement based on their own behavior, which increases the future probability of the behavior occurring under similar antecedent conditions in the environment'],
    misconceptions: [
      '"Group contingencies are the same as token economies."',
      '"Group contingencies always involve interdependent arrangements."',
      '"Group contingencies are only appropriate for classroom settings."',
    ],
    taskItem: 'G.14',
  },
  {
    id: 'rr-response-cost', term: 'Response Cost',
    correctDefinition: 'A punishment procedure in which a specified amount of a conditioned reinforcer is removed contingent on the occurrence of a target behavior, resulting in a decrease in that behavior.',
    distractors: ['A negative reinforcement procedure in which an aversive stimulus is removed contingent on behavior, which exerts control over behavior through its temporal and contingent relationship with the organism\'s reinforcement history', 'A positive punishment procedure in which an aversive stimulus is added contingent on behavior, which exerts control over behavior through its temporal and contingent relationship with the organism\'s reinforcement history', 'A procedure in which the reinforcement schedule is thinned contingent on problem behavior, which increases the future probability of the behavior occurring under similar antecedent conditions in the environment'],
    misconceptions: [
      '"Response cost is the same as time-out."',
      '"Response cost is a form of positive punishment."',
      '"Response cost can only be used within a token economy."',
    ],
    taskItem: 'G.17',
  },
  {
    id: 'rr-overcorrection', term: 'Overcorrection',
    correctDefinition: 'A punishment procedure requiring the individual to restore the environment to a better-than-original state (restitution) or to practice the correct behavior repeatedly (positive practice) contingent on problem behavior.',
    distractors: ['A procedure in which the individual is required to complete a task as a consequence for problem behavior, which is implemented systematically and evaluated through ongoing data collection to determine its effectiveness', 'A procedure in which the individual is required to practice the problem behavior repeatedly, which is guided by the ethical principles and evidence-based standards established by the behavior analysis profession', 'A procedure in which the individual is required to sit quietly after engaging in problem behavior, which is implemented systematically and evaluated through ongoing data collection to determine its effectiveness'],
    misconceptions: [
      '"Overcorrection is the same as response cost."',
      '"Overcorrection is a form of negative punishment."',
      '"Overcorrection is always unethical and should never be used."',
    ],
    taskItem: 'G.17',
  },
  {
    id: 'rr-time-out', term: 'Time-Out from Positive Reinforcement',
    correctDefinition: 'A punishment procedure in which access to sources of positive reinforcement is removed for a specified period contingent on the occurrence of a target behavior.',
    distractors: ['A positive punishment procedure in which an aversive stimulus is added contingent on behavior, which exerts control over behavior through its temporal and contingent relationship with the organism\'s reinforcement history', 'A procedure in which the individual is denied access to a preferred activity as a consequence, which is implemented systematically and evaluated through ongoing data collection to determine its effectiveness', 'A procedure in which the individual is removed from the environment for a specified period, which is implemented systematically and evaluated through ongoing data collection to determine its effectiveness'],
    misconceptions: [
      '"Time-out is always exclusionary (removing the person from the room)."',
      '"Time-out is a form of negative reinforcement."',
      '"Time-out is effective regardless of whether the environment contains reinforcement."',
    ],
    taskItem: 'G.17',
  },
  {
    id: 'rr-observable-measurable-goal', term: 'Observable and Measurable Goal',
    correctDefinition: 'An intervention goal written in terms of specific, directly observable behaviors with defined criteria for mastery, enabling objective measurement of progress.',
    distractors: ['An intervention goal written in terms of the underlying cognitive or emotional state the client should achieve, allowing for subjective interpretation.', 'An intervention goal written in terms of the specific intervention procedure to be used rather than the behavior outcome, making objective measurement difficult.', 'An intervention goal written in terms of the reinforcer to be used to motivate the client toward the outcome, not the behavior itself.'],
    misconceptions: [
      '"Observable goals are the same as SMART goals."',
      '"Observable goals must include a specific time frame to be valid."',
      '"Observable goals do not need to specify the conditions under which behavior will occur."',
    ],
    taskItem: 'H.1',
  },
  {
    id: 'rr-socially-valid-goal', term: 'Socially Valid Goal',
    correctDefinition: 'An intervention goal that targets behaviors identified as meaningful and important by the client, caregivers, and the broader social community; goals should produce outcomes that matter in the client\'s natural environment.',
    distractors: ['An intervention goal that targets behaviors primarily selected by the funding agency or insurance provider, without significant input from the client or their immediate family.', 'An intervention goal that targets behaviors identified exclusively through standardized assessment tools and norm-referenced data, disregarding client preferences or cultural considerations.', 'An intervention goal that targets behaviors chosen solely by the behavior analyst based on their clinical expertise and theoretical knowledge, independent of client or community values.'],
    misconceptions: [
      '"Social validity is only assessed after intervention is complete."',
      '"Socially valid goals are always the same as the goals identified in the IEP."',
      '"Social validity is the same as treatment acceptability."',
    ],
    taskItem: 'H.3',
  },
  {
    id: 'rr-treatment-integrity', term: 'Treatment Integrity  -  Definition',
    correctDefinition: 'The degree to which an intervention is implemented as designed and specified in the behavior intervention plan; also called procedural fidelity (H.6). Measured by comparing actual implementation steps to the written protocol step by step.',
    distractors: ['A set of emergent, trained stimulus relations that arise when an organism is taught to respond to one stimulus in the presence of another, including reflexivity, symmetry, and transitivity as the three defining properties of the relation.', 'The scientific attitude of treating all currently accepted knowledge as tentative and subject to revision based on new empirical evidence, recognizing that scientific understanding evolves through ongoing observation and experimentation.', 'The ability to identify the functional relationships between environmental variables and behavior through systematic observation, representing the second goal of a natural science that builds on accurate description of behavioral events.'],
    misconceptions: [
      '"Treatment integrity is the same as IOA."',
      '"Treatment integrity only needs to be monitored during the initial phase of intervention."',
      '"Treatment integrity is the same as social validity."',
    ],
    taskItem: 'H.6',
  },
  {
    id: 'rr-data-based-decision', term: 'Data-Based Decision Making',
    correctDefinition: 'The practice of using objective data collected on client behavior to guide decisions about continuing, modifying, or discontinuing an intervention.',
    distractors: ['The practice of using clinical intuition and subjective experience to guide decisions about continuing, modifying, or discontinuing an intervention.', 'The practice of following a predetermined intervention protocol regardless of client response, without making adjustments based on progress.', 'The practice of consulting with caregivers and teachers before making any intervention changes, without necessarily using objective data.'],
    misconceptions: [
      '"Data-based decisions require a minimum of 10 data points before any change is made."',
      '"Data-based decision making replaces clinical judgment entirely."',
      '"Data-based decisions are only made at scheduled review meetings."',
    ],
    taskItem: 'H.7',
  },
  {
    id: 'rr-unwanted-effects', term: 'Unwanted Effects of Behavior-Change Procedures',
    correctDefinition: 'Unintended negative outcomes that may result from reinforcement, extinction, or punishment procedures, such as extinction bursts, aggression, emotional responses, or behavioral contrast.',
    distractors: ['Intended positive outcomes that are deliberately planned as secondary benefits within a behavior intervention plan to promote broader skill development or generalization.', 'Negative outcomes that specifically arise due to the incorrect or inconsistent application of behavior-change procedures by implementers, rather than inherent procedural properties.', 'Adverse events that exclusively occur when only aversive control procedures are implemented, not including any potential side effects from reinforcement or extinction-based interventions.'],
    misconceptions: [
      '"Unwanted effects only occur with punishment procedures."',
      '"Extinction never produces unwanted effects."',
      '"Unwanted effects are always temporary and self-correcting."',
    ],
    taskItem: 'H.4',
  },
  {
    id: 'rr-performance-management', term: 'Performance Management',
    correctDefinition: 'The application of behavioral principles (e.g., antecedent manipulations, feedback, reinforcement) to improve and maintain the work performance of supervisees and staff.',
    distractors: ['A training package for teaching new skills to employees, which is taught using evidence-based instructional procedures and evaluated through direct performance measurement, which is implemented systematically and evaluated through ongoing data collection to determine its effectiveness', 'A system for evaluating employee performance using standardized assessments, which identifies the variables that influence the behavior and informs the development of an effective intervention, which is identified through assessment and manipulated or controlled to produce the desired behavior change', 'A system for scheduling and monitoring employee work hours, as defined within the science of behavior analysis and applied to improve socially significant behaviors in natural environments, as defined by its observable and measurable physical dimensions within the natural environment of the individual'],
    misconceptions: [
      '"Performance management is the same as performance evaluation."',
      '"Performance management only involves delivering consequences for poor performance."',
      '"Performance management is only applicable in organizational settings."',
    ],
    taskItem: 'I.5',
  },
  {
    id: 'rr-behavioral-skills-training', term: 'Behavioral Skills Training (BST)',
    correctDefinition: 'A training package that includes instructions, modeling, rehearsal, and feedback to teach new skills to supervisees and caregivers; all four components must be present.',
    distractors: ['A training package that primarily relies on verbal instructions and written manuals to convey new skills, without incorporating active practice or direct performance feedback.', 'A training package that utilizes video modeling and self-monitoring checklists as its main components, but omits the crucial elements of direct rehearsal and specific feedback.', 'A training package that emphasizes immediate role-playing and performance feedback, often neglecting to provide initial instructions or demonstrations of the target skill.'],
    misconceptions: [
      '"BST is effective with instructions alone if they are detailed enough."',
      '"BST requires all four components to be delivered in a single session."',
      '"BST is the same as competency-based training."',
    ],
    taskItem: 'I.5',
  },
  {
    id: 'rr-observer-drift', term: 'Observer Drift',
    correctDefinition: 'A systematic change in an observer\'s recording over time such that the operational definition is applied differently at the end of an observation period than at the beginning.',
    distractors: ['A dimensional quantity of behavior referring to the total number of times a behavior occurs divided by the total time of the observation period to yield a standardized measure.', 'A dimensional quantity of behavior referring to the total count of responses occurring within a defined and consistent observation period in the natural environment.', 'A dimensional quantity of behavior referring to the proportion of time during an observation period in which the behavior is occurring at any given moment in time.'],
    misconceptions: [
      '"Is the same as reactivity."',
      '"Only occurs when observers are untrained."',
      '"Is detected by calculating total count IOA."',
    ],
    taskItem: 'C.8',
  },
  {
    id: 'rr-reactivity', term: 'Reactivity',
    correctDefinition: 'A change in the target behavior that occurs because the individual is aware of being observed, which may cause the data to not accurately represent typical performance.',
    distractors: ['A measurement artifact where observers unconsciously alter their recording behavior when aware of their data being evaluated, impacting interobserver agreement.', 'A phenomenon where the introduction of a new intervention causes an initial, temporary increase in problem behavior before the intervention becomes effective.', 'A change in the client\'s behavior that is influenced by the client\'s knowledge of the study\'s purpose, rather than the direct presence of an observer during data collection.'],
    misconceptions: [
      '"Is the same as observer drift."',
      '"Always results in an increase in the target behavior."',
      '"Is eliminated by using permanent product recording."',
    ],
    taskItem: 'C.6',
  },
  {
    id: 'rr-visual-analysis', term: 'Visual Analysis',
    correctDefinition: 'The primary method for evaluating behavioral data in which graphs are examined for level, trend, variability, and overlap to determine whether a functional relationship exists.',
    distractors: ['A method for identifying patterns in behavioral data using computer software, which is selected based on the individual\'s learning history, current skill level, and the goals of the intervention, which is designed based on assessment data and implemented with fidelity to produce the desired behavior change', 'A statistical method for determining whether treatment effects are significant, which is evaluated for its effectiveness through systematic data collection and analysis across experimental conditions, which is defined operationally and manipulated systematically to demonstrate its effect on the target behavior', 'A method for analyzing the visual properties of behavioral data collection forms, which is selected based on the individual\'s learning history, current skill level, and the goals of the intervention, which is designed based on assessment data and implemented with fidelity to produce the desired behavior change'],
    misconceptions: [
      '"Requires statistical analysis to confirm conclusions."',
      '"Only examines the mean level of behavior across conditions."',
      '"Is less reliable than inferential statistics for single-case data."',
    ],
    taskItem: 'C.7',
  },
  {
    id: 'rr-data-overlap', term: 'Data Overlap',
    correctDefinition: 'The proportion of data points in one phase that fall within the range of data points in an adjacent phase; high overlap weakens the evidence for a functional relationship.',
    distractors: ['The consistency of data points within a single condition, indicating the degree of scatter around the central tendency and reflecting behavioral stability.', 'The general direction of the data path across successive sessions within a condition, describing whether the behavior is increasing, decreasing, or stable.', 'The average value of data points within a given phase, which provides a summary of the overall magnitude of the behavior during that specific period.'],
    misconceptions: [
      '"High overlap always means the intervention was ineffective."',
      '"Is the same as variability."',
      '"Is only calculated between baseline and the first intervention phase."',
    ],
    taskItem: 'C.7',
  },
  {
    id: 'rr-cumulative-record', term: 'Cumulative Record',
    correctDefinition: 'A graphical display in which each data point represents the total number of responses emitted from the beginning of the observation period, so the slope of the line reflects response rate.',
    distractors: ['A graphical display in which the percentage correct is plotted across trials, as defined within the science of behavior analysis and applied to improve socially significant behaviors in natural environments', 'A graphical display in which the rate of responding is plotted over time, as defined within the science of behavior analysis and applied to improve socially significant behaviors in natural environments', 'A graphical display in which the frequency of behavior is plotted across sessions, expressed as the count of responses occurring within a defined and consistent observation period in the environment'],
    misconceptions: [
      '"Is the same as a standard equal-interval line graph."',
      '"Can show a decrease in total responses over time."',
      '"Is primarily used for interval-recorded data."',
    ],
    taskItem: 'C.7',
  },
  {
    id: 'rr-standard-celeration-chart', term: 'Standard Celeration Chart',
    correctDefinition: 'A semi-logarithmic chart used to display behavior frequency over time, where the slope of the data path (celeration) represents the rate of change in behavior frequency.',
    distractors: ['A linear graph used to display the cumulative number of responses emitted across sessions, showing the total output of a behavior over time.', 'A chart that plots the percentage of correct responses on a standard equal-interval grid, indicating accuracy over sessions for skill acquisition.', 'A chart used to display interobserver agreement data across multiple observation sessions, to monitor observer consistency and reliability.'],
    misconceptions: [
      '"Is the same as a cumulative record."',
      '"Uses an arithmetic (linear) y-axis."',
      '"Is only used in Precision Teaching settings."',
    ],
    taskItem: 'C.7',
  },
  {
    id: 'rr-baseline-logic', term: 'Baseline Logic',
    correctDefinition: 'The rationale for using stable baseline data to predict future performance in the absence of intervention, allowing comparison with data collected during intervention to infer a functional relationship.',
    distractors: ['The logical framework for selecting the appropriate single-case design for a given research question, which demonstrates experimental control by systematically manipulating the independent variable across conditions or tiers', 'The logical framework for determining when baseline data are stable enough to introduce treatment, which is evaluated for its effectiveness through systematic data collection and analysis across experimental conditions', 'The logical framework for determining whether baseline data are representative of typical performance, which is analyzed to evaluate the effectiveness of the intervention and guide clinical decision-making processes'],
    misconceptions: [
      '"Requires that baseline data be perfectly stable before intervention begins."',
      '"Is only applicable to reversal designs."',
      '"Is the same as experimental control."',
    ],
    taskItem: 'D.1',
  },
  {
    id: 'rr-repeatability',
    term: 'Repeatability',
    question: 'Which dimensional quantity of behavior is the basis for frequency and rate measures?',
    correctAnswer: 'Repeatability — the fact that a behavior can occur more than once within an observation period',
    incorrectAnswers: [
      'Temporal extent — the fact that every instance of behavior occupies some amount of time',
      'Temporal locus — the fact that behavior occurs at a specific point in time relative to other events',
      'Magnitude — the force or intensity with which a response is emitted',
    ],
    misconceptions: [
      'Temporal extent is the basis for duration measures, not frequency or rate',
      'Temporal locus is the basis for latency and IRT measures, not frequency or rate',
      'Magnitude is the basis for force or intensity measures, not frequency or rate',
    ],
    domain: 'C',
    category: 'Measurement Concepts',
    difficulty: 'medium',
    bloomsLevel: 'understand'
  },
  {
    id: 'rr-temporal-extent',
    term: 'Temporal Extent',
    question: 'A BCBA wants to measure how long a client engages in stereotypy during a session. Which dimensional quantity of behavior justifies using duration as the measure?',
    correctAnswer: 'Temporal extent — every instance of stereotypy occupies some amount of time, making duration an appropriate measure',
    incorrectAnswers: [
      'Repeatability — stereotypy can occur more than once, making frequency the appropriate measure',
      'Temporal locus — stereotypy occurs at a specific point in time, making latency the appropriate measure',
      'Magnitude — stereotypy varies in intensity, making force the appropriate measure',
    ],
    misconceptions: [
      'Repeatability justifies frequency/rate, not duration — though stereotypy does repeat, the question asks about how long it lasts',
      'Temporal locus justifies latency (time from antecedent to response), not duration of the behavior itself',
      'Magnitude justifies intensity measures, not duration',
    ],
    domain: 'C',
    category: 'Measurement Concepts',
    difficulty: 'medium',
    bloomsLevel: 'apply'
  },
  {
    id: 'rr-temporal-locus',
    term: 'Temporal Locus',
    question: 'A BCBA measures the time between a teacher\'s instruction and a student\'s first response. Which dimensional quantity of behavior is the basis for this measure?',
    correctAnswer: 'Temporal locus — every response occurs at a specific point in time relative to other events, making latency an appropriate measure',
    incorrectAnswers: [
      'Temporal extent — the behavior occupies time, making duration the appropriate measure',
      'Repeatability — the behavior can occur more than once, making frequency the appropriate measure',
      'Magnitude — the behavior varies in intensity, making force the appropriate measure',
    ],
    misconceptions: [
      'Temporal extent is the basis for duration (how long a behavior lasts), not latency (when it occurs relative to an antecedent)',
      'Repeatability is the basis for frequency/rate, not the timing of a response relative to an antecedent',
      'Magnitude is the basis for intensity measures, not temporal positioning',
    ],
    domain: 'C',
    category: 'Measurement Concepts',
    difficulty: 'medium',
    bloomsLevel: 'apply'
  },
  {
    id: 'rr-measurement-bias',
    term: 'Measurement Bias',
    question: 'An observer who knows a client is in the treatment phase consistently records slightly higher rates of appropriate behavior than a naive observer. This is an example of:',
    correctAnswer: 'Measurement bias — a systematic error caused by observer expectations that consistently skews observed values in one direction',
    incorrectAnswers: [
      'Observer reactivity — a change in the client\'s behavior because they know they are being observed',
      'Artifact — a spurious data point caused by an error in the measurement process',
      'Calibration error — a failure to train the observer to criterion against a known standard',
    ],
    misconceptions: [
      'Observer reactivity refers to the client\'s behavior changing due to observation, not the observer\'s recording being biased',
      'An artifact is a single spurious data point, not a systematic directional bias across sessions',
      'Calibration error refers to inadequate observer training, not expectation-driven systematic bias',
    ],
    domain: 'C',
    category: 'Measurement Quality',
    difficulty: 'hard',
    bloomsLevel: 'analyze'
  },
  {
    id: 'rr-equal-vs-ratio-scale',
    term: 'Equal-Interval Scale',
    question: 'A BCBA uses a standard line graph with an equal-interval y-axis. A change from 2 to 4 responses per minute appears visually larger than a change from 20 to 22 responses per minute, even though both are 2-unit changes. This is a characteristic of:',
    correctAnswer: 'Equal-interval scaling — equal distances represent equal absolute amounts, so a 2-unit change always looks the same regardless of the baseline rate',
    incorrectAnswers: [
      'Ratio scaling — equal distances represent equal proportional changes, so a doubling always looks the same',
      'Celeration — the rate of change in rate over time, used in precision teaching',
      'Measurement bias — a systematic error that causes observed values to differ from true values',
    ],
    misconceptions: [
      'Ratio scaling (logarithmic) would make the 2→4 change (doubling) look larger than the 20→22 change (10% increase), the opposite of equal-interval',
      'Celeration is a measure of learning rate, not a graph scale property',
      'Measurement bias refers to systematic observer error, not a property of graph scales',
    ],
    domain: 'C',
    category: 'Graphing',
    difficulty: 'hard',
    bloomsLevel: 'analyze'
  },
  {
    id: 'rr-precision-teaching',
    term: 'Precision Teaching',
    question: 'Which measurement and instructional system uses the Standard Celeration Chart, emphasizes fluency building, and uses celeration (rate of change in rate) as the primary measure of learning?',
    correctAnswer: 'Precision Teaching — developed by Ogden Lindsley, uses daily frequency measures plotted on a ratio-scale chart to track learning and guide instructional decisions',
    incorrectAnswers: [
      'Discrete Trial Training (DTT) — a structured teaching method that uses antecedent-response-consequence trials to teach skills',
      'Direct Instruction — a scripted, teacher-led instructional method emphasizing explicit teaching and error correction',
      'Naturalistic Teaching — an instructional approach that embeds learning opportunities in natural environments and routines',
    ],
    misconceptions: [
      'DTT is a teaching method, not a measurement system — it does not use the Standard Celeration Chart',
      'Direct Instruction is a curriculum and teaching approach, not a measurement system',
      'Naturalistic Teaching is an instructional context, not a measurement system',
    ],
    domain: 'C',
    category: 'Graphing',
    difficulty: 'medium',
    bloomsLevel: 'understand'
  },
  {
    id: 'rr-assent', term: 'Assent',
    correctDefinition: 'An affirmative agreement by a client who lacks legal capacity to provide informed consent, indicating willingness to participate in assessment or intervention.',
    distractors: ['The agreement of a supervisee to follow the instructions of a supervisor, which involves the ongoing oversight of supervisee performance to ensure competent and ethical service delivery, which involves the ongoing oversight of supervisee performance to ensure competent and ethical service delivery', 'The agreement of a client to follow the rules of a behavior-change program, as defined by its observable and measurable physical dimensions within the natural environment of the individual, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'The agreement of a funding agency to provide services to a client, as defined within the science of behavior analysis and applied to improve socially significant behaviors in natural environments, as defined by its observable and measurable physical dimensions within the natural environment of the individual'],
    misconceptions: [
      '"Is the same as informed consent."',
      '"Is only required for adult clients with intellectual disabilities."',
      '"Replaces the need for guardian consent."',
    ],
    taskItem: 'E.1',
  },
  {
    id: 'rr-scope-of-practice', term: 'Scope of Competence',
    correctDefinition: 'The boundaries of professional competence defined by one\'s training, education, supervised experience, and credentialing, within which a practitioner is ethically permitted to provide services.',
    distractors: ['The geographic area in which a behavior analyst is licensed to provide services, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'The number of clients a behavior analyst can supervise simultaneously under BACB guidelines, which involves the ongoing oversight of supervisee performance to ensure competent and ethical service delivery', 'The specific client populations that a behavior analyst is permitted to serve under their license, as defined by its observable and measurable physical dimensions within the natural environment of the individual'],
    misconceptions: [
      '"Is determined solely by the BACB credential held."',
      '"Expands automatically with years of experience."',
      '"Is the same as licensure."',
    ],
    taskItem: 'E.1',
  },
  {
    id: 'rr-dual-relationship', term: 'Dual Relationship',
    correctDefinition: 'A situation in which a behavior analyst has both a professional role and another distinct role with a client, supervisee, or research participant, creating a risk of impaired objectivity or exploitation.',
    distractors: ['A situation in which a behavior analyst has responsibilities to both the client and the funding agency, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'A situation in which a behavior analyst provides services to two clients with conflicting needs, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'A situation in which a behavior analyst has both clinical and supervisory responsibilities, as defined by its observable and measurable physical dimensions within the natural environment of the individual'],
    misconceptions: [
      '"Is always prohibited under the Ethics Code."',
      '"Only applies to romantic relationships."',
      '"Is the same as a conflict of interest."',
    ],
    taskItem: 'E.6',
  },
  {
    id: 'rr-conflict-of-interest', term: 'Conflict of Interest',
    correctDefinition: 'A situation in which a behavior analyst\'s personal, financial, or professional interests could compromise their objectivity, competence, or effectiveness in fulfilling their professional responsibilities.',
    distractors: ['A dimensional quantity of behavior referring to the elapsed time from the onset of the antecedent stimulus or instruction to the initiation of the first component of the target response by the individual.', 'A dimensional quantity of behavior referring to the elapsed time from the onset of the response to its offset, yielding a total time-based measure of how long each individual occurrence of the behavior lasts.', 'A dimensional quantity of behavior referring to the total count of responses occurring within a defined and consistent observation period, without accounting for the duration of the observation period itself.'],
    misconceptions: [
      '"Is the same as a dual relationship."',
      '"Only arises from financial incentives."',
      '"Must always be disclosed to the BACB."',
    ],
    taskItem: 'E.6',
  },
  {
    id: 'rr-least-restrictive', term: 'Least Restrictive Alternative',
    correctDefinition: 'The principle that behavior-change procedures should be selected from the least intrusive, aversive, or restrictive options that are likely to be effective before more restrictive procedures are considered.',
    distractors: ['The principle that behavior-change procedures should be selected from the requirement that all behavior reduction procedures be approved by a human rights committee.', 'The principle that behavior-change procedures should be selected from the principle that reinforcement-based procedures must always be tried before punishment procedures.', 'The principle that behavior-change procedures should be selected from a legal standard requiring that clients be served in the most integrated setting appropriate to their needs.'],
    misconceptions: [
      '"Requires that only positive reinforcement be used."',
      '"Means punishment procedures can never be used."',
      '"Is the same as the principle of parsimony."',
    ],
    taskItem: 'E.2',
  },
  {
    id: 'rr-mandatory-reporting', term: 'Mandatory Reporting',
    correctDefinition: 'The legal obligation of certain professionals, including behavior analysts, to report suspected abuse, neglect, or exploitation of vulnerable individuals to the appropriate authorities.',
    distractors: ['The legal obligation to report billing fraud to the appropriate authorities, as defined within the science of behavior analysis and applied to improve socially significant behaviors in natural environments', 'The professional obligation to report treatment failures to funding agencies, which is evaluated for its effectiveness through systematic data collection and analysis across experimental conditions', 'The ethical obligation to report ethics violations by colleagues to the BACB, as outlined in the BACB Ethics Code to protect the rights and welfare of clients and the integrity of the profession'],
    misconceptions: [
      '"Is optional when the behavior analyst is uncertain about the evidence of abuse."',
      '"Only applies to physical abuse, not neglect."',
      '"Can be waived if the client requests confidentiality."',
    ],
    taskItem: 'E.5',
  },
  {
    id: 'rr-veracity', term: 'Veracity',
    correctDefinition: 'The ethical obligation to be truthful and accurate in all professional communications, including reports, data, and representations of one\'s qualifications.',
    distractors: ['The ethical obligation to be truthful and accurate in all professional communications, including the obligation to keep client information confidential.', 'The ethical obligation to be truthful and accurate in all professional communications, including the requirement to obtain informed consent before beginning an assessment.', 'The ethical obligation to be truthful and accurate in all professional communications, including the principle of treating all clients fairly and without discrimination.'],
    misconceptions: [
      '"Is the same as fidelity."',
      '"Only applies to written communications."',
      '"Permits withholding information if disclosure would harm the client."',
    ],
    taskItem: 'E.1',
  },
  {
    id: 'rr-cultural-responsiveness', term: 'Cultural Responsiveness',
    correctDefinition: 'The practice of adapting assessment and intervention procedures to be consistent with the cultural values, norms, and preferences of the client and their family.',
    distractors: ['The practice of requiring all service providers to be fluent in the client\'s native language to ensure effective communication.', 'The practice of exclusively utilizing standardized assessments that have been specifically normed on the client\'s cultural group.', 'The practice of selecting intervention targets that are universally accepted as appropriate across all diverse cultural backgrounds.'],
    misconceptions: [
      '"Is the same as cultural humility."',
      '"Means the behavior analyst must share the client\'s cultural background."',
      '"Only applies when working with clients from non-Western cultures."',
    ],
    taskItem: 'E.1',
  },
  {
    id: 'rr-behavior-analyst-ethics-code', term: 'BACB Ethics Code',
    correctDefinition: 'The set of enforceable standards published by the Behavior Analyst Certification Board that govern the professional conduct of credentialed behavior analysts.',
    distractors: ['A set of recommended practices published by the Association for Behavior Analysis International for ethical research conduct.', 'A state-level legislative act that legally defines the scope of practice and licensure requirements for behavior analysts.', 'A voluntary set of internal policies and procedures adopted by individual ABA service organizations to guide staff conduct.'],
    misconceptions: [
      '"Is the same as state licensure requirements."',
      '"Only applies to BCBAs, not BCaBAs or RBTs."',
      '"Is updated annually by the BACB."',
    ],
    taskItem: 'E.1',
  },
  {
    id: 'rr-ethics-aba',
    term: 'Ethics',
    question: 'In behavior analysis, ethics is best understood as:',
    correctAnswer: 'A set of professional obligations derived from the BACB Ethics Code that governs conduct toward clients, supervisees, colleagues, and the public',
    incorrectAnswers: [
      'A personal belief system about right and wrong that each practitioner develops independently',
      'A set of aspirational ideals that guide practice but carry no formal enforcement mechanisms',
      'A branch of philosophy concerned only with theoretical moral questions unrelated to clinical practice',
    ],
    misconceptions: [
      'Professional ethics in behavior analysis is codified and enforceable, not merely personal',
      'The BACB Ethics Code is a compliance code with formal disciplinary consequences, not merely aspirational',
      'Ethics in behavior analysis is directly applied to clinical practice, not purely theoretical',
    ],
    domain: 'E',
    category: 'Ethics & Professional Conduct',
    difficulty: 'easy',
    bloomsLevel: 'understand'
  },
  {
    id: 'rr-compliance-code',
    term: 'Compliance Code',
    question: 'The BACB Ethics Code functions as a compliance code rather than merely an aspirational document because:',
    correctAnswer: 'Violations are subject to formal investigation and may result in sanctions including suspension or revocation of certification',
    incorrectAnswers: [
      'It is written by practicing behavior analysts rather than by a regulatory body',
      'It applies only to BCBAs and not to other BACB certificants such as BCaBAs or RBTs',
      'It is updated annually to reflect current best practices in the field',
    ],
    misconceptions: [
      'The authorship of the code does not determine whether it is a compliance code',
      'The BACB Ethics Code applies to all BACB certificants, not only BCBAs',
      'Update frequency does not distinguish compliance codes from aspirational standards',
    ],
    domain: 'E',
    category: 'Ethics & Professional Conduct',
    difficulty: 'medium',
    bloomsLevel: 'understand'
  },
  {
    id: 'rr-negligence-aba',
    term: 'Negligence',
    question: 'A BCBA implements a punishment procedure without conducting a prior functional assessment, and the client\'s problem behavior escalates. This situation most closely reflects:',
    correctAnswer: 'Negligence — a failure to exercise the standard of care expected of a competent behavior analyst, resulting in potential harm to the client',
    incorrectAnswers: [
      'Fraudulent conduct, because the BCBA misrepresented the likely outcome of the procedure',
      'A conflict of interest, because the BCBA had a financial incentive to implement the procedure',
      'Countercontrol, because the client is responding to the aversive nature of the procedure',
    ],
    misconceptions: [
      'Fraudulent conduct involves intentional deception for personal gain, not a failure of clinical judgment',
      'Conflict of interest involves competing personal and professional interests, not a failure to follow standard of care',
      'Countercontrol is the client\'s behavioral response to aversive control, not the practitioner\'s ethical violation',
    ],
    domain: 'E',
    category: 'Ethics & Professional Conduct',
    difficulty: 'hard',
    bloomsLevel: 'analyze'
  },
  {
    id: 'rr-risk-benefit-analysis',
    term: 'Risk-Benefit Analysis',
    question: 'Before recommending a restrictive procedure, a BCBA is ethically required to conduct a risk-benefit analysis. The primary purpose of this analysis is to:',
    correctAnswer: 'Determine whether the expected benefits of the procedure justify its potential harms, ensuring the intervention is warranted and proportionate',
    incorrectAnswers: [
      'Identify the least expensive intervention option that is likely to be effective for the client',
      'Document that the BCBA has obtained informed consent from the client\'s legal guardian',
      'Establish that the procedure has been validated through peer-reviewed research with similar populations',
    ],
    misconceptions: [
      'Cost is not the primary consideration in a risk-benefit analysis — harm and benefit to the client are',
      'Informed consent is a separate ethical requirement, not the purpose of a risk-benefit analysis',
      'Research validation is relevant but does not replace the individualized weighing of risks and benefits for a specific client',
    ],
    domain: 'E',
    category: 'Ethics & Professional Conduct',
    difficulty: 'medium',
    bloomsLevel: 'apply'
  },
  {
    id: 'rr-countercontrol-aba',
    term: 'Countercontrol',
    question: 'A client who is subjected to highly restrictive procedures begins refusing to attend sessions and engaging in aggression toward staff. A behavior analyst recognizes this as:',
    correctAnswer: 'Countercontrol — behavior emitted in response to aversive control, aimed at reducing or escaping that control',
    incorrectAnswers: [
      'Extinction-induced aggression resulting from the removal of a previously reinforced behavior',
      'A new behavioral function that has emerged due to changes in the client\'s motivating operations',
      'An ethical violation by the client that must be addressed through a formal behavior intervention plan',
    ],
    misconceptions: [
      'Extinction-induced aggression occurs when a specific behavior is placed on extinction — countercontrol is a broader response to coercive control',
      'Countercontrol is not a change in behavioral function; it is a response to aversive control by another person',
      'Countercontrol is a natural behavioral response, not an ethical violation by the client',
    ],
    domain: 'E',
    category: 'Ethics & Professional Conduct',
    difficulty: 'hard',
    bloomsLevel: 'analyze'
  },
  {
    id: 'rr-fraudulent-conduct',
    term: 'Fraudulent Conduct',
    question: 'A BCBA submits billing records to an insurance company for 10 hours of services that were never provided. This is best classified as:',
    correctAnswer: 'Fraudulent conduct — intentional misrepresentation for personal financial gain, which is both an ethical violation and potentially a criminal offense',
    incorrectAnswers: [
      'Negligence, because the BCBA failed to maintain accurate records of services provided',
      'A conflict of interest, because the BCBA\'s financial interests conflicted with the client\'s interests',
      'A disciplinary standards violation only, with no potential criminal liability',
    ],
    misconceptions: [
      'Negligence involves a failure of care, not intentional deception — fraudulent conduct is intentional',
      'Conflict of interest involves competing interests, not deliberate falsification of records',
      'Insurance fraud is a criminal offense in most jurisdictions, not merely a professional standards violation',
    ],
    domain: 'E',
    category: 'Ethics & Professional Conduct',
    difficulty: 'easy',
    bloomsLevel: 'understand'
  },
  {
    id: 'rr-pyramidal-training', term: 'Pyramidal Training',
    correctDefinition: 'A training model in which a supervisor trains a small number of individuals who then train others, creating a hierarchical structure that extends the reach of the original trainer.',
    distractors: ['A training model in which all employees receive identical training content delivered by a single designated instructor within an organization.', 'A training model in which supervisees are ranked based on their performance and receive varying levels of supervision intensity according to their needs.', 'A training model in which instruction is delivered through a series of progressively more intricate and challenging tasks to build complex repertoires.'],
    misconceptions: [
      '"Is the same as cascading training."',
      '"Guarantees consistent training quality across all levels."',
      '"Is only appropriate for large organizations."',
    ],
    taskItem: 'I.2',
  },
  {
    id: 'rr-feedback-supervision', term: 'Performance Feedback',
    correctDefinition: 'Information provided to a supervisee about the accuracy and quality of their work, delivered in a timely and specific manner to shape and maintain professional behavior.',
    distractors: ['A comprehensive written evaluation of a supervisee\'s overall performance that is completed at the end of a supervisory period for official records.', 'A verbal summary of a supervisee\'s identified strengths and areas for improvement provided during an annual performance review meeting.', 'A standardized rating scale completed by clients to assess the perceived quality of the behavior analytic services they received from the supervisee.'],
    misconceptions: [
      '"Should always be delivered privately to avoid embarrassing the supervisee."',
      '"Is only effective when delivered immediately after the behavior."',
      '"Is the same as praise."',
    ],
    taskItem: 'I.3',
  },
  {
    id: 'rr-group-supervision', term: 'Group Supervision',
    correctDefinition: 'A supervision format in which a supervisor meets simultaneously with multiple supervisees to discuss cases, review skills, and provide instruction, counting toward a portion of required supervision hours.',
    distractors: ['A supervision format in which multiple qualified supervisors collaborate to oversee the professional development of a single supervisee, offering diverse perspectives.', 'A peer consultation model where Board Certified Behavior Analysts meet without a designated supervisor to discuss clinical cases and ethical dilemmas, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'A training format in which all staff members within an organization receive the same instructional content simultaneously from one instructor, using systematic instructional procedures derived from the principles of applied behavior analysis.'],
    misconceptions: [
      '"Can replace all individual supervision hours."',
      '"Is less effective than individual supervision for all skill areas."',
      '"Is only permitted for RBT supervision, not BCBA supervision."',
    ],
    taskItem: 'I.3',
  },
  {
    id: 'rr-treatment-integrity-supervision', term: 'Treatment Integrity  -  Supervision Monitoring',
    correctDefinition: 'The supervisor\'s responsibility to systematically measure and monitor whether supervisees are implementing behavior-change procedures with fidelity, using direct observation, permanent product review, or IOA data (I.3). Low treatment integrity is a common reason interventions fail to produce expected outcomes.',
    distractors: ['The consistent application of ethical guidelines by the supervisor throughout all stages of supervision, ensuring that all interactions, evaluations of supervisee\'s professional conduct, and feedback provided align with professional standards and promote the welfare of clients and supervisees, fostering a principled and effective learning environment (I.1). Adherence to these guidelines is paramount for maintaining professional standards and ethical practice.', 'The systematic evaluation of how well the supervisee consistently adheres to the BACB\'s ethical compliance code and professional guidelines in their daily practice, including client interactions, data collection, and intervention implementation, with the goal of identifying areas for improvement and ensuring responsible and competent service delivery (I.1). This ongoing assessment is crucial for professional development and client protection.', 'The supervisor\'s responsibility to ensure that all data collected by the supervisee, including observational data and permanent product records, is consistently accurate and reliable, truly reflecting client behavior and intervention effects, through regular checks, interobserver agreement assessments, and direct observation of data collection procedures (I.4). Inaccurate data can lead to erroneous clinical decisions and ineffective interventions.'],
    misconceptions: [
      '"Is the same as social validity."',
      '"Is only relevant for punishment procedures."',
      '"Is guaranteed when staff receive initial training."',
    ],
    taskItem: 'I.3',
  },
  {
    id: 'rr-ncr', term: 'Non-Contingent Reinforcement (NCR)',
    correctDefinition: 'Delivery of a reinforcer on a fixed-time or variable-time schedule, independent of the occurrence of any specific behavior; used to reduce problem behavior maintained by that reinforcer.',
    distractors: ['Reinforcement delivered contingent on a physically incompatible behavior, which increases the future probability of the behavior occurring under similar antecedent conditions in the environment', 'Reinforcement delivered contingent on the absence of problem behavior, which increases the future probability of the behavior occurring under similar antecedent conditions in the environment', 'Reinforcement delivered contingent on a specific alternative behavior, which increases the future probability of the behavior occurring under similar antecedent conditions in the environment'],
    misconceptions: [
      '"Is the same as DRO because both reduce problem behavior."',
      '"Requires identifying an alternative behavior to reinforce."',
      '"Is contingent on the individual not engaging in problem behavior."',
    ],
    taskItem: 'G.3',
  },
  {
    id: 'rr-response-cost-application', term: 'Response Cost  -  Application',
    correctDefinition: 'Response cost is most effectively implemented within a token economy, where earned tokens can be removed contingent on problem behavior. The number of tokens removed must be calibrated carefully  -  removing too many can cause the system to lose its reinforcing value.',
    distractors: ['Differential reinforcement of other behavior (DRO) is most effectively implemented by providing reinforcement for the absence of a target problem behavior for a specified interval, with the interval length adjusted based on the individual\'s performance to gradually reduce the behavior\'s occurrence.', 'Time-out from positive reinforcement is most effectively implemented by removing an individual from a reinforcing environment contingent on problem behavior, ensuring the time-out setting is devoid of reinforcers and the duration is brief yet sufficient to be effective, without being unduly prolonged.', 'Extinction is most effectively implemented by consistently withholding all reinforcement for a previously reinforced problem behavior, ensuring that all sources of reinforcement are identified and eliminated, which may lead to an extinction burst before the behavior ultimately decreases.'],
    misconceptions: [
      '"Response cost and time-out are interchangeable because both involve removing something."',
      '"Response cost is only appropriate for severe problem behavior."',
      '"Response cost is a form of positive punishment because it involves taking something away."',
    ],
    taskItem: 'G.17',
  },
  {
    id: 'rr-overcorrection-subtypes', term: 'Overcorrection  -  Restitution vs. Positive Practice',
    correctDefinition: 'Overcorrection has two subtypes: (1) Restitution overcorrection  -  the individual restores the environment to a better-than-original state (e.g., cleaning up a mess they made plus additional areas); (2) Positive practice overcorrection  -  the individual repeatedly practices the correct form of behavior (e.g., practicing walking to the door correctly 10 times after running).',
    distractors: ['Differential Reinforcement of Other Behavior (DRO) involves reinforcing a child for not engaging in a target problem behavior for a specified period of time, while Differential Reinforcement of Alternative Behavior (DRA) involves reinforcing a desirable behavior that serves the same function as the problem behavior; both aim to reduce maladaptive responses by strengthening appropriate ones.', 'Response cost is a form of negative punishment where a specific amount of a reinforcer is removed contingent on the occurrence of a problem behavior, leading to a decrease in the future probability of that behavior (e.g., losing tokens for hitting); time-out is another negative punishment procedure where a person is removed from a reinforcing environment for a specified period.', 'Extinction involves discontinuing the reinforcement of a previously reinforced behavior, which leads to a gradual decrease in the frequency of that behavior over time, often accompanied by an extinction burst (e.g., ignoring a child\'s tantrum); punishment, conversely, is the contingent presentation of a stimulus or removal of a stimulus that decreases future behavior.'],
    misconceptions: [
      '"Overcorrection always involves both restitution and positive practice simultaneously."',
      '"Positive practice overcorrection is the same as behavioral rehearsal used in skill acquisition."',
      '"Restitution overcorrection can only be used for property destruction."',
    ],
    taskItem: 'G.17',
  },
  {
    id: 'rr-behavioral-momentum-clinical', term: 'Behavioral Momentum  -  High-p Request Sequence',
    correctDefinition: 'The clinical application of behavioral momentum: a series of high-probability (high-p) requests are delivered and reinforced before a low-probability (low-p) request, increasing the likelihood of compliance with the low-p request (G.1). The principle (B.22) and the clinical procedure (G.1) are related but distinct concepts.',
    distractors: ['The matching law, a principle that describes how organisms allocate their behavior across concurrent schedules of reinforcement, such that the relative rate of responding to an alternative matches the relative rate of reinforcement obtained from that alternative. This demonstrates how choices are distributed based on reinforcement history (B.22). This explains proportional choice.', 'The tendency for behavior to increase significantly in rate or intensity following a period of extinction, often referred to as an extinction burst or resurgence of the behavior. This occurs as the individual attempts to regain access to previously available reinforcement by engaging in the extinguished behavior more vigorously, demonstrating behavioral variability and resistance to extinction (B.15, B.22).', 'The persistence of behavior that is maintained by automatic reinforcement, meaning the sensory consequences produced by the behavior itself serve as the reinforcer, despite changes in social contingencies or the introduction of new demands. This demonstrates the robust nature of automatically maintained behaviors and their resistance to extinction through social means (B.15, B.22).'],
    misconceptions: [
      '"Is the same as the matching law."',
      '"Refers to the speed at which a behavior is acquired."',
      '"Is only applicable to problem behavior, not skill acquisition."',
    ],
    taskItem: 'G.1',
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
    taskItem: 'H.3',
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
    taskItem: 'H.2',
    category: 'Assessment'
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
    taskItem: 'H.2',
    category: 'Intervention'
  },
  {
    id: 'rr-indirect-fba',
    term: 'Indirect Functional Assessment',
    question: 'A BCBA administers the Functional Assessment Interview and the Motivation Assessment Scale to a student\'s parents and teacher before conducting any direct observations. This is an example of:',
    correctAnswer: 'Indirect functional assessment — gathering information about potential maintaining variables through interviews and rating scales without directly observing the behavior',
    incorrectAnswers: [
      'Descriptive functional behavior assessment — direct observation of behavior in the natural environment without manipulating variables',
      'Brief functional analysis — a condensed experimental analysis with short test conditions to identify behavioral function',
      'Contingency space analysis — a method of analyzing descriptive data by plotting conditional probabilities of reinforcement',
    ],
    misconceptions: [
      'Descriptive FBA requires direct observation — indirect FBA uses only interviews and questionnaires without observing the behavior',
      'Brief functional analysis involves direct manipulation of antecedents and consequences — indirect FBA does not manipulate any variables',
      'Contingency space analysis is a data analysis method applied to descriptive observation data, not an interview-based procedure',
    ],
    domain: 'H',
    category: 'Functional Behavior Assessment',
    difficulty: 'medium',
    bloomsLevel: 'understand'
  },
  {
    id: 'rr-group-contingencies',
    term: 'Interdependent Group Contingency',
    question: 'A teacher announces that the class will earn a pizza party if the class average on homework completion exceeds 90% for the week. This is an example of:',
    correctAnswer: 'Interdependent group contingency — all members must meet a collective criterion before any member receives the consequence',
    incorrectAnswers: [
      'Independent group contingency — the same criterion is applied to all members but each member\'s consequence depends only on their own behavior',
      'Dependent group contingency — the group\'s consequence depends on the behavior of one selected member or subset of members',
      'Hero procedure — one student\'s behavior determines the consequence for the entire group',
    ],
    misconceptions: [
      'Independent group contingency gives each student their own individual outcome based on their own performance — the pizza party here depends on the group average, not individual performance',
      'Dependent group contingency singles out one student whose behavior determines the group\'s outcome — this scenario uses the group average, not one student\'s behavior',
      'The hero procedure specifically selects one student as the "hero" whose behavior determines the group\'s reward — this scenario uses a collective group average',
    ],
    domain: 'H',
    category: 'Group Contingencies',
    difficulty: 'hard',
    bloomsLevel: 'analyze'
  },
  {
    id: 'rr-self-management',
    term: 'Self-Management',
    question: 'A graduate student tracks their daily study hours, compares them to a 2-hour goal, and rewards themselves with a movie if they meet the weekly goal. This is an example of:',
    correctAnswer: 'Self-management — the individual applies behavior-change strategies (self-monitoring, self-evaluation, self-reinforcement) to their own behavior to achieve a self-selected goal',
    incorrectAnswers: [
      'Contingency contract — a written agreement between two parties specifying a behavior-consequence relationship',
      'Self-control (Skinner\'s analysis) — arranging environmental variables to alter the probability of one\'s own subsequent behavior',
      'Token economy — a system in which tokens are earned for target behaviors and exchanged for backup reinforcers',
    ],
    misconceptions: [
      'A contingency contract requires a written document and typically involves another party — self-management can be informal and self-directed',
      'Skinner\'s self-control specifically refers to the manipulation of environmental antecedents — self-management is a broader term that includes monitoring and evaluation components',
      'A token economy uses tokens as conditioned reinforcers — the movie reward here is a direct backup reinforcer, not a token system',
    ],
    domain: 'H',
    category: 'Self-Management',
    difficulty: 'medium',
    bloomsLevel: 'apply'
  },
  {
    id: 'rr-generalization-strategies',
    term: 'Program Common Stimuli',
    question: 'A BCBA uses the same type of desk, chair, and materials found in the student\'s classroom during therapy sessions to promote transfer of skills. This generalization strategy is called:',
    correctAnswer: 'Program common stimuli — incorporating stimuli from the generalization setting into the training setting to increase the likelihood that behavior will transfer to the natural environment',
    incorrectAnswers: [
      'Multiple-exemplar training — training with multiple varied examples of the training stimuli to promote generalization to untrained stimuli',
      'Teach loosely — conducting training with varied, non-essential stimuli to prevent overly narrow stimulus control',
      'General case analysis — systematically identifying the full range of stimulus variations in the generalization setting and sampling them during training',
    ],
    misconceptions: [
      'Multiple-exemplar training varies the training stimuli themselves — programming common stimuli copies the natural environment\'s stimuli into the training setting',
      'Teaching loosely intentionally varies non-essential stimuli — programming common stimuli intentionally replicates essential stimuli from the generalization setting',
      'General case analysis is a planning procedure for selecting training examples — programming common stimuli is an implementation strategy for making the training environment resemble the natural environment',
    ],
    domain: 'H',
    category: 'Generalization',
    difficulty: 'hard',
    bloomsLevel: 'apply'
  },
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
    taskItem: 'B.19',
    category: 'Verbal Behavior'
  },
  {
    id: 'rr-antecedent',
    domain: 'B',
    term: 'Antecedent',
    correctDefinition: 'Any environmental condition or change in condition that precedes a behavior and may influence its occurrence.',
    distractors: ['The behavior itself, not what comes before it, but rather the observable action or response of an organism.', 'The consequence that follows a behavior, which can either increase or decrease the future probability of that behavior.', 'A reinforcer delivered after a response, which strengthens the likelihood of the response occurring again in the future.'],
    misconceptions: [
      'Antecedents always cause behavior (incorrect — they set the occasion for behavior, not cause it)',
      'Antecedents are only external stimuli (incorrect — internal states can also function as antecedents)',
      'The SD and the antecedent are different things (incorrect — the SD is a type of antecedent)',
    ],
  },
  {
    id: 'rr-three-term-contingency',
    domain: 'B',
    term: 'Three-Term Contingency',
    correctDefinition: 'The fundamental unit of operant analysis: antecedent stimulus → behavior → consequence; also called the ABCs of behavior.',
    distractors: ['A schedule of reinforcement with three components, which specifies the relationship between responses and the delivery of reinforcing or punishing consequences over time', 'A contingency involving three different reinforcers, which increases the future probability of the behavior occurring under similar antecedent conditions in the environment', 'A two-component relation between behavior and its consequence, as defined by its observable and measurable physical dimensions within the natural environment of the individual'],
    misconceptions: [
      'The three-term contingency is the same as the two-term contingency (incorrect — the antecedent is a distinct third term)',
      'Setting events are part of the three-term contingency (incorrect — they are a fourth term added to the extended analysis)',
      'The three-term contingency only applies to positive reinforcement (incorrect — it applies to all operant contingencies)',
    ],
  },
  {
    id: 'rr-respondent-behavior',
    domain: 'B',
    term: 'Respondent Behavior',
    correctDefinition: 'Behavior elicited by an antecedent stimulus that occurs reflexively, without requiring prior learning of the specific stimulus-response relationship.',
    distractors: ['Behavior that is controlled by its consequences, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'Behavior that occurs only in the presence of a discriminative stimulus, such that the behavior occurs reliably in the presence of the stimulus and not in its absence in the environment', 'Behavior that is emitted voluntarily in response to environmental demands, as defined by its observable and measurable physical dimensions within the natural environment of the individual'],
    misconceptions: [
      'Respondent behavior can be strengthened by reinforcement (incorrect — it is elicited, not reinforced)',
      'Respondent behavior only occurs in animals (incorrect — humans show respondent behavior too)',
      'Respondent behavior is the same as voluntary behavior (incorrect — it is involuntary and reflexive)',
    ],
  },
  {
    id: 'rr-operant-behavior',
    domain: 'B',
    term: 'Operant Behavior',
    correctDefinition: 'Behavior selected, maintained, and brought under stimulus control by its consequences; behavior that operates on the environment to produce consequences.',
    distractors: ['Behavior that is elicited by antecedent stimuli, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'Behavior that is controlled by unconditioned stimuli, which is defined operationally and manipulated systematically to demonstrate its effect on the target behavior', 'Behavior that occurs reflexively without prior learning, as defined by its observable and measurable physical dimensions within the natural environment of the individual'],
    misconceptions: [
      'Operant behavior is caused by antecedents (incorrect — it is selected by consequences)',
      'Operant behavior cannot be influenced by antecedents (incorrect — SDs set the occasion for operant behavior)',
      'All operant behavior is voluntary (incorrect — the distinction between voluntary and involuntary is not the defining feature)',
    ],
  },
  {
    id: 'rr-behavioral-cusp',
    domain: 'B',
    term: 'Behavioral Cusp',
    correctDefinition: 'A behavior change that opens access to new reinforcers, contingencies, and environments beyond the change itself.',
    distractors: ['Pivotal behavior: a behavior whose change produces collateral improvements in other behaviors, often untrained responses.', 'Target behavior: any behavior selected for change in an intervention, which is directly observed and measured.', 'Keystone behavior: a behavior that supports multiple other behaviors within a repertoire, essential for overall functioning.'],
    misconceptions: [
      'Behavioral cusp and pivotal behavior are the same thing (incorrect — a cusp opens new environments; a pivotal behavior produces collateral changes)',
      'A behavioral cusp only applies to language (incorrect — any behavior that opens new contingencies qualifies)',
      'Behavioral cusps are always socially significant (incorrect — significance is assessed separately)',
    ],
  },
  {
    id: 'rr-positive-reinforcer',
    domain: 'B',
    term: 'Positive Reinforcer',
    correctDefinition: 'A stimulus whose presentation following a behavior increases the future frequency of that behavior under similar conditions.',
    distractors: ['Negative reinforcer: a stimulus whose removal following a behavior increases the future frequency of that behavior.', 'Punisher: a stimulus whose presentation following a behavior decreases the future frequency of that behavior.', 'Conditioned reinforcer: a stimulus that acquires reinforcing value through pairing with an unconditioned reinforcer.'],
    misconceptions: [
      'A positive reinforcer is anything the person likes (incorrect — it is defined by its effect on behavior, not preference)',
      'Positive reinforcement always involves adding something pleasant (incorrect — it is defined by the increase in future behavior)',
      'A positive reinforcer is the same as a reward (incorrect — a reward is defined by social convention, not by its behavioral effect)',
    ],
  },
  {
    id: 'rr-premack-principle',
    domain: 'B',
    term: 'Premack Principle',
    correctDefinition: 'A higher-probability behavior can reinforce a lower-probability behavior when access to the high-probability behavior is made contingent on the low-probability behavior.',
    distractors: ['A procedure in which access to any behavior that is restricted below its free operant level can function as a reinforcer for other behaviors.', 'A procedure in which the relative rates of responding across concurrent schedules of reinforcement match the relative rates of reinforcement obtained from those schedules.', 'A procedure in which high-probability requests or instructions are presented immediately before a low-probability request to increase compliance.'],
    misconceptions: [
      'The Premack Principle only applies to preferred activities (incorrect — it applies to any high-probability behavior)',
      'The Premack Principle is the same as the response-deprivation hypothesis (incorrect — the RDH is a more precise formulation that supersedes the Premack Principle)',
      'The Premack Principle requires the person to enjoy the high-probability activity (incorrect — it is defined by relative response rates, not enjoyment)',
    ],
  },
  {
    id: 'rr-avoidance-contingency',
    domain: 'B',
    term: 'Avoidance Contingency',
    correctDefinition: 'A negative reinforcement contingency in which behavior prevents the onset of an aversive stimulus that has not yet occurred.',
    distractors: ['A negative reinforcement contingency in which behavior terminates an aversive stimulus that is already present in the environment.', 'A consequence delivery contingency in which behavior produces an aversive stimulus, leading to a decrease in future frequency of that behavior.', 'A procedure in which reinforcement for a previously reinforced behavior is withheld, leading to a decrease in the future frequency of that behavior.'],
    misconceptions: [
      'Avoidance and escape are the same contingency (incorrect — avoidance prevents onset; escape terminates an ongoing aversive stimulus)',
      'Avoidance behavior is always maladaptive (incorrect — many adaptive behaviors are maintained by avoidance contingencies)',
      'Avoidance contingencies involve positive reinforcement (incorrect — they involve negative reinforcement)',
    ],
  },
  {
    id: 'rr-postreinforcement-pause',
    domain: 'B',
    term: 'Postreinforcement Pause',
    correctDefinition: 'A period of no or low responding immediately after reinforcement delivery, most prominently observed on fixed-ratio and fixed-interval schedules.',
    distractors: ['A period of disrupted or ceased responding that occurs when the ratio requirement for reinforcement is increased too abruptly for the organism.', 'A temporary increase in the frequency, duration, or intensity of a behavior when reinforcement for that behavior is abruptly withheld.', 'A phenomenon where a change in the rate of reinforcement in one schedule component leads to an opposite change in the rate of responding in another component.'],
    misconceptions: [
      'Postreinforcement pauses occur on all schedules (incorrect — they are most prominent on fixed schedules)',
      'The postreinforcement pause is the same as ratio strain (incorrect — ratio strain involves emotional behavior and cessation; the pause is a normal schedule effect)',
      'Postreinforcement pauses indicate the behavior is being extinguished (incorrect — they are a normal feature of fixed-schedule performance)',
    ],
  },
  {
    id: 'rr-abative-effect',
    domain: 'B',
    term: 'Abative Effect',
    correctDefinition: 'The effect of an abolishing operation that decreases the current reinforcing value of a stimulus and decreases the current frequency of behavior reinforced by that stimulus.',
    distractors: ['The effect of an establishing operation that increases the current frequency of all behaviors previously reinforced by a specific stimulus.', 'The effect of an establishing operation that increases the current reinforcing effectiveness of a stimulus or event as a form of reinforcement.', 'A consequence that decreases the future frequency of a behavior when it is made contingent upon the occurrence of that specific behavior.'],
    misconceptions: [
      'The abative effect only applies to food and water (incorrect — it applies to any reinforcer affected by an abolishing operation)',
      'The abative effect is the same as extinction (incorrect — extinction removes reinforcement; the abative effect reduces the value of the reinforcer)',
      'The abative effect and the reinforcer-abolishing effect are different things (incorrect — they are the same effect described from different perspectives)',
    ],
  },
  {
    id: 'rr-cmo-r',
    domain: 'B',
    term: 'Reflexive CMO (CMO-R)',
    correctDefinition: 'A conditioned motivating operation that has acquired its MO properties by being paired with worsening conditions; its presence signals that conditions are about to worsen.',
    distractors: ['A conditioned motivating operation that makes something else effective as a reinforcer because of its relation to a current state of deprivation.', 'A conditioned motivating operation that acquires its value-altering and behavior-altering effects by being paired with an unconditioned motivating operation.', 'An environmental event that momentarily alters the effectiveness of other stimuli as reinforcers and the frequency of behavior reinforced by those stimuli.'],
    misconceptions: [
      'The CMO-R is the same as the CMO-T (incorrect — CMO-R signals worsening; CMO-T establishes instrumental stimuli as reinforcers)',
      'The CMO-R is an unconditioned MO (incorrect — it is conditioned through pairing with aversive events)',
      'The CMO-R only evokes escape behavior (incorrect — it also increases the reinforcing value of escape-producing stimuli)',
    ],
  },
  {
    id: 'rr-stimulus-fading',
    domain: 'B',
    term: 'Stimulus Fading',
    correctDefinition: 'A procedure for transferring stimulus control in which the properties of the SD are gradually changed while the learner continues to respond correctly.',
    distractors: ['A procedure in which the discriminative stimulus is gradually removed over time, which exerts control over behavior through its temporal and contingent relationship with the organism\'s reinforcement history', 'A procedure in which the response requirement is gradually increased over time, which is shaped and maintained by the contingent delivery of reinforcing or punishing consequences in the environment', 'A procedure in which the prompt is gradually reduced over time, which is a supplemental antecedent stimulus used to occasion correct responding during skill acquisition procedures, which precedes the behavior and sets the occasion for responding based on the organism\'s prior learning history'],
    misconceptions: [
      'Stimulus fading and prompt fading are the same procedure (incorrect — stimulus fading changes the SD itself; prompt fading removes supplementary stimuli)',
      'Stimulus fading always involves reducing the intensity of the SD (incorrect — it can involve changes in any dimension of the SD)',
      'Stimulus fading is only used in errorless learning (incorrect — it can be used in any procedure that requires transfer of stimulus control)',
    ],
  },
  {
    id: 'rr-conditional-discrimination',
    domain: 'B',
    term: 'Conditional Discrimination',
    correctDefinition: 'A discrimination in which the correct response to a comparison stimulus depends on the value of a sample or contextual stimulus.',
    distractors: ['A discrimination in which the learner responds based on the temporal relationship between stimuli, such that the behavior occurs reliably in the presence of the stimulus and not in its absence in the environment', 'A discrimination in which the learner responds based on the physical properties of a stimulus, which exerts control over behavior through its temporal and contingent relationship with the organism\'s reinforcement history', 'A discrimination in which the learner responds to a single discriminative stimulus, which exerts control over behavior through its temporal and contingent relationship with the organism\'s reinforcement history'],
    misconceptions: [
      'Conditional discrimination is the same as simple discrimination (incorrect — in conditional discrimination, the correct response depends on context)',
      'Matching-to-sample is a conditional discrimination (incorrect — matching-to-sample is a procedure used to train conditional discriminations, not a discrimination itself)',
      'Conditional discriminations cannot be trained (incorrect — they are routinely trained using matching-to-sample procedures)',
    ],
  },
  {
    id: 'rr-verbal-episode',
    domain: 'B',
    term: 'Verbal Episode',
    correctDefinition: 'The complete interaction between a speaker and a listener in which the speaker\'s verbal behavior is reinforced through the listener\'s mediation.',
    distractors: ['A functional unit of verbal behavior, such as a mand, tact, echoic, or intraverbal, defined by its controlling variables and consequences.', 'The group of individuals within a culture who reinforce the verbal behavior of a speaker, thereby shaping and maintaining it.', 'Behavior whose reinforcement is mediated by a listener, encompassing a wide range of forms including spoken, written, and gestural communication.'],
    misconceptions: [
      'A verbal episode requires spoken language (incorrect — it can involve any form of verbal behavior including written, signed, or gestural)',
      'The verbal episode is the same as the verbal operant (incorrect — the episode is the full speaker-listener interaction; the operant is the functional unit)',
      'A verbal episode ends when the speaker stops talking (incorrect — it ends when the reinforcement cycle is complete)',
    ],
  },
  {
    id: 'rr-tact-extension',
    domain: 'B',
    term: 'Tact Extension',
    correctDefinition: 'A tact that occurs in the presence of a novel stimulus that shares some properties with the original tact stimulus; the speaker extends an existing tact to a new but related stimulus.',
    distractors: ['A verbal operant controlled by a verbal discriminative stimulus that does not have point-to-point correspondence or formal similarity with the response.', 'A verbal operant in which the form of the response is controlled by a motivating operation and is reinforced by a specific consequence, which alters the reinforcing or punishing effectiveness of a stimulus and the frequency of behavior that has produced that stimulus.', 'A verbal operant in which the response is controlled by a verbal discriminative stimulus and has point-to-point correspondence and formal similarity.'],
    misconceptions: [
      'Tact extension is the same as stimulus generalization (incorrect — tact extension is a specific form of verbal generalization involving tacts)',
      'Tact extensions are always incorrect responses (incorrect — they are appropriate generalizations of existing tacts to novel stimuli)',
      'Tact extension requires direct reinforcement of the new response (incorrect — it emerges without direct reinforcement of the extended tact)',
    ],
  },
  {
    id: 'rr-transfer-of-function',
    domain: 'B',
    term: 'Transfer of Function',
    correctDefinition: 'The process by which the behavioral function of one stimulus in an equivalence class is acquired by other members of the class without direct conditioning.',
    distractors: ['The emergence of untrained stimulus-stimulus relations among arbitrary stimuli as a result of training other stimulus-stimulus relations.', 'A phenomenon in which an organism responds to stimuli that are similar to the original discriminative stimulus, even if they have not been directly trained.', 'The process by which the psychological functions of a stimulus are altered or transformed based on its participation in a relational network.'],
    misconceptions: [
      'Transfer of function requires direct conditioning of each class member (incorrect — it occurs without direct conditioning)',
      'Transfer of function is the same as transformation of function (incorrect — transfer occurs within equivalence classes; transformation occurs through relational frames)',
      'Transfer of function only applies to reinforcing functions (incorrect — any behavioral function can transfer across equivalence class members)',
    ],
  },
  {
    id: 'rr-mutual-entailment',
    domain: 'B',
    term: 'Mutual Entailment',
    correctDefinition: 'A property of relational framing in which if A is related to B in a given way, then B is related to A in a derived way; the bidirectional nature of relational frames.',
    distractors: ['A property of relational framing in which if A is related to B and B is related to C, then A and C are mutually related in a derived way through transitivity; a hallmark of stimulus equivalence classes.', 'A specific type of derived stimulus relation where if A is related to B and B is related to A, as seen in the symmetrical nature of stimulus equivalence relations, indicating reversibility of the relation.', 'A derived stimulus relation in which if A is related to B and B is related to C, then A is also related to C in a derived and untrained manner, demonstrating the concept of transitivity in relational networks.'],
    misconceptions: [
      'Mutual entailment is the same as symmetry (incorrect — symmetry is a specific form of mutual entailment in equivalence relations; mutual entailment is the broader property)',
      'Mutual entailment only applies to equivalence relations (incorrect — it applies to all relational frames)',
      'Mutual entailment requires direct training of both directions (incorrect — the reverse relation is derived without direct training)',
    ],
  },
  {
    id: 'rr-generalized-conditioned-reinforcer',
    domain: 'B',
    term: 'Generalized Conditioned Reinforcer',
    correctDefinition: 'A conditioned reinforcer that has been paired with many other reinforcers and therefore maintains reinforcing function across a wide range of motivating operations.',
    distractors: ['A primary reinforcer that is effective across all species and environmental conditions without any prior learning history, as measured by changes in the frequency, duration, or intensity of the target response over time.', 'A conditioned reinforcer that is only effective when a specific motivating operation is in effect for that particular reinforcer.', 'An unconditioned reinforcer that has been paired with a wide variety of other stimuli to enhance its overall effectiveness, which does not require prior learning history to function as a reinforcer for the organism.'],
    misconceptions: [
      'Tokens and money are classic examples — they work because they can be exchanged for many different backup reinforcers.'
    ],
    taskItem: 'B.01',
    category: 'Reinforcement'
  },
  {
    id: 'rr-punishment',
    domain: 'B',
    term: 'Punishment',
    correctDefinition: 'A process in which a consequence follows a behavior and decreases the future frequency of that behavior.',
    distractors: ['A process in which a consequence follows a behavior and increases the future frequency of that behavior.', 'A procedure in which a stimulus is removed or added to make an individual feel bad.', 'A process that suppresses behavior temporarily but does not change its future frequency.'],
    misconceptions: [
      'Punishment is defined by its effect on behavior — if behavior does not decrease, the consequence is not punishment by definition.'
    ],
    taskItem: 'B.02',
    category: 'Punishment'
  },
  {
    id: 'rr-unconditioned-punisher',
    domain: 'B',
    term: 'Unconditioned Punisher',
    correctDefinition: 'A stimulus that functions as a punisher without prior conditioning because of the organism\'s evolutionary history (e.g., intense heat, electric shock, loud noise).',
    distractors: ['A stimulus that decreases behavior only after being paired with another punisher, which is produced by implementing evidence-based behavior reduction procedures with treatment integrity', 'A stimulus that decreases behavior through social mediation, which exerts control over behavior through its temporal and contingent relationship with the organism\'s reinforcement history', 'A stimulus that decreases behavior by removing a positive reinforcer, as defined by its observable and measurable physical dimensions within the natural environment of the individual'],
    misconceptions: [
      'Like unconditioned reinforcers, unconditioned punishers are not always effective — individual history and context modulate their suppressive effects.'
    ],
    taskItem: 'B.02',
    category: 'Punishment'
  },
  {
    id: 'rr-conditioned-punisher',
    domain: 'B',
    term: 'Conditioned Punisher',
    correctDefinition: 'A previously neutral stimulus that acquires punishing function through repeated pairing with other punishers.',
    distractors: ['A stimulus that decreases behavior through automatic processes, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'A stimulus that decreases behavior without any prior learning history, which is produced by implementing evidence-based behavior reduction procedures with treatment integrity', 'A stimulus that decreases behavior by removing a positive reinforcer, as defined by its observable and measurable physical dimensions within the natural environment of the individual'],
    misconceptions: [
      'The word "No" becomes a conditioned punisher when it is consistently followed by other punishing consequences.'
    ],
    taskItem: 'B.02',
    category: 'Punishment'
  },
  {
    id: 'rr-extinction-burst',
    domain: 'B',
    term: 'Extinction Burst',
    correctDefinition: 'A temporary increase in the frequency, duration, or intensity of a behavior immediately after extinction is initiated.',
    distractors: ['A temporary increase in behavior that occurs when reinforcement is first introduced, as measured by direct observation using operationally defined response definitions across consistent observation periods', 'A permanent increase in behavior that occurs when reinforcement is withheld, as measured by direct observation using operationally defined response definitions across consistent observation periods', 'A rapid decrease in behavior that occurs at the beginning of extinction, as measured by direct observation using operationally defined response definitions across consistent observation periods'],
    misconceptions: [
      'An extinction burst is expected and does not mean extinction is failing. Discontinuing extinction during the burst negatively reinforces the behavior.'
    ],
    taskItem: 'B.03',
    category: 'Extinction'
  },
  {
    id: 'rr-spontaneous-recovery',
    domain: 'B',
    term: 'Spontaneous Recovery',
    correctDefinition: 'The reappearance of a previously extinguished behavior after a period of time has elapsed since extinction.',
    distractors: ['The reappearance of a previously extinguished behavior when reinforcement is reinstated, which increases the future probability of the behavior occurring under similar antecedent conditions in the environment', 'The reappearance of a behavior that was never directly reinforced, which increases the future probability of the behavior occurring under similar antecedent conditions in the environment, which is produced by arranging reinforcement contingencies that follow the target behavior with consistency', 'The reappearance of a behavior in a new setting where it was never trained, as defined by its observable and measurable physical dimensions within the natural environment of the individual, as defined by its observable and measurable physical dimensions within the natural environment of the individual'],
    misconceptions: [
      'Spontaneous recovery is temporary — if extinction is maintained, the behavior will extinguish again more quickly than the first time.'
    ],
    taskItem: 'B.03',
    category: 'Extinction'
  },
  {
    id: 'rr-unconditioned-mo',
    domain: 'B',
    term: 'Unconditioned Motivating Operation (UMO)',
    correctDefinition: 'A motivating operation whose value-altering effect is unlearned and does not depend on a conditioning history (e.g., food deprivation, water deprivation, sleep deprivation, pain).',
    distractors: ['A motivating operation that has been conditioned through pairing with other MOs or specific environmental events, acquiring its value-altering effect.', 'A discriminative stimulus that signals reinforcement without prior learning, indicating that a specific behavior will be reinforced in its presence.', 'A reinforcer that works without prior conditioning history, inherently increasing the future probability of behavior it follows across species.'],
    misconceptions: [
      'UMOs are biologically determined — their effects on reinforcer value are part of the organism\'s evolutionary heritage, not learned.'
    ],
    taskItem: 'B.04',
    category: 'Motivating Operations'
  },
  {
    id: 'rr-conditioned-mo',
    domain: 'B',
    term: 'Conditioned Motivating Operation (CMO)',
    correctDefinition: 'A motivating operation whose value-altering effect depends on a conditioning history — it acquires its ability to alter reinforcer effectiveness through learning.',
    distractors: ['A motivating operation whose effects are biologically determined and do not rely on an individual\'s past learning experiences.', 'A discriminative stimulus that has been conditioned to signal punishment, indicating that a specific behavior will lead to an aversive consequence.', 'A conditioned reinforcer that also functions as a motivating operation by increasing the value of another stimulus through association.'],
    misconceptions: [
      'There are three types of CMOs: reflexive (CMO-R), transitive (CMO-T), and surrogate (CMO-S), each with distinct conditioning histories.'
    ],
    taskItem: 'B.04',
    category: 'Motivating Operations'
  },
  {
    id: 'rr-stimulus-delta',
    domain: 'B',
    term: 'Stimulus Delta (SΔ)',
    correctDefinition: 'A stimulus in the presence of which a behavior has not been reinforced and in whose presence the behavior is therefore less likely to occur.',
    distractors: ['A stimulus in the presence of which a behavior has been reinforced and is therefore more likely to occur in the future.', 'A discriminative stimulus for punishment, signaling that a behavior will be followed by an aversive consequence.', 'Any neutral stimulus that precedes a behavior and does not initially have an effect on its future occurrence.'],
    misconceptions: [
      'SΔ signals the absence of reinforcement, not the presence of punishment. It is distinct from an S-punisher (SP).'
    ],
    taskItem: 'B.05',
    category: 'Stimulus Control'
  },
  {
    id: 'rr-stimulus-generalization',
    domain: 'B',
    term: 'Stimulus Generalization',
    correctDefinition: 'The occurrence of a behavior in the presence of stimuli that are similar to, but not identical to, the training stimulus.',
    distractors: ['The occurrence of a new, untrained behavior in the presence of the training stimulus, which exerts control over behavior through its temporal and contingent relationship with the organism\'s reinforcement history', 'The transfer of stimulus control from a prompt to the natural discriminative stimulus, which exerts control over behavior through its temporal and contingent relationship with the organism\'s reinforcement history', 'The occurrence of a behavior in the presence of the training stimulus only, which exerts control over behavior through its temporal and contingent relationship with the organism\'s reinforcement history'],
    misconceptions: [
      'Stimulus generalization is the opposite of stimulus discrimination — the more similar the new stimulus is to the SD, the more generalization occurs.'
    ],
    taskItem: 'B.05',
    category: 'Stimulus Control'
  },
  {
    id: 'rr-concept-formation',
    domain: 'B',
    term: 'Concept Formation',
    correctDefinition: 'The development of stimulus control by a common property shared by a class of stimuli, such that the behavior occurs in the presence of all members of the class and not in the presence of non-members.',
    distractors: ['The development of stimulus control by a single, specific stimulus, such that behavior occurs only in its presence, demonstrating narrow generalization, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'The process of pairing a neutral stimulus with a reinforcer to establish a new conditioned reinforcer for a behavior, requiring repeated trials, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'The development of stimulus control based on the physical proximity of a stimulus to the discriminative stimulus, influencing responding spatially, in the presence of which a behavior has been reinforced and is therefore more likely to occur.'],
    misconceptions: [
      'Concept formation requires both generalization within the class and discrimination from non-members — both components must be present.'
    ],
    taskItem: 'B.05',
    category: 'Stimulus Control'
  },
  {
    id: 'rr-contingency',
    domain: 'B',
    term: 'Contingency',
    correctDefinition: 'A dependent relation between two events — specifically, the relation between a behavior and its consequences such that the consequence occurs if and only if the behavior occurs.',
    distractors: ['A dependent relation between two events in which one event follows another without a direct causal link, suggesting a spurious correlation.', 'A schedule that determines when reinforcement is delivered, regardless of the behavior\'s occurrence or absence, making it non-contingent.', 'A dependent relation between two events, specifically the physical proximity of a stimulus to a behavior, influencing its likelihood, defined as anything an organism does that can be measured in terms of its physical dimensions.'],
    misconceptions: [
      'Contiguity (temporal closeness) is not the same as contingency (dependency). A consequence can be contiguous but non-contingent if it occurs regardless of behavior.'
    ],
    taskItem: 'B.06',
    category: 'Contingency'
  },
  {
    id: 'rr-continuous-reinforcement',
    domain: 'B',
    term: 'Continuous Reinforcement (CRF)',
    correctDefinition: 'A schedule of reinforcement in which every occurrence of the target behavior produces a reinforcer.',
    distractors: ['A schedule in which reinforcement is delivered after a variable number of responses, which is identified through assessment and manipulated or controlled to produce the desired behavior change', 'A schedule in which reinforcement is delivered after a variable interval of time, which is identified through assessment and manipulated or controlled to produce the desired behavior change', 'A schedule in which reinforcement is delivered after a fixed interval of time, which specifies the relationship between responses and the delivery of reinforcing or punishing consequences over time'],
    misconceptions: [
      'CRF produces the fastest acquisition but also the fastest extinction. It is best used when establishing a new behavior.'
    ],
    taskItem: 'B.07',
    category: 'Schedules of Reinforcement'
  },
  {
    id: 'rr-intermittent-reinforcement',
    domain: 'B',
    term: 'Intermittent Reinforcement',
    correctDefinition: 'A schedule of reinforcement in which only some occurrences of the target behavior produce a reinforcer.',
    distractors: ['A schedule in which reinforcement is delivered only when the behavior meets a specific criterion, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'A schedule in which reinforcement is delivered at irregular times regardless of behavior, which increases the future probability of the behavior occurring under similar antecedent conditions in the environment', 'A schedule in which reinforcement is delivered on a fixed-ratio basis, which increases the future probability of the behavior occurring under similar antecedent conditions in the environment'],
    misconceptions: [
      'Intermittent reinforcement produces greater resistance to extinction than CRF — this is why problem behaviors maintained on thin schedules are so persistent.'
    ],
    taskItem: 'B.07',
    category: 'Schedules of Reinforcement'
  },
  {
    id: 'rr-unconditioned-stimulus',
    domain: 'B',
    term: 'Unconditioned Stimulus (US)',
    correctDefinition: 'A stimulus that elicits a response without prior conditioning — it reliably produces a reflexive response based on the organism\'s evolutionary history.',
    distractors: ['A stimulus that signals the availability of reinforcement, which increases the future probability of the behavior occurring under similar antecedent conditions in the environment', 'A stimulus that decreases the reinforcing value of another stimulus, which is produced by implementing evidence-based behavior reduction procedures with treatment integrity', 'A stimulus that has acquired reinforcing properties through pairing, which exerts control over behavior through its temporal and contingent relationship with the organism\'s reinforcement history'],
    misconceptions: [
      'The US elicits the unconditioned response (UR). Food in Pavlov\'s experiments was the US; salivation was the UR.'
    ],
    taskItem: 'B.08',
    category: 'Respondent Conditioning'
  },
  {
    id: 'rr-conditioned-stimulus',
    domain: 'B',
    term: 'Conditioned Stimulus (CS)',
    correctDefinition: 'A previously neutral stimulus that acquires the ability to elicit a conditioned response through repeated pairing with an unconditioned stimulus.',
    distractors: ['A stimulus that has acquired reinforcing properties through pairing, which exerts control over behavior through its temporal and contingent relationship with the organism\'s reinforcement history', 'A stimulus that elicits a response without any prior learning, which exerts control over behavior through its temporal and contingent relationship with the organism\'s reinforcement history', 'A stimulus that signals the availability of reinforcement, which exerts control over behavior through its temporal and contingent relationship with the organism\'s reinforcement history'],
    misconceptions: [
      'The CS elicits a conditioned response (CR) that is similar to, but not identical to, the unconditioned response (UR). The bell in Pavlov\'s experiments was the CS.'
    ],
    taskItem: 'B.08',
    category: 'Respondent Conditioning'
  },
  {
    id: 'rr-unconditioned-response',
    domain: 'B',
    term: 'Unconditioned Response (UR)',
    correctDefinition: 'A reflexive response that is reliably elicited by an unconditioned stimulus without prior conditioning.',
    distractors: ['A response that occurs without any antecedent stimulus, which precedes the behavior and sets the occasion for responding based on the organism\'s prior learning history', 'A response that is maintained by automatic reinforcement, which is shaped and maintained by the contingent delivery of reinforcing or punishing consequences in the environment', 'A response that is elicited by a conditioned stimulus after conditioning, which is defined operationally and manipulated systematically to demonstrate its effect on the target behavior'],
    misconceptions: [
      'The UR is the natural, unlearned response to the US. Salivation in response to food in Pavlov\'s experiments was the UR.'
    ],
    taskItem: 'B.08',
    category: 'Respondent Conditioning'
  },
  {
    id: 'rr-conditioned-response',
    domain: 'B',
    term: 'Conditioned Response (CR)',
    correctDefinition: 'A learned response that is elicited by a conditioned stimulus after the CS has been paired with an unconditioned stimulus.',
    distractors: ['A response that occurs without any antecedent stimulus, which precedes the behavior and sets the occasion for responding based on the organism\'s prior learning history', 'A response that is elicited by an unconditioned stimulus, which is defined operationally and manipulated systematically to demonstrate its effect on the target behavior', 'A response that is maintained by conditioned reinforcement, which is defined operationally and manipulated systematically to demonstrate its effect on the target behavior'],
    misconceptions: [
      'The CR is similar to but typically weaker than the UR. Salivation in response to the bell (after conditioning) in Pavlov\'s experiments was the CR.'
    ],
    taskItem: 'B.08',
    category: 'Respondent Conditioning'
  },
  {
    id: 'rr-operant-conditioning',
    domain: 'B',
    term: 'Operant Conditioning',
    correctDefinition: 'A form of learning in which the future frequency of a behavior is changed by consequences that follow the behavior.',
    distractors: ['A form of learning in which a neutral stimulus acquires the ability to elicit a response through pairing.', 'A procedure in which behavior is shaped by reinforcing successive approximations to a desired terminal behavior.', 'The process of establishing stimulus control over behavior through differential reinforcement.'],
    misconceptions: [
      'Operant conditioning is not limited to laboratory settings — all voluntary behavior is subject to operant conditioning principles in everyday life.'
    ],
    taskItem: 'B.09',
    category: 'Operant Conditioning'
  },
  {
    id: 'rr-topography',
    domain: 'B',
    term: 'Topography',
    correctDefinition: 'The physical form or shape of a behavior — the specific movements that constitute the behavior.',
    distractors: ['The location in the environment where a behavior occurs, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'The physical force or intensity of a response, which is shaped and maintained by the contingent delivery of reinforcing or punishing consequences in the environment', 'The elapsed time from the onset of a response to its offset, which is shaped and maintained by the contingent delivery of reinforcing or punishing consequences in the environment'],
    misconceptions: [
      'Two behaviors can have the same topography but different functions (e.g., crying for attention vs. crying due to pain). Function, not topography, determines the response class.'
    ],
    taskItem: 'B.09',
    category: 'Operant Conditioning'
  },
  {
    id: 'rr-verbal-behavior',
    domain: 'B',
    term: 'Verbal Behavior',
    correctDefinition: 'Behavior that is reinforced through the mediation of another person\'s behavior — the listener provides the reinforcement for the speaker\'s verbal responses.',
    distractors: ['Behavior that is expressed through spoken words or written symbols, regardless of the social context or the presence of a listener.', 'Behavior that is primarily controlled by the physical properties of the response itself, rather than its social or environmental effects.', 'Communication that involves the use of signs, gestures, or vocalizations, which may or may not be understood by other individuals.'],
    misconceptions: [
      'Verbal behavior is defined functionally, not topographically. Writing, signing, and gesturing can all be verbal behavior if reinforced through a listener\'s mediation.'
    ],
    taskItem: 'B.10',
    category: 'Verbal Behavior'
  },
  {
    id: 'rr-resurgence',
    domain: 'B',
    term: 'Resurgence',
    correctDefinition: 'The reappearance of a previously reinforced behavior when a more recently reinforced behavior is placed on extinction.',
    distractors: ['The reappearance of a behavior following a change in the discriminative stimulus, which exerts control over behavior through its temporal and contingent relationship with the organism\'s reinforcement history', 'The reappearance of a behavior in a new setting where it was never trained, as defined by its observable and measurable physical dimensions within the natural environment of the individual, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'The reappearance of a behavior when reinforcement is reinstated after extinction, which increases the future probability of the behavior occurring under similar antecedent conditions in the environment, which is produced by arranging reinforcement contingencies that follow the target behavior with consistency'],
    misconceptions: [
      'Resurgence is different from spontaneous recovery — resurgence occurs when a competing behavior is extinguished, not simply after a time delay.'
    ],
    taskItem: 'B.11',
    category: 'Behavioral Momentum'
  },
  {
    id: 'rr-differential-reinforcement',
    domain: 'B',
    term: 'Differential Reinforcement',
    correctDefinition: 'A procedure in which reinforcement is provided for responses that meet a specified criterion and withheld for responses that do not meet that criterion.',
    distractors: ['A procedure in which reinforcement is provided for responses that are functionally equivalent to a target behavior, maintaining its overall rate.', 'A procedure in which reinforcement is delivered for responses that occur at a consistently high rate, regardless of their specific topography.', 'A procedure in which reinforcement is delivered for responses that are emitted at a consistently low rate, minimizing the overall frequency.'],
    misconceptions: [
      'Differential reinforcement is the mechanism underlying shaping, stimulus discrimination training, and all DR reduction procedures (DRA, DRI, DRO, DRL, DRH).'
    ],
    taskItem: 'B.12',
    category: 'Differential Reinforcement'
  },
  {
    id: 'rr-dra',
    domain: 'B',
    term: 'Differential Reinforcement of Alternative Behavior (DRA)',
    correctDefinition: 'A procedure in which reinforcement is delivered for a specified alternative behavior while reinforcement is withheld for the target behavior.',
    distractors: ['A procedure in which the individual is taught to engage in an alternative behavior that produces the same reinforcer as the problem behavior.', 'A procedure in which the schedule of reinforcement is gradually thinned after the behavior has been established to promote long-term maintenance.', 'A procedure in which the delivery of consequences is arranged to produce a change in the frequency, duration, or intensity of the target behavior.'],
    misconceptions: [
      'In DRA, the alternative behavior does not need to be incompatible with the target behavior — it just needs to be a different, more appropriate behavior. FCT is a specific form of DRA.'
    ],
    taskItem: 'B.12',
    category: 'Differential Reinforcement'
  },
  {
    id: 'rr-dri',
    domain: 'B',
    term: 'Differential Reinforcement of Incompatible Behavior (DRI)',
    correctDefinition: 'A procedure in which reinforcement is delivered for a behavior that is physically incompatible with the target behavior — both behaviors cannot occur simultaneously.',
    distractors: ['A procedure in which a previously neutral stimulus acquires reinforcing properties through repeated pairing with an established unconditioned reinforcer over time.', 'A procedure in which the reinforcing effectiveness of a stimulus is altered by manipulating the organism\'s current level of deprivation or satiation for that stimulus.', 'A procedure in which a stimulus is removed contingent on a behavior, resulting in a decrease in the future frequency of that behavior in similar environmental contexts.'],
    misconceptions: [
      'DRI is a specific form of DRA. The key distinction: in DRI, the alternative behavior is topographically incompatible with the target behavior (e.g., hands folded vs. hand-flapping).'
    ],
    taskItem: 'B.12',
    category: 'Differential Reinforcement'
  },
  {
    id: 'rr-dro',
    domain: 'B',
    term: 'Differential Reinforcement of Other Behavior (DRO)',
    correctDefinition: 'A procedure in which reinforcement is delivered after a specified interval during which the target behavior has not occurred.',
    distractors: ['A procedure in which the individual is taught to engage in an alternative behavior that produces the same reinforcer as the problem behavior.', 'A procedure in which the schedule of reinforcement is gradually thinned after the behavior has been established to promote long-term maintenance.', 'A procedure in which the delivery of consequences is arranged to produce a change in the frequency, duration, or intensity of the target behavior.'],
    misconceptions: [
      'DRO reinforces the absence of the target behavior, not a specific alternative behavior. It is sometimes called "omission training."'
    ],
    taskItem: 'B.12',
    category: 'Differential Reinforcement'
  },
  {
    id: 'rr-drl',
    domain: 'B',
    term: 'Differential Reinforcement of Low Rates (DRL)',
    correctDefinition: 'A procedure in which reinforcement is delivered when the target behavior occurs at or below a specified rate criterion.',
    distractors: ['A procedure in which the individual is taught to engage in an alternative behavior that produces the same reinforcer as the problem behavior.', 'A procedure in which the schedule of reinforcement is gradually thinned after the behavior has been established to promote long-term maintenance.', 'A procedure in which the delivery of consequences is arranged to produce a change in the frequency, duration, or intensity of the target behavior.'],
    misconceptions: [
      'DRL reduces but does not eliminate behavior — it is appropriate when the behavior is acceptable at low rates but problematic at high rates (e.g., talking in class).'
    ],
    taskItem: 'B.12',
    category: 'Differential Reinforcement'
  },
  {
    id: 'rr-drh',
    domain: 'B',
    term: 'Differential Reinforcement of High Rates (DRH)',
    correctDefinition: 'A procedure in which reinforcement is delivered when the target behavior occurs at or above a specified rate criterion.',
    distractors: ['A procedure in which the individual is taught to engage in an alternative behavior that produces the same reinforcer as the problem behavior.', 'A procedure in which the schedule of reinforcement is gradually thinned after the behavior has been established to promote long-term maintenance.', 'A procedure in which the delivery of consequences is arranged to produce a change in the frequency, duration, or intensity of the target behavior.'],
    misconceptions: [
      'DRH is used to increase the rate of a behavior that is already occurring but at an insufficient frequency (e.g., increasing the rate of correct academic responses).'
    ],
    taskItem: 'B.12',
    category: 'Differential Reinforcement'
  },
  {
    id: 'rr-chaining',
    domain: 'B',
    term: 'Chaining',
    correctDefinition: 'A procedure for teaching a sequence of behaviors in which each behavior in the chain serves as a conditioned reinforcer for the preceding behavior and a discriminative stimulus for the next behavior.',
    distractors: ['A procedure in which a stimulus is presented contingent on a behavior, resulting in a decrease in the future frequency of that behavior under similar antecedent conditions.', 'A procedure in which the delivery of a consequence is withheld following a behavior, resulting in a gradual decrease in the future probability of that response over time.', 'A procedure in which a stimulus is removed contingent on a behavior, resulting in a decrease in the future frequency of that behavior in similar environmental contexts.'],
    misconceptions: [
      'In a behavior chain, each step is both an SD for the next step and a conditioned reinforcer for the previous step. The terminal reinforcer at the end of the chain maintains the entire sequence.'
    ],
    taskItem: 'B.13',
    category: 'Chaining'
  },
  {
    id: 'rr-forward-chaining',
    domain: 'B',
    term: 'Forward Chaining',
    correctDefinition: 'A chaining procedure in which the first step of the task analysis is taught first, with the trainer completing all remaining steps, until the learner masters each step sequentially from first to last.',
    distractors: ['A chaining procedure in which the most difficult step is taught first, in which each component step serves as both a conditioned reinforcer for the preceding step and a discriminative stimulus for the next', 'A chaining procedure in which all steps are taught simultaneously, in which each component step serves as both a conditioned reinforcer for the preceding step and a discriminative stimulus for the next', 'A chaining procedure in which the learner is reinforced for completing the entire chain from the beginning, which is implemented systematically and evaluated through ongoing data collection to determine its effectiveness'],
    misconceptions: [
      'In forward chaining, the learner always experiences the terminal reinforcer at the end of the chain, even when only performing the first step independently.'
    ],
    taskItem: 'B.13',
    category: 'Chaining'
  },
  {
    id: 'rr-backward-chaining',
    domain: 'B',
    term: 'Backward Chaining',
    correctDefinition: 'A chaining procedure in which the last step of the task analysis is taught first, with the trainer completing all preceding steps, until the learner masters each step sequentially from last to first.',
    distractors: ['A chaining procedure in which the learner completes the chain in reverse order, in which each component step serves as both a conditioned reinforcer for the preceding step and a discriminative stimulus for the next', 'A chaining procedure in which all steps are taught simultaneously, in which each component step serves as both a conditioned reinforcer for the preceding step and a discriminative stimulus for the next', 'A chaining procedure in which the easiest step is taught first, in which each component step serves as both a conditioned reinforcer for the preceding step and a discriminative stimulus for the next'],
    misconceptions: [
      'Backward chaining ensures the learner always contacts the terminal reinforcer immediately after their response, which may accelerate acquisition for some learners.'
    ],
    taskItem: 'B.13',
    category: 'Chaining'
  },
  {
    id: 'rr-total-task-chaining',
    domain: 'B',
    term: 'Total Task Chaining',
    correctDefinition: 'A chaining procedure in which the learner attempts all steps of the task analysis during every training trial, with prompting provided for steps not yet mastered.',
    distractors: ['A chaining procedure in which the learner is reinforced only after completing the entire chain independently, which increases the future probability of the behavior occurring under similar antecedent conditions in the environment', 'A chaining procedure in which all steps are taught simultaneously using errorless learning, in which each component step serves as both a conditioned reinforcer for the preceding step and a discriminative stimulus for the next', 'A chaining procedure in which the learner completes as many steps as possible before receiving prompts, in which each component step serves as both a conditioned reinforcer for the preceding step and a discriminative stimulus for the next'],
    misconceptions: [
      'Total task chaining is often preferred for learners who have some prerequisite skills and can benefit from practicing the full chain on every trial.'
    ],
    taskItem: 'B.13',
    category: 'Chaining'
  },
  {
    id: 'rr-prompt-fading',
    domain: 'B',
    term: 'Prompt Fading',
    correctDefinition: 'The systematic reduction or elimination of prompts over time so that the natural discriminative stimulus gains stimulus control over the behavior.',
    distractors: ['The systematic reduction in the number of trials per session over time, as defined within the science of behavior analysis and applied to improve socially significant behaviors in natural environments', 'The systematic reduction in the amount of reinforcement provided over time, which increases the future probability of the behavior occurring under similar antecedent conditions in the environment', 'The systematic removal of the discriminative stimulus over time, which exerts control over behavior through its temporal and contingent relationship with the organism\'s reinforcement history'],
    misconceptions: [
      'Prompt fading must be planned and systematic — abrupt removal of prompts can cause errors and frustration. Most-to-least and least-to-most are the two main fading directions.'
    ],
    taskItem: 'B.14',
    category: 'Prompting'
  },
  {
    id: 'rr-most-to-least-prompting',
    domain: 'B',
    term: 'Most-to-Least Prompting',
    correctDefinition: 'A prompt fading procedure in which the most intrusive prompt is used initially and prompts are systematically faded to less intrusive levels as the learner acquires the skill.',
    distractors: ['A prompt fading procedure in which the least intrusive prompt is provided first, in which the controlling antecedent stimulus is gradually reduced to transfer control to the natural discriminative stimulus', 'A procedure in which prompts are faded by increasing the delay before they are delivered, which is a supplemental antecedent stimulus used to occasion correct responding during skill acquisition procedures', 'A procedure in which prompts are provided only after an error has occurred, as measured by direct observation using operationally defined response definitions across consistent observation periods'],
    misconceptions: [
      'Most-to-least prompting is errorless — it begins with a high level of support to prevent errors. It is contrasted with least-to-most prompting, which allows some errors to occur.'
    ],
    taskItem: 'B.14',
    category: 'Prompting'
  },
  {
    id: 'rr-least-to-most-prompting',
    domain: 'B',
    term: 'Least-to-Most Prompting',
    correctDefinition: 'A prompt fading procedure in which the least intrusive prompt is used first, with progressively more intrusive prompts added only if the learner does not respond correctly.',
    distractors: ['A procedure in which prompts are provided only before the discriminative stimulus, which exerts control over behavior through its temporal and contingent relationship with the organism\'s reinforcement history', 'A procedure in which the number of prompts is increased across sessions, which is a supplemental antecedent stimulus used to occasion correct responding during skill acquisition procedures, which is produced by arranging reinforcement contingencies that follow the target behavior with consistency', 'A procedure in which prompts are faded by reducing the delay before they are delivered, which is a supplemental antecedent stimulus used to occasion correct responding during skill acquisition procedures, which precedes the behavior and sets the occasion for responding based on the organism\'s prior learning history'],
    misconceptions: [
      'Least-to-most prompting allows some errors to occur, which may be acceptable for some learners. It requires the trainer to wait for the learner to respond before adding a more intrusive prompt.'
    ],
    taskItem: 'B.14',
    category: 'Prompting'
  },
  {
    id: 'rr-time-delay',
    domain: 'B',
    term: 'Time Delay',
    correctDefinition: 'A prompt fading procedure in which a brief pause is inserted between the natural SD and the prompt, allowing the learner an opportunity to respond independently before the prompt is delivered.',
    distractors: ['A procedure in which the type of prompt is changed from more to less intrusive, which is a supplemental antecedent stimulus used to occasion correct responding during skill acquisition procedures', 'A procedure in which the intensity of a prompt is gradually reduced over time, which is a supplemental antecedent stimulus used to occasion correct responding during skill acquisition procedures', 'A procedure in which reinforcement is delayed after a correct response, which increases the future probability of the behavior occurring under similar antecedent conditions in the environment, which is produced by arranging reinforcement contingencies that follow the target behavior with consistency'],
    misconceptions: [
      'There are two types: constant time delay (fixed pause) and progressive time delay (pause increases over trials). Both are used to transfer stimulus control from the prompt to the natural SD.'
    ],
    taskItem: 'B.14',
    category: 'Prompting'
  },
  {
    id: 'rr-imitation',
    domain: 'B',
    term: 'Imitation',
    correctDefinition: 'A form of observational learning in which the behavior of an observer comes to match the behavior of a model as a result of observing the model\'s behavior.',
    distractors: ['A systematic approach in which behavioral principles are applied to produce socially significant changes in behavior that are meaningful to the individual.', 'A procedure in which environmental variables are systematically arranged to produce a decrease in the future probability of the target behavior over time.', 'A procedure in which antecedent stimuli are modified to prevent the occurrence of problem behavior before it can be reinforced in the natural environment.'],
    misconceptions: [
      'Imitation requires that the observer\'s behavior match the model\'s behavior and that this match is a result of observing the model — not just a coincidental topographic similarity.'
    ],
    taskItem: 'B.15',
    category: 'Imitation'
  },
  {
    id: 'rr-pliance',
    domain: 'B',
    term: 'Pliance',
    correctDefinition: 'Rule-governed behavior that is controlled by a history of socially mediated reinforcement for following the rule — the behavior is maintained by the social consequences of compliance.',
    distractors: ['Rule-governed behavior that is controlled by the natural consequences specified by the rule, independent of any direct social reinforcement, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'Rule-governed behavior that is controlled by the verbal community\'s description of contingencies, but not by the social consequences of compliance.', 'Behavior that is directly shaped by contact with natural contingencies, without the mediation of any verbal stimuli or instructions, defined as anything an organism does that can be measured in terms of its physical dimensions.'],
    misconceptions: [
      'Pliance is maintained by the listener\'s reinforcement of compliance, not by the natural consequences described in the rule. "Do this because I said so" produces pliance.'
    ],
    taskItem: 'B.16',
    category: 'Rule-Governed Behavior'
  },
  {
    id: 'rr-tracking',
    domain: 'B',
    term: 'Tracking',
    correctDefinition: 'Rule-governed behavior that is controlled by the correspondence between the rule and the natural contingencies it describes — the behavior is maintained by contact with the natural consequences specified by the rule.',
    distractors: ['Rule-governed behavior that is maintained primarily by social reinforcement for compliance with the rule, rather than by direct contact with the natural consequences specified by the rule itself, often seen in situations where following instructions leads to praise.', 'Behavior that is directly shaped by an individual\'s contact with natural contingencies in the environment, without the presence of verbal mediation or explicit instructions, where the behavior\'s future probability is altered by its immediate consequences.', 'Rule-governed behavior that is maintained primarily by the augmentation of motivating operations, which effectively alter the current value of specific consequences as reinforcers or punishers, thereby influencing the likelihood of the rule being followed.'],
    misconceptions: [
      'Tracking is maintained by the natural consequences described in the rule, not by social reinforcement for compliance. Following a recipe because it produces good food is tracking.'
    ],
    taskItem: 'B.16',
    category: 'Rule-Governed Behavior'
  },
  {
    id: 'rr-augmenting',
    domain: 'B',
    term: 'Augmenting',
    correctDefinition: 'Rule-governed behavior that is controlled by a verbal stimulus that alters the reinforcing or punishing effectiveness of other stimuli — the rule functions as a motivating operation.',
    distractors: ['Rule-governed behavior maintained by social reinforcement for compliance, independent of the rule\'s specified outcomes or consequences, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'Rule-governed behavior maintained by the natural consequences specified by the rule, without altering the effectiveness of those consequences.', 'Behavior that is directly shaped by contact with natural contingencies, without the involvement of any verbal stimuli or instructions, defined as anything an organism does that can be measured in terms of its physical dimensions.'],
    misconceptions: [
      'Augmentals function like verbal MOs — they change the value of consequences. "This is the most important thing you will ever learn" is an augmental that increases the reinforcing value of the information that follows.'
    ],
    taskItem: 'B.16',
    category: 'Rule-Governed Behavior'
  },
  {
    id: 'rr-tandem-schedule',
    domain: 'B',
    term: 'Tandem Schedule',
    correctDefinition: 'A compound schedule in which the requirements of two or more component schedules must be completed in sequence before a reinforcer is delivered, without distinctive stimuli signaling each component.',
    distractors: ['A compound schedule in which two component schedules are simultaneously available, which specifies the relationship between responses and the delivery of reinforcing or punishing consequences over time', 'A compound schedule in which the requirements of two schedules must both be met, which specifies the relationship between responses and the delivery of reinforcing or punishing consequences over time', 'A compound schedule in which two component schedules are linked with discriminative stimuli, such that the behavior occurs reliably in the presence of the stimulus and not in its absence in the environment'],
    misconceptions: [
      'A tandem schedule is to a chained schedule as a mixed schedule is to a multiple schedule — the components are the same but the discriminative stimuli are absent.'
    ],
    taskItem: 'B.17',
    category: 'Schedules of Reinforcement'
  },
  {
    id: 'rr-contingent-exercise',
    domain: 'B',
    term: 'Contingent Exercise',
    correctDefinition: 'A form of positive punishment in which the learner is required to engage in physical exercise contingent on the occurrence of a target behavior.',
    distractors: ['A form of negative punishment in which access to preferred physical activities is removed for a specified period following the occurrence of a target behavior.', 'A procedure in which engaging in physical activity is used as a highly preferred reinforcer to strengthen appropriate behaviors in a structured setting.', 'A procedure in which physical exercise is scheduled at predetermined times throughout the day, regardless of the learner\'s behavior or performance.'],
    misconceptions: [
      'Contingent exercise is a form of positive punishment — exercise is added contingent on behavior. It is distinct from antecedent exercise, which is used to reduce behavior before it occurs.'
    ],
    taskItem: 'B.18',
    category: 'Punishment'
  },
  {
    id: 'rr-verbal-reprimand',
    domain: 'B',
    term: 'Verbal Reprimand',
    correctDefinition: 'A form of positive punishment in which a verbal statement expressing disapproval is delivered contingent on the occurrence of a target behavior.',
    distractors: ['A form of negative punishment in which verbal praise and attention are withdrawn following a target behavior, decreasing its future likelihood.', 'A verbal prompt delivered to a learner to guide them toward an appropriate response before an error occurs, thus preventing undesirable actions.', 'A verbal statement that functions as a discriminative stimulus, signaling the availability of reinforcement for a specific desired behavior.'],
    misconceptions: [
      'Verbal reprimands only function as punishment if they decrease the target behavior. Reprimands that are delivered inconsistently or with high emotional intensity may inadvertently reinforce attention-maintained behavior.'
    ],
    taskItem: 'B.18',
    category: 'Punishment'
  },
  {
    id: 'rr-satiation',
    domain: 'B',
    term: 'Satiation',
    correctDefinition: 'A decrease in the reinforcing effectiveness of a stimulus as a result of repeated exposure to or consumption of that stimulus.',
    distractors: ['A decrease in the occurrence of a behavior due to the removal of all reinforcement for that behavior.', 'A decrease in the occurrence of a behavior due to the presentation of an aversive stimulus following the behavior.', 'A decrease in the punishing effectiveness of a stimulus as a result of repeated or prolonged exposure to that stimulus.'],
    misconceptions: [
      'Satiation is an abolishing operation (AO) — it decreases the reinforcing value of a stimulus and decreases behavior maintained by that stimulus. It is the opposite of deprivation.'
    ],
    taskItem: 'B.19',
    category: 'Motivating Operations'
  },
  {
    id: 'rr-deprivation',
    domain: 'B',
    term: 'Deprivation',
    correctDefinition: 'An increase in the reinforcing effectiveness of a stimulus as a result of reduced access to or consumption of that stimulus.',
    distractors: ['A decrease in the reinforcing effectiveness of a stimulus as a result of repeated or prolonged exposure to that stimulus.', 'The removal of a preferred stimulus contingent on the occurrence of a target behavior, resulting in a decrease in future behavior.', 'A decrease in the frequency of a behavior caused by the withholding of all reinforcement for that specific behavior.'],
    misconceptions: [
      'Deprivation is an establishing operation (EO) — it increases the reinforcing value of a stimulus and increases behavior maintained by that stimulus. It is the opposite of satiation.'
    ],
    taskItem: 'B.19',
    category: 'Motivating Operations'
  },
  {
    id: 'rr-covert-conditioning',
    domain: 'B',
    term: 'Covert Conditioning',
    correctDefinition: 'A behavior change procedure in which imagined events serve as the antecedents, behaviors, and/or consequences in a conditioning paradigm.',
    distractors: ['A behavior change procedure in which a learner undergoes conditioning without their conscious awareness of the process.', 'A behavior change procedure in which private events, such as thoughts, serve as discriminative stimuli for overt behavior.', 'A behavior change procedure in which a learner acquires new behaviors by observing and imitating the actions of a model.'],
    misconceptions: [
      'Covert conditioning procedures (e.g., covert sensitization, covert reinforcement) use imagined scenarios. Their effectiveness is debated because the imagined events cannot be directly observed or measured.'
    ],
    taskItem: 'B.19',
    category: 'Private Events'
  },
  {
    id: 'rr-stimulus-equivalence',
    domain: 'B',
    term: 'Stimulus Equivalence',
    correctDefinition: 'The emergence of untrained and unreinforced stimulus relations among a set of stimuli following training on some relations among those stimuli — demonstrated by reflexivity, symmetry, and transitivity.',
    distractors: ['A set of stimuli that all control the same operant response, which is shaped and maintained by the contingent delivery of reinforcing or punishing consequences in the environment, which decreases the future probability of the behavior by altering the consequence that follows each occurrence', 'A set of stimuli that share the same physical properties, as defined within the science of behavior analysis and applied to improve socially significant behaviors in natural environments, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'A set of stimuli that have all been paired with the same unconditioned reinforcer, which increases the future probability of the behavior occurring under similar antecedent conditions in the environment, which is produced by arranging reinforcement contingencies that follow the target behavior with consistency'],
    misconceptions: [
      'Stimulus equivalence requires all three properties: reflexivity (A=A), symmetry (if A=B then B=A), and transitivity (if A=B and B=C then A=C). Untrained relations must emerge for equivalence to be demonstrated.'
    ],
    taskItem: 'B.20',
    category: 'Stimulus Control'
  },
  {
    id: 'rr-derived-relational-responding',
    domain: 'B',
    term: 'Derived Relational Responding',
    correctDefinition: 'Responding to relations among stimuli based on a history of reinforcement for relational responding, rather than based on the physical properties of the stimuli.',
    distractors: ['Responding to novel stimuli based on their physical similarity to previously trained stimuli, without any direct reinforcement history for those specific novel stimuli.', 'Responding to stimuli based on a direct history of differential reinforcement and punishment that has been paired specifically with those individual stimuli.', 'Responding to stimuli based on their temporal proximity to the delivery of reinforcement, leading to the development of adventitious or superstitious behaviors.'],
    misconceptions: [
      'Derived relational responding is the basis for stimulus equivalence and relational frame theory (RFT). It allows humans to respond to arbitrary relations that have no basis in the physical properties of stimuli.'
    ],
    taskItem: 'B.20',
    category: 'Stimulus Control'
  },
  {
    id: 'rr-relational-frame-theory',
    domain: 'B',
    term: 'Relational Frame Theory (RFT)',
    correctDefinition: 'A behavior-analytic account of human language and cognition that explains complex verbal behavior as derived relational responding under contextual control.',
    distractors: ['A behavior-analytic account of human language that describes verbal behavior as a collection of six distinct operant classes.', 'A theory that explains the process of language acquisition primarily through the mechanisms of imitation and direct reinforcement.', 'A theory that explains cognitive processes and language development in terms of complex neural networks and information processing.'],
    misconceptions: [
      'RFT extends beyond stimulus equivalence to include other relational frames (e.g., comparison, opposition, hierarchy). It provides a behavioral account of analogical reasoning, metaphor, and problem-solving.'
    ],
    taskItem: 'B.20',
    category: 'Verbal Behavior'
  },
  {
    id: 'rr-ratio-strain',
    domain: 'B',
    term: 'Ratio Strain',
    correctDefinition: 'A disruption in responding that occurs when the ratio requirement in a ratio schedule is increased too rapidly, resulting in pausing, irregular responding, or extinction-like behavior.',
    distractors: ['A significant decrease in the overall frequency of a target behavior caused by the complete removal of all reinforcement for that specific response.', 'A disruption in responding that occurs when the schedule of reinforcement is abruptly switched from a continuous reinforcement schedule to an intermittent one.', 'An increase in the overall rate of responding that is observed when a very rich schedule of reinforcement is implemented, leading to rapid acquisition.'],
    misconceptions: [
      'Ratio strain is prevented by thinning schedules gradually. Abrupt increases in ratio requirements can break down responding that was previously stable under a leaner schedule.'
    ],
    taskItem: 'B.07',
    category: 'Schedules of Reinforcement'
  },
  {
    id: 'rr-post-reinforcement-pause',
    domain: 'B',
    term: 'Post-Reinforcement Pause',
    correctDefinition: 'A pause in responding that occurs immediately after the delivery of a reinforcer, most commonly observed in fixed-ratio and fixed-interval schedules.',
    distractors: ['A temporary cessation of responding that occurs at the very beginning of an extinction procedure, before an extinction burst.', 'A temporary cessation of responding that occurs when the response requirement of a ratio schedule is increased too quickly.', 'A temporary cessation of responding that occurs when a learner is presented with multiple, distinct schedules of reinforcement.'],
    misconceptions: [
      'Post-reinforcement pauses are characteristic of fixed schedules (FR and FI) but not variable schedules (VR and VI). The pause length in FR schedules increases with larger ratio requirements.'
    ],
    taskItem: 'B.07',
    category: 'Schedules of Reinforcement'
  },
  {
    id: 'rr-scallop',
    domain: 'B',
    term: 'Scallop',
    correctDefinition: 'The characteristic cumulative record pattern produced by a fixed-interval schedule — a post-reinforcement pause followed by gradually accelerating responding as the interval end approaches.',
    distractors: ['A characteristic cumulative record pattern showing a consistent, high rate of responding with very few pauses, typical of a variable-ratio schedule of reinforcement.', 'A pattern of responding characterized by irregular and unpredictable bursts of behavior that occur inconsistently throughout the entire experimental session.', 'A rapid and intense burst of responding that occurs at the beginning of a session, followed by a gradual and consistent decrease in the overall response rate.'],
    misconceptions: [
      'The scallop pattern is diagnostic of FI schedules. The acceleration in responding near the end of the interval reflects temporal discrimination — the organism learns when reinforcement is likely to be available.'
    ],
    taskItem: 'B.07',
    category: 'Schedules of Reinforcement'
  },
  {
    id: 'rr-higher-order-conditioning',
    domain: 'B',
    term: 'Higher-Order Conditioning',
    correctDefinition: 'A form of respondent conditioning in which a conditioned stimulus is used to condition a new neutral stimulus, without the presence of the original unconditioned stimulus.',
    distractors: ['A form of operant conditioning where a previously established conditioned reinforcer is used to create new conditioned reinforcers through pairing with other stimuli.', 'A form of respondent conditioning in which the unconditioned stimulus is presented many times before the neutral stimulus is ever introduced, delaying learning.', 'A form of respondent conditioning where the strength and magnitude of the conditioned response are significantly greater than the original unconditioned response.'],
    misconceptions: [
      'In higher-order conditioning, the CS from first-order conditioning functions as the US for second-order conditioning. The resulting conditioned response is typically weaker and less resistant to extinction.'
    ],
    taskItem: 'B.08',
    category: 'Respondent Conditioning'
  },
  {
    id: 'rr-conditioned-emotional-response',
    domain: 'B',
    term: 'Conditioned Emotional Response (CER)',
    correctDefinition: 'An emotional response (e.g., fear, anxiety) that is elicited by a conditioned stimulus that has been paired with an aversive unconditioned stimulus.',
    distractors: ['An emotional response that is directly maintained by its environmental consequences, thereby increasing its future likelihood of occurring under similar conditions.', 'An emotional response that is under the control of a specific discriminative stimulus, signaling the availability of reinforcement for that particular emotion.', 'An emotional response that occurs in the absence of any identifiable external stimulus, often referred to as a generalized or free-floating mood state.'],
    misconceptions: [
      'CERs are established through respondent conditioning. They can suppress ongoing operant behavior (conditioned suppression) and are the basis for many anxiety disorders.'
    ],
    taskItem: 'B.08',
    category: 'Respondent Conditioning'
  },
  {
    id: 'rr-stimulus-overselectivity',
    domain: 'B',
    term: 'Stimulus Overselectivity',
    correctDefinition: 'A phenomenon in which behavior comes under the control of only a subset of the relevant stimulus components in a complex stimulus, while other relevant components are ignored.',
    distractors: ['A phenomenon in which behavior generalizes to all stimuli in the environment, regardless of their specific features, indicating a lack of discrimination.', 'A phenomenon in which behavior is controlled by too many stimulus dimensions simultaneously, leading to confusion and inefficient responding during training.', 'A phenomenon in which the organism responds to all stimuli equally, demonstrating a complete lack of discrimination among various environmental cues.'],
    misconceptions: [
      'Stimulus overselectivity is common in individuals with autism and developmental disabilities. It can interfere with learning and generalization because the learner responds to only one cue in a multi-cue environment.'
    ],
    taskItem: 'B.05',
    category: 'Stimulus Control'
  },
  {
    id: 'rr-discrete-trial-teaching',
    domain: 'B',
    term: 'Discrete Trial Teaching (DTT)',
    correctDefinition: 'A structured teaching format consisting of a discriminative stimulus, a learner response, and a consequence, with a clear beginning and end to each trial and an intertrial interval.',
    distractors: ['A teaching format in which behaviors are taught within the natural environment during routine activities, with learning opportunities initiated by the learner\'s interests and motivation.', 'A teaching format in which the learner initiates each learning opportunity, with the instructor following their lead and providing reinforcement for spontaneous engagement with the environment.', 'A teaching format in which multiple behaviors are taught simultaneously in a single trial, without clear separation between learning opportunities or specific antecedent control.'],
    misconceptions: [
      'DTT is a format for delivering instruction, not a specific procedure. It can be used to teach any behavior and can incorporate any evidence-based teaching procedure (e.g., shaping, chaining, prompting).'
    ],
    taskItem: 'B.21',
    category: 'Teaching Procedures'
  },
  {
    id: 'rr-natural-environment-teaching',
    domain: 'B',
    term: 'Natural Environment Teaching (NET)',
    correctDefinition: 'A teaching approach in which learning opportunities are embedded in the learner\'s natural environment during routine activities, using naturally occurring antecedents and consequences.',
    distractors: ['A structured teaching format consisting of a discriminative stimulus, a learner response, and a consequence, with a clear beginning and end to each trial and an intertrial interval.', 'A teaching approach in which the trainer controls all antecedents and consequences in a highly structured clinical setting, ensuring precise delivery of reinforcement contingencies.', 'A teaching approach in which behaviors are taught in a clinical setting before being generalized to other environments, focusing on skill acquisition prior to application.'],
    misconceptions: [
      'NET uses the learner\'s motivation and natural reinforcers to teach skills in context. It is contrasted with DTT but both approaches are often used together in comprehensive ABA programs.'
    ],
    taskItem: 'B.21',
    category: 'Teaching Procedures'
  },
  {
    id: 'rr-incidental-teaching',
    domain: 'B',
    term: 'Incidental Teaching',
    correctDefinition: 'A naturalistic teaching procedure in which the trainer waits for the learner to initiate an interaction with a preferred item or activity, then uses that initiation as an opportunity to prompt and reinforce a target behavior.',
    distractors: ['A teaching procedure in which the teacher uses errorless learning to prevent errors, which is implemented systematically and evaluated through ongoing data collection to determine its effectiveness', 'A teaching procedure in which the teacher uses a fixed sequence of trials to teach skills, which is implemented systematically and evaluated through ongoing data collection to determine its effectiveness', 'A teaching procedure in which the teacher uses video modeling to demonstrate target skills, which is implemented systematically and evaluated through ongoing data collection to determine its effectiveness'],
    misconceptions: [
      'Incidental teaching is learner-initiated — the trainer arranges the environment to create opportunities for the learner to initiate, then uses those initiations to teach target skills.'
    ],
    taskItem: 'B.21',
    category: 'Teaching Procedures'
  },
  {
    id: 'rr-pivotal-response-training',
    domain: 'B',
    term: 'Pivotal Response Training (PRT)',
    correctDefinition: 'A naturalistic behavioral intervention that targets pivotal areas of development (motivation, responsivity to multiple cues, self-management, self-initiation) to produce broad improvements across many skill areas.',
    distractors: ['An intervention that targets specific, discrete skills through structured practice, which is guided by the ethical principles and evidence-based standards established by the behavior analysis profession', 'An intervention that targets problem behavior through functional communication training, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'An intervention that uses peer-mediated strategies to improve social skills, which is taught using evidence-based instructional procedures and evaluated through direct performance measurement, which is designed based on assessment data and implemented with fidelity to produce the desired behavior change'],
    misconceptions: [
      'PRT targets pivotal behaviors because improving them produces collateral improvements across many other behaviors. It is a comprehensive naturalistic intervention, not a single procedure.'
    ],
    taskItem: 'B.21',
    category: 'Teaching Procedures'
  },
  {
    id: 'rr-mand-training',
    domain: 'B',
    term: 'Mand Training',
    correctDefinition: 'A procedure for teaching mands by establishing motivating operations for specific reinforcers, then prompting and reinforcing requests for those reinforcers.',
    distractors: ['A procedure for teaching tacts by pairing objects with their verbal labels until the learner can identify them independently, focusing on labeling items in the environment.', 'A procedure for teaching intraverbals by reinforcing responses to verbal questions, without visual support, emphasizing conversational skills and answering \'wh\' questions.', 'A procedure for teaching echoics by reinforcing vocal imitation of sounds or words presented by a model, focusing on developing vocal repertoires through mimicry.'],
    misconceptions: [
      'Mand training requires an active MO — the learner must be motivated for the item before training. Teaching mands without an active MO produces rote verbal behavior, not true mands.'
    ],
    taskItem: 'B.10',
    category: 'Verbal Behavior'
  },
  {
    id: 'rr-prompt',
    term: 'Prompt',
    domain: 'G',
    domainFull: 'Behavior-Change Procedures',
    correctDefinition: 'A supplemental antecedent stimulus added to an SD to increase the likelihood of a correct response; intended to be temporary and systematically faded.',
    distractors: ['A consequence delivered after a correct response to increase its future probability of occurring, serving as a form of positive or negative reinforcement.', 'A discriminative stimulus that controls behavior without supplemental cues, indicating reinforcement availability for specific responses in a given context.', 'A reinforcer used to increase future behavior by being presented immediately after a desired response, strengthening the likelihood of that behavior recurring.'],
    misconceptions: ['Prompts are permanent features of the instructional environment', 'A prompt is the same as a discriminative stimulus', 'Prompts are only used with verbal behavior', 'Prompts should never be faded once established']
  },
  {
    id: 'rr-response-prompt',
    term: 'Response Prompt',
    domain: 'G',
    domainFull: 'Behavior-Change Procedures',
    correctDefinition: 'A prompt that involves a behavior of the trainer — physical assist, model, gesture, or verbal cue — that increases the probability of a correct response.',
    distractors: ['A prompt that involves a change to the target stimulus itself, such as highlighting or repositioning, to increase the likelihood of a correct response.', 'A consequence delivered after an error response to decrease the future probability of that incorrect behavior, functioning as a form of punishment.', 'A schedule of reinforcement for correct responses, indicating when and how often reinforcement will be provided to maintain the target behavior.'],
    misconceptions: ['Response prompts and stimulus prompts are the same thing', 'A gestural prompt is not a response prompt', 'Response prompts are only physical in nature', 'Response prompts should always be the most intrusive option']
  },
  {
    id: 'rr-stimulus-prompt',
    term: 'Stimulus Prompt',
    domain: 'G',
    domainFull: 'Behavior-Change Procedures',
    correctDefinition: 'A prompt that involves a change to the target discriminative stimulus itself — position, size, color, or intensity — to increase correct responding.',
    distractors: ['A trainer behavior that increases correct responding, such as modeling, gestural cues, or physical guidance, providing direct assistance to the learner.', 'A reinforcer delivered after a correct response, increasing the likelihood of that response in the future, thereby strengthening the target behavior.', 'A verbal cue provided by the trainer to assist the learner in making a correct response, offering auditory guidance for the desired action.'],
    misconceptions: ['Stimulus prompts involve trainer behavior', 'Stimulus prompts are always verbal', 'Stimulus prompts cannot be faded', 'Stimulus prompts are the same as extra-stimulus prompts']
  },
  {
    id: 'rr-within-stimulus-prompt',
    term: 'Within-Stimulus Prompt',
    domain: 'G',
    domainFull: 'Behavior-Change Procedures',
    correctDefinition: 'A stimulus prompt in which a feature of the target SD is exaggerated to direct attention to the relevant dimension, then gradually faded to the natural form.',
    distractors: ['An additional cue added outside the target stimulus, such as a verbal instruction or a gestural prompt, providing supplementary information for correct responding.', 'A trainer behavior used to guide responding, such as physical prompting or modeling the correct action, directly assisting the learner\'s performance.', 'A verbal instruction provided before the SD, serving as an auditory cue for the desired behavior, guiding the learner\'s response.'],
    misconceptions: ['Within-stimulus prompts add a separate cue to the environment', 'Within-stimulus prompts are the same as extra-stimulus prompts', 'Within-stimulus prompts cannot be used for visual discrimination tasks', 'Within-stimulus prompts are never faded']
  },
  {
    id: 'rr-constant-time-delay',
    term: 'Constant Time Delay',
    domain: 'G',
    domainFull: 'Behavior-Change Procedures',
    correctDefinition: 'A time delay procedure in which the interval between the SD and the prompt remains the same throughout training after an initial zero-delay phase.',
    distractors: ['A time delay procedure in which the interval between the discriminative stimulus and the prompt is progressively lengthened across training opportunities.', 'A time delay procedure in which the prompt is delivered at a random interval after the discriminative stimulus to prevent prompt dependency.', 'A time delay procedure where the delay between the discriminative stimulus and the prompt varies unsystematically across different training trials.'],
    misconceptions: ['Constant time delay gradually increases the delay interval', 'Constant time delay and progressive time delay are the same procedure', 'Constant time delay begins with the maximum delay interval', 'Constant time delay does not include a zero-delay phase']
  },
  {
    id: 'rr-progressive-time-delay',
    term: 'Progressive Time Delay',
    domain: 'G',
    domainFull: 'Behavior-Change Procedures',
    correctDefinition: 'A time delay procedure in which the interval between the SD and the prompt is systematically increased across trials or sessions, starting at 0 seconds.',
    distractors: ['A time delay procedure where the interval between the discriminative stimulus and the prompt remains fixed and unchanging across all training phases.', 'A time delay procedure in which the prompt is delivered concurrently with the discriminative stimulus, providing immediate guidance to the learner.', 'A time delay procedure where the delay interval is systematically decreased across training opportunities, leading to earlier prompt delivery.'],
    misconceptions: ['Progressive time delay starts with the maximum delay interval', 'Progressive time delay and constant time delay are identical', 'Progressive time delay does not include a zero-delay phase', 'Progressive time delay is only used for chaining procedures']
  },
  {
    id: 'rr-transfer-of-stimulus-control',
    term: 'Transfer of Stimulus Control',
    domain: 'G',
    domainFull: 'Behavior-Change Procedures',
    correctDefinition: 'The process by which stimulus control shifts from a prompt to the target SD through systematic prompt fading or time delay procedures.',
    distractors: ['A procedure in which stimulus control is shifted from the training setting to the natural environment, which is implemented systematically and evaluated through ongoing data collection to determine its effectiveness', 'A procedure in which stimulus control is shifted from a conditioned to an unconditioned stimulus, which is implemented systematically and evaluated through ongoing data collection to determine its effectiveness', 'A procedure in which stimulus control is shifted from one discriminative stimulus to another, which exerts control over behavior through its temporal and contingent relationship with the organism\'s reinforcement history'],
    misconceptions: ['Transfer of stimulus control means the SD loses control of behavior', 'Transfer of stimulus control occurs automatically without fading', 'Transfer of stimulus control is the same as generalization', 'Transfer of stimulus control only applies to verbal behavior']
  },
  {
    id: 'rr-successive-approximations',
    term: 'Successive Approximations',
    domain: 'G',
    domainFull: 'Behavior-Change Procedures',
    correctDefinition: 'The intermediate behaviors reinforced during shaping, each closer to the terminal target behavior than the previous step; each is reinforced until reliable, then placed on extinction as the criterion advances.',
    distractors: ['The ultimate and fully developed behavior that represents the final and desired outcome of a shaping intervention, achieved after all intermediate steps have been mastered and the individual consistently performs the intended complex skill, marking the completion of the training process.', 'The antecedent stimuli that signal the availability of reinforcement and reliably occasion the desired behavior in a specific learning context, indicating to the individual when and where a particular response will be consequated positively, thereby increasing the likelihood of its occurrence.', 'The specific reinforcing consequences that are delivered contingent upon the occurrence of the target behavior during a skill acquisition program, serving to increase the future probability of that behavior under similar stimulus conditions, and are crucial for strengthening and maintaining newly learned skills.'],
    misconceptions: ['Successive approximations are all reinforced simultaneously', 'Successive approximations are never placed on extinction', 'Successive approximations are the same as behavior chains', 'Successive approximations only apply to verbal behavior']
  },
  {
    id: 'rr-escape-extinction',
    term: 'Escape Extinction',
    domain: 'G',
    domainFull: 'Behavior-Change Procedures',
    correctDefinition: 'A form of extinction for behavior maintained by negative reinforcement (escape), in which the aversive stimulus is no longer removed contingent on the problem behavior.',
    distractors: ['A form of extinction for behavior maintained by positive reinforcement, in which access to a preferred item or activity is systematically blocked following a problem behavior.', 'A procedure in which an individual is allowed to terminate an aversive stimulus only after engaging in a specific, functionally equivalent appropriate behavior.', 'A procedure in which an aversive stimulus is preemptively removed from the environment before any problem behavior has the opportunity to occur or escalate.'],
    misconceptions: ['Escape extinction is used for attention-maintained behavior', 'In escape extinction, demands are removed when problem behavior occurs', 'Escape extinction and extinction are different procedures', 'Escape extinction does not require identifying the function of behavior']
  },
  {
    id: 'rr-high-p-sequence',
    term: 'High-Probability Request Sequence (High-p)',
    domain: 'G',
    domainFull: 'Behavior-Change Procedures',
    correctDefinition: 'An antecedent intervention in which high-p requests are presented immediately before a low-p request, using behavioral momentum to increase compliance.',
    distractors: ['A stimulus that signals a period of extinction, in the presence of which the behavior occurs at a lower rate than in other conditions in the environment.', 'A procedure in which the relationship between antecedent stimuli and behavioral consequences is altered to produce a meaningful change in responding.', 'A procedure in which environmental variables are systematically arranged to produce a decrease in the future probability of the target behavior over time.'],
    misconceptions: ['High-p requests are presented after the low-p request', 'High-p sequences are a consequence-based procedure', 'High-p sequences are used to reduce the rate of compliant behavior', 'High-p sequences require the low-p request to be presented first']
  },
  {
    id: 'rr-self-monitoring',
    term: 'Self-Monitoring',
    domain: 'G',
    domainFull: 'Behavior-Change Procedures',
    correctDefinition: 'A self-management procedure in which an individual observes and records their own behavior; serves as both a data collection method and a behavior change procedure through reactivity.',
    distractors: ['A procedure in which a caregiver monitors the client, which is implemented systematically and evaluated through ongoing data collection to determine its effectiveness, which is analyzed to evaluate the effectiveness of the intervention and guide clinical decision-making processes', 'A dimensional quantity of behavior referring to the proportion of time during an observation period in which the behavior is occurring at any given moment.', 'A procedure in which the reinforcing or punishing effectiveness of a consequence is altered through manipulation of deprivation or satiation states.'],
    misconceptions: ['Self-monitoring does not change behavior', 'Self-monitoring is the same as self-evaluation', 'Self-monitoring requires another person to verify the data', 'Self-monitoring is only used for decreasing behavior']
  },
  {
    id: 'rr-generalization-probe',
    term: 'Generalization Probe',
    domain: 'G',
    domainFull: 'Behavior-Change Procedures',
    correctDefinition: 'A measurement procedure assessing the target behavior in a non-training context without reinforcement, to determine whether generalization has occurred.',
    distractors: ['An assessment conducted during training to determine whether the learner has mastered a skill, which is taught using evidence-based instructional procedures and evaluated through direct performance measurement', 'An assessment conducted at the end of a session to determine overall performance, which identifies the variables that influence the behavior and informs the development of an effective intervention', 'An assessment conducted to determine whether a behavior has been maintained, which identifies the variables that influence the behavior and informs the development of an effective intervention'],
    misconceptions: ['Generalization probes include reinforcement for correct responses', 'Generalization probes are conducted in the training setting', 'Generalization probes are the same as baseline probes', 'Generalization probes require prompting to assess performance']
  },
  {
    id: 'rr-response-maintenance',
    term: 'Response Maintenance',
    domain: 'G',
    domainFull: 'Behavior-Change Procedures',
    correctDefinition: 'The continuation of a target behavior after training contingencies have been thinned or removed.',
    distractors: ['The process by which a behavior is transferred from a training setting to a natural environment, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'The process by which a behavior is brought under the control of natural discriminative stimuli, such that the behavior occurs reliably in the presence of the stimulus and not in its absence in the environment', 'The process by which a behavior is maintained through the use of self-management procedures, which is implemented systematically and evaluated through ongoing data collection to determine its effectiveness'],
    misconceptions: ['Response maintenance is the same as generalization', 'Response maintenance refers to behavior during active training', 'Response maintenance and response generalization are identical', 'Response maintenance only applies to newly acquired behaviors']
  },
  {
    id: 'rr-multiple-exemplar-training',
    term: 'Multiple-Exemplar Training',
    domain: 'G',
    domainFull: 'Behavior-Change Procedures',
    correctDefinition: 'A generalization strategy in which training is conducted across multiple examples of the stimulus class so the trained behavior generalizes to untrained members of the same class.',
    distractors: ['A generalization strategy in which the training environment is manipulated to resemble the generalization environment as closely as possible, promoting direct transfer of skills.', 'A generalization strategy in which a single, highly representative example is used repeatedly during training to ensure mastery and promote maintenance of the skill.', 'A generalization strategy in which the learner is taught to respond to a rule or principle that applies across many different situations, rather than specific examples.'],
    misconceptions: ['Multiple-exemplar training uses a single example to ensure mastery', 'Multiple-exemplar training is the same as programming common stimuli', 'Multiple-exemplar training only applies to receptive identification', 'Multiple-exemplar training eliminates the need for generalization probes']
  },
  {
    id: 'rr-general-case-analysis',
    term: 'General Case Analysis',
    domain: 'G',
    domainFull: 'Behavior-Change Procedures',
    correctDefinition: 'A generalization strategy in which the full range of stimulus and response variations in the generalization setting is analyzed and training examples are selected to sample the full range.',
    distractors: ['A generalization strategy in which the full range of potential stimulus and response topographies is identified to conduct a comprehensive functional assessment.', 'A generalization strategy in which a detailed task analysis of a complex skill is developed to ensure all component steps are systematically taught.', 'A generalization strategy in which a complete assessment of an individual\'s preferences for various stimuli is performed to enhance intervention effectiveness.'],
    misconceptions: ['General case analysis is the same as task analysis', 'General case analysis is only used for self-care skills', 'General case analysis does not require analyzing the generalization setting', 'General case analysis produces a list of reinforcers, not training examples']
  },
  {
    id: "rr-phylogenetic-contingencies",
    term: "Phylogenetic Contingencies",
    domain: "A",
    correctDefinition: "Contingencies that operated during the evolutionary history of a species, selecting biological structures and behavioral repertoires that enhanced survival and reproduction.",
    distractors: ['Contingencies that are established within an individual\'s lifetime, shaping unique behavioral patterns through direct experience and learning processes.', 'Contingencies that result from the immediate interaction between an organism\'s behavior and the environmental consequences that follow it.', 'Contingencies that are primarily influenced by cultural norms and verbal communities, guiding shared practices and social interactions within a group.'],
    misconceptions: ["Phylogenetic contingencies are the same as learned behavior", "Phylogenetic contingencies can be directly observed in a single session", "Phylogenetic contingencies are irrelevant to ABA practice", "Phylogenetic contingencies only apply to non-human animals"],
    taskItem: "A.01",
    category: "Philosophical Foundations"
  },
  {
    id: "rr-ontogenetic-contingencies",
    term: "Ontogenetic Contingencies",
    domain: "A",
    correctDefinition: "Contingencies that operate during an individual organism's lifetime, selecting and shaping behavior through direct experience with environmental consequences.",
    distractors: ['Contingencies that shaped behavior across evolutionary history of a species, leading to innate responses.', 'Contingencies established by cultural practices and verbal communities that influence shared behaviors.', 'Contingencies that only operate during early childhood development and then cease to have an impact.'],
    misconceptions: ["Ontogenetic contingencies are the same as phylogenetic contingencies", "Ontogenetic contingencies cannot change behavior after early development", "Ontogenetic contingencies only involve positive reinforcement", "Ontogenetic contingencies are not relevant to understanding problem behavior"],
    taskItem: "A.01",
    category: "Philosophical Foundations"
  },
  {
    id: "rr-cultural-contingencies",
    term: "Cultural Contingencies",
    domain: "A",
    correctDefinition: "Contingencies established and maintained by social groups and verbal communities that select behavioral practices shared across members of a culture.",
    distractors: ['Contingencies that operated during the evolutionary history of a species, selecting for biological structures and innate behavioral tendencies.', 'Contingencies that are established within an individual\'s lifetime, shaping unique behavioral repertoires through direct learning experiences.', 'Contingencies that primarily govern the development of unconditioned reflexes and respondent behaviors elicited by specific environmental stimuli.'],
    misconceptions: ["Cultural contingencies are the same as ontogenetic contingencies", "Cultural contingencies are not a legitimate subject of behavior analysis", "Cultural contingencies only apply to non-Western populations", "Cultural contingencies cannot be analyzed using behavioral principles"],
    taskItem: "A.01",
    category: "Philosophical Foundations"
  },
  {
    id: "rr-goals-of-science",
    term: "Goals of Science (Description, Prediction, Control)",
    domain: "A",
    correctDefinition: "The three interrelated goals of science: description (identifying and recording phenomena), prediction (identifying reliable relationships between variables), and control (demonstrating a functional relationship by manipulating variables).",
    distractors: ['The three interrelated goals of science: observation (systematically gathering empirical data), hypothesis (formulating testable propositions), and replication (independently verifying experimental outcomes).', 'The three interrelated goals of science: measurement (quantifying observable phenomena), generalization (extending findings to new populations or settings), and application (utilizing scientific knowledge for practical solutions).', 'The three interrelated goals of science: assessment (identifying the current state of a phenomenon), intervention (implementing strategies to modify a phenomenon), and evaluation (determining the efficacy of modification strategies).'],
    misconceptions: ["Control means restraining or restricting behavior", "Prediction is sufficient to demonstrate a functional relationship", "Description is the highest level of scientific knowledge", "The three goals are independent and unrelated to each other"],
    taskItem: "A.01",
    category: "Philosophical Foundations"
  },
  {
    id: "rr-behaviorism-eab-aba-distinctions",
    term: "Behaviorism, EAB, ABA, and Professional Practice  -  Distinctions",
    domain: "A",
    correctDefinition: "Four distinct but related levels: Behaviorism is the philosophy; EAB is the basic science studying behavior-environment relations in controlled settings; ABA is the applied science using those principles to address socially significant behavior; Professional Practice is the service delivery guided by ABA.",
    distractors: ['Four distinct but related levels: Behaviorism is the methodology; EAB is the applied practice using those principles to address socially significant behavior; ABA is the basic science studying behavior-environment relations in controlled settings; Professional Practice is the philosophical foundation.', 'Four distinct but related levels: Behaviorism is the science; EAB is the philosophy underlying the study of behavior; ABA is the delivery of services; Professional Practice is the experimental analysis of behavior in controlled settings.', 'Four distinct but related levels: Behaviorism is the applied practice; EAB is the professional service delivery; ABA is the basic philosophical stance; Professional Practice is the scientific investigation of behavior in natural environments.'],
    misconceptions: ["ABA and behaviorism are the same thing", "EAB findings do not apply to ABA practice", "Professional practice is not guided by the science of ABA", "Behaviorism is only relevant to basic research"],
    taskItem: "A.01",
    category: "Philosophical Foundations"
  },
  {
    id: "rr-reflexivity",
    term: "Reflexivity (Stimulus Equivalence)",
    domain: "B",
    correctDefinition: "A property of stimulus equivalence in which a stimulus matches itself (A=A) without prior training; also called identity matching.",
    distractors: ['A procedure in which the individual is taught to engage in an alternative behavior that produces the same reinforcer as the problem behavior.', 'A procedure in which the schedule of reinforcement is gradually thinned after the behavior has been established to promote long-term maintenance.', 'A procedure in which the delivery of consequences is arranged to produce a change in the frequency, duration, or intensity of the target behavior.'],
    misconceptions: ["Reflexivity must be directly trained", "Reflexivity is the same as symmetry", "Reflexivity only applies to visual stimuli", "Reflexivity is a property of the organism, not the stimulus relation"],
    taskItem: "B.01",
    category: "Core Concepts"
  },
  {
    id: "rr-renewal",
    term: "Renewal (Context Renewal)",
    domain: "B",
    correctDefinition: "The resurgence of an extinguished behavior when the organism is returned to the context in which the behavior was originally reinforced, even after extinction has been conducted in a different context.",
    distractors: ['The increase in the rate of an extinguished behavior that occurs after a period of non-reinforcement, even when the context remains unchanged, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'The reappearance of an extinguished behavior when a stimulus associated with prior reinforcement is presented again, leading to temporary recovery, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'The process by which an organism learns to discriminate between different stimuli, responding to some and not others, based on their consequences, as measured by changes in the frequency, duration, or intensity of the target response over time.'],
    misconceptions: ["Renewal is the same as spontaneous recovery", "Renewal only occurs in laboratory settings", "Renewal is prevented by conducting extinction in multiple contexts", "Renewal is a form of resurgence"],
    taskItem: "B.01",
    category: "Core Concepts"
  },
  {
    id: "rr-generalized-conditioned-punisher",
    term: "Generalized Conditioned Punisher",
    domain: "B",
    correctDefinition: "A conditioned punisher that has been paired with many other punishers and therefore suppresses behavior across a wide range of motivating operations.",
    distractors: ['A conditioned punisher that is a punisher that decreases behavior without any prior conditioning or learning history.', 'A conditioned punisher that is a punisher that is effective only under specific motivating operations, not broadly.', 'A conditioned punisher that is a punisher that is paired with a single unconditioned punisher, lacking widespread impact.'],
    misconceptions: ["A generalized conditioned punisher is the same as an unconditioned punisher", "Generalized conditioned punishers are always more effective than unconditioned punishers", "Generalized conditioned punishers do not require pairing with other punishers", "Generalized conditioned punishers are not affected by motivating operations"],
    taskItem: "B.01",
    category: "Core Concepts"
  },
  {
    id: "rr-mo-vs-stimulus-control",
    term: "MO vs. Stimulus Control  -  Distinction",
    domain: "B",
    correctDefinition: "A motivating operation alters the reinforcing effectiveness of a stimulus and the frequency of behavior that has been reinforced by it; a discriminative stimulus signals the availability of reinforcement but does not alter its effectiveness.",
    distractors: ['A positive reinforcer is a stimulus that, when presented immediately following a behavior, increases the future probability of that behavior occurring under similar conditions; a negative reinforcer is a stimulus whose removal following a behavior strengthens the behavior\'s future likelihood.', 'Respondent conditioning involves pairing a neutral stimulus with an unconditioned stimulus to elicit a conditioned response; operant conditioning focuses on the consequences of behavior and how they influence the future probability of that behavior in specific contexts.', 'An unconditioned reinforcer is a stimulus that functions as a reinforcer without any prior learning history, inherently strengthening behavior; a conditioned reinforcer is a previously neutral stimulus that acquires its reinforcing properties through association with other reinforcers.'],
    misconceptions: ["An SD is a type of MO", "MOs and SDs both signal the availability of reinforcement", "MOs only affect behavior in the presence of the relevant SD", "Deprivation is an SD because it increases behavior"],
    taskItem: "B.01",
    category: "Core Concepts"
  },
  {
    id: "rr-rate",
    term: "Rate",
    domain: "C",
    correctDefinition: "A measure of behavior expressed as the number of responses per unit of time (e.g., responses per minute); the most common way to express the frequency of behavior relative to observation time.",
    distractors: ['A measure of behavior expressed as the total number of responses emitted during an observation period, without regard to the time spent observing the behavior directly.', 'A measure of behavior expressed as the proportion of intervals in which a behavior occurred, indicating its presence within specific, predefined temporal blocks.', 'A measure of behavior expressed as the elapsed time from the onset of an opportunity to the occurrence of a response, reflecting the latency of the behavior.'],
    misconceptions: ["Rate and frequency are the same measurement dimension", "Rate can only be calculated for behaviors with discrete beginnings and ends", "Rate is only appropriate for behaviors that occur at high frequencies", "Rate does not require a consistent observation period to be meaningful"],
    taskItem: "C.01",
    category: "Measurement"
  },
  {
    id: "rr-treatment-integrity",
    term: "Treatment Integrity (Procedural Fidelity)",
    domain: "C",
    correctDefinition: "The degree to which an independent variable is implemented as planned and described; a measure of how accurately and consistently the intervention procedures are carried out.",
    distractors: ['A dimensional quantity of behavior referring to the total number of times a behavior occurs divided by the total time of the observation period to yield a standardized measure.', 'A dimensional quantity of behavior referring to the total count of responses occurring within a defined and consistent observation period in the natural environment.', 'A dimensional quantity of behavior referring to the proportion of time during an observation period in which the behavior is occurring at any given moment in time.'],
    misconceptions: ["Treatment integrity is the same as interobserver agreement", "High treatment integrity guarantees behavior change", "Treatment integrity only applies to punishment procedures", "Treatment integrity is only relevant in research settings"],
    taskItem: "C.01",
    category: "Measurement"
  },
  {
    id: "rr-celeration-chart",
    term: "Celeration Chart (Standard Celeration Chart)",
    domain: "C",
    correctDefinition: "A semi-logarithmic chart used to display behavior frequency over time; the y-axis is a logarithmic scale of frequency and the x-axis represents successive calendar days, allowing celeration (rate of change in rate) to be displayed as a straight line.",
    distractors: ['A graphic display that uses bars of varying heights or lengths to represent discrete data points, allowing for clear visual comparison of different conditions or categories of behavior across specific time periods or groups, often used for summarizing non-continuous data.', 'A cumulative record, typically generated by a mechanical device, showing the total number of responses emitted over time; the slope of the line at any given point directly indicates the immediate rate of response occurring at that specific moment during the observation session.', 'A line graph with equal-interval axes, where both the y-axis and x-axis use a linear scale, used to display behavior frequency or other quantitative measures over time, showing changes in rate but not providing a direct representation of the rate of change in rate itself.'],
    misconceptions: ["The Standard Celeration Chart uses an equal-interval y-axis", "Celeration charts can only display acceleration in behavior", "Celeration charts are only used in Precision Teaching", "The x-axis of a celeration chart represents sessions, not calendar days"],
    taskItem: "C.01",
    category: "Measurement"
  },
  {
    id: "rr-placheck",
    term: "Planned Activity Check (PLACHECK)",
    domain: "C",
    correctDefinition: "A momentary time sampling procedure in which the observer records the number or percentage of individuals in a group who are engaged in a target behavior at the moment of each observation; used to measure group behavior.",
    distractors: ['A procedure in which the observer records each occurrence of a discrete behavior during a specified observation period, providing a precise frequency count for individual behavior, often used for behaviors with clear beginnings and endings.', 'A procedure in which the observer records whether a behavior occurred at any point during a specific interval, indicating its presence or absence for individual behavior, and sometimes overestimating continuous behavior.', 'A procedure in which the observer precisely records the total length of time from the onset to the offset of each behavioral episode, providing a measure of the duration of an individual\'s behavior.'],
    misconceptions: ["PLACHECK is used to measure individual behavior, not group behavior", "PLACHECK is a form of whole-interval recording", "PLACHECK overestimates behavior frequency for high-rate behaviors", "PLACHECK requires a separate observer for each individual in the group"],
    taskItem: "C.01",
    category: "Measurement"
  },
  {
    id: "rr-artifact",
    term: "Artifact",
    domain: "C",
    correctDefinition: "A data value or pattern that results from the measurement process itself rather than from the actual behavior being measured; a source of measurement error that does not reflect true behavior.",
    distractors: ['A data point that falls outside the expected range of behavior, often indicating an outlier or anomaly that may require further investigation, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'A permanent product of behavior that can be measured after the behavior occurs, providing an indirect measure of the actual behavioral event, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'A visual pattern in data that indicates a functional relationship between an independent variable and a dependent variable over time, which provides objective information about the current level and trend of the target behavior.'],
    misconceptions: ["Artifacts are always the result of observer error", "Artifacts only occur in interval recording procedures", "Artifacts can be eliminated by increasing the number of observers", "Artifacts are the same as outliers in a data set"],
    taskItem: "C.01",
    category: "Measurement"
  },
  {
    id: "rr-accuracy",
    term: "Accuracy",
    domain: "C",
    correctDefinition: "The degree to which observed values correspond to the true value of the behavior being measured; a measure of how close a measurement is to the actual occurrence of the behavior.",
    distractors: ['The degree to which two independent observers record the same values for the same instances of behavior; a measure of how consistently data are collected across multiple data collectors.', 'The degree to which a measurement procedure yields the same results under consistent conditions over repeated measurements; a measure of the stability and dependability of data.', 'The degree to which a measurement system detects all occurrences of the target behavior without recording non-occurrences; a measure of the sensitivity and precision of the observation.'],
    misconceptions: ["Accuracy and reliability are the same concept", "High interobserver agreement guarantees accuracy", "Accuracy is only relevant for permanent product recording", "Accuracy can be assessed without a true value to compare against"],
    taskItem: "C.01",
    category: "Measurement"
  },
  {
    id: "rr-validity",
    term: "Validity",
    domain: "C",
    correctDefinition: "The degree to which a measurement procedure measures what it is intended to measure; the extent to which the measurement reflects the true dimension of the behavior of interest.",
    distractors: ['The degree to which two or more independent observers report the same observed values after simultaneously observing the same occurrences of a behavior; a measure of interobserver agreement.', 'The degree to which a measurement procedure yields consistent results over repeated measurements of the same phenomenon; the extent to which data collection is reliable and stable.', 'The degree to which a measurement procedure detects all occurrences of the target behavior and only occurrences of the target behavior; the extent to which observations are complete and precise.'],
    misconceptions: ["Validity and reliability are the same concept", "A reliable measure is always valid", "Validity can be established by calculating interobserver agreement", "Validity is only relevant for standardized assessment tools"],
    taskItem: "C.01",
    category: "Measurement"
  },
  {
    id: "rr-observer-reactivity",
    term: "Observer Reactivity",
    domain: "C",
    correctDefinition: "A change in the behavior of the person being observed that results from awareness of being observed; a threat to the external validity of behavioral measurement.",
    distractors: ['A change in the behavior of the data collector that results from their awareness of being evaluated; a threat to the internal consistency and fidelity of data recording.', 'A change in the target behavior that occurs when a novel stimulus or event is introduced into the environment; a phenomenon often observed during initial intervention phases.', 'A change in the behavior of the data collector due to their preconceived expectations about the intervention\'s effectiveness; a potential source of bias in data collection.'],
    misconceptions: ["Observer reactivity is the same as observer drift", "Observer reactivity always inflates behavior rates", "Observer reactivity can be eliminated by using permanent product recording", "Observer reactivity only affects the behavior of individuals with developmental disabilities"],
    taskItem: "C.01",
    category: "Measurement"
  },
  {
    id: "rr-ratio-scale",
    term: "Ratio Scale",
    domain: "C",
    correctDefinition: "A measurement scale that has equal intervals between values and an absolute zero point, allowing meaningful ratio comparisons (e.g., 10 responses is twice as many as 5 responses); frequency and duration are ratio-scale measures.",
    distractors: ['A measurement scale that has equal intervals between values but lacks an absolute zero point, precluding meaningful ratio comparisons; temperature in Celsius is an example, which provides objective information about the current level and trend of the target behavior.', 'A measurement scale that classifies data into categories with an inherent order but unequal intervals between them, such as a ranking of preferences; pain scales are often of this type.', 'A measurement scale that categorizes data without any order or numerical value, where numbers are merely labels; gender or diagnostic labels are examples of this type of data, which provides objective information about the current level and trend of the target behavior.'],
    misconceptions: ["Ratio and interval scales are the same type of measurement", "Ratio scales cannot have a value of zero", "Behavior frequency is measured on an interval scale, not a ratio scale", "Ratio scales are only used in basic research settings"],
    taskItem: "C.01",
    category: "Measurement"
  },
  {
    id: "rr-atd",
    term: "Alternating Treatments Design (ATD)",
    domain: "D",
    correctDefinition: "A single-case experimental design in which two or more conditions are rapidly alternated within or across sessions to compare their effects on a dependent variable; also called a multielement design.",
    distractors: ['An experimental design in which the independent variable is introduced and withdrawn across multiple phases to demonstrate experimental control over the dependent variable.', 'An experimental design in which the effects of an independent variable are evaluated by comparing performance across two or more concurrent experimental conditions.', 'An experimental design in which the independent variable is introduced sequentially across multiple tiers to demonstrate experimental control without withdrawal.'],
    misconceptions: ["ATD requires a baseline phase before alternating conditions", "ATD can only compare two conditions", "ATD is the same as a reversal design", "ATD is not appropriate for comparing interventions"],
    taskItem: "D.01",
    category: "Experimental Design"
  },
  {
    id: "rr-observer-bias",
    term: "Observer Bias",
    domain: "D",
    correctDefinition: "A systematic error in observation that results from the observer's expectations, knowledge of the experimental hypothesis, or prior experience with the participant, causing the observer to record data in a way that confirms expectations.",
    distractors: ['A random error in observation caused by inattention or fatigue', 'A change in observer accuracy that occurs over repeated observation sessions', 'A change in the behavior of the person being observed due to awareness'],
    misconceptions: ["Observer bias is the same as observer drift", "Observer bias can be eliminated by training observers to criterion", "Observer bias only affects interval recording procedures", "Observer bias always inflates behavior rates"],
    taskItem: "D.01",
    category: "Experimental Design"
  },
  {
    id: "rr-direct-replication",
    term: "Direct Replication",
    domain: "D",
    correctDefinition: "The repetition of an experiment under the same conditions with the same or similar subjects to verify the reliability of a finding; conducted within a study (intrasubject) or across studies (intersubject).",
    distractors: ['The repetition of an experiment with intentional variations to the experimental conditions or subjects to determine the generality of the findings; conducted to extend the applicability of established relationships.', 'The repetition of an experiment to evaluate whether the same independent variable produces similar effects across different behaviors or settings; conducted to assess the external validity of an intervention.', 'The repetition of an experiment by different researchers in a different location or with different measurement procedures to confirm original findings; conducted to enhance the scientific credibility of a study.'],
    misconceptions: ["Direct replication is the same as systematic replication", "Direct replication is only conducted across different laboratories", "Direct replication requires identical subjects and settings", "Direct replication is not necessary once a functional relationship is demonstrated"],
    taskItem: "D.01",
    category: "Experimental Design"
  },
  {
    id: "rr-steady-state-strategy",
    term: "Steady State Strategy",
    domain: "D",
    correctDefinition: "An experimental tactic in which the researcher exposes the subject to a condition until behavior reaches a stable, consistent pattern before introducing the next condition; ensures that observed changes reflect the experimental variable rather than transient effects.",
    distractors: ['An experimental tactic in which the researcher introduces the next experimental condition before the behavior stabilizes in the previous condition; used to quickly compare effects without full stability, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'An experimental tactic in which the researcher systematically varies the experimental conditions on a predetermined schedule without regard to behavioral stability; used in some alternating treatments designs.', 'An experimental tactic in which the researcher compares the initial level of behavior in each condition to assess the immediate impact of the intervention; focuses on rapid changes rather than stability, defined as anything an organism does that can be measured in terms of its physical dimensions.'],
    misconceptions: ["Steady state means behavior must be completely flat before changing conditions", "Steady state strategy is only used in reversal designs", "Steady state is achieved after a fixed number of sessions", "Steady state strategy is not appropriate for behaviors that are expected to change over time"],
    taskItem: "D.01",
    category: "Experimental Design"
  },
  {
    id: "rr-intersubject-replication",
    term: "Intersubject Replication",
    domain: "D",
    correctDefinition: "Replication of an experiment across different subjects to demonstrate that a functional relationship is not idiosyncratic to a single individual; increases the external validity of findings.",
    distractors: ['Replication of an experiment within the same individual across different instances of the target behavior or within different environmental contexts; increases the internal validity of findings.', 'Replication of an experiment using different measurement tools or data collection methods to ensure that the findings are not an artifact of the specific instrumentation; enhances measurement reliability.', 'Replication of an experiment by the same researcher in the same setting to confirm initial findings and reduce the likelihood of Type I errors; increases the internal consistency of results.'],
    misconceptions: ["Intersubject replication is the same as systematic replication", "Intersubject replication requires identical conditions across subjects", "Intersubject replication is not necessary in single-case research", "Intersubject replication is the same as a multiple baseline across subjects design"],
    taskItem: "D.01",
    category: "Experimental Design"
  },
  {
    id: "rr-confounding-variable",
    term: "Confounding Variable",
    domain: "D",
    correctDefinition: "An uncontrolled variable that co-varies with the independent variable and may account for changes in the dependent variable, threatening the internal validity of an experiment.",
    distractors: ['An independent variable that is systematically varied by the researcher to determine its effect on the dependent variable, threatening the external validity of an experiment.', 'A dependent variable that is observed and measured to assess the effects of the independent variable, threatening the internal validity of an experiment.', 'A mediating variable that explains the relationship between the independent and dependent variables, threatening the ecological validity of an experiment.'],
    misconceptions: ["Confounding variables can be eliminated by using a control group", "Confounding variables only occur in between-group designs", "A confounding variable is the same as an extraneous variable", "Confounding variables always inflate the apparent effect of the independent variable"],
    taskItem: "D.01",
    category: "Experimental Design"
  },
  {
    id: "rr-baseline",
    term: "Baseline",
    domain: "D",
    correctDefinition: "A condition in a single-case experiment in which the independent variable is absent; provides a description of the natural level of the dependent variable against which the effects of the independent variable are compared.",
    distractors: ['A condition in a single-case experiment where the initial application of an intervention is performed, establishing the initial level of behavior under treatment and informing subsequent adjustments.', 'A condition in a single-case experiment where the average level of the dependent variable is observed across all experimental phases, providing an overall summary of performance.', 'A condition in a single-case experiment where a less-preferred intervention is implemented to determine its relative effectiveness compared to other, more preferred procedures.'],
    misconceptions: ["Baseline must always be the first condition in an experiment", "Baseline data must be stable before an intervention can begin", "Baseline is the same as a control condition in a group design", "Baseline data cannot be collected while an intervention is in effect"],
    taskItem: "D.01",
    category: "Experimental Design"
  },
  {
    id: "rr-stable-baseline",
    term: "Stable Baseline",
    domain: "D",
    correctDefinition: "A baseline in which data show minimal variability and no trend in the direction of expected treatment effects; provides the clearest basis for predicting future behavior and detecting the effects of the independent variable.",
    distractors: ['A baseline in which data show minimal variability and are consistently at zero or near-zero levels, indicating a complete absence of the targeted behavior before intervention is applied.', 'A baseline in which behavior shows a clear and consistent upward or downward trend across observation sessions, making it difficult to isolate the effects of the independent variable.', 'A baseline in which data are collected for a minimum of five consecutive sessions to establish a consistent pattern, regardless of the variability or trend observed in the measurements.'],
    misconceptions: ["A stable baseline requires at least five data points", "A stable baseline means behavior is at zero", "A baseline with a trend is never acceptable for beginning intervention", "Stability is defined solely by the absence of variability"],
    taskItem: "D.01",
    category: "Experimental Design"
  },
  {
    id: "rr-variable-baseline",
    term: "Variable Baseline",
    domain: "D",
    correctDefinition: "A baseline in which data show high variability, making it difficult to predict future performance and detect the effects of the independent variable; may require extended observation or identification of sources of variability before intervention.",
    distractors: ['A baseline in which behavior shows a clear and consistent upward or downward trend across observation sessions, making it difficult to isolate the effects of the independent variable, which provides a measure of the behavior before the independent variable is introduced.', 'A baseline in which behavior is consistently at zero or near-zero levels, indicating the complete absence of the target response and requiring a different approach for intervention, which provides a measure of the behavior before the independent variable is introduced.', 'A baseline in which data are collected across multiple settings simultaneously to assess the generality of the behavior before any intervention is introduced in a specific context, which provides a measure of the behavior before the independent variable is introduced.'],
    misconceptions: ["A variable baseline always means the measurement procedure is flawed", "A variable baseline cannot be used to make predictions about future behavior", "A variable baseline is the same as a baseline with a trend", "A variable baseline always requires extended observation before intervention"],
    taskItem: "D.01",
    category: "Experimental Design"
  },
  {
    id: "rr-extraneous-variable",
    term: "Extraneous Variable",
    domain: "D",
    correctDefinition: "Any variable other than the independent variable that could potentially affect the dependent variable; must be controlled or accounted for to maintain the internal validity of an experiment.",
    distractors: ['Any variable that is systematically manipulated by the researcher to observe its direct effects on the dependent variable; it is the focus of the experimental investigation.', 'Any variable that co-varies with the planned independent variable and cannot be controlled by the researcher, thus confounding the interpretation of experimental results.', 'Any variable that enhances the external validity of an experiment by making the experimental conditions more representative of naturalistic environments or settings.'],
    misconceptions: ["Extraneous variables are the same as confounding variables", "Extraneous variables always reduce the effect of the independent variable", "Extraneous variables can only be controlled in laboratory settings", "Extraneous variables are not a concern in single-case research"],
    taskItem: "D.01",
    category: "Experimental Design"
  },
  {
    id: "rr-single-case-designs",
    term: "Single-Case Designs",
    domain: "D",
    correctDefinition: "Experimental designs in which each subject serves as their own control; experimental control is demonstrated through repeated measurement, prediction, verification, and replication within and across subjects.",
    distractors: ['Experimental designs in which a control group is explicitly used to demonstrate treatment effects by comparing their outcomes against an experimental group that receives the intervention.', 'Experimental designs in which behavior is measured at only one point in time before an intervention and then again at a single point after the intervention, without repeated measures.', 'Experimental designs in which only a single participant can be included to study a specific phenomenon, due to the rarity of the behavior or the intensity of the intervention required.'],
    misconceptions: ["Single-case designs can only be used with one participant", "Single-case designs do not provide experimental control", "Single-case designs are less rigorous than group designs", "Single-case designs cannot be used to study group interventions"],
    taskItem: "D.01",
    category: "Experimental Design"
  },
  {
    id: "rr-withdrawal-design",
    term: "Withdrawal Design",
    domain: "D",
    correctDefinition: "A single-case experimental design in which the independent variable is introduced and then withdrawn to demonstrate that behavior changes are a function of the intervention; also called a reversal design.",
    distractors: ['A dimensional quantity of behavior referring to the total number of times a behavior occurs divided by the total time of the observation period to yield a standardized measure.', 'A dimensional quantity of behavior referring to the total count of responses occurring within a defined and consistent observation period in the natural environment.', 'A dimensional quantity of behavior referring to the proportion of time during an observation period in which the behavior is occurring at any given moment in time.'],
    misconceptions: ["Withdrawal designs are only appropriate for behaviors that are reversible", "Withdrawal designs require behavior to return to baseline levels to demonstrate control", "Withdrawal designs are the same as multiple baseline designs", "Withdrawal designs are not ethical because they involve removing effective treatment"],
    taskItem: "D.01",
    category: "Experimental Design"
  },
  {
    id: "rr-sequence-effects",
    term: "Sequence Effects",
    domain: "D",
    correctDefinition: "A threat to the internal validity of an alternating treatments design in which the effects of one condition carry over and influence behavior during the subsequent condition; minimized by counterbalancing the order of conditions.",
    distractors: ['A threat to internal validity in which the order of phases is presented in a withdrawal design, influencing the observed behavior in subsequent conditions through uncontrolled variables.', 'A threat to internal validity in which the cumulative effect of the independent variable on behavior across successive sessions leads to an overall improvement regardless of the specific condition.', 'A threat to internal validity in which the natural tendency for behavior to improve over time, regardless of any specific intervention, accounts for observed changes in the dependent variable.'],
    misconceptions: ["Sequence effects are the same as multiple treatment interference", "Sequence effects can be eliminated by using a multiple baseline design", "Sequence effects only occur in reversal designs", "Sequence effects always inflate the apparent effectiveness of the first condition presented"],
    taskItem: "D.01",
    category: "Experimental Design"
  },
  {
    id: "rr-multiple-treatment-interference",
    term: "Multiple Treatment Interference",
    domain: "D",
    correctDefinition: "A threat to the external validity of a study in which the effects of one treatment are influenced by exposure to other treatments; limits the generalizability of findings to situations where only a single treatment is in effect.",
    distractors: ['A threat to internal validity caused by the specific order of conditions in an alternating treatments design, where the prior condition systematically affects the subsequent one.', 'A threat to internal validity caused by uncontrolled extraneous variables influencing the dependent variable, making it difficult to attribute changes solely to the independent variable.', 'A threat to external validity caused by the use of a non-representative sample limiting the ability to generalize findings to a broader population, impacting the study\'s applicability.'],
    misconceptions: ["Multiple treatment interference is the same as sequence effects", "Multiple treatment interference is a threat to internal validity, not external validity", "Multiple treatment interference only occurs in reversal designs", "Multiple treatment interference can be eliminated by counterbalancing conditions"],
    taskItem: "D.01",
    category: "Experimental Design"
  },
  {
    id: "rr-procedural-fidelity-d",
    term: "Procedural Fidelity",
    domain: "D",
    correctDefinition: "The degree to which the independent variable is implemented as described in the experimental protocol; a measure of internal validity that ensures observed behavior changes can be attributed to the intended intervention.",
    distractors: ['The degree to which the dependent variable is measured accurately and consistently across observers; a measure of interobserver agreement that ensures the data collection process is reliable.', 'The degree to which the independent variable produces a desired and clinically significant change in the client\'s behavior; a measure of social validity that ensures the intervention\'s importance.', 'The degree to which the experimental design effectively controls for extraneous variables; a measure of experimental rigor that ensures the study\'s scientific soundness and generalizability.'],
    misconceptions: ["Procedural fidelity is the same as interobserver agreement", "High procedural fidelity guarantees behavior change", "Procedural fidelity is only relevant in applied settings", "Procedural fidelity is the same as social validity"],
    taskItem: "D.01",
    category: "Experimental Design"
  },
  {
    id: "rr-treatment-package",
    term: "Treatment Package",
    domain: "D",
    correctDefinition: "An intervention that consists of multiple components applied together; used when the combined effect of components is needed to produce behavior change, even if the contribution of individual components is unknown.",
    distractors: ['The personal application of behavior change tactics that involves relying on external monitoring and reinforcement from a caregiver or therapist rather than developing independent self-management skills over time.', 'A formal document that specifies the training objectives, assessment methods, and performance criteria that the supervisee must meet to demonstrate competency and qualify for independent practice as a behavior analyst.', 'A dimensional quantity of behavior referring to the average time between the offset of one response and the onset of the next response in a series, providing a measure of the temporal spacing between responses.'],
    misconceptions: ["Treatment packages cannot be evaluated using single-case designs", "Treatment packages are less effective than single-component interventions", "Treatment packages do not require procedural fidelity measurement", "Treatment packages are only used when single-component interventions have failed"],
    taskItem: "D.01",
    category: "Experimental Design"
  },
  {
    id: "rr-beneficence",
    term: "Beneficence",
    domain: "E",
    correctDefinition: "The ethical obligation to act in ways that benefit clients and promote their well-being; one of the core principles of biomedical ethics requiring practitioners to take positive steps to help clients.",
    distractors: ['The ethical obligation to maintain honesty and transparency in all professional interactions, communications, and representations of one\'s credentials and qualifications.', 'The ethical obligation to treat all clients and supervisees with equal respect and fairness, regardless of personal characteristics or individual circumstances.', 'The ethical obligation to protect the privacy of client information and to disclose it only with appropriate authorization or as required by applicable law.'],
    misconceptions: ["Beneficence is the same as non-maleficence", "Beneficence only applies to medical practitioners, not BCBAs", "Beneficence means doing whatever the client requests", "Beneficence and non-maleficence always point in the same direction"],
    taskItem: "E.01",
    category: "Ethics"
  },
  {
    id: "rr-justice",
    term: "Justice",
    domain: "E",
    correctDefinition: "The ethical principle requiring fair, equitable, and appropriate treatment of all individuals; in behavior analysis, this includes ensuring that services are accessible to those who need them and that the benefits and burdens of research are distributed fairly.",
    distractors: ['The ethical principle requiring professionals to uphold their commitments and be truthful in all interactions; in behavior analysis, this includes following through on promises made to clients and providing accurate information about services.', 'The ethical principle requiring professionals to act in the best interest of their clients and society, promoting welfare above all else; in behavior analysis, this includes prioritizing client well-being and contributing positively to the community.', 'The ethical principle requiring professionals to respect the autonomy and choices of individuals; in behavior analysis, this includes obtaining informed consent, honoring client preferences, and protecting their privacy and confidentiality.'],
    misconceptions: ["Justice only applies to research settings, not clinical practice", "Justice means treating all clients identically regardless of their needs", "Justice is less important than beneficence in behavior analysis", "Justice only applies to the distribution of resources, not service delivery"],
    taskItem: "E.01",
    category: "Ethics"
  },
  {
    id: "rr-disciplinary-standards",
    term: "Disciplinary Standards",
    domain: "E",
    correctDefinition: "The standards established by the BACB that define the professional conduct required of certificants; violations may result in disciplinary action including suspension or revocation of certification.",
    distractors: ['The standards established by the BACB that define the minimum requirements for obtaining and maintaining certification; violations may result in loss of eligibility for certification.', 'The standards established by the BACB that define the appropriate scope of practice for behavior analysts; violations may result in practicing outside one\'s area of competence.', 'The standards established by the BACB that define the recommended best practices for service delivery; violations may result in sub-optimal client outcomes.'],
    misconceptions: ["Disciplinary standards are the same as the Ethics Code", "Disciplinary standards only apply to BCBAs, not BCaBAs or RBTs", "Disciplinary standards are enforced by state licensing boards, not the BACB", "Disciplinary standards only apply to conduct that occurs during service delivery"],
    taskItem: "E.01",
    category: "Ethics"
  },
  {
    id: "rr-mswo",
    term: "Multiple Stimulus Without Replacement (MSWO)",
    domain: "F",
    correctDefinition: "A preference assessment procedure in which an array of stimuli is presented and the individual selects one; the selected item is removed and the remaining items are rearranged before the next selection; repeated until all items are selected or the individual stops responding.",
    distractors: ['A preference assessment procedure in which pairs of stimuli are presented simultaneously and the individual selects one from each pair; this is repeated across all possible pairs of stimuli to create a hierarchy of preferences for intervention planning.', 'A preference assessment procedure in which a single stimulus is presented at a time and the individual\'s approach or avoidance of the item is recorded; this is repeated for all items in the array to determine relative preference levels.', 'A preference assessment procedure in which all stimuli are presented simultaneously and remain available throughout the assessment; the observer records the amount of time the individual engages with each item to identify preferred activities.'],
    misconceptions: ["MSWO is the same as multiple stimulus with replacement (MSW)", "MSWO requires the individual to select all items before the assessment ends", "MSWO always produces the same preference hierarchy as paired-stimulus assessments", "MSWO cannot be used with individuals who have limited motor skills"],
    taskItem: "F.01",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-free-operant-observation",
    term: "Free Operant Observation",
    domain: "F",
    correctDefinition: "A preference assessment procedure in which the individual is given free access to an array of stimuli and the observer records the amount of time spent with each item; items approached and engaged with for longer durations are identified as preferred.",
    distractors: ['A preference assessment procedure in which pairs of stimuli are presented and the individual selects one from each pair; this is repeated for all possible pairs to determine a clear preference hierarchy for intervention components.', 'A preference assessment procedure in which an array of stimuli is presented, and once an item is selected, it is removed from the array before the next selection is made to identify highly preferred items.', 'A preference assessment procedure in which a single stimulus is presented at a time and the individual\'s approach or avoidance of the item is recorded for each item in the array to gauge individual preferences.'],
    misconceptions: ["Free operant observation is the same as a structured preference assessment", "Free operant observation requires the observer to present stimuli in a specific order", "Free operant observation cannot identify high-preference items", "Free operant observation is only appropriate for individuals with limited verbal behavior"],
    taskItem: "F.01",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-modeling",
    term: "Modeling",
    domain: "F",
    correctDefinition: "A prompting procedure in which the instructor demonstrates the target behavior for the learner to imitate; the model serves as an antecedent stimulus that increases the likelihood of the learner emitting the target response.",
    distractors: ['A prompting procedure in which the instructor physically guides the learner through the movements of the target behavior to ensure correct responding; this provides full physical assistance.', 'A prompting procedure in which the instructor provides a verbal description or instruction of how to perform the target behavior; this serves as a vocal antecedent for the learner.', 'A prompting procedure in which the instructor provides a gestural cue, such as pointing, to indicate the correct response or relevant stimulus; this offers a non-vocal hint.'],
    misconceptions: ["Modeling is the same as video modeling", "Modeling requires the learner to have a generalized imitation repertoire", "Modeling is only effective for motor behaviors", "Modeling is a form of physical prompting"],
    taskItem: "F.01",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-imitation-training",
    term: "Imitation Training",
    domain: "F",
    correctDefinition: "A procedure used to establish or expand a generalized imitation repertoire by reinforcing the learner for matching the behavior of a model across a variety of topographies; the goal is for the learner to imitate novel behaviors without specific training.",
    distractors: ['A procedure used to teach a specific motor behavior by physically guiding the learner through the movements until they can perform it independently; the goal is to fade physical prompts, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'A procedure used to teach verbal behavior by reinforcing successive approximations to a target vocal response, gradually shaping the desired sound; the goal is to produce specific speech sounds, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'A procedure used to establish stimulus control by pairing a neutral stimulus with an unconditioned stimulus to elicit a conditioned response; the goal is to transfer stimulus functions, such that the behavior occurs reliably in the presence of the antecedent stimulus and not in its absence.'],
    misconceptions: ["Imitation training is the same as modeling", "Imitation training only teaches specific behaviors that are directly trained", "Imitation training is only appropriate for learners with autism", "Imitation training requires the learner to have verbal behavior before it can be used"],
    taskItem: "F.01",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-differential-reinforcement-shaping",
    term: "Differential Reinforcement (Shaping)",
    domain: "F",
    correctDefinition: "The procedure underlying shaping in which reinforcement is delivered for responses that more closely approximate the terminal behavior while reinforcement is withheld for responses that do not meet the current criterion.",
    distractors: ['The delivery of reinforcement for every instance of a target behavior, regardless of its topography or quality, to increase its overall frequency; this procedure ensures consistent strengthening of a response.', 'The delivery of reinforcement on a fixed schedule regardless of the response topography, leading to a consistent pattern of behavior over time; this procedure maintains a steady rate of responding.', 'The delivery of reinforcement for behaviors that are incompatible with the target behavior, thereby reducing the occurrence of the undesirable response; this procedure decreases problem behavior.'],
    misconceptions: ["Differential reinforcement in shaping is the same as DRI or DRA", "Differential reinforcement in shaping requires extinction of all previous responses", "Differential reinforcement in shaping can only be used to increase behavior", "Differential reinforcement in shaping is only appropriate for motor behaviors"],
    taskItem: "F.01",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-behavior-chain",
    term: "Behavior Chain",
    domain: "F",
    correctDefinition: "A sequence of individual behaviors in which each response produces a stimulus that serves as both a conditioned reinforcer for the preceding response and a discriminative stimulus for the next response; the final response produces terminal reinforcement.",
    distractors: ['A sequence of individual behaviors in which each response is reinforced independently, without dependence on the preceding or subsequent steps in the sequence; this ensures each step is strengthened in isolation.', 'A sequence of individual behaviors in which only the first response in the entire sequence is reinforced, without any reinforcement for subsequent steps; this procedure focuses on initiating the chain.', 'A sequence of individual behaviors in which only the last response in the entire sequence produces reinforcement, with no reinforcement for intermediate steps; this procedure relies on the terminal reinforcer.'],
    misconceptions: ["A behavior chain is the same as a task analysis", "Each response in a behavior chain is maintained by terminal reinforcement alone", "Behavior chains can only be taught using backward chaining", "Behavior chains are only appropriate for daily living skills"],
    taskItem: "F.01",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-behavior-chain-limited-hold",
    term: "Behavior Chain with a Limited Hold",
    domain: "F",
    correctDefinition: "A behavior chain in which terminal reinforcement is available only if the entire chain is completed within a specified time limit; used to increase the speed of chain completion.",
    distractors: ['A behavior chain in which reinforcement is delivered after each step is completed, providing continuous reinforcement throughout the entire sequence.', 'A behavior chain in which the learner is allowed an unlimited amount of time to complete each step, and there is no consequence for slow performance.', 'A behavior chain in which the instructor provides a prompt if the learner does not respond within a set time, but there is no penalty for exceeding the time limit.'],
    misconceptions: ["A behavior chain with a limited hold is the same as a time delay procedure", "A limited hold decreases the reinforcing value of the terminal reinforcer", "A limited hold is only appropriate for behaviors that must be completed quickly for safety reasons", "A limited hold is the same as a response cost procedure"],
    taskItem: "F.01",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-resistance-to-extinction",
    term: "Resistance to Extinction",
    domain: "F",
    correctDefinition: "The degree to which behavior persists after reinforcement is discontinued; behavior maintained by intermittent schedules of reinforcement typically shows greater resistance to extinction than behavior maintained by continuous reinforcement.",
    distractors: ['The tendency for the rate of behavior to significantly increase immediately after the discontinuation of reinforcement, which is commonly referred to as an extinction burst phenomenon, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'The tendency for a behavior to return to its pre-extinction level after a period of time during which the behavior was not emitted, which is a common occurrence known as spontaneous recovery.', 'The degree to which a behavior\'s rate decreases rapidly when reinforcement is withheld; behavior maintained by continuous reinforcement shows less resistance to extinction than intermittent schedules.'],
    misconceptions: ["Resistance to extinction is the same as an extinction burst", "Behavior maintained by continuous reinforcement shows greater resistance to extinction", "Resistance to extinction is always undesirable in clinical practice", "Resistance to extinction is the same as spontaneous recovery"],
    taskItem: "F.01",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-planned-ignoring",
    term: "Planned Ignoring",
    domain: "G",
    correctDefinition: "A procedure in which all social attention is withheld following the occurrence of a target behavior; appropriate only when the behavior is maintained by social positive reinforcement (attention) and the behavior is not dangerous.",
    distractors: ['A procedure in which all forms of reinforcement are withheld following the occurrence of any behavior; this involves placing all responses on extinction, including those not maintained by social attention.', 'A procedure in which the individual is removed from the reinforcing environment following the occurrence of problem behavior; this involves contingent removal from preferred activities to decrease future occurrences.', 'A procedure in which the individual is required to engage in effortful behavior following the occurrence of problem behavior; this involves engaging in a corrective action that is directly related to the misbehavior.'],
    misconceptions: ["Planned ignoring is effective for all problem behaviors regardless of function", "Planned ignoring is the same as extinction", "Planned ignoring is appropriate for behaviors maintained by automatic reinforcement", "Planned ignoring is always safe to use without a functional assessment"],
    taskItem: "G.01",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-consequence-intervention",
    term: "Consequence Intervention",
    domain: "G",
    correctDefinition: "A behavior-change procedure that modifies the consequences that follow a behavior to change its future frequency; includes reinforcement-based procedures (DRA, DRI, DRO, DRL) and punishment-based procedures.",
    distractors: ['A behavior-change procedure that modifies the stimuli that precede a behavior to prevent its occurrence; this includes strategies like antecedent manipulation and environmental rearrangement.', 'A behavior-change procedure that modifies the broader environmental conditions influencing behavior; this focuses on altering setting events and motivating operations.', 'A behavior-change procedure that directly teaches new, appropriate behaviors to replace existing problem behaviors; this involves skill acquisition through direct instruction.'],
    misconceptions: ["Consequence interventions are always more effective than antecedent interventions", "Consequence interventions are only appropriate for behaviors maintained by social reinforcement", "Consequence interventions do not require a functional assessment", "Consequence interventions are the same as punishment procedures"],
    taskItem: "G.01",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-physical-prompt",
    term: "Physical Prompt",
    domain: "G",
    correctDefinition: "A prompting procedure in which the instructor makes physical contact with the learner to guide them through the target behavior; ranges from full physical guidance (hand-over-hand) to partial physical guidance (light touch).",
    distractors: ['A prompting procedure in which the instructor demonstrates the target behavior for the learner to imitate; the learner observes the action and then attempts to replicate it with minimal verbal instruction.', 'A prompting procedure in which the instructor provides a verbal description or instruction about the target behavior; the learner follows spoken cues to perform the action independently after understanding the directions.', 'A prompting procedure in which the instructor points to or touches the relevant stimulus that should evoke the target behavior; the learner attends to the highlighted cue to select the correct item or action.'],
    misconceptions: ["Physical prompts are always the most intrusive type of prompt", "Physical prompts should never be faded once established", "Physical prompts are the same as modeling", "Physical prompts are only appropriate for motor behaviors"],
    taskItem: "G.01",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-stimulus-shaping",
    term: "Stimulus Shaping",
    domain: "G",
    correctDefinition: "A stimulus fading procedure in which the physical form of the stimulus is gradually changed across trials to transfer stimulus control from a prompt to the target stimulus; the topography of the stimulus changes while the relevant dimension remains constant.",
    distractors: ['A stimulus fading procedure in which the intensity or salience of a prompt is gradually reduced across trials; the prompt becomes less noticeable over time to transfer control to the natural discriminative stimulus.', 'A stimulus fading procedure in which the physical location of a prompt is gradually changed across trials; the prompt moves closer to the natural stimulus to facilitate the transfer of stimulus control.', 'A stimulus fading procedure in which the delay between the discriminative stimulus and the prompt is gradually increased; the prompt is introduced later and later, allowing the learner more time to respond independently.'],
    misconceptions: ["Stimulus shaping is the same as stimulus fading", "Stimulus shaping changes the relevant dimension of the stimulus", "Stimulus shaping is only appropriate for visual discrimination training", "Stimulus shaping is the same as response shaping"],
    taskItem: "G.01",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-video-self-modeling",
    term: "Video Self-Modeling",
    domain: "G",
    correctDefinition: "A procedure in which the learner watches videos of themselves performing the target behavior correctly; the edited video shows only successful performance and is used as an antecedent to prompt the target behavior.",
    distractors: ['A procedure in which the learner watches videos of a peer performing the target behavior correctly; the peer serves as an exemplar for observational learning, demonstrating the desired actions in various contexts.', 'A procedure in which the learner watches videos of an adult performing the target behavior correctly; the adult serves as a model for skill acquisition, providing a clear demonstration of the expected performance.', 'A procedure in which the learner records their own behavior for self-monitoring purposes; the learner tracks their performance to identify patterns and progress, which can promote self-management strategies.'],
    misconceptions: ["Video self-modeling is the same as video modeling", "Video self-modeling requires the learner to already perform the target behavior independently", "Video self-modeling is only appropriate for learners with autism", "Video self-modeling is a consequence-based procedure"],
    taskItem: "G.01",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-extinction-induced-variability",
    term: "Extinction-Induced Variability",
    domain: "G",
    correctDefinition: "An increase in the variability of response topographies that occurs when a previously reinforced behavior is placed on extinction; the organism emits novel variations of the behavior, some of which may be reinforced and shaped into new behaviors.",
    distractors: ['An increase in the rate of behavior that occurs immediately after reinforcement is discontinued; this is a temporary increase in frequency known as an extinction burst, which is often followed by a decrease in behavior.', 'A return to a previously reinforced behavior after a period of rest or removal from the setting; this is a spontaneous recovery of the extinguished response, which indicates that learning was not completely undone.', 'A decrease in the variety of response topographies that occurs when a previously reinforced behavior is placed on extinction; responses become more rigid and less diverse, indicating a lack of exploratory behavior.'],
    misconceptions: ["Extinction-induced variability is the same as an extinction burst", "Extinction-induced variability always produces problem behavior", "Extinction-induced variability is always undesirable in clinical practice", "Extinction-induced variability is the same as spontaneous recovery"],
    taskItem: "G.01",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-token",
    term: "Token",
    domain: "G",
    correctDefinition: "A conditioned generalized reinforcer that can be exchanged for a variety of backup reinforcers; used in token economy systems to bridge the delay between behavior and backup reinforcement.",
    distractors: ['A primary reinforcer that is inherently effective without any prior learning history, directly satisfying a biological need or homeostatic imbalance.', 'A tangible item delivered immediately after a response, serving as a direct, unconditioned consequence that automatically strengthens the preceding behavior.', 'A discriminative stimulus that reliably signals the availability of reinforcement for emitting a particular behavior, thus setting the occasion for that response.'],
    misconceptions: ["Tokens are effective reinforcers without being paired with backup reinforcers", "Tokens are the same as backup reinforcers", "Tokens are only effective for individuals with verbal behavior", "Tokens must always be physical objects such as stickers or chips"],
    taskItem: "G.01",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-dependent-group-contingency",
    term: "Dependent Group Contingency",
    domain: "G",
    correctDefinition: "A group contingency in which the reinforcement for the entire group depends on the behavior of one individual or a select subset of the group; the group's reinforcement is contingent on the target individual meeting the criterion.",
    distractors: ['A group contingency in which each individual in the group receives reinforcement based solely on their own performance, regardless of others\' behavior.', 'A group contingency in which all members of the group must collectively meet a specified criterion for the entire group to receive reinforcement.', 'A group contingency in which reinforcement is earned by the group when one or more designated members achieve a specific behavioral criterion.'],
    misconceptions: ["Dependent group contingencies are the same as interdependent group contingencies", "Dependent group contingencies always increase peer pressure in negative ways", "Dependent group contingencies require all group members to meet the criterion", "Dependent group contingencies are the same as independent group contingencies"],
    taskItem: "G.01",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-self-contract",
    term: "Self-Contract",
    domain: "G",
    correctDefinition: "A written document in which an individual specifies a target behavior, the criterion for reinforcement, and the reinforcer to be delivered; a self-management tool that makes the contingency explicit and increases commitment to behavior change.",
    distractors: ['A verbal agreement established between an individual and a behavior analyst, outlining the specific therapeutic goals and the methods that will be employed to achieve behavioral change, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'A formal document in which a supervising behavior analyst outlines the expected performance standards for a supervisee and specifies the criteria for evaluating their professional conduct.', 'A written plan developed by a behavior analyst that specifies the procedures for implementing a behavioral intervention and the objective criteria for determining its overall effectiveness.'],
    misconceptions: ["A self-contract is the same as a behavioral contract between two parties", "Self-contracts are only effective for adults with strong verbal behavior", "Self-contracts do not require a specific criterion for reinforcement", "Self-contracts are only appropriate for behaviors that occur at high frequencies"],
    taskItem: "G.01",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-self-evaluation",
    term: "Self-Evaluation",
    domain: "G",
    correctDefinition: "A self-management procedure in which an individual compares their own behavior or performance to a predetermined criterion or standard; used to develop accurate self-assessment skills and support behavior change.",
    distractors: ['A self-management procedure where an individual systematically records the frequency or duration of their own behavior, often using a data collection system like a tally or log.', 'A self-management procedure where an individual delivers contingent reinforcement to themselves following the successful completion of a target behavior, based on predetermined criteria.', 'A self-management procedure where an individual establishes specific behavioral objectives and sets timelines for achieving those goals, thereby providing direction for their own behavior.'],
    misconceptions: ["Self-evaluation is the same as self-monitoring", "Self-evaluation always produces accurate self-assessment without training", "Self-evaluation is only appropriate for academic behaviors", "Self-evaluation requires external verification to be effective"],
    taskItem: "G.01",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-self-instruction",
    term: "Self-Instruction",
    domain: "G",
    correctDefinition: "A self-management procedure in which an individual uses verbal statements (overt or covert) to guide their own behavior through a task or situation; the verbal statements function as antecedent stimuli that prompt appropriate responding.",
    distractors: ['A self-management procedure in which an individual systematically records the occurrence of their own target behavior, often using a tally count or a specific data sheet, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'A self-management procedure in which an individual delivers positive reinforcement to themselves following the successful completion of a predetermined behavioral goal or task, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'A self-management procedure in which an individual objectively compares their observed performance against a pre-established set of criteria or an external standard, which provides objective information about the current level and trend of the target behavior.'],
    misconceptions: ["Self-instruction is the same as self-monitoring", "Self-instruction requires the individual to speak aloud to be effective", "Self-instruction is only appropriate for individuals with verbal behavior", "Self-instruction is a consequence-based procedure"],
    taskItem: "G.01",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-generalization-setting",
    term: "Generalization Setting",
    domain: "G",
    correctDefinition: "A setting in which the target behavior is expected to occur but in which training has not been conducted; used to assess whether behavior change has generalized beyond the training context.",
    distractors: ['A setting in which the initial behavioral intervention is implemented to teach a new skill or modify an existing behavior, serving as the primary training environment.', 'A setting in which a comprehensive functional assessment was conducted to identify the specific environmental variables maintaining the occurrence of a target behavior.', 'A setting where the target behavior is observed to occur at its highest baseline frequency before any intervention is introduced, indicating its natural prevalence.'],
    misconceptions: ["Generalization settings are the same as training settings", "Behavior always generalizes to new settings without specific programming", "Generalization settings must be similar to training settings to assess generalization", "Generalization settings are only used in research, not clinical practice"],
    taskItem: "G.01",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-teach-enough-examples",
    term: "Teach Enough Examples",
    domain: "G",
    correctDefinition: "A generalization programming strategy in which a sufficient number and variety of training exemplars are used to ensure that the learner responds correctly to untrained stimuli; the number of examples needed depends on the complexity of the stimulus class.",
    distractors: ['A generalization programming strategy in which the instructional environment is systematically designed to closely resemble the natural environment where the behavior is ultimately desired, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'A generalization programming strategy in which the learner is explicitly reinforced for exhibiting variations in their responses, leading to greater behavioral flexibility and creativity, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'A generalization programming strategy in which multiple instructors deliver training across various settings, thus increasing the probability of stimulus control by relevant features, calculated by dividing the number of responses by the observation time to yield responses per unit time.'],
    misconceptions: ["Teaching more examples always produces better generalization", "Teach enough examples is the same as general case analysis", "Teaching enough examples guarantees generalization to all untrained stimuli", "Teach enough examples is only appropriate for discrimination training"],
    taskItem: "G.01",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-contrived-contingency",
    term: "Contrived Contingency",
    domain: "G",
    correctDefinition: "A reinforcement contingency that is deliberately arranged by a behavior analyst and does not naturally occur in the environment; used to establish or strengthen behavior that is not currently maintained by natural contingencies.",
    distractors: ['A reinforcement contingency that arises spontaneously from the natural interaction between an individual\'s behavior and the environment, without deliberate planning, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'A reinforcement contingency that is inherently maintained by the automatic consequences of a behavior, such as sensory feedback or physical sensations, without external mediation.', 'A reinforcement contingency that is developed and implemented by the individual themselves as part of a self-management program, rather than by an external agent, which specifies the if-then relationship between a behavior and its antecedent or consequent conditions.'],
    misconceptions: ["Contrived contingencies are always less effective than natural contingencies", "Contrived contingencies should be maintained indefinitely once established", "Contrived contingencies are the same as artificial reinforcers", "Contrived contingencies are only appropriate for behaviors that cannot be reinforced naturally"],
    taskItem: "G.01",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-naturally-existing-contingency",
    term: "Naturally Existing Contingency",
    domain: "G",
    correctDefinition: "A reinforcement contingency that occurs in the natural environment without deliberate arrangement; behavior maintained by natural contingencies is more likely to persist after the behavior analyst withdraws from the case.",
    distractors: ['A reinforcement contingency that is intentionally designed and implemented by a behavior analyst to establish or strengthen a specific target behavior in an individual, often involving artificial reinforcers to facilitate initial learning before transitioning to more naturalistic ones.', 'A reinforcement contingency that is explicitly arranged by the individual themselves as part of a self-management strategy to promote desired behavioral changes, where they set up antecedent and consequent events to influence their own future actions.', 'A reinforcement contingency that is applied only during the initial phases of skill acquisition to ensure rapid learning and mastery, then systematically faded out as the learner demonstrates proficiency and the behavior comes under the control of other maintaining variables.'],
    misconceptions: ["Naturally existing contingencies are always more effective than contrived contingencies", "Naturally existing contingencies do not need to be identified during assessment", "Naturally existing contingencies are the same as natural reinforcers", "Naturally existing contingencies always maintain behavior without additional programming"],
    taskItem: "G.01",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-natural-maintaining-contingency",
    term: "Natural Maintaining Contingency",
    domain: "G",
    correctDefinition: "A naturally occurring reinforcement contingency in the environment that will maintain a target behavior after the behavior analyst withdraws; identifying and connecting behavior to natural maintaining contingencies is a key goal of generalization programming.",
    distractors: ['A contrived reinforcement contingency that is specifically designed by a behavior analyst to support the acquisition of a new skill; it is often faded as the learner demonstrates increasing independence with the target behavior.', 'A reinforcement contingency that is specifically arranged by a behavior analyst to temporarily strengthen an emerging behavior; it will be systematically withdrawn once the behavior reaches a predetermined level of proficiency.', 'A reinforcement contingency that is deliberately established within a controlled training environment to promote initial skill acquisition; it may not inherently exist in the learner\'s everyday environment.'],
    misconceptions: ["Natural maintaining contingencies are the same as contrived contingencies", "Natural maintaining contingencies do not need to be identified before treatment ends", "Natural maintaining contingencies always exist for every target behavior", "Natural maintaining contingencies are the same as naturally existing contingencies"],
    taskItem: "G.01",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-generalization-across-stimuli",
    term: "Generalization Across Stimuli",
    domain: "G",
    correctDefinition: "The occurrence of a target behavior in the presence of stimuli that were not present during training; also called stimulus generalization; indicates that the behavior is under the control of a stimulus class rather than a single specific stimulus.",
    distractors: ['The occurrence of a target behavior when performed by different individuals who were not involved in the original training; it indicates that the skill is not dependent on a specific instructor or interventionist.', 'The occurrence of a target behavior in various settings or environments that were not explicitly included during the instructional phase; this demonstrates the robust transfer of a learned skill.', 'The occurrence of a target behavior across different response topographies, where multiple forms of the behavior produce the same outcome; this shows flexibility in the expression of the learned skill.'],
    misconceptions: ["Generalization across stimuli is the same as response generalization", "Generalization across stimuli always occurs without specific programming", "Generalization across stimuli is the same as setting generalization", "Generalization across stimuli is only relevant for discrimination training"],
    taskItem: "G.01",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-socially-significant-behavior",
    term: "Socially Significant Behavior",
    domain: "H",
    correctDefinition: "Behavior that is important to the individual and their community; the applied dimension of ABA requires that target behaviors be selected because they matter to the individual's quality of life, not merely because they are convenient to measure.",
    distractors: ['Behavior that can be reliably observed and accurately measured by multiple independent observers, ensuring objective data collection and analysis for effective intervention planning.', 'Behavior that is selected based on the ease of data collection and the straightforwardness of intervention implementation, which facilitates efficient progress monitoring by the behavior analyst.', 'Behavior that is frequently emitted within a given environment, indicating a high baseline rate of occurrence before any intervention has been introduced to modify its expression.'],
    misconceptions: ["Socially significant behavior is determined solely by the behavior analyst", "Any behavior that is observable and measurable is socially significant", "Socially significant behavior is the same as behavior that is easy to reinforce", "Socially significant behavior must be approved by a funding source to be targeted"],
    taskItem: "H.01",
    category: "Selecting Interventions"
  },
  {
    id: "rr-maintenance",
    term: "Maintenance",
    domain: "H",
    correctDefinition: "The extent to which a learner continues to perform a target behavior after the intervention has been discontinued; one of the primary goals of behavior-change programming.",
    distractors: ['The occurrence of untrained behaviors after a related behavior is trained, as measured by direct observation using operationally defined response definitions across consistent observation periods', 'The continuation of a behavior only when the training contingency is in effect, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'The occurrence of a behavior in untrained settings, as measured by direct observation using operationally defined response definitions across consistent observation periods'],
    misconceptions: ["Maintenance is the same as generalization", "Maintenance always occurs automatically after mastery criterion is met", "Maintenance only needs to be assessed in research settings", "Maintenance is the same as fluency"],
    taskItem: "H.01",
    category: "Selecting Interventions"
  },
  {
    id: "rr-crisis-plan",
    term: "Crisis Plan",
    domain: "H",
    correctDefinition: "A written protocol that specifies the procedures to be followed when a client engages in behavior that poses an immediate risk of harm to themselves or others; must be developed proactively and include specific decision points and escalation procedures.",
    distractors: ['A written protocol that outlines the specific steps for implementing a behavior intervention plan, including roles, responsibilities, and data collection procedures for staff members, which specifies antecedent modifications, replacement behaviors, and consequence strategies.', 'A written protocol that details the systematic procedures for conducting a comprehensive functional behavior assessment, encompassing indirect, descriptive, and experimental analyses, which identifies the antecedents and consequences that maintain the problem behavior.', 'A written protocol that specifies the procedures for transitioning a client between different service providers or environments, ensuring continuity of care and appropriate support, which is evaluated through systematic data collection and analysis to determine its effectiveness.'],
    misconceptions: ["A crisis plan is only needed for clients who have a history of severe problem behavior", "A crisis plan is the same as a behavior intervention plan", "A crisis plan does not need to be reviewed or updated regularly", "A crisis plan is only required in residential settings"],
    taskItem: "H.01",
    category: "Selecting Interventions"
  },
  {
    id: "rr-response-maintenance-programming",
    term: "Response Maintenance Programming",
    domain: "H",
    correctDefinition: "Deliberate programming strategies used to ensure that behavior changes persist after the intervention is withdrawn; includes thinning reinforcement schedules, using intermittent reinforcement, and connecting behavior to natural maintaining contingencies.",
    distractors: ['Deliberate programming strategies used to ensure that behavior changes occur across different individuals or instructors who were not present during the initial training phase, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'Deliberate programming strategies used to ensure that behavior changes occur in various settings or environments that were not explicitly included in the initial training context, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'Deliberate programming strategies used to ensure that behavior changes occur with different materials or forms of stimuli not directly used during the acquisition of the skill, defined as anything an organism does that can be measured in terms of its physical dimensions.'],
    misconceptions: ["Response maintenance programming is the same as generalization programming", "Response maintenance always occurs without specific programming", "Response maintenance programming is only necessary for behaviors that are difficult to acquire", "Response maintenance programming is only used in research settings"],
    taskItem: "H.01",
    category: "Selecting Interventions"
  },
  {
    id: "rr-brief-fa",
    term: "Brief Functional Analysis",
    domain: "H",
    correctDefinition: "A condensed version of a functional analysis in which fewer sessions are conducted per condition; used when time or resources are limited; provides less definitive results than a full functional analysis but more than descriptive assessment alone.",
    distractors: ['A condensed version of a functional assessment that primarily relies on indirect assessment methods, such as interviews and questionnaires, to gather information about potential behavioral functions. This approach is often the initial step in a comprehensive assessment process, providing hypotheses for further investigation.', 'A functional assessment that involves direct observation of behavior in the natural environment without any experimental manipulation of antecedents or consequences to identify patterns. This method, while not demonstrating functional relations, can provide valuable context and correlational data for assessment planning.', 'A functional assessment in which only specific antecedent conditions are systematically manipulated to determine their influence on the occurrence of the target behavior. This approach may be utilized when the hypothesized function is clearly antecedent-driven, allowing for targeted intervention development.'],
    misconceptions: ["A brief functional analysis is the same as a descriptive functional assessment", "A brief functional analysis provides the same level of certainty as a full functional analysis", "A brief functional analysis does not require manipulation of antecedents and consequences", "A brief functional analysis is only appropriate for low-intensity problem behaviors"],
    taskItem: "H.01",
    category: "Selecting Interventions"
  },
  {
    id: "rr-conditional-probability",
    term: "Conditional Probability",
    domain: "H",
    correctDefinition: "In descriptive functional assessment, the probability that a specific antecedent or consequence event occurred given that the target behavior occurred; used to identify potential behavioral functions from naturalistic observation data.",
    distractors: ['In descriptive functional assessment, the likelihood that a specific target behavior will occur within a given time period, independent of any preceding or following events, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'In descriptive functional assessment, the probability that a specific consequence will occur following any behavior, indicating the overall richness of the reinforcement environment.', 'In descriptive functional assessment, the probability that a target behavior will generalize to novel settings or different stimulus conditions not present during initial observation.'],
    misconceptions: ["Conditional probability alone is sufficient to identify the function of behavior", "Conditional probability is the same as correlation", "Conditional probability can demonstrate a functional relationship between behavior and consequences", "Conditional probability is only calculated for antecedent events, not consequences"],
    taskItem: "H.01",
    category: "Selecting Interventions"
  },
  {
    id: "rr-trial-based-fa",
    term: "Trial-Based Functional Analysis",
    domain: "H",
    correctDefinition: "A functional analysis format in which brief test and control trials are embedded within ongoing activities in the natural environment; each trial consists of a short test condition followed by a control condition, allowing FA to be conducted without removing the individual from their natural routine.",
    distractors: ['A functional analysis format in which multiple distinct conditions, typically including attention, escape, alone, and play, are conducted sequentially within a controlled clinical setting, allowing for systematic manipulation of specific environmental variables to determine the maintaining function of problem behavior through direct observation and measurement.', 'A functional analysis format in which only specific antecedent conditions or consequence manipulations are systematically varied across experimental sessions to identify their influence on the target behavior, often used when specific hypotheses about maintaining variables are already established, rather than conducting a full range of test conditions.', 'A functional analysis format in which behavior is observed in its natural context without any direct or systematic manipulation of environmental variables, relying solely on descriptive or correlational data collected through direct observation, scatterplots, or ABC recording to formulate hypotheses about the function of the target behavior.'],
    misconceptions: ["Trial-based FA is the same as a brief functional analysis", "Trial-based FA cannot identify the function of behavior as reliably as a standard FA", "Trial-based FA requires removal from the natural environment", "Trial-based FA is only appropriate for behaviors that occur at high rates"],
    taskItem: "H.01",
    category: "Selecting Interventions"
  },
  {
    id: "rr-descriptive-fba",
    term: "Descriptive Functional Behavior Assessment",
    domain: "H",
    correctDefinition: "A functional assessment method in which behavior is observed directly in the natural environment without manipulation of antecedents or consequences; data are collected on antecedents, behaviors, and consequences (ABC recording) to identify potential behavioral functions.",
    distractors: ['A functional assessment method that systematically manipulates environmental variables in a controlled setting to experimentally determine the function of a target behavior, often involving specific test conditions.', 'A functional assessment method that relies solely on indirect information gathered from interviews, questionnaires, and rating scales, without direct observation or experimental manipulation of the environment.', 'A functional assessment method that embeds brief test and control conditions within an individual\'s ongoing daily activities to identify the function of a target behavior in a naturalistic manner, defined as anything an organism does that can be measured in terms of its physical dimensions.'],
    misconceptions: ["Descriptive FBA can demonstrate a functional relationship between behavior and consequences", "Descriptive FBA is the same as a functional analysis", "Descriptive FBA is sufficient to identify the function of behavior without further assessment", "Descriptive FBA requires manipulation of environmental variables"],
    taskItem: "H.01",
    category: "Selecting Interventions"
  },
  {
    id: "rr-backup-reinforcer",
    term: "Backup Reinforcer",
    domain: "H",
    correctDefinition: "A stimulus for which tokens or points can be exchanged in a token economy; the backup reinforcer is what gives the token its conditioned reinforcing value.",
    distractors: ['A stimulus delivered when a primary reinforcer is temporarily unavailable, serving as a substitute to maintain motivation for appropriate behaviors.', 'A stimulus used when an individual does not respond to a previously identified reinforcer, requiring an alternative to promote behavior change.', 'A stimulus delivered on a predetermined schedule regardless of the individual\'s behavior, ensuring consistent access to preferred items or activities.'],
    misconceptions: ["Backup reinforcers are the same as tokens", "Backup reinforcers must be tangible items such as food or toys", "Backup reinforcers are only effective if they are primary reinforcers", "Backup reinforcers do not need to be identified before implementing a token economy"],
    taskItem: "H.01",
    category: "Selecting Interventions"
  },
  {
    id: "rr-level-system",
    term: "Level System",
    domain: "H",
    correctDefinition: "A behavior management system in which individuals advance through progressively higher levels by meeting behavioral criteria; higher levels provide access to more privileges and greater independence.",
    distractors: ['A behavior management system in which individuals earn discrete tokens for appropriate behaviors, which can then be exchanged for a variety of desired items or activities.', 'A behavior management system in which individuals lose access to preferred items or activities as a consequence for engaging in specific problem behaviors.', 'A behavior management system in which individuals are grouped according to their current skill proficiency, facilitating differentiated instruction and progress monitoring.'],
    misconceptions: ["Level systems are the same as token economies", "Level systems are only appropriate for residential settings", "Level systems do not require behavioral criteria for advancement", "Level systems are always punitive in nature"],
    taskItem: "H.01",
    category: "Selecting Interventions"
  },
  {
    id: "rr-hero-procedure",
    term: "Hero Procedure",
    domain: "H",
    correctDefinition: "A dependent group contingency in which one student is randomly selected at the end of a session and the entire class earns reinforcement if that student met the behavioral criterion; the identity of the target student is not revealed until the end of the session.",
    distractors: ['A dependent group contingency in which each individual student must independently meet their own predetermined behavioral criterion to earn reinforcement for only their own performance, without impacting the reinforcement opportunities of other group members or the group as a whole.', 'A dependent group contingency in which the entire group earns reinforcement if the collective average performance of all members meets a specific criterion established beforehand, thereby encouraging mutual support and cooperative effort among all participants to achieve the shared behavioral goal.', 'A dependent group contingency in which a specific student is publicly identified at the beginning of the session as the target for the group to support and assist in meeting a predetermined behavioral criterion, with the group\'s reinforcement contingent upon that individual\'s success.'],
    misconceptions: ["The Hero Procedure is the same as the Good Behavior Game", "The Hero Procedure identifies the target student at the start of the session", "The Hero Procedure is an interdependent group contingency", "The Hero Procedure is only appropriate for academic behaviors"],
    taskItem: "H.01",
    category: "Selecting Interventions"
  },
  {
    id: "rr-systematic-desensitization",
    term: "Systematic Desensitization",
    domain: "H",
    correctDefinition: "A procedure used to reduce fear or anxiety by pairing relaxation with a hierarchy of increasingly anxiety-provoking stimuli; the individual is exposed to stimuli from least to most feared while maintaining a relaxed state.",
    distractors: ['A procedure used to reduce problem behavior by identifying and then removing the reinforcing consequences that maintain its occurrence, leading to a decrease in its frequency.', 'A procedure used to reduce avoidance behavior by requiring the individual to remain in the presence of the feared stimulus for an extended period, preventing escape responses.', 'A procedure used to reduce anxiety by immediately exposing the individual to the most intense form of a feared stimulus for a prolonged duration, inducing habituation, measured from the onset of the response to its offset, yielding a total time measure.'],
    misconceptions: ["Systematic desensitization is the same as flooding", "Systematic desensitization does not require a relaxation component", "Systematic desensitization is only effective for phobias, not other anxiety disorders", "Systematic desensitization is a consequence-based procedure"],
    taskItem: "H.01",
    category: "Selecting Interventions"
  },
  {
    id: "rr-indiscriminable-contingency",
    term: "Indiscriminable Contingency",
    domain: "H",
    correctDefinition: "A reinforcement contingency in which the individual cannot reliably predict when reinforcement will be delivered; intermittent schedules of reinforcement create indiscriminable contingencies that support maintenance and resistance to extinction.",
    distractors: ['A reinforcement contingency in which reinforcement is delivered after every instance of the target response, leading to very rapid acquisition of a new skill but often resulting in low resistance to extinction when the schedule changes.', 'A reinforcement contingency in which reinforcement is delivered on a predictable schedule, allowing the individual to accurately anticipate when reinforcement will occur following a specified number of responses or time interval.', 'A reinforcement contingency where the individual can precisely forecast when reinforcement will be provided, leading to highly consistent and predictable patterns of responding across different environmental contexts.'],
    misconceptions: ["Indiscriminable contingencies are always undesirable in clinical practice", "Indiscriminable contingencies are the same as variable schedules of reinforcement", "Indiscriminable contingencies reduce resistance to extinction", "Indiscriminable contingencies are only used in research settings"],
    taskItem: "H.01",
    category: "Selecting Interventions"
  },
  {
    id: "rr-setting-generalization",
    term: "Setting/Situation Generalization",
    domain: "H",
    correctDefinition: "The occurrence of a target behavior in settings or situations that were not used during training; one of the primary dimensions of generalization that behavior analysts must program for explicitly.",
    distractors: ['The occurrence of a target behavior with individuals who were not present during the original training, such as family members or peers in the natural environment, without explicit instruction.', 'The occurrence of a target behavior in the presence of stimuli that were not used during training, requiring the learner to respond appropriately to novel cues and variations in their environment.', 'The continued performance of a target behavior after the formal intervention is completely withdrawn, indicating that the behavior has come under the control of naturally occurring contingencies.'],
    misconceptions: ["Setting generalization is the same as stimulus generalization", "Setting generalization always occurs without specific programming", "Setting generalization is the same as response generalization", "Setting generalization is only relevant for behaviors taught in clinic settings"],
    taskItem: "H.01",
    category: "Selecting Interventions"
  },
  {
    id: "rr-generalization-across-subjects",
    term: "Generalization Across Subjects",
    domain: "H",
    correctDefinition: "The occurrence of behavior change in individuals who were not directly trained; also called person generalization; relevant when an intervention is implemented with one member of a group and behavior change is observed in other group members.",
    distractors: ['The occurrence of a target behavior in various settings that were not part of the training environment, demonstrating the transfer of learned skills to novel and diverse contexts, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'The occurrence of a target behavior in the presence of stimuli that were not explicitly used during training, requiring the learner to respond to novel cues and stimulus variations, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'The maintenance of a target behavior over extended periods after the intervention has been completely withdrawn, indicating that the behavior is under the control of natural environmental contingencies.'],
    misconceptions: ["Generalization across subjects is the same as stimulus generalization", "Generalization across subjects always occurs without specific programming", "Generalization across subjects is the same as response generalization", "Generalization across subjects is only relevant in group intervention settings"],
    taskItem: "H.01",
    category: "Selecting Interventions"
  },
  {
    id: "rr-ethical-obligation-supervisee-safety",
    term: "Ethical Obligation to Supervisee Safety",
    domain: "I",
    correctDefinition: "The BACB ethical requirement that supervisors take reasonable steps to ensure the safety and well-being of supervisees; includes providing adequate training, monitoring performance, and addressing unsafe practices promptly.",
    distractors: ['The ethical requirement that supervisees promptly report any unsafe practices or ethical violations observed to the BACB or other relevant authorities to protect clients and the integrity of the profession.', 'The ethical requirement that supervisors meticulously document all supervision activities, including dates, times, and content, for accountability, record-keeping, and compliance with professional standards.', 'The ethical requirement that supervisors provide timely, specific, and constructive feedback on supervisee performance, ensuring skill development and adherence to ethical guidelines in practice.'],
    misconceptions: ["Ethical obligations to supervisee safety only apply in crisis situations", "Supervisors are not responsible for the safety of supervisees who have completed their training", "Ethical obligations to supervisee safety are the same as liability protections for supervisors", "Ethical obligations to supervisee safety only apply in residential or school settings"]
  },
  {
    id: "rr-applied-behavior-analysis",
    term: "Applied Behavior Analysis (ABA)",
    domain: "A",
    correctDefinition: "The science in which tactics derived from the principles of behavior are applied systematically to improve socially significant behavior, and experimentation is used to identify the variables responsible for behavior change.",
    distractors: ['The philosophical position that all behavior is fundamentally determined by environmental contingencies and evolutionary history, emphasizing a natural science approach to understanding behavior.', 'The basic laboratory science that systematically studies behavior-environment relations under highly controlled conditions, often using non-human subjects for fundamental research into behavioral principles.', 'A therapeutic approach that primarily uses discrete trial training to teach specific skills to individuals with developmental disabilities, focusing on compliance and rote skill acquisition.'],
    misconceptions: [
      "ABA is only for individuals with autism spectrum disorder",
      "ABA is defined by its techniques (e.g., DTT) rather than its scientific approach",
      "ABA and behaviorism are the same discipline"
    ],
    taskItem: "A.01",
    category: "Philosophical Foundations"
  },
  {
    id: "rr-mentalism",
    term: "Mentalism",
    domain: "A",
    correctDefinition: "The practice of explaining behavior by reference to hypothetical internal states or constructs that are not directly observable or measurable, such as attributing aggression to anger or poor performance to low self-esteem.",
    distractors: ['The scientific practice of relying exclusively on direct observation and objective measurement of overt behavior to understand and explain its occurrences, avoiding unobservable constructs.', 'The philosophical position that private events are legitimate subjects of behavior analysis, provided they can be observed directly and reliably by the individual experiencing them.', 'The use of cognitive-behavioral techniques to address internal thought patterns and subjective feelings as a primary means to change overt behavior, focusing on mental processes.'],
    misconceptions: [
      "Radical behaviorism denies the existence of internal events entirely",
      "Mentalism and cognitive psychology are the same thing",
      "Referring to emotions is always mentalistic"
    ],
    taskItem: "A.01",
    category: "Philosophical Foundations"
  },
  {
    id: "rr-social-reinforcement",
    term: "Social Reinforcement",
    domain: "B",
    correctDefinition: "Reinforcement that is delivered by another person through social interaction, such as praise, attention, physical contact, or access to preferred activities provided by others; requires social mediation.",
    distractors: ['Reinforcement that occurs entirely independent of the social mediation of another person, such as the intrinsic feeling of accomplishment after completing a challenging task or activity.', 'Reinforcement delivered on a variable-ratio schedule to maintain high rates of behavior and strong resistance to extinction across various contexts, often used for skill fluency.', 'Reinforcement that is conditioned through repeated pairing with unconditioned reinforcers, acquiring its reinforcing properties through a learning history within the environment.'],
    misconceptions: [
      "Social reinforcement is always attention-based",
      "Social reinforcement is less powerful than tangible reinforcement",
      "Social reinforcement cannot function as an unconditioned reinforcer"
    ],
    taskItem: "B.01",
    category: "Reinforcement"
  },
  {
    id: "rr-magnitude-intensity",
    term: "Magnitude / Intensity",
    domain: "C",
    correctDefinition: "A dimensional quantity of behavior referring to the force or strength of a response, measured on some physical dimension such as decibels for vocal loudness or pounds of force for a hitting response.",
    distractors: ['A dimensional quantity of behavior referring to the total number of times a specific behavior occurs within a specified observation period or a defined unit of time, indicating frequency.', 'A dimensional quantity of behavior referring to the elapsed time from the onset of a specific stimulus to the initiation of a response, which is commonly referred to as latency.', 'A dimensional quantity of behavior referring to the proportion of time during an observation period in which a specific behavior is continuously occurring, which is also known as duration.'],
    misconceptions: [
      "Magnitude is the same as frequency or rate",
      "Magnitude can only be measured for vocal behaviors",
      "Intensity and duration measure the same dimension of behavior"
    ],
    taskItem: "C.01",
    category: "Measurement"
  },
  {
    id: "rr-discontinuous-measurement",
    term: "Discontinuous Measurement",
    domain: "C",
    correctDefinition: "A measurement approach in which only a sample of behavior is recorded during an observation period rather than every instance; includes interval recording and time sampling methods.",
    distractors: ['A measurement approach in which every instance of a behavior is recorded as it occurs, providing a complete and accurate count of the behavior and its precise occurrence.', 'A measurement approach that relies on permanent products rather than direct observation of ongoing behavior, examining the tangible outcomes of a behavioral process.', 'A measurement approach in which data are collected only during structured teaching sessions, potentially missing occurrences in natural settings or during free play.'],
    misconceptions: [
      "Discontinuous measurement is always less accurate than continuous measurement",
      "Interval recording measures the frequency of behavior directly",
      "Discontinuous measurement cannot be used for high-rate behaviors"
    ],
    taskItem: "C.02",
    category: "Measurement"
  },
  {
    id: "rr-functional-relationship",
    term: "Functional Relationship",
    domain: "D",
    correctDefinition: "A cause-and-effect relationship between an independent variable and a dependent variable, demonstrated when systematic manipulation of the independent variable produces reliable, replicable changes in the dependent variable.",
    distractors: ['A correlation between two variables that consistently co-vary in a predictable direction, suggesting a possible association but not necessarily demonstrating direct causation.', 'A relationship between a behavior and its immediate antecedents or consequences, identified through descriptive assessment methods, indicating potential triggers or maintaining variables.', 'A statistical association between a specific treatment and an observed outcome, established through group comparison in experimental designs, often used to evaluate intervention efficacy.'],
    misconceptions: [
      "Correlation is sufficient to establish a functional relationship",
      "A functional relationship can be demonstrated with a single data point",
      "Functional relationships can only be demonstrated in laboratory settings"
    ],
    taskItem: "D.01",
    category: "Experimental Design"
  },
  {
    id: "rr-multiple-baseline-design",
    term: "Multiple Baseline Design",
    domain: "D",
    correctDefinition: "A single-case experimental design in which the intervention is introduced sequentially across two or more tiers (behaviors, settings, or participants) while the remaining tiers continue in baseline; demonstrates experimental control without requiring reversal of behavior.",
    distractors: ['A single-case experimental design in which a single behavior is repeatedly measured across multiple conditions, typically involving an intervention phase followed by a return to baseline, to demonstrate functional relations between an independent variable and the target behavior, thereby establishing experimental control.', 'A single-case experimental design in which two or more distinct treatments are rapidly alternated, often on a session-by-session basis, within the same subject to compare their relative effects on a target behavior, allowing for efficient comparison without requiring extended baseline phases.', 'A single-case experimental design in which baseline data are collected intermittently rather than continuously across different tiers, or phases, to reduce measurement burden and increase efficiency, often used when continuous measurement is impractical but experimental control still needs to be demonstrated.'],
    misconceptions: [
      "The multiple baseline design requires a reversal to demonstrate experimental control",
      "The multiple baseline design can only be used across behaviors, not settings or participants",
      "Staggered introduction of treatment is optional in a multiple baseline design"
    ],
    taskItem: "D.04",
    category: "Experimental Design"
  },
  {
    id: "rr-multiple-probe-design",
    term: "Multiple Probe Design",
    domain: "D",
    correctDefinition: "A variation of the multiple baseline design in which baseline data are collected intermittently (probed) rather than continuously, reducing the burden of continuous measurement while still demonstrating experimental control.",
    distractors: ['A variation of the multiple baseline design in which multiple treatments are systematically probed in rapid alternation to compare their relative effectiveness on a single behavior.', 'A variation of the multiple baseline design in which baseline data are collected continuously across all tiers before any intervention is introduced to any of the tiers, which provides a measure of the behavior before the independent variable is introduced.', 'A variation of the multiple baseline design that uses brief test conditions embedded within natural routines to assess behavior under different contingencies and environmental contexts.'],
    misconceptions: [
      "The multiple probe design is a completely different design from the multiple baseline design",
      "Intermittent baseline probes provide the same level of experimental control as continuous baseline",
      "The multiple probe design is only appropriate for skill acquisition targets"
    ],
    taskItem: "D.04",
    category: "Experimental Design"
  },
  {
    id: "rr-confidentiality",
    term: "Confidentiality",
    domain: "E",
    correctDefinition: "The ethical and legal obligation to protect client information from unauthorized disclosure; governed by professional ethics codes, applicable laws (e.g., HIPAA), and organizational policies.",
    distractors: ['The ethical obligation to maintain honesty and transparency in all professional interactions, communications, and representations of one\'s credentials and qualifications.', 'The ethical obligation to treat all clients and supervisees with equal respect and fairness, regardless of personal characteristics or individual circumstances.', 'The ethical obligation to protect the privacy of client information and to disclose it only with appropriate authorization or as required by applicable law.'],
    misconceptions: [
      "Confidentiality means client information can never be shared under any circumstances",
      "Confidentiality obligations end when a client is discharged from services",
      "Sharing de-identified data always satisfies confidentiality requirements"
    ],
    taskItem: "E.01",
    category: "Ethics"
  },
  {
    id: "rr-least-restrictive-effective-treatment",
    term: "Least Restrictive Effective Treatment",
    domain: "E",
    correctDefinition: "The ethical principle requiring behavior analysts to select interventions that produce the desired behavior change with the minimum level of intrusiveness, risk, or restriction to the client's rights and freedoms.",
    distractors: ['The ethical principle requiring all interventions to be approved by a human rights committee or institutional review board before implementation, regardless of their intrusiveness.', 'The ethical principle requiring that punishment procedures should never be used, regardless of their potential effectiveness in producing rapid and meaningful behavior change.', 'The ethical principle requiring that the least expensive intervention should always be selected first, even if it is not the most effective or efficient option for the client.'],
    misconceptions: [
      "Least restrictive means the intervention with the fewest components",
      "Punishment procedures can never be the least restrictive effective treatment",
      "Least restrictive treatment always means reinforcement-only procedures"
    ],
    taskItem: "E.02",
    category: "Ethics"
  },
  {
    id: "rr-scope-of-practice",
    term: "Scope of Practice",
    domain: "E",
    correctDefinition: "The range of services, procedures, and professional responsibilities that a behavior analyst is qualified to provide based on their education, training, supervised experience, and credentials.",
    distractors: ['A formal process in which a more experienced practitioner provides guidance, feedback, and oversight to ensure that a supervisee develops independent clinical skills.', 'A professional relationship in which the supervisor takes responsibility for the supervisee\'s work and ensures that services are delivered ethically and effectively.', 'A structured process in which the supervisor evaluates the supervisee\'s performance against established competency criteria and provides corrective feedback.'],
    misconceptions: [
      "Scope of practice is defined solely by the BACB task list",
      "A BCBA can provide any service as long as they have a BCBA credential",
      "Scope of practice is the same as scope of competence"
    ],
    taskItem: "E.03",
    category: "Ethics"
  },
  {
    id: "rr-behavioral-goal-objective",
    term: "Behavioral Goal (Objective)",
    domain: "H",
    correctDefinition: "A written statement specifying the target behavior in observable and measurable terms, the conditions under which it will occur, and the criterion for mastery; guides intervention planning and progress monitoring.",
    distractors: ['A written statement of the desired long-term outcome for a client without specifying measurable criteria or the specific conditions for its successful achievement, which is evaluated through systematic data collection and analysis to determine its effectiveness.', 'A written statement describing the specific intervention procedures to be used to produce behavior change, rather than describing the behavior itself or its context.', 'A written statement summarizing the results of a functional behavior assessment, identifying the hypothesized function of problem behavior and its maintaining variables.'],
    misconceptions: [
      "A behavioral goal and a behavioral objective are always the same thing",
      "Behavioral goals do not need to specify measurement criteria",
      "A behavioral goal is the same as a treatment plan"
    ],
    taskItem: "H.01",
    category: "Selecting Interventions"
  },
  {
    id: "rr-generalization",
    term: "Generalization",
    domain: "H",
    correctDefinition: "The occurrence of a trained behavior change across settings, people, stimuli, or response forms beyond those directly trained; encompasses stimulus generalization (responding to untrained stimuli) and response generalization (performing untrained but related responses).",
    distractors: ['The sustained occurrence of a desired behavior change after the systematic removal of all programmed contingencies and intervention procedures, ensuring that the individual continues to perform the skill effectively across extended periods without ongoing support from the therapist or environment.', 'The process through which a specific behavior reliably occurs in the presence of a particular discriminative stimulus and not in the presence of other stimuli, indicating that the behavior has been brought under precise environmental control and will consistently be emitted under appropriate antecedent conditions.', 'The gradual and systematic removal of external prompts or cues, allowing an individual to transition from a prompted performance of a skill to an independent and unassisted execution, thereby demonstrating the successful acquisition of the behavior and its transfer to natural environmental contingencies.'],
    misconceptions: [
      "Generalization occurs automatically after a behavior is trained",
      "Stimulus generalization and response generalization are the same phenomenon",
      "Generalization is the same as maintenance"
    ],
    taskItem: "H.02",
    category: "Generalization"
  },
  {
    id: "rr-train-and-hope",
    term: "Train and Hope",
    domain: "H",
    correctDefinition: "A passive, inadequate approach to generalization programming in which the clinician implements the intervention in one setting and hopes the behavior will generalize without any systematic programming for generalization.",
    distractors: [' in which the same target behavior is trained across multiple, varied settings and with different materials simultaneously to promote immediate and widespread transfer of skills to novel situations.', ' in which training stimuli are carefully selected to represent the full range of relevant stimulus and response variations present in the generalization environment, ensuring robust skill transfer.', ' in which reinforcement is gradually thinned after mastery is achieved, moving from continuous to variable schedules to promote the durability and persistence of behavior change over time.'],
    misconceptions: [
      "Train and hope is an acceptable generalization strategy for some behaviors",
      "Train and hope is the same as sequential modification",
      "Train and hope is a legitimate strategy when natural contingencies are expected to maintain behavior"
    ],
    taskItem: "H.02",
    category: "Generalization"
  },
  {
    id: "rr-discharge-planning",
    term: "Discharge Planning",
    domain: "H",
    correctDefinition: "The systematic process of preparing a client and their support system for the reduction or termination of ABA services, including establishing transition goals, fading supports, and ensuring maintenance of gains.",
    distractors: ['The systematic process of systematically transitioning a client to a less intensive service setting or different provider, often due to changes in funding or the client\'s age, without emphasizing long-term skill maintenance.', 'The systematic process of documenting a client\'s progress and the services rendered throughout their treatment, primarily for billing purposes and compliance with regulatory agencies.', 'The systematic process of preparing a new behavior analyst to take over a client\'s case when the current analyst departs, focusing on continuity of care rather than client independence.'],
    misconceptions: [
      "Discharge planning only begins when a client has met all treatment goals",
      "Discharge planning is the responsibility of the funding agency, not the behavior analyst",
      "Discharge planning is only necessary for clients who are transitioning to a new program"
    ],
    taskItem: "H.03",
    category: "Selecting Interventions"
  },
  {
    id: "rr-competency-based-training",
    term: "Competency-Based Training",
    domain: "I",
    correctDefinition: "A training approach in which advancement is contingent on demonstrated mastery of skills to a specified performance criterion, rather than on time spent in training or completion of didactic instruction alone.",
    distractors: ['A training approach in which the number of training hours determines completion, which is grounded in the principles of applied behavior analysis and evaluated through empirical measurement methods', 'A training approach in which written tests are used to assess knowledge, which is grounded in the principles of applied behavior analysis and evaluated through empirical measurement methods', 'A training approach in which trainees observe experienced practitioners, conducted across multiple sessions to establish a stable and representative pattern of the target behavior over time'],
    misconceptions: [
      "Competency-based training is the same as performance-based training",
      "Completing required supervision hours is sufficient to demonstrate competency",
      "Competency-based training only applies to clinical skills, not professional conduct"
    ],
    taskItem: "I.01",
    category: "Supervision"
  },
  {
    id: "rr-supervision-contract",
    term: "Supervision Contract",
    domain: "I",
    correctDefinition: "A written agreement between a supervisor and supervisee that specifies the goals, responsibilities, methods, evaluation criteria, and logistics of the supervisory relationship; required by BACB supervision standards.",
    distractors: ['A formal document that specifies the training objectives, assessment methods, and performance criteria that the supervisee must meet to demonstrate competency and qualify for independent practice as a behavior analyst.', 'The personal application of behavior change tactics that involves relying on external monitoring and reinforcement from a caregiver or therapist rather than developing independent self-management skills over time.', 'A threat to internal validity in which changes in the dependent variable are attributable to uncontrolled events occurring outside the experimental setting that coincide with the introduction of the independent variable.'],
    misconceptions: [
      "A supervision contract is only required when the supervisee is accruing BACB experience hours",
      "The supervision contract is primarily a legal document rather than a professional development tool",
      "Once signed, a supervision contract cannot be modified"
    ],
    taskItem: "I.02",
    category: "Supervision"
  },
  {
    id: "rr-organizational-behavior-management",
    term: "Organizational Behavior Management (OBM)",
    domain: "I",
    correctDefinition: "The application of behavior-analytic principles and methods to improve the performance, safety, and effectiveness of individuals and systems within organizational settings; includes performance management, systems analysis, and behavior-based safety.",
    distractors: ['The application of behavior analysis to improve student performance in educational settings, which is conducted to identify the environmental variables that control the behavior and inform intervention design', 'The application of behavior analysis to improve athletic performance, which is conducted to identify the environmental variables that control the behavior and inform intervention design, which is identified through assessment and manipulated or controlled to produce the desired behavior change', 'The application of behavior analysis to improve community health outcomes, which is conducted to identify the environmental variables that control the behavior and inform intervention design, which is identified through assessment and manipulated or controlled to produce the desired behavior change'],
    misconceptions: [
      "OBM is only applicable to large corporations, not clinical or educational settings",
      "OBM is the same as human resources management",
      "OBM does not use the same principles as clinical ABA"
    ],
    taskItem: "I.03",
    category: "Supervision"
  },
  {
    id: "rr-ethical-supervision",
    term: "Ethical Supervision",
    domain: "I",
    correctDefinition: "Supervision that adheres to the BACB Ethics Code by maintaining appropriate professional boundaries, providing adequate and competent oversight, ensuring supervisee skill development, and prioritizing client welfare throughout the supervisory relationship.",
    distractors: ['Supervision that primarily emphasizes administrative duties, including scheduling and record-keeping, rather than actively fostering the supervisee\'s skill acquisition, professional growth, or ensuring their consistent adherence to established professional and ethical standards.', 'Supervision that exclusively delivers positive reinforcement by highlighting the supervisee\'s strengths, intentionally sidestepping any constructive criticism or areas for improvement, thereby aiming to preserve a consistently positive and comfortable working relationship.', 'Supervision that primarily focuses on advancing the financial objectives of the supervisory organization by maximizing the number of billable service hours, potentially at the detriment of providing comprehensive, high-quality training and adequate developmental support for the supervisee.'],
    misconceptions: [
      "Ethical supervision only requires following the BACB supervision standards",
      "A supervisor is not responsible for the ethical conduct of their supervisees",
      "Ethical supervision is only relevant during the supervisee's initial credentialing period"
    ],
    taskItem: "I.04",
    category: "Supervision"
  },
  {
    id: "rr-private-events",
    term: "Private Events",
    domain: "A",
    correctDefinition: "Behaviors — including thoughts, feelings, and physiological states — that occur within the skin of an organism and are accessible only to that individual; treated as behavior subject to the same principles as publicly observable behavior.",
    distractors: ['Hypothetical mental constructs that are presumed to cause observable behavior, but which cannot be directly measured or influenced by environmental manipulations; these are often invoked as explanations for behavior without identifying the true environmental contingencies at play, leading to circular reasoning in analysis.', 'Behaviors that are performed in isolation or when no other individuals are present, but which are still potentially observable by an external observer; these actions are not inherently internal but simply lack an immediate audience, distinguishing them from truly unobservable phenomena occurring within an individual.', 'Cognitive processes that are primarily studied through self-report measures and introspection, rather than through direct observation and functional analysis; these are often considered explanatory fictions if not tied to measurable environmental variables and their effects on overt behavior patterns.'],
    misconceptions: [
      "Radical behaviorism denies the existence of private events",
      "Private events cause public behavior in a way that is independent of environmental contingencies",
      "Private events cannot be studied scientifically"
    ],
    taskItem: "A.02",
    category: "Philosophical Foundations"
  },
  {
    id: "rr-behavior-analytic-interpretation",
    term: "Behavior-Analytic Interpretation",
    domain: "A",
    correctDefinition: "An explanation of complex human behavior using established principles of behavior analysis and learning history, without invoking mentalistic constructs; relies on environmental variables, contingencies, and verbal behavior principles.",
    distractors: ['An explanation of complex human behavior based on a formal functional assessment, which systematically identifies the immediate antecedent and consequent variables maintaining the behavior.', 'An explanation of complex human behavior based on a detailed assessment report, which synthesizes client history and environmental factors to predict future behavioral patterns, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'An explanation of complex human behavior based on a statistical analysis of group data, which identifies correlations between environmental conditions and behavioral outcomes, defined as anything an organism does that can be measured in terms of its physical dimensions.'],
    misconceptions: [
      "Behavior-analytic interpretation is the same as functional analysis",
      "Behavior-analytic interpretation cannot address complex human behavior like language or emotion",
      "Any explanation that avoids the word 'mind' qualifies as a behavior-analytic interpretation"
    ],
    taskItem: "A.03",
    category: "Philosophical Foundations"
  },
  {
    id: "rr-skepticism",
    term: "Skepticism",
    domain: "A",
    correctDefinition: "The scientific disposition to withhold judgment and require empirical evidence before accepting claims; in behavior analysis, practitioners require peer-reviewed research support before adopting new interventions or theoretical positions.",
    distractors: ['The scientific disposition to consistently interpret all observed behavioral phenomena as occurring purely by chance, rather than seeking out functional relationships or environmental variables that might systematically influence behavior; in behavior analysis, this perspective dismisses the possibility of behavioral laws.', 'The scientific disposition to invariably question the veracity of all data presented by colleagues, insisting on independent replication and verification of all reported behavioral measures and findings before considering them credible or reliable for clinical application.', 'The scientific disposition to promptly dismiss any novel theoretical construct or proposed intervention that does not perfectly conform to previously established behavioral principles, often without conducting empirical evaluations or considering potential refinements to existing frameworks.'],
    misconceptions: [
      "Skepticism means rejecting all new ideas without consideration",
      "Skepticism is incompatible with clinical flexibility and individualization",
      "Scientific skepticism is the same as cynicism"
    ],
    taskItem: "A.04",
    category: "Philosophical Foundations"
  },
  {
    id: "rr-symmetry-stimulus-equivalence",
    term: "Symmetry (Stimulus Equivalence)",
    domain: "B",
    correctDefinition: "An emergent bidirectional relation between two stimuli in which, given training that stimulus A relates to stimulus B, the organism also responds as if stimulus B relates to stimulus A, without direct training of the reverse relation.",
    distractors: ['An emergent bidirectional relation between two stimuli in which, given training that stimulus A relates to stimulus B, the organism also responds as if stimulus A relates to stimulus A, without direct training of the reflexive relation between identical stimuli.', 'An emergent bidirectional relation between two stimuli in which, given training that stimulus A relates to stimulus B and stimulus B relates to stimulus C, the organism also responds as if stimulus A relates to stimulus C, without direct training of the transitive relation.', 'An emergent bidirectional relation between two stimuli in which, given training that stimulus A relates to stimulus B, the organism also responds to stimulus B as if it has acquired the eliciting properties of stimulus A, without direct training of the conditioned reflex.'],
    misconceptions: [
      "Symmetry must be directly trained for each stimulus pair",
      "Symmetry is the same as reflexivity",
      "Symmetry only emerges after transitivity has been established"
    ],
    taskItem: "B.14",
    category: "Stimulus Control"
  },
  {
    id: "rr-transitivity-stimulus-equivalence",
    term: "Transitivity (Stimulus Equivalence)",
    domain: "B",
    correctDefinition: "An emergent relation in which two stimuli that are each related to a common third stimulus become related to each other without direct training; if A relates to B and B relates to C, then A relates to C.",
    distractors: ['An emergent relation in which a stimulus matches itself, such that if A is presented, the organism selects A, without any direct training of this specific relation.', 'An emergent relation in which, given training that A relates to B, the organism also responds as if B relates to A, without direct training of the B-A relation.', 'An emergent relation where a neutral stimulus acquires the eliciting properties of an unconditioned stimulus after being repeatedly paired together, as identified through systematic observation and functional assessment of the environmental context.'],
    misconceptions: [
      "Transitivity requires direct training of all three stimulus relations",
      "Transitivity is the same as symmetry",
      "Transitivity only applies to visual stimuli"
    ],
    taskItem: "B.14",
    category: "Stimulus Control"
  },
  {
    id: "rr-trial-by-trial-data",
    term: "Trial-by-Trial Data",
    domain: "C",
    correctDefinition: "A recording method in which the response outcome (correct, incorrect, prompted, or no response) is recorded for each individual instructional trial; provides a detailed record of performance across discrete opportunities.",
    distractors: ['A recording method in which the overall frequency, duration, or intensity of a behavior is measured across an observation period, providing a summary measure of the total occurrences or time spent engaging in the target behavior, rather than individual instances.', 'A recording method in which the presence or absence of a specific behavior is noted only at the conclusion of predetermined, uniform intervals, thereby indicating whether the behavior occurred at any point during that specific observation period.', 'A recording method in which the time taken to initiate a response following a stimulus presentation or the time elapsed between consecutive instances of a behavior is precisely measured, focusing on the temporal dimensions of the observed responses.'],
    misconceptions: [
      "Trial-by-trial data can only be used in discrete trial training formats",
      "Trial-by-trial data and frequency data measure the same thing",
      "Trial-by-trial data is less informative than session-level summary data"
    ],
    taskItem: "C.03",
    category: "Measurement"
  },
  {
    id: "rr-bar-graph",
    term: "Bar Graph",
    domain: "C",
    correctDefinition: "A data display format in which the height of each bar represents the value of a dependent variable for a given condition or category; used to compare discrete data points across conditions or time periods. Note: In ABA, line graphs are preferred for displaying continuous behavioral data.",
    distractors: ['A data display format in which individual data points are plotted and connected by lines to show trends over time, which is particularly useful for visualizing changes in continuous behavioral measures across consecutive observation periods.', 'A data display format in which the accumulated number of responses over time is plotted, often showing response rate as the slope of the line, which is highly effective for illustrating total progress in skill acquisition.', 'A data display format in which the proportion of total observations falling into different categories is displayed as slices of a circle, providing a visual representation of the relative frequency of various behavioral outcomes.'],
    misconceptions: [
      "Bar graphs are preferred over line graphs for displaying behavioral data in ABA",
      "Bar graphs can display continuous data as effectively as line graphs",
      "A bar graph and a histogram display the same type of information"
    ],
    taskItem: "C.04",
    category: "Measurement"
  },
  {
    id: "rr-systematic-replication",
    term: "Systematic Replication",
    domain: "D",
    correctDefinition: "A replication of a study that intentionally varies one or more conditions of the original study (e.g., participants, settings, behaviors, or procedures) to extend the generality of findings and identify the boundary conditions of an effect.",
    distractors: ['A replication of a study that precisely follows the original procedures, participants, and settings to confirm the reliability of the initial findings, ensuring the effect is robust and not due to chance occurrences.', 'A replication conducted by the same researcher or research team to ensure the reliability of their original findings before publication, thus increasing confidence in the internal validity of the study.', 'A statistical method used to combine and analyze data from multiple independent studies on the same topic, allowing for a more powerful and comprehensive assessment of an intervention\'s overall effectiveness.'],
    misconceptions: [
      "Systematic replication is the same as direct replication",
      "Systematic replication weakens the generality of findings by introducing variability",
      "Systematic replication is only conducted after a finding has been directly replicated many times"
    ],
    taskItem: "D.05",
    category: "Experimental Design"
  },
  {
    id: "rr-experimental-design",
    term: "Experimental Design",
    domain: "D",
    correctDefinition: "The arrangement of conditions in a study to allow a researcher to determine whether changes in the dependent variable are caused by the independent variable rather than by extraneous variables; in behavior analysis, single-case designs are the standard.",
    distractors: ['The specific statistical procedures employed to analyze collected data and determine the significance of effects, ensuring that observed changes are not merely due to random variation or extraneous factors.', 'The process of selecting participants for a study and assigning them to different groups or intervention conditions, ensuring that the sample is representative and that groups are comparable at the outset.', 'The detailed, step-by-step instructions for implementing an intervention and collecting data in a research study, ensuring fidelity of implementation and consistency across all experimental phases.'],
    misconceptions: [
      "Group designs are more scientifically rigorous than single-case designs",
      "A good experimental design eliminates the need for replication",
      "Experimental design is only relevant to basic research, not applied practice"
    ],
    taskItem: "D.01",
    category: "Experimental Design"
  },
  {
    id: "rr-ascending-baseline",
    term: "Ascending Baseline",
    domain: "D",
    correctDefinition: "A baseline data pattern showing an increasing trend; a threat to internal validity when the target behavior is one that should increase with treatment, because improvement may be attributable to the pre-existing trend rather than the intervention.",
    distractors: ['A baseline data pattern that exhibits a decreasing trend, suggesting improvement without intervention, which could mask the true effect of a treatment designed to reduce a problem behavior, which provides a measure of the behavior before the independent variable is introduced.', 'A baseline data pattern characterized by significant variability, making it difficult to discern a clear trend, thus complicating the visual analysis of an intervention\'s impact on behavior.', 'A baseline data pattern that shows consistent, low-level responding, indicating stability prior to intervention, which is an ideal condition for demonstrating the effects of a skill acquisition program.'],
    misconceptions: [
      "An ascending baseline always makes it easier to demonstrate treatment effects",
      "An ascending baseline is only a threat when the target behavior should decrease",
      "An ascending baseline is the same as a variable baseline"
    ],
    taskItem: "D.02",
    category: "Experimental Design"
  },
  {
    id: "rr-descending-baseline",
    term: "Descending Baseline",
    domain: "D",
    correctDefinition: "A baseline data pattern showing a decreasing trend; a threat to internal validity when the target behavior is one that should decrease with treatment, because the reduction may be attributable to the pre-existing trend rather than the intervention.",
    distractors: ['A baseline data pattern that exhibits an increasing trend, suggesting the behavior is worsening over time, which could inflate the perceived effectiveness of an intervention designed to increase a behavior.', 'A baseline data pattern characterized by stable, high levels of responding, indicating no change is occurring, which is an ideal condition for demonstrating the effects of a behavior reduction program.', 'A baseline data pattern displaying considerable fluctuation, which obscures any potential underlying trend and complicates the visual analysis of an intervention\'s impact on behavior acquisition.'],
    misconceptions: [
      "A descending baseline is always a threat to internal validity regardless of the treatment goal",
      "A descending baseline is the same as a variable baseline",
      "A descending baseline means treatment should not be introduced"
    ],
    taskItem: "D.02",
    category: "Experimental Design"
  },
  {
    id: "rr-experimental-control",
    term: "Experimental Control",
    domain: "D",
    correctDefinition: "The degree to which a researcher can demonstrate that changes in the dependent variable are caused by the independent variable and not by extraneous variables; established through systematic replication of the effect within and across participants.",
    distractors: ['The practice of including a comparison group that does not receive the intervention being evaluated in a study, allowing for direct comparison of outcomes between treated and untreated participants.', 'The statistical procedures utilized to account for potential confounding variables in large-group research designs, thereby increasing confidence that observed changes are due to the independent variable.', 'The consistent application of all experimental procedures to minimize extraneous variables and maximize reliability, ensuring that the intervention is implemented uniformly across all participants.'],
    misconceptions: [
      "Experimental control requires a no-treatment control group",
      "A single demonstration of an effect establishes experimental control",
      "Experimental control is only achievable in laboratory settings"
    ],
    taskItem: "D.01",
    category: "Experimental Design"
  },
  {
    id: "rr-practice-effects",
    term: "Practice Effects",
    domain: "D",
    correctDefinition: "Changes in behavior that occur as a result of repeated exposure to the measurement procedure or task, independent of any intervention; a threat to internal validity in designs involving repeated measurement of the same behavior.",
    distractors: ['Changes in behavior that occur due to the participant becoming aware of the study\'s purpose or expectations, potentially leading to performance that is not representative of their typical behavior.', 'Changes in behavior that are attributed to the natural developmental processes occurring in participants over time, which can confound the true effects of an intervention, especially in long-term studies.', 'Changes in behavior that are directly caused by the accurate and consistent implementation of the intervention, demonstrating the functional relationship between the treatment and the target response.'],
    misconceptions: [
      "Practice effects are the same as maturation effects",
      "Practice effects only occur in academic or cognitive tasks",
      "Practice effects strengthen rather than threaten internal validity"
    ],
    taskItem: "D.03",
    category: "Experimental Design"
  },
  {
    id: "rr-affirmation-of-the-consequent",
    term: "Affirmation of the Consequent",
    domain: "D",
    correctDefinition: "A logical fallacy in which a researcher concludes that a specific cause produced an observed effect because the effect is consistent with the predicted outcome, without ruling out alternative explanations; the basis for the problem of confounding in research.",
    distractors: ['A logical error in which a researcher falsely asserts that an effect did not occur despite clear evidence, leading to missed opportunities for effective intervention development and application, which is evaluated through systematic data collection and analysis to determine its effectiveness.', 'A statistical error in which a researcher incorrectly accepts a false null hypothesis, missing a real effect of an intervention, which can impede the discovery of beneficial behavioral treatments, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'A reasoning error in which a researcher generalizes findings from a limited sample to an entire population inappropriately, leading to overstatements about the broad applicability of an intervention, which is evaluated through systematic data collection and analysis to determine its effectiveness.'],
    misconceptions: [
      "Affirmation of the consequent is only a problem in group research designs",
      "Consistent results across multiple studies eliminate the problem of affirmation of the consequent",
      "Affirmation of the consequent is the same as a Type I error"
    ],
    taskItem: "D.01",
    category: "Experimental Design"
  },
  {
    id: "rr-research-question",
    term: "Research Question",
    domain: "D",
    correctDefinition: "A clearly stated, testable question that guides the design and conduct of a study; specifies the independent variable, dependent variable, and the population or participants of interest.",
    distractors: ['A formal statement that predicts the expected outcome of a study, including the direction of the effect, which helps to guide the hypothesis testing and interpretation of experimental results.', 'A description of a societal or clinical issue that an intervention aims to address and potentially resolve, highlighting the practical significance and relevance of the proposed research.', 'A detailed description of the tools and methods that will be used to collect data on the behavior of interest, ensuring consistency and accuracy in measurement across all study conditions.'],
    misconceptions: [
      "A research question and a hypothesis are the same thing",
      "A research question must predict the outcome of the study",
      "Research questions are only relevant to basic research, not applied practice"
    ],
    taskItem: "D.01",
    category: "Experimental Design"
  },
  {
    id: "rr-reversal-technique",
    term: "Reversal Technique",
    domain: "D",
    correctDefinition: "A procedure used within a reversal design in which the contingencies are changed to make a different behavior the target of reinforcement rather than simply withdrawing the intervention; used when the target behavior is unlikely to reverse to baseline levels with simple withdrawal.",
    distractors: ['A procedure used within a reversal design wherein the independent variable is entirely removed to meticulously observe a return to baseline levels of the dependent variable, thereby unequivocally establishing experimental control over the observed behavior. This method relies on the assumption that the behavior will readily revert to its pre-intervention state.', 'A procedure for systematically evaluating the effects of an intervention by meticulously alternating between intervention and baseline conditions for the target behavior across different settings, participants, or time periods. This approach is often employed to demonstrate the functional relationship between the intervention and the observed behavioral changes, enhancing internal validity.', 'A procedure for rigorously demonstrating experimental control over a target behavior by initially introducing an intervention, subsequently withdrawing it to observe its impact, and then carefully reinstating it, observing corresponding and consistent changes in the target behavior across these distinct phases of the experimental design.'],
    misconceptions: [
      "The reversal technique is the same as withdrawing the intervention",
      "The reversal technique is only used in the A-B-A-B design",
      "The reversal technique always produces a complete reversal to baseline levels"
    ],
    taskItem: "D.04",
    category: "Experimental Design"
  },
  {
    id: "rr-treatment-drift",
    term: "Treatment Drift",
    domain: "D",
    correctDefinition: "A gradual, unplanned change in the implementation of an intervention over time such that the procedure being used differs from the original protocol; a threat to internal validity and replication.",
    distractors: ['A deliberate modification of an intervention based on data indicating that the initial plan is not producing the desired behavioral change, requiring a procedural adjustment.', 'A gradual, consistent change in the dependent variable that occurs naturally over time, independent of the intervention, often referred to as a maturational effect.', 'A planned adjustment of the independent variable across different conditions to systematically evaluate the parameters of its effectiveness or generalize its application.'],
    misconceptions: [
      "Treatment drift is the same as planned treatment modification",
      "Treatment drift only occurs in long-term studies",
      "Treatment drift is detected through interobserver agreement checks"
    ],
    taskItem: "D.03",
    category: "Experimental Design"
  },
  {
    id: "rr-type-ii-error",
    term: "Type II Error",
    domain: "D",
    correctDefinition: "A false negative conclusion in which a researcher incorrectly concludes that the independent variable had no effect when it actually did; may result from insufficient statistical power, high variability in the data, or an insensitive measurement system.",
    distractors: ['A false positive conclusion in which a researcher incorrectly concludes that the independent variable had an effect when it did not, leading to erroneous and potentially misleading findings that may waste resources or misguide future interventions, often due to multiple comparisons or small sample sizes.', 'A measurement error in which the observer records the occurrence of a behavior that did not actually happen, leading to an overestimation of the behavior\'s frequency and potentially misinforming intervention decisions, commonly referred to as observer drift or reactivity.', 'A logical error in which a researcher overgeneralizes the findings beyond the specific population or conditions of the study, limiting the external validity of the results and making it difficult to apply the intervention effectively in different settings or with diverse individuals.'],
    misconceptions: [
      "Type II errors are less serious than Type I errors in behavior analysis",
      "Type II errors are the same as measurement errors",
      "Visual analysis of single-case data is immune to Type II errors"
    ],
    taskItem: "D.01",
    category: "Experimental Design"
  },
  {
    id: "rr-non-maleficence",
    term: "Non-Maleficence",
    domain: "E",
    correctDefinition: "The ethical principle of doing no harm; requires practitioners to avoid interventions that carry unnecessary risk of physical, psychological, or social harm to the client, and to weigh the potential benefits of any procedure against its risks.",
    distractors: ['The ethical principle of treating all clients with equal respect and fairness, ensuring equitable access to services and avoiding any form of discrimination in practice, as identified through systematic observation and functional assessment of the environmental context.', 'The ethical obligation to act in the best interests of the client, even when the client cannot make independent decisions, requiring careful consideration of surrogate decision-making, which is evaluated through systematic data collection and analysis to determine its effectiveness.', 'The ethical principle of obtaining informed consent before implementing any behavior-change procedure, ensuring client understanding and voluntary agreement to the intervention plan, defined as anything an organism does that can be measured in terms of its physical dimensions.'],
    misconceptions: [
      "Non-maleficence means that punishment procedures can never be used",
      "Non-maleficence is the same as beneficence",
      "Non-maleficence only applies to physical harm, not psychological or social harm"
    ],
    taskItem: "E.01",
    category: "Ethics"
  },
  {
    id: "rr-autonomy",
    term: "Autonomy",
    domain: "E",
    correctDefinition: "The ethical principle of respecting the right of individuals to make informed decisions about their own care; in behavior analysis, includes obtaining assent from clients, honoring client preferences, and supporting self-determination.",
    distractors: ['The ethical principle of acting in the best interests of the client when they are unable to make informed decisions for themselves, requiring careful consideration of a surrogate\'s role.', 'The ethical obligation to provide services that are effective and evidence-based, ensuring the best possible outcomes for the client through scientifically supported interventions, which is evaluated through systematic data collection and analysis to determine its effectiveness.', 'The ethical principle of treating all clients with equal respect and fairness, promoting equity and non-discrimination in the provision of behavior-analytic services, defined as anything an organism does that can be measured in terms of its physical dimensions.'],
    misconceptions: [
      "Autonomy is only relevant for adult clients who can provide informed consent",
      "Autonomy means the client can refuse any intervention without consequence",
      "Autonomy and beneficence are always compatible ethical principles"
    ],
    taskItem: "E.01",
    category: "Ethics"
  },
  {
    id: "rr-whistleblowing",
    term: "Whistleblowing",
    domain: "E",
    correctDefinition: "The act of reporting unethical, illegal, or harmful practices by a colleague or organization to the appropriate authority; a professional obligation under the BACB Ethics Code when internal resolution attempts have failed or when the situation poses immediate risk of harm.",
    distractors: ['The act of formally documenting a complaint about a colleague\'s professional conduct to an internal review board within the organization, following established protocols, and often preceding more formal disciplinary actions if the initial resolution attempts are unsuccessful or the severity warrants further investigation.', 'The act of informing a client about the ethical obligations of their behavior analyst, promoting transparency and ensuring the client understands their rights and protections, typically conducted during the initial intake process or when significant changes to service delivery or ethical guidelines occur.', 'The act of reporting a supervisee for minor infractions to their university program, often as part of a structured remediation plan to address performance deficiencies, to ensure adherence to professional standards and to facilitate their growth as competent behavior analysts within the field.'],
    misconceptions: [
      "Whistleblowing is always the first step when an ethical concern is identified",
      "Whistleblowing is only required when illegal activity is involved",
      "Whistleblowing is optional and left to the discretion of the individual practitioner"
    ],
    taskItem: "E.05",
    category: "Ethics"
  },
  {
    id: "rr-dignity-and-basic-rights",
    term: "Dignity and Basic Rights",
    domain: "E",
    correctDefinition: "The ethical obligation to treat all clients with respect and to protect their fundamental rights; requires that interventions do not demean, humiliate, or deprive clients of basic necessities, and that clients are treated as full human beings.",
    distractors: ['The ethical imperative to ensure that all clients consistently receive the most effective and scientifically validated treatment interventions available, promoting the highest possible quality of care and maximizing positive outcomes for every individual, regardless of their background or circumstances.', 'The inherent legal entitlements and protections afforded to clients as explicitly outlined and guaranteed by all pertinent state and federal statutes and regulations, which practitioners are legally bound to meticulously uphold and respect throughout every facet of their professional conduct and service delivery.', 'The fundamental right of every client to decline any and all treatment plans or interventions suggested by their behavior analyst, even when those recommendations are demonstrably evidence-based and effective, thereby unequivocally respecting their personal autonomy and informed decision-making capacity.'],
    misconceptions: [
      "Dignity and basic rights only apply to clients who can advocate for themselves",
      "Dignity and basic rights are satisfied as long as the intervention is effective",
      "Dignity and basic rights are only relevant when using punishment procedures"
    ],
    taskItem: "E.01",
    category: "Ethics"
  },
  {
    id: "rr-stakeholder",
    term: "Stakeholder",
    domain: "E",
    correctDefinition: "Any individual or group with a legitimate interest in the outcomes of a behavior-analytic program, including the client, family members, caregivers, teachers, administrators, and funding agencies; behavior analysts must consider the interests of all relevant stakeholders.",
    distractors: ['Any individual or group that provides direct supervision or guidance to the behavior analyst, ensuring adherence to professional standards, ethical guidelines, and legal requirements for service delivery, and who may also be responsible for professional development and performance evaluations within the organization.', 'Any individual or group responsible for the oversight and implementation of the client\'s behavior intervention plan, ensuring fidelity of procedures, accurate data collection, and consistent application of interventions across all relevant settings to maximize treatment effectiveness and generalization of skills.', 'Any individual or group directly impacted by the client\'s problem behavior, whose involvement is crucial for identifying target behaviors, setting meaningful intervention goals, and evaluating the overall effectiveness of the intervention by providing feedback on changes in behavior and quality of life.'],
    misconceptions: [
      "The client is not a stakeholder because they cannot make independent decisions",
      "Stakeholders are only relevant when there are conflicts of interest",
      "The behavior analyst is not a stakeholder in the program they design"
    ],
    taskItem: "E.01",
    category: "Ethics"
  },
  {
    id: "rr-ethical-codes-of-behavior",
    term: "Ethical Codes of Behavior",
    domain: "E",
    correctDefinition: "Formal, written standards of professional conduct established by a credentialing or licensing body that define the obligations of practitioners, specify prohibited behaviors, and provide a framework for resolving ethical dilemmas.",
    distractors: ['Informal guidelines for professional conduct that are disseminated through peer consultation and mentorship, influencing daily practice decisions in various contexts, which is evaluated through systematic data collection and analysis to determine its effectiveness.', 'Legal statutes that mandate specific practices within the field of behavior analysis, establishing minimum requirements for professional conduct and service provision, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'Organizational policies developed by specific agencies to regulate the professional behavior of their employees, establishing internal standards for operations, defined as anything an organism does that can be measured in terms of its physical dimensions.'],
    misconceptions: [
      "Ethical codes are the same as laws governing professional practice",
      "Ethical codes are aspirational guidelines rather than enforceable standards",
      "Following ethical codes is sufficient to ensure ethical practice"
    ],
    taskItem: "E.01",
    category: "Ethics"
  },
  {
    id: "rr-functional-behavior-assessment",
    term: "Functional Behavior Assessment (FBA)",
    domain: "F",
    correctDefinition: "A systematic process for identifying the antecedents and consequences that maintain a problem behavior; includes indirect methods (interviews, rating scales), descriptive methods (direct observation), and experimental methods (functional analysis).",
    distractors: ['A comprehensive evaluation of an individual\'s current skill repertoire across various developmental domains, often involving direct observation and standardized assessments, used to identify specific skill deficits and plan individualized educational and behavioral interventions tailored to their needs and strengths.', 'A systematic process for identifying potential reinforcers by presenting various items or activities to an individual in a controlled environment and carefully observing their approach, engagement, and preference behaviors to determine which stimuli are most likely to increase the future probability of a desired response.', 'A structured interview protocol, such as the MAS or FAST, designed to gather extensive information from caregivers and teachers about the historical context, environmental triggers, perceived functions, and maintaining consequences of challenging behaviors, providing valuable data for hypothesis generation.'],
    misconceptions: [
      "FBA and functional analysis are the same thing",
      "FBA is only required for severe problem behaviors",
      "A completed FBA always identifies a single, clear behavioral function"
    ],
    taskItem: "F.01",
    category: "Assessment"
  },
  {
    id: "rr-paired-stimulus-preference-assessment",
    term: "Paired Stimulus Preference Assessment",
    domain: "F",
    correctDefinition: "A preference assessment in which two stimuli are presented simultaneously and the client selects one; each stimulus is paired with every other stimulus, and the frequency of selection across pairs is used to create a preference hierarchy.",
    distractors: ['A preference assessment method in which multiple items are displayed simultaneously, allowing the individual to choose one from the array, with repeated trials to identify highly preferred stimuli.', 'A preference assessment procedure where individual items are presented one at a time, and the individual\'s approach or avoidance behaviors are recorded to determine relative preference.', 'A preference assessment technique in which an individual is directly asked to verbally rank a list of potential reinforcers from most to least preferred, often used with individuals with strong verbal skills.'],
    misconceptions: [
      "Paired stimulus preference assessments identify reinforcers rather than preferred stimuli",
      "Paired stimulus preference assessments are the same as multiple stimulus preference assessments",
      "The stimulus selected most often in a paired stimulus assessment will always function as a reinforcer"
    ],
    taskItem: "F.02",
    category: "Assessment"
  },
  {
    id: "rr-abc-analysis",
    term: "ABC Analysis",
    domain: "F",
    correctDefinition: "A descriptive assessment method in which the antecedent events, the target behavior, and the consequences that follow are systematically recorded to identify potential controlling variables and generate hypotheses about behavioral function.",
    distractors: ['An experimental assessment method in which specific environmental variables are systematically manipulated and observed to directly test and confirm hypotheses about the maintaining consequences for a target behavior, thereby establishing a functional relationship.', 'A standardized, indirect assessment method that involves administering a comprehensive questionnaire or survey to caregivers or teachers to gather detailed information about the perceived function and contextual factors of challenging behaviors across various settings.', 'A structured, indirect assessment process involving in-depth interviews with significant others to collect extensive historical information about the onset, frequency, intensity, and severity of problem behaviors, providing context for functional hypotheses.'],
    misconceptions: [
      "ABC analysis can demonstrate a functional relationship between behavior and consequences",
      "ABC analysis is the same as a functional analysis",
      "ABC analysis is sufficient to identify the function of behavior without further assessment"
    ],
    taskItem: "F.01",
    category: "Assessment"
  },
  {
    id: "rr-ecological-assessment",
    term: "Ecological Assessment",
    domain: "F",
    correctDefinition: "A broad evaluation of the physical, social, and instructional environments in which a client lives and learns; used to identify setting events, environmental barriers to participation, and opportunities for environmental modification.",
    distractors: ['A thorough examination of an individual\'s medical history, current physiological state, and genetic predispositions to understand any biological variables that may be influencing their behavior and overall well-being, informing comprehensive intervention strategies.', 'A comprehensive evaluation of an individual\'s adaptive, academic, and vocational skills across various domains, used to identify specific skill deficits, determine developmental levels, and guide the development of precise and individualized intervention planning.', 'A structured evaluation of the social dynamics, interpersonal relationships, and group contingencies within an individual\'s immediate environment, considering their profound impact on behavior patterns and the effectiveness of social reinforcement.'],
    misconceptions: [
      "Ecological assessment is the same as a functional behavior assessment",
      "Ecological assessment only examines the physical environment, not the social environment",
      "Ecological assessment is only relevant for clients with severe problem behavior"
    ],
    taskItem: "F.01",
    category: "Assessment"
  },
  {
    id: "rr-video-modeling",
    term: "Video Modeling",
    domain: "F",
    correctDefinition: "A modeling procedure in which the learner watches a video recording of a model performing the target behavior before attempting to perform the behavior themselves; effective for teaching social, daily living, and vocational skills.",
    distractors: ['A teaching strategy where a live individual directly demonstrates a target skill in the natural environment, providing immediate feedback and allowing the learner to observe and imitate the desired actions, often used for acquiring motor skills or social interactions.', 'A procedure involving the systematic use of written instructions, visual diagrams, or sequential picture prompts to guide a learner through the discrete steps of a complex task or skill acquisition, facilitating independence and promoting task completion for various routines.', 'A self-management technique where an individual systematically observes their own behavior through a mirror, audio recording, or video recording to identify and correct errors in their performance, fostering self-awareness and promoting skill refinement and maintenance over time.'],
    misconceptions: [
      "Video modeling is only effective for learners with autism spectrum disorder",
      "Video modeling requires the model to be someone the learner knows personally",
      "Video modeling is the same as video self-modeling"
    ],
    taskItem: "F.03",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-response-differentiation",
    term: "Response Differentiation",
    domain: "F",
    correctDefinition: "The process by which differential reinforcement produces a change in the form, topography, or other dimensional quantity of a behavior; the mechanism through which shaping produces new behavior.",
    distractors: ['The process by which a behavior becomes more likely to occur in the presence of specific antecedent stimuli that signal the availability of reinforcement.', 'The process by which a behavior occurs in novel situations or with novel stimuli, indicating that learning has generalized beyond the training context.', 'The process by which an undesirable behavior is reduced in frequency by reinforcing an alternative, more appropriate behavior, thereby strengthening the desired response.'],
    misconceptions: [
      "Response differentiation is the same as response generalization",
      "Response differentiation only applies to the topography of behavior",
      "Response differentiation is the same as shaping"
    ],
    taskItem: "F.04",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-behavior-chain-interruption-strategy",
    term: "Behavior Chain Interruption Strategy",
    domain: "F",
    correctDefinition: "A procedure in which a step in an established behavior chain is interrupted to create an establishing operation that increases the motivative value of completing the chain, providing an opportunity for the learner to request assistance, a missing item, or a preferred activity.",
    distractors: ['A teaching method where a complex skill is systematically broken down into smaller, discrete, and more manageable steps, and each individual step is then taught sequentially using either forward chaining, backward chaining, or total task presentation procedures to build the complete skill repertoire.', 'A procedural approach where a functionally equivalent and socially appropriate alternative behavior chain is carefully identified and then systematically taught to replace an existing problem behavior chain, often involving differential reinforcement of the new, more adaptive sequence of responses.', 'A strategy where a behavior chain is deliberately halted at a specific predetermined point to provide an immediate opportunity for error correction by the instructor or to effectively prevent the completion of an incorrectly performed or undesirable sequence of actions by the learner, ensuring accurate skill acquisition.'],
    misconceptions: [
      "Behavior chain interruption strategy is only used to teach manding",
      "Behavior chain interruption strategy is the same as backward chaining",
      "Behavior chain interruption strategy requires the learner to have a fully mastered chain"
    ],
    taskItem: "F.04",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-enriched-environment",
    term: "Enriched Environment",
    domain: "F",
    correctDefinition: "An antecedent intervention in which the density of reinforcement in the environment is increased by providing free access to preferred stimuli, activities, or social interaction; reduces problem behavior by abolishing the establishing operation for the behavior.",
    distractors: ['An antecedent intervention in which the environment is modified to remove or reduce the discriminative stimuli that reliably occasion problem behavior, making those behaviors less probable and promoting more adaptive responses.', 'An antecedent intervention in which the environment is arranged to provide an abundance of instructional materials and learning opportunities, thereby increasing the rate of skill acquisition across various developmental domains.', 'An antecedent intervention in which the environment is systematically stripped of all extraneous stimuli that could divert attention, thereby facilitating sustained focus on instructional tasks and reducing off-task behavior.'],
    misconceptions: [
      "Enriched environments are only effective for behaviors maintained by automatic reinforcement",
      "Enriched environments are the same as noncontingent reinforcement",
      "Enriched environments increase problem behavior by providing more stimulation"
    ],
    taskItem: "F.05",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-discrete-trial-training",
    term: "Discrete Trial Training (DTT)",
    domain: "G",
    correctDefinition: "A structured teaching method in which each trial consists of a discriminative stimulus, a response opportunity, and a consequence; trials are discrete (have a clear beginning and end) and data are recorded trial by trial.",
    distractors: ['An instructional approach in which skills are taught using a continuous reinforcement schedule, which increases the future probability of the behavior occurring under similar antecedent conditions in the environment', 'An instructional approach in which skills are taught in the natural environment, which is grounded in the principles of applied behavior analysis and evaluated through empirical measurement methods, as defined by its observable and measurable physical dimensions within the natural environment of the individual', 'An instructional approach in which skills are taught using shaping procedures, in which successive approximations to the target behavior are differentially reinforced until the terminal form is achieved, which is implemented systematically and evaluated through ongoing data collection to determine its effectiveness'],
    misconceptions: [
      "DTT is the same as ABA",
      "DTT can only be used in one-on-one clinic settings",
      "DTT is only appropriate for learners with autism spectrum disorder"
    ],
    taskItem: "G.01",
    category: "Skill Acquisition"
  },
  {
    id: "rr-error-correction",
    term: "Error Correction",
    domain: "G",
    correctDefinition: "A procedure used after an incorrect response in which the correct response is prompted, practiced, and reinforced; used to reduce future errors without inadvertently reinforcing incorrect responding through the attention provided during correction.",
    distractors: ['A procedure implemented after an incorrect response that involves the immediate delivery of an aversive consequence, aiming to decrease the future probability of that specific incorrect response and suppress its occurrence.', 'A procedure utilized after an incorrect response where the trial is simply re-presented to the learner without any additional cues or prompts, allowing for an independent opportunity to respond correctly.', 'A procedure initiated after an incorrect response in which the original discriminative stimulus is altered or simplified, making it easier for the learner to emit the correct response on subsequent trials.'],
    misconceptions: [
      "Error correction is the same as punishment",
      "Error correction should be avoided because it draws attention to incorrect responding",
      "Error correction is only necessary for discrete trial training"
    ],
    taskItem: "G.02",
    category: "Skill Acquisition"
  },
  {
    id: "rr-verbal-prompt",
    term: "Verbal Prompt",
    domain: "G",
    correctDefinition: "A type of response prompt in which the trainer provides a spoken cue — such as a partial word, full instruction, or question — to increase the likelihood of a correct response in the presence of the target discriminative stimulus.",
    distractors: ['A type of response prompt in which the physical properties of the target stimulus are altered, such as making it larger, brighter, or closer, to increase the likelihood of a correct response.', 'A type of response prompt in which the trainer physically guides the learner\'s body through the correct motor movement, ranging from full physical assistance to a light touch, to ensure a correct response.', 'A type of response prompt in which the trainer demonstrates the correct behavior for the learner to imitate, providing a visual example of the desired response in the presence of the discriminative stimulus.'],
    misconceptions: [
      "Verbal prompts are always the least intrusive type of response prompt",
      "Verbal prompts are the same as instructions",
      "Verbal prompts are only used in discrete trial training"
    ],
    taskItem: "G.03",
    category: "Prompting"
  },
  {
    id: "rr-graduated-guidance",
    term: "Graduated Guidance",
    domain: "G",
    correctDefinition: "A prompting procedure in which the trainer provides the level of physical guidance necessary to ensure a correct response on a moment-to-moment basis, immediately reducing guidance as the learner initiates the correct movement.",
    distractors: ['A prompting procedure in which the trainer consistently provides a predetermined level of physical assistance throughout the entire task, irrespective of the learner\'s emerging independence or skill level.', 'A prompting procedure in which the level of physical guidance is systematically reduced across trials or sessions according to a pre-established plan, rather than adjusting dynamically in real-time.', 'A prompting procedure where physical assistance is initially provided for the entire task, then completely removed, expecting the learner to complete the subsequent steps independently without further help.'],
    misconceptions: [
      "Graduated guidance is the same as most-to-least prompting",
      "Graduated guidance requires a predetermined fading schedule",
      "Graduated guidance is only used for motor skills"
    ],
    taskItem: "G.03",
    category: "Prompting"
  },
  {
    id: "rr-good-behavior-game",
    term: "Good Behavior Game",
    domain: "G",
    correctDefinition: "An interdependent group contingency procedure in which a class is divided into teams; each team earns marks for rule violations, and the team(s) with marks below a criterion at the end of the period earn a reward; effective for reducing disruptive classroom behavior.",
    distractors: ['An interdependent group contingency procedure in which an individual\'s behavior directly influences the entire group\'s access to reinforcement, often focusing on a specific student\'s target behavior, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'An interdependent group contingency procedure in which each student earns individual points or tokens for appropriate behavior, which are then exchanged for personal preferred items or activities, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'An interdependent group contingency procedure in which the entire group receives a shared reward only if every single member of the group meets a stringent, pre-established behavioral criterion, defined as anything an organism does that can be measured in terms of its physical dimensions.'],
    misconceptions: [
      "The Good Behavior Game is an independent group contingency",
      "The Good Behavior Game is only effective for reducing physical aggression",
      "The Good Behavior Game requires all teams to meet the criterion to earn the reward"
    ],
    taskItem: "G.04",
    category: "Group Contingencies"
  },
  {
    id: "rr-contingency-contract",
    term: "Contingency Contract",
    domain: "G",
    correctDefinition: "A written document that specifies the behavior required of an individual and the consequences (reinforcers or punishers) that will follow; contracts are negotiated between the individual and a significant other and signed by both parties.",
    distractors: ['A written document that outlines the general goals of therapy and the expectations for both the behavior analyst and the client, serving as a professional agreement for service delivery.', 'A written document that details the specific intervention procedures to be implemented, including step-by-step instructions for data collection and treatment modifications, for consistent application.', 'A written document that serves as a formal legal agreement between the service provider and the client, specifying rights, responsibilities, and confidentiality clauses to protect all parties involved.'],
    misconceptions: [
      "Contingency contracts are only effective for adults",
      "Contingency contracts are the same as behavior intervention plans",
      "Contingency contracts must specify only positive consequences"
    ],
    taskItem: "G.05",
    category: "Self-Management"
  },
  {
    id: "rr-self-control-impulse-control",
    term: "Self-Control (Impulse Control)",
    domain: "G",
    correctDefinition: "The selection of a larger, delayed reinforcer over a smaller, immediate reinforcer; a pattern of responding in which the individual chooses to wait for a more valuable outcome rather than accepting a less valuable outcome immediately.",
    distractors: ['The selection of a larger, delayed reinforcer over a smaller, immediate reinforcer; the ability to inhibit a prepotent, automatic response to emit a more appropriate, planned behavior.', 'The selection of a larger, delayed reinforcer over a smaller, immediate reinforcer; the process of observing and recording one\'s own behavior to facilitate behavior change and self-management.', 'The selection of a larger, delayed reinforcer over a smaller, immediate reinforcer; a pattern of responding in which the individual consistently chooses a smaller, immediate outcome rather than waiting for a more valuable one.'],
    misconceptions: [
      "Self-control is a trait that individuals either have or do not have",
      "Self-control is the opposite of impulsivity in all situations",
      "Self-control cannot be taught using behavioral procedures"
    ],
    taskItem: "G.06",
    category: "Self-Management"
  },
  {
    id: "rr-delay-discounting",
    term: "Delay Discounting",
    domain: "G",
    correctDefinition: "The decrease in the subjective value of a reinforcer as the delay to its delivery increases; a reinforcer available immediately is valued more highly than the same reinforcer available after a delay, and this difference in value is the basis for impulsive choice.",
    distractors: ['The decrease in the subjective value of a reinforcer as the delay to its delivery increases; a reduction in the effectiveness of a reinforcer due to repeated presentations, leading to satiation, as measured by changes in the frequency, duration, or intensity of the target response over time.', 'The decrease in the subjective value of a reinforcer as the delay to its delivery increases; a reduction in the motivating value of a reinforcer as its magnitude or quality is diminished, as measured by changes in the frequency, duration, or intensity of the target response over time.', 'The decrease in the subjective value of a reinforcer as the delay to its delivery increases; a reduction in the frequency of a target behavior when the schedule of reinforcement is gradually thinned, expressed as the number of times a response occurs within a defined observation period.'],
    misconceptions: [
      "Delay discounting is the same as satiation",
      "Delay discounting only applies to monetary reinforcers",
      "Delay discounting is a fixed characteristic that cannot be modified by experience"
    ],
    taskItem: "G.06",
    category: "Self-Management"
  },
  {
    id: "rr-habit-reversal",
    term: "Habit Reversal",
    domain: "G",
    correctDefinition: "A self-management procedure for reducing repetitive behaviors (such as tics, nail-biting, or hair-pulling) that involves awareness training, competing response training, and social support; the individual learns to recognize the urge and engage in an incompatible behavior.",
    distractors: ['A self-management procedure for reducing repetitive behaviors that involves systematically withholding all forms of reinforcement for the unwanted habit whenever it occurs, thereby leading to a significant decrease in the future probability of that behavior, often through the process of extinction or punishment.', 'A self-management procedure for reducing repetitive behaviors that focuses primarily on identifying and systematically manipulating the specific environmental events that reliably precede and consequently trigger the undesirable habit, aiming to prevent its occurrence by altering antecedents.', 'A self-management procedure for reducing repetitive behaviors that involves consistently reinforcing the absence of the target behavior for specified periods of time, often utilizing a differential reinforcement of other behavior (DRO) schedule to increase the frequency of alternative, more appropriate behaviors.'],
    misconceptions: [
      "Habit reversal is only effective for motor tics",
      "Habit reversal is the same as differential reinforcement of incompatible behavior",
      "Habit reversal requires identifying the function of the habit before implementation"
    ],
    taskItem: "G.06",
    category: "Self-Management"
  },
  {
    id: "rr-instructional-setting",
    term: "Instructional Setting",
    domain: "G",
    correctDefinition: "The setting in which a behavior is directly trained and reinforced; distinguished from the generalization setting, and effective programming requires planning for transfer of stimulus control from the instructional setting to the natural environment.",
    distractors: ['The setting where a behavior is expected to occur after intervention has concluded, where natural contingencies of reinforcement are present, and where the behavior is maintained without explicit programming efforts.', 'The setting where a functional behavior assessment is conducted to identify environmental variables influencing a target behavior, typically involving direct observation and data collection in the natural context.', 'The setting where baseline data are systematically collected prior to the implementation of an intervention, establishing a pre-intervention level of the target behavior for comparison and evaluation.'],
    misconceptions: [
      "The instructional setting is always a clinic or therapy room",
      "Training in the instructional setting automatically produces generalization to natural settings",
      "The instructional setting and the generalization setting should be identical"
    ],
    taskItem: "G.07",
    category: "Generalization"
  },
  {
    id: "rr-generalized-behavior-change",
    term: "Generalized Behavior Change",
    domain: "G",
    correctDefinition: "Behavior change that occurs across settings, behaviors, or individuals beyond those directly targeted in training; the goal of most behavior-analytic interventions is to produce generalized behavior change that is maintained in the natural environment.",
    distractors: ['Behavior change that occurs across settings, behaviors, or individuals beyond those directly targeted in training; behavior change that is maintained after the intervention has been discontinued.', 'Behavior change that occurs across settings, behaviors, or individuals beyond those directly targeted in training; behavior change that occurs in the training setting but not in the natural environment.', 'Behavior change that occurs across settings, behaviors, or individuals beyond those directly targeted in training; behavior change that is produced by a single intervention across all members of a group.'],
    misconceptions: [
      "Generalized behavior change is the same as response generalization",
      "Generalized behavior change occurs automatically after mastery in the training setting",
      "Generalized behavior change and maintenance are the same concept"
    ],
    taskItem: "G.07",
    category: "Generalization"
  },
  {
    id: "rr-teach-loosely",
    term: "Teach Loosely",
    domain: "G",
    correctDefinition: "A generalization programming strategy in which training is conducted with intentional variation in non-critical dimensions of the instructional stimuli (e.g., varying materials, trainers, and settings) to promote generalization to untrained stimulus variations.",
    distractors: ['A generalization programming strategy in which training is conducted with intentional variation in non-critical dimensions of the instructional stimuli; a strategy where the mastery criterion is set lower than usual.', 'A generalization programming strategy in which training is conducted with intentional variation in non-critical dimensions of the instructional stimuli; a strategy where the learner is given free choice of materials.', 'A generalization programming strategy in which training is conducted with intentional variation in non-critical dimensions of the instructional stimuli; a strategy where prompts are faded more rapidly than usual.'],
    misconceptions: [
      "Teaching loosely means reducing the consistency of the training procedure",
      "Teaching loosely is the same as incidental teaching",
      "Teaching loosely is only appropriate for learners who have already mastered the skill in training"
    ],
    taskItem: "G.07",
    category: "Generalization"
  },
  {
    id: "rr-contrived-mediating-stimulus",
    term: "Contrived Mediating Stimulus",
    domain: "G",
    correctDefinition: "A generalization programming strategy in which a stimulus that is present during training is also present in the generalization environment, serving as a bridge that transfers stimulus control from the training setting to the natural environment.",
    distractors: ['A generalization programming strategy in which a stimulus that is present during training is also present in the generalization environment; a stimulus used as a prompt during training and then faded.', 'A generalization programming strategy in which a stimulus that is present during training is also present in the generalization environment; a stimulus present in the natural environment used to initiate training.', 'A generalization programming strategy in which a stimulus that is present during training is also present in the generalization environment; a stimulus used to signal the availability of reinforcement.'],
    misconceptions: [
      "Contrived mediating stimuli are the same as discriminative stimuli",
      "Contrived mediating stimuli are only used for verbal behavior",
      "Contrived mediating stimuli must be natural stimuli from the generalization environment"
    ],
    taskItem: "G.07",
    category: "Generalization"
  },
  {
    id: "rr-treatment-acceptability",
    term: "Treatment Acceptability",
    domain: "H",
    correctDefinition: "The degree to which consumers (clients, caregivers, teachers) judge a treatment procedure to be appropriate, fair, and reasonable for the presenting problem; influences treatment integrity and long-term maintenance of the intervention.",
    distractors: ['The degree to which an intervention produces socially significant improvements in a client\'s life, demonstrating meaningful and lasting changes in their repertoire, which is evaluated through systematic data collection and analysis to determine its effectiveness.', 'The degree to which an intervention adheres to empirically validated methods and established scientific principles, ensuring its foundation in research and best practices, which is evaluated through systematic data collection and analysis to determine its effectiveness.', 'The degree to which an intervention is consistently and accurately implemented by interventionists, reflecting fidelity to the planned procedural steps and components, calculated by dividing the number of responses by the observation time to yield responses per unit time.'],
    misconceptions: [
      "Treatment acceptability is the same as treatment effectiveness",
      "Treatment acceptability is only relevant for punishment procedures",
      "High treatment acceptability guarantees high treatment integrity"
    ],
    taskItem: "H.04",
    category: "Selecting Interventions"
  },
  {
    id: "rr-transition-planning",
    term: "Transition Planning",
    domain: "H",
    correctDefinition: "The process of preparing a client for a change in services, settings, or life circumstances (e.g., from school to adult services, from clinic to home); involves identifying transition goals, building prerequisite skills, and coordinating with receiving programs.",
    distractors: ['The systematic process of preparing a client for a change in service providers or clinical teams, ensuring seamless continuity of care and consistent application of behavioral strategies, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'The process of systematically fading out intervention components and support as a client demonstrates sustained mastery, promoting independence and generalization of acquired skills, calculated by dividing the number of responses by the observation time to yield responses per unit time.', 'The process of modifying a behavior intervention plan when a client moves to a new physical location or program, ensuring the plan remains effective and appropriate for the new environment, which specifies antecedent modifications, replacement behaviors, and consequence strategies.'],
    misconceptions: [
      "Transition planning only applies to clients transitioning from school to adult services",
      "Transition planning is the responsibility of the school or adult service provider, not the behavior analyst",
      "Transition planning and discharge planning are the same process"
    ],
    taskItem: "H.05",
    category: "Selecting Interventions"
  },
  {
    id: "rr-behavioral-systems-analysis",
    term: "Behavioral Systems Analysis",
    domain: "I",
    correctDefinition: "An approach within organizational behavior management that applies behavior-analytic principles to analyze and improve the performance of entire systems or organizations, examining how environmental variables at the system level influence the behavior of individuals within the system.",
    distractors: ['An approach within organizational behavior management that uses statistical analysis to identify key performance indicators and predict employee productivity based on various organizational factors, often employing predictive modeling to forecast future performance trends and inform strategic decision-making within the company.', 'An approach that applies cognitive-behavioral principles to improve the emotional well-being and job satisfaction of employees, fostering a positive organizational culture and reducing stress, by addressing internal thoughts and feelings that influence workplace behaviors and performance outcomes.', 'An approach that uses systems theory to understand the complex interdependencies between various organizational components, focusing on information flow and structural relationships rather than behavior, to optimize processes and resource allocation for overall organizational efficiency and effectiveness.'],
    misconceptions: [
      "Behavioral systems analysis is the same as organizational behavior management",
      "Behavioral systems analysis only applies to large organizations",
      "Behavioral systems analysis does not use the same principles as clinical ABA"
    ],
    taskItem: "I.05",
    category: "Supervision"
  },
  {
    id: "rr-supervision-hours-bacb",
    term: "Supervision Hours (BACB)",
    domain: "I",
    correctDefinition: "The minimum number of supervised fieldwork hours required by the BACB for credentialing; a specified percentage of total fieldwork hours must be supervised, and supervision must meet BACB standards for format, frequency, and content.",
    distractors: ['The minimum number of hours a Board Certified Behavior Analyst must dedicate to supervising others annually to maintain their professional credential and uphold ethical practice standards.', 'The minimum number of continuing education units required by the BACB for recertification within a specific cycle, ensuring ongoing professional development and knowledge acquisition.', 'The minimum number of hours a supervisee must engage in direct client contact to be eligible for supervised fieldwork experience, establishing a foundation of practical application.'],
    misconceptions: [
      "Any licensed professional can provide supervision hours that count toward BACB credentialing",
      "Supervision hours can be accrued through self-study or online coursework",
      "The supervision hour requirement is the same for all BACB credentials"
    ],
    taskItem: "I.06",
    category: "Supervision"
  },
  {
    id: "rr-dimensions-of-aba",
    term: "Dimensions of ABA (REACCS)",
    domain: "A",
    correctDefinition: "The seven defining characteristics of applied behavior analysis identified by Baer, Wolf, and Risley (1968): Applied, Behavioral, Analytic, Technological, Conceptually Systematic, Effective, and Generality (remembered by the acronym REACCS or similar).",
    distractors: ['The five fundamental philosophical assumptions of behavior analysis, including determinism, empiricism, parsimony, philosophical doubt, and selectionism, which guide scientific inquiry, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'The three levels of selection by consequences that shape the development of behavior across different time scales: phylogenetic, ontogenetic, and cultural selection, influencing repertoire evolution.', 'The four primary goals of scientific inquiry in behavior analysis: description, prediction, control, and understanding of behavior, guiding research and practical application efforts, defined as anything an organism does that can be measured in terms of its physical dimensions.'],
    misconceptions: [
      "The seven dimensions are guidelines rather than defining requirements of ABA",
      "Generality refers only to generalization across settings",
      "Technological means that technology must be used in the intervention"
    ],
    taskItem: "A.05",
    category: "Philosophical Foundations"
  },
  {
    id: "rr-professional-practice-behavior-analysis",
    term: "Professional Practice (in Behavior Analysis)",
    domain: "A",
    correctDefinition: "The delivery of behavior-analytic services by credentialed practitioners to clients with socially significant behavior-change needs; guided by the science of ABA, the BACB Ethics Code, and applicable laws and regulations.",
    distractors: ['The basic science that investigates fundamental principles of behavior-environment relations under controlled experimental conditions, often conducted in laboratory settings with non-human subjects.', 'The philosophical foundation of behavior analysis that guides the interpretation and understanding of behavior, emphasizing environmental determinants and avoiding mentalistic explanations.', 'The application of behavioral principles to improve performance and productivity within organizational settings, often focusing on employee behavior and system-level interventions.'],
    misconceptions: [
      "Professional practice is the same as applied behavior analysis",
      "Professional practice is only relevant for BCBAs working with clinical populations",
      "Professional practice does not require adherence to a formal ethics code"
    ],
    taskItem: "A.06",
    category: "Philosophical Foundations"
  },
  {
    id: "rr-response-maintenance",
    term: "Response Maintenance (Conceptual)",
    domain: "B",
    correctDefinition: "The continuation of a behavior change after the intervention that produced it has been discontinued; maintenance is facilitated by natural reinforcement contingencies, intermittent schedules, and generalization programming.",
    distractors: ['A systematic maintenance strategy in which reinforcement is gradually thinned after mastery is achieved, moving from continuous reinforcement to intermittent schedules that approximate the natural reinforcement environment.', 'The experimental analysis of behavior that uses group comparison designs with human participants to identify the environmental variables that control socially significant behaviors and develop evidence-based interventions.', 'The scientific attitude of accepting all currently established knowledge as permanent and unchangeable, treating published research findings as definitive truths that do not require replication or further empirical scrutiny.'],
    misconceptions: [
      "Response maintenance is the same as generalization",
      "Maintenance occurs automatically after a behavior is mastered",
      "Maintenance requires continuous reinforcement after the intervention is discontinued"
    ],
    taskItem: "B.15",
    category: "Core Concepts"
  },
  {
    id: "rr-efficiency-measures",
    term: "Efficiency Measures (Trials to Criterion, Cost-Benefit)",
    domain: "C",
    correctDefinition: "Measures used to evaluate the efficiency of an intervention, including trials to criterion (the number of teaching trials required to reach mastery) and cost-benefit analysis (comparing the resources required against the outcomes produced).",
    distractors: ['Measures used to evaluate the social validity of an intervention by assessing consumer satisfaction with the outcomes and procedures, ensuring relevance to the client\'s values, which assesses whether the goals, procedures, and outcomes of an intervention are acceptable to stakeholders.', 'Measures used to evaluate the generality of an intervention by assessing behavior performance across untrained settings, people, or responses, demonstrating broad applicability, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'Measures used to evaluate the reliability of data collection by assessing the consistency of observations between two or more independent observers, ensuring data integrity, which provides objective information about the current level and trend of the target behavior.'],
    misconceptions: [
      "Efficiency measures are only relevant for comparing two or more interventions",
      "Trials to criterion is the same as rate of acquisition",
      "Cost-benefit analysis is not a behavioral measurement procedure"
    ],
    taskItem: "C.05",
    category: "Measurement"
  },
  {
    id: "rr-selecting-measurement-procedure",
    term: "Selecting a Measurement Procedure Based on Environmental Constraints",
    domain: "C",
    correctDefinition: "The process of choosing a measurement system that is feasible given the practical constraints of the environment, including the observer's other responsibilities, the rate and duration of the behavior, and the resources available for data collection.",
    distractors: ['The process of choosing a measurement system based solely on the dimensional quantity of the target behavior to be assessed.', 'The process of choosing a measurement system that will produce the most accurate data regardless of practical feasibility.', 'The process of choosing a measurement system that has been validated in peer-reviewed research for the behavior.'],
    misconceptions: [
      "The most accurate measurement procedure should always be used regardless of constraints",
      "Environmental constraints are not a legitimate consideration when selecting a measurement procedure",
      "Discontinuous measurement is always less appropriate than continuous measurement"
    ],
    taskItem: "C.02",
    category: "Measurement"
  },
  {
    id: "rr-selecting-procedural-integrity-measurement",
    term: "Selecting a Procedural Integrity Measurement Procedure",
    domain: "C",
    correctDefinition: "The process of choosing a method for assessing whether an intervention is being implemented as designed, including direct observation, permanent product review, and self-report; the method selected should be sensitive to the critical components of the intervention.",
    distractors: ['The process of selecting a method for evaluating whether a behavior change is socially significant and meaningful for the client, often involving subjective evaluations from the client, their caregivers, and other relevant stakeholders, to ensure the intervention addresses critical areas of need and improves quality of life for the individual.', 'The process of choosing a method for assessing whether data are being recorded reliably by the observer, ensuring the accuracy and consistency of behavioral measurements through techniques like interobserver agreement (IOA) calculations, which compare independent observations of the same behavior by two or more data collectors to identify discrepancies.', 'The process of choosing an appropriate method for assessing whether the intervention is effectively producing the desired behavior outcome for the individual, typically through visual analysis of graphed data, such as line graphs displaying trends and levels, or employing statistical tests to determine the functional relationship between the intervention and behavior change.'],
    misconceptions: [
      "Procedural integrity measurement is only necessary for complex, multi-component interventions",
      "Self-report is always an adequate method for assessing procedural integrity",
      "Procedural integrity measurement is the same as interobserver agreement"
    ],
    taskItem: "C.06",
    category: "Measurement"
  },
  {
    id: "rr-measurement",
    term: "Measurement",
    domain: "C",
    correctDefinition: "The process of assigning numbers to the dimensional quantities of behavior according to a rule; in behavior analysis, measurement is direct (behavior is observed as it occurs) and focuses on the dimensions of frequency, duration, latency, magnitude, and interresponse time.",
    distractors: ['The process of systematically identifying the environmental variables that exert control over a behavior, typically involving a series of direct observations and experimental manipulations to discern the functional relationships between antecedents, the behavior itself, and its maintaining consequences, ultimately informing intervention design.', 'The process of critically evaluating the social significance and practical impact of behavior change on an individual\'s daily functioning and overall quality of life, considering the subjective preferences, cultural values, and long-term well-being of the person whose behavior is targeted for modification.', 'The process of systematically designing, implementing, and evaluating procedures to achieve socially significant behavior change, which encompasses precisely defining target behaviors, selecting and applying evidence-based strategies, and continuously monitoring progress to ensure effective and efficient attainment of desired behavioral outcomes.'],
    misconceptions: [
      "Measurement and data collection are the same thing",
      "Measurement in ABA always involves counting discrete responses",
      "Measurement is only necessary during the intervention phase"
    ],
    taskItem: "C.01",
    category: "Measurement"
  },
  {
    id: "rr-magnitude",
    term: "Magnitude",
    domain: "C",
    correctDefinition: "A dimensional quantity of behavior referring to the physical force or intensity of a response, measured on a physical scale appropriate to the response (e.g., decibels for vocal behavior, pounds of pressure for physical behavior).",
    distractors: ['A dimensional quantity of behavior referring to the total number of responses emitted during an observation period, which is typically used for behaviors with discrete onsets and offsets.', 'A dimensional quantity of behavior referring to the elapsed time from the onset of a stimulus to the initiation of a response, indicating how quickly an individual reacts to a cue.', 'A dimensional quantity of behavior referring to the proportion of time a behavior is occurring within a specified observation period, often estimated through interval recording procedures.'],
    misconceptions: [
      "Magnitude is the same as frequency",
      "Magnitude can only be measured for vocal behaviors",
      "Magnitude is not a standard dimensional quantity in behavior analysis"
    ],
    taskItem: "C.01",
    category: "Measurement"
  },
  {
    id: "rr-percentage",
    term: "Percentage",
    domain: "C",
    correctDefinition: "A derived measure expressing the number of responses in a category as a proportion of the total number of responses or opportunities, multiplied by 100; useful for comparing performance across sessions with different numbers of opportunities.",
    distractors: ['A derived measure expressing the total number of correct responses emitted during an observation period, often used when comparing performance across individuals or different tasks, and is measured using direct observation methods that yield reliable and valid data.', 'A derived measure expressing the number of responses per unit of time during an observation period, which is useful for comparing the rate of behavior across varying observation durations.', 'A derived measure expressing the proportion of time during an observation period in which a behavior is occurring, providing an estimate of the overall prevalence of a specific behavior, defined as anything an organism does that can be measured in terms of its physical dimensions.'],
    misconceptions: [
      "Percentage is the same as rate",
      "Percentage is always the most appropriate measure for skill acquisition data",
      "A percentage of 100% always indicates mastery of a skill"
    ],
    taskItem: "C.01",
    category: "Measurement"
  },
  {
    id: "rr-reliability",
    term: "Reliability",
    domain: "C",
    correctDefinition: "The consistency of a measurement procedure; in behavior analysis, reliability is typically assessed through interobserver agreement (IOA), which measures the degree to which two independent observers record the same data for the same behavior.",
    distractors: ['The consistency of a measurement procedure; in behavior analysis, this is typically assessed through social validity ratings, which measure the degree to which an intervention is acceptable to consumers.', 'The consistency of a measurement procedure; in behavior analysis, this is typically assessed through external validity, which measures the degree to which findings can be generalized to other settings.', 'The consistency of a measurement procedure; in behavior analysis, this is typically assessed through sensitivity to change, which measures the degree to which a procedure detects subtle behavioral shifts.'],
    misconceptions: [
      "Reliability and validity are the same thing",
      "High reliability guarantees high validity",
      "Reliability is only relevant for continuous measurement procedures"
    ],
    taskItem: "C.06",
    category: "Measurement"
  },
  {
    id: "rr-believability",
    term: "Believability",
    domain: "C",
    correctDefinition: "The degree to which data and their graphical display are convincing to consumers; in behavior analysis, believability is enhanced by clear operational definitions, high interobserver agreement, and transparent data display practices.",
    distractors: ['The degree to which data and their graphical display are convincing to consumers; in behavior analysis, this is enhanced by accurate measurement, which captures the true value of the target behavior.', 'The degree to which data and their graphical display are convincing to consumers; in behavior analysis, this is enhanced by social validity, which considers the acceptability of the intervention.', 'The degree to which data and their graphical display are convincing to consumers; in behavior analysis, this is enhanced by clinical significance, which addresses the meaningfulness of behavior change.'],
    misconceptions: [
      "Believability is the same as reliability",
      "Believability is only relevant for published research, not clinical practice",
      "High believability is guaranteed by high interobserver agreement"
    ],
    taskItem: "C.06",
    category: "Measurement"
  },
  {
    id: "rr-data",
    term: "Data",
    domain: "C",
    correctDefinition: "Quantitative records of the dimensional quantities of behavior collected through systematic observation; in behavior analysis, data are used to make decisions about intervention effectiveness and to demonstrate accountability.",
    distractors: ['Quantitative records of the dimensional quantities of behavior collected through systematic observation; these are qualitative descriptions obtained from clinical interviews and observations.', 'Quantitative records of the dimensional quantities of behavior collected through systematic observation; these are numerical summaries of group performance used to evaluate program efficacy.', 'Quantitative records of the dimensional quantities of behavior collected through systematic observation; these are records of the environmental events that precede and follow a behavior.'],
    misconceptions: [
      "Data are only necessary for research, not clinical practice",
      "Anecdotal reports from caregivers qualify as behavioral data",
      "Data collection is only required for problem behaviors, not skill acquisition targets"
    ],
    taskItem: "C.01",
    category: "Measurement"
  },
  {
    id: "rr-graph",
    term: "Graph",
    domain: "C",
    correctDefinition: "A visual display of behavioral data that allows practitioners to identify trends, level changes, and variability in the dependent variable across conditions; the primary tool for data-based decision making in behavior analysis.",
    distractors: ['A visual display of behavioral data that allows practitioners to identify trends, level changes, and variability in the dependent variable across conditions; this is a written summary of data.', 'A visual display of behavioral data that allows practitioners to identify trends, level changes, and variability in the dependent variable across conditions; this is a statistical analysis of data.', 'A visual display of behavioral data that allows practitioners to identify trends, level changes, and variability in the dependent variable across conditions; this is a table of numerical data.'],
    misconceptions: [
      "Graphs are only necessary for published research, not clinical practice",
      "Statistical analysis is more informative than visual analysis of graphs",
      "Graphs are only used to display frequency data"
    ],
    taskItem: "C.04",
    category: "Measurement"
  },
  {
    id: "rr-line-graph",
    term: "Line Graph",
    domain: "C",
    correctDefinition: "The most common data display format in behavior analysis, in which data points representing the value of the dependent variable at each measurement occasion are connected by lines; allows visual identification of trends, level changes, and variability.",
    distractors: ['A common data display format in behavior analysis, in which the height of each vertical bar represents the value of the dependent variable for discrete conditions; it is primarily used for comparing independent variables.', 'A common data display format in behavior analysis, in which the cumulative total of responses is plotted over time, showing response rate through the slope of the line; it never decreases across sessions.', 'A common data display format in behavior analysis, in which each data point represents the co-occurrence of two variables, showing the relationship between them; primarily used for correlation, defined as anything an organism does that can be measured in terms of its physical dimensions.'],
    misconceptions: [
      "Line graphs are only used for continuous data",
      "Bar graphs are preferred over line graphs for displaying behavioral data in ABA",
      "Line graphs can only display one dependent variable at a time"
    ],
    taskItem: "C.04",
    category: "Measurement"
  },
  {
    id: "rr-scatterplot",
    term: "Scatterplot",
    domain: "C",
    correctDefinition: "A data display format in which each data point represents the co-occurrence of two variables; in behavior analysis, scatterplots are used to identify the temporal distribution of behavior across times of day or days of the week.",
    distractors: ['A data display format in which data points representing the value of a dependent variable at each measurement occasion are connected by lines, used to identify trends and level changes over time.', 'A data display format in which the height of each bar represents the value of the dependent variable for different conditions, primarily used for comparing the effects of discrete experimental manipulations.', 'A data display format in which the cumulative total of responses is plotted over time, where the slope indicates the rate of responding and the line never decreases as observations progress.'],
    misconceptions: [
      "Scatterplots in ABA are used to show the relationship between two continuous variables",
      "Scatterplots are the same as line graphs",
      "Scatterplots are only used for functional assessment purposes"
    ],
    taskItem: "C.04",
    category: "Measurement"
  },
  {
    id: "rr-local-response-rate",
    term: "Local Response Rate",
    domain: "C",
    correctDefinition: "The rate of responding during a specific portion of a session or interval, as opposed to the overall rate across the entire session; used to identify within-session patterns such as post-reinforcement pauses.",
    distractors: ['The average rate of responding calculated across all sessions within a specific experimental phase, indicating the general level of performance under a particular set of conditions.', 'The rate of responding during the initial trials or segments of each session, often used to assess warm-up effects or the initial impact of a given stimulus condition.', 'The rate of responding observed in the natural environment compared to the rate observed in a controlled training setting, used for assessing generalization of behavioral skills.'],
    misconceptions: [
      "Local response rate is the same as overall response rate",
      "Local response rate is only relevant for fixed-ratio schedules",
      "Local response rate cannot be measured using a standard line graph"
    ],
    taskItem: "C.04",
    category: "Measurement"
  },
  {
    id: "rr-overall-response-rate",
    term: "Overall Response Rate",
    domain: "C",
    correctDefinition: "The average rate of responding calculated across an entire session or observation period, obtained by dividing the total number of responses by the total observation time; contrasted with local response rate.",
    distractors: ['The rate of responding during a specific portion of a session or interval, used to identify within-session patterns such as post-reinforcement pauses or accelerations in behavior.', 'The rate of responding that is typical for a given individual across all conditions, reflecting their general behavioral output and serving as a baseline for comparison.', 'The rate of responding observed in the natural environment compared to the rate observed in a controlled training setting, used for assessing the ecological validity of interventions.'],
    misconceptions: [
      "Overall response rate and local response rate provide the same information",
      "Overall response rate is the same as frequency",
      "Overall response rate is always the most informative measure of behavior"
    ],
    taskItem: "C.04",
    category: "Measurement"
  },
  {
    id: "rr-split-middle-line-of-progress",
    term: "Split-Middle Line of Progress",
    domain: "C",
    correctDefinition: "A method for drawing a trend line through behavioral data by dividing the data into two halves, finding the median rate and median time point for each half, and drawing a line through these two points; used for visual analysis and projection.",
    distractors: ['A method for calculating the mean rate of behavior across an entire experimental phase to determine the average performance level, often represented by a horizontal line, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'A method for identifying the level change between two adjacent phases by comparing the average data points in each phase, used to assess the immediate impact of an intervention, which provides objective information about the current level and trend of the target behavior.', 'A method for calculating the variability of data within a phase to assess the consistency of responding, typically represented by a standard deviation or range of data points, which provides objective information about the current level and trend of the target behavior.'],
    misconceptions: [
      "The split-middle line is the same as a least-squares regression line",
      "The split-middle line can only be drawn for phases with an even number of data points",
      "The split-middle line is only used for accelerating trends"
    ],
    taskItem: "C.04",
    category: "Measurement"
  },
  {
    id: "rr-scatterplot-recording",
    term: "Scatterplot Recording",
    domain: "H",
    correctDefinition: "A data collection method used in functional assessment in which the occurrence of a target behavior is recorded across time blocks (e.g., 30-minute intervals) to identify temporal patterns and potential antecedent conditions associated with the behavior.",
    distractors: ['A data collection method used in functional assessment in which the antecedents, behaviors, and consequences of each behavioral episode are recorded in sequential order for analysis, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'A data collection method used in functional assessment in which behavior is recorded during fixed intervals to estimate its prevalence across time, typically using partial or whole interval procedures.', 'A data collection method used in functional assessment in which the duration of each behavioral episode is recorded from its onset to its offset, providing a measure of response persistence, measured from the onset of the response to its offset, yielding a total time measure.'],
    misconceptions: [
      "Scatterplot recording is the same as ABC recording",
      "Scatterplot recording can identify the function of behavior",
      "Scatterplot recording is only used for high-rate behaviors"
    ],
    taskItem: "H.06",
    category: "Assessment"
  },
  {
    id: "rr-contingency-reversal",
    term: "Contingency Reversal",
    domain: "H",
    correctDefinition: "A procedure used in reversal designs in which the contingency that was maintaining one behavior is shifted to maintain a different behavior, rather than simply withdrawing the intervention; used when the target behavior is unlikely to reverse to baseline with simple withdrawal.",
    distractors: ['A procedure in which the intervention is withdrawn to return behavior to baseline levels, demonstrating experimental control over the intervention\'s effect, often implemented when the target behavior is expected to revert to its original rate with intervention removal.', 'A procedure in which the reinforcer is changed to a different stimulus to test the function of behavior, such as a preference assessment, typically conducted to identify effective consequences rather than to evaluate functional relations in a reversal design.', 'A procedure in which the schedule of reinforcement is changed from continuous to intermittent to promote maintenance and generalization of the target behavior, primarily focusing on response persistence rather than experimental control of a specific contingency.'],
    misconceptions: [
      "Contingency reversal is the same as withdrawing the intervention",
      "Contingency reversal always produces a complete reversal to baseline levels",
      "Contingency reversal is only used in the A-B-A-B design"
    ],
    taskItem: "H.07",
    category: "Selecting Interventions"
  },
  {
    id: "rr-functionally-equivalent",
    term: "Functionally Equivalent",
    domain: "H",
    correctDefinition: "Two or more behaviors that serve the same behavioral function (i.e., are maintained by the same type of reinforcement); in function-based intervention, the replacement behavior must be functionally equivalent to the problem behavior to be effective.",
    distractors: ['Two or more behaviors that are physically incompatible and cannot occur simultaneously, such as sitting and running, which are typically addressed through differential reinforcement of alternative behaviors rather than by shared maintaining variables.', 'Two or more behaviors that are topographically similar but serve different functions or are maintained by different consequences, requiring a functional assessment to differentiate their controlling variables and inform intervention strategies.', 'Two or more behaviors that are maintained by different types of reinforcement, such as attention versus escape, indicating distinct functional relations that necessitate separate intervention approaches for each behavior.'],
    misconceptions: [
      "Functionally equivalent behaviors must look similar to the problem behavior",
      "Any alternative behavior can replace a problem behavior regardless of function",
      "Functionally equivalent behaviors are the same as physically incompatible behaviors"
    ],
    taskItem: "H.08",
    category: "Selecting Interventions"
  },
  {
    id: "rr-contingency-space-analysis",
    term: "Contingency Space Analysis",
    domain: "H",
    correctDefinition: "A descriptive assessment method in which the conditional probabilities of a consequence given the behavior and given the absence of the behavior are plotted in a two-dimensional space to evaluate the contingency between behavior and consequence.",
    distractors: ['A method for analyzing the relationship between antecedents and behavior in a functional assessment, such as a conditional probability analysis, which primarily focuses on the events preceding a behavior rather than its consequences.', 'A method for calculating the probability that a behavior will occur in a given setting or under specific environmental conditions, which typically involves descriptive data collection without experimental manipulation of consequences.', 'A method for comparing the rate of behavior across different conditions in a functional analysis to identify maintaining variables, often involving analogue conditions rather than descriptive plotting of conditional probabilities.'],
    misconceptions: [
      "Contingency space analysis can demonstrate a functional relationship between behavior and consequences",
      "Contingency space analysis is the same as conditional probability analysis",
      "Contingency space analysis is only used for behaviors maintained by attention"
    ],
    taskItem: "H.08",
    category: "Assessment"
  },
  {
    id: "rr-interview-informed-synthesized-contingency-analysis",
    term: "Interview-Informed Synthesized Contingency Analysis",
    domain: "H",
    correctDefinition: "A functional analysis format in which the test condition is designed to replicate the specific antecedent and consequence conditions identified through caregiver interview, rather than using standard conditions; allows functional analysis to be conducted in natural settings.",
    distractors: ['A functional assessment method that relies solely on caregiver interviews without direct observation or experimental manipulation, which is considered an indirect assessment and does not involve experimental testing of functional relations.', 'A functional analysis format that uses standard conditions (attention, escape, alone, play) in a highly controlled clinic setting, which is a traditional functional analysis and does not specifically incorporate individualized synthesized conditions.', 'A descriptive assessment method in which behavior is observed in the natural environment without experimental manipulation or intervention, which aims to identify correlations rather than demonstrating causal functional relations.'],
    misconceptions: [
      "IISCA is the same as a standard functional analysis",
      "IISCA can only be used for behaviors maintained by attention",
      "IISCA does not require manipulation of antecedents and consequences"
    ],
    taskItem: "H.08",
    category: "Assessment"
  },
  {
    id: "rr-bacb-supervision-model",
    term: "BACB Supervision Model",
    domain: "I",
    correctDefinition: "The framework established by the BACB for the provision of supervision to individuals accruing fieldwork experience; specifies requirements for supervisor qualifications, supervision format (individual and group), frequency, and documentation.",
    distractors: ['A model for providing clinical supervision to clients receiving behavior-analytic services, focusing on treatment integrity and fidelity, rather than the training and credentialing of individuals pursuing certification in behavior analysis.', 'A model for evaluating the performance of behavior technicians in clinical settings based on predefined competency checklists, which is a component of supervision but not the overarching framework for credentialing experience.', 'A model for training new behavior analysts in evidence-based intervention procedures through didactic instruction and role-play, which describes aspects of training but not the comprehensive requirements for fieldwork experience.'],
    misconceptions: [
      "The BACB supervision model applies only to BCaBAs, not RBTs",
      "Group supervision can fully substitute for individual supervision under the BACB model",
      "Any BCBA can provide supervision regardless of their experience level"
    ],
    taskItem: "I.07",
    category: "Supervision"
  },
  {
    id: "rr-supervision-documentation",
    term: "Supervision Documentation",
    domain: "I",
    correctDefinition: "The written records required by the BACB to verify that supervision was provided in accordance with BACB standards; includes records of supervision activities, hours, and supervisee performance.",
    distractors: ['The written records of client progress that supervisors review during supervision meetings to guide clinical decision-making, which primarily pertains to client outcomes rather than the administrative requirements of supervision.', 'The written records of the supervisee\'s clinical notes regarding client sessions and intervention implementation, which are part of clinical practice but distinct from the specific records required for supervision compliance.', 'The written records of client data sheets that track the occurrence of target behaviors and intervention effectiveness, which are essential for client progress but not the sole focus of supervision compliance records.'],
    misconceptions: [
      "Supervision documentation is only required for supervisees accruing BACB experience hours",
      "Verbal confirmation of supervision activities is sufficient documentation",
      "Supervision documentation is the responsibility of the supervisee, not the supervisor"
    ],
    taskItem: "I.07",
    category: "Supervision"
  },
  {
    id: "rr-supervisor-self-assessment",
    term: "Supervisor Self-Assessment",
    domain: "I",
    correctDefinition: "The process by which a supervisor evaluates their own supervisory skills, knowledge, and effectiveness; required by the BACB Ethics Code as part of maintaining competence in supervision.",
    distractors: ['The process by which a supervisee evaluates the quality of supervision they are receiving to provide feedback to their supervisor, which is supervisee feedback rather than the supervisor\'s self-evaluation of their own performance.', 'The process by which a supervisor evaluates the clinical skills of their supervisees through direct observation and performance review, which is a component of supervision but not the supervisor\'s introspection on their own practice.', 'The process by which a supervisor evaluates the effectiveness of the interventions they design for their clients\' behavior change, which is program evaluation rather than a self-reflection on one\'s supervisory competence.'],
    misconceptions: [
      "Supervisor self-assessment is optional and not required by the BACB",
      "Supervisor self-assessment is the same as receiving feedback from supervisees",
      "Supervisor self-assessment only applies to supervisors who are new to their role"
    ],
    taskItem: "I.07",
    category: "Supervision"
  },
  {
    id: "rr-feedback-delivery-in-supervision",
    term: "Feedback Delivery in Supervision",
    domain: "I",
    correctDefinition: "The process of providing specific, timely, and constructive information to a supervisee about their performance; effective feedback in supervision is behavior-specific, delivered close in time to the observed behavior, and includes both positive and corrective components.",
    distractors: ['The process of evaluating a supervisee\'s overall competence and assigning a performance rating based on subjective criteria and general impressions of their work, which lacks the specificity and behavioral focus of effective feedback.', 'The process of providing a supervisee with positive praise and encouragement, regardless of their actual performance, to boost morale and foster a positive working relationship, which is insufficient for skill development.', 'The process of documenting a supervisee\'s progress and challenges over time, typically through written reports, without direct interaction or immediate behavioral guidance, which describes record-keeping rather than active feedback.'],
    misconceptions: [
      "Feedback in supervision should focus primarily on corrective information",
      "Feedback is only necessary when a supervisee makes a significant error",
      "Written feedback is always more effective than verbal feedback in supervision"
    ],
    taskItem: "I.10",
    category: "Supervision"
  },
  {
    id: "rr-behavior-skills-training",
    term: "Behavior Skills Training (BST)",
    domain: "G",
    correctDefinition: "A training package consisting of four components: instruction (telling the learner what to do), modeling (demonstrating the skill), rehearsal (having the learner practice), and feedback (providing corrective and positive feedback); used to teach a wide range of skills.",
    distractors: ['A training package comprised of antecedent manipulations, consequence strategies, skill acquisition, and generalization programming, all tailored to address specific behavioral deficits effectively, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'A training package consisting of functional assessment, positive behavior support plan development, implementation of interventions, and ongoing data collection; used for challenging behaviors, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'A training package that includes task analysis, forward chaining, backward chaining, and total task presentation, specifically used for teaching complex sequences of behaviors systematically, which breaks a complex skill into a sequence of discrete, teachable component steps.'],
    misconceptions: [
      "BST is only appropriate for training caregivers and staff, not clients",
      "BST requires all four components to be delivered in a fixed sequence",
      "BST is the same as performance management"
    ],
    taskItem: "G.01",
    category: "Personnel Training"
  },
  {
    id: "rr-independent-group-contingency",
    term: "Independent Group Contingency",
    domain: "H",
    correctDefinition: "A group contingency in which the same contingency is applied to all members of the group, but each individual earns reinforcement based solely on their own behavior; group members do not affect each other's access to reinforcement.",
    distractors: ['A group contingency in which the entire group earns reinforcement if a specific, designated member meets the criterion, making the group\'s success dependent on that individual\'s performance.', 'A group contingency in which all members of the group must meet a predetermined criterion for the entire group to earn reinforcement; this arrangement promotes collective effort and mutual support.', 'A group contingency in which reinforcement is delivered to the entire group only if the average performance of all members meets or exceeds a set standard of behavior.'],
    misconceptions: [
      "Independent group contingencies are the same as interdependent group contingencies",
      "Independent group contingencies create peer pressure to perform",
      "Independent group contingencies are the same as individual contingencies"
    ],
    taskItem: "H.02",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-antecedent-based-intervention",
    term: "Antecedent-Based Intervention",
    domain: "H",
    correctDefinition: "A behavior-change procedure that modifies antecedent conditions (discriminative stimuli, motivating operations, or setting events) to prevent problem behavior or increase appropriate behavior before it occurs.",
    distractors: ['A behavior-change procedure that focuses on modifying the consequences following a behavior to either increase or decrease its future frequency and overall strength within the environment.', 'A behavior-change procedure that involves teaching new, appropriate skills or behaviors to an individual, specifically designed to replace existing challenging behaviors effectively.', 'A behavior-change procedure that involves presenting a stimulus immediately after a behavior occurs, specifically to decrease the future probability of that behavior\'s recurrence.'],
    misconceptions: [
      "Antecedent-based interventions are the same as environmental modifications",
      "Antecedent-based interventions do not address the function of behavior",
      "Antecedent-based interventions are only appropriate as a last resort"
    ],
    taskItem: "H.04",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-extinction-procedure",
    term: "Extinction Procedure",
    domain: "H",
    correctDefinition: "A behavior-change procedure in which the reinforcer that previously maintained a problem behavior is identified and withheld contingent on the occurrence of that behavior; most effective when combined with reinforcement of alternative behavior.",
    distractors: ['A behavior-change procedure in which an aversive stimulus is presented immediately following a behavior to decrease the future likelihood of that behavior, often causing discomfort or pain.', 'A behavior-change procedure in which the environmental conditions that precede a behavior are altered to prevent its occurrence or evoke an alternative, more appropriate behavior, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'A behavior-change procedure in which the discriminative stimulus that signals the availability of reinforcement for a behavior is systematically removed, making reinforcement unavailable, in the presence of which a behavior has been reinforced and is therefore more likely to occur.'],
    misconceptions: [
      "Extinction is the same as ignoring",
      "Extinction is appropriate for all problem behaviors regardless of function",
      "Extinction always produces an immediate and permanent decrease in behavior"
    ],
    taskItem: "H.03",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-generalization-programming",
    term: "Generalization Programming",
    domain: "H",
    correctDefinition: "The systematic application of strategies to promote the occurrence of trained behaviors in untrained settings, with untrained people, and under untrained conditions; includes training sufficient exemplars, training loosely, and using natural contingencies.",
    distractors: ['The systematic application of strategies to measure whether a trained behavior occurs in untrained settings or with untrained people; this primarily involves data collection and analysis, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'The systematic application of strategies to train a behavior until it occurs in all relevant settings and under all conditions, often requiring extensive and time-consuming direct instruction, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'The systematic application of strategies to identify the specific settings in which a behavior should occur and the relevant stimuli that should evoke the behavior in those contexts, defined as anything an organism does that can be measured in terms of its physical dimensions.'],
    misconceptions: [
      "Generalization programming is the same as generalization",
      "Generalization programming is only necessary for learners with autism",
      "Generalization programming is only required after a behavior has been mastered"
    ],
    taskItem: "H.06",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-social-skills-training",
    term: "Social Skills Training",
    domain: "H",
    correctDefinition: "A behavior-change approach that uses behavioral techniques (modeling, rehearsal, feedback, reinforcement) to teach specific social behaviors; targets skills such as conversation, perspective-taking, and peer interaction.",
    distractors: ['A behavior-change approach that uses social stories to teach appropriate social behaviors through narrative descriptions, providing clear expectations and explanations for social situations.', 'A behavior-change approach that uses peer-mediated strategies to improve social skills through peer interaction, where trained peers facilitate positive social exchanges.', 'A behavior-change approach that uses video modeling to teach social and communication skills through observation, allowing learners to imitate appropriate behaviors displayed by models.'],
    misconceptions: [
      "Social skills training is the same as social stories",
      "Social skills training is only appropriate for individuals with autism",
      "Social skills training is the same as BST"
    ],
    taskItem: "H.06",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-verbal-behavior-intervention",
    term: "Verbal Behavior Intervention",
    domain: "H",
    correctDefinition: "A behavior-analytic approach to language intervention based on Skinner's analysis of verbal behavior; targets the development of functional verbal operants (mands, tacts, intraverbals, echoics) rather than focusing on the form of language.",
    distractors: ['A behavior-analytic approach to language intervention based on developmental language milestones and sequences.', 'A behavior-analytic approach to language intervention based on the structure and grammar of language and its rules.', 'A behavior-analytic approach to language intervention based on cognitive theories of language development.'],
    misconceptions: [
      "Verbal behavior intervention is the same as PECS",
      "Verbal behavior intervention is only appropriate for non-verbal learners",
      "Verbal behavior intervention is the same as speech-language therapy"
    ],
    taskItem: "H.06",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-milieu-teaching",
    term: "Milieu Teaching",
    domain: "H",
    correctDefinition: "A naturalistic language intervention approach that uses environmental arrangement and incidental teaching procedures to promote communication in the natural environment; includes mand-model, time delay, and incidental teaching procedures.",
    distractors: ['A naturalistic language intervention approach that uses structured drill practice to teach vocabulary and grammatical forms, focusing on rote memorization and repetition of target words.', 'A naturalistic language intervention approach that uses peer-mediated strategies to improve communication with peers, training classmates to facilitate language use in social contexts.', 'A naturalistic language intervention approach that uses visual supports to promote communication and understanding, providing tangible representations of language concepts for learners.'],
    misconceptions: [
      "Milieu teaching is the same as incidental teaching",
      "Milieu teaching is only appropriate for young children",
      "Milieu teaching is the same as NET"
    ],
    taskItem: "H.06",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-mastery-criterion",
    term: "Mastery Criterion",
    domain: "I",
    correctDefinition: "A predetermined level of performance that must be achieved before a learner is considered to have mastered a skill and before instruction moves to the next skill; typically specified in terms of accuracy, rate, or both across multiple sessions.",
    distractors: ['A predetermined level of performance that must be consistently demonstrated by a learner before instruction on a novel skill or task can begin, ensuring prerequisite skills are firmly established and the individual is adequately prepared for more complex learning opportunities.', 'A predetermined level of performance that reliably indicates a behavior is socially significant and profoundly valuable to the individual and their broader community, thereby establishing it as a primary target for intensive behavioral assessment and subsequent intervention.', 'A predetermined level of performance that strongly suggests a skill will spontaneously and reliably generalize to various novel settings, across different people, and under diverse conditions, thereby promoting robust functional independence and adaptability for the individual.'],
    misconceptions: [
      "Mastery criterion is the same as fluency criterion",
      "A mastery criterion of 80% is always appropriate",
      "Mastery criterion is the same as acquisition criterion"
    ],
    taskItem: "I.02",
    category: "Skill Acquisition"
  },
  {
    id: "rr-probe",
    term: "Probe",
    domain: "I",
    correctDefinition: "A brief assessment of a learner's performance on a skill, typically conducted without reinforcement or prompting, to determine the current level of the skill or whether generalization has occurred.",
    distractors: ['A brief assessment of a learner\'s behavior during a structured teaching session with reinforcement.', 'A brief assessment of a learner\'s behavior using a formal, standardized assessment instrument.', 'A brief assessment of a learner\'s behavior after a specific skill has been taught to mastery.'],
    misconceptions: [
      "Probes are the same as discrete trials",
      "Probes are only used to assess generalization",
      "Probes require reinforcement to be valid"
    ],
    taskItem: "I.02",
    category: "Skill Acquisition"
  },
  {
    id: "rr-massed-trial-instruction",
    term: "Massed Trial Instruction",
    domain: "I",
    correctDefinition: "An instructional arrangement in which multiple trials of the same target skill are presented consecutively within a session; promotes rapid acquisition but may reduce motivation and generalization.",
    distractors: ['An instructional arrangement in which trials of different target skills are interspersed within a session; promotes variety and reduces satiation, but may slow initial acquisition rates.', 'An instructional arrangement in which trials of the same target skill are distributed across multiple sessions; promotes maintenance and generalization, but may slow initial acquisition.', 'An instructional arrangement in which trials are presented at a significantly slow pace to allow for extensive processing time and reduce errors, potentially impacting efficiency.'],
    misconceptions: [
      "Massed trial instruction is the same as discrete trial training",
      "Massed trial instruction is always more effective than distributed practice",
      "Massed trial instruction is the same as intensive instruction"
    ],
    taskItem: "I.02",
    category: "Skill Acquisition"
  },
  {
    id: "rr-distributed-trial-instruction",
    term: "Distributed Trial Instruction",
    domain: "I",
    correctDefinition: "An instructional arrangement in which trials of the same target skill are interspersed with trials of other skills or activities, or distributed across a session; promotes maintenance and generalization.",
    distractors: ['An instructional arrangement in which multiple trials of the same skill are presented consecutively within a session; promotes rapid acquisition but may reduce generalization.', 'An instructional arrangement in which trials are presented exclusively in the natural environment with no structured teaching, promoting incidental learning opportunities.', 'An instructional arrangement in which trials are presented at irregular intervals with no predictable pattern, potentially impacting a learner\'s ability to anticipate demands.'],
    misconceptions: [
      "Distributed trial instruction is the same as NET",
      "Distributed trial instruction is always more effective than massed trial instruction",
      "Distributed trial instruction is the same as spaced practice"
    ],
    taskItem: "I.02",
    category: "Skill Acquisition"
  },
  {
    id: "rr-stimulus-delta-training",
    term: "Discrimination Training",
    domain: "I",
    correctDefinition: "A procedure in which a behavior is reinforced in the presence of one stimulus (SD) and not reinforced in the presence of another stimulus (SΔ); results in differential responding to the two stimuli.",
    distractors: ['A procedure in which a behavior is reinforced in the presence of all stimuli, regardless of their features, leading to overgeneralization of the trained response.', 'A procedure in which a behavior is reinforced only after a specific sequence of stimuli is presented, establishing a complex conditional chain of responses.', 'A procedure in which the learner is taught to identify the correct stimulus from an array of options through modeling and direct instruction, rather than differential reinforcement.'],
    misconceptions: [
      "Discrimination training is the same as stimulus control",
      "Discrimination training requires punishment of responses to the SΔ",
      "Discrimination training is the same as matching-to-sample"
    ],
    taskItem: "I.02",
    category: "Skill Acquisition"
  },
  {
    id: "rr-matching-to-sample",
    term: "Matching-to-Sample (MTS)",
    domain: "I",
    correctDefinition: "A procedure in which the learner is presented with a sample stimulus and must select the comparison stimulus that matches the sample from an array; used to teach conditional discriminations and stimulus equivalence relations.",
    distractors: ['A procedure in which the learner matches their behavior to a model, which is implemented systematically and evaluated through ongoing data collection to determine its effectiveness', 'A procedure in which the learner matches a verbal label to an object, which is implemented systematically and evaluated through ongoing data collection to determine its effectiveness', 'A procedure in which the learner matches a written word to a spoken word, which is implemented systematically and evaluated through ongoing data collection to determine its effectiveness'],
    misconceptions: [
      "Matching-to-sample is the same as momentary time sampling",
      "Matching-to-sample only teaches identity matching",
      "Matching-to-sample is the same as stimulus equivalence"
    ],
    taskItem: "I.02",
    category: "Skill Acquisition"
  },
  {
    id: "rr-fluency",
    term: "Fluency",
    domain: "I",
    correctDefinition: "A level of skill performance characterized by both accuracy and speed; fluent behavior is performed at a high rate with few errors and is more likely to be maintained and to generalize than behavior that is merely accurate.",
    distractors: ['A level of skill performance characterized by accuracy alone, with no consideration for the rate at which the behavior is emitted, focusing only on correctness, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'A level of skill performance characterized by speed alone, with no consideration for the accuracy of the response, prioritizing rapid completion over precision, and is measured using direct observation methods that yield reliable and valid data.', 'A level of skill performance characterized by generalization to novel stimuli and settings, emphasizing adaptability rather than the speed and accuracy of performance, in which a behavior trained under one set of conditions also occurs under different but related conditions.'],
    misconceptions: [
      "Fluency is the same as mastery",
      "Fluency is only relevant for academic skills",
      "Fluency is the same as automaticity"
    ],
    taskItem: "I.02",
    category: "Skill Acquisition"
  },
  {
    id: "rr-acquisition",
    term: "Acquisition",
    domain: "I",
    correctDefinition: "The initial learning phase in which a new behavior is being established; characterized by increasing accuracy and consistency of responding as a result of reinforcement contingencies.",
    distractors: ['The phase in which a behavior is maintained after training contingencies are removed, demonstrating its durability and resistance to extinction over time.', 'The phase in which a behavior generalizes to untrained settings and with novel stimuli, showing its adaptability beyond the original learning environment.', 'The phase in which a behavior reaches a high level of fluency and automaticity, indicating mastery and efficient performance of the skill, defined as anything an organism does that can be measured in terms of its physical dimensions.'],
    misconceptions: [
      "Acquisition is the same as mastery",
      "Acquisition is complete when the learner responds correctly on a single trial",
      "Acquisition is the same as fluency"
    ],
    taskItem: "I.02",
    category: "Skill Acquisition"
  },
  {
    id: "rr-instructional-control",
    term: "Instructional Control",
    domain: "I",
    correctDefinition: "A condition in which the learner's behavior is reliably controlled by the instructions of the teacher or caregiver; established through a history of reinforcement for following instructions and extinction for non-compliance.",
    distractors: ['A condition in which the learner', 'A condition in which the learner', 'A condition in which the learner'],
    misconceptions: [
      "Instructional control is the same as compliance",
      "Instructional control is achieved through punishment of non-compliance",
      "Instructional control is only relevant for learners with problem behavior"
    ],
    taskItem: "I.02",
    category: "Skill Acquisition"
  },
  {
    id: "rr-reinforcer-assessment",
    term: "Reinforcer Assessment",
    domain: "I",
    correctDefinition: "A systematic procedure for identifying stimuli that function as reinforcers for a specific individual; includes preference assessments followed by reinforcer evaluations to confirm that preferred stimuli actually increase behavior.",
    distractors: ['A systematic procedure for identifying the environmental events that maintain problem behavior; involves direct observation and experimental analysis of the functional relationships between antecedents, behaviors, and consequences.', 'A systematic procedure for identifying the antecedent conditions that evoke a target behavior; includes manipulating various environmental variables to determine their impact on the probability of response occurrence.', 'A systematic procedure for identifying the most effective schedule of reinforcement for maintaining a behavior over extended periods; involves comparing different reinforcement schedules to determine their relative efficacy.'],
    misconceptions: [
      "Reinforcer assessment is the same as preference assessment",
      "The most preferred stimulus in a preference assessment is always a reinforcer",
      "Reinforcer assessment is only necessary for learners who cannot communicate their preferences"
    ],
    taskItem: "I.02",
    category: "Skill Acquisition"
  },
  {
    id: "rr-skill-acquisition-program",
    term: "Skill Acquisition Program",
    domain: "I",
    correctDefinition: "A written plan that specifies the target skill, instructional procedures, prompting strategy, reinforcement schedule, mastery criterion, and data collection method for teaching a specific skill to a learner.",
    distractors: ['A written plan that specifies the target behavior for reduction, antecedent strategies, consequence interventions, and data collection methods for decreasing maladaptive behaviors in a learner.', 'A written plan that specifies the overarching educational goals for a learner, including academic and social objectives, without detailing the specific instructional steps or measurement techniques.', 'A written plan that specifies the curriculum content, teaching methodologies, and assessment tools for a broad subject area, focusing on conceptual understanding rather than individual skill mastery.'],
    misconceptions: [
      "A skill acquisition program is the same as a behavior intervention plan",
      "A skill acquisition program is the same as an IEP",
      "A skill acquisition program only specifies the reinforcement procedures"
    ],
    taskItem: "I.02",
    category: "Skill Acquisition"
  },
  {
    id: "rr-stimulus-generalization-training",
    term: "Sufficient Exemplar Training",
    domain: "I",
    correctDefinition: "A generalization programming strategy in which enough examples of the target stimulus class are trained until generalization to untrained members of the class occurs; the number of exemplars needed varies by individual and skill.",
    distractors: ['A generalization programming strategy in which a single exemplar of the target stimulus class is trained to mastery, then probes are conducted to assess generalization to untrained, similar stimuli.', 'A generalization programming strategy in which the most salient and frequently encountered exemplars of a stimulus class are trained first to ensure immediate functional responding in relevant contexts.', 'A generalization programming strategy in which the learner is taught to discriminate between relevant and irrelevant features of stimuli, promoting generalization to novel stimuli sharing critical characteristics.'],
    misconceptions: [
      "Sufficient exemplar training requires training all possible examples",
      "Sufficient exemplar training is the same as general case programming",
      "Sufficient exemplar training is only used for discrimination training"
    ],
    taskItem: "I.03",
    category: "Skill Acquisition"
  },
  {
    id: "rr-general-case-programming",
    term: "General Case Programming",
    domain: "I",
    correctDefinition: "A generalization programming strategy in which the full range of stimulus variations and response requirements in the natural environment is analyzed, and instruction is designed to cover the full range of relevant stimulus-response variations.",
    distractors: ['A generalization programming strategy in which a single, representative exemplar of a skill is taught to mastery, and then generalization to other contexts is assessed without further direct instruction.', 'A generalization programming strategy in which multiple, varied exemplars of a target skill are taught until the learner demonstrates generalization to untrained, similar stimuli and response topographies.', 'A generalization programming strategy in which instruction occurs exclusively in the natural environment, utilizing naturally occurring cues and consequences to promote the acquisition and maintenance of skills.'],
    misconceptions: [
      "General case programming is the same as sufficient exemplar training",
      "General case programming requires training in all natural settings",
      "General case programming is only appropriate for vocational skills"
    ],
    taskItem: "I.03",
    category: "Skill Acquisition"
  },
  {
    id: "rr-abc-recording",
    term: "ABC Recording",
    domain: "C",
    correctDefinition: "A descriptive assessment method in which the observer records the antecedent events, the behavior, and the consequent events for each behavioral episode; used to identify patterns in the three-term contingency.",
    distractors: ['An experimental assessment method in which specific antecedents and consequences are systematically manipulated to determine their causal relationship with a target behavior; used to identify functional relations.', 'A measurement method in which the observer records whether the behavior occurred at any point during a predetermined interval, providing an estimate of the overall prevalence of the behavior.', 'A descriptive assessment method in which the frequency or rate of a behavior is systematically recorded across various settings and times to identify potential environmental influences on its occurrence.'],
    misconceptions: [
      "ABC recording can demonstrate a functional relationship between behavior and consequences",
      "ABC recording is the same as functional analysis",
      "ABC recording is only used for problem behaviors"
    ],
    taskItem: "F.01",
    category: "Assessment"
  },
  {
    id: "rr-act",
    term: "Acceptance and Commitment Therapy (ACT)",
    domain: "E",
    correctDefinition: "A third-wave cognitive-behavioral therapy that uses acceptance and mindfulness strategies alongside commitment and behavior change strategies to increase psychological flexibility; has been integrated with behavior analysis in some clinical applications.",
    distractors: ['A behavior-analytic intervention that primarily uses differential reinforcement of alternative behaviors to reduce the frequency of maladaptive responses, focusing on contingency management strategies.', 'A cognitive therapy that focuses on identifying and challenging irrational thoughts and beliefs, aiming to restructure cognitive processes to improve emotional regulation and overt behavior, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'A behavioral intervention that utilizes self-management strategies, including goal setting and self-monitoring, to promote adherence to treatment protocols and improve overall behavioral outcomes.'],
    misconceptions: [
      "ACT is incompatible with behavior analysis",
      "ACT is the same as cognitive-behavioral therapy",
      "ACT is only used for adults with anxiety disorders"
    ],
    taskItem: "E.01",
    category: "Ethics"
  },
  {
    id: "rr-adjunctive-behaviors",
    term: "Adjunctive Behaviors",
    domain: "B",
    correctDefinition: "Behaviors that are induced by schedules of reinforcement but are not directly reinforced; also called schedule-induced behaviors; examples include polydipsia induced by intermittent food schedules.",
    distractors: ['Behaviors that are directly reinforced on a continuous schedule of reinforcement, resulting in a steady and predictable rate of responding by the organism.', 'Behaviors that are maintained by the direct sensory consequences they produce, occurring in the absence of any social or external reinforcement, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'Behaviors that compete with the target behavior for reinforcement during training, often interfering with the acquisition of the desired response topography.'],
    misconceptions: [
      "Adjunctive behaviors are the same as collateral behaviors",
      "Adjunctive behaviors are always problem behaviors",
      "Adjunctive behaviors are directly reinforced by the schedule"
    ],
    taskItem: "B.04",
    category: "Schedules of Reinforcement"
  },
  {
    id: "rr-alternative-schedule",
    term: "Alternative Schedule (Alt)",
    domain: "B",
    correctDefinition: "A compound schedule in which reinforcement is delivered when either of two component schedule requirements is met first; the organism can satisfy either the ratio or the interval requirement to obtain reinforcement.",
    distractors: ['A compound schedule in which two or more component schedules are presented sequentially, each associated with a distinct discriminative stimulus, and reinforcement is delivered for completing each component.', 'A compound schedule in which reinforcement is delivered for engaging in a behavior that serves as a functional replacement for an undesirable behavior, often used in differential reinforcement procedures.', 'A compound schedule in which the requirements for reinforcement systematically change over time, requiring the organism to adapt its response rate to maintain access to the reinforcer.'],
    misconceptions: [
      "Alternative schedules are the same as concurrent schedules",
      "Alternative schedules are the same as conjunctive schedules",
      "Alternative schedules are only used in basic research"
    ],
    taskItem: "B.04",
    category: "Schedules of Reinforcement"
  },
  {
    id: "rr-anecdotal-observation",
    term: "Anecdotal Observation",
    domain: "C",
    correctDefinition: "An informal, unsystematic observation of behavior that is recorded from memory or in narrative form; lacks the rigor of systematic direct observation and is subject to observer bias.",
    distractors: ['A systematic observation method in which trained observers record specific behaviors using a predefined operational definition within a structured environment, ensuring high interobserver agreement.', 'An observation method in which the occurrence or non-occurrence of predefined behaviors is recorded using a standardized checklist, commonly employed for assessing skill repertoires or behavioral deficits.', 'An observation method in which the observer records whether a behavior occurred at any point during a specific interval, providing an estimate of the behavior\'s overall prevalence or duration.'],
    misconceptions: [
      "Anecdotal observation is the same as ABC narrative recording",
      "Anecdotal observation is a valid substitute for systematic direct observation",
      "Anecdotal observation is the same as indirect assessment"
    ],
    taskItem: "C.02",
    category: "Measurement"
  },
  {
    id: "rr-antecedent-stimulus-class",
    term: "Antecedent Stimulus Class",
    domain: "B",
    correctDefinition: "A group of stimuli that share the same discriminative function; all members of the class evoke the same operant response because they have all been associated with reinforcement for that response.",
    distractors: ['A collection of stimuli that are physically similar in form or structure, such as color or shape, and reliably evoke similar unconditioned responses from an organism.', 'A group of stimuli that have all been consistently paired with a specific unconditioned stimulus, leading to the acquisition of the same conditioned response in the organism.', 'A set of stimuli that consistently alter the effectiveness of a reinforcer or punisher, thus influencing the probability of a specific operant response occurring in that context.'],
    misconceptions: [
      "Antecedent stimulus class is the same as stimulus equivalence class",
      "All members of an antecedent stimulus class must look the same",
      "Antecedent stimulus class is the same as functional stimulus class"
    ],
    taskItem: "B.07",
    category: "Stimulus Control"
  },
  {
    id: "rr-arbitrarily-applicable-relational-responding",
    term: "Arbitrarily Applicable Relational Responding",
    domain: "B",
    correctDefinition: "The ability to respond to stimuli in terms of abstract relations (e.g., same as, opposite of, more than) that are not determined by the physical properties of the stimuli; the foundation of relational frame theory.",
    distractors: ['The capacity to respond to stimuli based on their inherent physical characteristics, such as size or texture, rather than on learned or socially constructed conceptual connections.', 'The ability to precisely imitate the actions of another individual, even when the observed behavior is novel or complex, without explicit training or differential reinforcement for the imitation.', 'The capacity to respond to stimuli based on their temporal sequencing or spatial arrangement, where one event reliably precedes another, influencing the likelihood of a subsequent behavior.'],
    misconceptions: [
      "Arbitrarily applicable relational responding is the same as stimulus equivalence",
      "Arbitrarily applicable relational responding only applies to verbal behavior",
      "Arbitrarily applicable relational responding is the same as concept formation"
    ],
    taskItem: "B.14",
    category: "Stimulus Control"
  },
  {
    id: "rr-arbitrary-relations",
    term: "Arbitrary Relations",
    domain: "B",
    correctDefinition: "Relations between stimuli that are established by social convention rather than by the physical properties of the stimuli; the basis of symbolic behavior and language.",
    distractors: ['Connections between stimuli that are inherently determined by their physical attributes, such as their color or form, and are independent of any prior learning experiences.', 'Relations between stimuli that are established directly through respondent conditioning procedures, such as when a neutral stimulus is repeatedly paired with an unconditioned reinforcer.', 'Connections between stimuli that are based on their consistent temporal contiguity, where one stimulus reliably occurs immediately before another, influencing subsequent behavior.'],
    misconceptions: [
      "Arbitrary relations are the same as derived relations",
      "Arbitrary relations are the same as nonarbitrary relations",
      "Arbitrary relations are only relevant for verbal behavior"
    ],
    taskItem: "B.14",
    category: "Stimulus Control"
  },
  {
    id: "rr-arbitrary-stimulus-class",
    term: "Arbitrary Stimulus Class",
    domain: "B",
    correctDefinition: "A stimulus class whose members share a common behavioral function but do not share common physical properties; membership is determined by learning history rather than physical similarity.",
    distractors: ['A stimulus class whose members possess distinct physical properties, such as being red or having a specific shape, and reliably evoke similar unconditioned responses in an organism.', 'A stimulus class whose members have been consistently paired with the same unconditioned reinforcer, leading to the acquisition of similar emotional or physiological responses.', 'A stimulus class whose members all serve as discriminative stimuli for the same operant response due to their shared physical features, guiding behavior in specific contexts.'],
    misconceptions: [
      "Arbitrary stimulus classes are the same as feature stimulus classes",
      "Arbitrary stimulus classes require formal similarity among members",
      "Arbitrary stimulus classes are the same as functional stimulus classes"
    ],
    taskItem: "B.07",
    category: "Stimulus Control"
  },
  {
    id: "rr-automatic-contingency",
    term: "Automatic Contingency",
    domain: "B",
    correctDefinition: "A contingency in which the consequence of a behavior is produced directly by the behavior itself, independent of the mediation of another person; the basis of automatic reinforcement and automatic punishment.",
    distractors: ['A contingency in which the delivery of reinforcement is controlled by a pre-set timer or schedule, independent of the organism\'s behavior, rather than being a direct consequence.', 'A contingency in which reinforcement is delivered only after a specific number of responses have occurred, regardless of the individual\'s motivation or the environmental context.', 'A contingency in which the consequence of a behavior is consistently mediated by another individual, rather than being a direct and inherent outcome of the behavior itself.'],
    misconceptions: [
      "Automatic contingencies are the same as automatic reinforcement",
      "Automatic contingencies are always reinforcing",
      "Automatic contingencies are the same as natural contingencies"
    ],
    taskItem: "B.01",
    category: "Reinforcement"
  },
  {
    id: "rr-automaticity-of-reinforcement",
    term: "Automaticity of Reinforcement",
    domain: "B",
    correctDefinition: "The principle that reinforcement strengthens behavior without the individual's awareness or understanding of the contingency; behavior can be reinforced even when the person does not know what is being reinforced.",
    distractors: ['The principle that reinforcement is most effective when delivered immediately after a response.', 'The principle that reinforcement is most effective when the individual is aware of the contingency.', 'The principle that reinforcement automatically generalizes to all members of a response class.'],
    misconceptions: [
      "Automaticity of reinforcement means reinforcement works the same for all individuals",
      "Automaticity of reinforcement is the same as automatic reinforcement",
      "Automaticity of reinforcement means awareness is irrelevant to all learning"
    ],
    taskItem: "B.01",
    category: "Reinforcement"
  },
  {
    id: "rr-aversive-stimulus",
    term: "Aversive Stimulus",
    domain: "B",
    correctDefinition: "A stimulus that functions as a punisher (decreases behavior when presented) or as a negative reinforcer (increases behavior when removed); aversiveness is defined functionally, not by the physical properties of the stimulus.",
    distractors: ['A stimulus that an individual subjectively reports as unpleasant or undesirable, regardless of its observable effect on their behavior as a reinforcer or punisher in a given context.', 'A stimulus that consistently elicits a fear or anxiety response through repeated pairings with a painful or startling event, resulting in a conditioned emotional reaction, as identified through systematic observation and functional assessment of the environmental context.', 'A stimulus that, when presented, reduces the reinforcing effectiveness of other stimuli, thereby decreasing the likelihood of behaviors that were previously maintained by those reinforcers.'],
    misconceptions: [
      "Aversive stimuli are always painful or physically harmful",
      "Aversive stimuli are defined by the individual's subjective experience",
      "Aversive stimuli are the same as unconditioned punishers"
    ],
    taskItem: "B.02",
    category: "Punishment"
  },
  {
    id: "rr-behavior",
    term: "Behavior",
    domain: "A",
    correctDefinition: "Any activity of an organism that can be observed and measured; includes both overt (publicly observable) and covert (private) activities; defined by its physical dimensions rather than its function or meaning.",
    distractors: ['Any intentional action initiated by an individual to achieve a specific goal or outcome, reflecting conscious decision-making rather than environmental influence.', 'Any observable action that is solely determined by the immediate antecedent events in the environment, without considering the historical context or prior learning experiences.', 'Any response to an environmental event, encompassing internal physiological changes and cognitive processes, rather than focusing on externally observable motor movements.'],
    misconceptions: [
      "Behavior only refers to observable, public actions",
      "Behavior requires intent or awareness to qualify as behavior",
      "Behavior is the same as response"
    ],
    taskItem: "A.01",
    category: "Philosophical Foundations"
  },
  {
    id: "rr-bcis",
    term: "Behavior Chain Interruption Strategy (BCIS)",
    domain: "H",
    correctDefinition: "A procedure in which a behavior chain is interrupted at a specific point to create a motivating operation for a communicative response; used to teach mands and other communication skills in natural contexts.",
    distractors: ['A procedure in which a behavior chain is systematically broken down to identify and correct errors in the sequence of steps, ensuring accurate task completion and skill acquisition.', 'A procedure in which a behavior chain is temporarily paused to deliver reinforcement for the successful completion of a specific step, strengthening individual components of the chain.', 'A procedure in which a behavior chain is temporarily halted to evaluate the learner\'s mastery of each individual step, identifying areas requiring further instruction or practice.'],
    misconceptions: [
      "BCIS is the same as interruption and redirection",
      "BCIS is only used for problem behaviors",
      "BCIS requires the learner to have already mastered the behavior chain"
    ],
    taskItem: "H.04",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-behavior-change-tactic",
    term: "Behavior Change Tactic",
    domain: "H",
    correctDefinition: "A specific, technologically defined procedure for changing behavior; derived from principles of behavior and used to achieve behavior change goals; examples include shaping, chaining, and differential reinforcement.",
    distractors: ['A broad conceptual framework for understanding behavior, based on theoretical constructs, rather than a detailed set of instructions for modifying specific actions in practice.', 'A method for identifying the probable function of problem behavior through indirect assessment tools or descriptive analyses, without direct experimental manipulation of variables.', 'A systematic procedure for collecting and analyzing data on behavior, such as frequency counts or duration measures, to monitor changes over time, rather than directly altering behavior.'],
    misconceptions: [
      "Behavior change tactics are the same as behavior change strategies",
      "Behavior change tactics are the same as principles of behavior",
      "Behavior change tactics are only used for reducing problem behavior"
    ],
    taskItem: "H.01",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-behavior-checklist",
    term: "Behavior Checklist",
    domain: "C",
    correctDefinition: "An indirect assessment tool that lists specific behaviors and asks informants to indicate whether each behavior occurs; used to identify target behaviors and assess behavioral repertoires.",
    distractors: ['A direct observation tool that systematically records the occurrence or non-occurrence of specific behaviors within predetermined time intervals in naturalistic settings.', 'A tool for systematically measuring the frequency of target behaviors during structured observation sessions, typically for a limited period, to establish baseline rates.', 'A functional assessment tool used to identify the maintaining variables for problem behavior through the systematic manipulation of antecedents and consequences.'],
    misconceptions: [
      "Behavior checklists are the same as rating scales",
      "Behavior checklists provide direct evidence of behavioral function",
      "Behavior checklists are the same as curriculum-based assessments"
    ],
    taskItem: "F.01",
    category: "Assessment"
  },
  {
    id: "rr-behavior-altering-effect",
    term: "Behavior-Altering Effect",
    domain: "B",
    correctDefinition: "One of the two defining effects of a motivating operation; refers to the change in the current frequency of behavior that has been reinforced or punished by the stimulus whose value has been altered by the MO.",
    distractors: ['One of the two defining effects of a motivating operation; refers to the change in the future frequency of behavior that has been reinforced or punished by the stimulus whose value has been altered by the MO.', 'One of the two defining effects of a discriminative stimulus; refers to the change in the current frequency of behavior that has been reinforced in the presence of that stimulus.', 'One of the two defining effects of a conditioned reinforcer; refers to the change in the future probability of a response occurring due to its pairing with an unconditioned reinforcer.'],
    misconceptions: [
      "The behavior-altering effect is the same as the value-altering effect",
      "The behavior-altering effect is the only defining effect of a motivating operation",
      "The behavior-altering effect is the same as the evocative effect"
    ],
    taskItem: "B.06",
    category: "Motivating Operations"
  },
  {
    id: "rr-behavioral-assessment",
    term: "Behavioral Assessment",
    domain: "F",
    correctDefinition: "A systematic process of collecting information about a client's behavioral repertoire, including strengths, deficits, and excesses, to inform the development of behavior-change goals and intervention plans.",
    distractors: ['A process of administering standardized psychological tests to assess cognitive functioning or personality.', 'A process of observing behavior in natural settings to identify its maintaining function.', 'A process of measuring behavior to evaluate the effectiveness of an intervention over time.'],
    misconceptions: [
      "Behavioral assessment is the same as functional behavior assessment",
      "Behavioral assessment is the same as psychological assessment",
      "Behavioral assessment only focuses on problem behaviors"
    ],
    taskItem: "F.01",
    category: "Assessment"
  },
  {
    id: "rr-behavioral-inflexibility",
    term: "Behavioral Inflexibility",
    domain: "B",
    correctDefinition: "A pattern of behavior characterized by rigid, repetitive responding that does not vary appropriately with changes in environmental conditions; associated with restricted stimulus control and may be a target for intervention.",
    distractors: ['A pattern of behavior characterized by highly variable responding that rapidly adapts to changes in environmental conditions; associated with broad stimulus control and effective problem-solving skills.', 'A pattern of behavior characterized by consistently low rates of responding across all environmental conditions; often associated with a lack of motivation or limited reinforcement history for complex tasks.', 'A pattern of behavior characterized by an individual\'s strong preference for specific routines and resistance to any changes, often impacting their ability to generalize skills.'],
    misconceptions: [
      "Behavioral inflexibility is the same as stereotypy",
      "Behavioral inflexibility is always a problem behavior",
      "Behavioral inflexibility is the same as rigidity in cognitive psychology"
    ],
    taskItem: "B.08",
    category: "Stimulus Control"
  },
  {
    id: "rr-bidirectional-naming",
    term: "Bidirectional Naming",
    domain: "B",
    correctDefinition: "The emergence of both listener and speaker behavior for the same stimulus after training only one; a learner who has bidirectional naming can, after being taught to tact an object, also demonstrate listener behavior for that object without direct training.",
    distractors: ['The emergence of both listener and speaker behavior for the same stimulus after receiving separate, direct training for each; requires explicit instruction for both receptive and expressive skills.', 'The emergence of a listener response to a novel stimulus after being taught to tact that stimulus; does not necessarily imply the reverse, where tacting would emerge from listener training, which is a verbal operant controlled by a nonverbal discriminative stimulus and reinforced by generalized conditioned reinforcement.', 'The emergence of both tacting and manding for a specific stimulus, demonstrating that the individual can request and label the same item without needing separate, direct instruction, calculated by dividing the number of responses by the observation time to yield responses per unit time.'],
    misconceptions: [
      "Bidirectional naming is the same as stimulus equivalence",
      "Bidirectional naming requires direct training of both listener and speaker behavior",
      "Bidirectional naming is the same as naming"
    ],
    taskItem: "B.11",
    category: "Verbal Behavior"
  },
  {
    id: "rr-bonus-response-cost",
    term: "Bonus Response Cost",
    domain: "H",
    correctDefinition: "A response cost variation in which the individual begins with no tokens and earns tokens for appropriate behavior, but tokens can also be removed contingent on problem behavior; combines token economy with response cost.",
    distractors: ['A response cost variation in which individuals earn tokens for appropriate behavior, and additional bonus tokens are awarded for sustained periods without problem behavior.', 'A response cost variation in which tokens are removed for problem behavior, but the individual has no opportunity to earn tokens, only to lose them from an initial endowment.', 'A response cost variation in which the cost of inappropriate behavior is increased incrementally each time it occurs, serving as a progressively more severe consequence, defined as anything an organism does that can be measured in terms of its physical dimensions.'],
    misconceptions: [
      "Bonus response cost is the same as standard response cost",
      "Bonus response cost is only used when the individual has no tokens to lose",
      "Bonus response cost is the same as a token economy"
    ],
    taskItem: "H.05",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-causal-relations",
    term: "Causal Relations",
    domain: "A",
    correctDefinition: "Relationships between events in which one event (the cause) produces or determines another event (the effect); in behavior analysis, causal relations are established through experimental manipulation demonstrating functional relationships.",
    distractors: ['Relationships between events in which one event reliably precedes another, indicating a correlation rather than a direct functional dependency; often observed through statistical analysis.', 'Relationships between events that are merely coincidental, without any underlying functional connection or experimental evidence of influence; may lead to superstitious behavior, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'Relationships between events that are consistently observed to occur together, suggesting a predictive relationship but not necessarily a direct manipulative influence on one another, which provides objective information about the current level and trend of the target behavior.'],
    misconceptions: [
      "Correlation is sufficient to establish causal relations",
      "Causal relations can be established through observation alone",
      "Causal relations are the same as functional relations"
    ],
    taskItem: "A.04",
    category: "Philosophical Foundations"
  },
  {
    id: "rr-class-expansion",
    term: "Class Expansion",
    domain: "B",
    correctDefinition: "The growth of a stimulus equivalence class when a new stimulus is added to the class through training; all existing members of the class become functionally equivalent to the new member through derived relations.",
    distractors: ['The growth of a response class when a new, topographically different behavior is added through direct reinforcement; all existing members of the class become functionally equivalent to the new member.', 'The growth of a stimulus generalization gradient when a new stimulus is introduced that shares physical properties with an existing discriminative stimulus, increasing response rates.', 'The growth of a stimulus equivalence class when one member is removed, leading to a reorganization of the remaining members and a potential weakening of existing derived relations.'],
    misconceptions: [
      "Class expansion requires direct training of all new relations",
      "Class expansion is the same as stimulus generalization",
      "Class expansion only occurs in equivalence classes"
    ],
    taskItem: "B.14",
    category: "Stimulus Control"
  },
  {
    id: "rr-class-merger",
    term: "Class Merger",
    domain: "B",
    correctDefinition: "The combination of two previously separate stimulus equivalence classes into a single larger class when a member of one class is shown to be equivalent to a member of the other class.",
    distractors: ['The combination of two previously separate response classes into a single, broader class when both are brought under the control of the same reinforcing consequence.', 'The combination of two stimulus generalization gradients when they overlap significantly, leading to a wider range of stimuli evoking a similar behavioral response.', 'The combination of two distinct stimulus classes based on their shared physical characteristics, forming a larger conceptual category through stimulus generalization.'],
    misconceptions: [
      "Class merger requires direct training of all new relations",
      "Class merger is the same as stimulus generalization",
      "Class merger only occurs when the two classes share physical properties"
    ],
    taskItem: "B.14",
    category: "Stimulus Control"
  },
  {
    id: "rr-class-specific-reinforcement",
    term: "Class-Specific Reinforcement",
    domain: "B",
    correctDefinition: "Reinforcement that is specific to a particular response class; strengthens all members of the response class, not just the specific response that was reinforced.",
    distractors: ['Reinforcement that is specific to a particular individual\'s preferences, effectively strengthening only the behaviors that are personally meaningful to that person.', 'Reinforcement that is delivered for a specific behavior topography, and does not generalize to other, similar behaviors within the same response class.', 'Reinforcement that is contingent upon the occurrence of a particular stimulus class, rather than a specific response or set of responses.'],
    misconceptions: [
      "Class-specific reinforcement is the same as differential reinforcement",
      "Class-specific reinforcement only strengthens the specific response that was reinforced",
      "Class-specific reinforcement is the same as response generalization"
    ],
    taskItem: "B.01",
    category: "Reinforcement"
  },
  {
    id: "rr-combinatorial-entailment",
    term: "Combinatorial Entailment",
    domain: "B",
    correctDefinition: "In relational frame theory, the derivation of a relation between two stimuli based on their relations to a third stimulus; for example, if A is the same as B and B is the same as C, then A is the same as C (transitivity).",
    distractors: ['In relational frame theory, the derivation of a relation between two stimuli based on their shared physical properties; for example, if A is red and B is red, then A and B are similar.', 'In relational frame theory, the derivation of a bidirectional relation from a directly trained unidirectional relation; for example, if A is greater than B, then B is less than A.', 'In relational frame theory, the derivation of a relation between two stimuli based on their direct contiguity in time or space through repeated pairings and conditioning.'],
    misconceptions: [
      "Combinatorial entailment is the same as mutual entailment",
      "Combinatorial entailment is the same as transitivity",
      "Combinatorial entailment only applies to equivalence relations"
    ],
    taskItem: "B.14",
    category: "Stimulus Control"
  },
  {
    id: "rr-compound-schedule",
    term: "Compound Schedule of Reinforcement",
    domain: "B",
    correctDefinition: "A schedule of reinforcement that combines two or more simple schedules; includes multiple, mixed, chained, concurrent, alternative, conjunctive, and tandem schedules.",
    distractors: ['A schedule of reinforcement in which the response requirement changes systematically over time, often increasing or decreasing based on prior performance.', 'A schedule of reinforcement in which a single behavior is reinforced according to two or more independent simple schedules, each with its own contingency.', 'A schedule of reinforcement in which reinforcement is delivered for completing a series of discrete behaviors in a specific sequence, forming a behavior chain.'],
    misconceptions: [
      "Compound schedules are the same as complex schedules",
      "All compound schedules involve alternating between components",
      "Compound schedules are only used in basic research"
    ],
    taskItem: "B.04",
    category: "Schedules of Reinforcement"
  },
  {
    id: "rr-compound-verbal-discrimination",
    term: "Compound Verbal Discrimination",
    domain: "B",
    correctDefinition: "A verbal discrimination in which the correct response is controlled by multiple stimulus elements simultaneously; requires the learner to attend to and integrate multiple features of the verbal stimulus.",
    distractors: ['A verbal discrimination in which a single verbal stimulus evokes a response that is controlled by one specific feature, requiring the learner to focus on a singular characteristic.', 'A verbal discrimination where the learner must select a response based on the presence of a single, highly salient verbal element within a complex stimulus array.', 'A verbal discrimination where the learner produces a complex verbal utterance, such as a sentence or phrase, as a single, unified response to an antecedent stimulus.'],
    misconceptions: [
      "Compound verbal discriminations are the same as simple verbal discriminations",
      "Compound verbal discriminations only involve two stimulus elements",
      "Compound verbal discriminations are the same as conditional discriminations"
    ],
    taskItem: "B.11",
    category: "Verbal Behavior"
  },
  {
    id: "rr-concept",
    term: "Concept",
    domain: "B",
    correctDefinition: "A stimulus class defined by a common feature or set of features; a learner has acquired a concept when they respond consistently to all members of the class and differently to non-members.",
    distractors: ['A stimulus class where members share a common physical characteristic, and the learner identifies these items based on that singular, observable property.', 'A mental construct representing a category of objects or events, typically formed through abstract thought processes rather than direct environmental interactions.', 'A precise verbal rule that delineates the necessary and sufficient conditions for stimulus class membership, often taught explicitly through formal instruction.'],
    misconceptions: [
      "Concepts are mental entities that exist independently of behavior",
      "Concepts are the same as categories",
      "Concepts require verbal labeling to be acquired"
    ],
    taskItem: "B.07",
    category: "Stimulus Control"
  },
  {
    id: "rr-conditioned-negative-reinforcer",
    term: "Conditioned Negative Reinforcer",
    domain: "B",
    correctDefinition: "A stimulus that has acquired the ability to function as a negative reinforcer (its removal increases behavior) through pairing with other aversive stimuli; also called secondary negative reinforcer.",
    distractors: ['A stimulus that inherently functions as a negative reinforcer (its removal increases behavior) without any prior learning history; also called an unconditioned negative reinforcer.', 'A stimulus that has acquired the ability to function as a positive reinforcer (its presentation increases behavior) through pairing with other appetitive stimuli.', 'A stimulus that has acquired the ability to decrease future behavior when presented, due to its consistent pairing with other punishing consequences, defined as anything an organism does that can be measured in terms of its physical dimensions.'],
    misconceptions: [
      "Conditioned negative reinforcers are the same as conditioned punishers",
      "Conditioned negative reinforcers are always aversive stimuli",
      "Conditioned negative reinforcers are the same as unconditioned negative reinforcers"
    ],
    taskItem: "B.01",
    category: "Reinforcement"
  },
  {
    id: "rr-conditioned-reflex",
    term: "Conditioned Reflex",
    domain: "B",
    correctDefinition: "A learned stimulus-response relationship in which a previously neutral stimulus (conditioned stimulus) has acquired the ability to elicit a response (conditioned response) through pairing with an unconditioned stimulus.",
    distractors: ['An unlearned, innate stimulus-response relationship that is genetically determined and does not require prior experience, such as a startle response to an unexpected loud noise.', 'A learned operant behavior that is maintained and strengthened by its environmental consequences, such as an individual pressing a lever to obtain a food pellet, which is selected and maintained by its consequences within the organism\'s learning history.', 'A specific behavior that occurs reliably in the presence of a discriminative stimulus, indicating that reinforcement is available for that particular response, in the presence of which a behavior has been reinforced and is therefore more likely to occur.'],
    misconceptions: [
      "Conditioned reflexes are the same as unconditioned reflexes",
      "Conditioned reflexes are the same as operant behaviors",
      "Conditioned reflexes are permanent and cannot be extinguished"
    ],
    taskItem: "B.05",
    category: "Respondent Behavior"
  },
  {
    id: "rr-conjunctive-schedule",
    term: "Conjunctive Schedule (Conj)",
    domain: "B",
    correctDefinition: "A compound schedule in which the requirements of two or more component schedules must all be met before reinforcement is delivered; the most restrictive compound schedule.",
    distractors: ['A compound schedule in which meeting the requirements of at least one of two or more component schedules is sufficient for reinforcement delivery; a more permissive arrangement.', 'A compound schedule where two or more distinct component schedules operate in alternating sequences, with specific discriminative stimuli signaling each change in schedule.', 'A compound schedule in which two or more independent schedules of reinforcement are simultaneously available, allowing the organism to choose which schedule to engage with.'],
    misconceptions: [
      "Conjunctive schedules are the same as alternative schedules",
      "Conjunctive schedules are the same as concurrent schedules",
      "Conjunctive schedules are only used in basic research"
    ],
    taskItem: "B.04",
    category: "Schedules of Reinforcement"
  },
  {
    id: "rr-consequence",
    term: "Consequence",
    domain: "B",
    correctDefinition: "A stimulus change that follows a behavior; may function as a reinforcer (increasing future behavior), a punisher (decreasing future behavior), or have no effect on future behavior.",
    distractors: ['Any stimulus that follows a behavior and reliably alters its future probability, either increasing its likelihood through reinforcement or decreasing it through punishment.', 'Any event that occurs directly after a behavior, regardless of whether it exerts any measurable influence on the subsequent frequency or form of that behavior.', 'Any stimulus that is purposefully delivered immediately following a behavior with the intention of either rewarding or punishing it, irrespective of actual effect.'],
    misconceptions: [
      "All consequences change behavior",
      "Consequences are always intentionally delivered by another person",
      "Consequences are the same as reinforcers"
    ],
    taskItem: "B.01",
    category: "Reinforcement"
  },
  {
    id: "rr-contextual-control",
    term: "Contextual Control",
    domain: "B",
    correctDefinition: "The influence of contextual stimuli (setting events, background stimuli) on the effectiveness of discriminative stimuli and motivating operations; the same SD may have different effects in different contexts.",
    distractors: ['The influence of a discriminative stimulus on the rate of behavior, signaling that a specific response will be reinforced in its presence, thus evoking that behavior.', 'The influence of motivating operations on the efficacy of reinforcers, altering their value and the evocative effect they have on relevant operant behaviors, which is selected and maintained by its consequences within the organism\'s learning history.', 'The influence of the immediate physical surroundings on the occurrence of a behavior, where the setting itself acts as a simple antecedent stimulus for the response.'],
    misconceptions: [
      "Contextual control is the same as stimulus control",
      "Contextual control is the same as setting events",
      "Contextual control only applies to respondent behavior"
    ],
    taskItem: "B.07",
    category: "Stimulus Control"
  },
  {
    id: "rr-contextual-stimulus",
    term: "Contextual Stimulus",
    domain: "B",
    correctDefinition: "A background stimulus that alters the function of other stimuli without directly evoking behavior; may function as a conditional discriminative stimulus or as a setting event that influences the effectiveness of other antecedents.",
    distractors: ['A discriminative stimulus that directly evokes a specific behavior by reliably signaling the availability of reinforcement for that particular response in its presence, thereby increasing the likelihood of that behavior occurring under those specific conditions.', 'A motivating operation that directly alters the current reinforcing effectiveness of a stimulus and simultaneously influences the frequency of all behavior that has been previously reinforced by that specific stimulus, either increasing or decreasing its probability.', 'A stimulus that is consistently present throughout all phases of a behavior intervention or training program and eventually becomes a neutral stimulus, having no direct behavioral influence or discriminative control over any specific response.'],
    misconceptions: [
      "Contextual stimuli are the same as discriminative stimuli",
      "Contextual stimuli are the same as setting events",
      "Contextual stimuli directly elicit behavior"
    ],
    taskItem: "B.07",
    category: "Stimulus Control"
  },
  {
    id: "rr-contingent",
    term: "Contingent",
    domain: "B",
    correctDefinition: "A relationship in which the delivery of a consequence depends on the occurrence of a specific behavior; a consequence is contingent on behavior when it is delivered if and only if the behavior occurs.",
    distractors: ['A relationship in which a consequence is delivered at a predetermined time interval, irrespective of the occurrence of any specific behavior, often called a noncontingent relation.', 'A relationship in which a consequence is delivered only after a specific number of responses have occurred, which is a defining characteristic of ratio schedules of reinforcement.', 'A relationship in which a consequence is delivered only when a specific discriminative stimulus is present, signaling the availability of reinforcement for a behavior.'],
    misconceptions: [
      "Contingent is the same as contiguous",
      "A consequence must be immediate to be contingent",
      "Contingent consequences are always more effective than noncontingent consequences"
    ],
    taskItem: "B.01",
    category: "Reinforcement"
  },
  {
    id: "rr-contingent-observation",
    term: "Contingent Observation",
    domain: "H",
    correctDefinition: "A mild time-out procedure in which the individual is moved to the periphery of the activity contingent on problem behavior and must observe others engaging in the activity without participating; a form of non-exclusionary time-out.",
    distractors: ['A procedure in which the individual is physically removed from the reinforcing environment contingent on problem behavior, resulting in a complete loss of access to reinforcement.', 'A procedure where the individual is required to observe a model performing the desired behavior, typically utilized for teaching new skills through observational learning, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'A procedure where the individual is prompted to observe the direct results of their actions, frequently employed as a component of self-monitoring or self-management interventions.'],
    misconceptions: [
      "Contingent observation is the same as exclusionary time-out",
      "Contingent observation requires removing the individual from the room",
      "Contingent observation is the same as the sit-and-watch procedure"
    ],
    taskItem: "H.05",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-copying-text",
    term: "Copying Text",
    domain: "B",
    correctDefinition: "A verbal operant in which the speaker copies written text; involves point-to-point correspondence and formal similarity between the written stimulus and the written response; a form of textual behavior.",
    distractors: ['A verbal operant in which the speaker reads written text aloud, demonstrating textual behavior without motor production of the written form; involves a written stimulus and a vocal response.', 'A verbal operant in which the speaker writes what another person has said, demonstrating a transcription response; involves a vocal stimulus and a written response with point-to-point correspondence.', 'A verbal operant in which the speaker writes from memory, without a written stimulus present, such as an intraverbal; involves a verbal stimulus and a written response without formal similarity.'],
    misconceptions: [
      "Copying text is the same as transcription",
      "Copying text requires understanding the meaning of what is being copied",
      "Copying text is the same as textual behavior"
    ],
    taskItem: "B.11",
    category: "Verbal Behavior"
  },
  {
    id: "rr-deictic-relations",
    term: "Deictic Relations",
    domain: "B",
    correctDefinition: "In relational frame theory, relations defined by the perspective of the speaker (e.g., I/you, here/there, now/then); require perspective-taking and are foundational to theory of mind.",
    distractors: ['In relational frame theory, relations defined by the physical properties of stimuli, such as larger-than or brighter-than; these are comparative relations based on objective features of the environment.', 'In relational frame theory, relations defined by the temporal order of stimuli, such as before/after or first/last; these establish a sequence of events and their positions in time.', 'In relational frame theory, relations defined by the spatial proximity of stimuli, such as near/far or beside/above; these describe the physical arrangement and location of objects.'],
    misconceptions: [
      "Deictic relations are the same as spatial relations",
      "Deictic relations are the same as temporal relations",
      "Deictic relations are only relevant for verbal behavior"
    ],
    taskItem: "B.14",
    category: "Stimulus Control"
  },
  {
    id: "rr-derived-relations",
    term: "Derived Relations",
    domain: "B",
    correctDefinition: "Stimulus relations that emerge without direct training as a result of other trained relations; include symmetry, transitivity, and equivalence in stimulus equivalence, and various frame relations in relational frame theory.",
    distractors: ['Stimulus relations that are established through direct conditioning, such as a discriminative stimulus controlling behavior; these relations require explicit training and reinforcement to be formed.', 'Stimulus relations that are based on the physical properties of stimuli, such as size, shape, or color similarities; these are inherent features, not learned connections between arbitrary stimuli.', 'Stimulus relations that are established through generalization, where a response to one stimulus occurs to similar stimuli; this involves responding to untrained stimuli based on shared features.'],
    misconceptions: [
      "Derived relations are the same as trained relations",
      "Derived relations are the same as emergent relations",
      "Derived relations only occur in equivalence classes"
    ],
    taskItem: "B.14",
    category: "Stimulus Control"
  },
  {
    id: "rr-derived-stimulus-relations",
    term: "Derived Stimulus Relations",
    domain: "B",
    correctDefinition: "Relations between stimuli that emerge without direct training based on a history of training other relations; the foundation of stimulus equivalence and relational frame theory.",
    distractors: ['Relations between stimuli that are established through direct conditioning, requiring explicit teaching for their formation; these are not emergent but are explicitly taught through reinforcement.', 'Relations between stimuli that are based on physical similarity, such as size, shape, or color, not learned connections; these are inherent properties rather than learned arbitrary associations.', 'Relations between stimuli that are established through generalization, where a response to one stimulus transfers to others; this involves responding to untrained stimuli based on shared features.'],
    misconceptions: [
      "Derived stimulus relations are the same as trained stimulus relations",
      "Derived stimulus relations only occur with verbal stimuli",
      "Derived stimulus relations are the same as emergent stimulus relations"
    ],
    taskItem: "B.14",
    category: "Stimulus Control"
  },
  {
    id: "rr-drd",
    term: "Differential Reinforcement of Diminishing Rates (DRD)",
    domain: "H",
    correctDefinition: "A procedure in which reinforcement is delivered when the rate of a behavior is below a criterion that is progressively lowered over time; used to gradually reduce the rate of a behavior to zero.",
    distractors: ['A procedure in which a stimulus is presented contingent on a behavior, resulting in a decrease in the future frequency of that behavior under similar antecedent conditions.', 'A procedure in which the delivery of a consequence is withheld following a behavior, resulting in a gradual decrease in the future probability of that response over time.', 'A procedure in which a stimulus is removed contingent on a behavior, resulting in a decrease in the future frequency of that behavior in similar environmental contexts.'],
    misconceptions: [
      "DRD is the same as DRL",
      "DRD is the same as DRO",
      "DRD eliminates behavior immediately"
    ],
    taskItem: "H.03",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-discriminated-avoidance",
    term: "Discriminated Avoidance",
    domain: "B",
    correctDefinition: "A procedure in which a warning stimulus signals the upcoming delivery of an aversive event; the organism can avoid the aversive event by responding during the warning signal; maintained by negative reinforcement.",
    distractors: ['A procedure in which the organism escapes from an aversive event that is already occurring, ending the unpleasant stimulation; this involves responding after the onset of the aversive stimulus.', 'A procedure in which the organism avoids an aversive event without any warning signal, often due to an unpredictable schedule; this is a form of Sidman avoidance, not signaled avoidance behavior.', 'A procedure in which the organism discriminates between safe and dangerous stimuli, but does not involve active avoidance; this describes stimulus control over an emotional or physiological response.'],
    misconceptions: [
      "Discriminated avoidance is the same as escape",
      "Discriminated avoidance is the same as free-operant avoidance",
      "Discriminated avoidance is maintained by positive reinforcement"
    ],
    taskItem: "B.01",
    category: "Reinforcement"
  },
  {
    id: "rr-discriminated-operant",
    term: "Discriminated Operant",
    domain: "B",
    correctDefinition: "An operant behavior that is under stimulus control; occurs more frequently in the presence of a discriminative stimulus than in its absence because of a history of differential reinforcement.",
    distractors: ['An operant behavior that is controlled by its consequences, increasing or decreasing based on what follows it; this describes the general principle of operant conditioning, not stimulus control specifically.', 'An operant behavior that is controlled by motivating operations, which alter the value of consequences; this describes an establishing operation\'s influence on the effectiveness of reinforcers.', 'An operant behavior that is controlled by respondent conditioning, where a neutral stimulus gains eliciting power; this describes a conditioned reflex, not a behavior selected by its consequences.'],
    misconceptions: [
      "Discriminated operants are the same as respondent behaviors",
      "Discriminated operants are the same as rule-governed behaviors",
      "Discriminated operants are controlled by the discriminative stimulus rather than by reinforcement"
    ],
    taskItem: "B.07",
    category: "Stimulus Control"
  },
  {
    id: "rr-sp",
    term: "Discriminative Stimulus for Punishment (S^P)",
    domain: "B",
    correctDefinition: "A stimulus in the presence of which a behavior has been punished; signals that punishment is available and decreases the probability of the behavior in its presence.",
    distractors: ['A stimulus in the presence of which a behavior has been reinforced; signals that reinforcement is available and increases the probability of the behavior in its presence, known as an S^D.', 'A stimulus that signals the availability of reinforcement, increasing the likelihood of a specific behavior; this describes a discriminative stimulus (S^D) and its effect on response rates.', 'A stimulus that directly elicits a respondent behavior, without any prior learning history; this describes an unconditioned stimulus (US) and its reflexive impact on an organism.'],
    misconceptions: [
      "The S^P is the same as a conditioned punisher",
      "The S^P directly suppresses behavior through punishment",
      "The S^P is the same as an SΔ"
    ],
    taskItem: "B.07",
    category: "Stimulus Control"
  },
  {
    id: "rr-distinction-relations",
    term: "Distinction Relations",
    domain: "B",
    correctDefinition: "In relational frame theory, relations of difference or non-sameness between stimuli (e.g., A is different from B); the opposite of equivalence relations.",
    distractors: ['In relational frame theory, relations of sameness between stimuli (e.g., A is the same as B); this describes equivalence relations, which involve a different type of relational responding.', 'In relational frame theory, relations of comparison between stimuli based on a dimension, like \'bigger than\' or \'smaller than\'; these are comparative relations, not solely based on difference.', 'In relational frame theory, relations of temporal order between stimuli (e.g., A comes before B); these describe sequential relations, which focus on the order of events rather than difference.'],
    misconceptions: [
      "Distinction relations are the same as non-equivalence relations",
      "Distinction relations are the same as opposition relations",
      "Distinction relations are only relevant for verbal behavior"
    ],
    taskItem: "B.14",
    category: "Stimulus Control"
  },
  {
    id: "rr-elementary-verbal-operants",
    term: "Elementary Verbal Operants",
    domain: "B",
    correctDefinition: "The basic units of verbal behavior identified by Skinner: mand, tact, echoic, intraverbal, textual, transcription, and copying; each is defined by its unique controlling variables and form of reinforcement.",
    distractors: ['The basic units of language identified by linguists: phonemes, morphemes, and syntax; this focuses on structural properties of language rather than functional control by environmental variables.', 'The basic units of communication: verbal, nonverbal, and written; this describes the modality of information exchange, not the functional relationship between behavior and environmental events.', 'The basic units of social interaction: requesting, commenting, and responding; this focuses on interpersonal functions rather than the specific controlling variables and reinforcement contingencies.'],
    misconceptions: [
      "Elementary verbal operants are the same as parts of speech",
      "Elementary verbal operants are the same as communication functions",
      "Elementary verbal operants are only relevant for learners with language delays"
    ],
    taskItem: "B.11",
    category: "Verbal Behavior"
  },
  {
    id: "rr-emergent-stimulus-relations",
    term: "Emergent Stimulus Relations",
    domain: "B",
    correctDefinition: "Stimulus relations that arise without direct training as a result of other trained relations; include derived relations in stimulus equivalence and relational frame theory; demonstrate that learning can produce more than what was directly taught.",
    distractors: ['Stimulus relations that are established through direct conditioning, requiring explicit teaching for their formation and do not involve any spontaneous derivation from other trained associations; each connection is individually learned and reinforced.', 'Stimulus relations that emerge through generalization to novel stimuli, sharing physical characteristics with trained ones without any relational responding; the new stimuli simply evoke a similar response due to their perceptual overlap.', 'Stimulus relations that emerge through observational learning, by watching others respond to various stimuli and imitating their behavior; this process involves direct modeling rather than derived or untrained connections.'],
    misconceptions: [
      "Emergent stimulus relations are the same as derived stimulus relations",
      "Emergent stimulus relations are the same as generalization",
      "Emergent stimulus relations only occur with visual stimuli"
    ],
    taskItem: "B.14",
    category: "Stimulus Control"
  },
  {
    id: "rr-environment",
    term: "Environment",
    domain: "A",
    correctDefinition: "The totality of external and internal events that can influence behavior; includes physical, social, and verbal stimuli; in behavior analysis, the environment is the primary source of behavioral control.",
    distractors: ['The physical setting in which behavior occurs, including its tangible features and spatial arrangements; this view primarily focuses on the physical components, excluding social or verbal influences on behavior.', 'The social context that influences behavior, encompassing interactions with others and group dynamics; this perspective highlights interpersonal factors, but overlooks the broader physical and internal events affecting actions.', 'The external events that precede and follow behavior, which are often manipulated in experimental analysis; this definition limits the scope to immediate antecedents and consequences, rather than the complete context.'],
    misconceptions: [
      "The environment only includes external, physical events",
      "The environment is the same as the setting",
      "The environment does not include private events"
    ],
    taskItem: "A.01",
    category: "Philosophical Foundations"
  },
  {
    id: "rr-equivalence-test",
    term: "Equivalence Test",
    domain: "B",
    correctDefinition: "A probe procedure used to assess whether stimuli have become members of the same equivalence class; tests for reflexivity, symmetry, and transitivity relations that were not directly trained.",
    distractors: ['A test used to assess whether two stimuli are physically identical, based on their observable characteristics; this procedure focuses on perceptual matching rather than learned, abstract relations.', 'A test used to assess whether a learner can match stimuli based on physical similarity, such as matching-to-sample with identical items; this primarily evaluates visual discrimination, not derived relations.', 'A test used to assess whether a learner has mastered a discrimination, distinguishing between different stimuli based on direct training; this evaluates explicitly taught differences, not untaught equivalences.'],
    misconceptions: [
      "Equivalence tests are the same as matching-to-sample tests",
      "Equivalence tests require reinforcement to be valid",
      "Equivalence tests are only used in basic research"
    ],
    taskItem: "B.14",
    category: "Stimulus Control"
  },
  {
    id: "rr-equivalence-class-formation",
    term: "Equivalence-Class Formation",
    domain: "B",
    correctDefinition: "The process by which stimuli become members of the same equivalence class through training; requires demonstrating reflexivity, symmetry, and transitivity; results in stimuli becoming interchangeable in terms of their behavioral functions.",
    distractors: ['The process by which stimuli come to control the same response through generalization, due to shared features; this process relies on physical resemblance rather than symbolic or arbitrary learned relations among stimuli.', 'The process by which stimuli are grouped based on their physical properties, without any learned relations or direct training on their functionality; classification occurs solely due to inherent perceptual similarities.', 'The process by which stimuli acquire the same reinforcing value through pairing with primary reinforcers, leading to conditioned reinforcement; this involves a transfer of value, not the formation of derived stimulus relations.'],
    misconceptions: [
      "Equivalence-class formation requires direct training of all relations",
      "Equivalence-class formation is the same as stimulus generalization",
      "Equivalence-class formation only occurs with visual stimuli"
    ],
    taskItem: "B.14",
    category: "Stimulus Control"
  },
  {
    id: "rr-escape-contingency",
    term: "Escape Contingency",
    domain: "B",
    correctDefinition: "A contingency in which a behavior is followed by the removal of an aversive stimulus; the behavior is maintained by negative reinforcement because it terminates the aversive event.",
    distractors: ['A contingency in which a behavior is followed by the presentation of an aversive stimulus; the behavior is thereby weakened because it results in the onset of an undesirable event.', 'A contingency in which a behavior is followed by the removal of a positive reinforcer; the behavior is thereby weakened because a desired item or activity is taken away.', 'A contingency in which a behavior prevents an aversive event from occurring; the behavior is maintained by negative reinforcement because it avoids the onset of the stimulus.'],
    misconceptions: [
      "Escape contingencies are the same as avoidance contingencies",
      "Escape contingencies are maintained by positive reinforcement",
      "Escape contingencies are the same as negative punishment"
    ],
    taskItem: "B.01",
    category: "Reinforcement"
  },
  {
    id: "rr-evocative-effect",
    term: "Evocative Effect",
    domain: "B",
    correctDefinition: "One of the two defining effects of a motivating operation; refers to the increase in the current frequency of behavior that has been reinforced by the stimulus whose value has been increased by an establishing operation.",
    distractors: ['The effect of a discriminative stimulus on the frequency of behavior, signaling the availability of reinforcement; this describes stimulus control, not the value-altering effect of an MO on behavior.', 'The effect of reinforcement on the future frequency of behavior, increasing its likelihood in similar conditions; this refers to the strengthening of responses, not the momentary increase due to an MO.', 'The effect of punishment on the future frequency of behavior, decreasing its likelihood under similar circumstances; this describes a consequence that reduces behavior, rather than an antecedent that increases it.'],
    misconceptions: [
      "The evocative effect is the same as the value-altering effect",
      "The evocative effect is the only defining effect of a motivating operation",
      "The evocative effect is the same as the behavior-altering effect"
    ],
    taskItem: "B.06",
    category: "Motivating Operations"
  },
  {
    id: "rr-exclusion",
    term: "Exclusion",
    domain: "F",
    correctDefinition: "A stimulus control procedure in which a learner selects a novel stimulus from an array by excluding all familiar stimuli; allows the learner to select the correct stimulus without prior training on that stimulus.",
    distractors: ['A procedure in which a learner is removed from an activity or setting contingent on problem behavior, as a form of time-out; this involves a punitive consequence rather than a stimulus control teaching method.', 'A procedure in which incorrect responses are excluded from reinforcement, leading to response differentiation; this focuses on shaping specific topographies, not identifying novel stimuli through elimination.', 'A procedure in which a learner selects a stimulus that matches a sample, demonstrating stimulus control; this involves direct matching rather than inferring the correct item by eliminating others.'],
    misconceptions: [
      "Exclusion is the same as exclusionary time-out",
      "Exclusion requires prior training on the target stimulus",
      "Exclusion is the same as fast mapping"
    ],
    taskItem: "F.03",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-exclusion-time-out",
    term: "Exclusion Time-Out",
    domain: "H",
    correctDefinition: "A time-out procedure in which the individual is removed from the reinforcing environment to a less reinforcing area (e.g., a corner or partitioned area) but remains in the same room; more restrictive than non-exclusionary time-out.",
    distractors: ['A time-out procedure in which the individual is removed from the room entirely, isolating them from all reinforcement sources; this involves complete physical separation, which is more restrictive than staying in the same room.', 'A time-out procedure in which the individual is moved to the periphery of the activity, but can still observe others engaged in reinforcing events; this is a less restrictive form of non-exclusionary time-out.', 'A time-out procedure in which the individual is denied access to reinforcement while remaining in place within the setting; this is a non-exclusionary time-out, not involving removal to a different area.'],
    misconceptions: [
      "Exclusion time-out is the same as seclusion time-out",
      "Exclusion time-out requires removing the individual from the building",
      "Exclusion time-out is the same as contingent observation"
    ],
    taskItem: "H.05",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-extra-stimulus-prompt",
    term: "Extra-Stimulus Prompt",
    domain: "F",
    correctDefinition: "A prompt that is added to the environment to supplement the natural discriminative stimulus; the extra stimulus is not part of the natural SD but is added to increase the probability of a correct response.",
    distractors: ['A prompt that is a modification of the natural discriminative stimulus, making it more salient or distinct; this is an intra-stimulus prompt, altering the SD itself rather than adding a separate cue.', 'A prompt that is provided by another person rather than the environment, such as a gestural or verbal cue; this describes a type of response prompt, not necessarily an environmental addition to the SD.', 'A prompt that is added after an incorrect response has occurred, to guide the learner to the correct response; this describes a correction procedure, not an antecedent prompt to increase correct responding.'],
    misconceptions: [
      "Extra-stimulus prompts are the same as within-stimulus prompts",
      "Extra-stimulus prompts are always more effective than within-stimulus prompts",
      "Extra-stimulus prompts are the same as response prompts"
    ],
    taskItem: "F.03",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-feature-stimulus-class",
    term: "Feature Stimulus Class",
    domain: "B",
    correctDefinition: "A stimulus class whose members share one or more common physical features; membership is determined by physical similarity rather than by learning history.",
    distractors: ['A stimulus class whose members evoke the same behavior, irrespective of their physical properties or form; membership in this class is based on shared behavioral function.', 'A stimulus class whose members have all acquired the same function through a history of being paired with a common reinforcer; this describes an arbitrary stimulus class.', 'A stimulus class whose members are all part of the same derived relation, rather than physical sameness; this describes a type of arbitrary stimulus class formed through equivalence.'],
    misconceptions: [
      "Feature stimulus classes are the same as arbitrary stimulus classes",
      "Feature stimulus classes are the same as functional stimulus classes",
      "Feature stimulus classes require all members to be physically identical"
    ],
    taskItem: "B.07",
    category: "Stimulus Control"
  },
  {
    id: "rr-fixed-time-schedule",
    term: "Fixed-Time Schedule",
    domain: "B",
    correctDefinition: "A time-based schedule in which a stimulus is delivered after a fixed period of time has elapsed, regardless of the organism's behavior; used in noncontingent reinforcement procedures.",
    distractors: ['A schedule in which a reinforcer is delivered after a predetermined number of responses have occurred.', 'A schedule in which a reinforcer is delivered contingent on the first response after a set time interval.', 'A schedule in which a stimulus is delivered at unpredictable times, independent of any behavior.'],
    misconceptions: [
      "Fixed-time schedules are the same as fixed-interval schedules",
      "Fixed-time schedules are the same as noncontingent reinforcement",
      "Fixed-time schedules always involve reinforcement"
    ],
    taskItem: "B.04",
    category: "Schedules of Reinforcement"
  },
  {
    id: "rr-free-operant-avoidance",
    term: "Free-Operant Avoidance",
    domain: "B",
    correctDefinition: "An avoidance procedure in which there is no warning stimulus; the organism can respond at any time to postpone an aversive event; also called Sidman avoidance.",
    distractors: ['An avoidance procedure in which a specific warning stimulus precedes an upcoming aversive event, allowing the organism to respond to prevent its occurrence.', 'An avoidance procedure in which the organism responds to terminate an already present aversive stimulus, thereby escaping from the noxious condition.', 'An avoidance procedure in which an organism learns to avoid an aversive event through differential reinforcement of alternative behaviors that prevent the stimulus.'],
    misconceptions: [
      "Free-operant avoidance is the same as discriminated avoidance",
      "Free-operant avoidance is maintained by positive reinforcement",
      "Free-operant avoidance is the same as escape"
    ],
    taskItem: "B.01",
    category: "Reinforcement"
  },
  {
    id: "rr-function-altering-effect",
    term: "Function-Altering Effect",
    domain: "B",
    correctDefinition: "The effect of a motivating operation on the reinforcing or punishing effectiveness of a stimulus; includes the reinforcer-establishing effect and the reinforcer-abolishing effect.",
    distractors: ['The effect of a stimulus on the probability of a behavior occurring in its presence, due to past reinforcement, establishing it as a discriminative stimulus.', 'The effect of a consequence on the future rate of a behavior, making it more or less likely to recur, thus establishing a learned contingency.', 'The effect of withholding reinforcement for a previously reinforced behavior, leading to its decrease and eventual cessation through an extinction process.'],
    misconceptions: [
      "The function-altering effect is the same as the behavior-altering effect",
      "The function-altering effect is the same as the value-altering effect",
      "The function-altering effect is only relevant for unconditioned reinforcers"
    ],
    taskItem: "B.06",
    category: "Motivating Operations"
  },
  {
    id: "rr-generative-learning",
    term: "Generative Learning",
    domain: "B",
    correctDefinition: "The emergence of new, untrained behaviors or stimulus relations as a result of existing learning; includes derived stimulus relations, generalization, and the development of complex behavioral repertoires from simpler components.",
    distractors: ['The acquisition of specific responses through direct contingencies of reinforcement and punishment, which requires explicit training for each individual behavior in a repertoire, and does not involve the spontaneous emergence of novel topographies without prior direct instruction or shaping.', 'Learning that occurs through observing the behavior of others and its consequences in a social context, leading to the imitation of modeled actions or the avoidance of punished behaviors, thereby facilitating the rapid acquisition of new skills without direct, trial-and-error experience.', 'Learning that occurs when behavior is controlled by verbal rules, rather than direct contingencies, allowing for the rapid acquisition of complex responses that are not directly shaped by environmental feedback, and enabling individuals to respond effectively to novel situations based on instructions.'],
    misconceptions: [
      "Generative learning is the same as generalization",
      "Generative learning is the same as incidental learning",
      "Generative learning only occurs in verbal behavior"
    ],
    taskItem: "B.14",
    category: "Stimulus Control"
  },
  {
    id: "rr-gestural-prompt",
    term: "Gestural Prompt",
    domain: "F",
    correctDefinition: "A response prompt in which the teacher uses a gesture (e.g., pointing, nodding) to indicate the correct response; less intrusive than physical or model prompts.",
    distractors: ['A response prompt in which the teacher physically guides the learner\'s body through the desired action, ensuring the correct topography is performed.', 'A response prompt in which the teacher performs the entire correct response for the learner to copy, serving as a visual demonstration.', 'A response prompt in which the teacher uses spoken words to provide instructions for the correct response, giving verbal directions to the learner.'],
    misconceptions: [
      "Gestural prompts are the same as model prompts",
      "Gestural prompts are the most intrusive type of prompt",
      "Gestural prompts are the same as visual prompts"
    ],
    taskItem: "F.03",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-habilitation",
    term: "Habilitation",
    domain: "E",
    correctDefinition: "The process of helping individuals with disabilities acquire skills and behaviors that enable them to function as independently as possible; contrasted with rehabilitation, which restores skills that were previously present.",
    distractors: ['The systematic process of restoring lost skills and abilities due to illness, injury, or developmental regression, often implemented within a structured therapeutic setting, with the primary goal of returning an individual to a previously attained level of functioning and independence.', 'The systematic process of modifying and arranging environmental conditions to better suit an individual\'s unique needs and capabilities, thereby enhancing their access to preferred activities and reinforcement, and decreasing the likelihood of maladaptive behaviors in various contexts.', 'The systematic process of teaching and developing new adaptive skills that were never previously present in an individual\'s repertoire, thereby enhancing their overall adaptive functioning and promoting greater independence through direct instruction, practice, and generalization across settings.'],
    misconceptions: [
      "Habilitation is the same as rehabilitation",
      "Habilitation is only relevant for individuals with intellectual disabilities",
      "Habilitation is the same as education"
    ],
    taskItem: "E.02",
    category: "Ethics"
  },
  {
    id: "rr-hierarchical-relations",
    term: "Hierarchical Relations",
    domain: "B",
    correctDefinition: "In relational frame theory, relations of inclusion or subordination between stimuli (e.g., A is a type of B); the basis of categorical and taxonomic knowledge.",
    distractors: ['In relational frame theory, relations of equivalence or identity between stimuli (e.g., A is the same as B), representing sameness across different forms.', 'In relational frame theory, relations of quantitative comparison between stimuli based on a specific dimension (e.g., A is bigger than B), indicating differences.', 'In relational frame theory, relations of sequential ordering between stimuli based on their occurrence in time (e.g., A comes before B), showing temporal order.'],
    misconceptions: [
      "Hierarchical relations are the same as equivalence relations",
      "Hierarchical relations are the same as categorical relations",
      "Hierarchical relations are only relevant for verbal behavior"
    ],
    taskItem: "B.14",
    category: "Stimulus Control"
  },
  {
    id: "rr-higher-order-operant-class",
    term: "Higher-Order Operant Class",
    domain: "B",
    correctDefinition: "A response class that is defined by a common relation between behavior and its controlling variables rather than by a common topography; examples include imitation, rule-following, and problem-solving.",
    distractors: ['A response class that is defined solely by the physical form or appearance of the behavior, regardless of its function or the consequences it produces, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'A response class that is defined by the common effect it produces on the environment and the reinforcer it obtains, demonstrating functional equivalence, as measured by changes in the frequency, duration, or intensity of the target response over time.', 'A response class that is defined by the specific antecedent stimulus that consistently precedes and evokes the behavior, establishing stimulus control, defined as anything an organism does that can be measured in terms of its physical dimensions.'],
    misconceptions: [
      "Higher-order operant classes are the same as response classes",
      "Higher-order operant classes are the same as behavioral cusps",
      "Higher-order operant classes are only relevant for complex behaviors"
    ],
    taskItem: "B.09",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-history-of-reinforcement",
    term: "History of Reinforcement",
    domain: "B",
    correctDefinition: "The cumulative record of an organism's past experiences with reinforcement contingencies; shapes current behavior by establishing stimulus control, response tendencies, and the effectiveness of various reinforcers.",
    distractors: ['The specific arrangement of reinforcement contingencies currently in place for a behavior.', 'The total amount of reinforcing stimuli an organism has encountered throughout its lifetime.', 'The various types of positive and negative reinforcers that have been used with an individual.'],
    misconceptions: [
      "History of reinforcement is the same as learning history",
      "History of reinforcement only affects the current effectiveness of reinforcers",
      "History of reinforcement is the same as conditioning history"
    ],
    taskItem: "B.01",
    category: "Reinforcement"
  },
  {
    id: "rr-joint-control",
    term: "Joint Control",
    domain: "B",
    correctDefinition: "A verbal behavior process in which a response is controlled by both a verbal stimulus and a nonverbal stimulus simultaneously; the response occurs only when both controlling stimuli are present.",
    distractors: ['A process in which two individuals collaborate to maintain a third individual\'s desired behavior by consistently providing reinforcement or prompts, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'A process in which a behavior is influenced by both a verbal instruction and a physical prompt simultaneously, leading to a guided response, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'A process in which a behavior is under the combined influence of a discriminative stimulus and an establishing operation, both altering its probability.'],
    misconceptions: [
      "Joint control is the same as convergent multiple control",
      "Joint control is the same as compound verbal discrimination",
      "Joint control is only relevant for listener behavior"
    ],
    taskItem: "B.11",
    category: "Verbal Behavior"
  },
  {
    id: "rr-lag-schedule",
    term: "Lag Schedule",
    domain: "B",
    correctDefinition: "A schedule of reinforcement in which reinforcement is delivered only when the current response is different from the previous response(s); used to increase behavioral variability.",
    distractors: ['A schedule in which reinforcement is delivered after a specified time delay following the target response, provided no other responses occur.', 'A schedule in which reinforcement is contingent on a response occurring after a certain period of no responding, promoting inter-response time.', 'A schedule in which the criterion for reinforcement gradually increases, requiring more responses over time, leading to response chain development.'],
    misconceptions: [
      "Lag schedules are the same as variable schedules",
      "Lag schedules decrease behavioral variability",
      "Lag schedules are only used for problem behaviors"
    ],
    taskItem: "B.04",
    category: "Schedules of Reinforcement"
  },
  {
    id: "rr-least-to-most-response-prompts",
    term: "Least-to-Most Response Prompts",
    domain: "F",
    correctDefinition: "A prompt fading procedure in which the least intrusive response prompt is provided first, and more intrusive prompts are added only if the learner does not respond correctly; allows the learner to demonstrate independence before receiving assistance.",
    distractors: ['A prompt fading procedure in which the most intrusive prompt is initially provided to ensure correct responding from the outset, and then systematically faded through a hierarchy of less intrusive prompts as the learner demonstrates increasing independence and mastery of the target skill across trials.', 'A prompt fading procedure where the time interval between the natural discriminative stimulus and the delivery of a prompt is systematically and progressively increased, allowing the learner an extended opportunity to emit an independent and unprompted correct response before any assistance is provided.', 'A prompt fading procedure in which the physical intensity, salience, or prominence of a particular prompt is gradually and progressively decreased across successive learning opportunities, making the prompt less noticeable and ultimately allowing the learner to respond solely to the natural stimulus.'],
    misconceptions: [
      "Least-to-most response prompts are the same as most-to-least response prompts",
      "Least-to-most response prompts are an errorless learning approach",
      "Least-to-most response prompts are the same as prompt delay"
    ],
    taskItem: "F.03",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-limited-hold",
    term: "Limited Hold",
    domain: "B",
    correctDefinition: "A contingency in which reinforcement is available only for a limited period of time after the schedule requirement has been met; the response must occur within the limited hold period to produce reinforcement.",
    distractors: ['A contingency in which reinforcement is withheld for a specified duration following the occurrence of an inappropriate behavior; this aims to reduce the future probability of that behavior.', 'A contingency in which the required number of responses for reinforcement is restricted to a maximum value within a session, preventing excessive responding, which specifies the if-then relationship between a behavior and its antecedent or consequent conditions.', 'A contingency in which reinforcement is accessible only when a specific antecedent stimulus is present, signaling the availability of reinforcement for a response.'],
    misconceptions: [
      "Limited hold is the same as time-out from positive reinforcement",
      "Limited hold is the same as a fixed-interval schedule",
      "Limited hold always involves a brief time window"
    ],
    taskItem: "B.04",
    category: "Schedules of Reinforcement"
  },
  {
    id: "rr-listener",
    term: "Listener",
    domain: "B",
    correctDefinition: "In Skinner's analysis of verbal behavior, the person whose behavior is affected by the verbal behavior of the speaker; the listener's behavior is controlled by the verbal stimulus produced by the speaker.",
    distractors: ['The person who emits a verbal operant or engages in verbal behavior.', 'The individual who delivers consequences that strengthen or weaken verbal behavior.', 'The person who demonstrates verbal behavior for another individual to observe and imitate.'],
    misconceptions: [
      "The listener is always a different person from the speaker",
      "The listener only engages in receptive language",
      "The listener is the same as the audience"
    ],
    taskItem: "B.11",
    category: "Verbal Behavior"
  },
  {
    id: "rr-listener-discrimination",
    term: "Listener Discrimination",
    domain: "B",
    correctDefinition: "The ability to respond differentially to different verbal stimuli; a listener discriminates when they respond appropriately to one verbal stimulus but not to others.",
    distractors: ['The ability to produce different verbal responses to different stimuli; a speaker differentiates when they emit varied verbal behavior under different stimulus controls.', 'The ability to discriminate between different speakers based on vocal characteristics; a listener can identify who is speaking from auditory cues alone.', 'The ability to discriminate between verbal and nonverbal stimuli; a listener distinguishes between spoken words and other environmental sounds in their surroundings.'],
    misconceptions: [
      "Listener discrimination is the same as receptive language",
      "Listener discrimination is the same as auditory discrimination",
      "Listener discrimination is the same as verbal discrimination"
    ],
    taskItem: "B.11",
    category: "Verbal Behavior"
  },
  {
    id: "rr-mo-unpairing",
    term: "MO Unpairing",
    domain: "B",
    correctDefinition: "A procedure in which a conditioned motivating operation is repeatedly presented without the unconditioned event it was paired with, resulting in a decrease in its motivating effects; analogous to respondent extinction for CMOs.",
    distractors: ['A procedure in which a motivating operation is removed from the environment to reduce problem behavior; this is conceptually similar to extinction for operant behaviors, which is selected and maintained by its consequences within the organism\'s learning history.', 'A procedure in which a discriminative stimulus is repeatedly presented without reinforcement for the target response; this leads to a decrease in responding in the presence of the stimulus.', 'A procedure in which a conditioned reinforcer is repeatedly presented without pairing with a primary reinforcer, which subsequently reduces its value as a reinforcer, which has acquired its reinforcing properties through pairing with other established reinforcers.'],
    misconceptions: [
      "MO unpairing is the same as extinction",
      "MO unpairing is the same as abolishing operation",
      "MO unpairing is only used for conditioned motivating operations"
    ],
    taskItem: "B.06",
    category: "Motivating Operations"
  },
  {
    id: "rr-model-prompt",
    term: "Model Prompt",
    domain: "F",
    correctDefinition: "A response prompt in which the teacher demonstrates the correct response for the learner to imitate; requires the learner to have an imitation repertoire.",
    distractors: ['A response prompt in which the teacher physically guides the learner through the correct response; this requires direct physical contact and may involve full or partial guidance.', 'A response prompt in which the teacher verbally describes the correct response or provides instructions; this relies heavily on the listener skills of the learner.', 'A response prompt in which the teacher uses a gesture to indicate the correct response; this is a non-physical form of prompting that directs attention to a specific stimulus.'],
    misconceptions: [
      "Model prompts are the same as gestural prompts",
      "Model prompts are the most intrusive type of prompt",
      "Model prompts are the same as video modeling"
    ],
    taskItem: "F.03",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-most-to-least-response-prompts",
    term: "Most-to-Least Response Prompts",
    domain: "F",
    correctDefinition: "A prompt fading procedure in which the most intrusive response prompt is provided initially, and the level of prompting is systematically reduced over time; an errorless learning approach that ensures correct responding from the beginning.",
    distractors: ['A prompt fading procedure in which the least intrusive prompt is provided initially to allow for independent responding, and the intrusiveness of the prompt is systematically increased only as needed based on the learner\'s performance and errors, aiming to promote independent responding from the outset.', 'A prompt fading procedure in which prompts are faded by systematically increasing the time interval between the presentation of the discriminative stimulus and the delivery of the prompt, thereby encouraging the learner to respond independently before the prompt is given, fostering independent responding.', 'A prompt fading procedure in which the intensity or salience of the prompts is gradually reduced over successive trials, systematically moving from strong, highly obvious assistance to weaker, much less noticeable cues, ensuring a smooth transition to unprompted, independent performance.'],
    misconceptions: [
      "Most-to-least response prompts are the same as least-to-most response prompts",
      "Most-to-least response prompts are only appropriate for motor skills",
      "Most-to-least response prompts are the same as graduated guidance"
    ],
    taskItem: "F.03",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-multiple-control",
    term: "Multiple Control",
    domain: "B",
    correctDefinition: "A situation in which a single verbal response is controlled by more than one variable, or a single variable controls more than one verbal response; includes convergent and divergent multiple control.",
    distractors: ['A situation in which a single behavior is controlled by multiple different reinforcers concurrently; this is often observed in complex behavioral chains or sequences.', 'A situation in which a single stimulus controls multiple different behaviors; this is an example of stimulus generalization where one antecedent evokes various responses.', 'A situation in which multiple individuals or contingencies control the behavior of a single individual; this is often observed in group contingencies or social settings.'],
    misconceptions: [
      "Multiple control is always problematic",
      "Multiple control is the same as convergent multiple control",
      "Multiple control is only relevant for verbal behavior"
    ],
    taskItem: "B.13",
    category: "Verbal Behavior"
  },
  {
    id: "rr-neutral-stimulus",
    term: "Neutral Stimulus",
    domain: "B",
    correctDefinition: "A stimulus that does not elicit a respondent response and does not have reinforcing or punishing properties prior to conditioning; may become a conditioned stimulus or conditioned reinforcer through pairing.",
    distractors: ['A stimulus that has no observable effect on the behavior of an organism; it is completely ignored and does not evoke any response, either respondent or operant.', 'A stimulus that is neither perceived as pleasant nor unpleasant by an individual; it does not evoke any emotional or affective response from the organism, as identified through systematic observation and functional assessment of the environmental context.', 'A stimulus that is present in the environment but is not attended to by the organism; it is not perceived or processed and therefore has no behavioral function.'],
    misconceptions: [
      "Neutral stimuli have no effect on behavior",
      "Neutral stimuli are the same as irrelevant stimuli",
      "A stimulus that is neutral for one person is neutral for all people"
    ],
    taskItem: "B.05",
    category: "Respondent Behavior"
  },
  {
    id: "rr-nodal-stimulus",
    term: "Nodal Stimulus (Node)",
    domain: "B",
    correctDefinition: "A stimulus that connects two or more other stimuli in an equivalence class; the nodal distance between two stimuli refers to the number of nodes separating them, which affects the ease of forming equivalence relations.",
    distractors: ['The central stimulus in a matching-to-sample procedure that initiates the trial; it is the stimulus presented first, serving as the basis for the learner\'s selection among other comparison stimuli, influencing the accuracy of the matching response.', 'The sample stimulus in a matching-to-sample procedure, which is the initial stimulus presented to the learner; it is the specific item that the learner must accurately match to one of the subsequently presented comparison stimuli to demonstrate discriminative responding.', 'The stimulus that is directly trained and explicitly reinforced for its association within an equivalence class; it is the only one that receives direct instructional pairings with all other members of the class, forming the foundation for emergent relations.'],
    misconceptions: [
      "Nodal stimuli are the same as sample stimuli",
      "Nodal distance does not affect equivalence class formation",
      "Nodal stimuli are only relevant in basic research"
    ],
    taskItem: "B.14",
    category: "Stimulus Control"
  },
  {
    id: "rr-nonequivalence-relations",
    term: "Nonequivalence Relations",
    domain: "B",
    correctDefinition: "In relational frame theory, relations other than equivalence (sameness), including comparison, opposition, distinction, hierarchy, spatial, temporal, and deictic relations; the full range of relational frames.",
    distractors: ['Relations between stimuli that are not members of the same equivalence class; these stimuli are entirely unrelated concepts and do not share any functional properties.', 'Relations between stimuli that are based on their physical differences or dissimilarities; for example, distinguishing between two different colors or shapes, which is evaluated through systematic data collection and analysis to determine its effectiveness.', 'Relations between stimuli that have not been explicitly trained or derived through equivalence; these are arbitrary and do not emerge from prior learning experiences.'],
    misconceptions: [
      "Nonequivalence relations are the same as non-derived relations",
      "Nonequivalence relations are less important than equivalence relations",
      "Nonequivalence relations are the same as distinction relations"
    ],
    taskItem: "B.14",
    category: "Stimulus Control"
  },
  {
    id: "rr-nonexclusion-time-out",
    term: "Nonexclusion Time-Out",
    domain: "H",
    correctDefinition: "A time-out procedure in which the individual remains in the environment but is denied access to reinforcement for a specified period; includes contingent observation, planned ignoring, and removal of materials.",
    distractors: ['A time-out procedure in which the individual is removed from the environment entirely; this often involves moving them to a separate, less reinforcing area or room.', 'A time-out procedure in which the individual is moved to a separate room or designated area away from all reinforcing activities; this is a form of exclusionary time-out.', 'A time-out procedure in which the individual is physically restrained from engaging in problem behavior; this is a restrictive intervention and typically requires special protocols.'],
    misconceptions: [
      "Nonexclusion time-out is the same as exclusion time-out",
      "Nonexclusion time-out is less effective than exclusion time-out",
      "Nonexclusion time-out is the same as planned ignoring"
    ],
    taskItem: "H.05",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-normalization",
    term: "Normalization",
    domain: "E",
    correctDefinition: "The principle that individuals with disabilities should have access to living conditions and opportunities that are as close as possible to those of the general population; influences the selection of treatment goals and settings.",
    distractors: ['The process of making behavior conform to statistical norms within a specific population, often involving interventions designed to reduce variability in an individual\'s responses across various contexts.', 'The process of adapting interventions to be culturally appropriate and relevant to a client\'s background, ensuring that the strategies align with their values and environmental practices effectively.', 'The process of reducing the frequency of problem behavior to levels that are considered socially acceptable, achieving rates that minimize disruption without necessarily aiming for complete elimination.'],
    misconceptions: [
      "Normalization means making individuals with disabilities appear normal",
      "Normalization is the same as inclusion",
      "Normalization is the same as least restrictive environment"
    ],
    taskItem: "E.02",
    category: "Ethics"
  },
  {
    id: "rr-ontogeny",
    term: "Ontogeny",
    domain: "A",
    correctDefinition: "The developmental history of an individual organism; in behavior analysis, refers to the individual's learning history and how it shapes current behavior; one of the three levels of selection in selectionism.",
    distractors: ['The evolutionary history of a species; in behavior analysis, refers to the phylogenetic past.', 'The cultural history of a group of organisms; the learned behaviors passed down through generations.', 'The developmental history of a behavior; how a specific response changes over an individual\'s lifetime.'],
    misconceptions: [
      "Ontogeny is the same as phylogeny",
      "Ontogeny only refers to biological development",
      "Ontogeny is the same as learning history"
    ],
    taskItem: "A.01",
    category: "Philosophical Foundations"
  },
  {
    id: "rr-overselective-stimulus-control",
    term: "Overselective Stimulus Control",
    domain: "B",
    correctDefinition: "A pattern of stimulus control in which behavior is controlled by a limited subset of the available stimulus features rather than the full range of relevant features; associated with difficulties in generalization and concept formation.",
    distractors: ['A pattern of stimulus control in which behavior is controlled by an excessive number of stimulus features, leading to difficulty in ignoring irrelevant stimuli and often impeding efficient learning processes.', 'A pattern of stimulus control in which behavior is primarily controlled by irrelevant stimulus features, meaning the organism responds to non-critical aspects of the environment rather than essential cues.', 'A pattern of stimulus control in which behavior occurs in the presence of too many stimuli due to a lack of discrimination among various environmental cues, leading to broad and inefficient responding.'],
    misconceptions: [
      "Overselective stimulus control is the same as stimulus overselectivity",
      "Overselective stimulus control is always a problem",
      "Overselective stimulus control is the same as restricted stimulus control"
    ],
    taskItem: "B.07",
    category: "Stimulus Control"
  },
  {
    id: "rr-overshadowing",
    term: "Overshadowing",
    domain: "B",
    correctDefinition: "A respondent conditioning phenomenon in which a more salient stimulus in a compound stimulus acquires stronger conditioned properties than a less salient stimulus; the more salient stimulus 'overshadows' the less salient one.",
    distractors: ['A stimulus control phenomenon in which a more salient discriminative stimulus controls behavior more strongly than a less salient discriminative stimulus when they are presented together as a compound cue.', 'A reinforcement phenomenon in which a more powerful reinforcer reduces the effectiveness of a weaker one when both are presented simultaneously for a response, thereby diminishing the impact of the weaker consequence.', 'A punishment phenomenon in which a more intense punisher reduces the effectiveness of a weaker one when both are delivered simultaneously for an undesirable behavior, leading to differential suppression.'],
    misconceptions: [
      "Overshadowing is the same as blocking",
      "Overshadowing is the same as stimulus generalization",
      "Overshadowing only occurs in respondent conditioning"
    ],
    taskItem: "B.05",
    category: "Respondent Behavior"
  },
  {
    id: "rr-partition-time-out",
    term: "Partition Time-Out",
    domain: "H",
    correctDefinition: "A time-out procedure in which a partition or screen is placed between the individual and the reinforcing environment contingent on problem behavior; a form of non-exclusionary time-out.",
    distractors: ['A time-out procedure in which the individual is entirely removed from the reinforcing environment, typically to another room, which constitutes a form of exclusionary time-out with significant environmental change.', 'A time-out procedure in which the individual is moved to a designated corner or area within the same room, ensuring they are still within the general environment but without access to reinforcement.', 'A time-out procedure in which the individual is physically restrained from engaging in problem behavior, which is generally considered a highly restrictive and intrusive intervention strategy.'],
    misconceptions: [
      "Partition time-out is the same as exclusion time-out",
      "Partition time-out requires removing the individual from the environment",
      "Partition time-out is the same as seclusion time-out"
    ],
    taskItem: "H.05",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-pip",
    term: "Performance Improvement Plan (PIP)",
    domain: "G",
    correctDefinition: "A structured plan used in organizational settings to address performance deficits; specifies performance expectations, the support to be provided, and the consequences for meeting or not meeting expectations.",
    distractors: ['A formal plan for improving client outcomes in clinical settings, primarily focusing on direct service delivery enhancements and the implementation of evidence-based practices for individuals.', 'A comprehensive plan for improving the overall quality of behavior-analytic services provided, which often involves ongoing staff training, supervision, and program evaluation for systemic changes.', 'A personalized plan for improving the skills of a supervisee through targeted training and feedback, focusing specifically on individual professional development and competency acquisition.'],
    misconceptions: [
      "PIPs are only used as a precursor to termination",
      "PIPs are the same as behavior intervention plans",
      "PIPs are only appropriate for severe performance problems"
    ],
    taskItem: "G.02",
    category: "Personnel Training"
  },
  {
    id: "rr-perspective-shifting",
    term: "Perspective Shifting",
    domain: "B",
    correctDefinition: "The ability to take the perspective of another person; in relational frame theory, involves deictic relational responding (I/you, here/there, now/then); foundational to theory of mind and empathy.",
    distractors: ['The ability to shift one\'s attention from one stimulus to another in the environment, often occurring in response to a specific prompt or cue, demonstrating flexible attentional control and responding.', 'The ability to change one\'s own behavior based on the observed actions of others within a social context, which involves social learning and imitation of models in various situations.', 'The ability to discriminate between different stimuli based on their unique physical properties and their functional relationships with behavior, allowing for precise responding to specific environmental cues.'],
    misconceptions: [
      "Perspective shifting is the same as theory of mind",
      "Perspective shifting is the same as empathy",
      "Perspective shifting is only relevant for social behavior"
    ],
    taskItem: "B.14",
    category: "Stimulus Control"
  },
  {
    id: "rr-phylogeny",
    term: "Phylogeny",
    domain: "A",
    correctDefinition: "The evolutionary history of a species; in behavior analysis, refers to the species-typical behaviors and biological characteristics that are the product of natural selection; one of the three levels of selection in selectionism.",
    distractors: ['The developmental history of an individual organism, including its unique genetic predispositions and all its acquired learning experiences throughout its lifetime, influencing its current behavioral repertoire.', 'The cultural history of a group of organisms, encompassing their shared traditions, customs, and learned practices that are transmitted across generations, shaping collective behaviors and norms.', 'The history of reinforcement for a specific behavior within an individual\'s lifetime, leading to its current strength and frequency, which is a key concept in understanding operant conditioning.'],
    misconceptions: [
      "Phylogeny is the same as ontogeny",
      "Phylogeny is irrelevant to behavior analysis",
      "Phylogeny is the same as genetics"
    ],
    taskItem: "A.01",
    category: "Philosophical Foundations"
  },
  {
    id: "rr-pivotal-behavior",
    term: "Pivotal Behavior",
    domain: "H",
    correctDefinition: "A behavior that, when changed, produces widespread improvements in many other behaviors; examples include motivation, responsivity to multiple cues, self-management, and social initiations; the target of pivotal response training.",
    distractors: ['A behavior that is central to the individual\'s repertoire and is frequently emitted across various settings and conditions, indicating its prominence and generalizability in their daily functioning.', 'A behavior that, when successfully suppressed, leads to a significant decrease in other undesirable behaviors within the same response class, demonstrating a cascading effect on related problem behaviors.', 'A behavior that, when consistently reinforced, maintains its strength across different situations and with various types of reinforcers, indicating its robustness and independence from specific motivational operations.'],
    misconceptions: [
      "Pivotal behaviors are the same as keystone behaviors",
      "Pivotal behaviors are only relevant for individuals with autism",
      "Pivotal behaviors are the same as behavioral cusps"
    ],
    taskItem: "H.06",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-positive-practice-overcorrection",
    term: "Positive Practice Overcorrection",
    domain: "H",
    correctDefinition: "A component of overcorrection in which the individual is required to repeatedly practice the correct form of the behavior contingent on problem behavior; a form of positive punishment.",
    distractors: ['A component of overcorrection in which the individual is required to restore the environment to its original state or better after problem behavior, often involving a restitution component.', 'A procedure in which the individual practices appropriate behavior to earn reinforcement for demonstrating the correct response, focusing on the acquisition of new skills rather than error correction.', 'A procedure in which the individual repeatedly practices the problem behavior itself to reduce its novelty and associated reinforcing properties, which is a form of negative practice or habituation.'],
    misconceptions: [
      "Positive practice overcorrection is the same as restitutional overcorrection",
      "Positive practice overcorrection is a form of negative punishment",
      "Positive practice overcorrection is the same as overcorrection"
    ],
    taskItem: "H.05",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-principle-of-behavior",
    term: "Principle of Behavior",
    domain: "A",
    correctDefinition: "A statement of a functional relationship between behavior and its controlling variables that has been demonstrated to be reliable across organisms, behaviors, and conditions; examples include reinforcement, extinction, and stimulus control.",
    distractors: ['A rule that specifies precisely how a behavior-change procedure should be implemented in a specific context for a particular individual, guiding the application of interventions effectively.', 'A theoretical explanation for why behavior occurs, often involving hypothetical constructs or internal states of the organism, which are not directly observable or measurable within a natural science.', 'A guideline for ethical practice in behavior analysis, ensuring client welfare, maintaining professional conduct, and upholding the integrity of the profession in all intervention strategies.'],
    misconceptions: [
      "Principles of behavior are the same as behavior-change tactics",
      "Principles of behavior are the same as laws of behavior",
      "Principles of behavior are only relevant for operant behavior"
    ],
    taskItem: "A.01",
    category: "Philosophical Foundations"
  },
  {
    id: "rr-progressive-schedule",
    term: "Progressive Schedule of Reinforcement",
    domain: "B",
    correctDefinition: "A schedule in which the reinforcement requirement systematically increases (or decreases) across sessions or within a session; used to assess the reinforcing value of stimuli or to gradually increase response requirements.",
    distractors: ['A schedule in which the reinforcement requirement remains constant for a set period and then abruptly changes to a new, higher or lower, requirement for subsequent blocks of trials.', 'A schedule in which the reinforcement is delivered after a variable number of responses, with the average requirement remaining stable across an extended series of trials.', 'A schedule in which the interval between reinforcement deliveries systematically varies around a mean value, without a consistent pattern of increase or decrease over time.'],
    misconceptions: [
      "Progressive schedules are the same as progressive-ratio schedules",
      "Progressive schedules always involve increasing requirements",
      "Progressive schedules are only used in basic research"
    ],
    taskItem: "B.04",
    category: "Schedules of Reinforcement"
  },
  {
    id: "rr-progressive-ratio-schedule",
    term: "Progressive-Ratio (PR) Schedule",
    domain: "B",
    correctDefinition: "A schedule in which the ratio requirement increases systematically after each reinforcer delivery; the breakpoint (the ratio at which the organism stops responding) is used as a measure of the reinforcing value of a stimulus.",
    distractors: ['A schedule in which the ratio requirement decreases systematically after each reinforcer delivery, making reinforcement progressively easier to obtain over the course of a session.', 'A schedule in which the time interval between reinforcer deliveries systematically increases after each reinforcer delivery, making the response requirement more effortful over time.', 'A schedule in which the ratio requirement is adjusted based on the overall rate of responding, increasing when responding is high and decreasing when responding is low to maintain engagement.'],
    misconceptions: [
      "PR schedules are the same as progressive schedules",
      "The breakpoint on a PR schedule measures preference rather than reinforcing value",
      "PR schedules are only used in basic research"
    ],
    taskItem: "B.04",
    category: "Schedules of Reinforcement"
  },
  {
    id: "rr-punisher",
    term: "Punisher",
    domain: "B",
    correctDefinition: "A stimulus that, when presented or removed contingent on a behavior, decreases the future frequency of that behavior; defined functionally by its effect on behavior, not by its physical properties.",
    distractors: ['A stimulus that, when presented or removed contingent on a behavior, is subjectively unpleasant to the individual, irrespective of its observed impact on future behavior occurrences.', 'A stimulus that, when delivered after a behavior, is intended by the interventionist to decrease the future frequency of that behavior, regardless of the actual functional outcome.', 'A stimulus that, when presented, consistently evokes an emotional response of fear or anxiety, but does not necessarily alter the future probability of the preceding behavior.'],
    misconceptions: [
      "Punishers are always aversive or painful",
      "Punishers are defined by the individual's subjective experience",
      "Punishers are the same as aversive stimuli"
    ],
    taskItem: "B.02",
    category: "Punishment"
  },
  {
    id: "rr-recovery-from-punishment",
    term: "Recovery from Punishment",
    domain: "B",
    correctDefinition: "The return of a previously punished behavior to its pre-punishment rate after punishment is discontinued; analogous to spontaneous recovery in extinction.",
    distractors: ['The return of a previously suppressed behavior to its pre-punishment rate when the punisher is no longer effective due to habituation or adaptation by the organism.', 'The increase in a behavior\'s frequency that occurs when an ineffective punishment procedure is first implemented, sometimes resulting from a temporary behavioral contrast effect.', 'The return of a previously punished behavior to its pre-punishment rate when a different, less effective punishment procedure is substituted for the original, more potent one.'],
    misconceptions: [
      "Recovery from punishment is the same as spontaneous recovery",
      "Recovery from punishment means punishment was ineffective",
      "Recovery from punishment is the same as punishment contrast"
    ],
    taskItem: "B.02",
    category: "Punishment"
  },
  {
    id: "rr-reflex",
    term: "Reflex",
    domain: "B",
    correctDefinition: "An unlearned stimulus-response relationship in which a specific stimulus reliably elicits a specific response; the foundation of respondent behavior; includes both unconditioned and conditioned reflexes.",
    distractors: ['A learned stimulus-response relationship established through classical conditioning, where a previously neutral stimulus acquires the capacity to elicit a specific response.', 'A rapid, automatic behavioral response that occurs without conscious thought, often mediated by the central nervous system, and not necessarily tied to a specific eliciting stimulus.', 'A complex sequence of behaviors that is genetically predetermined and occurs in response to a specific environmental trigger, demonstrating a fixed action pattern in a species.'],
    misconceptions: [
      "Reflexes are always rapid and brief",
      "Reflexes are the same as habits",
      "Reflexes cannot be modified through conditioning"
    ],
    taskItem: "B.05",
    category: "Respondent Behavior"
  },
  {
    id: "rr-reflexive-cmo",
    term: "Reflexive Conditioned Motivating Operation (CMO-R)",
    domain: "B",
    correctDefinition: "A conditioned motivating operation that acquires its value-altering and behavior-altering effects because it has been paired with worsening conditions; its removal functions as a reinforcer.",
    distractors: ['A conditioned motivating operation that acquires its value-altering and behavior-altering effects because it has been paired with the availability of improved conditions or positive reinforcement.', 'A conditioned motivating operation that acquires its effects through pairing with an unconditioned motivating operation, like the deprivation of a primary reinforcer such as water.', 'A conditioned motivating operation that signals the impending availability of a specific reinforcer, thereby increasing the reinforcing effectiveness of that particular stimulus.'],
    misconceptions: [
      "CMO-R is the same as CMO-T",
      "CMO-R is the same as CMO-S",
      "CMO-R is the same as an establishing operation"
    ],
    taskItem: "B.06",
    category: "Motivating Operations"
  },
  {
    id: "rr-reinforcer",
    term: "Reinforcer",
    domain: "B",
    correctDefinition: "A stimulus that, when presented or removed contingent on a behavior, increases the future frequency of that behavior; defined functionally by its effect on behavior, not by its physical properties or the individual's preference.",
    distractors: ['A stimulus that, when presented or removed contingent on a behavior, is subjectively preferred by the individual, irrespective of its observed impact on future behavior occurrences.', 'A stimulus that, when delivered after a behavior, is intended by the interventionist to increase the future frequency of that behavior, regardless of the actual functional outcome.', 'A stimulus that, when presented, consistently evokes a positive emotional response, but does not necessarily alter the future probability of the preceding behavior through operant conditioning.'],
    misconceptions: [
      "Reinforcers are defined by the individual's preference",
      "Reinforcers are always pleasant or enjoyable",
      "Reinforcers are the same as rewards"
    ],
    taskItem: "B.01",
    category: "Reinforcement"
  },
  {
    id: "rr-reinforcer-abolishing-effect",
    term: "Reinforcer-Abolishing Effect",
    domain: "B",
    correctDefinition: "The value-altering effect of an abolishing operation; decreases the reinforcing effectiveness of a stimulus; for example, food satiation decreases the reinforcing value of food.",
    distractors: ['The value-altering effect of an establishing operation; increases the reinforcing effectiveness of a stimulus; for example, water deprivation increases the reinforcing value of water.', 'The behavior-altering effect of an abolishing operation; decreases the current frequency of behavior maintained by a specific reinforcer; for example, satiety reduces eating behavior.', 'The value-altering effect of an extinction procedure; gradually decreases the reinforcing effectiveness of a stimulus over time as it is no longer contingent on behavior.'],
    misconceptions: [
      "The reinforcer-abolishing effect is the same as the reinforcer-establishing effect",
      "The reinforcer-abolishing effect is the same as the behavior-altering effect",
      "The reinforcer-abolishing effect permanently eliminates the reinforcing value of a stimulus"
    ],
    taskItem: "B.06",
    category: "Motivating Operations"
  },
  {
    id: "rr-reinforcer-establishing-effect",
    term: "Reinforcer-Establishing Effect",
    domain: "B",
    correctDefinition: "The value-altering effect of an establishing operation; increases the reinforcing effectiveness of a stimulus; for example, food deprivation increases the reinforcing value of food.",
    distractors: ['The value-altering effect of an abolishing operation; decreases the reinforcing effectiveness of a stimulus; for example, food satiety decreases the reinforcing value of food.', 'The behavior-altering effect of an establishing operation; increases the current frequency of behavior maintained by a specific reinforcer; for example, deprivation increases seeking behavior.', 'The value-altering effect of a conditioning procedure; a neutral stimulus acquires reinforcing properties through pairing with an established reinforcer.'],
    misconceptions: [
      "The reinforcer-establishing effect is the same as the reinforcer-abolishing effect",
      "The reinforcer-establishing effect is the same as the evocative effect",
      "The reinforcer-establishing effect permanently increases the reinforcing value of a stimulus"
    ],
    taskItem: "B.06",
    category: "Motivating Operations"
  },
  {
    id: "rr-relational-frame",
    term: "Relational Frame",
    domain: "B",
    correctDefinition: "In relational frame theory, a learned pattern of relating stimuli in a specific way that is defined by mutual entailment, combinatorial entailment, and transformation of stimulus functions; the basic unit of human language and cognition.",
    distractors: ['In stimulus equivalence, a learned pattern of responding where stimuli acquire similar functions based on trained relations of reflexivity, symmetry, and transitivity in a specific context.', 'A verbal operant in which an individual describes the perceived relationships between stimuli, such as \'bigger than\' or \'opposite of,\' without directly experiencing those specific trained relations.', 'A cognitive schema that organizes an individual\'s understanding of how different stimuli are interconnected, influencing their interpretation and prediction of events in the environment.'],
    misconceptions: [
      "Relational frames are the same as stimulus equivalence classes",
      "Relational frames are the same as verbal operants",
      "Relational frames are only relevant for complex verbal behavior"
    ],
    taskItem: "B.14",
    category: "Stimulus Control"
  },
  {
    id: "rr-relevance-of-behavior-rule",
    term: "Relevance of Behavior Rule",
    domain: "E",
    correctDefinition: "An ethical guideline stating that behavior analysts should only target behaviors that are relevant and meaningful to the client's life; goals should be socially significant and improve the client's quality of life.",
    distractors: ['An ethical guideline stating that behavior analysts should only use interventions supported by empirical research.', 'An ethical guideline stating that behavior analysts should only target behaviors that are directly observable.', 'An ethical guideline stating that behavior analysts should only target behaviors that are socially significant.'],
    misconceptions: [
      "The relevance of behavior rule is the same as social validity",
      "The relevance of behavior rule only applies to problem behaviors",
      "The relevance of behavior rule is the same as the least restrictive alternative"
    ],
    taskItem: "E.02",
    category: "Ethics"
  },
  {
    id: "rr-repertoire",
    term: "Repertoire",
    domain: "A",
    correctDefinition: "The total collection of behaviors an organism is capable of performing at a given time; shaped by the organism's genetic endowment and learning history.",
    distractors: ['The collection of all learned behaviors that an individual has acquired through direct and indirect contingencies of reinforcement.', 'The set of skills and behaviors an organism consistently displays across various settings and in the presence of different stimuli.', 'The range of behaviors an organism is motivated to engage in under optimal conditions, influencing future learning opportunities.'],
    misconceptions: [
      "Repertoire is the same as skills",
      "Repertoire only includes operant behaviors",
      "Repertoire is fixed and cannot be changed"
    ],
    taskItem: "A.01",
    category: "Philosophical Foundations"
  },
  {
    id: "rr-response",
    term: "Response",
    domain: "A",
    correctDefinition: "A single instance of a behavior; a specific occurrence of a behavior class; defined by its physical dimensions (topography, magnitude, duration) rather than by its function or meaning.",
    distractors: ['A specific action or set of actions that occurs in the presence of a particular antecedent stimulus, often leading to a consequence, as measured by changes in the frequency, duration, or intensity of the target response over time.', 'Any observable and measurable behavior that is emitted by an organism, which can be quantified and analyzed for functional relations, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'An instance of behavior that is part of a larger behavioral class and is influenced by environmental variables preceding and following it, defined as anything an organism does that can be measured in terms of its physical dimensions.'],
    misconceptions: [
      "Response is the same as behavior",
      "Response always refers to a reaction to a stimulus",
      "Response is the same as reaction"
    ],
    taskItem: "A.01",
    category: "Philosophical Foundations"
  },
  {
    id: "rr-response-blocking",
    term: "Response Blocking",
    domain: "H",
    correctDefinition: "A procedure in which the practitioner physically prevents the completion of a problem behavior; used to prevent self-injury, property destruction, or other harmful behaviors; a form of positive punishment or extinction depending on the function.",
    distractors: ['A procedure in which an individual is required to repeatedly perform a desirable, appropriate behavior or an overcorrection procedure contingent on the occurrence of an unwanted behavior, typically serving as a form of punishment to decrease future instances of that behavior.', 'A procedure where access to an identified reinforcer is denied or removed for a specific period of time immediately following an instance of problem behavior, resulting in a decrease in the future probability of that behavior, often implemented using time-out.', 'A procedure in which the practitioner physically or verbally guides the individual through a series of steps to engage in an alternative, appropriate behavior that serves the same function as the problem behavior, teaching a replacement skill and reducing maladaptive responses.'],
    misconceptions: [
      "Response blocking is the same as RIRD",
      "Response blocking is always a form of punishment",
      "Response blocking is the same as physical restraint"
    ],
    taskItem: "H.05",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-rird",
    term: "Response Interruption and Redirection (RIRD)",
    domain: "H",
    correctDefinition: "A procedure in which a problem behavior is interrupted and the individual is redirected to engage in an alternative behavior; commonly used for vocal stereotypy and other automatically reinforced behaviors.",
    distractors: ['A procedure in which the environmental conditions that typically precede a problem behavior are systematically altered to prevent its occurrence, thereby reducing the likelihood of the behavior before it even begins to manifest.', 'A procedure where a practitioner physically intervenes to prevent an individual from completing a problematic action, often used for self-injurious behavior or elopement, to ensure safety and block the maladaptive response from occurring.', 'A procedure in which the individual is prompted to engage in a functional communication response instead of exhibiting the problem behavior, teaching a more appropriate way to gain access to reinforcement or escape aversive stimuli.'],
    misconceptions: [
      "RIRD is the same as response blocking",
      "RIRD is only used for vocal stereotypy",
      "RIRD is the same as BCIS"
    ],
    taskItem: "H.05",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-response-prompts",
    term: "Response Prompts",
    domain: "F",
    correctDefinition: "Supplemental stimuli that are added to the natural discriminative stimulus to increase the probability of a correct response; include verbal, gestural, model, and physical prompts; must be faded to prevent prompt dependency.",
    distractors: ['Supplemental stimuli that are added to the instructional materials to make the discriminative stimulus more noticeable or distinct for the learner, thereby increasing the salience of the S^D itself; examples include highlighting, magnifying, or repositioning the target stimulus.', 'Supplemental stimuli that are provided after a learner makes an incorrect response to guide them toward the correct answer in subsequent trials, often used as error correction procedures to prevent further errors and promote accurate responding.', 'Supplemental stimuli that are provided to the learner to increase the likelihood of attending to the relevant features of the discriminative stimulus, such as pointing to the correct picture or verbally emphasizing a particular instruction; must also be systematically faded.'],
    misconceptions: [
      "Response prompts are the same as stimulus prompts",
      "Response prompts are always delivered by another person",
      "Response prompts are the same as cues"
    ],
    taskItem: "F.03",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-response-deprivation-hypothesis",
    term: "Response-Deprivation Hypothesis",
    domain: "B",
    correctDefinition: "The principle that any behavior can function as a reinforcer if access to it is restricted below its baseline level; provides a behavioral account of reinforcement that does not require the concept of drive or need.",
    distractors: ['The principle that access to a high-frequency behavior can function as a powerful reinforcer for a low-frequency behavior, based on the relative probability of their occurrence in an unrestricted environment, thereby explaining reinforcement without appealing to deprivation.', 'The principle that the effectiveness of a particular reinforcing stimulus or activity decreases significantly as an organism experiences prolonged exposure to it, leading to satiation and a reduced desire for that specific reinforcer over time.', 'The principle that behaviors that individuals engage in at higher rates or with greater frequency can be effectively utilized to reinforce other behaviors that are performed at lower rates, thereby demonstrating a clear preference hierarchy among activities.'],
    misconceptions: [
      "The response-deprivation hypothesis is the same as the Premack principle",
      "The response-deprivation hypothesis only applies to high-probability behaviors",
      "The response-deprivation hypothesis is the same as deprivation as a motivating operation"
    ],
    taskItem: "B.01",
    category: "Reinforcement"
  },
  {
    id: "rr-restitutional-overcorrection",
    term: "Restitutional Overcorrection",
    domain: "H",
    correctDefinition: "A component of overcorrection in which the individual is required to restore the environment to a better-than-original state contingent on problem behavior; a form of positive punishment.",
    distractors: ['A component of overcorrection in which the individual is required to repeatedly engage in an appropriate alternative behavior, correcting their prior action.', 'A procedure where the individual is required to perform an effortful task unrelated to the problem behavior, contingent on its occurrence, defined as anything an organism does that can be measured in terms of its physical dimensions.', 'A procedure where the individual must practice a more appropriate form of behavior several times, contingent on an inappropriate behavior, defined as anything an organism does that can be measured in terms of its physical dimensions.'],
    misconceptions: [
      "Restitutional overcorrection is the same as positive practice overcorrection",
      "Restitutional overcorrection is a form of negative punishment",
      "Restitutional overcorrection is the same as overcorrection"
    ],
    taskItem: "H.05",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-schedule-of-reinforcement",
    term: "Schedule of Reinforcement",
    domain: "B",
    correctDefinition: "A rule that specifies which occurrences of a behavior will be reinforced; determines the pattern and rate of responding; includes ratio, interval, and time-based schedules.",
    distractors: ['A systematic arrangement of environmental stimuli that signals the availability or unavailability of reinforcement for a particular behavior.', 'A specific plan detailing the conditions under which a behavior will be extinguished, leading to a decrease in its future probability.', 'A method used to assess the relative effectiveness of different reinforcers by presenting them simultaneously and observing choices, as measured by changes in the frequency, duration, or intensity of the target response over time.'],
    misconceptions: [
      "Schedules of reinforcement are the same as reinforcement procedures",
      "Schedules of reinforcement only apply to operant behavior",
      "Schedules of reinforcement are the same as contingencies of reinforcement"
    ],
    taskItem: "B.04",
    category: "Schedules of Reinforcement"
  },
  {
    id: "rr-selection-based-verbal-behavior",
    term: "Selection-Based Verbal Behavior",
    domain: "B",
    correctDefinition: "Verbal behavior in which the speaker selects a response from an array of alternatives rather than producing a novel response; includes pointing, selecting pictures, and using AAC devices with pre-programmed messages.",
    distractors: ['Verbal behavior in which the speaker generates an original verbal utterance that has not been directly taught or modeled previously, demonstrating a recombinative generalization of previously learned verbal units, often seen in novel sentence construction.', 'Verbal behavior in which the speaker imitates the verbalizations of another individual, often without understanding the meaning or function of the sounds, and is under the control of an auditory stimulus that matches the response topography.', 'Verbal behavior in which the speaker names objects, actions, or events in their environment, under the control of nonverbal stimuli, and is a foundational verbal operant that establishes a connection between a referent and its label.'],
    misconceptions: [
      "Selection-based verbal behavior is the same as topography-based verbal behavior",
      "Selection-based verbal behavior is less complex than topography-based verbal behavior",
      "Selection-based verbal behavior is only used with non-verbal individuals"
    ],
    taskItem: "B.11",
    category: "Verbal Behavior"
  },
  {
    id: "rr-simple-discrimination",
    term: "Simple Discrimination",
    domain: "B",
    correctDefinition: "A discrimination in which the correct response is determined by the presence or absence of a single discriminative stimulus; the learner responds in the presence of the SD and not in the presence of the SΔ.",
    distractors: ['A discrimination in which the correct response depends on the relationships among two or more antecedent stimuli, where these relationships themselves serve as the discriminative stimulus for a specific behavior, rather than the absolute properties of any single stimulus.', 'A discrimination where the learner must respond differentially to various gradations or changes in the intensity, magnitude, or other quantitative aspects of a single stimulus dimension, demonstrating fine-grained control over their responding.', 'A discrimination in which the learner is systematically taught to emit a specific operant response in the presence of one particular stimulus while withholding that response in the presence of other, related but irrelevant stimuli present in the environment.'],
    misconceptions: [
      "Simple discriminations are the same as conditional discriminations",
      "Simple discriminations are always easier to learn than conditional discriminations",
      "Simple discriminations are the same as stimulus control"
    ],
    taskItem: "B.07",
    category: "Stimulus Control"
  },
  {
    id: "rr-simple-verbal-discrimination",
    term: "Simple Verbal Discrimination",
    domain: "B",
    correctDefinition: "A verbal discrimination in which the correct response is controlled by a single verbal stimulus; the learner responds differently to one verbal stimulus than to others.",
    distractors: ['A verbal discrimination in which the correct response is controlled by multiple verbal stimuli; the learner responds to a complex verbal antecedent.', 'A verbal discrimination in which the learner must select one verbal stimulus from a presented array; the response is to a verbal instruction.', 'A verbal discrimination in which the learner emits a vocal response to a non-verbal environmental cue; the response is not controlled by verbal stimuli.'],
    misconceptions: [
      "Simple verbal discriminations are the same as compound verbal discriminations",
      "Simple verbal discriminations are the same as conditional verbal discriminations",
      "Simple verbal discriminations are only relevant for listener behavior"
    ],
    taskItem: "B.11",
    category: "Verbal Behavior"
  },
  {
    id: "rr-simple-to-complex-testing",
    term: "Simple-to-Complex Testing Protocol",
    domain: "B",
    correctDefinition: "A testing procedure in which simpler stimulus relations are tested before more complex ones to assess the emergence of equivalence classes; ensures that derived relations are genuinely emergent rather than trained.",
    distractors: ['A testing procedure in which difficult stimulus relations are tested before simpler ones to assess the limits of derived relations; ensures that complex relations are not merely rote memorization.', 'A testing procedure in which conditional discriminations are assessed prior to basic discriminations; ensures that complex responding is not dependent on prior simple learning.', 'A testing procedure in which complex behavioral chains are evaluated before individual skills; ensures that component skills are not merely isolated behaviors, defined as anything an organism does that can be measured in terms of its physical dimensions.'],
    misconceptions: [
      "Simple-to-complex testing is the same as probe testing",
      "Simple-to-complex testing is only used in basic research",
      "Simple-to-complex testing is the same as curriculum-based assessment"
    ],
    taskItem: "B.14",
    category: "Stimulus Control"
  },
  {
    id: "rr-socially-mediated-contingency",
    term: "Socially Mediated Contingency",
    domain: "B",
    correctDefinition: "A contingency in which the consequence of a behavior is delivered through the actions of another person; the reinforcing or punishing stimulus is produced by a social mediator rather than directly by the behavior.",
    distractors: ['A contingency in which the consequence of a behavior is directly produced by the behavior itself; the reinforcing or punishing stimulus occurs without intervention from others.', 'A contingency in which the consequence is delivered by an automated system or piece of equipment; the reinforcing or punishing stimulus is presented mechanically, which specifies the if-then relationship between a behavior and its antecedent or consequent conditions.', 'A contingency in which the consequence is a direct result of the natural environment\'s reaction; the reinforcing or punishing stimulus occurs inherently, which specifies the if-then relationship between a behavior and its antecedent or consequent conditions.'],
    misconceptions: [
      "Socially mediated contingencies are the same as automatic contingencies",
      "Socially mediated contingencies are always intentional",
      "Socially mediated contingencies are the same as social reinforcement"
    ],
    taskItem: "B.01",
    category: "Reinforcement"
  },
  {
    id: "rr-spatial-relations",
    term: "Spatial Relations",
    domain: "B",
    correctDefinition: "In relational frame theory, relations defined by the spatial position of stimuli relative to each other (e.g., above/below, in front of/behind, near/far); the basis of spatial reasoning and navigation.",
    distractors: ['In relational frame theory, relations defined by the temporal sequence of events (e.g., before/after, first/last); the basis of historical accounts and sequencing tasks.', 'In relational frame theory, relations defined by the hierarchical arrangement of items (e.g., superior/subordinate, part/whole); the basis of categorization and classification.', 'In relational frame theory, relations defined by the physical attributes of objects (e.g., color, size, shape); the basis of perceptual discrimination and feature analysis.'],
    misconceptions: [
      "Spatial relations are the same as deictic relations",
      "Spatial relations are the same as temporal relations",
      "Spatial relations are only relevant for nonverbal behavior"
    ],
    taskItem: "B.14",
    category: "Stimulus Control"
  },
  {
    id: "rr-speaker",
    term: "Speaker",
    domain: "B",
    correctDefinition: "In Skinner's analysis of verbal behavior, the person whose behavior is reinforced by the mediation of a listener; the speaker produces verbal behavior that affects the behavior of the listener.",
    distractors: ['The person who is the recipient of verbal behavior and whose behavior is occasioned by it.', 'The individual who provides the consequence for the verbal behavior of another person.', 'The person who serves as a model for the acquisition of new verbal responses.'],
    misconceptions: [
      "The speaker is always a different person from the listener",
      "The speaker only engages in expressive language",
      "The speaker is the same as the teacher"
    ],
    taskItem: "B.11",
    category: "Verbal Behavior"
  },
  {
    id: "rr-stimulus",
    term: "Stimulus",
    domain: "A",
    correctDefinition: "Any energy change in the environment that affects the behavior of an organism; may be physical, chemical, or biological; includes both external events and internal (private) events.",
    distractors: ['An event or condition that occurs immediately before an organism\'s behavior; it functions as an antecedent that may evoke or abate responding.', 'An event or condition that occurs immediately after an organism\'s behavior; it functions as a consequence that may strengthen or weaken responding.', 'Any change in the environment that an organism or individual consciously perceives; it must be detectable and interpreted by the organism, which is evaluated through systematic data collection and analysis to determine its effectiveness.'],
    misconceptions: [
      "Stimuli are always external, physical events",
      "Stimuli are the same as antecedents",
      "Stimuli must be perceived by the organism to qualify as stimuli"
    ],
    taskItem: "A.01",
    category: "Philosophical Foundations"
  },
  {
    id: "rr-stimulus-blocking",
    term: "Stimulus Blocking",
    domain: "B",
    correctDefinition: "A respondent conditioning phenomenon in which prior conditioning to one element of a compound stimulus prevents conditioning to a new element added to the compound; the previously conditioned element 'blocks' conditioning to the new element.",
    distractors: ['A respondent conditioning phenomenon in which a new stimulus overshadows an existing conditioned stimulus; the more intense stimulus prevents association.', 'A respondent conditioning phenomenon in which prior conditioning to one element of a compound stimulus generalizes to other elements; associations spread.', 'A respondent conditioning phenomenon in which a novel stimulus fails to acquire control over responding due to lack of salience; it is ignored, as identified through systematic observation and functional assessment of the environmental context.'],
    misconceptions: [
      "Stimulus blocking is the same as overshadowing",
      "Stimulus blocking is the same as response blocking",
      "Stimulus blocking only occurs in operant conditioning"
    ],
    taskItem: "B.05",
    category: "Respondent Behavior"
  },
  {
    id: "rr-stimulus-discrimination-training",
    term: "Stimulus Discrimination Training",
    domain: "B",
    correctDefinition: "A procedure in which differential reinforcement is used to establish stimulus control; a behavior is reinforced in the presence of the SD and not reinforced (or punished) in the presence of the SΔ.",
    distractors: ['A procedure in which differential reinforcement is used to establish stimulus generalization; a behavior is reinforced in the presence of an array of similar stimuli, demonstrating responding across various untrained antecedent conditions.', 'A procedure in which differential reinforcement is used to establish concept formation; a behavior is reinforced consistently for all members of a specific stimulus class, while not being reinforced for non-members of that particular class.', 'A procedure in which differential reinforcement is used to establish response differentiation; a specific physical form, intensity, or duration of a response is consistently reinforced, while other forms of the same response are not reinforced or are put on extinction.'],
    misconceptions: [
      "Stimulus discrimination training is the same as stimulus control",
      "Stimulus discrimination training requires punishment of responses to the SΔ",
      "Stimulus discrimination training is the same as matching-to-sample"
    ],
    taskItem: "B.07",
    category: "Stimulus Control"
  },
  {
    id: "rr-stimulus-generalization-gradient",
    term: "Stimulus Generalization Gradient",
    domain: "B",
    correctDefinition: "A graphical representation of the relationship between the similarity of a stimulus to the training stimulus and the rate of responding; shows that responding is highest to the training stimulus and decreases as stimuli become less similar.",
    distractors: ['A graphical representation of the relationship between the magnitude of reinforcement delivered and the frequency of an emitted response; illustrates how the strength or quantity of a consequence directly affects the likelihood and rate at which a specific behavior will occur again in the future.', 'A graphical representation of the relationship between the physical property of an antecedent stimulus and the intensity of a behavioral reaction; demonstrates how variations in the characteristics of events preceding a behavior can influence the magnitude or force of the subsequent response.', 'A graphical representation of the relationship between the amount of direct instruction provided during a learning task and the speed of subsequent skill acquisition; clearly illustrates the overall efficiency of various teaching methodologies in facilitating the rapid mastery of new skills.'],
    misconceptions: [
      "The stimulus generalization gradient is the same as the generalization gradient",
      "The stimulus generalization gradient is always bell-shaped",
      "The stimulus generalization gradient is only relevant for respondent behavior"
    ],
    taskItem: "B.08",
    category: "Stimulus Control"
  },
  {
    id: "rr-stimulus-preference-assessment",
    term: "Stimulus Preference Assessment",
    domain: "F",
    correctDefinition: "A systematic procedure for identifying stimuli that an individual prefers; methods include free operant, single stimulus, paired stimulus (MSWO), and multiple stimulus without replacement (MSWO) assessments; identifies potential reinforcers.",
    distractors: ['A systematic procedure for identifying stimuli that an individual actively seeks to avoid or escape; methods include indirect assessment, aversion testing, and negative reinforcement probes; ultimately identifies potential punishers and informs intervention strategies.', 'A systematic procedure for identifying the environmental variables that reliably maintain challenging behaviors; methods include functional analysis, descriptive assessment, and indirect assessment; aims to determine the function of problem behaviors for intervention planning.', 'A systematic procedure for identifying the antecedent events or conditions that reliably precede the occurrence of a specific behavior; methods include conditional probability analysis, scatterplots, and ABC data collection; helps in understanding triggers and developing proactive interventions.'],
    misconceptions: [
      "Stimulus preference assessments identify reinforcers rather than preferred stimuli",
      "The most preferred stimulus in a preference assessment will always function as a reinforcer",
      "Stimulus preference assessments are the same as reinforcer assessments"
    ],
    taskItem: "F.02",
    category: "Assessment"
  },
  {
    id: "rr-stimulus-prompts",
    term: "Stimulus Prompts",
    domain: "F",
    correctDefinition: "Supplemental stimuli that are modifications of the natural discriminative stimulus to increase the probability of a correct response; include within-stimulus prompts and extra-stimulus prompts; faded by changing the stimulus back to its natural form.",
    distractors: ['Supplemental stimuli that are modifications of the natural discriminative stimulus to decrease the probability of an incorrect response; include within-stimulus prompts and extra-stimulus prompts; faded by removing them.', 'Supplemental stimuli that are provided by another individual to guide the learner\'s correct behavioral response; include verbal prompts and gestural prompts; faded by reducing their intrusiveness.', 'Supplemental stimuli that are modifications of the learner\'s response to increase the probability of a correct response; include physical prompts and modeling prompts; faded by reducing assistance.'],
    misconceptions: [
      "Stimulus prompts are the same as response prompts",
      "Stimulus prompts are always modifications of the physical properties of the SD",
      "Stimulus prompts are the same as extra-stimulus prompts"
    ],
    taskItem: "F.03",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-stimulus-control-topographies",
    term: "Stimulus-Control Topographies",
    domain: "B",
    correctDefinition: "The different forms of stimulus control that can be established over behavior; includes simple discriminations, conditional discriminations, and higher-order stimulus control.",
    distractors: ['The various observable forms that a specific behavior can exhibit when it is reliably occasioned by an antecedent event, demonstrating its physical characteristics.', 'The different types of antecedent events that consistently evoke or abate particular operant behaviors, indicating their functional relationship with responses.', 'The various methodologies employed to quantitatively assess the degree to which an antecedent event influences the probability of a subsequent behavior occurring.'],
    misconceptions: [
      "Stimulus-control topographies are the same as response topographies",
      "Stimulus-control topographies are the same as types of discriminative stimuli",
      "Stimulus-control topographies are only relevant for verbal behavior"
    ],
    taskItem: "B.07",
    category: "Stimulus Control"
  },
  {
    id: "rr-stimulus-stimulus-pairing",
    term: "Stimulus-Stimulus Pairing",
    domain: "B",
    correctDefinition: "A procedure in which a neutral stimulus is repeatedly presented together with a stimulus that already has reinforcing properties, resulting in the neutral stimulus acquiring conditioned reinforcing properties.",
    distractors: ['A procedure in which a neutral stimulus is consistently presented alongside an unconditioned stimulus to reliably elicit an involuntary, reflexive respondent behavior.', 'A procedure where an antecedent cue is presented immediately prior to a positive consequence to enhance its evocative effect on a specific operant response, as measured by changes in the frequency, duration, or intensity of the target response over time.', 'A procedure where two distinct, previously unrelated stimuli are consistently presented simultaneously to establish a conditional relationship between them, which is evaluated through systematic data collection and analysis to determine its effectiveness.'],
    misconceptions: [
      "Stimulus-stimulus pairing is the same as respondent conditioning",
      "Stimulus-stimulus pairing always produces a conditioned reinforcer",
      "Stimulus-stimulus pairing is the same as classical conditioning"
    ],
    taskItem: "B.05",
    category: "Respondent Behavior"
  },
  {
    id: "rr-supervisee-competency-assessment",
    term: "Supervisee Competency Assessment",
    domain: "G",
    correctDefinition: "A systematic evaluation of a supervisee's skills and knowledge to identify areas of strength and areas requiring additional training; used to guide the content and focus of supervision.",
    distractors: ['A formal review of a supervisee\'s overall performance.', 'A detailed analysis of a supervisee\'s ethical conduct.', 'A process for evaluating a supervisee\'s ability to apply ABA principles.'],
    misconceptions: [
      "Supervisee competency assessment is the same as performance evaluation",
      "Supervisee competency assessment is only conducted at the beginning of supervision",
      "Supervisee competency assessment is the same as the BACB competency checklist"
    ],
    taskItem: "G.01",
    category: "Personnel Training"
  },
  {
    id: "rr-surrogate-cmo",
    term: "Surrogate Conditioned Motivating Operation (CMO-S)",
    domain: "B",
    correctDefinition: "A conditioned motivating operation that acquires its value-altering and behavior-altering effects because it has been paired with an unconditioned motivating operation; it substitutes for the unconditioned MO.",
    distractors: ['A conditioned motivating operation that acquires its value-altering and behavior-altering effects due to its consistent association with a highly aversive environmental event.', 'A conditioned motivating operation that acquires its value-altering and behavior-altering effects because it reliably predicts the availability of a highly desired item.', 'A conditioned motivating operation that acquires its value-altering and behavior-altering effects through its direct pairing with another established conditioned reinforcer.'],
    misconceptions: [
      "CMO-S is the same as CMO-R",
      "CMO-S is the same as CMO-T",
      "CMO-S is the same as an establishing operation"
    ],
    taskItem: "B.06",
    category: "Motivating Operations"
  },
  {
    id: "rr-taking-dictation",
    term: "Taking Dictation",
    domain: "B",
    correctDefinition: "A verbal operant in which the speaker writes what another person says; involves point-to-point correspondence between the spoken stimulus and the written response; a form of transcription.",
    distractors: ['A verbal operant in which the speaker vocalizes written words or sentences from a text, demonstrating point-to-point correspondence between the written stimulus and the vocal response.', 'A verbal operant in which the speaker manually reproduces written text by hand without a vocal model, maintaining formal similarity between the source and the product.', 'A verbal operant in which the speaker produces written responses based on previously learned information, without an immediate vocal or written model present.'],
    misconceptions: [
      "Taking dictation is the same as copying text",
      "Taking dictation requires understanding the meaning of what is being dictated",
      "Taking dictation is the same as textual behavior"
    ],
    taskItem: "B.11",
    category: "Verbal Behavior"
  },
  {
    id: "rr-tandem-schedule",
    term: "Tandem Schedule (Tand)",
    domain: "B",
    correctDefinition: "A compound schedule in which two or more component schedules are linked in a sequence without discriminative stimuli to signal which component is in effect; the unlabeled version of a chained schedule.",
    distractors: ['A stimulus that has acquired reinforcing properties through its systematic pairing with other stimuli that already function as established reinforcers for the individual.', 'A stimulus in the presence of which a behavior has been placed on extinction and therefore occurs at a lower rate than in other stimulus conditions in the environment.', 'A stimulus that has acquired the ability to elicit a conditioned response through repeated pairing with an unconditioned stimulus in classical conditioning procedures.'],
    misconceptions: [
      "Tandem schedules are the same as chained schedules",
      "Tandem schedules are the same as multiple schedules",
      "Tandem schedules are only used in basic research"
    ],
    taskItem: "B.04",
    category: "Schedules of Reinforcement"
  },
  {
    id: "rr-target-behavior",
    term: "Target Behavior",
    domain: "F",
    correctDefinition: "The specific behavior selected for measurement and change in a behavior-change program; must be operationally defined and socially significant; may be a behavior to increase (acquisition target) or decrease (reduction target).",
    distractors: ['The specific behavior that poses the most significant challenge or risk for the individual, requiring immediate intervention to ensure safety and well-being; often prioritized due to its potential for harm or interference with learning, necessitating rapid behavior reduction strategies.', 'The specific behavior that is observed with the highest frequency during the initial assessment phase, indicating its prominence in the individual\'s repertoire; this behavior often becomes a focus for intervention, either for reduction or for shaping into more appropriate forms.', 'The specific behavior that is predicted to show the most rapid improvement with intervention, based on its current frequency and the ease of reinforcement; this behavior may be selected as an initial focus to build momentum and demonstrate the effectiveness of the behavior plan.'],
    misconceptions: [
      "Target behaviors are always problem behaviors",
      "Target behaviors are the same as behavioral goals",
      "Target behaviors must be directly observable to qualify"
    ],
    taskItem: "F.01",
    category: "Assessment"
  },
  {
    id: "rr-temporal-relations",
    term: "Temporal Relations",
    domain: "B",
    correctDefinition: "In relational frame theory, relations defined by the temporal order of stimuli (e.g., before/after, first/last); the basis of temporal reasoning and planning.",
    distractors: ['In relational frame theory, relations defined by the physical location or spatial arrangement of stimuli, such as \'inside\' or \'next to,\' influencing spatial reasoning.', 'In relational frame theory, relations defined by the organizational structure of items, such as \'part of\' or \'category of,\' supporting hierarchical understanding.', 'In relational frame theory, relations defined by the observable qualities of objects, such as \'bigger than\' or \'same color as,\' facilitating comparative analysis.'],
    misconceptions: [
      "Temporal relations are the same as deictic relations",
      "Temporal relations are the same as spatial relations",
      "Temporal relations are only relevant for verbal behavior"
    ],
    taskItem: "B.14",
    category: "Stimulus Control"
  },
  {
    id: "rr-topography-based-verbal-behavior",
    term: "Topography-Based Verbal Behavior",
    domain: "B",
    correctDefinition: "Verbal behavior in which the speaker produces a novel verbal response (e.g., speaking, signing, writing); contrasted with selection-based verbal behavior in which the speaker selects from an array of alternatives.",
    distractors: ['Verbal behavior in which the speaker selects a response from an array of alternatives, demonstrating control by the physical form of the response selected from the options.', 'Verbal behavior in which the speaker selects a response from an array of alternatives, where the specific response is determined by the listener\'s subsequent behavior.', 'Verbal behavior in which the speaker selects a response from an array of alternatives, with the selection being solely under the control of a specific discriminative stimulus.'],
    misconceptions: [
      "Topography-based verbal behavior is the same as selection-based verbal behavior",
      "Topography-based verbal behavior is always more complex than selection-based verbal behavior",
      "Topography-based verbal behavior is only vocal verbal behavior"
    ],
    taskItem: "B.11",
    category: "Verbal Behavior"
  },
  {
    id: "rr-training-structure",
    term: "Training Structure",
    domain: "I",
    correctDefinition: "The arrangement of instructional conditions, including the setting, materials, prompting procedures, reinforcement schedule, and trial format, used to teach a target skill; affects the efficiency and generalization of learning.",
    distractors: ['The sequential arrangement of skills to be taught within a curriculum, outlining the logical progression of learning objectives and necessary prerequisite skills, often depicted in a scope and sequence document to guide instruction across different levels of proficiency.', 'The overall organizational framework of a training program, including aspects like staffing, funding allocation, and administrative oversight for all activities, ensuring resources are effectively managed to support the delivery of educational services and achieve program goals.', 'The physical arrangement of the training environment, such as the classroom setup, lighting conditions, and seating arrangements, optimized for learning by minimizing distractions and promoting engagement, thereby enhancing the overall effectiveness of instructional delivery.'],
    misconceptions: [
      "Training structure is the same as instructional format",
      "Training structure is the same as task analysis",
      "Training structure is only relevant for discrete trial training"
    ],
    taskItem: "I.02",
    category: "Skill Acquisition"
  },
  {
    id: "rr-transformation-of-function",
    term: "Transformation of Function",
    domain: "B",
    correctDefinition: "In relational frame theory, the process by which the psychological functions of one stimulus are transferred to other stimuli in the same relational network; allows the behavioral functions of stimuli to be derived rather than directly conditioned.",
    distractors: ['The process by which a conditioned reinforcer, initially established through direct pairing with a primary reinforcer, transfers its reinforcing properties to other previously neutral stimuli through repeated pairings, thus creating an expanded network of effective secondary reinforcers.', 'The process by which the evocative or reinforcing function of a behavior changes as a direct result of the systematic application of extinction procedures, leading to a significant and sustained decrease in its future occurrence under similar environmental conditions and motivating operations.', 'The process by which a previously neutral stimulus acquires new evocative or discriminative functions through direct and consistent pairing with an unconditioned stimulus or an established discriminative stimulus, thereby establishing a conditioned respondent reaction or a discriminative stimulus.'],
    misconceptions: [
      "Transformation of function is the same as transfer of stimulus control",
      "Transformation of function is the same as stimulus equivalence",
      "Transformation of function only applies to reinforcing functions"
    ],
    taskItem: "B.14",
    category: "Stimulus Control"
  },
  {
    id: "rr-transitive-cmo",
    term: "Transitive Conditioned Motivating Operation (CMO-T)",
    domain: "B",
    correctDefinition: "A conditioned motivating operation that establishes the value of another stimulus as a reinforcer and evokes behavior that has been reinforced by that stimulus; it makes another stimulus a reinforcer.",
    distractors: ['A conditioned motivating operation that establishes the value of a specific stimulus as a punisher and evokes behavior that has terminated that stimulus; it makes another stimulus aversive.', 'A conditioned motivating operation that signals the upcoming availability of reinforcement, evoking behavior that has been reinforced by that stimulus; it functions as a discriminative stimulus.', 'A conditioned motivating operation that acquires its effects through pairing with an unconditioned MO, establishing a conditioned reinforcer; it gains its value from association.'],
    misconceptions: [
      "CMO-T is the same as CMO-R",
      "CMO-T is the same as CMO-S",
      "CMO-T is the same as an establishing operation"
    ],
    taskItem: "B.06",
    category: "Motivating Operations"
  },
  {
    id: "rr-unconditioned-negative-reinforcer",
    term: "Unconditioned Negative Reinforcer",
    domain: "B",
    correctDefinition: "A stimulus that functions as a negative reinforcer (its removal increases behavior) without any prior learning history; also called primary negative reinforcer; examples include pain, extreme temperatures, and loud noise.",
    distractors: ['A stimulus that acquires the ability to function as a negative reinforcer through pairing with an unconditioned negative reinforcer; also called secondary negative reinforcer; examples include warnings and threats.', 'A stimulus that decreases behavior when presented without any prior learning history; also called primary punisher; examples include electric shock, extreme heat, and physical assault.', 'A stimulus that functions as a positive reinforcer (its presentation increases behavior) without any prior learning history; also called primary positive reinforcer; examples include food, water, and sexual stimulation.'],
    misconceptions: [
      "Unconditioned negative reinforcers are the same as unconditioned punishers",
      "Unconditioned negative reinforcers are always aversive stimuli",
      "Unconditioned negative reinforcers are the same as conditioned negative reinforcers"
    ],
    taskItem: "B.01",
    category: "Reinforcement"
  },
  {
    id: "rr-value-altering-effect",
    term: "Value-Altering Effect",
    domain: "B",
    correctDefinition: "One of the two defining effects of a motivating operation; refers to the change in the reinforcing or punishing effectiveness of a stimulus; includes the reinforcer-establishing effect and the reinforcer-abolishing effect.",
    distractors: ['One of the two defining effects of a discriminative stimulus; refers to the change in the frequency of behavior that has been reinforced in its presence; includes the evocative and abative effects.', 'One of the two defining effects of an operant contingency; refers to the change in the future probability of a response due to its consequences; includes reinforcement and punishment effects.', 'One of the two defining effects of an establishing operation; refers to the change in the effectiveness of a stimulus as a punisher; includes the punisher-establishing and punisher-abolishing effects.'],
    misconceptions: [
      "The value-altering effect is the same as the behavior-altering effect",
      "The value-altering effect is the only defining effect of a motivating operation",
      "The value-altering effect is the same as the function-altering effect"
    ],
    taskItem: "B.06",
    category: "Motivating Operations"
  },
  {
    id: "rr-variable-time-schedule",
    term: "Variable-Time Schedule",
    domain: "B",
    correctDefinition: "A time-based schedule in which a stimulus is delivered after a variable period of time has elapsed, regardless of the organism's behavior; used in noncontingent reinforcement procedures with variable timing.",
    distractors: ['A schedule in which reinforcement is delivered after a variable number of responses, regardless of the time elapsed.', 'A schedule in which reinforcement is delivered contingent on behavior after a variable interval has passed.', 'A schedule in which a stimulus is delivered at fixed times regardless of behavior, establishing a conditioned reinforcer.'],
    misconceptions: [
      "Variable-time schedules are the same as variable-interval schedules",
      "Variable-time schedules are the same as noncontingent reinforcement",
      "Variable-time schedules always involve reinforcement"
    ],
    taskItem: "B.04",
    category: "Schedules of Reinforcement"
  },
  {
    id: "rr-verbal-conditional-discrimination",
    term: "Verbal Conditional Discrimination",
    domain: "B",
    correctDefinition: "A conditional discrimination in which the conditional stimulus is a verbal stimulus; the correct response depends on the verbal stimulus that is present, not just on the comparison stimuli.",
    distractors: ['A conditional discrimination in which the comparison stimuli are verbal stimuli; the correct response depends on the specific verbal stimuli presented, not the sample stimulus.', 'A conditional discrimination in which the sample stimulus is a non-verbal stimulus; the correct response depends on the visual stimulus that is present, not just on the comparison stimuli.', 'A conditional discrimination in which the response is a verbal behavior; the correct response involves speaking or writing, rather than a motor action with an object.'],
    misconceptions: [
      "Verbal conditional discriminations are the same as simple verbal discriminations",
      "Verbal conditional discriminations are the same as compound verbal discriminations",
      "Verbal conditional discriminations are only relevant for listener behavior"
    ],
    taskItem: "B.11",
    category: "Verbal Behavior"
  },
  {
    id: "rr-verbal-function-altering-effect",
    term: "Verbal Function-Altering Effect",
    domain: "B",
    correctDefinition: "The effect of verbal stimuli (rules, instructions, self-talk) on the reinforcing or punishing effectiveness of other stimuli; verbal behavior can alter the motivating properties of stimuli without direct conditioning.",
    distractors: ['The effect of non-verbal stimuli (gestures, pictures, models) on the reinforcing or punishing effectiveness of other stimuli; non-verbal cues can alter the motivating properties of stimuli.', 'The effect of verbal stimuli (rules, instructions, self-talk) on the evocative or abative effects of a discriminative stimulus; verbal behavior can alter the control exerted by SDs.', 'The effect of verbal stimuli (rules, instructions, self-talk) on the future frequency of behavior; verbal behavior can directly function as a positive or negative reinforcer or punisher.'],
    misconceptions: [
      "Verbal function-altering effects are the same as motivating operations",
      "Verbal function-altering effects are the same as rule-governed behavior",
      "Verbal function-altering effects only apply to conditioned reinforcers"
    ],
    taskItem: "B.13",
    category: "Verbal Behavior"
  },
  {
    id: "rr-visual-prompt",
    term: "Visual Prompt",
    domain: "F",
    correctDefinition: "A stimulus prompt that uses a visual cue (e.g., picture, written word, symbol, color coding) to indicate the correct response; a type of extra-stimulus prompt that relies on visual information.",
    distractors: ['A response prompt that uses a physical cue (e.g., hand-over-hand, partial physical guidance) to indicate the correct response; a type of intrusive prompt that involves direct contact.', 'A stimulus prompt that uses a auditory cue (e.g., vocal instruction, sound effect, musical tone) to indicate the correct response; a type of extra-stimulus prompt that relies on auditory information.', 'A response prompt that uses a gestural cue (e.g., pointing, nodding, miming) to indicate the correct response; a type of less intrusive prompt that involves bodily movement.'],
    misconceptions: [
      "Visual prompts are the same as gestural prompts",
      "Visual prompts are the same as within-stimulus prompts",
      "Visual prompts are only appropriate for learners who cannot read"
    ],
    taskItem: "F.03",
    category: "Behavior-Change Procedures"
  },
  {
    id: "rr-matching-to-sample",
    term: "Matching-to-Sample",
    domain: "B",
    correctDefinition: "A procedure in which the learner selects a comparison stimulus that matches a sample stimulus; used to teach conditional discriminations and to assess stimulus equivalence.",
    distractors: ['A systematic method of identifying the antecedent variables that occasion problem behavior without manipulating consequences experimentally in the environment.', 'A systematic method of identifying stimuli that are likely to function as punishers based on the individual\'s avoidance or escape behavior patterns over time.', 'A systematic approach in which behavioral principles are applied to produce socially significant changes in behavior that are meaningful to the individual.'],
    misconceptions: [
      "Matching-to-sample is the same as identity matching",
      "Matching-to-sample always involves physical similarity between sample and comparison",
      "Matching-to-sample is the same as an equivalence test"
    ],
    taskItem: "B.14",
    category: "Stimulus Control"
  }
];