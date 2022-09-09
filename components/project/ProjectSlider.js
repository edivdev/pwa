import { Box } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjectSlider({ settings, children, isMobile }) {
  return (
    <div
      style={{
        // backgroundColor: "coral",
        height: "100px",
        padding: "2px",
        maxWidth: "230px",
      }}
    >
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}
