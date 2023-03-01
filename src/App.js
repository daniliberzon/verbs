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
  const [page, setPage] = useState(0)

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
  function changePage(n){
    return (()=>setPage(n))
  }

  const menu = <div className='menu'>
                  <div className='menuButton' onClick={changePage(2)}>Start Test</div>
                  <div className='menuButton' onClick={changePage(1)}>Vocabulary</div>
              </div>
  if (data && columns){
    let content
          { {switch (page) {
        case 0:
          content = menu
          break;
        case 1:
          content = <VerbsTable data={data} columns={columns} changePage={changePage}/>
          break
        case 2:
          content = <Quiz data={data} columns={columns} changePage={changePage}/>
          break
        default:
          content = menu
          break;
      }} }

    return (
    <div className="App">
      {content}
    </div>
    )} else {
      return (
        <div>Loading...</div>
      )
    }
}

export default App;