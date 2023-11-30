import {groq} from 'next-sanity'

export default groq`
  *[_type == "settings"][0] {
    title,
    desc,
    noIndex,
    noFollow
  }
`
