import Image from "next/image";
import { Box } from "@chakra-ui/react";

export default function Sdg({ sdg, isMobile }) {
  // console.log(sdg);
  return (
    <Box
      w={isMobile ? "40px" : "92px"}
      h={isMobile ? "40px" : "92px"}
      m={isMobile ? "2px" : "5px"}
      position="relative"
    >
      <Image
        style={{ borderRadius: "6px" }}
        src={sdg.attributes.picture.data.attributes.url}
        alt={sdg.attributes.name}
        objectFit="contain"
        layout="fill"
      />
    </Box>
  );
}
