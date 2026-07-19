// Central site data. Verified details are populated; unverified items are left null
// so pages can render clear "to be confirmed" states rather than fabricated info.

export const business = {
  name: "Heuer M.D. Research",
  city: "Orlando",
  region: "Florida",
  regionShort: "FL",
  // Address, phone, hours, coordinates should be filled in when verified.
  addressLine1: null as string | null,
  addressLine2: null as string | null,
  cityStateZip: "Orlando, FL",
  phone: null as string | null,
  phoneHref: null as string | null,
  email: null as string | null,
  hours: null as string | null,
  parking: null as string | null,
  transit: null as string | null,
  accessibility: null as string | null,
  mapEmbedUrl: null as string | null,
  physician: "Heuer M.D.",
  updated: "2026-07-19",
};

export const areasServed = [
  "Downtown Orlando",
  "Winter Park",
  "Maitland",
  "Altamonte Springs",
  "Kissimmee",
  "Lake Mary",
  "Sanford",
  "Oviedo",
  "Winter Garden",
  "Greater Orange County",
  "Seminole County",
  "Osceola County",
];

export type ResearchCategory = {
  slug: string;
  name: string;
  summary: string;
  areas: string[];
};

export const researchCategories: ResearchCategory[] = [
  {
    slug: "dermatology",
    name: "Dermatology",
    summary:
      "Skin-focused research spanning topical products, prescription therapies and cosmetic investigations.",
    areas: ["Acne", "Eczema and atopic dermatitis", "Psoriasis", "Cosmetic and OTC topical products"],
  },
  {
    slug: "respiratory-health",
    name: "Respiratory Health",
    summary: "Studies related to breathing, seasonal respiratory concerns and airway health.",
    areas: ["Seasonal allergy", "Cough and cold", "Asthma-related studies"],
  },
  {
    slug: "endocrinology",
    name: "Endocrinology",
    summary: "Investigations involving hormones, metabolism and endocrine-related conditions.",
    areas: ["Type 2 diabetes", "Thyroid-related studies", "Metabolic health"],
  },
  {
    slug: "gastroenterology",
    name: "Gastroenterology",
    summary: "Studies focused on digestive health and gastrointestinal function.",
    areas: ["Digestive comfort", "IBS-related studies", "Probiotic and dietary research"],
  },
  {
    slug: "internal-medicine",
    name: "Internal Medicine",
    summary: "General adult-health investigations across common conditions and preventive care.",
    areas: ["Cardiometabolic health", "General wellness studies"],
  },
  {
    slug: "nutrition",
    name: "Nutrition",
    summary: "Research examining foods, beverages and nutritional interventions.",
    areas: ["Functional foods", "Beverages and hydration", "Macronutrient studies"],
  },
  {
    slug: "dietary-supplements",
    name: "Dietary Supplements",
    summary:
      "Studies evaluating dietary supplement products, including substantiation for structure/function claims.",
    areas: ["Vitamin and mineral products", "Herbal and botanical products", "Sports nutrition"],
  },
  {
    slug: "pediatrics",
    name: "Pediatrics",
    summary: "Research involving children conducted under appropriate ethical oversight.",
    areas: ["Pediatric nutrition", "Pediatric OTC products"],
  },
  {
    slug: "womens-health",
    name: "Women's Health",
    summary: "Studies focused on health concerns that affect women across life stages.",
    areas: ["Menstrual and hormonal health", "Bone and joint health", "General wellness"],
  },
  {
    slug: "anti-infectives",
    name: "Anti-infectives",
    summary: "Historical experience with products related to bacterial, viral or fungal concerns.",
    areas: ["Topical antimicrobials", "Systemic anti-infective studies"],
  },
  {
    slug: "muscle-physiology",
    name: "Muscle Physiology",
    summary: "Research examining muscle performance, recovery and physiological response.",
    areas: ["Exercise performance", "Recovery and soreness", "Body composition"],
  },
];

export type Study = {
  slug: string;
  title: string;
  category: string;
  status: "recruiting" | "pre-screening" | "closed";
  summary: string;
  ageRange?: string;
  compensation?: string;
};

// Kept intentionally empty until verified studies can be listed. Empty state UI
// handles this gracefully across pages.
export const studies: Study[] = [];

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  author: string;
  updated: string;
  readTime: string;
  body: string[];
};

