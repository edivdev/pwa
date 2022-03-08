import React from 'react'
import Text from '../Text'
import Image from 'next/image'
import { Box } from '@chakra-ui/react'

export default function SectionsTitle({ title, center }) {
  return (
    <Box pb="20px" textAlign={center ? 'center' : ''}>
      <Text variant="callsTitle" m="0 auto 10px">{title}</Text>
      <Box>
        <Image src="/images/static/assets/underline-title.png" width="42" height="12" alt="underline" />
      </Box>
    </Box>
  )
}
