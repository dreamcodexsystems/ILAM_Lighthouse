import Reveal from "@/components/Reveal";
import SectionDecor from "@/components/SectionDecor";
import CountUp from "@/components/CountUp";

const STATS = [
  { to: 18, suffix: "+", label: "Years of craft" },
  { to: 4200, suffix: "+", label: "Fixtures installed" },
  { to: 36, suffix: "", label: "Cities served" },
];

export default function WhyIlma() {
  return (
    <section className="relative py-24 md:py-32">
      <SectionDecor variant={1} />
      <div className="container-x relative z-10 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal>
          <p className="eyebrow">Why ILMA</p>
          <h2 className="h-serif mt-4 text-4xl text-ink md:text-5xl">
            Made by hand. <br /> Measured by light.
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-muted">
            We believe a chandelier is architecture you can switch on. Every ILMA piece begins as a
            3D model, is cut from solid brass and full-lead crystal, and is assembled prism by prism
            by artisans who have spent decades perfecting the way light moves through glass.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            The result is warmth without glare, sparkle without noise — fixtures built to outlast
            trends and be passed on.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line">
            {STATS.map((s) => (
              <div key={s.label} className="flex items-baseline justify-between bg-bg px-8 py-8">
                <div className="font-serif text-5xl text-gold md:text-6xl">
                  <CountUp to={s.to} suffix={s.suffix} />
                </div>
                <div className="text-right text-sm uppercase tracking-wider text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
