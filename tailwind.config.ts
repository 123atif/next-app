import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0D10", // Deep black
        gradient: {
          start: "#1C1F4A", // Cosmic blue
          end: "#0B0D10", // Deep black
        },
      },
      fontFamily: {
        "roboto-bold": ["var(--font-roboto-bold)", "sans-serif"],
      },

      backgroundImage: {
        "blue-gradient": "linear-gradient(to bottom, #1C1F4A, #0B0D10)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
