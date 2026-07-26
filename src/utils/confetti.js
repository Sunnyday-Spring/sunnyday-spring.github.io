const COLORS = ["#F5A623", "#7DD3FC", "#10B981", "#A855F7", "#F5F3EC"];

// Spawns a burst of small particles from (x, y) that fly outward and fade.
// Pure DOM/CSS, no canvas or library — cleans up after itself.
export function spawnConfetti(x, y, count = 26) {
  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    const size = 5 + Math.random() * 7;
    const angle = Math.random() * Math.PI * 2;
    const distance = 60 + Math.random() * 100;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance - 20; // slight upward bias
    const rotate = Math.random() * 420 - 210;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];

    Object.assign(el.style, {
      position: "fixed",
      left: `${x}px`,
      top: `${y}px`,
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: color,
      borderRadius: Math.random() > 0.5 ? "50%" : "2px",
      pointerEvents: "none",
      zIndex: 9999,
      opacity: "1",
      transform: "translate(-50%, -50%) translate(0, 0) rotate(0deg)",
      transition: "transform 0.85s cubic-bezier(0.2, 0.8, 0.3, 1), opacity 0.85s ease",
    });

    document.body.appendChild(el);

    requestAnimationFrame(() => {
      el.style.transform = `translate(-50%, -50%) translate(${dx}px, ${dy}px) rotate(${rotate}deg)`;
      el.style.opacity = "0";
    });

    setTimeout(() => el.remove(), 900);
  }
}
