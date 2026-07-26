import React, { useEffect, useRef, useState } from "react";
import { C, mono } from "../../theme";

export default function SectionLabel({ index, title, dark, className = "" }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`flex items-baseline gap-3 mb-8 ${className}`}>
      <span style={{ ...mono, color: dark ? C.cyan : C.amber }} className="text-sm tracking-widest">
        {index}
      </span>
      <span
        style={{ ...mono, color: dark ? C.paper : C.ink }}
        className="text-xs tracking-[0.25em] uppercase opacity-70"
      >
        {title}
      </span>
      <span
        className="h-px flex-1"
        style={{
          backgroundColor: dark ? C.cyanDim : C.slate,
          opacity: 0.4,
          transform: inView ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
    </div>
  );
}
