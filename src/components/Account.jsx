import React, { useEffect } from 'react'
import { useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Navigation from './Navigation'
import Dynamics from './stats/Dynamics'
import StatsTable from './stats/StatsTable'

function Account() {
  const isLoggedIn = useSelector((state) => state.log.isLoggedIn)
  const navigate = useNavigate();
  useEffect(()=>{if(!isLoggedIn) navigate("/")})
  if(!isLoggedIn){
    return (<div>You are not logged in</div>)
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