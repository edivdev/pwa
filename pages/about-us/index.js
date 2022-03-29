import AboutUsPageContent from "../../components/about-us/aboutUsPageContent"
import PageChanger from "../../components/about-us/pageChanger"
import PagesHeader from "../../components/ui/PagesHeader"
import { volunteers, members } from "../../components/data/initialState"

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
      <AboutUsPageContent volunteers={volunteers} members={members} />
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
