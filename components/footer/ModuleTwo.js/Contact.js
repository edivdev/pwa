import Text from "../../ui/Text"
import { Box, Flex } from "@chakra-ui/react"

export default function Contact() {
  return (
    <Flex flexDirection="column">
      <Text fontWeight="900" color="white">CONTACT</Text>

      <Text color="white">Educación Diversa</Text>
      <Text color="white">Street Name</Text>
      <Text color="white">City, Zip Code</Text>
      <Text color="white">Country</Text>
    </Flex>
  )
}
