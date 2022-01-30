import { Link as ChakraUILink } from '@chakra-ui/react'
import Link from 'next/link'

import React from 'react';

const EdLink = ({ children, ...props }) => {
  return (
    <Link {...props} passHref>
      <ChakraUILink>
        { children }
      </ChakraUILink>
    </Link>
  )
};

export default EdLink;
