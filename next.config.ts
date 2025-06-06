/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.tenor.com",
      },
      {
        protocol: "https",
        hostname: "media1.tenor.com",
      },
      {
        protocol: "https",
        hostname: "media.giphy.com",
      },
    ],
  },
};

module.exports = nextConfig;