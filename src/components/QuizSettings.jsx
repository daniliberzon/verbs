import React, { useState, useRef, useEffect } from 'react';
import dataCSV from '../utils/data.csv'
import columnsCSV from '../utils/columns.csv'
import { readString } from 'react-papaparse';
import Quiz from './Quiz';
import { tenses, binyanim } from '../utils/utils';
import Navigation from './Navigation';
import { Box, Button, Grid, Heading } from '@chakra-ui/react';

function QuizSettings() {
  const [data, setData]  = useState()
  const [columns, setColumns]  = useState()
  const [page, setPage] = useState(0)
  const [chosenTenses, setChosenTenses] = useState({})
  const [chosenBinyanim, setChosenBinyanim] = useState({})
  let dataCSVstored

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
    dataCSVstored = localStorage.getItem("dataCSV")
    if (dataCSVstored){
      setData(JSON.parse(dataCSVstored))
    } else {
      readString(dataCSV, papaConfig1)
    }
    readString(columnsCSV, papaConfig2)
  },[]);
  function changePage(n){
    return (()=>setPage(n))
  }

  function createHandleClick(state, setState){
    return(
      function handleClick(e){
        let chosen = state[e.target.id]
        setState({
          ...state,
          [e.target.id] : chosen?0:1
          })
          if(window.orientation>=0){
            if(chosen){
              e.target.style.background = 'white'
            } else {
              e.target.style.background = 'lightseagreen'
  }}})}
  

  const menu = <div className='menu'>
                  <Heading as="h1" mb={2} mt={2}>Quiz setup</Heading>
                  <div className='menuText'>
                  Customize your Grammar Quiz by selecting the specific tenses and binyans you want to be tested on. You can choose multiple options for each category. If no options are selected, the quiz will cover all available options. To learn more about binyans, check out our Grammar section.
                  </div>
                  <Box as="section" className='settings' boxShadow="xl" borderRadius="md">
                    <Heading as="h2" size="md" align="center" w="100%">Choose test settings</Heading>
                    <div className='set tenses'>
                      <Heading size="sm" mb={2} color="darkgreen">Tenses:</Heading>
                      <Grid gridTemplateColumns='50% 50%'>
                        {tenses.map((x,i)=><div className={'settingOption tense'+`${chosenTenses[i]?' chosenSetting':''}`} key ={i} id={i} onClick={createHandleClick(chosenTenses,setChosenTenses)}>{x}</div>)}
                      </Grid>
                    </div>
                    <div className='set binyanim'>
                      <Heading size="sm" mb={2} color="darkgreen">Binyanim:</Heading>
                      <Grid gridTemplateColumns='50% 50%'>
                        {binyanim.map((x,i)=><div className={'settingOption binyan'+`${chosenBinyanim[i]?' chosenSetting':''}`} key={i} id={i} onClick={createHandleClick(chosenBinyanim,setChosenBinyanim)}>{x}</div>)}
                      </Grid> 
                    </div>
                  </Box>
                  <Button className='menuButton'
                    onClick={changePage(1)}
                    variant="solid"
                  >
                    Start Test</Button>
              </div>
  if (data && columns){
    if(!dataCSVstored){
      localStorage.setItem("dataCSV", JSON.stringify(data))
    }
    let content
          { {switch (page) {
        case 0:
          content = menu
          break;
        case 1:
          content = <Quiz data={data} columns={columns} changePage={changePage} chosenBinyanim={chosenBinyanim} chosenTenses={chosenTenses}/>
          break
        default:
          content = menu
          break;
      }} }

    return (
    <Box className='page'>
      <Navigation />
      <div className="quizSettings">
        {content}
      </div>
    </Box>
    )} else {
      return (
        <div>Loading...</div>
      )
    }
}

export default QuizSettings