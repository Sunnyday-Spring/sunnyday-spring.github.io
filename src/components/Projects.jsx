import React, { useState } from "react";
import { C, mono } from "../theme";
import { projects } from "../data";
import SectionLabel from "./ui/SectionLabel";
import ProjectCard from "./ui/ProjectCard";
import Reveal from "./ui/Reveal";

export default function Projects() {
  const [lang, setLang] = useState("en");

  return (
    <section id="projects" className="px-6 sm:px-10 lg:px-16 py-20 sm:py-24" style={{ backgroundColor: C.paperDim }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <SectionLabel index="03" title="Project Details" dark={false} className="!mb-0 flex-1" />
          <div className="flex rounded-full overflow-hidden border" style={{ borderColor: `${C.slate}55` }}>
            {["en", "th"].map((code) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                style={{
                  ...mono,
                  backgroundColor: lang === code ? C.navy : "transparent",
                  color: lang === code ? C.paper : C.slate,
                }}
                className="px-4 py-1.5 text-xs tracking-widest uppercase transition-colors duration-200"
              >
                {code}
              </button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-2">
          {projects.map((p, i) => (
            <Reveal key={p.code} delay={i * 0.1}>
              <ProjectCard {...p} lang={lang} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
