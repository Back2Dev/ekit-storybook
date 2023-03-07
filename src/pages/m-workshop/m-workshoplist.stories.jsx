import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import MWorkshopList from './m-workshoplist';

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
      main: '#c9cdd6',
      light: '#f2f3f6',
      dark: '#3e3e3e',
    },
  },
});

export default {
  title: 'MobileWorkshopListPage',
  component: MWorkshopList,
};

export const Default = () => {
  return (
    <ThemeProvider theme={theme}>
      <MWorkshopList />
    </ThemeProvider>
  );
};
