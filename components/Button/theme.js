import theme from '../theme'

export default {
  variants:{
    red: ({ theme }) => ({
      bg:theme.colors.main.red,
      color:'white',
      border:'1px solid black',
      '&:hover': {
        border: '1px dotted blue'
      }
    })
  }
}

