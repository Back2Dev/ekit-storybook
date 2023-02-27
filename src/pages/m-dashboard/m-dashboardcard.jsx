import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';

const MDashboardCard = (props) => {
  const { title, icon, children } = props;
  return (
    <Card style={{ maxWidth: 500, margin: '10px', background: '#f2f3f6' }}>
      <CardContent
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          style={{
            marginLeft: '10px',
          }}
        >
          {icon}
        </Box>
        <Typography
          style={{
            textAlign: 'center',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textTransform: 'none',
            marginRight: '25px',
          }}
          sx={{
            flexGrow: 1,
          }}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MDashboardCard;
