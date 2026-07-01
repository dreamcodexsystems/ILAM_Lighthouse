"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const GOLD = "#c9a24b";
const CRYSTAL = "#fdebbf";

type Tier = { r: number; count: number; y: number };
const TIERS: Tier[] = [
  { r: 1.55, count: 10, y: 0 },
  { r: 1.05, count: 8, y: 0.5 },
  { r: 0.58, count: 6, y: 0.98 },
];

export default function Chandelier({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  const group = useRef<THREE.Group>(null!);
  const beads = useRef<THREE.InstancedMesh>(null!);
  const baseY = 0.05;

  const brass = useMemo(
    () => new THREE.MeshStandardMaterial({ color: GOLD, metalness: 1, roughness: 0.28, emissive: new THREE.Color("#2a1d09"), emissiveIntensity: 0.45 }),
    []
  );
  const bulb = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#fff4d6", emissive: new THREE.Color("#ffd98a"), emissiveIntensity: 3.2, toneMapped: false }),
    []
  );
  const crystalMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: CRYSTAL, metalness: 0.25, roughness: 0.04, emissive: new THREE.Color(GOLD), emissiveIntensity: 0.85, transparent: true, opacity: 0.9, toneMapped: false }),
    []
  );
  const beadGeo = useMemo(() => new THREE.OctahedronGeometry(0.03, 0), []);

  // tidy hanging crystal strands draping from each tier
  const strand = useMemo(() => {
    const arr: { p: THREE.Vector3; s: number }[] = [];
    TIERS.forEach((t) => {
      const strands = t.count;
      for (let s = 0; s < strands; s++) {
        const a = ((s + 0.5) / strands) * Math.PI * 2;
        const n = 8;
        for (let b = 0; b < n; b++) {
          const yy = t.y - 0.06 - b * 0.075;
          const rr = t.r * (1 - b * 0.018);
          arr.push({ p: new THREE.Vector3(Math.cos(a) * rr, yy, Math.sin(a) * rr), s: 1 - b * 0.05 });
        }
      }
    });
    // central bottom cascade
    for (let ring = 0; ring < 3; ring++) {
      const rr = 0.2 - ring * 0.06;
      const cnt = 6 - ring * 2;
      for (let i = 0; i < cnt; i++) {
        const a = (i / cnt) * Math.PI * 2;
        arr.push({ p: new THREE.Vector3(Math.cos(a) * rr, -0.32 - ring * 0.12, Math.sin(a) * rr), s: 1.1 - ring * 0.15 });
      }
    }
    return arr;
  }, []);

  useLayoutEffect(() => {
    const m = new THREE.Matrix4();
    strand.forEach((c, i) => {
      m.makeScale(c.s, c.s * 1.8, c.s);
      m.setPosition(c.p);
      beads.current.setMatrixAt(i, m);
    });
    beads.current.instanceMatrix.needsUpdate = true;
  }, [strand]);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.1;
    // gentle pendulum sway
    group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.45) * 0.025;
    const target = baseY + scrollRef.current * 2.4;
    group.current.position.y += (target - group.current.position.y) * 0.06;
  });

  return (
    <group ref={group} position={[0, baseY, 0]}>
      <mesh material={brass} position={[0, 1.95, 0]}>
        <cylinderGeometry args={[0.16, 0.05, 0.18, 20]} />
      </mesh>
      <mesh material={brass} position={[0, 1.6, 0]}>
        <cylinderGeometry args={[0.018, 0.018, 0.7, 8]} />
      </mesh>
      <mesh material={brass} position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.045, 0.045, 1.4, 14]} />
      </mesh>
      <mesh material={bulb} position={[0, -0.62, 0]}>
        <sphereGeometry args={[0.07, 18, 18]} />
      </mesh>

      {TIERS.map((t, ti) => (
        <group key={ti} position={[0, t.y, 0]}>
          <mesh material={brass} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[t.r, 0.02, 14, 80]} />
          </mesh>
          {Array.from({ length: t.count }).map((_, i) => {
            const a = (i / t.count) * Math.PI * 2;
            const x = Math.cos(a) * t.r;
            const z = Math.sin(a) * t.r;
            return (
              <group key={i}>
                <mesh material={brass} position={[x / 2, 0, z / 2]} rotation={[0, -a, Math.PI / 2]}>
                  <cylinderGeometry args={[0.011, 0.011, t.r, 8]} />
                </mesh>
                <group position={[x, 0, z]}>
                  <mesh material={brass} position={[0, 0.09, 0]}>
                    <cylinderGeometry args={[0.05, 0.03, 0.12, 12]} />
                  </mesh>
                  <mesh material={bulb} position={[0, 0.23, 0]}>
                    <sphereGeometry args={[0.055, 16, 16]} />
                  </mesh>
                </group>
              </group>
            );
          })}
        </group>
      ))}

      <instancedMesh ref={beads} args={[beadGeo, crystalMat, strand.length]} />
    </group>
  );
}
