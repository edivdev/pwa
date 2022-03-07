import { Box, Flex } from "@chakra-ui/react"
import Image from 'next/image'
import SectionsTitle from "../../ui/SectionsTitle"
import Text from "../../ui/Text"
import Button from "../../ui/Button"

export default function TwoSideCallToAction({ content, image, title, reverse}) {
  return (
    <section>
      <Flex flexDirection={reverse ? 'row-reverse' : 'row'}>
      <Box w="50%" p="2%" h="100%">
        <Image src={image} width="960" height="742" alt={title}/>
      </Box>
      <Box w="50%" p="2%" h="100%">
        <SectionsTitle title={title} />
        <Text py="25px" color="black" variant="normal">{content}</Text>
        <Button
          variant="blue"
          size="banner"
        >
          SEE MORE
        </Button>
      </Box>
    </Flex>

    </section>
  )
}
