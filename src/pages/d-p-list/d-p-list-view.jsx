import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Box, Grid, Typography } from '@mui/material'

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';

import DPLInfo from './d-p-list-info'
import DesktopContext from '../d-provider/d-provider';

import { participantData } from '../../moca_data'

// format date stamp
const f_date = (date) => {
  return date.slice(0, 10)
  // return `${("0" + date.getHours()).slice(-2)}:${("0" + date.getMinutes()).slice(-2)} ${("0" + date.getDate()).slice(-2)}-${("0" + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`
}


const DPLView = () =>{

  const { infoButton } = React.useContext(DesktopContext);
  const [peerOpen, setPeerOpen] = React.useState(true);
  const [bossOpen, setBossOpen] = React.useState(true);

  const pData = participantData[0]

  // format data
  let rows = [];
  if (pData.forms.length > 0) {
    pData.forms.forEach((form) => {
      rows.push({
        id: form._id,
        name: pData.name,
        form: form.f_name,
        last_update: f_date(form.last_update),
        due_date: f_date(form.due_date),
        completed: form.complete,
        download: form.url
      })
    })
  }

  let p_rows = [];
  if (pData.peer_forms.length > 0) {
    pData.peer_forms.forEach((form) => {
      p_rows.push({
        id: form._id,
        name: form.p_name,
        form: form.f_name,
        last_update: f_date(form.last_update),
        due_date: f_date(form.due_date),
        completed: form.complete,
        download: form.url
      })
    })
  }

  let b_rows = [];
  if (pData.boss_forms.length > 0) {
    pData.boss_forms.forEach((form) => {
      b_rows.push({
        id: form._id,
        name: form.b_name,
        form: form.f_name,
        last_update: f_date(form.last_update),
        due_date: f_date(form.due_date),
        completed: form.complete,
        download: form.url
      })
    })
  }

  // columns setting
  const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'name', headerName: 'Name', width: 150, editable: false },
    { field: 'form', headerName: 'Form', width: 250, editable: false },
    { field: 'last_update', headerName: 'Last Update', width: 150, editable: false },
    { field: 'due_date', headerName: 'Due Date', width: 150, editable: false },
    { field: 'completed', 
      headerName: 'Completed', 
      align: 'center',
      renderCell: (isCompleted) => {
        if (isCompleted.formattedValue) {
          return <CheckRoundedIcon sx={{color: 'green'}} />
        } else {
          return <ClearRoundedIcon sx={{color:'red'}} />
        }
      }
    },
    { field: 'download', 
      headerName: 'Download', 
      align: 'center',
      renderCell: (url) => {
        // return <a href={url.formattedValue} target="_blank" rel="noopener noreferrer"><FileDownloadRoundedIcon color='primary.main'/></a>
        return <FileDownloadRoundedIcon color='primary.main'/>
      }
    }
  ]

  return(
    <Box sx={{ flexGrow: 1 }} height="100%">
      <Grid container >
        <Grid item xs={infoButton ? 8.5 : 12}>
            <Box sx={{width: 'auto', height: '30px', bgcolor:"gray", color: 'secondary.main', fontSize:'1.2rem', display: 'flex', alignItems: 'center', paddingLeft: '20px', borderRadius: '15px 15px 0 0', borderBottom:'1px solid black'}}>
              {pData.name}
            </Box>
            <DataGrid
              rows={rows}
              columns={columns}
              autoHeight={true}
              autoPageSize={true}
              pageSize={15}
              disableColumnMenu={true}
              headerHeight={45}
              rowHeight={45}
              hideFooterSelectedRowCount={true}
            />
            <Box onClick={() => setPeerOpen(!peerOpen)} sx={{width: 'auto', height: '35px', bgcolor:"primary.main", color: 'secondary.main', fontSize:'1.2rem', display: 'flex', alignItems: 'center', paddingLeft: '20px', borderRadius: '15px 15px 0 0', borderBottom:'1px solid white'}}>
              Peers
            </Box>
            <Box hidden={!peerOpen}>
              <DataGrid
                rows={p_rows}
                columns={columns}
                autoHeight={true}
                autoPageSize={true}
                pageSize={15}
                disableColumnMenu={true}
                headerHeight={45}
                rowHeight={45}
                hideFooterSelectedRowCount={true}
                
              />
            </Box>
            <Box onClick={() => setBossOpen(!bossOpen)} sx={{width: 'auto', height: '35px', bgcolor:"primary.main", color: 'secondary.main', fontSize:'1.2rem', display: 'flex', alignItems: 'center', paddingLeft: '20px', borderRadius: '15px 15px 0 0', borderBottom:'1px solid white'}}>
              Bosses
            </Box>
            <Box hidden={!bossOpen}>
              <DataGrid
                rows={b_rows}
                columns={columns}
                autoHeight={true}
                autoPageSize={true}
                pageSize={15}
                disableColumnMenu={true}
                headerHeight={45}
                rowHeight={45}
                hideFooterSelectedRowCount={true}
              />
            </Box>
        </Grid>
        <Grid item xs={3.5} hidden={!infoButton}>
          <Box sx={{width:"100%"}}>
            <DPLInfo data={pData} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default DPLView