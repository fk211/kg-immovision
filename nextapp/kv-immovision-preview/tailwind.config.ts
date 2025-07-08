// tailwind.config.ts
import type { Config } from 'tailwindcss'
import animatePlugin from 'tailwindcss-animate'

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [animatePlugin],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
      },
    },
  },
} satisfies Config
