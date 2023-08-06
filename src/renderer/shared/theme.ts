import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#116e6b',
    },
  },

  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
      },
    },
  },
});
