import fs from 'fs/promises'
import path from 'path'
import parseFrontMatter from 'front-matter'
import invariant from 'tiny-invariant'
import { marked } from 'marked'

export type Post = {
  slug: string
  title: string
  tags: string
  date: string
  background: Array<string>
}

export type PostMarkdownAttributes = {
  title: string
  tags: Array<string>
  date: string
  background: Array<string>
}

const pathOfPosts = path.join(__dirname, '..', 'posts')

const hasValidPostAttributes = (
  attributes: any
): attributes is PostMarkdownAttributes =>
  attributes?.title ||
  attributes?.tags ||
  attributes?.date ||
  attributes?.background

export const getPostsTitle = async () => {
  const postDir = await fs.readdir(pathOfPosts)
  return Promise.all(
    postDir.map(async (filename) => {
      const file = await fs.readFile(path.join(pathOfPosts, filename))
      const { attributes }: { attributes: string } = parseFrontMatter(
        file.toString()
      )

      invariant(
        hasValidPostAttributes(attributes),
        `${filename} has incorrect title metadata`
      )

      return {
        slug: filename.replace(/\.md$/, ''),
        title: attributes.title,
        tags: attributes.tags,
        date: attributes.date,
        background: attributes.background,
      }
    })
  )
}

export const getPost = async (slug: string) => {
  const filepath = path.join(pathOfPosts, `${slug}.md`)
  const file = await fs.readFile(filepath)
  const { attributes, body } = parseFrontMatter(file.toString())
  invariant(
    hasValidPostAttributes(attributes),
    `Post ${filepath} is missing valid attributes`
  )
  const html = marked(body)
  return {
    slug,
    html,
    title: attributes.title,
    tags: attributes.tags,
    date: attributes.date,
    background: attributes.background,
  }
}
