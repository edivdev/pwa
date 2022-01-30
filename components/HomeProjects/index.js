import { Box, Flex } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'

import Text from '../../components/Text'
import Button from '../../components/Button'
import Image from '../../components/Image'
import Input from '../../components/Input'

import EdLink from '../Link'

const HomeProjects = ({ projects }) => {
  return (
    <>
      <Flex>
        <Box textAlign="center" >
          <Text as="h1" variant="h1">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          </Text>
          <Text variant="normal">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sin Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur dent, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Box>
      </Flex>

      <Box textAlign="center">FILTER BY CATEGORY</Box>

      <Box px="10%">
        <Flex justifyContent="space-evenly">
        <EdLink href="/projects" variant="sm"> 
        { 
          // an example of how to use the link component a mix of Link from next + Link from chakra 
        }
        <Button variant="red">
          EDUCATION
        </Button>
        </EdLink>
          <Button>ACTIVISM</Button>
          <Button>EMPOWERMENT</Button>
          <Button>RESOURCES</Button>
        </Flex>
      </Box>

      <Box px="10%">
        <Flex justifyContent="space-evenly">
          <Input type="text" placeholder="search" />
          <Button>SEARCH</Button>
        </Flex>
      </Box>

      <Box px="10%">
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
          {projects.map((project, index) =>
            <GridItem>
              <Box m="auto"><Image src={project.img} alt={project.title} /></Box>
              <p>{project.exceprt}</p>
            </GridItem>
          )}
        </Grid>

        <Box w="85%" mx="auto" textAlign="center">
          <Button>SEE MORE</Button>
        </Box>
      </Box>
    </>
  )
};

export default HomeProjects;
