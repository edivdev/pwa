import { Box, Flex } from "@chakra-ui/react"
import Text from "../ui/Text"
import VolunteersContactForm from "./volunteersContactForm"
import useTheme from '../../hooks/useTheme'
import Image from "next/image"

export default function BeVolunteer({ isMobile }) {
  const theme = useTheme()
  return (
    <Box bg={theme.colors.main.darkblue}>
      <Flex flexDirection={isMobile ? "column" : "row"} py="20px">
        <Box w={isMobile ? "100%" : "50%"} h={isMobile ? "300px" : "80vh"} position="relative">
          <Image src='/images/static/about/be_a_volunteer.png' layout='fill' alt='be a volunteer' objectFit="contain" />
        </Box>
        <Flex w={isMobile ? "100" : "50%"} px={isMobile ? "30px" : "90px"} flexDirection="column" justifyContent="center">
          <Text variant="introSection" color="white" textTransform="uppercase">
            Become a Volunteer
          </Text>
          <Text color="white" fontSize="24px">
            Just fill in the details below and one of our team members will be in touch!
          </Text>
          <Box w="72px" h="16px" position="relative" my="20px">
            <Image src="/images/static/assets/underline-title-red.png" layout="fill" objectFit="contain" alt="underline" />
          </Box>
          <Text my="10px" fontSize="13px" color="white">* Required fields</Text>
          <VolunteersContactForm />
        </Flex>
      </Flex>
    </Box>
  )
}
