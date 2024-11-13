import { Box, Heading, SimpleGrid, useMediaQuery } from '@chakra-ui/react';
import MoveTo from 'moveto';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { menuStructure } from '../../utils/constantsGrammar';
import Navigation from '../Navigation';
import GrammarCard from './GrammarCard';
import GrammarMenuItem from './GrammarMenuItem';
import GrammarReference from './GrammarReference';

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

  const [isLargerThan700] = useMediaQuery('(min-width: 700px)');
  let numColMenu = isLargerThan700 ? 3 : 1;
  let menuHeight = isLargerThan700 ? "60px" : "180px";

  useEffect(() => {
    const moveTo = new MoveTo({duration: 1000});
    const grammarTable = document.getElementById("grammarTable");
    if (gizra)
      moveTo.move(grammarTable);
  }, [gizra]);

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
      <>
        <Navigation />

        <Box w="100%" mt={2} mb={5} ml={2} pr={2}>
          <Heading mb={2}>Grammar reference</Heading>
          <p>They say that verb conjugation is the hardest topic for an aspiring Hebrew-learner.
            The reason could be that there are a lot of exceptions that may affect spelling and vocalization of different forms of Hebrew verbs.</p>
          <p>On this page we'll highlight only the key points which are important for understanding of basic rules of verb conjugation in Hebrew.
            Mind that it's just a short grammar reference. For better understanding of the topic consult books on Hebrew Grammar.
          </p>
        </Box>

        <GrammarReference />

        <Box id="grammarTable" h="100vh">
          <Box bg="#3EB489" w="100%" minH={menuHeight} color="white" align="center">
            <SimpleGrid columns={numColMenu} ml={10} mr={10}>
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
            </SimpleGrid>

          </Box>
          {tense && binyan && gizra ? <GrammarCard tense={tense} binyan={binyan} gizra={gizra}/> : <></>}
        </Box>
      </> 
    )
}

export default Grammar;