export const blogCategories = [
  "Clinical Trial Education",
  "Orlando Research News",
  "Participant Guides",
  "Medical Research",
  "Regulatory Insights",
  "Expert Witness Insights",
  "Industry Resources",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-find-clinical-trials-in-orlando",
    title: "How to Find Clinical Trials in Orlando",
    category: "Orlando Research News",
    summary:
      "A practical guide for Central Florida residents on where to look for clinical trials and what to consider before applying.",
    author: "Heuer M.D. Research Team",
    updated: "2026-07-10",
    readTime: "5 min",
    body: [
      "Finding a clinical trial in Orlando starts with understanding what you are looking for. Some people are searching because of a specific health condition, while others are healthy volunteers curious about research participation. Both are valid starting points.",
      "Public registries like ClinicalTrials.gov list studies by condition, location and recruiting status. Local research centers, including Heuer M.D. Research, also publish currently recruiting studies on their websites. Speaking with your primary care physician is another way to learn whether a nearby study might be a reasonable fit.",
      "Before applying, review the study summary, understand what participation involves, and note any age or health requirements. Enrollment is never guaranteed — a prescreening conversation helps determine whether a study is appropriate for you.",
    ],
  },
  {
    slug: "what-to-expect-during-a-clinical-trial-screening-visit",
    title: "What to Expect During a Clinical Trial Screening Visit",
    category: "Participant Guides",
    summary:
      "A friendly overview of what typically happens at a first screening visit, from paperwork to informed consent.",
    author: "Heuer M.D. Research Team",
    updated: "2026-06-28",
    readTime: "4 min",
    body: [
      "A screening visit is designed to determine whether a study is a good fit for you and whether you are a good fit for the study. It typically begins with paperwork, questions about your medical history and a review of the informed consent document.",
      "Depending on the study, the visit may also include vital signs, basic lab work or other assessments described in the consent form. The research coordinator will answer your questions and explain what the next steps would be if you choose to continue.",
      "Screening does not commit you to joining a study. You can stop at any point.",
    ],
  },
  {
    slug: "do-you-need-health-insurance-to-join-a-clinical-trial",
    title: "Do You Need Health Insurance to Join a Clinical Trial?",
    category: "Participant Guides",
    summary:
      "Insurance requirements vary by study. Here is a plain-language overview of how coverage usually fits in.",
    author: "Heuer M.D. Research Team",
    updated: "2026-06-15",
    readTime: "3 min",
    body: [
      "Health insurance is often not required to participate in a clinical trial, but requirements vary by study. Study-related visits and procedures described in the protocol are typically provided at no cost to participants.",
      "Care unrelated to the study — for example, an unrelated medical issue that comes up during participation — is generally handled through your regular healthcare provider and insurance.",
      "The research team can explain how a specific study handles study-related care and what, if anything, participants are responsible for.",
    ],
  },
  {
    slug: "are-clinical-trials-free-for-participants",
    title: "Are Clinical Trials Free for Participants?",
    category: "Clinical Trial Education",
    summary:
      "How costs, compensation and study-related procedures usually work for people considering a clinical trial.",
    author: "Heuer M.D. Research Team",
    updated: "2026-06-05",
    readTime: "4 min",
    body: [
      "Study-related visits, tests and procedures outlined in a study protocol are typically provided at no cost to participants. Some studies also offer compensation for time and travel, though this varies.",
      "Compensation is never guaranteed for every applicant and depends on the specific study, the number of visits completed and the sponsor's policies. The research team can walk through the details before you decide to enroll.",
    ],
  },
  {
    slug: "how-clinical-trial-compensation-usually-works",
    title: "How Clinical Trial Compensation Usually Works",
    category: "Clinical Trial Education",
    summary:
      "Compensation varies by study. Here is what participants can generally expect and questions worth asking.",
    author: "Heuer M.D. Research Team",
    updated: "2026-05-22",
    readTime: "4 min",
    body: [
      "Compensation in a clinical trial is generally intended to acknowledge the time, travel and effort involved in participation. It is not payment for the study product itself.",
      "Amounts vary widely between studies and are set by the study sponsor in accordance with ethical review. Compensation is typically tied to completed visits or procedures rather than paid up front.",
      "Ask the research team how compensation is structured, when it is paid, and what happens if you choose to withdraw from the study.",
    ],
  },
  {
    slug: "questions-to-ask-before-joining-a-research-study",
    title: "Questions to Ask Before Joining a Research Study",
    category: "Participant Guides",
    summary: "A checklist of thoughtful questions to bring to your screening visit.",
    author: "Heuer M.D. Research Team",
    updated: "2026-05-10",
    readTime: "5 min",
    body: [
      "What is the purpose of the study, and what is being tested?",
      "What is expected of me — how many visits, how long, and what procedures are involved?",
      "What are the possible benefits and risks?",
      "How is my privacy protected?",
      "What happens if I want to stop participating?",
      "Is there compensation, and how is it structured?",
      "Who do I contact with questions during the study?",
    ],
  },
  {
    slug: "what-is-informed-consent-in-clinical-research",
    title: "What Is Informed Consent in Clinical Research?",
    category: "Clinical Trial Education",
    summary:
      "Informed consent is a conversation, not just a signature. Here is how it works and why it matters.",
    author: "Heuer M.D. Research Team",
    updated: "2026-04-28",
    readTime: "4 min",
    body: [
      "Informed consent is the process by which a potential participant learns what a study involves, including its purpose, procedures, possible risks and benefits, and their rights.",
      "It is documented in a written form reviewed by an ethics committee, but the process itself is meant to be a conversation. Participants can ask questions, take time to think, and decide freely.",
      "Consent is ongoing. Participants can withdraw at any time without needing to justify the decision.",
    ],
  },
  {
    slug: "how-long-does-a-clinical-trial-usually-last",
    title: "How Long Does a Clinical Trial Usually Last?",
    category: "Clinical Trial Education",
    summary:
      "Study duration varies. Here is how to think about time commitment before you enroll.",
    author: "Heuer M.D. Research Team",
    updated: "2026-04-14",
    readTime: "3 min",
    body: [
      "Some studies involve a single visit; others span weeks or months. The protocol describes the total duration and the frequency of visits.",
      "When considering a study, look at both the total length and the intensity — for example, five short visits over a month versus one long visit and follow-up phone calls.",
    ],
  },
  {
    slug: "can-you-leave-a-clinical-trial-after-joining",
    title: "Can You Leave a Clinical Trial After Joining?",
    category: "Clinical Trial Education",
    summary: "Participation is voluntary. Here is how withdrawal typically works.",
    author: "Heuer M.D. Research Team",
    updated: "2026-04-02",
    readTime: "3 min",
    body: [
      "Yes. Participation in a clinical trial is voluntary, and participants can withdraw at any time.",
      "If you choose to stop, the research team may ask for a final safety visit so any study-related follow-up can be completed thoughtfully. You do not need to justify your decision.",
    ],
  },
  {
    slug: "clinical-trial-vs-medical-treatment",
    title: "What Is the Difference Between a Clinical Trial and Medical Treatment?",
    category: "Clinical Trial Education",
    summary:
      "Clinical research and clinical care share some overlap but have different goals. Here is how they differ.",
    author: "Heuer M.D. Research Team",
    updated: "2026-03-20",
    readTime: "4 min",
    body: [
      "The primary goal of medical treatment is to care for an individual patient. The primary goal of a clinical trial is to generate knowledge — often about whether a product or approach is safe and effective.",
      "Participants in research studies receive careful attention from the research team, but participation is not a substitute for regular medical care.",
    ],
  },
  {
    slug: "orlando-residents-recruiting-studies",
    title: "How Orlando Residents Can Learn About Recruiting Research Studies",
    category: "Orlando Research News",
    summary:
      "Local ways for Central Florida residents to hear about studies that are actively enrolling.",
    author: "Heuer M.D. Research Team",
    updated: "2026-03-05",
    readTime: "4 min",
    body: [
      "Orlando residents can find recruiting studies through public registries, local research center websites and their own healthcare providers. Signing up to be notified about future opportunities is also common.",
      "Heuer M.D. Research publishes currently recruiting studies on its website when they are open to new participants and welcomes questions from local residents.",
    ],
  },
  {
    slug: "understanding-clinical-trial-eligibility-criteria",
    title: "Understanding Clinical Trial Eligibility Criteria",
    category: "Clinical Trial Education",
    summary:
      "Why some studies require specific ages, health histories or medications — and why that is not a judgment on you.",
    author: "Heuer M.D. Research Team",
    updated: "2026-02-18",
    readTime: "4 min",
    body: [
      "Eligibility criteria describe who a study is designed for. Inclusion criteria describe the characteristics needed to participate. Exclusion criteria describe reasons a study may not be a safe or appropriate fit.",
      "Not qualifying for a study is common and not a reflection on you. Different studies have different criteria, and something that excludes you from one may not affect eligibility for another.",
    ],
  },
  {
    slug: "what-attorneys-should-look-for-in-a-medical-expert-witness",
    title: "What Attorneys Should Look for in a Medical Expert Witness",
    category: "Expert Witness Insights",
    summary:
      "A practical guide for legal teams evaluating medical experts for product-claims, labeling and regulatory matters.",
    author: "Heuer M.D. Research Team",
    updated: "2026-02-03",
    readTime: "6 min",
    body: [
      "A useful expert combines relevant training, hands-on experience and a clear, defensible way of explaining scientific concepts. Look for demonstrated familiarity with the regulatory frameworks that apply to the matter at hand.",
      "For product-claims and labeling matters, prior work reviewing substantiation, scientific literature and regulatory guidance is often more valuable than credentials alone.",
    ],
  },
  {
    slug: "fda-ftc-dietary-supplement-claims",
    title: "FDA and FTC Considerations for Dietary Supplement Claims",
    category: "Regulatory Insights",
    summary:
      "An overview of how supplement claims are evaluated and why substantiation matters.",
    author: "Heuer M.D. Research Team",
    updated: "2026-01-22",
    readTime: "6 min",
    body: [
      "Dietary supplement claims in the United States sit at the intersection of FDA labeling requirements and FTC advertising standards. Both agencies have expectations for the type and quality of evidence used to support claims.",
      "Companies that treat substantiation as a first-class part of product development — not an afterthought — tend to be better positioned when questions arise.",
    ],
  },
  {
    slug: "why-product-claim-substantiation-matters",
    title: "Why Product-Claim Substantiation Matters",
    category: "Regulatory Insights",
    summary:
      "Substantiation protects consumers and companies alike. Here is what a defensible approach looks like.",
    author: "Heuer M.D. Research Team",
    updated: "2026-01-08",
    readTime: "5 min",
    body: [
      "Substantiation is the evidence that supports a claim about a product. For consumers, it is a signal that a company has done the work to back up what it says. For companies, it is protection against regulatory action and litigation.",
      "A defensible substantiation file typically includes relevant scientific literature, product-specific studies where appropriate, and a clear rationale connecting the evidence to the claim as worded.",
    ],
  },
];

