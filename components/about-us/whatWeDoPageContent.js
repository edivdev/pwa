import { useState, useEffect } from 'react'
import { Box, Flex } from "@chakra-ui/react"
import Image from 'next/image'
import Text from "../ui/Text"
import VideoPopup from '../ui/Popup/VideoPopup'
import useViewport from '../../hooks/useViewport'

export default function WhatWeDoPageContent({ goals }) {

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

  const EdJourney = `
  My name’s Lauren Cannell and I’m the founder of Educacion Diversa.  Educacion Diversa is a volunteer-led international not for profit based out of Australia.  It creates a community of like minded people and we were established by connecting volunteers from across the world to work together to provide art-based inclusive education in diverse topics to people in lower socio-economic communities to ensure they have the information they need to make healthy decisions about their lives and bodies.<br/></br>
  Let’s go back to where it started……I first fell in love with Colombia when I met the love of my life Jose!  Why Colombia? Because that’s where my journey to seek happiness through humanitarian work started!<br/><br/>
  When I went back to Colombia to marry my husband in 2010, I quit my high-end business consulting work and decided to volunteer with Tiempo de Juego Foundation in Cazuca, Soacha, in the far South of Bogota. It was here I experienced the feeling of deep sadness, seeing the people I had grown to love losing access to opportunities, simply because they weren’t educated in areas that help them make big life decisions.  It’s like they lost their chance before even being given one.  I saw kids living in a cycle of extreme poverty first hand, with little access to education… young mothers, still children themselves, raising families in terribly difficult conditions. And it got me thinking… how can we get vital messages to these communities about human rights, the importanve of eliminating violence and resolving it peacefully and the age appropriate messages about sexual and reproductive health in a way that respects their culture, is inclusive and not reliant on literacy and at the same time empowers people to seek change.<br/><br/>
  In 2011 we returned to Australia and in 2014 we gave birth to our first child.  It was after visiting Colombia in 2014, we decided to leave our jobs and pack up and take our daughter back to Jose’s homeland so she could experience her Colombian culture. I had been working in schools as a sexual and reproducitve health educator and also with children with intellectual disabilities teaching the sexuality and social skills and I wanted to share my skills with children and adolescents in Colombia.<br/><br/>
  When we were there we worked hard to build relationships with other people and organisations who had knowledge and experience to help us to realise our vision.  We piloted our workshops by delivering them to community organisations and adolescents in lower socio-economic communities across Colombia including indigenous communities and these fundamental partnerships still to this day help us and support us as we continue to grow.<br/><br/>
  Initially Educacion Diversa focused on the development of a series of workshops centred around three fundamental aims - to promote human rights, sexual health education and the prevention of violence and bullying. We also launched campaigns to raise awareness about violence against women, like  ‘In her shoes’ which remains one of our flagship campaigns to this day.<br/><br/>
  In 2018 the time came for us to move back to Australia and Educacion Diversa was put on the back burner while we added another little one to our family.  I then had some health complications and took a bit of a break to get well and get back on track and then finally a group of children from Bolivia called Los Trovadorcitos saw an old post about our Children’s Rights book and asked us if we could work together on a project.  They were in quarantine due to COVID and hadn’t been to school for about a year and they wanted to work with me to showcase children’s rights.  With that we launched Respect My Rights and then when realising the global problem of children missing school, we relaunched ED as a digital platform.<br/><br/>
  The desire to create real, impactful change in these areas never left us though, and it was time to reawaken this dream.<br/><br/>
  Fast forward to now, about 1 year and a bit after the relaunch, we grew to an international community of over 100 incredible volunteers from at least 34 countries across the world and they fill roles from The board, an artists, designers, researcher right through to teachers and lawyers.  What we’re trying to say is if you want experience or to share your skills and time there is a place in our collective for everyone. If you're someone who shares our vision, please get in touch and be part of where this next chapter takes us!
  ` 

  const videoWidth = isMobile ? 390 : 560
  const videHeight = isMobile ? 219 : 315

  const ytIframe = `<iframe width=${videoWidth} height=${videHeight} src="https://www.youtube.com/embed/l_E2g0bw6dI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

  return (
    <>
      <Box maxWidth={isMobile ? "90%" : "60%"} m="0 auto" p={isMobile ? "1% 0 5% 0" : "5% 0"}>
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
            
            <Box h="430px" overflow="hidden" overflowY="scroll" px="14px"> 
              <Text fontSize="16" textAlign="justify" dangerouslySetInnerHTML={{ __html: EdJourney}}/>
            </Box>
            
          </Flex>
        </Box>
      </Flex>
      <VideoPopup isPopupShowing={isPopupShowing} closePopUp={closePopUp} popupInfo={popupInfo} isMobile={isMobile} />
    </>
  )
}
