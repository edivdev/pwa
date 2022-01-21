import { Input as ChakraUIInput } from '@chakra-ui/react'

export default function Input({ ...props }){
  return (
    <ChakraUIInput
      { ...props }
    />
  )
}