// @ts-ignore
const baseConfig = require('prettier-config-cvs/index')
/** @type {import("prettier").Config} */
const config = {
  ...baseConfig,
  plugins: [require.resolve('prettier-plugin-tailwindcss')]
}

module.exports = config
