import { Box, Flex } from '@chakra-ui/react'
import useTheme from '../hooks/useTheme'

import Text from '../components/Text'
import Button from '../components/Button'
import Image from '../components/Image'
import Input from '../components/Input'

import MainSlider from '../components/MainSlider'



import { projects } from '../components/data/initialState'
// to be replaced in a future with callings to custom api. for now we will be building the shell of front end
// so any data we will be using can be mocked inside the 'initial state file'

function Index() {
  const theme = useTheme()

  return (
    <>
      <MainSlider />
      
      <Flex>
        <Box textAlign="center">
          <Text as="h1" variant="h1">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          </Text>
          <Text variant="normal">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sin Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur dent, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Box>

      </Flex>

      <Box textAlign="center">FILTER BY CATEGORY</Box>

      <Box>
        <Flex justifyContent="space-evenly" w="65%" mx="auto">
          <Button>EDUCATION</Button>
          <Button>ACTIVISM</Button>
          <Button>EMPOWERMENT</Button>
          <Button>RESOURCES</Button>
        </Flex>
      </Box>

      <Box>
        <Flex justifyContent="space-evenly" w="65%" mx="auto">
          <Input type="text" placeholder="search" w="65%" />
          <Button>SEARCH</Button>
        </Flex>
      </Box>

      <Box>
        <Flex justifyContent="space-evenly" w="85%" mx="auto" flexWrap="wrap">
          {projects.map((project, index) =>
            <Box key={index} textAlign="center">
              <Box m="auto"><Image src={project.img} alt={project.title} /></Box>
              <p>{project.exceprt}</p>
            </Box>
          )}
        </Flex>

        <Box w="85%" mx="auto" textAlign="center">
          <Button>SEE MORE</Button>
        </Box>

      </Box>

      <Box>
        BLOG
      </Box>

      <Box>
        CALLS
      </Box>

      <Box>
        ED PORTAL
      </Box>

      <Box>
        INVITE TO SUBSCRIBE
      </Box>
    </>
  )
}

export default Index
