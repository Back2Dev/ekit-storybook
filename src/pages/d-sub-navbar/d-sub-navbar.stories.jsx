import React from 'react';
import DSNavbar from './d-sub-navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { DesktopProvider } from '../d-provider/d-provider'

export default {
  title: 'DeskSubNavbar',
  component: DSNavbar,
};

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

const theme1 = createTheme({
    palette: {
      primary: {
        main: '#f2f3f6', 
      },
      secondary: {
        main: '#092b58', 
      },
      error: {
        main: '#cb1c33',
      }
    },
});

const theme2 = createTheme({
    palette: {
      primary: {
        main: '#092b58', 
      },
      secondary: {
        main: '#90caf9', 
      },
      error: {
        main: '#cb1c33',
      }
    },
});

const initialState = {
  infoButton: false,
}

export const Default = () => {
    return (
        <DesktopProvider initialState={initialState}>
            <ThemeProvider theme={theme}>
                <DSNavbar />
            </ThemeProvider>
            <hr />
            <ThemeProvider theme={theme1}>
                <DSNavbar />
            </ThemeProvider>
            <hr />
            <ThemeProvider theme={theme2}>
                <DSNavbar />
            </ThemeProvider>
        </DesktopProvider>
    );
}