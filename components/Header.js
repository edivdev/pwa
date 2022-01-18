import React from 'react'
import { Flex } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'

const CMSpages =[
  {name:'home', slug:'/'},
  {name:'about-us', slug:'/about-us'},
  {name:'resources', slug:'/resources'},
  {name:'donate', slug:'/donate'},
  {name:'contact', slug:'/contact'},
]


const Header = () => {
  
  return (
  <nav>
  <Flex h="104px" justifyContent="space-around">
  <Box minWidth='200px' />
    {CMSpages.map((element, index) => {
      return(
        <Link key={index} href={`${element.slug}`}>
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
