// All page copy lives here (English, adapted from "3-Day Offline Hijama Training Landing Page Copy.md").
// Bracketed values are placeholders to fill in before launch.

export const WHATSAPP_NUMBER = "91XXXXXXXXXX"; // [INSERT WHATSAPP NUMBER]
export const whatsappLink = (text = "Assalamu Alaikum, I would like to register for the 3-Day Offline Hijama Training.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const nav = [
  { label: "Curriculum", href: "#curriculum" },
  { label: "Trainer", href: "#trainer" },
  { label: "Fee", href: "#fee" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "3-Day Offline Hijama Training Program",
  title: ["Learn Hijama Therapy", "With Hands-On Practical Training"],
  sub: "An intensive 3-day offline training where you learn Hijama fundamentals, anatomy, practical techniques, client handling and the basics of self-employment.",
  body: "If you want to learn Hijama with proper guidance and practical training, this 3-Day Offline Training Program has been designed for you.",
  chips: [
    "3 Days Intensive Training",
    "Theory + Practical Learning",
    "Anatomy & Cupping Knowledge",
    "Client Handling Training",
    "Self-Employment Guidance",
    "Course Completion Certificate",
  ],
  badge: "Limited Seats Available",
  cta: "Book Your Seat Now",
};

export const questions = {
  tag: "Are You Ready?",
  title: "Do you want to learn Hijama therapy?",
  lead: "Have you ever wondered:",
  items: [
    "How do I learn Hijama properly?",
    "How do I understand cupping points?",
    "How should I handle a client before and after a session?",
    "How can I use Hijama as a skill for self-employment?",
  ],
  close: "If you want to find the answers to these questions through practical training, this program is for you.",
};

export const approach = {
  tag: "Our Focus",
  title: "This is not just a theory course",
  steps: ["Learn", "Understand", "Observe", "Practice", "Build Confidence"],
  body: "Along with Hijama concepts, you will get guidance on the practical workflow, client communication, safety and the basics of running your own service.",
};

export type Day = {
  day: string;
  name: string;
  title: string;
  intro: string;
  label: string;
  topics: string[];
  goal: string;
  note?: string;
  image: string;
};

export const days: Day[] = [
  {
    day: "Day 1",
    name: "Hijama Fundamentals",
    title: "Start With a Strong Foundation",
    intro: "On Day 1 you will understand the basic concepts of Hijama and the professional workflow.",
    label: "Topics",
    topics: [
      "What is Hijama?",
      "The basic concept of Hijama",
      "Different types of Hijama",
      "Introduction to dry cupping & wet cupping",
      "Traditional context of Hijama",
      "Basic Hijama equipment",
      "Proper handling of equipment",
      "Session setup",
      "Basic hygiene principles",
      "Infection-control basics",
      "Introduction to client assessment",
      "Basic safety considerations",
      "Contraindications & precautions",
      "Professional ethics & communication",
    ],
    goal: "Build a strong grasp of Hijama fundamentals and understand the basic workflow of a proper session.",
    image: "/assets/images/hijama-equipment.jpg",
  },
  {
    day: "Day 2",
    name: "Anatomy + Cupping Points",
    title: "Understand the Body, Understand the Technique Better",
    intro: "Understanding the body's basic anatomical structures is essential for learning Hijama.",
    label: "Day 2 Topics",
    topics: [
      "Basic introduction to human anatomy",
      "Major body regions",
      "Basic understanding of muscles",
      "Back anatomy",
      "Neck & shoulder region",
      "Arms & legs",
      "Lower back region",
      "Commonly used cupping areas",
      "Introduction to cupping points",
      "Basic principles of point selection",
      "Client positioning",
      "Cup placement",
      "Vacuum/pressure control",
      "Common practical mistakes",
      "Safety precautions",
    ],
    goal: "Better understand the relationship between body anatomy and cupping application.",
    note: "Point selection and technique will be taught in the context of individual assessment, safety considerations and applicable professional guidelines.",
    image: "/assets/images/hijama-training.jpg",
  },
  {
    day: "Day 3",
    name: "Practical Hijama Training",
    title: "Now Connect Theory to the Practical Workflow",
    intro: "The main focus of Day 3 is practical demonstration and supervised learning.",
    label: "Practical Topics",
    topics: [
      "Complete session setup",
      "Equipment preparation",
      "Client preparation",
      "Proper client positioning",
      "Cup placement",
      "Vacuum control",
      "Supervised demonstration of the wet cupping procedure",
      "Hygiene & infection-control workflow",
      "Safe handling principles",
      "Post-session care",
      "Waste disposal & cleanup",
      "Common mistakes",
      "Practical corrections",
      "Doubt clearing",
      "Q&A session",
    ],
    goal: "Understand the complete professional workflow of a Hijama session.",
    image: "/assets/images/hijama-treatment.jpg",
  },
];

export const clientHandling = {
  tag: "Client / Patient Handling Training",
  title: "Don't Just Perform Hijama — Learn to Handle Clients Professionally Too",
  body: "For a successful practitioner, communication and client handling matter as much as technique.",
  lead: "In the training you will learn:",
  groups: [
    {
      name: "Communication",
      items: [
        "How to speak with clients professionally",
        "How to handle the first interaction",
        "How to understand a client's concerns",
        "How to manage a client's expectations",
      ],
    },
    {
      name: "Pre-Session Handling",
      items: [
        "How to collect basic client information",
        "How to discuss relevant health/safety questions",
        "What to explain to the client before the session",
        "Basic screening and safety considerations",
      ],
    },
    {
      name: "During Session",
      items: [
        "How to keep the client comfortable",
        "How to explain each step of the procedure clearly",
        "How to communicate with anxious or fearful clients",
        "How to maintain professional behaviour",
      ],
    },
    {
      name: "After Session",
      items: [
        "Basic after-care guidance",
        "Handling client questions",
        "Follow-up communication",
        "Professional communication for repeat sessions",
      ],
    },
  ],
};

export const selfEmployment = {
  tag: "From Hijama to Self-Employment",
  title: "Learn the Skill and Plan Your Professional Journey",
  body: "If you want to explore Hijama as a self-employment opportunity in the future, the course also includes basic business guidance.",
  lead: "You will learn:",
  items: [
    "How to structure a Hijama service professionally",
    "The basic model of a home-visit Hijama service",
    "Planning your own therapy/wellness setup",
    "Basic equipment & setup planning",
    "How to design service packages",
    "A basic pricing framework",
    "The client booking process",
    "Handling enquiries on WhatsApp",
    "Promoting your service on Instagram/Facebook",
    "Basic methods to attract local clients",
    "Referral strategy",
    "Repeat-client strategy",
    "Personal branding basics",
    "How to build a professional profile",
    "The basic process of converting leads into bookings",
  ],
  path: ["Skill", "Confidence", "Client Handling", "Service Setup", "Self-Employment"],
};

export const marketing = {
  tag: "Basic Digital Marketing Guidance",
  title: "Present your service online",
  body: "Today, presenting your service online is just as important as the skill itself.",
  channels: [
    { name: "Instagram", icon: "instagram", items: ["Professional profile setup", "How to write your bio", "Content ideas", "How to reach a local audience"] },
    { name: "WhatsApp", icon: "whatsapp", items: ["Enquiry handling", "Sharing service information", "Appointment booking", "Follow-up"] },
    { name: "Facebook", icon: "facebook", items: ["Basics of local audience targeting", "Local community marketing", "Service promotion basics"] },
  ],
};

export const trainer = {
  tag: "Who Is Your Trainer?",
  title: "Learn With an Experienced Hijama & Therapy Trainer",
  name: "Faizan Uddin Khan",
  creds: "D.H.T. | D.CH.T.",
  role: "Certified Hijama & Chiropractic Therapist",
  experience: "4+ Years Experience",
  photo: "/assets/images/faizan-uddin-khan.jpg",
  focusLead: "The training will focus on:",
  focus: ["Simple Explanation", "Practical Demonstration", "Supervised Learning", "Real-World Guidance"],
};

export const includes = [
  "3 Days Offline Intensive Training",
  "Hijama Fundamentals",
  "Basic Anatomy Orientation",
  "Cupping Techniques",
  "Cupping Point Understanding",
  "Practical Demonstration",
  "Supervised Practical Learning",
  "Hygiene & Safety Guidance",
  "Client/Patient Handling Training",
  "Pre & Post Session Guidance",
  "Self-Employment Guidance",
  "Basic Marketing Guidance",
  "Doubt Clearing",
  "Training Material",
  "Course Completion Certificate",
];

export const bonuses = [
  { name: "Hijama Training Notes", body: "To revise the important concepts and training points.", icon: "notes" },
  { name: "Client Assessment Checklist", body: "To give your client interactions a clear structure.", icon: "clipboard" },
  { name: "Session Preparation Checklist", body: "To organise everything you need before a session.", icon: "check" },
  { name: "Self-Employment Starter Guide", body: "Practical pointers on service setup, pricing, client acquisition and marketing.", icon: "briefcase" },
  { name: "Post-Training Doubt Support", body: "Support to clear basic doubts after the training.", icon: "chat" },
];

export const audience = [
  { name: "Hijama Beginners", body: "Those who want to learn Hijama from the basics." },
  { name: "Therapy Practitioners", body: "Those who want to add cupping/Hijama knowledge to their existing skill set." },
  { name: "Aspiring Self-Employed Practitioners", body: "Those who want to explore a home-visit or wellness service model in the future." },
  { name: "Hijama Learners", body: "Those who want to understand the concepts through structured offline training." },
  { name: "Wellness Entrepreneurs", body: "Those planning to build a wellness/therapy service professionally." },
];

export const objective = {
  tag: "Not Just for a Certificate",
  title: "Skill + Practical Knowledge + Confidence",
  body: "The goal of our training is not just to hand out a certificate.",
  lead: "We want you to:",
  steps: [
    "Understand Hijama",
    "Understand safety",
    "See the practical workflow",
    "Learn client handling",
    "Plan your professional journey",
  ],
};

export const reasons = [
  { name: "Offline Training", body: "Face-to-face learning with the trainer." },
  { name: "Practical Focus", body: "Demonstrations and supervised practical learning." },
  { name: "Beginner Friendly", body: "Structured learning that starts from the basics." },
  { name: "Client Handling", body: "Not just technique — client communication too." },
  { name: "Self-Employment Guidance", body: "Basic guidance on turning the skill into a potential service or business." },
  { name: "Safety Focus", body: "Focus on hygiene, contraindications and safety considerations." },
  { name: "Limited Batch", body: "Limited seats for better interaction and doubt clearing." },
  { name: "Certificate", body: "Course completion certificate on successful completion." },
];

export const COURSE_DATES = "22, 23 & 25 December 2026";

export const details = [
  { k: "Course", v: "3-Day Offline Hijama Training Program" },
  { k: "Mode", v: "Offline / Classroom Training" },
  { k: "Date", v: COURSE_DATES },
  { k: "Location", v: "Delhi" },
  { k: "Timing", v: "[INSERT TIMING]" },
  { k: "Batch Size", v: "Limited Seats" },
  { k: "Certificate", v: "Course Completion Certificate" },
];

// Full course fee in rupees (shown on the page; the balance is paid separately).
export const COURSE_TOTAL_INR = 10000;

// Advance amount in rupees, charged through Cashfree to reserve a seat. Set to null to turn off
// online payment (the server then refuses to create orders and the form falls back to WhatsApp).
export const COURSE_FEE_INR = 3000 as number | null;

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export const fee = {
  tag: "Course Fee",
  label: "Special Training Fee",
  price: inr(COURSE_TOTAL_INR),
  advance: COURSE_FEE_INR ? inr(COURSE_FEE_INR) : null,
  advanceNote: COURSE_FEE_INR
    ? `Pay ${inr(COURSE_FEE_INR)} advance now to reserve your seat. Balance ${inr(COURSE_TOTAL_INR - COURSE_FEE_INR)} is payable before the training.`
    : null,
  note: "Limited seats available for this batch.",
  primary: "Reserve My Seat",
  secondary: "WhatsApp To Register",
};

export const invest = {
  title: "Invest 3 Days in Your Skill",
  body: "Instead of trying to understand Hijama from online videos alone, learn it through structured offline training, live demonstrations and trainer guidance.",
  badge: "Seats Are Limited",
  primary: "Book Your Seat Now",
  secondary: "WhatsApp Us for Registration",
};

export const faqs = [
  { q: "How long is the course?", a: "The course is a 3-day intensive offline training program." },
  { q: "Can beginners join?", a: "Yes. The training starts from foundational concepts, and the basics will be explained for beginners too." },
  { q: "Will there be practical training?", a: "Yes. The training includes practical demonstrations and supervised practical learning, in line with applicable safety protocols." },
  { q: "Will anatomy be taught?", a: "Yes. The course includes an orientation to basic human anatomy and the relevant body regions." },
  { q: "Will client/patient handling be taught?", a: "Yes. Client communication, basic pre-session interaction, comfort, after-care guidance and professional handling are all covered." },
  { q: "Will self-employment be covered?", a: "Yes. The course gives guidance on structuring a Hijama service professionally, the home-visit model, pricing, client acquisition, WhatsApp/Instagram marketing and basic self-employment planning." },
  { q: "Will I get a certificate?", a: "Yes. Participants who successfully complete the course will receive a Course Completion Certificate." },
  { q: "Can I practise Hijama independently after the course?", a: "The course certificate should not be treated as a medical license, government registration or authorization for independent practice. Before practising independently, you must verify your local laws, regulations, qualifications and applicable professional scope." },
  { q: "What language will the training be in?", a: "The training will primarily be conducted in Hindi/Hinglish." },
  { q: "Why are seats limited?", a: "The batch size is kept limited to maintain quality practical learning, trainer interaction and doubt clearing." },
];

export const disclaimer = [
  "Hijama, particularly wet cupping, can be an invasive procedure. The training gives importance to safety, hygiene, infection prevention, contraindications, client assessment and applicable precautions.",
  "The course completion certificate is not a medical degree, medical license, government registration or authorization for independent medical practice.",
  "Participants must comply with the applicable laws, regulations, professional requirements and scope of practice in their state/country.",
];

export const finale = {
  tag: "Your Hijama Learning Journey Starts Here",
  title: "3 Days. Practical Training. Real Guidance.",
  body: "Learn everything from Hijama fundamentals to anatomy, practical techniques, safety, client handling and self-employment guidance in one structured offline training program.",
  list: ["Learn Hijama", "Learn Practical Skills", "Learn Client Handling", "Learn Self-Employment Basics", "Get Course Completion Certificate"],
  ask: "Ready To Learn Hijama?",
  cta: "Reserve Your Seat Today",
  meta: "Limited Seats | 3-Day Offline Training",
  whatsapp: "WhatsApp Now For Registration",
};
