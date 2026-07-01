"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import SectionDecor from "@/components/SectionDecor";
import { IMG } from "@/lib/images";
import { ArrowRight } from "lucide-react";

const MiniChandelierCanvas = dynamic(() => import("@/components/three/MiniChandelierCanvas"), { ssr: false });

export default function SignatureCollection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(
      window.matchMedia("(min-width: 768px)").matches &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  return (
    <section ref={ref} className="relative py-24 md:py-32">
      <SectionDecor variant={1} />
      <div className="container-x relative z-10 grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <motion.div
            style={{ y }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line glow-gold"
          >
            {/* dark stage so the 3D chandelier reads in any theme */}
            <div className="absolute inset-0" style={{ background: "radial-gradient(70% 60% at 50% 42%, #2a2010, #0e0d0b)" }} />
            {ready ? (
              <MiniChandelierCanvas />
            ) : (
              <Photo src={IMG.signature} alt="The Aurora Series chandelier" from="#3a2b13" to="#0e0d0b" sizes="(max-width:1024px) 100vw, 50vw" />
            )}
            <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(60% 50% at 50% 45%, rgba(201,162,75,0.18), transparent 70%)" }} />
          </motion.div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow">Signature Collection</p>
          <h2 className="h-serif mt-4 text-4xl text-ink md:text-5xl">The Aurora Series</h2>
          <p className="mt-5 max-w-lg leading-relaxed text-muted">
            Our flagship line. Cascading hand-cut crystal suspended on a brushed-brass frame, tuned
            to scatter warm light like first dawn. Each piece is made to order and finished by hand
            in our atelier.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {IMG.signatureThumbs.map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-xl border border-line">
                <Photo src={src} alt={`Aurora detail ${i + 1}`} sizes="20vw" />
              </div>
            ))}
          </div>

          <a href="#contact" className="btn-ghost mt-9">
            Discover Aurora <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
