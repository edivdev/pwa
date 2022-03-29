import { useState } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Text from '../Text'
import Image from 'next/image'

export default function index({ isPopupShowing, closePopUp, popupInfo }) {

  const { name, picture, country, bio } = popupInfo

  return (
    <Box className="modal" display={isPopupShowing ? 'flex' : 'none'}>
      <Flex className="modal_content" display="flex" flexDirection="column" w="654px" h="452px">
        <Flex justifyContent="flex-end">
          <Flex w="25px" h="25px" justifyContent="center" alignItems="center">
            <Text fontSize="35px" color="gray" className="hoverable" onClick={closePopUp}>&times;</Text>
          </Flex>
        </Flex>
        <Flex justifyContent="space-around" alignItems="center" h="100%">
          <Flex w="50%" justifyContent="center">
            <Box w="270px" h="270px" position="relative">
              <Image className="bnwhite-card-image" layout="fill" objectFit="contain" src={`/images/static/volunteers/${picture}`} />
            </Box>
          </Flex>
          <Box w="50%">

          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}
