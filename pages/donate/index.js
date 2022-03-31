import { Box } from '@chakra-ui/react'
import React from 'react'
import MembershipPlan from '../../components/donate/MembershipPlan'
import PagesHeader from '../../components/ui/PagesHeader'
import Image from 'next/image'
import Text from '../../components/ui/Text'
import DonateEspecific from './DonateEspecific'

export default function donatePage() {
  return (
    <Box>
      <PagesHeader
        background="/images/static/backgrounds/BLUE_BACKGROUND.jpg"
        text0="Educación Diversa"
        text1="DONATE"
      />
      <Box w="834" h="478" position="relative" mt="-150px">
        <Image src="/images/static/donate/donatevideo.jpg" alt=".." layout='fill' objectFit='contain' />
      </Box>
      <Box my="5%" w="834px" mx="auto" textAlign="justify">
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </Box>
      <MembershipPlan />
      <DonateEspecific />
    </Box>
  )
}
