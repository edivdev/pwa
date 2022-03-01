import { Box, Flex } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'

import Text from '../../components/Text'
import Button from '../../components/Button'
import Image from 'next/image'
import Input from '../../components/Input'

import EdLink from '../Link'

const HomeProjects = ({ projects }) => {
  return (
    <>
      <Flex px="10%">
        <Box textAlign="center" >
          <Text as="h1" variant="h1">
            What do we do?
          </Text>
          <Text variant="normal">
            Educacion Diversa is an international not-for-profit run by a collective of volunteers from around the world, coming together to provide free art-based education in the areas of Human Rights, Elimination of Violence and Bullying (including GBV) and Sexual and Reproductive Health
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
              <Box m="auto"><Image src={project.img} alt={project.title} width={355} height={420} /></Box>
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
