/**
 * Domain E — Ethical and Professional Issues (Easy Difficulty)
 * 7 questions, IDs t6-E-pool-86 through t6-E-pool-92
 * Bloom's Level: Remember / Understand
 * Answer distribution: A:2, B:1, C:2, D:2
 *
 * Psychometric standards:
 *   - Easy difficulty: foundational ethics code concepts
 *   - Clinical scenario context on every item
 *   - Plausible distractors using correct ABA terminology
 *   - No absolute language (always/never) in distractors
 */

import type { Question } from "./types";

export const tier6Pool_E_easy: Question[] = [
  {
    id: "t6-E-pool-86",
    domain: "E",
    taskItem: "E.1",
    difficulty: "easy",
    bloomsLevel: "knowledge",
    scenario: `A BCBA is orienting a new RBT to the BACB Ethics Code. The RBT asks who is responsible for following the Ethics Code and whether it applies only to BCBAs or to all BACB certificants.`,
    question: `To whom does the BACB Ethics Code apply?`,
    choices: [
      { letter: "B", text: `The Ethics Code applies only to BCBAs, because they hold the highest level of certification and bear primary responsibility for the ethical conduct of their supervisees.` },
      { letter: "A", text: `The Ethics Code applies to all BACB certificants, including BCBAs, BCaBAs, and RBTs, as well as applicants for certification.` },
      { letter: "C", text: `The Ethics Code applies only to BCBAs and BCaBAs, because RBTs work under supervision and their ethical conduct is the responsibility of their supervising BCBA.` },
      { letter: "D", text: `The Ethics Code applies to all individuals who provide ABA services, including behavior technicians who are not BACB certificants, as long as they are employed by a BACB-certified organization.` },
    ],
    correctAnswer: "A",
    rationale: `Choice A is correct. The BACB Ethics Code applies to all BACB certificants — BCBAs, BCaBAs, and RBTs — as well as to applicants for BACB certification. All certificants are responsible for understanding and adhering to the Ethics Code, regardless of their certification level. Choice B is incorrect because the Ethics Code applies to all certificants, not only BCBAs; while BCBAs have supervisory responsibilities, RBTs and BCaBAs are also bound by the Code. Choice C is incorrect because RBTs are BACB certificants and are therefore bound by the Ethics Code; the fact that they work under supervision does not exempt them from ethical obligations. Choice D is incorrect because the Ethics Code applies specifically to BACB certificants and applicants — it does not automatically extend to all individuals providing ABA services who are not BACB certificants.`,
  },

  {
    id: "t6-E-pool-87",
    domain: "E",
    taskItem: "E.2",
    difficulty: "easy",
    bloomsLevel: "knowledge",
    scenario: `A BCBA is explaining the concept of informed consent to a parent who is new to ABA services. The parent asks what informed consent means and why it is required before services begin.`,
    question: `Which of the following best describes the purpose of obtaining informed consent before beginning ABA services?`,
    choices: [
      { letter: "B", text: `Informed consent protects the BCBA from legal liability by documenting that the client or guardian was notified of the services to be provided.` },
      { letter: "A", text: `Informed consent ensures that the client or guardian has received sufficient information about the nature, risks, and benefits of the proposed services to make a voluntary and knowledgeable decision about participation.` },
      { letter: "C", text: `Informed consent is a billing requirement that documents the client's agreement to pay for services and authorizes the BCBA to submit insurance claims on their behalf.` },
      { letter: "D", text: `Informed consent is a formality required by the BACB that confirms the client or guardian has read and agreed to the behavior intervention plan before implementation begins.` },
    ],
    correctAnswer: "A",
    rationale: `Choice A is correct. The purpose of informed consent is to ensure that the client or guardian has received sufficient information about the nature, purpose, risks, and benefits of the proposed services to make a voluntary, knowledgeable decision about whether to participate. Informed consent respects the autonomy of the client and guardian and is a fundamental ethical requirement. Choice B is incorrect because while informed consent does have legal implications, its primary ethical purpose is to protect the client's right to self-determination — not to protect the BCBA from liability. Choice C is incorrect because informed consent is an ethical and clinical requirement, not a billing requirement; financial agreements are separate from consent to treatment. Choice D is incorrect because informed consent is not merely a formality — it requires that the client or guardian genuinely understands the information provided and voluntarily agrees to participate, and it applies to the overall service arrangement, not just the BIP.`,
  },

  {
    id: "t6-E-pool-88",
    domain: "E",
    taskItem: "E.3",
    difficulty: "easy",
    bloomsLevel: "analysis",
    scenario: `A BCBA has been providing ABA services to a 9-year-old client for two years. The client's mother asks the BCBA to also provide individual therapy for her own anxiety, as she has developed a trusting relationship with the BCBA and feels comfortable with her.`,
    question: `What is the primary ethical concern with the BCBA providing individual therapy for the client's mother?`,
    choices: [
      { letter: "A", text: `The primary concern is that the BCBA may not have the competence to provide individual therapy for anxiety, as this is outside the typical scope of practice for behavior analysts.` },
      { letter: "D", text: `The primary concern is that providing services to both the client and the client's mother creates a multiple relationship that could compromise the BCBA's objectivity and effectiveness with the client.` },
      { letter: "C", text: `The primary concern is that the BCBA would need to obtain a separate informed consent from the mother before providing services to her, which would create additional administrative burden.` },
      { letter: "B", text: `The primary concern is that the BCBA's time would be divided between the client and the mother, potentially reducing the intensity of services available to the client.` },
    ],
    correctAnswer: "D",
    rationale: `Choice D is correct. The primary ethical concern is the creation of a multiple relationship — the BCBA would simultaneously be the behavior analyst for the child and the therapist for the mother. This dual role could compromise the BCBA's objectivity, create conflicts of interest, and potentially harm both the client and the mother. The BACB Ethics Code requires behavior analysts to avoid multiple relationships that could impair their professional judgment. Choice A is also a valid concern (competence), but it is secondary to the multiple relationship issue, which is the primary ethical concern identified by the BACB Ethics Code. Choice C is incorrect because while separate informed consent would be required, this is an administrative requirement, not the primary ethical concern. Choice B is incorrect because while time management is a practical concern, it is not the primary ethical issue — the multiple relationship is the central ethical problem.`,
  },

  {
    id: "t6-E-pool-89",
    domain: "E",
    taskItem: "E.4",
    difficulty: "easy",
    bloomsLevel: "knowledge",
    scenario: `A BCBA is asked to provide services to a client with a rare genetic syndrome that she has never worked with before. She has general ABA training and experience but no specific knowledge of the syndrome's behavioral phenotype or the specialized interventions that have been shown to be effective for this population.`,
    question: `What does the BACB Ethics Code require the BCBA to do before accepting this case?`,
    choices: [
      { letter: "A", text: `The BCBA should accept the case and learn about the syndrome while providing services, as on-the-job learning is a recognized method of professional development in behavior analysis.` },
      { letter: "B", text: `The BCBA should accept the case only if she can obtain supervision from a more experienced BCBA who has worked with this population, regardless of whether she gains specific training first.` },
      { letter: "C", text: `The BCBA should only accept the case if she is able to practice within her boundaries of competence, which may require obtaining additional training, supervision, or consultation, or referring the client to a more qualified practitioner.` },
      { letter: "D", text: `The BCBA should decline the case and refer the client to a specialist, as the Ethics Code prohibits behavior analysts from accepting cases outside their primary area of training.` },
    ],
    correctAnswer: "C",
    rationale: `Choice C is correct. The BACB Ethics Code requires behavior analysts to practice within their boundaries of competence. When a BCBA lacks the specific knowledge or skills needed for a case, she must either obtain the necessary training, supervision, or consultation to become competent before or while providing services, or refer the client to a practitioner who already has the required competence. The Code does not absolutely prohibit accepting cases outside one's primary training area — it requires that competence be established. Choice A is incorrect because accepting a case and learning on the job without adequate preparation or supervision does not meet the competence standard and could harm the client. Choice B is incorrect because supervision alone is not sufficient if the BCBA lacks foundational knowledge of the population — competence requires both knowledge and skills. Choice D is incorrect because the Ethics Code does not categorically prohibit accepting cases outside one's primary training area; it requires that competence be established through appropriate means.`,
  },

  {
    id: "t6-E-pool-90",
    domain: "E",
    taskItem: "E.7",
    difficulty: "easy",
    bloomsLevel: "application",
    scenario: `A BCBA is at a social gathering and a neighbor asks about her work. The neighbor mentions that she knows a family in the neighborhood whose child receives ABA services and asks if the BCBA works with that child.`,
    question: `What is the BCBA's ethical obligation regarding client confidentiality in this situation?`,
    choices: [
      { letter: "A", text: `The BCBA may confirm or deny whether she works with the child, as long as she does not share any specific clinical information about the child's diagnosis or treatment.` },
      { letter: "B", text: `The BCBA should redirect the conversation without confirming or denying whether she works with the specific child, as even confirming a professional relationship is protected information.` },
      { letter: "C", text: `The BCBA may share general information about the child's progress if the neighbor is a trusted community member who has a legitimate interest in the child's welfare.` },
      { letter: "D", text: `The BCBA should inform the neighbor that she cannot discuss client information at work but that she would be willing to answer general questions about ABA in a different context.` },
    ],
    correctAnswer: "B",
    rationale: `Choice B is correct. Confidentiality protections extend to the existence of a professional relationship itself — confirming that a specific child is a client is a disclosure of protected information. The BCBA should redirect the conversation without confirming or denying whether she works with the specific child. Choice A is incorrect because even confirming the existence of a professional relationship (without sharing clinical details) violates confidentiality — the identity of clients is protected information. Choice C is incorrect because the neighbor's status as a trusted community member does not constitute a legal or ethical basis for disclosing client information; only the client or guardian can authorize disclosure. Choice D is incorrect because the BCBA's response implies she might discuss client information in a different context, which is not appropriate; the issue is not the setting but the absence of authorization to disclose.`,
  },

  {
    id: "t6-E-pool-91",
    domain: "E",
    taskItem: "E.5",
    difficulty: "easy",
    bloomsLevel: "knowledge",
    scenario: `A BCBA is supervising a BCaBA who has been providing ABA services to a client for six months. The BCBA has been conducting monthly supervision meetings but has not directly observed the BCaBA's work with the client during this time.`,
    question: `What is the primary concern with the BCBA's current supervision approach?`,
    choices: [
      { letter: "A", text: `The primary concern is that monthly supervision meetings may not meet the BACB's minimum required supervision hours for BCaBAs working toward BCBA certification.` },
      { letter: "B", text: `The primary concern is that the BCBA cannot adequately supervise the BCaBA's clinical work without directly observing the BCaBA implementing interventions with the client.` },
      { letter: "C", text: `The primary concern is that the BCaBA may be developing independent clinical skills that exceed her scope of practice without the BCBA's awareness.` },
      { letter: "D", text: `The primary concern is that the BCBA is not providing the BCaBA with sufficient opportunities to develop her own behavior intervention plans independently.` },
    ],
    correctAnswer: "B",
    rationale: `Choice B is correct. Effective supervision requires direct observation of the supervisee's work with clients. Without directly observing the BCaBA implementing interventions, the BCBA cannot assess the fidelity of implementation, identify skill deficits, ensure client safety, or provide meaningful performance feedback. Supervision that consists only of meetings without direct observation is insufficient to meet the ethical and professional standards for supervision. Choice A is incorrect because while supervision hours are a BACB requirement, the primary clinical and ethical concern here is the absence of direct observation, not the frequency of meetings. Choice C is incorrect because while scope of practice is a relevant concern, the immediate issue is the BCBA's inability to ensure quality and safety without direct observation. Choice D is incorrect because the concern is not about the BCaBA's independence — it is about the BCBA's inability to evaluate and ensure the quality of services being provided to the client.`,
  },

  {
    id: "t6-E-pool-92",
    domain: "E",
    taskItem: "E.9",
    difficulty: "easy",
    bloomsLevel: "application",
    scenario: `During a home visit, a BCBA notices bruising on a child client that appears inconsistent with the caregiver's explanation. The BCBA is uncertain whether the bruising is the result of abuse, but she is concerned.`,
    question: `What is the BCBA's ethical and legal obligation in this situation?`,
    choices: [
      { letter: "A", text: `The BCBA should document her observations and discuss her concerns with her supervisor before taking any action, to ensure that the report is accurate and well-supported.` },
      { letter: "B", text: `The BCBA should conduct her own investigation by asking the child and caregiver additional questions to determine whether abuse has occurred before making a report.` },
      { letter: "C", text: `The BCBA should report her concerns to the appropriate child protective services agency, as behavior analysts are mandated reporters and are required to report reasonable suspicions of abuse without conducting their own investigation.` },
      { letter: "D", text: `The BCBA should consult with the client's physician before making a report, as the physician has the medical expertise to determine whether the bruising is consistent with abuse.` },
    ],
    correctAnswer: "C",
    rationale: `Choice C is correct. Behavior analysts are mandated reporters in most jurisdictions, which means they are legally required to report reasonable suspicions of child abuse or neglect to the appropriate authorities. The standard for reporting is reasonable suspicion — not certainty or proof. The BCBA is not required to investigate or confirm the abuse before reporting; that is the role of child protective services. Choice A is incorrect because while consulting a supervisor may be appropriate, it should not delay a mandated report; the obligation to report is the BCBA's individual legal and ethical duty, not contingent on supervisor approval. Choice B is incorrect because mandated reporters are not required or expected to conduct their own investigations — doing so could compromise the official investigation and may re-traumatize the child. Choice D is incorrect because consulting a physician before reporting is not required and could delay the report; the BCBA's obligation is to report reasonable suspicion, and medical confirmation is not a prerequisite.`,
  },
];
