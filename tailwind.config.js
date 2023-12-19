/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  safelist: [
    // 'text-2xl',
    // 'text-3xl',
    // {
    //   pattern: /sm-max\:v-spaced/,
    // },
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        // 'sm-max': {
        //   'max': '767px'
        // },
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}

