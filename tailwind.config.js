/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#152C6B',
        textBlue: '#25195C',
        purpleforbg: '#F5F6FF',
        blueText: '#0F0049',
        planColor: '#232E45',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Adding Inter font to Tailwind
      },
      screens: {
        'sm': {'max': '767px'},
        'md': {'min': '768px', 'max': '1023px'},
        'lg': {'min': '1024px', 'max': '1439px'},
        'xl': {'min': '1440px', 'max': '1919px'},
        '2xl': {'min': '1920px', 'max': '2559px'},
        '3xl': {'min': '2560px'},
        'bigScreens' : {'min': '1024px'},
      },
    },
  },
  plugins: [],
}

