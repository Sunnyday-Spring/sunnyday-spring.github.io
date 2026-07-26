import React from "react";

// Wrap any text in <GlitchHover> to get a cyberpunk-style RGB-split glitch
// jitter on hover. Uses only CSS (see .glitch-* rules in index.css).
export default function GlitchHover({ children, className = "" }) {
  return (
    <span className={`glitch-wrap ${className}`}>
      <span className="glitch-base">{children}</span>
      <span className="glitch-layer glitch-red" aria-hidden="true">
        {children}
      </span>
      <span className="glitch-layer glitch-cyan" aria-hidden="true">
        {children}
      </span>
    </span>
  );
}
