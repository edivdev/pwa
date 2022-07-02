import { Box } from "@chakra-ui/react";
import SectionsTitle from "../ui/SectionsTitle";
import Goal from "./Goal";
import Image from "next/image";

export default function Goals({ goals, isMobile }) {
  return (
    <Box maxWidth="900px" m="20px auto">
      <Box textAlign="center">
        <SectionsTitle title="Our Goals" />
      </Box>
      <Box
        w={isMobile ? "300px" : "600px"}
        h={isMobile ? "200px" : "400px"}
        position="relative"
        margin="auto"
      >
        <Image src="/images/static/about/goals.png" alt="goals" layout="fill" />
      </Box>
      <Box>
        {goals.map((goal) => (
          <Goal key={goal.id} goal={goal} />
        ))}
      </Box>
    </Box>
  );
}
