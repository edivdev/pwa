import MainSlider from '../components/homepage/MainSlider'
import HomeProjects from '../components/homepage/HomeProjects'

import { projects } from '../components/data/initialState'
import EducationPortalSection from '../components/homepage/EducationPortal'
import CallsToActions from '../components/homepage/CallsToActions'
import HomeBlog from '../components/homepage/HomeBlog'

export default function homePage() {

  return (
    <>
      <MainSlider />
      <HomeProjects projects={projects} />
      <EducationPortalSection />
      <CallsToActions />
      <HomeBlog />
    </>
  )
}
