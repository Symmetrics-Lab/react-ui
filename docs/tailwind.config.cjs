/* eslint-disable @typescript-eslint/no-var-requires */

const colors = require('tailwindcss/colors.js');

module.exports = {
  important: true,
  darkMode: 'class',
  //prefix: '',//Debe ir para no mezclar los de library
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    '../library/dist/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: [
          'Raleway',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        sans: [
          'Raleway',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
    },
  },
  plugins: [ require('@tailwindcss/forms'), require('../library/dist/tailwind.config.cjs')],
};
