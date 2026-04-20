import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dxm.dam.cofel.fr",
      },
      {
        protocol: "https",
        hostname: "matelaspebbenin.com",
      },
      {
        protocol: "https",
        hostname: "boutiquematelaspeb.bj",
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
