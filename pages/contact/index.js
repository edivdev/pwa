import { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import Text from '../../components/ui/Text'
import SectionsTitle from '../../components/ui/SectionsTitle'
import ContactForm from '../../components/contact/contact-form'
import PagesHeader from '../../components/ui/PagesHeader'
import useViewport from '../../hooks/useViewport'

export default function ContactPage() {

  const viewport = useViewport()
  const [isMobile, setIsMobile] = useState(null)

  useEffect(() => {
    setIsMobile(viewport[0])
  }, [isMobile, viewport])

  return (
    <section>
      <PagesHeader
        background="/images/static/contact/header.jpg"
        text1="Contact Educacion Diversa"
        text2="4321 Street Name, City, ZIP Code"
        cta="educaciondiversa@gmail.com"
        ctaTarget="mailto:educaciondiversa@gmail.com"
      />
      <Box p="5%">
        <SectionsTitle title="Send us a Message" center />

        <Box w={isMobile ? "100%" : "60%"} display="block" m="auto">

          <Box display="flex" flexDirection="column" alignItems="center">
            <Text variant="normal">* required fields</Text>
            <ContactForm isMobile={isMobile} />
          </Box>
        </Box>

      </Box>
    </section>
  )
}
