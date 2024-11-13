import { signOut, getAuth,onAuthStateChanged } from 'firebase/auth';
import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase-config';
import { setIsLoggedIn} from '../redux/logSlice';

function Navigation() {
    let menu;
    const isLoggedIn = useSelector((state) => state.log.isLoggedIn);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const userLogout = async () => {
        await signOut(auth)
            .then(() => {
                dispatch(setIsLoggedIn(0))
                navigate("/");
            })
            .catch(e => console.log(e))
    }
    useEffect(()=>{
        if(isLoggedIn===-1){
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setIsLoggedIn(1))
            } else {
                dispatch(setIsLoggedIn(0))
            }})
        }},[])
    if (isLoggedIn===1){
        menu = (<div className='navigation'>
                    <NavLink className='NavLink' to="/">Home</NavLink>
                    <NavLink className='NavLink' to="/quiz">Quiz</NavLink>
                    <NavLink className='NavLink' to="/grammar">Grammar</NavLink>
                    <NavLink className='NavLink' to="/account">Account</NavLink>
                    <button className='logout' onClick={() => userLogout()}>Log Out</button>
                </div>)
    } else {
        menu = (<div className='navigation'>
                    <NavLink className='NavLink' to="/">Home</NavLink>
                    <NavLink className='NavLink' to="/quiz">Quiz</NavLink>
                    <NavLink className='NavLink' to="/grammar">Grammar</NavLink>
                    <NavLink className='NavLink' to="/signup">Create Account</NavLink>
                    <NavLink className='NavLink' to="/signin">Sign In</NavLink>
        </div>)
    }
  return menu;
}

export default Navigation;