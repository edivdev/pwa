import React, { useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import Link from 'next/link'
import MenuItem from './MenuItem'
import SubMenu from './subMenu'

const menu = [
  {
    id: 1, name: 'about us', slug: 'about-us', children: [
      { id: 1.1, name: 'about us', slug: '/about-us' },
      { id: 1.2, name: 'what we do', slug: '/about-us/what-we-do' },
      { id: 1.3, name: 'recognitions', slug: '/about-us/recognitions' },
      { id: 1.4, name: 'colaborations', slug: '/about-us/colaborations' }
    ]
  },
  { id: 2, name: 'projects', slug: 'projects' },
  { id: 3, name: 'donate', slug: 'donate' },
  { id: 4, name: 'contact', slug: 'contact' },
]

const Header = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const [submenuElements, setSubMenuElements] = useState()
  return (
    <Box>
      <nav>
        <Flex
          zIndex="999999"
          h="72px"
          position="absolute"
          top="0"
          justifyContent="space-around"
          pt="25px"
          w="100%"
          background="white"
        >
          <Box w="10%">
            <Link href="/">
              <a>
                Logo
              </a>
            </Link>
          </Box>
          <Box display="flex" w="70%" justifyContent="space-evenly" className="primary-menu-elements">
            {menu.map((element) =>
              <MenuItem
                key={element.id}
                element={element}
                setIsSubMenuOpen={setIsSubMenuOpen}
                setSubMenuElements={setSubMenuElements}
              />)}
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
    </Box>
  )
}

export default Header
