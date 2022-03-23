import { useState, useEffect } from 'react'

import { Box, Flex } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'

import Text from '../../ui/Text'
import Button from '../../ui/Button'
import Image from 'next/image'

import Link from 'next/link'

import useViewport from '../../../hooks/useViewport'

import theme from '../../theme'

const HomeProjects = ({ projects }) => {
  const { isDesktop } = useViewport()
  const [showingProjects, setShowingProjects] = useState([])
  const [educationProjects, setEducationProjects] = useState([])
  const [activismProjects, setActivismProjects] = useState([])
  const [empowermentProjects, setEmpowermentProjects] = useState([])
  const [activeEducation, setActiveEducation] = useState(false)
  const [activeEmpowerment, setActiveEmpowerment] = useState(false)
  const [activeActivism, setActiveActivism] = useState(false)

  useEffect(() => {
    let featuredProjects = []
    let edPRojects = projects.filter((project) => project.category === 'EDUCATION')
    let emProjects = projects.filter((project) => project.category === 'EMPOWERMENT')
    let acProjects = projects.filter((project) => project.category === 'ACTIVISM')

    projects.map((project) => {
      if (project.featured) {
        featuredProjects.push(project)
      }
    })

    featuredProjects = featuredProjects.sort((a, b) => parseFloat(a.order) - parseFloat(b.order))

    if (featuredProjects.length > 8) {
      featuredProjects = featuredProjects.slice(0, 8)
    }

    setShowingProjects(featuredProjects)
    setEducationProjects(edPRojects)
    setEmpowermentProjects(emProjects)
    setActivismProjects(acProjects)
  }, [])

  function filterByEducation() {
    if (activeEducation) {
      setActiveEducation(false)
    } else {
      setActiveEducation(true)
      setShowingProjects(educationProjects)
    }
  }

  function filterByEmpowerment() {
    console.log(empowermentProjects)
  }

  function filterByActivism() {
    console.log(activismProjects)
  }

  return (
    isDesktop &&
    <section>
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
        <Flex justifyContent="center">

          <Button variant={activeEducation ? 'projectsButtonActive' : 'projectsButton'} onClick={filterByEducation}>
            <Flex w="100%" justifyContent="space-evenly" alignItems="center" h="100%">
              <Image src="/images/static/assets/icon_education_blue.png" alt="education" width="40" height="40" />
              <Text mt="10px" variant="projectsButton" color={theme.colors.main.blue}>EDUCATION</Text>
            </Flex>
          </Button>


          <Button variant="projectsButton" onClick={filterByActivism}>
            <Flex w="100%" justifyContent="space-evenly" alignItems="center" h="100%">
              <Image src="/images/static/assets/icon_activism_blue.png" alt="education" width="40" height="40" />
              <Text mt="10px" variant="projectsButton" color={theme.colors.main.blue}>ACTIVISM</Text>
            </Flex>
          </Button>

          <Button variant="projectsButton" onClick={filterByEmpowerment}>
            <Flex w="100%" justifyContent="space-evenly" alignItems="center" h="100%">
              <Image src="/images/static/assets/icon_empowerment_blue.png" alt="education" width="40" height="40" />
              <Text mt="10px" variant="projectsButton" color={theme.colors.main.blue}>EMPOWERMENT</Text>
            </Flex>
          </Button>
        </Flex>
      </Box>

      <Box px="10%">
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
          {showingProjects.map((project) =>
            <GridItem key={project.id}>
              <Box m="auto"><Image src={project.img} alt={project.title} width={355} height={420} /></Box>
              <p>{project.excerpt}</p>
            </GridItem>
          )}
        </Grid>

        <Box w="85%" mx="auto" textAlign="center">
          <Button>SEE MORE</Button>
        </Box>
      </Box>
    </section>
  )
};

export default HomeProjects;
