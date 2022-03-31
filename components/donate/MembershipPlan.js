import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import useTheme from '../../hooks/useTheme'
import Image from 'next/image'
import Text from '../ui/Text'
import {
  ListItem,
  ListIcon,
  List
} from '@chakra-ui/react'

export default function MembershipPlan() {
  const theme = useTheme()

  return (
    <section>
      <Box backgroundImage='/images/static/backgrounds/light_blue_background.jpg'>
        <Flex>
          <Box w="50%" p="5%">
            <Text color="white" variant="mainSubTitle">Membership Plan</Text>
            <Text color="white" variant="introSection">Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua</Text>

            <Image src="/images/static/assets/underline-title-red.png" width="72" height="16" alt="underline" />
            <List py="20px">
              <ListItem color="white" mb="8px"><Text variant="normal" color="white"><span style={{ marginRight: '6px' }}>✅ </span>A safe space for children to explore and learn about these topics without having to encounter traumatic content</Text></ListItem>
              <ListItem color="white" mb="8px"><Text variant="normal" color="white"><span style={{ marginRight: '6px' }}>✅ </span>Age appropriate activities aligned to topics that will engage and teach children about our areas of focus</Text></ListItem>
              <ListItem color="white" mb="8px"><Text variant="normal" color="white"><span style={{ marginRight: '6px' }}>✅ </span>A space for people to contribute educational content and learn from peers through the generation and sharing of content in different artistic forms</Text></ListItem>
              <ListItem color="white" mb="8px"><Text variant="normal" color="white"><span style={{ marginRight: '6px' }}>✅ </span>An academic library for people to access or donate articles specific to topics related to our areas of focus</Text></ListItem>
              <ListItem color="white" mb="8px"><Text variant="normal" color="white"><span style={{ marginRight: '6px' }}>✅ </span>A resource library for teachers and parents to access good quality project methodologies and campaign materials to support teaching about these topics in an age-appropriate way.</Text></ListItem>
            </List>
            {/* <Button
              variant="transparent"
              size="banner"
            >
              SEE MORE
            </Button> */}
          </Box>
          <Box w="50%">
            <Box display="flex" justifyContent="center" alignItems="center" h="100%">
              <Image style={{ margin: 'auto' }} src="/images/static/home/home-main.png" alt="asd" width={904} height={860} />
            </Box>
          </Box>
        </Flex>
      </Box>
    </section>
  )
}
