import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import { changesForOpenPopUp } from '../../helpers/domManipulations'
import Text from '../ui/Text'

export default function VolunteerCard({ volunteer, setPopupInfo, setIsPopupShowing, ...props }) {

  function clickOnVolunteer() {
    setPopupInfo({
      picture: volunteer.pic,
      fname: volunteer.fname,
      lname: volunteer.lname,
      country: volunteer.country,
      bio: volunteer.bio
    })
    setIsPopupShowing(true)
    changesForOpenPopUp()
  }
  return (
    <Flex {...props} w="155px" h="312px" borderRadius="6px" boxShadow="0 0 24px rgba(44, 41, 47, 0.12)" flexDirection="column" justifyContent="space-between" onClick={clickOnVolunteer} className="hoverable">
      <Box w="155px" h="156px" position="relative">
        <Image className="bnwhite-card-image" src={volunteer.pic} layout="fill" alt={volunteer.fname} objectFit="contain" />
      </Box>
      <Flex w="155px" h="156px" flexDirection="column" alignItems="center" justifyContent="space-evenly" py="10px">
        <Box w="80px" wordBreak="break-word" textAlign="center">
          <Text fontSize="16px" fontWeight="900">{volunteer.fname}</Text>
          <Text fontSize="16px" fontWeight="900">{volunteer.lname}</Text>
        </Box>
        <Box>
          <Text fontSize="12px">{volunteer.country}</Text>
        </Box>
      </Flex>
    </Flex>
  )
}
