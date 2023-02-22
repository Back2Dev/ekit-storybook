import React from 'react'
import DMian from './pages/d-main'
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

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <DMian />
    </ThemeProvider>
  )
}

export default App