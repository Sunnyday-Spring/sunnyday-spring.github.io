import React, { useEffect, useState } from "react";
import { C } from "../../theme";

export default function ScrollRuler() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    function onScroll() {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = (el.scrollHeight || document.body.scrollHeight) - el.clientHeight;
      setPct(scrollHeight > 0 ? Math.min(100, (scrollTop / scrollHeight) * 100) : 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ticks = Array.from({ length: 11 });

  return (
    <div className="fixed left-3 top-0 h-screen w-4 z-40 hidden md:flex justify-center pointer-events-none py-6">
      <div className="relative w-px h-full" style={{ backgroundColor: `${C.slate}55` }}>
        {ticks.map((_, i) => (
          <div
            key={i}
            className="absolute left-0"
            style={{ top: `${i * 10}%`, width: i % 5 === 0 ? "8px" : "5px", height: "1px", backgroundColor: `${C.slate}88` }}
          />
        ))}
        <div
          className="absolute left-0 top-0 w-px transition-[height] duration-150 ease-out"
          style={{ height: `${pct}%`, backgroundColor: C.amber }}
        />
        <div
          className="absolute rounded-full transition-[top] duration-150 ease-out"
          style={{
            left: "-3.5px",
            top: `calc(${pct}% - 4px)`,
            width: "8px",
            height: "8px",
            backgroundColor: C.amber,
            boxShadow: `0 0 8px ${C.amber}`,
          }}
        />
      </div>
    </div>
  );
}
