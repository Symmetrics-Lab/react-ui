/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ addComponents }) => {
    /*addComponents({
      '.button-symlab': {
        color: 'white',
        backgroundImage: 'linear-gradient( #8f75ff, #63a1ff)',
        borderStyle: 'none',
        '&:hover': {
          backgroundColor: '#8f75ff',
        },
        // dark mode
        '@apply dark:hover:bg-purple-300': {},
      },
    });*/
  },
  {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    //prefix: 'sym-',
    important: true,
    theme: {
      extend: {
        colors: {
          'sym-primary': colors.indigo[500],
          'sym-primary-dark': colors.indigo[200],
          'sym-txt-primary': colors.gray[900],
          'sym-txt-primary-dark': colors.gray[200],
          'sym-border': colors.gray[300],
          'sym-border-dark': colors.gray[700],
          'sym-wallpaper': colors.gray[50],
          'sym-wallpaper-dark': colors.gray[900],
          'sym-layout': colors.white,
          'sym-layout-dark': colors.gray[800],
          'sym-error': colors.red[500],
          'sym-error-dark': colors.red[400], //700
          'sym-secondary-error': colors.red[100],
          'sym-secondary-error-dark': colors.red[600],
          'sym-success': colors.green[500],
          'sym-success-dark': colors.teal[300],
          'sym-hover': colors.gray[100],
          'sym-hover-dark': colors.gray[700],
          'sym-active': colors.gray[100],
          'sym-active-dark': colors.gray[700],
          'sym-secondary': {
            red: colors.red[800],
            gray: colors.gray[500],
            'gray-dark': colors.gray[400],
            'gray-10': colors.gray[300],
            'gray-10-dark': colors.gray[500],
            green: colors.teal[500],
            'green-dark': colors.teal[300],
          },
          'sym-txt-secondary': colors.gray[900],
          'sym-txt-secondary-dark': colors.gray[900],
          'sym-timeline': {
            line: colors.gray[200],
            'line-dark': colors.gray[700],
            icon: colors.white,
            'icon-dark': colors.gray[900],
            'icon-bg': colors.gray[200],
            'icon-bg-dark': colors.gray[700],
            title: colors.gray[600],
            'title-dark': colors.gray[300],
            date: colors.gray[600],
            'date-dark': colors.gray[300],
            desc: colors.gray[400],
            'desc-dark': colors.gray[400],
          },
          'sym-placeholder': colors.gray[400],
          'sym-placeholder-dark': colors.gray[400],
          'sym-input': {
            bg: colors.white,
            'bg-dark': colors.gray[700],
            icon: colors.gray[500],
            'icon-dark': colors.gray[500],
            'icon-inactive': colors.gray[300],
            'icon-inactive-dark': colors.gray[500],
            border: colors.gray[300],
            'border-dark': colors.gray[600],
          },
          'sym-header': {
            txt: colors.gray[500],
            'txt-dark': colors.gray[200],
            bg: colors.white,
            'bg-dark': colors.gray[800],
          },
          'sym-disabled': colors.gray[400],
          'sym-disabled-dark': colors.gray[500],
          'sym-blue': {
            10: '#54eefe',
            100: '#63a1ff',
          },
          'sym-green': {
            //10: '#08e6c7',
            50: '#ccebe5',
            100: '#089884',
          },
          'sym-purple': {
            200: '#9474ff',
            300: '#8f75ff',
          },
          'sym-btn-txt': colors.white,
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
  }
);
