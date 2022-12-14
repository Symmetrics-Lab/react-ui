/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    '../library/dist/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: colors.blue[50],
          100: colors.blue[100],
          200: colors.blue[200],
          300: colors.blue[300],
          400: colors.blue[400],
          500: colors.blue[500],
          600: colors.blue[600],
          700: colors.blue[700],
          800: colors.blue[800],
          900: colors.blue[900],
        },
        secondary: {
          50: '#80e0d3',
          100: '#66d9ca',
          200: '#4dd3c1',
          300: '#33cdb8',
          400: '#1ac6af',
          500: '#00c0a6',
          600: '#007364',
          700: '#004d42',
          800: '#003a32',
          900: '#002621',
        },
        'symlab-primary': {
          50: '#808d9b',
          100: '#667687',
          200: '#4d5f73',
          300: '#33485f',
          400: '#1a314b',
          500: '#001a37',
          600: '#001732',
          700: '#00152c',
          800: '#001227',
          900: '#001021',
        },
        'symlab-blue': {
          10:'#54eefe',
          100: '#63a1ff',
        },
        'symlab-green': {
          10: '#08e6c7',
          50: '#ccebe5',
          100: '#089884',
        },
        'symlab-gray': {
          900: '#001423',
        },
        'symlab-purple': {
          50: '#b9a9ff',
          100: '#ab97ff',
          200: '#9474ff',
          300: '#8f75ff',
          400: '#8163ff',
          500: '#7352ff',
          600: '#684ae6',
          700: '#5c42cc',
          800: '#5139b3',
          900: '#453199',
        },
        primaryText: colors.white,
      },
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
  plugins: [require('@tailwindcss/forms')],
};
