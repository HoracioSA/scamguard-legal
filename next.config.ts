import type { NextConfig } from 'next';
import { BASE_PATH } from './lib/basePath';

// Served from https://<user>.github.io/scamguard-legal/ — a project Pages
// site, not a user/org root site — so every asset and route needs this
// subpath prefix baked in at build time. GitHub Pages also has no image
// optimization server, so next/image must skip it entirely.
const nextConfig: NextConfig = {
  output: 'export',
  basePath: BASE_PATH,
  images: { unoptimized: true },
};

export default nextConfig;
