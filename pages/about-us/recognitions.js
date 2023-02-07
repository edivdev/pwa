import PageChanger from "../../components/about-us/pageChanger";
import RecognitionsContent from "../../components/about-us/recognitionsContent";
import PagesHeader from "../../components/ui/PagesHeader";
import Head from "next/head";

export default function RecognitionsPage() {
  return (
    <>
      <Head>
        <title>Recognitions</title>
      </Head>
      <PagesHeader
        background="/images/static/backgrounds/BLUE_BACKGROUND.jpg"
        text0="educación diversa"
        text1="RECOGNITIONS & COLLABORATIONS"
      />
      <PageChanger />
      <RecognitionsContent />
    </>
  );
}
