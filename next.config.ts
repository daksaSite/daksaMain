import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /**
     * Required in Next 16 for local `next/image` src under /public.
     * Omit `search` so paths like `/images/hero/hero1.png?v=2` (cache bust) are allowed.
     */
    localPatterns: [{ pathname: "/images/**" }],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
    /** Hero + logo use 100; Sanity CDN URLs may use other q= values from the builder. */
    qualities: [75, 85, 88, 90, 100],
    /** Shorter optimizer cache so replaced files under /public are picked up sooner after deploy. */
    minimumCacheTTL: 0,
  },
};

export default nextConfig;
