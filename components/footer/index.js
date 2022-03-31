import { FaLinkedin, FaInstagramSquare } from "react-icons/fa"
import { Flex, Box } from '@chakra-ui/react'
import useTheme from '../../hooks/useTheme'
import MemberForm from './MemberForm'
import Text from '../ui/Text'
import Link from 'next/link'

function Footer() {

  const theme = useTheme()

  return (
    <Flex
      bg={theme.colors.main.footer}
      color={theme.colors.main.white}
      p="4% 7%"
    >
      <Box w="25%">
        <Flex flexDirection="column">
          <Text fontWeight="900" color="white">CONNECT</Text>
          <Flex>
            <Box fontSize="30px"><FaLinkedin /></Box>
            <Box fontSize="30px"><FaInstagramSquare /></Box>
          </Flex>
        </Flex>
        <Box>
          <Text fontWeight="900" color="white">LEARNING PORTAL</Text>
          <Text color="white">Lorem ipsum dolor sit, consectetur learning portal</Text>
        </Box>
        <Box>
          <Text fontWeight="900" color="white">BLOG</Text>
          <Text color="white">Visit our <Link href="/blog">blog</Link></Text>
        </Box>
      </Box>
      <Box w="25%">
        <Flex flexDirection="column">
          <Box>
            <Text fontWeight="900" color="white">CONTACT</Text>
          </Box>
          <Box>
            <Text fontWeight="900" color="white">CONTACT</Text>
          </Box>
        </Flex>
      </Box>
      <Box w="25%">
      </Box>
      <Flex w="25%" flexDirection="column" justifyContent="space-around" h="100%">
        <Text fontWeight="900" color="white">BECOME A MEMBER</Text>
        <MemberForm />
      </Flex>
    </Flex>
  )
}

export default Footer
