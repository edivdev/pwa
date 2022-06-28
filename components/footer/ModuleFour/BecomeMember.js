import { Flex } from '@chakra-ui/react'
import Text from '../../ui/Text'
import MemberForm from './MemberForm'

export default function BecomeMember({ isMobile }) {
  return (
    <Flex w={isMobile ? "100%" : "20%"} flexDirection="column" justifyContent="space-around" h="100%" mb={isMobile ? '20px' : ''}>
      <Text fontWeight="900" color="white">Join our Newsletter</Text>
      <MemberForm />
    </Flex>
  )
}
