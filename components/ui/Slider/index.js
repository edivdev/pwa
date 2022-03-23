import { Box } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageCarousel({ settings, children }) {
  return (
    <Box>
      <Slider {...settings}>{children}</Slider>
    </Box>
  );
}