import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";


export default function MemberCard({ member }) {
  return (
    <Flex w="322px" h="375px" m="10px" flexDirection="column">
      <Box h="50%" position="relative"><Image src={member.pic} layout="fill" objectFit="contain" /></Box>
      <Box h="50%">{member.name}</Box>
    </Flex>

  )
}
