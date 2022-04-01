import Text from "../../ui/Text"
import { Box, Flex } from "@chakra-ui/react"

export default function ProjectsIntro() {
  return (
    <Flex flexDirection="column">
      <Text variant="normal">
        All our projects, educational packages, resources and campaigns stem from either an artistic formation or result in an artistic outcome.  We choose to use art in the provision of education to ensure that when people take part in our campaigns, projects, and educational packages they are also undertaking therapy, healing. Most importantly we believe that art does not discriminate against people based on their literacy level.  Teaching through art means that our learning is more accessible and very inclusive.<br /><br />
        We believe in circular learning, meaning for people to learn they need education, empowerment and activism.  Our projects and campaigns are all aimed at encouraging people, no matter what literacy level to learn about our areas of focus which are:
      </Text>

      <Box p="4% 4% 0">
        <ul>
          <li><Text variant="normal">Human Rights</Text></li>
          <li><Text variant="normal">Eliminating Violence and Peaceful Conflict resolution</Text></li>
          <li><Text variant="normal">Sexual and Reproductive Health.</Text></li>
        </ul>
      </Box>
    </Flex>
  )
}
