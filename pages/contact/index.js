import { Box } from '@chakra-ui/react'
import Text from '../../components/ui/Text'
import SectionsTitle from '../../components/ui/SectionsTitle'
import ContactForm from '../../components/contact/ContactForm'
import PagesHeader from '../../components/ui/PagesHeader'
import Button from '../../components/ui/Button'

export default function contactPage() {
  
  return (
    <section>
      <PagesHeader
        background="/images/static/contact/header.jpg"
        text1="Contact Educacion Diversa"
        text2="4321 Street Name, City, ZIP Code"
        cta="educaciondiversa@gmail.com"
        ctaTarget="mailto:educaciondiversa@gmail.com"
      />
      <Box px="5%">
        <SectionsTitle title="Send us a Message" center/>

        <Box w="60%" display="block" m="auto">

          <Box display="flex" flexDirection="column" alignItems="center">
            <Text variant="normal">* required fields</Text>
            <ContactForm />
          </Box>
        </Box>

      </Box>
    </section>
  )
}
