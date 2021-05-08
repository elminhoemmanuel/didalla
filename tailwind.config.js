module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      colors: {
        didalla: '#39B54A',
        darkdidalla: '#15421B',
        didallablack:'#0B0C14',
        didallatitle:'#04023B',
        didallabody:'#4E4B66',
        footergray:'#FCFCFC',
        onboardinggray:'#E5E5E5',
        didallateal:'#CDEFD1',
        downloadgray:'#F7F7FC',
        grayborder:'#D6D8E7',
        grayscale:'#EFF0F6'
      }
    },

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '769px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    }
  },
  plugins: [],
}
