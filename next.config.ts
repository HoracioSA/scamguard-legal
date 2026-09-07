import type { NextConfig } from 'next';
import { BASE_PATH } from './lib/basePath';

// Served from https://legal.scamgards.com (a GitHub Pages custom domain,
// see public/CNAME) — no basePath needed since it's the domain root, unlike
// the old horaciosa.github.io/scamguard-legal/ project-pages URL. GitHub
// Pages has no image optimization server, so next/image must skip it
// entirely regardless.
const nextConfig: NextConfig = {
  output: 'export',
  basePath: BASE_PATH,
  images: { unoptimized: true },
};

export default nextConfig;
