module.exports = {
  theme: {
    screens: {
      xs: '350px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    fontFamily: {
      display: ['Ubuntu Condensed', 'sans-serif'],
      body: ['Raleway', 'sans-serif'],
      title: ['Yeseva One', 'sans-serif']
    },
    extend: {
      colors: {
        primary: {
          lighter: 'hsl(207, 73%, 52%)',
          default: 'hsl(207, 73%, 57%)',
          darker: 'hsl(207, 73%, 44%)'
        },
        theme: {
          white: '#FAF9F7',
          black: '#17161E',
          one: '#1E8492',
          two: '#708FA3',
          three: '#526A92'
          // white: '#F4F4F1',
          // black: '#524c54',
          // one: '#a0aa8a',
          // two: '#858884',
          // three: '#938075'
          // white: '#f2f7f4',
          // black: '#484a4c',
          // one: '#bb5274',
          // two: '#f87e63',
          // three: '#aec0d8'
          // white: '#E8E1D2',
          // black: '#1E2927',
          // one: '#DA2724',
          // two: '#978672',
          // three: '#CA8241'
        }
      }
    }
  },
  variants: { borderWidth: ['responsive', 'hover', 'focus'] },
  corePlugins: {
    container: false
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          // paddingLeft: '2rem',
          // paddingRight: '2rem',
          '@screen xs': {
            maxWidth: '450px'
          },
          '@screen sm': {
            maxWidth: '700px'
          },
          '@screen md': {
            maxWidth: '768px'
          },
          '@screen lg': {
            maxWidth: '1024px'
          },
          '@screen xl': {
            maxWidth: '1280px'
          }
        }
      });
    }
  ]
};
