// BCBA Case Study Simulation Exam — Client Case Narrative
// Design: Academic Warmth — Lora serif for case text, warm cream tones

export interface LifecyclePhase {
  id: string;
  title: string;
  subtitle: string;
  narrative: string;
  domainFocus: string[];
}

export const clientProfile = {
  name: "Leo Rodriguez",
  age: "5 years, 4 months",
  diagnosis: "Autism Spectrum Disorder (Level 2), Intellectual Disability (Mild)",
  referralReason: "Frequent tantrums (10–15/day), limited functional communication, difficulty with transitions",
  setting: "Home and Kindergarten classroom",
  family: "Mr. and Mrs. Rodriguez (bilingual: English/Spanish); two older siblings",
  insurance: "Medicaid waiver (ABA services authorized)",
  supervisingBCBA: "You (the candidate)",
  bcaba: "Sarah Chen, BCaBA",
  rbt: "Marcus Williams, RBT",
};

export const lifecyclePhases: LifecyclePhase[] = [
  {
    id: "intake",
    title: "Phase 1: Intake & Initial Assessment",
    subtitle: "Domains A, B, E, F — Questions 1–46",
    narrative: `You have just received a referral for Leo Rodriguez, a 5-year-old boy recently diagnosed with Autism Spectrum Disorder (Level 2) and mild intellectual disability. Leo has been enrolled in a general education kindergarten class with a part-time paraprofessional. His parents, Mr. and Mrs. Rodriguez, are a bilingual family who primarily speak Spanish at home. They report that Leo has between 10 and 15 tantrums per day, characterized by screaming, dropping to the floor, and occasionally throwing objects. He has fewer than 10 functional words and primarily communicates by grabbing, leading adults by the hand, or having tantrums when his needs are not met.

His kindergarten teacher, Ms. Park, reports that he is unable to participate in group instruction and that his tantrums are disruptive to the entire class. She has tried sticker charts and verbal praise, but nothing has worked. The school psychologist has referred him for ABA services.

You review his records, which include the diagnostic report from his developmental pediatrician, his IEP from his previous early intervention program, and a log of parent-teacher communications. You schedule an intake meeting with the Rodriguez family to begin the assessment process.`,
    domainFocus: ["A", "B", "E", "F"],
  },
  {
    id: "fba",
    title: "Phase 2: Functional Behavior Assessment",
    subtitle: "Domains C, D, F — Questions 47–88",
    narrative: `You have completed your initial intake and are now conducting a comprehensive Functional Behavior Assessment (FBA). You begin by operationally defining Leo's tantrum behavior: "Any instance of screaming (audible vocalization above conversational volume), dropping to the floor, and/or throwing objects, lasting at least 3 seconds."

You collect ABC data in the classroom for two weeks. A clear pattern emerges: the vast majority of tantrums occur when a demand is placed (e.g., "Time for math," "Put away your toy") and the consequence is consistently the removal of the demand (e.g., Leo is sent to the calm-down corner, or the teacher moves on to another student). You also conduct a scatterplot analysis, which reveals that tantrums cluster between 10:30 AM and 11:30 AM — the time for group academic instruction.

You conduct a structured interview with Ms. Park and the Rodriguez family using the Functional Assessment Interview (FAI). Both informants independently report that tantrums "always happen when he has to do something he doesn't want to do." Based on this convergent data, you form a hypothesis: Leo's tantrums are primarily maintained by negative reinforcement (escape from non-preferred tasks and demands).

You design and conduct a brief functional analysis to confirm this hypothesis, using a demand condition, an attention condition, a tangible condition, and a play/control condition. The results clearly show elevated rates of problem behavior in the demand condition only.`,
    domainFocus: ["C", "D", "F"],
  },
  {
    id: "treatment-planning",
    title: "Phase 3: Treatment Planning & Goal Development",
    subtitle: "Domains B, E, F, G, H — Questions 89–120",
    narrative: `Your functional analysis has confirmed that Leo's tantrums are maintained by escape from non-preferred tasks. You now meet with the Rodriguez family and Ms. Park to review the assessment findings and collaboratively develop a treatment plan.

You present the data clearly, using graphs to illustrate the functional analysis results. You explain the function of the behavior in accessible terms: "Leo's brain has learned that having a tantrum is the most effective way to get a break from hard things. Our job is to teach him a better way to ask for a break."

The family expresses concern about using any procedures that involve ignoring Leo. They explain that in their family's culture, not responding to a child's distress feels neglectful. You acknowledge their concern and work collaboratively to design a plan that is both evidence-based and culturally acceptable.

The agreed-upon plan includes: (1) Functional Communication Training (FCT) to teach Leo to exchange a "break" picture card to request a break, (2) a Differential Reinforcement of Alternative Behavior (DRA) procedure to reinforce the use of the card, (3) a modified extinction procedure for the tantrums (the demand is not removed, but the family is coached on how to respond calmly without providing escape), and (4) a token economy to reinforce compliance with academic demands.

You write observable, measurable goals and obtain signed consent from the Rodriguez family. You also develop a task analysis for the FCT procedure and create a training manual for Sarah (your BCaBA) and Marcus (the RBT).`,
    domainFocus: ["B", "E", "F", "G", "H"],
  },
  {
    id: "intervention",
    title: "Phase 4: Intervention Implementation",
    subtitle: "Domains B, C, G, H, I — Questions 121–152",
    narrative: `The intervention is underway. Marcus, the RBT, is implementing the FCT and token economy program under Sarah's direct supervision. You are providing weekly supervision to Sarah and conducting bi-weekly observations of Marcus's sessions.

In the first week, as expected, there is an extinction burst: Leo's tantrums increase in frequency and intensity before they begin to decrease. You have prepared the family and the school team for this and have a safety plan in place. You provide daily check-in calls to the Rodriguez family to provide support and coaching.

By week three, the data shows a clear trend: Leo's use of the "break" card is increasing, and his tantrums are decreasing. However, you notice that the tantrums are decreasing at home but not at school. You review the procedural integrity data and find that Marcus is implementing the plan with 95% fidelity at home, but Ms. Park's paraprofessional is only implementing it with 60% fidelity at school.

You schedule a meeting with the school team, retrain the paraprofessional, and add a component to the plan to address the inconsistent implementation. You also begin to fade the prompts for the FCT procedure and thin the schedule of reinforcement for the token economy.

By week eight, Leo's tantrums have decreased from 10–15 per day to an average of 1–2 per day. He is using the "break" card independently in both settings. You begin to expand the treatment plan to address his other skill deficits, including communication, social skills, and academic readiness.`,
    domainFocus: ["B", "C", "G", "H", "I"],
  },
  {
    id: "evaluation-discharge",
    title: "Phase 5: Ongoing Evaluation, Generalization & Discharge",
    subtitle: "Domains C, D, E, H, I — Questions 153–175",
    narrative: `It has been six months since Leo began services. His progress has been remarkable. His tantrums now occur fewer than once per week. He has a functional communication system using both picture cards and some verbal approximations. He is participating in group instruction in his kindergarten class for up to 20 minutes at a time. His teacher reports that he is "a different kid."

You are now focused on generalization and maintenance. You are systematically introducing the FCT procedure in new settings (the cafeteria, the playground, the library) and with new people (the school librarian, his grandparents). You are also fading the token economy and transitioning Leo to a more natural reinforcement schedule.

You are preparing for discharge. The Rodriguez family is well-trained and confident. The school team has internalized the procedures. You have developed a "booster session" plan: you will check in with the family once a month for three months after discharge, and the school team will continue to collect data on Leo's behavior.

At the final IEP meeting, you present a comprehensive summary of Leo's progress, including graphs of all target behaviors, a summary of the assessment findings, and a plan for continued support. The team agrees that Leo has met all of his goals and that he is ready to be discharged from intensive ABA services.

You document the discharge, provide the family with a summary report, and ensure a smooth transition. You reflect on the case and identify areas for your own professional development.`,
    domainFocus: ["C", "D", "E", "H", "I"],
  },
];
