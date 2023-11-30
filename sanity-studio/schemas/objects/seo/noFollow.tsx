import {defineField} from 'sanity'

export default defineField({
  name: 'seo.noFollow',
  title: 'No Follow',
  description:
    'When you add a "nofollow" metatag to a webpage, it disallows search engines from crawling the links on that page.',
  type: 'boolean',
  initialValue: false,
})
