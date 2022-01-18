import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import useTheme from '../hooks/useTheme'

function Footer() {

  const theme = useTheme()

  return (
    <Flex 
      bg={theme.colors.main.footer} 
      color={theme.colors.main.white}
    >
      <Box w="25%">
        <Box>CONNECT</Box>
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
