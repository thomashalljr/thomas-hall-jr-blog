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
      'muns-sans': 'Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica Neue,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
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
