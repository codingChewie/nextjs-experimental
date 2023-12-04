'use client'

// Chakra
import {CacheProvider} from '@chakra-ui/next-js'
import {ChakraProvider} from '@chakra-ui/react'

import theme from '@/theme'

// Logger
const themeDisable = process.env.NEXT_PUBLIC_THEME_LOGGER || false

export function Providers({children}: {children: React.ReactNode}) {
  if (process.env.NODE_ENV === 'development' && themeDisable) console.log('theme', theme)

  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  )
}
