import { Text as ChakraUIText } from '@chakra-ui/react'
import { colors } from '../../theme'

export default function Text({ children, variant, ...props }){
  return(
    <ChakraUIText
      variant={variant}
      color={colors.main.black}
      {...props}
      >
        {children}
      </ChakraUIText>
  )
}