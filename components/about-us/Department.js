import { Box } from "@chakra-ui/react"
import Text from "../ui/Text"
import Image from 'next/image'

export default function Department({ isMobile, title, content, pic, ...props }) {

  return (
    <Box w={isMobile? "400px": "320px"} h="354px" m={isMobile ? "1% 0%" : "3% 5%"} {...props}>
      <Box m="auto" w="180px" h="180px" position="relative">
        <Image src={`/images/static/assets/departments/${pic}`} layout="fill" objectFit="contain" alt={title}/>
      </Box>
      <Box maxWidth="250px" margin="0 auto" textAlign="center" my="10px"><Text fontSize="18" fontWeight="900">{title}</Text></Box>
      <Box textAlign="center">
        <Text textAlign="justify" px="4%" w={isMobile? "350px" : "auto"} fontSize="14px">{content}</Text>
      </Box>
    </Box>
  )
}
