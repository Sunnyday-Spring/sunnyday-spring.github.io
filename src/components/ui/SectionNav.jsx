import React, { useEffect, useState } from "react";
import { C } from "../../theme";

const SECTIONS = [
  { id: "hero", label: "INTRO" },
  { id: "about", label: "01 SPEC SHEET" },
  { id: "skills", label: "02 SKILLS" },
  { id: "projects", label: "03 PROJECTS" },
  { id: "certificates", label: "04 CERTS" },
];

export default function SectionNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observers = [];
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.5 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  function goTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-4">
      {SECTIONS.map((s) => {
        const isActive = active === s.id;
        return (
          <button
            key={s.id}
            onClick={() => goTo(s.id)}
            className="group relative flex items-center"
            aria-label={s.label}
          >
            <span
              className="absolute right-full mr-3 px-2 py-1 rounded text-[10px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
              style={{
                backgroundColor: "rgba(10,25,48,0.9)",
                color: C.cyan,
                fontFamily: "'IBM Plex Mono', monospace",
                letterSpacing: "0.05em",
              }}
            >
              {s.label}
            </span>
            <span
              className="rounded-full transition-all duration-300"
              style={{
                width: isActive ? "10px" : "6px",
                height: isActive ? "10px" : "6px",
                backgroundColor: isActive ? C.amber : `${C.slate}99`,
                boxShadow: isActive ? `0 0 8px ${C.amber}` : "none",
              }}
            />
          </button>
        );
      })}
    </div>
  );
}
