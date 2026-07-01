"use client";

/** Animated SVG chandelier — sways and twinkles. Used as decorative accents. */
export default function MiniChandelier({ className = "", glow = true }: { className?: string; glow?: boolean }) {
  return (
    <div aria-hidden className={`pointer-events-none relative ${className}`}>
      {glow && (
        <div
          className="absolute left-1/2 top-1/2 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(201,162,75,0.28), transparent 70%)" }}
        />
      )}
      <svg viewBox="0 0 120 150" className="animate-sway h-full w-full">
        <g stroke="var(--gold)" strokeWidth="1.4" fill="none" opacity="0.9">
          <line x1="60" y1="2" x2="60" y2="28" />
          <ellipse cx="60" cy="48" rx="42" ry="9" />
          <ellipse cx="60" cy="70" rx="27" ry="7" />
          <ellipse cx="60" cy="90" rx="13" ry="4" />
          <line x1="18" y1="48" x2="32" y2="28" />
          <line x1="102" y1="48" x2="88" y2="28" />
          <line x1="32" y1="28" x2="88" y2="28" />
          <line x1="60" y1="94" x2="60" y2="104" />
        </g>
        <g fill="#ffe6a8">
          {[18, 39, 60, 81, 102].map((x, i) => (
            <circle key={x} cx={x} cy="48" r="3.2" className="animate-twinkle" style={{ animationDelay: `${i * 0.3}s` }} />
          ))}
          {[44, 60, 76].map((x, i) => (
            <circle key={x} cx={x} cy="70" r="2.8" className="animate-twinkle" style={{ animationDelay: `${i * 0.3 + 0.15}s` }} />
          ))}
          <circle cx="60" cy="106" r="2.8" className="animate-twinkle" />
        </g>
      </svg>
    </div>
  );
}
