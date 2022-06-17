import { useState, useEffect } from 'react'
import PageChanger from '../../components/about-us/pageChanger'
import PagesHeader from '../../components/ui/PagesHeader'
import { Box } from '@chakra-ui/react'
import { collaborations, goals } from '../../components/data/initialState'
import ImageCarousel from '../../components/ui/Slider'
import Colaboration from '../../components/about-us/Colaboration'
import useViewport from '../../hooks/useViewport'
import Goals from '../../components/about-us/Goals'

export default function ColaborationsPage(props) {

  const viewport = useViewport()
  const [isMobile, setIsMobile] = useState(null)

  useEffect(() => {
    setIsMobile(viewport[0])
  }, [isMobile, viewport])

  const elementstomap = props.colabs

  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 4,
    lazyLoad: true
  }

  const mobileSettings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    lazyLoad: true
  }


  return (
    <>
      <PagesHeader
        background="/images/static/backgrounds/BLUE_BACKGROUND.jpg"
        text0="educación diversa"
        text1="OUR DEPARTMENTS"
      />
      <PageChanger />
      
      <Goals isMobile={isMobile} goals={goals} />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      colabs: collaborations,
      goals: goals
    }
  }
}
