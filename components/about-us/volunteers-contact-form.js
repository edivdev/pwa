import { Box, Grid, GridItem, Flex } from "@chakra-ui/react"
import Input from '../ui/Input'
import Button from '../ui/Button'
import Image from 'next/image'

export default function VolunteersContactForm() {
  function handleSubmit(e) {
    e.preventDefault()
    console.log('connectme')
  }
  return (
    <form onSubmit={handleSubmit}>
      <Box id="volunteers-contact-form">
        <Grid
          templateRows='repeat(4, 1fr)'
          templateColumns='repeat(2, 1fr)'
          gap="27px"
        >
          <GridItem>
            <Input placeholder="First Name*" type="text" />
          </GridItem>

          <GridItem>
            <Input placeholder="Last Name*" type="text" />
          </GridItem>

          <GridItem>
            <Input placeholder="Phone*" type="number" />
          </GridItem>

          <GridItem>
            <Input placeholder="Country*" type="text" />
          </GridItem>

          <GridItem colSpan={2}>
            <Input placeholder="Email*" type="email" required />
          </GridItem>

          <GridItem colSpan={2}>


            <Button size="banner" variant="noButton" type="submit" color="white" textTransform="uppercase">
              <Flex alignItems="center">
                <Box>
                  <Image src="/images/static/assets/red-right-arrow.png" width='29px' height='21px' alt="send" />
                </Box>
                <Box ml="10px">Send</Box>
              </Flex>
            </Button>

          </GridItem>
        </Grid>
      </Box>
    </form>
  )
}
