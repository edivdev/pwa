import LearningPortal from "../LearningPortal"
import Blog from "../Blog"
import Connect from "../Connect"
import { Flex } from "@chakra-ui/react"

export default function ModuleOne() {
  return (
    <Flex flexDirection="column" justifyContent="space-evenly" w="25%">
      <Connect />
      <LearningPortal />
      <Blog />
    </Flex>
  )
}
