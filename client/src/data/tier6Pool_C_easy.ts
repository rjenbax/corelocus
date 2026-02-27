/**
 * Domain C — Measurement, Data Display & Interpretation (Easy Difficulty)
 * 7 questions, IDs t6-C-pool-53 through t6-C-pool-59
 * Bloom's Level: Remember / Understand
 * Answer distribution: A:2, B:2, C:1, D:2
 *
 * Psychometric standards:
 *   - Easy difficulty: foundational measurement concepts
 *   - Clinical scenario context on every item
 *   - Plausible distractors using correct ABA terminology
 *   - No absolute language (always/never) in distractors
 */

import type { Question } from "./types";

export const tier6Pool_C_easy: Question[] = [
  {
    id: "t6-C-pool-53",
    domain: "C",
    taskItem: "C-1",
    difficulty: "easy",
    scenario: `A BCBA is training a new RBT on how to measure behavior. She explains that there are several different ways to measure behavior, and the method chosen should match the characteristics of the behavior being measured.`,
    question: `Which measurement dimension captures the number of times a behavior occurs within an observation period?`,
    choices: [
      { letter: "A", text: `Duration, which measures the total amount of time a behavior lasts from its onset to its offset during an observation period.` },
      { letter: "B", text: `Latency, which measures the elapsed time between the presentation of a stimulus and the onset of the behavior.` },
      { letter: "C", text: `Frequency (count), which measures the number of times a behavior occurs within a specified observation period.` },
      { letter: "D", text: `Interresponse time (IRT), which measures the elapsed time between the offset of one response and the onset of the next response.` },
    ],
    correctAnswer: "C",
    rationale: `Choice C is correct. Frequency (count) measures the number of times a behavior occurs within a specified observation period. It is one of the most common measurement dimensions in behavior analysis and is appropriate for behaviors that have a clear beginning and end and occur at a rate that makes individual occurrences countable. Choice A is incorrect because duration measures how long a behavior lasts from onset to offset — not how many times it occurs. Choice B is incorrect because latency measures the time between a stimulus and the onset of the behavior — not the number of occurrences. Choice D is incorrect because interresponse time (IRT) measures the time between consecutive responses — not the number of times a behavior occurs.`,
  },

  {
    id: "t6-C-pool-54",
    domain: "C",
    taskItem: "C-2",
    difficulty: "easy",
    scenario: `A BCBA is explaining the difference between rate and frequency to a BCaBA. She notes that rate is often a more useful measure than raw frequency when observation sessions vary in length.`,
    question: `How is rate of behavior calculated?`,
    choices: [
      { letter: "B", text: `Rate is calculated by dividing the total duration of the behavior by the total number of occurrences, yielding the average duration per occurrence.` },
      { letter: "A", text: `Rate is calculated by dividing the frequency (count) of behavior by the length of the observation period, yielding occurrences per unit of time.` },
      { letter: "C", text: `Rate is calculated by dividing the number of intervals in which the behavior occurred by the total number of intervals observed, yielding a proportion.` },
      { letter: "D", text: `Rate is calculated by dividing the total observation time by the frequency of behavior, yielding the average time between occurrences.` },
    ],
    correctAnswer: "A",
    rationale: `Choice A is correct. Rate is calculated by dividing the frequency (count) of behavior by the length of the observation period, yielding a measure of occurrences per unit of time (e.g., responses per minute). Rate allows comparison across sessions of different lengths because it standardizes the count relative to time. Choice B is incorrect because dividing total duration by number of occurrences yields the average duration per occurrence — a different measure. Choice C is incorrect because dividing the number of intervals with behavior by total intervals yields a proportion of intervals, which is the result of interval recording methods — not rate. Choice D is incorrect because dividing observation time by frequency yields the average interresponse time (IRT) — not rate.`,
  },

  {
    id: "t6-C-pool-55",
    domain: "C",
    taskItem: "C-3",
    difficulty: "easy",
    scenario: `A BCBA is reviewing data collection methods with her team. She explains that partial interval recording tends to overestimate the occurrence of behavior, while whole interval recording tends to underestimate it.`,
    question: `What is the key difference between partial interval recording and whole interval recording?`,
    choices: [
      { letter: "A", text: `In partial interval recording, the observer records whether the behavior occurred at any point during the interval; in whole interval recording, the observer records whether the behavior occurred throughout the entire interval.` },
      { letter: "B", text: `In partial interval recording, the observer records the behavior only at the end of each interval; in whole interval recording, the observer records the behavior only at the beginning of each interval.` },
      { letter: "C", text: `In partial interval recording, the observer records the total duration of the behavior within each interval; in whole interval recording, the observer records only whether the behavior started during the interval.` },
      { letter: "D", text: `In partial interval recording, the observer records behavior during a portion of the session; in whole interval recording, the observer records behavior during the entire session without breaks.` },
    ],
    correctAnswer: "A",
    rationale: `Choice A is correct. In partial interval recording, the observer scores the interval as positive if the behavior occurred at any point during the interval — even for a brief moment. In whole interval recording, the observer scores the interval as positive only if the behavior occurred throughout the entire interval. This is why partial interval recording tends to overestimate behavior occurrence (any brief occurrence scores the interval) and whole interval recording tends to underestimate it (the behavior must persist for the full interval to be scored). Choice B is incorrect because this describes momentary time sampling, in which the observer records whether the behavior is occurring at a specific moment (typically at the end of the interval). Choice C is incorrect because neither partial nor whole interval recording measures duration within intervals — they both yield a binary score (occurred/did not occur) for each interval. Choice D is incorrect because both partial and whole interval recording divide the session into equal intervals and record behavior within each interval — the difference is the criterion for scoring, not the portion of the session observed.`,
  },

  {
    id: "t6-C-pool-56",
    domain: "C",
    taskItem: "C-4",
    difficulty: "easy",
    scenario: `A BCBA is reviewing a line graph with a supervisee. The graph shows a client's frequency of on-task behavior across multiple sessions, with a vertical dashed line separating the baseline phase from the intervention phase.`,
    question: `What is the term for the vertical dashed line that separates phases on a behavior-analytic graph?`,
    choices: [
      { letter: "A", text: `A trend line, which is drawn through data points to represent the overall direction of behavior change within a phase.` },
      { letter: "D", text: `A phase change line, which marks the point at which experimental conditions changed and separates data from different phases.` },
      { letter: "C", text: `A criterion line, which marks the performance level that the client must achieve before the intervention is considered successful.` },
      { letter: "B", text: `An aimline, which represents the projected rate of progress needed for the client to meet their goal by a specified target date.` },
    ],
    correctAnswer: "D",
    rationale: `Choice D is correct. A phase change line is a vertical dashed line drawn on a behavior-analytic graph to mark the point at which experimental conditions changed — for example, the transition from baseline to intervention, or from one intervention condition to another. It separates data from different phases to allow visual comparison of behavior across conditions. Choice A is incorrect because a trend line (or celeration line) is drawn through data points within a phase to represent the direction and rate of behavior change — it is not a vertical line separating phases. Choice C is incorrect because a criterion line is a horizontal line drawn at the performance level the client must achieve — it is horizontal, not vertical, and marks a performance target rather than a phase change. Choice B is incorrect because an aimline is a diagonal line connecting the current performance level to the goal level by a target date — it represents projected progress, not a phase change.`,
  },

  {
    id: "t6-C-pool-57",
    domain: "C",
    taskItem: "C-5",
    difficulty: "easy",
    scenario: `A BCBA is explaining interobserver agreement (IOA) to a new staff member. She explains that IOA is calculated to assess the reliability of the data being collected.`,
    question: `What does interobserver agreement (IOA) measure?`,
    choices: [
      { letter: "A", text: `The degree to which a measurement procedure accurately captures the true value of the behavior being measured, independent of who is collecting the data.` },
      { letter: "B", text: `The consistency of behavior across different settings, people, and times, indicating that the behavior change has generalized beyond the training environment.` },
      { letter: "C", text: `The degree to which two independent observers, measuring the same behavior at the same time, produce the same or similar data.` },
      { letter: "D", text: `The degree to which a client's behavior during observation sessions matches their behavior during non-observation periods, ruling out reactivity to observation.` },
    ],
    correctAnswer: "C",
    rationale: `Choice C is correct. Interobserver agreement (IOA) measures the degree to which two independent observers, measuring the same behavior at the same time, produce the same or similar data. High IOA indicates that the measurement procedure is being applied consistently and that the data are reliable. Choice A is incorrect because this describes validity — the degree to which a measurement procedure captures the true value of the behavior — not reliability or IOA. Choice B is incorrect because this describes generalization — the spread of behavior change across settings, people, and times — which is a different concept from IOA. Choice D is incorrect because this describes reactivity — the extent to which a client's behavior changes because they are being observed — which is a different measurement concern from IOA.`,
  },

  {
    id: "t6-C-pool-58",
    domain: "C",
    taskItem: "C-6",
    difficulty: "easy",
    scenario: `A BCBA is reviewing a cumulative record graph with a supervisee. She explains that cumulative records are useful for visualizing the overall pattern of responding over time.`,
    question: `What is the defining feature of a cumulative record?`,
    choices: [
      { letter: "A", text: `A cumulative record plots the rate of behavior on the y-axis and time on the x-axis, with the slope of the line representing the frequency of responding per unit time.` },
      { letter: "B", text: `A cumulative record plots the total number of responses on the y-axis, with each new response adding to the previous total so the line never decreases.` },
      { letter: "C", text: `A cumulative record plots the percentage of intervals in which the behavior occurred on the y-axis, allowing comparison across sessions of different lengths.` },
      { letter: "D", text: `A cumulative record plots the duration of each behavioral episode on the y-axis, with longer episodes represented by taller bars on the graph.` },
    ],
    correctAnswer: "B",
    rationale: `Choice B is correct. A cumulative record plots the running total of responses on the y-axis — each new response adds to the previous total, so the line can only move upward or remain flat (when no responses occur). The slope of the cumulative record represents the rate of responding: a steeper slope indicates a higher rate, and a flat line indicates no responding. Choice A is incorrect because while the slope of a cumulative record does represent rate, the y-axis plots the cumulative total of responses, not the rate itself. Choice C is incorrect because plotting the percentage of intervals with behavior describes a proportion-based graph used with interval recording data — not a cumulative record. Choice D is incorrect because plotting the duration of each episode describes a duration graph, not a cumulative record.`,
  },

  {
    id: "t6-C-pool-59",
    domain: "C",
    taskItem: "C-7",
    difficulty: "easy",
    scenario: `A BCBA is reviewing a client's data and notices that the behavior shows a stable, flat trend during baseline with low variability. She explains to her supervisee that this baseline pattern is ideal before introducing an intervention.`,
    question: `Why is a stable baseline with low variability preferred before introducing an intervention?`,
    choices: [
      { letter: "A", text: `A stable baseline indicates that the client has reached their maximum level of performance without intervention, confirming that an intervention is necessary to produce further change.` },
      { letter: "B", text: `A stable baseline with low variability provides a clear and reliable basis for comparison, making it easier to detect whether the intervention produced a meaningful change in behavior.` },
      { letter: "C", text: `A stable baseline is required by ethical guidelines to ensure that the client's behavior has been documented for a minimum number of sessions before any intervention is implemented.` },
      { letter: "D", text: `A stable baseline indicates that the behavior is not responsive to environmental variables, which confirms that the intervention will be the primary determinant of any subsequent behavior change.` },
    ],
    correctAnswer: "B",
    rationale: `Choice B is correct. A stable baseline with low variability provides a clear and reliable basis for comparison — it establishes a predictable pattern of behavior against which the effects of the intervention can be evaluated. When baseline is stable, any change in the data following the introduction of the intervention is more clearly attributable to the intervention rather than to natural variability in the behavior. Choice A is incorrect because a stable baseline does not indicate that the client has reached their maximum performance — it simply means the behavior is occurring at a consistent level under current conditions. Choice C is incorrect because while ethical guidelines require baseline data, there is no specific minimum number of sessions required; the criterion is stability, not a fixed number. Choice D is incorrect because a stable baseline does not indicate that behavior is unresponsive to environmental variables — it indicates that the current environmental conditions are producing a consistent level of behavior.`,
  },
];
