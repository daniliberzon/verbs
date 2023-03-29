import { Link } from 'react-router-dom'
import React, { useEffect} from 'react'
import { decodeForm } from '../utils/utils'
import {findGizra} from '../utils/constantsGrammar'
import { addDynamicsStat, getAllDynamicsStats, getStatsTable, addStatsTable } from '../firebase/stats-service'
import { getUid } from '../firebase/auth-service'
import { useSelector } from 'react-redux'

function Answer(props) {
    const isLoggedIn = useSelector((state) => state.log.isLoggedIn)

    let correctTranslation = props.chosen==props.rightAnswer
    let correctForm = props.data[props.rightAnswer][props.form].replace('!',``)
    const regex = /[\u0591-\u05C7]+/g
    let rightForm = correctForm.replace('\u200F',``).replace(regex, '')
    let isFormCorrect = rightForm === props.answer.trim()
    let tense = props.columns[props.form][1].split('/')[0][0].toUpperCase() + props.columns[props.form][1].split('/')[0].slice(1)
    let binyan = props.data[props.rightAnswer][2]
    let root = props.data[props.rightAnswer][32].replace('\u200F',``).replace(regex, '')
    let gizra = findGizra(tense, binyan,root)
    
    let yourAnswer = ''
    if(isFormCorrect === false && props.answer){
      yourAnswer = 'Your answer: ' + String(props.answer)
    }

    function handleClick(e){
      props.setMode(0)
    }
    const scoresIncrease = (1*correctTranslation + 2*isFormCorrect)
    props.currentStats.current = [props.currentStats.current[0] + 1, props.currentStats.current[1] + scoresIncrease]
    let formForStats = decodeForm(props.columns[props.form][1]).split(' ')[0].replace(',','') + ' ' + props.data[props.rightAnswer][2]
  
    props.stats.current = {
      ...props.stats.current,
      [formForStats] : [props.stats.current[formForStats][0]+1, props.stats.current[formForStats][1] + scoresIncrease]
    }
    useEffect(()=>{
      if(isLoggedIn && scoresIncrease>0){
        getUid().then(id=>getAllDynamicsStats(id).then(data=>{
          const date = new Date()
          let day = date.getDate();
          let month = date.getMonth() + 1;
          let year = date.getFullYear();
          let dateString  = `${year}-${month}-${day}`
          if (dateString in data.dynamicStat){
            addDynamicsStat(dateString, data.dynamicStat[dateString] + scoresIncrease, id)
          } else {
            addDynamicsStat(dateString, scoresIncrease, id)
          }
        }))
        getUid().then(id=>getStatsTable(id).then(data=>{
          let tableKey = tense.toLowerCase() + ' ' + binyan
          let currentStats = data.tensesStats[tableKey]
          let newStats
          if (currentStats[1]>0)
            newStats = [currentStats[0] + scoresIncrease, 100*currentStats[1]*(currentStats[0] + scoresIncrease)/(100*currentStats[0] + 3*currentStats[1])]
          else
            newStats = [scoresIncrease, 100*scoresIncrease/3]
          addStatsTable(tableKey,newStats,id)
        }))
      }
    },[])
  
  return (
    <div className='answer'>
        <p className='verb'>{props.data[props.rightAnswer][31]}</p>
        <div className={`result ${correctTranslation?'right':'wrong'}`}>Translation: {correctTranslation?'Right':'Wrong'}</div>
        <div>{props.data[props.rightAnswer][3]}</div>
        <div className={`result ${isFormCorrect?'right':'wrong'}`}>Form: {isFormCorrect?'Right':'Wrong'}</div>
        <div>Binyan: {binyan}</div>
        <div>{decodeForm(props.columns[props.form][1])}</div>
        <div className=''>Correct form: <span className='verb'>{correctForm}</span></div>
        <div>{yourAnswer}</div>
        <div className='extraInfo'>
          <div className='extraInfoTitle'>More about this verb:</div>
          <div className='externalLink'><a href={props.data[props.rightAnswer][1]}  target="_blank" rel="noopener noreferrer">Pealim.com</a></div>
          <div className='externalLink'><Link target="_blank" to={`../grammar?${tense}&${binyan}&${gizra}`}>Grammar</Link></div>
        </div>
        <div className='submitButton' id='nextButton' onClick={handleClick}>Next</div>
        <div className="currentStats">
          <p>{`Questions: ${props.currentStats.current[0]}`}</p>
          <p>{`Scores: ${Math.round(props.currentStats.current[1])}`}</p>
          <p>{`Correct: ${Math.round(props.currentStats.current[1]/3.0/props.currentStats.current[0]*100)}%`}</p>
        </div>
    </div>
  )
}

export default Answer