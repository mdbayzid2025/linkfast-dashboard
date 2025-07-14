import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#009A54",
      },

    },
  },
  plugins: [],
}

export default config
