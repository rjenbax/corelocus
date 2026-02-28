import { Question } from "./types";
export const tier6Pool_C_batch1: Question[] = [
  {
    id: "t6-C-b1-01",
    domain: "C",
    taskItem: "C.3",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: "A BCBA is designing a data collection system for a 6-year-old child who engages in hand-mouthing throughout the school day. The behavior occurs at a relatively consistent rate across the day. The BCBA wants to capture every instance of the behavior and measure how long each episode lasts.",
    question: "Which measurement system would be most appropriate for capturing both the frequency and duration of each hand-mouthing episode?",
    choices: [
      { letter: "A", text: "Momentary time sampling, recorded every 5 minutes" },
      { letter: "B", text: "Partial interval recording across 10-minute observation blocks" },
      { letter: "C", text: "Continuous event recording with a duration timer for each instance" },
      { letter: "D", text: "Whole interval recording across 30-second intervals" }
    ],
    correctAnswer: "C",
    rationale: "Choice C is correct. Continuous event recording captures every occurrence of the behavior and, when combined with a duration timer, allows the BCBA to measure both frequency and duration. Choice A (momentary time sampling) only captures whether the behavior is occurring at the moment of observation. Choice B (partial interval recording) overestimates frequency and does not capture duration. Choice D (whole interval recording) underestimates frequency and does not capture duration."
  },
  {
    id: "t6-C-b1-02",
    domain: "C",
    taskItem: "C.3",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: "A BCBA is working with a school team to collect data on a student's on-task behavior during math instruction. The behavior is defined as 'eyes oriented toward the teacher or assigned work.' The team has limited time for data collection and can only dedicate one observer for 10-second intervals during a 30-minute math period.",
    question: "Which continuous measurement procedure would provide the most accurate estimate of the proportion of time the student is on-task during the math period?",
    choices: [
      { letter: "A", text: "Whole interval recording — recording a '+' only if the student is on-task for the entire 10-second interval" },
      { letter: "B", text: "Partial interval recording — recording a '+' if the student is on-task for any part of the 10-second interval" },
      { letter: "C", text: "Momentary time sampling — recording whether the student is on-task at the end of each 10-second interval" },
      { letter: "D", text: "Frequency recording — counting the number of times the student transitions from off-task to on-task" }
    ],
    correctAnswer: "C",
    rationale: "Choice C is correct. Momentary time sampling provides the most accurate estimate of the proportion of time a behavior occurs when the observation intervals are short and frequent. Whole interval recording (Choice A) underestimates the proportion of time the behavior occurs. Partial interval recording (Choice B) overestimates the proportion of time the behavior occurs. Frequency recording (Choice D) measures the number of transitions, not the proportion of time on-task."
  },
  {
    id: "t6-C-b1-03",
    domain: "C",
    taskItem: "C.3",
    difficulty: "hard",
    bloomsLevel: "analysis",
    scenario: "A BCBA is designing a data collection system to measure the latency of a child's compliance with instructions. The child's teacher reports that the child often takes a long time to begin complying after an instruction is given, but once she starts, she completes the task quickly. The BCBA wants to measure the time between the instruction and the initiation of compliance.",
    question: "Which measurement dimension should the BCBA use to capture the time between the instruction and the initiation of compliance?",
    choices: [
      { letter: "A", text: "Duration — the total time from the instruction to the completion of the task" },
      { letter: "B", text: "Inter-response time — the time between two consecutive compliance responses" },
      { letter: "C", text: "Latency — the time from the onset of the antecedent stimulus to the initiation of the response" },
      { letter: "D", text: "Rate — the number of compliance responses per unit of time" }
    ],
    correctAnswer: "C",
    rationale: "Choice C is correct. Latency is defined as the time from the onset of the antecedent stimulus (the instruction) to the initiation of the response (beginning to comply). This is exactly what the BCBA wants to measure. Duration (Choice A) measures the total time from start to completion of the task, which is not what is described. Inter-response time (Choice B) measures the time between two consecutive responses, not the time from the instruction to the response. Rate (Choice D) measures frequency per unit of time, not the time from instruction to initiation."
  },
  {
    id: "t6-C-b1-04",
    domain: "C",
    taskItem: "C.3",
    difficulty: "hard",
    bloomsLevel: "analysis",
    scenario: "A BCBA is reviewing data on a client's self-injurious behavior (SIB). The data show that SIB occurs at a rate of 3 responses per minute during baseline. After implementing a DRO procedure, the rate drops to 0.5 responses per minute. The BCBA wants to calculate the percentage reduction in rate.",
    question: "Which of the following correctly calculates the percentage reduction in the rate of SIB from baseline to treatment?",
    choices: [
      { letter: "A", text: "[(3 - 0.5) / 3] × 100 = 83.3% reduction" },
      { letter: "B", text: "[(0.5 - 3) / 0.5] × 100 = 500% reduction" },
      { letter: "C", text: "[(3 - 0.5) / 0.5] × 100 = 500% reduction" },
      { letter: "D", text: "[(0.5 / 3)] × 100 = 16.7% reduction" }
    ],
    correctAnswer: "A",
    rationale: "Choice A is correct. Percentage reduction is calculated as [(baseline - treatment) / baseline] × 100 = [(3 - 0.5) / 3] × 100 = [2.5 / 3] × 100 = 83.3%. Choice B uses the treatment value as the denominator, which is not the standard formula. Choice C calculates the percentage increase from treatment to baseline, not the reduction. Choice D calculates the ratio of treatment to baseline without subtracting from 1, giving the percentage of baseline remaining rather than the percentage reduced."
  },
  {
    id: "t6-C-b1-05",
    domain: "C",
    taskItem: "C.3",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: "A BCBA is training a new RBT to collect data on a client's vocal stereotypy. The behavior is defined as 'any non-contextual vocalization lasting at least 3 seconds.' The RBT will use a 10-second partial interval recording system during a 20-minute observation session.",
    question: "Which of the following best describes a limitation of using partial interval recording for this behavior?",
    choices: [
      { letter: "A", text: "Partial interval recording cannot be used for behaviors that last longer than the interval length" },
      { letter: "B", text: "Partial interval recording requires the observer to watch the client continuously throughout each interval" },
      { letter: "C", text: "Partial interval recording will overestimate the proportion of time the behavior occurs, particularly if the behavior occurs frequently" },
      { letter: "D", text: "Partial interval recording cannot distinguish between different topographies of the target behavior" }
    ],
    correctAnswer: "C",
    rationale: "Choice C is correct. Partial interval recording scores an interval as '+' if the behavior occurs at any point during the interval, regardless of how briefly. This means that even a single brief occurrence in an interval counts the same as a behavior that occurs throughout the entire interval, leading to overestimation of the proportion of time the behavior occurs. Choice A is incorrect — partial interval recording can be used for behaviors of any duration. Choice B describes whole interval recording, not partial interval recording. Choice D is a limitation of some recording systems but is not specific to partial interval recording."
  },
  {
    id: "t6-C-b1-06",
    domain: "C",
    taskItem: "C.3",
    difficulty: "hard",
    bloomsLevel: "analysis",
    scenario: "A BCBA is reviewing data collected by two RBTs on a client's aggression. RBT 1 recorded 12 instances of aggression during a 30-minute session. RBT 2 recorded 8 instances during the same session. The BCBA wants to calculate the frequency IOA for this session.",
    question: "Which of the following correctly calculates the frequency IOA for this session?",
    choices: [
      { letter: "A", text: "8 / 12 × 100 = 66.7%" },
      { letter: "B", text: "(12 - 8) / 12 × 100 = 33.3%" },
      { letter: "C", text: "(8 + 12) / 2 = 10 (average, not a percentage)" },
      { letter: "D", text: "12 / (12 + 8) × 100 = 60%" }
    ],
    correctAnswer: "A",
    rationale: "Choice A is correct. Frequency IOA (also called count IOA) is calculated by dividing the smaller count by the larger count and multiplying by 100: 8 / 12 × 100 = 66.7%. This gives a percentage agreement between the two observers. Choice B calculates the percentage difference, not the IOA. Choice C calculates the average count, which is not a measure of agreement. Choice D divides the larger count by the total, which is not the standard formula for frequency IOA."
  },
  {
    id: "t6-C-b1-07",
    domain: "C",
    taskItem: "C.4",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: "A BCBA is designing a data collection system for a classroom teacher who cannot observe a student continuously. The teacher needs to collect data on the student's out-of-seat behavior during a 40-minute class period. The teacher can only look up from instruction every 5 minutes to record whether the student is in or out of their seat.",
    question: "Which discontinuous measurement procedure is the teacher using?",
    choices: [
      { letter: "A", text: "Partial interval recording — the teacher records whether the behavior occurred at any point during each 5-minute interval" },
      { letter: "B", text: "Whole interval recording — the teacher records whether the behavior occurred throughout the entire 5-minute interval" },
      { letter: "C", text: "Momentary time sampling — the teacher records whether the behavior is occurring at the specific moment of observation" },
      { letter: "D", text: "Frequency recording — the teacher counts the number of times the student leaves their seat during each 5-minute interval" }
    ],
    correctAnswer: "C",
    rationale: "Choice C is correct. Momentary time sampling involves observing whether the behavior is occurring at a specific, predetermined moment in time. The teacher is looking up at the end of each 5-minute interval to record whether the student is currently out of their seat — this is a momentary observation, not a continuous one. Choice A (partial interval) would require the teacher to monitor the student throughout the interval. Choice B (whole interval) would also require continuous monitoring. Choice D (frequency recording) would require counting each instance of the behavior."
  },
  {
    id: "t6-C-b1-08",
    domain: "C",
    taskItem: "C.4",
    difficulty: "hard",
    bloomsLevel: "comprehension",
    scenario: "A BCBA is comparing two data collection methods for a client's stereotypic hand movements. Method 1 uses 10-second partial interval recording. Method 2 uses 10-second whole interval recording. The behavior actually occurs for approximately 40% of the observation time. After a 20-minute session, Method 1 shows 75% of intervals scored positive, and Method 2 shows 15% of intervals scored positive.",
    question: "Which of the following best explains why the two methods produce such different estimates of the behavior?",
    choices: [
      { letter: "A", text: "Partial interval recording overestimates because any occurrence in an interval scores positive; whole interval recording underestimates because the behavior must occur throughout the entire interval to score positive" },
      { letter: "B", text: "Partial interval recording underestimates because brief occurrences may be missed; whole interval recording overestimates because longer intervals are more likely to contain the behavior" },
      { letter: "C", text: "The discrepancy indicates that the observers using the two methods are applying different operational definitions of the behavior" },
      { letter: "D", text: "Partial interval recording is more accurate for high-frequency behaviors; whole interval recording is more accurate for low-frequency behaviors" }
    ],
    correctAnswer: "A",
    rationale: "Choice A is correct. Partial interval recording scores an interval as positive if the behavior occurs at any point during the interval, even briefly. This leads to overestimation because a single brief occurrence in an interval counts the same as a behavior that occurs throughout. Whole interval recording scores an interval as positive only if the behavior occurs throughout the entire interval, leading to underestimation because any interruption in the behavior causes the interval to be scored negative. Choice B reverses the direction of bias for both methods. Choice C is possible but does not explain the systematic pattern of over- and underestimation. Choice D is not accurate — neither method is specifically designed for high- or low-frequency behaviors."
  },
  {
    id: "t6-C-b1-09",
    domain: "C",
    taskItem: "C.4",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: "A BCBA is training a school aide to use momentary time sampling to collect data on a student's engagement during group instruction. The aide will observe the student at the end of every 2-minute interval and record whether the student is engaged. The BCBA wants to explain the limitations of this method.",
    question: "Which of the following is the most significant limitation of momentary time sampling for measuring engagement?",
    choices: [
      { letter: "A", text: "Momentary time sampling cannot be used for behaviors that occur at a high frequency" },
      { letter: "B", text: "Momentary time sampling may miss brief occurrences of the behavior that begin and end between observation points" },
      { letter: "C", text: "Momentary time sampling requires the observer to watch the student continuously throughout each interval" },
      { letter: "D", text: "Momentary time sampling always overestimates the proportion of time the behavior occurs" }
    ],
    correctAnswer: "B",
    rationale: "Choice B is correct. The most significant limitation of momentary time sampling is that it only captures the state of the behavior at a single point in time. If the behavior begins and ends between observation points, it will not be recorded, potentially leading to underestimation. Choice A is incorrect — momentary time sampling can be used for behaviors of any frequency. Choice C describes continuous recording, not momentary time sampling. Choice D is incorrect — momentary time sampling can underestimate or overestimate depending on the behavior pattern and interval length."
  },
  {
    id: "t6-C-b1-10",
    domain: "C",
    taskItem: "C.4",
    difficulty: "hard",
    bloomsLevel: "analysis",
    scenario: "A BCBA is reviewing a study that used 30-second partial interval recording to measure the percentage of intervals in which a child engaged in stereotypy. The study reports that stereotypy occurred in 85% of intervals during baseline. The BCBA wants to determine whether this estimate accurately reflects the true proportion of time the behavior occurred.",
    question: "Which of the following statements about the accuracy of the 85% estimate is most accurate?",
    choices: [
      { letter: "A", text: "The 85% estimate is likely an accurate reflection of the true proportion of time because partial interval recording is the gold standard for measuring stereotypy" },
      { letter: "B", text: "The 85% estimate is likely an underestimate because partial interval recording misses brief occurrences that begin and end within an interval" },
      { letter: "C", text: "The 85% estimate is likely an overestimate because partial interval recording scores an entire interval as positive even if the behavior occurs only briefly" },
      { letter: "D", text: "The 85% estimate is likely accurate because the interval length is short enough to capture most occurrences" }
    ],
    correctAnswer: "C",
    rationale: "Choice C is correct. Partial interval recording overestimates the proportion of time a behavior occurs because any occurrence within an interval — even a very brief one — causes the entire interval to be scored as positive. The true proportion of time the behavior occurred is likely lower than 85%. Choice A is incorrect — partial interval recording is not the gold standard; continuous duration recording is more accurate. Choice B describes the limitation of momentary time sampling, not partial interval recording. Choice D is incorrect — shorter intervals reduce but do not eliminate the overestimation bias."
  },
  {
    id: "t6-C-b1-11",
    domain: "C",
    taskItem: "C.4",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: "A BCBA is working with a teacher to select a data collection method for monitoring a student's on-task behavior during independent work time. The teacher has 25 students and cannot watch any one student continuously. The BCBA recommends a method that requires only a brief observation at the end of each interval.",
    question: "Which data collection method is the BCBA most likely recommending, and what is its primary advantage in this context?",
    choices: [
      { letter: "A", text: "Partial interval recording — it captures every occurrence of the behavior, providing a complete picture of when the behavior occurs" },
      { letter: "B", text: "Whole interval recording — it provides the most conservative estimate of the behavior, reducing the risk of overestimating on-task time" },
      { letter: "C", text: "Frequency recording — it counts the exact number of on-task episodes, allowing the teacher to track changes in behavior over time" },
      { letter: "D", text: "Momentary time sampling — it requires only a brief observation at the end of each interval, making it practical for teachers who cannot observe continuously" }
    ],
    correctAnswer: "D",
    rationale: "Choice D is correct. Momentary time sampling requires only a brief observation at a predetermined moment, making it practical for teachers who cannot continuously monitor a single student. The teacher only needs to look at the student at the end of each interval to record the behavior state. Choice A (partial interval recording) requires monitoring throughout the interval to detect any occurrence. Choice B (whole interval recording) also requires continuous monitoring. Choice C (frequency recording) requires counting each instance, which also requires more continuous attention."
  },
  {
    id: "t6-C-b1-12",
    domain: "C",
    taskItem: "C.5",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: "A BCBA is designing a data collection system for a client who is learning to complete multi-step math worksheets. The BCBA wants to measure the accuracy of the client's work without requiring an observer to be present during the task.",
    question: "Which data collection method would be most appropriate for measuring the accuracy of the client's completed math worksheets?",
    choices: [
      { letter: "A", text: "Frequency recording — counting the number of problems the client attempts during each session" },
      { letter: "B", text: "Duration recording — measuring the total time the client spends on each worksheet" },
      { letter: "C", text: "Permanent product recording — scoring the completed worksheets after the session to count correct and incorrect responses" },
      { letter: "D", text: "Partial interval recording — observing the client every 30 seconds to record whether they are working on the worksheet" }
    ],
    correctAnswer: "C",
    rationale: "Choice C is correct. Permanent product recording involves measuring the tangible outcomes or products of behavior after the behavior has occurred. Scoring completed worksheets is a classic example of permanent product recording — the BCBA can assess accuracy without being present during the task. Choice A (frequency recording) would measure attempts, not accuracy. Choice B (duration recording) would measure time spent, not accuracy. Choice D (partial interval recording) would measure engagement, not accuracy."
  },
  {
    id: "t6-C-b1-13",
    domain: "C",
    taskItem: "C.5",
    difficulty: "hard",
    bloomsLevel: "application",
    scenario: "A BCBA is reviewing data on a client's handwriting skills. The RBT has been using permanent product recording to score the client's handwriting samples. The BCBA notices that the RBT's scores are inconsistent — the same sample is scored differently on different days. The BCBA wants to address this issue.",
    question: "Which of the following is the most appropriate first step to address the inconsistency in the RBT's permanent product scoring?",
    choices: [
      { letter: "A", text: "Switch from permanent product recording to direct observation to eliminate the scoring inconsistency" },
      { letter: "B", text: "Develop a clear, operationally defined scoring rubric with specific criteria for each score level and train the RBT to use it consistently" },
      { letter: "C", text: "Have the RBT score all samples at the end of the week rather than daily to reduce variability" },
      { letter: "D", text: "Calculate interobserver agreement on the handwriting samples and report the average score as the data point" }
    ],
    correctAnswer: "B",
    rationale: "Choice B is correct. Inconsistency in permanent product scoring typically results from an unclear or subjective scoring rubric. The most appropriate first step is to develop a clear, operationally defined rubric with specific criteria for each score level and train the RBT to apply it consistently. This addresses the root cause of the inconsistency. Choice A is unnecessary — permanent product recording is appropriate for handwriting; the problem is the scoring rubric, not the method. Choice C does not address the root cause. Choice D (IOA) is a good practice but does not fix the underlying inconsistency."
  },
  {
    id: "t6-C-b1-14",
    domain: "C",
    taskItem: "C.5",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: "A BCBA is working with a client who is learning to write his name. The BCBA wants to track the number of letters the client writes correctly each session. The client practices writing his name 10 times per session. The BCBA reviews the completed worksheets after each session.",
    question: "Which of the following best describes the advantage of using permanent product recording for this skill?",
    choices: [
      { letter: "A", text: "Permanent product recording allows the BCBA to measure the latency between the instruction and the client's first letter" },
      { letter: "B", text: "Permanent product recording allows the BCBA to assess accuracy without needing to be present during the session, and the products can be reviewed multiple times" },
      { letter: "C", text: "Permanent product recording provides a continuous record of the client's behavior throughout the session, including errors and self-corrections" },
      { letter: "D", text: "Permanent product recording is the only method that can measure the topography of the client's writing behavior" }
    ],
    correctAnswer: "B",
    rationale: "Choice B is correct. A key advantage of permanent product recording is that the BCBA does not need to be present during the session — the completed worksheets serve as a permanent record that can be reviewed at any time and scored multiple times for reliability. Choice A (latency) would require direct observation, not permanent product recording. Choice C is incorrect — permanent product recording captures the end product, not the process; self-corrections may not be visible in the final product. Choice D is incorrect — topography can be assessed through direct observation or video recording."
  },
  {
    id: "t6-C-b1-15",
    domain: "C",
    taskItem: "C.5",
    difficulty: "hard",
    bloomsLevel: "analysis",
    scenario: "A BCBA is designing a data collection system for a vocational training program. The client is learning to assemble a product on an assembly line. The BCBA wants to measure both the accuracy and the rate of assembly. The supervisor can only check the client's work at the end of each shift.",
    question: "Which combination of measurement approaches would best capture both the accuracy and rate of the client's assembly work?",
    choices: [
      { letter: "A", text: "Permanent product recording for accuracy (counting correctly assembled units) and a time-based rate measure (units per hour) derived from the permanent product count" },
      { letter: "B", text: "Partial interval recording for accuracy and frequency recording for rate, both conducted by a direct observer during the shift" },
      { letter: "C", text: "Duration recording for accuracy and latency recording for rate, both derived from the permanent product" },
      { letter: "D", text: "Whole interval recording for accuracy and inter-response time for rate, both conducted at the end of the shift" }
    ],
    correctAnswer: "A",
    rationale: "Choice A is correct. Permanent product recording is ideal here because the supervisor can count correctly assembled units at the end of the shift (accuracy) and divide by the number of hours worked to calculate units per hour (rate). Both measures are derived from the permanent product without requiring a direct observer during the shift. Choice B requires a direct observer, which is not available. Choice C (duration and latency) are not appropriate measures for assembly accuracy or rate. Choice D (whole interval and IRT) require direct observation and are not appropriate for this context."
  },
  {
    id: "t6-C-b1-16",
    domain: "C",
    taskItem: "C.6",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: "A BCBA is reviewing a line graph showing a client's rate of challenging behavior across 15 sessions. The first 5 sessions show baseline data with rates ranging from 8 to 12 per hour. Sessions 6 through 10 show a decreasing trend after implementing a DRO procedure. Sessions 11 through 15 show rates stabilizing at 1 to 2 per hour.",
    question: "Which of the following best describes the pattern shown in the graph?",
    choices: [
      { letter: "A", text: "The data show a variable baseline, a decreasing trend during treatment, and a stable low level at the end of treatment, suggesting the DRO procedure was effective" },
      { letter: "B", text: "The data show a stable baseline, an increasing trend during treatment, and high variability at the end of treatment, suggesting the DRO procedure was ineffective" },
      { letter: "C", text: "The data show a decreasing trend throughout all 15 sessions, suggesting the behavior was already improving before treatment began" },
      { letter: "D", text: "The data show a ceiling effect during baseline and a floor effect during treatment, making it impossible to evaluate the effectiveness of the DRO procedure" }
    ],
    correctAnswer: "A",
    rationale: "Choice A is correct. The graph shows a variable baseline (8–12 per hour), a decreasing trend during treatment (sessions 6–10), and a stable low level at the end of treatment (1–2 per hour). This pattern is consistent with an effective intervention. Choice B mischaracterizes the pattern — the trend during treatment is decreasing, not increasing. Choice C is incorrect — the baseline data do not show a decreasing trend. Choice D is incorrect — there is no ceiling or floor effect described; the data show meaningful change."
  },
  {
    id: "t6-C-b1-17",
    domain: "C",
    taskItem: "C.6",
    difficulty: "hard",
    bloomsLevel: "analysis",
    scenario: "A BCBA is presenting data to a parent and team. The graph shows a reversal (ABAB) design. During the first A phase, the behavior averages 15 per session. During the first B phase, it drops to 3 per session. During the second A phase (reversal), it returns to 12 per session. During the second B phase, it drops again to 2 per session.",
    question: "Which of the following conclusions is most strongly supported by this data pattern?",
    choices: [
      { letter: "A", text: "The intervention is the likely cause of the behavior change, because the behavior reliably changed when the intervention was introduced and reversed when it was withdrawn" },
      { letter: "B", text: "The behavior change is due to maturation, because the behavior levels in the second A and B phases are slightly different from the first A and B phases" },
      { letter: "C", text: "The data are inconclusive because the reversal design requires at least three phase changes to demonstrate experimental control" },
      { letter: "D", text: "The intervention is ineffective because the behavior did not return to the exact baseline level during the second A phase" }
    ],
    correctAnswer: "A",
    rationale: "Choice A is correct. The reversal design demonstrates experimental control by showing that the behavior reliably changes when the intervention is introduced and reverses toward baseline when the intervention is withdrawn. The pattern of change across all four phases strongly supports the conclusion that the intervention is the likely cause of the behavior change. Choice B is incorrect — maturation would produce a gradual, unidirectional change, not the pattern of change and reversal seen here. Choice C is incorrect — an ABAB design with four phases is sufficient to demonstrate experimental control. Choice D is incorrect — exact replication is not required; the reversal design requires a similar trend, not identical values."
  },
  {
    id: "t6-C-b1-18",
    domain: "C",
    taskItem: "C.6",
    difficulty: "medium",
    bloomsLevel: "comprehension",
    scenario: "A BCBA is reviewing a cumulative record of a client's correct responses during discrete trial training. The graph shows a steep slope during the first 10 sessions, a flat portion for sessions 11 through 15, and then a moderate slope for sessions 16 through 20.",
    question: "Which of the following best describes what the flat portion of the cumulative record (sessions 11–15) indicates?",
    choices: [
      { letter: "A", text: "The client's rate of correct responding increased during sessions 11 through 15" },
      { letter: "B", text: "The client's rate of correct responding decreased or was near zero during sessions 11 through 15" },
      { letter: "C", text: "The client's total number of correct responses remained constant during sessions 11 through 15" },
      { letter: "D", text: "The client's rate of correct responding was highly variable during sessions 11 through 15" }
    ],
    correctAnswer: "B",
    rationale: "Choice B is correct. In a cumulative record, the slope of the line represents the rate of responding. A flat portion indicates that the cumulative count is not increasing, which means the rate of responding is near zero or zero during that period. Choice A is incorrect — an increasing rate would produce a steeper slope, not a flat line. Choice C is incorrect — the total number of correct responses would remain constant only if no new correct responses occurred, which means the rate is near zero (not that the total is frozen at some positive value). Choice D is incorrect — high variability would produce an irregular, jagged slope, not a flat line."
  },
  {
    id: "t6-C-b1-19",
    domain: "C",
    taskItem: "C.6",
    difficulty: "hard",
    bloomsLevel: "analysis",
    scenario: "A BCBA is reviewing a multiple baseline across behaviors design. The data show that Behavior 1 changed immediately when the intervention was introduced at session 5. Behavior 2 changed when the intervention was introduced at session 10. Behavior 3 changed when the intervention was introduced at session 15. All three behaviors remained stable during their respective baseline phases.",
    question: "Which of the following conclusions is most strongly supported by this data pattern?",
    choices: [
      { letter: "A", text: "The data demonstrate experimental control because each behavior changed only when the intervention was introduced, ruling out history and maturation as explanations" },
      { letter: "B", text: "The data are inconclusive because the multiple baseline design requires a reversal phase to demonstrate experimental control" },
      { letter: "C", text: "The data suggest that the intervention was more effective for Behavior 1 than for Behaviors 2 and 3 because it was introduced earlier" },
      { letter: "D", text: "The data suggest that the behaviors are functionally related because they all changed at the same time" }
    ],
    correctAnswer: "A",
    rationale: "Choice A is correct. The multiple baseline design demonstrates experimental control by showing that each behavior changed only when the intervention was introduced, while the other behaviors remained stable. This staggered introduction rules out history and maturation as explanations for the behavior change. Choice B is incorrect — the multiple baseline design does not require a reversal phase; it demonstrates control through the staggered introduction of the intervention. Choice C is incorrect — the timing of introduction does not indicate differential effectiveness. Choice D is incorrect — the behaviors changed at different times, not simultaneously."
  },
  {
    id: "t6-C-b1-20",
    domain: "C",
    taskItem: "C.6",
    difficulty: "medium",
    bloomsLevel: "analysis",
    scenario: "A BCBA is reviewing a bar graph showing the percentage of correct responses across five skill areas for a client. The bars show: Skill A = 90%, Skill B = 45%, Skill C = 80%, Skill D = 30%, Skill E = 70%. The mastery criterion is 80% correct across three consecutive sessions.",
    question: "Based on the graph, which skills require the most immediate attention in the client's programming?",
    choices: [
      { letter: "A", text: "Skills A and C, because they are at or above the mastery criterion" },
      { letter: "B", text: "Skills B and D, because they are furthest below the mastery criterion" },
      { letter: "C", text: "Skills D and E, because they show the most variable data" },
      { letter: "D", text: "All five skills, because none of them have met the mastery criterion across three consecutive sessions" }
    ],
    correctAnswer: "B",
    rationale: "Choice B is correct. Skills B (45%) and D (30%) are furthest below the mastery criterion of 80% and therefore require the most immediate attention. These skills show the greatest gap between current performance and the target. Choice A is incorrect — Skills A and C are at or above mastery and do not require immediate attention. Choice C is incorrect — the graph shows single data points per skill, not variability across sessions. Choice D is incorrect — the question asks which skills require the most immediate attention, and the answer should prioritize the skills with the largest gaps."
  },
  {
    id: "t6-C-b1-21",
    domain: "C",
    taskItem: "C.7",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: "A BCBA is developing mastery criteria for a client's receptive identification program. The client is learning to identify 20 common objects. The BCBA wants to ensure that the client has truly mastered each object before moving to the next, and wants to minimize the risk of premature advancement.",
    question: "Which mastery criterion would best minimize the risk of premature advancement while still allowing efficient progress through the program?",
    choices: [
      { letter: "A", text: "80% correct in one session with any therapist" },
      { letter: "B", text: "90% correct across three consecutive sessions with two different therapists" },
      { letter: "C", text: "100% correct in one session with the primary therapist" },
      { letter: "D", text: "75% correct across two consecutive sessions with the primary therapist" }
    ],
    correctAnswer: "B",
    rationale: "Choice B is correct. A criterion of 90% correct across three consecutive sessions with two different therapists addresses multiple dimensions of mastery: accuracy (90%), consistency (three consecutive sessions), and generalization (two different therapists). This criterion minimizes the risk of premature advancement by requiring sustained, accurate performance across multiple sessions and therapists. Choice A (80% in one session) is too lenient and does not require consistency. Choice C (100% in one session) may be too strict and does not require consistency across sessions. Choice D (75% across two sessions) is too lenient."
  },
  {
    id: "t6-C-b1-22",
    domain: "C",
    taskItem: "C.7",
    difficulty: "hard",
    bloomsLevel: "analysis",
    scenario: "A BCBA is reviewing a client's data on a tacting program. The client has met the mastery criterion of 80% correct across three consecutive sessions for 15 of the 20 target items. However, the BCBA notices that the client's performance drops significantly when tested in a novel environment. The BCBA wants to revise the mastery criteria to address this issue.",
    question: "Which revision to the mastery criteria would best address the generalization problem?",
    choices: [
      { letter: "A", text: "Increase the accuracy criterion from 80% to 90% correct across three consecutive sessions in the training environment" },
      { letter: "B", text: "Add a generalization probe criterion requiring 80% correct in at least two novel environments before an item is considered mastered" },
      { letter: "C", text: "Reduce the number of consecutive sessions required from three to two to allow faster advancement through the program" },
      { letter: "D", text: "Implement a maintenance probe schedule to re-test mastered items every two weeks in the training environment" }
    ],
    correctAnswer: "B",
    rationale: "Choice B is correct. The problem is that the client is not generalizing mastered skills to novel environments. Adding a generalization probe criterion that requires 80% correct in at least two novel environments directly addresses this issue by building generalization into the mastery criteria. Choice A (increasing accuracy in the training environment) does not address generalization. Choice C (reducing sessions) would make the criteria less stringent and would not address generalization. Choice D (maintenance probes) addresses maintenance, not generalization."
  },
  {
    id: "t6-C-b1-23",
    domain: "C",
    taskItem: "C.7",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: "A BCBA is designing a discrete trial training program for a client learning to match colors. The BCBA wants to set mastery criteria that are both clinically meaningful and achievable within a reasonable timeframe. The client is currently performing at 60% correct across sessions.",
    question: "Which of the following best describes the purpose of setting mastery criteria in ABA programs?",
    choices: [
      { letter: "A", text: "Mastery criteria define the minimum acceptable level of performance for billing and insurance purposes" },
      { letter: "B", text: "Mastery criteria establish the performance standard that indicates a skill has been learned well enough to move to the next step or program" },
      { letter: "C", text: "Mastery criteria are used to determine whether a client is eligible for ABA services" },
      { letter: "D", text: "Mastery criteria specify the maximum number of trials that can be conducted per session" }
    ],
    correctAnswer: "B",
    rationale: "Choice B is correct. Mastery criteria establish the performance standard that indicates a skill has been learned sufficiently to advance to the next step or program. They provide a data-based decision rule for when to move forward in programming. Choice A is incorrect — mastery criteria are clinical tools, not primarily billing tools. Choice C is incorrect — eligibility for ABA services is determined by diagnostic and funding criteria, not mastery criteria. Choice D is incorrect — mastery criteria define performance standards, not session structure."
  },
  {
    id: "t6-C-b1-24",
    domain: "C",
    taskItem: "C.7",
    difficulty: "hard",
    bloomsLevel: "analysis",
    scenario: "A BCBA is reviewing a client's data and notices that the client has met the mastery criterion of 80% correct across three consecutive sessions for a skill, but the data show high variability — some sessions are at 95% and others are at 65%. The BCBA is concerned that the client has not truly mastered the skill.",
    question: "Which modification to the mastery criteria would best address the concern about high variability?",
    choices: [
      { letter: "A", text: "Increase the accuracy criterion from 80% to 90% correct across three consecutive sessions" },
      { letter: "B", text: "Add a stability criterion requiring that no single session fall below 70% correct during the three consecutive sessions" },
      { letter: "C", text: "Reduce the number of consecutive sessions required from three to five to capture more data" },
      { letter: "D", text: "Implement a probe schedule to test the skill in novel environments before considering it mastered" }
    ],
    correctAnswer: "B",
    rationale: "Choice B is correct. Adding a stability criterion (e.g., no single session below 70%) directly addresses the concern about high variability by requiring that performance remain above a minimum threshold throughout the mastery period. A client who scores 95% in one session and 65% in another has not demonstrated stable mastery, even if the average is 80%. Choice A (increasing the accuracy criterion) would not necessarily address variability — a client could still have high variability while averaging 90%. Choice C (increasing sessions) helps but does not directly address the stability issue. Choice D addresses generalization, not variability."
  },
  {
    id: "t6-C-b1-25",
    domain: "C",
    taskItem: "C.8",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: "A BCBA is training two RBTs to collect data on a client's self-injurious behavior using event recording. During a 30-minute session, RBT 1 records 15 instances and RBT 2 records 12 instances. The BCBA calculates the IOA for this session.",
    question: "Which of the following correctly calculates the frequency IOA for this session?",
    choices: [
      { letter: "A", text: "12 / 15 × 100 = 80%" },
      { letter: "B", text: "(15 + 12) / 2 = 13.5 instances" },
      { letter: "C", text: "(15 - 12) / 15 × 100 = 20%" },
      { letter: "D", text: "15 / (15 + 12) × 100 = 55.6%" }
    ],
    correctAnswer: "A",
    rationale: "Choice A is correct. Frequency IOA (count IOA) is calculated by dividing the smaller count by the larger count and multiplying by 100: 12 / 15 × 100 = 80%. This gives the percentage agreement between the two observers. Choice B calculates the average count, not IOA. Choice C calculates the percentage difference, not IOA. Choice D divides the larger count by the total, which is not the standard formula."
  },
  {
    id: "t6-C-b1-26",
    domain: "C",
    taskItem: "C.8",
    difficulty: "hard",
    bloomsLevel: "comprehension",
    scenario: "A BCBA is reviewing IOA data for a client's vocal stereotypy program. The data show that total agreement IOA is consistently above 90%, but occurrence agreement IOA is consistently around 60%. The BCBA is concerned about the discrepancy.",
    question: "Which of the following best explains why total agreement IOA can be high while occurrence agreement IOA is low?",
    choices: [
      { letter: "A", text: "Total agreement IOA is always higher than occurrence agreement IOA because it includes more intervals in the calculation" },
      { letter: "B", text: "The discrepancy indicates that the observers are using different operational definitions of the target behavior" },
      { letter: "C", text: "Occurrence agreement IOA is always a more conservative measure that produces lower values than total agreement IOA" },
      { letter: "D", text: "When the target behavior occurs infrequently, total agreement IOA is inflated by the many intervals of agreement on non-occurrence, while occurrence agreement IOA focuses only on intervals where at least one observer recorded the behavior" }
    ],
    correctAnswer: "D",
    rationale: "Choice D is correct. When a behavior occurs infrequently, most intervals are non-occurrence intervals. Both observers are likely to agree on non-occurrence in most of these intervals, inflating total agreement IOA. Occurrence agreement IOA only considers intervals where at least one observer recorded the behavior, which are the intervals where disagreements are most clinically meaningful. Choice A is not always true. Choice B is possible but does not explain the systematic pattern. Choice C is not always true."
  },
  {
    id: "t6-C-b1-27",
    domain: "C",
    taskItem: "C.8",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: "A BCBA is calculating IOA for a client's on-task behavior using 10-second interval recording. Observer 1 scored 18 of 30 intervals as positive. Observer 2 scored 20 of 30 intervals as positive. They agreed on 16 intervals as positive and 8 intervals as negative.",
    question: "Which of the following correctly calculates the exact agreement IOA for this session?",
    choices: [
      { letter: "A", text: "(16 + 8) / 30 × 100 = 80%" },
      { letter: "B", text: "16 / (16 + 2 + 4) × 100 = 72.7%" },
      { letter: "C", text: "18 / 20 × 100 = 90%" },
      { letter: "D", text: "(18 + 20) / (30 + 30) × 100 = 63.3%" }
    ],
    correctAnswer: "A",
    rationale: "Choice A is correct. Exact agreement IOA (also called point-by-point IOA) is calculated as the number of intervals where both observers agreed (both scored positive or both scored negative) divided by the total number of intervals, multiplied by 100. Agreements on positive = 16, agreements on negative = 8, total agreements = 24, total intervals = 30. IOA = 24/30 × 100 = 80%. Choice B calculates occurrence agreement IOA, not exact agreement IOA. Choice C compares the two observers' total counts, not interval-by-interval agreement. Choice D is not a standard IOA formula."
  },
  {
    id: "t6-C-b1-28",
    domain: "C",
    taskItem: "C.8",
    difficulty: "hard",
    bloomsLevel: "application",
    scenario: "A BCBA is reviewing the IOA data for a new behavior program. The IOA data show 75% agreement. The BCBA knows that the generally accepted minimum standard for IOA in ABA research is 80%. The BCBA must decide whether to continue data collection or address the IOA issue first.",
    question: "Which of the following is the most appropriate action for the BCBA to take?",
    choices: [
      { letter: "A", text: "Continue data collection because 75% IOA is close enough to the 80% standard and the difference is unlikely to affect clinical decisions" },
      { letter: "B", text: "Investigate the source of disagreement, revise the operational definition or data collection procedures as needed, and re-train the observers before continuing data collection" },
      { letter: "C", text: "Average the two observers' data to create a single data point that represents the consensus between them" },
      { letter: "D", text: "Discontinue the behavior program because the data are unreliable and cannot be used to make clinical decisions" }
    ],
    correctAnswer: "B",
    rationale: "Choice B is correct. When IOA falls below the accepted standard (80%), the BCBA should investigate the source of disagreement. Common causes include an unclear operational definition, inconsistent data collection procedures, or inadequate observer training. Addressing these issues before continuing data collection ensures that the data are reliable and valid. Choice A is inappropriate — 75% IOA does not meet the standard and should not be accepted. Choice C (averaging) does not address the reliability problem. Choice D is too extreme — the program should not be discontinued; the data collection system should be improved."
  },
  {
    id: "t6-C-b1-29",
    domain: "C",
    taskItem: "C.8",
    difficulty: "hard",
    bloomsLevel: "analysis",
    scenario: "A BCBA is calculating both total agreement IOA and occurrence agreement IOA for a client's aggression data. During a 20-interval session, Observer 1 scored 10 intervals as positive (occurrence) and Observer 2 scored 8 intervals as positive. They agreed on 7 intervals as positive and 9 intervals as negative.",
    question: "Which of the following correctly calculates both total agreement IOA and occurrence agreement IOA for this data set?",
    choices: [
      { letter: "A", text: "Total agreement = 80%; Occurrence agreement = 70%" },
      { letter: "B", text: "Total agreement = 70%; Occurrence agreement = 63.6%" },
      { letter: "C", text: "Total agreement = 80%; Occurrence agreement = 63.6%" },
      { letter: "D", text: "Total agreement = 75%; Occurrence agreement = 70%" }
    ],
    correctAnswer: "C",
    rationale: "Choice C is correct. Total agreement IOA = (agreements on occurrence + agreements on non-occurrence) / total intervals × 100 = (7 + 9) / 20 × 100 = 80%. Occurrence agreement IOA = agreements on occurrence / (agreements on occurrence + disagreements on occurrence) × 100. Disagreements on occurrence = (10 - 7) + (8 - 7) = 3 + 1 = 4. Occurrence agreement = 7 / (7 + 4) × 100 = 63.6%. Choices A, B, and D contain calculation errors."
  },
  {
    id: "t6-C-b1-30",
    domain: "C",
    taskItem: "C.9",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: "A BCBA is reviewing treatment integrity data for a client's behavior intervention plan. The data show that the RBT is implementing the extinction procedure with 70% fidelity — meaning that 30% of the time, the RBT is providing attention following the target behavior, which should be on extinction.",
    question: "Which of the following best describes the clinical significance of 70% treatment integrity for an extinction procedure?",
    choices: [
      { letter: "A", text: "70% treatment integrity is only a concern if the client's behavior is not improving; if behavior is decreasing, integrity does not need to be addressed" },
      { letter: "B", text: "70% treatment integrity is a minor concern because the remaining 30% of correct implementations will still produce extinction" },
      { letter: "C", text: "70% treatment integrity is acceptable because no intervention can be implemented perfectly in a naturalistic setting" },
      { letter: "D", text: "70% treatment integrity is a significant concern because intermittent reinforcement during extinction can strengthen the behavior and make it more resistant to extinction" }
    ],
    correctAnswer: "D",
    rationale: "Choice D is correct. When extinction is implemented with less than 100% fidelity, the behavior is being intermittently reinforced. Intermittent reinforcement schedules produce behavior that is more resistant to extinction than continuous reinforcement. Therefore, 70% treatment integrity for an extinction procedure is a significant clinical concern — the 30% of trials where attention is provided may actually strengthen the behavior. Choice C is incorrect — while perfect implementation is difficult, 70% fidelity for extinction is clinically problematic. Choice A is incorrect — treatment integrity should be addressed regardless of current behavior trends. Choice B is incorrect — intermittent reinforcement is more powerful than continuous reinforcement."
  },
  {
    id: "t6-C-b1-31",
    domain: "C",
    taskItem: "C.9",
    difficulty: "hard",
    bloomsLevel: "analysis",
    scenario: "A BCBA is designing a treatment integrity measurement system for a school-based behavior intervention plan. The plan includes 12 specific steps that the teacher must follow when a student engages in problem behavior. The BCBA wants to measure both the overall fidelity of implementation and which specific steps are most frequently missed.",
    question: "Which treatment integrity measurement approach would best capture both overall fidelity and step-specific implementation errors?",
    choices: [
      { letter: "A", text: "A global rating scale where the teacher rates their own implementation on a 1–5 scale after each incident" },
      { letter: "B", text: "A frequency count of the number of incidents per day, which provides an indirect measure of implementation quality" },
      { letter: "C", text: "A step-by-step checklist that records whether each of the 12 steps was implemented correctly during each incident, allowing calculation of overall percentage and step-specific error rates" },
      { letter: "D", text: "A permanent product review of the teacher's written incident reports, which provides a record of what the teacher believed they implemented" }
    ],
    correctAnswer: "C",
    rationale: "Choice C is correct. A step-by-step checklist that records whether each of the 12 steps was implemented correctly allows the BCBA to calculate both the overall percentage of steps implemented correctly (overall fidelity) and the frequency with which each specific step is missed (step-specific error rates). This provides the most detailed and actionable data. Choice A (global rating) provides an overall impression but not step-specific data, and self-report may be biased. Choice B (frequency count) measures behavior occurrence, not implementation quality. Choice D (incident reports) reflects the teacher's perception, not actual implementation."
  },
  {
    id: "t6-C-b1-32",
    domain: "C",
    taskItem: "C.9",
    difficulty: "medium",
    bloomsLevel: "comprehension",
    scenario: "A BCBA is reviewing treatment integrity data for a client's reinforcement schedule. The data show that the RBT is delivering reinforcement on a variable ratio 5 schedule, but the actual delivery is occurring on a fixed ratio 3 schedule. The client's behavior has been increasing rather than maintaining.",
    question: "Which of the following best explains the relationship between the treatment integrity error and the client's behavior pattern?",
    choices: [
      { letter: "A", text: "The fixed ratio 3 schedule is delivering reinforcement more frequently than the variable ratio 5 schedule, which may be maintaining or increasing the behavior at a higher rate than intended" },
      { letter: "B", text: "The fixed ratio 3 schedule is less effective than the variable ratio 5 schedule because fixed schedules produce lower response rates" },
      { letter: "C", text: "The treatment integrity error is unrelated to the behavior increase; the increase is likely due to a change in the client's motivation" },
      { letter: "D", text: "The fixed ratio 3 schedule will produce extinction bursts that explain the temporary increase in behavior" }
    ],
    correctAnswer: "A",
    rationale: "Choice A is correct. A fixed ratio 3 schedule delivers reinforcement after every 3 responses, while a variable ratio 5 schedule delivers reinforcement on average after every 5 responses. The FR3 schedule is delivering reinforcement more frequently than intended, which would maintain or increase the behavior at a higher rate. This treatment integrity error directly explains the behavior increase. Choice B is incorrect — fixed ratio schedules do not necessarily produce lower response rates than variable ratio schedules at comparable ratios. Choice C is incorrect — the treatment integrity error is a plausible explanation that should be investigated first. Choice D is incorrect — extinction bursts occur when reinforcement is removed, not when it is increased."
  },
  {
    id: "t6-C-b1-33",
    domain: "C",
    taskItem: "C.9",
    difficulty: "hard",
    bloomsLevel: "comprehension",
    scenario: "A BCBA is reviewing treatment integrity data and notices that a new RBT has been implementing a behavior intervention plan with 65% fidelity. The BCBA must decide how to address this issue while maintaining the therapeutic relationship with the RBT.",
    question: "Which of the following represents the most appropriate sequence of steps to address the treatment integrity problem?",
    choices: [
      { letter: "A", text: "Simplify the behavior intervention plan by reducing the number of steps to make it easier for the RBT to implement with higher fidelity" },
      { letter: "B", text: "Accept the 65% fidelity as a baseline and set a goal of 75% fidelity within one month, without changing the current training approach" },
      { letter: "C", text: "Immediately report the RBT to the agency supervisor and request that the RBT be reassigned to a different client" },
      { letter: "D", text: "Identify which specific steps are being missed, provide targeted retraining using BST, increase supervision frequency, and monitor treatment integrity data to confirm improvement" }
    ],
    correctAnswer: "D",
    rationale: "Choice D is correct. The appropriate sequence is to first identify which specific steps are being missed (data-based diagnosis), then provide targeted retraining using BST (instruction, modeling, rehearsal, feedback), increase supervision frequency to support skill development, and monitor treatment integrity data to confirm that the intervention is working. This approach addresses the root cause and supports the RBT's skill development. Choice C is premature — reassignment is not appropriate before attempting to address the problem through training and supervision. Choice C may be appropriate in some cases but should not be the first step. Choice D sets an arbitrary goal without addressing the root cause."
  },
  {
    id: "t6-C-b1-34",
    domain: "C",
    taskItem: "C.9",
    difficulty: "medium",
    bloomsLevel: "comprehension",
    scenario: "A BCBA is explaining the importance of treatment integrity to a parent who is implementing a home-based behavior intervention plan. The parent asks why it matters whether they follow every step exactly, as long as the child's behavior is improving.",
    question: "Which of the following best explains why treatment integrity is important even when behavior appears to be improving?",
    choices: [
      { letter: "A", text: "Treatment integrity is important primarily to protect the BCBA from liability if the intervention does not work" },
      { letter: "B", text: "Treatment integrity ensures that the child receives the maximum number of learning opportunities per session" },
      { letter: "C", text: "Treatment integrity is only important for research purposes; clinical practice allows for flexibility in implementation" },
      { letter: "D", text: "High treatment integrity ensures that the behavior change can be attributed to the intervention and that the intervention can be replicated reliably by other caregivers" }
    ],
    correctAnswer: "D",
    rationale: "Choice D is correct. High treatment integrity is important for two main reasons: (1) it allows the BCBA to attribute behavior change to the intervention rather than to extraneous variables, and (2) it ensures that the intervention can be reliably replicated by other caregivers in other settings. Without consistent implementation, it is impossible to know whether the behavior change is due to the intervention or to other factors. Choice C is incorrect — treatment integrity is important in both research and clinical practice. Choice A is incorrect — while liability is a consideration, it is not the primary reason for treatment integrity. Choice B is a benefit of some interventions but is not the primary reason for treatment integrity."
  },
  {
    id: "t6-C-b1-35",
    domain: "C",
    taskItem: "C.6",
    difficulty: "medium",
    bloomsLevel: "comprehension",
    scenario: "A BCBA is reviewing a line graph showing a client's percentage of correct responses across 20 sessions. The data show a generally increasing trend from sessions 1 through 15, followed by a plateau from sessions 16 through 20. The mastery criterion is 90% correct across three consecutive sessions.",
    question: "Which of the following best describes what the plateau in sessions 16 through 20 indicates and what the BCBA should consider?",
    choices: [
      { letter: "A", text: "The plateau indicates that the data collection system is unreliable and the BCBA should switch to a different measurement method" },
      { letter: "B", text: "The plateau indicates that the client is experiencing a natural learning curve and no changes to the program are needed" },
      { letter: "C", text: "The plateau indicates that the client has mastered the skill and the program should be discontinued immediately" },
      { letter: "D", text: "The plateau indicates that the client's progress has stalled and the BCBA should consider modifying the teaching procedure, prompting strategy, or reinforcement schedule" }
    ],
    correctAnswer: "D",
    rationale: "Choice D is correct. A plateau in learning data — where performance stabilizes below the mastery criterion — indicates that the current teaching procedure is no longer producing progress. The BCBA should review the data and consider modifying the teaching procedure, prompting strategy, reinforcement schedule, or other program variables to promote continued progress. Choice C is incorrect — the client has not met the mastery criterion (90% across three sessions), so the program should not be discontinued. Choice A is incorrect — a plateau is a meaningful data pattern, not a sign of measurement error. Choice B is incorrect — a plateau below mastery criterion requires programmatic action."
  },
  {
    id: "t6-C-b1-36",
    domain: "C",
    taskItem: "C.7",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: "A BCBA is reviewing a client's data on a manding program. The client has been meeting the mastery criterion of 80% correct across three consecutive sessions for 'requesting preferred items.' The BCBA wants to determine whether the skill has been maintained over time.",
    question: "Which of the following best describes the purpose of conducting maintenance probes after a skill has met the mastery criterion?",
    choices: [
      { letter: "A", text: "Maintenance probes are used to calculate the client's overall progress rate across all programs" },
      { letter: "B", text: "Maintenance probes are required by insurance companies to justify continued ABA services" },
      { letter: "C", text: "Maintenance probes are used to determine whether the client needs additional reinforcement to maintain the skill" },
      { letter: "D", text: "Maintenance probes verify that a skill learned to criterion continues to be performed at an acceptable level over time without ongoing instruction" }
    ],
    correctAnswer: "D",
    rationale: "Choice D is correct. Maintenance probes are conducted after a skill has met the mastery criterion to verify that the skill continues to be performed at an acceptable level over time without ongoing instruction. This is important because skills that are learned to criterion may not be maintained if they are not reinforced in the natural environment. Choice C is partially correct but incomplete — maintenance probes identify whether additional support is needed, but their primary purpose is to verify that the skill has been maintained. Choice A is incorrect — maintenance probes are specific to individual skills, not overall progress rates. Choice B is incorrect — maintenance probes are a clinical best practice, not primarily an insurance requirement."
  },
  {
    id: "t6-C-b1-37",
    domain: "C",
    taskItem: "C.8",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: "A BCBA is explaining the difference between occurrence agreement IOA and non-occurrence agreement IOA to a new BCBA supervisor. The BCBA wants to explain when each type of IOA is most informative.",
    question: "Which of the following best describes when occurrence agreement IOA is more informative than total agreement IOA?",
    choices: [
      { letter: "A", text: "Occurrence agreement IOA is more informative when the behavior is measured using frequency recording rather than interval recording" },
      { letter: "B", text: "Occurrence agreement IOA is more informative when two observers are using different data collection methods" },
      { letter: "C", text: "Occurrence agreement IOA is more informative when the target behavior occurs at a high frequency, because most intervals will be occurrence intervals" },
      { letter: "D", text: "Occurrence agreement IOA is more informative when the target behavior occurs infrequently, because total agreement IOA is inflated by agreements on non-occurrence" }
    ],
    correctAnswer: "D",
    rationale: "Choice D is correct. When a behavior occurs infrequently, most intervals will be non-occurrence intervals. Both observers are likely to agree on non-occurrence in most of these intervals, inflating total agreement IOA to a high level even if the observers frequently disagree on whether the behavior occurred. Occurrence agreement IOA focuses only on intervals where at least one observer recorded the behavior, providing a more accurate picture of agreement on the behavior itself. Choice C is incorrect — when the behavior occurs frequently, total agreement IOA is less inflated by non-occurrence agreements, making the two measures more similar. Choices C and D are incorrect — occurrence agreement IOA is relevant for interval recording regardless of frequency recording or different methods."
  },
  {
    id: "t6-C-b1-38",
    domain: "C",
    taskItem: "C.9",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: "A BCBA is reviewing treatment integrity data for a social skills group. The group protocol includes 8 specific steps for each session. The treatment integrity data show that the group facilitator is consistently missing steps 5 and 6, which involve providing specific feedback to individual students. The overall treatment integrity is 75%.",
    question: "Which of the following is the most appropriate action for the BCBA to take?",
    choices: [
      { letter: "A", text: "Remove steps 5 and 6 from the protocol to increase the treatment integrity percentage to 100%" },
      { letter: "B", text: "Switch to a different group facilitator who can implement the protocol with higher fidelity" },
      { letter: "C", text: "Accept the 75% treatment integrity because the facilitator is implementing 6 of 8 steps correctly, which is above the 70% threshold" },
      { letter: "D", text: "Provide targeted training specifically focused on steps 5 and 6, including modeling and practice, and monitor treatment integrity to confirm improvement" }
    ],
    correctAnswer: "D",
    rationale: "Choice D is correct. The BCBA has identified the specific steps that are being missed (steps 5 and 6). The most appropriate action is to provide targeted training on those specific steps, including modeling and practice (consistent with BST principles), and then monitor treatment integrity data to confirm that the training was effective. Choice C is incorrect — 75% treatment integrity does not meet the 80% standard, and the specific steps being missed (individual feedback) may be clinically important. Choice A is inappropriate — removing steps from the protocol to inflate the integrity percentage does not address the clinical need for those steps. Choice B is premature before attempting targeted training."
  },
  {
    id: "t6-C-b1-39",
    domain: "C",
    taskItem: "C.3",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: "A BCBA is selecting a measurement system for a client's tantrum behavior. Tantrums are defined as any episode of crying, screaming, or dropping to the floor lasting at least 10 seconds. The BCBA wants to measure both how often tantrums occur and how long each episode lasts.",
    question: "Which combination of measurement dimensions would best capture both the frequency and duration of tantrum episodes?",
    choices: [
      { letter: "A", text: "Latency (time from antecedent to tantrum onset) and magnitude (intensity of each tantrum)" },
      { letter: "B", text: "Percentage of intervals (using partial interval recording) and celeration (rate of change in behavior)" },
      { letter: "C", text: "Rate (tantrums per hour) and inter-response time (time between tantrums)" },
      { letter: "D", text: "Frequency (count of tantrums per session) and duration (total time in tantrums per session)" }
    ],
    correctAnswer: "D",
    rationale: "Choice D is correct. Frequency (count of tantrums per session) directly measures how often tantrums occur, and duration (total time in tantrums per session) measures how long each episode lasts. Together, these two dimensions provide a complete picture of the behavior. Choice A (rate and IRT) measures frequency per unit of time and time between responses, but IRT does not capture the duration of each episode. Choice C (latency and magnitude) measures the time from antecedent to onset and intensity, not frequency and duration. Choice D (interval recording and celeration) does not directly measure frequency or duration."
  },
  {
    id: "t6-C-b1-40",
    domain: "C",
    taskItem: "C.4",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: "A BCBA is comparing three data collection methods for measuring a student's off-task behavior: (1) 30-second partial interval recording, (2) 30-second whole interval recording, and (3) 30-second momentary time sampling. The behavior actually occurs for 50% of the observation time.",
    question: "Which of the following correctly describes the expected direction of bias for each method relative to the true 50% occurrence rate?",
    choices: [
      { letter: "A", text: "Partial interval: overestimate; Whole interval: underestimate; Momentary time sampling: most accurate estimate" },
      { letter: "B", text: "Partial interval: underestimate; Whole interval: overestimate; Momentary time sampling: most accurate estimate" },
      { letter: "C", text: "Partial interval: overestimate; Whole interval: overestimate; Momentary time sampling: underestimate" },
      { letter: "D", text: "All three methods produce equivalent estimates when the behavior occurs for 50% of the observation time" }
    ],
    correctAnswer: "A",
    rationale: "Choice A is correct. Partial interval recording overestimates because any occurrence in an interval — even a brief one — scores the entire interval as positive. Whole interval recording underestimates because the behavior must occur throughout the entire interval to score positive; any interruption causes the interval to score negative. Momentary time sampling provides the most accurate estimate of the proportion of time the behavior occurs because it samples the behavior state at a single point in time, which over many observations approximates the true proportion. Choice B reverses the direction of bias for partial and whole interval. Choices C and D are incorrect."
  },
  {
    id: "t6-C-b1-41",
    domain: "C",
    taskItem: "C.5",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: "A BCBA is designing a data collection system for a client who is learning to complete independent living skills, including making a sandwich. The BCBA wants to measure the client's performance on each step of the task analysis without requiring a therapist to be present during every practice session.",
    question: "Which data collection method would be most appropriate for measuring the client's performance on the sandwich-making task analysis?",
    choices: [
      { letter: "A", text: "Frequency recording — counting the number of steps the client attempts during each session" },
      { letter: "B", text: "Duration recording — measuring the total time the client spends making the sandwich" },
      { letter: "C", text: "Permanent product recording — reviewing a video recording of each session to score each step of the task analysis as correct or incorrect" },
      { letter: "D", text: "Partial interval recording — observing the client every 30 seconds to record whether they are working on the task" }
    ],
    correctAnswer: "C",
    rationale: "Choice C is correct. Permanent product recording using video review allows the BCBA to score each step of the task analysis as correct or incorrect without requiring a therapist to be present during every session. The video serves as a permanent record that can be reviewed at any time. Choice A (frequency recording) would measure the number of steps attempted, not accuracy on each step. Choice B (duration recording) would measure total time, not step-by-step accuracy. Choice D (partial interval recording) would measure engagement, not accuracy on each step of the task analysis."
  }
];
