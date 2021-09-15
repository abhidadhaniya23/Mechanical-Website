module.exports = {
  mode:'jit',
  purge: [
    './views/**/*.ejs',
    './views/*.ejs',
    './views/index.ejs'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
