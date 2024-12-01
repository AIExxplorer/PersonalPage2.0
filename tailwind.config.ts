import { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/globals.css",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#3257d1",
        },
        gray: {
          900: "#1d1f22",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [forms, typography, animate],
};

export default config;
