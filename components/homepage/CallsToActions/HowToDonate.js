import { Box, Flex } from "@chakra-ui/react";
import Image from 'next/image'
import Text from "../../Text";
import Button from '../../Button'

export default function HowToDonate() {
  return (
    <Flex py="5%">
      <Box w="40%" pl="5%">
        <Text pb="50px" color="black" variant="callsTitle">How to donate</Text>
        <Text py="25px" color="black" variant="normal">Educacion Diversa is a run by a collective of volunteers from around the world who kindly give their time and skills to contribute to creating educational resources that are used to incentivise donations from people with the money raised going to projects in underdeveloped countries around the world that focus on educating people in our areas of focus.  We hope to raise enough money in the future to build small schools in rural areas too!.</Text>
        <Button
          variant="blue"
          size="normal"
        >
          SEE MORE
        </Button>
      </Box>
      <Box w="60%" pl="5%"> 
        <Image src="https://via.placeholder.com/960x742" width="960" height="742" />
      </Box>
    </Flex>
  )
}