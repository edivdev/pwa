import Contact from "./Contact"
import { Flex } from "@chakra-ui/react"
import Donate from "./Donate"

export default function ModuleTwo({ isMobile }) {
  return (
    <Flex flexDirection="column" justifyContent="flex-start" w={isMobile ? "100%" : "20%"} mb={isMobile ? '20px' : ''}>
      <Contact />
      <Donate />
    </Flex>
  )
}
