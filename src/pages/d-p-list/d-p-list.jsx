import React from 'react'
import DPLBar from './d-p-list-bar'
import DPLView from './d-p-list-view';
import { DPListProvider } from './d-p-list-provider'

const DPList = () => {
  const initialState = {
    infoButton: false,
  }

  return (
    <div className="desktop-workshop-page">
      <DPListProvider initialState={initialState}>
        <DPLBar />
        <DPLView />
      </DPListProvider>
    </div>
  )
}

export default DPList