import { useState } from 'react'
import Link from 'next/link'
import { Flex } from '@chakra-ui/react'
import Text from '../ui/Text'
import { FaAngleDown } from "react-icons/fa"
import useTheme from '../../hooks/useTheme'

export default function MenuItem({ element, setIsSubMenuOpen, setSubMenuElements }) {

  const [parentMenuIsHovered, setParentMenuIsHovered] = useState(false)
  const theme = useTheme()

  function handleMouseEnter() {
    setSubMenuElements(element.children)
    setIsSubMenuOpen(true)
    setParentMenuIsHovered(true)
  }

  function handleMouseOut() {
    setIsSubMenuOpen(false)
    setParentMenuIsHovered(false)
  }

  if (element.children) {
    return (
      <Flex onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut}>
        <Text variant="menuItem" fontWeight="bold" color={parentMenuIsHovered ? theme.colors.main.blue : "black"}>
          {element.name}
        </Text>
        <Flex m="5px 0 0 10px" color={parentMenuIsHovered ? theme.colors.main.blue : ""}>
          <FaAngleDown />
        </Flex>
      </Flex>
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
