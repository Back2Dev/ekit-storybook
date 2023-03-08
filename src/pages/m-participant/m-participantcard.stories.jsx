import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import participantdata from '../../data/participants.json';
import ParticipantCard from './m-participantcard';

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
  title: 'MobileParticipantCard',
  component: ParticipantCard,
};

export const Default = () => {
  const participant = participantdata;
  return (
    <ThemeProvider theme={theme}>
      {participant.map((participant) => (
        <ParticipantCard
          key={participant.id}
          name={participant.name}
          avatar={participant.avatar}
          company={participant.company}
          pProgress={participant.pProgress}
          bProgress={participant.bProgress}
          peers={participant.peers}
        />
      ))}
    </ThemeProvider>
  );
};
