import { Box, Flex } from "@chakra-ui/react";
import Recognition from "./Recognition";
import Text from "../ui/Text";

export default function RecognitionsContent() {
  return (
    <>
      <Box w="60%" m="80px auto">
        <Text>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      </Box>
      <Flex bg="rgb(230, 240, 252)" flexDirection="column">
        <Recognition />
        <Recognition />
        <Recognition />
      </Flex>
    </>
  );
}
