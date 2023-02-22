import React from 'react'
import { Box, Grid } from '@mui/material'
import DWPBar from './d-ws-page-bar'
import DWPView from './d-ws-page-view';
import DWPInfo from './d-ws-page-info';

const DWPage = () => {
  return (
    <>
			<DWPBar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container >
          <Grid item xs={8}>
            <DWPView />
          </Grid>
          <Grid item xs={4}>
            <DWPInfo />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default DWPage