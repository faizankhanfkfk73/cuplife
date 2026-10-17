// All copy comes from "3-Day Offline Hijama Training Landing Page Copy.md".
// Bracketed values are placeholders to fill in before launch.

export const WHATSAPP_NUMBER = "91XXXXXXXXXX"; // [INSERT WHATSAPP NUMBER]
export const whatsappLink = (text = "Assalamu Alaikum, mujhe 3-Day Offline Hijama Training ke liye register karna hai.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const nav = [
  { label: "Curriculum", href: "#curriculum" },
  { label: "Trainer", href: "#trainer" },
  { label: "Fee", href: "#fee" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "3-Day Offline Hijama Training Program",
  title: ["Hijama Therapy Seekhiye", "Practical Training Ke Saath"],
  sub: "3 Din Ki Intensive Offline Training Jahan Aap Hijama Ke Fundamentals, Anatomy, Practical Techniques, Client Handling Aur Self-Employment Ke Basics Seekhenge.",
  body: "Agar aap Hijama ko proper guidance aur practical training ke saath seekhna chahte hain, toh ye 3-Day Offline Training Program aapke liye design kiya gaya hai.",
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
  tag: "Kya Aap Taiyaar Hain?",
  title: "Kya aap Hijama therapy seekhna chahte hain?",
  lead: "Kya aapne kabhi socha hai:",
  items: [
    "Hijama properly kaise seekhein?",
    "Cupping points ko kaise understand karein?",
    "Client ko session se pehle aur baad mein kaise handle karein?",
    "Hijama seekhne ke baad is skill ko self-employment mein kaise use karein?",
  ],
  close: "Agar aap in questions ke answers practical training ke through samajhna chahte hain, toh ye program aapke liye hai.",
};

export const approach = {
  tag: "Humara Focus",
  title: "Ye sirf theory course nahi hai",
  steps: ["Learn", "Understand", "Observe", "Practice", "Build Confidence"],
  body: "Aapko Hijama ke concepts ke saath-saath practical workflow, client communication, safety aur basic business/self-employment guidance bhi di jayegi.",
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
    title: "Strong Foundation Se Shuruaat",
    intro: "Day 1 mein aap Hijama ke basic concepts aur professional workflow ko samjhenge.",
    label: "Topics",
    topics: [
      "Hijama kya hai?",
      "Hijama ka basic concept",
      "Hijama ke different types",
      "Dry Cupping & Wet Cupping ka introduction",
      "Traditional context of Hijama",
      "Basic Hijama equipment",
      "Equipment ka proper handling",
      "Session setup",
      "Basic hygiene principles",
      "Infection-control basics",
      "Client assessment ka introduction",
      "Basic safety considerations",
      "Contraindications & precautions",
      "Professional ethics & communication",
    ],
    goal: "Hijama ke fundamentals ko strong karna aur ek proper session ka basic workflow samajhna.",
    image: "/assets/images/consult.jpg",
  },
  {
    day: "Day 2",
    name: "Anatomy + Cupping Points",
    title: "Body Ko Samjhiye, Technique Ko Better Samjhiye",
    intro: "Hijama seekhne ke liye body ke basic anatomical structures ko samajhna important hai.",
    label: "Day 2 Topics",
    topics: [
      "Human body anatomy ka basic introduction",
      "Major body regions",
      "Muscles ka basic understanding",
      "Back anatomy",
      "Neck & shoulder region",
      "Arms & legs",
      "Lower back region",
      "Commonly used cupping areas",
      "Cupping points ka introduction",
      "Point selection ke basic principles",
      "Client positioning",
      "Cup placement",
      "Vacuum/pressure control",
      "Common practical mistakes",
      "Safety precautions",
    ],
    goal: "Body anatomy aur cupping application ke relationship ko better understand karna.",
    note: "Training mein point selection aur technique ko individual assessment, safety considerations aur applicable professional guidelines ke context mein samjhaya jayega.",
    image: "/assets/images/shoulder.jpg",
  },
  {
    day: "Day 3",
    name: "Practical Hijama Training",
    title: "Ab Theory Ko Practical Workflow Se Connect Kijiye",
    intro: "Day 3 ka major focus practical demonstration aur supervised learning par rahega.",
    label: "Practical Topics",
    topics: [
      "Complete session setup",
      "Equipment preparation",
      "Client preparation",
      "Proper client positioning",
      "Cup placement",
      "Vacuum control",
      "Wet cupping procedure ka supervised demonstration",
      "Hygiene & infection-control workflow",
      "Safe handling principles",
      "Post-session care",
      "Waste disposal & cleanup",
      "Common mistakes",
      "Practical corrections",
      "Doubt clearing",
      "Q&A session",
    ],
    goal: "Ek Hijama session ka complete professional workflow samajhna.",
    image: "/assets/images/back-massage.jpg",
  },
];

