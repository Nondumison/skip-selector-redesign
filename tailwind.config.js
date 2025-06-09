import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // This makes 'Inter' the default font
        sans: ["Inter", ...fontFamily.sans],
      },
      colors: {
        // Our "eco-tech" accent color from the inspiration
        "brand-green": "#16a34a",
        "brand-green-dark": "#15803d",
      },
    },
  },
  plugins: [],
};
