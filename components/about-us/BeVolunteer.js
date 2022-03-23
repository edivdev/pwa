import { Box, Flex } from "@chakra-ui/react"
import Text from "../ui/Text"
import VolunteersContactForm from "./VolunteersContactForm"
import useTheme from '../../hooks/useTheme'
import Image from "next/image"

export default function BeVolunteer() {
  const theme = useTheme()
  return (
    <Box bg={theme.colors.main.darkblue}>
      <Flex py="30px">
        <Box w="50%">
          <Image src='/images/static/about/be_a_volunteer.png' layout='responsive' alt='be a volunteer' width="100%" height="100%" />
        </Box>
        <Box w="50%" px="90px">
          <Text variant="introSection" color="white" textTransform="uppercase">
            be a volunteer
          </Text>
          <Text color="white" fontSize="24px">
            Consectetur incididunt ut labore et dolore magna aliqua!
          </Text>
          <Image src="/images/static/assets/underline-title-red.png" width="72" height="16" alt="underline" />
          <VolunteersContactForm />
        </Box>
      </Flex>
    </Box>
  )
}
