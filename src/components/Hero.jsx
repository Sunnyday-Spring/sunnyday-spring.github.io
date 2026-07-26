import React, { useEffect, useState } from "react";
import { C, mono, display, gridBg } from "../theme";
import { profile } from "../data";
import Crosshair from "./ui/Crosshair";
import ScrambleText from "./ui/ScrambleText";
import GlitchHover from "./ui/GlitchHover";
import profileImg from "../assets/profile.jpg";

export default function Hero() {
  // Plays once on page load (not scroll-triggered, since the hero is already in view)
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay = 0) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(18px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <section id="hero" data-blueprint="dark" className="relative overflow-hidden px-6 sm:px-10 lg:px-16 pt-14 pb-20" style={{ backgroundColor: C.navy, ...gridBg }}>
      <Crosshair className="absolute top-6 left-6 opacity-70" delay={0} />
      <Crosshair className="absolute top-6 right-6 opacity-70" delay={0.15} />
      <Crosshair className="absolute bottom-6 left-6 opacity-70" delay={0.3} />
      <Crosshair className="absolute bottom-6 right-6 opacity-70" delay={0.45} />

      <div className="flex justify-between items-start max-w-6xl mx-auto">
        <span style={{ ...mono, color: C.cyan }} className="text-xs tracking-[0.25em]">
          PORTFOLIO / Akbar
        </span>
        <div className="text-right">
          <div style={{ ...mono, color: C.cyan }} className="text-xs tracking-[0.25em]">
            {profile.drawingNo}
          </div>
          <div style={{ ...mono, color: C.paper }} className="text-xs tracking-[0.25em] opacity-60">
            {profile.revision}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-14 flex flex-col-reverse sm:flex-row items-center sm:items-end gap-10">
        <div className="flex-1 text-center sm:text-left" style={fade(0)}>
          <p style={{ ...mono, color: C.amber }} className="text-xs tracking-[0.3em] mb-3">
            CANDIDATE PROFILE
          </p>
          <h1 style={{ ...display, color: C.paper }} className="text-4xl sm:text-6xl font-bold leading-[1.05] mb-4">
            <GlitchHover>
              <ScrambleText text={profile.name.split(" ").slice(0, 2).join(" ")} delay={0.1} speed={26} />
            </GlitchHover>
            <br />
            <GlitchHover>
              <ScrambleText text={profile.name.split(" ").slice(2).join(" ")} delay={0.5} speed={26} />
            </GlitchHover>
          </h1>
          <p style={{ ...mono, color: C.cyan }} className="text-sm sm:text-base tracking-wide">
            // {profile.role}
            <span className="blink-cursor" style={{ color: C.amber }}>
              _
            </span>
          </p>
        </div>

        <div className="relative shrink-0" style={fade(0.15)}>
          <svg width="192" height="192" viewBox="0 0 192 192" className="absolute inset-0 spin-slow">
            <circle cx="96" cy="96" r="94" fill="none" stroke={C.cyan} strokeWidth="1" strokeDasharray="2 6" opacity="0.6" />
            {[...Array(24)].map((_, i) => {
              const angle = (i / 24) * Math.PI * 2;
              const x1 = 96 + Math.cos(angle) * 100;
              const y1 = 96 + Math.sin(angle) * 100;
              const x2 = 96 + Math.cos(angle) * 94;
              const y2 = 96 + Math.sin(angle) * 94;
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.cyan} strokeWidth="1" opacity="0.5" />;
            })}
          </svg>
          <img
            src={profileImg}
            alt={profile.name}
            className="w-48 h-48 rounded-full object-cover relative"
            style={{ border: `2px solid ${C.paper}`, margin: "8px", objectPosition: "center 15%" }}
          />
        </div>
      </div>

      <div
        className="max-w-6xl mx-auto mt-14 flex flex-wrap justify-between gap-4 pt-4"
        style={{ borderTop: `1px solid ${C.cyanDim}`, ...mono, ...fade(0.3) }}
      >
        <span className="text-[11px] tracking-widest" style={{ color: C.paper, opacity: 0.7 }}>
          SCALE 1:1
        </span>
        <span className="text-[11px] tracking-widest" style={{ color: C.paper, opacity: 0.7 }}>
          MATERIAL: REACT + TAILWIND
        </span>
        <span className="text-[11px] tracking-widest" style={{ color: C.amber }}>
          {profile.availableFrom}
        </span>
      </div>
    </section>
  );
}
