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
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
