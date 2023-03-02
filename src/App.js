import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import dataCSV from './utils/data.csv'
import columnsCSV from './utils/columns.csv'
import { readString } from 'react-papaparse';
import VerbsTable from './components/VerbsTable';
import Quiz from './components/Quiz';
import { tenses, binyanim } from './utils/utils';

function App() {
  const [data, setData]  = useState()
  const [columns, setColumns]  = useState()
  const [page, setPage] = useState(0)
  const [chosenTenses, setChosenTenses] = useState({})
  const [chosenBinyanim, setChosenBinyanim] = useState({})

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

  function handleClickTense(e){
      let chosen = chosenTenses[e.target.id]
      setChosenTenses({
      ...chosenTenses,
      [e.target.id] : chosenTenses[e.target.id]?0:1
      })
      if (window.orientation>=0){
        if(chosen){
          e.target.style.background = 'white'
        } else {
          e.target.style.background = 'lightseagreen'
        }
      }
    }
  function handleClickBinyan(e){
    let chosen = chosenBinyanim[e.target.id]
    setChosenBinyanim({
      ...chosenBinyanim,
      [e.target.id] : chosen?0:1
      })
      if(window.orientation>=0){
        if(chosen){
          e.target.style.background = 'white'
        } else {
          e.target.style.background = 'lightseagreen'
        }
      }
    }
  

  const menu = <div className='menu'>
                  <div className='settings'>
                    <div className='settingsHeader'>Choose test settings:</div>
                    <div className='set tenses'>
                      <div>Tenses:</div>
                        {tenses.map((x,i)=><div className={'settingOption tense'+`${chosenTenses[i]?' chosenSetting':''}`} key ={i} id={i} onClick={handleClickTense}>{x}</div>)}
                    </div>
                    <div className='set binyanim'>
                      <div>Binyanim:</div>
                        {binyanim.map((x,i)=><div className={'settingOption binyan'+`${chosenBinyanim[i]?' chosenSetting':''}`} key={i} id={i} onClick={handleClickBinyan}>{x}</div>)}
                    </div>
                  </div>
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
          content = <Quiz data={data} columns={columns} changePage={changePage} chosenBinyanim={chosenBinyanim} chosenTenses={chosenTenses}/>
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