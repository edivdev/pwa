import { Box } from '@chakra-ui/react'
import Text from '../Text'
import Button from '../Button'
import Link from 'next/link'
import useTheme from '../../../hooks/useTheme'

export default function PagesHeader({ background, ...props }) {

  const theme = useTheme()

  const { text0, text1, text2, text3, cta, ctaTarget } = props
  return (
    <Box
      minHeight="450px"
      backgroundImage={background}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text color="white" textTransform="uppercase">
        {text0}
      </Text>

      <Text variant="h1" color={background ? "white" : theme.colors.main.blue} textTransform="capitalize">
        {text1}
      </Text>

      <Text variant="mainSubTitle" color="white" textTransform="uppercase" my="24px">
        {text2}
      </Text>

      <Text variant="normal" color={background ? "white" : theme.colors.main.blue} maxWidth="60%">
        {text3}
      </Text>

      {
        ctaTarget && cta && <Link href={ctaTarget}>
          <a>
            <Button variant="fillBlue" size="longbutton">
              {cta}
            </Button>
          </a>
        </Link>
      }

    </Box >
  )
}
