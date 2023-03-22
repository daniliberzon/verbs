import { Button, Input } from '@chakra-ui/react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase-config';
import { setUserEmail, setUserPassword, toggleIsLoggedIn } from '../redux/logSlice';
import Navigation from './Navigation';

function SignUp() {
    // should they really be stored in Redux Store?
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const registration = async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                dispatch(toggleIsLoggedIn());
                dispatch(setUserEmail(email));
                dispatch(setUserPassword(password));
                navigate("/");
            })
            .catch(e => {
                console.log(e);
            })
    }

  return (
    <div>
        <Navigation />
        <Input mt={5} ml={2} type={'text'} placeholder={'Type your email'} value={email}
                    onChange={e => setEmail(e.target.value)}/>
        <Input mt={2} mb={5} ml={2} type={'password'} placeholder={'Type your password'} value={password}
                    onChange={e => setPassword(e.target.value)}/>
        <Button ml={5} mr={5} onClick={() => registration(email, password)}>Registration</Button>
    </div>
  )
}

export default SignUp;
