import PagesHeader from "../../components/ui/PagesHeader"
import PageChanger from "../../components/about-us/page-changer"
import { volunteers, members } from "../../components/data/initialState"
import VolunteersPageContent from "../../components/about-us/volunteers-page-content"

export default function VolunteersPage(props) {
  const { volunteers, members } = props
  return (
    <>
      <PagesHeader
        background="/images/static/backgrounds/BLUE_BACKGROUND.jpg"
        text0="educación diversa"
        text1="VOLUNTEERS"
      />
      <PageChanger />
      <VolunteersPageContent volunteers={volunteers} members={members} />
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