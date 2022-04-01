import { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import Footer from '../../footer'
import Header from '../../header'
import useViewport from '../../../hooks/useViewport'

export default function Layout(props) {

  const result = useViewport()
  const [isMobile, setIsMobile] = useState(null)

  useEffect(() => {
    setIsMobile(result[0])
  }, [isMobile])

  return (
    <Box>
      {!isMobile && <Header />}
      <main>
        <Box>
          {props.children}
        </Box>
      </main>
      {!isMobile && <Footer />}
    </Box>
  )
}
