import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import Text from '../Text'
import Button from '../Button'
import Image from '../Image'

import useTheme from '../../hooks/useTheme'

const MainSlider = () => {

  const theme = useTheme()
  
  return (
    <Flex>
        <Box w="50%" backgroundColor={theme.colors.main.blue}>
          <Flex flexDirection="column" justifyContent="center" px="10%" h="100%">
            <Box>
              <Text color="white" variant="mainSubTitle">education resources for</Text>
              <Text color="white" variant="mainTitle">
                children
              </Text>
            </Box>
            <Box maxWidth="724px" pt="10px" pb="100px" pl="10px" pr="10px">
              <Text color="white" variant="normal">Lorem ipsum dolor sit amet, duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </Box>
            <Flex justifyContent="space-evenly">
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
        <Box w="50%" textAlign="center">
          <Image style={{ margin: 'auto' }} src="https://via.placeholder.com/904x860" alt="asd" />
        </Box>
      </Flex>
  )
};

export default MainSlider;
