import { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import { blogs } from '../../components/data/initialState'
import PagesHeader from '../../components/ui/PagesHeader'
import Text from '../../components/ui/Text'
import useViewport from '../../hooks/useViewport'

export default function BlogDetail(props) {
  const { blog } = props
  const { title, content, excerpt, image } = blog

  const viewport = useViewport()
  const [isMobile, setIsMobile] = useState(null)

  useEffect(() => {
    setIsMobile(viewport[0])
  }, [isMobile, viewport])

  return (
    <section id="blog-entry">
      <PagesHeader
        background={image}
      />
      <Box px={isMobile ? "8%" : "25%"}>
        <Box my="5%" textAlign="center"><h1><Text variant={isMobile ? "titleMobile" : "h1"}>{title}</Text></h1></Box>
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