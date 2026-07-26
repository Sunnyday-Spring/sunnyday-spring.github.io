import React, { useEffect, useRef, useState } from "react";
import { C, mono } from "../../theme";

// Mount this once (in App.jsx). It shows an "X: 0000  Y: 0000" readout that
// follows the cursor, but only while hovering an element marked
// data-blueprint="dark" (see Hero.jsx / Skills.jsx / Timeline.jsx).
export default function CursorCoords() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const frame = useRef(null);

  useEffect(() => {
    function handleMove(e) {
      if (frame.current) return;
      frame.current = requestAnimationFrame(() => {
        const onDark = e.target.closest && e.target.closest('[data-blueprint="dark"]');
        setVisible(Boolean(onDark));
        setPos({ x: e.clientX, y: e.clientY });
        frame.current = null;
      });
    }
    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 hidden sm:block"
      style={{
        left: pos.x + 18,
        top: pos.y + 14,
        ...mono,
        color: C.cyan,
        fontSize: "10px",
        letterSpacing: "0.05em",
        backgroundColor: "rgba(10,25,48,0.85)",
        border: `1px solid ${C.cyanDim}`,
        borderRadius: "3px",
        padding: "3px 7px",
        whiteSpace: "nowrap",
      }}
    >
      X:{String(Math.round(pos.x)).padStart(4, "0")} Y:{String(Math.round(pos.y)).padStart(4, "0")}
    </div>
  );
}
