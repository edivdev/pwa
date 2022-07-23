import { Box, Flex } from "@chakra-ui/react";
import useTheme from "../../hooks/useTheme";
import Link from "next/link";
import Image from "next/image";
import Text from "../ui/Text";

export default function BlogTile({ blog }) {
  const theme = useTheme();

  const { title, picture, excerpt, slug } = blog.attributes;
  const { data } = picture;

  const pictureData = data;

  const pictureUrl = pictureData.attributes.url;

  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      w="229px"
      h="340px"
      bg="white"
    >
      <Box
        w="229px"
        height="122px"
        position="relative"
        border="4px solid white"
      >
        <Image
          src={pictureUrl}
          layout="fill"
          alt={blog.title}
          objectFit="cover"
        />
      </Box>

      <Box
        px="5%"
        h="82px"
        border="4px solid white"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text textAlign="center" variant="blogTile">
          <b>{title}</b>
        </Text>
      </Box>

      <Box px="5%" h="100px" overflowY="scroll" border="4px solid white">
        <Text variant="blogTile">{excerpt}</Text>
      </Box>

      <Box px="5%" h="36px" border="4px solid white">
        <Link href={`/blog/${slug}`}>
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
  );
}
