
import { Box } from '@chakra-ui/react'
import Footer from '../Footer'
import Header from '../header/Header'

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
