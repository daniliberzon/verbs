import React, { useState, useRef, useEffect } from 'react'
import { getRandomN, shuffle , PAST, PRESENT, FUTURE, IMPERATIVE} from '../utils/utils'
import Question from './Question'
import Answer from './Answer'


function Quiz(props) {
  const [mode, setMode] = useState(0)
  const [options, setOptions] = useState(-1)
  const [question, setQuestion] = useState(-1)
  const [form, setForm] = useState(-1)
  const [answer ,setAnswer] = useState('')
  const [chosen, setChosen] = useState(-1)

  const variants = [...PAST, ...PRESENT, ...FUTURE, ...IMPERATIVE]

  function getNewQuestion(){
    let ops = getRandomN(4, 0, props.data.length-1)
    const qstn =ops[0]
    // const frm = Math.floor(getRandomN(1, 4, 57)/2)*2
    const frm = variants[getRandomN(1, 0, variants.length-1)]
    shuffle(ops)
    setOptions(ops)
    setQuestion(qstn)
    setForm(frm)
    setAnswer('')
    setChosen(-1)
  }


  let content
  switch (mode) {
    case 0:
      getNewQuestion()
      setMode(1)
      break;
    case 1:
      content = <Question data = {props.data} columns = {props.columns} options = {options} form = {form} setMode={setMode} chosen={chosen} setChosen ={setChosen} answer = {answer} setAnswer={setAnswer} rightAnswer = {question}/>
      break
    case 2:
      content = <Answer data = {props.data} columns = {props.columns} options = {options} form = {form} rightAnswer = {question} chosen={chosen} answer = {answer} setMode={setMode}/>
      break
      default:
      content = <div>error</div>
      break;
  }
  
  return (
    <div className='quiz'>
      {content}
    </div>
  )
}

export default Quiz