import React from 'react'

import DMainView from './d-mian-view'

import { DesktopProvider } from './d-provider/d-provider'
import './d-style.css'

const DMain = () => {

  const initialState = {
    infoButton: false,
    pageNavData: {title: ['Workshops'], data: []},
    pageNow: 'workshops',
  }

  return (
    <div className='d-main'>
      <DesktopProvider initialState={initialState}>
        <DMainView />
      </DesktopProvider>
    </div>
  )
}

export default DMain