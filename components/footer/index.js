import { Flex } from '@chakra-ui/react'
import useTheme from '../../hooks/useTheme'
import Connect from './Connect'
import BecomeMember from './BecomeMember'
import ModuleOne from './ModuleOne'

function Footer() {

  const theme = useTheme()

  return (
    <Flex
      bg={theme.colors.main.footer}
      color={theme.colors.main.white}
      p="4% 7%"
      justifyContent="space-evenly"
    >
      <ModuleOne />
      <BecomeMember />
    </Flex>
  )
}

export default Footer
