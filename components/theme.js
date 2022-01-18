import { extendTheme } from '@chakra-ui/react'

import Text from './Text/theme'
import Button from './Button/theme'

export const colors = {
  main:{
    blue:'#365D9E',
    red:'#BD3630',
    lightblue:'#658AC8',
    purple:'#832161',
    yellow:'#E1BC28',
    orange:'#F04F42',
    green:'#84CDB7',
    white:'#FFFFFF',
    black:'#2C292F',
    footer:'#00184E' 
   }
 }

const theme = extendTheme({
  colors,
  fonts:{
    heading: 'Quicksand',
    body: 'Quicksand'
   },
   components: {
     Text,
     Button
   }
})

export default theme