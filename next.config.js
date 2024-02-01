/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./src/env.mjs')

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack']
    })

    return config
  },
  output: process.env.NODE_ENV === 'production' ? 'standalone' : undefined
}

export default config
