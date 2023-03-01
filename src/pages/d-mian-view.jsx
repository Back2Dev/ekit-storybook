import React from 'react'

import DTopBar from './d-top-bar/d-top-bar'
import DSNavbar from './d-sub-navbar/d-sub-navbar'
import DWList from './d-ws-list/d-ws-list'
import DWPage from './d-ws-page/d-ws-page'
import DPList from './d-p-list/d-p-list'
import DForm from './d-form/d-form'

import DesktopContext from './d-provider/d-provider'

const DMainView = () => {

  const { pageNow } = React.useContext(DesktopContext)

  return (
    <>
      <DTopBar />
      <DSNavbar />
      { pageNow === 'participant' 
          ? <DPList /> 
          : pageNow === 'form' 
            ? <DForm /> 
            : pageNow === 'workshopPage' 
              ? <DWPage /> 
              : <DWList />
      }
    </>
  )
}

export default DMainView