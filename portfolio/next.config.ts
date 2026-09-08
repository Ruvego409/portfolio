import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // All imagery ships from /public as pre-exported assets, so Next's optimizer
  // has nothing to add here and would only cost a serverless round trip.
  images: { unoptimized: true },

  async redirects() {
    return [
      // The Framer site used a colon in this path, which is legal but awkward
      // to link and to cache. Keep the old URL working. `:` is the parameter
      // sigil in path-to-regexp, so it has to arrive percent-encoded here.
      { source: '/re%3Amove', destination: '/re-move', permanent: true },
    ]
  },
}

export default nextConfig
