import { Box } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
  return (
    <div>
      <Box>
        This is a start page!
      </Box>
      <Box w="100%" align="center" fontSize="large">
        <Link to="quiz">Quiz</Link>
        <Link to="account" style={{display: "block"}}>Account</Link>
        <Link to="grammar">Grammar</Link>
      </Box>

    </div>
  )
}

export default StartPage;
