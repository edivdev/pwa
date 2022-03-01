import { ChakraProvider } from '@chakra-ui/react'
import theme from '../components/theme'
import Header from '../components/data/header/Header'
import Footer from '../components/Footer'
import '@fontsource/quicksand'
import '@fontsource/just-another-hand'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp