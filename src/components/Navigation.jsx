import { signOut } from 'firebase/auth';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase-config';
import { toggleIsLoggedIn } from '../redux/logSlice';

function Navigation() {
    let menu;
    const isLoggedIn = useSelector((state) => state.log.isLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userLogout = async () => {
        await signOut(auth)
            .then(() => {
                console.log("Logged Out");
                dispatch(toggleIsLoggedIn());
                navigate("/");
                alert("Logged Out!");
            })
            .catch(e => console.log(e))
    }

    if (isLoggedIn){
        menu = (<div className='navigation'>
                    <NavLink className='NavLink' to="/">Home</NavLink>
                    <NavLink className='NavLink' to="/quiz">Quiz</NavLink>
                    <NavLink className='NavLink' to="/grammar">Grammar</NavLink>
                    {/* <NavLink to="account" style={{display: "block"}}>Account</NavLink> */}
                    <button onClick={() => {}}>Account</button>
                    <button onClick={() => userLogout()}>Log Out</button>
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