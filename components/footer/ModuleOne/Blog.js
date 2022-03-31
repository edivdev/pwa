import { Box } from "@chakra-ui/react"
import Link from 'next/link'
import Text from "../../ui/Text"

export default function Blog() {
  return (
    <Box>
      <Text fontWeight="900" color="white">BLOG</Text>
      <Text color="white">Visit our <Link href="/blog">blog</Link></Text>
    </Box>
  )
}
