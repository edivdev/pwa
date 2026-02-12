import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#658AC8'
    },
    primary: {
      main: '#365D9E',
      light:'#658AC8',
    },
    secondary: {
      main: '#BD3630',
    },
    common:{
      black:'#2C292F'
    },
    custom:{
      purple: '#832161',
      yellow: '#E1BC28',
      orange:'#F04F42',
      mint: '#84CDB7',
    }
  },
  typography: {
    fontFamily: 'var(--font-quicksand), Roboto, sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {fontSize:'3rem'},
    h2: {fontSize:'2.75rem'},
    h3: {fontSize:'2.5rem'},
    h4: {fontSize:'2.25rem'},
    h5: {fontSize: '2rem'},
    h6: {fontSize: '1.75rem'},
    body1: {fontSize:'1.25rem'},
    body2: {fontSize:'1rem'},
  }
});

export default theme;