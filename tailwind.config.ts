import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1D4ED8',
          light: '#3B82F6',
          dark: '#1E40AF',
        },
      },

    },
  },
  plugins: [],
}

export default config
