import React from "react";
import { Box, Link } from "@chakra-ui/react";
import useTheme from "../../hooks/useTheme";
import Text from "../ui/Text";

export default function SubMenu({ submenuElements, setIsSubMenuOpen }) {
  const theme = useTheme();

  const handleMouseIn = () => {
    setIsSubMenuOpen(true);
  };

  const handleMouseOut = () => {
    setIsSubMenuOpen(false);
  };

  return (
    <Box
      h="72px"
      w="100%"
      pt="25px"
      bg={theme.colors.main.lightblue}
      position="absolute"
      top="60px"
      zIndex="2"
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseOut}
    >
      <Box
        display="flex"
        justifyContent="space-evenly"
        w="60%"
        pt="10px"
        m="auto"
      >
        {submenuElements.map((element) => {
          return (
            <Box key={element.id}>
              <Link href={element.slug} _hover={{ textDecoration: "none" }}>
                <Text
                  color="white"
                  variant="submenuItem"
                  _hover={{
                    color: theme.colors.main.red,
                  }}
                >
                  {element.name}
                </Text>
              </Link>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
