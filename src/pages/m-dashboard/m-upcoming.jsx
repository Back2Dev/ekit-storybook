import { Card, Typography } from '@mui/material';
import * as React from 'react';
import workshopdata from '../../data/workshops.json';
import WorkshopCard from './m-workshopcard';

const earliestWorkshop = workshopdata
  .sort((a, b) => new Date(a.date.start) - new Date(b.date.start))
  .slice(0, 2);

const MUpcoming = () => {
  return (
    <div>
      <Card style={{ margin: '10px', background: '#f2f3f6' }}>
        <Typography
          variant="h6"
          component="h5"
          align="center"
          sx={{
            paddingY: 1,
            fontWeight: 'bold',
          }}
        >
          Upcoming
        </Typography>
        {earliestWorkshop.map((workshop) => (
          <WorkshopCard
            workshop={workshop.workshop}
            date={new Date(workshop.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            })}
            participants={workshop.participants}
            progress={workshop.progress}
            key={workshop.id}
          />
        ))}
      </Card>
    </div>
  );
};

export default MUpcoming;
