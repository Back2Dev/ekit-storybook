import React from "react";

import DSNavbar from '../d-sub-navbar/d-sub-navbar';
import DPList from './d-p-list';
import DPLView from './d-p-list-view';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DesktopProvider } from '../d-provider/d-provider';

export default {
  title: 'DeskParticipantList',
  component: DPList,
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
        <DPList />
      </DesktopProvider>
    </ThemeProvider>
  );
};

export const View = () => {
  return (
    <ThemeProvider theme={theme}>
      <DesktopProvider initialState={initialState}>
        <DPLView />
      </DesktopProvider>
    </ThemeProvider>
  );
}