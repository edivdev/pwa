import { Box, Flex } from '@chakra-ui/react'

import VolunteerCard from './volunteer-card'
import Text from '../ui/Text'
import ImageCarousel from '../ui/Slider'

export default function VolunteersList({ volunteers, setPopupInfo, setIsPopupShowing }) {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 7,
    arrows: false,
    slidesToScroll: 7,
    lazyLoad: true
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
