import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import MMain from './pages/m-main';

const theme = createTheme({
  palette: {
    primary: {
      main: '#092b58',
    },
    secondary: {
      main: '#cb1c33',
    },
    alternative: {
      main: '#69a7a9',
      light: '#9ad9db',
      dark: '#39787a',
    },
    grey: {
      main: '#9E9E9E',
      light: '#cfcfcf',
      dark: '#707070',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MMain />
    </ThemeProvider>
  );
};

export default App;
