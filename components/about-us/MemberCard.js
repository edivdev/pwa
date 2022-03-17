import { Box, Flex } from "@chakra-ui/react"
import Image from "next/image"
import Link from 'next/link'
import Text from "../ui/Text";

export default function MemberCard({ member }) {
  return (
    <Flex w="322px" h="375px" m="10px" flexDirection="column">
      <Box h="50%" position="relative">
        <Image src={member.pic} layout="fill" objectFit="cover" />
      </Box>
      <Flex h="50%" bg="white" flexDirection="column" justifyContent="space-evenly">
        <Box>
          <Text fontWeight="900" fontSize="24px">
            {member.name}
          </Text>
        </Box>
        <Box mb="20px">
          <Text fontWeight="500" fontSize="18px">
            {member.position}
          </Text>
        </Box>
        {/* <Link href={`/about-us/${member.slug}`}>
          <a>
            <Flex justifyContent="center">
              <Image src="/images/static/assets/right-arrow.png" alt="next" width="29px" height="21px" />
              <Box mx="5px">Lorem Ipsum</Box>
            </Flex>
          </a>
        </Link> */}
      </Flex>
    </Flex>

  )
}
