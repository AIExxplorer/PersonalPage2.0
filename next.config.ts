import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    formats: ["image/avif", "image/webp"],
  },
  i18n: {
    locales: ["en", "pt", "es", "fr"],
    defaultLocale: "en",
  },
};

export default nextConfig;
