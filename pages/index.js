import React from 'react'
import { Box } from '@chakra-ui/react'
import MainHeader from '../components/MainHeader'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

const index = () => {
  return (
    <>
    <Box bg='tomato' w='100%' p={4} color='white' p="0 17%" height="100vh" overflow="hidden" overflowY="scroll">
      <MainHeader />
      <Projects />
    </Box>
    <Footer />
    </>
  )
}

export default index
