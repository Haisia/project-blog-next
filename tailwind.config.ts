import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      myblack: '#1d1d1d',
    },
    extend: {
      colors: {
        myblack: '#1d1d1d',
      },
    },
  },
  plugins: [typography],
}

export default config
