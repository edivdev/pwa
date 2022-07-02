import { Input as ChakraUIInput } from "@chakra-ui/react";

export default function Input({ variant, ...props }) {
  return <ChakraUIInput variant={variant} {...props} />;
}
