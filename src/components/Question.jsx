import React, { useState } from 'react'
import { decodeForm } from '../utils/utils'

function Question(props) {
    function handleClick(e){
        if (e.target.className === 'option'){
          props.setChosen(e.target.id)
        }
        if (e.target.className === 'submitButton'){
          props.setMode(2)
        }
      }
    function handleChange(e){
        props.setAnswer(e.target.value)
    }

  return (
    <div onClick={handleClick}>
      <p className='verb'>{props.data[props.rightAnswer][59]}</p>
        <div className='questionOptions'>
            <div className='question'>Choose translation:</div>
            {props.options.map((x) =>{
                let className = x==props.chosen ? 'option chosen' : 'option'
                return(
                    <div className={className}  id={x} key={x}>{props.data[x][3]}</div>
                )
            })}
        </div>
        <div className='question'>Type form: {decodeForm(props.columns[props.form][1])}</div>
        <input className='answerInput' id='answerInput' dir='rtl' onChange={handleChange} value={props.answer} autocomplete='off'></input>
        <div className='submitButton'>Submit</div>
    </div>
  )
}
export default Question