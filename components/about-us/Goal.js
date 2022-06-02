import { Box } from "@chakra-ui/react"
import Text from "../ui/Text"
import Image from 'next/image'

export default function Goal({ num, goal, pic, ...props }) {

  console.log(pic)
  return (
    <Box w="252px" h="354px" m="3% 5%" {...props}>
      <Box m="auto" w="180px" h="180px" position="relative">
        <Image src={`/images/static/assets/departments/${pic}`} layout="fill" objectFit="contain" />
      </Box>
      <Box textAlign="center" my="10px"><Text fontSize="18" fontWeight="900">{`Goal #${num}`}</Text></Box>
      <Box textAlign="center"><Text px="4%" fontSize="14px">{goal}</Text></Box>
    </Box>
  )
}
