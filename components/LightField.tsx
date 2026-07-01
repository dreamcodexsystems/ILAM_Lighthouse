"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

/** Ambient drifting gold light motes across the whole page. Cheap 2D canvas. */
export default function LightField() {
  const ref = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0, raf = 0;
    type P = { x: number; y: number; r: number; s: number; a: number; tw: number };
    let ps: P[] = [];

    const init = () => {
      w = window.innerWidth; h = window.innerHeight;
      c.width = w * DPR; c.height = h * DPR;
      c.style.width = w + "px"; c.style.height = h + "px";
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      const N = Math.min(80, Math.floor((w * h) / 22000));
      ps = Array.from({ length: N }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        r: Math.random() * 1.6 + 0.4, s: Math.random() * 0.22 + 0.04,
        a: Math.random() * Math.PI * 2, tw: Math.random() * 0.02 + 0.004,
      }));
    };
    init();

    const light = resolvedTheme === "light";
    const color = light ? "176,137,47" : "228,197,128";
    const base = light ? 0.45 : 0.7;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of ps) {
        p.y -= p.s; p.a += p.tw;
        if (p.y < -6) { p.y = h + 6; p.x = Math.random() * w; }
        const tw = (Math.sin(p.a) + 1) / 2;
        const R = p.r * 6;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, R);
        g.addColorStop(0, `rgba(${color},${(0.45 + 0.55 * tw) * base})`);
        g.addColorStop(1, `rgba(${color},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, R, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => init();
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, [resolvedTheme]);

  return <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-0" />;
}
