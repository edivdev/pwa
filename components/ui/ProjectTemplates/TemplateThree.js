import { Box, Flex } from "@chakra-ui/react";
import Text from "../Text";
import PagesHeader from "../PagesHeader";
import Image from "next/image";
import Sdg from "./Sdg";
import ProjectResources from "../../project/ProjectResources";
import ProjectSlider from "../../project/ProjectSlider";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useEffect, useState } from "react";
import PetitionForm from "../../petition/petition-form";

const sortSdg = (goals) => {
  return goals.sort((a, b) => a.id - b.id);
};

const preparePicturesForLightbox = (picsObj) => {
  let pictures = [];

  picsObj.data.map((el) => {
    let obj = {};
    obj.src = el.attributes.url;
    pictures.push(obj);
  });

  return pictures;
};

export default function TemplateThree({
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
  showing_form_pledge,
}) {
  const principalImage =
    campaignPicture.data === null ? null : campaignPicture.data;

  const SliderSettings = {
    infinite: true,
    dots: false,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    lazyLoad: true,
  };

  const openLightbox = () => {
    setIsOpenLightbox(true);
  };

  const [isOpenLightbox, setIsOpenLightbox] = useState(false);

  return (
    <section className="custom-template">
      {/* {console.log(pictures.data === null ? "nohay" : "hay", pictures)} */}
      <PagesHeader background={background} projectTitle={title} />
      <Flex p={isMobile ? "2%" : "2% 100px"}>
        <Box w="full">
          <Box
          // backgroundColor="lightblue"
          >
            <Box>
              <Text fontWeight="800">
                {`${category.data.attributes.title}`}
              </Text>
              <Text
                textTransform="uppercase"
                fontSize="30px"
                fontWeight="800"
              >{`${department.data.attributes.name}`}</Text>

              {/* <div style={{ marginRight: "12px" }}>{title}</div> */}
            </Box>
          </Box>

          <Box bg="" display="flex" flexWrap="wrap" mt="15px">
            {sustainable_dev_goals.data.length > 0
              ? sortSdg(sustainable_dev_goals.data).map((sdvEl) => (
                  <Sdg key={sdvEl.id} sdg={sdvEl} isMobile={isMobile} />
                ))
              : null}
          </Box>
        </Box>

        {/* <Flex
          mt="20px"
          maxH="290px"
          flexDirection="column"
          minW="156px"
          justifyContent="center"
          //downloads block
          // bg="red"
        >
          <Box>
            {contentDownload.data !== null && (
              <ProjectResources document={contentDownload.data} />
            )}
          </Box>

          <ProjectSlider isMobile={isMobile} settings={SliderSettings}>
            {documents.data !== null &&
              documents.data.map((document) => (
                <ProjectResources key={document.id} document={document} />
              ))}
          </ProjectSlider>
        </Flex> */}
      </Flex>

      <>
        <Box p={isMobile ? "0 10px" : "0 100px"} pb="20px">
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
                <Text variant={isMobile ? "titleMobile" : "h2"}>
                  {subtitle}
                </Text>
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

          {pictures ? (
            <Flex>
              <Flex bg="" w="100%">
                {pictures.data?.map((el) => {
                  return (
                    <Box
                      key={el.id}
                      w="300px"
                      h="100px"
                      bg=""
                      m="10px"
                      position="relative"
                      onClick={() => setIsOpenLightbox(true)}
                      cursor="pointer"
                    >
                      <Image
                        src={el.attributes.url}
                        alt={el.attributes.name}
                        layout="fill"
                        objectFit="contain"
                      />
                    </Box>
                  );
                })}
              </Flex>

              {isOpenLightbox ? (
                <Lightbox
                  open={openLightbox}
                  close={() => setIsOpenLightbox(false)}
                  slides={preparePicturesForLightbox(pictures)}
                />
              ) : null}
            </Flex>
          ) : null}

          <Flex
            mt="20px"
            maxH="290px"
            flexDirection="column"
            minW="156px"
            justifyContent="center"
            //downloads block
            // bg="red"
          >
            <Box>
              {contentDownload.data !== null && (
                <ProjectResources document={contentDownload.data} />
              )}
            </Box>

            <ProjectSlider isMobile={isMobile} settings={SliderSettings}>
              {documents.data !== null &&
                documents.data.map((document) => (
                  <ProjectResources key={document.id} document={document} />
                ))}
            </ProjectSlider>
          </Flex>

          {/* {pictures !== null ? <Box>component with pictures</Box> : null} */}
        </Box>
        {showing_form_pledge && (
          <PetitionForm isMobile={isMobile}></PetitionForm>
        )}
      </>
    </section>
  );
}
