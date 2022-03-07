import { Box } from '@chakra-ui/react'
import Text from '../Text'
import Button from '../Button'
import Link from 'next/link'

export default function PagesHeader({ background, ...props }) {
  const { text1, text2, cta, ctaTarget } = props
  return (
    <Box
      minHeight="450px"
      backgroundImage={background}
      backgroundSize="100%"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >

      <Text variant="h1" color="white" textTransform="capitalize">
        {text1}
      </Text>

      <Text variant="mainSubTitle" color="white" textTransform="uppercase" my="24px">
        {text2}
      </Text>

      { ctaTarget && cta && <Link href={ctaTarget}>
        <a>
          <Button variant="fillBlue" size="longbutton">
            {cta}
          </Button>
        </a>
      </Link> }

    </Box>
  )
}
