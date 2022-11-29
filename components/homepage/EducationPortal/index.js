import { Box, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import useTheme from "../../../hooks/useTheme";
import Image from "next/image";
import Text from "../../ui/Text";
import { ListItem, List } from "@chakra-ui/react";
import useViewport from "../../../hooks/useViewport";

export default function EducationPortalSection() {
  const theme = useTheme();

  const viewport = useViewport();
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    setIsMobile(viewport[0]);
  }, [isMobile, viewport]);

  return (
    <Box bg={theme.colors.main.darkblue} w="100vw">
      <Flex flexDirection={isMobile ? "column" : "row"}>
        <Box w={isMobile ? "100%" : "50%"} p="5%">
          <Text color="white" variant="mainSubTitle">
            Learning Portal
          </Text>
          <Text color="white" variant="introSection">
            We believe in free education in these areas for everyone, regardless
            of your literacy level so we’re building a learning portal to ensure
            you all have FREE access. It will include art-based activities
            aligned to objectives in the areas of Human Rights, Eliminating
            Gender-based violence and Bullying and Sexual and Reproductive
            Health Education.
          </Text>
          <Text color="white" variant="introSection">
            It plans to feature:
          </Text>
          <Image
            src="/images/static/assets/underline-title-red.png"
            width="72"
            height="16"
            alt="underline"
          />
          <List py="20px">
            <ListItem color="white" mb="8px">
              <Text variant="normal" color="white">
                <span style={{ marginRight: "6px" }}>✅ </span>A safe space for
                children to explore and learn about these topics without having
                to encounter traumatic content
              </Text>
            </ListItem>
            <ListItem color="white" mb="8px">
              <Text variant="normal" color="white">
                <span style={{ marginRight: "6px" }}>✅ </span>Age appropriate
                activities aligned to topics that will engage and teach children
                about our areas of focus
              </Text>
            </ListItem>
            <ListItem color="white" mb="8px">
              <Text variant="normal" color="white">
                <span style={{ marginRight: "6px" }}>✅ </span>A space for
                people to contribute educational content and learn from peers
                through the generation and sharing of content in different
                artistic forms
              </Text>
            </ListItem>
            <ListItem color="white" mb="8px">
              <Text variant="normal" color="white">
                <span style={{ marginRight: "6px" }}>✅ </span>An academic
                library for people to access or donate articles specific to
                topics related to our areas of focus
              </Text>
            </ListItem>
            <ListItem color="white" mb="8px">
              <Text variant="normal" color="white">
                <span style={{ marginRight: "6px" }}>✅ </span>A resource
                library for teachers and parents to access good quality project
                methodologies and campaign materials to support teaching about
                these topics in an age-appropriate way.
              </Text>
            </ListItem>
          </List>
          {/* <Button
              variant="transparent"
              size="banner"
            >
              SEE MORE
            </Button> */}
        </Box>
        <Box w={isMobile ? "100%" : "50%"}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            h="100%"
          >
            <Image
              src="/images/static/home/home-main.png"
              alt="asd"
              width={904}
              height={860}
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
