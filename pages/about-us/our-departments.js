import { useState, useEffect } from "react";
import PageChanger from "../../components/about-us/pageChanger";
import PagesHeader from "../../components/ui/PagesHeader";
// import { departments } from "../../components/data/initialState";
import useViewport from "../../hooks/useViewport";
import Departments from "../../components/about-us/Departments";

import { getDepartments } from "../../lib/cmsClient";

export default function ColaborationsPage(props) {
  const { departments } = props;
  const viewport = useViewport();
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    setIsMobile(viewport[0]);
  }, [isMobile, viewport]);

  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 4,
    lazyLoad: true,
  };

  const mobileSettings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    lazyLoad: true,
  };

  return (
    <>
      <PagesHeader
        background="/images/static/backgrounds/BLUE_BACKGROUND.jpg"
        text0="educación diversa"
        text1="OUR DEPARTMENTS"
      />
      <PageChanger />
      <Departments isMobile={isMobile} departments={departments} />
    </>
  );
}

export async function getStaticProps() {
  const departments = await getDepartments();

  return {
    props: {
      departments: departments.data,
    },
  };
}
