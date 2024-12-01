import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["utfs.io"], // Certifique-se de que esse domínio está correto.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "**",
      },
    ],
  },
  i18n: {
    locales: ["us", "pt", "es", "fr"],
    defaultLocale: "us",
    localeDetection: false,
  },
};

module.exports = {
  images: {
    domains: ['example.com'], // Adicione domínios externos, se necessário
  },
};


export default nextConfig;
