import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import workshopdata from '../../data/workshops.json';
import ParticipantWorkshopInfoCard from './m-participant-workshopinfo';

const theme = createTheme({
  palette: {
    primary: {
      main: '#092b58',
    },
    secondary: {
      main: '#cb1c33',
    },
    alternative: {
      main: '#69a7a9',
      light: '#9ad9db',
      dark: '#39787a',
    },
    grey: {
      main: '#c9cdd6',
      light: '#f2f3f6',
      dark: '#3e3e3e',
    },
  },
});

export default {
  title: 'ParticipantWorkshopInfoCard',
  component: ParticipantWorkshopInfoCard,
};

export const All = () => {
  const workshop = workshopdata;
  return (
    <ThemeProvider theme={theme}>
      {workshop.map((workshop) => (
        <ParticipantWorkshopInfoCard
          key={workshop.id}
          workshop={workshop.workshop}
          date={workshop.date}
          participants={workshop.participants}
          progress={workshop.progress}
        />
      ))}
    </ThemeProvider>
  );
};

export const One = () => {
  const workshop = workshopdata.slice(1, 2);
  return (
    <ThemeProvider theme={theme}>
      {workshop.map((workshop) => (
        <ParticipantWorkshopInfoCard
          key={workshop.id}
          workshop={workshop.workshop}
          date={workshop.date}
          participants={workshop.participants}
          progress={workshop.progress}
        />
      ))}
    </ThemeProvider>
  );
};