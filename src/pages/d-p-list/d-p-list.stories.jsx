import React from "react";
import DWPage from "./d-ws-page";
import DWPBar from './d-ws-page-bar'
import DWPView from './d-ws-page-view';
import DWPInfo from './d-ws-page-info';

import { Box } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#092b58', 
      },
      secondary: {
        main: '#f2f3f6', 
      },
      error: {
        main: '#cb1c33',
      }
    },
  });

export default {
    title: 'DeskWorkshopPage',
    component: DWPage,
};

export const Default = () => {
  return (
    <ThemeProvider theme={theme}>
      <DWPage />;
    </ThemeProvider>
  );
};

export const Bar = () => {
  return (
    <ThemeProvider theme={theme}>
      <DWPBar />
    </ThemeProvider>
  );
}

export const View = () => {
  return (
    <ThemeProvider theme={theme}>
      <DWPView />
    </ThemeProvider>
  );
}

export const Info = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "400px"}}>
        <DWPInfo />
      </Box>
    </ThemeProvider>
  );
}