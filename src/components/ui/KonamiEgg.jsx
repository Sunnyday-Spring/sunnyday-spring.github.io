import { useEffect } from "react";
import { spawnConfetti } from "../../utils/confetti";

const SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

export default function KonamiEgg() {
  useEffect(() => {
    let idx = 0;

    function handleKey(e) {
      if (e.code === SEQUENCE[idx]) {
        idx++;
        if (idx === SEQUENCE.length) {
          idx = 0;
          triggerEgg();
        }
      } else {
        idx = e.code === SEQUENCE[0] ? 1 : 0;
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  function triggerEgg() {
    spawnConfetti(window.innerWidth / 2, window.innerHeight / 2, 70);

    const banner = document.createElement("div");
    banner.textContent = "🎉 SECRET FOUND — thanks for exploring! akbarnaser24@gmail.com";
    Object.assign(banner.style, {
      position: "fixed",
      top: "24px",
      left: "50%",
      backgroundColor: "#0A1930",
      color: "#7DD3FC",
      padding: "10px 22px",
      borderRadius: "999px",
      border: "1px solid rgba(125,211,252,0.4)",
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: "12px",
      letterSpacing: "0.03em",
      zIndex: 10000,
      boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
      opacity: "0",
      transform: "translate(-50%, -8px)",
      transition: "opacity 0.4s ease, transform 0.4s ease",
      whiteSpace: "nowrap",
    });
    document.body.appendChild(banner);

    requestAnimationFrame(() => {
      banner.style.opacity = "1";
      banner.style.transform = "translate(-50%, 0)";
    });

    setTimeout(() => {
      banner.style.opacity = "0";
      banner.style.transform = "translate(-50%, -8px)";
      setTimeout(() => banner.remove(), 400);
    }, 3200);
  }

  return null;
}
