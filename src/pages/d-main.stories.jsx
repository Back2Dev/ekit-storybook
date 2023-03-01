import React from "react";

import DMain from './d-main'
import DTopBar from './d-top-bar/d-top-bar'
import DSNavbar from './d-sub-navbar/d-sub-navbar'
import DWList from './d-ws-list/d-ws-list'
import DWPage from './d-ws-page/d-ws-page'
import DPList from './d-p-list/d-p-list'
import DForm from './d-form/d-form'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DesktopProvider } from './d-provider/d-provider'

export default {
  title: 'Desk',
  component: DMain,
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

const initialState = {
  infoButton: false,
}
  
export const ListPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <DTopBar />
      <DesktopProvider initialState={initialState}>
        <DSNavbar />
        <DWList />
        {/* <DWPage /> */}
        {/* <DPList /> */}
        {/* <DForm /> */}
      </DesktopProvider>
    </ThemeProvider>
  );
};

export const WorkshopPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <DTopBar />
      <DesktopProvider initialState={initialState}>
        <DSNavbar />
        {/* <DWList /> */}
        <DWPage />
        {/* <DPList /> */}
        {/* <DForm /> */}
      </DesktopProvider>
    </ThemeProvider>
  );
};

export const ParticipantList = () => {
  return (
    <ThemeProvider theme={theme}>
      <DTopBar />
      <DesktopProvider initialState={initialState}>
        <DSNavbar />
        {/* <DWList /> */}
        {/* <DWPage /> */}
        <DPList />
        {/* <DForm /> */}
      </DesktopProvider>
    </ThemeProvider>
  );
};

export const FormPage = () => {
  return(
    <ThemeProvider theme={theme}>
      <DTopBar />
      <DesktopProvider initialState={initialState}>
        <DSNavbar />
        {/* <DWList /> */}
        {/* <DWPage /> */}
        {/* <DPList /> */}
        <DForm />
      </DesktopProvider>
    </ThemeProvider>
  )
}