import { Box, Flex, position } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { changesForOpenPopUp } from "../../helpers/domManipulations";
import Text from "../ui/Text";

export default function MemberCard({
  member,
  setPopupInfo,
  setIsPopupShowing,
  ...props
}) {
  const { pic, fname, lname, position } = member;

  function clickOnVolunteer() {
    setPopupInfo({
      picture: member.pic,
      fname: member.fname,
      lname: member.lname,
      country: member.country,
      bio: member.bio,
    });
    setIsPopupShowing(true);
    changesForOpenPopUp();
  }

  return (
    <Flex {...props} w="322px" h="375px" m="10px" flexDirection="column">
      <Box h="300px" position="relative">
        <Image
          className="bnwhite-card-image"
          src={pic}
          layout="fill"
          objectFit="cover"
          alt={member.fname}
        />
      </Box>
      <Flex
        h="50%"
        bg="white"
        flexDirection="column"
        justifyContent="space-evenly"
      >
        <Box my="9px">
          <Text fontWeight="900" fontSize="24px" lineHeight="1">
            {fname}
            <br />
            {lname}
          </Text>
        </Box>
        <Box mb="20px">
          <Text fontWeight="500" fontSize="18px">
            {position}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}
