import MainSlider from '../components/homepage/MainSlider'
import HomeProjects from '../components/homepage/HomeProjects'

import { projects, blogs } from '../components/data/initialState'
import EducationPortalSection from '../components/homepage/EducationPortal'
import TwoSideCallToAction from '../components/homepage/TwoSideCallToAction'
import HomeBlog from '../components/homepage/HomeBlog'

export default function homePage() {

  const featuredBlogs = blogs.filter((blog) => {
    return blog.featured <= 5 && blog.isFeatured === true
  })

  featuredBlogs.sort((a,b) => parseFloat(a.featured) - parseFloat(b.featured))
  
  return (
    <>
      <MainSlider />
      <HomeProjects projects={projects} />
      <EducationPortalSection />
      <TwoSideCallToAction 
        content='We wouldn’t exist without the amazing volunteers who give us their skills and time to ensure we continue to grow and produce educational materials and resources for people in underdeveloped countries. If you have some time and skills that you think could help us, join us today!  Volunteering with us means you WILL make a difference to people’s lives around the world when it comes to accessing good quality education.'
        image="https://via.placeholder.com/960x742"
        title="Be a Volunteer"
        cta="See More"
        ctaTarget="#"
      />
      <TwoSideCallToAction 
        content='Educacion Diversa is a run by a collective of volunteers from around the world who kindly give their time and skills to contribute to creating educational resources that are used to incentivise donations from people with the money raised going to projects in underdeveloped countries around the world that focus on educating people in our areas of focus.  We hope to raise enough money in the future to build small schools in rural areas too!.'
        image="https://via.placeholder.com/960x742"
        title="How to donate"
        reverse
        cta="See More"
        ctaTarget="/donate"
      />
      <HomeBlog featuredBlogs={featuredBlogs} />
    </>
  )
}
