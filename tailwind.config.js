import { fontFamily } from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F5F5F5",
        primary: {
          50: "#f2f9fd",
          100: "#e4f1fa",
          200: "#c3e2f4",
          300: "#8ecbeb",
          400: "#52b0de",
          500: "#39a1d4", // default
          600: "#1d78ac",
          700: "#19618b",
          800: "#185274",
          900: "#194561",
          950: "#112c40",
        },
        secondary: {
          50: "#fefbe8",
          100: "#fff5ac",
          200: "#ffed88",
          300: "#ffdb44",
          400: "#fec611",
          500: "#eead04", // default
          600: "#cd8401",
          700: "#a45c04",
          800: "#87490c",
          900: "#733b10",
          950: "#431e05",
        },
      },
      fontFamily: {
        questrial: ["Questrial", "serif"],
        poppins: ["Poppins", ...fontFamily.sans],
      },
    },
    screens: {
      "2xs": "320px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1600px",
    },
  },
  plugins: [],
};
