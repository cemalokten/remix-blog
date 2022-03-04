import { useLoaderData, LoaderFunction } from 'remix'
import invariant from 'tiny-invariant'
import { getPost } from '~/post'
import * as C from '../../components'
import * as S from '../../styles'

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, 'no slug found')
  return getPost(params.slug)
}

function PostSlug() {
  const post = useLoaderData()
  return (
    <S.Section post center>
      <S.Article>
        <C.Tags
          tags={post.tags}
          background={post.background}
          date={post.date}
          color={post.color}
        />
        <S.H1 mt={3} mb={2}>
          {post.title}
        </S.H1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </S.Article>
    </S.Section>
  )
}
export default PostSlug
