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
        // PIN Ingénierie branding
        primary: {
          50: "#fdecea",
          100: "#f9d3cf",
          200: "#f2a79f",
          300: "#eb7b6f",
          400: "#e44f3f",
          500: "#E53935", // brand red
          600: "#C62828",
          700: "#B71C1C",
          800: "#8E1514",
          900: "#5E0E0E",
        },
        secondary: {
          50: "#f5f5f5",
          100: "#e5e5e5",
          200: "#d4d4d4",
          300: "#a3a3a3",
          400: "#737373",
          500: "#525252",
          600: "#404040",
          700: "#262626",
          800: "#1a1a1a",
          900: "#111111", // near black from logo
        }
      },
      fontFamily: {
        // Prefer Poppins for headings and Inter as fallback body
        sans: ["Poppins", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

