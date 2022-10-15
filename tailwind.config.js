module.exports = {
  darkMode: 'media',
  content: [
    './src/**/*.{ts,tsx,html}'
  ],
  theme: {
    extend: {
      borderRadius: {
        '6xl': '6rem'
      },
      colors: {
        primary: {
          400: '#f13cd4',
          500: '#E71CCC'
        }
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