import React, { useState, useRef, useEffect } from 'react'
import { getRandomN, shuffle , tensesForms, tenses, binyanim, tensesStats} from '../utils/utils'
import Question from './Question'
import Answer from './Answer'


function Quiz(props) {
  const [mode, setMode] = useState(0)
  const [options, setOptions] = useState(-1)
  const [question, setQuestion] = useState(-1)
  const [form, setForm] = useState(-1)
  const [answer ,setAnswer] = useState('')
  const [chosen, setChosen] = useState(-1)
  const currentStats = useRef([0,0])
  const stats = useRef(tensesStats)

  let variants = []

  for (const [key, value] of Object.entries(props.chosenTenses)) {
    if (value === 1){
        variants = [...variants, ...tensesForms[tenses[key]]]
      }
  }
  if(variants.length === 0){
      for (const [key, value] of Object.entries(tensesForms)) {
        variants = [...variants, ...value]
    }
  }

  let filteredData = []
  for (const [key, value] of Object.entries(props.chosenBinyanim)) {
    if (value === 1){
      filteredData = [...filteredData, ...props.data.filter(x => x[2]===binyanim[key])]
      }
  }

  if(filteredData.length===0){
    filteredData = props.data
  }

  function getNewQuestion(){
    let ops = getRandomN(4, 0, filteredData.length-1)
    const qstn =ops[0]
    const frm = variants[getRandomN(1, 0, variants.length-1)]
    shuffle(ops)
    setOptions(ops)
    setQuestion(qstn)
    setForm(frm)
    setAnswer('')
    setChosen(-1)
    if (filteredData[qstn][frm] === ''){
      getNewQuestion()
    }
  }


  let content
  switch (mode) {
    case 0:
      getNewQuestion()
      setMode(1)
      break;
    case 1:
      content = <Question data = {filteredData} columns = {props.columns} options = {options} form = {form} setMode={setMode} chosen={chosen} setChosen ={setChosen} answer = {answer} setAnswer={setAnswer} rightAnswer = {question}/>
      break
    case 2:
      content = <Answer data = {filteredData} columns = {props.columns} options = {options} form = {form} rightAnswer = {question} chosen={chosen} answer = {answer} setMode={setMode} stats={stats} currentStats={currentStats}/>
      break
      default:
      content = <div>error</div>
      break;
  }
  
  return (
    <div className='quiz'>
      <div className='backButton' onClick={props.changePage(0)}>Back to settings</div>
      {content}
    </div>
  )
}

export default Quiz