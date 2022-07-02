import { useState, useEffect } from "react";
import { Flex, Box } from "@chakra-ui/react";
import Text from "../ui/Text";
import Image from "next/image";
import useViewport from "../../hooks/useViewport";

export default function Recognition() {
  const viewport = useViewport();
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    setIsMobile(viewport[0]);
  }, [isMobile, viewport]);

  return (
    <Flex
      my={isMobile ? "10%" : "80px"}
      flexDirection={isMobile ? "column" : "row"}
    >
      <Flex
        w={isMobile ? "100%" : "50%"}
        flexDirection="column"
        alignItems="center"
        px="8%"
      >
        <Box>
          <Text fontWeight="900" fontSize="24px">
            Recognition Name
          </Text>
        </Box>
        <Box mt={isMobile ? "10px" : "40px"}>
          <Text variant="normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </Text>
        </Box>
      </Flex>
      <Box w={isMobile ? "100%" : "50%"}>
        <Box
          position="relative"
          w={isMobile ? "80%" : "498px"}
          h="328px"
          m="auto"
        >
          <Image
            src="/images/static/about/recognitionPicture.jpg"
            layout="fill"
            objectFit="contain"
            alt="recognition"
          />
        </Box>
      </Box>
    </Flex>
  );
}
