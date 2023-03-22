import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink} from 'react-router-dom'
import { toggleIsLoggedIn } from '../redux/logSlice';

function Navigation() {
    const isLoggedIn = useSelector((state) => state.log.isLoggedIn);
    const dispatch = useDispatch();

    let menu
    if (isLoggedIn){
        menu = (<div className='navigation'>
                    <NavLink className='NavLink' to="/">Home</NavLink>
                    <NavLink className='NavLink' to="/quiz">Quiz</NavLink>
                    <NavLink className='NavLink' to="/grammar">Grammar</NavLink>
                    {/* <NavLink to="account" style={{display: "block"}}>Account</NavLink> */}
                    <button onClick={() => {}}>Account</button>
                </div>)
    } else {
        menu = (<div className='navigation'>
            <NavLink className='NavLink' to="/">Home</NavLink>
            <NavLink className='NavLink' to="/quiz">Quiz</NavLink>
            <NavLink className='NavLink' to="/grammar">Grammar</NavLink>
            {/* <NavLink to="signIn" style={{display: "block"}}>Sign In</NavLink> */}
            {/* <NavLink to="signUp" style={{display: "block"}}>Sign Up</NavLink> */}
            <button onClick={() => dispatch(toggleIsLoggedIn())}>Sign In</button>
            <button onClick={() => {}}>Sign Up</button>
        </div>)
    }
  return menu
}

export default Navigation