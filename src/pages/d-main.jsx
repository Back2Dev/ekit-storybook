import React from 'react'
import DTopBar from './d-top-bar/d-top-bar'
import DWorkshopPage from './d-workshop/d-workshop'
import DWSListV from './d-workshop/d-ws-list-view'

import './d-style.css'

const DMain = () => {
  return (
    <div className='d-main'>
      <DTopBar />
      <DWorkshopPage />
      {/* <DWSListV /> */}
    </div>
  )
}

export default DMain