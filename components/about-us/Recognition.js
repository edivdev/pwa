import { Flex, Box } from "@chakra-ui/react"
import Text from "../ui/Text"
import Image from 'next/image'

export default function Recognition() {
  return (
    <Flex my="80px">
      <Flex w="50%" flexDirection="column" alignItems="center" px="8%">
        <Box>
          <Text fontWeight="900" fontSize="24px">Recognition Name</Text>
        </Box>
        <Box mt="40px">
          <Text variant="normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
        </Box>

      </Flex>
      <Box w="50%">
        <Box position="relative" w="498px" h="328px">
          <Image src="/images/static/about/recognitionPicture.jpg" layout="fill" objectFit="contain" />
        </Box>
      </Box>
    </Flex>
  )
}
