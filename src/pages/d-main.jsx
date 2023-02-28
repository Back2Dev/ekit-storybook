import React from 'react'
import DTopBar from './d-top-bar/d-top-bar'
import DWList from './d-ws-list/d-ws-list'
import DWPage from './d-ws-page/d-ws-page'
import DPList from './d-p-list/d-p-list'
import DForm from './d-form/d-form'

import './d-style.css'

const DMain = () => {
  return (
    <div className='d-main'>
      <DTopBar />
      {/* <DWList /> */}
      {/* <DWPage /> */}
      {/* <DPList /> */}
      <DForm />
    </div>
  )
}

export default DMain