import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {



    fontFamily: {
      barlow: ['Barlow', 'san-serif'],
      b_condenced: ['Barlow-Condensed', 'san-serif'],
      bellefair: ['Bellefair', 'san-serif']


    },

    extend: {
      backgroundImage: {
        "earth": "url('../app/images/earth.webp')",
        "md_earth": "url('../app/images/md-earth.webp')",
        "lg_earth": "url('../app/images/lg-earth.webp')",
        "destination": "url('../app/images/destination.webp')",
        "md_destination": "url('../app/images/md-destination.webp')",
        "lg_destination": "url('../app/images/lg-destination.webp')",
        "crew": "url('../app/images/crew.webp')",
        "md_crew": "url('../app/images/md-crew.webp')",
        "lg_crew": "url('../app/images/lg-crew.webp')",
        "tech": "url('../app/images/technology.webp')",
        "md_tech": "url('../app/images/md-technology.webp')",
        "lg_tech": "url('../app/images/lg-technology.webp')",


      },
      colors: {
        bluish: "#0B0D17",
        cream: "#D0D6F9",
        line : "#383B4B"
      },
      screens: {
        'xl': '1440px',
      }
    },
  },
  plugins: [],
}
export default config
