import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Box, Grid, Button } from '@mui/material'

import DWPInfo from './d-ws-page-info';
import DesktopContext from '../d-provider/d-provider';

import { wsData } from '../../moca_data';

const pButton = (value) => {
  const n = parseFloat(value.formattedValue)
  if (n > 0.75 ) {
    return (
      <Button component="button" variant="contained" color='success' size='small'>
        {n * 100} %
      </Button>
    )
  } else if (n > 0.4) {
    return (
      <Button component="button" variant="contained" color='warning' size='small'>
        {n * 100} %
      </Button>
    )
  } else {
    return (
      <Button component="button" variant="contained"  color='error' size='small'>
        {n * 100} %
      </Button>
    )
  }
}

const DWPView = () => {

  const { infoButton } = React.useContext(DesktopContext);

  // columns setting
  const columns = [
    { field: 'id', headerName: 'ID'},
    { field: 'name', headerName: 'Name'},
    { field: 'company', headerName: 'Company'},
    { field: 'role', headerName: 'Role'},
    { field: 'p-progress', 
      headerName: 'Participent', 
      align: 'center',
      renderCell: pButton
    },
    { field: 'b-progress', 
      headerName: 'Boss', 
      align: 'center',
      renderCell: pButton
    },
    { field: 'peers', 
      headerName: 'Peers', 
      align: 'center',
      renderCell: pButton
    }
  ]

  return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container >
          <Grid item xs={infoButton ? 8.5 : 12}>
            <DataGrid
              rows={wsData}
              columns={columns}
              autoHeight={true}
              autoPageSize={true}
              pageSize={15}
              disableColumnMenu={true}
              headerHeight={45}
              rowHeight={45}
              hideFooterSelectedRowCount={true}
              
            />
          </Grid>
          <Grid item xs={3.5} hidden={!infoButton}>
            <DWPInfo />
          </Grid>
        </Grid>
      </Box>
  )
}

export default DWPView
