"use client";

import { useState } from "react";
import StringLights from "@/components/StringLights";
import SectionDecor from "@/components/SectionDecor";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import { gallery } from "@/lib/data";
import { IMG } from "@/lib/images";

export default function Lookbook() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="lookbook" className="relative scroll-mt-24 py-24 md:py-32">
      <SectionDecor variant={0} />
      <StringLights className="absolute inset-x-0 top-4 z-0 opacity-70" />
      <div className="container-x relative z-10">
        <Reveal className="mb-12 max-w-2xl">
          <p className="eyebrow">Lookbook</p>
          <h2 className="h-serif mt-4 text-4xl text-ink md:text-5xl">In real rooms</h2>
          <p className="mt-4 text-muted">A few of our favourite installations. Tap any image to enlarge.</p>
        </Reveal>

        <div className="columns-2 gap-4 md:columns-3 [&>*]:mb-4">
          {gallery.map((g, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`block w-full overflow-hidden rounded-xl border border-line transition-transform duration-500 hover:-translate-y-1 hover:glow-gold ${
                g.tall ? "aspect-[3/4]" : "aspect-square"
              }`}
            >
              <Photo src={IMG.lookbook[i % IMG.lookbook.length]} alt={`Installation ${i + 1}`} from={g.from} to={g.to} sizes="(max-width:768px) 50vw, 33vw" />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] grid place-items-center bg-black/85 p-6 backdrop-blur-sm"
          >
            <button className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white" aria-label="Close">
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="aspect-[4/3] w-full max-w-3xl overflow-hidden rounded-2xl border border-line"
            >
              <Photo src={IMG.lookbook[active % IMG.lookbook.length]} alt={`Installation ${active + 1}`} sizes="80vw" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
