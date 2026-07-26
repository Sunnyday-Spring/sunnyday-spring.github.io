import React, { useRef, useState } from "react";
import { C, mono, display, body } from "../../theme";

export default function ProjectCard({ code, title, role, roleTh, bullets, bulletsTh, stack, lang = "en" }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  const isTh = lang === "th";
  const displayedRole = isTh && roleTh ? roleTh : role;
  const displayedBullets = isTh && bulletsTh ? bulletsTh : bullets;

  function handleMouseMove(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (0.5 - py) * 8, y: (px - 0.5) * 8 }); // rotateX, rotateY in deg, max ~4deg
  }

  function reset() {
    setHover(false);
    setTilt({ x: 0, y: 0 });
  }

  return (
    <div
      ref={ref}
      className="relative p-6 sm:p-7"
      style={{
        backgroundColor: C.paper,
        border: `1px solid ${hover ? `${C.amber}aa` : `${C.slate}44`}`,
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${hover ? -6 : 0}px)`,
        boxShadow: hover ? "0 22px 40px -18px rgba(15,37,71,0.35)" : "0 0 0 rgba(0,0,0,0)",
        transition: "transform 0.15s ease-out, box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
    >
      <div className="absolute -top-3 left-6 px-2" style={{ backgroundColor: C.paper }}>
        <span style={{ ...mono, color: C.navy }} className="text-[11px] tracking-widest">
          {code}
        </span>
      </div>
      <h3 style={{ ...display, color: C.ink }} className="text-xl sm:text-2xl font-semibold mb-1">
        {title}
      </h3>
      <p style={{ ...mono, color: C.slate }} className="text-xs tracking-wide uppercase mb-4">
        {displayedRole}
      </p>
      <ul className="space-y-2 mb-5">
        {displayedBullets.map((b, i) => (
          <li key={i} className="flex gap-2 text-sm" style={{ ...body, color: C.inkSoft }}>
            <span style={{ color: C.amber }} className="mt-1 shrink-0">
              ▸
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {stack.map((s) => (
          <span
            key={s}
            style={{ ...mono, color: C.navy, borderColor: `${C.navy}55` }}
            className="text-[10px] px-2 py-1 border tracking-wide"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
