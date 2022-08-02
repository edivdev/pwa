import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import SectionsTitle from "../ui/SectionsTitle";
import Department from "./Department";

export default function Departments({ isMobile, departments }) {
  if (departments === null) {
    return <>loading...</>;
  }

  if (isMobile) {
    return (
      <section>
        <Box my="10%">
          <Box display="flex" overflowX="scroll" h="400px">
            {departments.map((department) => (
              <Department
                isMobile={isMobile}
                key={department.id}
                content={department.attributes.content}
                title={department.attributes.name}
                pic={department.attributes.picture}
              />
            ))}
          </Box>
        </Box>
      </section>
    );
  }
  return (
    <section>
      <Box py="8%">
        <Flex flexWrap="wrap" justifyContent="center">
          {departments.map((department) => (
            <Department
              key={department.id}
              content={department.attributes.content}
              title={department.attributes.name}
              pic={department.attributes.picture}
            />
          ))}
        </Flex>
      </Box>
    </section>
  );
}
