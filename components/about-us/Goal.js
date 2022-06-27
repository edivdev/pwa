import { Box } from "@chakra-ui/react"
import Text from "../ui/Text"
import Image from 'next/image'

export default function Goal({ title, goal, pic, ...props }) {

  return (
    <Box w="320px" h="354px" m="3% 5%" {...props}>
      <Box m="auto" w="180px" h="180px" position="relative">
        <Image src={`/images/static/assets/departments/${pic}`} layout="fill" objectFit="contain" />
      </Box>
      <Box maxWidth="250px" margin="0 auto" textAlign="center" my="10px"><Text fontSize="18" fontWeight="900">{title}</Text></Box>
      <Box textAlign="center"><Text textAlign="justify" px="4%" fontSize="14px">{goal}</Text></Box>
    </Box>
  )
}
