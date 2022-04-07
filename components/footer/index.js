import { useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/react'
import useTheme from '../../hooks/useTheme'
import ModuleOne from './ModuleOne'
import ModuleTwo from './ModuleTwo.js'
import BecomeMember from './ModuleFour/BecomeMember'
import ModuleThree from './ModuleThree'
import useViewport from '../../hooks/useViewport'


function Footer() {

  const theme = useTheme()
  const viewport = useViewport()
  const [isMobile, setIsMobile] = useState(null)

  useEffect(() => {
    setIsMobile(viewport[0])
  }, [isMobile, viewport])

  return (
    <Flex
      flexDirection={isMobile ? 'column' : 'row'}
      bg={theme.colors.main.footer}
      color={theme.colors.main.white}
      p={isMobile ? "7% 4%" : "4% 7%"}
      justifyContent="space-evenly"
      zIndex="3"
      position="relative"
    >
      <ModuleOne isMobile={isMobile} />
      <ModuleTwo isMobile={isMobile} />
      <ModuleThree isMobile={isMobile} />
      <BecomeMember isMobile={isMobile} />
    </Flex>
  )
}

export default Footer
