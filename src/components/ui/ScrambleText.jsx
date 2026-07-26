import React, { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// Scrambles random characters then progressively "decodes" into the real text,
// left to right. Use for a one-time reveal on page load (e.g. the hero name).
export default function ScrambleText({ text, delay = 0, speed = 28, className, style }) {
  const [display, setDisplay] = useState(text.replace(/\S/g, " "));

  useEffect(() => {
    let revealed = 0;
    let interval;

    const start = setTimeout(() => {
      interval = setInterval(() => {
        revealed++;
        setDisplay(
          text
            .split("")
            .map((ch, i) => {
              if (ch === " ") return " ";
              if (i < revealed) return text[i];
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );
        if (revealed >= text.length) {
          clearInterval(interval);
          setDisplay(text);
        }
      }, speed);
    }, delay * 1000);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, delay, speed]);

  return (
    <span className={className} style={style}>
      {display}
    </span>
  );
}
