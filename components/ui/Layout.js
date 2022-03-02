
import { Box } from '@chakra-ui/react'
import Footer from '../footer'
import Header from '../header'

export default function Layout(props) {
  return (
    <>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </>
  )
}
