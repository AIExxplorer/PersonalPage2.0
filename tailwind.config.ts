import { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#3257d1"
        },
        gray: {
          900: "#1d1f22"
        }
      }
    }
  },
  plugins: []
};

export default config;
