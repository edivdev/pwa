import Text from "../../ui/Text";
import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";

export default function Donate() {
  return (
    <Flex flexDirection="column">
      <Text fontWeight="900" color="white">
        DONATE
      </Text>

      <Text color="white">
        <Link href="/donate">
          Making a contribution helps us grow and have a bigger impact.
        </Link>
      </Text>
    </Flex>
  );
}
