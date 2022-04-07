import { useState } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Text from '../Text'
import Image from 'next/image'

export default function index({ isPopupShowing, closePopUp, popupInfo }) {

  const { name, picture, country, bio, position } = popupInfo

  return (
    <Box className="modal" display={isPopupShowing ? 'flex' : 'none'} onClick={closePopUp}>
      <Flex className="modal_content" display="flex" flexDirection="column" w="654px" h="452px">
        <Flex justifyContent="flex-end">
          <Flex w="25px" h="25px" justifyContent="center" alignItems="center">
            <Text fontSize="35px" color="gray" className="hoverable" onClick={closePopUp}>&times;</Text>
          </Flex>
        </Flex>
        <Flex justifyContent="space-around" alignItems="center" h="100%" pt="5%">
          <Flex w="50%" h="100%" justifyContent="center">
            <Box w="270px" h="270px" position="relative">
              <Image className="bnwhite-card-image" layout="fill" objectFit="contain" src={picture} alt={name} />
            </Box>
          </Flex>
          <Box w="50%" px="5%" h="100%">
            <Box>
              <Text fontSize="24px" fontWeight="900">{name}</Text>
            </Box>
            <Box mb="5%">
              <Text fontSize="18px">{country}</Text>
            </Box>
            <Box>
              <Text textAlign="justify" variant="normal">{bio}</Text>
            </Box>
            <Box>
              <Text textAlign="justify" variant="normal">{position}</Text>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}
