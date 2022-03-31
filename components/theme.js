import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

import Text from './ui/Text/theme'
import Button from './ui/Button/theme'

export const colors = {
  main: {
    blue: '#365D9E',
    red: '#BD3630',
    lightblue: '#658AC8',
    purple: '#832161',
    yellow: '#E1BC28',
    orange: '#F04F42',
    green: '#84CDB7',
    white: '#FFFFFF',
    black: '#2C292F',
    footer: '#00184E',
    darkblue: '#102851',
    babyblue: '#DFE9FB'
  }
}

const breakpoints = createBreakpoints({
  xs: '0px',
  md: '769px'
})

const theme = extendTheme({
  colors,
  breakpoints,
  fonts: {
    heading: 'Just Another Hand',
    body: 'Quicksand'
  },
  components: {
    Text,
    Button,
  }
})

export default theme
