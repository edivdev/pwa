import React from 'react'
import Text from '../Text'
import Image from 'next/image'
import { Box } from '@chakra-ui/react'

export default function SectionsTitle({ title }) {
  return (
    <Box pt="70px" textAlign="center">
      <Text variant="callsTitle" m="0 auto 30px">{title}</Text>
      <Box mb="20px">
        <Image src="/images/static/assets/underline-title.png" width="72" height="16" alt="underline" />
      </Box>
    </Box>
  )
}
