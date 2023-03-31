import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Navigation from './Navigation'
import Dynamics from './stats/Dynamics'
import StatsTable from './stats/StatsTable'

function Account() {
  const isLoggedIn = useSelector((state) => state.log.isLoggedIn)
  const navigate = useNavigate();
  useEffect(()=>{if(isLoggedIn===0) navigate("/")})
  if(isLoggedIn!=1){
    return (<div>
        <Navigation />
        <div>Loading...</div>
      </div>)
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