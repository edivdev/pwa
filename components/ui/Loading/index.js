import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

export default function Loading() {
  return (
    <Flex
      minWidth="500px"
      minHeight="70vh"
      justifyContent="center"
      alignItems="center"
    >
      <Image
        src="/images/static/assets/loading.gif"
        alt="asd"
        width="50"
        height="50"
      />
    </Flex>
  );
}
