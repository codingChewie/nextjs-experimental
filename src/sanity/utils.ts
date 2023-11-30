import {createClient} from 'next-sanity'

import {apiVersion, dataset, projectId, revalidateSecret} from '@/sanity/api'

console.log({apiVersion, dataset, projectId, revalidateSecret})
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: revalidateSecret ? false : true,
  perspective: 'published',
})
