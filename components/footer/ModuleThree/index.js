import { Flex } from "@chakra-ui/react"
import Button from '../../ui/Button'
import Link from 'next/link'
import useTheme from '../../../hooks/useTheme'

export default function ModuleThree({ isMobile }) {
  const theme = useTheme()

  return (
    <Flex flexDirection="column" justifyContent="flex-start" w={isMobile ? "100%" : "20%"} mb={isMobile ? '20px' : ''}>
      <Link href="mailto:educaciondiversa@gmail.com">
        <a>
          <Button variant="buttonFooter">educaciondiversa@gmail.com</Button>
        </a>
      </Link>
    </Flex>

  )
}
