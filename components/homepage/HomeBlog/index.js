import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Button from '../../ui/Button'
import SectionsTitle from '../../ui/SectionsTitle'
import FirstFeaturedBlog from './FirstFeaturedBlog'
import SecondaryFeaturedBlog from './SecondaryFeaturedBlog'

export default function HomeBlog() {
  return (
    <>
      <Box textAlign="center" backgroundImage="/images/static/backgrounds/BACKGROUND-blog.jpg" backgroundSize="cover">
       
        <SectionsTitle title="Blog" />

        <Box display="inline-block">
          <Box className='home-blogs-wrapper'>
            <FirstFeaturedBlog />
            <SecondaryFeaturedBlog classname='blog-second' />
            <SecondaryFeaturedBlog classname='blog-third' />
            <SecondaryFeaturedBlog classname='blog-fourth' />
            <SecondaryFeaturedBlog classname='blog-fifth' />
          </Box>
        </Box>

        <Box py="20px">
          <Button>See More</Button>
        </Box>

      </Box>
    </>
  )
}
