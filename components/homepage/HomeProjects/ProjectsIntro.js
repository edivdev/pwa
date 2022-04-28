import { useState } from "react"
import Text from "../../ui/Text"
import { Box } from "@chakra-ui/react"
import useTheme from '../../../hooks/useTheme'

export default function ProjectsIntro({ filteredProjects, branchText }) {

  const theme = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  function handleOpen() {
    setIsOpen(true)
  }

  function handleClose() {
    setIsOpen(false)
  }

  const SeeMore = () => {
    return (
      <Box onClick={isOpen ? handleClose : handleOpen} mt="30px" className="hoverable">
        <Text fontWeight="900" fontSize="18px" color={theme.colors.main.blue}>{isOpen ? 'See Less ⌃' : 'See More ⌵'}</Text>
      </Box>
    )
  }

  const DefaultText = () => {
    return (
      <Box height={isOpen ? "auto" : "100px"} overflow="hidden">
        <Text variant="normal">
          All our projects, educational packages, resources and campaigns stem from either an artistic formation or result in an artistic outcome.<br /><br />We choose to use art in the provision of education to ensure that when people take part in our campaigns, projects, and educational packages they are also undertaking therapy, healing. Most importantly we believe that art does not discriminate against people based on their literacy level.  Teaching through art means that our learning is more accessible and very inclusive.<br /><br />
          We believe in circular learning, meaning for people to learn they need education, empowerment and activism.  Our projects and campaigns are all aimed at encouraging people, no matter what literacy level to learn about our areas of focus which are:
        </Text>

        <Box p="4% 4% 0">
          <ul>
            <li><Text variant="normal">Human Rights</Text></li>
            <li><Text variant="normal">Eliminating Violence and Peaceful Conflict resolution</Text></li>
            <li><Text variant="normal">Sexual and Reproductive Health.</Text></li>
          </ul>
        </Box>
      </Box>
    )
  }
  if (!filteredProjects) {
    return (
      <>
        <DefaultText />
        <SeeMore />
      </>
    )
  } else {
    return (
      <>
        <Box height={isOpen ? "auto" : "100px"} overflow="hidden">
          <Text variant="normal" textAlign="justify" dangerouslySetInnerHTML={{ __html: branchText }} />
        </Box>
        <SeeMore />
      </>
    )
  }
}
