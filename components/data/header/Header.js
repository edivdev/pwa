import React, { useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import MenuItem from './MenuItem'
import SubMenu from './subMenu'

const menu = [
  {
    name: 'about us', slug: 'about-us', children: [
      { name: 'about us', slug: '/about-us' },
      { name: 'what we do', slug: '/about-us/what-we-do' },
      { name: 'recognitions', slug: '/about-us/recognitions' },
      { name: 'colaborations', slug: '/about-us/colaborations' }
    ]
  },
  { name: 'projects', slug: 'projects' },
  { name: 'donate', slug: 'donate' },
  { name: 'contact', slug: 'contact' },
]

const Header = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const [submenuElements, setSubMenuElements] = useState()
  return (
    <nav>
      <Flex
        h="72px"
        justifyContent="space-around"
        pt="20px" w="100%"
        zIndex="88888"
        position="absolute"
        top="0"
        background="white">
        <Box w="10%">
          <Link href="/">
            <a>Logo</a>
          </Link>
        </Box>
        <Box display="flex" w="70%" justifyContent="space-evenly">
          {menu.map((element) => <MenuItem element={element} setIsSubMenuOpen={setIsSubMenuOpen} setSubMenuElements={setSubMenuElements} />)}
        </Box>
        <Box w="10%">
          {/* Learning Portal */}
        </Box>
        <Box w="5%">
          {/* EN */}
        </Box>
      </Flex>
      {isSubMenuOpen && <SubMenu submenuElements={submenuElements} setIsSubMenuOpen={setIsSubMenuOpen} />}
    </nav>
  )
}

export default Header
