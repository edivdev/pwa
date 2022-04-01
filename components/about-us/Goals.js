import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import SectionsTitle from '../ui/SectionsTitle'
import Goal from './Goal'

export default function Goals() {

  const goal1 = `Educate children and adolescents about important topics to enable them to navigate and be part of healthy, safe and respectful relationships in society.`
  const goal2 = `Reduce child sexual abuse, adolescent unplanned pregnancies, STIs and HIV in underdeveloped countries by providing access to good quality sexual and reproductive health education resources that are fun and engaging.`
  const goal3 = `Influence changes in government policies across the world by teaching children about their rights and equipping them with the skills to campaign for change to their local leaders.`
  const goal4 = `Create inclusive societies by educating people about the importance of diversity and equality and the benefits of inclusive environments.`
  const goal5 = `Advocate for the elimination of violence against women by providing free education programmes and resources and raising awareness through digital campaigns across the world.`

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
        </Flex>
      </Box>
    </section>
  )
}
