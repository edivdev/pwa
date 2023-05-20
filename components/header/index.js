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
    <Flex h="12vh" bg="" alignItems="center">
      <Flex w="" justifyContent="center" p="0 1em" bg="white">
        <Box position="relative" width="68px" height="68px">
          <Link href="/">
            <a>
              <Image
                src="/images/static/assets/logo.png"
                layout="fill"
                objectFit="contain"
                alt="logo"
              />
            </a>
          </Link>
        </Box>
      </Flex>
      <Box
        display="flex"
        w="75%"
        justifyContent="space-evenly"
        className="primary-menu-elements"
        alignItems="center"
        as="nav"
        h="12vh"
      >
        {menu.map((element) => (
          <MenuItem
            p="50px 10px"
            key={element.id}
            element={element}
            setIsSubMenuOpen={setIsSubMenuOpen}
            setSubMenuElements={setSubMenuElements}
          />
        ))}
      </Box>
      <Box w="10%">{/* Learning Portal */}</Box>
      <Box w="5%">{/* EN */}</Box>

      {isSubMenuOpen && (
        <SubMenu
          submenuElements={submenuElements}
          setIsSubMenuOpen={setIsSubMenuOpen}
        />
      )}
    </Flex>
  );
};

export default Header;
