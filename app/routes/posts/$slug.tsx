import { useLoaderData, LoaderFunction } from 'remix'
import invariant from 'tiny-invariant'
import React from 'react'
import { getPost } from '~/post'
import * as C from '../../components'
import * as S from '../../styles'
import * as CONST from '~/constants'

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, 'no slug found')
  return getPost(params.slug)
}

function PostSlug() {
  const post = useLoaderData()
  return (
    <S.Section post center>
      <S.Article>
        <S.H1 mt={3} mb={-0.5}>
          {post.title}
        </S.H1>
        <S.List center>
          <C.Tags
            tags={post.tags}
            background={post.background}
            date={post.date}
            color={post.color}
            rotation={post.rotation}
            mb={3}
          />
        </S.List>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </S.Article>
    </S.Section>
  )
}
export default PostSlug
