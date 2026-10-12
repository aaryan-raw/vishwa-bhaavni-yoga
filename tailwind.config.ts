import type { Config } from "tailwindcss";

/**
 * Design tokens carried over 1:1 from the original site's inline
 * `tailwind.config` (Tailwind Play CDN, v3).
 */
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: "#1F3D2E", light: "#2F5744", dark: "#122419", 50: "#eef3f0" },
        sage: { DEFAULT: "#8FA795", light: "#C4D2C6", dark: "#5E7A67" },
        sand: { DEFAULT: "#C9A15C", light: "#E6CD98", dark: "#A6813F" },
        ivory: "#F4EFE6",
        warmwhite: "#FBF8F2",
        charcoal: "#2B2B28",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        kannada: ['"Noto Sans Kannada"', "sans-serif"],
      },
      borderRadius: { "4xl": "2.5rem", "5xl": "3.5rem" },
      boxShadow: {
        soft: "0 20px 60px -15px rgba(31,61,46,0.18)",
        card: "0 10px 40px -12px rgba(31,61,46,0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
