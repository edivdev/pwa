import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Text from "../../ui/Text";
import Link from "next/link";

const icons = {
  "women-rights": "/images/static/assets/icon1.png",
  inclusion: "/images/static/assets/icon2.png",
  "children-rights": "/images/static/assets/icon3.png",
  "eliminating-violence": "/images/static/assets/icon4.png",
  legal: "/images/static/assets/icon5.png",
  sustainability: "/images/static/assets/icon6.png",
  translators: "/images/static/assets/icon7.png",
  "sexual-reproductive-health": "/images/static/assets/icon8.png",
  art: "/images/static/assets/icon9.png",
  "peaceful-conflict-resolution": "/images/static/assets/icon4.png", //temporal for not breaking site
};

export default function ProjectTile({ project, isMobile = false, ...props }) {
  //const icon = project.category === 'EDUCATION' ? '/images/static/assets/icon_education_purple.png' : project.category === 'ACTIVISM' ? '/images/static/assets/icon_activism_yellow.png' : '/images/static/assets/icon_empowerment_red.png'
  const icon = icons[project.department];
  const background =
    project.category === "EDUCATION"
      ? "/images/static/assets/educationbg.jpg"
      : project.category === "ACTIVISM"
      ? "/images/static/assets/activismbg.jpg"
      : "/images/static/assets/empowermentbg.jpg";

  return (
    <Link href={`/projects/${project.slug}`}>
      <a>
        <Flex
          w={isMobile ? "250px" : "100%"}
          h="393px"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          m={isMobile ? "0 10px 0 0" : "0"}
        >
          <Box
            w="100%"
            h="291px"
            backgroundImage={background}
            borderRadius="6px"
            m="auto"
            p="10px"
          >
            <Box
              backgroundImage={`/images/static/projects/${project.pic}`}
              w="100%"
              h="100%"
              backgroundSize="cover"
              backgroundPosition="center"
            />
          </Box>
          <Flex
            w="55px"
            h="55px"
            bg="white"
            borderRadius="50%"
            mt="-35px"
            p="6px"
            alignItems="center"
            justifyContent="center"
          >
            <Image src={icon} alt="icon" width="50px" height="50px" />
          </Flex>
          <Box m="10px auto 0" w="70%" textAlign="center" h="72px">
            <Text fontSize="14px">{project.title}</Text>
          </Box>
        </Flex>
      </a>
    </Link>
  );
}

// asd

// <Link href={`/projects/${project.slug}`}>
//       <a>
//         <Flex flexDirection="column" alignItems="center" {...props} >
//           <Box w="230px" h="281px" backgroundImage={background} borderRadius="6px" mt="10px" p="5px" />

//           <Flex w="55px" h="55px" bg="white" borderRadius="50%" mt="-25px" p="5px" alignItems="center" justifyContent="center">
//             <Image src={icon} alt="icon" width="50px" height="50px" />
//           </Flex>
//           <Box m="10px auto 0" w="70%" textAlign="center" h="72px">
//             <Text fontSize="14px">
//               {project.title}
//             </Text>
//           </Box>

//         </Flex>
//       </a>
//     </Link>

// asd
