import theme from '../../theme'

export default {
  baseStyle: {
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
      padding: '1%',
      height: 'auto',
      borderRadius: '6px',
      border: `2px solid ${theme.colors.main.blue}`,
      margin: '0 5px',
    }),
    projectsButtonActive: ({ theme }) => ({
      background: theme.colors.main.lightblue,
      padding: '1%',
      margin: '0 5px',
      height: 'auto',
      borderRadius: '6px'
    }),
    SignUp: ({ theme }) => ({
      color: theme.colors.main.footer,
      width: '100%',
      fontSize: '14px',
      height: '30px',
      mt: '10px',
      background: 'white'
    }),
    buttonFooter: ({ theme }) => ({
      width: '100%',
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
    mobileLongButton: {
      width: 'auto',
      height: 'auto',
      fontSize: '12px',
      padding: '12px 20px',
      margin: '10px 0'
    }
  }
}

