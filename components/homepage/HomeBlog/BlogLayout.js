import { Box, Flex } from "@chakra-ui/react";
import FirstFeaturedBlog from "./FirstFeaturedBlog";
import SecondaryFeaturedBlog from "./SecondaryFeaturedBlog";
import Link from "next/link";
import useTheme from "../../../hooks/useTheme";
import Image from "next/image";
import Text from "../../ui/Text";

export default function DesktopBlogLayout({ featuredBlogs }) {
  const firstFBlog = featuredBlogs[0];
  const secondFBlog = featuredBlogs[1];
  const thirdFBlog = featuredBlogs[2];
  const fourthFBlog = featuredBlogs[3];
  const fifthFBlog = featuredBlogs[4];
  return (
    <Flex justifyContent="center">
      <Box className="home-blogs-wrapper" zIndex="2">
        <FirstFeaturedBlog blogEntry={firstFBlog} />
        <SecondaryFeaturedBlog
          classname="blog-second"
          blogEntry={secondFBlog}
        />
        <SecondaryFeaturedBlog classname="blog-third" blogEntry={thirdFBlog} />
        <SecondaryFeaturedBlog
          classname="blog-fourth"
          blogEntry={fourthFBlog}
        />
        <SecondaryFeaturedBlog classname="blog-fifth" blogEntry={fifthFBlog} />
      </Box>
    </Flex>
  );
}

export function MobileBlogLayout({ featuredBlogs }) {
  const theme = useTheme();
  return (
    <Flex overflowX="scroll" width="auto" zIndex="2" position="relative">
      {featuredBlogs.map((blog) => (
        <Flex
          key={blog.id}
          minWidth="320px"
          h="400px"
          mr="20px"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box w="auto" height="122px" position="relative">
            <Image
              src={blog.attributes.picture.data.attributes.url}
              layout="fill"
              alt={blog.title}
              objectFit="cover"
            />
          </Box>

          <Box px="5%">
            <Text variant="featuredSecondaryBlog">{blog.attributes.title}</Text>
          </Box>

          <Box px="5%" h="100px" overflow="hidden" textOverflow="ellipsis">
            <Text variant="normal">{blog.attributes.excerpt}</Text>
          </Box>

          <Box px="5%">
            <Link href={`/blog/${blog.attributes.slug}`}>
              <a>
                <Flex>
                  <Box mr="5px">
                    <Image
                      src="/images/static/assets/right-arrow.png"
                      width={28}
                      height={20}
                      alt="Read Article"
                    />
                  </Box>
                  <Text variant="readArticle" color={theme.colors.main.blue}>
                    Read Article
                  </Text>
                </Flex>
              </a>
            </Link>
          </Box>
        </Flex>
      ))}
    </Flex>
  );
}
