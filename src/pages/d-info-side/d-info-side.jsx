import React from 'react'
import { Box, Button, Typography } from '@mui/material'

import BorderLinearProgress from '../components/border-linear-progress';

import { listData } from '../../moca_data'

const data = listData[1]

const DInfoSide = () => {
  return (   
    <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <Box sx={{backgroundColor:"white", width:"85%", borderRadius: "15px", border: "2px", borderColor: "primary", borderStyle: "solid", marginTop: "20px", paddingTop: "25px", paddingBottom: "25px"}}>
          <Typography variant="h5" sx={{color: 'primary.main', fontWeight: 'bold', textAlign: 'center'}}>{data.Workshop}</Typography>
          <Typography variant="h6" sx={{color: 'blue', fontWeight: 'bold', textAlign: 'center'}}>{data.Date}</Typography>
          <Typography sx={{color: 'primary.main', fontWeight: 'bold', textAlign: 'center'}}>Participants: {data.Participants}</Typography>
          <Typography variant="h6" sx={{color: 'primary.main', fontWeight: 'bold', textAlign: 'center'}}>{data.Type}</Typography>
        </Box>
        <Box sx={{backgroundColor:"white", width:"85%", borderRadius: "15px", border: "2px", borderColor: "primary", borderStyle: "solid", marginTop: "20px", paddingTop: "15px", paddingBottom: "15px", marginBottom: "20px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
          <Typography variant="h6" sx={{color: 'primary.main', fontWeight: 'bold', textAlign: 'center'}}>Progress   {data.Progress *100}%</Typography>
          <BorderLinearProgress variant="determinate" value={parseFloat(data.Progress)*100} sx={{width:"80%", height:"25px", borderRadius: "10px", marginTop:"5px", marginBottom:"5px"}}/>
          <Box  sx={{ display: 'flex', justifyContent: 'space-around', width:"100%", marginTop: "20px" }}>
            <Button variant="outlined" color="error" >
              Reject
            </Button>

            <Button variant="outlined" color="success" >
              Approve
            </Button>
          </Box>
        </Box>

        {/* <Typography variant="h5" sx={{color: 'primary.main', fontWeight: 'bold', textAlign: 'center', marginTop: "20px"}}>Batches</Typography>
        <List sx={{width: "85%"}}>
          <ListItem disablePadding>
            <ListItemButton sx={{display:"flex", justifyContent: "space-between", borderRadius: "10px", border: "2px", borderColor: "primary", borderStyle: "solid"}}>
              <ListItemText primary="Print"/>
              <ListItemIcon sx={{display:"flex", justifyContent: "center"}}><PrintOutlinedIcon color="primary" /></ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{display:"flex", justifyContent: "space-between", borderRadius: "10px", border: "2px", borderColor: "primary", borderStyle: "solid", marginTop:"15px"}}>
              <ListItemText primary="E-mail"/>
              <ListItemIcon sx={{display:"flex", justifyContent: "center"}}><ForwardToInboxOutlinedIcon color="primary" /></ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{display:"flex", justifyContent: "space-between", borderRadius: "10px", border: "2px", borderColor: "primary", borderStyle: "solid", marginTop:"15px"}}>
              <ListItemText primary="Save to PDF"/>
              <ListItemIcon sx={{display:"flex", justifyContent: "center"}}><FileDownloadOutlinedIcon color="primary" /></ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{display:"flex", justifyContent: "space-between", borderRadius: "10px", border: "2px", borderColor: "primary", borderStyle: "solid", marginTop:"15px", marginBottom: "20px"}}>
              <ListItemText primary="Save to Word"/>
              <ListItemIcon sx={{display:"flex", justifyContent: "center"}}><TextSnippetOutlinedIcon color="primary" /></ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List> */}
    </Box>  
  )
}

export default DInfoSide