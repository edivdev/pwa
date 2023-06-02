import { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Text from "../Text";
import Button from "../Button";
import Link from "next/link";
import useTheme from "../../../hooks/useTheme";
import useViewport from "../../../hooks/useViewport";

export default function PagesHeader({ background, ...props }) {
  const viewport = useViewport();
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    setIsMobile(viewport[0]);
  }, [isMobile, viewport]);

  const theme = useTheme();

  const { text0, text1, text2, text3, cta, ctaTarget, projectTitle } = props;
  return (
    <Box
      h="calc(125vw/4)"
      // minHeight={isMobile ? "150px" : "450px"}
      backgroundImage={background}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundPosition="center"
      order="0"
    >
      {text0 ? (
        <Text color="white" textTransform="uppercase">
          {text0}
        </Text>
      ) : null}

      {text1 ? (
        <Text
          variant={isMobile ? "titleMobile" : "h1"}
          color={background ? "white" : theme.colors.main.blue}
          textTransform="capitalize"
          textShadow="0 0 5px rgb(54,93,158)"
          mb="20px"
        >
          {text1}
        </Text>
      ) : null}

      {text2 ? (
        <Text
          variant={isMobile ? "mobileMainSubTitle" : "mainSubTitle"}
          color="white"
          textTransform="uppercase"
          my="24px"
        >
          {text2}
        </Text>
      ) : null}

      {text3 ? (
        <Text
          variant="normal"
          color={background ? "white" : theme.colors.main.blue}
          maxWidth={isMobile ? "95%" : "50%"}
          dangerouslySetInnerHTML={{ __html: text3 }}
        />
      ) : null}

      {projectTitle ? (
        <Flex
          w="35%"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Text
            mt={isMobile ? "0" : "25%"}
            as="h1"
            color="white"
            fontSize="12vw"
            lineHeight="0.8em"
            fontFamily="Just Another Hand"
            textShadow="0 0 .4em rgba(0,0,0, .4)"
          >
            {projectTitle}
          </Text>
        </Flex>
      ) : null}

      {ctaTarget && cta ? (
        <Link href={ctaTarget}>
          <a>
            <Button
              variant="fillBlue"
              size={isMobile ? "mobileLongButton" : "longbutton"}
            >
              {cta}
            </Button>
          </a>
        </Link>
      ) : null}
    </Box>
  );
}
