import React from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

function GrammarMenuItem(props) {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} color="darkslategrey" m={2} isDisabled={props.isDisabled}>
        {props.stateValue ? props.stateValue : `Choose ${props.stateName}`}
      </MenuButton>
      <MenuList color="darkslategrey">
        {props.elements.map((key, index) => 
          <MenuItem key={index} onClick={() => props.changeState(key)}>{key}</MenuItem>)
        }
      </MenuList>
    </Menu>
  )
}

export default GrammarMenuItem;
