import React from 'react';
import DTopBar from './d-top-bar';
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

export default {
    title: 'DeskTopBar',
    component: DTopBar,
};

export const Default = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <DTopBar />
            </ThemeProvider>
            <ThemeProvider theme={theme1}>
                <DTopBar />
            </ThemeProvider>
            <ThemeProvider theme={theme2}>
                <DTopBar />
            </ThemeProvider>
        </>
    );
}