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
  department,
  category,
  subtitle,
}) {
  return (
    <section className="template-one">
      <PagesHeader background={background} />
      <Flex flexDirection={isMobile ? "column" : "row"}>
        <Flex p="2%" w="100vw" alignItems="center">
          {/* <Box>
              <ul
                style={{
                  display: "flex",
                  fontSize: isMobile ? "8px" : "inherit",
                }}
              >
                <li>{`${department.data.attributes.name}`}</li>
                <li>{`${category.data.attributes.title.toLowerCase()}`}</li>
                <li>{title}</li>
              </ul>
            </Box> */}
        </Flex>

        <Box p="2% 100px">
          {" "}
          {sustainable_dev_goals.data.length > 0 && (
            <Flex w={isMobile ? "auto" : "auto"} margin="auto">
              {sustainable_dev_goals.data.map((sdvEl) => (
                <Sdg key={sdvEl.id} sdg={sdvEl} isMobile={isMobile} />
              ))}
            </Flex>
          )}
        </Box>
      </Flex>

      <Box p={isMobile ? "0 10px" : "0 100px"} pb="20px">
        <Box pb="20px">
          <h1>
            <Text variant={isMobile ? "titleMobile" : "h1"}>{title}</Text>
          </h1>
        </Box>
        {campaignText && (
          <Box>
            <Box
              textAlign="justify"
              dangerouslySetInnerHTML={{ __html: campaignText }}
            />
          </Box>
        )}

        {subtitle && (
          <Box>
            <h2>
              <Text variant={isMobile ? "titleMobile" : "h2"}>{subtitle}</Text>
            </h2>
          </Box>
        )}

        {contentOne && (
          <Box>
            <Box
              textAlign="justify"
              dangerouslySetInnerHTML={{ __html: contentOne }}
            />
          </Box>
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
          <Box w="100%">
            <Box
              textAlign="justify"
              dangerouslySetInnerHTML={{ __html: contentThree }}
            />
          </Box>
        )}

        {/*pictures.data !== null && (
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
            )}
          </Box>
        )} */}
      </Box>
    </section>
  );
}

// li:before {
//   content: "\f00c"; /* FontAwesome Unicode */
//   font-family: FontAwesome;
//   display: inline-block;
//   margin-left: -1.3em; /* same as padding-left set on li */
//   width: 1.3em; /* same as padding-left set on li */
// }
