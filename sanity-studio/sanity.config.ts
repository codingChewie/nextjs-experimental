import {defineConfig, isDev} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'

import {siteTitle, projectId} from './api'
import {structure} from './desk'
import {schemaTypes} from './schemas'

const devOnlyPlugins = [visionTool()]

const setEnv = () => {
  switch (process.env.SANITY_STUDIO_BUILD_CONFIG) {
    case 'development':
      return {
        title: `${siteTitle} (dev)`,
        dataset: 'development',
      }
    case 'production':
      return {
        title: siteTitle,
        dataset: 'production',
      }
    default:
      return {
        title: siteTitle,
        dataset: 'production',
      }
  }
}

export default defineConfig({
  name: 'default',
  projectId,
  ...setEnv(),
  plugins: [deskTool({structure}), ...(isDev ? devOnlyPlugins : [])],
  schema: {
    types: schemaTypes,
  },
})
