import { blogs } from '../../components/data/initialState'
import PagesHeader from '../../components/ui/PagesHeader'

export default function index(props) {
  const { blog } = props
  const { title, content, excerpt, image } = blog

  return (
    <section>
      <PagesHeader
        background={image}
      />
      <div>{title}</div>
      <div>{content}</div>
      <div>{excerpt}</div>
      <div>{image}</div>
    </section>
  )
}

export async function getStaticProps(context) {
  const { params } = context
  const { slug } = params

  const blogEntry = blogs.filter((blog) => blog.slug === slug)

  return {
    props: {
      blog: blogEntry[0]
    }
  }
}

export async function getStaticPaths() {

  let slugs = []
  blogs.map((blog) => slugs.push(blog.slug))

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false
  }
}