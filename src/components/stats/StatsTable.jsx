import React from 'react'
import { tenses, binyanim} from '../../utils/utils'

function StatsTable() {
  let stats = {}
  for (let i=0; i<tenses.length; i++){
    for(let j=0; j<binyanim.length;j++){
        stats[tenses[i].toLowerCase()+' '+binyanim[j]] = [Math.random()*100,Math.random()*100]
    }
  }
  function tdClass(score, accuracy){
    if (score < 10)
      return 'NA'
    if (accuracy < 50)
      return 'bad'
    if (accuracy < 80)
      return 'moderate'
    return 'good'
  }
  let tableContent = <table className='StatsTable'>
    <tr>
    <td className='statsTableHeader'></td>
      {tenses.map((e)=>{return(<td className='statsTableHeader'>{e}</td>)})}
    </tr>
    {binyanim.map((binyan)=>{return(
      <tr>
        <td className='statsTableHeader'>{binyan}</td>
        {tenses.map((t)=>{
          let scores = Math.round(stats[t.toLowerCase()+' '+binyan][0])
          let accuracy = Math.round(stats[t.toLowerCase()+' '+binyan][1])
          return(<td className={tdClass(scores,accuracy)}>
          {scores + " / " + accuracy + "%"}
        </td>)})}
      </tr>
    )})}
  </table>
  return (
    tableContent
  )
}

export default StatsTable