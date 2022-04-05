import { useState } from 'react'
import Image from 'next/image'
import { Box, Flex } from '@chakra-ui/react'
import { FaBars, FaTimes } from 'react-icons/fa'
import useTheme from '../../hooks/useTheme'
import Text from '../ui/Text'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function MobileMenu() {
  const theme = useTheme()
  const router = useRouter()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menu = [
    { id: 0, name: 'home', slug: '/' },
    { id: 1, name: 'about us', slug: '/about-us' },
    { id: 2, name: 'projects', slug: '/projects' },
    { id: 3, name: 'blog', slug: '/blog' },
    { id: 4, name: 'donate', slug: '/donate' },
    { id: 5, name: 'contact', slug: '/contact' },
  ]

  function closeMenu() {
    setIsMenuOpen(false)
    document.querySelector('body').classList.remove('block-scroll')
  }

  function openMenu() {
    setIsMenuOpen(true)
    document.querySelector('body').classList.add('block-scroll')
  }

  function navigateToSection(slug) {
    router.push(slug)
    closeMenu()
  }

  return (
    <>
      <Flex position="fixed" top="0" left="0" right="0" zIndex="999" bg="white" h="70px" justifyContent="space-between">
        <Box w="60px" h="60px" position="relative" m="5px">
          <Link href="/">
            <a>
              <Image src="/images/static/assets/logo.png" layout="fill" objectFit="contain" />
            </a>
          </Link>
        </Box>
        <Flex w="60px" h="60px" position="relative" m="5px" justifyContent="center" alignItems="center">
          {
            !isMenuOpen ?
              <FaBars
                color={theme.colors.main.blue}
                fontSize="30px"
                onClick={openMenu}
              /> :
              <FaTimes
                color={theme.colors.main.blue}
                fontSize="30px"
                onClick={closeMenu}
              />
          }
        </Flex>
      </Flex>

      <Flex
        className="menu-mobile-wrapper"
        bg="white"
        zIndex="999"
        position="absolute"
        w={isMenuOpen ? "100vw" : '0px'}
        h="100vh"
        flexDirection="column"
        py="50%"
      >
        {isMenuOpen && menu.map((element) =>
          <Flex justifyContent="center" key={element.id}>
            <Box my="15px">
              <Text
                className="hoverable"
                fontWeight="900"
                fontSize="20px"
                textTransform="uppercase"
                onClick={() => navigateToSection(element.slug)}
              >
                {element.name}
              </Text>
            </Box>
          </Flex>)}
      </Flex>

    </>
  )
}
