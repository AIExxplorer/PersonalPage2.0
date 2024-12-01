import { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"], // Suporte a modo escuro via classe
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Incluindo todos os arquivos dentro de src
    "./src/app/(home)/globals.css", // Certifique-se que o caminho para o CSS global está correto
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#3257d1", // Azul principal
        },
        gray: {
          900: "#1d1f22", // Fundo escuro
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Fonte principal
      },
      spacing: {
        128: "32rem", // Adicionado para uso de layouts maiores
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem", // Adicionado para bordas mais arredondadas
      },
    },
  },
  plugins: [forms, typography, animate], // Plugins instalados e ativos
};

export default config;
