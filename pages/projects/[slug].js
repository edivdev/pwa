import PagesHeader from "../../components/ui/PagesHeader"
import { Box } from "@chakra-ui/react"
import { projects } from "../../components/data/initialState"
import Text from "../../components/ui/Text"

export default function projectDetail(props) {

  const { project } = props
  const { title, id } = project

  return (
    <section>
      <PagesHeader />
      <Box px="25%">
        <Box my="5%" textAlign="center"><h1><Text variant="h1">{title}</Text></h1></Box>
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