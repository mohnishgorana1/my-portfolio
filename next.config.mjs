/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true, // Ignores ESLint errors during build
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "res.cloudinary.com",
        },
         {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
      },
      ],
    },
  };
  
  export default nextConfig;
  