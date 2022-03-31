import LearningPortal from "./LearningPortal"
import Blog from "./Blog"
import Connect from "./Connect"
import { Flex } from "@chakra-ui/react"

export default function ModuleOne() {
  return (
    <Flex flexDirection="column" justifyContent="flex-start" w="20%">
      <Connect />
      <LearningPortal />
      <Blog />
    </Flex>
  )
}
