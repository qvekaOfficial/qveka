import type { Config } from "tailwindcss";

export default {
  darkMode: ["class", "class"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "0 0% 100%",
        foreground: "222 47% 11%",
        card: {
          DEFAULT: "0 0% 100%",
          foreground: "222 47% 11%",
        },
        popover: {
          DEFAULT: "0 0% 100%",
          foreground: "222 47% 11%",
        },
        primary: {
          DEFAULT: "221 83% 53",
          foreground: "222 47% 11%",
        },
        secondary: {
          DEFAULT: "11 84% 55",
          foreground: "222 47% 11%",
        },
        muted: {
          DEFAULT: "210 40% 96.1",
          foreground: "210 40% 38.8",
        },
        accent: {
          primary: "221 83% 53",
          secondary: "17 83% 51",
        },
        destructive: {
          DEFAULT: "0 84.2% 60.2",
          foreground: "210 40% 98%",
        },
        border: "214.3 31.8% 91.4",
        input: "214.3 31.8% 91.4",
        ring: "221.2 83.2% 53.3",
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        jetbrains: ["JetBrains Mono", "monospace"],
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
        "3xl": "4rem",
        "4xl": "5rem",
        "5xl": "6rem",
        "6xl": "8rem",
        "7xl": "10rem",
        "8xl": "12rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-delay-1": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-delay-2": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-delay-3": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-delay-4": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-delay-5": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in-delay-1": "fade-in-delay-1 0.6s ease-out forwards 0.1s",
        "fade-in-delay-2": "fade-in-delay-2 0.6s ease-out forwards 0.2s",
        "fade-in-delay-3": "fade-in-delay-3 0.6s ease-out forwards 0.3s",
        "fade-in-delay-4": "fade-in-delay-4 0.6s ease-out forwards 0.4s",
        "fade-in-delay-5": "fade-in-delay-5 0.6s ease-out forwards 0.5s",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
} satisfies Config;