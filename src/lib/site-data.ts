// Central site data. Verified details are populated; unverified items are left null
// so pages can render clear "to be confirmed" states rather than fabricated info.

export const business = {
  name: "HMD Research",
  city: "Orlando",
  region: "Florida",
  regionShort: "FL",
  addressLine1: "6001 Vineland Road, Suite 104",
  addressLine2: null as string | null,
  cityStateZip: "Orlando, FL 32819",
  phone: "(407) 574-5650",
  phoneHref: "tel:+14075745650",
  email: "info@heuermd.com" as string | null,
  hours: "Monday – Friday · 9:00 AM – 5:00 PM",
  parking: "On-site parking available for patients and visitors.",
  transit: "Accessible from I-4 and the 408; near International Drive.",
  accessibility: "Ground-floor entrance and accessible parking.",
  mapEmbedUrl:
    "https://www.google.com/maps?q=6001+Vineland+Road+Suite+104+Orlando+FL+32819&output=embed",
  physician: "Marvin Heuer, M.D. FAAFP",
  tagline: "has built their foundation on professional experience, premium quality and client trust.",
  updated: "2026-07-19",
};

// Hotlinked reference images from the legacy site (used with permission of owner).
export const images = {
  logo: "/hmd-logo.png",
  doctorPortrait: "https://heuermd.com/wp-content/uploads/2015/07/DSC_1206-fix-1024x886.jpg",
  medicalTeam: "https://heuermd.com/wp-content/uploads/2016/04/Heuer-MD-Medical-Team-min-1.jpg",
  clinicalTrialHero: "https://heuermd.com/wp-content/uploads/2016/05/Heuer-MD-Clinical-Trial.jpg",
  expertWitnessHero: "https://heuermd.com/wp-content/uploads/2017/07/Heuer-MD-Expert-Witness.jpg",
  legalServices: "https://heuermd.com/wp-content/uploads/2017/07/Heuer-MD-Legal-Services.jpg",
  consultingServices: "https://heuermd.com/wp-content/uploads/2017/07/Heuer-MD-Consulting-Services.jpg",
  regulatoryServices: "https://heuermd.com/wp-content/uploads/2017/07/Heuer-MD-Regulatory-Services.jpg",
  vaccine: "https://heuermd.com/wp-content/uploads/2016/04/Heuer-MD-Vaccine.jpg",
  dermatology: "https://heuermd.com/wp-content/uploads/2016/04/Heuer-MD-Dermatology.jpg",
  endocrinology: "https://heuermd.com/wp-content/uploads/2016/04/Heuer-MD-Endocronology.jpg",
  gastro: "https://heuermd.com/wp-content/uploads/2016/04/Heuer-MD-Gastro.jpg",
};

export type TrialDetail = {
  slug: string;
  name: string;
  image: string;
  status: "recruiting" | "completed";
  shortSummary: string;
  about: string;
  whoMayQualify: string[];
  whatToExpect: string[];
  compensationNote?: string;
};

