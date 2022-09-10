import { Box, Flex } from "@chakra-ui/react";
import Text from "../Text";
import PagesHeader from "../PagesHeader";
import Image from "next/image";
import Sdg from "./Sdg";
import ProjectResources from "../../project/ProjectResources";
import ProjectSlider from "../../project/ProjectSlider";

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
  documents,
  contentDownload,
}) {
  const principalImage =
    campaignPicture.data === null ? null : campaignPicture.data;

  const SliderSettings = {
    infinite: true,
    dots: false,
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 1,
    lazyLoad: true,
  };

  return (
    <section className="template-one">
      <PagesHeader background={background} />
      <Flex
        flexDirection={isMobile ? "column" : "row"}
        p={isMobile ? "2%" : "2% 100px"}
        justifyContent="space-between"
      >
        <Flex
          //downloads block
          w={isMobile ? "100%" : "32%"}
          flexWrap="wrap"
          justifyContent={isMobile ? "space-around" : "space-between"}
          order={isMobile ? 2 : 0}
          m="5px 0"
          p="3px"
        >
          <div
            style={{
              // backgroundColor: "red",
              height: "100px",
              padding: "10px",
              maxWidth: "230px",
            }}
          >
            {contentDownload.data !== null && (
              <ProjectResources document={contentDownload.data} />
            )}
          </div>

          <ProjectSlider isMobile={isMobile} settings={SliderSettings}>
            {documents.data !== null &&
              documents.data.map((document) => (
                <ProjectResources key={document.id} document={document} />
              ))}
          </ProjectSlider>
        </Flex>

        <Box
          // sustainable dev goals block
          h="100%"
          w={isMobile ? "72%" : "23%"}
          order={isMobile ? 1 : 0}
          m="5px auto"
        >
          {sustainable_dev_goals.data.length > 0 && (
            <Flex flexWrap="wrap" alignItems="center" justifyContent="center">
              {sustainable_dev_goals.data.map((sdvEl) => (
                <Sdg key={sdvEl.id} sdg={sdvEl} isMobile={isMobile} />
              ))}
            </Flex>
          )}
        </Box>

        <Box
          // currentLocation
          h="100%"
          w={isMobile ? "100%" : "34%"}
          order={isMobile ? -1 : 3}
          m="5px 0"
        >
          {/* TODO refacrtor into Box schema */}
          <div
            style={{
              display: "flex",
              fontSize: isMobile ? "8px" : "12px",
              justifyContent: isMobile ? "flex-start" : "flex-end",
              alignItems: "center",
            }}
          >
            <div
              style={{ marginRight: "12px" }}
            >{`${department.data.attributes.name}`}</div>
            <div style={{ marginRight: "12px" }}>
              <b>{`${category.data.attributes.title.toLowerCase()}`}</b>
            </div>
            {/* <div style={{ marginRight: "12px" }}>{title}</div> */}
          </div>
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

        <Box textAlign="center">
          {principalImage !== null && (
            <Image
              src={principalImage.attributes.url}
              alt={principalImage.attributes.name}
              width={principalImage.attributes.width}
              height={principalImage.attributes.height}
            />
          )}
        </Box>

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

        {/* {pictures !== null ? <Box>component with pictures</Box> : null} */}
      </Box>
    </section>
  );
}
