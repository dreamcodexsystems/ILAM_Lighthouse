"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, CalendarHeart } from "lucide-react";
import Photo from "@/components/Photo";
import { IMG } from "@/lib/images";

const HeroCanvas = dynamic(() => import("@/components/three/HeroCanvas"), { ssr: false });

export default function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const ok =
      window.matchMedia("(min-width: 768px)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReady(ok);
  }, []);

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* HD photo backdrop (right side on desktop, full on mobile) */}
      <div className="absolute inset-0 md:left-auto md:right-0 md:w-[62%]">
        <Photo src={IMG.hero} alt="Crystal chandelier in a grand interior" priority sizes="100vw" />
        {/* darken to a stage so the 3D + text read in both themes */}
        <div className="absolute inset-0 bg-black/45 md:bg-black/35" />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(60% 55% at 55% 42%, rgba(201,162,75,0.22), transparent 70%)" }}
        />
      </div>

      {/* blend the photo into the page background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg via-bg/85 to-transparent md:via-bg/40" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />

      {/* 3D chandelier on the dark stage (desktop only) */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[60%] md:block">
        {ready && <HeroCanvas />}
      </div>

      {/* text */}
      <div className="container-x relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="max-w-xl"
        >
          <p className="eyebrow">ILMA LightHouse</p>
          <h1 className="h-serif mt-5 text-5xl text-ink text-glow sm:text-6xl md:text-7xl">
            Where Light <span className="italic text-shimmer">Becomes</span> Art
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink/80 md:text-lg">
            Hand-crafted chandeliers and decorative lighting — designed in 3D, built in crystal and
            brass, and installed with care. Lighting that defines a room.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#categories" className="btn-gold animate-glow">
              Explore Collections <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-ghost">
              <CalendarHeart size={16} /> Book a Consultation
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-eyebrow text-ink/60">
        Scroll
      </div>
    </section>
  );
}