export const currentTrials: TrialDetail[] = [
  {
    slug: "asthma",
    name: "Asthma",
    image: "https://heuermd.com/wp-content/uploads/2018/09/Ashtma-woman-e1536949507155.jpg",
    status: "recruiting",
    shortSummary: "Research studies for adults living with asthma, evaluating investigational respiratory therapies.",
    about:
      "Asthma is a chronic condition in which the airways narrow, swell and may produce extra mucus, making breathing difficult. Our Orlando research center participates in studies evaluating investigational treatments intended to help improve daily control of asthma symptoms and reduce flare-ups.",
    whoMayQualify: [
      "Adults with a physician-diagnosed history of asthma",
      "Currently using a rescue and/or controller inhaler",
      "Non-smokers or minimal tobacco history (study-specific)",
      "Willing to attend scheduled study visits in Orlando, FL",
    ],
    whatToExpect: [
      "Prescreening conversation to review your history",
      "In-person screening visit with vitals and lung function testing",
      "Study product visits at defined intervals per the protocol",
      "Follow-up visits to review symptoms and safety",
    ],
    compensationNote: "Some studies may offer compensation for time and travel. Details vary by protocol.",
  },
  {
    slug: "polymyositis-dermatomyositis",
    name: "Polymyositis / Dermatomyositis",
    image: "https://heuermd.com/wp-content/uploads/2023/09/PMDM-scaled.jpg",
    status: "recruiting",
    shortSummary: "Investigational studies for adults with polymyositis or dermatomyositis — rare inflammatory muscle diseases.",
    about:
      "Polymyositis and dermatomyositis are rare inflammatory conditions affecting muscles and, in some cases, skin. They can cause muscle weakness, fatigue and, in dermatomyositis, distinctive skin changes. Our research team participates in studies evaluating investigational therapies for these conditions.",
    whoMayQualify: [
      "Adults with a confirmed diagnosis of polymyositis or dermatomyositis",
      "Experiencing muscle weakness or related symptoms",
      "Meeting protocol-specific medication and health criteria",
      "Able to travel to the Orlando research center",
    ],
    whatToExpect: [
      "Detailed medical history and prescreening",
      "Screening visit including muscle strength assessment and labs",
      "Scheduled study visits with the investigator and coordinators",
      "Ongoing monitoring for safety and response",
    ],
  },
  {
    slug: "gout",
    name: "Gout",
    image: "https://heuermd.com/wp-content/uploads/2023/09/LG-GDCL010-Gout2-e1695954854391.jpg",
    status: "recruiting",
    shortSummary: "Studies evaluating investigational treatments for adults living with chronic or recurrent gout.",
    about:
      "Gout is a form of inflammatory arthritis caused by elevated uric acid, leading to sudden, painful joint flare-ups — most commonly in the big toe. Studies at HMD Research examine investigational approaches to managing uric acid levels and reducing flare frequency.",
    whoMayQualify: [
      "Adults with a physician-diagnosed history of gout",
      "History of recurrent flare-ups or elevated uric acid",
      "Meeting protocol-defined health criteria",
      "Willing to attend Orlando study visits",
    ],
    whatToExpect: [
      "Prescreening and review of gout history",
      "Screening visit with labs (including uric acid)",
      "Study visits per the protocol timeline",
      "Safety and follow-up assessments",
    ],
  },
  {
    slug: "lupus",
    name: "Lupus",
    image: "https://heuermd.com/wp-content/uploads/2018/08/C.-diff-pic.jpg",
    status: "recruiting",
    shortSummary: "Clinical research for adults living with systemic lupus erythematosus (SLE).",
    about:
      "Lupus is a chronic autoimmune condition in which the immune system attacks healthy tissue, potentially affecting joints, skin, kidneys and other organs. We participate in studies evaluating investigational therapies aimed at helping manage lupus symptoms and disease activity.",
    whoMayQualify: [
      "Adults with a documented diagnosis of systemic lupus erythematosus",
      "Active disease as defined by the study protocol",
      "Currently on stable background therapy (study-specific)",
      "Able to attend visits in Orlando, FL",
    ],
    whatToExpect: [
      "Prescreening call to discuss history",
      "In-person screening with labs and disease activity assessment",
      "Scheduled study visits with investigator oversight",
      "Ongoing safety monitoring throughout participation",
    ],
  },
  {
    slug: "rheumatoid-arthritis",
    name: "Rheumatoid Arthritis",
    image: "https://heuermd.com/wp-content/uploads/2023/09/AdobeStock_159823520-scaled-e1695959926183.jpeg",
    status: "recruiting",
    shortSummary: "Investigational studies for adults living with rheumatoid arthritis (RA).",
    about:
      "Rheumatoid arthritis (RA) is an autoimmune condition that causes inflammation of the joints, leading to pain, stiffness and, over time, joint damage. Our research site participates in studies evaluating investigational therapies for adults with moderate to severe RA.",
    whoMayQualify: [
      "Adults diagnosed with rheumatoid arthritis",
      "Active joint symptoms as defined by the protocol",
      "History of prior RA therapy (study-specific)",
      "Willing to attend Orlando study visits",
    ],
    whatToExpect: [
      "Prescreening to review your RA history and current medications",
      "Screening visit with joint assessment and labs",
      "Study product visits and follow-up per the protocol",
      "Assessment of symptoms, function and safety over time",
    ],
  },
  {
    slug: "psoriatic-arthritis",
    name: "Psoriatic Arthritis",
    image: "https://heuermd.com/wp-content/uploads/2019/04/PSA-pic2-1119x699.jpg",
    status: "recruiting",
    shortSummary: "Studies for adults living with psoriatic arthritis (PsA) — joint disease associated with psoriasis.",
    about:
      "Psoriatic arthritis is a form of inflammatory arthritis that affects some people with psoriasis. It can cause joint pain, stiffness and swelling. Our team participates in studies evaluating investigational treatments for adults with PsA.",
    whoMayQualify: [
      "Adults with a documented diagnosis of psoriatic arthritis",
      "Active joint symptoms per the protocol",
      "Prior therapy history as defined by the study",
      "Willing to travel to the Orlando research center",
    ],
    whatToExpect: [
      "Prescreening call and medical history review",
      "Screening visit with joint and skin assessments",
      "Scheduled study visits with the investigator",
      "Ongoing safety and symptom monitoring",
    ],
  },
  {
    slug: "copd",
    name: "Chronic Obstructive Pulmonary Disease (COPD)",
    image: "https://heuermd.com/wp-content/uploads/2019/12/FB-Lungs-e1577479147360.jpg",
    status: "recruiting",
    shortSummary: "Investigational research for adults living with chronic obstructive pulmonary disease.",
    about:
      "COPD is a progressive lung condition that makes it harder to breathe over time. It includes conditions such as emphysema and chronic bronchitis. Studies at our Orlando research center evaluate investigational therapies aimed at improving breathing and reducing exacerbations.",
    whoMayQualify: [
      "Adults with a physician-diagnosed history of COPD",
      "Current or former smoker (study-specific)",
      "Meeting lung-function criteria at screening",
      "Willing to attend Orlando study visits",
    ],
    whatToExpect: [
      "Prescreening review of COPD history",
      "Screening visit with spirometry (lung function) and labs",
      "Study visits at defined intervals per the protocol",
      "Follow-up assessments for symptoms and safety",
    ],
  },
];

