import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import Text from '../../ui/Text'
import Button from '../../ui/Button'
import Image from 'next/image'

import useTheme from '../../../hooks/useTheme'

const MainSlider = () => {

  const theme = useTheme()
  
  return (
    <Flex backgroundImage="/images/static/backgrounds/BLUE_BACKGROUND.jpg" backgroundSize="cover">
        <Box w="50%">
          <Flex flexDirection="column" justifyContent="center" px="10%" h="100%">
            <Box>
              <Text color="white" variant="mainSubTitle">Become part of the </Text>
              <Text color="white" variant="mainTitle">
                Collective!
              </Text>
            </Box>
            <Box pt="10px" pb="100px" px="5px">
              <Text color="white" variant="normal">Connect with a team of like-minded individuals from around the world, working together to create accessible educational materials in the areas of Human Rights, Eliminating Violence and Bullying and Sexual and Reproductive Health.</Text>
            </Box>
            <Flex>
              <Button
                size="banner"
                variant="red"
              >
                PROJECTS</Button>
              <Button
                variant="transparent"
                size="banner"
              >
                DONATE
              </Button>
            </Flex>
          </Flex>
        </Box>
        <Box w="50%">
          <Box>
            <Image style={{ margin: 'auto' }} src="/images/static/home/home-main.png" alt="connect-with-us" width={904} height={860} />
          </Box>
        </Box>
      </Flex>
  )
};

export default MainSlider;
