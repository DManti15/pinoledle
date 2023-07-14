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
        'nica-blue': '#2176c4',
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'translateY(-30%)',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-animated')],
}
