import { Box, Flex } from "@chakra-ui/react"
import Link from 'next/link'
import Button from "../ui/Button"

export default function pageChanger() {
  return (
    <Flex w="100%" justifyContent="center" m="50px 0">
      <Link href='/about-us'>
        <a>
          <Button variant="fillBlue" size="banner" textTransform="uppercase">
            about us
          </Button>
        </a>
      </Link>
      <Link href='/about-us/what-we-do'>
        <a>
          <Button variant="fillBlue" size="banner" textTransform="uppercase">
            what we do
          </Button>
        </a>
      </Link>
      <Link href='/about-us/recognitions'>
        <a>
          <Button variant="fillBlue" size="banner" textTransform="uppercase">
            recognitions
          </Button>
        </a>
      </Link>
      <Link href='/about-us/collaborations'>
        <a>
          <Button variant="fillBlue" size="banner" textTransform="uppercase">collaborations</Button>
        </a>
      </Link>
    </Flex>
  )
}
