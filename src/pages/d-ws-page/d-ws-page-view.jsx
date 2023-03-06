import React from 'react'
import { Box, Grid, Button } from '@mui/material'
import 'react-data-grid/lib/styles.css'
import DataGrid from 'react-data-grid'

import DWPInfo from './d-ws-page-info'
import DesktopContext from '../d-provider/d-provider'

import { wsData, participantData } from '../../moca_data'

const pButton = (prop) => {
  const n = parseFloat(prop)
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

  const { infoButton, setPageNavData, setPageNow } = React.useContext(DesktopContext);

  // columns setting
  const columns = [
    { key: 'id', name: 'ID', width: 60 },
    { key: 'name', name: 'Name', width: 120 },
    { key: 'company', name: 'Company', width: 160 },
    { key: 'role', name: 'Role', width: 120 },
    { key: 'pProgress', 
      name: 'Participent', 
      width: 100,
      formatter: (props)=>{
        return pButton(props.row.pProgress)
      }
    },
    { key: 'bProgress', 
      name: 'Boss', 
      width: 100,
      formatter: (props) => {
        return pButton(props.row.bProgress)
      }
    },
    { key: 'peers', 
      name: 'Peers', 
      width: 100,
      formatter: (props) => {
        return pButton(props.row.peers)
      }
    }
  ]

  return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container >
          <Grid item xs={infoButton ? 8.5 : 12}>
            <Box sx={{ height: '100px', width: '100%', display:'flex', justifyContent:'center'}}>
              <DataGrid
                rows={wsData}
                columns={columns}

                headerHeight={45}
                rowHeight={45}

                onCellClick={(params)=>{
                  setPageNavData({ title: ['Workshops', 'One-workshop', 'John Smith'], data: participantData});
                  setPageNow('participant');
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={3.5} hidden={!infoButton}>
            <DWPInfo />
          </Grid>
        </Grid>
      </Box>
  )
}

export default DWPView
