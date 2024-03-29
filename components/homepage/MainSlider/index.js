import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";

import Text from "../../ui/Text";
import Button from "../../ui/Button";
import Image from "next/image";

import { useEffect, useState } from "react";
import useViewport from "../../../hooks/useViewport";

const MainSlider = () => {
  const viewport = useViewport();
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    setIsMobile(viewport[0]);
  }, [isMobile, viewport]);

  return (
    <Flex
      w="100vw"
      flexDirection={isMobile ? "column" : "row"}
      alignItems="center"
      justifyContent="center"
      h="80vh"
      backgroundImage="url(/images/static/backgrounds/BLUE_BACKGROUND.jpg)"
      p="0 1em"
    >
      <Box zIndex="1" w={isMobile ? "100vw" : "50vw"} height="60%" p="2em 1em">
        <Flex flexDirection="column" justifyContent="space-evenly" h="100%">
          <Box>
            <Text color="white" variant="mainSubTitle">
              {" "}
              Become part of the{" "}
            </Text>
            <Text
              color="white"
              variant={isMobile ? "mainTitleMobile" : "mainTitle"}
            >
              Collective!
            </Text>
          </Box>
          <Box>
            <Text color="white" variant="normal" my="20px">
              Empowering people with art-based education in diverse topics.
            </Text>
          </Box>
          <Flex
            flexDirection={isMobile ? "column" : "row"}
            wrap="wrap"
            w="100%"
          >
            <Box minW="50%">
              <Link href="/projects/gender-equality-education">
                <a>
                  <Box maxWidth="200px" mt="10px">
                    <Button variant="red" mr={isMobile ? "" : "20px"}>
                      Sign the Gender Equality Petition
                    </Button>
                  </Box>
                </a>
              </Link>
            </Box>
            <Box>
              <Link href="/donate">
                <a>
                  <Box maxWidth="200px" mt="10px">
                    <Button variant="transparent">DONATE</Button>
                  </Box>
                </a>
              </Link>
            </Box>
          </Flex>
        </Flex>
      </Box>

      <Box bg="" w={isMobile ? "100%" : "50%"} h="100%">
        <Box bg="" h="100%" w="100%" position="relative">
          <Image
            src="/images/static/home/home-main2.png"
            alt="connect-with-us"
            layout="fill"
            objectFit="contain"
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default MainSlider;
