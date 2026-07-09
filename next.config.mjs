/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve modern, smaller formats automatically for <Image /> components.
    formats: ["image/avif", "image/webp"],
  },
  // Drop console.* in production builds (keeps errors/warnings).
  compiler: {
    removeConsole: {
      exclude: ["error", "warn"],
    },
  },
};

export default nextConfig;
