// Domain A — Tier 6 question pool
// BCBA 6th Edition Task List
// Part of the 5× question pool for the mock exam engine

import { Question } from './types';

export const tier6Pool_A: Question[] = [
  {
    id: "t6-A-pool-1",
    domain: "A",
    taskItem: "A.3",
    phase: "intervention",
    bloomsLevel: "knowledge",
    difficulty: "hard",
    scenario: "A behavior analyst is discussing a client's anxiety with a colleague. The colleague suggests that the client's internal feelings of worry are the direct cause of their avoidance behaviors. The behavior analyst, however, proposes an alternative explanation focusing on environmental contingencies.",
    question: "How does radical behaviorism conceptualize private events like feelings of anxiety?",
    choices: [
      {
        letter: "A",
        text: "Methodological behaviorism, which excludes private events from scientific analysis."
      },
      {
        letter: "B",
        text: "The view that private events are simply collateral products of environmental variables, not causes."
      },
      {
        letter: "C",
        text: "The focus on observable behavior as the sole subject matter of psychology."
      },
      {
        letter: "D",
        text: "The rejection of all mentalistic terms in scientific discourse."
      }
    ],
    correctAnswer: "B",
    rationale: "Radical behaviorism, as proposed by B.F. Skinner, acknowledges the existence of private events (thoughts, feelings) but treats them as behavior that is influenced by the same environmental variables as public behavior. It views private events not as causes of public behavior, but as additional behaviors to be explained. Methodological behaviorism (A) explicitly excludes private events. While radical behaviorism focuses on observable behavior (C), it does not exclude private events from analysis, but rather includes them as a type of behavior. Radical behaviorism does not reject all mentalistic terms (D), but rather reinterprets them in behavioral terms."
  },
  {
    id: "t6-A-pool-2",
    domain: "A",
    taskItem: "A.4",
    phase: "evaluation",
    bloomsLevel: "knowledge",
    difficulty: "hard",
    scenario: "A researcher is conducting an experiment in a laboratory setting, manipulating specific environmental variables to observe their effect on the pecking rate of pigeons. The researcher is primarily interested in discovering basic principles of learning.",
    question: "The early research described, focused on identifying fundamental principles in controlled settings, is characteristic of which branch of behavior analysis?",
    choices: [
      {
        letter: "A",
        text: "Applied Behavior Analysis (ABA)"
      },
      {
        letter: "B",
        text: "Experimental Analysis of Behavior (EAB)"
      },
      {
        letter: "C",
        text: "Professional Practice of Behavior Analysis"
      },
      {
        letter: "D",
        text: "Radical Behaviorism"
      }
    ],
    correctAnswer: "B",
    rationale: "Experimental Analysis of Behavior (EAB) is characterized by basic research, often conducted in laboratory settings with non-human subjects, to discover fundamental principles of behavior. Applied Behavior Analysis (ABA) (A) focuses on applying these principles to socially significant human behavior. Professional Practice of Behavior Analysis (C) involves the direct application of ABA principles in real-world settings. Radical Behaviorism (D) is the philosophy underlying all branches of behavior analysis, not a branch itself."
  },
  {
    id: "t6-A-pool-3",
    domain: "A",
    taskItem: "A.5",
    phase: "evaluation",
    bloomsLevel: "knowledge",
    difficulty: "hard",
    scenario: "A BCBA is working with a client to teach them to request preferred items. The BCBA uses a picture exchange system, and the client quickly learns to exchange pictures for desired objects. The BCBA ensures that the client can use this skill not only with the BCBA but also with parents and teachers in different environments.",
    question: "Which dimension of ABA is the BCBA primarily demonstrating by grounding the intervention in established behavioral principles?",
    choices: [
      {
        letter: "A",
        text: "Applied"
      },
      {
        letter: "B",
        text: "Behavioral"
      },
      {
        letter: "C",
        text: "Effective"
      },
      {
        letter: "D",
        text: "Generality"
      }
    ],
    correctAnswer: "D",
    rationale: "Generality refers to the extent to which a behavior change lasts over time, appears in environments other than the one in which the intervention was implemented, and/or spreads to other behaviors not directly treated by the intervention. The client using the skill with different people and in different settings directly exemplifies generality. Applied (A) refers to the social significance of the behavior. Behavioral (B) refers to focusing on observable and measurable behavior. Effective (C) refers to the intervention producing practical and significant changes in behavior."
  },
  {
    id: "t6-A-pool-4",
    domain: "A",
    taskItem: "A.1",
    phase: "supervision",
    bloomsLevel: "analysis",
    difficulty: "medium",
    scenario: "A BCBA is consulting with a school to address a student's disruptive classroom behavior. The BCBA's initial focus is on identifying the environmental factors that maintain the behavior to inform effective intervention strategies.",
    question: "The ability to draw clear conclusions about the intervention's impact, as described in the scenario, primarily fulfills which goal of behavior analysis?",
    choices: [
      {
        letter: "A",
        text: "Generic Choice A for t6-A-pool-4"
      },
      {
        letter: "B",
        text: "Generic Choice B for t6-A-pool-4"
      },
      {
        letter: "C",
        text: "Generic Choice C for t6-A-pool-4"
      },
      {
        letter: "D",
        text: "Generic Choice D for t6-A-pool-4"
      }
    ],
    correctAnswer: "A",
    rationale: "Generic rationale for t6-A-pool-4: Explanation for correct answer A and why distractors are wrong."
  },
  {
    id: "t6-A-pool-5",
    domain: "A",
    taskItem: "A.1",
    phase: "supervision",
    bloomsLevel: "knowledge",
    difficulty: "hard",
    scenario: "A research team is conducting a study on the effectiveness of a new teaching method for students with learning disabilities. They are meticulously collecting data on student performance to determine if the method leads to significant improvements.",
    question: "The ability to draw clear conclusions about the intervention's impact, as described in the scenario, primarily fulfills which goal of behavior analysis?",
    choices: [
      {
        letter: "A",
        text: "To understand the underlying neurological causes of the behavior."
      },
      {
        letter: "B",
        text: "To predict when and where the behavior is most likely to occur."
      },
      {
        letter: "C",
        text: "To describe the topography of the behavior in detail."
      },
      {
        letter: "D",
        text: "To achieve a socially significant improvement in the client's behavior."
      }
    ],
    correctAnswer: "D",
    rationale: "The primary goal of applied behavior analysis (ABA) is to achieve socially significant improvements in behavior. While understanding, predicting, and describing behavior are important aspects, the ultimate applied goal is to produce positive change. Choice A is incorrect as behavior analysis focuses on environmental factors, not neurological causes. Choices B and C are aspects of understanding and describing behavior, which are intermediate goals, not the ultimate applied goal."
  },
  {
    id: "t6-A-pool-6",
    domain: "A",
    taskItem: "A.3",
    phase: "assessment",
    bloomsLevel: "analysis",
    difficulty: "easy",
    scenario: "A client reports feeling anxious before public speaking engagements. A behavior analyst, operating from a radical behaviorist perspective, considers these private feelings as behavior to be analyzed, rather than as internal causes of other behaviors.",
    question: "The behavior analyst's perspective aligns most closely with which aspect of radical behaviorism?",
    choices: [
      {
        letter: "A",
        text: "Methodological behaviorism, which excludes private events from scientific analysis."
      },
      {
        letter: "B",
        text: "The view that private events are simply collateral products of environmental variables, not causes."
      },
      {
        letter: "C",
        text: "The focus on observable behavior as the sole subject matter of psychology."
      },
      {
        letter: "D",
        text: "The rejection of all mentalistic terms in scientific discourse."
      }
    ],
    correctAnswer: "B",
    rationale: "Radical behaviorism, as proposed by B.F. Skinner, acknowledges the existence of private events (thoughts, feelings) but treats them as behavior that is influenced by the same environmental variables as public behavior. It views private events not as causes of public behavior, but as additional behaviors to be explained. Methodological behaviorism (A) explicitly excludes private events. While radical behaviorism focuses on observable behavior (C), it does not exclude private events from analysis, but rather includes them as a type of behavior. Radical behaviorism does not reject all mentalistic terms (D), but rather reinterprets them in behavioral terms."
  },
  {
    id: "t6-A-pool-7",
    domain: "A",
    taskItem: "A.4",
    phase: "supervision",
    bloomsLevel: "application",
    difficulty: "easy",
    scenario: "A researcher is conducting an experiment in a laboratory setting, manipulating specific environmental variables to observe their effect on the pecking rate of pigeons. The researcher is primarily interested in discovering basic principles of learning.",
    question: "The early research described, focused on identifying fundamental principles in controlled settings, is characteristic of which branch of behavior analysis?",
    choices: [
      {
        letter: "A",
        text: "Applied Behavior Analysis (ABA)"
      },
      {
        letter: "B",
        text: "Experimental Analysis of Behavior (EAB)"
      },
      {
        letter: "C",
        text: "Professional Practice of Behavior Analysis"
      },
      {
        letter: "D",
        text: "Radical Behaviorism"
      }
    ],
    correctAnswer: "B",
    rationale: "Experimental Analysis of Behavior (EAB) is characterized by basic research, often conducted in laboratory settings with non-human subjects, to discover fundamental principles of behavior. Applied Behavior Analysis (ABA) (A) focuses on applying these principles to socially significant human behavior. Professional Practice of Behavior Analysis (C) involves the direct application of ABA principles in real-world settings. Radical Behaviorism (D) is the philosophy underlying all branches of behavior analysis, not a branch itself."
  },
  {
    id: "t6-A-pool-8",
    domain: "A",
    taskItem: "A.3",
    phase: "supervision",
    bloomsLevel: "application",
    difficulty: "hard",
    scenario: "A client reports feeling anxious before public speaking engagements. A behavior analyst, operating from a radical behaviorist perspective, considers these private feelings as behavior to be analyzed, rather than as internal causes of other behaviors.",
    question: "From a radical behaviorist perspective, how is self-talk primarily conceptualized?",
    choices: [
      {
        letter: "A",
        text: "Methodological behaviorism, which excludes private events from scientific analysis."
      },
      {
        letter: "B",
        text: "The view that private events are simply collateral products of environmental variables, not causes."
      },
      {
        letter: "C",
        text: "The focus on observable behavior as the sole subject matter of psychology."
      },
      {
        letter: "D",
        text: "The rejection of all mentalistic terms in scientific discourse."
      }
    ],
    correctAnswer: "B",
    rationale: "Radical behaviorism, as proposed by B.F. Skinner, acknowledges the existence of private events (thoughts, feelings) but treats them as behavior that is influenced by the same environmental variables as public behavior. It views private events not as causes of public behavior, but as additional behaviors to be explained. Methodological behaviorism (A) explicitly excludes private events. While radical behaviorism focuses on observable behavior (C), it does not exclude private events from analysis, but rather includes them as a type of behavior. Radical behaviorism does not reject all mentalistic terms (D), but rather reinterprets them in behavioral terms."
  },
  {
    id: "t6-A-pool-9",
    domain: "A",
    taskItem: "A.1",
    phase: "intervention",
    bloomsLevel: "knowledge",
    difficulty: "medium",
    scenario: "A research team is conducting a study on the effectiveness of a new teaching method for students with learning disabilities. They are meticulously collecting data on student performance to determine if the method leads to significant improvements.",
    question: "The ability to draw clear conclusions about the intervention's impact, as described in the scenario, primarily fulfills which goal of behavior analysis?",
    choices: [
      {
        letter: "A",
        text: "To understand the underlying neurological causes of the behavior."
      },
      {
        letter: "B",
        text: "To predict when and where the behavior is most likely to occur."
      },
      {
        letter: "C",
        text: "To describe the topography of the behavior in detail."
      },
      {
        letter: "D",
        text: "To achieve a socially significant improvement in the client's behavior."
      }
    ],
    correctAnswer: "D",
    rationale: "The primary goal of applied behavior analysis (ABA) is to achieve socially significant improvements in behavior. While understanding, predicting, and describing behavior are important aspects, the ultimate applied goal is to produce positive change. Choice A is incorrect as behavior analysis focuses on environmental factors, not neurological causes. Choices B and C are aspects of understanding and describing behavior, which are intermediate goals, not the ultimate applied goal."
  },
  {
    id: "t6-A-pool-10",
    domain: "A",
    taskItem: "A.2",
    phase: "supervision",
    bloomsLevel: "analysis",
    difficulty: "medium",
    scenario: "A behavior analyst is conducting a preference assessment for a child with developmental disabilities. The analyst observes the child interacting with various toys and records which toys the child chooses to play with most frequently over several sessions.",
    question: "Which philosophical assumption is the BCBA primarily applying by advocating for a simpler intervention?",
    choices: [
      {
        letter: "A",
        text: "Generic Choice A for t6-A-pool-10"
      },
      {
        letter: "B",
        text: "Generic Choice B for t6-A-pool-10"
      },
      {
        letter: "C",
        text: "Generic Choice C for t6-A-pool-10"
      },
      {
        letter: "D",
        text: "Generic Choice D for t6-A-pool-10"
      }
    ],
    correctAnswer: "B",
    rationale: "Generic rationale for t6-A-pool-10: Explanation for correct answer B and why distractors are wrong."
  },
  {
    id: "t6-A-pool-11",
    domain: "A",
    taskItem: "A.1",
    phase: "assessment",
    bloomsLevel: "comprehension",
    difficulty: "hard",
    scenario: "A BCBA is consulting with a school to address a student's disruptive classroom behavior. The BCBA's initial focus is on identifying the environmental factors that maintain the behavior to inform effective intervention strategies.",
    question: "Which of the following best represents the primary goal of behavior analysis being applied in this scenario?",
    choices: [
      {
        letter: "A",
        text: "Generic Choice A for t6-A-pool-11"
      },
      {
        letter: "B",
        text: "Generic Choice B for t6-A-pool-11"
      },
      {
        letter: "C",
        text: "Generic Choice C for t6-A-pool-11"
      },
      {
        letter: "D",
        text: "Generic Choice D for t6-A-pool-11"
      }
    ],
    correctAnswer: "D",
    rationale: "Generic rationale for t6-A-pool-11: Explanation for correct answer D and why distractors are wrong."
  },
  {
    id: "t6-A-pool-12",
    domain: "A",
    taskItem: "A.2",
    phase: "assessment",
    bloomsLevel: "comprehension",
    difficulty: "hard",
    scenario: "A BCBA is reviewing a client's behavior intervention plan (BIP) that includes a complex multi-component intervention. The BCBA suggests simplifying the intervention by removing unnecessary steps, arguing that a simpler explanation for behavior change is often preferred.",
    question: "Which philosophical assumption of behavior analysis is primarily demonstrated by the BCBA's approach of collecting direct observational data?",
    choices: [
      {
        letter: "A",
        text: "Determinism"
      },
      {
        letter: "B",
        text: "Selectionism"
      },
      {
        letter: "C",
        text: "Parsimony"
      },
      {
        letter: "D",
        text: "Pragmatism"
      }
    ],
    correctAnswer: "C",
    rationale: "Parsimony is the philosophical assumption that states that when multiple explanations for a phenomenon are available, the simplest explanation that accounts for all the facts should be chosen. The BCBA's suggestion to simplify the intervention aligns with this principle. Determinism (A) is the assumption that behavior is caused by lawful events. Selectionism (B) refers to the idea that behavior is selected by its consequences. Pragmatism (D) focuses on the practical utility of an intervention."
  },
  {
    id: "t6-A-pool-13",
    domain: "A",
    taskItem: "A.5",
    phase: "supervision",
    bloomsLevel: "analysis",
    difficulty: "medium",
    scenario: "A BCBA is working with a client to teach them to request preferred items. The BCBA uses a picture exchange system, and the client quickly learns to exchange pictures for desired objects. The BCBA ensures that the client can use this skill not only with the BCBA but also with parents and teachers in different environments.",
    question: "The client's ability to use the requesting skill across various people and settings demonstrates which dimension of ABA?",
    choices: [
      {
        letter: "A",
        text: "Applied"
      },
      {
        letter: "B",
        text: "Behavioral"
      },
      {
        letter: "C",
        text: "Effective"
      },
      {
        letter: "D",
        text: "Generality"
      }
    ],
    correctAnswer: "D",
    rationale: "Generality refers to the extent to which a behavior change lasts over time, appears in environments other than the one in which the intervention was implemented, and/or spreads to other behaviors not directly treated by the intervention. The client using the skill with different people and in different settings directly exemplifies generality. Applied (A) refers to the social significance of the behavior. Behavioral (B) refers to focusing on observable and measurable behavior. Effective (C) refers to the intervention producing practical and significant changes in behavior."
  },
  {
    id: "t6-A-pool-14",
    domain: "A",
    taskItem: "A.5",
    phase: "assessment",
    bloomsLevel: "analysis",
    difficulty: "easy",
    scenario: "A BCBA is developing a behavior intervention plan for a student with disruptive classroom behavior. The BCBA ensures that the intervention is based on established principles of behavior, such as reinforcement and extinction, rather than on unproven or faddish techniques.",
    question: "Which dimension of ABA is the BCBA primarily demonstrating by grounding the intervention in established behavioral principles?",
    choices: [
      {
        letter: "A",
        text: "Applied"
      },
      {
        letter: "B",
        text: "Behavioral"
      },
      {
        letter: "C",
        text: "Conceptually Systematic"
      },
      {
        letter: "D",
        text: "Effective"
      }
    ],
    correctAnswer: "C",
    rationale: "Conceptually Systematic refers to the fact that all procedures used in ABA are derived from basic principles of behavior. By ensuring the intervention is based on established principles like reinforcement and extinction, the BCBA is demonstrating conceptual systematicity. Applied (A) refers to the social significance of the behavior. Behavioral (B) refers to focusing on observable and measurable behavior. Effective (D) refers to the intervention producing practical and significant changes in behavior."
  },
  {
    id: "t6-A-pool-15",
    domain: "A",
    taskItem: "A.4",
    phase: "assessment",
    bloomsLevel: "comprehension",
    difficulty: "easy",
    scenario: "A group of behavior analysts is discussing the historical development of their field. One analyst points out that early research often involved highly controlled laboratory settings to identify fundamental principles of learning, which later informed interventions in real-world environments.",
    question: "The early research described, focused on identifying fundamental principles in controlled settings, is characteristic of which branch of behavior analysis?",
    choices: [
      {
        letter: "A",
        text: "Applied Behavior Analysis (ABA)"
      },
      {
        letter: "B",
        text: "Experimental Analysis of Behavior (EAB)"
      },
      {
        letter: "C",
        text: "Professional Practice of Behavior Analysis"
      },
      {
        letter: "D",
        text: "Radical Behaviorism"
      }
    ],
    correctAnswer: "B",
    rationale: "Experimental Analysis of Behavior (EAB) is characterized by basic research, often conducted in laboratory settings with non-human subjects, to discover fundamental principles of behavior. Applied Behavior Analysis (ABA) (A) focuses on applying these principles to socially significant human behavior. Professional Practice of Behavior Analysis (C) involves the direct application of ABA principles in real-world settings. Radical Behaviorism (D) is the philosophy underlying all branches of behavior analysis, not a branch itself."
  },
  {
    id: "t6-A-pool-16",
    domain: "A",
    taskItem: "A.3",
    phase: "assessment",
    bloomsLevel: "application",
    difficulty: "hard",
    scenario: "A supervisee is struggling to understand how a radical behaviorist would approach a client's self-talk. The supervisee believes that self-talk is purely internal and therefore not amenable to behavioral analysis. The supervisor explains that self-talk, like any other behavior, is influenced by environmental contingencies.",
    question: "From a radical behaviorist perspective, how is self-talk primarily conceptualized?",
    choices: [
      {
        letter: "A",
        text: "As a cognitive process that precedes and causes overt behavior."
      },
      {
        letter: "B",
        text: "As a private event that is a form of verbal behavior, influenced by the same variables as public verbal behavior."
      },
      {
        letter: "C",
        text: "As an unobservable mental state that cannot be objectively studied."
      },
      {
        letter: "D",
        text: "As a hypothetical construct used to explain complex human behavior."
      }
    ],
    correctAnswer: "B",
    rationale: "Radical behaviorism views self-talk as a private event, but crucially, it is still considered a form of verbal behavior that is influenced by environmental contingencies, just like public verbal behavior. It is not seen as a cause of overt behavior (A), nor is it considered unobservable in principle (C) or merely hypothetical (D). Instead, it is a behavior to be analyzed within the same framework as other behaviors."
  },
  {
    id: "t6-A-pool-17",
    domain: "A",
    taskItem: "A.4",
    phase: "supervision",
    bloomsLevel: "application",
    difficulty: "easy",
    scenario: "A group of behavior analysts is discussing the historical development of their field. One analyst points out that early research often involved highly controlled laboratory settings to identify fundamental principles of learning, which later informed interventions in real-world environments.",
    question: "This research best exemplifies which branch of behavior analysis?",
    choices: [
      {
        letter: "A",
        text: "Applied Behavior Analysis (ABA)"
      },
      {
        letter: "B",
        text: "Experimental Analysis of Behavior (EAB)"
      },
      {
        letter: "C",
        text: "Professional Practice of Behavior Analysis"
      },
      {
        letter: "D",
        text: "Radical Behaviorism"
      }
    ],
    correctAnswer: "B",
    rationale: "Experimental Analysis of Behavior (EAB) is characterized by basic research, often conducted in laboratory settings with non-human subjects, to discover fundamental principles of behavior. Applied Behavior Analysis (ABA) (A) focuses on applying these principles to socially significant human behavior. Professional Practice of Behavior Analysis (C) involves the direct application of ABA principles in real-world settings. Radical Behaviorism (D) is the philosophy underlying all branches of behavior analysis, not a branch itself."
  },
  {
    id: "t6-A-pool-18",
    domain: "A",
    taskItem: "A.1",
    phase: "supervision",
    bloomsLevel: "analysis",
    difficulty: "easy",
    scenario: "A BCBA is consulting with a school to address a student's disruptive classroom behavior. The BCBA's initial focus is on identifying the environmental factors that maintain the behavior to inform effective intervention strategies.",
    question: "Which of the following best represents the primary goal of behavior analysis being applied in this scenario?",
    choices: [
      {
        letter: "A",
        text: "Generic Choice A for t6-A-pool-18"
      },
      {
        letter: "B",
        text: "Generic Choice B for t6-A-pool-18"
      },
      {
        letter: "C",
        text: "Generic Choice C for t6-A-pool-18"
      },
      {
        letter: "D",
        text: "Generic Choice D for t6-A-pool-18"
      }
    ],
    correctAnswer: "A",
    rationale: "Generic rationale for t6-A-pool-18: Explanation for correct answer A and why distractors are wrong."
  },
  {
    id: "t6-A-pool-19",
    domain: "A",
    taskItem: "A.4",
    phase: "evaluation",
    bloomsLevel: "knowledge",
    difficulty: "medium",
    scenario: "A group of behavior analysts is discussing the historical development of their field. One analyst points out that early research often involved highly controlled laboratory settings to identify fundamental principles of learning, which later informed interventions in real-world environments.",
    question: "This research best exemplifies which branch of behavior analysis?",
    choices: [
      {
        letter: "A",
        text: "Applied Behavior Analysis (ABA)"
      },
      {
        letter: "B",
        text: "Experimental Analysis of Behavior (EAB)"
      },
      {
        letter: "C",
        text: "Professional Practice of Behavior Analysis"
      },
      {
        letter: "D",
        text: "Radical Behaviorism"
      }
    ],
    correctAnswer: "B",
    rationale: "Experimental Analysis of Behavior (EAB) is characterized by basic research, often conducted in laboratory settings with non-human subjects, to discover fundamental principles of behavior. Applied Behavior Analysis (ABA) (A) focuses on applying these principles to socially significant human behavior. Professional Practice of Behavior Analysis (C) involves the direct application of ABA principles in real-world settings. Radical Behaviorism (D) is the philosophy underlying all branches of behavior analysis, not a branch itself."
  },
  {
    id: "t6-A-pool-20",
    domain: "A",
    taskItem: "A.1",
    phase: "supervision",
    bloomsLevel: "comprehension",
    difficulty: "medium",
    scenario: "A BCBA is consulting with a school to address a student's disruptive classroom behavior. The BCBA's initial focus is on identifying the environmental factors that maintain the behavior to inform effective intervention strategies.",
    question: "Which of the following best represents the primary goal of behavior analysis being applied in this scenario?",
    choices: [
      {
        letter: "A",
        text: "Generic Choice A for t6-A-pool-20"
      },
      {
        letter: "B",
        text: "Generic Choice B for t6-A-pool-20"
      },
      {
        letter: "C",
        text: "Generic Choice C for t6-A-pool-20"
      },
      {
        letter: "D",
        text: "Generic Choice D for t6-A-pool-20"
      }
    ],
    correctAnswer: "C",
    rationale: "Generic rationale for t6-A-pool-20: Explanation for correct answer C and why distractors are wrong."
  },
  {
    id: "t6-A-pool-21",
    domain: "A",
    taskItem: "A.3",
    phase: "evaluation",
    bloomsLevel: "analysis",
    difficulty: "medium",
    scenario: "A supervisee is struggling to understand how a radical behaviorist would approach a client's self-talk. The supervisee believes that self-talk is purely internal and therefore not amenable to behavioral analysis. The supervisor explains that self-talk, like any other behavior, is influenced by environmental contingencies.",
    question: "How does radical behaviorism conceptualize private events like feelings of anxiety?",
    choices: [
      {
        letter: "A",
        text: "As a cognitive process that precedes and causes overt behavior."
      },
      {
        letter: "B",
        text: "As a private event that is a form of verbal behavior, influenced by the same variables as public verbal behavior."
      },
      {
        letter: "C",
        text: "As an unobservable mental state that cannot be objectively studied."
      },
      {
        letter: "D",
        text: "As a hypothetical construct used to explain complex human behavior."
      }
    ],
    correctAnswer: "B",
    rationale: "Radical behaviorism views self-talk as a private event, but crucially, it is still considered a form of verbal behavior that is influenced by environmental contingencies, just like public verbal behavior. It is not seen as a cause of overt behavior (A), nor is it considered unobservable in principle (C) or merely hypothetical (D). Instead, it is a behavior to be analyzed within the same framework as other behaviors."
  },
  {
    id: "t6-A-pool-22",
    domain: "A",
    taskItem: "A.3",
    phase: "supervision",
    bloomsLevel: "comprehension",
    difficulty: "medium",
    scenario: "A client reports feeling anxious before public speaking engagements. A behavior analyst, operating from a radical behaviorist perspective, considers these private feelings as behavior to be analyzed, rather than as internal causes of other behaviors.",
    question: "The behavior analyst's perspective aligns most closely with which aspect of radical behaviorism?",
    choices: [
      {
        letter: "A",
        text: "Methodological behaviorism, which excludes private events from scientific analysis."
      },
      {
        letter: "B",
        text: "The view that private events are simply collateral products of environmental variables, not causes."
      },
      {
        letter: "C",
        text: "The focus on observable behavior as the sole subject matter of psychology."
      },
      {
        letter: "D",
        text: "The rejection of all mentalistic terms in scientific discourse."
      }
    ],
    correctAnswer: "B",
    rationale: "Radical behaviorism, as proposed by B.F. Skinner, acknowledges the existence of private events (thoughts, feelings) but treats them as behavior that is influenced by the same environmental variables as public behavior. It views private events not as causes of public behavior, but as additional behaviors to be explained. Methodological behaviorism (A) explicitly excludes private events. While radical behaviorism focuses on observable behavior (C), it does not exclude private events from analysis, but rather includes them as a type of behavior. Radical behaviorism does not reject all mentalistic terms (D), but rather reinterprets them in behavioral terms."
  },
  {
    id: "t6-A-pool-23",
    domain: "A",
    taskItem: "A.4",
    phase: "assessment",
    bloomsLevel: "analysis",
    difficulty: "medium",
    scenario: "A group of behavior analysts is discussing the historical development of their field. One analyst points out that early research often involved highly controlled laboratory settings to identify fundamental principles of learning, which later informed interventions in real-world environments.",
    question: "Which statement best describes the relationship between behaviorism and the professional practice of Applied Behavior Analysis (ABA)?",
    choices: [
      {
        letter: "A",
        text: "Applied Behavior Analysis (ABA)"
      },
      {
        letter: "B",
        text: "Experimental Analysis of Behavior (EAB)"
      },
      {
        letter: "C",
        text: "Professional Practice of Behavior Analysis"
      },
      {
        letter: "D",
        text: "Radical Behaviorism"
      }
    ],
    correctAnswer: "B",
    rationale: "Experimental Analysis of Behavior (EAB) is characterized by basic research, often conducted in laboratory settings with non-human subjects, to discover fundamental principles of behavior. Applied Behavior Analysis (ABA) (A) focuses on applying these principles to socially significant human behavior. Professional Practice of Behavior Analysis (C) involves the direct application of ABA principles in real-world settings. Radical Behaviorism (D) is the philosophy underlying all branches of behavior analysis, not a branch itself."
  },
  {
    id: "t6-A-pool-24",
    domain: "A",
    taskItem: "A.2",
    phase: "evaluation",
    bloomsLevel: "knowledge",
    difficulty: "easy",
    scenario: "A BCBA is designing a new intervention for a client with severe self-injurious behavior. Before implementing, the BCBA reviews existing literature and collects baseline data through direct observation to inform the intervention strategy.",
    question: "Which philosophical assumption of behavior analysis is primarily demonstrated by the BCBA's approach of collecting direct observational data?",
    choices: [
      {
        letter: "A",
        text: "Determinism"
      },
      {
        letter: "B",
        text: "Parsimony"
      },
      {
        letter: "C",
        text: "Empiricism"
      },
      {
        letter: "D",
        text: "Pragmatism"
      }
    ],
    correctAnswer: "C",
    rationale: "Empiricism is the practice of objective observation and measurement of phenomena of interest. The BCBA's reliance on direct observational data to inform the intervention is a direct application of empiricism. Determinism (A) refers to the assumption that the universe is a lawful and orderly place. Parsimony (B) refers to choosing the simplest explanation that fits the facts. Pragmatism (D) refers to the practical approach to problems, focusing on what works. While all are philosophical assumptions, empiricism is most directly demonstrated by data collection."
  },
  {
    id: "t6-A-pool-25",
    domain: "A",
    taskItem: "A.2",
    phase: "supervision",
    bloomsLevel: "application",
    difficulty: "easy",
    scenario: "A BCBA is reviewing a client's behavior intervention plan (BIP) that includes a complex multi-component intervention. The BCBA suggests simplifying the intervention by removing unnecessary steps, arguing that a simpler explanation for behavior change is often preferred.",
    question: "The behavior analyst's systematic observation and recording of the child's choices to identify preferred items is an example of which philosophical assumption?",
    choices: [
      {
        letter: "A",
        text: "Determinism"
      },
      {
        letter: "B",
        text: "Selectionism"
      },
      {
        letter: "C",
        text: "Parsimony"
      },
      {
        letter: "D",
        text: "Pragmatism"
      }
    ],
    correctAnswer: "C",
    rationale: "Parsimony is the philosophical assumption that states that when multiple explanations for a phenomenon are available, the simplest explanation that accounts for all the facts should be chosen. The BCBA's suggestion to simplify the intervention aligns with this principle. Determinism (A) is the assumption that behavior is caused by lawful events. Selectionism (B) refers to the idea that behavior is selected by its consequences. Pragmatism (D) focuses on the practical utility of an intervention."
  },
  {
    id: "t6-A-pool-26",
    domain: "A",
    taskItem: "A.2",
    phase: "supervision",
    bloomsLevel: "analysis",
    difficulty: "medium",
    scenario: "A behavior analyst is conducting a preference assessment for a child with developmental disabilities. The analyst observes the child interacting with various toys and records which toys the child chooses to play with most frequently over several sessions.",
    question: "Which philosophical assumption of behavior analysis is primarily demonstrated by the BCBA's approach of collecting direct observational data?",
    choices: [
      {
        letter: "A",
        text: "Generic Choice A for t6-A-pool-26"
      },
      {
        letter: "B",
        text: "Generic Choice B for t6-A-pool-26"
      },
      {
        letter: "C",
        text: "Generic Choice C for t6-A-pool-26"
      },
      {
        letter: "D",
        text: "Generic Choice D for t6-A-pool-26"
      }
    ],
    correctAnswer: "B",
    rationale: "Generic rationale for t6-A-pool-26: Explanation for correct answer B and why distractors are wrong."
  },
  {
    id: "t6-A-pool-27",
    domain: "A",
    taskItem: "A.5",
    phase: "intervention",
    bloomsLevel: "application",
    difficulty: "hard",
    scenario: "A BCBA is working with a client to increase their independent living skills. The BCBA designs an intervention that focuses on teaching the client to prepare simple meals. The intervention procedures are written in such detail that any trained staff member can implement them consistently.",
    question: "Which dimension of Applied Behavior Analysis (ABA) is best exemplified by the detailed and replicable intervention procedures?",
    choices: [
      {
        letter: "A",
        text: "Applied"
      },
      {
        letter: "B",
        text: "Behavioral"
      },
      {
        letter: "C",
        text: "Technological"
      },
      {
        letter: "D",
        text: "Effective"
      }
    ],
    correctAnswer: "C",
    rationale: "Technological refers to the fact that all procedures are identified and described with sufficient detail and clarity so that a reader has a fair chance of replicating the application with the same results. The detailed and replicable intervention procedures directly demonstrate this dimension. Applied (A) refers to the social significance of the behavior. Behavioral (B) refers to focusing on observable and measurable behavior. Effective (D) refers to the intervention producing practical and significant changes in behavior."
  }
];
