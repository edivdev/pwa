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

export default function MembershipPlan({ isMobile }) {
  const theme = useTheme()

  return (
    <section>
      <Box backgroundImage='/images/static/backgrounds/light_blue_background.jpg'>
        <Flex flexDirection={isMobile ? "column" : "row"}>
          <Box w={isMobile ? "100%" : "50%"} p="5%">
            <Text color="white" variant="mainSubTitle">Membership Program</Text>
            <Text color="white" variant="introSection">
              <p>When you sign up to help us, you’ll also get access to:</p>
            </Text>

            <Image src="/images/static/assets/underline-title-red.png" width="72" height="16" alt="underline" />
            <List py="20px">
              <ListItem color="white" mb="8px"><Text variant="normal" color="white"><span style={{ marginRight: '6px' }}>✅ </span>Our bi-monthly research newsletter with documents related to recent events.</Text></ListItem>
              <ListItem color="white" mb="8px"><Text variant="normal" color="white"><span style={{ marginRight: '6px' }}>✅ </span>A quarterly newsletter that gives you updates to what the collective have been up to.</Text></ListItem>
              <ListItem color="white" mb="8px"><Text variant="normal" color="white"><span style={{ marginRight: '6px' }}>✅ </span>Voting rights at the Annual General Meeting.</Text></ListItem>
              <ListItem color="white" mb="8px"><Text variant="normal" color="white"><span style={{ marginRight: '6px' }}>✅ </span>Help Educacion Diversa Inc. in continue to create volunteering opportunities for people all over the world, creating a global network of connected volunteers with the same vision to work together to break the cycle of poverty through providing art-based inclusive education to people in underdeveloped countries with the hope that they can make better decisions about their bodies and lives.</Text></ListItem>
              <ListItem color="white" mb="8px"><Text variant="normal" color="white"><span style={{ marginRight: '6px' }}>✅ </span>A digital copy of our Spanish Children’s version of the Convention on the Rights of the Child.</Text></ListItem>
              <ListItem color="white" mb="8px"><Text variant="normal" color="white"><span style={{ marginRight: '6px' }}>✅ </span>A Women’s or Girls Empowerment digital colouring in book when it’s launched later this year.</Text></ListItem>
              <ListItem color="white" mb="8px"><Text variant="normal" color="white"><span style={{ marginRight: '6px' }}>✅ </span>Free access to the Learning Platform when in launches in 2023.</Text></ListItem>
            </List>
            {/* <Button
              variant="transparent"
              size="banner"
            >
              SEE MORE
            </Button> */}
          </Box>
          <Box w={isMobile ? "100%" : "50%"} p="5%">
            <Box display="flex" justifyContent="center" alignItems="center" h="100%">
              <Image style={{ margin: 'auto' }} src="/images/static/home/home-main.png" alt="asd" width={904} height={860} />
            </Box>
          </Box>
        </Flex>
      </Box>
    </section>
  )
}
