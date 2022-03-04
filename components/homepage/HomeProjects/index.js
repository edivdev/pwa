import { Box, Flex } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'

import Text from '../../ui/Text'
import Button from '../../ui/Button'
import Image from 'next/image'

import Link from 'next/link'

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


          <Button size="filter">
            EDUCATION
          </Button>


          <Button size="filter">
            ACTIVISM
          </Button>
          <Button size="filter">
            EMPOWERMENT
          </Button>
        </Flex>
      </Box>

      <Box px="10%">
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
          {projects.map((project, index) =>
            <GridItem key={project.slug}>
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
