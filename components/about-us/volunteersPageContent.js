import { useState } from 'react'
import { Box } from "@chakra-ui/react"
import BoardMembers from './boardMembers'
import BeVolunteer from "./beVolunteer"
import Volunteers from "./volunteersList"
import Popup from '../ui/Popup'
import Image from 'next/image'

export default function VolunteersPageContent({ volunteers, members }) {

  const [isPopupShowing, setIsPopupShowing] = useState(false)
  const [popupInfo, setPopupInfo] = useState({
    picture: '/',
    name: '',
    country: '',
    bio: '',
    position: ''
  })

  function closePopUp() {
    setIsPopupShowing(false)
  }

  const title1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  const title2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  return (
    <>
      <Box maxWidth="60%" m="auto">
        <p>{title1}</p>
        <p><b>{title2}</b></p>
      </Box>
      <Box width="100%" height="600px" position="relative" my="5%">
        <Image src="/images/static/volunteers/volunteersmap.jpg" layout="fill" objectFit="contain" />
      </Box>
      <Volunteers volunteers={volunteers} setPopupInfo={setPopupInfo} setIsPopupShowing={setIsPopupShowing} />
      <BeVolunteer />
      <BoardMembers members={members} setPopupInfo={setPopupInfo} setIsPopupShowing={setIsPopupShowing} />
      <Popup isPopupShowing={isPopupShowing} closePopUp={closePopUp} popupInfo={popupInfo} />
    </>
  )
}

