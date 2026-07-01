/** Decorative twinkling string-light garland. */
export default function StringLights({ className = "" }: { className?: string }) {
  const n = 16;
  return (
    <div aria-hidden className={`pointer-events-none w-full ${className}`}>
      <svg viewBox="0 0 1200 48" preserveAspectRatio="none" className="h-9 w-full">
        <path d="M0 6 Q 100 34 200 12 T 400 12 T 600 12 T 800 12 T 1000 12 T 1200 6" fill="none" stroke="var(--line)" strokeWidth="1.4" />
        {Array.from({ length: n }).map((_, i) => {
          const x = 30 + i * (1140 / (n - 1));
          return (
            <g key={i}>
              <line x1={x} y1="13" x2={x} y2="24" stroke="var(--line)" strokeWidth="1" />
              <circle cx={x} cy="28" r="4" fill="#ffe6a8" className="animate-twinkle" style={{ animationDelay: `${(i % 5) * 0.25}s` }} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
