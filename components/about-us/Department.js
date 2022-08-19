import { Box } from "@chakra-ui/react";
import Text from "../ui/Text";
import Image from "next/image";

export default function Department({ isMobile, department }) {
  console.log("department", department.attributes);

  const { content, name, picture } = department.attributes;

  return (
    <Box
      w={isMobile ? "400px" : "320px"}
      h="354px"
      m={isMobile ? "1% 0%" : "3% 5%"}
    >
      <Box m="auto" w="180px" h="180px" position="relative">
        <Image
          src={picture.data.attributes.url}
          layout="fill"
          objectFit="contain"
          alt={name}
        />
      </Box>
      <Box maxWidth="250px" margin="0 auto" textAlign="center" my="10px">
        <Text fontSize="18" fontWeight="900">
          {name}
        </Text>
      </Box>
      <Box textAlign="center">
        <Text
          textAlign="justify"
          px="4%"
          w={isMobile ? "350px" : "auto"}
          fontSize="14px"
        >
          {content}
        </Text>
      </Box>
    </Box>
  );
}
