import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    formats: ["image/avif", "image/webp"],
  },
  i18n: {
    locales: ["us", "pt", "es", "fr"], 
    defaultLocale: "us", 
    localeDetection: false,
  },
};

export default nextConfig;
