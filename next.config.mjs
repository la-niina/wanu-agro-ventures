/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.shuffle.dev"
      },
    ],
  }
};

export default nextConfig;
