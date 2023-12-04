export const layerStyles = {
  boxTest: {
    w: '100%',
    maxW: 'breakpoints.lg',
    padding: '3',
    bg: 'red',
    borderBottom: '0.15rem solid rgb(249, 246, 239)',
  },
  base: {
    bg: 'gray.50',
    border: '2px solid',
    borderColor: 'gray.500',
  },
  mobileMenuItem: {
    w: '100%',
    maxW: 'breakpoints.lg',
    fontFamily: 'heading2',
    p: '2',
    fontSize: 'xl',
    color: 'colors.color3[900]',
    _hover: {
      textDecoration: 'none',
      color: 'colors.color3[600]',
      transitionDuration: '0.2s',
      transitionTimingFunction: 'ease-in-out',
    },
  },
}
