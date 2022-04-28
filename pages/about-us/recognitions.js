import PageChanger from "../../components/about-us/pageChanger"
import RecognitionsContent from "../../components/about-us/recognitionsContent"
import PagesHeader from "../../components/ui/PagesHeader"

export default function RecognitionsPage() {
  return (
    <>
      <PagesHeader
        background="/images/static/backgrounds/BLUE_BACKGROUND.jpg"
        text0="educación diversa"
        text1="RECOGNITIONS & COLLABORATIONS"
      />
      <PageChanger />
      <RecognitionsContent />
    </>
  )
}
