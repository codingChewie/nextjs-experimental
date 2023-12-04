import { colors } from './colors'

// const generalColor = colors.color2[800]

const headerDefault = {
  //   color: generalColor,
  fontFamily: 'heading2',
  lineHeight: '1',
  letterSpacing: '-1%',
}

// https://chakra-ui.com/docs/styled-system/text-and-layer-styles#text-styles
export const textStyles = {
  heroH1: {
    fontSize: ['8xl', null, null, '10xl'],
    fontWeight: 'bold',
    lineHeight: '3',
    letterSpacing: '-2%',
    textAlign: 'center',
    fontFamily: 'heading2',
  },
  heroPre: {
    fontFamily: 'script',
    fontSize: ['2xl', null, null, '5xl'],
    // color: colors.color3[300],
    lineHeight: '3',
  },
  heroDesc: {
    color: 'white',
    textAlign: 'center',
  },
  h1: {
    fontSize: '8xl',
    textAlign: 'center',
    ...headerDefault,
  },
  h2: {
    fontSize: '7xl',
    ...headerDefault,
  },
  h3: {
    fontSize: '4xl',
    ...headerDefault,
  },
  h4: {
    fontSize: '2xl',
    ...headerDefault,
  },
  h5: {
    fontSize: '3xl',
    ...headerDefault,
  },
  h6: {
    fontSize: 'md',
    ...headerDefault,
  },
  blockquote: {
    borderLeftStyle: 'solid',
    borderLeftWidth: 'red',
    borderColor: 'tomato',
  },
  landingH2: {
    // color: generalColor,
    fontSize: ['7xl', null, null, '9xl'],
    fontFamily: 'heading2',
    lineHeight: '1',
  },
  landingH3: {
    // color: generalColor,
    fontSize: ['5xl', null, null, '8xl'],
    fontFamily: 'heading2',
    lineHeight: '1',
  },
  blogCategory: {
    fontFamily: 'heading2',
    fontSize: '3xl',
    letterSpacing: 'wider',
    // color: colors.color3[300],
  },
  blogHeader: {
    fontFamily: 'heading2',
    fontSize: '5xl',
    lineHeight: 'none',
  },
  relatedHeader: {
    // color: generalColor,
    fontFamily: 'heading2',
    fontSize: '4xl',
    lineHeight: 'none',
    _hover: {
      textDecoration: 'none',
      color: 'color3.700',
    },
  },
  blogExcerpt: {
    // color: colors.color2[700],
  },
  blogDetails: {
    // color: generalColor,
    fontSize: 'xs',
    lineHeight: 'shorter',
  },
  footerHeader: {
    fontSize: ['2xl', null, '3xl'],
    fontFamily: 'heading',
    letterSpacing: 'wide',
    // color: colors.color2[300],
    textAlign: 'center',
    mb: '3',
  },
  footerText: {
    // color: colors.color2[300],
    mb: '3',
  },
  footerSocialIcon: {
    // fill: colors.color2[300],
    fontSize: 'xl',
    _hover: {
      textDecoration: 'none',
      fill: colors.white,
      transitionDuration: '0.2s',
      transitionTimingFunction: 'ease-in-out',
    },
  },
}
