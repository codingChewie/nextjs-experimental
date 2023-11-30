const message = (txt: string, max: number) => `${txt} length should not exceed ${max} characters.`

export default {
  desc: {
    max: 160,
    message: () => message('Description', 160),
  },
  slug: {
    max: 200,
    message: () => message('Slug', 200),
  },
  title: {
    max: 55,
    message: () => message('Title', 55),
  },
}
