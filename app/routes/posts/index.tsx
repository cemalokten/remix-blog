import React from 'react'
import { useLoaderData, Link } from 'remix'
import { Post } from '~/post'
import { getPostsTitle } from '~/post'
import * as C from '../../components'
import * as S from '../../styles'

export const loader = async () => getPostsTitle()

export default function Posts() {
  const posts = useLoaderData<Post[]>()

  return (
    <S.Section center>
      <S.Article mt={7}>
        {posts.map((post) => (
          <S.List key={post.slug} mb={5}>
            <Link to={post.slug}>
              <S.H1 color={post.background[0]}>{post.title}</S.H1>
            </Link>
            <C.Tags
              tags={post.tags}
              background={post.background}
              date={post.date}
              color={post.color}
            />
          </S.List>
        ))}
      </S.Article>
    </S.Section>
  )
}
