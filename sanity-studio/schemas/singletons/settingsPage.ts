import {CogIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

const TITLE = 'Settings'

export default defineType({
  name: 'settings',
  title: TITLE,
  type: 'document',
  icon: CogIcon,
  groups: [
    {
      default: true,
      name: 'seo',
      title: 'Site SEO',
    },
  ],
  fields: [
    // SEO Title
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      description: 'Default title used across the site.',
      group: 'seo',
      validation: (Rule) => Rule.required(),
    }),
    // SEO Description
    defineField({
      name: 'desc',
      title: 'Site Description',
      type: 'text',
      description: 'This is the default description used throughout the site.',
      group: 'seo',
    }),
    // Og Image
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Displayed on social cards and search engine results.',
      group: 'seo',
      options: {
        hotspot: true,
      },
    }),
    // No Index
    defineField({
      name: 'noIndex',
      title: 'No Index',
      type: 'seo.noIndex',
      group: 'seo',
    }),
    // No Follow
    defineField({
      name: 'noFollow',
      title: 'No Follow',
      type: 'seo.noFollow',
      group: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: TITLE,
      }
    },
  },
})
