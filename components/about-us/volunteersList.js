import { Box, Flex } from '@chakra-ui/react'

import VolunteerCard from './volunteerCard'
import Text from '../ui/Text'
import ImageCarousel from '../ui/Slider'

export default function VolunteersList({ isMobile, volunteers, setPopupInfo, setIsPopupShowing }) {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 6,
    arrows: false,
    slidesToScroll: 6,
    lazyLoad: true
  }

  const mobileSettings = {
    infinite: true,
    dots: true,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 4,
    lazyLoad: true
  }

  if (isMobile) {
    return (
      <section>
        <Box my="50px" textAlign="center" px="20px">
          <Text fontWeight="900" fontSize="25px">Our Volunteers</Text>
          <Box display="flex" overflowX="scroll">
            {volunteers.map((volunteer) => (
              <VolunteerCard mr="10px" volunteer={volunteer} key={volunteer.name} setPopupInfo={setPopupInfo} setIsPopupShowing={setIsPopupShowing} />
            ))}
          </Box>
        </Box>
      </section>
    )
  }

  return (
    <section>
      <Box my="50px" textAlign="center" px="20px">
        <Text fontWeight="900" fontSize="25px">Our Volunteers</Text>
        <ImageCarousel settings={settings}>
          {volunteers.map((volunteer) => (
            <VolunteerCard volunteer={volunteer} key={volunteer.name} setPopupInfo={setPopupInfo} setIsPopupShowing={setIsPopupShowing} />
          ))}
        </ImageCarousel>
      </Box>
    </section>
  )
}
