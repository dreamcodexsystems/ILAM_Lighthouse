"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Logo({ variant = "lockup", className = "" }: { variant?: "lockup" | "badge"; className?: string }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // default to dark asset before hydration to avoid flash
  const mode = mounted && resolvedTheme === "light" ? "light" : "dark";
  const src = `/logo/ilma-${variant}-${mode}.svg`;

  /* eslint-disable-next-line @next/next/no-img-element */
  return <img src={src} alt="ILMA LightHouse" className={className} suppressHydrationWarning />;
}
