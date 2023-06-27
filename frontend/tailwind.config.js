/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile-s': [{'mim': '320px', 'max': '370px'}],
        'mobile-l': [{'mim': '371px', 'max': '425px'}],
        'mobile': [{'mim': '320px', 'max': '425px'}],
        'tablet': [{'min': '425px', 'max': '768px'}],
        'laptop': [{'min': '769px', 'max': '1199px'}],
        'laptop-l': [{'min': '1200px', 'max': '1440px'}],
        '4k': [{'min': '1441px'}],
      },
    },
  },
  plugins: [],
}

