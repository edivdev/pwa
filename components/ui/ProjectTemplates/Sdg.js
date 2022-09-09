import Image from "next/image";
import { Box } from "@chakra-ui/react";

export default function Sdg({ sdg, isMobile }) {
  return (
    <Box
      w={isMobile ? "30px" : "42px"}
      h={isMobile ? "30px" : "42px"}
      m="0.5px"
      position="relative"
    >
      <Image
        src={sdg.attributes.picture.data.attributes.url}
        alt=""
        objectFit="contain"
        layout="fill"
      />
    </Box>
  );
}
