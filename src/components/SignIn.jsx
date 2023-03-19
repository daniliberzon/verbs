import React from 'react'
import { useLocation } from 'react-router-dom'

function SignIn() {
    const location = useLocation()

  return (
    <button>Sign In</button>
  )
}

export default SignIn