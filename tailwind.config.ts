import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{html,js}", // Incluindo arquivos públicos, se necessário
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
  plugins: [],
};

export default config;
