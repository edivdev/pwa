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
  const { picture, fname, lname, job } = member.attributes;

  function clickOnVolunteer() {
    setPopupInfo({
      picture: picture,
      fname: member.fname,
      lname: member.lname,
      country: member.country,
      bio: member.bio,
    });
    setIsPopupShowing(true);
    changesForOpenPopUp();
  }

  return (
    <Flex {...props} w="88%" h="" m="10px auto" flexDirection="column">
      <Box h="200px" w="100%" position="relative" m="">
        <Image
          className="bnwhite-card-image"
          src={picture.data?.attributes.url}
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
            {job}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}
