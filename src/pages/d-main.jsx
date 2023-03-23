import React from 'react'
// import axios from 'axios';
import DMainView from './d-mian-view'

import { DesktopProvider } from './d-provider/d-provider'
import './d-style.css'

// import { paricipantsData } from '../data/paricipantsData'
// import { workshopsData } from '../data/workshopsData'

const DMain = () => {

  // console.log({paricipantsData})
  // console.log({workshopsData})

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