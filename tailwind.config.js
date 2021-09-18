module.exports = {
  mode:'jit',
  purge: [
    './views/**/*.ejs',
    './views/*.ejs'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        inter:['Inter']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
