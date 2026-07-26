// All the editable content for the site lives here.
// Change names, text, links, and skills without touching any component.

export const profile = {
  name: "Akbar Ali Ahmed Ahmed Naser",
  role: "FULLSTACK DEVELOPER | FRONTEND DEVELOPER",
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

export const projects = [
  {
    code: "DWG · 01",
    title: "Skill Gauge",
    role: "Construction Worker Skill Assessment System — Project Manager & Full-stack",
    roleTh: "ระบบประเมินทักษะช่างก่อสร้าง — ผู้จัดการโปรเจกต์ & Full-stack",
    bullets: [
      "Acted as Project Manager for a 3-member development team, coordinating tasks and managing version control with Git.",
      "Built a full-stack web app with a React frontend and a Python (Flask) REST API backend across four roles: PM, Foreman, Worker, and Admin.",
      "Developed a technical exam module covering calculation-based assessments across 5 construction categories (Rebar, Concrete, Formwork, Elements, Design/Theory).",
      "Implemented server-side workflow routing, including Mixed-Integer Programming (MIP) to optimally assign tasks by assessed skill level.",
      "Designed the SQL database schema and optimized storage by only persisting exam records that meet the 70% passing threshold.",
    ],
    bulletsTh: [
      "รับบทบาทผู้จัดการโปรเจกต์ (Project Manager) ดูแลทีมพัฒนา 3 คน วางแผนงานและจัดการเวอร์ชันโค้ดด้วย Git",
      "พัฒนาเว็บแอปแบบ full-stack ด้วย React ฝั่งหน้าบ้าน และ Python (Flask) REST API ฝั่งหลังบ้าน รองรับ 4 บทบาท: PM, Foreman, Worker, Admin",
      "พัฒนาโมดูลข้อสอบทักษะเชิงคำนวณ ครอบคลุม 5 หมวดงานก่อสร้าง (เหล็กเสริม, คอนกรีต, แบบหล่อ, งานติดตั้ง, ออกแบบ/ทฤษฎี)",
      "ออกแบบระบบจัดสรรงานฝั่งเซิร์ฟเวอร์ รวมถึงใช้ Mixed-Integer Programming (MIP) เพื่อจัดสรรงานให้เหมาะกับระดับทักษะที่ประเมินได้",
      "ออกแบบโครงสร้างฐานข้อมูล SQL และลดพื้นที่จัดเก็บด้วยการเก็บเฉพาะผลสอบที่ผ่านเกณฑ์ 70%",
    ],
    stack: ["React", "Python", "Flask", "SQL", "Git", "GitHub"],
  },
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