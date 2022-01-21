import { Button as ChakraUIButton } from '@chakra-ui/react'

export default function Button({ children, variant, size, ...props }){
  return(
    <ChakraUIButton
      variant={variant}
      size={size}
      {...props}
    >
      {children}
    </ChakraUIButton>
  )
}