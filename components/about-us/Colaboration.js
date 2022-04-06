import Image from 'next/image'
import { Box } from '@chakra-ui/react'

export default function Colaboration({ element }) {
  return (
    <Box width="200px" height="100px" position="relative">
      <Image src={element.pic} layout="fill" objectFit="contain" />
    </Box>
  )
}


