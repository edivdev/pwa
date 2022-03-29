
import PageChanger from "../../components/about-us/page-changer"
import PagesHeader from "../../components/ui/PagesHeader"
import { volunteers, members } from "../../components/data/initialState"
import TwoSideCallToAction from "../../components/homepage/TwoSideCallToAction"

export default function AboutUsPage(props) {
  const { volunteers, members } = props
  return (
    <>
      <PagesHeader
        background="/images/static/backgrounds/BLUE_BACKGROUND.jpg"
        text0="educación diversa"
        text1="ABOUT US"
      />
      <PageChanger />
      <TwoSideCallToAction
        content='We wouldn’t exist without the amazing volunteers who give us their skills and time to ensure we continue to grow and produce educational materials and resources for people in underdeveloped countries. If you have some time and skills that you think could help us, join us today!  Volunteering with us means you WILL make a difference to people’s lives around the world when it comes to accessing good quality education.'
        image="/images/static/home/volunteer.png"
        title="Our Mission"
        imageWidth="761"
        imageHeight="692"
      />
      <TwoSideCallToAction
        content='Educacion Diversa is a run by a collective of volunteers from around the world who kindly give their time and skills to contribute to creating educational resources that are used to incentivise donations from people with the money raised going to projects in underdeveloped countries around the world that focus on educating people in our areas of focus.  We hope to raise enough money in the future to build small schools in rural areas too!.'
        image="/images/static/home/donate.png"
        title="Our Vision"
        imageWidth="723"
        imageHeight="704"
        reverse
      />
    </>
  )
}

export async function getStaticProps() {

  return {
    props: {
      volunteers: volunteers,
      members: members
    }
  }
}
