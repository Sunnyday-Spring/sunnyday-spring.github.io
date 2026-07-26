import React, { useState } from "react";
import { C, mono, display, body } from "../theme";
import { profile, contact } from "../data";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <footer style={{ backgroundColor: C.navyDeep }} className="px-6 sm:px-10 lg:px-16 py-14">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-3" style={{ border: `1px solid ${C.cyanDim}` }}>
        <div className="p-5" style={{ borderRight: `1px solid ${C.cyanDim}` }}>
          <div style={{ ...mono, color: C.cyan }} className="text-[10px] tracking-widest mb-1">
            DRAWN BY
          </div>
          <div style={{ ...display, color: C.paper }} className="text-sm font-semibold">
            {profile.name}
          </div>
          <div style={{ ...mono, color: C.cyan }} className="text-[10px] tracking-widest mt-4 mb-1">
            PROJECT
          </div>
          <div style={{ ...body, color: C.paper }} className="text-sm opacity-80">
            {profile.role}
          </div>
        </div>

        <div className="p-5" style={{ borderRight: `1px solid ${C.cyanDim}` }}>
          <div style={{ ...mono, color: C.cyan }} className="text-[10px] tracking-widest mb-1">
            CONTACT
          </div>
          <button
            onClick={handleCopy}
            className="block text-left text-sm mb-2 hover:opacity-70 transition-opacity"
            style={{ ...body, color: C.paper }}
          >
            {copied ? "Copied ✓" : contact.email}
          </button>
          <div style={{ ...body, color: C.paper }} className="text-sm opacity-80 mb-2">
            {contact.phone}
          </div>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm hover:opacity-70 transition-opacity"
            style={{ ...body, color: C.amber }}
          >
            {contact.githubLabel}
          </a>
        </div>

        <div className="p-5">
          <div style={{ ...mono, color: C.cyan }} className="text-[10px] tracking-widest mb-1">
            REVISION
          </div>
          <div style={{ ...body, color: C.paper }} className="text-sm opacity-80 mb-2">
            {profile.revision} · 2026
          </div>
          <div style={{ ...mono, color: C.cyan }} className="text-[10px] tracking-widest mb-1">
            SCALE
          </div>
          <div style={{ ...body, color: C.paper }} className="text-sm opacity-80">
            1 : 1
          </div>
        </div>
      </div>
      <p style={{ ...mono, color: C.slate }} className="text-center text-[10px] tracking-widest mt-6">
        © 2026 — BUILT WITH REACT + TAILWIND
      </p>
    </footer>
  );
}
