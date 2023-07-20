import React from "react"

import "./styles/LoginPage.css"
import Login from "./Login"
import SignUp from "./SignUp"


const LoginPage = () => {
  return (
    <>
      <Login />
       <div className="text-ou">
            <h3>Ou</h3>
        </div>
     <SignUp />
    </>
  )
}

export default LoginPage
