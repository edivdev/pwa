import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import useTheme from '../../hooks/useTheme'

function Footer() {

  const theme = useTheme()

  return (
    <Flex
      bg={theme.colors.main.footer}
      color={theme.colors.main.white}
      px="5%"
      py="5%"
    >
      <Box w="25%">
        <Flex flexDirection="column">
          CONNECT
          <Flex>
            <Box w="36px" h="36px" borderRadius="100%" bg="white"></Box>
            <Box w="36px" h="36px" borderRadius="100%" bg="white"></Box>
            <Box w="36px" h="36px" borderRadius="100%" bg="white"></Box>
            <Box w="36px" h="36px" borderRadius="100%" bg="white"></Box>
          </Flex>
        </Flex>
        <Box>RESOURCES</Box>
        <Box>BLOG</Box>
      </Box>
      <Box w="25%">
        <Box>CONTACT</Box>
        <Box>DONATE</Box>
      </Box>
      <Box w="25%">
        <Box>EMAIL</Box>
      </Box>
      <Box w="25%">
        NEWSLETTER
      </Box>
    </Flex>
  )
}

export default Footer
