import { Box, Flex } from "@chakra-ui/react"
import useTheme from '../../hooks/useTheme'
import Image from 'next/image'
import Text from "../ui/Text"
import VolunteersContactForm from "./VolunteersContactForm"

export default function AboutUsPageContent() {

  const theme = useTheme()
  const title = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  return (
    <>
      <div>aboutUsPage</div>
      <p>{title}</p>
      <div>our volunteers</div>
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
    </>
  )
}

