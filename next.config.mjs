/** @type {import('next').NextConfig} */
const cspHeader = `
    upgrade-insecure-requests;
`;

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

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
