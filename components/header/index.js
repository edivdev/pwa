import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";
import Image from "next/image";

const menu = [
  {
    id: 1,
    name: "about us",
    slug: "about-us",
    children: [
      { id: 1.1, name: "about us", slug: "/about-us" },
      { id: 1.2, name: "what we do", slug: "/about-us/what-we-do" },
      // { id: 1.3, name: 'recognitions & collaborations', slug: '/about-us/recognitions' },
      { id: 1.4, name: "our departments", slug: "/about-us/our-departments" },
      { id: 1.5, name: "volunteers", slug: "/about-us/volunteers" },
    ],
  },
  { id: 2, name: "projects", slug: "projects" },
  { id: 3, name: "blog", slug: "blog" },
  { id: 4, name: "donate", slug: "donate" },
  { id: 5, name: "contact", slug: "contact" },
];

const Header = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [submenuElements, setSubMenuElements] = useState();
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
          <Flex w="10%" justifyContent="center">
            <Link href="/">
              <a>
                <Box position="relative" width="68px" height="68px" mt="-20px">
                  <Image
                    src="/images/static/assets/logo.png"
                    layout="fill"
                    objectFit="cover"
                    alt="logo"
                  />
                </Box>
              </a>
            </Link>
          </Flex>
          <Box
            display="flex"
            w="70%"
            justifyContent="space-evenly"
            className="primary-menu-elements"
          >
            {menu.map((element) => (
              <MenuItem
                p="0 20px"
                key={element.id}
                element={element}
                setIsSubMenuOpen={setIsSubMenuOpen}
                setSubMenuElements={setSubMenuElements}
              />
            ))}
          </Box>
          <Box w="10%">{/* Learning Portal */}</Box>
          <Box w="5%">{/* EN */}</Box>
        </Flex>
        {isSubMenuOpen && (
          <SubMenu
            submenuElements={submenuElements}
            setIsSubMenuOpen={setIsSubMenuOpen}
          />
        )}
      </nav>
    </Box>
  );
};

export default Header;
