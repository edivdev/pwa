import { Flex } from '@chakra-ui/react'
import Text from '../../ui/Text'
import MemberForm from './MemberForm'

export default function BecomeMember() {
  return (
    <Flex w="20%" flexDirection="column" justifyContent="space-around" h="100%">
      <Text fontWeight="900" color="white">BECOME A MEMBER</Text>
      <MemberForm />
    </Flex>
  )
}
