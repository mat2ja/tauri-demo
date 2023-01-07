/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        "Inter, system-ui",
      ],
    }
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
