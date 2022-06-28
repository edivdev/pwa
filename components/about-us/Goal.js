import { Box } from "@chakra-ui/react"

export default function Goal({goal}){
return (
    <Box p="20px">
        <b>Goal #{goal.id}</b>: {goal.goal}
    </Box>
)
}