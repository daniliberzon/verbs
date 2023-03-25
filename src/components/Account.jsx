import React from 'react'
import Navigation from './Navigation'
import Dynamics from './stats/Dynamics'
import StatsTable from './stats/StatsTable'

function Account() {
  return (
    <div className='page'>
      <Navigation />
      <div className='mainHeader'>User Statistics</div>
      <div className='dynamics'>
        <Dynamics />
      </div>
      <div className='dynamics'>
        <StatsTable />
      </div>
    </div>
  )
}

export default Account