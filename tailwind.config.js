module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        short: { raw: '(max-height: 670px)' },
        xshort: { raw: '(max-height: 570px)' },
        xxshort: { raw: '(max-height: 490px)' },
      },
      colors: {
        'nica-blue': '#2176c4'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animated'),
  ],
}
