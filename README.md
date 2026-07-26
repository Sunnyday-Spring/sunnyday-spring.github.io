# Akbar Portfolio

เว็บพอร์ตโฟลิโอธีม "Blueprint" — สร้างด้วย React + Vite + Tailwind CSS

## วิธีรันโปรเจกต์

```bash
npm install
npm run dev
```

แล้วเปิด http://localhost:5173

Build เป็นไฟล์จริงด้วย:

```bash
npm run build
```

## โครงสร้างไฟล์ (แก้ตรงไหนได้บ้าง)

```
src/
  data.js              ← แก้ข้อความ/ข้อมูลทั้งหมดที่นี่ที่เดียว (ชื่อ, About, Skills, Projects, Timeline, ลิงก์ติดต่อ)
  theme.js             ← สี, ฟอนต์, ลาย grid พื้นหลัง
  App.jsx              ← ลำดับ section ของหน้าเว็บ
  components/
    Hero.jsx           ← ส่วนหัว (ชื่อ, รูปโปรไฟล์, DWG NO.)
    About.jsx          ← ส่วน "01 SPEC SHEET" + ปุ่ม GitHub/Email/Resume
    Skills.jsx         ← ส่วน "02 SKILLS" (การ์ด icon ทักษะ)
    Projects.jsx       ← ส่วน "03 PROJECT DETAILS"
    Timeline.jsx       ← ส่วน "04 TIMELINE"
    Footer.jsx         ← Title block ท้ายเว็บ
    ui/
      SectionLabel.jsx ← หัวข้อ section แบบ "01 — TITLE"
      SkillCard.jsx    ← การ์ดทักษะ + badge ไอคอน
      ProjectCard.jsx  ← การ์ดโปรเจกต์
      PillButton.jsx   ← ปุ่มทรงแคปซูล (GitHub / Email / Download)
      Icons.jsx        ← ไอคอน SVG เล็ก ๆ ที่ใช้ในปุ่ม/badge
      Crosshair.jsx    ← เครื่องหมายกากบาทมุมจอ (ตกแต่ง)
  assets/
    profile.jpg        ← รูปโปรไฟล์ (เปลี่ยนไฟล์นี้เพื่อเปลี่ยนรูป)
```

## สิ่งที่ควรแก้ก่อนใช้งานจริง

- `src/data.js` → `contact.resumeUrl` ตอนนี้เป็น `"#"` ให้เปลี่ยนเป็นลิงก์ไฟล์ resume/transcript จริง (เช่นลิงก์ Google Drive หรือไฟล์ที่ host ไว้)
- `src/assets/profile.jpg` → เปลี่ยนเป็นรูปที่ต้องการ (ตั้งชื่อไฟล์เดิม หรือเปลี่ยน import ใน `Hero.jsx`)
- สีและฟอนต์ทั้งหมดปรับได้จาก `src/theme.js` ที่เดียว จะกระทบทั้งเว็บ
