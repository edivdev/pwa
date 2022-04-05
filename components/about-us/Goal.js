import { Box } from "@chakra-ui/react"
import Text from "../ui/Text"

export default function Goal({ num, goal, ...props }) {
  return (
    <Box w="252px" h="354px" m="3% 5%" {...props}>
      <Box m="auto" w="160px" h="160px" backgroundImage="/images/static/assets/blue-ball.png" backgroundSize="contain" backgroundRepeat="no-repeat" />
      <Box textAlign="center" my="10px"><Text fontSize="18" fontWeight="900">{`Goal #${num}`}</Text></Box>
      <Box textAlign="center"><Text px="4%" fontSize="14px">{goal}</Text></Box>
    </Box>
  )
}
