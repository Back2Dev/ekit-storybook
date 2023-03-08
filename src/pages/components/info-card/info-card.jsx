import React from 'react'
import { Box, Button, Typography, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material'

import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import PermPhoneMsgRoundedIcon from '@mui/icons-material/PermPhoneMsgRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

import ProgressBar from '../progress-bar';

const WorkshopCard = (data) => {
  return (
    <Box sx={{backgroundColor:"white", width:"85%", borderRadius: "15px", border: "2px", borderColor: "primary", borderStyle: "solid", marginTop: "20px", paddingTop: "25px", paddingBottom: "25px"}}>
      <Typography variant="h5" sx={{color: 'primary.main', fontWeight: 'bold', textAlign: 'center'}}>{data.Workshop}</Typography>
      <Typography variant="h6" sx={{color: 'blue', fontWeight: 'bold', textAlign: 'center'}}>{data.Date}</Typography>
      <Typography sx={{color: 'primary.main', fontWeight: 'bold', textAlign: 'center'}}>Participants: {data.Participants}</Typography>
      <Typography variant="h6" sx={{color: 'primary.main', fontWeight: 'bold', textAlign: 'center'}}>{data.Type}</Typography>
    </Box>
  )
}

const ProgressCard = (data) => {
  return (
    <Box sx={{backgroundColor:"white", width:"85%", borderRadius: "15px", border: "2px", borderColor: "primary", borderStyle: "solid", marginTop: "20px", paddingTop: "15px", paddingBottom: "15px", marginBottom: "20px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <Typography variant="h6" sx={{color: 'primary.main', fontWeight: 'bold', textAlign: 'center'}}>Progress   {data.progress}%</Typography>
      <ProgressBar 
        value={data.progress} 
        width="80%" 
        height="25px"
        borderRadius="10px"
      />
      <Box  sx={{ display: 'flex', justifyContent: 'space-around', width:"100%", marginTop: "20px" }}>
        <Button variant="outlined" color="error" >
          Reject
        </Button>

        <Button variant="outlined" color="success" >
          Approve
        </Button>
      </Box>
    </Box>
  )
}

const ParticipantCard = (data) => {
  return (
    <Box sx={{backgroundColor:"white", width:"85%", borderRadius: "15px", border: "2px", borderColor: "primary", borderStyle: "solid", marginTop: "20px", paddingTop: "15px", paddingBottom: "15px"}}>
      <Typography variant="h5" sx={{color: 'primary.main', fontWeight: 'bold', textAlign: 'center'}}>{data.name}</Typography>
      <Typography variant="h6" sx={{color: 'blue', fontWeight: 'bold', textAlign: 'center'}}>{data.company}</Typography>
      <Typography variant="h6" sx={{color: 'primary.main', fontWeight: 'bold', textAlign: 'center'}}>{data.role}</Typography>
      <Typography sx={{color: 'primary.main', fontWeight: 'bold', textAlign: 'center'}}>Consultant: {data.consultant}</Typography>
      <Typography sx={{color: 'primary.main', fontWeight: 'bold', textAlign: 'center'}}>Last Updated: {data.last_updated.slice(0,10)}</Typography>
    </Box>
  )
}

const ConnectCard = (data) => {
  return (
    <Box sx={{backgroundColor:"white", width:"85%", borderRadius: "15px", border: "2px", borderColor: "primary", borderStyle: "solid", marginTop: "20px", paddingTop: "10px", paddingBottom: "10px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
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
  )
}

const BatchesCard = (data) => {
  return (
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
  )
}

const InfoCard = (props) => {
  const data = props.data

  switch (props.cardType) {
    // workshop page info
    case 'workshop':
      return (
        <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
          <WorkshopCard {...data} />
          <ProgressCard {...data} />
        </Box>
      )
    // participent page info
    case 'participant':
      return (
        <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
          <ParticipantCard {...data} />
          <ConnectCard {...data} />
          <ProgressCard {...data} />
          <Typography variant="h5" sx={{color: 'primary.main', fontWeight: 'bold', textAlign: 'center', marginBottom:'5px'}}>Batches</Typography>
          <BatchesCard {...data} />
        </Box>
      )
    // for each card
    case 'WorkshopCard':
      return (
        <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
          <WorkshopCard {...data} />
        </Box>
      )
      case 'ConnectCard':
        return (
          <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <ConnectCard {...data} />
          </Box>
        )
    case 'ProgressCard':
      return (
        <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
          <ProgressCard {...data} />
        </Box>
      )
    case 'BatchesCard':
      return (
        <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
          <Typography variant="h5" sx={{color: 'primary.main', fontWeight: 'bold', textAlign: 'center', marginBottom:'5px'}}>Batches</Typography>
          <BatchesCard {...data} />
        </Box>
      )
    defaule:
      return <div>something not right</div>
  }
}


export default InfoCard