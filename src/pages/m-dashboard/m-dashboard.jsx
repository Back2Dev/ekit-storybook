import { Typography } from '@mui/material';
import * as React from 'react';
import MUpcoming from './m-upcoming';

const user = 'Admin';

const MDashboard = () => {
  return (
    <div>
      <Typography
        sx={{
          paddingY: 2,
        }}
        variant="h5"
        component="h2"
        align="center"
      >
        Welcome, {user}
      </Typography>
      <MUpcoming />
    </div>
  );
};

export default MDashboard;
