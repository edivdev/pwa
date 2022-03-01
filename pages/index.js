import axios from 'axios'
import { Box } from '@chakra-ui/react'

import MainSlider from '../components/MainSlider'
import HomeProjects from '../components/HomeProjects'

import { projects } from '../components/data/initialState'
import EducationPortalSection from '../components/homepage/EducationPortal'
import CallsToActions from '../components/homepage/CallsToActions'
// to be replaced in a future with callings to custom api. for now we will be building the shell of front end
// so any data we will be using can be mocked inside the 'initial state file'

export default function homePage() {

  return (
    <>
      <MainSlider />
      <HomeProjects projects={projects} />
      <EducationPortalSection />
      <CallsToActions />
    </>
  )
}
