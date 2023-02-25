import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import dataCSV from './utils/data.csv'
import columnsCSV from './utils/columns.csv'
import { readString } from 'react-papaparse';
import VerbsTable from './components/VerbsTable';
import Quiz from './components/Quiz';

function App() {
  const [data, setData]  = useState()
  const [columns, setColumns]  = useState()

  useEffect(() => {
    const papaConfig1 = {
      complete: (results, file) => {
          setData(results.data)
      },
      download: true,
      error: (error, file) => {
          console.log('Error while parsing:', error, file);
          return []
          },
      }
      const papaConfig2 = {
        complete: (results, file) => {
            setColumns(results.data)
        },
        download: true,
        error: (error, file) => {
            console.log('Error while parsing:', error, file);
            return []
            },
        }
    readString(dataCSV, papaConfig1)
    readString(columnsCSV, papaConfig2)
  },[]);
  if (data && columns){
    return (
    <div className="App">
      {/* <VerbsTable data={data} columns={columns}/> */}
      <Quiz data={data} columns={columns}/>
    </div>
    )} else {
      return (
        <div>Loading...</div>
      )
    }
}

export default App;