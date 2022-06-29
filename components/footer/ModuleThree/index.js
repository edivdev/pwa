import { Flex } from "@chakra-ui/react"
import Button from '../../ui/Button'
import Link from 'next/link'
import useTheme from '../../../hooks/useTheme'

export default function ModuleThree({ isMobile }) {
  const theme = useTheme()

  return (
    <Flex flexDirection="column" justifyContent="flex-start" w={isMobile ? "100%" : "20%"} mb={isMobile ? '20px' : ''}>
      
    </Flex>

  )
}
