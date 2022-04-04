import { useEffect, useState } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Button from '../../ui/Button'
import SectionsTitle from '../../ui/SectionsTitle'
import Link from 'next/link'
import useViewport from '../../../hooks/useViewport'
import DesktopBlogLayout, { MobileBlogLayout } from './BlogLayout'

export default function HomeBlog({ featuredBlogs }) {

  const viewport = useViewport()
  const [isMobile, setIsMobile] = useState(null)

  useEffect(() => {
    setIsMobile(viewport[0])
  }, [isMobile])

  return (
    <section>
      <Box textAlign="center" backgroundImage="/images/static/backgrounds/BACKGROUND-blog.jpg" backgroundSize="cover" py="5%" w="100%">
        <SectionsTitle title="Blog" />
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
    </section>
  )
}
