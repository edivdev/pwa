import { Box } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjectSlider({ settings, children, isMobile }) {
  return (
    <div
      style={{
        // backgroundColor: "coral",
        margin: "0 auto",
        padding: "2px",
        // minWidth: "160px",
        maxWidth: "150px",
      }}
    >
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}
