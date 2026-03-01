import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#020617",
        surface: "#0f172a",
        "surface-light": "#1e293b",
        border: "#1e293b",
        "border-light": "#334155",
        "brand-school": "#6366f1",
        "brand-school-dim": "#4338ca",
        "brand-note": "#8b5cf6",
        "brand-note-dim": "#6d28d9",
        "brand-guard": "#10b981",
        "brand-guard-dim": "#059669",
        "text-primary": "#f8fafc",
        "text-secondary": "#94a3b8",
        "text-tertiary": "#64748b",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulse_mic: {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(139, 92, 246, 0.5)",
          },
          "50%": {
            boxShadow: "0 0 0 18px rgba(139, 92, 246, 0)",
          },
        },
        typing: {
          "0%": { opacity: "0.3" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0.3" },
        },
        scan_line: {
          "0%": { top: "0%" },
          "100%": { top: "100%" },
        },
        fade_in_up: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "float-delayed": "float 4s ease-in-out 1s infinite",
        "float-slow": "float 6s ease-in-out infinite",
        pulse_mic: "pulse_mic 2s ease-in-out infinite",
        typing: "typing 1.4s ease-in-out infinite",
        scan_line: "scan_line 3s ease-in-out infinite alternate",
        "fade-in-up": "fade_in_up 0.8s ease-out forwards",
        "fade-in-up-delay-1": "fade_in_up 0.8s ease-out 0.1s forwards",
        "fade-in-up-delay-2": "fade_in_up 0.8s ease-out 0.2s forwards",
        "fade-in-up-delay-3": "fade_in_up 0.8s ease-out 0.3s forwards",
        shimmer: "shimmer 3s linear infinite",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
};
export default config;