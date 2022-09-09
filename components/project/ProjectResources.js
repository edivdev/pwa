import Image from "next/image";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Text from "../ui/Text";

export default function ProjectResources(props) {
  const { document } = props;
  console.log("@@document", document, document.attributes.url);
  return (
    <Box
      w="auto"
      h="90px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Link href={document.attributes.url}>
        <a target="_blank" rel="noreferrer noopener">
          <Box h="60px" position="relative">
            <Image
              src="/images/static/assets/image22.png"
              alt="pdf-icon"
              layout="fill"
            />
          </Box>
          <Box mt="5px">
            <Box maxWidth="65px">
              <Text fontSize="11px" lineHeight="1em" textAlign="center">
                {document.attributes.name}
              </Text>
            </Box>
          </Box>
        </a>
      </Link>
    </Box>
  );
}
