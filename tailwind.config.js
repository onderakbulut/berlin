/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        light: '#fafafa',
        primary: '#FF6363',
        secondary: {
          100: '#4e5965',
          200: '#d9d9d9',
        },
      },
      backgroundImage: {
        'work': "linear-gradient(CurrentColor, CurrentColor)",
        'work-detail': 'url(./img/work-detail-banner-bg.jpg)'
      },
      backgroundSize : {
        'size-full': '100% .5px',
      },
    },
    fontFamily: {
      'sans': ['DM Sans', 'sans-serif', 'system-ui'],
    },
  },
  plugins: [],
}

