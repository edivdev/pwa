import { Box, Grid, GridItem, Flex } from '@chakra-ui/react'
import React from 'react'
import PagesHeader from '../../components/ui/PagesHeader'
import Text from '../../components/ui/Text'
import { blogs } from '../../components/data/initialState'
import BlogTile from '../../components/blog/BlogTile'

export default function BlogIndexPage(props) {

  const blogEntries = props.blogs
  return (
    <>
      <PagesHeader
        text1="BLOG"
        text3="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <Flex backgroundImage="/images/static/backgrounds/BACKGROUND-blog.jpg" flexDirection="column" alignItems="center" py="5%">
        {/* <Flex py="5%">Buttons</Flex> */}
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
          {blogEntries.map((blog) => <GridItem key={blog.id}><BlogTile blog={blog} /></GridItem>)}
        </Grid>
      </Flex>
    </>
  )
}

export async function getStaticProps() {

  return {
    props: {
      blogs: blogs
    }
  }
}