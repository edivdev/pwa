import { Img as ChakraUIImage } from '@chakra-ui/react'

export default function Image({ src, alt, ...props }) {
  return (
    <ChakraUIImage 
      src={src}
      alt={alt}
      {...props}
    />
  )
}