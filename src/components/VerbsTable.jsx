import React, { useState, useRef, useEffect } from 'react';
import { decodeForm } from '../utils/utils';

function VerbsTable(props) {
  let  content = 
        <div>
          <div className='backButton' onClick={props.changePage(0)}>Back</div>
          <table>
            <thead>
              <tr>
                <th>{props.columns[0][1]}</th>
                <th>Infinitive</th>
                <th>{props.columns[2][1]}</th>
                <th>{props.columns[3][1]}</th>
                <th>{decodeForm(props.columns[4][1])}</th>
                <th>{decodeForm(props.columns[8][1])}</th>
              </tr>
            </thead>
            <tbody>
              {props.data.map((elem,index) =>{return(
                <tr key={index}>
                  <td>{elem[0]}</td>
                  <td className='rtl'><a href={elem[1]} target="_blank">{elem[31]}</a></td>
                  <td>{elem[2]}</td>
                  <td>{elem[3]}</td>
                  <td className='rtl'>{elem[4]}</td>
                  <td className='rtl'>{elem[8]}</td>
                </tr>
              )})}
            </tbody>
        </table>
    </div>
  return (
    <div className='verbsTable'>
        {content}
    </div>
  )
}

export default VerbsTable