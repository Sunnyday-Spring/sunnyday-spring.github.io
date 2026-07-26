import React from "react";
import { C, mono, display } from "../../theme";

export default function CertCard({ title, image, date }) {
  return (
    <div className="group">
      <div
        className="relative aspect-[4/3] overflow-hidden transition-colors duration-300"
        style={{ border: `1px solid ${C.slate}55`, backgroundColor: "#fff" }}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${C.amber}aa`)}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = `${C.slate}55`)}
      >
        {/* corner ticks, echoes the blueprint crosshair motif at a smaller scale */}
        <span className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t border-l z-10" style={{ borderColor: C.navy, opacity: 0.5 }} />
        <span className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t border-r z-10" style={{ borderColor: C.navy, opacity: 0.5 }} />
        <span className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b border-l z-10" style={{ borderColor: C.navy, opacity: 0.5 }} />
        <span className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b border-r z-10" style={{ borderColor: C.navy, opacity: 0.5 }} />

        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain p-5 transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.nextSibling.style.display = "flex";
          }}
        />
        {/* fallback shown if the image file hasn't been added yet */}
        <div
          className="hidden absolute inset-0 items-center justify-center text-center p-4"
          style={{ ...mono, color: C.slate, fontSize: "11px" }}
        >
          วางไฟล์รูปที่{"\n"}public/certificates/
        </div>
      </div>
      <p style={{ ...display, color: C.ink }} className="text-base font-medium mt-4 text-center">
        {title}
      </p>
      {date && (
        <p style={{ ...mono, color: C.slate }} className="text-[11px] tracking-widest text-center mt-1">
          {date}
        </p>
      )}
    </div>
  );
}