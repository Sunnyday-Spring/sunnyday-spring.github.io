import React from "react";
import { C, mono, display, body, gridBg } from "../theme";
import { timeline } from "../data";
import SectionLabel from "./ui/SectionLabel";
import Reveal from "./ui/Reveal";

export default function Timeline() {
  return (
    <section id="timeline" data-blueprint="dark" className="px-6 sm:px-10 lg:px-16 py-20 sm:py-24" style={{ backgroundColor: C.navy, ...gridBg }}>
      <div className="max-w-6xl mx-auto">
        <SectionLabel index="05" title="Timeline" dark={true} />
        <div className="space-y-0">
          {timeline.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div
                className="grid sm:grid-cols-[160px_1fr] gap-2 sm:gap-6 py-5 px-3 -mx-3 transition-colors duration-300 hover:bg-white/5"
                style={{
                  borderTop: i === 0 ? `1px solid ${C.cyanDim}` : "none",
                  borderBottom: `1px solid ${C.cyanDim}`,
                }}
              >
                <span style={{ ...mono, color: C.amber }} className="text-xs tracking-widest">
                  {t.when}
                </span>
                <div>
                  <div style={{ ...display, color: C.paper }} className="font-semibold text-base">
                    {t.title}
                  </div>
                  <div style={{ ...body, color: C.cyan }} className="text-sm opacity-80 mt-0.5">
                    {t.place}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
