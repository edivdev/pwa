import theme from '../theme'

export default {
  baseStyle:{
    mr:'50px',
    '&:hover': {
      opacity:'0.5'
    }
  },
  variants:{
    red: ({ theme }) => ({
      bg:theme.colors.main.red,
      color: theme.colors.main.white,
      border:`2px solid ${theme.colors.main.red}`,
      '&:hover': {
        border:`2px solid ${theme.colors.main.red}`
      }
    }),
    transparent: ({ theme }) => ({
      bg:'transparent',
      color: theme.colors.main.white,
      border:`2px solid ${theme.colors.main.white}`
    }),
    blue: ({ theme }) => ({
      bg:'transparennt',
      color: theme.colors.main.blue,
      border:`2px solid ${theme.colors.main.blue}`
    })
  },
  sizes:{
    banner: {
      height:'80px',
      width:'226px'
    },
    normal: {
      height:'50px',
      width:'200px'
    }
  }
}

