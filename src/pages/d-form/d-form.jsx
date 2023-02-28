import React from 'react'
import DFBar from './d-form-bar'
import DFView from './d-form-view'
import { DFormProvider } from './d-form-provider'

const DForm = () => {
  const initialState = {
    infoButton: false,
  }

  return (
    <div className="desktop-workshop-page">
      <DFormProvider initialState={initialState}>
        <DFBar />
        <DFView />
      </DFormProvider>
    </div>
  )
}

export default DForm