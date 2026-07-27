// All the editable content for the site lives here.
// Change names, text, links, and skills without touching any component.

export const profile = {
  name: "Akbar Ali Ahmed Ahmed Naser",
  role: "Frontend Developer | Backend Developer",
  availableFrom: "Start: November 2026 | Duration: 4 Months",
};

export const contact = {
  email: "akbarnaser24@gmail.com",
  phone: "082-182-6013",
  github: "https://github.com/Sunnyday-Spring",
  githubLabel: "github.com/Sunnyday-Spring",
  // Points to /public/transcript.pdf — replace the file to update the download
  resumeUrl: "/transcript.pdf",
  resumeLabel: "Download Transcript (GRADE REPORT UP23)",
};

export const about = {
  labelIndex: "01",
  labelTitle: "SUMMARY",
  text: `นักศึกษาสาขาวิทยาการคอมพิวเตอร์ ที่มุ่งเน้นด้านการพัฒนาเว็บไซต์ส่วนหน้าบ้าน (React, Vue.js) เป็นหลัก โดยมีความสนใจอย่างมากในการต่อยอดไปสู่การสร้างระบบเว็บแบบครบวงจร (Full-stack) มีประสบการณ์ในการสร้างส่วนติดต่อผู้ใช้งาน (UI) และเคยมีประสบการณ์เบื้องต้น (Basic exposure) ในการเชื่อมต่อระบบหน้าบ้านเข้ากับ Backend APIs, ฐานข้อมูล และโมเดล Machine Learning มุ่งมั่นที่จะนำทักษะด้านหน้าบ้านมาประยุกต์ใช้ พร้อมกับเรียนรู้เพิ่มเติมอย่างจริงจังเพื่อสร้างระบบเว็บที่สมบูรณ์ และพร้อมสนับสนุนการทำงานของทีมพัฒนา`,
};

// Skill groups shown as icon-badge cards in the "02 — SKILLS" section.
// Each item: { label, bg, textColor?, icon: "atom" | "text" }
export const skillGroups = [
  {
    title: "Frontend",
    items: [
      { label: "React", image: "/logos/react.svg", bg: "#0B1220" },
      { label: "Vue", image: "/logos/vue.svg" },
      { label: "JS", image: "/logos/javascript.svg", bg: "#0B1220" },
      { label: "TypeScript", image: "/logos/typescript.svg" },
      { label: "HTML", image: "/logos/html.svg" },
      { label: "CSS", image: "/logos/css.svg" },
      { label: "Tailwind", image: "/logos/tailwind.svg" },
    ],
  },
  {
    title: "Backend",
    items: [
      { label: "Python", image: "/logos/python.svg" },
      { label: "Flask", image: "/logos/flask.svg" },
      { label: "FastAPI", image: "/logos/fastapi.svg" },
      { label: "Node", image: "/logos/node.svg" },
      { label: "SQL", bg: "#4479A1" }, // no single generic "SQL" brand logo, kept as a text badge
    ],
  },
  {
    title: "AI",
    items: [
      { label: "YOLO", bg: "#7C3AED" }, // research model name, not a brand logo
      { label: "sklearn", image: "/logos/scikitlearn.svg" },
    ],
  },
  {
    title: "Tools",
    items: [
      { label: "Figma", image: "/logos/figma.svg" },
      { label: "Git", image: "/logos/git.svg" },
      { label: "GitHub", image: "/logos/github.svg" },
      { label: "Postman", image: "/logos/postman.svg" },
    ],
  },
];

