import React from 'react'
import { decodeForm } from '../utils/utils'

function Answer(props) {
    let correctTranslation = props.chosen==props.rightAnswer
    let correctForm = props.data[props.rightAnswer][props.form].replace('!',``)
    const regex = /[\u0591-\u05C7]+/g
    let rightForm = correctForm.replace('\u200F',``).replace(regex, '')
    let isFormCorrect = rightForm === props.answer.trim()
    let yourAnswer = ''
    if(isFormCorrect === false && props.answer){
      yourAnswer = 'Your answer: ' + String(props.answer)
    }

    function handleClick(e){
      props.setMode(0)
    }
    props.currentStats.current = [props.currentStats.current[0] + 1, props.currentStats.current[1] + (1*correctTranslation + 2*isFormCorrect)/3.]
    let formForStats = decodeForm(props.columns[props.form][1]).split(' ')[0].replace(',','') + ' ' + props.data[props.rightAnswer][2]
    props.stats.current = {
      ...props.stats.current,
      [formForStats] : [props.stats.current[formForStats][0]+1, props.stats.current[formForStats][1] + (1*correctTranslation + 2*isFormCorrect)/3.]
    }
    console.log(props.stats.current)
  return (
    <div className='answer'>
        <p className='verb'>{props.data[props.rightAnswer][31]}</p>
        <div className={`result ${correctTranslation?'right':'wrong'}`}>Translation: {correctTranslation?'Right':'Wrong'}</div>
        <div>{props.data[props.rightAnswer][3]}</div>
        <div className={`result ${isFormCorrect?'right':'wrong'}`}>Form: {isFormCorrect?'Right':'Wrong'}</div>
        <div>Binyan: {props.data[props.rightAnswer][2]}</div>
        <div>{decodeForm(props.columns[props.form][1])}</div>
        <div className=''>Correct form: <span className='verb'>{correctForm}</span></div>
        <div>{yourAnswer}</div>
        <div className='externalLink'><a href={props.data[props.rightAnswer][1]}  target="_blank" rel="noopener noreferrer">more information</a></div>
        <div className='submitButton' id='nextButton' onClick={handleClick}>next</div>
        <div className="currentStats">
          <p>{`Questions: ${props.currentStats.current[0]} Correct: ${Math.round(props.currentStats.current[1]/props.currentStats.current[0]*100)}%`}</p>
        </div>
    </div>
  )
}

export default Answer