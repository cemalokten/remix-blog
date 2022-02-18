import { useLoaderData, LoaderFunction } from 'remix'
import invariant from 'tiny-invariant'
import { getPost } from '~/post'

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, 'no slug found')
  return getPost(params.slug)
}

const PostSlug = () => {
  const post = useLoaderData()
  return (
    <div>
      <h1>{post.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}
export default PostSlug
