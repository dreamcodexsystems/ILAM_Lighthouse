import Reveal from "@/components/Reveal";
import SectionDecor from "@/components/SectionDecor";
import Photo from "@/components/Photo";
import { services } from "@/lib/data";
import { IMG } from "@/lib/images";
import { PenTool, Video, Wrench, Sparkles, Building2, ArrowRight, type LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = { PenTool, Video, Wrench, Sparkles, Building2 };

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 border-y border-line bg-bg2 py-24 md:py-32">
      <SectionDecor variant={0} />
      <div className="container-x relative z-10">
        <Reveal className="mb-14 max-w-2xl">
          <p className="eyebrow">Services</p>
          <h2 className="h-serif mt-4 text-4xl text-ink md:text-5xl">From first sketch to final glow</h2>
          <p className="mt-4 text-muted">
            A complete, white-glove service — so the only thing you handle is the switch.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Sparkles;
            return (
              <Reveal key={s.title} delay={i * 0.05} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-bg transition-all duration-500 hover:-translate-y-1.5 hover:glow-gold">
                  {/* demo image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Photo
                      src={IMG.services[i % IMG.services.length]}
                      alt={s.title}
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/10 to-transparent" />
                    <div className="absolute -bottom-6 left-6 grid h-12 w-12 place-items-center rounded-full border border-line bg-bg text-gold transition-all duration-500 group-hover:glow-gold">
                      <Icon size={20} />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-7 pt-9">
                    <h3 className="font-serif text-2xl text-ink">{s.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{s.desc}</p>
                    <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm text-gold opacity-80 transition-opacity group-hover:opacity-100">
                      Learn more <ArrowRight size={14} />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}

          {/* CTA tile to fill the 6th cell */}
          <Reveal delay={services.length * 0.05} className="h-full">
            <a href="#contact" className="flex h-full min-h-[18rem] flex-col items-start justify-end rounded-2xl border border-dashed border-line bg-bg p-7 transition-all duration-500 hover:border-gold hover:glow-gold">
              <Sparkles className="text-gold" size={24} />
              <h3 className="mt-5 font-serif text-2xl text-ink">Not sure where to start?</h3>
              <p className="mt-2 text-sm text-muted">Tell us about your space and we’ll design a lighting plan around it.</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm text-gold">
                Book a consultation <ArrowRight size={14} />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
