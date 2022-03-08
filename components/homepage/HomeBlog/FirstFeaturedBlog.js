import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Text from '../../ui/Text'
import useTheme from '../../../hooks/useTheme'
import Link from 'next/link'

export default function FirstFeaturedBlog({ blogEntry }) {

  const theme = useTheme()

  return (
    <article className='blog-first'>
      <Flex flexDirection="column" h="100%" justifyContent="space-between">
        <Box>
          <Image src={blogEntry.image} width={738} height={385} alt={blogEntry.title} />
        </Box>

        <Box px="5%">
          <Text variant="featuredFirstBlog">{blogEntry.title}</Text>
        </Box>

        <Box px="5%" my="4%" h="240px" overflow="hidden" textOverflow="ellipsis">
          <Text variant="normal">{blogEntry.content} </Text>
        </Box>

        <Box px="5%">
          <Link href={`/blog/${blogEntry.slug}`}>
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
    </article>
  )
}
