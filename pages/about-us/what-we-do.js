import PageChanger from "../../components/about-us/page-changer";
import PagesHeader from "../../components/ui/PagesHeader";
import WhatWeDoPageContent from "../../components/about-us/what-we-do-page-content";

export default function WhatWeDoPage() {
  return (
    <>
      <PagesHeader
        background="/images/static/backgrounds/BLUE_BACKGROUND.jpg"
        text0="educación diversa"
        text1="WHAT WE DO"
      />
      <PageChanger />
      <WhatWeDoPageContent />
    </>
  )
}
