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
          <Box w="60%" py="120px" px="5%">
            <Text color="white" variant="sectionSubtitle">Learning Portal</Text>
            <Text color="white" variant="introSection">We believe in free education in these areas for everyone, regardless of your literacy level so we’re building a learning portal to ensure you all have FREE access.  It will include art-based activities aligned to objectives in the areas of Human Rights, Eliminating Gender-based violence and Bullying and Sexual and Reproductive Health Education.</Text>
            <Text color="white" variant="introSection">It plans to feature:</Text>
            <List py="20px">
              <ListItem color="white" fontSize="20px" mb="8px"><span style={{marginRight:'6px'}}>✅ </span>A safe space for children to explore and learn about these topics without having to encounter traumatic content</ListItem>
              <ListItem color="white" fontSize="20px" mb="8px"><span style={{marginRight:'6px'}}>✅ </span>Age appropriate activities aligned to topics that will engage and teach children about our areas of focus</ListItem>
              <ListItem color="white" fontSize="20px" mb="8px"><span style={{marginRight:'6px'}}>✅ </span>A space for people to contribute educational content and learn from peers through the generation and sharing of content in different artistic forms</ListItem>
              <ListItem color="white" fontSize="20px" mb="8px"><span style={{marginRight:'6px'}}>✅ </span>An academic library for people to access or donate articles specific to topics related to our areas of focus</ListItem>
              <ListItem color="white" fontSize="20px" mb="8px"><span style={{marginRight:'6px'}}>✅ </span>A resource library for teachers and parents to access good quality project methodologies and campaign materials to support teaching about these topics in an age-appropriate way.</ListItem>
            </List>
            <Button
                variant="transparent"
                size="normal"
              >
                SEE MORE
              </Button>
          </Box>
          <Box w="40%" py="120px">
            <Box>
              <Image style={{ margin: 'auto' }} src="https://via.placeholder.com/939x574" alt="asd" width="939" height="574" />
            </Box>
          </Box>
        </Flex>
      </Box>
    </section>
  )
}
