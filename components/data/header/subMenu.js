import React from 'react'
import { Box, Link } from '@chakra-ui/react'
import useTheme from '../../../hooks/useTheme'
import Text from '../../Text'

export default function SubMenu({ submenuElements, setIsSubMenuOpen }) {

  const theme = useTheme()

  const handleMouseIn = () => {
    setIsSubMenuOpen(true)
  }

  const handleMouseOut = () => {
    setIsSubMenuOpen(false)
  }

  return (
    <Box
      h="72px"
      w="100%"
      pt="20px"
      bg={theme.colors.main.lightblue}
      position="absolute"
      top="60px"
      zIndex="2"
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseOut}
    >
      <Box display="flex" justifyContent="space-evenly" w="60%" m="auto">
        {submenuElements.map((element) => {
          return (
            <div>
              <Link href={element.slug}>
                <Text color="white" variant="normal">{element.name}</Text>
              </Link>
            </div>
          )
        })}
      </Box>
    </Box>
  )
}