export const clientHandling = {
  tag: "Client / Patient Handling Training",
  title: "Sirf Hijama Karna Nahi — Client Ko Professionally Handle Karna Bhi Seekhiye",
  body: "Ek successful practitioner ke liye technique ke saath communication aur client handling bhi important hai.",
  lead: "Training mein aap seekhenge:",
  groups: [
    {
      name: "Communication",
      items: [
        "Client se professionally kaise baat karein",
        "First interaction kaise karein",
        "Client ki concerns kaise samjhein",
        "Client ki expectations kaise manage karein",
      ],
    },
    {
      name: "Pre-Session Handling",
      items: [
        "Basic client information kaise collect karein",
        "Relevant health/safety questions kaise discuss karein",
        "Session se pehle client ko kya explain karein",
        "Basic screening aur safety considerations",
      ],
    },
    {
      name: "During Session",
      items: [
        "Client ko comfortable kaise rakhein",
        "Procedure ke steps ko clearly kaise explain karein",
        "Anxiety/fear wale client se kaise communicate karein",
        "Professional behaviour maintain kaise karein",
      ],
    },
    {
      name: "After Session",
      items: [
        "Basic after-care guidance",
        "Client ke questions handle karna",
        "Follow-up communication",
        "Repeat session ke liye professional communication",
      ],
    },
  ],
};

export const selfEmployment = {
  tag: "Hijama Se Self-Employment Tak",
  title: "Skill Seekhiye Aur Apni Professional Journey Ki Planning Kijiye",
  body: "Agar aap Hijama ko future mein self-employment opportunity ke roop mein explore karna chahte hain, toh course mein basic business guidance bhi milegi.",
  lead: "Aap seekhenge:",
  items: [
    "Hijama service ko professionally structure kaise karein",
    "Home-visit Hijama service ka basic model",
    "Apna therapy/wellness setup plan karna",
    "Basic equipment & setup planning",
    "Service packages kaise design karein",
    "Pricing ka basic framework",
    "Client booking process",
    "WhatsApp se enquiries handle karna",
    "Instagram/Facebook par apni service promote karna",
    "Local clients generate karne ke basic methods",
    "Referral strategy",
    "Repeat-client strategy",
    "Personal branding basics",
    "Professional profile kaise banayein",
    "Lead ko booking mein convert karne ka basic process",
  ],
  path: ["Skill", "Confidence", "Client Handling", "Service Setup", "Self-Employment"],
};

export const marketing = {
  tag: "Basic Digital Marketing Guidance",
  title: "Apni service ko online present kijiye",
  body: "Aaj ke time mein skill ke saath apni service ko online present karna bhi important hai.",
  channels: [
    { name: "Instagram", icon: "instagram", items: ["Professional profile setup", "Bio kaise likhein", "Content ideas", "Local audience tak kaise pahunchhein"] },
    { name: "WhatsApp", icon: "whatsapp", items: ["Enquiry handling", "Service information share karna", "Appointment booking", "Follow-up"] },
    { name: "Facebook", icon: "facebook", items: ["Local audience targeting ka basic concept", "Local community marketing", "Service promotion basics"] },
  ],
};

export const trainer = {
  tag: "Training Kiske Dwara?",
  title: "Learn With Experienced Hijama & Therapy Trainer",
  name: "Faizan Uddin Khan",
  creds: "D.H.T. | D.CH.T.",
  role: "Certified Hijama & Chiropractic Therapist",
  experience: "4+ Years Experience",
  focusLead: "Training ka focus rahega:",
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
  { name: "Hijama Training Notes", body: "Important concepts aur training points ko revise karne ke liye.", icon: "notes" },
  { name: "Client Assessment Checklist", body: "Client interaction ko structured banane ke liye.", icon: "clipboard" },
  { name: "Session Preparation Checklist", body: "Session se pehle required preparation ko organize karne ke liye.", icon: "check" },
  { name: "Self-Employment Starter Guide", body: "Basic service setup, pricing, client acquisition aur marketing ke practical points.", icon: "briefcase" },
  { name: "Post-Training Doubt Support", body: "Training ke baad basic doubts ko clarify karne ke liye support.", icon: "chat" },
];

export const audience = [
  { name: "Hijama Beginners", body: "Jo basic se Hijama seekhna chahte hain." },
  { name: "Therapy Practitioners", body: "Jo apni existing skill set mein cupping/Hijama knowledge add karna chahte hain." },
  { name: "Aspiring Self-Employed Practitioners", body: "Jo future mein home-visit ya suitable wellness service model explore karna chahte hain." },
  { name: "Hijama Learners", body: "Jo structured offline training ke through concepts samajhna chahte hain." },
  { name: "Wellness Entrepreneurs", body: "Jo wellness/therapy service ko professionally build karne ki planning kar rahe hain." },
];

export const objective = {
  tag: "Sirf Certificate Ke Liye Nahi",
  title: "Skill + Practical Knowledge + Confidence",
  body: "Hamari training ka objective sirf certificate provide karna nahi hai.",
  lead: "Hum chahte hain ki aap:",
  steps: [
    "Hijama ko samjhein",
    "Safety ko samjhein",
    "Practical workflow dekhein",
    "Client handling seekhein",
    "Apni professional journey ki planning karein",
  ],
};

