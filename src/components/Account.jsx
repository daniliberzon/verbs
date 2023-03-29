import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Navigation from './Navigation'
import Dynamics from './stats/Dynamics'
import StatsTable from './stats/StatsTable'

function Account() {
  const isLoggedIn = useSelector((state) => state.log.isLoggedIn)
  const navigate = useNavigate();
  if (!isLoggedIn){
    navigate("/")
  }
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