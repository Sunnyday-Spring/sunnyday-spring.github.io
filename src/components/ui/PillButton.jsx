import React, { useRef, useState } from "react";
import { spawnConfetti } from "../../utils/confetti";

// variant controls the background: "dark" | "purple" | "green"
// Matches the GitHub / Email / Download-style pill buttons from the reference design.
const VARIANTS = {
  dark: { backgroundColor: "#171B24" },
  purple: { backgroundImage: "linear-gradient(90deg, #6366F1, #A855F7)" },
  green: { backgroundImage: "linear-gradient(90deg, #10B981, #06B6D4)" },
};

export default function PillButton({ href, variant = "dark", icon, children, mailto = false, download = false }) {
  const ref = useRef(null);
  const [hover, setHover] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: relX * 0.2, y: relY * 0.35 });
  }

  function reset() {
    setHover(false);
    setOffset({ x: 0, y: 0 });
  }

  function handleClick(e) {
    // little celebratory burst specifically on the download button
    if (variant === "green") {
      spawnConfetti(e.clientX, e.clientY, 22);
    }
  }

  const lift = hover ? -4 : 0;

  return (
    <a
      ref={ref}
      href={href}
      target={mailto || download ? undefined : "_blank"}
      rel={mailto || download ? undefined : "noreferrer"}
      download={download}
      onMouseEnter={() => setHover(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      onClick={handleClick}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white"
      style={{
        ...VARIANTS[variant],
        transform: `translate(${offset.x}px, ${offset.y + lift}px)`,
        transition: "transform 0.15s ease-out, box-shadow 0.2s ease",
        boxShadow: hover ? "0 12px 24px -10px rgba(0,0,0,0.4)" : "0 0 0 rgba(0,0,0,0)",
      }}
    >
      {icon}
      {children}
    </a>
  );
}
