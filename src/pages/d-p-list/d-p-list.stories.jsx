import React from "react";
import DPList from './d-p-list'
import DPLBar from './d-p-list-bar'
import DPLView from './d-p-list-view';
import DPLInfo from './d-p-list-info'

import { Box } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DPListProvider } from './d-p-list-provider'

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
    title: 'DeskParticipantList',
    component: DPList,
};

export const Default = () => {
  return (
    <ThemeProvider theme={theme}>
      <DPListProvider initialState={initialState}>
        <DPList />
      </DPListProvider>
    </ThemeProvider>
  );
};

export const Bar = () => {
  return (
    <ThemeProvider theme={theme}>
      <DPListProvider initialState={initialState}>
        <DPLBar />
      </DPListProvider>
    </ThemeProvider>
  );
}

export const View = () => {
  return (
    <ThemeProvider theme={theme}>
      <DPListProvider initialState={initialState}>
        <DPLView />
      </DPListProvider>
    </ThemeProvider>
  );
}

export const Info = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "400px"}}>
        <DPListProvider initialState={initialState}>
          <DPLInfo />
        </DPListProvider>
      </Box>
    </ThemeProvider>
  );
}