import { Box, Flex } from "@chakra-ui/react"
import Text from "../../components/ui/Text"
import Image from 'next/image'

export default function Department() {
  return (
    <Flex my="5%">
      <Box w="40%" textAlign="center">
        <Box position="relative" w="120" h="120">
          <Image src="/images/static/assets/blue-ball.png" layout="fill" alt="department" objectFit="contain" />
        </Box>
        <Text mt="20px" fontWeight="900">
          Department<br />Name
        </Text>
      </Box>
      <Box w="60%">
        <Text pr="20%" textAlign="justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Box>
    </Flex>
  )
}
