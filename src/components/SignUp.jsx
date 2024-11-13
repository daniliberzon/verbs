import { Box, Button, Heading, Input, Text } from '@chakra-ui/react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase-config';
import { toggleIsLoggedIn } from '../redux/logSlice';
import Navigation from './Navigation';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailErr, setEmailErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const checkEmail = () => {
        let newEmailError = '';
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))
            newEmailError = 'Invalid email address';
        setEmailErr(newEmailError);
    }

    const checkPassword = () => {
        let newPasswordError = '';
        if (password.length < 6)
        newPasswordError = 'Password must be at least 6 characters long';
        setPasswordErr(newPasswordError);
    }

    const handleRegistration = () => {
        if (!emailErr && !passwordErr)
            registration(email, password);
    }

    const registration = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                dispatch(toggleIsLoggedIn());
                navigate("/");
            })
            .catch(e => {
                console.log(e);
            })
    }

  return (
    <div>
        <Navigation />
        <Box align={'center'} mt={5}>
            <Heading as='h2'>Create a new account</Heading>
            <Input w='50%' mt={5} ml={2} mb={2} borderWidth='1px' borderColor='gray' borderRadius='10px'
                    type={'email'} placeholder={'Type your email'} value={email}
                    onChange={e => setEmail(e.target.value)} onBlur={checkEmail}/>
            <Text color='red'>{emailErr}</Text>

            <Input w='50%' mt={2} ml={2} mb={2} borderWidth='1px' borderColor='gray' borderRadius='10px'
                    type={'password'} placeholder={'Type your password'} value={password}
                    onChange={e => setPassword(e.target.value)} onBlur={checkPassword}/>
            <Text color='red'>{passwordErr}</Text>

            <Button display={'block'} ml={5} mr={5} mt={5} background={'#3EB489'} color={'black'} borderRadius='10px'
                    onClick={() => handleRegistration(email, password)}>Registration</Button>
        </Box>
    </div>
  )
}

export default SignUp;
