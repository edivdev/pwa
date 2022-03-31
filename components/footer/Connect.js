import { Flex, Box } from "@chakra-ui/react"
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa"
import Text from "../ui/Text"

export default function Connect() {
  return (
    <Flex flexDirection="column">
      <Text fontWeight="900" color="white">CONNECT</Text>
      <Flex>
        <Box fontSize="30px"><FaLinkedin /></Box>
        <Box fontSize="30px"><FaInstagramSquare /></Box>
      </Flex>
    </Flex>
  )
}
