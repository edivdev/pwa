
import PageChanger from "../../components/about-us/pageChanger"
import PagesHeader from "../../components/ui/PagesHeader"
import TwoSideCallToAction from "../../components/homepage/TwoSideCallToAction"

export default function AboutUsPage() {
  return (
    <>
      <PagesHeader
        background="/images/static/backgrounds/BLUE_BACKGROUND.jpg"
        text0="educación diversa"
        text1="ABOUT US"
      />
      <PageChanger />
      <TwoSideCallToAction
        content='Give children and adolescents in underdeveloped communities at-based inclusive education about diverse topics to ensure they have the best chance to access opportunities to break their  cycle of poverty.'
        image="/images/static/home/volunteer.png"
        title="Our Mission"
        imageWidth="761"
        imageHeight="692"
      />
      <TwoSideCallToAction
        content='Connect people and provide opportunities for skilled volunteers to contribute to the equality of education for people in underdeveloped countries and build a future in which people are all given access to free inclusive fun education.'
        image="/images/static/home/donate.png"
        title="Our Vision"
        imageWidth="723"
        imageHeight="704"
        reverse
      />
    </>
  )
}
