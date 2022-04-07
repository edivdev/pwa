import { useState, useEffect } from 'react'
import { Box, Flex } from "@chakra-ui/react"
import Image from 'next/image'
import Text from "../ui/Text"
import VideoPopup from '../ui/Popup/VideoPopup'
import Goals from './Goals'
import useViewport from '../../hooks/useViewport'

export default function WhatWeDoPageContent() {

  const [isPopupShowing, setIsPopupShowing] = useState(false)
  const [popupInfo, setPopupInfo] = useState('')
  const [isMobile, setIsMobile] = useState(null)

  const viewport = useViewport()

  function openPopup() {
    setIsPopupShowing(true)
    setPopupInfo(ytIframe)
  }
  function closePopUp() {
    setIsPopupShowing(false)
  }

  useEffect(() => {
    setIsMobile(viewport[0])
  }, [isMobile, viewport])

  const initialContent = `At Educación Diversa we are dedicated to creating a world in which everyone has the opportunity to reach their full potential. We provide free inclusive art-based education in the areas of human rights, sexual and reproductive health and the elimination of violence.
  <br/><br/>
  We're striving to close the inequality gap in education around the world and provide people with the information they need to make good decisions about their bodies and lives. We aim to educate people in the sustainable development goals, in doing so we hope to achieve gender equality. We provide educational materials relating to our three pillars, to community schools and organisations, and large businesses to find solutions so people can access our learning materials and engage with them artistically.
  <br/><br/>
  We create educational packages, campaigns and learning resources to equip people in underdeveloped communities around the world who do not readily have access to this type of information, with vital knowledge, completely free of charge.
  <br/><br/>
  As much of our work is created with underdeveloped countries in mind, the focus on art, aims to ensure that our resources are accessible to all irrespective of literacy levels. Art is also proven to have therapeutic benefits, so our resources also help to support the mental health of the young people, particularly those living in areas of conflict and those who have been affected by traumas.
  <br/><br/>
  We are also working to change attitudes towards gender roles in society. We empower women and girls to speak up for their rights, and crucially we engage men and boys in the fight to eliminate gender based violence and femicide. 
  `


  const ytIframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/l_E2g0bw6dI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

  return (
    <>
      <Box maxWidth={isMobile ? "90%" : "60%"} m="0 auto" py={isMobile ? "0" : "5%"}>
        <Text dangerouslySetInnerHTML={{ __html: initialContent }} />
      </Box>
      <Flex backgroundImage="/images/static/backgrounds/BACKGROUND-blog.jpg" px="5%" flexDirection={isMobile ? "column" : "row"}>
        <Box w={isMobile ? "100%" : "50%"} px="8%">
          <Box w="auto" h={isMobile ? "350px" : "610px"} position="relative">
            <Image src="/images/static/about/LaurenVideo.jpg" objectFit="contain" layout="fill" className="hoverable" onClick={openPopup} alt="video-poster" />
          </Box>
        </Box>
        <Box w={isMobile ? "100%" : "50%"}>
          <Flex flexDirection="column" p="5%" h="100%" justifyContent="center">
            <Text fontWeight="900" fontSize="25px">Lauren Cannell</Text>
            <Text pt="2%" pb="5%" fontSize="15px">Founder and CEO</Text>
            <Text variant="normal">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br />Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum”.

            </Text>
          </Flex>
        </Box>
      </Flex>
      <Goals isMobile={isMobile} />
      <VideoPopup isPopupShowing={isPopupShowing} closePopUp={closePopUp} popupInfo={popupInfo} />
    </>
  )
}
