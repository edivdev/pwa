import { Box, Flex } from "@chakra-ui/react"
import Image from 'next/image'
import Link from 'next/link'
import SectionsTitle from "../../ui/SectionsTitle"
import Text from "../../ui/Text"
import Button from "../../ui/Button"
import useViewport from "../../../hooks/useViewport"

export default function TwoSideCallToAction({ content, image, title, reverse, cta, ctaTarget }) {
  const { isDesktop } = useViewport()
  return (
    isDesktop &&
    <section>
      <Flex flexDirection={reverse ? 'row-reverse' : 'row'}>
        <Box w="50%" p="2%" h="100%">
          <Image src={image} width="960" height="742" alt={title} />
        </Box>
        <Box w="50%" p="2%" h="100%">
          <SectionsTitle title={title} />
          <Text py="20px" color="black" variant="normal">{content}</Text>
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
      </Flex>

    </section>
  )
}
