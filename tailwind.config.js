module.exports = {
  darkMode: 'media',
  content: [
    './src/**/*.{ts,tsx,html}'
  ],
  theme: {
    extend: {
      borderRadius: {
        '6xl': '6rem'
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography')
  ]
}