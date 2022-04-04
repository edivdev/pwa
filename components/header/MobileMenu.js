import { useState } from 'react'
import Image from 'next/image'
import { Box, Flex } from '@chakra-ui/react'
import { FaBars, FaTimes } from 'react-icons/fa'
import useTheme from '../../hooks/useTheme'
import Text from '../ui/Text'
import Link from 'next/link'

export default function MobileMenu() {
  const theme = useTheme()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menu = [
    { id: 0, name: 'home', slug: '/' },
    { id: 1, name: 'about us', slug: 'about-us' },
    { id: 2, name: 'projects', slug: 'projects' },
    { id: 3, name: 'blog', slug: 'blog' },
    { id: 4, name: 'donate', slug: 'donate' },
    { id: 5, name: 'contact', slug: 'contact' },
  ]

  function closeMenu() {
    setIsMenuOpen(false)
  }

  function openMenu() {
    setIsMenuOpen(true)
  }

  return (
    <>
      <Flex position="fixed" top="0" left="0" right="0" zIndex="999" bg="white" h="70px" justifyContent="space-between">
        <Box w="60px" h="60px" position="relative" m="5px">
          <Image src="/images/static/assets/logo.png" layout="fill" objectFit="contain" />
        </Box>
        <Flex w="60px" h="60px" position="relative" m="5px" justifyContent="center" alignItems="center">
          {!isMenuOpen ? <FaBars color={theme.colors.main.blue} fontSize="30px" onClick={openMenu} /> : <FaTimes color={theme.colors.main.blue} fontSize="30px" onClick={closeMenu} />}
        </Flex>
      </Flex>
      {isMenuOpen && <Box className="menu-modal" onClick={closeMenu} overflow="hidden">
        <Flex className="menu-mobile-wrapper" bg="white" zIndex="999" position="absolute" w="100vw" h="100vh" flexDirection="column" justifyContent="center" px="5%">
          {menu.map((element) =>
            <Flex justifyContent="center" key={element.id}>
              <Box my="15px">
                <Link href={element.slug}>
                  <Text fontWeight="900" fontSize="20px" textTransform="uppercase">{element.name}</Text>
                </Link>
              </Box>
            </Flex>)}
        </Flex>
      </Box>}
    </>
  )
}
