import Image from "next/image";
import { Box } from "@chakra-ui/react";

export default function Sdg({ sdg, isMobile }) {
  return (
    <Box
      w={isMobile ? "90px" : "200px"}
      h={isMobile ? "90px" : "200px"}
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
