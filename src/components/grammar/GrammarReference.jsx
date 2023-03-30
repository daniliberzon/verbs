import React from 'react';
import { Box, Heading, ListItem, SimpleGrid, UnorderedList, Image, useMediaQuery } from '@chakra-ui/react';
import ROOT_EXAMPLE_IMG from '../../img/root-example.svg';
import GRONIYOT_IMG from "../../img/groniyot.svg";

function GrammarReference() {
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)');

  let numCol = isLargerThan900 ? 2 : 1;

  return (
    <SimpleGrid columns={numCol} spacing={10} mb={10} ml={10} mr={10}>
      <Box h="100%" bg="#3EB489" borderRadius="20" align="center">
        <Heading pt={2} ml={2} mr={2}>Root (שֹׁרֶשׁ) and Gizra (גִּזְרָה)</Heading>
        <Box w="90%" bg="white" mt={4} mb={2} opacity="90%" borderRadius="20">
          <p><i>Roots</i> are "skeletons" of consonants from which the typical Hebrew word is built. Every verb has a root, and most of verbs are based on <i>three-letter roots:</i></p>
          <Image src={ROOT_EXAMPLE_IMG} alt="root example" mt={2} mb={2} />
          <p>Certain phonological qualities of the verb's root lead to significant peculiarities in the verb's inflections. 
            This alterations (called <i>gizra (גִּזְרָה)</i>, meaning "form") are definied by the presence of certain letters composing the root, for example, <i>guttural letters (אותיות גרוניות)</i>:</p>
          <Image src={GRONIYOT_IMG} alt="groniyot" mt={2} mb={2} />
          <p>For three-letter roots there is a specific designation: ..."פ means the 1st letter of the root, ..."ע &ndash; the 2nd letter and ..."ל &ndash; the 3rd letter.</p>

        </Box>
      </Box>

      <Box h="100%" bg="#3EB489" borderRadius="20" align="center">
        <Heading pt={2} ml={2} mr={2}>Binyan (בִּנְיָן)</Heading>
        <Box w="90%" bg="white" mt={4} mb={4} opacity="90%" borderRadius="20">
          <p>Literally meaning <i>"construction"</i>, a <em>binyan</em> is the base pattern of a verb in Hebrew. <em>Binyan</em> is mounted on a root skeleton of the word.</p>
          <p>Every verb must adhere to one of <i>the seven patterns (binyanim)</i>:</p>
          <UnorderedList align="left" ml={10} mt={2} mb={2}>
            <ListItem>PA'AL (פָּעַל),</ListItem>
            <ListItem>PI'EL (פִּעֵל),</ListItem>
            <ListItem>HIF'IL (הִפְעִיל),</ListItem>
            <ListItem>HITPA'EL (הִתְפַּעֵל),</ListItem>
            <ListItem>NIF'AL (נִפְעַל),</ListItem>
            <ListItem>PU'AL (פֻּעַל),</ListItem>
            <ListItem>HUF'AL (הֻפְעַל).</ListItem>
          </UnorderedList>
          <p>These names are a graphic representation of the past tense form of each binyan. As it's a grammar reference for beginners, we'll focus on the first five of them.</p>
        </Box>
      </Box>
    </SimpleGrid>
  )
}

export default GrammarReference;
