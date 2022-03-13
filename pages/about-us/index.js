import PageChanger from "../../components/about-us/pageChanger";
import PagesHeader from "../../components/ui/PagesHeader";

export default function AboutUsPage() {
  return (
    <>
      <PagesHeader
        background="/images/static/backgrounds/BLUE_BACKGROUND.jpg"
        text0="educación diversa"
        text1="ABOUT US"
      />
      <PageChanger />
      <div>AboutUsPage</div>
    </>
  )
}
