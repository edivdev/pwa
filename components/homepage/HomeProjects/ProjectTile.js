import { Box, Flex } from "@chakra-ui/react"
import Image from 'next/image'
import Text from "../../ui/Text"
import Link from 'next/link'

const icons = {
  'women-rights': '/images/static/assets/Womensrights.png',
  'inclusion': '/images/static/assets/inclusion.png',
  'children-rights': '/images/static/assets/Childrenrights.png',
  'eliminating-violence': '/images/static/assets/AgaintstGBV.png',
  'legal': '/images/static/assets/legal.png',
  'sustainability': '/images/static/assets/Sustainability.png',
  'translators': '/images/static/assets/Translators.png',
  'sexual-reproductive-health': '/images/static/assets/SRH.png',
  'art': '/images/static/assets/Art.png',
  'peaceful-conflict-resolution': '/images/static/assets/Art.png' //temporal for not breaking site
}

export default function ProjectTile({ project, ...props }) {

  console.log(icons[project.department])

  //const icon = project.category === 'EDUCATION' ? '/images/static/assets/icon_education_purple.png' : project.category === 'ACTIVISM' ? '/images/static/assets/icon_activism_yellow.png' : '/images/static/assets/icon_empowerment_red.png'
  const icon = icons[project.department]
  const background = project.category === 'EDUCATION' ? '/images/static/assets/educationbg.jpg' : project.category === 'ACTIVISM' ? '/images/static/assets/activismbg.jpg' : '/images/static/assets/empowermentbg.jpg'

  return (
    <Link href={`/projects/${project.slug}`}>
      <a>
        <Flex flexDirection="column" alignItems="center" {...props} >
          <Box w="230px" h="281px" backgroundImage={background} borderRadius="6px" mt="10px" />
          <Flex w="55px" h="55px" bg="white" borderRadius="50%" mt="-25px" p="5px" alignItems="center" justifyContent="center">
            <Image src={icon} alt="icon" width="50px" height="50px" />
          </Flex>
          <Box m="10px auto 0" w="70%" textAlign="center" h="72px">
            <Text fontSize="14px">
              {project.title}
            </Text>
          </Box>
        </Flex>
      </a>
    </Link>
  )
}
