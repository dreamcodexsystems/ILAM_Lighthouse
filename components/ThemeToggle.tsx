"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isLight = mounted && resolvedTheme === "light";
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-colors hover:border-gold hover:text-gold"
    >
      {isLight ? <Moon size={17} /> : <Sun size={17} />}
    </button>
  );
}