// The flagship project gets a full-width "case study" layout (see FeaturedProject.jsx)
export const featuredProject = {
  code: "DWG · 01",
  title: "Skill Gauge",
  tagline: "Construction Worker Skill Assessment System",
  taglineTh: "ระบบประเมินทักษะช่างก่อสร้าง",
  stack: ["React", "Python", "Flask", "SQL", "Git", "GitHub"],

  summary:
    "A full-stack web app that verifies construction workers' skills through structured exams, then automatically assigns tasks to the right people using an optimization algorithm.",
  summaryTh:
    "เว็บแอปแบบ full-stack ที่ประเมินทักษะช่างก่อสร้างด้วยข้อสอบที่มีโครงสร้างชัดเจน แล้วจัดสรรงานให้ตรงกับคนที่เหมาะสมโดยอัตโนมัติด้วยอัลกอริทึมการหาค่าเหมาะที่สุด",

  highlights: [
    "Team of 3 · PM & Full-stack",
    "4 role-based dashboards",
    "MIP-based task optimizer",
    "70% threshold DB optimization",
  ],
  highlightsTh: [
    "ทีม 3 คน · PM & Full-stack",
    "แดชบอร์ด 4 บทบาท",
    "จัดสรรงานด้วย MIP",
    "ลดพื้นที่ฐานข้อมูลด้วยเกณฑ์ 70%",
  ],

  overview: {
    label: "Overview & Problem Statement",
    labelTh: "ภาพรวมและปัญหา",
    about: {
      heading: "About the Project",
      headingTh: "เกี่ยวกับโปรเจกต์",
      text: "Skill Gauge is a full-stack web application built to bridge the gap between skill assessment and site execution in construction management. The platform evaluates construction workers through structured, calculation-based technical examinations and intelligently optimizes task assignments based on verified skill levels.",
      textTh: "Skill Gauge เป็นเว็บแอปพลิเคชันแบบ full-stack ที่พัฒนาขึ้นเพื่อเชื่อมช่องว่างระหว่างการประเมินทักษะและการปฏิบัติงานจริงในหน้างานก่อสร้าง ระบบประเมินช่างก่อสร้างผ่านข้อสอบเชิงคำนวณที่มีโครงสร้างชัดเจน และจัดสรรงานอย่างชาญฉลาดตามระดับทักษะที่ผ่านการยืนยันแล้ว",
    },
    problem: {
      heading: "The Problem It Solves",
      headingTh: "ปัญหาที่แก้ไข",
      text: "In traditional construction management, task allocation is often manual and prone to human error, resulting in skilled workers doing basic labor or under-skilled workers taking on complex structural tasks. Skill Gauge automates and verifies this workflow, ensuring the right tasks go to the right people while keeping data storage efficient.",
      textTh: "ในการบริหารงานก่อสร้างแบบดั้งเดิม การจัดสรรงานมักทำด้วยมือและมีโอกาสผิดพลาดสูง ทำให้ช่างที่มีทักษะสูงต้องทำงานพื้นฐาน หรือช่างที่ทักษะยังไม่พร้อมต้องรับงานโครงสร้างที่ซับซ้อนเกินไป Skill Gauge ช่วยให้กระบวนการนี้เป็นระบบอัตโนมัติและมีการยืนยันผล ทำให้งานที่เหมาะสมไปถึงคนที่เหมาะสม พร้อมจัดเก็บข้อมูลอย่างมีประสิทธิภาพ",
    },
  },

  myRole: {
    label: "My Role & Key Responsibilities",
    labelTh: "บทบาทและสิ่งที่ทำ",
    role: "Project Manager & Full-stack Developer",
    roleTh: "ผู้จัดการโปรเจกต์ & นักพัฒนา Full-stack",
    teamSize: "3 Members",
    teamSizeTh: "ทีม 3 คน",
    responsibilities: [
      "Led project planning, feature prioritization, and managed version control workflows using Git.",
      "Designed and developed multi-role user interfaces (PM, Foreman, Worker, Admin).",
      "Implemented backend logic, server-side workflow routing, and mathematical task assignment solvers.",
      "Designed relational database schemas and optimized backend storage constraints.",
    ],
    responsibilitiesTh: [
      "วางแผนโปรเจกต์ จัดลำดับความสำคัญของฟีเจอร์ และดูแล workflow การจัดการเวอร์ชันโค้ดด้วย Git",
      "ออกแบบและพัฒนาส่วนติดต่อผู้ใช้สำหรับ 4 บทบาท (PM, Foreman, Worker, Admin)",
      "พัฒนา logic ฝั่งเซิร์ฟเวอร์ การจัดสรร workflow และตัวคำนวณการจัดสรรงานเชิงคณิตศาสตร์",
      "ออกแบบโครงสร้างฐานข้อมูลเชิงสัมพันธ์ และปรับเงื่อนไขการจัดเก็บข้อมูลฝั่งเซิร์ฟเวอร์ให้มีประสิทธิภาพ",
    ],
  },

  frontend: {
    label: "Frontend Architecture",
    labelTh: "ส่วนหน้าบ้าน",
    stack: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    features: [
      {
        title: "Role-Based Access Control (RBAC)",
        text: "Custom dashboards and navigation flows tailored specifically for 4 user roles: Project Manager, Foreman, Worker, and Admin.",
        textTh: "แดชบอร์ดและเส้นทางการนำทางที่ออกแบบเฉพาะสำหรับผู้ใช้ 4 บทบาท: ผู้จัดการโปรเจกต์, โฟร์แมน, ช่าง, และผู้ดูแลระบบ",
      },
      {
        title: "Calculation-Based Exam Module",
        text: "An interactive examination screen designed for workers to take technical assessments covering 5 core construction categories:",
        textTh: "หน้าจอสอบแบบอินเทอร์แอคทีฟสำหรับให้ช่างทำข้อสอบเชิงเทคนิค ครอบคลุม 5 หมวดหลักของงานก่อสร้าง:",
        list: [
          "Rebar Calculation (งานเหล็กเสริม)",
          "Concrete Volume & Pouring (งานคอนกรีต)",
          "Formwork Area & Structure (งานไม้แบบ)",
          "Structural Elements (องค์ประกอบโครงสร้าง)",
          "Design & Theory (ทฤษฎีการออกแบบ)",
        ],
      },
    ],
  },

  backend: {
    label: "Backend & Logic Architecture",
    labelTh: "ส่วนหลังบ้าน",
    stack: ["Python (Flask)", "RESTful API", "SQL"],
    workflow: {
      heading: "Workflow & State Routing Logic",
      headingTh: "ตรรกะการจัดสรร Workflow ตามสถานะ",
      states: [
        {
          title: "Worker State 1 (No Exam)",
          text: "Restricted by the server to take only minor/basic tasks.",
          textTh: "ระบบจำกัดให้รับได้เฉพาะงานพื้นฐาน/งานย่อย",
        },
        {
          title: "Worker State 2 (Exam Passed, Pending Level)",
          text: "Paused in a waiting queue awaiting physical evaluation and sign-off by a Foreman.",
          textTh: "อยู่ในคิวรอการตรวจสอบภาคปฏิบัติและอนุมัติจากโฟร์แมน",
        },
        {
          title: "Worker State 3 (Leveled Worker)",
          text: "Eligible for major task assignments (Levels 1–3).",
          textTh: "มีสิทธิ์รับงานหลักตามระดับที่ประเมินได้ (Level 1–3)",
        },
      ],
    },
    solver: {
      heading: "Mathematical Assignment Solver (MIP)",
      headingTh: "ตัวคำนวณการจัดสรรงาน (MIP)",
      text: "Built the core assignment solver using Mixed-Integer Programming (MIP) logic on the backend. It dynamically processes worker skill levels and task difficulty requirements to calculate the most optimal worker-to-task distribution.",
      textTh: "พัฒนาตัวคำนวณการจัดสรรงานหลักด้วยหลัก Mixed-Integer Programming (MIP) ฝั่งเซิร์ฟเวอร์ ประมวลผลระดับทักษะของช่างและความยากของงานแบบไดนามิก เพื่อหาการจัดสรรงาน-ช่างที่เหมาะสมที่สุด",
    },
    dbOptimization: {
      heading: "Database Optimization",
      headingTh: "การปรับประสิทธิภาพฐานข้อมูล",
      text: "Designed the SQL database schema and implemented backend validation constraints: exam records are only saved to the database if the score meets or exceeds the 70% passing threshold, significantly reducing database overhead and redundant storage usage.",
      textTh: "ออกแบบโครงสร้างฐานข้อมูล SQL และกำหนดเงื่อนไขตรวจสอบฝั่งเซิร์ฟเวอร์ โดยจะบันทึกผลสอบลงฐานข้อมูลเฉพาะกรณีที่ได้คะแนนถึงเกณฑ์ผ่าน 70% ขึ้นไป ช่วยลดภาระและพื้นที่จัดเก็บข้อมูลที่ไม่จำเป็นได้มาก",
    },
  },

  techStackSummary: {
    label: "Tech Stack Summary",
    labelTh: "สรุปเทคโนโลยีที่ใช้",
    groups: [
      { title: "Frontend", items: ["React", "JavaScript", "Tailwind CSS"] },
      { title: "Backend", items: ["Python (Flask)"] },
      { title: "Optimization & Math", items: ["Mixed-Integer Programming (MIP)"] },
      { title: "Database", items: ["SQL"] },
      { title: "Tools & Collaboration", items: ["Git", "GitHub", "Postman", "Figma"] },
    ],
  },
};

