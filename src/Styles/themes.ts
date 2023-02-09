import { extendTheme } from 'native-base';

export const THEME = extendTheme ({
  colors: {
    primary: {
      700: '#AE1D16'
    },
    secondary: {
      700:'#FDD20A '
    },
    red:{
      1000: '#4C0D09',
      900: '#62100C',
      800: '#831610',
      700: '#A41B14',
      600: '#AE1D16',
      500: '#C42018',
      400: '#DA241B',
      300: '#F4BBB8',
      200: '#F9DEDD',
      100: '#E9EBF8',
    },
    yellow: {
      1000: '#594A04',
      900: '#725E05',
      800: '#987E06',
      700: '#BE9E08',
      600: '#CAA808',
      500: '#E4BD09',
      400: '#FDD20A',
      300: '#FEF1B3',
      200: '#FFF8DA',
      100: '#FFFBE7',
    },
    black: {
      500: '#2B2B2B'
    },
    fonts: {
      heading: 'Poppins_700Bold',
      body: 'Poppins_400Regular',
    },
    fontSizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 20,
    },
    sizes: {
      14: 56
    }
  }
})