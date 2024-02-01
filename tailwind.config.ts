import { type Config } from 'tailwindcss'
import { shadcn } from 'tailwind-config'

export default {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  presets: [shadcn],
  plugins: [],
  theme: {
    extend: {}
  }
} satisfies Config
