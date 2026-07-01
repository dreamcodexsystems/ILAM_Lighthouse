import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        bg2: "var(--bg2)",
        surface: "var(--surface)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        gold: "var(--gold)",
        gold2: "var(--gold-2)",
        line: "var(--line)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      maxWidth: { content: "1240px" },
      letterSpacing: { eyebrow: "0.32em" },
    },
  },
  plugins: [],
};
export default config;
