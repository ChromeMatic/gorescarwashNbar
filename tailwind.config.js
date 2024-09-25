/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Nunito":" 'Nunito', sans-serif"
      },
      colors:{
        Dark: '#202124',
        innerDark: '#191919'
      },
      backgroundImage:{
        'main': "url('/public/images/arteum-ro-bGlH3TIzGGE-unsplash.jpg')",
        'night': "url('/public/images/night.jpg')"
      },
      screens: {
        'sm': '650px',
        // => @media (min-width: 640px) { ... }

        'md': '769px',
        // => @media (min-width: 768px) { ... }

        'mds': {'min':'770px', 'max':'1022px'},

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
}

