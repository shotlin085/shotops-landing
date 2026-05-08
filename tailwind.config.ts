import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        landing: {
          bg: "#0A0A0A",
          "bg-alt": "#111111",
          card: "#141414",
          "card-hover": "#1A1A1A",
          border: "#1F1F1F",
          "border-hover": "#2A2A2A",
          divider: "#1F1F1F",
        },
        accent: {
          DEFAULT: "#6366F1",
          hover: "#818CF8",
          muted: "#4F46E5",
          glow: "rgba(99, 102, 241, 0.15)",
          soft: "rgba(99, 102, 241, 0.1)",
          badge: "#1E1B4B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: [
          "4.5rem",
          { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "hero-mobile": [
          "2.75rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        section: [
          "3rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "section-mobile": [
          "2rem",
          { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "700" },
        ],
        stat: ["3.5rem", { lineHeight: "1", fontWeight: "700" }],
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
      },
      boxShadow: {
        "glow-sm": "0 0 15px rgba(99, 102, 241, 0.2)",
        glow: "0 0 25px rgba(99, 102, 241, 0.3)",
        "glow-lg": "0 0 40px rgba(99, 102, 241, 0.4)",
        card: "0 1px 3px rgba(0, 0, 0, 0.3)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "count-up": "countUp 2s ease-out forwards",
        "slide-in-right": "slideInRight 0.4s ease-out forwards",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        countUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(99, 102, 241, 0.2)" },
          "50%": { boxShadow: "0 0 30px rgba(99, 102, 241, 0.4)" },
        },
      },
      spacing: {
        section: "6rem",
        "section-lg": "8rem",
      },
      maxWidth: {
        landing: "80rem",
      },
    },
  },
  plugins: [animate],
};

export default config;
