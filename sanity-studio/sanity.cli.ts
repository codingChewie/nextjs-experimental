import {defineCliConfig} from 'sanity/cli'

import {projectId, dataset} from './api'

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
})