export const projects = [
  {
    code: "DWG · 02",
    title: "Secure Access Terminal",
    role: "Safety Compliance Check-in Terminal for Construction Sites",
    roleTh: "ระบบเช็คอินตรวจสอบความปลอดภัยสำหรับไซต์ก่อสร้าง",
    bullets: [
      "Built the check-in terminal interface with Vue.js.",
      "Integrated a YOLO-based computer vision model for real-time safety-helmet detection before granting site access.",
      "Implemented face recognition with liveness detection to verify identity and prevent spoofing.",
    ],
    bulletsTh: [
      "พัฒนาหน้าจอเช็คอินด้วย Vue.js",
      "เชื่อมต่อโมเดล computer vision แบบ YOLO เพื่อตรวจจับการสวมหมวกนิรภัยแบบเรียลไทม์ก่อนอนุญาตให้เข้าไซต์งาน",
      "พัฒนาระบบจดจำใบหน้าพร้อม liveness detection เพื่อยืนยันตัวตนและป้องกันการปลอมแปลง",
    ],
    stack: ["Vue.js", "YOLO", "Computer Vision", "Face Recognition"],
  },
  {
    code: "DWG · 03",
    title: "Thai Review Sentiment Analysis",
    role: "NLP Text Classification — Academic Project",
    roleTh: "การจำแนกข้อความด้วย NLP — โปรเจกต์วิชาการ",
    bullets: [
      "Trained an NLP model to classify 5,000 Thai text reviews into positive and negative categories.",
      "Applied TF-IDF for text vectorization and Logistic Regression for the classification model.",
      "Evaluated performance and ran error analysis using precision, recall, and F1-score.",
    ],
    bulletsTh: [
      "เทรนโมเดล NLP เพื่อจำแนกรีวิวภาษาไทยกว่า 5,000 ข้อความ เป็นเชิงบวกและเชิงลบ",
      "ใช้ TF-IDF แปลงข้อความเป็นเวกเตอร์ และใช้ Logistic Regression สร้างโมเดลจำแนกประเภท",
      "ประเมินผลลัพธ์และวิเคราะห์ข้อผิดพลาดด้วย precision, recall และ F1-score",
    ],
    stack: ["Python", "NLP", "TF-IDF", "Scikit-learn", "Logistic Regression"],
  },
];

// Put your certificate image files in /public/certificates/ and reference them here.
// image path is relative to the "public" folder, e.g. "/certificates/cert-1.png"
export const certificates = [
  {
    title: "AI in Medical Imaging — NSTDA / NECTEC",
    image: "/certificates/cert-1.png",
    date: "6 Jul 2025",
  },
  {
    title: "CCNA: Introduction to Networks — Cisco",
    image: "/certificates/cert-2.png",
    date: "10 Oct 2025",
  },
  {
    title: "Foundations of Data Science — Google",
    image: "/certificates/cert-3.png",
    date: "12 Feb 2026",
  },
  {
    title: "Foundations of UX Design — Google",
    image: "/certificates/cert-4.png",
    date: "31 Aug 2024",
  },
];

export const timeline = [
  {
    when: "2022 — Present",
    title: "B.S. Computer Science",
    place: "University of Phayao · GPA 2.64 / 4.00",
  },
  {
    when: "2024",
    title: "HealthTech X2 — The Future Startup Program",
    place: "Designed UI layouts and system concepts in Figma with the team",
  },
];