export const glossary: { term: string; definition: string }[] = [
  { term: "Adverse event", definition: "Any unfavorable medical occurrence in a participant during a study, whether or not it is related to the study product." },
  { term: "Clinical research coordinator", definition: "A member of the research team who manages the day-to-day operations of a study and works directly with participants." },
  { term: "Clinical study", definition: "A research investigation involving human volunteers, which may be observational or interventional." },
  { term: "Clinical trial", definition: "A type of clinical study in which participants receive a specific intervention according to a protocol." },
  { term: "Control group", definition: "A group of participants that does not receive the investigational intervention, used for comparison." },
  { term: "Eligibility criteria", definition: "The requirements that determine whether a person can participate in a study, including inclusion and exclusion criteria." },
  { term: "Informed consent", definition: "The ongoing process by which a participant learns about a study and voluntarily agrees to take part." },
  { term: "Investigator", definition: "The physician or scientist responsible for conducting a study at a research site." },
  { term: "Placebo", definition: "An inactive substance or intervention used for comparison in some studies." },
  { term: "Prescreening", definition: "An early conversation, often by phone, to help determine whether a study may be a fit before an in-person visit." },
  { term: "Principal investigator", definition: "The lead investigator responsible for the overall conduct of a study at a site." },
  { term: "Protocol", definition: "The written plan that describes how a study will be conducted." },
  { term: "Randomization", definition: "A method of assigning participants to study groups by chance to reduce bias." },
  { term: "Research site", definition: "The location where a clinical study is conducted." },
  { term: "Screening", definition: "The process of evaluating whether a person meets the criteria for a specific study." },
  { term: "Sponsor", definition: "The organization that initiates and typically funds a clinical study." },
];
