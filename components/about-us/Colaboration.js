import Image from "next/image";
import { Box, Flex } from "@chakra-ui/react";

export default function Colaboration({ element }) {
  return (
    <Box width="200px" height="100px" position="relative" m="auto">
      <Image
        src={element.pic}
        layout="fill"
        objectFit="contain"
        alt="image-title"
      />
    </Box>
  );
}
