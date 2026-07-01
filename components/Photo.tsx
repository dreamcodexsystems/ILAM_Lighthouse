"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * HD photo with a branded gradient + chandelier glyph baked in as the base layer,
 * so it looks intentional while loading and never breaks if a URL fails.
 */
export default function Photo({
  src,
  alt,
  from = "#2a200f",
  to = "#0e0d0b",
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: {
  src: string;
  alt: string;
  from?: string;
  to?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const [err, setErr] = useState(false);

  return (
    <div
      className={`relative h-full w-full overflow-hidden ${className}`}
      style={{ background: `linear-gradient(150deg, ${from}, ${to})` }}
    >
      {/* base glow + glyph (visible while loading / on error) */}
      <div
        className="absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(201,162,75,0.4), rgba(201,162,75,0) 70%)" }}
      />
      <svg viewBox="0 0 100 100" className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 opacity-25">
        <g stroke="#e4c580" strokeWidth="1.2" fill="none">
          <line x1="50" y1="6" x2="50" y2="30" />
          <ellipse cx="50" cy="40" rx="26" ry="8" />
          <ellipse cx="50" cy="54" rx="16" ry="5" />
        </g>
        <g fill="#e4c580">
          {[24, 38, 50, 62, 76].map((x) => <circle key={x} cx={x} cy="40" r="2.2" />)}
        </g>
      </svg>

      {!err && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          onError={() => setErr(true)}
        />
      )}
      <div className="absolute inset-0 ring-1 ring-inset ring-[var(--line)]" />
    </div>
  );
}
