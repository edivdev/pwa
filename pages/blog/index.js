import { useEffect, useState } from "react";
import { Box, Grid, GridItem, Flex } from "@chakra-ui/react";
import React from "react";
import PagesHeader from "../../components/ui/PagesHeader";
import Text from "../../components/ui/Text";
import { blogs } from "../../components/data/initialState";
import BlogTile from "../../components/blog/BlogTile";
import useViewport from "../../hooks/useViewport";

export default function BlogIndexPage(props) {
  const viewport = useViewport();
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    setIsMobile(viewport[0]);
  }, [isMobile, viewport]);

  const blogEntries = props.blogs;
  return (
    <>
      <PagesHeader
        text1="BLOG"
        text3="This area of our website is a shared space for our volunteers to publish their voices and opinions so that they can be heard on our global platform. It also allows us to publicly recognise their contribution to our work.<br/><br/>Members of our collective are encouraged to contribute content that focuses on, or supports the provision of education in the areas of <b>Human Rights</b>, <b>Eliminating Violence and Peaceful Conflict Management and Sexual</b> and <b>Reproductive Health</b>"
      />
      {!isMobile && (
        <Flex
          backgroundImage="/images/static/backgrounds/BACKGROUND-blog.jpg"
          flexDirection="column"
          alignItems="center"
          py="5%"
        >
          {/* <Flex py="5%">Buttons</Flex> */}
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            {blogEntries.map((blog) => (
              <GridItem key={blog.id}>
                <BlogTile blog={blog} />
              </GridItem>
            ))}
          </Grid>
        </Flex>
      )}

      {isMobile && (
        <Flex my="20px" overflowX="scroll">
          {blogEntries.map((blog) => (
            <BlogTile key={blog.id} blog={blog} />
          ))}
        </Flex>
      )}
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      blogs: blogs,
    },
  };
}
