import React from 'react'
import { useLoaderData, Link } from 'remix'
import { Post, getPostsTitle } from '~/post'
import * as C from '../../components'
import * as S from '../../styles'
import * as CONST from '~/constants'

export const loader = async () => getPostsTitle()

export default function Posts() {
  const posts = useLoaderData<Post[]>()

  return (
    <S.Article>
      <S.Section mt={7}>
        {posts.map((post) => (
          <S.List key={post.slug}>
            <Link to={post.slug}>
              <S.H1 color={post.background[0]} mb={-0.5}>
                {post.title}
              </S.H1>
            </Link>
            <C.Tags
              tags={post.tags}
              background={post.background}
              date={post.date}
              color={post.color}
              rotation={post.rotation}
            />
          </S.List>
        ))}
      </S.Section>
    </S.Article>
  )
}
