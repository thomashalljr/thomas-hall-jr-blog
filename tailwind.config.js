module.exports = {
  purge: {
    mode: 'production',
    content: [
      './src/**/*.md',
      './src/**/*.liquid',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    textColor: {
      'muns-purple': '#68479b',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
