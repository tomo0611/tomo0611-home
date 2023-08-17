import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // https://tailwindcss.com/docs/animation#customizing-your-theme
      animation: {
        slideFade: 'slideFadeKeyFrame .5s forwards',
      },
      keyframes: {
        slideFadeKeyFrame: {
          '0%': { transform: 'scaleY(1)' },
          '100%': { transform: 'scaleY(0)', visibility: 'hidden' },
        }
      }
    },
  },
  plugins: [],
}
export default config
