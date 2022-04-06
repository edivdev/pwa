import { Box, Flex } from '@chakra-ui/react'
import Link from 'next/link'

import Text from '../../ui/Text'
import Button from '../../ui/Button'
import Image from 'next/image'

import { useEffect, useState } from 'react'
import useViewport from '../../../hooks/useViewport'

const MainSlider = () => {

  const viewport = useViewport()
  const [isMobile, setIsMobile] = useState(null)

  useEffect(() => {
    setIsMobile(viewport[0])
  }, [isMobile])

  return (
    <Flex py={isMobile ? '5%' : 'none'} w="100vw" flexDirection={isMobile ? 'column' : 'row'}>
      <Box zIndex="0" w="100vw" h="50vw" position="absolute">
        <Image src="/images/static/backgrounds/BLUE_BACKGROUND.jpg" layout="fill" objectFit="contain" />
      </Box>
      <Box zIndex="1" w={isMobile ? "100vw" : "50vw"} px="6%">
        <Flex flexDirection="column" justifyContent="center" h="100%">
          <Box>
            <Text color="white" variant="mainSubTitle"> Become part of the </Text>
            <Text color="white" variant={isMobile ? "mainTitleMobile" : "mainTitle"}>
              Collective!
            </Text>
          </Box>
          <Box>
            <Text
              color="white"
              variant="normal"
              my="20px"
            >
              Connect with a team of like-minded individuals from around the world, working together to create accessible educational materials in the areas of Human Rights, Eliminating Violence and Bullying and Sexual and Reproductive Health.
            </Text>
          </Box>
          <Flex flexDirection={isMobile ? 'column' : 'row'}>

            <Link href="/about-us/volunteers">
              <a>
                <Box maxWidth="200px" mt="10px">
                  <Button
                    variant="red"
                    mr={isMobile ? '' : '20px'}
                  >
                    VOLUNTEERS
                  </Button>
                </Box>
              </a>
            </Link>

            <Link href="/donate">
              <a>
                <Box maxWidth="200px" mt="10px">
                  <Button
                    variant="transparent"
                  >
                    DONATE
                  </Button>
                </Box>
              </a>
            </Link>

          </Flex>
        </Flex>
      </Box>
      <Box w={isMobile ? "100vw" : "50vw"}>
        <Box>
          <Image src="/images/static/home/home-main.png" alt="connect-with-us" width={904} height={860} />
        </Box>
      </Box>
    </Flex>
  )
};

export default MainSlider;
