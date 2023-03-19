import { Image, Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { pics } from '../../utils/constantsGrammar';

function GrammarCard(props) {

  const getTable = () => {
    if (props.tense === "Present") {
      return (
        <Image w="80%" src={pics[0]} alt="table" m={5}/>
      )
    } 
  }

  return (
    <Box align="center">
      <Heading as="h1" m={10} color="blue">
        Tense: {props.tense}, Binyan: {props.binyan}, Gizra: {props.gizra}
      </Heading>
      {getTable()}
    </Box>
  )
}

export default GrammarCard;
