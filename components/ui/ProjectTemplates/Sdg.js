import Image from "next/image";
import { Box } from "@chakra-ui/react";

export default function Sdg({ sdg, isMobile }) {
  return (
    <Box
      w={isMobile ? "30px" : "92px"}
      h={isMobile ? "30px" : "92px"}
      m="5px"
      position="relative"
    >
      <Image
        style={{ borderRadius: "12px" }}
        src={sdg.attributes.picture.data.attributes.url}
        alt=""
        objectFit="contain"
        layout="fill"
      />
    </Box>
  );
}
