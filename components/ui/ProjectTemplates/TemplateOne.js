import { Box, Flex } from "@chakra-ui/react";
import Text from "../Text";
import PagesHeader from "../PagesHeader";
import Image from "next/image";
import Sdg from "./Sdg";

export default function TemplateOne({
  isMobile,
  background,
  title,
  campaignText,
  campaignPicture,
  contentOne,
  contentTwo,
  contentThree,
  pictures,
  sustainable_dev_goals,
}) {
  return (
    <section className="template-one">
      <PagesHeader background={background} />
      <Box p={isMobile ? "0 10px" : "0 100px"} pb="20px">
        <Box>
          <h1>
            <Text variant={isMobile ? "titleMobile" : "h1"}>{title}</Text>
          </h1>
        </Box>

        {contentOne && (
          <Flex
            flexDirection={isMobile ? "column" : "row"}
            justifyContent="space-between"
            p="10px 0"
          >
            <Box w={isMobile ? "auto" : "49%"}>
              <Box
                textAlign="justify"
                dangerouslySetInnerHTML={{ __html: contentOne }}
              />
            </Box>
            <Box w={isMobile ? "auto" : "49%"}>
              <Flex
                w={isMobile ? "95vw" : "auto"}
                h={isMobile ? "50vw" : "100%"}
                position="relative"
                m="1% 0"
                alignItems="center"
              >
                <Image
                  src={pictures.data[0].attributes.url}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </Flex>
            </Box>
          </Flex>
        )}

        {contentTwo && (
          <Box w="100%">
            <Box
              textAlign="justify"
              dangerouslySetInnerHTML={{ __html: contentTwo }}
            />
          </Box>
        )}

        {contentThree && (
          <Flex
            flexDirection={isMobile ? "column-reverse" : "row-reverse"}
            p="10px 0"
            justifyContent="space-between"
          >
            <Box w={isMobile ? "auto" : "49%"}>
              <Box
                textAlign="justify"
                dangerouslySetInnerHTML={{ __html: contentThree }}
              />
            </Box>
            <Box w={isMobile ? "auto" : "49%"}>
              <Flex
                w={isMobile ? "95vw" : "auto"}
                h={isMobile ? "50vw" : "100%"}
                position="relative"
                m="1% 0"
                alignItems="center"
              >
                <Image
                  src={pictures.data[1].attributes.url}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </Flex>
            </Box>
          </Flex>
        )}

        {campaignText && (
          <Box>
            <Box>
              <Box
                w={isMobile ? "95vw" : "auto"}
                h={isMobile ? "50vw" : "350px"}
                position="relative"
                m="1% 0"
              >
                <Image
                  src={campaignPicture.data.attributes.url}
                  alt="campaign-picture"
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
              <Box>
                <h2>The Campaign</h2>
              </Box>
              <Box
                textAlign="justify"
                dangerouslySetInnerHTML={{ __html: campaignText }}
              />
            </Box>

            <Flex
              w={isMobile ? "95vw" : "auto"}
              h={isMobile ? "50vw" : "500px"}
              position="relative"
              mt="2%"
              alignItems="center"
            >
              <Image
                src={pictures.data[2].attributes.url}
                alt=""
                layout="fill"
                objectFit="contain"
              />
            </Flex>
          </Box>
        )}

        {sustainable_dev_goals.data.length > 0 && (
          <Flex
            w={isMobile ? "95vw" : "auto%"}
            flexWrap="wrap"
            margin="auto"
            mt="20px"
          >
            {sustainable_dev_goals.data.map((sdvEl) => (
              <Sdg key={sdvEl.id} sdg={sdvEl} isMobile={isMobile} />
            ))}
          </Flex>
        )}
      </Box>
    </section>
  );
}
