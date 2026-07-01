import MiniChandelier from "./MiniChandelier";

/** Faint animated chandeliers floating behind a section's content. */
export default function SectionDecor({ variant = 0 }: { variant?: number }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <MiniChandelier
        glow={false}
        className="animate-floaty absolute -top-3 right-5 h-28 w-24 opacity-[0.13] md:right-16 md:h-40 md:w-32"
      />
      {variant % 2 === 0 && (
        <MiniChandelier
          glow={false}
          className="animate-floaty absolute bottom-8 left-3 h-20 w-16 opacity-[0.08] md:left-10 md:h-28 md:w-24"
        />
      )}
    </div>
  );
}
