import { Box, Flex } from '@chakra-ui/react'
import Link from 'next/link'

import Text from '../../ui/Text'
import Button from '../../ui/Button'
import Image from 'next/image'

const MainSlider = () => {

  return (
    <section>
      <Flex backgroundImage="/images/static/backgrounds/BLUE_BACKGROUND.jpg" backgroundSize="cover" w="100vw">
        <Box w="50vw" px="6%">
          <Flex flexDirection="column" justifyContent="center" h="100%">
            <Box>
              <Text color="white" variant="mainSubTitle">Become part of the </Text>
              <Text color="white" variant="mainTitle">
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
            <Flex>
              <Link href="/about-us/volunteers">
                <a>
                  <Button
                    size="banner"
                    variant="red"
                  >
                    VOLUNTEERS
                  </Button>
                </a>
              </Link>
              <Link href="/donate">
                <a>
                  <Button
                    variant="transparent"
                    size="banner"
                  >
                    DONATE
                  </Button>
                </a>
              </Link>
            </Flex>
          </Flex>
        </Box>
        <Box w="50vw">
          <Box>
            <Image src="/images/static/home/home-main.png" alt="connect-with-us" width={904} height={860} />
          </Box>
        </Box>
      </Flex>
    </section>
  )
};

export default MainSlider;
