/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable PWA features
  experimental: {
    appDir: true,
  },
  // Add PWA manifest
  async headers() {
    return [
      {
        source: '/manifest.json',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  // Enable service worker
  async rewrites() {
    return [
      {
        source: '/service-worker.js',
        destination: '/service-worker.js',
      },
    ];
  },
};

module.exports = nextConfig;
