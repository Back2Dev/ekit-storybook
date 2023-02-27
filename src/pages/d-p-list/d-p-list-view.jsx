import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Box, Grid } from '@mui/material'

import DPLInfo from './d-p-list-info'
import DPListContext from './d-p-list-provider'

import { participantData } from '../../moca_data'

// format date stamp
const f_date = (date) => {
  return date.slice(0, 10)
  // return `${("0" + date.getHours()).slice(-2)}:${("0" + date.getMinutes()).slice(-2)} ${("0" + date.getDate()).slice(-2)}-${("0" + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`
}


const DPLView = () =>{

  const { infoButton } = React.useContext(DPListContext);
  const pData = participantData[0]

  // format data
  let row = [];
  if (pData.forms.length > 0) {
    pData.forms.forEach((form) => {
      row.push({
        id: form._id,
        name: pData.name,
        form: form.f_name,
        last_update: f_date(form.last_update),
        due_date: f_date(form.due_date),
        complete: form.complete,
        download: form.url
      })
    })
  }
  if (pData.peer_forms.length > 0) {
    row.push({
      id: "Peers",
    })

    pData.peer_forms.forEach((form) => {
      row.push({
        id: form._id,
        name: form.p_name,
        form: form.f_name,
        last_update: f_date(form.last_update),
        due_date: f_date(form.due_date),
        complete: form.complete,
        download: form.url
      })
    })
  }
  if (pData.boss_forms.length > 0) {
    row.push({
      id: "Bosses",
    })

    pData.boss_forms.forEach((form) => {
      row.push({
        id: form._id,
        name: form.b_name,
        form: form.f_name,
        last_update: f_date(form.last_update),
        due_date: f_date(form.due_date),
        complete: form.complete,
        download: form.url
      })
    })
  }

  // columns setting
  const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'name', headerName: 'name', width: 150, editable: false },
    { field: 'form', headerName: 'form', width: 250, editable: false },
    { field: 'last_update', headerName: 'Last Update', width: 150, editable: false },
    { field: 'due_date', headerName: 'Due Date', width: 150, editable: false },
    { field: 'complete', headerName: 'Complete', width: 120, editable: false },
    { field: 'download', headerName: 'Download', width: 120, editable: false },
  ]

  return(
    <Box sx={{ flexGrow: 1 }} height="100%">
      <Grid container >
        <Grid item xs={infoButton ? 8.5 : 12}>
          <Box sx={{ height: '600px', width: '100%' }}>
            <DataGrid
              rows={row}
              columns={columns}
              pageSize={15}
              rowsPerPageOptions={[15]}
              disableSelectionOnClick
            />
          </Box>
        </Grid>
        <Grid item xs={3.5} hidden={!infoButton}>
          <DPLInfo data={pData} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default DPLView