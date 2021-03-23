module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      colors: {
        didalla: '#39B54A',
        didallablack:'#0B0C14'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
