/**
 * Domain I — Personnel Supervision and Management (Easy Difficulty)
 * 7 questions, IDs t6-I-pool-49 through t6-I-pool-55
 * Bloom's Level: Remember / Understand
 * Answer distribution: A:2, B:2, C:2, D:1
 *
 * Psychometric standards:
 *   - Easy difficulty: foundational supervision and management concepts
 *   - Clinical scenario context on every item
 *   - Plausible distractors using correct ABA terminology
 *   - No absolute language (always/never) in distractors
 */

import type { Question } from "./types";

export const tier6Pool_I_easy: Question[] = [
  {
    id: "t6-I-pool-49",
    domain: "I",
    taskItem: "I-1",
    difficulty: "easy",
    bloomsLevel: "knowledge",
    scenario: `A BCBA is beginning a supervisory relationship with a new RBT. She explains to the RBT that the supervisory relationship has specific requirements and expectations that both parties must understand.`,
    question: `What is the primary purpose of supervision in the context of ABA service delivery?`,
    choices: [
      { letter: "B", text: `The primary purpose of supervision is to ensure that the supervisee accumulates the required number of supervised fieldwork hours needed to qualify for BACB certification.` },
      { letter: "A", text: `The primary purpose of supervision is to protect the client by ensuring that the supervisee implements evidence-based procedures correctly and that the quality of services meets professional standards.` },
      { letter: "C", text: `The primary purpose of supervision is to evaluate the supervisee's performance for the purpose of making employment decisions such as promotion, termination, or salary increases.` },
      { letter: "D", text: `The primary purpose of supervision is to provide the supervisee with feedback on their performance so that they can improve their skills and advance in their career.` },
    ],
    correctAnswer: "A",
    rationale: `Choice A is correct. The primary purpose of supervision in ABA service delivery is to protect the client by ensuring that the supervisee implements evidence-based procedures correctly and that the quality of services meets professional and ethical standards. While supervision also serves professional development and credentialing functions, client protection and service quality are the primary ethical justifications for supervision. Choice B is incorrect because accumulating fieldwork hours is a credentialing requirement, not the primary purpose of supervision — supervision hours are a means to an end (competence development), not the end itself. Choice C is incorrect because while performance evaluation is a component of supervision, making employment decisions is an administrative function, not the primary purpose of clinical supervision. Choice D is incorrect because providing feedback for professional development is an important function of supervision, but it is secondary to the primary purpose of protecting the client and ensuring service quality.`,
  },

  {
    id: "t6-I-pool-50",
    domain: "I",
    taskItem: "I-2",
    difficulty: "easy",
    bloomsLevel: "knowledge",
    scenario: `A BCBA is explaining the components of effective performance feedback to a supervisee. She explains that feedback is one of the most important tools a supervisor has for improving supervisee performance.`,
    question: `Which of the following best describes effective performance feedback in the context of ABA supervision?`,
    choices: [
      { letter: "B", text: `Effective feedback is delivered at the end of the month during a formal performance review, allowing the supervisor to compile a comprehensive summary of the supervisee's performance.` },
      { letter: "A", text: `Effective feedback is specific, timely, and behavior-based — it describes what the supervisee did or did not do, is delivered close in time to the observed behavior, and includes guidance for improvement.` },
      { letter: "C", text: `Effective feedback focuses primarily on the supervisee's strengths and positive performance to maintain motivation and a positive supervisory relationship.` },
      { letter: "D", text: `Effective feedback is delivered privately in written form to avoid embarrassing the supervisee in front of colleagues or clients.` },
    ],
    correctAnswer: "A",
    rationale: `Choice A is correct. Effective performance feedback in ABA supervision is specific (it describes the exact behavior observed), timely (delivered close in time to the observed performance), and behavior-based (it focuses on observable behaviors rather than inferences about the supervisee's attitude or character). Effective feedback also includes guidance for improvement when performance does not meet expectations. Choice B is incorrect because monthly performance reviews are too infrequent to provide timely feedback — effective feedback should be delivered close in time to the observed behavior. Choice C is incorrect because while positive feedback is important, effective feedback must also address performance deficits — focusing only on strengths does not provide the supervisee with the information needed to correct errors. Choice D is incorrect because while privacy is important in some feedback situations, the format (written vs. verbal) and setting are secondary to the content and timing of the feedback; effective feedback is not defined by its format.`,
  },

  {
    id: "t6-I-pool-51",
    domain: "I",
    taskItem: "I-3",
    difficulty: "easy",
    bloomsLevel: "knowledge",
    scenario: `A BCBA is explaining the concept of staff training to a new supervisor. She explains that effective staff training is essential for ensuring that behavior technicians implement intervention procedures with fidelity.`,
    question: `Which training approach is most likely to produce accurate implementation of a new behavior intervention procedure by a behavior technician?`,
    choices: [
      { letter: "A", text: `Providing the behavior technician with a written description of the procedure and asking them to read it before their next session with the client.` },
      { letter: "B", text: `Showing the behavior technician a video of the procedure being implemented correctly and asking them to watch it before their next session.` },
      { letter: "C", text: `Providing a verbal explanation of the procedure during a team meeting and answering any questions the behavior technician may have.` },
      { letter: "D", text: `Using a behavioral skills training (BST) approach that includes instruction, modeling, rehearsal, and feedback until the behavior technician demonstrates competence.` },
    ],
    correctAnswer: "D",
    rationale: `Choice D is correct. Behavioral skills training (BST) is the most evidence-based approach for training new skills in behavior technicians. BST combines four components: instruction (explaining the skill), modeling (demonstrating the skill), rehearsal (having the trainee practice the skill), and feedback (providing corrective feedback until the trainee demonstrates competence). Research consistently shows that BST produces higher rates of accurate implementation than instruction-only or modeling-only approaches. Choice A is incorrect because providing only written instructions is the least effective training approach — reading about a procedure does not ensure that the technician can implement it correctly. Choice B is incorrect because video modeling alone is more effective than written instructions but is still insufficient without rehearsal and feedback to confirm competence. Choice C is incorrect because verbal explanation alone, even with Q&A, does not provide the rehearsal and feedback components needed to ensure accurate implementation.`,
  },

  {
    id: "t6-I-pool-52",
    domain: "I",
    taskItem: "I-4",
    difficulty: "easy",
    bloomsLevel: "knowledge",
    scenario: `A BCBA is explaining the concept of scope of practice to a new RBT. She explains that all BACB certificants must practice within their scope of practice.`,
    question: `What does "scope of practice" refer to for a BACB certificant?`,
    choices: [
      { letter: "A", text: `Scope of practice refers to the geographic region in which a BACB certificant is authorized to provide services, as determined by their state licensure.` },
      { letter: "C", text: `Scope of practice refers to the range of activities and responsibilities that a BACB certificant is qualified to perform based on their training, education, and supervised experience.` },
      { letter: "B", text: `Scope of practice refers to the specific client populations that a BACB certificant is authorized to serve, as determined by their certification level and specialization.` },
      { letter: "D", text: `Scope of practice refers to the number of clients a BACB certificant can serve simultaneously, as determined by their certification level and supervisory responsibilities.` },
    ],
    correctAnswer: "C",
    rationale: `Choice C is correct. Scope of practice refers to the range of activities, responsibilities, and services that a BACB certificant is qualified to perform based on their training, education, and supervised experience. Practicing within one's scope of practice means only providing services for which one has the necessary competence — and seeking additional training, supervision, or consultation when working outside one's current competence. Choice A is incorrect because geographic authorization is determined by state licensure, not the concept of scope of practice as defined by the BACB. Choice B is incorrect because scope of practice is not limited to specific client populations — it encompasses all the activities and responsibilities for which the certificant is competent, across populations and settings. Choice D is incorrect because the number of clients a certificant can serve is a caseload management issue, not the definition of scope of practice.`,
  },

  {
    id: "t6-I-pool-53",
    domain: "I",
    taskItem: "I-5",
    difficulty: "easy",
    bloomsLevel: "application",
    scenario: `A BCBA is reviewing a supervisee's data collection during a direct observation. She notices that the supervisee is recording data inconsistently — sometimes recording the behavior and sometimes missing occurrences.`,
    question: `What is the most appropriate first step for the BCBA to take in response to this observation?`,
    choices: [
      { letter: "A", text: `The BCBA should document the inconsistency in the supervisee's personnel file and schedule a formal performance improvement plan meeting.` },
      { letter: "B", text: `The BCBA should immediately take over data collection from the supervisee to ensure that accurate data are recorded for the remainder of the session.` },
      { letter: "C", text: `The BCBA should provide specific, immediate performance feedback to the supervisee, identifying the specific data collection errors and demonstrating the correct procedure.` },
      { letter: "D", text: `The BCBA should wait until the end of the session to address the issue to avoid disrupting the session and embarrassing the supervisee in front of the client.` },
    ],
    correctAnswer: "C",
    rationale: `Choice C is correct. The most appropriate first step is to provide specific, immediate performance feedback — identifying the specific data collection errors and demonstrating the correct procedure. Timely, behavior-specific feedback is the most effective way to correct skill deficits in supervisees. Addressing the issue immediately (or at the earliest appropriate opportunity) prevents further data collection errors and protects the quality of the client's data. Choice A is incorrect because formal documentation and a performance improvement plan are appropriate for persistent performance problems, not as a first response to an observed error — the first step should be corrective feedback. Choice B is incorrect because taking over data collection does not address the supervisee's skill deficit — it removes the learning opportunity and does not build the supervisee's competence. Choice D is incorrect because waiting until the end of the session allows the data collection errors to continue, compromising the quality of the data and delaying the supervisee's opportunity to correct the error.`,
  },

  {
    id: "t6-I-pool-54",
    domain: "I",
    taskItem: "I-6",
    difficulty: "easy",
    bloomsLevel: "application",
    scenario: `A BCBA is explaining the BACB's requirements for ongoing supervision to a supervisee who is working toward their BCBA certification. The supervisee asks about the minimum supervision requirements.`,
    question: `What is the primary reason that the BACB requires ongoing supervision for individuals working toward BCBA certification?`,
    choices: [
      { letter: "A", text: `Ongoing supervision is required to ensure that the supervisee accumulates the minimum number of supervised experience hours specified by the BACB for certification eligibility.` },
      { letter: "B", text: `Ongoing supervision is required to protect clients by ensuring that supervisees receive guidance and oversight while they are developing the competencies needed to practice independently.` },
      { letter: "C", text: `Ongoing supervision is required to provide the BACB with documentation that the supervisee has been exposed to a sufficient variety of clinical cases and populations.` },
      { letter: "D", text: `Ongoing supervision is required to ensure that the supervisee is familiar with the BACB's certification requirements and is on track to meet all eligibility criteria.` },
    ],
    correctAnswer: "B",
    rationale: `Choice B is correct. The primary reason for requiring ongoing supervision is to protect clients by ensuring that supervisees receive guidance and oversight while they are developing the competencies needed to practice independently. Supervision ensures that clients receive services of sufficient quality even when those services are being provided by individuals who are still developing their professional skills. Choice A is incorrect because accumulating the required number of supervised hours is a credentialing requirement, but it is a means to an end (competence development and client protection) — not the primary reason for requiring supervision. Choice C is incorrect because documentation of case variety is a component of the supervision record, but it is not the primary reason for requiring ongoing supervision. Choice D is incorrect because familiarity with certification requirements is an administrative concern, not the primary clinical and ethical justification for ongoing supervision.`,
  },

  {
    id: "t6-I-pool-55",
    domain: "I",
    taskItem: "I-7",
    difficulty: "easy",
    bloomsLevel: "application",
    scenario: `A BCBA is explaining the concept of organizational behavior management (OBM) to a new supervisor. She explains that OBM applies behavior-analytic principles to improve staff performance and organizational systems.`,
    question: `Which of the following best describes the focus of organizational behavior management (OBM)?`,
    choices: [
      { letter: "A", text: `OBM focuses on applying behavior-analytic principles to improve the behavior of clients in organizational settings such as schools, clinics, and group homes.` },
      { letter: "B", text: `OBM focuses on applying behavior-analytic principles to analyze and improve the performance of individuals and systems within organizations.` },
      { letter: "C", text: `OBM focuses on applying cognitive-behavioral principles to improve employee motivation, job satisfaction, and organizational culture.` },
      { letter: "D", text: `OBM focuses on applying behavior-analytic principles to design and evaluate training programs for new employees entering the field of ABA.` },
    ],
    correctAnswer: "B",
    rationale: `Choice B is correct. Organizational behavior management (OBM) is the application of behavior-analytic principles to analyze and improve the performance of individuals and systems within organizations. OBM uses the same scientific principles as ABA (reinforcement, antecedent manipulation, measurement, and data-based decision making) but applies them to staff performance, organizational processes, and system-level outcomes rather than to client behavior. Choice A is incorrect because OBM focuses on staff and organizational performance, not on client behavior — applying behavior-analytic principles to client behavior in organizational settings is simply ABA service delivery. Choice C is incorrect because OBM is grounded in behavior-analytic (not cognitive-behavioral) principles — it focuses on observable behavior and environmental variables, not on cognitive processes or subjective states. Choice D is incorrect because while OBM principles can be applied to staff training, OBM is broader than training program design — it encompasses all aspects of individual and organizational performance improvement.`,
  },
];
