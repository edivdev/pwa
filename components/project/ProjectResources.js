/**
 * <div
      style={{
        backgroundColor: "coral",
        margin: "0 auto",
        padding: "2px",
        maxWidth: "160px",
      }}
    >
 */

import Image from "next/image";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Text from "../ui/Text";
import Button from "../ui/Button";

export default function ProjectResources(props) {
  const { document } = props;
  // console.log("@@document", document, document.attributes.url);
  return (
    <Box
      textAlign="center"
      // background="coral"
      width="100%"
      padding="12px 0"
      margin="0 auto"
    >
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
            <Box h="60px" w="65px" position="relative" m="auto">
              <Image
                src="/images/static/assets/pdf-icon.png"
                alt="pdf-icon"
                layout="fill"
              />
            </Box>
            <Box mt="5px">
              <Box>
                <Text fontSize="11px" lineHeight="1em" textAlign="center">
                  {document.attributes.name}
                </Text>
              </Box>
            </Box>
          </a>
        </Link>
      </Box>
      <Link variant="projectsDownloadButton" href={document.attributes.url}>
        <a target="_blank" rel="noreferrer noopener">
          <div>download icon</div>
        </a>
      </Link>
    </Box>
  );
}