export const completedTrials = [
  "Alzheimer's","Asthma","Ankylosing Spondylitis","Atopic Dermatitis","Back Pain",
  "C. diff (Clostridium Difficile)","Cholesterol","Common Cold","Constipation","COPD",
  "Crohn's Disease","Dementia","Depression","Dermatomyositis","Eczema","Endometriosis",
  "Epilepsy","Esophageal Ulcers","Female Contraceptive","Gastric Ulcers","Gout",
  "Hormone Replacement Therapy","Hypertension","Immune Globulin (IVIG)","Irritable Bowel Syndrome (IBS)",
  "Inflammatory Bowel Disease","Iron Deficiency Anemia","Libido","Lupus","Menopause","Migraine",
  "Muscle Physiology","Multiple Sclerosis","Non Alcoholic Steatohepatitis (NASH)","Osteoporosis",
  "Parkinson's Disease","Pneumonia","Psoriatic Arthritis","Restless Leg Syndrome","Rheumatoid Arthritis",
  "Rubella","Rotavirus","Seizures","Sinusitis","Steatorrhea","Ulcerative Colitis",
  "Urinary Incontinence","Urinary Tract Infection","Urticaria","Uterine Bleeding","Uterine Myoma",
  "Type 2 Diabetes","Weight Loss",
];

export function trialSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export const completedTrialDetails: TrialDetail[] = completedTrials.map((name) => ({
  slug: trialSlug(name),
  name,
  image: "https://heuermd.com/wp-content/uploads/2016/05/Heuer-MD-Clinical-Trial.jpg",
  status: "completed" as const,
  shortSummary: `Historical clinical research experience at HMD Research in the area of ${name}.`,
  about: `HMD Research has previously conducted clinical trial research related to ${name}. Completed studies contribute to our team's therapeutic-area experience and to broader medical knowledge. Specific protocol details are confidential to the sponsor.`,
  whoMayQualify: [
    "This study is no longer enrolling participants",
    "Future studies in this area may become available",
    "Contact the research team to be notified of similar future opportunities",
  ],
  whatToExpect: [
    "This entry is provided for reference to our historical experience",
    "For active studies, please review our current clinical trials",
  ],
}));

export function findTrial(slug: string): TrialDetail | undefined {
  return (
    currentTrials.find((t) => t.slug === slug) ||
    completedTrialDetails.find((t) => t.slug === slug)
  );
}

