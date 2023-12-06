// Sanity
import {client} from '@/sanity/utils'
import {settingsQuery} from '@/sanity/queries'

export default async function Home() {
  const data = await client.fetch(settingsQuery, {}, {cache: 'no-store'})
  console.log({data})
  return <main>Next.js + Sanity</main>
}
