import { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Button from "../../ui/Button";
import SectionsTitle from "../../ui/SectionsTitle";
import Link from "next/link";
import useViewport from "../../../hooks/useViewport";
import Image from "next/image";
import DesktopBlogLayout, { MobileBlogLayout } from "./BlogLayout";
import Text from "../../ui/Text";

export default function HomeBlog({ featuredBlogs }) {
  const viewport = useViewport();
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    setIsMobile(viewport[0]);
  }, [isMobile, viewport]);

  return (
    <Box
      textAlign="center"
      overflow="hidden"
      backgroundImage="/images/static/backgrounds/BACKGROUND-blog.jpg"
      objectFit="cover"
    >
      <Box>
        <SectionsTitle title="Blog" mt="30px" />
        <Box w={isMobile ? "95%" : "70%"} m="0 auto 15px">
          <Text>
            Our blog is an ongoing compilation of papers and articles written by
            volunteers and academics in which they share their knowledge and
            expereince in the hope it will help others access better
            opportunities.
            <br />
            <br />
            Our blog is also used to showcase the talented volunteers from
            within our collective and provide them with a safe avenue to have a
            voice.{" "}
          </Text>
        </Box>
        {!isMobile && <DesktopBlogLayout featuredBlogs={featuredBlogs} />}
        {isMobile && <MobileBlogLayout featuredBlogs={featuredBlogs} />}
        <Box py="20px">
          <Link href="/blog">
            <a>
              <Button variant="blue" size="banner">
                See More
              </Button>
            </a>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
