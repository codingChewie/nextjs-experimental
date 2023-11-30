import {defineField} from 'sanity'

export default defineField({
  name: 'seo.noIndex',
  title: 'No Index',
  description:
    'When you add a "noindex" metatag to a webpage, it tells a search engine that even though it can crawl the page, it cannot add the page into its search index.',
  type: 'boolean',
  initialValue: false,
})
