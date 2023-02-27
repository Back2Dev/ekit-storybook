import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
  Box,
  Card,
  CardContent,
  Chip,
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

const getCategoryColor = (category) => {
  switch (category) {
    case 'Workshop 2.5':
      return 'primary.main';
    case 'In-House':
      return 'secondary.main';
    case 'Custom':
      return 'alternative.main';
    default:
      return 'grey.main';
  }
};

function WorkshopCard({ workshop, category, date, participants, progress }) {
  //display upcoming date in days, weeks, months
  function getFriendlyDate(date) {
    const workshopDate = new Date(date);
    const currentDate = new Date();
    const difference = workshopDate - currentDate;
    const oneDay = 24 * 60 * 60 * 1000;
    const oneWeek = 7 * oneDay;
    const oneMonth = 30 * oneDay;

    if (difference < 0) return '';
    if (difference < oneDay) return 'Today';
    if (difference < 2 * oneDay) return 'Tomorrow';
    if (difference < oneWeek)
      return `In ${Math.floor(difference / oneDay)} days`;
    if (difference < 2 * oneWeek) return 'Next week';
    if (difference < oneMonth) {
      const weeks = Math.floor(difference / oneWeek);
      return weeks === 1 ? 'Next week' : `In ${weeks} weeks`;
    }
    const months = Math.floor(difference / oneMonth);
    return months === 1 ? 'Next month' : `In ${months} months`;
  }

  // display year if date has already passed and workshop is archived
  function ArchiveYear(date) {
    const workshopDate = new Date(date);
    const currentDate = new Date();
    const difference = workshopDate - currentDate;

    if (difference < 0) return `, ${new Date(date).getFullYear()}`;
    return '';
  }

  return (
    <Card style={{ maxWidth: 550, margin: '10px' }}>
      <CardContent>
        <Box
          style={{ display: 'flex', justifyContent: 'space-between' }}
          sx={{ marginBottom: '30px' }}
        >
          <Typography style={{ fontSize: 18, fontWeight: 'bold' }} gutterBottom>
            {workshop}
          </Typography>
          <Box display="flex" justifyContent="flex-start">
            <Chip
              label={category}
              sx={{
                backgroundColor: getCategoryColor(category),
                color: 'white',
              }}
            />
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography color="textSecondary">
            {new Date(date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            })}

            {ArchiveYear(date)}

            {getFriendlyDate(date) && ` (${getFriendlyDate(date)})`}
          </Typography>
          <Box display="flex" alignItems="center">
            <AccountCircleIcon
              style={{ height: '30px', width: '30px' }}
              sx={{ p: 0.5, color: 'primary.main' }}
            />
            <Typography
              variant="body2"
              component="p"
              sx={{ color: 'primary.main' }}
            >
              {participants}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <LinearProgress
        sx={{ height: '6px' }}
        variant="determinate"
        value={progress}
        color={getProgressColor(progress)}
      />
    </Card>
  );
}

export default WorkshopCard;
