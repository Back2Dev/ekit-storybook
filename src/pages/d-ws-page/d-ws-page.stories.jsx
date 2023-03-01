import React from "react";

import DSNavbar from '../d-sub-navbar/d-sub-navbar';
import DWPage from "./d-ws-page";
import DWPView from './d-ws-page-view';

import { Box } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DesktopProvider } from '../d-provider/d-provider';

export default {
  title: 'DeskWorkshopPage',
  component: DWPage,
};

const initialState = {
  infoButton: false,
}

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

export const Default = () => {
  return (
    <ThemeProvider theme={theme}>
      <DesktopProvider initialState={initialState}>
        <DSNavbar />
        <DWPage />
      </DesktopProvider>
    </ThemeProvider>
  );
};

export const View = () => {
  return (
    <ThemeProvider theme={theme}>
      <DesktopProvider initialState={initialState}>
        <DWPView />
      </DesktopProvider>
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