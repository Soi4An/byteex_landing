/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'general': ['"Sofia Sans Semi Condensed"', 'ui-sans-serif', 'sans-serif'],
      'comment': ['"Sulphur Point"', 'ui-sans-serif', 'sans-serif'],
    },
    colors: {
      'orange-gradient': '#f9f0e5',
      'orange-star': '#ffb801',
      'gray-text-light': '#828282',
      'gray-text-middle': '#676869',
      'gray-text-dark': '#6c6c6c',
      'gray-bg-light': '#ededed',
      'gray-bg-dark': '#f0eeef',
      'gray-divider': '#c4c4c4',
      'blue-text': '#01005b',
      'blue-text-hover': '#2a2996',
      'green-text': '#1fad40',
      'white': '#fff',
      'black': '#000',
      'transparent': 'transparent',
    },
    screens: {
      'tn': '440px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}
