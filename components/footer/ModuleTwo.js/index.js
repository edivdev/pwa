import Contact from "./Contact"
import { Flex } from "@chakra-ui/react"
import Donate from "./Donate"

export default function ModuleTwo() {
  return (
    <Flex flexDirection="column" justifyContent="flex-start" w="20%">
      <Contact />
      <Donate />
    </Flex>
  )
}
