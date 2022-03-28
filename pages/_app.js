import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../components/theme'
import '@fontsource/quicksand'
import '@fontsource/just-another-hand'
import Layout from '../components/ui/Layout'
import '../styles/styles.css'

function MyApp({ Component, pageProps }) {
  const [scrollPos, setScrollPos] = useState(0)
  return (

    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>

  )
}

export default MyApp