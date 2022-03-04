
import { Box } from '@chakra-ui/react'
import Footer from '../../footer'
import Header from '../../header'

export default function Layout(props) {
  return (
    <Box>
      <Header />
      <main>
        <Box>
          {props.children}
        </Box>
      </main>
      <Footer />
    </Box>
  )
}
