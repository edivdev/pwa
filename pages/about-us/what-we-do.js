import PageChanger from "../../components/about-us/pageChanger";
import PagesHeader from "../../components/ui/PagesHeader";
import WhatWeDoPageContent from "../../components/about-us/whatWeDoPageContent";
import Head from "next/head";

export default function WhatWeDoPage() {
  return (
    <>
      <Head>
        <title>What We Do</title>
      </Head>
      <PagesHeader
        background="/images/static/backgrounds/BLUE_BACKGROUND.jpg"
        text0="educación diversa"
        text1="WHAT WE DO"
      />
      <PageChanger />
      <WhatWeDoPageContent />
    </>
  );
}
