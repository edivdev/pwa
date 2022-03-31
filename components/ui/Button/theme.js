import theme from '../../theme'

export default {
  baseStyle: {
    mr: '50px',
    '&:hover': {
      opacity: '0.5'
    }
  },
  variants: {
    red: ({ theme }) => ({
      bg: theme.colors.main.red,
      color: theme.colors.main.white,
      border: `2px solid ${theme.colors.main.red}`,
      '&:hover': {
        border: `2px solid ${theme.colors.main.red}`
      }
    }),
    transparent: ({ theme }) => ({
      bg: 'transparent',
      color: theme.colors.main.white,
      border: `2px solid ${theme.colors.main.white}`
    }),
    blue: ({ theme }) => ({
      bg: 'transparennt',
      color: theme.colors.main.blue,
      border: `2px solid ${theme.colors.main.blue}`
    }),
    fillBlue: ({ theme }) => ({
      bg: theme.colors.main.blue,
      color: 'white',
      border: `2px solid ${theme.colors.main.blue}`,
      fontSize: '14px'
    }),
    fillWhite: ({ theme }) => ({
      bg: theme.colors.main.white,
      color: theme.colors.main.blue,
      border: `2px solid ${theme.colors.main.white}`,
      fontSize: '14px'
    }),
    noButton: {
      bg: 'transparent',
      border: 'none',
      width: 'auto',
      height: 'auto'
    },
    projectsButton: ({ theme }) => ({
      width: '320px',
      height: '70px',
      borderRadius: '6px',
      border: `2px solid ${theme.colors.main.blue}`,
      margin: '0 auto'
    }),
    projectsButtonActive: ({ theme }) => ({
      background: theme.colors.main.lightblue,
      margin: '0 auto',
      width: '320px',
      height: '70px',
      borderRadius: '6px'
    }),
    SignUp: ({ theme }) => ({
      color: theme.colors.main.footer,
      width: '100%',
      background: 'white'
    }),
    buttonFooter: ({ theme }) => ({
      fontSize: "12px",
      backgroundColor: theme.colors.main.lightblue,
      '&:hover': {
        backgroundColor: 'white',
        color: theme.colors.main.lightblue,
      }
    })
  },
  sizes: {
    banner: {
      height: '53px',
      width: '152px',
    },
    normal: {
      height: '50px',
      width: '200px'
    },
    filter: {
      height: '70px',
      width: '383px'
    },
    longbutton: {
      width: 'auto',
      height: 'auto',
      fontSize: '24px',
      padding: '12px 20px'
    },
  }
}

