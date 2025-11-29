import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_API_KEY: "api_3dae3af703e1ecf3dbf5209fcae1e85cd4b23d6956d25122",
    NEXT_PUBLIC_API_URL: "https://content.travsim.fr/api/",
  },
  images: {
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'content.travsim.fr',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
