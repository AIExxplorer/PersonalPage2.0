import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Adicione domínios permitidos para carregar imagens externas
    formats: ["image/avif", "image/webp"], // Suporte a formatos modernos de imagens
  },
  i18n: {
    locales: ["en", "pt", "es", "fr"], // Idiomas suportados
    defaultLocale: "en", // Idioma padrão
  },
};

export default nextConfig;
