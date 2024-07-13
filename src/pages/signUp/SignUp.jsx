import React, { useState } from 'react'
import Form from "./Form"
import Login from "./Login"

const SignUp = () => {
    const [isSuccess, setIsSuccess] = useState(false)
    const [user, setUser] = useState(null)
  return (
    <div>
        {!isSuccess && <Form setIsSuccess={setIsSuccess}/>}
        {isSuccess && <Login setIsSuccess={setIsSuccess} setUser={setUser}/>} 
    </div>
  )
}

export default SignUp
