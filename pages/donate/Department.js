import { Box, Flex } from "@chakra-ui/react";
import Text from "../../components/ui/Text";
import Image from "next/image";

export default function Department({ name, content }) {
  return (
    <Flex my="8%">
      <Box w="40%" textAlign="center">
        <Box position="relative" w="120" h="120">
          <Image
            src="/images/static/assets/blue-ball.png"
            layout="fill"
            alt="department"
            objectFit="contain"
          />
        </Box>
        <Text
          mt="20px"
          fontWeight="900"
          dangerouslySetInnerHTML={{ __html: name }}
        />
      </Box>
      <Box w="60%">
        <Text pr="20%" textAlign="justify">
          <p dangerouslySetInnerHTML={{ __html: content }} />
        </Text>
      </Box>
    </Flex>
  );
}
