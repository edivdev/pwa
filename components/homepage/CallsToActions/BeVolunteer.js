import { Box, Flex } from "@chakra-ui/react";
import Image from 'next/image'
import Text from "../../ui/Text";
import Button from '../../ui/Button'
import SectionsTitle from "../../ui/SectionsTitle";

export default function BeVolunteer() {
  return (
    <Flex py="5%">
      <Box w="60%">
        <Image src="https://via.placeholder.com/960x742" width="960" height="742" />
      </Box>
      <Box w="40%" pr="5%">
        <SectionsTitle title="Be a volunteer" />
        <Text py="25px" color="black" variant="normal">We wouldn’t exist without the amazing volunteers who give us their skills and time to ensure we continue to grow and produce educational materials and resources for people in underdeveloped countries. If you have some time and skills that you think could help us, join us today!  Volunteering with us means you WILL make a difference to people’s lives around the world when it comes to accessing good quality education.</Text>
        <Button
          variant="blue"
          size="normal"
        >
          SEE MORE
        </Button>
      </Box>
    </Flex>
  )
}
