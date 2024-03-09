import { fileURLToPath } from 'node:url';

import createJiti from 'jiti';
const jiti = createJiti(fileURLToPath(import.meta.url));

// Import env here to validate during build. Using jiti we can import .ts files :)
jiti('./src/env.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MARVEL_API_URL: process.env.MARVEL_API_URL,
    MARVEL_API_PUBLIC_KEY: process.env.MARVEL_API_PUBLIC_KEY,
    MARVEL_API_PRIVATE_KEY: process.env.MARVEL_API_PRIVATE_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'i.annihil.us',
      },
      {
        protocol: 'http',
        hostname: 'gateway.marvel.com',
      },
    ],
  },
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
