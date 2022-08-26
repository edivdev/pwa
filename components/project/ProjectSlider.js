import { Box } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjectSlider({ settings, children, isMobile }) {
  return (
    <div
      style={{
        // backgroundColor: "coral",
        padding: "0.5em ",
        width: "auto",
        maxWidth: "210px",
        marginLeft: isMobile ? "60px" : "0",
      }}
    >
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}
