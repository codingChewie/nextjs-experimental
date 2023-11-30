// Sanity
import {client} from '@/sanity/utils'
import {settingsQuery} from '@/sanity/queries'

export interface Settings {
  title: string
  desc: string
  noIndex: boolean
  noFollow: boolean
}

async function getData() {
  const data = await client.fetch(settingsQuery)
  return data as Settings[]
}

export default async function Home() {
  const data = (await getData()) as Settings[]
  console.log({data})

  return <main>Next.js + Sanity</main>
}
