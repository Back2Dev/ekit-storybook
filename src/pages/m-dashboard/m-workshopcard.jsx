import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
  Box,
  Card,
  CardContent,
  LinearProgress,
  Typography,
} from '@mui/material';
import React from 'react';

const getProgressColor = (progress) => {
  if (progress < 50) {
    return 'error';
  } else if (progress < 80) {
    return 'warning';
  } else {
    return 'success';
  }
};

const WorkshopCard = ({ workshop, date, participants, progress }) => {
  return (
    <Card style={{ maxWidth: 500, margin: '10px' }}>
      <CardContent>
        <Typography style={{ fontSize: 18, fontWeight: 'bold' }} gutterBottom>
          {workshop}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography color="textSecondary">{date}</Typography>
          <Box display="flex" alignItems="center">
            <AccountCircleIcon
              style={{ height: '30px', width: '30px' }}
              sx={{ p: 0.5 }}
            />
            <Typography variant="body2" component="p">
              {participants}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <LinearProgress
        variant="determinate"
        value={progress}
        color={getProgressColor(progress)}
      />
    </Card>
  );
};

export default WorkshopCard;
