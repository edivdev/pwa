import { Button as ChakraUIButton } from '@chakra-ui/react'

export default function Button({ children, ...props }){
  return(
    <ChakraUIButton
      {...props}
    >
      {children}
    </ChakraUIButton>
  )
}