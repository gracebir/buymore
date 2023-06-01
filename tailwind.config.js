/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'very-dark':'var(--color-very-dark)',
        'white-color': 'var(--color-white)',
        "blue-color":"var(--color-blue)",
        "gray-color":"var(--color-dark)"
      }
    },
  },
  plugins: [],
}
