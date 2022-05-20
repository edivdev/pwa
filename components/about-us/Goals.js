import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import SectionsTitle from '../ui/SectionsTitle'
import Goal from './Goal'

export default function Goals({ isMobile }) {

  const goal1 = `Educate children and adolescents about important topics to enable them to navigate and be part of healthy, safe and respectful relationships in society.`
  const goal2 = `Reduce child sexual abuse, adolescent unplanned pregnancies, STIs and HIV in underdeveloped countries by providing access to good quality sexual and reproductive health education resources that are fun and engaging.`
  const goal3 = `Influence changes in government policies across the world by teaching children about their rights and equipping them with the skills to campaign for change to their local leaders.`
  const goal4 = `Create inclusive societies by educating people about the importance of diversity and equality and the benefits of inclusive environments.`
  const goal5 = `Advocate for the elimination of violence against women by providing free education programmes and resources and raising awareness through digital campaigns across the world.`
  const goal6 = `Promote peaceful conflict resolution by giving free information and activity sheets that support teaching well-being, mindfullness and self-care for people living in communities where conflict has been normalised.`
  const goal7 = `Engage people to engage in diverse topics using art to ensure our materials are inclusive and accessible to as many people as possble, regardless of socio-economic status or academic ability.`
  const goal8 = `Contribute to the Sustainable Development Goals by providing age appropriate educational information and activities to gain interest about them from children earlier with the hope that they are able to take the action needed to save our planet!`

  if (isMobile) {
    return (
      <section>
        <Box pt="5%">
          <SectionsTitle title="Goals" center />
          <Box display="flex" overflowX="scroll" h="400px">
            <Goal minWidth="285px" goal={goal1} num={1} />
            <Goal minWidth="285px" goal={goal2} num={2} />
            <Goal minWidth="285px" goal={goal3} num={3} />
            <Goal minWidth="285px" goal={goal4} num={4} />
            <Goal minWidth="285px" goal={goal5} num={5} />
            <Goal minWidth="285px" goal={goal6} num={6} />
            <Goal minWidth="285px" goal={goal7} num={7} />
            <Goal minWidth="285px" goal={goal8} num={8} />
          </Box>
        </Box>
      </section>
    )
  }
  return (
    <section>
      <Box pt="5%">
        <SectionsTitle title="Goals" center />
        <Flex flexWrap="wrap" justifyContent="center">
          <Goal goal={goal1} num={1} />
          <Goal goal={goal2} num={2} />
          <Goal goal={goal3} num={3} />
          <Goal goal={goal4} num={4} />
          <Goal goal={goal5} num={5} />
          <Goal goal={goal6} num={6} />
          <Goal goal={goal7} num={7} />
          <Goal goal={goal8} num={8} />
        </Flex>
      </Box>
    </section>
  )
}
