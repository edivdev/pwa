import { useState, useEffect } from 'react'
import { Box, Flex } from "@chakra-ui/react"
import Image from 'next/image'
import Link from 'next/link'
import SectionsTitle from "../../ui/SectionsTitle"
import Text from "../../ui/Text"
import Button from "../../ui/Button"
import useViewport from '../../../hooks/useViewport'

export default function TwoSideCallToAction({ content, image, title, reverse, cta, ctaTarget, imageWidth, imageHeight }) {

  const viewport = useViewport()
  const [isMobile, setIsMobile] = useState(null)

  const [layout, setLayout] = useState(null)

  useEffect(() => {
    setIsMobile(viewport[0])
  }, [isMobile, viewport])

  useEffect(() => {
    if (isMobile && reverse) {
      setLayout('column-reverse')
    }
    else if (isMobile && !reverse) {
      setLayout('column')
    } else if (reverse) {
      setLayout('row-reverse')
    } else {
      setLayout('row')
    }
  }, [layout, reverse, isMobile])

  return (

    <section>
      <Flex flexDirection={layout}>
        <Box w={isMobile ? "100%" : "50%"} p="3%" h="100%">
          <Image src={image} width={imageWidth} height={imageHeight} alt={title} />
        </Box>
        <Flex w={isMobile ? "100%" : "50%"} p="2%" minHeight="100%" justifyContent="center" flexDirection="column">
          <SectionsTitle title={title} />
          <Text py="20px" color="black" variant="normal" dangerouslySetInnerHTML={{ __html: content }} />
          {cta &&
            <Box textAlign={isMobile ? 'center' : ''}>
              <Link href={ctaTarget}>
                <a>
                  <Button
                    variant="blue"
                    size="banner"
                  >
                    {cta}
                  </Button>
                </a>
              </Link>
            </Box>
          }
        </Flex>
      </Flex>

    </section>
  )
}
