module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      colors: {
        didalla: '#39B54A',
        didallablack:'#0B0C14',
        didallatitle:'#04023B',
        didallabody:'#4E4B66',
        footergray:'#FCFCFC',
        didallateal:'#CDEFD1',
        downloadgray:'#F7F7FC'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
