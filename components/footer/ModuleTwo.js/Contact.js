import Text from "../../ui/Text";
import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import Button from "../../ui/Button";

export default function Contact() {
  return (
    <Flex flexDirection="column" mb="15px">
      <Text fontWeight="900" color="white">
        CONTACT
      </Text>

      <Text color="white">
        Hybrid community of volunteers from around the world
      </Text>
      <Link href="mailto:info@educaciondiversa.com">
        <a>
          <Button variant="buttonFooter">info@educaciondiversa.com</Button>
        </a>
      </Link>
    </Flex>
  );
}
