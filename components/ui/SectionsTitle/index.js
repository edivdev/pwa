import React from 'react'
import Text from '../Text'
import Image from 'next/image'
import { Box } from '@chakra-ui/react'

export default function SectionsTitle({ title }) {
  return (
    <>
      <Text variant="callsTitle" m="0 auto 40px">{title}</Text>
      <Box mb="40px">
        <Image src="/images/static/assets/underline-title.png" width="72" height="16" alt="underline" />
      </Box>
    </>
  )
}
