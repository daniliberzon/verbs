import { Input } from '@chakra-ui/react'
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

    function handleKeyDown(e) {
      if (e.key === 'Enter') {
        if (e.target.className === 'option'){
          props.setChosen(e.target.id)
        }
        if (e.target.className === 'submitButton'){
          props.setMode(2)
        }
      }
    }

  return (
    <div onClick={handleClick} onKeyDown={handleKeyDown}>
      <p className='verb'>{props.data[props.rightAnswer][31]}</p>
        <div className='questionOptions'>
            <div className='question'>Choose translation:</div>
            {props.options.map((x) =>{
                let className = x==props.chosen ? 'option chosen' : 'option'
                return(
                    <div className={className} tabIndex="0" id={x} key={x}>{props.data[x][3]}</div>
                )
            })}
        </div>
        <div className='question'>Type form: {decodeForm(props.columns[props.form][1])}</div>
        <Input w="50%" fontSize="20px" borderColor="black" id='answerInput' dir='rtl' onChange={handleChange} value={props.answer} autoComplete='off' />
        <div className='submitButton' tabIndex="0">Submit</div>
    </div>
  )
}
export default Question