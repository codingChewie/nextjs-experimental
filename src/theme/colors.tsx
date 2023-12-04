import { theme, type Colors } from '@chakra-ui/react'

const customColors: Colors = {
  brand: {
    100: '',
    200: '',
    300: '',
    400: '',
    500: '',
    600: '',
    700: '',
    800: '',
    900: '',
  },
}

export const colors = {
  // Chakra UI base colors used heavily in theme styles
  white: '#ffffff',
  black: '#000000',
  currentColor: 'currentColor',
  transparent: 'transparent',
  blackAlpha: { ...theme?.colors?.blackAlpha },
  gray: { ...theme?.colors?.gray },
  whiteAlpha: { ...theme?.colors?.whiteAlpha },

  // Add custom colors
  ...customColors,
}
