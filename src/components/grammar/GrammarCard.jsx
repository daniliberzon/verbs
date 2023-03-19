import { Image, Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { grammarTables } from '../../utils/constantsGrammar';

function GrammarCard(props) {

  return (
    <Box align="center">
      <Heading as="h1" m={10} color="blue">
        Tense: {props.tense}, Binyan: {props.binyan}, Gizra: {props.gizra}
      </Heading>
      <Image w="80%" src={grammarTables[`${props.tense}_${props.binyan}_${props.gizra}`]} alt="table" m={5}/>
    </Box>
  )
}

export default GrammarCard;
