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
    <S.Section center>
      <S.Article mt={7}>
        {posts.map((post) => (
          <>
            <Link to={post.slug}>
              <S.H1 color={post.background[0]} mt={3} mb={-0.5}>
                {post.title}
              </S.H1>
            </Link>
            <S.List key={post.slug} mb={5}>
              <C.Tags
                tags={post.tags}
                background={post.background}
                date={post.date}
                color={post.color}
                rotation={post.rotation}
              />
            </S.List>
          </>
        ))}
      </S.Article>
    </S.Section>
  )
}
