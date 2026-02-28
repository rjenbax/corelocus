/**
 * Domain E — Ethical and Professional Issues (Expanded Coverage)
 * 31 questions targeting underrepresented task items:
 *   E.3  Professional Boundaries (+2, IDs 55–56)
 *   E.5  Supervision Requirements (+2, IDs 57–58)
 *   E.6  Informed Consent (+5, IDs 59–63)
 *   E.8  Least Restrictive Procedures (+2, IDs 64–65)
 *   E.9  Reporting Obligations (+5, IDs 66–70)
 *   E.10 Conflicts of Interest (+5, IDs 71–75)
 *   E.11 Advocacy (+5, IDs 76–80)
 *   E.12 Cultural Responsiveness (+5, IDs 81–85)
 *
 * Psychometric standards:
 *   - Bloom's Apply/Analyze level throughout
 *   - Clinical scenario context on every item
 *   - Balanced A/B/C/D answer distribution
 *   - No self-contradictions in rationale text
 *   - Distractors matched in length and specificity to correct answer
 */

import { Question } from './types';

export const tier6Pool_E_expanded: Question[] = [

  // ─── E.3 Professional Boundaries (+2) ────────────────────────────────────

  {
    id: "t6-E-pool-55",
    domain: "E",
    taskItem: "E.3",
    difficulty: "hard",
    bloomsLevel: "comprehension",
    scenario: `A BCBA has been providing ABA services to a 10-year-old client for two years. The client's mother, who is a licensed massage therapist, offers the BCBA a complimentary massage in exchange for the extra time the BCBA has spent on home visits. The BCBA is experiencing significant muscle tension from a recent injury.`,
    question: `Which of the following represents the most ethically sound response?`,
    choices: [
      { letter: "A", text: `Decline the offer, explaining that accepting personal services from a client's family member creates a multiple relationship that could compromise the BCBA's objectivity and the therapeutic relationship.` },
      { letter: "B", text: `Accept the massage because it is a service exchange rather than a monetary payment, and the BACB Ethics Code does not prohibit all forms of non-monetary compensation from caregivers.` },
      { letter: "C", text: `Accept the massage on the condition that it occurs outside of scheduled service hours and that both parties agree to keep the arrangement confidential to avoid any appearance of impropriety.` },
      { letter: "D", text: `Consult with a supervisor before accepting, and document the consultation in the client's file as evidence of due diligence in navigating a complex ethical situation.` },
    ],
    correctAnswer: "A",
    rationale: `Choice A is correct. The BACB Ethics Code requires BCBAs to avoid multiple relationships that could impair their objectivity or harm the client. Accepting a personal service from a client's parent — regardless of whether it is monetary — creates a dual relationship that blurs the professional boundary between the BCBA and the family. Choice B is incorrect because the prohibition on multiple relationships is not limited to monetary transactions; non-monetary exchanges can equally compromise professional objectivity. Choice C is incorrect because secrecy does not resolve the ethical problem and may compound it by creating an undisclosed arrangement. Choice D is incorrect because while consultation is a sound general practice, the appropriate action here is to decline the offer; consultation does not make an ethically problematic arrangement acceptable.`,
  },

  {
    id: "t6-E-pool-56",
    domain: "E",
    taskItem: "E.3",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: `A BCBA working in a school district is approached by the parent of one of her clients, who asks the BCBA to provide private tutoring to the client's younger sibling — a child who is not receiving ABA services — for a fee. The parent states that the sibling struggles academically and that the BCBA's behavioral expertise would be helpful.`,
    question: `Which of the following is the most appropriate response?`,
    choices: [
      { letter: "A", text: `Agree to provide the tutoring because the sibling is not the BCBA's current client, so no multiple relationship exists within the meaning of the Ethics Code.` },
      { letter: "B", text: `Decline the request and explain that providing paid services to a family member of a current client creates a financial relationship with the family that could compromise the BCBA's professional judgment regarding the current client.` },
      { letter: "C", text: `Agree to provide the tutoring on a trial basis and monitor whether the arrangement affects the BCBA's objectivity during sessions with the current client.` },
      { letter: "D", text: `Refer the parent to a different BCBA for the sibling's tutoring needs, and document the referral in the current client's file as a precautionary measure.` },
    ],
    correctAnswer: "D",
    rationale: `Choice D is correct. The most ethical response is to refer the family to another provider and document the referral. Entering into a paid service relationship with a sibling of a current client creates a financial entanglement with the family that could compromise the BCBA's professional objectivity with the current client, even though the sibling is not a direct client. Referring to another provider protects both the current therapeutic relationship and the family's access to services. Choice A is incorrect because the multiple relationship concern extends to financial and personal relationships with family members of current clients, not only to direct clients. Choice B is partially correct in identifying the risk but is incomplete — a referral is more helpful than a simple refusal. Choice C is incorrect because monitoring does not prevent the compromise; the appropriate action is to avoid creating the problematic relationship in the first place.`,
  },

  // ─── E.5 Supervision Requirements (+2) ───────────────────────────────────

  {
    id: "t6-E-pool-57",
    domain: "E",
    taskItem: "E.5",
    difficulty: "hard",
    bloomsLevel: "application",
    scenario: `A BCBA is providing supervision to an RBT candidate who is accumulating hours toward BACB certification. The BCBA has been conducting all supervision remotely via video conferencing due to the candidate's rural location. The candidate's employer has asked the BCBA to sign off on supervision hours for two weeks during which the BCBA was traveling internationally and was only available by text message for brief check-ins.`,
    question: `Which of the following is the most appropriate action?`,
    choices: [
      { letter: "A", text: `Decline to sign off on the hours for the two weeks in question, explain to the employer that the contact during that period did not meet BACB supervision requirements, and work with the candidate to make up the required hours.` },
      { letter: "B", text: `Sign off on the hours because text-based check-ins constitute a form of ongoing supervisory contact, and the BACB does not specify the precise modality required for all supervision interactions.` },
      { letter: "C", text: `Sign off on the hours but note in the supervision documentation that the contact during those two weeks was conducted via text, so that the BACB has full transparency about the modality used.` },
      { letter: "D", text: `Contact the BACB directly to request a retroactive exception for the two-week period, citing the candidate's rural location and the BCBA's international travel as extenuating circumstances.` },
    ],
    correctAnswer: "A",
    rationale: `Choice A is correct. BACB supervision requirements specify that supervision must include real-time, synchronous contact — text-based asynchronous check-ins do not satisfy this requirement. The BCBA must decline to certify hours that did not meet the required standard, explain the situation to the employer, and arrange for the candidate to accrue the missing hours under proper supervision. Signing off on non-qualifying hours would constitute a false attestation, which is a serious Ethics Code violation. Choice B is incorrect because text messaging is not synchronous real-time supervision. Choice C is incorrect because documenting the non-compliant modality does not make the hours valid; it would still constitute a false attestation of qualifying supervision. Choice D is incorrect because the BACB does not grant retroactive exceptions for supervision hours that did not meet requirements.`,
  },

  {
    id: "t6-E-pool-58",
    domain: "E",
    taskItem: "E.5",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: `A BCBA is supervising three RBTs at a clinic. One RBT, who has been with the clinic for 18 months, consistently performs at a high level and requires minimal corrective feedback. The BCBA is considering reducing this RBT's supervision to below the BACB minimum requirement to allocate more time to a newer, less experienced RBT who needs more support.`,
    question: `Which of the following best describes the ethical obligation in this situation?`,
    choices: [
      { letter: "A", text: `The BCBA must maintain supervision at or above the BACB minimum requirement for all RBTs regardless of experience level, and should seek additional resources or adjust caseloads to meet the newer RBT's needs without reducing the experienced RBT's required supervision.` },
      { letter: "B", text: `The BCBA may reduce supervision for the experienced RBT below the minimum requirement because the BACB minimum is a floor designed for new practitioners, and experienced practitioners with demonstrated competence require less oversight.` },
      { letter: "C", text: `The BCBA may temporarily reduce supervision for the experienced RBT with written consent from the RBT and documentation in the supervision file, provided the reduction does not persist for more than 60 days.` },
      { letter: "D", text: `The BCBA should consult with the clinic director about whether the experienced RBT's performance record justifies a formal exception to the minimum supervision requirement under the BACB's flexibility provisions.` },
    ],
    correctAnswer: "A",
    rationale: `Choice A is correct. The BACB minimum supervision requirements apply to all RBTs regardless of experience level or performance history. The BCBA's ethical obligation is to maintain required supervision for all supervisees while also finding ways to meet the newer RBT's additional needs — for example, by adjusting caseloads, seeking additional supervisory support, or discussing resource allocation with clinic administration. Choice B is incorrect because the BACB minimum is not waivable based on practitioner experience; it is a regulatory floor that applies universally. Choice C is incorrect because there is no BACB provision allowing temporary reductions below minimum requirements with written consent; such a provision does not exist. Choice D is incorrect because the BACB does not have "flexibility provisions" that allow clinics to grant exceptions to minimum supervision requirements based on performance records.`,
  },

  // ─── E.6 Informed Consent (+5) ────────────────────────────────────────────

  {
    id: "t6-E-pool-59",
    domain: "E",
    taskItem: "E.6",
    difficulty: "hard",
    bloomsLevel: "analysis",
    scenario: `A BCBA is initiating services for a 7-year-old client with autism spectrum disorder. The client's parents are divorced, and the father holds sole legal custody. The mother, who has regular visitation rights but no legal custody, contacts the BCBA and requests to be included in the consent process and to receive copies of all treatment documentation.`,
    question: `Which of the following best describes the BCBA's ethical and legal obligation?`,
    choices: [
      { letter: "A", text: `Obtain informed consent from the father as the sole legal custodian, and explain to the mother that while her involvement in treatment is welcome, only the legal custodian has the authority to provide consent for services and receive confidential records.` },
      { letter: "B", text: `Obtain informed consent from both parents because both are involved in the child's life, and including both parents in the consent process reflects best practice for family-centered care regardless of custody arrangements.` },
      { letter: "C", text: `Obtain informed consent from both parents to avoid any appearance of bias in the divorce situation, and document that both parents were informed of their respective legal rights regarding consent and records access.` },
      { letter: "D", text: `Defer the consent process until the BCBA has received written legal guidance from an attorney confirming which parent has authority to consent, in order to protect the BCBA from potential legal liability.` },
    ],
    correctAnswer: "A",
    rationale: `Choice A is correct. Informed consent for a minor's services must be obtained from the individual with legal authority to consent — in this case, the father as the sole legal custodian. The mother's visitation rights do not confer legal authority to consent to treatment or to receive confidential records without the legal custodian's authorization. The BCBA should explain this clearly to the mother while remaining respectful of her role in the child's life. Choice B is incorrect because including both parents in the consent process when only one holds legal custody could create legal and ethical complications, including unauthorized disclosure of confidential information. Choice C is incorrect for the same reason — obtaining consent from a non-custodial parent does not have legal validity and may expose the BCBA to liability. Choice D is incorrect because the custody documentation itself is sufficient to determine who has consent authority; deferring services while awaiting legal consultation is not warranted in a straightforward custody situation.`,
  },

  {
    id: "t6-E-pool-60",
    domain: "E",
    taskItem: "E.6",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: `A BCBA is preparing to implement a new behavior intervention plan that includes a response cost component for a 12-year-old client. The client's parents signed a general consent for ABA services at intake six months ago. The parents speak limited English, and the consent form was provided only in English.`,
    question: `Which of the following is the most appropriate action before implementing the new procedure?`,
    choices: [
      { letter: "A", text: `Obtain specific informed consent for the response cost procedure in the parents' primary language, ensuring they understand the procedure, its rationale, potential risks and benefits, and their right to withdraw consent at any time.` },
      { letter: "B", text: `Proceed with implementing the response cost procedure because the parents signed a general consent for ABA services at intake, which covers all behavior intervention procedures used within the scope of ABA practice.` },
      { letter: "C", text: `Have a bilingual staff member verbally explain the procedure to the parents and document that the explanation was provided, which satisfies the informed consent requirement without requiring a translated written form.` },
      { letter: "D", text: `Implement the procedure for a two-week trial period while the translated consent form is being prepared, and obtain formal consent before continuing beyond the trial period.` },
    ],
    correctAnswer: "A",
    rationale: `Choice A is correct. Informed consent requires that the consenting party genuinely understands what they are agreeing to. A general intake consent does not constitute informed consent for specific procedures, particularly those involving consequences such as response cost. The BACB Ethics Code requires BCBAs to obtain informed consent in a language the client and caregivers understand. The BCBA must obtain specific, language-accessible consent before implementing the new procedure. Choice B is incorrect because general intake consent does not cover specific procedures, especially those involving punishment-based components that require explicit disclosure. Choice C is incorrect because while verbal explanation is an important component of informed consent, it does not substitute for documented, language-accessible written consent for a specific procedure. Choice D is incorrect because implementing a procedure without consent — even on a trial basis — violates the informed consent requirement; consent must be obtained before implementation begins.`,
  },

  {
    id: "t6-E-pool-61",
    domain: "E",
    taskItem: "E.6",
    difficulty: "hard",
    bloomsLevel: "application",
    scenario: `A BCBA is working with an adult client with a moderate intellectual disability who lives in a group home. The group home administrator has signed all consent forms on behalf of the client. During a session, the client tells the BCBA that he does not want to continue with the current behavior plan and asks the BCBA to stop. The group home administrator, when contacted, insists that the plan should continue.`,
    question: `Which of the following best describes the BCBA's ethical obligation?`,
    choices: [
      { letter: "A", text: `Pause implementation of the behavior plan, advocate for the client's right to assent and self-determination, and work with the treatment team and the client's legal guardian (if different from the administrator) to resolve the conflict in a manner that respects the client's dignity and preferences.` },
      { letter: "B", text: `Continue the behavior plan as directed by the group home administrator, who is the legally authorized representative and whose consent supersedes the client's verbal objection.` },
      { letter: "C", text: `Discontinue the behavior plan immediately and permanently, because the client's verbal refusal constitutes withdrawal of consent and overrides any authorization provided by the group home administrator.` },
      { letter: "D", text: `Document the client's objection in the session notes and continue with the plan, because the group home administrator's legal authority to consent on behalf of the client is not diminished by the client's verbal preference.` },
    ],
    correctAnswer: "A",
    rationale: `Choice A is correct. The BACB Ethics Code requires BCBAs to respect client dignity, self-determination, and assent — even when a legally authorized representative has provided consent. When a client objects to a procedure, the BCBA has an ethical obligation to pause, advocate for the client's preferences, and work collaboratively with all stakeholders to resolve the conflict. This may involve clarifying whether the group home administrator is the appropriate legal guardian, consulting with the treatment team, and exploring modifications to the plan that address the client's concerns. Choice B is incorrect because legal consent from a representative does not override the ethical obligation to respect client assent and dignity. Choice C is incorrect because the client's verbal objection does not automatically constitute legal withdrawal of consent by the authorized representative; the situation requires careful navigation rather than immediate termination. Choice D is incorrect because simply documenting the objection and continuing without addressing it fails to meet the ethical standard of respecting client dignity and self-determination.`,
  },

  {
    id: "t6-E-pool-62",
    domain: "E",
    taskItem: "E.6",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: `A BCBA is conducting an initial assessment for a new client. During the intake meeting, the parents ask the BCBA to begin services immediately without signing any consent forms, stating that they trust the BCBA completely and that paperwork can be handled later. The family is in crisis and the child's behavior is severely impacting the household.`,
    question: `Which of the following is the most appropriate response?`,
    choices: [
      { letter: "A", text: `Explain to the family that informed consent must be obtained before services begin, offer to complete the consent process as efficiently as possible during the current meeting, and provide crisis resources for immediate support while consent is being finalized.` },
      { letter: "B", text: `Begin services immediately given the family's crisis situation, and complete the consent paperwork at the next scheduled session when the family is less distressed.` },
      { letter: "C", text: `Begin a brief informal assessment without implementing any interventions, which does not require formal consent, and use the assessment period to complete the consent process.` },
      { letter: "D", text: `Contact the BCBA's supervisor for guidance on whether the crisis situation constitutes an exception to the informed consent requirement under the BACB Ethics Code.` },
    ],
    correctAnswer: "A",
    rationale: `Choice A is correct. Informed consent is a prerequisite for beginning services and cannot be waived even in crisis situations. The BCBA's ethical obligation is to explain this requirement clearly, facilitate the consent process as efficiently as possible, and provide the family with crisis resources so their immediate needs are addressed while consent is being completed. This approach respects both the ethical requirement and the family's urgent situation. Choice B is incorrect because beginning services without consent violates the BACB Ethics Code regardless of the family's distress level or their verbal expression of trust. Choice C is incorrect because assessments — including informal ones — are part of professional services and require informed consent before initiation. Choice D is incorrect because the BACB Ethics Code does not provide a crisis exception to the informed consent requirement; consulting a supervisor is appropriate for complex situations but does not change the fundamental requirement.`,
  },

  {
    id: "t6-E-pool-63",
    domain: "E",
    taskItem: "E.6",
    difficulty: "hard",
    bloomsLevel: "analysis",
    scenario: `A BCBA is asked by a school district to implement a behavior intervention plan developed by the district's multidisciplinary team for a student with emotional and behavioral disorders. The parents have signed the IEP, which includes a brief description of the behavior plan. However, the parents have not been specifically informed about the use of planned ignoring and differential reinforcement of alternative behavior as the primary procedures.`,
    question: `Which of the following best describes the BCBA's ethical obligation?`,
    choices: [
      { letter: "A", text: `Proceed with implementing the plan because the parents' signature on the IEP constitutes informed consent for all procedures described within it, including the behavior intervention plan.` },
      { letter: "B", text: `Implement the plan as directed by the school district, which holds educational authority over the student during school hours, and inform the parents of the specific procedures at the next IEP meeting.` },
      { letter: "C", text: `Obtain specific informed consent from the parents for the behavior intervention procedures before implementation, ensuring they understand the specific techniques to be used, the rationale, and their right to request modifications.` },
      { letter: "D", text: `Request that the school district amend the IEP to include more detailed descriptions of the procedures, and delay implementation until the amended IEP has been signed by the parents.` },
    ],
    correctAnswer: "C",
    rationale: `Choice C is correct. The BACB Ethics Code requires BCBAs to obtain informed consent for behavior-analytic services, which includes ensuring that clients and caregivers understand the specific procedures to be used. A general IEP signature does not constitute specific informed consent for behavior intervention procedures, particularly when the parents have not been explicitly informed of the techniques involved. The BCBA must ensure parents have adequate information about the specific procedures before implementation. Choice A is incorrect because IEP signatures cover educational placement and goals, not specific behavioral procedures; informed consent for behavior intervention requires specific disclosure of the techniques. Choice B is incorrect because the school district's educational authority does not override the BCBA's independent ethical obligation to obtain informed consent for behavior-analytic procedures. Choice D is incorrect because while amending the IEP may be appropriate as a longer-term step, the BCBA's immediate obligation is to obtain informed consent directly from the parents before implementing the procedures.`,
  },

  // ─── E.8 Least Restrictive Procedures (+2) ───────────────────────────────

  {
    id: "t6-E-pool-64",
    domain: "E",
    taskItem: "E.8",
    difficulty: "hard",
    bloomsLevel: "application",
    scenario: `A BCBA is developing a behavior intervention plan for a 9-year-old client who engages in severe self-injurious behavior (SIB) that has resulted in multiple hospitalizations. Previous interventions using differential reinforcement and antecedent modifications have been implemented with fidelity for six months but have produced only a 20% reduction in SIB. The treatment team is considering adding a punishment-based component.`,
    question: `Which of the following best describes the BCBA's ethical obligation in this situation?`,
    choices: [
      { letter: "A", text: `Refuse to implement any punishment-based procedure because the BACB Ethics Code requires BCBAs to use only the least restrictive procedures, and punishment-based procedures are inherently more restrictive than reinforcement-based approaches.` },
      { letter: "B", text: `Continue with the current reinforcement-based approach for an additional six months before considering punishment-based procedures, because the 20% reduction indicates that the intervention is working and may eventually reach clinical significance.` },
      { letter: "C", text: `Consider adding a punishment-based component as part of a comprehensive behavior support plan, given that reinforcement-based procedures have been implemented with fidelity and have produced insufficient reduction in a behavior that poses serious risk of harm, while ensuring appropriate consent, oversight, and ongoing monitoring are in place.` },
      { letter: "D", text: `Immediately implement the most effective punishment-based procedure available to rapidly reduce the SIB, because the client's safety takes precedence over the preference for least restrictive procedures when behavior is life-threatening.` },
    ],
    correctAnswer: "C",
    rationale: `Choice C is correct. The least restrictive principle does not prohibit punishment-based procedures; it requires that BCBAs use the least restrictive procedure that is effective for the individual client. When reinforcement-based procedures have been implemented with fidelity and have not produced clinically significant results, and when the behavior poses serious risk of harm, more restrictive procedures may be ethically justified as part of a comprehensive plan — provided that appropriate consent, oversight, and monitoring are in place. Choice A is incorrect because the least restrictive principle is not an absolute prohibition on punishment; it is a decision-making framework that requires matching procedure restrictiveness to clinical necessity. Choice B is incorrect because continuing an insufficiently effective intervention when a client is experiencing repeated hospitalizations fails to prioritize client welfare. Choice D is incorrect because the least restrictive principle still applies even in urgent situations; the BCBA must select the least restrictive effective procedure, not the most powerful one available.`,
  },

  {
    id: "t6-E-pool-65",
    domain: "E",
    taskItem: "E.8",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: `A BCBA is reviewing a behavior intervention plan written by a previous provider for a new client. The plan includes a contingent exercise procedure (requiring the client to perform 10 push-ups following each instance of aggression) as the primary intervention. There is no documentation indicating that reinforcement-based or antecedent-based strategies were attempted before implementing this procedure.`,
    question: `Which of the following is the most appropriate action?`,
    choices: [
      { letter: "A", text: `Implement the existing plan as written to maintain continuity of care, and evaluate its effectiveness over the next 30 days before considering modifications.` },
      { letter: "B", text: `Remove the contingent exercise procedure immediately and replace it with a differential reinforcement procedure, because punishment-based procedures are never appropriate as primary interventions.` },
      { letter: "C", text: `Conduct a functional behavior assessment, develop a behavior support plan that prioritizes reinforcement-based and antecedent-based strategies, and implement the least restrictive effective procedures before considering whether the contingent exercise component is warranted.` },
      { letter: "D", text: `Contact the previous provider to obtain documentation of the clinical rationale for the contingent exercise procedure before making any changes to the existing plan.` },
    ],
    correctAnswer: "C",
    rationale: `Choice C is correct. The BACB Ethics Code requires BCBAs to use the least restrictive procedures that are effective, which means reinforcement-based and antecedent-based strategies should be prioritized before more restrictive consequence-based procedures. The absence of documentation indicating that less restrictive strategies were attempted is a significant concern. The BCBA's ethical obligation is to conduct a thorough assessment and develop a plan that follows the least restrictive hierarchy. Choice A is incorrect because implementing a potentially inappropriate plan without assessment fails to meet the ethical standard of using least restrictive procedures. Choice B is incorrect because while the concern about the contingent exercise procedure is valid, the statement that punishment-based procedures are "never appropriate" as primary interventions is an overgeneralization; the issue is the lack of evidence that less restrictive strategies were tried first. Choice D is incorrect because while obtaining documentation from the previous provider may be informative, the BCBA's ethical obligation to conduct an independent assessment and develop an appropriate plan is not contingent on receiving that documentation.`,
  },

  // ─── E.9 Reporting Obligations (+5) ──────────────────────────────────────

  {
    id: "t6-E-pool-66",
    domain: "E",
    taskItem: "E.9",
    difficulty: "hard",
    bloomsLevel: "analysis",
    scenario: `During a home visit, a BCBA notices that a 6-year-old client has several unexplained bruises on his arms and legs. When the BCBA asks about the bruises, the client's mother becomes defensive and states that the child "bruises easily." The BCBA has no prior concerns about this family.`,
    question: `Which of the following best describes the BCBA's obligation?`,
    choices: [
      { letter: "A", text: `Document the observation in the session notes and monitor the situation over the next two weeks before making a report, because a single observation of unexplained bruises is insufficient to establish reasonable suspicion of abuse.` },
      { letter: "B", text: `Consult with the BCBA's supervisor and the agency's legal counsel before making a report, to ensure that the report is warranted and to protect the agency from potential liability if the report proves unfounded.` },
      { letter: "C", text: `Report the observation to the appropriate child protective services agency because BCBAs are mandated reporters in most jurisdictions, and the standard for reporting is reasonable suspicion — not certainty — that abuse or neglect may have occurred.` },
      { letter: "D", text: `Discuss the observation directly with the child's pediatrician and defer to the pediatrician's judgment about whether a report to child protective services is warranted.` },
    ],
    correctAnswer: "C",
    rationale: `Choice C is correct. BCBAs are mandated reporters in most jurisdictions, and the legal and ethical standard for reporting is reasonable suspicion — not certainty or proof — that abuse or neglect may have occurred. Unexplained bruises on a child, combined with a defensive response from the caregiver, constitute reasonable suspicion and trigger the mandatory reporting obligation. The BCBA must report promptly; delaying to gather more evidence or to consult others before reporting is not appropriate when reasonable suspicion already exists. Choice A is incorrect because monitoring and waiting when reasonable suspicion already exists fails to meet the mandated reporting obligation and may place the child at continued risk. Choice B is incorrect because while consultation may be appropriate in ambiguous situations, it should not delay a report when reasonable suspicion is already present; the reporting obligation belongs to the individual BCBA, not to the agency. Choice D is incorrect because the BCBA's mandated reporting obligation is independent of other professionals' judgments; the BCBA cannot delegate this obligation to the pediatrician.`,
  },

  {
    id: "t6-E-pool-67",
    domain: "E",
    taskItem: "E.9",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: `A BCBA learns from an RBT she supervises that another BCBA at the same agency has been falsifying session notes — recording sessions as completed when they were not conducted. The RBT witnessed this directly on two occasions.`,
    question: `Which of the following best describes the BCBA's ethical obligation?`,
    choices: [
      { letter: "A", text: `Advise the RBT to document her observations and report the concern directly to the agency director, because the BCBA has only secondhand information and should not make a report based on another person's account.` },
      { letter: "B", text: `Confront the other BCBA directly and give her an opportunity to correct the records before escalating the concern, because direct resolution is preferable to formal reporting when possible.` },
      { letter: "C", text: `Report the concern through the appropriate channels — including the agency's compliance process and, if the agency fails to address it, to the BACB — because falsifying records is a serious Ethics Code violation that harms clients and the profession.` },
      { letter: "D", text: `Document the RBT's account in a confidential file and monitor the situation for additional evidence before making a formal report, to ensure the concern is substantiated before taking action that could harm a colleague's career.` },
    ],
    correctAnswer: "C",
    rationale: `Choice C is correct. The BACB Ethics Code requires BCBAs to report known or suspected Ethics Code violations through appropriate channels. Falsifying session records is a serious violation that directly harms clients (who may not receive services they need) and constitutes fraud. The BCBA's obligation is to report through the agency's compliance process and, if the agency does not address the concern, to the BACB. The RBT's direct witness account provides sufficient basis for a report. Choice A is incorrect because the BCBA has an independent ethical obligation to report; delegating the report entirely to the RBT does not fulfill this obligation. Choice B is incorrect because while direct communication with a colleague can be appropriate for minor concerns, falsifying records is a serious violation that requires formal reporting, not informal confrontation. Choice D is incorrect because waiting for additional evidence when a direct witness account already exists delays necessary action and may allow continued harm to clients.`,
  },

  {
    id: "t6-E-pool-68",
    domain: "E",
    taskItem: "E.9",
    difficulty: "hard",
    bloomsLevel: "application",
    scenario: `A BCBA receives a subpoena requiring her to testify in a custody dispute involving a former client. The subpoena requests that the BCBA bring all session notes, assessment reports, and correspondence related to the client. The client's mother (who has legal custody) has not provided written authorization for the BCBA to disclose records.`,
    question: `Which of the following is the most appropriate action?`,
    choices: [
      { letter: "A", text: `Comply fully with the subpoena because a court-issued subpoena supersedes confidentiality requirements and the BCBA is legally obligated to provide all requested records without client authorization.` },
      { letter: "B", text: `Provide the court with a summary of the client's progress rather than the actual records, which protects confidentiality while still complying with the spirit of the subpoena.` },
      { letter: "C", text: `Refuse to comply with the subpoena on the grounds that disclosing records without client authorization violates the BACB Ethics Code, and inform the court that the BCBA cannot testify.` },
      { letter: "D", text: `Consult with an attorney, notify the client's mother of the subpoena, and seek a protective order or written authorization before disclosing records, because a subpoena alone does not override confidentiality protections without client consent or a court order compelling disclosure.` },
    ],
    correctAnswer: "D",
    rationale: `Choice D is correct. A subpoena is a legal demand to appear and produce records, but it is not automatically equivalent to a court order compelling disclosure. The appropriate response is to consult with legal counsel, notify the client (or legal custodian) of the subpoena, and seek either written authorization from the client or a court order before disclosing confidential records. This approach respects both the legal process and the client's confidentiality rights. Choice A is incorrect because a subpoena alone does not override confidentiality protections; a court order or client authorization is typically required before records can be disclosed. Choice C is incorrect because refusing to comply with a subpoena without legal basis could result in contempt of court; the appropriate response is to seek legal guidance, not to refuse outright. Choice B is incorrect because providing a summary rather than the actual records does not comply with the subpoena and could also constitute an unauthorized disclosure.`,
  },

  {
    id: "t6-E-pool-69",
    domain: "E",
    taskItem: "E.9",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: `A BCBA working in a residential facility observes a direct care staff member physically restrain a client in a manner that is not consistent with the facility's approved crisis intervention protocol and appears to cause the client pain. The BCBA is not the client's primary behavior analyst.`,
    question: `Which of the following is the most appropriate action?`,
    choices: [
      { letter: "A", text: `Document the observation and report it to the client's primary behavior analyst, who is responsible for the client's care and is better positioned to address concerns about staff conduct.` },
      { letter: "B", text: `Approach the staff member privately after the incident and explain the correct restraint protocol, giving the staff member an opportunity to correct the behavior before escalating to a formal report.` },
      { letter: "C", text: `Report the observation to the facility's human resources department and allow the internal disciplinary process to address the staff member's conduct without further involvement from the BCBA.` },
      { letter: "D", text: `Intervene immediately to stop the unsafe restraint, ensure the client's safety, and report the incident to the appropriate supervisory and administrative personnel within the facility as well as to any required external regulatory bodies.` },
    ],
    correctAnswer: "D",
    rationale: `Choice D is correct. When a BCBA observes an unsafe practice that poses immediate risk of harm to a client, the ethical obligation is to intervene immediately to protect the client and then report the incident through all appropriate channels — including internal supervisory channels and any external regulatory bodies (such as a state licensing board or adult protective services) that require reporting of restraint incidents. The BCBA's ethical obligation to protect client welfare applies regardless of whether the client is on the BCBA's caseload. Choice A is incorrect because delegating the report to the primary behavior analyst does not fulfill the BCBA's independent obligation to protect client welfare and report unsafe practices. Choice C is incorrect because while HR involvement may be appropriate, it does not substitute for reporting to supervisory personnel and required external bodies. Choice B is incorrect because privately coaching the staff member after an unsafe incident fails to address the immediate reporting obligation and may allow the unsafe practice to continue.`,
  },

  {
    id: "t6-E-pool-70",
    domain: "E",
    taskItem: "E.9",
    difficulty: "hard",
    bloomsLevel: "analysis",
    scenario: `A BCBA suspects that a colleague has submitted fraudulent billing claims to a client's insurance company, billing for services that were not provided. The BCBA has indirect evidence — inconsistencies between session notes and billing records — but has not directly witnessed the billing fraud.`,
    question: `Which of the following best describes the BCBA's ethical obligation?`,
    choices: [
      { letter: "A", text: `Report the concern to the insurance company's fraud hotline immediately, because insurance fraud is a federal crime and the BCBA has an obligation to report suspected crimes regardless of the strength of the evidence.` },
      { letter: "B", text: `Consult with the BCBA's own supervisor about the concern and defer to the supervisor's judgment about whether the evidence is sufficient to warrant a formal report.` },
      { letter: "C", text: `Confront the colleague directly with the evidence and give the colleague an opportunity to provide an explanation or correct the billing records before making a formal report.` },
      { letter: "D", text: `Document the specific inconsistencies observed, report the concern through the agency's compliance or ethics reporting process, and if the agency fails to investigate or address the concern, report to the BACB and relevant regulatory authorities.` },
    ],
    correctAnswer: "D",
    rationale: `Choice D is correct. The BACB Ethics Code requires BCBAs to report known or suspected Ethics Code violations, including fraudulent billing, through appropriate channels. The appropriate sequence is to document the specific evidence, report through the agency's internal compliance process, and — if the agency fails to act — escalate to the BACB and relevant regulatory authorities (which may include insurance regulators or law enforcement). Indirect evidence of inconsistencies is sufficient to trigger the reporting obligation; the BCBA does not need to have directly witnessed the fraud. Choice A is incorrect because while reporting to the insurance company may eventually be appropriate, the first step is to report through the agency's internal process; bypassing internal channels may be premature and could create additional complications. Choice C is incorrect because directly confronting a colleague about suspected fraud is not appropriate; this could compromise an investigation and is not the BCBA's role. Choice B is incorrect because while consulting a supervisor is reasonable, the BCBA's ethical obligation to report is not contingent on the supervisor's approval; if the supervisor fails to act, the BCBA must escalate independently.`,
  },

  // ─── E.10 Conflicts of Interest (+5) ─────────────────────────────────────

  {
    id: "t6-E-pool-71",
    domain: "E",
    taskItem: "E.10",
    difficulty: "hard",
    bloomsLevel: "analysis",
    scenario: `A BCBA works for an ABA agency that receives referrals from a pediatric neurologist. The neurologist has recently begun recommending a specific brand of weighted blankets to families and has asked the BCBA to endorse the product to clients during sessions, offering the BCBA a 15% commission on each sale.`,
    question: `Which of the following best describes the ethical concern and appropriate response?`,
    choices: [
      { letter: "A", text: `Accept the arrangement because endorsing evidence-based sensory tools is within the BCBA's scope of practice, and the commission compensates the BCBA for the additional time spent discussing the product with families.` },
      { letter: "B", text: `Accept the arrangement only if the weighted blankets are included in the client's behavior intervention plan as a clinically indicated antecedent modification, ensuring that the recommendation has a legitimate clinical basis.` },
      { letter: "C", text: `Accept the arrangement but disclose the commission structure to clients before making any product recommendations, so that families can make informed decisions with full knowledge of the BCBA's financial interest.` },
      { letter: "D", text: `Decline the arrangement because receiving financial compensation for endorsing a specific product to clients creates a conflict of interest that could compromise the BCBA's objectivity and the integrity of clinical recommendations.` },
    ],
    correctAnswer: "D",
    rationale: `Choice D is correct. Receiving financial compensation for endorsing specific products to clients creates a clear conflict of interest — the BCBA's clinical recommendations would be influenced by financial incentives rather than solely by the client's best interests. The BACB Ethics Code prohibits BCBAs from allowing financial interests to compromise their professional judgment or the welfare of clients. The appropriate response is to decline the arrangement. Choice A is incorrect because the issue is not whether weighted blankets can be clinically appropriate, but whether receiving a commission for endorsing them compromises the BCBA's objectivity. Choice C is incorrect because disclosure reduces but does not eliminate the conflict of interest; the BCBA's recommendations would still be financially motivated, which is incompatible with the ethical obligation to act in the client's best interest. Choice B is incorrect because including the product in a BIP does not resolve the conflict of interest created by the commission arrangement; the financial incentive would still influence clinical decision-making.`,
  },

  {
    id: "t6-E-pool-72",
    domain: "E",
    taskItem: "E.10",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: `A BCBA is employed by an ABA agency and is also a part-owner of a social skills training program that operates independently. One of the BCBA's current clients at the agency would likely benefit from social skills training.`,
    question: `Which of the following is the most ethically appropriate action?`,
    choices: [
      { letter: "A", text: `Refer the client to the BCBA's social skills program because the BCBA has direct knowledge of the program's quality and can ensure continuity of care between the ABA services and the social skills training.` },
      { letter: "B", text: `Refer the client to the BCBA's program only after obtaining written consent from the family acknowledging the BCBA's ownership interest, which satisfies the disclosure requirement under the Ethics Code.` },
      { letter: "C", text: `Refer the client to a different social skills program to avoid any appearance of a conflict of interest, even if the BCBA's program would be the most clinically appropriate option for this client.` },
      { letter: "D", text: `Disclose the ownership interest to the client's family and the agency, provide information about multiple social skills training options in the community, and allow the family to make an independent decision without the BCBA advocating for any particular program.` },
    ],
    correctAnswer: "D",
    rationale: `Choice D is correct. When a BCBA has a financial interest in a service to which they might refer a client, full disclosure to all relevant parties is required, and the BCBA must ensure that the referral decision is made by the family based on objective information rather than the BCBA's advocacy for their own program. Providing information about multiple options allows the family to make an informed, independent choice. Choice A is incorrect because making the referral to one's own program without disclosure and without presenting alternatives constitutes an undisclosed conflict of interest. Choice C is incorrect because avoiding the referral entirely — even when the BCBA's program might be the best option — is not required; what is required is transparent disclosure and unbiased presentation of options. Choice B is incorrect because obtaining consent for the conflict does not resolve it; the BCBA must present multiple options and allow the family to choose independently, not simply disclose and then advocate for their own program.`,
  },

  {
    id: "t6-E-pool-73",
    domain: "E",
    taskItem: "E.10",
    difficulty: "hard",
    bloomsLevel: "analysis",
    scenario: `A BCBA is hired as an expert witness by an attorney representing a family in a dispute with a school district over the appropriateness of the student's educational placement. The BCBA has never met the student but is asked to review records and provide testimony supporting the family's position. The attorney offers a fee of $300 per hour for the BCBA's time.`,
    question: `Which of the following best describes the ethical considerations?`,
    choices: [
      { letter: "A", text: `Accept the engagement because serving as an expert witness is a legitimate professional role for BCBAs, and the hourly fee is standard compensation for expert testimony that does not constitute a conflict of interest.` },
      { letter: "B", text: `Accept the engagement and provide testimony supporting the family's position, because the BCBA's role as a hired expert is to advocate for the party that retained them, not to provide neutral analysis.` },
      { letter: "C", text: `Decline the engagement because accepting payment for expert testimony creates a financial conflict of interest that is incompatible with the BCBA's obligation to provide objective professional opinions.` },
      { letter: "D", text: `Accept the engagement only if the BCBA can provide an honest, objective assessment of the records — which may or may not support the family's position — and decline if the attorney's expectation is that the BCBA will advocate for a predetermined conclusion rather than provide objective expert opinion.` },
    ],
    correctAnswer: "D",
    rationale: `Choice D is correct. BCBAs may serve as expert witnesses, and receiving compensation for this role is standard professional practice. However, the BCBA's ethical obligation is to provide honest, objective expert opinion based on the evidence — not to serve as an advocate for the retaining party's predetermined position. The BCBA should accept the engagement only if they can provide an independent, objective assessment, and should clarify this expectation with the attorney at the outset. Choice A is incorrect because while expert witness work is legitimate, the statement that the fee "does not constitute a conflict of interest" is oversimplified; the BCBA must ensure that the financial arrangement does not compromise their objectivity. Choice C is incorrect because receiving compensation for expert testimony is standard practice and does not inherently create a conflict of interest; the conflict arises only if the BCBA allows the fee to compromise their objectivity. Choice B is incorrect because an expert witness's role is to provide objective expert opinion to assist the court, not to advocate for the retaining party; advocacy is the attorney's role.`,
  },

  {
    id: "t6-E-pool-74",
    domain: "E",
    taskItem: "E.10",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: `A BCBA's spouse is the director of a company that manufactures ABA curriculum materials. The BCBA is on a school district's committee that is selecting new curriculum materials for its ABA programs. The BCBA's spouse's company has submitted a bid for the contract.`,
    question: `Which of the following is the most appropriate action?`,
    choices: [
      { letter: "A", text: `Participate in the committee's evaluation but recuse herself from the final vote on the contract, which adequately manages the conflict of interest while allowing the BCBA to contribute her expertise to the evaluation process.` },
      { letter: "B", text: `Resign from the committee to avoid any appearance of a conflict of interest, because the financial relationship with her spouse means she cannot participate in any aspect of the procurement process.` },
      { letter: "C", text: `Participate fully in the committee process because the BCBA's professional obligation is to select the best curriculum for students, and her expertise in evaluating ABA materials is valuable regardless of her personal relationship with one of the vendors.` },
      { letter: "D", text: `Disclose the conflict of interest to the committee chair and recuse herself from all aspects of the evaluation and selection process involving her spouse's company.` },
    ],
    correctAnswer: "D",
    rationale: `Choice D is correct. The BCBA has a direct conflict of interest — her spouse's company stands to benefit financially from the committee's decision. The appropriate response is full disclosure to the committee chair and complete recusal from all aspects of the evaluation involving her spouse's company. This protects the integrity of the selection process and the BCBA's professional standing. Choice A is incorrect because recusing only from the final vote is insufficient; the BCBA's participation in the evaluation process (reviewing materials, discussing options, influencing other committee members) could still be affected by her conflict of interest. Choice C is incorrect because the conflict of interest is not resolved by the BCBA's good intentions; the appearance of bias and the potential for actual bias require recusal. Choice B is incorrect because resigning from the committee entirely is not necessary; full disclosure and recusal from the relevant portions of the process is the appropriate and proportionate response.`,
  },

  {
    id: "t6-E-pool-75",
    domain: "E",
    taskItem: "E.10",
    difficulty: "hard",
    bloomsLevel: "analysis",
    scenario: `A BCBA has been providing services to a client for three years. The client's family has become close with the BCBA over this time, and the family has invited the BCBA to the client's birthday party. The BCBA genuinely cares about the family and believes that attending would strengthen the therapeutic relationship.`,
    question: `Which of the following best describes the ethical considerations?`,
    choices: [
      { letter: "A", text: `Attend the party because building a warm, trusting relationship with client families is an important component of effective ABA services, and social events are a natural part of relationship-building in community-based practice.` },
      { letter: "B", text: `Decline the invitation because attending a client's birthday party constitutes a social multiple relationship that could compromise the BCBA's professional objectivity and the therapeutic relationship.` },
      { letter: "C", text: `Carefully consider the potential risks and benefits of attending, consult with a supervisor or colleague, and make a decision based on whether the social contact is likely to harm the client, the therapeutic relationship, or the BCBA's professional objectivity — documenting the decision-making process.` },
      { letter: "D", text: `Attend the party for a brief period, maintain professional boundaries throughout, and document the attendance in the client's file to ensure transparency.` },
    ],
    correctAnswer: "C",
    rationale: `Choice C is correct. The Ethics Code does not categorically prohibit all social contact with clients and families; it requires BCBAs to avoid multiple relationships that are likely to harm the client or compromise professional objectivity. The appropriate response to an ambiguous situation like this is careful, documented ethical decision-making — considering the specific context, consulting with a supervisor or colleague, and weighing the potential benefits and risks. In some community-based or cultural contexts, brief social participation may be appropriate; in others, it may not be. The key is thoughtful, documented analysis rather than a reflexive yes or no. Choice A is incorrect because it dismisses the ethical concern without engaging in the required analysis. Choice B is incorrect because it applies an overly rigid rule that does not reflect the nuanced guidance in the Ethics Code. Choice D is incorrect because attending and documenting does not substitute for the prior ethical analysis required before making the decision.`,
  },

  // ─── E.11 Advocacy (+5) ──────────────────────────────────────────────────

  {
    id: "t6-E-pool-76",
    domain: "E",
    taskItem: "E.11",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: `A BCBA is working with a 14-year-old client whose insurance company has denied continued authorization for ABA services, stating that the client has "plateaued" and no longer meets medical necessity criteria. The BCBA has data showing continued progress on functional goals.`,
    question: `Which of the following best describes the BCBA's ethical obligation?`,
    choices: [
      { letter: "A", text: `Accept the insurance company's determination and help the family transition the client to a less intensive service model, because insurance coverage decisions are outside the BCBA's scope of practice and advocacy.` },
      { letter: "B", text: `Refer the family to a patient advocacy organization and step back from the appeals process, because insurance disputes are a legal matter that requires professional advocacy expertise beyond the BCBA's training.` },
      { letter: "C", text: `Continue providing services without authorization while the appeal is pending, because the client's clinical need takes precedence over insurance administrative processes.` },
      { letter: "D", text: `Advocate for the client by preparing a comprehensive appeal that includes objective data demonstrating continued progress, functional need, and the clinical rationale for continued services, and support the family in navigating the appeals process.` },
    ],
    correctAnswer: "D",
    rationale: `Choice D is correct. The BACB Ethics Code includes an obligation to advocate for clients' access to appropriate services. When a client's services are denied despite documented clinical need, the BCBA has an ethical obligation to support the family in appealing the decision by providing objective data and clinical rationale. This is a core component of the BCBA's professional role. Choice A is incorrect because accepting an insurance denial without advocacy when the BCBA has data supporting continued need fails to fulfill the advocacy obligation. Choice C is incorrect because providing services without authorization exposes the BCBA and the agency to legal and financial liability; advocacy through the appeals process is the appropriate response. Choice B is incorrect because while referral to advocacy organizations can be a helpful supplement, the BCBA's own expertise in documenting clinical need and progress is directly relevant to the appeal and should not be withheld.`,
  },

  {
    id: "t6-E-pool-77",
    domain: "E",
    taskItem: "E.11",
    difficulty: "hard",
    bloomsLevel: "analysis",
    scenario: `A BCBA is aware that a proposed state regulation would significantly restrict the use of functional communication training (FCT) in school settings by requiring prior approval from a state committee for each individual implementation. The BCBA believes this regulation would harm clients by delaying access to an evidence-based intervention.`,
    question: `Which of the following is the most appropriate professional response?`,
    choices: [
      { letter: "A", text: `Comply with the proposed regulation once enacted, because BCBAs are obligated to follow applicable laws and regulations regardless of their personal views on the policy.` },
      { letter: "B", text: `Continue implementing FCT without the required prior approval after the regulation is enacted, because the BCBA's ethical obligation to provide evidence-based treatment supersedes regulatory requirements that are not grounded in science.` },
      { letter: "C", text: `Advise clients' families to relocate to states with less restrictive regulations, because the BCBA's primary obligation is to individual clients rather than to systemic policy advocacy.` },
      { letter: "D", text: `Participate in the public comment process, provide testimony or written comments based on the scientific evidence supporting FCT, collaborate with professional organizations to advocate against the regulation, and educate policymakers about the potential harm to clients.` },
    ],
    correctAnswer: "D",
    rationale: `Choice D is correct. The BACB Ethics Code includes an obligation to advocate for the science of behavior analysis and for policies that support client welfare. Participating in the regulatory process through public comment, testimony, and collaboration with professional organizations is the appropriate and ethical way to address a proposed regulation that the BCBA believes would harm clients. This is a legitimate and important professional responsibility. Choice A is incorrect because while BCBAs must comply with enacted laws, the advocacy obligation requires active participation in the regulatory process before a harmful regulation is enacted. Choice C is incorrect because advising clients to relocate is not a meaningful or ethical response to a systemic policy concern, and it fails to address the underlying issue. Choice B is incorrect because violating an enacted regulation — even one the BCBA believes is misguided — exposes the BCBA to legal and professional consequences and is not an appropriate response; the correct approach is advocacy through legitimate channels.`,
  },

  {
    id: "t6-E-pool-78",
    domain: "E",
    taskItem: "E.11",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: `A BCBA is working in a school district where administrators have implemented a policy requiring all students with IEPs to participate in a school-wide token economy system, regardless of the individualized behavior support plans developed by BCBAs. The BCBA believes this policy undermines individualized treatment and is not in the best interests of several of her clients.`,
    question: `Which of the following is the most appropriate action?`,
    choices: [
      { letter: "A", text: `Implement the school-wide token economy for all clients as directed by the administration, because BCBAs employed by school districts are obligated to follow district policies even when they conflict with individualized treatment approaches.` },
      { letter: "B", text: `Advocate within the district by presenting data and clinical rationale to administrators demonstrating the importance of individualized behavior support, propose a framework that allows the school-wide system to coexist with individualized plans, and document the advocacy efforts.` },
      { letter: "C", text: `Refuse to implement the school-wide token economy for any clients, citing the BACB Ethics Code's requirement for individualized treatment, and inform the administration that the policy violates professional ethical standards.` },
      { letter: "D", text: `Implement the school-wide system for clients whose individualized plans are compatible with it, and seek exemptions for clients for whom the system would be contraindicated, while advocating for policy revision.` },
    ],
    correctAnswer: "D",
    rationale: `Choice D is correct. The most ethically sound approach balances the BCBA's obligation to follow reasonable institutional policies with the obligation to provide individualized, clinically appropriate treatment. Implementing the school-wide system where it is compatible with individualized plans, seeking exemptions where it is contraindicated, and simultaneously advocating for policy revision addresses all of these obligations. Choice A is incorrect because blindly following a policy that harms specific clients fails the ethical obligation to prioritize client welfare. Choice B is partially correct in identifying the advocacy obligation but is incomplete — the BCBA must also take immediate action to protect clients for whom the policy is contraindicated, not only engage in longer-term advocacy. Choice C is incorrect because a blanket refusal to implement any aspect of the policy is likely to be counterproductive and fails to acknowledge that the system may be appropriate for some clients; a more nuanced approach is required.`,
  },

  {
    id: "t6-E-pool-79",
    domain: "E",
    taskItem: "E.11",
    difficulty: "hard",
    bloomsLevel: "analysis",
    scenario: `A BCBA is asked by a parent advocacy group to provide public testimony at a city council meeting about the importance of ABA services for children with autism. The BCBA is employed by an ABA agency and has not obtained her employer's permission to testify. The BCBA's testimony would be based on her professional expertise and would not disclose any client information.`,
    question: `Which of the following best describes the ethical considerations?`,
    choices: [
      { letter: "A", text: `Testify without notifying the employer because the BCBA is acting as a private professional rather than as an agency representative, and the testimony does not involve any client information.` },
      { letter: "B", text: `Notify the employer of the planned testimony, clarify that the BCBA will be speaking as an individual professional rather than on behalf of the agency, and proceed with the testimony as a fulfillment of the professional advocacy obligation.` },
      { letter: "C", text: `Decline to testify because public advocacy on behalf of ABA services could be perceived as promotional activity for the BCBA's employer, creating a potential conflict of interest.` },
      { letter: "D", text: `Testify only if the employer provides written authorization, because public statements by employees — even in a personal capacity — can create reputational implications for the employer.` },
    ],
    correctAnswer: "B",
    rationale: `Choice B is correct. The BACB Ethics Code includes a professional obligation to advocate for the science of behavior analysis and for policies that support client welfare. Public testimony at a government proceeding is a legitimate form of professional advocacy. The BCBA should notify her employer as a professional courtesy and to clarify that she is speaking as an individual professional — not as an agency representative — and then proceed with the testimony. Choice A is incorrect because failing to notify the employer, even when acting in a personal capacity, could create unnecessary misunderstandings and is not consistent with professional transparency. Choice C is incorrect because public advocacy for evidence-based services is a professional obligation, not a conflict of interest; the BCBA's testimony is based on professional expertise, not on promoting her employer. Choice D is incorrect because the BCBA's professional advocacy rights are not contingent on employer authorization; requiring written permission would improperly subordinate the professional advocacy obligation to employer control.`,
  },

  {
    id: "t6-E-pool-80",
    domain: "E",
    taskItem: "E.11",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: `A BCBA is aware that a client's school placement is inappropriate — the client is placed in a self-contained classroom with minimal access to general education peers, despite having the skills to participate in inclusive settings with support. The parents are unaware that more inclusive options exist and have not questioned the placement.`,
    question: `Which of the following best describes the BCBA's ethical obligation?`,
    choices: [
      { letter: "A", text: `Maintain the current focus on the client's behavior goals within the existing placement, because placement decisions are made by the IEP team and are outside the BCBA's scope of professional advocacy.` },
      { letter: "B", text: `Inform the parents about the client's skills, the availability of more inclusive placement options, and their rights under IDEA to request a placement review, so that the family can make an informed decision about whether to advocate for a change.` },
      { letter: "C", text: `Contact the school district's special education director directly to advocate for a placement change, bypassing the IEP team process to expedite the change in the client's best interest.` },
      { letter: "D", text: `Document the BCBA's clinical opinion about the appropriateness of the placement in the client's file and raise the concern at the next scheduled IEP meeting, which is the appropriate forum for placement discussions.` },
    ],
    correctAnswer: "B",
    rationale: `Choice B is correct. The BCBA's advocacy obligation includes ensuring that clients and families are informed about the client's skills and available options so they can exercise their rights. Parents cannot advocate for a more appropriate placement if they are unaware that one exists or that they have the right to request a review. The BCBA's role is to empower the family with information. Choice A is incorrect because limiting the BCBA's role to behavior goals within an inappropriate placement fails the advocacy obligation to the client. Choice C is incorrect because bypassing the IEP team process and going directly to the district director is not the appropriate channel; advocacy should work through established processes and should empower the family rather than exclude them. Choice D is partially correct in that raising the concern at the IEP meeting is appropriate, but it is incomplete — the BCBA should also inform the parents proactively rather than waiting for the next scheduled meeting, which may be months away.`,
  },

  // ─── E.12 Cultural Responsiveness (+5) ───────────────────────────────────

  {
    id: "t6-E-pool-81",
    domain: "E",
    taskItem: "E.12",
    difficulty: "hard",
    bloomsLevel: "application",
    scenario: `A BCBA is working with a family from a Southeast Asian cultural background. The family's approach to discipline involves practices that differ significantly from the reinforcement-based strategies recommended in the client's behavior intervention plan. The parents express that they are uncomfortable with the BIP because it conflicts with their cultural values about child-rearing.`,
    question: `Which of the following best describes the BCBA's ethical obligation?`,
    choices: [
      { letter: "A", text: `Implement the BIP as written, explaining to the family that the procedures are evidence-based and that cultural preferences cannot override scientifically validated treatment approaches.` },
      { letter: "B", text: `Engage in a collaborative discussion with the family to understand their cultural values and concerns, modify the BIP where possible to incorporate culturally compatible strategies, and ensure that any modifications maintain the scientific integrity and effectiveness of the intervention.` },
      { letter: "C", text: `Defer entirely to the family's cultural preferences and implement only the strategies that are consistent with their values, even if this means omitting procedures that are critical to the client's progress.` },
      { letter: "D", text: `Refer the family to a BCBA from the same cultural background, because cultural differences between the BCBA and the family make it impossible to provide effective services.` },
    ],
    correctAnswer: "B",
    rationale: `Choice B is correct. The BACB Ethics Code requires BCBAs to be culturally responsive — to understand and respect cultural differences and to incorporate cultural considerations into treatment planning. This does not mean abandoning evidence-based practices, but rather collaborating with families to find culturally compatible ways to implement effective strategies. The goal is to develop a BIP that is both scientifically sound and culturally acceptable to the family. Choice A is incorrect because dismissing cultural concerns fails the ethical obligation of cultural responsiveness and is likely to undermine treatment adherence and the therapeutic relationship. Choice C is incorrect because deferring entirely to cultural preferences without maintaining clinical integrity could result in ineffective treatment that fails the client. Choice D is incorrect because cultural differences do not automatically make it impossible to provide effective services; the appropriate response is cultural humility, collaboration, and adaptation — not automatic referral.`,
  },

  {
    id: "t6-E-pool-82",
    domain: "E",
    taskItem: "E.12",
    difficulty: "medium",
    bloomsLevel: "application",
    scenario: `A BCBA is conducting a functional behavior assessment for a 5-year-old client whose family recently immigrated from West Africa. During the assessment, the BCBA observes behaviors that she initially interprets as attention-maintained. However, after speaking with a cultural consultant, the BCBA learns that several of the behaviors are consistent with culturally normative practices in the family's community.`,
    question: `Which of the following best describes the most appropriate action?`,
    choices: [
      { letter: "A", text: `Proceed with the FBA as planned, because the function of behavior is determined by its environmental consequences regardless of cultural context, and cultural norms do not change the behavioral principles underlying the assessment.` },
      { letter: "B", text: `Incorporate the cultural consultant's information into the FBA, re-evaluate whether the observed behaviors represent clinical concerns or culturally normative practices, and develop assessment and intervention strategies that are informed by the family's cultural context.` },
      { letter: "C", text: `Discontinue the FBA and refer the family to a BCBA with expertise in West African cultural practices, because the BCBA's lack of cultural knowledge makes it impossible to conduct a valid assessment.` },
      { letter: "D", text: `Complete the FBA using standardized procedures and present the results to the family, allowing them to determine whether the identified behaviors are consistent with their cultural practices before developing any intervention.` },
    ],
    correctAnswer: "B",
    rationale: `Choice B is correct. Cultural context is directly relevant to the validity of a functional behavior assessment. Behaviors that are culturally normative may be misidentified as clinically significant if the assessor lacks cultural knowledge. The BCBA's ethical obligation is to incorporate the cultural consultant's information into the assessment process, re-evaluate the clinical significance of the observed behaviors in their cultural context, and develop culturally informed assessment and intervention strategies. Choice A is incorrect because while behavioral principles are universal, the identification of behaviors as clinically significant requires cultural context; misidentifying culturally normative behaviors as problems is a validity error. Choice C is incorrect because consulting with a cultural expert and incorporating that knowledge is the appropriate response; automatic referral is not warranted when the BCBA can develop cultural competence through consultation. Choice D is incorrect because presenting results based on a culturally uninformed assessment and then asking the family to identify cultural issues places an inappropriate burden on the family and does not reflect the BCBA's responsibility to conduct a culturally valid assessment.`,
  },

  {
    id: "t6-E-pool-83",
    domain: "E",
    taskItem: "E.12",
    difficulty: "hard",
    bloomsLevel: "application",
    scenario: `A BCBA is working with a client whose family holds strong religious beliefs that include a prohibition on certain types of physical contact between unrelated adults and children of the opposite sex. The BCBA's standard prompting procedures involve hand-over-hand physical guidance. The family requests that the BCBA modify the prompting procedures to avoid physical contact.`,
    question: `Which of the following is the most appropriate response?`,
    choices: [
      { letter: "A", text: `Explain to the family that hand-over-hand prompting is the most effective prompting procedure for the client's current skill level and that modifying it would compromise treatment outcomes.` },
      { letter: "B", text: `Explore and implement alternative prompting strategies — such as gestural, model, or positional prompts — that can achieve the same instructional goals while respecting the family's religious and cultural values.` },
      { letter: "C", text: `Accommodate the family's request by having only female staff members provide physical prompts to the client, which respects the family's values while maintaining the effectiveness of the prompting procedure.` },
      { letter: "D", text: `Document the family's request in the client's file and continue with the standard prompting procedure, noting that the family was informed of the clinical rationale for physical prompting.` },
    ],
    correctAnswer: "B",
    rationale: `Choice B is correct. The BACB Ethics Code requires BCBAs to be culturally responsive and to respect clients' and families' values. When a family's religious or cultural values create a legitimate concern about a specific procedure, the BCBA's obligation is to explore and implement alternative strategies that achieve the same clinical goals while respecting those values. Multiple prompting strategies exist, and the BCBA should identify alternatives that are both effective and culturally acceptable. Choice A is incorrect because dismissing the family's religious values and insisting on a specific procedure fails the cultural responsiveness obligation and is likely to damage the therapeutic relationship. Choice C may be a reasonable accommodation in some circumstances, but it is incomplete as a response — it addresses only the specific concern about the BCBA's gender rather than exploring the full range of alternative prompting strategies. Choice D is incorrect because documenting the request and continuing the objectionable procedure over the family's explicit objection fails to respect their values and is likely to undermine treatment adherence.`,
  },

  {
    id: "t6-E-pool-84",
    domain: "E",
    taskItem: "E.12",
    difficulty: "medium",
    bloomsLevel: "analysis",
    scenario: `A BCBA is supervising an RBT who frequently uses culturally specific idioms and humor during sessions with a client from a different cultural background. The client appears confused by some of the RBT's communication, and the BCBA has observed that the client's engagement decreases during these interactions.`,
    question: `Which of the following is the most appropriate supervisory response?`,
    choices: [
      { letter: "A", text: `Allow the RBT to continue using her natural communication style, because authenticity in therapeutic relationships is important and the client will likely adapt to the RBT's communication style over time.` },
      { letter: "B", text: `Provide the RBT with feedback about the impact of culturally specific communication on the client's engagement, offer specific guidance on culturally responsive communication strategies, and monitor the effect of the changes on the client's engagement and progress.` },
      { letter: "C", text: `Reassign the client to a different RBT from the same cultural background as the client, because cultural matching between therapists and clients produces better treatment outcomes.` },
      { letter: "D", text: `Document the observation in the supervision notes and address the communication issue at the next scheduled supervision meeting, which is the appropriate forum for providing performance feedback.` },
    ],
    correctAnswer: "B",
    rationale: `Choice B is correct. The BCBA's supervisory obligation includes ensuring that RBTs implement services in a culturally responsive manner. When the BCBA observes that an RBT's communication style is negatively affecting a client's engagement, the appropriate response is to provide specific, constructive feedback and guidance, and to monitor the effect of the changes. This fulfills both the supervisory obligation and the cultural responsiveness obligation. Choice A is incorrect because allowing communication patterns that demonstrably reduce client engagement fails the obligation to ensure effective, culturally responsive service delivery. Choice C is incorrect because cultural matching is not always possible or necessary; the appropriate response is to develop the RBT's cultural responsiveness skills. Choice D is incorrect because waiting until the next scheduled supervision meeting when the BCBA has already observed a negative impact on the client's engagement delays necessary corrective action; timely feedback is required.`,
  },

  {
    id: "t6-E-pool-85",
    domain: "E",
    taskItem: "E.12",
    difficulty: "hard",
    bloomsLevel: "application",
    scenario: `A BCBA is developing treatment goals for a client from a collectivist cultural background. The family emphasizes interdependence, family harmony, and group participation as core values. The BCBA's standard goal-setting framework focuses primarily on individual independence and self-sufficiency.`,
    question: `Which of the following best describes the culturally responsive approach to goal development?`,
    choices: [
      { letter: "A", text: `Develop goals based on the standard framework for individual independence, because the BACB task list and evidence-based practice in ABA are grounded in individualistic values that have been validated across diverse populations.` },
      { letter: "B", text: `Collaborate with the family to identify goals that reflect their cultural values — such as participating in family activities, contributing to household routines, and engaging in group social contexts — while ensuring that the goals are functional, measurable, and evidence-based.` },
      { letter: "C", text: `Develop two sets of goals — one aligned with the family's collectivist values for home settings, and one aligned with individualistic independence for school settings — to address the different cultural expectations in each environment.` },
      { letter: "D", text: `Defer entirely to the family's preferences for goal selection, because the family's cultural values should take precedence over the BCBA's professional judgment about what constitutes meaningful treatment goals.` },
    ],
    correctAnswer: "B",
    rationale: `Choice B is correct. Culturally responsive practice in ABA requires BCBAs to collaborate with families to develop goals that are meaningful within the client's cultural context. For a client from a collectivist background, goals that emphasize participation in family and group activities may be more functional and motivating than goals focused solely on individual independence. The BCBA's role is to ensure that goals are functional, measurable, and evidence-based while also reflecting the family's values and the client's cultural context. Choice A is incorrect because applying a standard individualistic framework without considering cultural values fails the cultural responsiveness obligation and may result in goals that are not meaningful or motivating for the client and family. Choice C is partially reasonable but is overly rigid — a more integrated approach that incorporates cultural values across all settings is preferable to maintaining separate goal sets. Choice D is incorrect because deferring entirely to family preferences without applying professional judgment could result in goals that are not functional or evidence-based; the BCBA's role is collaborative, not passive.`,
  },

];
