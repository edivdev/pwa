import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import useTheme from '../../../hooks/useTheme'
import Image from 'next/image'
import Text from '../../ui/Text'
import {
  ListItem,
  ListIcon,
  List
} from '@chakra-ui/react'
import Button from '../../ui/Button'

export default function EducationPortalSection() {
  const theme = useTheme()

  return (
    <section>
      <Box bg={theme.colors.main.footer}>
        <Flex>
          <Box w="50%" p="5%">
            <Text color="white" variant="mainSubTitle">Learning Portal</Text>
            <Text color="white" variant="introSection">We believe in free education in these areas for everyone, regardless of your literacy level so we’re building a learning portal to ensure you all have FREE access.  It will include art-based activities aligned to objectives in the areas of Human Rights, Eliminating Gender-based violence and Bullying and Sexual and Reproductive Health Education.</Text>
            <Text color="white" variant="introSection">It plans to feature:</Text>
            <Image src="/images/static/assets/underline-title-red.png" width="72" height="16" alt="underline" />
            <List py="20px">
              <ListItem color="white" mb="8px"><Text variant="normal" color="white"><span style={{marginRight:'6px'}}>✅ </span>A safe space for children to explore and learn about these topics without having to encounter traumatic content</Text></ListItem>
              <ListItem color="white" mb="8px"><Text variant="normal" color="white"><span style={{marginRight:'6px'}}>✅ </span>Age appropriate activities aligned to topics that will engage and teach children about our areas of focus</Text></ListItem>
              <ListItem color="white" mb="8px"><Text variant="normal" color="white"><span style={{marginRight:'6px'}}>✅ </span>A space for people to contribute educational content and learn from peers through the generation and sharing of content in different artistic forms</Text></ListItem>
              <ListItem color="white" mb="8px"><Text variant="normal" color="white"><span style={{marginRight:'6px'}}>✅ </span>An academic library for people to access or donate articles specific to topics related to our areas of focus</Text></ListItem>
              <ListItem color="white" mb="8px"><Text variant="normal" color="white"><span style={{marginRight:'6px'}}>✅ </span>A resource library for teachers and parents to access good quality project methodologies and campaign materials to support teaching about these topics in an age-appropriate way.</Text></ListItem>
            </List>
            <Button
                variant="transparent"
                size="banner"
              >
                SEE MORE
              </Button>
          </Box>
          <Box w="50%">
            <Box display="flex" justifyContent="center" alignItems="center" h="100%">
              <Image style={{ margin: 'auto' }} src="https://via.placeholder.com/939x574" alt="asd" width="939" height="574" />
            </Box>
          </Box>
        </Flex>
      </Box>
    </section>
  )
}
