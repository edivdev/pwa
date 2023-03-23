import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Text from "../../ui/Text";
import useTheme from "../../../hooks/useTheme";
import Link from "next/link";

export default function SecondaryFeaturedBlog({ classname, blogEntry }) {
  const theme = useTheme();

  return (
    <article className={classname}>
      <Flex flexDirection="column" h="100%" justifyContent="space-between">
        <Box w="auto" height="122px" position="relative">
          <Image
            src={blogEntry?.attributes.picture.data.attributes.url || "/image"}
            layout="fill"
            alt={blogEntry?.attributes.title}
            objectFit="cover"
          />
        </Box>

        <Box px="1%">
          <Text
            lineHeight="1em"
            fontSize="16px"
            variant="featuredSecondaryBlog"
          >
            {blogEntry?.attributes.title}
          </Text>
        </Box>

        <Box p="1%" px="5%" h="140px" overflow="scroll" textOverflow="ellipsis">
          <Text fontSize="15px" lineHeight="1em" variant="normal">
            {blogEntry?.attributes.excerpt}
          </Text>
        </Box>

        <Box px="5%">
          <Link href={`/blog/${blogEntry?.attributes.slug}`}>
            <a>
              <Flex>
                <Box mr="5px" fontSize="10px">
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
    </article>
  );
}
