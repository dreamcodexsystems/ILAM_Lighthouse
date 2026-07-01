import Reveal from "@/components/Reveal";
import SectionDecor from "@/components/SectionDecor";
import Photo from "@/components/Photo";
import { categories } from "@/lib/data";
import { IMG } from "@/lib/images";
import { ArrowUpRight } from "lucide-react";

export default function Categories() {
  return (
    <section id="categories" className="relative scroll-mt-24 py-24 md:py-32">
      <SectionDecor variant={0} />
      <div className="container-x relative z-10">
        <Reveal className="mb-14 max-w-2xl">
          <p className="eyebrow">Collections</p>
          <h2 className="h-serif mt-4 text-4xl text-ink md:text-5xl">Lighting for every gesture</h2>
          <p className="mt-4 text-muted">
            From sculptural centrepieces to quiet accents — explore our curated categories.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.06}>
              <a href="#contact" className="group block [perspective:1200px]" aria-label={c.name}>
                <div
                  className="animate-floaty relative aspect-[4/5] overflow-hidden rounded-2xl border border-line transition-all duration-500 will-change-transform group-hover:-translate-y-1.5 group-hover:[transform:rotateX(4deg)] group-hover:glow-gold"
                  style={{ animationDelay: `${i * 0.5}s` }}
                >
                  <Photo
                    src={IMG.categories[c.name]}
                    alt={c.name}
                    from={c.from}
                    to={c.to}
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* readable caption scrim */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-5">
                    <div className="font-serif text-2xl text-white">{c.name}</div>
                    <div className="mt-0.5 text-sm text-white/70">{c.blurb}</div>
                  </div>
                  <div className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/30 bg-black/30 text-gold opacity-0 backdrop-blur transition-opacity duration-500 group-hover:opacity-100">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
