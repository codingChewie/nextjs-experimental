import type {Viewport} from 'next'

import {Providers} from './providers'

type RootLayoutProps = {
  children: React.ReactNode
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
}

const RootLayout = ({children}: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout
