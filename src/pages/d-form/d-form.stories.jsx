import React from "react";

import DSNavbar from '../d-sub-navbar/d-sub-navbar';
import DForm from './d-form'
import DFView from './d-form-view'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DesktopProvider } from '../d-provider/d-provider';

export default {
  title: 'DeskForm',
  component: DForm,
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
        <DForm />
      </DesktopProvider>
    </ThemeProvider>
  );
};

export const View = () => {
  return (
    <ThemeProvider theme={theme}>
      <DesktopProvider initialState={initialState}>
        <DFView />
      </DesktopProvider>
    </ThemeProvider>
  );
}