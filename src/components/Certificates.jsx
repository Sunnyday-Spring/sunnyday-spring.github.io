import React from "react";
import { C } from "../theme";
import { certificates } from "../data";
import SectionLabel from "./ui/SectionLabel";
import CertCard from "./ui/CertCard";
import Reveal from "./ui/Reveal";

export default function Certificates() {
  return (
    <section id="certificates" className="px-6 sm:px-10 lg:px-16 py-20 sm:py-24" style={{ backgroundColor: C.paper }}>
      <div className="max-w-6xl mx-auto">
        <SectionLabel index="04" title="Certificates" dark={false} />
        <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
          {certificates.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <CertCard {...c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
