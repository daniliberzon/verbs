import { Box, Button, Heading, Input, Text } from '@chakra-ui/react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase-config';
import { setIsLoggedIn } from '../redux/logSlice';
import Navigation from './Navigation';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginErr, setLoginErr] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
    
  const userLogin = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        dispatch(setIsLoggedIn(1))
        navigate("/");
      })
      .catch(e => {
        console.log(e);
        setLoginErr('Incorrect login or password');
      })
    }

return (
  <>
    <Navigation />
    <Box align={'center'} mt={5}>
      <Heading as='h2'>Sign in</Heading>
      <Input w='50%' mt={5} ml={2} mb={2} borderWidth='1px' borderColor='gray' borderRadius='10px'
                    type={'text'} placeholder={'Type your email'} value={email}
                    onChange={e => setEmail(e.target.value)}/>
      <Input w='50%' mt={5} ml={2} mb={2} borderWidth='1px' borderColor='gray' borderRadius='10px'
                    type={'password'} placeholder={'Type your password'} value={password}
                    onChange={e => setPassword(e.target.value)}/>
      <Text color='red'>{loginErr}</Text>
      <Button w='150px' display={'block'} ml={5} mr={5} mt={5} background={'#3EB489'} color={'black'} borderRadius='10px'
                    onClick={() => userLogin(email, password)}>Sign In</Button>
    </Box>
    </>
  )
}

export default SignIn;