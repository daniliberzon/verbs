import React, { useState, useRef, useEffect } from 'react';

function VerbsTable(props) {
  let  content = 
        <div>
          <table>
            <thead>
              <tr>
                {props.columns.map((head, headID) => <th key={headID} >{head}</th>)}
              </tr>
            </thead>
            <tbody>
              {props.data.map((elem,index) =>{return(
                <tr key={index}>
                  {elem.map((x,i)=>{return(<td key={i}>{x}</td>)})}
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