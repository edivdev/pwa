import { Box, Flex } from "@chakra-ui/react"
import Image from "next/image"
import Link from 'next/link'
import Text from "../ui/Text";

export default function MemberCard({ member, setPopupInfo, setIsPopupShowing, ...props }) {

  function clickOnVolunteer() {
    setPopupInfo({
      picture: member.pic,
      name: member.name,
      country: member.country,
      bio: member.bio
    })
    setIsPopupShowing(true)
  }

  return (
    <Flex {...props} w="322px" h="375px" m="10px" flexDirection="column" onClick={clickOnVolunteer} className="hoverable">
      <Box h="50%" position="relative">
        <Image src={member.pic} layout="fill" objectFit="contain" />
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
      </Flex>
    </Flex>

  )
}
