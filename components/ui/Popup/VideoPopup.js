
import { Box, Flex } from '@chakra-ui/react'
import Text from '../Text'

export default function VideoPopup({ isPopupShowing, closePopUp, popupInfo }) {

  console.log(popupInfo)

  return (
    <Box className="modal" display={isPopupShowing ? 'flex' : 'none'} onClick={closePopUp}>
      <Flex className="" display="flex" flexDirection="column" w="654px" h="452px">
        <Flex justifyContent="flex-end">
          <Flex w="25px" h="25px" justifyContent="center" alignItems="center">
            <Text fontSize="35px" color="gray" className="hoverable" onClick={closePopUp}>&times;</Text>
          </Flex>
        </Flex>
        <Flex justifyContent="space-around" alignItems="center" h="100%" pt="5%">
          <Box dangerouslySetInnerHTML={{ __html: popupInfo }} />
        </Flex>
      </Flex>
    </Box>
  )
}