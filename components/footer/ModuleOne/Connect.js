import { Flex, Box } from "@chakra-ui/react"
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa"
import Text from "../../ui/Text"
import Link from "next/link"

export default function Connect() {
  return (
    <Flex flexDirection="column" mb="15px">
      <Text fontWeight="900" color="white">CONNECT</Text>
      <Flex>
        <Box fontSize="30px"><Link passHref href="https://www.linkedin.com/in/educación-diversa-making-change"><a><FaLinkedin /></a></Link></Box>
        <Box fontSize="30px"><Link passHref href="https://www.instagram.com/educaciondiversa/"><a><FaInstagramSquare /></a></Link></Box>
      </Flex>
    </Flex>
  )
}
