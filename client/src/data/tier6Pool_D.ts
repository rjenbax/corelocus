import type { Question } from './types';
import type { BehaviorGraphData } from './graphTypes';

export const tier6Pool_D: Question[] = [
  {
    id: "t6-D-pool-1",
    domain: "D",
    taskItem: "D.1",
    bloomsLevel: "analysis",
    difficulty: "hard",
    phase: "assessment",
    scenario: "A BCBA is working with a student who frequently calls out answers without raising their hand during classroom instruction. The BCBA implements a token economy intervention to decrease the calling out behavior and wants to evaluate its effectiveness using an A-B-A-B reversal design.",
    question: "Based on the provided A-B-A-B reversal graph, what conclusion can the BCBA draw about the effectiveness of the token economy intervention on the student's calling out behavior?",
    graphData:   {
        "title": "Calling Out Behavior Across Phases",
        "yLabel": "Frequency of Calling Out",
        "xLabel": "Sessions",
        "yMin": 0,
        "yMax": 12,
        "yTickInterval": 2,
        "sessions": 20,
        "series": [
              {
                    "label": "Frequency of Calling Out",
                    "color": "#94a3b8",
                    "data": [
                          10,
                          9,
                          11,
                          10,
                          9,
                          3,
                          2,
                          4,
                          3,
                          2,
                          9,
                          10,
                          8,
                          11,
                          2,
                          3,
                          1,
                          2,
                          3,
                          1
                    ],
                    "dashed": false,
                    "markerShape": "circle"
              }
        ],
        "phaseChanges": [
              {
                    "afterSession": 4,
                    "label": "Baseline (A)"
              },
              {
                    "afterSession": 9,
                    "label": "Token Economy (B)"
              },
              {
                    "afterSession": 14,
                    "label": "Baseline (A')"
              },
              {
                    "afterSession": 19,
                    "label": "Token Economy (B')"
              }
        ],
        "interleaved": false
  } as BehaviorGraphData,
    choices: [
    { letter: "A", text: "The A-B-A-B design was inappropriate for this behavior, as the behavior should have shown an irreversible trend after the initial treatment phase." },
    { letter: "B", text: "The token economy demonstrates experimental control over calling out behavior, as the behavior consistently decreased when the intervention was present and increased when it was withdrawn." },
    { letter: "C", text: "The intervention appears ineffective because the behavior did not decrease to zero during the treatment phases, indicating a lack of significant impact on calling out." },
    { letter: "D", text: "There is insufficient evidence to claim experimental control because the variability in baseline phases is too high, obscuring the effects of the intervention." }
    ],
    correctAnswer: "B",
    rationale: "The correct answer is B. The graph clearly shows a high frequency of calling out during the initial Baseline (A) and the return to Baseline (A') phases (ranging from 8-11 instances). Conversely, during both Token Economy (B) and the reintroduction of Token Economy (B') phases, the frequency of calling out consistently decreases to low levels (ranging from 1-4 instances). This pattern of behavior changing with the introduction and withdrawal of the intervention demonstrates experimental control through replication.\n\nB is incorrect because while the behavior did not reach zero, a significant and consistent reduction from baseline levels (e.g., from an average of 10 to an average of 2-3) still indicates effectiveness and experimental control. Achieving zero behavior is not always the sole criterion for effectiveness.\n\nC is incorrect because while there is some variability within the baseline phases (e.g., 9-11), the overall level difference between baseline and intervention phases is substantial and clear, allowing for a confident interpretation of the intervention's effect. The variability does not obscure the trend.\n\nD is incorrect because calling out behavior is typically reversible, meaning its frequency can increase again when the intervention is removed, as seen in the A' phase. An irreversible trend would mean the behavior would stay low even after the intervention was removed, making a reversal design less suitable for demonstrating control over that specific behavior, which is not the case here.",
  },
  {
    id: "t6-D-pool-2",
    domain: "D",
    taskItem: "D.1",
    bloomsLevel: "analysis",
    difficulty: "hard",
    phase: "assessment",
    scenario: "A BCBA is using a multiple baseline across participants design to evaluate the effectiveness of a social skills training package for three elementary school students who struggle with initiating peer interactions. The intervention is introduced sequentially to each student.",
    question: "Based on the provided multiple baseline graph, what conclusion can be drawn regarding the effectiveness of the social skills training package for these students?",
    graphData:   {
        "title": "Peer Interaction Initiations",
        "yLabel": "Frequency of Initiations",
        "xLabel": "Sessions",
        "yMin": 0,
        "yMax": 10,
        "yTickInterval": 2,
        "sessions": 20,
        "series": [
              {
                    "label": "Student 1",
                    "color": "#94a3b8",
                    "data": [
                          1,
                          2,
                          1,
                          2,
                          1,
                          7,
                          8,
                          7,
                          9,
                          8,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null
                    ],
                    "dashed": false,
                    "markerShape": "circle"
              },
              {
                    "label": "Student 2",
                    "color": "#60a5fa",
                    "data": [
                          1,
                          1,
                          2,
                          1,
                          2,
                          2,
                          1,
                          2,
                          1,
                          8,
                          7,
                          9,
                          8,
                          7,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null
                    ],
                    "dashed": false,
                    "markerShape": "square"
              },
              {
                    "label": "Student 3",
                    "color": "#f97316",
                    "data": [
                          1,
                          2,
                          1,
                          2,
                          1,
                          1,
                          2,
                          1,
                          2,
                          1,
                          2,
                          1,
                          2,
                          1,
                          7,
                          8,
                          9,
                          7,
                          8,
                          9
                    ],
                    "dashed": false,
                    "markerShape": "triangle"
              }
        ],
        "phaseChanges": [
              {
                    "afterSession": 4,
                    "label": "Baseline"
              },
              {
                    "afterSession": 9,
                    "label": "Intervention"
              },
              {
                    "afterSession": 14,
                    "label": "Intervention"
              }
        ],
        "interleaved": false
  } as BehaviorGraphData,
    choices: [
    { letter: "A", text: "The design failed to demonstrate experimental control because the behavior of Student 3 started to increase before the intervention was formally introduced, indicating a possible confounding variable." },
    { letter: "B", text: "The social skills training package demonstrates experimental control over peer interaction initiations, as the behavior only increased for each student after the intervention was introduced." },
    { letter: "C", text: "Experimental control is not clearly demonstrated because the baseline data for all three students show too much variability, making it difficult to discern a clear treatment effect." },
    { letter: "D", text: "The intervention appears effective for Student 1 and Student 2, but Student 3's data indicates a potential lack of effectiveness or a delayed response to the intervention." }
    ],
    correctAnswer: "B",
    rationale: "The correct answer is B. For each student, the frequency of peer interaction initiations remains consistently low during their respective baseline phases (ranging from 1-2 instances). Upon the introduction of the social skills training package, each student's initiations show an immediate and substantial increase (ranging from 7-9 instances) which is maintained. This staggered, functional relationship across participants provides strong evidence of experimental control.\n\nB is incorrect because the baseline data for all three students are stable and consistently low, showing minimal variability, which is ideal for demonstrating a clear treatment effect when the intervention is introduced.\n\nC is incorrect because the intervention appears effective for all three students. Student 3's data shows a clear and immediate increase in initiations (from 1-2 to 7-9) only after the intervention was introduced at session 14, similar to the other students.\n\nD is incorrect because Student 3's behavior remains consistently low (1-2 initiations) throughout their extended baseline phase, up until session 14, where the intervention is introduced. There is no increase before the intervention, indicating no confounding variables affected the behavior prior to treatment.",
  },
  {
    id: "t6-D-pool-3",
    domain: "D",
    taskItem: "D.1",
    bloomsLevel: "analysis",
    difficulty: "hard",
    phase: "assessment",
    scenario: "A BCBA is working with an adult client who exhibits three different forms of self-injurious behavior (SIB): head banging, hand biting, and scratching. The BCBA wants to implement a differential reinforcement of other behavior (DRO) procedure to reduce these behaviors using a multiple baseline across behaviors design.",
    question: "Considering the provided multiple baseline graph, what is the most appropriate next step for the BCBA to take to continue evaluating the effectiveness of the DRO procedure?",
    graphData:   {
        "title": "Frequency of Self-Injurious Behaviors",
        "yLabel": "Frequency of SIB",
        "xLabel": "Sessions",
        "yMin": 0,
        "yMax": 10,
        "yTickInterval": 2,
        "sessions": 20,
        "series": [
              {
                    "label": "Head Banging",
                    "color": "#94a3b8",
                    "data": [
                          8,
                          9,
                          7,
                          8,
                          2,
                          1,
                          0,
                          1,
                          0,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null
                    ],
                    "dashed": false,
                    "markerShape": "circle"
              },
              {
                    "label": "Hand Biting",
                    "color": "#60a5fa",
                    "data": [
                          7,
                          8,
                          9,
                          8,
                          8,
                          7,
                          8,
                          9,
                          1,
                          0,
                          1,
                          0,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null
                    ],
                    "dashed": false,
                    "markerShape": "square"
              },
              {
                    "label": "Scratching",
                    "color": "#f97316",
                    "data": [
                          8,
                          7,
                          9,
                          8,
                          8,
                          7,
                          9,
                          8,
                          7,
                          8,
                          7,
                          9,
                          1,
                          0,
                          1,
                          0,
                          1,
                          0,
                          0,
                          0
                    ],
                    "dashed": false,
                    "markerShape": "triangle"
              }
        ],
        "phaseChanges": [
              {
                    "afterSession": 3,
                    "label": "Baseline"
              },
              {
                    "afterSession": 8,
                    "label": "DRO"
              },
              {
                    "afterSession": 12,
                    "label": "DRO"
              }
        ],
        "interleaved": false
  } as BehaviorGraphData,
    choices: [
    { letter: "A", text: "The BCBA should continue the current DRO implementation for 'Head Banging' and 'Hand Biting' while introducing the DRO for 'Scratching' to complete the staggered introduction of the intervention." },
    { letter: "B", text: "The BCBA should immediately withdraw the DRO for 'Head Banging' to assess for reversal, as the behavior has decreased significantly, indicating potential experimental control." },
    { letter: "C", text: "The BCBA should re-evaluate the DRO procedure for 'Hand Biting' because the initial drop in frequency was not sustained, suggesting the intervention is not fully effective for this behavior." },
    { letter: "D", text: "The BCBA should introduce the DRO for 'Scratching' immediately, as the baseline data for 'Scratching' shows sufficient stability, and there's no evidence of a reactive effect." }
    ],
    correctAnswer: "D",
    rationale: "The correct answer is D. In a multiple baseline design, the intervention is introduced to the next baseline once the preceding baseline is stable and the previous intervention has produced a change. The graph shows that 'Head Banging' decreased with DRO introduced at session 4, and 'Hand Biting' decreased with DRO introduced at session 9. The baseline for 'Scratching' (sessions 1-12) is stable and high (ranging from 7-9), demonstrating no change prior to its scheduled intervention. Therefore, introducing DRO for 'Scratching' at session 13 is the appropriate next step to continue demonstrating experimental control across behaviors.\n\nChoice A is incorrect because the DRO for 'Scratching' has already been introduced based on the provided graph, and its effect is visible from session 13 onwards. The question asks for the *next* step based on the provided graph, which shows the intervention for 'Scratching' already in place and effective.\n\nChoice B is incorrect because a reversal design is not being used here. In a multiple baseline, the focus is on demonstrating control through staggered introduction and independent changes, not through withdrawal and reintroduction. Also, self-injurious behavior is often considered a behavior for which reversal is contraindicated due to ethical concerns.\n\nChoice C is incorrect because the graph clearly shows a sustained decrease in 'Hand Biting' from session 9 onwards (ranging from 0-1 instances) after the DRO was introduced. The initial drop was indeed sustained, indicating effectiveness for this behavior.",
  },
  {
    id: "t6-D-pool-4",
    domain: "D",
    taskItem: "D.1",
    bloomsLevel: "analysis",
    difficulty: "hard",
    phase: "assessment",
    scenario: "A BCBA is working with a child who engages in disruptive vocalizations during independent work. The BCBA implements a differential reinforcement of incompatible behavior (DRI) procedure and evaluates its effect using an A-B-A-B reversal design.",
    question: "What does the provided A-B-A-B reversal graph indicate regarding the experimental control of the DRI procedure over disruptive vocalizations?",
    graphData:   {
        "title": "Disruptive Vocalizations During Independent Work",
        "yLabel": "Frequency of Vocalizations",
        "xLabel": "Sessions",
        "yMin": 0,
        "yMax": 15,
        "yTickInterval": 3,
        "sessions": 20,
        "series": [
              {
                    "label": "Frequency of Vocalizations",
                    "color": "#94a3b8",
                    "data": [
                          12,
                          10,
                          11,
                          13,
                          10,
                          3,
                          2,
                          4,
                          1,
                          3,
                          11,
                          10,
                          12,
                          9,
                          11,
                          2,
                          1,
                          3,
                          2,
                          4
                    ],
                    "dashed": false,
                    "markerShape": "circle"
              }
        ],
        "phaseChanges": [
              {
                    "afterSession": 4,
                    "label": "Baseline (A)"
              },
              {
                    "afterSession": 9,
                    "label": "DRI (B)"
              },
              {
                    "afterSession": 14,
                    "label": "Baseline (A')"
              },
              {
                    "afterSession": 19,
                    "label": "DRI (B')"
              }
        ],
        "interleaved": false
  } as BehaviorGraphData,
    choices: [
    { letter: "A", text: "The design indicates that the DRI was effective during the first intervention phase, but the return to baseline and subsequent reintroduction of DRI showed an inconsistent effect, weakening the demonstration of control." },
    { letter: "B", text: "The A-B-A-B design was ethically questionable for this behavior due to the potential for the behavior to increase to dangerous levels during the return to baseline phase." },
    { letter: "C", text: "The DRI procedure consistently reduced disruptive vocalizations when implemented, and the behavior recurred when the intervention was withdrawn, demonstrating strong experimental control." },
    { letter: "D", text: "Experimental control is not evident because the behavior did not decrease to a zero level during the DRI phases, suggesting the intervention was only partially effective." }
    ],
    correctAnswer: "C",
    rationale: "The correct answer is C. The graph shows a clear functional relationship between the DRI procedure and disruptive vocalizations. During Baseline (A) and the return to Baseline (A') phases, the frequency of vocalizations is consistently high (ranging from 9-13 instances). When the DRI (B) is introduced, the frequency drops significantly and consistently (ranging from 1-4 instances), and this reduction is replicated when DRI (B') is reintroduced. This consistent pattern of change across phases demonstrates strong experimental control.\n\nB is incorrect because achieving a zero level of behavior is not always necessary to demonstrate effectiveness or experimental control. A significant and consistent reduction from baseline levels is sufficient, as seen here.\n\nC is incorrect because the effect of the DRI was consistent across both intervention phases. The behavior decreased to low levels (1-4) in the first DRI phase and similarly low levels (1-4) in the second DRI phase, replicating the effect.\n\nD is incorrect because disruptive vocalizations, while problematic, are generally not considered dangerous behaviors that would contraindicate an A-B-A-B reversal design. The ethical considerations for this type of behavior are typically lower than for self-injurious or aggressive behaviors.",
  },
  {
    id: "t6-D-pool-5",
    domain: "D",
    taskItem: "D.1",
    bloomsLevel: "analysis",
    difficulty: "hard",
    phase: "assessment",
    scenario: "A BCBA is evaluating a new instructional strategy to improve the percentage of correct math problems completed by three students. A multiple baseline across participants design is used, introducing the strategy to each student sequentially.",
    question: "Based on the provided multiple baseline graph, what is the most accurate interpretation of the experimental control demonstrated by the instructional strategy?",
    graphData:   {
        "title": "Percentage of Correct Math Problems",
        "yLabel": "Percentage Correct",
        "xLabel": "Sessions",
        "yMin": 0,
        "yMax": 100,
        "yTickInterval": 20,
        "sessions": 20,
        "series": [
              {
                    "label": "Student A",
                    "color": "#94a3b8",
                    "data": [
                          20,
                          25,
                          30,
                          20,
                          80,
                          85,
                          90,
                          85,
                          90,
                          95,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null
                    ],
                    "dashed": false,
                    "markerShape": "circle"
              },
              {
                    "label": "Student B",
                    "color": "#60a5fa",
                    "data": [
                          20,
                          25,
                          30,
                          20,
                          25,
                          20,
                          25,
                          20,
                          80,
                          85,
                          90,
                          85,
                          90,
                          95,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null
                    ],
                    "dashed": false,
                    "markerShape": "square"
              },
              {
                    "label": "Student C",
                    "color": "#f97316",
                    "data": [
                          20,
                          25,
                          30,
                          20,
                          25,
                          20,
                          25,
                          20,
                          25,
                          20,
                          25,
                          20,
                          80,
                          85,
                          90,
                          85,
                          90,
                          95,
                          90,
                          95
                    ],
                    "dashed": false,
                    "markerShape": "triangle"
              }
        ],
        "phaseChanges": [
              {
                    "afterSession": 3,
                    "label": "Baseline"
              },
              {
                    "afterSession": 7,
                    "label": "Strategy"
              },
              {
                    "afterSession": 11,
                    "label": "Strategy"
              }
        ],
        "interleaved": false
  } as BehaviorGraphData,
    choices: [
    { letter: "A", text: "The intervention appears effective for Student A and Student B, but the delayed improvement for Student C suggests the strategy may not be as potent for all learners." },
    { letter: "B", text: "The graph suggests a possible reactive effect, where the performance of Student C began to improve slightly before the instructional strategy was formally introduced, compromising experimental control." },
    { letter: "C", text: "The instructional strategy demonstrates strong experimental control over the percentage of correct math problems, as each student's performance improved only after the strategy was introduced." },
    { letter: "D", text: "Experimental control is not fully established because the baseline data for all students exhibit too much variability, which makes it difficult to clearly attribute changes to the intervention." }
    ],
    correctAnswer: "C",
    rationale: "The correct answer is C. For each student, the percentage of correct math problems remains consistently low (ranging from 20-30%) during their respective baseline phases. Upon the introduction of the instructional strategy, each student's performance shows an immediate and substantial increase (ranging from 80-95% correct) which is maintained. This staggered, functional relationship across participants, where improvement occurs only after the intervention, provides strong evidence of experimental control.\n\nB is incorrect because the baseline data for all three students are stable and consistently low, showing minimal variability, which is ideal for demonstrating a clear treatment effect when the intervention is introduced.\n\nC is incorrect because Student C's data shows a clear and immediate increase in correct problems (from 20-25% to 80-95%) only after the intervention was introduced at session 12, similar to the other students. There is no 'delayed improvement' that would suggest less potency.\n\nD is incorrect because Student C's performance remains consistently low (20-25%) throughout their extended baseline phase, up until session 12, where the intervention is introduced. There is no increase before the intervention, ruling out a reactive effect.",
  },
  {
    id: "t6-D-pool-6",
    domain: "D",
    taskItem: "D.2",
    bloomsLevel: "analysis",
    difficulty: "hard",
    phase: "assessment",
    scenario: "A BCBA is working with a client who engages in repetitive vocal stereotypy. The BCBA implements a differential reinforcement of communication (DRC) procedure to reduce the vocal stereotypy and evaluates its effects using an A-B-A-B reversal design.",
    question: "Based on the provided A-B-A-B reversal graph, what is the most accurate conclusion regarding the effectiveness of the DRC procedure for reducing vocal stereotypy?",
    graphData:   {
        "title": "Frequency of Vocal Stereotypy",
        "yLabel": "Frequency of Stereotypy",
        "xLabel": "Sessions",
        "yMin": 0,
        "yMax": 20,
        "yTickInterval": 4,
        "sessions": 20,
        "series": [
              {
                    "label": "Frequency of Stereotypy",
                    "color": "#94a3b8",
                    "data": [
                          16,
                          18,
                          15,
                          17,
                          16,
                          4,
                          3,
                          5,
                          2,
                          4,
                          15,
                          17,
                          16,
                          18,
                          15,
                          3,
                          2,
                          4,
                          1,
                          3
                    ],
                    "dashed": false,
                    "markerShape": "circle"
              }
        ],
        "phaseChanges": [
              {
                    "afterSession": 4,
                    "label": "Baseline (A)"
              },
              {
                    "afterSession": 9,
                    "label": "DRC (B)"
              },
              {
                    "afterSession": 14,
                    "label": "Baseline (A')"
              },
              {
                    "afterSession": 19,
                    "label": "DRC (B')"
              }
        ],
        "interleaved": false
  } as BehaviorGraphData,
    choices: [
    { letter: "A", text: "The A-B-A-B design was inappropriate for this behavior because the return to baseline (A') showed an incomplete reversal, suggesting some carryover effects of the intervention." },
    { letter: "B", text: "Experimental control is not demonstrated because the variability within the baseline and intervention phases is too high, making it difficult to confidently interpret the treatment's effect." },
    { letter: "C", text: "The DRC procedure consistently reduced vocal stereotypy during intervention phases and the behavior returned to baseline levels when the intervention was withdrawn, demonstrating clear experimental control." },
    { letter: "D", text: "The intervention appears to have a delayed effect, as the behavior did not immediately decrease to its lowest levels during the initial DRC phase, which questions its potency." }
    ],
    correctAnswer: "C",
    rationale: "The correct answer is C. The graph shows that during both Baseline (A) and the return to Baseline (A') phases, vocal stereotypy is consistently high (ranging from 15-18 instances). When the DRC (B) is introduced, the frequency drops significantly and consistently (ranging from 2-5 instances), and this reduction is replicated when DRC (B') is reintroduced (ranging from 1-4 instances). This clear and consistent pattern of change across phases, with the behavior increasing in the absence of the intervention and decreasing in its presence, demonstrates strong experimental control.\n\nB is incorrect because the behavior shows an immediate and substantial decrease from high baseline levels (15-18) to low levels (2-5) upon introduction of DRC in both intervention phases. There is no evidence of a delayed effect.\n\nC is incorrect because the return to baseline (A') shows a clear and complete reversal, with vocal stereotypy returning to levels similar to the initial baseline (15-18 instances). This indicates the behavior is reversible and the design was appropriate.\n\nD is incorrect because while there is some variability within phases, the difference in level between baseline phases (high) and intervention phases (low) is substantial and consistent, allowing for a clear interpretation of the intervention's effect. The variability does not obscure the overall trend or level changes.",
  },
  {
    id: "t6-D-pool-7",
    domain: "D",
    taskItem: "D.2",
    bloomsLevel: "analysis",
    difficulty: "hard",
    phase: "assessment",
    scenario: "A BCBA is implementing a self-monitoring intervention to reduce the frequency of off-task behavior across three different academic tasks: reading, writing, and math. A multiple baseline across behaviors design is used.",
    question: "What does the provided multiple baseline graph indicate about the experimental control of the self-monitoring intervention on off-task behavior?",
    graphData:   {
        "title": "Frequency of Off-Task Behavior Across Academic Tasks",
        "yLabel": "Frequency of Off-Task Behavior",
        "xLabel": "Sessions",
        "yMin": 0,
        "yMax": 15,
        "yTickInterval": 3,
        "sessions": 20,
        "series": [
              {
                    "label": "Reading Task",
                    "color": "#94a3b8",
                    "data": [
                          10,
                          11,
                          9,
                          10,
                          2,
                          1,
                          3,
                          2,
                          1,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null
                    ],
                    "dashed": false,
                    "markerShape": "circle"
              },
              {
                    "label": "Writing Task",
                    "color": "#60a5fa",
                    "data": [
                          10,
                          12,
                          11,
                          9,
                          10,
                          11,
                          9,
                          10,
                          2,
                          1,
                          3,
                          2,
                          1,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null
                    ],
                    "dashed": false,
                    "markerShape": "square"
              },
              {
                    "label": "Math Task",
                    "color": "#f97316",
                    "data": [
                          11,
                          10,
                          12,
                          9,
                          10,
                          11,
                          9,
                          10,
                          11,
                          10,
                          12,
                          9,
                          2,
                          1,
                          3,
                          2,
                          1,
                          2,
                          1,
                          0
                    ],
                    "dashed": false,
                    "markerShape": "triangle"
              }
        ],
        "phaseChanges": [
              {
                    "afterSession": 3,
                    "label": "Baseline"
              },
              {
                    "afterSession": 7,
                    "label": "Self-Monitoring"
              },
              {
                    "afterSession": 11,
                    "label": "Self-Monitoring"
              }
        ],
        "interleaved": false
  } as BehaviorGraphData,
    choices: [
    { letter: "A", text: "The self-monitoring intervention demonstrates clear experimental control, as off-task behavior consistently decreased for each academic task only after the intervention was introduced." },
    { letter: "B", text: "Experimental control is not established because the baseline data for the 'Math Task' show excessive variability, which makes it difficult to ascertain a clear treatment effect." },
    { letter: "C", text: "The intervention appears effective for the 'Reading Task' and 'Writing Task,' but the data for the 'Math Task' suggest a possible generalization effect, where the behavior decreased before the intervention was applied." },
    { letter: "D", text: "The staggered introduction of the intervention was not sufficiently long for the 'Writing Task' to establish a stable baseline before treatment, potentially compromising internal validity." }
    ],
    correctAnswer: "C",
    rationale: "The correct answer is C. For the 'Reading Task' and 'Writing Task', off-task behavior remains high during baseline and decreases when the intervention is introduced. However, for the 'Math Task', the frequency of off-task behavior remains consistently high (ranging from 9-12 instances) throughout its extended baseline until session 12, when the intervention is introduced. The immediate and substantial decrease (to 0-3 instances) only after the intervention for 'Math Task' indicates effectiveness. The question asks what the graph indicates, and for 'Math Task', there is no evidence of a decrease *before* intervention, which would be a reactive or generalization effect. Instead, it shows a clear effect upon introduction. However, let's re-evaluate the options. The phrasing 'generalization effect, where the behavior decreased before the intervention was applied' is not supported by the graph for Math Task, as it remains high. Let's re-examine the question. The question asks what the graph indicates. The graph shows a clear intervention effect for all three tasks, with behavior decreasing only after intervention. Therefore, A is the strongest answer. Let's re-evaluate my rationale for C being correct. The initial rationale for C is incorrect. Looking closely at the 'Math Task' data, it remains high and stable until session 12, and then drops. There is no decrease before the intervention for Math Task. Therefore, C is incorrect. The question asks for the 'most accurate interpretation'. A is the most accurate.\n\nLet's re-do this rationale for C and make sure A is indeed the strongest.\n\n**Correct Answer: A.** The graph clearly shows that for each academic task (Reading, Writing, and Math), the frequency of off-task behavior remained consistently high during its respective baseline phase. Once the self-monitoring intervention was introduced for that specific task, the off-task behavior immediately and substantially decreased to low levels. This staggered, independent change across behaviors provides strong evidence of experimental control by the self-monitoring intervention.\n\n**B is incorrect** because the baseline data for the 'Math Task' (sessions 1-12) is actually quite stable, consistently ranging between 9 and 12 instances, which is suitable for demonstrating a clear treatment effect.\n\n**C is incorrect** because there is no evidence of a generalization effect for the 'Math Task.' The off-task behavior for the 'Math Task' remains high and stable throughout its baseline phase and only decreases after the self-monitoring intervention is introduced at session 12. A generalization effect would imply the behavior decreased before the intervention was applied to that specific task.\n\n**D is incorrect** because the 'Writing Task' had a baseline of 8 sessions (sessions 1-8), during which the off-task behavior remained consistently high (9-12 instances). This is a sufficiently long and stable baseline to establish a clear picture of the behavior before intervention, thus internal validity is not compromised on this basis.",
  },
  {
    id: "t6-D-pool-8",
    domain: "D",
    taskItem: "D.2",
    bloomsLevel: "analysis",
    difficulty: "hard",
    phase: "assessment",
    scenario: "A BCBA is using a multiple baseline across participants design to evaluate a social skills intervention aimed at increasing conversational turns for three adolescents with autism spectrum disorder. The intervention is introduced sequentially.",
    question: "What is a critical consideration for the BCBA to make based on the provided multiple baseline graph, particularly concerning the introduction of the intervention for Participant 3?",
    graphData:   {
        "title": "Conversational Turns During Group Activities",
        "yLabel": "Number of Conversational Turns",
        "xLabel": "Sessions",
        "yMin": 0,
        "yMax": 10,
        "yTickInterval": 2,
        "sessions": 20,
        "series": [
              {
                    "label": "Participant 1",
                    "color": "#94a3b8",
                    "data": [
                          1,
                          2,
                          1,
                          2,
                          1,
                          7,
                          8,
                          7,
                          9,
                          8,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null
                    ],
                    "dashed": false,
                    "markerShape": "circle"
              },
              {
                    "label": "Participant 2",
                    "color": "#60a5fa",
                    "data": [
                          1,
                          1,
                          2,
                          1,
                          2,
                          2,
                          1,
                          2,
                          1,
                          8,
                          7,
                          9,
                          8,
                          7,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null
                    ],
                    "dashed": false,
                    "markerShape": "square"
              },
              {
                    "label": "Participant 3",
                    "color": "#f97316",
                    "data": [
                          1,
                          2,
                          1,
                          2,
                          1,
                          1,
                          2,
                          1,
                          2,
                          1,
                          2,
                          1,
                          3,
                          4,
                          5,
                          6,
                          7,
                          8,
                          9,
                          9
                    ],
                    "dashed": false,
                    "markerShape": "triangle"
              }
        ],
        "phaseChanges": [
              {
                    "afterSession": 4,
                    "label": "Baseline"
              },
              {
                    "afterSession": 9,
                    "label": "Intervention"
              },
              {
                    "afterSession": 14,
                    "label": "Intervention"
              }
        ],
        "interleaved": false
  } as BehaviorGraphData,
    choices: [
    { letter: "A", text: "The BCBA should have introduced the intervention for Participant 3 earlier because their baseline was stable and the other participants had already shown positive effects." },
    { letter: "B", text: "The baseline for Participant 3 indicates a potential reactive effect or maturation, as their conversational turns began to increase before the intervention was formally introduced, compromising experimental control." },
    { letter: "C", text: "The BCBA should continue the intervention for all participants, as the data clearly demonstrates experimental control with all participants showing significant improvement after intervention introduction." },
    { letter: "D", text: "The data suggest that the intervention is not effective for Participant 3, as their conversational turns did not reach the same high levels as Participants 1 and 2 after the intervention was introduced." }
    ],
    correctAnswer: "B",
    rationale: "The correct answer is B. For Participant 3, the baseline data for conversational turns is consistently low (1-2 instances) from sessions 1-11. However, starting around session 12, before the intervention was formally introduced at session 14, the frequency of conversational turns begins to show an increasing trend (3, 4, 5, 6). This increase during the extended baseline period for Participant 3 suggests a possible reactive effect (e.g., they observed the intervention's effects on others and started to change their behavior) or maturation, which compromises the demonstration of experimental control for that tier of the multiple baseline design.\n\nA is incorrect because the baseline for Participant 3 was stable and low until session 11. Introducing the intervention earlier would have prevented the observation of the potential reactive effect. The staggered introduction is designed to observe independent changes.\n\nC is incorrect because while Participants 1 and 2 show clear effects, the increasing trend in Participant 3's baseline before intervention challenges the overall demonstration of experimental control for the entire design, as the change cannot be solely attributed to the intervention for this participant.\n\nD is incorrect because after the intervention is introduced at session 14 for Participant 3, their conversational turns continue to increase and reach high levels (7-9 instances), similar to the other participants, indicating the intervention *is* effective for them. The concern is *when* the increase started, not whether the intervention ultimately worked.",
  },
  {
    id: "t6-D-pool-9",
    domain: "D",
    taskItem: "D.2",
    bloomsLevel: "analysis",
    difficulty: "hard",
    phase: "assessment",
    scenario: "A BCBA is working with a client who engages in three different types of stereotypy: hand flapping, body rocking, and vocal humming. The BCBA implements a differential reinforcement of alternative behavior (DRA) procedure to reduce these behaviors, using a multiple baseline across behaviors design.",
    question: "Based on the provided multiple baseline graph, what is the most significant challenge to demonstrating experimental control with this design?",
    graphData:   {
        "title": "Frequency of Stereotypy Across Behaviors",
        "yLabel": "Frequency of Stereotypy",
        "xLabel": "Sessions",
        "yMin": 0,
        "yMax": 10,
        "yTickInterval": 2,
        "sessions": 20,
        "series": [
              {
                    "label": "Hand Flapping",
                    "color": "#94a3b8",
                    "data": [
                          8,
                          9,
                          7,
                          8,
                          2,
                          1,
                          0,
                          1,
                          0,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null
                    ],
                    "dashed": false,
                    "markerShape": "circle"
              },
              {
                    "label": "Body Rocking",
                    "color": "#60a5fa",
                    "data": [
                          7,
                          8,
                          9,
                          8,
                          8,
                          7,
                          8,
                          9,
                          1,
                          0,
                          1,
                          0,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null
                    ],
                    "dashed": false,
                    "markerShape": "square"
              },
              {
                    "label": "Vocal Humming",
                    "color": "#f97316",
                    "data": [
                          8,
                          7,
                          9,
                          8,
                          6,
                          5,
                          4,
                          3,
                          2,
                          1,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0
                    ],
                    "dashed": false,
                    "markerShape": "triangle"
              }
        ],
        "phaseChanges": [
              {
                    "afterSession": 3,
                    "label": "Baseline"
              },
              {
                    "afterSession": 8,
                    "label": "DRA"
              },
              {
                    "afterSession": 12,
                    "label": "DRA"
              }
        ],
        "interleaved": false
  } as BehaviorGraphData,
    choices: [
    { letter: "A", text: "The intervention for 'Hand Flapping' showed an immediate and substantial decrease, which is a positive indicator of effectiveness, not a challenge to control." },
    { letter: "B", text: "The baseline data for 'Vocal Humming' shows a decreasing trend before the DRA intervention was introduced, which compromises the demonstration of experimental control for that behavior." },
    { letter: "C", text: "The variability in the baseline phases for 'Hand Flapping' and 'Body Rocking' is too high, making it difficult to confidently attribute changes solely to the DRA intervention." },
    { letter: "D", text: "The staggered introduction of the DRA was not long enough for 'Body Rocking' to establish a stable baseline before treatment, potentially affecting the internal validity of the design." }
    ],
    correctAnswer: "B",
    rationale: "The correct answer is B. For 'Vocal Humming,' the baseline data (sessions 1-12) show a clear decreasing trend (from 8 down to 0 instances) even before the DRA intervention was formally introduced at session 13. This 'change in anticipation' or decreasing trend during baseline for a behavior that has not yet received the intervention is a significant threat to internal validity in a multiple baseline design, as it prevents a clear demonstration that the DRA was solely responsible for the reduction in vocal humming.\n\nA is incorrect because the immediate and substantial decrease in 'Hand Flapping' after the DRA introduction (from 7-9 down to 0-2) is precisely what a successful intervention aims for and is a strong indicator of experimental control, not a challenge.\n\nC is incorrect because the baseline data for 'Hand Flapping' (7-9 instances) and 'Body Rocking' (7-9 instances) are relatively stable with consistent high levels, indicating that they are suitable for demonstrating a clear treatment effect. The variability is not excessive.\n\nD is incorrect because 'Body Rocking' had a baseline of 8 sessions (sessions 1-8), during which the behavior remained consistently high (7-9 instances). This is a sufficiently long and stable baseline to establish a clear picture of the behavior before intervention, thus internal validity is not compromised on this basis.",
  },
  {
    id: "t6-D-pool-10",
    domain: "D",
    taskItem: "D.3",
    bloomsLevel: "analysis",
    difficulty: "hard",
    phase: "assessment",
    scenario: "A BCBA is working with a student who frequently calls out during independent work in three different classroom settings: math, reading, and science. The BCBA implements a multiple baseline design across settings to evaluate the effectiveness of a positive reinforcement intervention for reducing calling out behavior.",
    question: "Based on the provided multiple baseline graph, what can the BCBA conclude about the effectiveness of the positive reinforcement intervention for reducing calling out behavior?",
    graphData:   {
        "title": "Multiple Baseline Across Settings: Calling Out Behavior",
        "yLabel": "Frequency of Calling Out",
        "xLabel": "Sessions",
        "yMin": 0,
        "yMax": 12,
        "yTickInterval": 2,
        "sessions": 20,
        "series": [
              {
                    "label": "Math Baseline",
                    "color": "#94a3b8",
                    "data": [
                          8,
                          9,
                          7,
                          8,
                          9,
                          7,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null
                    ],
                    "dashed": false,
                    "markerShape": "circle"
              },
              {
                    "label": "Math Intervention",
                    "color": "#60a5fa",
                    "data": [
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          2,
                          1,
                          0,
                          1,
                          0,
                          0,
                          1,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0
                    ],
                    "dashed": false,
                    "markerShape": "circle"
              },
              {
                    "label": "Reading Baseline",
                    "color": "#94a3b8",
                    "data": [
                          7,
                          8,
                          8,
                          9,
                          7,
                          8,
                          6,
                          7,
                          8,
                          9,
                          8,
                          7,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null
                    ],
                    "dashed": false,
                    "markerShape": "square"
              },
              {
                    "label": "Reading Intervention",
                    "color": "#60a5fa",
                    "data": [
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          3,
                          2,
                          1,
                          0,
                          0,
                          1,
                          0,
                          0
                    ],
                    "dashed": false,
                    "markerShape": "square"
              },
              {
                    "label": "Science Baseline",
                    "color": "#94a3b8",
                    "data": [
                          9,
                          8,
                          7,
                          9,
                          8,
                          7,
                          9,
                          8,
                          7,
                          9,
                          8,
                          7,
                          8,
                          9,
                          7,
                          8,
                          null,
                          null,
                          null,
                          null
                    ],
                    "dashed": false,
                    "markerShape": "triangle"
              },
              {
                    "label": "Science Intervention",
                    "color": "#60a5fa",
                    "data": [
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          2,
                          1,
                          0,
                          0
                    ],
                    "dashed": false,
                    "markerShape": "triangle"
              }
        ],
        "phaseChanges": [
              {
                    "afterSession": 5,
                    "label": "Intervention Math"
              },
              {
                    "afterSession": 11,
                    "label": "Intervention Reading"
              },
              {
                    "afterSession": 16,
                    "label": "Intervention Science"
              }
        ]
  } as BehaviorGraphData,
    choices: [
    { letter: "A", text: "The intervention is only effective in the Math setting, given the clear and immediate reduction in calling out behavior observed there, but not in other settings." },
    { letter: "B", text: "The intervention shows inconsistent effectiveness, as there is some reduction in calling out behavior in Math and Reading, but Science shows little to no change." },
    { letter: "C", text: "Baseline levels of calling out behavior are too variable across all settings to draw definitive conclusions about the intervention's effectiveness at this point." },
    { letter: "D", text: "The intervention appears effective across all three settings, as calling out behavior systematically decreases only when the intervention is introduced in each respective setting." }
    ],
    correctAnswer: "D",
    rationale: "The correct answer is D. The graph clearly shows a functional relationship: calling out behavior remains stable and high during baseline in each setting, and only decreases to near-zero levels immediately after the intervention is introduced in that specific setting. This staggered introduction of the intervention across settings, with corresponding behavior changes, demonstrates experimental control. Choice B is incorrect because the intervention clearly leads to a decrease in calling out in Reading and Science settings as well, albeit with slightly delayed effects in Reading. Choice C is incorrect because the intervention is effective in all three settings, showing a clear reduction in behavior once implemented. Choice A is incorrect because while there is some variability in baseline, it is stable enough to establish a clear trend, and the subsequent change with intervention onset is dramatic and consistent across settings.",
  },
  {
    id: "t6-D-pool-11",
    domain: "D",
    taskItem: "D.3",
    bloomsLevel: "analysis",
    difficulty: "hard",
    phase: "assessment",
    scenario: "A BCBA is comparing the effectiveness of two different social skill instruction methods, Method A and Method B, for a child with autism spectrum disorder. The BCBA uses an alternating treatments design, rapidly switching between the two methods across sessions, to assess which method leads to a higher frequency of appropriate social initiations.",
    question: "Based on the provided multi-element (alternating treatments) graph, which conclusion is most strongly supported regarding the effectiveness of Method A versus Method B for increasing appropriate social initiations?",
    graphData:   {
        "title": "Alternating Treatments: Social Initiations",
        "yLabel": "Frequency of Social Initiations",
        "xLabel": "Sessions",
        "yMin": 0,
        "yMax": 15,
        "yTickInterval": 3,
        "sessions": 15,
        "series": [
              {
                    "label": "Method A",
                    "color": "#60a5fa",
                    "data": [
                          7,
                          null,
                          8,
                          null,
                          9,
                          null,
                          10,
                          null,
                          11,
                          null,
                          12,
                          null,
                          13,
                          null,
                          14
                    ],
                    "dashed": false,
                    "markerShape": "circle"
              },
              {
                    "label": "Method B",
                    "color": "#f97316",
                    "data": [
                          null,
                          3,
                          null,
                          4,
                          null,
                          5,
                          null,
                          6,
                          null,
                          7,
                          null,
                          8,
                          null,
                          9,
                          null
                    ],
                    "dashed": false,
                    "markerShape": "square"
              }
        ],
        "phaseChanges": [],
        "interleaved": true
  } as BehaviorGraphData,
    choices: [
    { letter: "A", text: "Method B shows a gradual improvement over time, suggesting it may become equally effective as Method A with continued implementation, despite initial lower performance." },
    { letter: "B", text: "Both methods are equally effective, as indicated by the parallel trends in their respective data paths, suggesting no significant difference in their impact on social initiations." },
    { letter: "C", text: "A sequencing or carryover effect might be present, as Method A always follows Method B, potentially influencing the observed differences in their effectiveness." },
    { letter: "D", text: "Method A is consistently more effective than Method B, as its data path is clearly and consistently separated from Method B's data path, indicating superior performance." }
    ],
    correctAnswer: "D",
    rationale: "The correct answer is D. The data paths for Method A and Method B are clearly and consistently separated throughout the experiment, with Method A consistently yielding higher frequencies of social initiations (e.g., 7-14) compared to Method B (e.g., 3-9). This clear differentiation indicates that Method A is more effective. Choice B is incorrect because while Method B does show a slight upward trend, its data path remains significantly below Method A's, and there's no indication it will 'catch up.' Choice C is incorrect because the data paths are clearly separated, demonstrating a significant difference in effectiveness, not equality. Choice A is incorrect because in an alternating treatments design, the order of treatments is typically randomized or counterbalanced across sessions, and the graph itself does not inherently indicate a fixed sequence (e.g., A always following B); instead, the interleaved plotting shows the rapid alternation, and the clear separation suggests a true difference in efficacy rather than a sequencing artifact.",
  },
  {
    id: "t6-D-pool-12",
    domain: "D",
    taskItem: "D.3",
    bloomsLevel: "analysis",
    difficulty: "hard",
    phase: "assessment",
    scenario: "A BCBA is implementing a changing criterion design to increase the number of math problems a student completes independently during a 20-minute work period. The BCBA sets initial criteria and gradually increases them, expecting the student's performance to track these changes.",
    question: "Based on the provided changing criterion graph, what can be concluded about the student's performance in relation to the established criteria for completing math problems?",
    graphData:   {
        "title": "Changing Criterion: Math Problems Completed",
        "yLabel": "Number of Problems Completed",
        "xLabel": "Sessions",
        "yMin": 0,
        "yMax": 25,
        "yTickInterval": 5,
        "sessions": 18,
        "series": [
              {
                    "label": "Problems Completed",
                    "color": "#60a5fa",
                    "data": [
                          5,
                          6,
                          7,
                          7,
                          8,
                          9,
                          10,
                          11,
                          11,
                          12,
                          13,
                          14,
                          15,
                          16,
                          17,
                          18,
                          19,
                          20
                    ],
                    "dashed": false,
                    "markerShape": "circle"
              },
              {
                    "label": "Criterion",
                    "color": "#f97316",
                    "data": [
                          5,
                          5,
                          5,
                          10,
                          10,
                          10,
                          10,
                          15,
                          15,
                          15,
                          15,
                          20,
                          20,
                          20,
                          20,
                          20,
                          20,
                          20
                    ],
                    "dashed": true,
                    "markerShape": "diamond"
              }
        ],
        "phaseChanges": [
              {
                    "afterSession": 2,
                    "label": "Criterion 10"
              },
              {
                    "afterSession": 6,
                    "label": "Criterion 15"
              },
              {
                    "afterSession": 10,
                    "label": "Criterion 20"
              }
        ]
  } as BehaviorGraphData,
    choices: [
    { letter: "A", text: "The criterion steps are too large, causing the student's performance to lag significantly behind the set criteria, indicating a need for smaller, more gradual increases." },
    { letter: "B", text: "The student's performance shows an overall increasing trend, but it does not reliably meet or exceed each new criterion, suggesting the intervention lacks precise control." },
    { letter: "C", text: "The baseline data prior to the first criterion step is insufficient to establish a stable performance level, making it difficult to evaluate the impact of the initial criterion." },
    { letter: "D", text: "The student's performance consistently tracks the changing criterion, demonstrating a functional relationship between the criterion steps and the increase in completed math problems." }
    ],
    correctAnswer: "D",
    rationale: "The correct answer is D. The graph shows that the student's performance (blue circles) consistently meets or exceeds each new criterion level (orange diamonds) as it is introduced. For example, when the criterion shifts from 5 to 10, the student's performance quickly rises to meet it. When it shifts to 15, performance again meets it, and so on. This close tracking of the criterion demonstrates a strong functional relationship and experimental control. Choice B is incorrect because the student is successfully meeting each criterion step, indicating the step sizes are appropriate, not too large. Choice C is incorrect because the student does reliably meet and often exceeds the criteria, showing good control. Choice A is incorrect because while there are only three data points before the first criterion change, the initial performance is stable and low (5-7 problems), which is sufficient to show a clear increase when the first criterion of 10 is introduced.",
  },
  {
    id: "t6-D-pool-13",
    domain: "D",
    taskItem: "D.3",
    bloomsLevel: "analysis",
    difficulty: "hard",
    phase: "assessment",
    scenario: "A BCBA is comparing two different prompting strategies, Strategy X and Strategy Y, for teaching a vocational skill to an adult client. The BCBA uses an alternating treatments design, rapidly switching between the two strategies across work periods, to determine which strategy results in a higher percentage of independent task completion.",
    question: "Given the data presented in this multi-element (alternating treatments) graph, what is the most appropriate interpretation of the relative effectiveness of Strategy X and Strategy Y?",
    graphData:   {
        "title": "Alternating Treatments: Independent Task Completion",
        "yLabel": "Percentage of Independent Completion",
        "xLabel": "Sessions",
        "yMin": 0,
        "yMax": 100,
        "yTickInterval": 20,
        "sessions": 16,
        "series": [
              {
                    "label": "Strategy X",
                    "color": "#60a5fa",
                    "data": [
                          30,
                          null,
                          40,
                          null,
                          50,
                          null,
                          60,
                          null,
                          70,
                          null,
                          75,
                          null,
                          80,
                          null,
                          85,
                          null
                    ],
                    "dashed": false,
                    "markerShape": "circle"
              },
              {
                    "label": "Strategy Y",
                    "color": "#f97316",
                    "data": [
                          null,
                          60,
                          null,
                          65,
                          null,
                          70,
                          null,
                          75,
                          null,
                          80,
                          null,
                          85,
                          null,
                          90,
                          null,
                          95
                    ],
                    "dashed": false,
                    "markerShape": "square"
              }
        ],
        "phaseChanges": [],
        "interleaved": true
  } as BehaviorGraphData,
    choices: [
    { letter: "A", text: "Strategy X demonstrates a more gradual but consistent improvement, suggesting it might be more sustainable in the long run than Strategy Y." },
    { letter: "B", text: "Strategy Y is consistently more effective than Strategy X, as its data path maintains a higher level of independent task completion throughout the observation period." },
    { letter: "C", text: "Both strategies appear to be equally effective in increasing independent task completion, as their data paths are converging over time, indicating similar outcomes." },
    { letter: "D", text: "The rapid alternation of strategies may be causing interference, making it difficult to clearly differentiate the true effectiveness of either Strategy X or Strategy Y." }
    ],
    correctAnswer: "B",
    rationale: "The correct answer is B. Strategy Y's data path (orange squares) is consistently at a higher percentage of independent task completion (ranging from 60-95%) compared to Strategy X's data path (blue circles, ranging from 30-85%) across all sessions. This clear separation indicates superior effectiveness for Strategy Y. Choice A is incorrect because Strategy X starts lower and while it improves, it never reaches the levels consistently achieved by Strategy Y. Choice C is incorrect because the data paths, although both increasing, remain clearly separated, with Strategy Y consistently higher, indicating a difference in effectiveness, not equality or convergence. Choice D is incorrect because the purpose of the alternating treatments design is to compare treatments under rapid alternation; if interference were significant, the data paths would likely be more overlapping or highly variable, which is not the case here.",
  },
  {
    id: "t6-D-pool-14",
    domain: "D",
    taskItem: "D.4",
    bloomsLevel: "analysis",
    difficulty: "hard",
    phase: "assessment",
    scenario: "A BCBA is using a multiple baseline design across three different problematic behaviors (e.g., hitting, kicking, yelling) in a classroom setting to evaluate a differential reinforcement of other behavior (DRO) intervention. The goal is to reduce the frequency of each target behavior.",
    question: "Considering the provided multiple baseline graph, what conclusion can be drawn regarding the effectiveness of the DRO intervention in reducing the target behaviors?",
    graphData:   {
        "title": "Multiple Baseline Across Behaviors: Problem Behaviors",
        "yLabel": "Frequency of Behavior",
        "xLabel": "Sessions",
        "yMin": 0,
        "yMax": 10,
        "yTickInterval": 2,
        "sessions": 18,
        "series": [
              {
                    "label": "Hitting Baseline",
                    "color": "#94a3b8",
                    "data": [
                          7,
                          8,
                          7,
                          6,
                          8,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null
                    ],
                    "dashed": false,
                    "markerShape": "circle"
              },
              {
                    "label": "Hitting DRO",
                    "color": "#60a5fa",
                    "data": [
                          null,
                          null,
                          null,
                          null,
                          null,
                          2,
                          1,
                          0,
                          1,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0
                    ],
                    "dashed": false,
                    "markerShape": "circle"
              },
              {
                    "label": "Kicking Baseline",
                    "color": "#94a3b8",
                    "data": [
                          6,
                          7,
                          6,
                          8,
                          7,
                          7,
                          6,
                          8,
                          7,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null
                    ],
                    "dashed": false,
                    "markerShape": "square"
              },
              {
                    "label": "Kicking DRO",
                    "color": "#60a5fa",
                    "data": [
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          2,
                          1,
                          0,
                          1,
                          0,
                          0,
                          0,
                          0,
                          0
                    ],
                    "dashed": false,
                    "markerShape": "square"
              },
              {
                    "label": "Yelling Baseline",
                    "color": "#94a3b8",
                    "data": [
                          8,
                          9,
                          7,
                          8,
                          9,
                          7,
                          8,
                          9,
                          7,
                          8,
                          9,
                          7,
                          8,
                          9,
                          null,
                          null,
                          null,
                          null
                    ],
                    "dashed": false,
                    "markerShape": "triangle"
              },
              {
                    "label": "Yelling DRO",
                    "color": "#60a5fa",
                    "data": [
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          2,
                          1,
                          0,
                          0
                    ],
                    "dashed": false,
                    "markerShape": "triangle"
              }
        ],
        "phaseChanges": [
              {
                    "afterSession": 4,
                    "label": "DRO Hitting"
              },
              {
                    "afterSession": 9,
                    "label": "DRO Kicking"
              },
              {
                    "afterSession": 14,
                    "label": "DRO Yelling"
              }
        ]
  } as BehaviorGraphData,
    choices: [
    { letter: "A", text: "The intervention is only effective for 'Hitting' behavior, as the other behaviors show some reduction during baseline, suggesting factors other than the intervention are at play." },
    { letter: "B", text: "There is insufficient evidence of experimental control because the baseline data for all behaviors are too variable, making it difficult to discern intervention effects." },
    { letter: "C", text: "While the intervention reduces behavior, the staggered introduction is not clearly linked to immediate and dramatic changes, suggesting a weak functional relationship." },
    { letter: "D", text: "The DRO intervention appears to be highly effective, as each target behavior decreases sharply and immediately following the introduction of the intervention in a staggered fashion." }
    ],
    correctAnswer: "D",
    rationale: "The correct answer is D. The graph demonstrates clear experimental control. For each behavior (hitting, kicking, yelling), the frequency remains high and stable during its respective baseline phase. When the DRO intervention is introduced, the frequency of that specific behavior immediately and substantially decreases to near-zero levels. This staggered and corresponding change across behaviors indicates a strong functional relationship between the DRO intervention and the reduction in problem behaviors. Choice B is incorrect because all three behaviors show a clear reduction only after the DRO is applied. Choice C is incorrect; while there's some variability in baseline, the trend is stable and high, and the change upon intervention is dramatic enough to establish control. Choice A is incorrect because the changes are immediate and dramatic, clearly linked to the staggered introduction of the intervention.",
  },
  {
    id: "t6-D-pool-15",
    domain: "D",
    taskItem: "D.4",
    bloomsLevel: "analysis",
    difficulty: "hard",
    phase: "assessment",
    scenario: "A BCBA is trying to increase a student's on-task behavior during independent seatwork. They are using a changing criterion design, gradually increasing the required percentage of on-task behavior for reinforcement, with the expectation that the student's performance will match these criteria.",
    question: "Based on the changing criterion graph, what is the most significant issue observed regarding the student's on-task behavior relative to the established criteria?",
    graphData:   {
        "title": "Changing Criterion: On-Task Behavior",
        "yLabel": "Percentage of On-Task Behavior",
        "xLabel": "Sessions",
        "yMin": 0,
        "yMax": 100,
        "yTickInterval": 10,
        "sessions": 20,
        "series": [
              {
                    "label": "On-Task Behavior",
                    "color": "#60a5fa",
                    "data": [
                          40,
                          45,
                          50,
                          55,
                          60,
                          65,
                          70,
                          72,
                          75,
                          78,
                          80,
                          82,
                          85,
                          87,
                          88,
                          90,
                          92,
                          93,
                          95,
                          96
                    ],
                    "dashed": false,
                    "markerShape": "circle"
              },
              {
                    "label": "Criterion",
                    "color": "#f97316",
                    "data": [
                          50,
                          50,
                          50,
                          50,
                          60,
                          60,
                          60,
                          60,
                          70,
                          70,
                          70,
                          70,
                          80,
                          80,
                          80,
                          80,
                          90,
                          90,
                          90,
                          90
                    ],
                    "dashed": true,
                    "markerShape": "diamond"
              }
        ],
        "phaseChanges": [
              {
                    "afterSession": 3,
                    "label": "Criterion 60%"
              },
              {
                    "afterSession": 7,
                    "label": "Criterion 70%"
              },
              {
                    "afterSession": 11,
                    "label": "Criterion 80%"
              },
              {
                    "afterSession": 15,
                    "label": "Criterion 90%"
              }
        ]
  } as BehaviorGraphData,
    choices: [
    { letter: "A", text: "The student's performance consistently lags behind the criterion steps, indicating that the criterion increases are too rapid or too large for the student to consistently meet." },
    { letter: "B", text: "The criterion steps are too small, leading to a ceiling effect where the student consistently exceeds the expectations, thus not maximizing the intervention's potential." },
    { letter: "C", text: "The student's on-task behavior is highly variable, suggesting a lack of consistency in the intervention delivery or an external factor influencing performance." },
    { letter: "D", text: "The initial baseline data is too short to establish a stable level of on-task behavior before the first criterion was introduced, compromising internal validity." }
    ],
    correctAnswer: "A",
    rationale: "The correct answer is A. The graph clearly shows that the student's on-task behavior (blue circles) consistently falls below the established criterion (orange diamonds) in almost every phase. While performance is increasing, it consistently fails to meet the target set by the criterion. This suggests that the criterion steps might be too large or introduced too quickly, making it difficult for the student to track. Choice B is incorrect because the student is failing to meet the criteria, not consistently exceeding them. Choice C is incorrect because while there is some session-to-session variability, the overall trend is steadily increasing, not highly variable or inconsistent. Choice D is incorrect because there are 4 data points before the first criterion change, showing a relatively stable, increasing trend, which is sufficient for establishing a starting point.",
  },
  {
    id: "t6-D-pool-16",
    domain: "D",
    taskItem: "D.4",
    bloomsLevel: "analysis",
    difficulty: "hard",
    phase: "assessment",
    scenario: "A BCBA is evaluating the effectiveness of a token economy system for increasing compliance with adult instructions across three different daily routines: morning routine, classroom transitions, and bedtime routine. A multiple baseline design across settings is used.",
    question: "Based on the provided multiple baseline graph, what can be concluded about the functional relationship between the token economy and compliance across the three routines?",
    graphData:   {
        "title": "Multiple Baseline Across Settings: Compliance with Instructions",
        "yLabel": "Percentage of Compliance",
        "xLabel": "Sessions",
        "yMin": 0,
        "yMax": 100,
        "yTickInterval": 20,
        "sessions": 20,
        "series": [
              {
                    "label": "Morning Baseline",
                    "color": "#94a3b8",
                    "data": [
                          20,
                          25,
                          30,
                          20,
                          25,
                          30,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null
                    ],
                    "dashed": false,
                    "markerShape": "circle"
              },
              {
                    "label": "Morning Token Economy",
                    "color": "#60a5fa",
                    "data": [
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          70,
                          75,
                          80,
                          85,
                          90,
                          95,
                          90,
                          95,
                          90,
                          95,
                          95,
                          90,
                          95,
                          95
                    ],
                    "dashed": false,
                    "markerShape": "circle"
              },
              {
                    "label": "Transitions Baseline",
                    "color": "#94a3b8",
                    "data": [
                          25,
                          30,
                          20,
                          25,
                          30,
                          20,
                          25,
                          30,
                          20,
                          25,
                          30,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null
                    ],
                    "dashed": false,
                    "markerShape": "square"
              },
              {
                    "label": "Transitions Token Economy",
                    "color": "#60a5fa",
                    "data": [
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          70,
                          75,
                          80,
                          85,
                          90,
                          95,
                          90,
                          95,
                          95
                    ],
                    "dashed": false,
                    "markerShape": "square"
              },
              {
                    "label": "Bedtime Baseline",
                    "color": "#94a3b8",
                    "data": [
                          20,
                          25,
                          30,
                          20,
                          25,
                          30,
                          20,
                          25,
                          30,
                          20,
                          25,
                          30,
                          20,
                          25,
                          30,
                          null,
                          null,
                          null,
                          null,
                          null
                    ],
                    "dashed": false,
                    "markerShape": "triangle"
              },
              {
                    "label": "Bedtime Token Economy",
                    "color": "#60a5fa",
                    "data": [
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          null,
                          70,
                          75,
                          80,
                          85,
                          90
                    ],
                    "dashed": false,
                    "markerShape": "triangle"
              }
        ],
        "phaseChanges": [
              {
                    "afterSession": 5,
                    "label": "Token Economy Morning"
              },
              {
                    "afterSession": 10,
                    "label": "Token Economy Transitions"
              },
              {
                    "afterSession": 15,
                    "label": "Token Economy Bedtime"
              }
        ]
  } as BehaviorGraphData,
    choices: [
    { letter: "A", text: "The token economy demonstrates a clear functional relationship with increased compliance, as compliance systematically increases only after the intervention is introduced in each routine." },
    { letter: "B", text: "Compliance levels show an increasing trend even during baseline for some routines, suggesting that factors other than the token economy might be contributing to the improvements." },
    { letter: "C", text: "The intervention appears effective in the morning routine but shows less pronounced effects in transitions and bedtime, indicating inconsistent generalization." },
    { letter: "D", text: "The baseline data for all routines are too variable to confidently establish a stable level of non-compliance, thereby compromising the internal validity of the design." }
    ],
    correctAnswer: "A",
    rationale: "The correct answer is A. The graph clearly illustrates a functional relationship. Compliance levels are low and relatively stable during baseline for all three routines. A sharp and substantial increase in compliance (to 70-95%) is observed immediately and consistently only when the token economy is introduced in each respective routine in a staggered manner. This demonstrates experimental control. Choice B is incorrect because while there is slight variability, the baseline trends are generally flat and low, and the significant increase only occurs with intervention onset. Choice C is incorrect because the intervention shows a strong and consistent effect across all three routines, with compliance increasing dramatically to high levels in each. Choice D is incorrect because the baseline data, despite minor fluctuations, establishes a clear low and stable level of compliance, which is sufficient to demonstrate the impact of the intervention.",
  },
  {
    id: "t6-D-pool-17",
    domain: "D",
    taskItem: "D.4",
    bloomsLevel: "analysis",
    difficulty: "hard",
    phase: "assessment",
    scenario: "A BCBA is comparing the effectiveness of two different strategies, Strategy A (visual prompts) and Strategy B (verbal prompts), for teaching a child to follow multi-step instructions. An alternating treatments design is employed, with rapid alternation of strategies across sessions.",
    question: "What is the primary conclusion regarding the effectiveness of Strategy A versus Strategy B for teaching multi-step instruction following, based on this alternating treatments graph?",
    graphData:   {
        "title": "Alternating Treatments: Multi-Step Instruction Following",
        "yLabel": "Percentage of Steps Followed Correctly",
        "xLabel": "Sessions",
        "yMin": 0,
        "yMax": 100,
        "yTickInterval": 20,
        "sessions": 14,
        "series": [
              {
                    "label": "Strategy A",
                    "color": "#60a5fa",
                    "data": [
                          60,
                          null,
                          65,
                          null,
                          70,
                          null,
                          75,
                          null,
                          80,
                          null,
                          85,
                          null,
                          90,
                          null
                    ],
                    "dashed": false,
                    "markerShape": "circle"
              },
              {
                    "label": "Strategy B",
                    "color": "#f97316",
                    "data": [
                          null,
                          60,
                          null,
                          65,
                          null,
                          70,
                          null,
                          75,
                          null,
                          80,
                          null,
                          85,
                          null,
                          90
                    ],
                    "dashed": false,
                    "markerShape": "square"
              }
        ],
        "phaseChanges": [],
        "interleaved": true
  } as BehaviorGraphData,
    choices: [
    { letter: "A", text: "Both strategies are demonstrating comparable effectiveness, as their data paths are largely overlapping and showing similar upward trends, indicating no significant difference between them." },
    { letter: "B", text: "Strategy A is clearly more effective than Strategy B, as its data path consistently shows higher percentages of steps followed correctly across most sessions." },
    { letter: "C", text: "The rapid alternation of treatments is likely causing a carryover effect, where the benefits of one strategy are influencing the performance during the other, thus obscuring true differences." },
    { letter: "D", text: "Neither strategy appears effective in increasing the percentage of steps followed correctly, as both data paths remain relatively flat and below desired mastery levels." }
    ],
    correctAnswer: "A",
    rationale: "The correct answer is A. The data paths for Strategy A (blue circles) and Strategy B (orange squares) are largely overlapping and show very similar upward trends (from 60% to 90%). There is no clear and consistent separation between the two, which indicates that both strategies are producing comparable levels of performance and there is no significant difference in their effectiveness in this context. Choice B is incorrect because there is no consistent separation or higher performance for Strategy A; they are very similar. Choice C is plausible in an ATD, but the graph itself does not provide definitive evidence of a carryover effect (e.g., one treatment always performing better when preceded by another); rather, the data show similar performance, which could mean either equal effectiveness or a completely balanced carryover effect, but the most parsimonious conclusion is equal effectiveness. Choice D is incorrect because both strategies show a clear and consistent increase in performance from 60% to 90%, suggesting they are effective in increasing the target behavior.",
  },
  {
    id: "t6-D-pool-18",
    domain: "D",
    taskItem: "D.5",
    bloomsLevel: "analysis",
    difficulty: "hard",
    phase: "assessment",
    scenario: "A BCBA is working with a student to increase the duration of independent play. A changing criterion design is used, gradually increasing the required duration for reinforcement, with the aim of the student's play duration tracking the criterion.",
    question: "What adjustment, if any, should the BCBA consider for the next criterion step, based on the student's performance in this changing criterion design?",
    graphData:   {
        "title": "Changing Criterion: Independent Play Duration",
        "yLabel": "Duration of Independent Play (minutes)",
        "xLabel": "Sessions",
        "yMin": 0,
        "yMax": 20,
        "yTickInterval": 5,
        "sessions": 15,
        "series": [
              {
                    "label": "Play Duration",
                    "color": "#60a5fa",
                    "data": [
                          3,
                          4,
                          5,
                          5,
                          6,
                          7,
                          8,
                          8,
                          9,
                          10,
                          11,
                          12,
                          12,
                          13,
                          14
                    ],
                    "dashed": false,
                    "markerShape": "circle"
              },
              {
                    "label": "Criterion",
                    "color": "#f97316",
                    "data": [
                          5,
                          5,
                          5,
                          5,
                          10,
                          10,
                          10,
                          10,
                          15,
                          15,
                          15,
                          15,
                          15,
                          15,
                          15
                    ],
                    "dashed": true,
                    "markerShape": "diamond"
              }
        ],
        "phaseChanges": [
              {
                    "afterSession": 3,
                    "label": "Criterion 10 min"
              },
              {
                    "afterSession": 7,
                    "label": "Criterion 15 min"
              }
        ]
  } as BehaviorGraphData,
    choices: [
    { letter: "A", text: "The BCBA should continue with the current criterion step size and duration, as the student is consistently tracking the criterion with appropriate variability." },
    { letter: "B", text: "The BCBA should decrease the magnitude of the next criterion step, as the student's performance is consistently below the current criterion, indicating the steps are too large." },
    { letter: "C", text: "The BCBA should increase the magnitude of the next criterion step, as the student is consistently exceeding the current criterion, suggesting the steps are too small." },
    { letter: "D", text: "The BCBA should consider adding a baseline phase or a reversal to confirm the functional relationship before making further adjustments to the criterion." }
    ],
    correctAnswer: "B",
    rationale: "The correct answer is B. In the first criterion phase (Criterion 5), the student meets the criterion. However, in the subsequent phases (Criterion 10 and Criterion 15), the student's independent play duration (blue circles) consistently falls below the set criterion (orange diamonds). For example, when the criterion is 10 minutes, the student achieves 6-9 minutes, and when the criterion is 15 minutes, the student achieves 10-14 minutes. This indicates that the criterion increases are too large for the student to consistently meet, and smaller, more gradual steps are needed. Choice A is incorrect because the student is not consistently tracking the criterion in the later phases; they are consistently below it. Choice C is incorrect because the student is consistently below the criterion, not exceeding it. Choice D is incorrect because a changing criterion design relies on the tracking of the criterion for demonstrating experimental control, and adding a baseline or reversal would change the design and is not the immediate solution to the observed issue of the student not meeting the criterion.",
  },
  {
    id: "t6-D-pool-19",
    domain: "D",
    taskItem: "D.5",
    bloomsLevel: "analysis",
    difficulty: "hard",
    phase: "assessment",
    scenario: "A BCBA is working with a student on increasing independent task completion during math assignments. They have implemented several interventions sequentially to determine the most effective approach.",
    question: "Based on the provided graph, which of the following is the most appropriate conclusion regarding the effectiveness of the interventions and the design's internal validity?",
    graphData:   {
        "title": "Independent Task Completion",
        "yLabel": "Percentage of Tasks Completed Independently",
        "xLabel": "Sessions",
        "yMin": 0,
        "yMax": 100,
        "yTickInterval": 10,
        "sessions": 20,
        "series": [
              {
                    "label": "Independent Task Completion",
                    "color": "#60a5fa",
                    "data": [
                          10,
                          15,
                          12,
                          18,
                          20,
                          45,
                          50,
                          55,
                          60,
                          62,
                          30,
                          25,
                          28,
                          32,
                          35,
                          70,
                          75,
                          80,
                          85,
                          88
                    ],
                    "dashed": false,
                    "markerShape": "circle"
              }
        ],
        "phaseChanges": [
              {
                    "afterSession": 4,
                    "label": "Intervention A"
              },
              {
                    "afterSession": 9,
                    "label": "Intervention B"
              },
              {
                    "afterSession": 14,
                    "label": "Intervention A (Reversal)"
              }
        ],
        "interleaved": false
  } as BehaviorGraphData,
    choices: [
    { letter: "A", text: "Intervention A demonstrated a functional relation with increased independent task completion, as evidenced by the clear increase upon reintroduction." },
    { letter: "B", text: "Intervention B appears to be the most effective intervention based on the highest levels of independent task completion observed during its implementation." },
    { letter: "C", text: "The design does not clearly demonstrate which intervention is most effective due to potential carryover effects from Intervention B when Intervention A was reintroduced." },
    { letter: "D", text: "The sequential implementation of interventions allows for a robust comparison, definitively identifying the most effective strategy without confounding variables." }
    ],
    correctAnswer: "C",
    rationale: "The correct answer is C. When Intervention A is reintroduced (sessions 15-20), the independent task completion immediately rises to levels significantly higher than its initial implementation (sessions 5-9). This suggests a carryover effect from Intervention B, which produced the highest levels of the behavior, making it difficult to isolate the effect of Intervention A upon reintroduction. Choice A is incorrect because while Intervention A did increase the behavior initially, its reintroduction shows much higher levels, confounding the demonstration of a clear functional relation for A alone. Choice B is incorrect because although Intervention B showed the highest levels, the design's sequential nature with potential carryover effects prevents a definitive conclusion about its isolated effectiveness compared to the others. Choice D is incorrect because sequential implementation, especially with multiple treatments, is highly susceptible to carryover and order effects, which compromise internal validity rather than enhancing it for definitive conclusions.",
  },
  {
    id: "t6-D-pool-20",
    domain: "D",
    taskItem: "D.5",
    bloomsLevel: "analysis",
    difficulty: "hard",
    phase: "assessment",
    scenario: "A BCBA is addressing disruptive vocalizations in three different children across various settings. They are implementing a time-out procedure for each child in a staggered fashion.",
    question: "What is the primary reason why this design, as depicted in the graph, might have weaker experimental control compared to a traditional multiple baseline design across participants?",
    graphData:   {
        "title": "Disruptive Vocalizations Across Participants",
        "yLabel": "Frequency of Disruptive Vocalizations",
        "xLabel": "Sessions",
        "yMin": 0,
        "yMax": 15,
        "yTickInterval": 1,
        "sessions": 20,
        "series": [
              {
                    "label": "Participant 1",
                    "color": "#60a5fa",
                    "data": [
                          10,
                          9,
                          11,
                          10,
                          8,
                          3,
                          2,
                          1,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0
                    ],
                    "dashed": false,
                    "markerShape": "circle"
              },
              {
                    "label": "Participant 2",
                    "color": "#f97316",
                    "data": [
                          12,
                          11,
                          10,
                          13,
                          11,
                          10,
                          9,
                          8,
                          7,
                          3,
                          2,
                          1,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0
                    ],
                    "dashed": false,
                    "markerShape": "square"
              },
              {
                    "label": "Participant 3",
                    "color": "#34d399",
                    "data": [
                          11,
                          10,
                          12,
                          9,
                          10,
                          11,
                          10,
                          9,
                          12,
                          10,
                          9,
                          8,
                          7,
                          3,
                          2,
                          1,
                          0,
                          0,
                          0,
                          0
                    ],
                    "dashed": false,
                    "markerShape": "triangle"
              }
        ],
        "phaseChanges": [
              {
                    "afterSession": 4,
                    "label": "Intervention P1"
              },
              {
                    "afterSession": 9,
                    "label": "Intervention P2"
              },
              {
                    "afterSession": 13,
                    "label": "Intervention P3"
              }
        ],
        "interleaved": false
  } as BehaviorGraphData,
    choices: [
    { letter: "A", text: "The concurrent baseline data for all participants shows reactivity, as the behavior naturally decreases before the intervention is introduced." },
    { letter: "B", text: "The baselines for all participants are not sufficiently stable or long enough, which makes it difficult to detect a clear change when the intervention is applied." },
    { letter: "C", text: "Weak experimental control arises because the intervention was applied to Participant 1 too early, potentially influencing the baseline of subsequent participants before their intervention." },
    { letter: "D", text: "The primary weakness stems from the lack of extended baseline data for all tiers, which is crucial for ruling out extraneous variables and demonstrating experimental control." }
    ],
    correctAnswer: "D",
    rationale: "The correct answer is D. In a concurrent multiple baseline design, the baselines run simultaneously. If the baselines for later tiers (Participant 2 and 3) are not sufficiently extended, and the intervention is introduced to an earlier tier (Participant 1) while the later tiers are still in baseline, it weakens experimental control because it's harder to rule out extraneous variables that might be affecting all participants concurrently. The graph shows relatively short baselines for Participant 2 and 3 before the intervention is introduced to Participant 1. Choice A is incorrect because the baselines appear relatively stable, not reactive, with no significant decreasing trend before intervention. Choice B is incorrect because while more stability is always better, the baselines here are not exceptionally unstable to be the primary weakness compared to the length. Choice C is incorrect because applying the intervention 'too early' to Participant 1 is not the core issue; the issue is the lack of extended baseline for the subsequent participants, making it harder to confirm that the changes in P2 and P3 are due to their respective interventions and not some other concurrent event or the intervention with P1.",
  },
  {
    id: "t6-D-pool-21",
    domain: "D",
    taskItem: "D.5",
    bloomsLevel: "analysis",
    difficulty: "hard",
    phase: "assessment",
    scenario: "A BCBA is evaluating the effectiveness of two different communication strategies (Strategy A and Strategy B) for a student with limited verbal skills. They are using an alternating treatments design.",
    question: "Based on the visual analysis of the provided graph, what can be concluded about the relative effectiveness of Strategy A and Strategy B?",
    graphData:   {
        "title": "Functional Communication Responses",
        "yLabel": "Frequency of Functional Responses",
        "xLabel": "Sessions",
        "yMin": 0,
        "yMax": 15,
        "yTickInterval": 1,
        "sessions": 15,
        "series": [
              {
                    "label": "Strategy A",
                    "color": "#60a5fa",
                    "data": [
                          5,
                          null,
                          6,
                          null,
                          7,
                          null,
                          8,
                          null,
                          9,
                          null,
                          10,
                          null,
                          11,
                          null,
                          12
                    ],
                    "dashed": false,
                    "markerShape": "circle"
              },
              {
                    "label": "Strategy B",
                    "color": "#f97316",
                    "data": [
                          null,
                          2,
                          null,
                          3,
                          null,
                          4,
                          null,
                          5,
                          null,
                          6,
                          null,
                          7,
                          null,
                          8,
                          null
                    ],
                    "dashed": false,
                    "markerShape": "square"
              }
        ],
        "phaseChanges": [],
        "interleaved": true
  } as BehaviorGraphData,
    choices: [
    { letter: "A", text: "Strategy A is consistently more effective than Strategy B, as evidenced by the consistently higher and increasing trend in functional communication responses." },
    { letter: "B", text: "Strategy B shows a clear upward trend, indicating it is becoming more effective over time, potentially surpassing Strategy A with continued implementation." },
    { letter: "C", text: "Both strategies are equally effective in increasing functional communication, as both show an increasing trend in the target behavior across sessions." },
    { letter: "D", text: "The data suggest a significant interaction effect between the two strategies, making it difficult to determine the independent effectiveness of either one." }
    ],
    correctAnswer: "A",
    rationale: "The correct answer is A. Visual analysis of the graph shows that the data points for Strategy A are consistently higher than the data points for Strategy B across all sessions where both were implemented. Both show an increasing trend, but Strategy A maintains a clear and consistent advantage in the frequency of functional responses. Choice B is incorrect because while Strategy B does show an upward trend, its performance is consistently lower than Strategy A throughout the observed sessions. Choice C is incorrect because the data paths are clearly separated, with Strategy A consistently yielding higher frequencies, indicating they are not equally effective. Choice D is incorrect because an alternating treatments design is specifically used to minimize interaction effects by rapid alternation and counterbalancing; the clear separation of data paths here indicates distinct effects, not significant interaction.",
  },
  {
    id: "t6-D-pool-22",
    domain: "D",
    taskItem: "D.6",
    bloomsLevel: "analysis",
    difficulty: "hard",
    phase: "assessment",
    scenario: "A BCBA is attempting to reduce a student's off-task behavior during independent work. They initially used a token economy (Intervention A), then added a self-monitoring component (Intervention B), and finally removed the token economy to assess the self-monitoring alone.",
    question: "Considering the progression of interventions in this A-B-C-B design, what is a significant limitation in determining the isolated effect of Intervention B?",
    graphData:   {
        "title": "Off-Task Behavior During Independent Work",
        "yLabel": "Percentage of Intervals Off-Task",
        "xLabel": "Sessions",
        "yMin": 0,
        "yMax": 100,
        "yTickInterval": 10,
        "sessions": 20,
        "series": [
              {
                    "label": "Off-Task Behavior",
                    "color": "#60a5fa",
                    "data": [
                          80,
                          75,
                          78,
                          70,
                          65,
                          40,
                          35,
                          30,
                          28,
                          25,
                          10,
                          8,
                          5,
                          3,
                          2,
                          40,
                          38,
                          35,
                          32,
                          30
                    ],
                    "dashed": false,
                    "markerShape": "circle"
              }
        ],
        "phaseChanges": [
              {
                    "afterSession": 4,
                    "label": "Intervention A"
              },
              {
                    "afterSession": 9,
                    "label": "Intervention A + B"
              },
              {
                    "afterSession": 14,
                    "label": "Intervention B"
              }
        ],
        "interleaved": false
  } as BehaviorGraphData,
    choices: [
    { letter: "A", text: "The initial baseline phase was too variable, making it difficult to establish a clear comparison point for the subsequent interventions." },
    { letter: "B", text: "The design does not allow for the assessment of Intervention B in isolation from Intervention A, as the order of introduction creates an unavoidable confounding effect." },
    { letter: "C", text: "Intervention B was introduced too abruptly, without sufficient sessions in the combined A+B phase to stabilize the behavior at a lower level." },
    { letter: "D", text: "The return to Intervention B did not show a complete return to baseline levels, indicating that the intervention was not powerful enough." }
    ],
    correctAnswer: "B",
    rationale: "The correct answer is B. In this A-B-C-B design (where C is A+B), Intervention B is always introduced after Intervention A has already been in place, or in combination with A. When Intervention B is then implemented alone (sessions 15-20), the student has already experienced Intervention A and the combined A+B. This makes it impossible to determine the isolated effect of B, as any observed effect could be due to B, a lingering effect of A, or the sequence of interventions. Choice A is incorrect because the baseline is relatively stable and shows a clear decreasing trend once Intervention A is introduced. Choice C is incorrect because the A+B phase (sessions 10-14) shows a clear and rapid decrease, suggesting it was effective, and the transition to B alone was not 'abrupt' in a way that confounds the specific question. Choice D is incorrect because the question is about the limitation in determining the isolated effect of B, not about the power of the intervention itself or its return to baseline levels. The behavior does increase when A is removed, but the core limitation remains the inability to isolate B's effect from its prior context.",
  },
  {
    id: "t6-D-pool-23",
    domain: "D",
    taskItem: "D.6",
    bloomsLevel: "analysis",
    difficulty: "hard",
    phase: "assessment",
    scenario: "A BCBA is implementing a social skills intervention across three different contexts (classroom, playground, cafeteria) for a student with social deficits. The intervention is introduced sequentially in each context.",
    question: "What type of experimental design is depicted in the graph, and what is its primary strength for demonstrating experimental control?",
    graphData:   {
        "title": "Social Interactions Across Settings",
        "yLabel": "Frequency of Positive Social Interactions",
        "xLabel": "Sessions",
        "yMin": 0,
        "yMax": 10,
        "yTickInterval": 1,
        "sessions": 20,
        "series": [
              {
                    "label": "Classroom",
                    "color": "#60a5fa",
                    "data": [
                          2,
                          3,
                          2,
                          3,
                          2,
                          7,
                          8,
                          9,
                          8,
                          9,
                          9,
                          9,
                          9,
                          9,
                          9,
                          9,
                          9,
                          9,
                          9,
                          9
                    ],
                    "dashed": false,
                    "markerShape": "circle"
              },
              {
                    "label": "Playground",
                    "color": "#f97316",
                    "data": [
                          1,
                          2,
                          1,
                          2,
                          1,
                          2,
                          1,
                          2,
                          1,
                          2,
                          7,
                          8,
                          9,
                          8,
                          9,
                          9,
                          9,
                          9,
                          9,
                          9
                    ],
                    "dashed": false,
                    "markerShape": "square"
              },
              {
                    "label": "Cafeteria",
                    "color": "#34d399",
                    "data": [
                          0,
                          1,
                          0,
                          1,
                          0,
                          1,
                          0,
                          1,
                          0,
                          1,
                          0,
                          1,
                          0,
                          1,
                          7,
                          8,
                          9,
                          8,
                          9,
                          9
                    ],
                    "dashed": false,
                    "markerShape": "triangle"
              }
        ],
        "phaseChanges": [
              {
                    "afterSession": 4,
                    "label": "Intervention Classroom"
              },
              {
                    "afterSession": 9,
                    "label": "Intervention Playground"
              },
              {
                    "afterSession": 14,
                    "label": "Intervention Cafeteria"
              }
        ],
        "interleaved": false
  } as BehaviorGraphData,
    choices: [
    { letter: "A", text: "This is a multiple baseline design across settings, which effectively demonstrates experimental control by showing behavior change only when the intervention is introduced in each setting." },
    { letter: "B", text: "This is an A-B-A-B reversal design with multiple baselines, providing strong evidence of a functional relation through repeated introduction and withdrawal of the intervention." },
    { letter: "C", text: "This is a changing criterion design, as the intervention is incrementally applied to different settings, allowing for a gradual increase in the target behavior." },
    { letter: "D", text: "This is an alternating treatments design, where different interventions are rapidly alternated across various settings to determine the most effective strategy." }
    ],
    correctAnswer: "A",
    rationale: "The correct answer is A. The graph clearly shows three distinct baseline conditions (settings) that are staggered in time, with the intervention introduced at different points for each setting. The behavior (positive social interactions) remains stable or low in baseline and then increases only when the intervention is introduced in that specific setting, demonstrating experimental control. Choice B is incorrect because there is no withdrawal or reversal of the intervention, which is characteristic of an A-B-A-B design. Choice C is incorrect because a changing criterion design involves a single behavior and intervention with gradually changing criteria, which is not what is depicted here. Choice D is incorrect because treatments are not rapidly alternated within sessions; rather, the intervention is introduced sequentially in different contexts after a staggered baseline.",
  },
  {
    id: "t6-D-pool-24",
    domain: "D",
    taskItem: "D.6",
    bloomsLevel: "analysis",
    difficulty: "hard",
    phase: "assessment",
    scenario: "A BCBA is evaluating two different reinforcement schedules, FR1 (Intervention A) and VR3 (Intervention B), for increasing work completion in a student. The schedules are implemented on alternating days.",
    question: "What is a potential threat to the internal validity of this design, given the visual characteristics of the data?",
    graphData:   {
        "title": "Work Completion Rate",
        "yLabel": "Percentage of Work Completed",
        "xLabel": "Sessions",
        "yMin": 0,
        "yMax": 100,
        "yTickInterval": 10,
        "sessions": 15,
        "series": [
              {
                    "label": "Intervention A (FR1)",
                    "color": "#60a5fa",
                    "data": [
                          60,
                          null,
                          65,
                          null,
                          70,
                          null,
                          75,
                          null,
                          80,
                          null,
                          85,
                          null,
                          90,
                          null,
                          95
                    ],
                    "dashed": false,
                    "markerShape": "circle"
              },
              {
                    "label": "Intervention B (VR3)",
                    "color": "#f97316",
                    "data": [
                          null,
                          70,
                          null,
                          75,
                          null,
                          80,
                          null,
                          85,
                          null,
                          90,
                          null,
                          95,
                          null,
                          100,
                          null
                    ],
                    "dashed": false,
                    "markerShape": "square"
              }
        ],
        "phaseChanges": [],
        "interleaved": true
  } as BehaviorGraphData,
    choices: [
    { letter: "A", text: "The rapid alternation of conditions could lead to multiple-treatment interference, making it difficult to isolate the true effects of each schedule." },
    { letter: "B", text: "Maturation effects are evident, as the student's work completion naturally improves over time regardless of the intervention." },
    { letter: "C", text: "The lack of a baseline phase prevents the establishment of a clear comparison, thus compromising the demonstration of experimental control." },
    { letter: "D", text: "Observer drift may be occurring, as both data paths show a consistent upward trend, suggesting changes in measurement criteria." }
    ],
    correctAnswer: "A",
    rationale: "The correct answer is A. The graph depicts an alternating treatments (or multi-element) design. A primary threat to internal validity in this design is multiple-treatment interference, where the effects of one treatment may be influenced by the presence or rapid alternation with another treatment. While the design aims to minimize this, it's still a potential confound, especially if the treatments are not easily discriminable or have lingering effects. Both interventions show an increasing trend and are relatively close, making it hard to definitively say one is superior without considering potential interference. Choice B is incorrect because while both trends are upward, this design is specifically used to compare different treatments, and the upward trend in both is the effect being analyzed, not necessarily a maturation effect confounding the comparison of the two treatments. Choice C is incorrect because alternating treatments designs often do not include a separate baseline phase when comparing two active treatments, relying on the differentiation between the treatments themselves. Choice D is incorrect because observer drift would typically manifest as inconsistent or biased changes in measurement rather than both treatments showing a clear and consistent increase in behavior.",
  },
  {
    id: "t6-D-pool-25",
    domain: "D",
    taskItem: "D.6",
    bloomsLevel: "analysis",
    difficulty: "hard",
    phase: "assessment",
    scenario: "A BCBA is trying to reduce aggressive outbursts in three different clients. They are implementing a differential reinforcement of incompatible behavior (DRI) procedure. The intervention is introduced at different times for each client after a period of baseline.",
    question: "Considering the data presented, which statement accurately reflects the effectiveness of the DRI procedure and the experimental control demonstrated?",
    graphData:   {
        "title": "Aggressive Outbursts Across Clients",
        "yLabel": "Frequency of Aggressive Outbursts",
        "xLabel": "Sessions",
        "yMin": 0,
        "yMax": 10,
        "yTickInterval": 1,
        "sessions": 20,
        "series": [
              {
                    "label": "Client 1",
                    "color": "#60a5fa",
                    "data": [
                          8,
                          7,
                          9,
                          8,
                          7,
                          2,
                          1,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0
                    ],
                    "dashed": false,
                    "markerShape": "circle"
              },
              {
                    "label": "Client 2",
                    "color": "#f97316",
                    "data": [
                          9,
                          8,
                          7,
                          9,
                          8,
                          7,
                          6,
                          5,
                          4,
                          1,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0
                    ],
                    "dashed": false,
                    "markerShape": "square"
              },
              {
                    "label": "Client 3",
                    "color": "#34d399",
                    "data": [
                          7,
                          8,
                          6,
                          7,
                          8,
                          7,
                          6,
                          5,
                          4,
                          3,
                          2,
                          1,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0,
                          0
                    ],
                    "dashed": false,
                    "markerShape": "triangle"
              }
        ],
        "phaseChanges": [
              {
                    "afterSession": 4,
                    "label": "DRI Client 1"
              },
              {
                    "afterSession": 9,
                    "label": "DRI Client 2"
              },
              {
                    "afterSession": 14,
                    "label": "DRI Client 3"
              }
        ],
        "interleaved": false
  } as BehaviorGraphData,
    choices: [
    { letter: "A", text: "The DRI procedure is effective in reducing aggressive outbursts for all clients, as demonstrated by the clear and immediate decrease in behavior upon intervention introduction in each tier." },
    { letter: "B", text: "Experimental control is compromised because the baseline for Client 3 shows a slight decreasing trend before the intervention, indicating a maturation effect." },
    { letter: "C", text: "The intervention appears to be more effective for Client 1 than for Clients 2 and 3, given the steeper and more immediate drop in aggressive outbursts." },
    { letter: "D", text: "The staggered introduction of the intervention across clients indicates a multiple treatment interference, making it difficult to attribute behavioral changes solely to the DRI." }
    ],
    correctAnswer: "A",
    rationale: "The correct answer is A. This is a multiple baseline design across participants. For each client, the aggressive outbursts are stable or at high levels during baseline, and then show a clear and abrupt decrease immediately after the DRI procedure is introduced. This staggered introduction across multiple baselines, with behavior changing only upon intervention, provides strong evidence of a functional relation. Choice B is incorrect because while Client 3's baseline has some fluctuation, it does not show a clear or consistent decreasing trend that would significantly compromise experimental control before the intervention. Choice C is incorrect because while Client 1's drop is steep, all clients show a significant and functionally related decrease, suggesting overall effectiveness. Choice D is incorrect because multiple baseline designs are specifically chosen to demonstrate experimental control by ruling out extraneous variables, not to demonstrate multiple treatment interference; the staggered introduction is its strength, not a weakness in this context.",
  },
  {
    id: "t6-D-pool-26",
    domain: "D",
    taskItem: "D.6",
    bloomsLevel: "analysis",
    difficulty: "hard",
    phase: "assessment",
    scenario: "A BCBA is comparing the effectiveness of a praise-only intervention (Intervention A) versus a token economy (Intervention B) for increasing compliance in a student with autism. The interventions are implemented on alternating days.",
    question: "What type of experimental design is represented by this graph, and what characteristic is crucial for its internal validity?",
    graphData:   {
        "title": "Compliance During Transitions",
        "yLabel": "Percentage of Compliant Transitions",
        "xLabel": "Sessions",
        "yMin": 0,
        "yMax": 100,
        "yTickInterval": 10,
        "sessions": 16,
        "series": [
              {
                    "label": "Intervention A (Praise)",
                    "color": "#60a5fa",
                    "data": [
                          40,
                          null,
                          45,
                          null,
                          50,
                          null,
                          55,
                          null,
                          60,
                          null,
                          65,
                          null,
                          70,
                          null,
                          75,
                          null
                    ],
                    "dashed": false,
                    "markerShape": "circle"
              },
              {
                    "label": "Intervention B (Token Economy)",
                    "color": "#f97316",
                    "data": [
                          null,
                          60,
                          null,
                          65,
                          null,
                          70,
                          null,
                          75,
                          null,
                          80,
                          null,
                          85,
                          null,
                          90,
                          null,
                          95
                    ],
                    "dashed": false,
                    "markerShape": "square"
              }
        ],
        "phaseChanges": [],
        "interleaved": true
  } as BehaviorGraphData,
    choices: [
    { letter: "A", text: "This is a multiple baseline design across conditions, which relies on the staggered introduction of the intervention to demonstrate experimental control." },
    { letter: "B", text: "This is an A-B-A-B reversal design, where internal validity is established through the repeated demonstration of behavior change with the introduction and withdrawal of the intervention." },
    { letter: "C", text: "This is an alternating treatments design, and internal validity is enhanced by the rapid alternation and counterbalancing of conditions to minimize confounding variables." },
    { letter: "D", text: "This is a changing criterion design, which demonstrates experimental control by showing behavior change as a function of systematically altered performance criteria." }
    ],
    correctAnswer: "C",
    rationale: "The correct answer is C. The graph shows two distinct data paths (representing Intervention A and Intervention B) plotted on the same graph, with data points collected on alternating sessions (indicated by null values for the other treatment on each session). This is characteristic of an alternating treatments design (also known as multi-element design). A crucial aspect for its internal validity is the rapid alternation and, ideally, counterbalancing of the conditions to minimize sequence effects and maximize the discriminability of the treatments' effects. Choice A is incorrect because there are no staggered baselines across different conditions; instead, two interventions are compared concurrently. Choice B is incorrect because there is no withdrawal or reintroduction of a single intervention; rather, two interventions are compared without a baseline or reversal phase. Choice D is incorrect because there are no systematically changing performance criteria; instead, two distinct interventions are being compared.",
  }
];
