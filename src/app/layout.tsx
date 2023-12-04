import type {Viewport} from 'next'
import Head from 'next/head'

import {Providers} from './providers'
import {client} from '@/sanity/utils'
import {settingsQuery} from '@/sanity/queries'

type RootLayoutProps = {
  children: React.ReactNode
}

export async function generateMetadata() {
  try {
    const settings = await client.fetch(settingsQuery, {})
    console.log({settings})
    return {
      title: 'This is a test',
    }
  } catch (e) {
    console.log(e)
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
}

const RootLayout = ({children}: RootLayoutProps) => {
  return (
    <html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/Bison/Bison-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Bison/Bison-DemiBold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Heritage/Heritage.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout
