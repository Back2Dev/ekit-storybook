import React from 'react';
import DInfoSide from './d-info-side';
import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default {
  title: 'DeskInfoSide',
  component: DInfoSide,
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

export const Default = () => {
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ width: "400px"}}>
          <DInfoSide />
        </Box>
      </ThemeProvider>
    );
}