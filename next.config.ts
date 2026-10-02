import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Zero-cost static: never invoke the Image Optimization API.
     All media is plain <img>/<video> served by Cloudinary (see
     src/lib/cloudinary-assets.ts), so `unoptimized` is a fail-safe —
     even an accidental `next/image` import serves src as-is with
     no `/_next/image` requests. */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
