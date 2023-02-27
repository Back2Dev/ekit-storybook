import React from 'react'
import { Box, Button, Typography, LinearProgress, styled, linearProgressClasses, Grid, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material'
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import PermPhoneMsgRoundedIcon from '@mui/icons-material/PermPhoneMsgRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

import { participantData } from '../../moca_data'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

const DPLInfo = () => {
  const data = participantData[0];
  return (   
    <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <Box sx={{backgroundColor:"white", width:"85%", borderRadius: "15px", border: "2px", borderColor: "primary", borderStyle: "solid", marginTop: "20px", paddingTop: "15px", paddingBottom: "15px"}}>
          <Typography variant="h5" sx={{color: 'primary.main', fontWeight: 'bold', textAlign: 'center'}}>{data.name}</Typography>
          <Typography variant="h6" sx={{color: 'blue', fontWeight: 'bold', textAlign: 'center'}}>{data.company}</Typography>
          <Typography variant="h6" sx={{color: 'primary.main', fontWeight: 'bold', textAlign: 'center'}}>{data.role}</Typography>
          <Typography sx={{color: 'primary.main', fontWeight: 'bold', textAlign: 'center'}}>Consultant: {data.consultant}</Typography>
          <Typography sx={{color: 'primary.main', fontWeight: 'bold', textAlign: 'center'}}>Last Updated: {data.last_updated.slice(0,10)}</Typography>
        </Box>
        <Box sx={{backgroundColor:"white", width:"85%", borderRadius: "15px", border: "2px", borderColor: "primary", borderStyle: "solid", marginTop: "10px", paddingTop: "10px", paddingBottom: "10px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
          <List>
            <ListItem disablePadding>
                <ListItemIcon><PermPhoneMsgRoundedIcon color="primary"/></ListItemIcon>
                <ListItemText primary={data.phone} />
            </ListItem>
            <ListItem disablePadding>
                <ListItemIcon><MailOutlineRoundedIcon color="primary"/></ListItemIcon>
                <ListItemText primary={data.email} />
            </ListItem>
          </List>
        </Box>
        <Box sx={{backgroundColor:"white", width:"85%", borderRadius: "15px", border: "2px", borderColor: "primary", borderStyle: "solid", marginTop: "10px", paddingTop: "15px", paddingBottom: "15px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
          <Typography variant="h6" sx={{color: 'primary.main', fontWeight: 'bold', textAlign: 'center'}}>Progress   {data.progress}</Typography>
          <BorderLinearProgress variant="determinate" value={parseFloat(data.progress)} sx={{width:"80%", height:"25px", borderRadius: "10px", marginTop:"5px", marginBottom:"5px"}}/>
          <Box  sx={{ display: 'flex', justifyContent: 'space-around', width:"100%", marginTop: "20px" }}>
            <Button variant="outlined" color="error" >
              Reject
            </Button>
            <Button variant="outlined" color="success" >
              Approve
            </Button>
          </Box>
        </Box>

        <Typography variant="h5" sx={{color: 'primary.main', fontWeight: 'bold', textAlign: 'center', marginTop: "10px"}}>Batches</Typography>
        <List sx={{width: "85%"}}>
          <ListItem disablePadding>
            <ListItemButton sx={{display:"flex", justifyContent: "space-between", borderRadius: "10px", border: "2px", borderColor: "primary", bgcolor: "white", borderStyle: "solid"}}>
              <ListItemText primary="Print"/>
              <ListItemIcon sx={{display:"flex", justifyContent: "center"}}><PrintOutlinedIcon color="primary" /></ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{display:"flex", justifyContent: "space-between", borderRadius: "10px", border: "2px", borderColor: "primary", bgcolor: "white", borderStyle: "solid", marginTop:"10px"}}>
              <ListItemText primary="E-mail"/>
              <ListItemIcon sx={{display:"flex", justifyContent: "center"}}><ForwardToInboxOutlinedIcon color="primary" /></ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{display:"flex", justifyContent: "space-between", borderRadius: "10px", border: "2px", borderColor: "primary", bgcolor: "white", borderStyle: "solid", marginTop:"10px"}}>
              <ListItemText primary="Save to PDF"/>
              <ListItemIcon sx={{display:"flex", justifyContent: "center"}}><FileDownloadOutlinedIcon color="primary" /></ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{display:"flex", justifyContent: "space-between", borderRadius: "10px", border: "2px", borderColor: "primary", bgcolor: "white", borderStyle: "solid", marginTop:"10px", marginBottom: "10px"}}>
              <ListItemText primary="Save to Word"/>
              <ListItemIcon sx={{display:"flex", justifyContent: "center"}}><TextSnippetOutlinedIcon color="primary" /></ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
    </Box>  
  )
}

export default DPLInfo