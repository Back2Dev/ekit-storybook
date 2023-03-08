import {
  Avatar,
  Box,
  Card,
  CardContent,
  CircularProgress,
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

function getAverage(bProgress, pProgress, peers) {
  return ((bProgress + pProgress + peers) / 3) * 100;
}

function ParticipantCard({
  name,
  company,
  avatar,
  pProgress,
  bProgress,
  peers,
}) {
  return (
    <Card
      style={{ maxWidth: 550, margin: '10px' }}
      sx={{ border: 1, borderColor: 'grey.main', paddingBottom: 0 }}
    >
      <CardContent
        sx={{
          paddingBottom: 0,
          '&:last-child': {
            paddingBottom: '16px',
          },
        }}
      >
        <Box
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Box position="relative" display="inline-flex">
            <CircularProgress
              variant="determinate"
              color={getProgressColor(getAverage(bProgress, pProgress, peers))}
              value={getAverage(bProgress, pProgress, peers)}
              size={65}
              thickness={2.5}
              style={{
                position: 'absolute',
                zIndex: 1,
                transform: 'rotate(-270deg)',
                shapeRendering: 'auto',
              }}
            />
            <Box
              position="static"
              display="flex"
              alignItems="center"
              justifyContent="center"
              zIndex={0}
            >
              {avatar ? (
                <Avatar
                  alt={name}
                  src={avatar}
                  sx={{ width: 65, height: 65 }}
                />
              ) : (
                <Avatar sx={{ width: 65, height: 65 }}> {name[0]} </Avatar>
              )}
            </Box>
            <Box
              position="absolute"
              top="80%"
              left="27%"
              textAlign="center"
              zIndex={2}
            >
              <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <Typography
                  variant="caption"
                  component="div"
                  sx={{ padding: 0.3, paddingTop: 0, paddingBottom: 0 }}
                >
                  {`${Math.round(getAverage(bProgress, pProgress, peers))}%`}
                </Typography>
              </Card>
            </Box>
          </Box>

          <Box sx={{ paddingLeft: 2 }}>
            <Typography style={{ fontSize: 20, fontWeight: 'bold' }}>
              {name}
            </Typography>
            <Typography variant="subtitle2">{company}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ParticipantCard;
