/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eu-central-1.storage.xata.sh',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'eu-central-1.xata.sh',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;

