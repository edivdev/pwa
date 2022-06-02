import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import SectionsTitle from '../ui/SectionsTitle'
import Goal from './Goal'

export default function Goals({ isMobile, goals }) {

  if (isMobile) {
    return (
      <section>
        <Box pt="5%">
          <SectionsTitle title="Goals" center />
          <Box display="flex" overflowX="scroll" h="400px">
            {goals.map((goal) => <Goal key={goal.id} minWidth="285px" goal={goal.goal} num={goal.id} pic={goal.pic} />)}
          </Box>
        </Box>
      </section>
    )
  }
  return (
    <section>
      <Box py="5%">
        <SectionsTitle title="Goals" center />
        <Flex flexWrap="wrap" justifyContent="center">
          {goals.map((goal) => <Goal key={goal.id} goal={goal.goal} num={goal.id} pic={goal.pic} />)}
        </Flex>
      </Box>
    </section>
  )
}
