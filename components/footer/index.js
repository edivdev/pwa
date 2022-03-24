import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";
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
            <Box className="f-icon" fontSize="30px"><FaLinkedin /></Box>
            <Box fontSize="30px"><FaInstagramSquare /></Box>

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
