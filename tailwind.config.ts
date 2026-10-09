import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#bae0fd",
          300: "#7cc7fb",
          400: "#36aaf5",
          500: "#0c8ee9",
          600: "#0271c7",
          700: "#035aa1",
          800: "#074c85",
          900: "#0c406e",
          950: "#082949",
        },
        surface: {
          light: "#ffffff",
          dark: "#0f172a",
          darker: "#090d16",
        }
      },
      boxShadow: {
        'card-3d': '0 10px 30px -10px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04), 0 1px 0 0 rgba(255, 255, 255, 0.6) inset',
        'card-3d-hover': '0 20px 35px -12px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 1px 0 0 rgba(255, 255, 255, 0.9) inset',
        'card-3d-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.6), 0 4px 6px -2px rgba(0, 0, 0, 0.3), 0 1px 0 0 rgba(255, 255, 255, 0.05) inset',
        'card-3d-dark-hover': '0 20px 40px -12px rgba(0, 0, 0, 0.8), 0 10px 12px -5px rgba(12, 142, 233, 0.15), 0 1px 0 0 rgba(255, 255, 255, 0.1) inset',
        'float-glow': '0 0 25px -5px rgba(12, 142, 233, 0.3)',
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
