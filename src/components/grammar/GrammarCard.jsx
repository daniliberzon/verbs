import { Image, Box, Heading, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { grammarTables } from '../../utils/constantsGrammar';
import GrammarCardAdditionalInfo from './GrammarCardAdditionalInfo';

function GrammarCard(props) {
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)');
  let tableWidth = isLargerThan900 ? "60%" : "80%";

  return (
    <Box align="center">
      <Heading as="h1" m={7} color="darkslategrey">
        Tense: {props.tense}, Binyan: {props.binyan}, Gizra: {props.gizra}
      </Heading>
      <GrammarCardAdditionalInfo binyan={props.binyan} m={2} />
      <Image w={tableWidth} src={grammarTables[`${props.tense}_${props.binyan}_${props.gizra}`]} alt="table" />
    </Box>
  )
}

export default GrammarCard;
