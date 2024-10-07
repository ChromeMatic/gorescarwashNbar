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
        'rs6':"url('https://images.unsplash.com/photo-1618056255948-815057f89f1b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        'vw':"url('https://images.unsplash.com/photo-1632158433377-f80436214f6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        'main': "url('/public/images/arteum-ro-bGlH3TIzGGE-unsplash.jpg')",
        'night': "url('/public/images/night.jpg')",
        'image_1':"url('/public/images/PXL_20240915_191158392.jpg')",
        'image_2':"url('/public/images/lucas-clarysse-iu-cLlLPFcY-unsplash.jpg')",
        'image_3': "url('/public/images/PXL_20240915_191143993.MP.jpg')",
        'image_4': "url('/public/images/PXL_20240915_191223017.jpg')",
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

