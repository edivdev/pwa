import { Box, Flex } from "@chakra-ui/react"
import useTheme from "../../hooks/useTheme"
import Link from 'next/link'
import Image from 'next/image'
import Text from "../ui/Text"

export default function BlogTile({ blog }) {
  const theme = useTheme()

  return (
    <Flex flexDirection="column" justifyContent="space-between" w="229px" h="380px" bg="white">
      <Box w="229px" height="122px" position="relative" border="4px solid white">
        <Image src={blog.image} layout="fill" alt={blog.title} objectFit="cover" />
      </Box>

      <Box px="5%" border="4px solid white">
        <Text variant="featuredSecondaryBlog">{blog.title}</Text>
      </Box>

      <Box px="5%" h="100px" overflow="hidden" textOverflow="ellipsis" border="4px solid white">
        <Text variant="normal">{blog.excerpt}</Text>
      </Box>

      <Box px="5%" border="4px solid white">
        <Link href={`/blog/${blog.slug}`}>
          <a>
            <Flex>
              <Box mr="5px">
                <Image src="/images/static/assets/right-arrow.png" width={28} height={20} alt="Read Article" />
              </Box>
              <Text variant="readArticle" color={theme.colors.main.blue}>Read Article</Text>
            </Flex>
          </a>
        </Link>
      </Box>
    </Flex>
  )
}

