import { Box, Flex } from "@chakra-ui/react"
import Text from "../ui/Text"
import VolunteersContactForm from "./volunteersContactForm"
import useTheme from '../../hooks/useTheme'
import Image from "next/image"

export default function BeVolunteer() {
  const theme = useTheme()
  return (
    <Box bg={theme.colors.main.darkblue}>
      <Flex py="20px">
        <Box w="50%" h="80vh" position="relative">
          <Image src='/images/static/about/be_a_volunteer.png' layout='fill' alt='be a volunteer' objectFit="contain" />
        </Box>
        <Flex w="50%" px="90px" flexDirection="column" justifyContent="center">
          <Text variant="introSection" color="white" textTransform="uppercase">
            be a volunteer
          </Text>
          <Text color="white" fontSize="24px">
            Consectetur incididunt ut labore et dolore magna aliqua!
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
