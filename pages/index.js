import Text from '../components/Text'
import Button from '../components/Button'
import useTheme from '../hooks/useTheme'
import { Box, Flex } from '@chakra-ui/react'

import { projects } from '../components/data/initialState'
// to be replaced in a future with callings to custom api. for now we will be building the shell of front end
// so any data we will be using can be mocked inside the 'initial state file'

function index() {
  const theme = useTheme()

  return (
    <>
      <Flex>
        <Box w="50%">
          <Flex flexDirection="column" justifyContent="center" px="10%" h="100%">
            <Box>
              <Text variant="mainSubTitle">education resources for</Text>
              <Text variant="mainTitle">
                children
              </Text>
            </Box>
            <Box maxWidth="724px">
              <Text variant="normal">Lorem ipsum dolor sit amet, duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </Box>
            <Flex justifyContent="space-evenly">
              <Button
                w="226px"
                h="80px"
                variant="red"
              >
                Join Us</Button>
              <Button>Donate</Button>
            </Flex>
          </Flex>
        </Box>
        <Box w="50%" textAlign="center">
          <img style={{ margin:'auto' }} src="https://via.placeholder.com/904x860" />
        </Box>
      </Flex>

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

      <Box> Projects </Box>

      <Flex justifyContent="space-evenly" flexWrap="wrap">
        {projects.map((project, index) =>
          <Box key={index} textAlign="center">
            <Box m="auto"><img src={project.img} /></Box>
            <p>{project.exceprt}</p>
          </Box>
        )}
      </Flex>
    </>
  )
}

export default index
