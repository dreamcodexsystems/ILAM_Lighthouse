"use client";

/**
 * Branded gradient placeholder used in place of photography.
 * Swap for <Image/> + real HD photos in /public/img when assets are ready.
 */
export default function Placeholder({
  from,
  to,
  label,
  sub,
  className = "",
}: {
  from: string;
  to: string;
  label?: string;
  sub?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative h-full w-full overflow-hidden ${className}`}
      style={{ background: `linear-gradient(150deg, ${from}, ${to})` }}
    >
      {/* soft golden glow, like a fixture lighting the frame */}
      <div
        className="absolute left-1/2 top-1/3 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(201,162,75,0.45), rgba(201,162,75,0) 70%)" }}
      />
      {/* faint chandelier glyph */}
      <svg viewBox="0 0 100 100" className="absolute left-1/2 top-1/3 h-24 w-24 -translate-x-1/2 -translate-y-1/2 opacity-30">
        <g stroke="#e4c580" strokeWidth="1.2" fill="none">
          <line x1="50" y1="6" x2="50" y2="30" />
          <ellipse cx="50" cy="40" rx="26" ry="8" />
          <ellipse cx="50" cy="54" rx="16" ry="5" />
        </g>
        <g fill="#e4c580">
          {[24, 38, 50, 62, 76].map((x) => (
            <circle key={x} cx={x} cy="40" r="2.2" />
          ))}
          {[34, 50, 66].map((x) => (
            <circle key={x} cx={x} cy="54" r="1.8" />
          ))}
        </g>
      </svg>
      {label && (
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="font-serif text-xl text-ink/95">{label}</div>
          {sub && <div className="mt-0.5 text-sm text-muted">{sub}</div>}
        </div>
      )}
      <div className="absolute inset-0 ring-1 ring-inset ring-[var(--line)]" />
    </div>
  );
}
