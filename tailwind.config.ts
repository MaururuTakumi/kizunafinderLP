import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
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
