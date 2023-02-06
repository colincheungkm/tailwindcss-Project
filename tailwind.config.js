/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        emerald900: '#064e3b',
        emerald800: '#065f46',
        emerald700: '#047857',
        emerald600: '#059669',
        emerald500: '#10b981',
        emerald400: '#34d399',
        emerald300: '#6ee7b7',
        emerald200: '#a7f3d0',
        emerald100: '#d1fae5',
        emerald50: '#ecfdf5',

        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
};
