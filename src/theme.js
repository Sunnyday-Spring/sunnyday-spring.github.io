// Design tokens for the "blueprint" theme.
// Edit colors/fonts here and they update everywhere.

export const C = {
  navy: "#0F2547",
  navyDeep: "#0A1930",
  cyan: "#7DD3FC",
  cyanDim: "rgba(125,211,252,0.28)",
  cyanFaint: "rgba(125,211,252,0.12)",
  paper: "#F5F3EC",
  paperDim: "#EAE7DC",
  ink: "#101820",
  inkSoft: "#3A4652",
  amber: "#F5A623",
  slate: "#64748B",
};

export const mono = { fontFamily: "'IBM Plex Mono', 'Noto Sans Thai', monospace" };
export const display = { fontFamily: "'Space Grotesk', 'Noto Sans Thai', sans-serif" };
export const body = { fontFamily: "'Inter', 'Noto Sans Thai', sans-serif" };

// Faint grid-paper background used on the dark sections
export const gridBg = {
  backgroundImage: `
    linear-gradient(${C.cyanFaint} 1px, transparent 1px),
    linear-gradient(90deg, ${C.cyanFaint} 1px, transparent 1px)`,
  backgroundSize: "36px 36px",
};
