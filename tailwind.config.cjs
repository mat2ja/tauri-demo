const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['iA Writer Mono', ...defaultTheme.fontFamily.mono],
      },
    }
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
