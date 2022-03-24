import { Box, Flex } from "@chakra-ui/react"
import Image from 'next/image'
import Text from "../../ui/Text"

export default function ProjectTile({ project }) {

  const icon = project.category === 'EDUCATION' ? '/images/static/assets/icon_education_purple.png' : project.category === 'ACTIVISM' ? '/images/static/assets/icon_activism_yellow.png' : '/images/static/assets/icon_empowerment_red.png'
  const background = project.category === 'EDUCATION' ? '/images/static/assets/educationbg.jpg' : project.category === 'ACTIVISM' ? '/images/static/assets/activismbg.jpg' : '/images/static/assets/empowermentbg.jpg'
  console.log(icon)
  return (
    <Flex flexDirection="column" alignItems="center">
      <Box w="243px" h="281px" backgroundImage={background} borderRadius="6px" />
      <Flex w="55px" h="55px" bg="white" borderRadius="50%" mt="-25px" p="5px" alignItems="center" justifyContent="center">
        <Image src={icon} alt="icon" width="50px" height="50px" />
      </Flex>
      <Box m="20px auto 0" w="60%" textAlign="center">
        <Text>
          {project.title}
        </Text>
      </Box>
    </Flex>
  )
}
