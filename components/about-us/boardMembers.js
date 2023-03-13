import { Box, Flex, GridItem, SimpleGrid } from "@chakra-ui/react";
import SectionsTitle from "../ui/SectionsTitle";
import useTheme from "../../hooks/useTheme";
import MemberCard from "./memberCard";

export default function BoardMembers({
  isMobile,
  members,
  setPopupInfo,
  setIsPopupShowing,
}) {
  const theme = useTheme();

  return (
    <section>
      <Box
        bg={theme.colors.main.babyblue}
        textAlign="center"
        py="30px"
        px="10%"
      >
        <SectionsTitle title="Board" />
        {!isMobile && (
          <SimpleGrid columns={5} spacing={0}>
            {members.map((member) => (
              <GridItem key={member.id}>
                <MemberCard
                  member={member}
                  setPopupInfo={setPopupInfo}
                  setIsPopupShowing={setIsPopupShowing}
                />
              </GridItem>
            ))}
          </SimpleGrid>
        )}
        {isMobile && (
          <Box display="flex" overflowX="scroll">
            {members.map((member) => (
              <MemberCard
                minWidth="280px"
                member={member}
                key={member.id}
                setPopupInfo={setPopupInfo}
                setIsPopupShowing={setIsPopupShowing}
              />
            ))}
          </Box>
        )}
      </Box>
    </section>
  );
}
