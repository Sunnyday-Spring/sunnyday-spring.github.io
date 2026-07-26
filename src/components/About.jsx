import React from "react";
import { C, body } from "../theme";
import { about, contact } from "../data";
import SectionLabel from "./ui/SectionLabel";
import PillButton from "./ui/PillButton";
import Reveal from "./ui/Reveal";
import { MailIcon, DownloadIcon, BranchIcon } from "./ui/Icons";

export default function About() {
  return (
    <section id="about" className="px-6 sm:px-10 lg:px-16 py-20 sm:py-24" style={{ backgroundColor: C.paper }}>
      <div className="max-w-6xl mx-auto">
        <SectionLabel index={about.labelIndex} title={about.labelTitle} dark={false} />

        <Reveal>
          <p style={{ ...body, color: C.inkSoft }} className="text-base sm:text-lg leading-relaxed mb-8">
            {about.text}
          </p>
        </Reveal>

        {/* Action buttons — replaces the old tag chips, styled like the reference screenshot */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-3">
            <PillButton href={contact.github} variant="dark" icon={<BranchIcon />}>
              GitHub
            </PillButton>
            <PillButton href={`mailto:${contact.email}`} variant="purple" icon={<MailIcon />} mailto>
              {contact.email}
            </PillButton>
            <PillButton href={contact.resumeUrl} variant="green" icon={<DownloadIcon />} download>
              {contact.resumeLabel}
            </PillButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
