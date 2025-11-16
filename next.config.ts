import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  distDir: 'gen',
  assetPrefix: isProd ? '/gjcidlu/' : undefined,
};

export default nextConfig;
