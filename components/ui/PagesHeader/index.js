import { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import Text from '../Text'
import Button from '../Button'
import Link from 'next/link'
import useTheme from '../../../hooks/useTheme'
import useViewport from '../../../hooks/useViewport'

export default function PagesHeader({ background, isProject = false, ...props }) {

  const viewport = useViewport()
  const [isMobile, setIsMobile] = useState(null)

  useEffect(() => {
    setIsMobile(viewport[0])
  }, [isMobile, viewport])

  const theme = useTheme()

  const { text0, text1, text2, text3, cta, ctaTarget } = props
  return (
    <Box
      minHeight={isMobile ? "150px" : isProject ? "1000px" : "450px"}
      backgroundImage={background}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundPosition="center"
    >
      {text0 && <Text color="white" textTransform="uppercase">
        {text0}
      </Text>}

      {text1 && <Text variant={isMobile ? "titleMobile" : "h1"} color={background ? "white" : theme.colors.main.blue} textTransform="capitalize" textShadow="0 0 5px rgb(54,93,158)">
        {text1}
      </Text>}

      { text2 && <Text variant={isMobile ? "mobileMainSubTitle" : "mainSubTitle"} color="white" textTransform="uppercase" my="24px">
        {text2}
      </Text>}

      { text3 && <Text variant="normal" color={background ? "white" : theme.colors.main.blue} maxWidth="60%" dangerouslySetInnerHTML={{ __html: text3 }} />}

      {
        ctaTarget && cta && <Link href={ctaTarget}>
          <a>
            <Button variant="fillBlue" size={isMobile ? "mobileLongButton" : "longbutton"}>
              {cta}
            </Button>
          </a>
        </Link>
      }

    </Box>
  )
}
