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
        content='We wouldn’t exist without the amazing volunteers who give us their skills and time to ensure we continue to grow and produce educational materials and resources for people in underdeveloped countries.<br/><br/>If you have some time and skills that you think could help us, join us today!  Volunteering with us means you WILL make a difference to people’s lives around the world when it comes to accessing good quality education.'
        image="/images/static/home/volunteer.png"
        title="Become a Volunteer"
        imageWidth="723"
        imageHeight="657"
        cta="See More"
        ctaTarget="/about-us/volunteers"
      />
      <TwoSideCallToAction
        content='Educacion Diversa an International Registered Not for Profit.<br/><br/>We are a community of volunteers from around the world who give time and skills to create educational resources. Most of our resources are available free of charge, however we do create products to sell to raise money to support projects on the ground in underdeveloped countries.<br/><br/>Our long term goal is to raise enough money in the future to build small schools in rural areas too!'
        image="/images/static/home/donate.png"
        title="How to donate"
        imageWidth="723"
        imageHeight="482"
        reverse
        cta="See More"
        ctaTarget="/donate"
      />
      <HomeBlog featuredBlogs={featuredBlogs} />
    </>
  )
}


export async function getStaticProps() {

  const publishedProjects = projects.filter((project)=>project.published === true)

  const featuredProjects = publishedProjects.filter((project) => project.featured === true).sort((a, b) => parseFloat(a.order) - parseFloat(b.order)).slice(0, 8)
  const educationProjects = publishedProjects.filter((project) => project.category === 'EDUCATION').sort((a, b) => parseFloat(a.order) - parseFloat(b.order)).slice(0, 8)
  const empowermentProjects = publishedProjects.filter((project) => project.category === 'EMPOWERMENT').sort((a, b) => parseFloat(a.order) - parseFloat(b.order)).slice(0, 8)
  const activismProjects = publishedProjects.filter((project) => project.category === 'ACTIVISM').sort((a, b) => parseFloat(a.order) - parseFloat(b.order)).slice(0, 8)

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