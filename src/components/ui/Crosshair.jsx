import React from "react";
import { C } from "../../theme";

export default function Crosshair({ className = "", delay = 0 }) {
  const style = { animationDelay: `${delay}s` };
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" className={className}>
      <line className="draw-stroke" style={style} x1="11" y1="0" x2="11" y2="22" stroke={C.cyan} strokeWidth="1" opacity="0.6" />
      <line className="draw-stroke" style={style} x1="0" y1="11" x2="22" y2="11" stroke={C.cyan} strokeWidth="1" opacity="0.6" />
      <circle className="draw-stroke" style={style} cx="11" cy="11" r="3.5" fill="none" stroke={C.cyan} strokeWidth="1" />
    </svg>
  );
}
