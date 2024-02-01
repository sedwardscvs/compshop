/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  extends: ['cvs', 'next/core-web-vitals'],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off'
  },
  settings: {
    next: {
      rootDir: ['apps/*/']
    }
  }
}

module.exports = config
