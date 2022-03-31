import { useState } from 'react'
import { projects } from '../../components/data/initialState';
import { Grid, GridItem, Box, Flex } from '@chakra-ui/react';
import ProjectTile from '../../components/homepage/HomeProjects/ProjectTile';
import PagesHeader from '../../components/ui/PagesHeader';
import useTheme from '../../hooks/useTheme'
import Button from '../../components/ui/Button'
import Image from 'next/image'
import Text from '../../components/ui/Text'

const Projects = (props) => {

  const { educationProjects, empowermentProjects, activismProjects } = props

  const theme = useTheme()

  const [projects, setProjects] = useState(props.projects)
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
    <>
      <PagesHeader
        background="/images/static/backgrounds/BLUE_BACKGROUND.jpg"
        text0="educación diversa"
        text1="PROJECTS"
      />

      <Box p="5% 10% 2%">
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

      <Box m="50px 10%">
        <Grid templateColumns='repeat(4, 1fr)' gap={6} minHeight="782px">

          {filteredProjects && filteredProjects.map((project) =>
            <GridItem key={project.id}>
              <ProjectTile project={project} />
            </GridItem>)}
          {!filteredProjects && projects.map((project) =>
            <GridItem key={project.id}>
              <ProjectTile project={project} />
            </GridItem>)}

        </Grid>
      </Box>
    </>

  )
};

export default Projects;

export async function getStaticProps() {

  const educationProjects = projects.filter((project) => project.category === 'EDUCATION').sort((a, b) => parseFloat(a.order) - parseFloat(b.order))
  const empowermentProjects = projects.filter((project) => project.category === 'EMPOWERMENT').sort((a, b) => parseFloat(a.order) - parseFloat(b.order))
  const activismProjects = projects.filter((project) => project.category === 'ACTIVISM').sort((a, b) => parseFloat(a.order) - parseFloat(b.order))

  return {
    props: {
      projects: projects,
      educationProjects: educationProjects,
      empowermentProjects: empowermentProjects,
      activismProjects: activismProjects
    }
  }
}