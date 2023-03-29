import React, { useEffect, useState } from 'react'
import { tenses, binyanim} from '../../utils/utils'
import { getUid } from "../../firebase/auth-service";
import {getStatsTable} from "../../firebase/stats-service"

function StatsTable() {
  let tableContent = "Loading..."
  const [stats, setStats] = useState()
  function tdClass(score, accuracy){
    if (score < 10)
      return 'NA'
    if (accuracy < 50)
      return 'bad'
    if (accuracy < 80)
      return 'moderate'
    return 'good'
  }

  useEffect(()=>{
    getUid().then(id=>getStatsTable(id).then(data=>setStats(data.tensesStats)))
  },[])
  if(stats){
    tableContent = <table className='StatsTable'><tbody>
      <tr>
      <td className='statsTableHeader' key="corner"></td>
        {tenses.map((e)=>{return(<td className='statsTableHeader' key={e}>{e}</td>)})}
      </tr>
      {binyanim.map((binyan)=>{return(
      <tr>
        <td className='statsTableHeader' key={binyan}>{binyan}</td>
        {tenses.map((t)=>{
          let scores = Math.round(stats[t.toLowerCase()+' '+binyan][0])
          let accuracy = Math.round(stats[t.toLowerCase()+' '+binyan][1])
          return(<td className={tdClass(scores,accuracy)} key={binyan+t}>
          {scores + " / " + accuracy + "%"}
        </td>)})}
      </tr>
    )})}
    </tbody></table>
  }
  
  return (
    tableContent
  )
}

export default StatsTable