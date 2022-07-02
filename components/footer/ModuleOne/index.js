import LearningPortal from "./LearningPortal";
import Blog from "./Blog";
import Connect from "./Connect";
import { Flex } from "@chakra-ui/react";

export default function ModuleOne({ isMobile }) {
  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      w={isMobile ? "100%" : "20%"}
      mb={isMobile ? "20px" : ""}
    >
      <Connect />
      <LearningPortal />
      <Blog />
    </Flex>
  );
}
