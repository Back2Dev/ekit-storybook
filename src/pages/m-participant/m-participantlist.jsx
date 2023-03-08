import { Divider } from '@mui/material';
import React from 'react';
import participantdata from '../../data/participants.json';
import workshopdata from '../../data/workshops.json';
import ParticipantWorkshopInfoCard from './m-participant-workshopinfo';
import ParticipantCard from './m-participantcard';

const workshoparray = workshopdata.slice(3, 8);
const workshop = workshoparray[0];
const participants = participantdata;

const ParticipantList = () => {
  return (
    <>
      <ParticipantWorkshopInfoCard
        key={workshop.id}
        workshop={workshop.workshop}
        date={workshop.date}
        participants={workshop.participants}
        progress={workshop.progress}
      />
      <Divider />
      {participants.map((participant) => (
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
    </>
  );
};

export default ParticipantList;
