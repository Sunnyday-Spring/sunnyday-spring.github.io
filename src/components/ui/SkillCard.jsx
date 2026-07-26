import React from "react";
import { display } from "../../theme";
import { AtomIcon } from "./Icons";

function Badge({ label, bg, textColor = "#fff", icon, image }) {
  if (image) {
    return (
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-sm overflow-hidden transition-transform duration-200 hover:scale-110 hover:shadow-md"
        style={{ backgroundColor: bg || "#F1F5F9" }}
        title={label}
      >
        <img
          src={image}
          alt={label}
          className="w-full h-full object-contain p-1.5"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.nextSibling.style.display = "flex";
          }}
        />
        <span
          className="hidden items-center justify-center w-full h-full"
          style={{ fontSize: "10px", fontWeight: 700, color: "#334155", fontFamily: "'IBM Plex Mono', monospace" }}
        >
          {label}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`h-11 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-transform duration-200 hover:scale-110 hover:shadow-md ${
        icon === "atom" ? "w-11" : "px-3"
      }`}
      style={{ backgroundColor: bg, color: textColor, minWidth: icon === "atom" ? undefined : "44px" }}
      title={label}
    >
      {icon === "atom" ? (
        <AtomIcon className="w-5 h-5" />
      ) : (
        <span style={{ fontSize: "11px", fontWeight: 700, fontFamily: "'IBM Plex Mono', monospace", whiteSpace: "nowrap" }}>
          {label}
        </span>
      )}
    </div>
  );
}

export default function SkillCard({ title, items }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <h3 style={{ ...display, color: "#101820" }} className="text-lg font-semibold mb-4">
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {items.map((it) => (
          <Badge key={it.label} {...it} />
        ))}
      </div>
    </div>
  );
}
