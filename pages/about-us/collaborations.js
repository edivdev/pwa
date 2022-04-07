import PageChanger from '../../components/about-us/pageChanger'
import PagesHeader from '../../components/ui/PagesHeader'
import { Flex, Box } from '@chakra-ui/react'
import { collaborations } from '../../components/data/initialState'
import ImageCarousel from '../../components/ui/Slider'
import Image from 'next/image'
import Colaboration from '../../components/about-us/Colaboration'

export default function ColaborationsPage(props) {

  const elementstomap = props.colabs

  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 4,
    lazyLoad: true
  }


  return (
    <>
      <PagesHeader
        background="/images/static/backgrounds/BLUE_BACKGROUND.jpg"
        text0="educación diversa"
        text1="COLLABORATIONS"
      />
      <PageChanger />
      <Box h="200px" px="5%">
        <ImageCarousel settings={settings}>
          {elementstomap.map((element) => <Colaboration key={element.id} element={element} />)}
        </ImageCarousel>
      </Box>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      colabs: collaborations
    }
  }
}