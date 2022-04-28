import MainSlider from '../components/homepage/MainSlider'

import HomeProjects from '../components/homepage/HomeProjects'

import { projects, blogs } from '../components/data/initialState'
import EducationPortalSection from '../components/homepage/EducationPortal'
import TwoSideCallToAction from '../components/homepage/TwoSideCallToAction'
import HomeBlog from '../components/homepage/HomeBlog'

export default function homePage(props) {

  const { featuredProjects, educationProjects, empowermentProjects, activismProjects, featuredBlogs } = props

  return (
    <>
      <MainSlider />
      <HomeProjects featuredProjects={featuredProjects} educationProjects={educationProjects} empowermentProjects={empowermentProjects} activismProjects={activismProjects} />
      <EducationPortalSection />
      <TwoSideCallToAction
        content='We wouldn’t exist without the amazing volunteers who give us their skills and time to ensure we continue to grow and produce educational materials and resources for people in underdeveloped countries. If you have some time and skills that you think could help us, join us today!  Volunteering with us means you WILL make a difference to people’s lives around the world when it comes to accessing good quality education.'
        image="/images/static/home/volunteer.png"
        title="Become a Volunteer"
        imageWidth="761"
        imageHeight="692"
        cta="See More"
        ctaTarget="/about-us/volunteers"
      />
      <TwoSideCallToAction
        content='Educacion Diversa is a run by a collective of volunteers from around the world who kindly give their time and skills to contribute to creating educational resources that are used to incentivise donations from people with the money raised going to projects in underdeveloped countries around the world that focus on educating people in our areas of focus.<br/><br/>We hope to raise enough money in the future to build small schools in rural areas too!.'
        image="/images/static/home/donate.png"
        title="How to donate"
        imageWidth="723"
        imageHeight="704"
        reverse
        cta="See More"
        ctaTarget="/donate"
      />
      <HomeBlog featuredBlogs={featuredBlogs} />
    </>
  )
}


export async function getStaticProps() {

  const featuredProjects = projects.filter((project) => project.featured === true).sort((a, b) => parseFloat(a.order) - parseFloat(b.order)).slice(0, 8)
  const educationProjects = projects.filter((project) => project.category === 'EDUCATION').sort((a, b) => parseFloat(a.order) - parseFloat(b.order)).slice(0, 8)
  const empowermentProjects = projects.filter((project) => project.category === 'EMPOWERMENT').sort((a, b) => parseFloat(a.order) - parseFloat(b.order)).slice(0, 8)
  const activismProjects = projects.filter((project) => project.category === 'ACTIVISM').sort((a, b) => parseFloat(a.order) - parseFloat(b.order)).slice(0, 8)

  const featuredBlogs = blogs.filter((blog) => blog.featured <= 5 && blog.isFeatured === true).sort((a, b) => parseFloat(a.featured) - parseFloat(b.featured))

  return {
    props: {
      featuredProjects: featuredProjects,
      educationProjects: educationProjects,
      empowermentProjects: empowermentProjects,
      activismProjects: activismProjects,
      featuredBlogs: featuredBlogs
    }
  }
}