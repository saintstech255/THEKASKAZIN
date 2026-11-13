/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, poweredByHeader: false };
export default nextConfig;
/** @type {import('next').Next.jsConfig} */
const nextConfig = {
  output: 'export', // Hii inaiambia Next.js itengeneze HTML/CSS/JS safi za kawaida
  images: {
    unoptimized: true, // Muhimu kwa ajili ya Cloudflare Static Export
  },
};

export default nextConfig;
