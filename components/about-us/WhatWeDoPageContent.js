import { Box, Flex } from "@chakra-ui/react"
import Image from 'next/image'
import Text from "../ui/Text"

export default function whatWeDoPageContent() {
  const title1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  const title2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  return (
    <>
      <Box maxWidth="60%" m="auto" py="5%">
        <p>{title1}</p>
      </Box>
      <Flex backgroundImage="/images/static/backgrounds/BACKGROUND-blog.jpg" px="5%">
        <Box w="50%" px="8%">
          <Box w="auto" h="610px" position="relative">
            <Image src="/images/static/about/LaurenVideo.jpg" objectFit="contain" layout="fill" />
          </Box>
        </Box>
        <Box w="50%">
          <Flex flexDirection="column" p="5%" h="100%" justifyContent="center">
            <Text fontWeight="900" fontSize="25px">Lauren Cannell</Text>
            <Text pt="2%" pb="5%" fontSize="15px">Founder and CEO</Text>
            <Text variant="normal">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum”.</Text>
          </Flex>
        </Box>
      </Flex>
    </>
  )
}
