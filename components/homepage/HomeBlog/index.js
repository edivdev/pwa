import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Button from '../../ui/Button'
import SectionsTitle from '../../ui/SectionsTitle'

export default function HomeBlog() {
  return (
    <>
      <Box textAlign="center" backgroundImage="/images/static/backgrounds/BACKGROUND-blog.jpg" backgroundSize="cover" pt="100px">
        <SectionsTitle title="Blog" />

        <Box display="inline-block">
          <Box className='home-blogs-wrapper'>
            <Box className='blog-first'>

            </Box>
            
            <Box className='blog-second'>
              
            </Box>
            
            <Box className='blog-third'>

            </Box>
            
            <Box className='blog-fourth'>

            </Box>
            
            <Box className='blog-fifth'>
              
            </Box>
          </Box>
        </Box>
        <Box>
          <Button>See More</Button>
        </Box>
      </Box>
    </>
  )
}
