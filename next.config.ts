import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  reactCompiler: true,
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'clsx',
      'tailwind-merge',
      'class-variance-authority',
      'next-themes',
      'recharts',
      'framer-motion',
    ],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
      },
    ],
  },
}

export default nextConfig
