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
      <S.Article post>
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
        <a href={CONST.EMAIL_LINK}>
          <S.Button type="button">
            <S.TagSingle bg={CONST.GREEN_A} colorHover="#FFFFFF">
              SAY HELLO
            </S.TagSingle>
          </S.Button>
        </a>
        <a href={CONST.EMAIL_LINK}>
          <S.Button type="button">
            <S.TagSingle bg={CONST.GREEN_A} colorHover="#FFFFFF">
              LEAVE ME SOME FEEDBACK
            </S.TagSingle>
          </S.Button>
        </a>
      </S.Article>
    </S.Section>
  )
}
export default PostSlug
