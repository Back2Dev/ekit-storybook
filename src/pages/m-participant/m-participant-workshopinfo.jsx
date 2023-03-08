import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import {
  Box,
  Card,
  CardContent,
  Divider,
  IconButton,
  LinearProgress,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

const getProgressColor = (progress) => {
  if (progress < 50) {
    return 'error';
  } else if (progress < 80) {
    return 'warning';
  } else {
    return 'success';
  }
};

function ParticipantWorkshopInfoCard({
  workshop,
  date,
  participants,
  progress,
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEmailClick = () => {
    // Handle email click
  };

  const handlePdfClick = () => {
    // Handle save to PDF click
  };

  const handleWordClick = () => {
    // Handle save to word click
  };

  const handleFileClick = () => {
    // Handle blank forms click
  };

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
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'start',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 1,
            }}
          >
            <Typography style={{ fontSize: 18, fontWeight: 'bold' }}>
              {workshop}
            </Typography>
            <Box>
              <IconButton onClick={handleMenuClick}>
                <MoreVertIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleEmailClick}>
                  <EmailOutlinedIcon sx={{ marginRight: '10px' }} />
                  Email
                </MenuItem>
                <MenuItem onClick={handlePdfClick}>
                  <PictureAsPdfOutlinedIcon sx={{ marginRight: '10px' }} />
                  Save to PDF
                </MenuItem>
                <MenuItem onClick={handleWordClick}>
                  <SaveAltOutlinedIcon sx={{ marginRight: '10px' }} />
                  Save to Word
                </MenuItem>
                <MenuItem onClick={handleFileClick}>
                  <InsertDriveFileOutlinedIcon sx={{ marginRight: '10px' }} />
                  Blank forms
                </MenuItem>
              </Menu>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
            }}
          >
            <Typography fontWeight="bold" variant="body2">
              {'Date: '}
            </Typography>
            <Typography style={{ marginLeft: '5px' }} variant="body2">
              {date.includes('/') ? (
                <>
                  {new Date(date.split('/')[0]).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })}
                  {' - '}
                  {new Date(date.split('/')[1]).toLocaleDateString('en-US', {
                    month:
                      new Date(date.split('/')[0]).getMonth() !==
                      new Date(date.split('/')[1]).getMonth()
                        ? 'short'
                        : undefined,
                    day: 'numeric',
                  })}
                </>
              ) : (
                <>
                  {new Date(date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })}
                </>
              )}
            </Typography>
          </Box>
          <Box sx={{ width: '100%', display: 'flex' }}>
            <Typography fontWeight="bold" variant="body2">
              {'Participants: '}
            </Typography>
            <Typography style={{ marginLeft: '5px' }} variant="body2">
              {participants}
            </Typography>
          </Box>
          <Box sx={{ width: '100%', marginTop: '10px', marginBottom: '10px' }}>
            <Divider />
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="body1">Progress:</Typography>
          <LinearProgress
            variant="determinate"
            value={progress}
            color={getProgressColor(progress)}
            style={{
              width: '100%',
              height: '8px',
              marginLeft: '10px',
              border: '1px solid #3e3e3e',
              borderRadius: '6px',
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}

export default ParticipantWorkshopInfoCard;
