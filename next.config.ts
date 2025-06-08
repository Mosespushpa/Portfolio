
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // It's generally better to resolve TypeScript and ESLint errors
  // rather than ignoring them for production builds.
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
