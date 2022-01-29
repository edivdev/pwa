import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import Text from '../Text'
import Button from '../Button'
import Image from '../Image'

import useTheme from '../../hooks/useTheme'

const MainSlider = () => {

  const theme = useTheme()
  
  return (
    <Flex backgroundColor={theme.colors.main.blue}>
        <Box w="50%">
          <Flex flexDirection="column" justifyContent="center" px="10%" h="100%">
            <Box>
              <Text color="white" variant="mainSubTitle">education resources for</Text>
              <Text color="white" variant="mainTitle">
                children
              </Text>
            </Box>
            <Box pt="10px" pb="100px" px="5px">
              <Text color="white" variant="normal">Lorem ipsum dolor sit amet, duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </Box>
            <Flex>
              <Button
                size="banner"
                variant="red"
              >
                Join Us</Button>
              <Button
                variant="transparent"
                size="banner"
              >
                Donate
              </Button>
            </Flex>
          </Flex>
        </Box>
        <Box w="50%">
          <Box>
            <Image style={{ margin: 'auto' }} src="https://via.placeholder.com/904x860" alt="asd" />
          </Box>
        </Box>
      </Flex>
  )
};

export default MainSlider;
