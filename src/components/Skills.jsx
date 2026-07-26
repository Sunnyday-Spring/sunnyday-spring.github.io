import React from "react";
import { C, gridBg } from "../theme";
import { skillGroups } from "../data";
import SectionLabel from "./ui/SectionLabel";
import SkillCard from "./ui/SkillCard";
import Reveal from "./ui/Reveal";

export default function Skills() {
  return (
    <section id="skills" data-blueprint="dark" className="px-6 sm:px-10 lg:px-16 py-20 sm:py-24" style={{ backgroundColor: C.navy, ...gridBg }}>
      <div className="max-w-6xl mx-auto">
        <SectionLabel index="02" title="Skills" dark={true} />
        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <SkillCard title={g.title} items={g.items} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
