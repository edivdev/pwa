import Link from 'next/link'
import SubMenu from './subMenu'
import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import Text from '../ui/Text'

export default function MenuItem({ element, setIsSubMenuOpen, setSubMenuElements }) {

  function handleMouseEnter() {
    setSubMenuElements(element.children)
    setIsSubMenuOpen(true)
  }

  function handleMouseOut() {
    setIsSubMenuOpen(false)
  }

  if (element.children) {
    return (
      <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut}>
        <Text variant="menuItem" color="black" fontWeight="bold">
          {element.name}
        </Text>
      </Box>
    )
  }

  return (
    <Link href={`/${element.slug}`}>
      <a>
        <Text variant="menuItem" color="black" fontWeight="bold">
          {element.name}
        </Text>
      </a>
    </Link>

  )
}
