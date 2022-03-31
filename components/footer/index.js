import { Flex } from '@chakra-ui/react'
import useTheme from '../../hooks/useTheme'
import ModuleOne from './ModuleOne'
import ModuleTwo from './ModuleTwo.js'
import BecomeMember from './ModuleFour/BecomeMember'
import ModuleThree from './ModuleThree'

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
      <ModuleTwo />
      <ModuleThree />
      <BecomeMember />
    </Flex>
  )
}

export default Footer
