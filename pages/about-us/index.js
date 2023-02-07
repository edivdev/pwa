import { useState, useEffect } from "react";
import PageChanger from "../../components/about-us/pageChanger";
import PagesHeader from "../../components/ui/PagesHeader";
import TwoSideCallToAction from "../../components/homepage/TwoSideCallToAction";
import { goals, members } from "../../components/data/initialState";
import Goal from "../../components/about-us/Goal";
import Goals from "../../components/about-us/Goals";
import BoardMembers from "../../components/about-us/boardMembers";
import Popup from "../../components/ui/Popup";
import useViewport from "../../hooks/useViewport";
import { changesForClosePopUp } from "../../helpers/domManipulations";
import Head from "next/head";

export default function AboutUsPage(props) {
  const viewport = useViewport();
  const [isMobile, setIsMobile] = useState(null);

  const { goals, members } = props;

  useEffect(() => {
    setIsMobile(viewport[0]);
  }, [isMobile, viewport]);

  const [isPopupShowing, setIsPopupShowing] = useState(false);
  const [popupInfo, setPopupInfo] = useState({
    picture: "/",
    name: "",
    country: "",
    bio: "",
    position: "",
  });

  function closePopUp() {
    setIsPopupShowing(false);
    changesForClosePopUp();
  }

  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <PagesHeader
        background="/images/static/backgrounds/BLUE_BACKGROUND.jpg"
        text0="educación diversa"
        text1="ABOUT US"
      />
      <PageChanger />
      <TwoSideCallToAction
        content="Give children and adolescents in underdeveloped communities art-based inclusive education about diverse topics to ensure they have the best chance to access opportunities to break their  cycle of poverty."
        image="/images/static/about/mission.png"
        title="Our Mission"
        imageWidth="761"
        imageHeight="507"
      />
      <TwoSideCallToAction
        content="Empowering people through art based education in diverse topics"
        image="/images/static/about/vision.png"
        title="Our Vision"
        imageWidth="761"
        imageHeight="507"
        reverse
      />
      <Goals goals={goals} isMobile={isMobile} />
      <BoardMembers
        isMobile={isMobile}
        members={members}
        setPopupInfo={setPopupInfo}
        setIsPopupShowing={setIsPopupShowing}
      />
      <Popup
        isPopupShowing={isPopupShowing}
        closePopUp={closePopUp}
        popupInfo={popupInfo}
        isMobile={isMobile}
      />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      goals: goals,
      members: members,
    },
  };
}
