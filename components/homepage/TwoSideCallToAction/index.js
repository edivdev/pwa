import { Box, Flex } from "@chakra-ui/react"
import Image from 'next/image'
import Link from 'next/link'
import SectionsTitle from "../../ui/SectionsTitle"
import Text from "../../ui/Text"
import Button from "../../ui/Button"

export default function TwoSideCallToAction({ content, image, title, reverse, cta, ctaTarget, imageWidth, imageHeight }) {

  return (

    <section>
      <Flex flexDirection={reverse ? 'row-reverse' : 'row'}>
        <Box w="50%" p="6%" h="100%">
          <Image src={image} width={imageWidth} height={imageHeight} alt={title} />
        </Box>
        <Flex w="50%" p="2%" minHeight="100%" justifyContent="center" flexDirection="column">
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
        </Flex>
      </Flex>

    </section>
  )
}
