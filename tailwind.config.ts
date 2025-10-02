import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-brand",
    "bg-brand/5",
    "bg-brand/10",
    "bg-gradient-to-b",
    "bg-white",
    "bg-white/90",
    "bg-ink",
    "from-white",
    "to-bgSoft",
    "border-brand/10",
    "border-brand/15",
    "border-brand/20",
    "border-brand/30",
    "border-white/10",
    "divide-brand/10",
    "text-brand",
    "text-brand-50",
    "text-brand-100",
    "text-ink",
    "text-ink/50",
    "text-ink/60",
    "text-ink/70",
    "text-ink/80",
    "text-white",
    "text-white/50",
    "text-white/60",
    "text-white/70",
    "text-white/80",
    "shadow-card",
    "max-w-content",
    "tracking-[0.2em]",
    "tracking-[0.3em]",
    "group-hover:scale-[1.02]",
    "min-w-[200px]",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px',
      },
      fontSize: {
        display: ["clamp(3.25rem, 3vw + 1rem, 5.75rem)", "1.08"],
        subhead: ["clamp(1.125rem, 1vw + 0.75rem, 1.75rem)", "1.6"],
        nav: ["clamp(0.95rem, 0.35vw + 0.85rem, 1.15rem)", "1.5"],
        navCta: ["clamp(1rem, 0.45vw + 0.9rem, 1.35rem)", "1.4"],
      },
      spacing: {
        gutter: "clamp(1.25rem, 4vw, 6rem)",
      },
      fontWeight: {
        semibold: "600",
      },
      colors: {
        brand: {
          DEFAULT: "#0066FF",
          50: "#E6F0FF",
          100: "#CCE1FF",
          200: "#99C3FF",
          300: "#66A5FF",
          400: "#3387FF",
          500: "#0066FF",
          600: "#0052CC",
          700: "#003D99",
          800: "#002966",
          900: "#001433",
        },
        ink: "#1A1A1A",
        bgSoft: "#F8FAFC",
      },
      boxShadow: {
        card: "0 4px 20px rgba(0, 0, 0, 0.08)",
      },
      maxWidth: {
        content: "1120px",
        'content-wide': "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
