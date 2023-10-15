import React from 'react'
import './body.css'

import Listing from './Body Section/Listing Section/Listing'
import Activity from './Body Section/Activity Section/Activity'
import Top from './Body Section/Top Section/Top'

const Body = () => {
  return (
    <div className='mainContent'>
      <Top/>
      <div className='bottom flex'>
        <Listing/>
        <Activity/>
      </div>
    </div>
  )
}

export default Body