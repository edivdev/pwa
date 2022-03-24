import { useState, useEffect } from 'react'

import { Box, Flex } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'

import Text from '../../ui/Text'
import Button from '../../ui/Button'
import Image from 'next/image'

import Link from 'next/link'

import useViewport from '../../../hooks/useViewport'

import theme from '../../theme'
import ProjectTile from './ProjectTile'

const HomeProjects = ({ featuredProjects, educationProjects, empowermentProjects, activismProjects }) => {

  const [showingProjects, setShowingProjects] = useState(featuredProjects)
  const [activeEducation, setActiveEducation] = useState(false)
  const [activeEmpowerment, setActiveEmpowerment] = useState(false)
  const [activeActivism, setActiveActivism] = useState(false)

  const { isDesktop } = useViewport()

  function filterByEducation() {
    if (activeEducation) {
      setActiveEducation(false)
      setShowingProjects(featuredProjects)
    } else {
      setActiveEducation(true)
      setActiveEmpowerment(false)
      setActiveActivism(false)
      setShowingProjects(educationProjects)
    }
  }

  function filterByEmpowerment() {
    if (activeEmpowerment) {
      setActiveEmpowerment(false)
      setShowingProjects(featuredProjects)
    } else {
      setActiveEducation(false)
      setActiveActivism(false)
      setActiveEmpowerment(true)
      setShowingProjects(empowermentProjects)
    }
  }

  function filterByActivism() {
    if (activeActivism) {
      setActiveActivism(false)
      setShowingProjects(featuredProjects)
    } else {
      setActiveEducation(false)
      setActiveEmpowerment(false)
      setActiveActivism(true)
      setShowingProjects(activismProjects)

    }
  }

  return (
    isDesktop &&
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

          <Button variant={activeEducation ? 'projectsButtonActive' : 'projectsButton'} onClick={filterByEducation}>
            <Flex w="100%" justifyContent="space-evenly" alignItems="center" h="100%">
              <Image src="/images/static/assets/icon_education_blue.png" alt="education" width="40" height="40" />
              <Text mt="10px" variant="projectsButton" color={theme.colors.main.blue}>EDUCATION</Text>
            </Flex>
          </Button>


          <Button variant={activeActivism ? 'projectsButtonActive' : 'projectsButton'} onClick={filterByActivism}>
            <Flex w="100%" justifyContent="space-evenly" alignItems="center" h="100%">
              <Image src="/images/static/assets/icon_activism_blue.png" alt="education" width="40" height="40" />
              <Text mt="10px" variant="projectsButton" color={theme.colors.main.blue}>ACTIVISM</Text>
            </Flex>
          </Button>

          <Button variant={activeEmpowerment ? 'projectsButtonActive' : 'projectsButton'} onClick={filterByEmpowerment}>
            <Flex w="100%" justifyContent="space-evenly" alignItems="center" h="100%">
              <Image src="/images/static/assets/icon_empowerment_blue.png" alt="education" width="40" height="40" />
              <Text mt="10px" variant="projectsButton" color={theme.colors.main.blue}>EMPOWERMENT</Text>
            </Flex>
          </Button>
        </Flex>
      </Box>

      <Box m="50px 10%" minHeight="700px">
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
          {showingProjects.map((project) =>
            <GridItem key={project.id}>
              <ProjectTile project={project} />
            </GridItem>
          )}
        </Grid>

        <Box w="65%" m="50px auto" textAlign="center">
          <Text fontWeight="900" fontSize="26px">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip learning portal</Text>
        </Box>
      </Box>
    </section>
  )
};

export default HomeProjects;
