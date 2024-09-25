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
    },
  },
  plugins: [],
}

