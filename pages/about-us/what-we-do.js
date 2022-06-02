import PageChanger from "../../components/about-us/pageChanger";
import PagesHeader from "../../components/ui/PagesHeader";
import WhatWeDoPageContent from "../../components/about-us/whatWeDoPageContent";
import { goals } from "../../components/data/initialState"

export default function WhatWeDoPage(props) {

  return (
    <>
      <PagesHeader
        background="/images/static/backgrounds/BLUE_BACKGROUND.jpg"
        text0="educación diversa"
        text1="WHAT WE DO"
      />
      <PageChanger />
      <WhatWeDoPageContent goals={props.goals} />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      goals: goals
    }
  }
}
