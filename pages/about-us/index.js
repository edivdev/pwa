import { useState, useEffect } from "react";
import PageChanger from "../../components/about-us/pageChanger";
import PagesHeader from "../../components/ui/PagesHeader";
import TwoSideCallToAction from "../../components/homepage/TwoSideCallToAction";
import { goals } from "../../components/data/initialState";
import Goal from "../../components/about-us/Goal";
import Goals from "../../components/about-us/Goals";
import BoardMembers from "../../components/about-us/boardMembers";
import Popup from "../../components/ui/Popup";
import useViewport from "../../hooks/useViewport";
import { changesForClosePopUp } from "../../helpers/domManipulations";
import Head from "next/head";
import { getAboutUsPageData, getMembers } from "../../lib/cmsClient";

export default function AboutUsPage(props) {
  const viewport = useViewport();
  const [isMobile, setIsMobile] = useState(null);

  const { members } = props;

  console.log(props, props.pageData.goals);

  const { Mission, Vision } = props.pageData;

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
        content={Mission}
        image={JSON.parse(props.missionPicture)}
        title="Our Mission"
        imageWidth="761"
        imageHeight="507"
      />
      <TwoSideCallToAction
        content={Vision}
        image={JSON.parse(props.visionPicture)}
        title="Our Vision"
        imageWidth="761"
        imageHeight="507"
        reverse
      />
      <Goals
        picture={props.goalsPicture}
        goals={props.pageData.goals.data}
        isMobile={isMobile}
      />
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
  // go and fetch from api

  const pageData = await getAboutUsPageData();
  const members = await getMembers();
  const sortedMembers = members.data.sort((a, b) => a.id - b.id);

  const missionPicture = JSON.stringify(
    pageData.data.attributes.misionPicture.data.attributes.url
  );
  const visionPicture = JSON.stringify(
    pageData.data.attributes.visionPicture.data.attributes.url
  );

  const goalsPicture = JSON.stringify(
    pageData.data.attributes.goalsPicture.data.attributes.url
  );

  console.log(pageData.data.attributes);

  return {
    props: {
      members: sortedMembers,
      // customData: customData,
      missionPicture,
      visionPicture,
      goalsPicture,
      pageData: pageData.data.attributes,
    },
  };
}
