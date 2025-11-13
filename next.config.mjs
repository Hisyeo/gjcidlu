const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'gen',
    basePath: isProd ? '/gjcidlu' : undefined,
    assetPrefix: isProd ? '/gjcidlu/' : undefined,
};

export default nextConfig;
