import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#d81921',
    },
    secondary: {
      main: '#21201e',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        a: { textDecoration: 'none' },
      },
    },
  },
});

export default theme;
