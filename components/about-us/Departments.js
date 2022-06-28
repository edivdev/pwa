import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import SectionsTitle from '../ui/SectionsTitle'
import Department from './Department'

export default function Departments({ isMobile, departments }) {

  if (isMobile) {
    return (
      <section>
        <Box py="5%">
          <Box display="flex" overflowX="scroll" h="400px">
            {departments.map((department) => <Department 
              key={department.id} 
              minWidth="285px" 
              department={department.content} 
              title={department.title} 
              pic={department.pic} 
            />)}
          </Box>
        </Box>
      </section>
    )
  }
  return (
    <section>
      <Box py="8%">
        <Flex flexWrap="wrap" justifyContent="center">
          {departments.map((department) => <Department 
            key={department.id} 
            content={department.content} 
            title={department.title} 
            pic={department.pic} 
          />)}
        </Flex>
      </Box>
    </section>
  )
}
