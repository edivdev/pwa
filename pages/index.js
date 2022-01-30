import { Box } from '@chakra-ui/react'

import MainSlider from '../components/MainSlider'
import HomeProjects from '../components/HomeProjects'

import { projects } from '../components/data/initialState'
// to be replaced in a future with callings to custom api. for now we will be building the shell of front end
// so any data we will be using can be mocked inside the 'initial state file'

function Index() {
  return (
    <>
      <MainSlider />
      <HomeProjects projects={projects} />

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
