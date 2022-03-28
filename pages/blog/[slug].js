import { Box } from '@chakra-ui/react'
import { blogs } from '../../components/data/initialState'
import PagesHeader from '../../components/ui/PagesHeader'
<<<<<<< HEAD
import Text from '../../components/ui/Text'
=======
>>>>>>> c88e3308b97387b9946b6f2bc03bee8de5d6079c

export default function index(props) {
  const { blog } = props
  const { title, content, excerpt, image } = blog

  return (
    <section id="blog-entry">
      <PagesHeader
        background={image}
      />
      <Box px="25%">
        <Box my="5%" textAlign="center"><h1><Text variant="h1">{title}</Text></h1></Box>
        <Box my="5%">
          <Box textAlign="justify" dangerouslySetInnerHTML={{ __html: content }} />
        </Box>
      </Box>
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