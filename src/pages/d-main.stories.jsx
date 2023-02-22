import React from "react";
import DMain from "./d-main";
import DTopBar from './d-top-bar/d-top-bar'
import DWList from './d-ws-list/d-ws-list'
import DWPage from './d-ws-page/d-ws-page'
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
    title: 'DeskMainPage',
    component: DMain,
  };
  
export const ListPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <DTopBar />
      <DWList />
    </ThemeProvider>
  );
};

export const WorkshopPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <DTopBar />
      <DWPage />
    </ThemeProvider>
  );
};