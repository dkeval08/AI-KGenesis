/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["*"], // This won't work - domains doesn't accept wildcards
    // Use this instead:
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
    // OR for less secure but simpler approach:
    unoptimized: true,
  },
};

export default nextConfig;
