import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Text from "../../ui/Text";
import Link from "next/link";

export default function ProjectTile({ project, isMobile = false }) {
  const background =
    project.attributes.project_category?.data.attributes.title === "EDUCATION"
      ? "/images/static/assets/educationbg.jpg"
      : project.attributes.project_category?.data.attributes.title ===
        "ACTIVISM"
      ? "/images/static/assets/activismbg.jpg"
      : "/images/static/assets/empowermentbg.jpg";

  return (
    <Box w="250px" h="400px" m="10px">
      <Link href={`/projects/${project.attributes.slug}`}>
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
                backgroundImage={`${project.attributes.mainPicture.data.attributes.url}`}
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
              <Image
                src={
                  project.attributes.department?.data.attributes.picture.data
                    .attributes.url || ""
                }
                alt="icon"
                width="50px"
                height="50px"
              />
            </Flex>
            <Box m="10px auto 0" w="70%" textAlign="center" h="72px">
              <Text as="h5" fontSize="14px">
                {project.attributes.title}
              </Text>
            </Box>
          </Flex>
        </a>
      </Link>
    </Box>
  );
}