export const partners = [
  "Quorum","Quintiles","Seres","Schulman-IRB","Teva-Pharmaceutical-Industries","Acurian",
  "abbvie","ChemiNutra","AstraZeneca","clinical-smart","Convance","Copernicus","DrugDev",
  "Genentech","Evofem","GHA","Icon","INC-Research","infinite-digital","ISSN","Janssen",
  "Kowa","Neuliven-Health","Merck","novo_nordisk","Parexel","Pfizer","ppd","Pharmacosmos","PRA-Health",
].map((slug) => ({
  name: slug.replace(/[-_]/g, " "),
  image: `https://heuermd.com/wp-content/uploads/2017/11/${slug}.jpg`,
}));

export const products = [
  {
    slug: "pure-polar-omega-3",
    name: "Pure Polar Omega 3",
    tagline: "High-purity fish oil formulated for cardiovascular and cognitive support.",
    description:
      "Pure Polar Omega 3 delivers concentrated EPA and DHA from cold-water fish sources, molecularly distilled for purity. Formulated under Dr. Heuer's guidance to support heart, brain and joint health as part of a balanced diet.",
    highlights: [
      "Concentrated EPA and DHA per softgel",
      "Molecularly distilled for purity",
      "Sourced from cold-water fish oil",
      "Third-party tested for contaminants",
    ],
  },
  {
    slug: "joint-ax",
    name: "Joint AX — Feel the Relief",
    tagline: "A joint-support supplement built on clinically studied ingredients.",
    description:
      "Joint AX combines glucosamine, chondroitin, MSM and botanical extracts to support joint comfort, flexibility and mobility. Formulated with dosages informed by decades of nutraceutical research experience.",
    highlights: [
      "Glucosamine + Chondroitin + MSM",
      "Botanical anti-inflammatory support",
      "Formulated for daily maintenance",
      "Non-GMO, gluten-free",
    ],
  },
  {
    slug: "sport-ax",
    name: "Sport AX — 100% Natural Supplement",
    tagline: "A natural sports supplement designed for active adults.",
    description:
      "Sport AX is a naturally derived performance supplement designed to help active adults train, recover and stay consistent. Draws on Dr. Heuer's decades of experience formulating sports-nutrition products.",
    highlights: [
      "100% naturally derived ingredients",
      "Supports training and recovery",
      "No artificial colors or sweeteners",
      "Free of banned substances",
    ],
  },
];

export const newsItems: Array<{ slug: string; date: string; title: string; image: string; summary: string }> = [];


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
    author: "HMD Research Team",
    updated: "2026-07-10",
    readTime: "5 min",
    body: [
      "Finding a clinical trial in Orlando starts with understanding what you are looking for. Some people are searching because of a specific health condition, while others are healthy volunteers curious about research participation. Both are valid starting points.",
      "Public registries like ClinicalTrials.gov list studies by condition, location and recruiting status. Local research centers, including HMD Research, also publish currently recruiting studies on their websites. Speaking with your primary care physician is another way to learn whether a nearby study might be a reasonable fit.",
      "Before applying, review the study summary, understand what participation involves, and note any age or health requirements. Enrollment is never guaranteed — a prescreening conversation helps determine whether a study is appropriate for you.",
    ],
  },
  {
    slug: "what-to-expect-during-a-clinical-trial-screening-visit",
    title: "What to Expect During a Clinical Trial Screening Visit",
    category: "Participant Guides",
    summary:
      "A friendly overview of what typically happens at a first screening visit, from paperwork to informed consent.",
    author: "HMD Research Team",
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
    author: "HMD Research Team",
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
    author: "HMD Research Team",
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
    author: "HMD Research Team",
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
    author: "HMD Research Team",
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
    author: "HMD Research Team",
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
    author: "HMD Research Team",
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
    author: "HMD Research Team",
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
    author: "HMD Research Team",
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
    author: "HMD Research Team",
    updated: "2026-03-05",
    readTime: "4 min",
    body: [
      "Orlando residents can find recruiting studies through public registries, local research center websites and their own healthcare providers. Signing up to be notified about future opportunities is also common.",
      "HMD Research publishes currently recruiting studies on its website when they are open to new participants and welcomes questions from local residents.",
    ],
  },
  {
    slug: "understanding-clinical-trial-eligibility-criteria",
    title: "Understanding Clinical Trial Eligibility Criteria",
    category: "Clinical Trial Education",
    summary:
      "Why some studies require specific ages, health histories or medications — and why that is not a judgment on you.",
    author: "HMD Research Team",
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
    author: "HMD Research Team",
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
    author: "HMD Research Team",
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
    author: "HMD Research Team",
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
