import PagesHeader from "../../components/ui/PagesHeader";
import PageChanger from "../../components/about-us/pageChanger";
import { volunteers, members } from "../../components/data/initialState";
import VolunteersPageContent from "../../components/about-us/volunteersPageContent";
import Head from "next/head";

export default function VolunteersPage(props) {
  const { volunteers, members } = props;
  return (
    <>
      <Head>
        <title>Volunteers</title>
      </Head>
      <PagesHeader
        background="/images/static/backgrounds/BLUE_BACKGROUND.jpg"
        text0="educación diversa"
        text1="VOLUNTEERS"
      />
      <PageChanger />
      <VolunteersPageContent volunteers={volunteers} members={members} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      volunteers: volunteers,
      members: members,
    },
  };
}
