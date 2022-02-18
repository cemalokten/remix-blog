import { useLoaderData, Link } from 'remix'
import { Post } from '~/post'
import { getPostsTitle } from '~/post'

export const loader = async () => {
  return getPostsTitle()
}

export default function Posts() {
  const posts = useLoaderData<Post[]>()
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link to={post.slug}>{post.title}</Link>
        </li>
      ))}
    </div>
  )
}
