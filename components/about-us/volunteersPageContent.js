import { useState, useEffect } from 'react'
import { Box } from "@chakra-ui/react"
import BoardMembers from './boardMembers'
import BeVolunteer from "./beVolunteer"
import Volunteers from "./volunteersList"
import Popup from '../ui/Popup'
import Image from 'next/image'
import useViewport from '../../hooks/useViewport'
import { changesForClosePopUp } from '../../helpers/domManipulations'

export default function VolunteersPageContent({ volunteers, members }) {

  const [isPopupShowing, setIsPopupShowing] = useState(false)
  const [popupInfo, setPopupInfo] = useState({
    picture: '/',
    name: '',
    country: '',
    bio: '',
    position: ''
  })

  const viewport = useViewport()
  const [isMobile, setIsMobile] = useState(null)

  function closePopUp() {
    setIsPopupShowing(false)
    changesForClosePopUp()
  }

  const title1 = `At Educación Diversa we rely on the goodwill of our volunteers to be able to provide the educational resources that we do. Every member of the Educación Diversa team donates their time and skills out of the goodness of their heart, including our CEO and the board. 
  We are motivated by the knowledge that our contributions are making a difference to the lives of many young people across the world. By enabling people to access education about these important topics we can help to inspire lasting change and create a more inclusive, accepting and tolerant society. Every volunteer’s experience is unique. We believe that volunteering is a mutually beneficial exchange so each person across our diverse community contributes depending on their individual skillset. Each individual gains something different from their volunteering experience, some thrive on being part of a community of like-minded people with whom they can share and develop ideas, others are driven by the knowledge that their efforts form a collective that as a whole has the capacity to create real and meaningful change. 
  Our CEO meets every volunteer to help find the best role for them in which they can make a valuable contribution to the aims of the organisation but also feel personally fulfilled through their efforts. Roles within the organisation are varied, we have illustrators, project managers, strategic planners and translators to name a few. You can choose to collaborate every now and again or take on a more regular role depending on your availability. All that we ask is that when you agree to a job, you deliver on that commitment.
  This is by no means an exhaustive list and if you feel that you could provide something of value to the organisation don’t hesitate to get in touch and we will work with you to find a position that suits your skillset.
  Follow us on social media to see what some of our past and current volunteers have to say about their experiences working with us: 
  Browse through our wonderful volunteers and get to know the people who keep our organisation running.`
  // const title2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  useEffect(() => {
    setIsMobile(viewport[0])
  }, [isMobile, viewport])

  return (
    <>
      <Box maxWidth={isMobile ? "90%" : "60%"} m="auto" textAlign="justify">
        <p dangerouslySetInnerHTML={{ __html: title1 }} />
        {/* <p><b>{title2}</b></p> */}
      </Box>
      <Box width="100%" height={isMobile ? "350px" : "600px"} position="relative" my="5%">
        <Image src="/images/static/volunteers/volunteersmap.jpg" layout="fill" objectFit="contain" alt="map" />
      </Box>
      <Volunteers isMobile={isMobile} volunteers={volunteers} setPopupInfo={setPopupInfo} setIsPopupShowing={setIsPopupShowing} />
      <BeVolunteer isMobile={isMobile} />
      <BoardMembers isMobile={isMobile} members={members} setPopupInfo={setPopupInfo} setIsPopupShowing={setIsPopupShowing} />
      <Popup isPopupShowing={isPopupShowing} closePopUp={closePopUp} popupInfo={popupInfo} isMobile={isMobile} />
    </>
  )
}

