import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import Text from '../ui/Text'

export default function VolunteerCard({ volunteer }) {
  return (
    <Flex w="155px" h="312px" borderRadius="6px" boxShadow="0 0 24px rgba(44, 41, 47, 0.12)" flexDirection="column" justifyContent="space-between">
      <Box w="155px" h="156px" position="relative">
        <Image src={`/images/static/volunteers/${volunteer.pic}`} layout="fill" alt={volunteer.name} objectFit="contain" />
      </Box>
      <Flex w="155px" h="156px" flexDirection="column" alignItems="center" justifyContent="space-evenly" py="10px">
        <Box w="80px" wordBreak="break-word" textAlign="center">
          <Text fontSize="16px" fontWeight="900">{volunteer.name}</Text>
        </Box>
        <Box>
          <Text fontSize="12px">{volunteer.country}</Text>
        </Box>
      </Flex>
    </Flex>
  )
}
