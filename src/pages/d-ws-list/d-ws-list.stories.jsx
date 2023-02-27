import React from "react";
import DWList from "./d-ws-list";
import DWLBar from './d-ws-list-bar';
import DWLView from './d-ws-list-view';
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
    title: 'DeskWorkshopList',
    component: DWList,
};

export const Default = () => {
  return (
    <ThemeProvider theme={theme}>
      <DWList />;
    </ThemeProvider>
  );
};

export const Bar = () => {
    return (
        <ThemeProvider theme={theme}>
        <DWLBar />
        </ThemeProvider>
    );
}

export const View = () => {
    return (
        <ThemeProvider theme={theme}>
        <DWLView />
        </ThemeProvider>
    );
}
