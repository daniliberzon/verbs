import React from 'react'
import { Link , NavLink} from 'react-router-dom'

function Navigation(props) {
    function handleSignIn(){
        props.setIsLoggedIn(1)
    }
    function handleSignOut(){
        props.setIsLoggedIn(0)
    }
    let menu
    if(props.isLoggedIn){
        menu = (<div className='navigation'>
                    <NavLink className='NavLink' to="/">Home</NavLink>
                    <NavLink className='NavLink' to="/quiz">Quiz</NavLink>
                    <NavLink className='NavLink' to="/grammar">Grammar</NavLink>
                    {/* <Link to="account" style={{display: "block"}}>Account</Link> */}
                    <button onClick={handleSignOut}>Account</button>
                </div>)
    } else {
        menu = (<div className='navigation'>
            <NavLink className='NavLink' to="/">Home</NavLink>
            <NavLink className='NavLink' to="/quiz">Quiz</NavLink>
            <NavLink className='NavLink' to="/grammar">Grammar</NavLink>
            {/* <Link to="signIn" style={{display: "block"}}>Sign In</Link> */}
            {/* <Link to="signUp" style={{display: "block"}}>Sign Up</Link> */}
            <button onClick={handleSignIn}>Sign In</button>
            <button onClick={handleSignIn}>Sign Up</button>
        </div>)
    }
  return menu
}

export default Navigation