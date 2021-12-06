import React from 'react'
import { Flex } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'

const CMSpages =[
  {name:'home'},
  {name:'about-us'},
  {name:'resources'},
  {name:'donate'},
  {name:'contact'},
]


const Header = () => {
  
  console.log(CMSpages.length)
  return (
  <nav>
  <Flex justifyContent="space-around">
  <Box minWidth='200px' />
    {CMSpages.map((element) => {
      return(
        <Link href={`/${element.name}`}>
        <Box>
          {element.name}
        </Box>
        </Link>
      )
    })}
  </Flex>
  </nav>
  )
}

export default Header
