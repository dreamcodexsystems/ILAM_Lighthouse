"use client";

import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Chandelier from "./Chandelier";

export default function MiniChandelierCanvas() {
  const s = useRef(0);
  return (
    <Canvas camera={{ position: [0, 0.2, 5], fov: 42 }} dpr={[1, 1.8]} gl={{ antialias: true, alpha: true }} style={{ background: "transparent" }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 0.6, 2.5]} intensity={8} distance={16} color="#ffe6b0" />
      <pointLight position={[2, -0.6, 1.5]} intensity={3} distance={12} color="#ffd98a" />
      <pointLight position={[-2.2, 1, -1]} intensity={2} distance={12} color="#c9a24b" />
      <Chandelier scrollRef={s} />
      <Sparkles count={45} scale={[5, 4, 3]} size={2.2} speed={0.25} color="#e4c580" opacity={0.7} />
      <EffectComposer>
        <Bloom intensity={1.1} luminanceThreshold={0.18} luminanceSmoothing={0.9} mipmapBlur />
      </EffectComposer>
    </Canvas>
  );
}
