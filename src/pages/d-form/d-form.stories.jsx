import React from "react";
import DForm from './d-form'
import DFBar from './d-form-bar'
import DFView from './d-form-view'
import DFInfo from './d-form-info'

import { Box } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DFormProvider } from './d-form-provider'

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

export default {
    title: 'DeskForm',
    component: DForm,
};

export const Default = () => {
  return (
    <ThemeProvider theme={theme}>
      <DFormProvider initialState={initialState}>
        <DForm />
      </DFormProvider>
    </ThemeProvider>
  );
};

export const Bar = () => {
  return (
    <ThemeProvider theme={theme}>
      <DFormProvider initialState={initialState}>
        <DFBar />
      </DFormProvider>
    </ThemeProvider>
  );
}

export const View = () => {
  return (
    <ThemeProvider theme={theme}>
      <DFormProvider initialState={initialState}>
        <DFView />
      </DFormProvider>
    </ThemeProvider>
  );
}

export const Info = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "400px"}}>
        <DFormProvider initialState={initialState}>
          <DFInfo />
        </DFormProvider>
      </Box>
    </ThemeProvider>
  );
}