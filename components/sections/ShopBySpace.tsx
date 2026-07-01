import Reveal from "@/components/Reveal";
import StringLights from "@/components/StringLights";
import SectionDecor from "@/components/SectionDecor";
import Photo from "@/components/Photo";
import { spaces } from "@/lib/data";
import { IMG } from "@/lib/images";
import { ArrowRight } from "lucide-react";

export default function ShopBySpace() {
  return (
    <section id="spaces" className="relative scroll-mt-24 border-y border-line bg-bg2 py-24 md:py-32">
      <SectionDecor variant={1} />
      <StringLights className="absolute inset-x-0 top-4 z-0 opacity-70" />
      <div className="container-x relative z-10">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow">Shop by Space</p>
            <h2 className="h-serif mt-4 text-4xl text-ink md:text-5xl">Light, room by room</h2>
          </div>
          <p className="max-w-sm text-muted">
            Every space asks for a different mood. Find the fixture that fits the way you live.
          </p>
        </Reveal>
      </div>

      <Reveal className="relative z-10">
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {spaces.map((s) => (
            <a
              key={s.name}
              href="#contact"
              className="group relative h-[26rem] w-[20rem] shrink-0 snap-start overflow-hidden rounded-2xl border border-line md:w-[24rem]"
            >
              <Photo
                src={IMG.spaces[s.name]}
                alt={s.name}
                from={s.from}
                to={s.to}
                sizes="(max-width:768px) 80vw, 24rem"
                className="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6">
                <h3 className="font-serif text-2xl text-white">{s.name}</h3>
                <p className="mt-1 text-sm text-white/75">{s.copy}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  View fixtures <ArrowRight size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
