import PageChanger from "../../components/about-us/pageChanger";
import PagesHeader from "../../components/ui/PagesHeader";

export default function WhatWeDoPage() {
  return (
    <>
      <PagesHeader
        background="/images/static/backgrounds/BLUE_BACKGROUND.jpg"
        text0="educación diversa"
        text1="WHAT WE DO"
      />
      <PageChanger />
      <div>whatWeDoPage</div>
    </>
  )
}
