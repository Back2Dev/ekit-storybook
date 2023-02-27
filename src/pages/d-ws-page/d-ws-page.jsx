import React from 'react'
import { Box, Grid } from '@mui/material'
import DWPBar from './d-ws-page-bar'
import DWPView from './d-ws-page-view';
import { DWSPageProvider } from './d-ws-page-provider';

const DWPage = () => {
  const initialState = {
    infoButton: false,
  }

  return (
    <div className="desktop-workshop-page">
      <DWSPageProvider initialState={initialState}>
        <DWPBar />
        <DWPView />
      </DWSPageProvider>
    </div>
  )
}

export default DWPage