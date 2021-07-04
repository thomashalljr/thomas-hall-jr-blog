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
      'muns-black': '#040303',
      'muns-purple': '#68479b',
    },
    fontFamily: {
      'muns-sans': ['ff-tisa-sans-web-pro', 'sans-serif'],
    },
    backgroundColor: theme => ({
      'muns-gray-100': '#fcf9f9',
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
