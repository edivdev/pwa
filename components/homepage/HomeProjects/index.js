import { useState, useEffect, useMemo } from 'react'

import { Box, Flex } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'

import Text from '../../ui/Text'
import Button from '../../ui/Button'
import Image from 'next/image'

import theme from '../../theme'
import ProjectTile from './ProjectTile'

const HomeProjects = ({ featuredProjects, educationProjects, empowermentProjects, activismProjects }) => {

  const [featProjects, setFeatProjects] = useState(featuredProjects)
  const [activeProjects, setActiveProjects] = useState('')
  const [filteredProjects, setFilteredProjects] = useState(null)

  const colorBlue = theme.colors.main.blue

  function filterByEducation() {
    if (activeProjects === 'education') {
      setFilteredProjects(null)
      setActiveProjects('')
    } else {
      setActiveProjects('education')
      setFilteredProjects(educationProjects)
    }
  }

  function filterByEmpowerment() {
    if (activeProjects === 'empowerment') {
      setFilteredProjects(null)
      setActiveProjects('')
    } else {
      setActiveProjects('empowerment')
      setFilteredProjects(empowermentProjects)
    }
  }

  function filterByActivism() {
    if (activeProjects === 'activism') {
      setFilteredProjects(null)
      setActiveProjects('')
    } else {
      setActiveProjects('activism')
      setFilteredProjects(activismProjects)
    }
  }

  return (
    <section>
      <Flex pt="50px" px="10%">
        <Box textAlign="center" >
          <Text as="h1" variant="h1">
            What do we do?
          </Text>
          <Text variant="normal">
            Educacion Diversa is an international not-for-profit run by a collective of volunteers from around the world, coming together to provide free art-based education in the areas of Human Rights, Elimination of Violence and Bullying (including GBV) and Sexual and Reproductive Health
          </Text>
        </Box>
      </Flex>

      <Box my="50px" textAlign="center" fontSize="12px">FILTER BY CATEGORY</Box>

      <Box px="10%">
        <Flex justifyContent="center">

          <Button variant={activeProjects === 'education' ? 'projectsButtonActive' : 'projectsButton'} onClick={filterByEducation}>
            <Flex w="100%" justifyContent="space-evenly" alignItems="center" h="100%">
              <Image src="/images/static/assets/icon_education_blue.png" alt="education" width="40" height="40" />
              <Text mt="10px" variant="projectsButton" color={colorBlue}>EDUCATION</Text>
            </Flex>
          </Button>

          <Button variant={activeProjects === 'activism' ? 'projectsButtonActive' : 'projectsButton'} onClick={filterByActivism}>
            <Flex w="100%" justifyContent="space-evenly" alignItems="center" h="100%">
              <Image src="/images/static/assets/icon_activism_blue.png" alt="education" width="40" height="40" />
              <Text mt="10px" variant="projectsButton" color={colorBlue}>ACTIVISM</Text>
            </Flex>
          </Button>

          <Button variant={activeProjects === 'empowerment' ? 'projectsButtonActive' : 'projectsButton'} onClick={filterByEmpowerment}>
            <Flex w="100%" justifyContent="space-evenly" alignItems="center" h="100%">
              <Image src="/images/static/assets/icon_empowerment_blue.png" alt="education" width="40" height="40" />
              <Text mt="10px" variant="projectsButton" color={colorBlue}>EMPOWERMENT</Text>
            </Flex>
          </Button>

        </Flex>
      </Box>

      <Box m="50px 10%" minHeight="700px">

        <Grid templateColumns='repeat(4, 1fr)' gap={6}>

          {filteredProjects && filteredProjects.map((project) =>
            <GridItem key={project.id}>
              <ProjectTile project={project} />
            </GridItem>)}
          {!filteredProjects && featProjects.map((project) =>
            <GridItem key={project.id}>
              <ProjectTile project={project} />
            </GridItem>)}

        </Grid>

        <Box w="65%" m="50px auto" textAlign="center">
          <Text fontWeight="900" fontSize="26px">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip learning portal</Text>
        </Box>
      </Box>
    </section>
  )
};

export default HomeProjects;
