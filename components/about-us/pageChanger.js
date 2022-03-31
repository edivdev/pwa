import { useEffect, useState } from "react"
import { Flex } from "@chakra-ui/react"
import Link from 'next/link'
import Button from "../ui/Button"
import { useRouter } from 'next/router'

function splitPathname(pathname) {
  return pathname.split('/')
}

export default function PageChanger() {

  const router = useRouter()
  const [page, setPage] = useState(null)

  useEffect(() => {
    const pathname = splitPathname(router.pathname)
    if (pathname.length >= 3) {
      setPage(pathname[2])
    } else {
      setPage(pathname[1])
    }
  }, [page])

  return (
    <Flex w="100%" justifyContent="center" m="50px 0" id="page-changer" pt="5%">
      <Link href='/about-us#page-changer'>
        <a>
          <Button variant={page === "about-us" ? "fillBlue" : "fillWhite"} size="banner" textTransform="uppercase">
            about us
          </Button>
        </a>
      </Link>
      <Link href='/about-us/what-we-do#page-changer'>
        <a>
          <Button variant={page === "what-we-do" ? "fillBlue" : "fillWhite"} size="banner" textTransform="uppercase">
            what we do
          </Button>
        </a>
      </Link>
      <Link href='/about-us/recognitions#page-changer'>
        <a>
          <Button variant={page === "recognitions" ? "fillBlue" : "fillWhite"} size="banner" textTransform="uppercase">
            recognitions
          </Button>
        </a>
      </Link>
      <Link href='/about-us/collaborations#page-changer'>
        <a>
          <Button variant={page === "collaborations" ? "fillBlue" : "fillWhite"} size="banner" textTransform="uppercase">
            collaborations
          </Button>
        </a>
      </Link>
      <Link href='/about-us/volunteers#page-changer'>
        <a>
          <Button variant={page === "volunteers" ? "fillBlue" : "fillWhite"} size="banner" textTransform="uppercase">
            volunteers
          </Button>
        </a>
      </Link>
    </Flex>
  )
}