export const reasons = [
  { name: "Offline Training", body: "Trainer ke saath face-to-face learning." },
  { name: "Practical Focus", body: "Demonstration aur supervised practical learning." },
  { name: "Beginner Friendly", body: "Basic concepts se structured learning." },
  { name: "Client Handling", body: "Sirf technique nahi, client communication bhi." },
  { name: "Self-Employment Guidance", body: "Skill ko potential service/business opportunity mein convert karne ki basic guidance." },
  { name: "Safety Focus", body: "Hygiene, contraindications aur safety considerations par focus." },
  { name: "Limited Batch", body: "Better interaction aur doubt clearing ke liye limited seats." },
  { name: "Certificate", body: "Successful completion par course completion certificate." },
];

export const details = [
  { k: "Course", v: "3-Day Offline Hijama Training Program" },
  { k: "Mode", v: "Offline / Classroom Training" },
  { k: "Date", v: "[INSERT DATE]" },
  { k: "Location", v: "[INSERT CITY & VENUE]" },
  { k: "Timing", v: "[INSERT TIMING]" },
  { k: "Batch Size", v: "Limited Seats" },
  { k: "Certificate", v: "Course Completion Certificate" },
];

export const fee = {
  tag: "Course Fee",
  label: "Special Training Fee",
  price: "₹[FINAL PRICE]",
  note: "Limited seats available for this batch.",
  primary: "Reserve My Seat",
  secondary: "WhatsApp To Register",
};

export const invest = {
  title: "3 Din Apni Skill Par Invest Kijiye",
  body: "Hijama ko sirf online videos dekhkar samajhne ke bajaye structured offline training, demonstration aur trainer guidance ke saath seekhiye.",
  badge: "Seats Limited Hain",
  primary: "Book Your Seat Now",
  secondary: "WhatsApp Us for Registration",
};

export const faqs = [
  { q: "Course kitne din ka hai?", a: "Course 3 days ka intensive offline training program hai." },
  { q: "Kya beginners join kar sakte hain?", a: "Yes, training foundational concepts se start hogi. Beginners ke liye bhi basic concepts explain kiye jayenge." },
  { q: "Kya practical training hogi?", a: "Yes. Training mein practical demonstrations aur supervised practical learning included hogi, applicable safety protocols ke according." },
  { q: "Kya anatomy bhi sikhayi jayegi?", a: "Yes. Course mein basic human anatomy aur relevant body regions ka orientation diya jayega." },
  { q: "Kya client/patient handling sikhaya jayega?", a: "Yes. Client communication, basic pre-session interaction, comfort, after-care guidance aur professional handling cover ki jayegi." },
  { q: "Kya self-employment ke baare mein bhi bataya jayega?", a: "Yes. Course mein Hijama service ko professionally structure karne, home-visit model, pricing, client acquisition, WhatsApp/Instagram marketing aur basic self-employment planning par guidance di jayegi." },
  { q: "Kya certificate milega?", a: "Yes. Course successfully complete karne wale participants ko Course Completion Certificate diya jayega." },
  { q: "Kya course ke baad main independently Hijama practice kar sakta hoon?", a: "Course certificate ko medical license, government registration ya independent practice authorization nahi maana jana chahiye. Independent practice se pehle apne local laws, regulations, qualifications aur applicable professional scope ko verify karna zaroori hai." },
  { q: "Training kis language mein hogi?", a: "Training primarily Hindi/Hinglish mein conduct ki ja sakti hai." },
  { q: "Seats limited kyun hain?", a: "Practical learning, trainer interaction aur doubt clearing ko better maintain karne ke liye batch size limited rakha jayega." },
];

export const disclaimer = [
  "Hijama, particularly wet cupping, invasive procedure ho sakta hai. Training mein safety, hygiene, infection prevention, contraindications, client assessment aur applicable precautions ko importance di jayegi.",
  "Course completion certificate medical degree, medical license, government registration ya independent medical practice ki authorization nahi hai.",
  "Participants ko apne state/country ke applicable laws, regulations, professional requirements aur scope of practice ka compliance karna hoga.",
];

export const finale = {
  tag: "Your Hijama Learning Journey Starts Here",
  title: "3 Din. Practical Training. Real Guidance.",
  body: "Hijama ke fundamentals se lekar anatomy, practical techniques, safety, client handling aur self-employment guidance tak ek structured offline training program mein seekhiye.",
  list: ["Learn Hijama", "Learn Practical Skills", "Learn Client Handling", "Learn Self-Employment Basics", "Get Course Completion Certificate"],
  ask: "Ready To Learn Hijama?",
  cta: "Reserve Your Seat Today",
  meta: "Limited Seats | 3-Day Offline Training",
  whatsapp: "WhatsApp Now For Registration",
};
