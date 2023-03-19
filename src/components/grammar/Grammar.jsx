import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { menuStructure } from '../../utils/constantsGrammar';
import GrammarCard from './GrammarCard';
import GrammarMenuItem from './GrammarMenuItem';

function Grammar() {
  const location = useLocation();
  const [tense, setTense] = useState();
  const [binyan, setBinyan] = useState();
  const [gizra, setGizra] = useState();
  
  const changeTense = (newTense) => {
    setTense(newTense);
    setBinyan();
    setGizra();
  }

  const changeBinyan = (newBinyan) => {
    setBinyan(newBinyan);
    setGizra();
  }
  if (location.state) {
    const currentTense = location.state.tense;
    const currentBinyan = location.state.binyan;
    const currentGizra = location.state.gizra;

    return (
      <GrammarCard tense={currentTense} binyan={currentBinyan} gizra={currentGizra} />
    )
  }
  if (location.search) {
    const form = location.search.split('&');
    const currentTense = decodeURI(form[0].slice(1));
    const currentBinyan = decodeURI(form[1]);
    const currentGizra = decodeURI(form[2]);
    if (currentTense && currentBinyan && currentGizra){
    return (
      <GrammarCard tense={currentTense} binyan={currentBinyan} gizra={currentGizra} />
    )
  }}



  else
    return (
      <div>
        <Box bg="green" w="100%" h="60px" color="white">
          <GrammarMenuItem
            stateName="Tense"
            stateValue={tense}
            changeState={changeTense}
            elements={Object.keys(menuStructure)} />

          <GrammarMenuItem
            stateName="Binyan"
            stateValue={binyan}
            changeState={changeBinyan}
            elements={tense ? Object.keys(menuStructure[tense]) : []}
            isDisabled={!tense} />

          <GrammarMenuItem
            stateName="Gizra"
            stateValue={gizra}
            changeState={setGizra}
            elements={binyan ? Object.values(menuStructure[tense][binyan]) : []}
            isDisabled={!binyan}
          />
        </Box>
        {tense && binyan && gizra ? <GrammarCard tense={tense} binyan={binyan} gizra={gizra}/> : <></>}
      </div>

      
    )
}

export default Grammar;
