import { useState, useEffect } from 'react'
import PagesHeader from "../../components/ui/PagesHeader"
import { Box } from "@chakra-ui/react"
import { projects } from "../../components/data/initialState"
import Text from "../../components/ui/Text"
import useViewport from '../../hooks/useViewport'

export default function projectDetail(props) {

  const { project } = props
  const { title, id } = project

  const viewport = useViewport()
  const [isMobile, setIsMobile] = useState(null)

  useEffect(() => {
    setIsMobile(viewport[0])
  }, [isMobile, viewport])

  return (
    <section>
      <PagesHeader />
      <Box px={isMobile ? "8%" : "25%"}>
        <Box my="5%" textAlign="center"><h1><Text variant={isMobile ? "titleMobile" : "h1"}>{title}</Text></h1></Box>
        <Box my="5%">
          {/* <Box textAlign="justify" dangerouslySetInnerHTML={{ __html: content }} /> */}
          content
        </Box>
      </Box>
    </section>
  )
}

export async function getStaticProps(context) {
  const { params } = context
  const { slug } = params

  const projectDetail = projects.filter((project) => project.slug === slug)

  return {
    props: {
      project: projectDetail[0]
    }
  }
}

export async function getStaticPaths() {

  let slugs = []
  projects.map((project) => slugs.push(project.slug))

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false
  }
}