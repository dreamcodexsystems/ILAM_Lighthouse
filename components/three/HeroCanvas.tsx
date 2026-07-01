"use client";

import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Chandelier from "./Chandelier";

function Rig() {
  useFrame((state) => {
    const px = state.pointer.x;
    const py = state.pointer.y;
    state.camera.position.x += (px * 0.8 - state.camera.position.x) * 0.04;
    state.camera.position.y += (0.35 + py * 0.4 - state.camera.position.y) * 0.04;
    state.camera.lookAt(0, 0.2, 0);
  });
  return null;
}

export default function HeroCanvas() {
  const scrollRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      scrollRef.current = Math.min(window.scrollY / window.innerHeight, 1);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0.35, 5.4], fov: 42 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 0.6, 2.5]} intensity={8} distance={16} color="#ffe6b0" />
      <pointLight position={[2, -0.6, 1.5]} intensity={3} distance={12} color="#ffd98a" />
      <pointLight position={[-2.5, 1, -1]} intensity={2} distance={12} color="#c9a24b" />
      <Suspense fallback={null}>
        <Chandelier scrollRef={scrollRef} />
        <Sparkles count={70} scale={[7, 5, 4]} size={2.4} speed={0.25} color="#e4c580" opacity={0.7} />
      </Suspense>
      <Rig />
      <EffectComposer>
        <Bloom intensity={1.1} luminanceThreshold={0.18} luminanceSmoothing={0.9} mipmapBlur />
      </EffectComposer>
    </Canvas>
  );
}
