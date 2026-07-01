"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX: x }}
      className="fixed left-0 top-0 z-[70] h-[3px] w-full origin-left"
    >
      <div className="h-full w-full bg-gradient-to-r from-gold via-gold2 to-gold" style={{ boxShadow: "0 0 12px rgba(201,162,75,0.7)" }} />
    </motion.div>
  );
}
