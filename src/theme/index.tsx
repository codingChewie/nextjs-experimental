import { theme } from '@chakra-ui/react'

import { breakpoints } from './breakpoints'
import { colors } from './colors'
import { components } from './components'
import { config } from './config'
import { fonts } from './fonts'
import { fontSizes } from './fontSizes'
import { layerStyles } from './layerStyles'
import { space } from './space'
import { textStyles } from './textStyles'

const customTheme = {
  ...theme,
  breakpoints,
  colors,
  config,
  components,
  fonts,
  fontSizes,
  layerStyles,
  space,
  styles: {
    global: (props: any) => ({
      'html, body': {
        // background: mode(colors.color2[50])(props), // mode(light mode color, dark mode color)
        lineHeight: 7,
        minHeight: '100vh',
        scrollBehavior: 'smooth',
      },
      p: {
        letterSpacing: 'wide',
        fontWeight: 'semibold',
        // color: colors.color3[900],
      },
      ul: {
        letterSpacing: 'wide',
        fontWeight: 'semibold',
        // color: colors.color3[900],
      },
      ol: {
        letterSpacing: 'wide',
        fontWeight: 'semibold',
        // color: colors.color3[900],
      },
      em: {
        fontStyle: 'italic',
      },
      strong: {
        fontWeight: 'extrabold',
      },
    }),
  },
  textStyles,
}

export default customTheme
