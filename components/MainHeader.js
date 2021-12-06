import React from 'react'
import { Box } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import { AspectRatio } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

const MainHeader = () => {
  return (
    <>
    <Box bg='#30599C'>
      <Flex>
        <Box w='50%'>
          Education resources for children
      </Box>
        <Box w='50%'>
          <Image src='images/m1.png' alt='naruto' objectFit='cover' />
        </Box>
      </Flex>
      <Box>
        <Button>JOIN US</Button>
        <Button>DONATE US</Button>
      </Box>
      </Box>
    </>
  )
}

export default MainHeader
