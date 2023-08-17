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
        slideFade: 'slideFadeKeyFrame 1.5s forwards',
        rotate: 'rotate 2s linear infinite',
      },
      keyframes: {
        slideFadeKeyFrame: {
          '0%': { transform: 'translateY(0%)' },
          '30%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)', visibility: 'hidden' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      colors: {
        'primary': '#1f2937',
      }
    },
  },
  plugins: [],
}
export default config
