import { Box } from '@chakra-ui/react'
import React from 'react'
import PagesHeader from '../../components/ui/PagesHeader'
import SectionsTitle from '../../components/ui/SectionsTitle'

export default function donatePage() {
  return (
    <Box>
      <PagesHeader
        background="/images/static/backgrounds/BLUE_BACKGROUND.jpg"
        text1="lorem impusm quis qame"
        text2="subtitle"
      />
      <p>donate page</p>
    </Box>
  )
}
