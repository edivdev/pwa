import { useEffect, useState } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Button from '../../ui/Button'
import SectionsTitle from '../../ui/SectionsTitle'
import Link from 'next/link'
import useViewport from '../../../hooks/useViewport'
import Image from 'next/image'
import DesktopBlogLayout, { MobileBlogLayout } from './BlogLayout'

export default function HomeBlog({ featuredBlogs }) {

  const viewport = useViewport()
  const [isMobile, setIsMobile] = useState(null)

  useEffect(() => {
    setIsMobile(viewport[0])
  }, [isMobile, viewport])

  return (

    <Box textAlign="center" overflow="hidden">
      <Box zIndex="0" w="100vw" h={isMobile ? "620px" : "950px"} position="absolute">
        <Image src="/images/static/backgrounds/BACKGROUND-blog.jpg" layout="fill" objectFit="cover" alt="background" />
      </Box>

      <Box zIndex="1">
        <SectionsTitle title="Blog" mt="30px" />
        {!isMobile && <DesktopBlogLayout featuredBlogs={featuredBlogs} />}
        {isMobile && <MobileBlogLayout featuredBlogs={featuredBlogs} />}
        <Box py="20px">
          <Link href="/blog">
            <a>
              <Button variant="blue" size="banner">See More</Button>
            </a>
          </Link>
        </Box>
      </Box>
    </Box>

  )
}
