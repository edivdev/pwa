import { Box } from "@chakra-ui/react";
import SectionsTitle from "../ui/SectionsTitle";
import Goal from "./Goal";

export default function Goals({goals}){
    return(
        <Box maxWidth="900px" m="20px auto">
        <Box textAlign="center">
            <SectionsTitle title="Our Goals" />
        </Box>
        <Box>
            {goals.map((goal) => <Goal key={goal.id} goal={goal}/> )}
        </Box>
        </Box>
    )
}