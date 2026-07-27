import React, { useLayoutEffect, useRef, useState } from "react";
import { C, mono, display, body } from "../../theme";

function t(lang, en, th) {
  return lang === "th" && th ? th : en;
}

function SubHeading({ index, title }) {
  return (
    <div className="flex items-baseline gap-3 mb-5 mt-10 first:mt-0">
      <span style={{ ...mono, color: C.amber }} className="text-sm tracking-widest shrink-0">
        {String(index).padStart(2, "0")}
      </span>
      <span style={{ ...display, color: C.ink }} className="text-lg sm:text-xl font-semibold">
        {title}
      </span>
      <span style={{ backgroundColor: C.slate, opacity: 0.3 }} className="h-px flex-1" />
    </div>
  );
}

function Chip({ children }) {
  return (
    <span
      style={{ ...mono, color: C.navy, borderColor: `${C.navy}55` }}
      className="text-[10px] px-2 py-1 border tracking-wide inline-block"
    >
      {children}
    </span>
  );
}

function ChipRow({ items }) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {items.map((s) => (
        <Chip key={s}>{s}</Chip>
      ))}
    </div>
  );
}

function Bullet({ children }) {
  return (
    <li className="flex gap-2 text-sm sm:text-base" style={{ ...body, color: C.inkSoft }}>
      <span style={{ color: C.amber }} className="mt-1 shrink-0">
        ▸
      </span>
      <span>{children}</span>
    </li>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function FeaturedProject({ project, lang = "en" }) {
  const p = project;
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);

  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useLayoutEffect(() => {
    if (!contentRef.current) return;
    setMaxHeight(open ? contentRef.current.scrollHeight : 0);
  }, [open, lang]);

  function handleMouseMove(e) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (0.5 - py) * 6, y: (px - 0.5) * 6 }); // gentler than the compact cards, since this one is much larger
  }

  function resetTilt() {
    setHover(false);
    setTilt({ x: 0, y: 0 });
  }

  return (
    <div
      ref={cardRef}
      className="relative p-7 sm:p-9"
      style={{
        backgroundColor: C.paper,
        border: `1px solid ${hover ? `${C.amber}aa` : `${C.slate}44`}`,
        transform: `perspective(1400px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        boxShadow: hover ? "0 26px 45px -20px rgba(15,37,71,0.35)" : "0 0 0 rgba(0,0,0,0)",
        transition: "transform 0.15s ease-out, box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
    >
      <div className="absolute -top-3 left-7 px-2" style={{ backgroundColor: C.paper }}>
        <span style={{ ...mono, color: C.navy }} className="text-[11px] tracking-widest">
          {p.code}
        </span>
      </div>

      {/* ===== Always-visible preview ===== */}
      <span style={{ ...mono, color: C.amber }} className="text-[11px] tracking-[0.25em] uppercase">
        Featured Project
      </span>
      <h3 style={{ ...display, color: C.ink }} className="text-2xl sm:text-3xl font-bold mt-1 mb-1">
        {p.title}
      </h3>
      <p style={{ ...mono, color: C.slate }} className="text-xs sm:text-sm tracking-wide uppercase mb-4">
        {t(lang, p.tagline, p.taglineTh)}
      </p>

      <p style={{ ...body, color: C.inkSoft }} className="text-sm sm:text-base leading-relaxed mb-4 max-w-3xl">
        {t(lang, p.summary, p.summaryTh)}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {(t(lang, p.highlights, p.highlightsTh) || p.highlights).map((h) => (
          <span
            key={h}
            style={{ ...mono, color: C.navy, backgroundColor: C.paperDim }}
            className="text-[11px] px-2.5 py-1 rounded-full tracking-wide"
          >
            {h}
          </span>
        ))}
      </div>

      <ChipRow items={p.stack} />

      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 mt-1 mb-1 transition-opacity hover:opacity-70"
        style={{ ...mono, color: C.navy }}
      >
        <span className="text-xs tracking-widest uppercase border-b" style={{ borderColor: C.navy }}>
          {open ? t(lang, "Show less", "ย่อเนื้อหา") : t(lang, "View full case study", "ดูรายละเอียดเพิ่มเติม")}
        </span>
        <ChevronIcon open={open} />
      </button>

      {/* ===== Expandable detail ===== */}
      <div
        style={{
          maxHeight: `${maxHeight}px`,
          transition: "max-height 0.45s ease",
          overflow: "hidden",
        }}
      >
        <div ref={contentRef}>
          {/* 1. Overview & Problem Statement */}
          <SubHeading index={1} title={t(lang, p.overview.label, p.overview.labelTh)} />
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h4 style={{ ...display, color: C.navy }} className="text-sm font-semibold mb-2">
                {t(lang, p.overview.about.heading, p.overview.about.headingTh)}
              </h4>
              <p style={{ ...body, color: C.inkSoft }} className="text-sm sm:text-base leading-relaxed">
                {t(lang, p.overview.about.text, p.overview.about.textTh)}
              </p>
            </div>
            <div>
              <h4 style={{ ...display, color: C.navy }} className="text-sm font-semibold mb-2">
                {t(lang, p.overview.problem.heading, p.overview.problem.headingTh)}
              </h4>
              <p style={{ ...body, color: C.inkSoft }} className="text-sm sm:text-base leading-relaxed">
                {t(lang, p.overview.problem.text, p.overview.problem.textTh)}
              </p>
            </div>
          </div>

          {/* 2. My Role & Key Responsibilities */}
          <SubHeading index={2} title={t(lang, p.myRole.label, p.myRole.labelTh)} />
          <p style={{ ...body, color: C.inkSoft }} className="text-sm sm:text-base mb-3">
            <strong style={{ color: C.ink }}>{t(lang, p.myRole.role, p.myRole.roleTh)}</strong>
            {" · "}
            {t(lang, p.myRole.teamSize, p.myRole.teamSizeTh)}
          </p>
          <ul className="space-y-2">
            {(t(lang, p.myRole.responsibilities, p.myRole.responsibilitiesTh) || p.myRole.responsibilities).map(
              (r, i) => (
                <Bullet key={i}>{r}</Bullet>
              )
            )}
          </ul>

          {/* 3. Technical Architecture & Implementation */}
          <SubHeading index={3} title="Technical Architecture & Implementation" />
          <div className="grid md:grid-cols-2 gap-8">
            {/* Frontend */}
            <div>
              <h4 style={{ ...display, color: C.navy }} className="text-base font-semibold mb-3">
                 {t(lang, p.frontend.label, p.frontend.labelTh)}
              </h4>
              <ChipRow items={p.frontend.stack} />
              <div className="space-y-4">
                {p.frontend.features.map((f, i) => (
                  <div key={i}>
                    <p style={{ ...body, color: C.ink }} className="text-sm sm:text-base font-medium mb-1">
                      {f.title}
                    </p>
                    <p style={{ ...body, color: C.inkSoft }} className="text-sm leading-relaxed">
                      {t(lang, f.text, f.textTh)}
                    </p>
                    {f.list && (
                      <ol className="mt-2 space-y-1 list-decimal list-inside">
                        {f.list.map((li, j) => (
                          <li key={j} style={{ ...body, color: C.inkSoft }} className="text-sm">
                            {li}
                          </li>
                        ))}
                      </ol>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h4 style={{ ...display, color: C.navy }} className="text-base font-semibold mb-3">
                 {t(lang, p.backend.label, p.backend.labelTh)}
              </h4>
              <ChipRow items={p.backend.stack} />

              <p style={{ ...body, color: C.ink }} className="text-sm sm:text-base font-medium mb-1">
                {t(lang, p.backend.workflow.heading, p.backend.workflow.headingTh)}
              </p>
              <ul className="space-y-2 mb-4">
                {p.backend.workflow.states.map((s, i) => (
                  <li key={i} style={{ ...body, color: C.inkSoft }} className="text-sm leading-relaxed">
                    <strong style={{ color: C.ink }}>{s.title}:</strong> {t(lang, s.text, s.textTh)}
                  </li>
                ))}
              </ul>

              <p style={{ ...body, color: C.ink }} className="text-sm sm:text-base font-medium mb-1">
                {t(lang, p.backend.solver.heading, p.backend.solver.headingTh)}
              </p>
              <p style={{ ...body, color: C.inkSoft }} className="text-sm leading-relaxed mb-4">
                {t(lang, p.backend.solver.text, p.backend.solver.textTh)}
              </p>

              <p style={{ ...body, color: C.ink }} className="text-sm sm:text-base font-medium mb-1">
                {t(lang, p.backend.dbOptimization.heading, p.backend.dbOptimization.headingTh)}
              </p>
              <p style={{ ...body, color: C.inkSoft }} className="text-sm leading-relaxed">
                {t(lang, p.backend.dbOptimization.text, p.backend.dbOptimization.textTh)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
