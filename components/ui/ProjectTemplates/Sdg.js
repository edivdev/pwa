import Image from "next/image";
import { Box } from "@chakra-ui/react";

export default function Sdg({ sdg, isMobile }) {
  return (
    <Box
      w={isMobile ? "30px" : "35px"}
      h={isMobile ? "30px" : "35px"}
      position="relative"
      alignSelf="flex-start"
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
